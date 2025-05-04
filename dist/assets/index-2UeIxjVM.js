var Jp=a=>{throw TypeError(a)};var sf=(a,o,i)=>o.has(a)||Jp("Cannot "+i);var Q=(a,o,i)=>(sf(a,o,"read from private field"),i?i.call(a):o.get(a)),_t=(a,o,i)=>o.has(a)?Jp("Cannot add the same private member more than once"):o instanceof WeakSet?o.add(a):o.set(a,i),yt=(a,o,i,l)=>(sf(a,o,"write to private field"),l?l.call(a,i):o.set(a,i),i),Ee=(a,o,i)=>(sf(a,o,"access private method"),i);var hs=(a,o,i,l)=>({set _(c){yt(a,o,c,i)},get _(){return Q(a,o,l)}});function c1(a,o){for(var i=0;i<o.length;i++){const l=o[i];if(typeof l!="string"&&!Array.isArray(l)){for(const c in l)if(c!=="default"&&!(c in a)){const f=Object.getOwnPropertyDescriptor(l,c);f&&Object.defineProperty(a,c,f.get?f:{enumerable:!0,get:()=>l[c]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))l(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function i(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function l(c){if(c.ep)return;c.ep=!0;const f=i(c);fetch(c.href,f)}})();function ig(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var uf={exports:{}},Ni={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wp;function f1(){if(Wp)return Ni;Wp=1;var a=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function i(l,c,f){var d=null;if(f!==void 0&&(d=""+f),c.key!==void 0&&(d=""+c.key),"key"in c){f={};for(var g in c)g!=="key"&&(f[g]=c[g])}else f=c;return c=f.ref,{$$typeof:a,type:l,key:d,ref:c!==void 0?c:null,props:f}}return Ni.Fragment=o,Ni.jsx=i,Ni.jsxs=i,Ni}var Ip;function d1(){return Ip||(Ip=1,uf.exports=f1()),uf.exports}var _=d1(),cf={exports:{}},St={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t0;function h1(){if(t0)return St;t0=1;var a=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),b=Symbol.iterator;function E(R){return R===null||typeof R!="object"?null:(R=b&&R[b]||R["@@iterator"],typeof R=="function"?R:null)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,w={};function T(R,B,I){this.props=R,this.context=B,this.refs=w,this.updater=I||O}T.prototype.isReactComponent={},T.prototype.setState=function(R,B){if(typeof R!="object"&&typeof R!="function"&&R!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,R,B,"setState")},T.prototype.forceUpdate=function(R){this.updater.enqueueForceUpdate(this,R,"forceUpdate")};function C(){}C.prototype=T.prototype;function U(R,B,I){this.props=R,this.context=B,this.refs=w,this.updater=I||O}var D=U.prototype=new C;D.constructor=U,S(D,T.prototype),D.isPureReactComponent=!0;var Y=Array.isArray,P={H:null,A:null,T:null,S:null,V:null},F=Object.prototype.hasOwnProperty;function W(R,B,I,V,et,bt){return I=bt.ref,{$$typeof:a,type:R,key:B,ref:I!==void 0?I:null,props:bt}}function $(R,B){return W(R.type,B,void 0,void 0,void 0,R.props)}function tt(R){return typeof R=="object"&&R!==null&&R.$$typeof===a}function ft(R){var B={"=":"=0",":":"=2"};return"$"+R.replace(/[=:]/g,function(I){return B[I]})}var pt=/\/+/g;function dt(R,B){return typeof R=="object"&&R!==null&&R.key!=null?ft(""+R.key):B.toString(36)}function xt(){}function at(R){switch(R.status){case"fulfilled":return R.value;case"rejected":throw R.reason;default:switch(typeof R.status=="string"?R.then(xt,xt):(R.status="pending",R.then(function(B){R.status==="pending"&&(R.status="fulfilled",R.value=B)},function(B){R.status==="pending"&&(R.status="rejected",R.reason=B)})),R.status){case"fulfilled":return R.value;case"rejected":throw R.reason}}throw R}function ot(R,B,I,V,et){var bt=typeof R;(bt==="undefined"||bt==="boolean")&&(R=null);var nt=!1;if(R===null)nt=!0;else switch(bt){case"bigint":case"string":case"number":nt=!0;break;case"object":switch(R.$$typeof){case a:case o:nt=!0;break;case v:return nt=R._init,ot(nt(R._payload),B,I,V,et)}}if(nt)return et=et(R),nt=V===""?"."+dt(R,0):V,Y(et)?(I="",nt!=null&&(I=nt.replace(pt,"$&/")+"/"),ot(et,B,I,"",function(Xt){return Xt})):et!=null&&(tt(et)&&(et=$(et,I+(et.key==null||R&&R.key===et.key?"":(""+et.key).replace(pt,"$&/")+"/")+nt)),B.push(et)),1;nt=0;var wt=V===""?".":V+":";if(Y(R))for(var At=0;At<R.length;At++)V=R[At],bt=wt+dt(V,At),nt+=ot(V,B,I,bt,et);else if(At=E(R),typeof At=="function")for(R=At.call(R),At=0;!(V=R.next()).done;)V=V.value,bt=wt+dt(V,At++),nt+=ot(V,B,I,bt,et);else if(bt==="object"){if(typeof R.then=="function")return ot(at(R),B,I,V,et);throw B=String(R),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(R).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.")}return nt}function k(R,B,I){if(R==null)return R;var V=[],et=0;return ot(R,V,"","",function(bt){return B.call(I,bt,et++)}),V}function Z(R){if(R._status===-1){var B=R._result;B=B(),B.then(function(I){(R._status===0||R._status===-1)&&(R._status=1,R._result=I)},function(I){(R._status===0||R._status===-1)&&(R._status=2,R._result=I)}),R._status===-1&&(R._status=0,R._result=B)}if(R._status===1)return R._result.default;throw R._result}var q=typeof reportError=="function"?reportError:function(R){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var B=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof R=="object"&&R!==null&&typeof R.message=="string"?String(R.message):String(R),error:R});if(!window.dispatchEvent(B))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",R);return}console.error(R)};function rt(){}return St.Children={map:k,forEach:function(R,B,I){k(R,function(){B.apply(this,arguments)},I)},count:function(R){var B=0;return k(R,function(){B++}),B},toArray:function(R){return k(R,function(B){return B})||[]},only:function(R){if(!tt(R))throw Error("React.Children.only expected to receive a single React element child.");return R}},St.Component=T,St.Fragment=i,St.Profiler=c,St.PureComponent=U,St.StrictMode=l,St.Suspense=m,St.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,St.__COMPILER_RUNTIME={__proto__:null,c:function(R){return P.H.useMemoCache(R)}},St.cache=function(R){return function(){return R.apply(null,arguments)}},St.cloneElement=function(R,B,I){if(R==null)throw Error("The argument must be a React element, but you passed "+R+".");var V=S({},R.props),et=R.key,bt=void 0;if(B!=null)for(nt in B.ref!==void 0&&(bt=void 0),B.key!==void 0&&(et=""+B.key),B)!F.call(B,nt)||nt==="key"||nt==="__self"||nt==="__source"||nt==="ref"&&B.ref===void 0||(V[nt]=B[nt]);var nt=arguments.length-2;if(nt===1)V.children=I;else if(1<nt){for(var wt=Array(nt),At=0;At<nt;At++)wt[At]=arguments[At+2];V.children=wt}return W(R.type,et,void 0,void 0,bt,V)},St.createContext=function(R){return R={$$typeof:d,_currentValue:R,_currentValue2:R,_threadCount:0,Provider:null,Consumer:null},R.Provider=R,R.Consumer={$$typeof:f,_context:R},R},St.createElement=function(R,B,I){var V,et={},bt=null;if(B!=null)for(V in B.key!==void 0&&(bt=""+B.key),B)F.call(B,V)&&V!=="key"&&V!=="__self"&&V!=="__source"&&(et[V]=B[V]);var nt=arguments.length-2;if(nt===1)et.children=I;else if(1<nt){for(var wt=Array(nt),At=0;At<nt;At++)wt[At]=arguments[At+2];et.children=wt}if(R&&R.defaultProps)for(V in nt=R.defaultProps,nt)et[V]===void 0&&(et[V]=nt[V]);return W(R,bt,void 0,void 0,null,et)},St.createRef=function(){return{current:null}},St.forwardRef=function(R){return{$$typeof:g,render:R}},St.isValidElement=tt,St.lazy=function(R){return{$$typeof:v,_payload:{_status:-1,_result:R},_init:Z}},St.memo=function(R,B){return{$$typeof:h,type:R,compare:B===void 0?null:B}},St.startTransition=function(R){var B=P.T,I={};P.T=I;try{var V=R(),et=P.S;et!==null&&et(I,V),typeof V=="object"&&V!==null&&typeof V.then=="function"&&V.then(rt,q)}catch(bt){q(bt)}finally{P.T=B}},St.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},St.use=function(R){return P.H.use(R)},St.useActionState=function(R,B,I){return P.H.useActionState(R,B,I)},St.useCallback=function(R,B){return P.H.useCallback(R,B)},St.useContext=function(R){return P.H.useContext(R)},St.useDebugValue=function(){},St.useDeferredValue=function(R,B){return P.H.useDeferredValue(R,B)},St.useEffect=function(R,B,I){var V=P.H;if(typeof I=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return V.useEffect(R,B)},St.useId=function(){return P.H.useId()},St.useImperativeHandle=function(R,B,I){return P.H.useImperativeHandle(R,B,I)},St.useInsertionEffect=function(R,B){return P.H.useInsertionEffect(R,B)},St.useLayoutEffect=function(R,B){return P.H.useLayoutEffect(R,B)},St.useMemo=function(R,B){return P.H.useMemo(R,B)},St.useOptimistic=function(R,B){return P.H.useOptimistic(R,B)},St.useReducer=function(R,B,I){return P.H.useReducer(R,B,I)},St.useRef=function(R){return P.H.useRef(R)},St.useState=function(R){return P.H.useState(R)},St.useSyncExternalStore=function(R,B,I){return P.H.useSyncExternalStore(R,B,I)},St.useTransition=function(){return P.H.useTransition()},St.version="19.1.0",St}var e0;function Gf(){return e0||(e0=1,cf.exports=h1()),cf.exports}var x=Gf();const J=ig(x),m1=c1({__proto__:null,default:J},[x]);var ff={exports:{}},zi={},df={exports:{}},hf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n0;function p1(){return n0||(n0=1,function(a){function o(k,Z){var q=k.length;k.push(Z);t:for(;0<q;){var rt=q-1>>>1,R=k[rt];if(0<c(R,Z))k[rt]=Z,k[q]=R,q=rt;else break t}}function i(k){return k.length===0?null:k[0]}function l(k){if(k.length===0)return null;var Z=k[0],q=k.pop();if(q!==Z){k[0]=q;t:for(var rt=0,R=k.length,B=R>>>1;rt<B;){var I=2*(rt+1)-1,V=k[I],et=I+1,bt=k[et];if(0>c(V,q))et<R&&0>c(bt,V)?(k[rt]=bt,k[et]=q,rt=et):(k[rt]=V,k[I]=q,rt=I);else if(et<R&&0>c(bt,q))k[rt]=bt,k[et]=q,rt=et;else break t}}return Z}function c(k,Z){var q=k.sortIndex-Z.sortIndex;return q!==0?q:k.id-Z.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;a.unstable_now=function(){return f.now()}}else{var d=Date,g=d.now();a.unstable_now=function(){return d.now()-g}}var m=[],h=[],v=1,b=null,E=3,O=!1,S=!1,w=!1,T=!1,C=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function Y(k){for(var Z=i(h);Z!==null;){if(Z.callback===null)l(h);else if(Z.startTime<=k)l(h),Z.sortIndex=Z.expirationTime,o(m,Z);else break;Z=i(h)}}function P(k){if(w=!1,Y(k),!S)if(i(m)!==null)S=!0,F||(F=!0,dt());else{var Z=i(h);Z!==null&&ot(P,Z.startTime-k)}}var F=!1,W=-1,$=5,tt=-1;function ft(){return T?!0:!(a.unstable_now()-tt<$)}function pt(){if(T=!1,F){var k=a.unstable_now();tt=k;var Z=!0;try{t:{S=!1,w&&(w=!1,U(W),W=-1),O=!0;var q=E;try{e:{for(Y(k),b=i(m);b!==null&&!(b.expirationTime>k&&ft());){var rt=b.callback;if(typeof rt=="function"){b.callback=null,E=b.priorityLevel;var R=rt(b.expirationTime<=k);if(k=a.unstable_now(),typeof R=="function"){b.callback=R,Y(k),Z=!0;break e}b===i(m)&&l(m),Y(k)}else l(m);b=i(m)}if(b!==null)Z=!0;else{var B=i(h);B!==null&&ot(P,B.startTime-k),Z=!1}}break t}finally{b=null,E=q,O=!1}Z=void 0}}finally{Z?dt():F=!1}}}var dt;if(typeof D=="function")dt=function(){D(pt)};else if(typeof MessageChannel<"u"){var xt=new MessageChannel,at=xt.port2;xt.port1.onmessage=pt,dt=function(){at.postMessage(null)}}else dt=function(){C(pt,0)};function ot(k,Z){W=C(function(){k(a.unstable_now())},Z)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(k){k.callback=null},a.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<k?Math.floor(1e3/k):5},a.unstable_getCurrentPriorityLevel=function(){return E},a.unstable_next=function(k){switch(E){case 1:case 2:case 3:var Z=3;break;default:Z=E}var q=E;E=Z;try{return k()}finally{E=q}},a.unstable_requestPaint=function(){T=!0},a.unstable_runWithPriority=function(k,Z){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var q=E;E=k;try{return Z()}finally{E=q}},a.unstable_scheduleCallback=function(k,Z,q){var rt=a.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?rt+q:rt):q=rt,k){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=q+R,k={id:v++,callback:Z,priorityLevel:k,startTime:q,expirationTime:R,sortIndex:-1},q>rt?(k.sortIndex=q,o(h,k),i(m)===null&&k===i(h)&&(w?(U(W),W=-1):w=!0,ot(P,q-rt))):(k.sortIndex=R,o(m,k),S||O||(S=!0,F||(F=!0,dt()))),k},a.unstable_shouldYield=ft,a.unstable_wrapCallback=function(k){var Z=E;return function(){var q=E;E=Z;try{return k.apply(this,arguments)}finally{E=q}}}}(hf)),hf}var a0;function g1(){return a0||(a0=1,df.exports=p1()),df.exports}var mf={exports:{}},Te={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r0;function b1(){if(r0)return Te;r0=1;var a=Gf();function o(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)h+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var l={d:{f:i,r:function(){throw Error(o(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},c=Symbol.for("react.portal");function f(m,h,v){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:b==null?null:""+b,children:m,containerInfo:h,implementation:v}}var d=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Te.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,Te.createPortal=function(m,h){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(o(299));return f(m,h,null,v)},Te.flushSync=function(m){var h=d.T,v=l.p;try{if(d.T=null,l.p=2,m)return m()}finally{d.T=h,l.p=v,l.d.f()}},Te.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,l.d.C(m,h))},Te.prefetchDNS=function(m){typeof m=="string"&&l.d.D(m)},Te.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var v=h.as,b=g(v,h.crossOrigin),E=typeof h.integrity=="string"?h.integrity:void 0,O=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;v==="style"?l.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:b,integrity:E,fetchPriority:O}):v==="script"&&l.d.X(m,{crossOrigin:b,integrity:E,fetchPriority:O,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Te.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var v=g(h.as,h.crossOrigin);l.d.M(m,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&l.d.M(m)},Te.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var v=h.as,b=g(v,h.crossOrigin);l.d.L(m,v,{crossOrigin:b,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Te.preloadModule=function(m,h){if(typeof m=="string")if(h){var v=g(h.as,h.crossOrigin);l.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else l.d.m(m)},Te.requestFormReset=function(m){l.d.r(m)},Te.unstable_batchedUpdates=function(m,h){return m(h)},Te.useFormState=function(m,h,v){return d.H.useFormState(m,h,v)},Te.useFormStatus=function(){return d.H.useHostTransitionStatus()},Te.version="19.1.0",Te}var o0;function lg(){if(o0)return mf.exports;o0=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(o){console.error(o)}}return a(),mf.exports=b1(),mf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i0;function v1(){if(i0)return zi;i0=1;var a=g1(),o=Gf(),i=lg();function l(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function d(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function g(t){if(f(t)!==t)throw Error(l(188))}function m(t){var e=t.alternate;if(!e){if(e=f(t),e===null)throw Error(l(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var u=s.alternate;if(u===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===u.child){for(u=s.child;u;){if(u===n)return g(s),t;if(u===r)return g(s),e;u=u.sibling}throw Error(l(188))}if(n.return!==r.return)n=s,r=u;else{for(var p=!1,y=s.child;y;){if(y===n){p=!0,n=s,r=u;break}if(y===r){p=!0,r=s,n=u;break}y=y.sibling}if(!p){for(y=u.child;y;){if(y===n){p=!0,n=u,r=s;break}if(y===r){p=!0,r=u,n=s;break}y=y.sibling}if(!p)throw Error(l(189))}}if(n.alternate!==r)throw Error(l(190))}if(n.tag!==3)throw Error(l(188));return n.stateNode.current===n?t:e}function h(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=h(t),e!==null)return e;t=t.sibling}return null}var v=Object.assign,b=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),O=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),U=Symbol.for("react.consumer"),D=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),tt=Symbol.for("react.activity"),ft=Symbol.for("react.memo_cache_sentinel"),pt=Symbol.iterator;function dt(t){return t===null||typeof t!="object"?null:(t=pt&&t[pt]||t["@@iterator"],typeof t=="function"?t:null)}var xt=Symbol.for("react.client.reference");function at(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===xt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case S:return"Fragment";case T:return"Profiler";case w:return"StrictMode";case P:return"Suspense";case F:return"SuspenseList";case tt:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case O:return"Portal";case D:return(t.displayName||"Context")+".Provider";case U:return(t._context.displayName||"Context")+".Consumer";case Y:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case W:return e=t.displayName||null,e!==null?e:at(t.type)||"Memo";case $:e=t._payload,t=t._init;try{return at(t(e))}catch{}}return null}var ot=Array.isArray,k=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},rt=[],R=-1;function B(t){return{current:t}}function I(t){0>R||(t.current=rt[R],rt[R]=null,R--)}function V(t,e){R++,rt[R]=t.current,t.current=e}var et=B(null),bt=B(null),nt=B(null),wt=B(null);function At(t,e){switch(V(nt,e),V(bt,t),V(et,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Op(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Op(e),t=Ap(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}I(et),V(et,t)}function Xt(){I(et),I(bt),I(nt)}function pe(t){t.memoizedState!==null&&V(wt,t);var e=et.current,n=Ap(e,t.type);e!==n&&(V(bt,t),V(et,n))}function He(t){bt.current===t&&(I(et),I(bt)),wt.current===t&&(I(wt),Ci._currentValue=q)}var _e=Object.prototype.hasOwnProperty,on=a.unstable_scheduleCallback,Sn=a.unstable_cancelCallback,Uo=a.unstable_shouldYield,Tr=a.unstable_requestPaint,ue=a.unstable_now,Or=a.unstable_getCurrentPriorityLevel,ge=a.unstable_ImmediatePriority,Ii=a.unstable_UserBlockingPriority,Ar=a.unstable_NormalPriority,Ae=a.unstable_LowPriority,qn=a.unstable_IdlePriority,Ws=a.log,Is=a.unstable_setDisableYieldValue,En=null,Re=null;function ln(t){if(typeof Ws=="function"&&Is(t),Re&&typeof Re.setStrictMode=="function")try{Re.setStrictMode(En,t)}catch{}}var be=Math.clz32?Math.clz32:pa,ma=Math.log,tl=Math.LN2;function pa(t){return t>>>=0,t===0?32:31-(ma(t)/tl|0)|0}var Rr=256,Cr=4194304;function Tn(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ja(t,e,n){var r=t.pendingLanes;if(r===0)return 0;var s=0,u=t.suspendedLanes,p=t.pingedLanes;t=t.warmLanes;var y=r&134217727;return y!==0?(r=y&~u,r!==0?s=Tn(r):(p&=y,p!==0?s=Tn(p):n||(n=y&~t,n!==0&&(s=Tn(n))))):(y=r&~u,y!==0?s=Tn(y):p!==0?s=Tn(p):n||(n=r&~t,n!==0&&(s=Tn(n)))),s===0?0:e!==0&&e!==s&&(e&u)===0&&(u=s&-s,n=e&-e,u>=n||u===32&&(n&4194048)!==0)?e:s}function Wa(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Lo(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sn(){var t=Rr;return Rr<<=1,(Rr&4194048)===0&&(Rr=256),t}function el(){var t=Cr;return Cr<<=1,(Cr&62914560)===0&&(Cr=4194304),t}function Ho(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ga(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function nl(t,e,n,r,s,u){var p=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var y=t.entanglements,A=t.expirationTimes,j=t.hiddenUpdates;for(n=p&~n;0<n;){var G=31-be(n),K=1<<G;y[G]=0,A[G]=-1;var L=j[G];if(L!==null)for(j[G]=null,G=0;G<L.length;G++){var H=L[G];H!==null&&(H.lane&=-536870913)}n&=~K}r!==0&&vt(t,r,0),u!==0&&s===0&&t.tag!==0&&(t.suspendedLanes|=u&~(p&~e))}function vt(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var r=31-be(e);t.entangledLanes|=e,t.entanglements[r]=t.entanglements[r]|1073741824|n&4194090}function $t(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-be(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}function te(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function ve(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ia(){var t=Z.p;return t!==0?t:(t=window.event,t===void 0?32:Xp(t.type))}function ae(t,e){var n=Z.p;try{return Z.p=t,e()}finally{Z.p=n}}var Ft=Math.random().toString(36).slice(2),Jt="__reactFiber$"+Ft,Pt="__reactProps$"+Ft,ce="__reactContainer$"+Ft,Mr="__reactEvents$"+Ft,Bn="__reactListeners$"+Ft,dd="__reactHandles$"+Ft,hd="__reactResources$"+Ft,Po="__reactMarker$"+Ft;function tu(t){delete t[Jt],delete t[Pt],delete t[Mr],delete t[Bn],delete t[dd]}function kr(t){var e=t[Jt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ce]||n[Jt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=kp(t);t!==null;){if(n=t[Jt])return n;t=kp(t)}return e}t=n,n=t.parentNode}return null}function _r(t){if(t=t[Jt]||t[ce]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function qo(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(l(33))}function Dr(t){var e=t[hd];return e||(e=t[hd]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function fe(t){t[Po]=!0}var md=new Set,pd={};function tr(t,e){Nr(t,e),Nr(t+"Capture",e)}function Nr(t,e){for(pd[t]=e,t=0;t<e.length;t++)md.add(e[t])}var nv=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),gd={},bd={};function av(t){return _e.call(bd,t)?!0:_e.call(gd,t)?!1:nv.test(t)?bd[t]=!0:(gd[t]=!0,!1)}function al(t,e,n){if(av(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var r=e.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function rl(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function Yn(t,e,n,r){if(r===null)t.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+r)}}var eu,vd;function zr(t){if(eu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);eu=e&&e[1]||"",vd=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+eu+t+vd}var nu=!1;function au(t,e){if(!t||nu)return"";nu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(e){var K=function(){throw Error()};if(Object.defineProperty(K.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(K,[])}catch(H){var L=H}Reflect.construct(t,[],K)}else{try{K.call()}catch(H){L=H}t.call(K.prototype)}}else{try{throw Error()}catch(H){L=H}(K=t())&&typeof K.catch=="function"&&K.catch(function(){})}}catch(H){if(H&&L&&typeof H.stack=="string")return[H.stack,L.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=r.DetermineComponentFrameRoot(),p=u[0],y=u[1];if(p&&y){var A=p.split(`
`),j=y.split(`
`);for(s=r=0;r<A.length&&!A[r].includes("DetermineComponentFrameRoot");)r++;for(;s<j.length&&!j[s].includes("DetermineComponentFrameRoot");)s++;if(r===A.length||s===j.length)for(r=A.length-1,s=j.length-1;1<=r&&0<=s&&A[r]!==j[s];)s--;for(;1<=r&&0<=s;r--,s--)if(A[r]!==j[s]){if(r!==1||s!==1)do if(r--,s--,0>s||A[r]!==j[s]){var G=`
`+A[r].replace(" at new "," at ");return t.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",t.displayName)),G}while(1<=r&&0<=s);break}}}finally{nu=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?zr(n):""}function rv(t){switch(t.tag){case 26:case 27:case 5:return zr(t.type);case 16:return zr("Lazy");case 13:return zr("Suspense");case 19:return zr("SuspenseList");case 0:case 15:return au(t.type,!1);case 11:return au(t.type.render,!1);case 1:return au(t.type,!0);case 31:return zr("Activity");default:return""}}function yd(t){try{var e="";do e+=rv(t),t=t.return;while(t);return e}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function $e(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function xd(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ov(t){var e=xd(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,u=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(p){r=""+p,u.call(this,p)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(p){r=""+p},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ol(t){t._valueTracker||(t._valueTracker=ov(t))}function wd(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=xd(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function il(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var iv=/[\n"\\]/g;function Fe(t){return t.replace(iv,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function ru(t,e,n,r,s,u,p,y){t.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?t.type=p:t.removeAttribute("type"),e!=null?p==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+$e(e)):t.value!==""+$e(e)&&(t.value=""+$e(e)):p!=="submit"&&p!=="reset"||t.removeAttribute("value"),e!=null?ou(t,p,$e(e)):n!=null?ou(t,p,$e(n)):r!=null&&t.removeAttribute("value"),s==null&&u!=null&&(t.defaultChecked=!!u),s!=null&&(t.checked=s&&typeof s!="function"&&typeof s!="symbol"),y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.name=""+$e(y):t.removeAttribute("name")}function Sd(t,e,n,r,s,u,p,y){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),e!=null||n!=null){if(!(u!=="submit"&&u!=="reset"||e!=null))return;n=n!=null?""+$e(n):"",e=e!=null?""+$e(e):n,y||e===t.value||(t.value=e),t.defaultValue=e}r=r??s,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=y?t.checked:!!r,t.defaultChecked=!!r,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(t.name=p)}function ou(t,e,n){e==="number"&&il(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function jr(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+$e(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Ed(t,e,n){if(e!=null&&(e=""+$e(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+$e(n):""}function Td(t,e,n,r){if(e==null){if(r!=null){if(n!=null)throw Error(l(92));if(ot(r)){if(1<r.length)throw Error(l(93));r=r[0]}n=r}n==null&&(n=""),e=n}n=$e(e),t.defaultValue=n,r=t.textContent,r===n&&r!==""&&r!==null&&(t.value=r)}function Ur(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var lv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Od(t,e,n){var r=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?r?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":r?t.setProperty(e,n):typeof n!="number"||n===0||lv.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function Ad(t,e,n){if(e!=null&&typeof e!="object")throw Error(l(62));if(t=t.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||e!=null&&e.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var s in e)r=e[s],e.hasOwnProperty(s)&&n[s]!==r&&Od(t,s,r)}else for(var u in e)e.hasOwnProperty(u)&&Od(t,u,e[u])}function iu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),uv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ll(t){return uv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var lu=null;function su(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Lr=null,Hr=null;function Rd(t){var e=_r(t);if(e&&(t=e.stateNode)){var n=t[Pt]||null;t:switch(t=e.stateNode,e.type){case"input":if(ru(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Fe(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=r[Pt]||null;if(!s)throw Error(l(90));ru(r,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(e=0;e<n.length;e++)r=n[e],r.form===t.form&&wd(r)}break t;case"textarea":Ed(t,n.value,n.defaultValue);break t;case"select":e=n.value,e!=null&&jr(t,!!n.multiple,e,!1)}}}var uu=!1;function Cd(t,e,n){if(uu)return t(e,n);uu=!0;try{var r=t(e);return r}finally{if(uu=!1,(Lr!==null||Hr!==null)&&(Ql(),Lr&&(e=Lr,t=Hr,Hr=Lr=null,Rd(e),t)))for(e=0;e<t.length;e++)Rd(t[e])}}function Bo(t,e){var n=t.stateNode;if(n===null)return null;var r=n[Pt]||null;if(r===null)return null;n=r[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(l(231,e,typeof n));return n}var Gn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cu=!1;if(Gn)try{var Yo={};Object.defineProperty(Yo,"passive",{get:function(){cu=!0}}),window.addEventListener("test",Yo,Yo),window.removeEventListener("test",Yo,Yo)}catch{cu=!1}var ba=null,fu=null,sl=null;function Md(){if(sl)return sl;var t,e=fu,n=e.length,r,s="value"in ba?ba.value:ba.textContent,u=s.length;for(t=0;t<n&&e[t]===s[t];t++);var p=n-t;for(r=1;r<=p&&e[n-r]===s[u-r];r++);return sl=s.slice(t,1<r?1-r:void 0)}function ul(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function cl(){return!0}function kd(){return!1}function De(t){function e(n,r,s,u,p){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=u,this.target=p,this.currentTarget=null;for(var y in t)t.hasOwnProperty(y)&&(n=t[y],this[y]=n?n(u):u[y]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?cl:kd,this.isPropagationStopped=kd,this}return v(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=cl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=cl)},persist:function(){},isPersistent:cl}),e}var er={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fl=De(er),Go=v({},er,{view:0,detail:0}),cv=De(Go),du,hu,Vo,dl=v({},Go,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Vo&&(Vo&&t.type==="mousemove"?(du=t.screenX-Vo.screenX,hu=t.screenY-Vo.screenY):hu=du=0,Vo=t),du)},movementY:function(t){return"movementY"in t?t.movementY:hu}}),_d=De(dl),fv=v({},dl,{dataTransfer:0}),dv=De(fv),hv=v({},Go,{relatedTarget:0}),mu=De(hv),mv=v({},er,{animationName:0,elapsedTime:0,pseudoElement:0}),pv=De(mv),gv=v({},er,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),bv=De(gv),vv=v({},er,{data:0}),Dd=De(vv),yv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=wv[t])?!!e[t]:!1}function pu(){return Sv}var Ev=v({},Go,{key:function(t){if(t.key){var e=yv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ul(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?xv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pu,charCode:function(t){return t.type==="keypress"?ul(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ul(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Tv=De(Ev),Ov=v({},dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nd=De(Ov),Av=v({},Go,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pu}),Rv=De(Av),Cv=v({},er,{propertyName:0,elapsedTime:0,pseudoElement:0}),Mv=De(Cv),kv=v({},dl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),_v=De(kv),Dv=v({},er,{newState:0,oldState:0}),Nv=De(Dv),zv=[9,13,27,32],gu=Gn&&"CompositionEvent"in window,Xo=null;Gn&&"documentMode"in document&&(Xo=document.documentMode);var jv=Gn&&"TextEvent"in window&&!Xo,zd=Gn&&(!gu||Xo&&8<Xo&&11>=Xo),jd=" ",Ud=!1;function Ld(t,e){switch(t){case"keyup":return zv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Pr=!1;function Uv(t,e){switch(t){case"compositionend":return Hd(e);case"keypress":return e.which!==32?null:(Ud=!0,jd);case"textInput":return t=e.data,t===jd&&Ud?null:t;default:return null}}function Lv(t,e){if(Pr)return t==="compositionend"||!gu&&Ld(t,e)?(t=Md(),sl=fu=ba=null,Pr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return zd&&e.locale!=="ko"?null:e.data;default:return null}}var Hv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Hv[t.type]:e==="textarea"}function qd(t,e,n,r){Lr?Hr?Hr.push(r):Hr=[r]:Lr=r,e=Wl(e,"onChange"),0<e.length&&(n=new fl("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Qo=null,Zo=null;function Pv(t){xp(t,0)}function hl(t){var e=qo(t);if(wd(e))return t}function Bd(t,e){if(t==="change")return e}var Yd=!1;if(Gn){var bu;if(Gn){var vu="oninput"in document;if(!vu){var Gd=document.createElement("div");Gd.setAttribute("oninput","return;"),vu=typeof Gd.oninput=="function"}bu=vu}else bu=!1;Yd=bu&&(!document.documentMode||9<document.documentMode)}function Vd(){Qo&&(Qo.detachEvent("onpropertychange",Xd),Zo=Qo=null)}function Xd(t){if(t.propertyName==="value"&&hl(Zo)){var e=[];qd(e,Zo,t,su(t)),Cd(Pv,e)}}function qv(t,e,n){t==="focusin"?(Vd(),Qo=e,Zo=n,Qo.attachEvent("onpropertychange",Xd)):t==="focusout"&&Vd()}function Bv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return hl(Zo)}function Yv(t,e){if(t==="click")return hl(e)}function Gv(t,e){if(t==="input"||t==="change")return hl(e)}function Vv(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Pe=typeof Object.is=="function"?Object.is:Vv;function Ko(t,e){if(Pe(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!_e.call(e,s)||!Pe(t[s],e[s]))return!1}return!0}function Qd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Zd(t,e){var n=Qd(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=Qd(n)}}function Kd(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Kd(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function $d(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=il(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=il(t.document)}return e}function yu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Xv=Gn&&"documentMode"in document&&11>=document.documentMode,qr=null,xu=null,$o=null,wu=!1;function Fd(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wu||qr==null||qr!==il(r)||(r=qr,"selectionStart"in r&&yu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),$o&&Ko($o,r)||($o=r,r=Wl(xu,"onSelect"),0<r.length&&(e=new fl("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=qr)))}function nr(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Br={animationend:nr("Animation","AnimationEnd"),animationiteration:nr("Animation","AnimationIteration"),animationstart:nr("Animation","AnimationStart"),transitionrun:nr("Transition","TransitionRun"),transitionstart:nr("Transition","TransitionStart"),transitioncancel:nr("Transition","TransitionCancel"),transitionend:nr("Transition","TransitionEnd")},Su={},Jd={};Gn&&(Jd=document.createElement("div").style,"AnimationEvent"in window||(delete Br.animationend.animation,delete Br.animationiteration.animation,delete Br.animationstart.animation),"TransitionEvent"in window||delete Br.transitionend.transition);function ar(t){if(Su[t])return Su[t];if(!Br[t])return t;var e=Br[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Jd)return Su[t]=e[n];return t}var Wd=ar("animationend"),Id=ar("animationiteration"),th=ar("animationstart"),Qv=ar("transitionrun"),Zv=ar("transitionstart"),Kv=ar("transitioncancel"),eh=ar("transitionend"),nh=new Map,Eu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Eu.push("scrollEnd");function un(t,e){nh.set(t,e),tr(e,[t])}var ah=new WeakMap;function Je(t,e){if(typeof t=="object"&&t!==null){var n=ah.get(t);return n!==void 0?n:(e={value:t,source:e,stack:yd(e)},ah.set(t,e),e)}return{value:t,source:e,stack:yd(e)}}var We=[],Yr=0,Tu=0;function ml(){for(var t=Yr,e=Tu=Yr=0;e<t;){var n=We[e];We[e++]=null;var r=We[e];We[e++]=null;var s=We[e];We[e++]=null;var u=We[e];if(We[e++]=null,r!==null&&s!==null){var p=r.pending;p===null?s.next=s:(s.next=p.next,p.next=s),r.pending=s}u!==0&&rh(n,s,u)}}function pl(t,e,n,r){We[Yr++]=t,We[Yr++]=e,We[Yr++]=n,We[Yr++]=r,Tu|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function Ou(t,e,n,r){return pl(t,e,n,r),gl(t)}function Gr(t,e){return pl(t,null,null,e),gl(t)}function rh(t,e,n){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n);for(var s=!1,u=t.return;u!==null;)u.childLanes|=n,r=u.alternate,r!==null&&(r.childLanes|=n),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(s=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,s&&e!==null&&(s=31-be(n),t=u.hiddenUpdates,r=t[s],r===null?t[s]=[e]:r.push(e),e.lane=n|536870912),u):null}function gl(t){if(50<xi)throw xi=0,_c=null,Error(l(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Vr={};function $v(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qe(t,e,n,r){return new $v(t,e,n,r)}function Au(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Vn(t,e){var n=t.alternate;return n===null?(n=qe(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function oh(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function bl(t,e,n,r,s,u){var p=0;if(r=t,typeof t=="function")Au(t)&&(p=1);else if(typeof t=="string")p=Jy(t,n,et.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case tt:return t=qe(31,n,e,s),t.elementType=tt,t.lanes=u,t;case S:return rr(n.children,s,u,e);case w:p=8,s|=24;break;case T:return t=qe(12,n,e,s|2),t.elementType=T,t.lanes=u,t;case P:return t=qe(13,n,e,s),t.elementType=P,t.lanes=u,t;case F:return t=qe(19,n,e,s),t.elementType=F,t.lanes=u,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case C:case D:p=10;break t;case U:p=9;break t;case Y:p=11;break t;case W:p=14;break t;case $:p=16,r=null;break t}p=29,n=Error(l(130,t===null?"null":typeof t,"")),r=null}return e=qe(p,n,e,s),e.elementType=t,e.type=r,e.lanes=u,e}function rr(t,e,n,r){return t=qe(7,t,r,e),t.lanes=n,t}function Ru(t,e,n){return t=qe(6,t,null,e),t.lanes=n,t}function Cu(t,e,n){return e=qe(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Xr=[],Qr=0,vl=null,yl=0,Ie=[],tn=0,or=null,Xn=1,Qn="";function ir(t,e){Xr[Qr++]=yl,Xr[Qr++]=vl,vl=t,yl=e}function ih(t,e,n){Ie[tn++]=Xn,Ie[tn++]=Qn,Ie[tn++]=or,or=t;var r=Xn;t=Qn;var s=32-be(r)-1;r&=~(1<<s),n+=1;var u=32-be(e)+s;if(30<u){var p=s-s%5;u=(r&(1<<p)-1).toString(32),r>>=p,s-=p,Xn=1<<32-be(e)+s|n<<s|r,Qn=u+t}else Xn=1<<u|n<<s|r,Qn=t}function Mu(t){t.return!==null&&(ir(t,1),ih(t,1,0))}function ku(t){for(;t===vl;)vl=Xr[--Qr],Xr[Qr]=null,yl=Xr[--Qr],Xr[Qr]=null;for(;t===or;)or=Ie[--tn],Ie[tn]=null,Qn=Ie[--tn],Ie[tn]=null,Xn=Ie[--tn],Ie[tn]=null}var Ce=null,Qt=null,Dt=!1,lr=null,On=!1,_u=Error(l(519));function sr(t){var e=Error(l(418,""));throw Wo(Je(e,t)),_u}function lh(t){var e=t.stateNode,n=t.type,r=t.memoizedProps;switch(e[Jt]=t,e[Pt]=r,n){case"dialog":Ct("cancel",e),Ct("close",e);break;case"iframe":case"object":case"embed":Ct("load",e);break;case"video":case"audio":for(n=0;n<Si.length;n++)Ct(Si[n],e);break;case"source":Ct("error",e);break;case"img":case"image":case"link":Ct("error",e),Ct("load",e);break;case"details":Ct("toggle",e);break;case"input":Ct("invalid",e),Sd(e,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),ol(e);break;case"select":Ct("invalid",e);break;case"textarea":Ct("invalid",e),Td(e,r.value,r.defaultValue,r.children),ol(e)}n=r.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||r.suppressHydrationWarning===!0||Tp(e.textContent,n)?(r.popover!=null&&(Ct("beforetoggle",e),Ct("toggle",e)),r.onScroll!=null&&Ct("scroll",e),r.onScrollEnd!=null&&Ct("scrollend",e),r.onClick!=null&&(e.onclick=Il),e=!0):e=!1,e||sr(t)}function sh(t){for(Ce=t.return;Ce;)switch(Ce.tag){case 5:case 13:On=!1;return;case 27:case 3:On=!0;return;default:Ce=Ce.return}}function Fo(t){if(t!==Ce)return!1;if(!Dt)return sh(t),Dt=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||Zc(t.type,t.memoizedProps)),n=!n),n&&Qt&&sr(t),sh(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(l(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(n=t.data,n==="/$"){if(e===0){Qt=fn(t.nextSibling);break t}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++;t=t.nextSibling}Qt=null}}else e===27?(e=Qt,Na(t.type)?(t=Jc,Jc=null,Qt=t):Qt=e):Qt=Ce?fn(t.stateNode.nextSibling):null;return!0}function Jo(){Qt=Ce=null,Dt=!1}function uh(){var t=lr;return t!==null&&(je===null?je=t:je.push.apply(je,t),lr=null),t}function Wo(t){lr===null?lr=[t]:lr.push(t)}var Du=B(null),ur=null,Zn=null;function va(t,e,n){V(Du,e._currentValue),e._currentValue=n}function Kn(t){t._currentValue=Du.current,I(Du)}function Nu(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function zu(t,e,n,r){var s=t.child;for(s!==null&&(s.return=t);s!==null;){var u=s.dependencies;if(u!==null){var p=s.child;u=u.firstContext;t:for(;u!==null;){var y=u;u=s;for(var A=0;A<e.length;A++)if(y.context===e[A]){u.lanes|=n,y=u.alternate,y!==null&&(y.lanes|=n),Nu(u.return,n,t),r||(p=null);break t}u=y.next}}else if(s.tag===18){if(p=s.return,p===null)throw Error(l(341));p.lanes|=n,u=p.alternate,u!==null&&(u.lanes|=n),Nu(p,n,t),p=null}else p=s.child;if(p!==null)p.return=s;else for(p=s;p!==null;){if(p===t){p=null;break}if(s=p.sibling,s!==null){s.return=p.return,p=s;break}p=p.return}s=p}}function Io(t,e,n,r){t=null;for(var s=e,u=!1;s!==null;){if(!u){if((s.flags&524288)!==0)u=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var p=s.alternate;if(p===null)throw Error(l(387));if(p=p.memoizedProps,p!==null){var y=s.type;Pe(s.pendingProps.value,p.value)||(t!==null?t.push(y):t=[y])}}else if(s===wt.current){if(p=s.alternate,p===null)throw Error(l(387));p.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(t!==null?t.push(Ci):t=[Ci])}s=s.return}t!==null&&zu(e,t,n,r),e.flags|=262144}function xl(t){for(t=t.firstContext;t!==null;){if(!Pe(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function cr(t){ur=t,Zn=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Se(t){return ch(ur,t)}function wl(t,e){return ur===null&&cr(t),ch(t,e)}function ch(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},Zn===null){if(t===null)throw Error(l(308));Zn=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Zn=Zn.next=e;return n}var Fv=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,r){t.push(r)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},Jv=a.unstable_scheduleCallback,Wv=a.unstable_NormalPriority,re={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ju(){return{controller:new Fv,data:new Map,refCount:0}}function ti(t){t.refCount--,t.refCount===0&&Jv(Wv,function(){t.controller.abort()})}var ei=null,Uu=0,Zr=0,Kr=null;function Iv(t,e){if(ei===null){var n=ei=[];Uu=0,Zr=Hc(),Kr={status:"pending",value:void 0,then:function(r){n.push(r)}}}return Uu++,e.then(fh,fh),e}function fh(){if(--Uu===0&&ei!==null){Kr!==null&&(Kr.status="fulfilled");var t=ei;ei=null,Zr=0,Kr=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function ty(t,e){var n=[],r={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return t.then(function(){r.status="fulfilled",r.value=e;for(var s=0;s<n.length;s++)(0,n[s])(e)},function(s){for(r.status="rejected",r.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),r}var dh=k.S;k.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&Iv(t,e),dh!==null&&dh(t,e)};var fr=B(null);function Lu(){var t=fr.current;return t!==null?t:qt.pooledCache}function Sl(t,e){e===null?V(fr,fr.current):V(fr,e.pool)}function hh(){var t=Lu();return t===null?null:{parent:re._currentValue,pool:t}}var ni=Error(l(460)),mh=Error(l(474)),El=Error(l(542)),Hu={then:function(){}};function ph(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Tl(){}function gh(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(Tl,Tl),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,vh(t),t;default:if(typeof e.status=="string")e.then(Tl,Tl);else{if(t=qt,t!==null&&100<t.shellSuspendCounter)throw Error(l(482));t=e,t.status="pending",t.then(function(r){if(e.status==="pending"){var s=e;s.status="fulfilled",s.value=r}},function(r){if(e.status==="pending"){var s=e;s.status="rejected",s.reason=r}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,vh(t),t}throw ai=e,ni}}var ai=null;function bh(){if(ai===null)throw Error(l(459));var t=ai;return ai=null,t}function vh(t){if(t===ni||t===El)throw Error(l(483))}var ya=!1;function Pu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function qu(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function xa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function wa(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Nt&2)!==0){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,e=gl(t),rh(t,null,n),e}return pl(t,r,e,n),gl(t)}function ri(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,$t(t,n)}}function Bu(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var p={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};u===null?s=u=p:u=u.next=p,n=n.next}while(n!==null);u===null?s=u=e:u=u.next=e}else s=u=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:u,shared:r.shared,callbacks:r.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var Yu=!1;function oi(){if(Yu){var t=Kr;if(t!==null)throw t}}function ii(t,e,n,r){Yu=!1;var s=t.updateQueue;ya=!1;var u=s.firstBaseUpdate,p=s.lastBaseUpdate,y=s.shared.pending;if(y!==null){s.shared.pending=null;var A=y,j=A.next;A.next=null,p===null?u=j:p.next=j,p=A;var G=t.alternate;G!==null&&(G=G.updateQueue,y=G.lastBaseUpdate,y!==p&&(y===null?G.firstBaseUpdate=j:y.next=j,G.lastBaseUpdate=A))}if(u!==null){var K=s.baseState;p=0,G=j=A=null,y=u;do{var L=y.lane&-536870913,H=L!==y.lane;if(H?(Mt&L)===L:(r&L)===L){L!==0&&L===Zr&&(Yu=!0),G!==null&&(G=G.next={lane:0,tag:y.tag,payload:y.payload,callback:null,next:null});t:{var gt=t,ht=y;L=e;var Lt=n;switch(ht.tag){case 1:if(gt=ht.payload,typeof gt=="function"){K=gt.call(Lt,K,L);break t}K=gt;break t;case 3:gt.flags=gt.flags&-65537|128;case 0:if(gt=ht.payload,L=typeof gt=="function"?gt.call(Lt,K,L):gt,L==null)break t;K=v({},K,L);break t;case 2:ya=!0}}L=y.callback,L!==null&&(t.flags|=64,H&&(t.flags|=8192),H=s.callbacks,H===null?s.callbacks=[L]:H.push(L))}else H={lane:L,tag:y.tag,payload:y.payload,callback:y.callback,next:null},G===null?(j=G=H,A=K):G=G.next=H,p|=L;if(y=y.next,y===null){if(y=s.shared.pending,y===null)break;H=y,y=H.next,H.next=null,s.lastBaseUpdate=H,s.shared.pending=null}}while(!0);G===null&&(A=K),s.baseState=A,s.firstBaseUpdate=j,s.lastBaseUpdate=G,u===null&&(s.shared.lanes=0),Ma|=p,t.lanes=p,t.memoizedState=K}}function yh(t,e){if(typeof t!="function")throw Error(l(191,t));t.call(e)}function xh(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)yh(n[t],e)}var $r=B(null),Ol=B(0);function wh(t,e){t=ea,V(Ol,t),V($r,e),ea=t|e.baseLanes}function Gu(){V(Ol,ea),V($r,$r.current)}function Vu(){ea=Ol.current,I($r),I(Ol)}var Sa=0,Et=null,jt=null,ee=null,Al=!1,Fr=!1,dr=!1,Rl=0,li=0,Jr=null,ey=0;function Wt(){throw Error(l(321))}function Xu(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Pe(t[n],e[n]))return!1;return!0}function Qu(t,e,n,r,s,u){return Sa=u,Et=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,k.H=t===null||t.memoizedState===null?rm:om,dr=!1,u=n(r,s),dr=!1,Fr&&(u=Eh(e,n,r,s)),Sh(t),u}function Sh(t){k.H=Nl;var e=jt!==null&&jt.next!==null;if(Sa=0,ee=jt=Et=null,Al=!1,li=0,Jr=null,e)throw Error(l(300));t===null||de||(t=t.dependencies,t!==null&&xl(t)&&(de=!0))}function Eh(t,e,n,r){Et=t;var s=0;do{if(Fr&&(Jr=null),li=0,Fr=!1,25<=s)throw Error(l(301));if(s+=1,ee=jt=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}k.H=sy,u=e(n,r)}while(Fr);return u}function ny(){var t=k.H,e=t.useState()[0];return e=typeof e.then=="function"?si(e):e,t=t.useState()[0],(jt!==null?jt.memoizedState:null)!==t&&(Et.flags|=1024),e}function Zu(){var t=Rl!==0;return Rl=0,t}function Ku(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function $u(t){if(Al){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Al=!1}Sa=0,ee=jt=Et=null,Fr=!1,li=Rl=0,Jr=null}function Ne(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?Et.memoizedState=ee=t:ee=ee.next=t,ee}function ne(){if(jt===null){var t=Et.alternate;t=t!==null?t.memoizedState:null}else t=jt.next;var e=ee===null?Et.memoizedState:ee.next;if(e!==null)ee=e,jt=t;else{if(t===null)throw Et.alternate===null?Error(l(467)):Error(l(310));jt=t,t={memoizedState:jt.memoizedState,baseState:jt.baseState,baseQueue:jt.baseQueue,queue:jt.queue,next:null},ee===null?Et.memoizedState=ee=t:ee=ee.next=t}return ee}function Fu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function si(t){var e=li;return li+=1,Jr===null&&(Jr=[]),t=gh(Jr,t,e),e=Et,(ee===null?e.memoizedState:ee.next)===null&&(e=e.alternate,k.H=e===null||e.memoizedState===null?rm:om),t}function Cl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return si(t);if(t.$$typeof===D)return Se(t)}throw Error(l(438,String(t)))}function Ju(t){var e=null,n=Et.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var r=Et.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(e={data:r.data.map(function(s){return s.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=Fu(),Et.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),r=0;r<t;r++)n[r]=ft;return e.index++,n}function $n(t,e){return typeof e=="function"?e(t):e}function Ml(t){var e=ne();return Wu(e,jt,t)}function Wu(t,e,n){var r=t.queue;if(r===null)throw Error(l(311));r.lastRenderedReducer=n;var s=t.baseQueue,u=r.pending;if(u!==null){if(s!==null){var p=s.next;s.next=u.next,u.next=p}e.baseQueue=s=u,r.pending=null}if(u=t.baseState,s===null)t.memoizedState=u;else{e=s.next;var y=p=null,A=null,j=e,G=!1;do{var K=j.lane&-536870913;if(K!==j.lane?(Mt&K)===K:(Sa&K)===K){var L=j.revertLane;if(L===0)A!==null&&(A=A.next={lane:0,revertLane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),K===Zr&&(G=!0);else if((Sa&L)===L){j=j.next,L===Zr&&(G=!0);continue}else K={lane:0,revertLane:j.revertLane,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},A===null?(y=A=K,p=u):A=A.next=K,Et.lanes|=L,Ma|=L;K=j.action,dr&&n(u,K),u=j.hasEagerState?j.eagerState:n(u,K)}else L={lane:K,revertLane:j.revertLane,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},A===null?(y=A=L,p=u):A=A.next=L,Et.lanes|=K,Ma|=K;j=j.next}while(j!==null&&j!==e);if(A===null?p=u:A.next=y,!Pe(u,t.memoizedState)&&(de=!0,G&&(n=Kr,n!==null)))throw n;t.memoizedState=u,t.baseState=p,t.baseQueue=A,r.lastRenderedState=u}return s===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Iu(t){var e=ne(),n=e.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,u=e.memoizedState;if(s!==null){n.pending=null;var p=s=s.next;do u=t(u,p.action),p=p.next;while(p!==s);Pe(u,e.memoizedState)||(de=!0),e.memoizedState=u,e.baseQueue===null&&(e.baseState=u),n.lastRenderedState=u}return[u,r]}function Th(t,e,n){var r=Et,s=ne(),u=Dt;if(u){if(n===void 0)throw Error(l(407));n=n()}else n=e();var p=!Pe((jt||s).memoizedState,n);p&&(s.memoizedState=n,de=!0),s=s.queue;var y=Rh.bind(null,r,s,t);if(ui(2048,8,y,[t]),s.getSnapshot!==e||p||ee!==null&&ee.memoizedState.tag&1){if(r.flags|=2048,Wr(9,kl(),Ah.bind(null,r,s,n,e),null),qt===null)throw Error(l(349));u||(Sa&124)!==0||Oh(r,e,n)}return n}function Oh(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Et.updateQueue,e===null?(e=Fu(),Et.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Ah(t,e,n,r){e.value=n,e.getSnapshot=r,Ch(e)&&Mh(t)}function Rh(t,e,n){return n(function(){Ch(e)&&Mh(t)})}function Ch(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Pe(t,n)}catch{return!0}}function Mh(t){var e=Gr(t,2);e!==null&&Xe(e,t,2)}function tc(t){var e=Ne();if(typeof t=="function"){var n=t;if(t=n(),dr){ln(!0);try{n()}finally{ln(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$n,lastRenderedState:t},e}function kh(t,e,n,r){return t.baseState=n,Wu(t,jt,typeof r=="function"?r:$n)}function ay(t,e,n,r,s){if(Dl(t))throw Error(l(485));if(t=e.action,t!==null){var u={payload:s,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){u.listeners.push(p)}};k.T!==null?n(!0):u.isTransition=!1,r(u),n=e.pending,n===null?(u.next=e.pending=u,_h(e,u)):(u.next=n.next,e.pending=n.next=u)}}function _h(t,e){var n=e.action,r=e.payload,s=t.state;if(e.isTransition){var u=k.T,p={};k.T=p;try{var y=n(s,r),A=k.S;A!==null&&A(p,y),Dh(t,e,y)}catch(j){ec(t,e,j)}finally{k.T=u}}else try{u=n(s,r),Dh(t,e,u)}catch(j){ec(t,e,j)}}function Dh(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(r){Nh(t,e,r)},function(r){return ec(t,e,r)}):Nh(t,e,n)}function Nh(t,e,n){e.status="fulfilled",e.value=n,zh(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,_h(t,n)))}function ec(t,e,n){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do e.status="rejected",e.reason=n,zh(e),e=e.next;while(e!==r)}t.action=null}function zh(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function jh(t,e){return e}function Uh(t,e){if(Dt){var n=qt.formState;if(n!==null){t:{var r=Et;if(Dt){if(Qt){e:{for(var s=Qt,u=On;s.nodeType!==8;){if(!u){s=null;break e}if(s=fn(s.nextSibling),s===null){s=null;break e}}u=s.data,s=u==="F!"||u==="F"?s:null}if(s){Qt=fn(s.nextSibling),r=s.data==="F!";break t}}sr(r)}r=!1}r&&(e=n[0])}}return n=Ne(),n.memoizedState=n.baseState=e,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jh,lastRenderedState:e},n.queue=r,n=em.bind(null,Et,r),r.dispatch=n,r=tc(!1),u=ic.bind(null,Et,!1,r.queue),r=Ne(),s={state:e,dispatch:null,action:t,pending:null},r.queue=s,n=ay.bind(null,Et,s,u,n),s.dispatch=n,r.memoizedState=t,[e,n,!1]}function Lh(t){var e=ne();return Hh(e,jt,t)}function Hh(t,e,n){if(e=Wu(t,e,jh)[0],t=Ml($n)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var r=si(e)}catch(p){throw p===ni?El:p}else r=e;e=ne();var s=e.queue,u=s.dispatch;return n!==e.memoizedState&&(Et.flags|=2048,Wr(9,kl(),ry.bind(null,s,n),null)),[r,u,t]}function ry(t,e){t.action=e}function Ph(t){var e=ne(),n=jt;if(n!==null)return Hh(e,n,t);ne(),e=e.memoizedState,n=ne();var r=n.queue.dispatch;return n.memoizedState=t,[e,r,!1]}function Wr(t,e,n,r){return t={tag:t,create:n,deps:r,inst:e,next:null},e=Et.updateQueue,e===null&&(e=Fu(),Et.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t),t}function kl(){return{destroy:void 0,resource:void 0}}function qh(){return ne().memoizedState}function _l(t,e,n,r){var s=Ne();r=r===void 0?null:r,Et.flags|=t,s.memoizedState=Wr(1|e,kl(),n,r)}function ui(t,e,n,r){var s=ne();r=r===void 0?null:r;var u=s.memoizedState.inst;jt!==null&&r!==null&&Xu(r,jt.memoizedState.deps)?s.memoizedState=Wr(e,u,n,r):(Et.flags|=t,s.memoizedState=Wr(1|e,u,n,r))}function Bh(t,e){_l(8390656,8,t,e)}function Yh(t,e){ui(2048,8,t,e)}function Gh(t,e){return ui(4,2,t,e)}function Vh(t,e){return ui(4,4,t,e)}function Xh(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Qh(t,e,n){n=n!=null?n.concat([t]):null,ui(4,4,Xh.bind(null,e,t),n)}function nc(){}function Zh(t,e){var n=ne();e=e===void 0?null:e;var r=n.memoizedState;return e!==null&&Xu(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Kh(t,e){var n=ne();e=e===void 0?null:e;var r=n.memoizedState;if(e!==null&&Xu(e,r[1]))return r[0];if(r=t(),dr){ln(!0);try{t()}finally{ln(!1)}}return n.memoizedState=[r,e],r}function ac(t,e,n){return n===void 0||(Sa&1073741824)!==0?t.memoizedState=e:(t.memoizedState=n,t=Jm(),Et.lanes|=t,Ma|=t,n)}function $h(t,e,n,r){return Pe(n,e)?n:$r.current!==null?(t=ac(t,n,r),Pe(t,e)||(de=!0),t):(Sa&42)===0?(de=!0,t.memoizedState=n):(t=Jm(),Et.lanes|=t,Ma|=t,e)}function Fh(t,e,n,r,s){var u=Z.p;Z.p=u!==0&&8>u?u:8;var p=k.T,y={};k.T=y,ic(t,!1,e,n);try{var A=s(),j=k.S;if(j!==null&&j(y,A),A!==null&&typeof A=="object"&&typeof A.then=="function"){var G=ty(A,r);ci(t,e,G,Ve(t))}else ci(t,e,r,Ve(t))}catch(K){ci(t,e,{then:function(){},status:"rejected",reason:K},Ve())}finally{Z.p=u,k.T=p}}function oy(){}function rc(t,e,n,r){if(t.tag!==5)throw Error(l(476));var s=Jh(t).queue;Fh(t,s,e,q,n===null?oy:function(){return Wh(t),n(r)})}function Jh(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$n,lastRenderedState:q},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$n,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Wh(t){var e=Jh(t).next.queue;ci(t,e,{},Ve())}function oc(){return Se(Ci)}function Ih(){return ne().memoizedState}function tm(){return ne().memoizedState}function iy(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=Ve();t=xa(n);var r=wa(e,t,n);r!==null&&(Xe(r,e,n),ri(r,e,n)),e={cache:ju()},t.payload=e;return}e=e.return}}function ly(t,e,n){var r=Ve();n={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Dl(t)?nm(e,n):(n=Ou(t,e,n,r),n!==null&&(Xe(n,t,r),am(n,e,r)))}function em(t,e,n){var r=Ve();ci(t,e,n,r)}function ci(t,e,n,r){var s={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Dl(t))nm(e,s);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=e.lastRenderedReducer,u!==null))try{var p=e.lastRenderedState,y=u(p,n);if(s.hasEagerState=!0,s.eagerState=y,Pe(y,p))return pl(t,e,s,0),qt===null&&ml(),!1}catch{}finally{}if(n=Ou(t,e,s,r),n!==null)return Xe(n,t,r),am(n,e,r),!0}return!1}function ic(t,e,n,r){if(r={lane:2,revertLane:Hc(),action:r,hasEagerState:!1,eagerState:null,next:null},Dl(t)){if(e)throw Error(l(479))}else e=Ou(t,n,r,2),e!==null&&Xe(e,t,2)}function Dl(t){var e=t.alternate;return t===Et||e!==null&&e===Et}function nm(t,e){Fr=Al=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function am(t,e,n){if((n&4194048)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,$t(t,n)}}var Nl={readContext:Se,use:Cl,useCallback:Wt,useContext:Wt,useEffect:Wt,useImperativeHandle:Wt,useLayoutEffect:Wt,useInsertionEffect:Wt,useMemo:Wt,useReducer:Wt,useRef:Wt,useState:Wt,useDebugValue:Wt,useDeferredValue:Wt,useTransition:Wt,useSyncExternalStore:Wt,useId:Wt,useHostTransitionStatus:Wt,useFormState:Wt,useActionState:Wt,useOptimistic:Wt,useMemoCache:Wt,useCacheRefresh:Wt},rm={readContext:Se,use:Cl,useCallback:function(t,e){return Ne().memoizedState=[t,e===void 0?null:e],t},useContext:Se,useEffect:Bh,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,_l(4194308,4,Xh.bind(null,e,t),n)},useLayoutEffect:function(t,e){return _l(4194308,4,t,e)},useInsertionEffect:function(t,e){_l(4,2,t,e)},useMemo:function(t,e){var n=Ne();e=e===void 0?null:e;var r=t();if(dr){ln(!0);try{t()}finally{ln(!1)}}return n.memoizedState=[r,e],r},useReducer:function(t,e,n){var r=Ne();if(n!==void 0){var s=n(e);if(dr){ln(!0);try{n(e)}finally{ln(!1)}}}else s=e;return r.memoizedState=r.baseState=s,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:s},r.queue=t,t=t.dispatch=ly.bind(null,Et,t),[r.memoizedState,t]},useRef:function(t){var e=Ne();return t={current:t},e.memoizedState=t},useState:function(t){t=tc(t);var e=t.queue,n=em.bind(null,Et,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:nc,useDeferredValue:function(t,e){var n=Ne();return ac(n,t,e)},useTransition:function(){var t=tc(!1);return t=Fh.bind(null,Et,t.queue,!0,!1),Ne().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var r=Et,s=Ne();if(Dt){if(n===void 0)throw Error(l(407));n=n()}else{if(n=e(),qt===null)throw Error(l(349));(Mt&124)!==0||Oh(r,e,n)}s.memoizedState=n;var u={value:n,getSnapshot:e};return s.queue=u,Bh(Rh.bind(null,r,u,t),[t]),r.flags|=2048,Wr(9,kl(),Ah.bind(null,r,u,n,e),null),n},useId:function(){var t=Ne(),e=qt.identifierPrefix;if(Dt){var n=Qn,r=Xn;n=(r&~(1<<32-be(r)-1)).toString(32)+n,e="«"+e+"R"+n,n=Rl++,0<n&&(e+="H"+n.toString(32)),e+="»"}else n=ey++,e="«"+e+"r"+n.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:oc,useFormState:Uh,useActionState:Uh,useOptimistic:function(t){var e=Ne();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=ic.bind(null,Et,!0,n),n.dispatch=e,[t,e]},useMemoCache:Ju,useCacheRefresh:function(){return Ne().memoizedState=iy.bind(null,Et)}},om={readContext:Se,use:Cl,useCallback:Zh,useContext:Se,useEffect:Yh,useImperativeHandle:Qh,useInsertionEffect:Gh,useLayoutEffect:Vh,useMemo:Kh,useReducer:Ml,useRef:qh,useState:function(){return Ml($n)},useDebugValue:nc,useDeferredValue:function(t,e){var n=ne();return $h(n,jt.memoizedState,t,e)},useTransition:function(){var t=Ml($n)[0],e=ne().memoizedState;return[typeof t=="boolean"?t:si(t),e]},useSyncExternalStore:Th,useId:Ih,useHostTransitionStatus:oc,useFormState:Lh,useActionState:Lh,useOptimistic:function(t,e){var n=ne();return kh(n,jt,t,e)},useMemoCache:Ju,useCacheRefresh:tm},sy={readContext:Se,use:Cl,useCallback:Zh,useContext:Se,useEffect:Yh,useImperativeHandle:Qh,useInsertionEffect:Gh,useLayoutEffect:Vh,useMemo:Kh,useReducer:Iu,useRef:qh,useState:function(){return Iu($n)},useDebugValue:nc,useDeferredValue:function(t,e){var n=ne();return jt===null?ac(n,t,e):$h(n,jt.memoizedState,t,e)},useTransition:function(){var t=Iu($n)[0],e=ne().memoizedState;return[typeof t=="boolean"?t:si(t),e]},useSyncExternalStore:Th,useId:Ih,useHostTransitionStatus:oc,useFormState:Ph,useActionState:Ph,useOptimistic:function(t,e){var n=ne();return jt!==null?kh(n,jt,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:Ju,useCacheRefresh:tm},Ir=null,fi=0;function zl(t){var e=fi;return fi+=1,Ir===null&&(Ir=[]),gh(Ir,t,e)}function di(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function jl(t,e){throw e.$$typeof===b?Error(l(525)):(t=Object.prototype.toString.call(e),Error(l(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function im(t){var e=t._init;return e(t._payload)}function lm(t){function e(N,M){if(t){var z=N.deletions;z===null?(N.deletions=[M],N.flags|=16):z.push(M)}}function n(N,M){if(!t)return null;for(;M!==null;)e(N,M),M=M.sibling;return null}function r(N){for(var M=new Map;N!==null;)N.key!==null?M.set(N.key,N):M.set(N.index,N),N=N.sibling;return M}function s(N,M){return N=Vn(N,M),N.index=0,N.sibling=null,N}function u(N,M,z){return N.index=z,t?(z=N.alternate,z!==null?(z=z.index,z<M?(N.flags|=67108866,M):z):(N.flags|=67108866,M)):(N.flags|=1048576,M)}function p(N){return t&&N.alternate===null&&(N.flags|=67108866),N}function y(N,M,z,X){return M===null||M.tag!==6?(M=Ru(z,N.mode,X),M.return=N,M):(M=s(M,z),M.return=N,M)}function A(N,M,z,X){var it=z.type;return it===S?G(N,M,z.props.children,X,z.key):M!==null&&(M.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===$&&im(it)===M.type)?(M=s(M,z.props),di(M,z),M.return=N,M):(M=bl(z.type,z.key,z.props,null,N.mode,X),di(M,z),M.return=N,M)}function j(N,M,z,X){return M===null||M.tag!==4||M.stateNode.containerInfo!==z.containerInfo||M.stateNode.implementation!==z.implementation?(M=Cu(z,N.mode,X),M.return=N,M):(M=s(M,z.children||[]),M.return=N,M)}function G(N,M,z,X,it){return M===null||M.tag!==7?(M=rr(z,N.mode,X,it),M.return=N,M):(M=s(M,z),M.return=N,M)}function K(N,M,z){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return M=Ru(""+M,N.mode,z),M.return=N,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case E:return z=bl(M.type,M.key,M.props,null,N.mode,z),di(z,M),z.return=N,z;case O:return M=Cu(M,N.mode,z),M.return=N,M;case $:var X=M._init;return M=X(M._payload),K(N,M,z)}if(ot(M)||dt(M))return M=rr(M,N.mode,z,null),M.return=N,M;if(typeof M.then=="function")return K(N,zl(M),z);if(M.$$typeof===D)return K(N,wl(N,M),z);jl(N,M)}return null}function L(N,M,z,X){var it=M!==null?M.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return it!==null?null:y(N,M,""+z,X);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case E:return z.key===it?A(N,M,z,X):null;case O:return z.key===it?j(N,M,z,X):null;case $:return it=z._init,z=it(z._payload),L(N,M,z,X)}if(ot(z)||dt(z))return it!==null?null:G(N,M,z,X,null);if(typeof z.then=="function")return L(N,M,zl(z),X);if(z.$$typeof===D)return L(N,M,wl(N,z),X);jl(N,z)}return null}function H(N,M,z,X,it){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return N=N.get(z)||null,y(M,N,""+X,it);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case E:return N=N.get(X.key===null?z:X.key)||null,A(M,N,X,it);case O:return N=N.get(X.key===null?z:X.key)||null,j(M,N,X,it);case $:var Ot=X._init;return X=Ot(X._payload),H(N,M,z,X,it)}if(ot(X)||dt(X))return N=N.get(z)||null,G(M,N,X,it,null);if(typeof X.then=="function")return H(N,M,z,zl(X),it);if(X.$$typeof===D)return H(N,M,z,wl(M,X),it);jl(M,X)}return null}function gt(N,M,z,X){for(var it=null,Ot=null,ut=M,mt=M=0,me=null;ut!==null&&mt<z.length;mt++){ut.index>mt?(me=ut,ut=null):me=ut.sibling;var kt=L(N,ut,z[mt],X);if(kt===null){ut===null&&(ut=me);break}t&&ut&&kt.alternate===null&&e(N,ut),M=u(kt,M,mt),Ot===null?it=kt:Ot.sibling=kt,Ot=kt,ut=me}if(mt===z.length)return n(N,ut),Dt&&ir(N,mt),it;if(ut===null){for(;mt<z.length;mt++)ut=K(N,z[mt],X),ut!==null&&(M=u(ut,M,mt),Ot===null?it=ut:Ot.sibling=ut,Ot=ut);return Dt&&ir(N,mt),it}for(ut=r(ut);mt<z.length;mt++)me=H(ut,N,mt,z[mt],X),me!==null&&(t&&me.alternate!==null&&ut.delete(me.key===null?mt:me.key),M=u(me,M,mt),Ot===null?it=me:Ot.sibling=me,Ot=me);return t&&ut.forEach(function(Ha){return e(N,Ha)}),Dt&&ir(N,mt),it}function ht(N,M,z,X){if(z==null)throw Error(l(151));for(var it=null,Ot=null,ut=M,mt=M=0,me=null,kt=z.next();ut!==null&&!kt.done;mt++,kt=z.next()){ut.index>mt?(me=ut,ut=null):me=ut.sibling;var Ha=L(N,ut,kt.value,X);if(Ha===null){ut===null&&(ut=me);break}t&&ut&&Ha.alternate===null&&e(N,ut),M=u(Ha,M,mt),Ot===null?it=Ha:Ot.sibling=Ha,Ot=Ha,ut=me}if(kt.done)return n(N,ut),Dt&&ir(N,mt),it;if(ut===null){for(;!kt.done;mt++,kt=z.next())kt=K(N,kt.value,X),kt!==null&&(M=u(kt,M,mt),Ot===null?it=kt:Ot.sibling=kt,Ot=kt);return Dt&&ir(N,mt),it}for(ut=r(ut);!kt.done;mt++,kt=z.next())kt=H(ut,N,mt,kt.value,X),kt!==null&&(t&&kt.alternate!==null&&ut.delete(kt.key===null?mt:kt.key),M=u(kt,M,mt),Ot===null?it=kt:Ot.sibling=kt,Ot=kt);return t&&ut.forEach(function(u1){return e(N,u1)}),Dt&&ir(N,mt),it}function Lt(N,M,z,X){if(typeof z=="object"&&z!==null&&z.type===S&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case E:t:{for(var it=z.key;M!==null;){if(M.key===it){if(it=z.type,it===S){if(M.tag===7){n(N,M.sibling),X=s(M,z.props.children),X.return=N,N=X;break t}}else if(M.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===$&&im(it)===M.type){n(N,M.sibling),X=s(M,z.props),di(X,z),X.return=N,N=X;break t}n(N,M);break}else e(N,M);M=M.sibling}z.type===S?(X=rr(z.props.children,N.mode,X,z.key),X.return=N,N=X):(X=bl(z.type,z.key,z.props,null,N.mode,X),di(X,z),X.return=N,N=X)}return p(N);case O:t:{for(it=z.key;M!==null;){if(M.key===it)if(M.tag===4&&M.stateNode.containerInfo===z.containerInfo&&M.stateNode.implementation===z.implementation){n(N,M.sibling),X=s(M,z.children||[]),X.return=N,N=X;break t}else{n(N,M);break}else e(N,M);M=M.sibling}X=Cu(z,N.mode,X),X.return=N,N=X}return p(N);case $:return it=z._init,z=it(z._payload),Lt(N,M,z,X)}if(ot(z))return gt(N,M,z,X);if(dt(z)){if(it=dt(z),typeof it!="function")throw Error(l(150));return z=it.call(z),ht(N,M,z,X)}if(typeof z.then=="function")return Lt(N,M,zl(z),X);if(z.$$typeof===D)return Lt(N,M,wl(N,z),X);jl(N,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,M!==null&&M.tag===6?(n(N,M.sibling),X=s(M,z),X.return=N,N=X):(n(N,M),X=Ru(z,N.mode,X),X.return=N,N=X),p(N)):n(N,M)}return function(N,M,z,X){try{fi=0;var it=Lt(N,M,z,X);return Ir=null,it}catch(ut){if(ut===ni||ut===El)throw ut;var Ot=qe(29,ut,null,N.mode);return Ot.lanes=X,Ot.return=N,Ot}finally{}}}var to=lm(!0),sm=lm(!1),en=B(null),An=null;function Ea(t){var e=t.alternate;V(oe,oe.current&1),V(en,t),An===null&&(e===null||$r.current!==null||e.memoizedState!==null)&&(An=t)}function um(t){if(t.tag===22){if(V(oe,oe.current),V(en,t),An===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(An=t)}}else Ta()}function Ta(){V(oe,oe.current),V(en,en.current)}function Fn(t){I(en),An===t&&(An=null),I(oe)}var oe=B(0);function Ul(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||Fc(n)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function lc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:v({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var sc={enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ve(),s=xa(r);s.payload=e,n!=null&&(s.callback=n),e=wa(t,s,r),e!==null&&(Xe(e,t,r),ri(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ve(),s=xa(r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=wa(t,s,r),e!==null&&(Xe(e,t,r),ri(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ve(),r=xa(n);r.tag=2,e!=null&&(r.callback=e),e=wa(t,r,n),e!==null&&(Xe(e,t,n),ri(e,t,n))}};function cm(t,e,n,r,s,u,p){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,u,p):e.prototype&&e.prototype.isPureReactComponent?!Ko(n,r)||!Ko(s,u):!0}function fm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&sc.enqueueReplaceState(e,e.state,null)}function hr(t,e){var n=e;if("ref"in e){n={};for(var r in e)r!=="ref"&&(n[r]=e[r])}if(t=t.defaultProps){n===e&&(n=v({},n));for(var s in t)n[s]===void 0&&(n[s]=t[s])}return n}var Ll=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function dm(t){Ll(t)}function hm(t){console.error(t)}function mm(t){Ll(t)}function Hl(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(r){setTimeout(function(){throw r})}}function pm(t,e,n){try{var r=t.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function uc(t,e,n){return n=xa(n),n.tag=3,n.payload={element:null},n.callback=function(){Hl(t,e)},n}function gm(t){return t=xa(t),t.tag=3,t}function bm(t,e,n,r){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var u=r.value;t.payload=function(){return s(u)},t.callback=function(){pm(e,n,r)}}var p=n.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(t.callback=function(){pm(e,n,r),typeof s!="function"&&(ka===null?ka=new Set([this]):ka.add(this));var y=r.stack;this.componentDidCatch(r.value,{componentStack:y!==null?y:""})})}function uy(t,e,n,r,s){if(n.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(e=n.alternate,e!==null&&Io(e,n,s,!0),n=en.current,n!==null){switch(n.tag){case 13:return An===null?Nc():n.alternate===null&&Zt===0&&(Zt=3),n.flags&=-257,n.flags|=65536,n.lanes=s,r===Hu?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([r]):e.add(r),jc(t,r,s)),!1;case 22:return n.flags|=65536,r===Hu?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([r]):n.add(r)),jc(t,r,s)),!1}throw Error(l(435,n.tag))}return jc(t,r,s),Nc(),!1}if(Dt)return e=en.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=s,r!==_u&&(t=Error(l(422),{cause:r}),Wo(Je(t,n)))):(r!==_u&&(e=Error(l(423),{cause:r}),Wo(Je(e,n))),t=t.current.alternate,t.flags|=65536,s&=-s,t.lanes|=s,r=Je(r,n),s=uc(t.stateNode,r,s),Bu(t,s),Zt!==4&&(Zt=2)),!1;var u=Error(l(520),{cause:r});if(u=Je(u,n),yi===null?yi=[u]:yi.push(u),Zt!==4&&(Zt=2),e===null)return!0;r=Je(r,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=s&-s,n.lanes|=t,t=uc(n.stateNode,r,t),Bu(n,t),!1;case 1:if(e=n.type,u=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(ka===null||!ka.has(u))))return n.flags|=65536,s&=-s,n.lanes|=s,s=gm(s),bm(s,t,n,r),Bu(n,s),!1}n=n.return}while(n!==null);return!1}var vm=Error(l(461)),de=!1;function ye(t,e,n,r){e.child=t===null?sm(e,null,n,r):to(e,t.child,n,r)}function ym(t,e,n,r,s){n=n.render;var u=e.ref;if("ref"in r){var p={};for(var y in r)y!=="ref"&&(p[y]=r[y])}else p=r;return cr(e),r=Qu(t,e,n,p,u,s),y=Zu(),t!==null&&!de?(Ku(t,e,s),Jn(t,e,s)):(Dt&&y&&Mu(e),e.flags|=1,ye(t,e,r,s),e.child)}function xm(t,e,n,r,s){if(t===null){var u=n.type;return typeof u=="function"&&!Au(u)&&u.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=u,wm(t,e,u,r,s)):(t=bl(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(u=t.child,!bc(t,s)){var p=u.memoizedProps;if(n=n.compare,n=n!==null?n:Ko,n(p,r)&&t.ref===e.ref)return Jn(t,e,s)}return e.flags|=1,t=Vn(u,r),t.ref=e.ref,t.return=e,e.child=t}function wm(t,e,n,r,s){if(t!==null){var u=t.memoizedProps;if(Ko(u,r)&&t.ref===e.ref)if(de=!1,e.pendingProps=r=u,bc(t,s))(t.flags&131072)!==0&&(de=!0);else return e.lanes=t.lanes,Jn(t,e,s)}return cc(t,e,n,r,s)}function Sm(t,e,n){var r=e.pendingProps,s=r.children,u=t!==null?t.memoizedState:null;if(r.mode==="hidden"){if((e.flags&128)!==0){if(r=u!==null?u.baseLanes|n:n,t!==null){for(s=e.child=t.child,u=0;s!==null;)u=u|s.lanes|s.childLanes,s=s.sibling;e.childLanes=u&~r}else e.childLanes=0,e.child=null;return Em(t,e,r,n)}if((n&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Sl(e,u!==null?u.cachePool:null),u!==null?wh(e,u):Gu(),um(e);else return e.lanes=e.childLanes=536870912,Em(t,e,u!==null?u.baseLanes|n:n,n)}else u!==null?(Sl(e,u.cachePool),wh(e,u),Ta(),e.memoizedState=null):(t!==null&&Sl(e,null),Gu(),Ta());return ye(t,e,s,n),e.child}function Em(t,e,n,r){var s=Lu();return s=s===null?null:{parent:re._currentValue,pool:s},e.memoizedState={baseLanes:n,cachePool:s},t!==null&&Sl(e,null),Gu(),um(e),t!==null&&Io(t,e,r,!0),null}function Pl(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(l(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function cc(t,e,n,r,s){return cr(e),n=Qu(t,e,n,r,void 0,s),r=Zu(),t!==null&&!de?(Ku(t,e,s),Jn(t,e,s)):(Dt&&r&&Mu(e),e.flags|=1,ye(t,e,n,s),e.child)}function Tm(t,e,n,r,s,u){return cr(e),e.updateQueue=null,n=Eh(e,r,n,s),Sh(t),r=Zu(),t!==null&&!de?(Ku(t,e,u),Jn(t,e,u)):(Dt&&r&&Mu(e),e.flags|=1,ye(t,e,n,u),e.child)}function Om(t,e,n,r,s){if(cr(e),e.stateNode===null){var u=Vr,p=n.contextType;typeof p=="object"&&p!==null&&(u=Se(p)),u=new n(r,u),e.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=sc,e.stateNode=u,u._reactInternals=e,u=e.stateNode,u.props=r,u.state=e.memoizedState,u.refs={},Pu(e),p=n.contextType,u.context=typeof p=="object"&&p!==null?Se(p):Vr,u.state=e.memoizedState,p=n.getDerivedStateFromProps,typeof p=="function"&&(lc(e,n,p,r),u.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(p=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),p!==u.state&&sc.enqueueReplaceState(u,u.state,null),ii(e,r,u,s),oi(),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308),r=!0}else if(t===null){u=e.stateNode;var y=e.memoizedProps,A=hr(n,y);u.props=A;var j=u.context,G=n.contextType;p=Vr,typeof G=="object"&&G!==null&&(p=Se(G));var K=n.getDerivedStateFromProps;G=typeof K=="function"||typeof u.getSnapshotBeforeUpdate=="function",y=e.pendingProps!==y,G||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(y||j!==p)&&fm(e,u,r,p),ya=!1;var L=e.memoizedState;u.state=L,ii(e,r,u,s),oi(),j=e.memoizedState,y||L!==j||ya?(typeof K=="function"&&(lc(e,n,K,r),j=e.memoizedState),(A=ya||cm(e,n,A,r,L,j,p))?(G||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(e.flags|=4194308)):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=j),u.props=r,u.state=j,u.context=p,r=A):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{u=e.stateNode,qu(t,e),p=e.memoizedProps,G=hr(n,p),u.props=G,K=e.pendingProps,L=u.context,j=n.contextType,A=Vr,typeof j=="object"&&j!==null&&(A=Se(j)),y=n.getDerivedStateFromProps,(j=typeof y=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(p!==K||L!==A)&&fm(e,u,r,A),ya=!1,L=e.memoizedState,u.state=L,ii(e,r,u,s),oi();var H=e.memoizedState;p!==K||L!==H||ya||t!==null&&t.dependencies!==null&&xl(t.dependencies)?(typeof y=="function"&&(lc(e,n,y,r),H=e.memoizedState),(G=ya||cm(e,n,G,r,L,H,A)||t!==null&&t.dependencies!==null&&xl(t.dependencies))?(j||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(r,H,A),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(r,H,A)),typeof u.componentDidUpdate=="function"&&(e.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof u.componentDidUpdate!="function"||p===t.memoizedProps&&L===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||p===t.memoizedProps&&L===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=H),u.props=r,u.state=H,u.context=A,r=G):(typeof u.componentDidUpdate!="function"||p===t.memoizedProps&&L===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||p===t.memoizedProps&&L===t.memoizedState||(e.flags|=1024),r=!1)}return u=r,Pl(t,e),r=(e.flags&128)!==0,u||r?(u=e.stateNode,n=r&&typeof n.getDerivedStateFromError!="function"?null:u.render(),e.flags|=1,t!==null&&r?(e.child=to(e,t.child,null,s),e.child=to(e,null,n,s)):ye(t,e,n,s),e.memoizedState=u.state,t=e.child):t=Jn(t,e,s),t}function Am(t,e,n,r){return Jo(),e.flags|=256,ye(t,e,n,r),e.child}var fc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function dc(t){return{baseLanes:t,cachePool:hh()}}function hc(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=nn),t}function Rm(t,e,n){var r=e.pendingProps,s=!1,u=(e.flags&128)!==0,p;if((p=u)||(p=t!==null&&t.memoizedState===null?!1:(oe.current&2)!==0),p&&(s=!0,e.flags&=-129),p=(e.flags&32)!==0,e.flags&=-33,t===null){if(Dt){if(s?Ea(e):Ta(),Dt){var y=Qt,A;if(A=y){t:{for(A=y,y=On;A.nodeType!==8;){if(!y){y=null;break t}if(A=fn(A.nextSibling),A===null){y=null;break t}}y=A}y!==null?(e.memoizedState={dehydrated:y,treeContext:or!==null?{id:Xn,overflow:Qn}:null,retryLane:536870912,hydrationErrors:null},A=qe(18,null,null,0),A.stateNode=y,A.return=e,e.child=A,Ce=e,Qt=null,A=!0):A=!1}A||sr(e)}if(y=e.memoizedState,y!==null&&(y=y.dehydrated,y!==null))return Fc(y)?e.lanes=32:e.lanes=536870912,null;Fn(e)}return y=r.children,r=r.fallback,s?(Ta(),s=e.mode,y=ql({mode:"hidden",children:y},s),r=rr(r,s,n,null),y.return=e,r.return=e,y.sibling=r,e.child=y,s=e.child,s.memoizedState=dc(n),s.childLanes=hc(t,p,n),e.memoizedState=fc,r):(Ea(e),mc(e,y))}if(A=t.memoizedState,A!==null&&(y=A.dehydrated,y!==null)){if(u)e.flags&256?(Ea(e),e.flags&=-257,e=pc(t,e,n)):e.memoizedState!==null?(Ta(),e.child=t.child,e.flags|=128,e=null):(Ta(),s=r.fallback,y=e.mode,r=ql({mode:"visible",children:r.children},y),s=rr(s,y,n,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,to(e,t.child,null,n),r=e.child,r.memoizedState=dc(n),r.childLanes=hc(t,p,n),e.memoizedState=fc,e=s);else if(Ea(e),Fc(y)){if(p=y.nextSibling&&y.nextSibling.dataset,p)var j=p.dgst;p=j,r=Error(l(419)),r.stack="",r.digest=p,Wo({value:r,source:null,stack:null}),e=pc(t,e,n)}else if(de||Io(t,e,n,!1),p=(n&t.childLanes)!==0,de||p){if(p=qt,p!==null&&(r=n&-n,r=(r&42)!==0?1:te(r),r=(r&(p.suspendedLanes|n))!==0?0:r,r!==0&&r!==A.retryLane))throw A.retryLane=r,Gr(t,r),Xe(p,t,r),vm;y.data==="$?"||Nc(),e=pc(t,e,n)}else y.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=A.treeContext,Qt=fn(y.nextSibling),Ce=e,Dt=!0,lr=null,On=!1,t!==null&&(Ie[tn++]=Xn,Ie[tn++]=Qn,Ie[tn++]=or,Xn=t.id,Qn=t.overflow,or=e),e=mc(e,r.children),e.flags|=4096);return e}return s?(Ta(),s=r.fallback,y=e.mode,A=t.child,j=A.sibling,r=Vn(A,{mode:"hidden",children:r.children}),r.subtreeFlags=A.subtreeFlags&65011712,j!==null?s=Vn(j,s):(s=rr(s,y,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,y=t.child.memoizedState,y===null?y=dc(n):(A=y.cachePool,A!==null?(j=re._currentValue,A=A.parent!==j?{parent:j,pool:j}:A):A=hh(),y={baseLanes:y.baseLanes|n,cachePool:A}),s.memoizedState=y,s.childLanes=hc(t,p,n),e.memoizedState=fc,r):(Ea(e),n=t.child,t=n.sibling,n=Vn(n,{mode:"visible",children:r.children}),n.return=e,n.sibling=null,t!==null&&(p=e.deletions,p===null?(e.deletions=[t],e.flags|=16):p.push(t)),e.child=n,e.memoizedState=null,n)}function mc(t,e){return e=ql({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function ql(t,e){return t=qe(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function pc(t,e,n){return to(e,t.child,null,n),t=mc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Cm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Nu(t.return,e,n)}function gc(t,e,n,r,s){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(u.isBackwards=e,u.rendering=null,u.renderingStartTime=0,u.last=r,u.tail=n,u.tailMode=s)}function Mm(t,e,n){var r=e.pendingProps,s=r.revealOrder,u=r.tail;if(ye(t,e,r.children,n),r=oe.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Cm(t,n,e);else if(t.tag===19)Cm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}switch(V(oe,r),s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&Ul(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),gc(e,!1,s,n,u);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Ul(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}gc(e,!0,n,null,u);break;case"together":gc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Jn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ma|=e.lanes,(n&e.childLanes)===0)if(t!==null){if(Io(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(l(153));if(e.child!==null){for(t=e.child,n=Vn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Vn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function bc(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&xl(t)))}function cy(t,e,n){switch(e.tag){case 3:At(e,e.stateNode.containerInfo),va(e,re,t.memoizedState.cache),Jo();break;case 27:case 5:pe(e);break;case 4:At(e,e.stateNode.containerInfo);break;case 10:va(e,e.type,e.memoizedProps.value);break;case 13:var r=e.memoizedState;if(r!==null)return r.dehydrated!==null?(Ea(e),e.flags|=128,null):(n&e.child.childLanes)!==0?Rm(t,e,n):(Ea(e),t=Jn(t,e,n),t!==null?t.sibling:null);Ea(e);break;case 19:var s=(t.flags&128)!==0;if(r=(n&e.childLanes)!==0,r||(Io(t,e,n,!1),r=(n&e.childLanes)!==0),s){if(r)return Mm(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),V(oe,oe.current),r)break;return null;case 22:case 23:return e.lanes=0,Sm(t,e,n);case 24:va(e,re,t.memoizedState.cache)}return Jn(t,e,n)}function km(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)de=!0;else{if(!bc(t,n)&&(e.flags&128)===0)return de=!1,cy(t,e,n);de=(t.flags&131072)!==0}else de=!1,Dt&&(e.flags&1048576)!==0&&ih(e,yl,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var r=e.elementType,s=r._init;if(r=s(r._payload),e.type=r,typeof r=="function")Au(r)?(t=hr(r,t),e.tag=1,e=Om(null,e,r,t,n)):(e.tag=0,e=cc(null,e,r,t,n));else{if(r!=null){if(s=r.$$typeof,s===Y){e.tag=11,e=ym(null,e,r,t,n);break t}else if(s===W){e.tag=14,e=xm(null,e,r,t,n);break t}}throw e=at(r)||r,Error(l(306,e,""))}}return e;case 0:return cc(t,e,e.type,e.pendingProps,n);case 1:return r=e.type,s=hr(r,e.pendingProps),Om(t,e,r,s,n);case 3:t:{if(At(e,e.stateNode.containerInfo),t===null)throw Error(l(387));r=e.pendingProps;var u=e.memoizedState;s=u.element,qu(t,e),ii(e,r,null,n);var p=e.memoizedState;if(r=p.cache,va(e,re,r),r!==u.cache&&zu(e,[re],n,!0),oi(),r=p.element,u.isDehydrated)if(u={element:r,isDehydrated:!1,cache:p.cache},e.updateQueue.baseState=u,e.memoizedState=u,e.flags&256){e=Am(t,e,r,n);break t}else if(r!==s){s=Je(Error(l(424)),e),Wo(s),e=Am(t,e,r,n);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Qt=fn(t.firstChild),Ce=e,Dt=!0,lr=null,On=!0,n=sm(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Jo(),r===s){e=Jn(t,e,n);break t}ye(t,e,r,n)}e=e.child}return e;case 26:return Pl(t,e),t===null?(n=zp(e.type,null,e.pendingProps,null))?e.memoizedState=n:Dt||(n=e.type,t=e.pendingProps,r=ts(nt.current).createElement(n),r[Jt]=e,r[Pt]=t,we(r,n,t),fe(r),e.stateNode=r):e.memoizedState=zp(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return pe(e),t===null&&Dt&&(r=e.stateNode=_p(e.type,e.pendingProps,nt.current),Ce=e,On=!0,s=Qt,Na(e.type)?(Jc=s,Qt=fn(r.firstChild)):Qt=s),ye(t,e,e.pendingProps.children,n),Pl(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&Dt&&((s=r=Qt)&&(r=Hy(r,e.type,e.pendingProps,On),r!==null?(e.stateNode=r,Ce=e,Qt=fn(r.firstChild),On=!1,s=!0):s=!1),s||sr(e)),pe(e),s=e.type,u=e.pendingProps,p=t!==null?t.memoizedProps:null,r=u.children,Zc(s,u)?r=null:p!==null&&Zc(s,p)&&(e.flags|=32),e.memoizedState!==null&&(s=Qu(t,e,ny,null,null,n),Ci._currentValue=s),Pl(t,e),ye(t,e,r,n),e.child;case 6:return t===null&&Dt&&((t=n=Qt)&&(n=Py(n,e.pendingProps,On),n!==null?(e.stateNode=n,Ce=e,Qt=null,t=!0):t=!1),t||sr(e)),null;case 13:return Rm(t,e,n);case 4:return At(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=to(e,null,r,n):ye(t,e,r,n),e.child;case 11:return ym(t,e,e.type,e.pendingProps,n);case 7:return ye(t,e,e.pendingProps,n),e.child;case 8:return ye(t,e,e.pendingProps.children,n),e.child;case 12:return ye(t,e,e.pendingProps.children,n),e.child;case 10:return r=e.pendingProps,va(e,e.type,r.value),ye(t,e,r.children,n),e.child;case 9:return s=e.type._context,r=e.pendingProps.children,cr(e),s=Se(s),r=r(s),e.flags|=1,ye(t,e,r,n),e.child;case 14:return xm(t,e,e.type,e.pendingProps,n);case 15:return wm(t,e,e.type,e.pendingProps,n);case 19:return Mm(t,e,n);case 31:return r=e.pendingProps,n=e.mode,r={mode:r.mode,children:r.children},t===null?(n=ql(r,n),n.ref=e.ref,e.child=n,n.return=e,e=n):(n=Vn(t.child,r),n.ref=e.ref,e.child=n,n.return=e,e=n),e;case 22:return Sm(t,e,n);case 24:return cr(e),r=Se(re),t===null?(s=Lu(),s===null&&(s=qt,u=ju(),s.pooledCache=u,u.refCount++,u!==null&&(s.pooledCacheLanes|=n),s=u),e.memoizedState={parent:r,cache:s},Pu(e),va(e,re,s)):((t.lanes&n)!==0&&(qu(t,e),ii(e,null,null,n),oi()),s=t.memoizedState,u=e.memoizedState,s.parent!==r?(s={parent:r,cache:r},e.memoizedState=s,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=s),va(e,re,r)):(r=u.cache,va(e,re,r),r!==s.cache&&zu(e,[re],n,!0))),ye(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(l(156,e.tag))}function Wn(t){t.flags|=4}function _m(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Pp(e)){if(e=en.current,e!==null&&((Mt&4194048)===Mt?An!==null:(Mt&62914560)!==Mt&&(Mt&536870912)===0||e!==An))throw ai=Hu,mh;t.flags|=8192}}function Bl(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?el():536870912,t.lanes|=e,ro|=e)}function hi(t,e){if(!Dt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Gt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&65011712,r|=s.flags&65011712,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function fy(t,e,n){var r=e.pendingProps;switch(ku(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Gt(e),null;case 1:return Gt(e),null;case 3:return n=e.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),e.memoizedState.cache!==r&&(e.flags|=2048),Kn(re),Xt(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(Fo(e)?Wn(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,uh())),Gt(e),null;case 26:return n=e.memoizedState,t===null?(Wn(e),n!==null?(Gt(e),_m(e,n)):(Gt(e),e.flags&=-16777217)):n?n!==t.memoizedState?(Wn(e),Gt(e),_m(e,n)):(Gt(e),e.flags&=-16777217):(t.memoizedProps!==r&&Wn(e),Gt(e),e.flags&=-16777217),null;case 27:He(e),n=nt.current;var s=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==r&&Wn(e);else{if(!r){if(e.stateNode===null)throw Error(l(166));return Gt(e),null}t=et.current,Fo(e)?lh(e):(t=_p(s,r,n),e.stateNode=t,Wn(e))}return Gt(e),null;case 5:if(He(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==r&&Wn(e);else{if(!r){if(e.stateNode===null)throw Error(l(166));return Gt(e),null}if(t=et.current,Fo(e))lh(e);else{switch(s=ts(nt.current),t){case 1:t=s.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:t=s.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":t=s.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":t=s.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof r.is=="string"?s.createElement("select",{is:r.is}):s.createElement("select"),r.multiple?t.multiple=!0:r.size&&(t.size=r.size);break;default:t=typeof r.is=="string"?s.createElement(n,{is:r.is}):s.createElement(n)}}t[Jt]=e,t[Pt]=r;t:for(s=e.child;s!==null;){if(s.tag===5||s.tag===6)t.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break t;for(;s.sibling===null;){if(s.return===null||s.return===e)break t;s=s.return}s.sibling.return=s.return,s=s.sibling}e.stateNode=t;t:switch(we(t,n,r),n){case"button":case"input":case"select":case"textarea":t=!!r.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&Wn(e)}}return Gt(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==r&&Wn(e);else{if(typeof r!="string"&&e.stateNode===null)throw Error(l(166));if(t=nt.current,Fo(e)){if(t=e.stateNode,n=e.memoizedProps,r=null,s=Ce,s!==null)switch(s.tag){case 27:case 5:r=s.memoizedProps}t[Jt]=e,t=!!(t.nodeValue===n||r!==null&&r.suppressHydrationWarning===!0||Tp(t.nodeValue,n)),t||sr(e)}else t=ts(t).createTextNode(r),t[Jt]=e,e.stateNode=t}return Gt(e),null;case 13:if(r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(s=Fo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(l(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(l(317));s[Jt]=e}else Jo(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Gt(e),s=!1}else s=uh(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),s=!0;if(!s)return e.flags&256?(Fn(e),e):(Fn(e),null)}if(Fn(e),(e.flags&128)!==0)return e.lanes=n,e;if(n=r!==null,t=t!==null&&t.memoizedState!==null,n){r=e.child,s=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(s=r.alternate.memoizedState.cachePool.pool);var u=null;r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==s&&(r.flags|=2048)}return n!==t&&n&&(e.child.flags|=8192),Bl(e,e.updateQueue),Gt(e),null;case 4:return Xt(),t===null&&Yc(e.stateNode.containerInfo),Gt(e),null;case 10:return Kn(e.type),Gt(e),null;case 19:if(I(oe),s=e.memoizedState,s===null)return Gt(e),null;if(r=(e.flags&128)!==0,u=s.rendering,u===null)if(r)hi(s,!1);else{if(Zt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(u=Ul(t),u!==null){for(e.flags|=128,hi(s,!1),t=u.updateQueue,e.updateQueue=t,Bl(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)oh(n,t),n=n.sibling;return V(oe,oe.current&1|2),e.child}t=t.sibling}s.tail!==null&&ue()>Vl&&(e.flags|=128,r=!0,hi(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ul(u),t!==null){if(e.flags|=128,r=!0,t=t.updateQueue,e.updateQueue=t,Bl(e,t),hi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!u.alternate&&!Dt)return Gt(e),null}else 2*ue()-s.renderingStartTime>Vl&&n!==536870912&&(e.flags|=128,r=!0,hi(s,!1),e.lanes=4194304);s.isBackwards?(u.sibling=e.child,e.child=u):(t=s.last,t!==null?t.sibling=u:e.child=u,s.last=u)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ue(),e.sibling=null,t=oe.current,V(oe,r?t&1|2:t&1),e):(Gt(e),null);case 22:case 23:return Fn(e),Vu(),r=e.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(e.flags|=8192):r&&(e.flags|=8192),r?(n&536870912)!==0&&(e.flags&128)===0&&(Gt(e),e.subtreeFlags&6&&(e.flags|=8192)):Gt(e),n=e.updateQueue,n!==null&&Bl(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),r=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),r!==n&&(e.flags|=2048),t!==null&&I(fr),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),Kn(re),Gt(e),null;case 25:return null;case 30:return null}throw Error(l(156,e.tag))}function dy(t,e){switch(ku(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Kn(re),Xt(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return He(e),null;case 13:if(Fn(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(l(340));Jo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return I(oe),null;case 4:return Xt(),null;case 10:return Kn(e.type),null;case 22:case 23:return Fn(e),Vu(),t!==null&&I(fr),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Kn(re),null;case 25:return null;default:return null}}function Dm(t,e){switch(ku(e),e.tag){case 3:Kn(re),Xt();break;case 26:case 27:case 5:He(e);break;case 4:Xt();break;case 13:Fn(e);break;case 19:I(oe);break;case 10:Kn(e.type);break;case 22:case 23:Fn(e),Vu(),t!==null&&I(fr);break;case 24:Kn(re)}}function mi(t,e){try{var n=e.updateQueue,r=n!==null?n.lastEffect:null;if(r!==null){var s=r.next;n=s;do{if((n.tag&t)===t){r=void 0;var u=n.create,p=n.inst;r=u(),p.destroy=r}n=n.next}while(n!==s)}}catch(y){Ht(e,e.return,y)}}function Oa(t,e,n){try{var r=e.updateQueue,s=r!==null?r.lastEffect:null;if(s!==null){var u=s.next;r=u;do{if((r.tag&t)===t){var p=r.inst,y=p.destroy;if(y!==void 0){p.destroy=void 0,s=e;var A=n,j=y;try{j()}catch(G){Ht(s,A,G)}}}r=r.next}while(r!==u)}}catch(G){Ht(e,e.return,G)}}function Nm(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{xh(e,n)}catch(r){Ht(t,t.return,r)}}}function zm(t,e,n){n.props=hr(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(r){Ht(t,e,r)}}function pi(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof n=="function"?t.refCleanup=n(r):n.current=r}}catch(s){Ht(t,e,s)}}function Rn(t,e){var n=t.ref,r=t.refCleanup;if(n!==null)if(typeof r=="function")try{r()}catch(s){Ht(t,e,s)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){Ht(t,e,s)}else n.current=null}function jm(t){var e=t.type,n=t.memoizedProps,r=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break t;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(s){Ht(t,t.return,s)}}function vc(t,e,n){try{var r=t.stateNode;Ny(r,t.type,n,e),r[Pt]=e}catch(s){Ht(t,t.return,s)}}function Um(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Na(t.type)||t.tag===4}function yc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Um(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Na(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function xc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Il));else if(r!==4&&(r===27&&Na(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(xc(t,e,n),t=t.sibling;t!==null;)xc(t,e,n),t=t.sibling}function Yl(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(r===27&&Na(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(Yl(t,e,n),t=t.sibling;t!==null;)Yl(t,e,n),t=t.sibling}function Lm(t){var e=t.stateNode,n=t.memoizedProps;try{for(var r=t.type,s=e.attributes;s.length;)e.removeAttributeNode(s[0]);we(e,r,n),e[Jt]=t,e[Pt]=n}catch(u){Ht(t,t.return,u)}}var In=!1,It=!1,wc=!1,Hm=typeof WeakSet=="function"?WeakSet:Set,he=null;function hy(t,e){if(t=t.containerInfo,Xc=is,t=$d(t),yu(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else t:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,u=r.focusNode;r=r.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break t}var p=0,y=-1,A=-1,j=0,G=0,K=t,L=null;e:for(;;){for(var H;K!==n||s!==0&&K.nodeType!==3||(y=p+s),K!==u||r!==0&&K.nodeType!==3||(A=p+r),K.nodeType===3&&(p+=K.nodeValue.length),(H=K.firstChild)!==null;)L=K,K=H;for(;;){if(K===t)break e;if(L===n&&++j===s&&(y=p),L===u&&++G===r&&(A=p),(H=K.nextSibling)!==null)break;K=L,L=K.parentNode}K=H}n=y===-1||A===-1?null:{start:y,end:A}}else n=null}n=n||{start:0,end:0}}else n=null;for(Qc={focusedElem:t,selectionRange:n},is=!1,he=e;he!==null;)if(e=he,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,he=t;else for(;he!==null;){switch(e=he,u=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&u!==null){t=void 0,n=e,s=u.memoizedProps,u=u.memoizedState,r=n.stateNode;try{var gt=hr(n.type,s,n.elementType===n.type);t=r.getSnapshotBeforeUpdate(gt,u),r.__reactInternalSnapshotBeforeUpdate=t}catch(ht){Ht(n,n.return,ht)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)$c(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":$c(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(l(163))}if(t=e.sibling,t!==null){t.return=e.return,he=t;break}he=e.return}}function Pm(t,e,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Aa(t,n),r&4&&mi(5,n);break;case 1:if(Aa(t,n),r&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(p){Ht(n,n.return,p)}else{var s=hr(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(s,e,t.__reactInternalSnapshotBeforeUpdate)}catch(p){Ht(n,n.return,p)}}r&64&&Nm(n),r&512&&pi(n,n.return);break;case 3:if(Aa(t,n),r&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{xh(t,e)}catch(p){Ht(n,n.return,p)}}break;case 27:e===null&&r&4&&Lm(n);case 26:case 5:Aa(t,n),e===null&&r&4&&jm(n),r&512&&pi(n,n.return);break;case 12:Aa(t,n);break;case 13:Aa(t,n),r&4&&Ym(t,n),r&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=Sy.bind(null,n),qy(t,n))));break;case 22:if(r=n.memoizedState!==null||In,!r){e=e!==null&&e.memoizedState!==null||It,s=In;var u=It;In=r,(It=e)&&!u?Ra(t,n,(n.subtreeFlags&8772)!==0):Aa(t,n),In=s,It=u}break;case 30:break;default:Aa(t,n)}}function qm(t){var e=t.alternate;e!==null&&(t.alternate=null,qm(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&tu(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Bt=null,ze=!1;function ta(t,e,n){for(n=n.child;n!==null;)Bm(t,e,n),n=n.sibling}function Bm(t,e,n){if(Re&&typeof Re.onCommitFiberUnmount=="function")try{Re.onCommitFiberUnmount(En,n)}catch{}switch(n.tag){case 26:It||Rn(n,e),ta(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:It||Rn(n,e);var r=Bt,s=ze;Na(n.type)&&(Bt=n.stateNode,ze=!1),ta(t,e,n),Ti(n.stateNode),Bt=r,ze=s;break;case 5:It||Rn(n,e);case 6:if(r=Bt,s=ze,Bt=null,ta(t,e,n),Bt=r,ze=s,Bt!==null)if(ze)try{(Bt.nodeType===9?Bt.body:Bt.nodeName==="HTML"?Bt.ownerDocument.body:Bt).removeChild(n.stateNode)}catch(u){Ht(n,e,u)}else try{Bt.removeChild(n.stateNode)}catch(u){Ht(n,e,u)}break;case 18:Bt!==null&&(ze?(t=Bt,Mp(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),Di(t)):Mp(Bt,n.stateNode));break;case 4:r=Bt,s=ze,Bt=n.stateNode.containerInfo,ze=!0,ta(t,e,n),Bt=r,ze=s;break;case 0:case 11:case 14:case 15:It||Oa(2,n,e),It||Oa(4,n,e),ta(t,e,n);break;case 1:It||(Rn(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"&&zm(n,e,r)),ta(t,e,n);break;case 21:ta(t,e,n);break;case 22:It=(r=It)||n.memoizedState!==null,ta(t,e,n),It=r;break;default:ta(t,e,n)}}function Ym(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Di(t)}catch(n){Ht(e,e.return,n)}}function my(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Hm),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Hm),e;default:throw Error(l(435,t.tag))}}function Sc(t,e){var n=my(t);e.forEach(function(r){var s=Ey.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}function Be(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r],u=t,p=e,y=p;t:for(;y!==null;){switch(y.tag){case 27:if(Na(y.type)){Bt=y.stateNode,ze=!1;break t}break;case 5:Bt=y.stateNode,ze=!1;break t;case 3:case 4:Bt=y.stateNode.containerInfo,ze=!0;break t}y=y.return}if(Bt===null)throw Error(l(160));Bm(u,p,s),Bt=null,ze=!1,u=s.alternate,u!==null&&(u.return=null),s.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)Gm(e,t),e=e.sibling}var cn=null;function Gm(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Be(e,t),Ye(t),r&4&&(Oa(3,t,t.return),mi(3,t),Oa(5,t,t.return));break;case 1:Be(e,t),Ye(t),r&512&&(It||n===null||Rn(n,n.return)),r&64&&In&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var s=cn;if(Be(e,t),Ye(t),r&512&&(It||n===null||Rn(n,n.return)),r&4){var u=n!==null?n.memoizedState:null;if(r=t.memoizedState,n===null)if(r===null)if(t.stateNode===null){t:{r=t.type,n=t.memoizedProps,s=s.ownerDocument||s;e:switch(r){case"title":u=s.getElementsByTagName("title")[0],(!u||u[Po]||u[Jt]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=s.createElement(r),s.head.insertBefore(u,s.querySelector("head > title"))),we(u,r,n),u[Jt]=t,fe(u),r=u;break t;case"link":var p=Lp("link","href",s).get(r+(n.href||""));if(p){for(var y=0;y<p.length;y++)if(u=p[y],u.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&u.getAttribute("rel")===(n.rel==null?null:n.rel)&&u.getAttribute("title")===(n.title==null?null:n.title)&&u.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){p.splice(y,1);break e}}u=s.createElement(r),we(u,r,n),s.head.appendChild(u);break;case"meta":if(p=Lp("meta","content",s).get(r+(n.content||""))){for(y=0;y<p.length;y++)if(u=p[y],u.getAttribute("content")===(n.content==null?null:""+n.content)&&u.getAttribute("name")===(n.name==null?null:n.name)&&u.getAttribute("property")===(n.property==null?null:n.property)&&u.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&u.getAttribute("charset")===(n.charSet==null?null:n.charSet)){p.splice(y,1);break e}}u=s.createElement(r),we(u,r,n),s.head.appendChild(u);break;default:throw Error(l(468,r))}u[Jt]=t,fe(u),r=u}t.stateNode=r}else Hp(s,t.type,t.stateNode);else t.stateNode=Up(s,r,t.memoizedProps);else u!==r?(u===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):u.count--,r===null?Hp(s,t.type,t.stateNode):Up(s,r,t.memoizedProps)):r===null&&t.stateNode!==null&&vc(t,t.memoizedProps,n.memoizedProps)}break;case 27:Be(e,t),Ye(t),r&512&&(It||n===null||Rn(n,n.return)),n!==null&&r&4&&vc(t,t.memoizedProps,n.memoizedProps);break;case 5:if(Be(e,t),Ye(t),r&512&&(It||n===null||Rn(n,n.return)),t.flags&32){s=t.stateNode;try{Ur(s,"")}catch(H){Ht(t,t.return,H)}}r&4&&t.stateNode!=null&&(s=t.memoizedProps,vc(t,s,n!==null?n.memoizedProps:s)),r&1024&&(wc=!0);break;case 6:if(Be(e,t),Ye(t),r&4){if(t.stateNode===null)throw Error(l(162));r=t.memoizedProps,n=t.stateNode;try{n.nodeValue=r}catch(H){Ht(t,t.return,H)}}break;case 3:if(as=null,s=cn,cn=es(e.containerInfo),Be(e,t),cn=s,Ye(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Di(e.containerInfo)}catch(H){Ht(t,t.return,H)}wc&&(wc=!1,Vm(t));break;case 4:r=cn,cn=es(t.stateNode.containerInfo),Be(e,t),Ye(t),cn=r;break;case 12:Be(e,t),Ye(t);break;case 13:Be(e,t),Ye(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Cc=ue()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Sc(t,r)));break;case 22:s=t.memoizedState!==null;var A=n!==null&&n.memoizedState!==null,j=In,G=It;if(In=j||s,It=G||A,Be(e,t),It=G,In=j,Ye(t),r&8192)t:for(e=t.stateNode,e._visibility=s?e._visibility&-2:e._visibility|1,s&&(n===null||A||In||It||mr(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){A=n=e;try{if(u=A.stateNode,s)p=u.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{y=A.stateNode;var K=A.memoizedProps.style,L=K!=null&&K.hasOwnProperty("display")?K.display:null;y.style.display=L==null||typeof L=="boolean"?"":(""+L).trim()}}catch(H){Ht(A,A.return,H)}}}else if(e.tag===6){if(n===null){A=e;try{A.stateNode.nodeValue=s?"":A.memoizedProps}catch(H){Ht(A,A.return,H)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}r&4&&(r=t.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,Sc(t,n))));break;case 19:Be(e,t),Ye(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Sc(t,r)));break;case 30:break;case 21:break;default:Be(e,t),Ye(t)}}function Ye(t){var e=t.flags;if(e&2){try{for(var n,r=t.return;r!==null;){if(Um(r)){n=r;break}r=r.return}if(n==null)throw Error(l(160));switch(n.tag){case 27:var s=n.stateNode,u=yc(t);Yl(t,u,s);break;case 5:var p=n.stateNode;n.flags&32&&(Ur(p,""),n.flags&=-33);var y=yc(t);Yl(t,y,p);break;case 3:case 4:var A=n.stateNode.containerInfo,j=yc(t);xc(t,j,A);break;default:throw Error(l(161))}}catch(G){Ht(t,t.return,G)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Vm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Vm(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Aa(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Pm(t,e.alternate,e),e=e.sibling}function mr(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Oa(4,e,e.return),mr(e);break;case 1:Rn(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&zm(e,e.return,n),mr(e);break;case 27:Ti(e.stateNode);case 26:case 5:Rn(e,e.return),mr(e);break;case 22:e.memoizedState===null&&mr(e);break;case 30:mr(e);break;default:mr(e)}t=t.sibling}}function Ra(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var r=e.alternate,s=t,u=e,p=u.flags;switch(u.tag){case 0:case 11:case 15:Ra(s,u,n),mi(4,u);break;case 1:if(Ra(s,u,n),r=u,s=r.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(j){Ht(r,r.return,j)}if(r=u,s=r.updateQueue,s!==null){var y=r.stateNode;try{var A=s.shared.hiddenCallbacks;if(A!==null)for(s.shared.hiddenCallbacks=null,s=0;s<A.length;s++)yh(A[s],y)}catch(j){Ht(r,r.return,j)}}n&&p&64&&Nm(u),pi(u,u.return);break;case 27:Lm(u);case 26:case 5:Ra(s,u,n),n&&r===null&&p&4&&jm(u),pi(u,u.return);break;case 12:Ra(s,u,n);break;case 13:Ra(s,u,n),n&&p&4&&Ym(s,u);break;case 22:u.memoizedState===null&&Ra(s,u,n),pi(u,u.return);break;case 30:break;default:Ra(s,u,n)}e=e.sibling}}function Ec(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&ti(n))}function Tc(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&ti(t))}function Cn(t,e,n,r){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Xm(t,e,n,r),e=e.sibling}function Xm(t,e,n,r){var s=e.flags;switch(e.tag){case 0:case 11:case 15:Cn(t,e,n,r),s&2048&&mi(9,e);break;case 1:Cn(t,e,n,r);break;case 3:Cn(t,e,n,r),s&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&ti(t)));break;case 12:if(s&2048){Cn(t,e,n,r),t=e.stateNode;try{var u=e.memoizedProps,p=u.id,y=u.onPostCommit;typeof y=="function"&&y(p,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(A){Ht(e,e.return,A)}}else Cn(t,e,n,r);break;case 13:Cn(t,e,n,r);break;case 23:break;case 22:u=e.stateNode,p=e.alternate,e.memoizedState!==null?u._visibility&2?Cn(t,e,n,r):gi(t,e):u._visibility&2?Cn(t,e,n,r):(u._visibility|=2,eo(t,e,n,r,(e.subtreeFlags&10256)!==0)),s&2048&&Ec(p,e);break;case 24:Cn(t,e,n,r),s&2048&&Tc(e.alternate,e);break;default:Cn(t,e,n,r)}}function eo(t,e,n,r,s){for(s=s&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var u=t,p=e,y=n,A=r,j=p.flags;switch(p.tag){case 0:case 11:case 15:eo(u,p,y,A,s),mi(8,p);break;case 23:break;case 22:var G=p.stateNode;p.memoizedState!==null?G._visibility&2?eo(u,p,y,A,s):gi(u,p):(G._visibility|=2,eo(u,p,y,A,s)),s&&j&2048&&Ec(p.alternate,p);break;case 24:eo(u,p,y,A,s),s&&j&2048&&Tc(p.alternate,p);break;default:eo(u,p,y,A,s)}e=e.sibling}}function gi(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,r=e,s=r.flags;switch(r.tag){case 22:gi(n,r),s&2048&&Ec(r.alternate,r);break;case 24:gi(n,r),s&2048&&Tc(r.alternate,r);break;default:gi(n,r)}e=e.sibling}}var bi=8192;function no(t){if(t.subtreeFlags&bi)for(t=t.child;t!==null;)Qm(t),t=t.sibling}function Qm(t){switch(t.tag){case 26:no(t),t.flags&bi&&t.memoizedState!==null&&Iy(cn,t.memoizedState,t.memoizedProps);break;case 5:no(t);break;case 3:case 4:var e=cn;cn=es(t.stateNode.containerInfo),no(t),cn=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=bi,bi=16777216,no(t),bi=e):no(t));break;default:no(t)}}function Zm(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function vi(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var r=e[n];he=r,$m(r,t)}Zm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Km(t),t=t.sibling}function Km(t){switch(t.tag){case 0:case 11:case 15:vi(t),t.flags&2048&&Oa(9,t,t.return);break;case 3:vi(t);break;case 12:vi(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Gl(t)):vi(t);break;default:vi(t)}}function Gl(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var r=e[n];he=r,$m(r,t)}Zm(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Oa(8,e,e.return),Gl(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,Gl(e));break;default:Gl(e)}t=t.sibling}}function $m(t,e){for(;he!==null;){var n=he;switch(n.tag){case 0:case 11:case 15:Oa(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ti(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,he=r;else t:for(n=t;he!==null;){r=he;var s=r.sibling,u=r.return;if(qm(r),r===n){he=null;break t}if(s!==null){s.return=u,he=s;break t}he=u}}}var py={getCacheForType:function(t){var e=Se(re),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n}},gy=typeof WeakMap=="function"?WeakMap:Map,Nt=0,qt=null,Rt=null,Mt=0,zt=0,Ge=null,Ca=!1,ao=!1,Oc=!1,ea=0,Zt=0,Ma=0,pr=0,Ac=0,nn=0,ro=0,yi=null,je=null,Rc=!1,Cc=0,Vl=1/0,Xl=null,ka=null,xe=0,_a=null,oo=null,io=0,Mc=0,kc=null,Fm=null,xi=0,_c=null;function Ve(){if((Nt&2)!==0&&Mt!==0)return Mt&-Mt;if(k.T!==null){var t=Zr;return t!==0?t:Hc()}return Ia()}function Jm(){nn===0&&(nn=(Mt&536870912)===0||Dt?sn():536870912);var t=en.current;return t!==null&&(t.flags|=32),nn}function Xe(t,e,n){(t===qt&&(zt===2||zt===9)||t.cancelPendingCommit!==null)&&(lo(t,0),Da(t,Mt,nn,!1)),ga(t,n),((Nt&2)===0||t!==qt)&&(t===qt&&((Nt&2)===0&&(pr|=n),Zt===4&&Da(t,Mt,nn,!1)),Mn(t))}function Wm(t,e,n){if((Nt&6)!==0)throw Error(l(327));var r=!n&&(e&124)===0&&(e&t.expiredLanes)===0||Wa(t,e),s=r?yy(t,e):zc(t,e,!0),u=r;do{if(s===0){ao&&!r&&Da(t,e,0,!1);break}else{if(n=t.current.alternate,u&&!by(n)){s=zc(t,e,!1),u=!1;continue}if(s===2){if(u=e,t.errorRecoveryDisabledLanes&u)var p=0;else p=t.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){e=p;t:{var y=t;s=yi;var A=y.current.memoizedState.isDehydrated;if(A&&(lo(y,p).flags|=256),p=zc(y,p,!1),p!==2){if(Oc&&!A){y.errorRecoveryDisabledLanes|=u,pr|=u,s=4;break t}u=je,je=s,u!==null&&(je===null?je=u:je.push.apply(je,u))}s=p}if(u=!1,s!==2)continue}}if(s===1){lo(t,0),Da(t,e,0,!0);break}t:{switch(r=t,u=s,u){case 0:case 1:throw Error(l(345));case 4:if((e&4194048)!==e)break;case 6:Da(r,e,nn,!Ca);break t;case 2:je=null;break;case 3:case 5:break;default:throw Error(l(329))}if((e&62914560)===e&&(s=Cc+300-ue(),10<s)){if(Da(r,e,nn,!Ca),Ja(r,0,!0)!==0)break t;r.timeoutHandle=Rp(Im.bind(null,r,n,je,Xl,Rc,e,nn,pr,ro,Ca,u,2,-0,0),s);break t}Im(r,n,je,Xl,Rc,e,nn,pr,ro,Ca,u,0,-0,0)}}break}while(!0);Mn(t)}function Im(t,e,n,r,s,u,p,y,A,j,G,K,L,H){if(t.timeoutHandle=-1,K=e.subtreeFlags,(K&8192||(K&16785408)===16785408)&&(Ri={stylesheets:null,count:0,unsuspend:Wy},Qm(e),K=t1(),K!==null)){t.cancelPendingCommit=K(ip.bind(null,t,e,u,n,r,s,p,y,A,G,1,L,H)),Da(t,u,p,!j);return}ip(t,e,u,n,r,s,p,y,A)}function by(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var s=n[r],u=s.getSnapshot;s=s.value;try{if(!Pe(u(),s))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Da(t,e,n,r){e&=~Ac,e&=~pr,t.suspendedLanes|=e,t.pingedLanes&=~e,r&&(t.warmLanes|=e),r=t.expirationTimes;for(var s=e;0<s;){var u=31-be(s),p=1<<u;r[u]=-1,s&=~p}n!==0&&vt(t,n,e)}function Ql(){return(Nt&6)===0?(wi(0),!1):!0}function Dc(){if(Rt!==null){if(zt===0)var t=Rt.return;else t=Rt,Zn=ur=null,$u(t),Ir=null,fi=0,t=Rt;for(;t!==null;)Dm(t.alternate,t),t=t.return;Rt=null}}function lo(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,jy(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),Dc(),qt=t,Rt=n=Vn(t.current,null),Mt=e,zt=0,Ge=null,Ca=!1,ao=Wa(t,e),Oc=!1,ro=nn=Ac=pr=Ma=Zt=0,je=yi=null,Rc=!1,(e&8)!==0&&(e|=e&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=e;0<r;){var s=31-be(r),u=1<<s;e|=t[s],r&=~u}return ea=e,ml(),n}function tp(t,e){Et=null,k.H=Nl,e===ni||e===El?(e=bh(),zt=3):e===mh?(e=bh(),zt=4):zt=e===vm?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Ge=e,Rt===null&&(Zt=1,Hl(t,Je(e,t.current)))}function ep(){var t=k.H;return k.H=Nl,t===null?Nl:t}function np(){var t=k.A;return k.A=py,t}function Nc(){Zt=4,Ca||(Mt&4194048)!==Mt&&en.current!==null||(ao=!0),(Ma&134217727)===0&&(pr&134217727)===0||qt===null||Da(qt,Mt,nn,!1)}function zc(t,e,n){var r=Nt;Nt|=2;var s=ep(),u=np();(qt!==t||Mt!==e)&&(Xl=null,lo(t,e)),e=!1;var p=Zt;t:do try{if(zt!==0&&Rt!==null){var y=Rt,A=Ge;switch(zt){case 8:Dc(),p=6;break t;case 3:case 2:case 9:case 6:en.current===null&&(e=!0);var j=zt;if(zt=0,Ge=null,so(t,y,A,j),n&&ao){p=0;break t}break;default:j=zt,zt=0,Ge=null,so(t,y,A,j)}}vy(),p=Zt;break}catch(G){tp(t,G)}while(!0);return e&&t.shellSuspendCounter++,Zn=ur=null,Nt=r,k.H=s,k.A=u,Rt===null&&(qt=null,Mt=0,ml()),p}function vy(){for(;Rt!==null;)ap(Rt)}function yy(t,e){var n=Nt;Nt|=2;var r=ep(),s=np();qt!==t||Mt!==e?(Xl=null,Vl=ue()+500,lo(t,e)):ao=Wa(t,e);t:do try{if(zt!==0&&Rt!==null){e=Rt;var u=Ge;e:switch(zt){case 1:zt=0,Ge=null,so(t,e,u,1);break;case 2:case 9:if(ph(u)){zt=0,Ge=null,rp(e);break}e=function(){zt!==2&&zt!==9||qt!==t||(zt=7),Mn(t)},u.then(e,e);break t;case 3:zt=7;break t;case 4:zt=5;break t;case 7:ph(u)?(zt=0,Ge=null,rp(e)):(zt=0,Ge=null,so(t,e,u,7));break;case 5:var p=null;switch(Rt.tag){case 26:p=Rt.memoizedState;case 5:case 27:var y=Rt;if(!p||Pp(p)){zt=0,Ge=null;var A=y.sibling;if(A!==null)Rt=A;else{var j=y.return;j!==null?(Rt=j,Zl(j)):Rt=null}break e}}zt=0,Ge=null,so(t,e,u,5);break;case 6:zt=0,Ge=null,so(t,e,u,6);break;case 8:Dc(),Zt=6;break t;default:throw Error(l(462))}}xy();break}catch(G){tp(t,G)}while(!0);return Zn=ur=null,k.H=r,k.A=s,Nt=n,Rt!==null?0:(qt=null,Mt=0,ml(),Zt)}function xy(){for(;Rt!==null&&!Uo();)ap(Rt)}function ap(t){var e=km(t.alternate,t,ea);t.memoizedProps=t.pendingProps,e===null?Zl(t):Rt=e}function rp(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=Tm(n,e,e.pendingProps,e.type,void 0,Mt);break;case 11:e=Tm(n,e,e.pendingProps,e.type.render,e.ref,Mt);break;case 5:$u(e);default:Dm(n,e),e=Rt=oh(e,ea),e=km(n,e,ea)}t.memoizedProps=t.pendingProps,e===null?Zl(t):Rt=e}function so(t,e,n,r){Zn=ur=null,$u(e),Ir=null,fi=0;var s=e.return;try{if(uy(t,s,e,n,Mt)){Zt=1,Hl(t,Je(n,t.current)),Rt=null;return}}catch(u){if(s!==null)throw Rt=s,u;Zt=1,Hl(t,Je(n,t.current)),Rt=null;return}e.flags&32768?(Dt||r===1?t=!0:ao||(Mt&536870912)!==0?t=!1:(Ca=t=!0,(r===2||r===9||r===3||r===6)&&(r=en.current,r!==null&&r.tag===13&&(r.flags|=16384))),op(e,t)):Zl(e)}function Zl(t){var e=t;do{if((e.flags&32768)!==0){op(e,Ca);return}t=e.return;var n=fy(e.alternate,e,ea);if(n!==null){Rt=n;return}if(e=e.sibling,e!==null){Rt=e;return}Rt=e=t}while(e!==null);Zt===0&&(Zt=5)}function op(t,e){do{var n=dy(t.alternate,t);if(n!==null){n.flags&=32767,Rt=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){Rt=t;return}Rt=t=n}while(t!==null);Zt=6,Rt=null}function ip(t,e,n,r,s,u,p,y,A){t.cancelPendingCommit=null;do Kl();while(xe!==0);if((Nt&6)!==0)throw Error(l(327));if(e!==null){if(e===t.current)throw Error(l(177));if(u=e.lanes|e.childLanes,u|=Tu,nl(t,n,u,p,y,A),t===qt&&(Rt=qt=null,Mt=0),oo=e,_a=t,io=n,Mc=u,kc=s,Fm=r,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Ty(Ar,function(){return fp(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||r){r=k.T,k.T=null,s=Z.p,Z.p=2,p=Nt,Nt|=4;try{hy(t,e,n)}finally{Nt=p,Z.p=s,k.T=r}}xe=1,lp(),sp(),up()}}function lp(){if(xe===1){xe=0;var t=_a,e=oo,n=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||n){n=k.T,k.T=null;var r=Z.p;Z.p=2;var s=Nt;Nt|=4;try{Gm(e,t);var u=Qc,p=$d(t.containerInfo),y=u.focusedElem,A=u.selectionRange;if(p!==y&&y&&y.ownerDocument&&Kd(y.ownerDocument.documentElement,y)){if(A!==null&&yu(y)){var j=A.start,G=A.end;if(G===void 0&&(G=j),"selectionStart"in y)y.selectionStart=j,y.selectionEnd=Math.min(G,y.value.length);else{var K=y.ownerDocument||document,L=K&&K.defaultView||window;if(L.getSelection){var H=L.getSelection(),gt=y.textContent.length,ht=Math.min(A.start,gt),Lt=A.end===void 0?ht:Math.min(A.end,gt);!H.extend&&ht>Lt&&(p=Lt,Lt=ht,ht=p);var N=Zd(y,ht),M=Zd(y,Lt);if(N&&M&&(H.rangeCount!==1||H.anchorNode!==N.node||H.anchorOffset!==N.offset||H.focusNode!==M.node||H.focusOffset!==M.offset)){var z=K.createRange();z.setStart(N.node,N.offset),H.removeAllRanges(),ht>Lt?(H.addRange(z),H.extend(M.node,M.offset)):(z.setEnd(M.node,M.offset),H.addRange(z))}}}}for(K=[],H=y;H=H.parentNode;)H.nodeType===1&&K.push({element:H,left:H.scrollLeft,top:H.scrollTop});for(typeof y.focus=="function"&&y.focus(),y=0;y<K.length;y++){var X=K[y];X.element.scrollLeft=X.left,X.element.scrollTop=X.top}}is=!!Xc,Qc=Xc=null}finally{Nt=s,Z.p=r,k.T=n}}t.current=e,xe=2}}function sp(){if(xe===2){xe=0;var t=_a,e=oo,n=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||n){n=k.T,k.T=null;var r=Z.p;Z.p=2;var s=Nt;Nt|=4;try{Pm(t,e.alternate,e)}finally{Nt=s,Z.p=r,k.T=n}}xe=3}}function up(){if(xe===4||xe===3){xe=0,Tr();var t=_a,e=oo,n=io,r=Fm;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?xe=5:(xe=0,oo=_a=null,cp(t,t.pendingLanes));var s=t.pendingLanes;if(s===0&&(ka=null),ve(n),e=e.stateNode,Re&&typeof Re.onCommitFiberRoot=="function")try{Re.onCommitFiberRoot(En,e,void 0,(e.current.flags&128)===128)}catch{}if(r!==null){e=k.T,s=Z.p,Z.p=2,k.T=null;try{for(var u=t.onRecoverableError,p=0;p<r.length;p++){var y=r[p];u(y.value,{componentStack:y.stack})}}finally{k.T=e,Z.p=s}}(io&3)!==0&&Kl(),Mn(t),s=t.pendingLanes,(n&4194090)!==0&&(s&42)!==0?t===_c?xi++:(xi=0,_c=t):xi=0,wi(0)}}function cp(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,ti(e)))}function Kl(t){return lp(),sp(),up(),fp()}function fp(){if(xe!==5)return!1;var t=_a,e=Mc;Mc=0;var n=ve(io),r=k.T,s=Z.p;try{Z.p=32>n?32:n,k.T=null,n=kc,kc=null;var u=_a,p=io;if(xe=0,oo=_a=null,io=0,(Nt&6)!==0)throw Error(l(331));var y=Nt;if(Nt|=4,Km(u.current),Xm(u,u.current,p,n),Nt=y,wi(0,!1),Re&&typeof Re.onPostCommitFiberRoot=="function")try{Re.onPostCommitFiberRoot(En,u)}catch{}return!0}finally{Z.p=s,k.T=r,cp(t,e)}}function dp(t,e,n){e=Je(n,e),e=uc(t.stateNode,e,2),t=wa(t,e,2),t!==null&&(ga(t,2),Mn(t))}function Ht(t,e,n){if(t.tag===3)dp(t,t,n);else for(;e!==null;){if(e.tag===3){dp(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ka===null||!ka.has(r))){t=Je(n,t),n=gm(2),r=wa(e,n,2),r!==null&&(bm(n,r,e,t),ga(r,2),Mn(r));break}}e=e.return}}function jc(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new gy;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(Oc=!0,s.add(n),t=wy.bind(null,t,e,n),e.then(t,t))}function wy(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,qt===t&&(Mt&n)===n&&(Zt===4||Zt===3&&(Mt&62914560)===Mt&&300>ue()-Cc?(Nt&2)===0&&lo(t,0):Ac|=n,ro===Mt&&(ro=0)),Mn(t)}function hp(t,e){e===0&&(e=el()),t=Gr(t,e),t!==null&&(ga(t,e),Mn(t))}function Sy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),hp(t,n)}function Ey(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(l(314))}r!==null&&r.delete(e),hp(t,n)}function Ty(t,e){return on(t,e)}var $l=null,uo=null,Uc=!1,Fl=!1,Lc=!1,gr=0;function Mn(t){t!==uo&&t.next===null&&(uo===null?$l=uo=t:uo=uo.next=t),Fl=!0,Uc||(Uc=!0,Ay())}function wi(t,e){if(!Lc&&Fl){Lc=!0;do for(var n=!1,r=$l;r!==null;){if(t!==0){var s=r.pendingLanes;if(s===0)var u=0;else{var p=r.suspendedLanes,y=r.pingedLanes;u=(1<<31-be(42|t)+1)-1,u&=s&~(p&~y),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(n=!0,bp(r,u))}else u=Mt,u=Ja(r,r===qt?u:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(u&3)===0||Wa(r,u)||(n=!0,bp(r,u));r=r.next}while(n);Lc=!1}}function Oy(){mp()}function mp(){Fl=Uc=!1;var t=0;gr!==0&&(zy()&&(t=gr),gr=0);for(var e=ue(),n=null,r=$l;r!==null;){var s=r.next,u=pp(r,e);u===0?(r.next=null,n===null?$l=s:n.next=s,s===null&&(uo=n)):(n=r,(t!==0||(u&3)!==0)&&(Fl=!0)),r=s}wi(t)}function pp(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var p=31-be(u),y=1<<p,A=s[p];A===-1?((y&n)===0||(y&r)!==0)&&(s[p]=Lo(y,e)):A<=e&&(t.expiredLanes|=y),u&=~y}if(e=qt,n=Mt,n=Ja(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,n===0||t===e&&(zt===2||zt===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&Sn(r),t.callbackNode=null,t.callbackPriority=0;if((n&3)===0||Wa(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(r!==null&&Sn(r),ve(n)){case 2:case 8:n=Ii;break;case 32:n=Ar;break;case 268435456:n=qn;break;default:n=Ar}return r=gp.bind(null,t),n=on(n,r),t.callbackPriority=e,t.callbackNode=n,e}return r!==null&&r!==null&&Sn(r),t.callbackPriority=2,t.callbackNode=null,2}function gp(t,e){if(xe!==0&&xe!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(Kl()&&t.callbackNode!==n)return null;var r=Mt;return r=Ja(t,t===qt?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(Wm(t,r,e),pp(t,ue()),t.callbackNode!=null&&t.callbackNode===n?gp.bind(null,t):null)}function bp(t,e){if(Kl())return null;Wm(t,e,!0)}function Ay(){Uy(function(){(Nt&6)!==0?on(ge,Oy):mp()})}function Hc(){return gr===0&&(gr=sn()),gr}function vp(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ll(""+t)}function yp(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function Ry(t,e,n,r,s){if(e==="submit"&&n&&n.stateNode===s){var u=vp((s[Pt]||null).action),p=r.submitter;p&&(e=(e=p[Pt]||null)?vp(e.formAction):p.getAttribute("formAction"),e!==null&&(u=e,p=null));var y=new fl("action","action",null,r,s);t.push({event:y,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(gr!==0){var A=p?yp(s,p):new FormData(s);rc(n,{pending:!0,data:A,method:s.method,action:u},null,A)}}else typeof u=="function"&&(y.preventDefault(),A=p?yp(s,p):new FormData(s),rc(n,{pending:!0,data:A,method:s.method,action:u},u,A))},currentTarget:s}]})}}for(var Pc=0;Pc<Eu.length;Pc++){var qc=Eu[Pc],Cy=qc.toLowerCase(),My=qc[0].toUpperCase()+qc.slice(1);un(Cy,"on"+My)}un(Wd,"onAnimationEnd"),un(Id,"onAnimationIteration"),un(th,"onAnimationStart"),un("dblclick","onDoubleClick"),un("focusin","onFocus"),un("focusout","onBlur"),un(Qv,"onTransitionRun"),un(Zv,"onTransitionStart"),un(Kv,"onTransitionCancel"),un(eh,"onTransitionEnd"),Nr("onMouseEnter",["mouseout","mouseover"]),Nr("onMouseLeave",["mouseout","mouseover"]),Nr("onPointerEnter",["pointerout","pointerover"]),Nr("onPointerLeave",["pointerout","pointerover"]),tr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),tr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),tr("onBeforeInput",["compositionend","keypress","textInput","paste"]),tr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),tr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),tr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Si="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ky=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Si));function xp(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;t:{var u=void 0;if(e)for(var p=r.length-1;0<=p;p--){var y=r[p],A=y.instance,j=y.currentTarget;if(y=y.listener,A!==u&&s.isPropagationStopped())break t;u=y,s.currentTarget=j;try{u(s)}catch(G){Ll(G)}s.currentTarget=null,u=A}else for(p=0;p<r.length;p++){if(y=r[p],A=y.instance,j=y.currentTarget,y=y.listener,A!==u&&s.isPropagationStopped())break t;u=y,s.currentTarget=j;try{u(s)}catch(G){Ll(G)}s.currentTarget=null,u=A}}}}function Ct(t,e){var n=e[Mr];n===void 0&&(n=e[Mr]=new Set);var r=t+"__bubble";n.has(r)||(wp(e,t,2,!1),n.add(r))}function Bc(t,e,n){var r=0;e&&(r|=4),wp(n,t,r,e)}var Jl="_reactListening"+Math.random().toString(36).slice(2);function Yc(t){if(!t[Jl]){t[Jl]=!0,md.forEach(function(n){n!=="selectionchange"&&(ky.has(n)||Bc(n,!1,t),Bc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Jl]||(e[Jl]=!0,Bc("selectionchange",!1,e))}}function wp(t,e,n,r){switch(Xp(e)){case 2:var s=a1;break;case 8:s=r1;break;default:s=nf}n=s.bind(null,e,n,t),s=void 0,!cu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Gc(t,e,n,r,s){var u=r;if((e&1)===0&&(e&2)===0&&r!==null)t:for(;;){if(r===null)return;var p=r.tag;if(p===3||p===4){var y=r.stateNode.containerInfo;if(y===s)break;if(p===4)for(p=r.return;p!==null;){var A=p.tag;if((A===3||A===4)&&p.stateNode.containerInfo===s)return;p=p.return}for(;y!==null;){if(p=kr(y),p===null)return;if(A=p.tag,A===5||A===6||A===26||A===27){r=u=p;continue t}y=y.parentNode}}r=r.return}Cd(function(){var j=u,G=su(n),K=[];t:{var L=nh.get(t);if(L!==void 0){var H=fl,gt=t;switch(t){case"keypress":if(ul(n)===0)break t;case"keydown":case"keyup":H=Tv;break;case"focusin":gt="focus",H=mu;break;case"focusout":gt="blur",H=mu;break;case"beforeblur":case"afterblur":H=mu;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":H=_d;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":H=dv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":H=Rv;break;case Wd:case Id:case th:H=pv;break;case eh:H=Mv;break;case"scroll":case"scrollend":H=cv;break;case"wheel":H=_v;break;case"copy":case"cut":case"paste":H=bv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":H=Nd;break;case"toggle":case"beforetoggle":H=Nv}var ht=(e&4)!==0,Lt=!ht&&(t==="scroll"||t==="scrollend"),N=ht?L!==null?L+"Capture":null:L;ht=[];for(var M=j,z;M!==null;){var X=M;if(z=X.stateNode,X=X.tag,X!==5&&X!==26&&X!==27||z===null||N===null||(X=Bo(M,N),X!=null&&ht.push(Ei(M,X,z))),Lt)break;M=M.return}0<ht.length&&(L=new H(L,gt,null,n,G),K.push({event:L,listeners:ht}))}}if((e&7)===0){t:{if(L=t==="mouseover"||t==="pointerover",H=t==="mouseout"||t==="pointerout",L&&n!==lu&&(gt=n.relatedTarget||n.fromElement)&&(kr(gt)||gt[ce]))break t;if((H||L)&&(L=G.window===G?G:(L=G.ownerDocument)?L.defaultView||L.parentWindow:window,H?(gt=n.relatedTarget||n.toElement,H=j,gt=gt?kr(gt):null,gt!==null&&(Lt=f(gt),ht=gt.tag,gt!==Lt||ht!==5&&ht!==27&&ht!==6)&&(gt=null)):(H=null,gt=j),H!==gt)){if(ht=_d,X="onMouseLeave",N="onMouseEnter",M="mouse",(t==="pointerout"||t==="pointerover")&&(ht=Nd,X="onPointerLeave",N="onPointerEnter",M="pointer"),Lt=H==null?L:qo(H),z=gt==null?L:qo(gt),L=new ht(X,M+"leave",H,n,G),L.target=Lt,L.relatedTarget=z,X=null,kr(G)===j&&(ht=new ht(N,M+"enter",gt,n,G),ht.target=z,ht.relatedTarget=Lt,X=ht),Lt=X,H&&gt)e:{for(ht=H,N=gt,M=0,z=ht;z;z=co(z))M++;for(z=0,X=N;X;X=co(X))z++;for(;0<M-z;)ht=co(ht),M--;for(;0<z-M;)N=co(N),z--;for(;M--;){if(ht===N||N!==null&&ht===N.alternate)break e;ht=co(ht),N=co(N)}ht=null}else ht=null;H!==null&&Sp(K,L,H,ht,!1),gt!==null&&Lt!==null&&Sp(K,Lt,gt,ht,!0)}}t:{if(L=j?qo(j):window,H=L.nodeName&&L.nodeName.toLowerCase(),H==="select"||H==="input"&&L.type==="file")var it=Bd;else if(Pd(L))if(Yd)it=Gv;else{it=Bv;var Ot=qv}else H=L.nodeName,!H||H.toLowerCase()!=="input"||L.type!=="checkbox"&&L.type!=="radio"?j&&iu(j.elementType)&&(it=Bd):it=Yv;if(it&&(it=it(t,j))){qd(K,it,n,G);break t}Ot&&Ot(t,L,j),t==="focusout"&&j&&L.type==="number"&&j.memoizedProps.value!=null&&ou(L,"number",L.value)}switch(Ot=j?qo(j):window,t){case"focusin":(Pd(Ot)||Ot.contentEditable==="true")&&(qr=Ot,xu=j,$o=null);break;case"focusout":$o=xu=qr=null;break;case"mousedown":wu=!0;break;case"contextmenu":case"mouseup":case"dragend":wu=!1,Fd(K,n,G);break;case"selectionchange":if(Xv)break;case"keydown":case"keyup":Fd(K,n,G)}var ut;if(gu)t:{switch(t){case"compositionstart":var mt="onCompositionStart";break t;case"compositionend":mt="onCompositionEnd";break t;case"compositionupdate":mt="onCompositionUpdate";break t}mt=void 0}else Pr?Ld(t,n)&&(mt="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(mt="onCompositionStart");mt&&(zd&&n.locale!=="ko"&&(Pr||mt!=="onCompositionStart"?mt==="onCompositionEnd"&&Pr&&(ut=Md()):(ba=G,fu="value"in ba?ba.value:ba.textContent,Pr=!0)),Ot=Wl(j,mt),0<Ot.length&&(mt=new Dd(mt,t,null,n,G),K.push({event:mt,listeners:Ot}),ut?mt.data=ut:(ut=Hd(n),ut!==null&&(mt.data=ut)))),(ut=jv?Uv(t,n):Lv(t,n))&&(mt=Wl(j,"onBeforeInput"),0<mt.length&&(Ot=new Dd("onBeforeInput","beforeinput",null,n,G),K.push({event:Ot,listeners:mt}),Ot.data=ut)),Ry(K,t,j,n,G)}xp(K,e)})}function Ei(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Wl(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,u=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||u===null||(s=Bo(t,n),s!=null&&r.unshift(Ei(t,s,u)),s=Bo(t,e),s!=null&&r.push(Ei(t,s,u))),t.tag===3)return r;t=t.return}return[]}function co(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Sp(t,e,n,r,s){for(var u=e._reactName,p=[];n!==null&&n!==r;){var y=n,A=y.alternate,j=y.stateNode;if(y=y.tag,A!==null&&A===r)break;y!==5&&y!==26&&y!==27||j===null||(A=j,s?(j=Bo(n,u),j!=null&&p.unshift(Ei(n,j,A))):s||(j=Bo(n,u),j!=null&&p.push(Ei(n,j,A)))),n=n.return}p.length!==0&&t.push({event:e,listeners:p})}var _y=/\r\n?/g,Dy=/\u0000|\uFFFD/g;function Ep(t){return(typeof t=="string"?t:""+t).replace(_y,`
`).replace(Dy,"")}function Tp(t,e){return e=Ep(e),Ep(t)===e}function Il(){}function Ut(t,e,n,r,s,u){switch(n){case"children":typeof r=="string"?e==="body"||e==="textarea"&&r===""||Ur(t,r):(typeof r=="number"||typeof r=="bigint")&&e!=="body"&&Ur(t,""+r);break;case"className":rl(t,"class",r);break;case"tabIndex":rl(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":rl(t,n,r);break;case"style":Ad(t,r,u);break;case"data":if(e!=="object"){rl(t,"data",r);break}case"src":case"href":if(r===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(n);break}r=ll(""+r),t.setAttribute(n,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(n==="formAction"?(e!=="input"&&Ut(t,e,"name",s.name,s,null),Ut(t,e,"formEncType",s.formEncType,s,null),Ut(t,e,"formMethod",s.formMethod,s,null),Ut(t,e,"formTarget",s.formTarget,s,null)):(Ut(t,e,"encType",s.encType,s,null),Ut(t,e,"method",s.method,s,null),Ut(t,e,"target",s.target,s,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(n);break}r=ll(""+r),t.setAttribute(n,r);break;case"onClick":r!=null&&(t.onclick=Il);break;case"onScroll":r!=null&&Ct("scroll",t);break;case"onScrollEnd":r!=null&&Ct("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(l(61));if(n=r.__html,n!=null){if(s.children!=null)throw Error(l(60));t.innerHTML=n}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}n=ll(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(n,""+r):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":r===!0?t.setAttribute(n,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(n,r):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(n,r):t.removeAttribute(n);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(n):t.setAttribute(n,r);break;case"popover":Ct("beforetoggle",t),Ct("toggle",t),al(t,"popover",r);break;case"xlinkActuate":Yn(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Yn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Yn(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Yn(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Yn(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Yn(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Yn(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Yn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Yn(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":al(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=sv.get(n)||n,al(t,n,r))}}function Vc(t,e,n,r,s,u){switch(n){case"style":Ad(t,r,u);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(l(61));if(n=r.__html,n!=null){if(s.children!=null)throw Error(l(60));t.innerHTML=n}}break;case"children":typeof r=="string"?Ur(t,r):(typeof r=="number"||typeof r=="bigint")&&Ur(t,""+r);break;case"onScroll":r!=null&&Ct("scroll",t);break;case"onScrollEnd":r!=null&&Ct("scrollend",t);break;case"onClick":r!=null&&(t.onclick=Il);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!pd.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),e=n.slice(2,s?n.length-7:void 0),u=t[Pt]||null,u=u!=null?u[n]:null,typeof u=="function"&&t.removeEventListener(e,u,s),typeof r=="function")){typeof u!="function"&&u!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,r,s);break t}n in t?t[n]=r:r===!0?t.setAttribute(n,""):al(t,n,r)}}}function we(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ct("error",t),Ct("load",t);var r=!1,s=!1,u;for(u in n)if(n.hasOwnProperty(u)){var p=n[u];if(p!=null)switch(u){case"src":r=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,e));default:Ut(t,e,u,p,n,null)}}s&&Ut(t,e,"srcSet",n.srcSet,n,null),r&&Ut(t,e,"src",n.src,n,null);return;case"input":Ct("invalid",t);var y=u=p=s=null,A=null,j=null;for(r in n)if(n.hasOwnProperty(r)){var G=n[r];if(G!=null)switch(r){case"name":s=G;break;case"type":p=G;break;case"checked":A=G;break;case"defaultChecked":j=G;break;case"value":u=G;break;case"defaultValue":y=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(l(137,e));break;default:Ut(t,e,r,G,n,null)}}Sd(t,u,y,A,j,p,s,!1),ol(t);return;case"select":Ct("invalid",t),r=p=u=null;for(s in n)if(n.hasOwnProperty(s)&&(y=n[s],y!=null))switch(s){case"value":u=y;break;case"defaultValue":p=y;break;case"multiple":r=y;default:Ut(t,e,s,y,n,null)}e=u,n=p,t.multiple=!!r,e!=null?jr(t,!!r,e,!1):n!=null&&jr(t,!!r,n,!0);return;case"textarea":Ct("invalid",t),u=s=r=null;for(p in n)if(n.hasOwnProperty(p)&&(y=n[p],y!=null))switch(p){case"value":r=y;break;case"defaultValue":s=y;break;case"children":u=y;break;case"dangerouslySetInnerHTML":if(y!=null)throw Error(l(91));break;default:Ut(t,e,p,y,n,null)}Td(t,r,s,u),ol(t);return;case"option":for(A in n)if(n.hasOwnProperty(A)&&(r=n[A],r!=null))switch(A){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Ut(t,e,A,r,n,null)}return;case"dialog":Ct("beforetoggle",t),Ct("toggle",t),Ct("cancel",t),Ct("close",t);break;case"iframe":case"object":Ct("load",t);break;case"video":case"audio":for(r=0;r<Si.length;r++)Ct(Si[r],t);break;case"image":Ct("error",t),Ct("load",t);break;case"details":Ct("toggle",t);break;case"embed":case"source":case"link":Ct("error",t),Ct("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in n)if(n.hasOwnProperty(j)&&(r=n[j],r!=null))switch(j){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,e));default:Ut(t,e,j,r,n,null)}return;default:if(iu(e)){for(G in n)n.hasOwnProperty(G)&&(r=n[G],r!==void 0&&Vc(t,e,G,r,n,void 0));return}}for(y in n)n.hasOwnProperty(y)&&(r=n[y],r!=null&&Ut(t,e,y,r,n,null))}function Ny(t,e,n,r){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,u=null,p=null,y=null,A=null,j=null,G=null;for(H in n){var K=n[H];if(n.hasOwnProperty(H)&&K!=null)switch(H){case"checked":break;case"value":break;case"defaultValue":A=K;default:r.hasOwnProperty(H)||Ut(t,e,H,null,r,K)}}for(var L in r){var H=r[L];if(K=n[L],r.hasOwnProperty(L)&&(H!=null||K!=null))switch(L){case"type":u=H;break;case"name":s=H;break;case"checked":j=H;break;case"defaultChecked":G=H;break;case"value":p=H;break;case"defaultValue":y=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(l(137,e));break;default:H!==K&&Ut(t,e,L,H,r,K)}}ru(t,p,y,A,j,G,u,s);return;case"select":H=p=y=L=null;for(u in n)if(A=n[u],n.hasOwnProperty(u)&&A!=null)switch(u){case"value":break;case"multiple":H=A;default:r.hasOwnProperty(u)||Ut(t,e,u,null,r,A)}for(s in r)if(u=r[s],A=n[s],r.hasOwnProperty(s)&&(u!=null||A!=null))switch(s){case"value":L=u;break;case"defaultValue":y=u;break;case"multiple":p=u;default:u!==A&&Ut(t,e,s,u,r,A)}e=y,n=p,r=H,L!=null?jr(t,!!n,L,!1):!!r!=!!n&&(e!=null?jr(t,!!n,e,!0):jr(t,!!n,n?[]:"",!1));return;case"textarea":H=L=null;for(y in n)if(s=n[y],n.hasOwnProperty(y)&&s!=null&&!r.hasOwnProperty(y))switch(y){case"value":break;case"children":break;default:Ut(t,e,y,null,r,s)}for(p in r)if(s=r[p],u=n[p],r.hasOwnProperty(p)&&(s!=null||u!=null))switch(p){case"value":L=s;break;case"defaultValue":H=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(l(91));break;default:s!==u&&Ut(t,e,p,s,r,u)}Ed(t,L,H);return;case"option":for(var gt in n)if(L=n[gt],n.hasOwnProperty(gt)&&L!=null&&!r.hasOwnProperty(gt))switch(gt){case"selected":t.selected=!1;break;default:Ut(t,e,gt,null,r,L)}for(A in r)if(L=r[A],H=n[A],r.hasOwnProperty(A)&&L!==H&&(L!=null||H!=null))switch(A){case"selected":t.selected=L&&typeof L!="function"&&typeof L!="symbol";break;default:Ut(t,e,A,L,r,H)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ht in n)L=n[ht],n.hasOwnProperty(ht)&&L!=null&&!r.hasOwnProperty(ht)&&Ut(t,e,ht,null,r,L);for(j in r)if(L=r[j],H=n[j],r.hasOwnProperty(j)&&L!==H&&(L!=null||H!=null))switch(j){case"children":case"dangerouslySetInnerHTML":if(L!=null)throw Error(l(137,e));break;default:Ut(t,e,j,L,r,H)}return;default:if(iu(e)){for(var Lt in n)L=n[Lt],n.hasOwnProperty(Lt)&&L!==void 0&&!r.hasOwnProperty(Lt)&&Vc(t,e,Lt,void 0,r,L);for(G in r)L=r[G],H=n[G],!r.hasOwnProperty(G)||L===H||L===void 0&&H===void 0||Vc(t,e,G,L,r,H);return}}for(var N in n)L=n[N],n.hasOwnProperty(N)&&L!=null&&!r.hasOwnProperty(N)&&Ut(t,e,N,null,r,L);for(K in r)L=r[K],H=n[K],!r.hasOwnProperty(K)||L===H||L==null&&H==null||Ut(t,e,K,L,r,H)}var Xc=null,Qc=null;function ts(t){return t.nodeType===9?t:t.ownerDocument}function Op(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ap(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Zc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Kc=null;function zy(){var t=window.event;return t&&t.type==="popstate"?t===Kc?!1:(Kc=t,!0):(Kc=null,!1)}var Rp=typeof setTimeout=="function"?setTimeout:void 0,jy=typeof clearTimeout=="function"?clearTimeout:void 0,Cp=typeof Promise=="function"?Promise:void 0,Uy=typeof queueMicrotask=="function"?queueMicrotask:typeof Cp<"u"?function(t){return Cp.resolve(null).then(t).catch(Ly)}:Rp;function Ly(t){setTimeout(function(){throw t})}function Na(t){return t==="head"}function Mp(t,e){var n=e,r=0,s=0;do{var u=n.nextSibling;if(t.removeChild(n),u&&u.nodeType===8)if(n=u.data,n==="/$"){if(0<r&&8>r){n=r;var p=t.ownerDocument;if(n&1&&Ti(p.documentElement),n&2&&Ti(p.body),n&4)for(n=p.head,Ti(n),p=n.firstChild;p;){var y=p.nextSibling,A=p.nodeName;p[Po]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&p.rel.toLowerCase()==="stylesheet"||n.removeChild(p),p=y}}if(s===0){t.removeChild(u),Di(e);return}s--}else n==="$"||n==="$?"||n==="$!"?s++:r=n.charCodeAt(0)-48;else r=0;n=u}while(n);Di(e)}function $c(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":$c(n),tu(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function Hy(t,e,n,r){for(;t.nodeType===1;){var s=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Po])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==s.rel||t.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||t.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||t.getAttribute("title")!==(s.title==null?null:s.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(s.src==null?null:s.src)||t.getAttribute("type")!==(s.type==null?null:s.type)||t.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var u=s.name==null?null:""+s.name;if(s.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=fn(t.nextSibling),t===null)break}return null}function Py(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=fn(t.nextSibling),t===null))return null;return t}function Fc(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function qy(t,e){var n=t.ownerDocument;if(t.data!=="$?"||n.readyState==="complete")e();else{var r=function(){e(),n.removeEventListener("DOMContentLoaded",r)};n.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function fn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var Jc=null;function kp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}function _p(t,e,n){switch(e=ts(n),t){case"html":if(t=e.documentElement,!t)throw Error(l(452));return t;case"head":if(t=e.head,!t)throw Error(l(453));return t;case"body":if(t=e.body,!t)throw Error(l(454));return t;default:throw Error(l(451))}}function Ti(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);tu(t)}var an=new Map,Dp=new Set;function es(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var na=Z.d;Z.d={f:By,r:Yy,D:Gy,C:Vy,L:Xy,m:Qy,X:Ky,S:Zy,M:$y};function By(){var t=na.f(),e=Ql();return t||e}function Yy(t){var e=_r(t);e!==null&&e.tag===5&&e.type==="form"?Wh(e):na.r(t)}var fo=typeof document>"u"?null:document;function Np(t,e,n){var r=fo;if(r&&typeof e=="string"&&e){var s=Fe(e);s='link[rel="'+t+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),Dp.has(s)||(Dp.add(s),t={rel:t,crossOrigin:n,href:e},r.querySelector(s)===null&&(e=r.createElement("link"),we(e,"link",t),fe(e),r.head.appendChild(e)))}}function Gy(t){na.D(t),Np("dns-prefetch",t,null)}function Vy(t,e){na.C(t,e),Np("preconnect",t,e)}function Xy(t,e,n){na.L(t,e,n);var r=fo;if(r&&t&&e){var s='link[rel="preload"][as="'+Fe(e)+'"]';e==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+Fe(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+Fe(n.imageSizes)+'"]')):s+='[href="'+Fe(t)+'"]';var u=s;switch(e){case"style":u=ho(t);break;case"script":u=mo(t)}an.has(u)||(t=v({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),an.set(u,t),r.querySelector(s)!==null||e==="style"&&r.querySelector(Oi(u))||e==="script"&&r.querySelector(Ai(u))||(e=r.createElement("link"),we(e,"link",t),fe(e),r.head.appendChild(e)))}}function Qy(t,e){na.m(t,e);var n=fo;if(n&&t){var r=e&&typeof e.as=="string"?e.as:"script",s='link[rel="modulepreload"][as="'+Fe(r)+'"][href="'+Fe(t)+'"]',u=s;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=mo(t)}if(!an.has(u)&&(t=v({rel:"modulepreload",href:t},e),an.set(u,t),n.querySelector(s)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Ai(u)))return}r=n.createElement("link"),we(r,"link",t),fe(r),n.head.appendChild(r)}}}function Zy(t,e,n){na.S(t,e,n);var r=fo;if(r&&t){var s=Dr(r).hoistableStyles,u=ho(t);e=e||"default";var p=s.get(u);if(!p){var y={loading:0,preload:null};if(p=r.querySelector(Oi(u)))y.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":e},n),(n=an.get(u))&&Wc(t,n);var A=p=r.createElement("link");fe(A),we(A,"link",t),A._p=new Promise(function(j,G){A.onload=j,A.onerror=G}),A.addEventListener("load",function(){y.loading|=1}),A.addEventListener("error",function(){y.loading|=2}),y.loading|=4,ns(p,e,r)}p={type:"stylesheet",instance:p,count:1,state:y},s.set(u,p)}}}function Ky(t,e){na.X(t,e);var n=fo;if(n&&t){var r=Dr(n).hoistableScripts,s=mo(t),u=r.get(s);u||(u=n.querySelector(Ai(s)),u||(t=v({src:t,async:!0},e),(e=an.get(s))&&Ic(t,e),u=n.createElement("script"),fe(u),we(u,"link",t),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},r.set(s,u))}}function $y(t,e){na.M(t,e);var n=fo;if(n&&t){var r=Dr(n).hoistableScripts,s=mo(t),u=r.get(s);u||(u=n.querySelector(Ai(s)),u||(t=v({src:t,async:!0,type:"module"},e),(e=an.get(s))&&Ic(t,e),u=n.createElement("script"),fe(u),we(u,"link",t),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},r.set(s,u))}}function zp(t,e,n,r){var s=(s=nt.current)?es(s):null;if(!s)throw Error(l(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=ho(n.href),n=Dr(s).hoistableStyles,r=n.get(e),r||(r={type:"style",instance:null,count:0,state:null},n.set(e,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=ho(n.href);var u=Dr(s).hoistableStyles,p=u.get(t);if(p||(s=s.ownerDocument||s,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,p),(u=s.querySelector(Oi(t)))&&!u._p&&(p.instance=u,p.state.loading=5),an.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},an.set(t,n),u||Fy(s,t,n,p.state))),e&&r===null)throw Error(l(528,""));return p}if(e&&r!==null)throw Error(l(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=mo(n),n=Dr(s).hoistableScripts,r=n.get(e),r||(r={type:"script",instance:null,count:0,state:null},n.set(e,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,t))}}function ho(t){return'href="'+Fe(t)+'"'}function Oi(t){return'link[rel="stylesheet"]['+t+"]"}function jp(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function Fy(t,e,n,r){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?r.loading=1:(e=t.createElement("link"),r.preload=e,e.addEventListener("load",function(){return r.loading|=1}),e.addEventListener("error",function(){return r.loading|=2}),we(e,"link",n),fe(e),t.head.appendChild(e))}function mo(t){return'[src="'+Fe(t)+'"]'}function Ai(t){return"script[async]"+t}function Up(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var r=t.querySelector('style[data-href~="'+Fe(n.href)+'"]');if(r)return e.instance=r,fe(r),r;var s=v({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),fe(r),we(r,"style",s),ns(r,n.precedence,t),e.instance=r;case"stylesheet":s=ho(n.href);var u=t.querySelector(Oi(s));if(u)return e.state.loading|=4,e.instance=u,fe(u),u;r=jp(n),(s=an.get(s))&&Wc(r,s),u=(t.ownerDocument||t).createElement("link"),fe(u);var p=u;return p._p=new Promise(function(y,A){p.onload=y,p.onerror=A}),we(u,"link",r),e.state.loading|=4,ns(u,n.precedence,t),e.instance=u;case"script":return u=mo(n.src),(s=t.querySelector(Ai(u)))?(e.instance=s,fe(s),s):(r=n,(s=an.get(u))&&(r=v({},n),Ic(r,s)),t=t.ownerDocument||t,s=t.createElement("script"),fe(s),we(s,"link",r),t.head.appendChild(s),e.instance=s);case"void":return null;default:throw Error(l(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(r=e.instance,e.state.loading|=4,ns(r,n.precedence,t));return e.instance}function ns(t,e,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=r.length?r[r.length-1]:null,u=s,p=0;p<r.length;p++){var y=r[p];if(y.dataset.precedence===e)u=y;else if(u!==s)break}u?u.parentNode.insertBefore(t,u.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function Wc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Ic(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var as=null;function Lp(t,e,n){if(as===null){var r=new Map,s=as=new Map;s.set(n,r)}else s=as,r=s.get(n),r||(r=new Map,s.set(n,r));if(r.has(t))return r;for(r.set(t,null),n=n.getElementsByTagName(t),s=0;s<n.length;s++){var u=n[s];if(!(u[Po]||u[Jt]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var p=u.getAttribute(e)||"";p=t+p;var y=r.get(p);y?y.push(u):r.set(p,[u])}}return r}function Hp(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function Jy(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Pp(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Ri=null;function Wy(){}function Iy(t,e,n){if(Ri===null)throw Error(l(475));var r=Ri;if(e.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var s=ho(n.href),u=t.querySelector(Oi(s));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(r.count++,r=rs.bind(r),t.then(r,r)),e.state.loading|=4,e.instance=u,fe(u);return}u=t.ownerDocument||t,n=jp(n),(s=an.get(s))&&Wc(n,s),u=u.createElement("link"),fe(u);var p=u;p._p=new Promise(function(y,A){p.onload=y,p.onerror=A}),we(u,"link",n),e.instance=u}r.stylesheets===null&&(r.stylesheets=new Map),r.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(r.count++,e=rs.bind(r),t.addEventListener("load",e),t.addEventListener("error",e))}}function t1(){if(Ri===null)throw Error(l(475));var t=Ri;return t.stylesheets&&t.count===0&&tf(t,t.stylesheets),0<t.count?function(e){var n=setTimeout(function(){if(t.stylesheets&&tf(t,t.stylesheets),t.unsuspend){var r=t.unsuspend;t.unsuspend=null,r()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(n)}}:null}function rs(){if(this.count--,this.count===0){if(this.stylesheets)tf(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var os=null;function tf(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,os=new Map,e.forEach(e1,t),os=null,rs.call(t))}function e1(t,e){if(!(e.state.loading&4)){var n=os.get(t);if(n)var r=n.get(null);else{n=new Map,os.set(t,n);for(var s=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<s.length;u++){var p=s[u];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(n.set(p.dataset.precedence,p),r=p)}r&&n.set(null,r)}s=e.instance,p=s.getAttribute("data-precedence"),u=n.get(p)||r,u===r&&n.set(null,s),n.set(p,s),this.count++,r=rs.bind(this),s.addEventListener("load",r),s.addEventListener("error",r),u?u.parentNode.insertBefore(s,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(s,t.firstChild)),e.state.loading|=4}}var Ci={$$typeof:D,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function n1(t,e,n,r,s,u,p,y){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ho(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ho(0),this.hiddenUpdates=Ho(null),this.identifierPrefix=r,this.onUncaughtError=s,this.onCaughtError=u,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=y,this.incompleteTransitions=new Map}function qp(t,e,n,r,s,u,p,y,A,j,G,K){return t=new n1(t,e,n,p,y,A,j,K),e=1,u===!0&&(e|=24),u=qe(3,null,null,e),t.current=u,u.stateNode=t,e=ju(),e.refCount++,t.pooledCache=e,e.refCount++,u.memoizedState={element:r,isDehydrated:n,cache:e},Pu(u),t}function Bp(t){return t?(t=Vr,t):Vr}function Yp(t,e,n,r,s,u){s=Bp(s),r.context===null?r.context=s:r.pendingContext=s,r=xa(e),r.payload={element:n},u=u===void 0?null:u,u!==null&&(r.callback=u),n=wa(t,r,e),n!==null&&(Xe(n,t,e),ri(n,t,e))}function Gp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ef(t,e){Gp(t,e),(t=t.alternate)&&Gp(t,e)}function Vp(t){if(t.tag===13){var e=Gr(t,67108864);e!==null&&Xe(e,t,67108864),ef(t,67108864)}}var is=!0;function a1(t,e,n,r){var s=k.T;k.T=null;var u=Z.p;try{Z.p=2,nf(t,e,n,r)}finally{Z.p=u,k.T=s}}function r1(t,e,n,r){var s=k.T;k.T=null;var u=Z.p;try{Z.p=8,nf(t,e,n,r)}finally{Z.p=u,k.T=s}}function nf(t,e,n,r){if(is){var s=af(r);if(s===null)Gc(t,e,r,ls,n),Qp(t,r);else if(i1(s,t,e,n,r))r.stopPropagation();else if(Qp(t,r),e&4&&-1<o1.indexOf(t)){for(;s!==null;){var u=_r(s);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var p=Tn(u.pendingLanes);if(p!==0){var y=u;for(y.pendingLanes|=2,y.entangledLanes|=2;p;){var A=1<<31-be(p);y.entanglements[1]|=A,p&=~A}Mn(u),(Nt&6)===0&&(Vl=ue()+500,wi(0))}}break;case 13:y=Gr(u,2),y!==null&&Xe(y,u,2),Ql(),ef(u,2)}if(u=af(r),u===null&&Gc(t,e,r,ls,n),u===s)break;s=u}s!==null&&r.stopPropagation()}else Gc(t,e,r,null,n)}}function af(t){return t=su(t),rf(t)}var ls=null;function rf(t){if(ls=null,t=kr(t),t!==null){var e=f(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=d(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return ls=t,null}function Xp(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Or()){case ge:return 2;case Ii:return 8;case Ar:case Ae:return 32;case qn:return 268435456;default:return 32}default:return 32}}var of=!1,za=null,ja=null,Ua=null,Mi=new Map,ki=new Map,La=[],o1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Qp(t,e){switch(t){case"focusin":case"focusout":za=null;break;case"dragenter":case"dragleave":ja=null;break;case"mouseover":case"mouseout":Ua=null;break;case"pointerover":case"pointerout":Mi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ki.delete(e.pointerId)}}function _i(t,e,n,r,s,u){return t===null||t.nativeEvent!==u?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:u,targetContainers:[s]},e!==null&&(e=_r(e),e!==null&&Vp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function i1(t,e,n,r,s){switch(e){case"focusin":return za=_i(za,t,e,n,r,s),!0;case"dragenter":return ja=_i(ja,t,e,n,r,s),!0;case"mouseover":return Ua=_i(Ua,t,e,n,r,s),!0;case"pointerover":var u=s.pointerId;return Mi.set(u,_i(Mi.get(u)||null,t,e,n,r,s)),!0;case"gotpointercapture":return u=s.pointerId,ki.set(u,_i(ki.get(u)||null,t,e,n,r,s)),!0}return!1}function Zp(t){var e=kr(t.target);if(e!==null){var n=f(e);if(n!==null){if(e=n.tag,e===13){if(e=d(n),e!==null){t.blockedOn=e,ae(t.priority,function(){if(n.tag===13){var r=Ve();r=te(r);var s=Gr(n,r);s!==null&&Xe(s,n,r),ef(n,r)}});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ss(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=af(t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);lu=r,n.target.dispatchEvent(r),lu=null}else return e=_r(n),e!==null&&Vp(e),t.blockedOn=n,!1;e.shift()}return!0}function Kp(t,e,n){ss(t)&&n.delete(e)}function l1(){of=!1,za!==null&&ss(za)&&(za=null),ja!==null&&ss(ja)&&(ja=null),Ua!==null&&ss(Ua)&&(Ua=null),Mi.forEach(Kp),ki.forEach(Kp)}function us(t,e){t.blockedOn===e&&(t.blockedOn=null,of||(of=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,l1)))}var cs=null;function $p(t){cs!==t&&(cs=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){cs===t&&(cs=null);for(var e=0;e<t.length;e+=3){var n=t[e],r=t[e+1],s=t[e+2];if(typeof r!="function"){if(rf(r||n)===null)continue;break}var u=_r(n);u!==null&&(t.splice(e,3),e-=3,rc(u,{pending:!0,data:s,method:n.method,action:r},r,s))}}))}function Di(t){function e(A){return us(A,t)}za!==null&&us(za,t),ja!==null&&us(ja,t),Ua!==null&&us(Ua,t),Mi.forEach(e),ki.forEach(e);for(var n=0;n<La.length;n++){var r=La[n];r.blockedOn===t&&(r.blockedOn=null)}for(;0<La.length&&(n=La[0],n.blockedOn===null);)Zp(n),n.blockedOn===null&&La.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var s=n[r],u=n[r+1],p=s[Pt]||null;if(typeof u=="function")p||$p(n);else if(p){var y=null;if(u&&u.hasAttribute("formAction")){if(s=u,p=u[Pt]||null)y=p.formAction;else if(rf(s)!==null)continue}else y=p.action;typeof y=="function"?n[r+1]=y:(n.splice(r,3),r-=3),$p(n)}}}function lf(t){this._internalRoot=t}fs.prototype.render=lf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(l(409));var n=e.current,r=Ve();Yp(n,r,t,e,null,null)},fs.prototype.unmount=lf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Yp(t.current,2,null,t,null,null),Ql(),e[ce]=null}};function fs(t){this._internalRoot=t}fs.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ia();t={blockedOn:null,target:t,priority:e};for(var n=0;n<La.length&&e!==0&&e<La[n].priority;n++);La.splice(n,0,t),n===0&&Zp(t)}};var Fp=o.version;if(Fp!=="19.1.0")throw Error(l(527,Fp,"19.1.0"));Z.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(l(188)):(t=Object.keys(t).join(","),Error(l(268,t)));return t=m(e),t=t!==null?h(t):null,t=t===null?null:t.stateNode,t};var s1={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:k,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ds=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ds.isDisabled&&ds.supportsFiber)try{En=ds.inject(s1),Re=ds}catch{}}return zi.createRoot=function(t,e){if(!c(t))throw Error(l(299));var n=!1,r="",s=dm,u=hm,p=mm,y=null;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onUncaughtError!==void 0&&(s=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(p=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(y=e.unstable_transitionCallbacks)),e=qp(t,1,!1,null,null,n,r,s,u,p,y,null),t[ce]=e.current,Yc(t),new lf(e)},zi.hydrateRoot=function(t,e,n){if(!c(t))throw Error(l(299));var r=!1,s="",u=dm,p=hm,y=mm,A=null,j=null;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(p=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(A=n.unstable_transitionCallbacks),n.formState!==void 0&&(j=n.formState)),e=qp(t,1,!0,e,n??null,r,s,u,p,y,A,j),e.context=Bp(null),n=e.current,r=Ve(),r=te(r),s=xa(r),s.callback=null,wa(n,s,r),n=r,e.current.lanes=n,ga(e,n),Mn(e),t[ce]=e.current,Yc(t),new fs(e)},zi.version="19.1.0",zi}var l0;function y1(){if(l0)return ff.exports;l0=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(o){console.error(o)}}return a(),ff.exports=v1(),ff.exports}var x1=y1();const w1=1,S1=1e6;let pf=0;function E1(){return pf=(pf+1)%Number.MAX_SAFE_INTEGER,pf.toString()}const gf=new Map,s0=a=>{if(gf.has(a))return;const o=setTimeout(()=>{gf.delete(a),qi({type:"REMOVE_TOAST",toastId:a})},S1);gf.set(a,o)},T1=(a,o)=>{switch(o.type){case"ADD_TOAST":return{...a,toasts:[o.toast,...a.toasts].slice(0,w1)};case"UPDATE_TOAST":return{...a,toasts:a.toasts.map(i=>i.id===o.toast.id?{...i,...o.toast}:i)};case"DISMISS_TOAST":{const{toastId:i}=o;return i?s0(i):a.toasts.forEach(l=>{s0(l.id)}),{...a,toasts:a.toasts.map(l=>l.id===i||i===void 0?{...l,open:!1}:l)}}case"REMOVE_TOAST":return o.toastId===void 0?{...a,toasts:[]}:{...a,toasts:a.toasts.filter(i=>i.id!==o.toastId)}}},Ts=[];let Os={toasts:[]};function qi(a){Os=T1(Os,a),Ts.forEach(o=>{o(Os)})}function O1({...a}){const o=E1(),i=c=>qi({type:"UPDATE_TOAST",toast:{...c,id:o}}),l=()=>qi({type:"DISMISS_TOAST",toastId:o});return qi({type:"ADD_TOAST",toast:{...a,id:o,open:!0,onOpenChange:c=>{c||l()}}}),{id:o,dismiss:l,update:i}}function A1(){const[a,o]=x.useState(Os);return x.useEffect(()=>(Ts.push(o),()=>{const i=Ts.indexOf(o);i>-1&&Ts.splice(i,1)}),[a]),{...a,toast:O1,dismiss:i=>qi({type:"DISMISS_TOAST",toastId:i})}}var Hs=lg();const sg=ig(Hs);function le(a,o,{checkForDefaultPrevented:i=!0}={}){return function(c){if(a==null||a(c),i===!1||!c.defaultPrevented)return o==null?void 0:o(c)}}function u0(a,o){if(typeof a=="function")return a(o);a!=null&&(a.current=o)}function ug(...a){return o=>{let i=!1;const l=a.map(c=>{const f=u0(c,o);return!i&&typeof f=="function"&&(i=!0),f});if(i)return()=>{for(let c=0;c<l.length;c++){const f=l[c];typeof f=="function"?f():u0(a[c],null)}}}}function yn(...a){return x.useCallback(ug(...a),a)}function Ps(a,o=[]){let i=[];function l(f,d){const g=x.createContext(d),m=i.length;i=[...i,d];const h=b=>{var C;const{scope:E,children:O,...S}=b,w=((C=E==null?void 0:E[a])==null?void 0:C[m])||g,T=x.useMemo(()=>S,Object.values(S));return _.jsx(w.Provider,{value:T,children:O})};h.displayName=f+"Provider";function v(b,E){var w;const O=((w=E==null?void 0:E[a])==null?void 0:w[m])||g,S=x.useContext(O);if(S)return S;if(d!==void 0)return d;throw new Error(`\`${b}\` must be used within \`${f}\``)}return[h,v]}const c=()=>{const f=i.map(d=>x.createContext(d));return function(g){const m=(g==null?void 0:g[a])||f;return x.useMemo(()=>({[`__scope${a}`]:{...g,[a]:m}}),[g,m])}};return c.scopeName=a,[l,R1(c,...o)]}function R1(...a){const o=a[0];if(a.length===1)return o;const i=()=>{const l=a.map(c=>({useScope:c(),scopeName:c.scopeName}));return function(f){const d=l.reduce((g,{useScope:m,scopeName:h})=>{const b=m(f)[`__scope${h}`];return{...g,...b}},{});return x.useMemo(()=>({[`__scope${o.scopeName}`]:d}),[d])}};return i.scopeName=o.scopeName,i}function Af(a){const o=C1(a),i=x.forwardRef((l,c)=>{const{children:f,...d}=l,g=x.Children.toArray(f),m=g.find(k1);if(m){const h=m.props.children,v=g.map(b=>b===m?x.Children.count(h)>1?x.Children.only(null):x.isValidElement(h)?h.props.children:null:b);return _.jsx(o,{...d,ref:c,children:x.isValidElement(h)?x.cloneElement(h,void 0,v):null})}return _.jsx(o,{...d,ref:c,children:f})});return i.displayName=`${a}.Slot`,i}function C1(a){const o=x.forwardRef((i,l)=>{const{children:c,...f}=i;if(x.isValidElement(c)){const d=D1(c),g=_1(f,c.props);return c.type!==x.Fragment&&(g.ref=l?ug(l,d):d),x.cloneElement(c,g)}return x.Children.count(c)>1?x.Children.only(null):null});return o.displayName=`${a}.SlotClone`,o}var cg=Symbol("radix.slottable");function M1(a){const o=({children:i})=>_.jsx(_.Fragment,{children:i});return o.displayName=`${a}.Slottable`,o.__radixId=cg,o}function k1(a){return x.isValidElement(a)&&typeof a.type=="function"&&"__radixId"in a.type&&a.type.__radixId===cg}function _1(a,o){const i={...o};for(const l in o){const c=a[l],f=o[l];/^on[A-Z]/.test(l)?c&&f?i[l]=(...g)=>{f(...g),c(...g)}:c&&(i[l]=c):l==="style"?i[l]={...c,...f}:l==="className"&&(i[l]=[c,f].filter(Boolean).join(" "))}return{...a,...i}}function D1(a){var l,c;let o=(l=Object.getOwnPropertyDescriptor(a.props,"ref"))==null?void 0:l.get,i=o&&"isReactWarning"in o&&o.isReactWarning;return i?a.ref:(o=(c=Object.getOwnPropertyDescriptor(a,"ref"))==null?void 0:c.get,i=o&&"isReactWarning"in o&&o.isReactWarning,i?a.props.ref:a.props.ref||a.ref)}function N1(a){const o=a+"CollectionProvider",[i,l]=Ps(o),[c,f]=i(o,{collectionRef:{current:null},itemMap:new Map}),d=w=>{const{scope:T,children:C}=w,U=J.useRef(null),D=J.useRef(new Map).current;return _.jsx(c,{scope:T,itemMap:D,collectionRef:U,children:C})};d.displayName=o;const g=a+"CollectionSlot",m=Af(g),h=J.forwardRef((w,T)=>{const{scope:C,children:U}=w,D=f(g,C),Y=yn(T,D.collectionRef);return _.jsx(m,{ref:Y,children:U})});h.displayName=g;const v=a+"CollectionItemSlot",b="data-radix-collection-item",E=Af(v),O=J.forwardRef((w,T)=>{const{scope:C,children:U,...D}=w,Y=J.useRef(null),P=yn(T,Y),F=f(v,C);return J.useEffect(()=>(F.itemMap.set(Y,{ref:Y,...D}),()=>void F.itemMap.delete(Y))),_.jsx(E,{[b]:"",ref:P,children:U})});O.displayName=v;function S(w){const T=f(a+"CollectionConsumer",w);return J.useCallback(()=>{const U=T.collectionRef.current;if(!U)return[];const D=Array.from(U.querySelectorAll(`[${b}]`));return Array.from(T.itemMap.values()).sort((F,W)=>D.indexOf(F.ref.current)-D.indexOf(W.ref.current))},[T.collectionRef,T.itemMap])}return[{Provider:d,Slot:h,ItemSlot:O},S,l]}var z1=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Le=z1.reduce((a,o)=>{const i=Af(`Primitive.${o}`),l=x.forwardRef((c,f)=>{const{asChild:d,...g}=c,m=d?i:o;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),_.jsx(m,{...g,ref:f})});return l.displayName=`Primitive.${o}`,{...a,[o]:l}},{});function fg(a,o){a&&Hs.flushSync(()=>a.dispatchEvent(o))}function Za(a){const o=x.useRef(a);return x.useEffect(()=>{o.current=a}),x.useMemo(()=>(...i)=>{var l;return(l=o.current)==null?void 0:l.call(o,...i)},[])}function j1(a,o=globalThis==null?void 0:globalThis.document){const i=Za(a);x.useEffect(()=>{const l=c=>{c.key==="Escape"&&i(c)};return o.addEventListener("keydown",l,{capture:!0}),()=>o.removeEventListener("keydown",l,{capture:!0})},[i,o])}var U1="DismissableLayer",Rf="dismissableLayer.update",L1="dismissableLayer.pointerDownOutside",H1="dismissableLayer.focusOutside",c0,dg=x.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Vf=x.forwardRef((a,o)=>{const{disableOutsidePointerEvents:i=!1,onEscapeKeyDown:l,onPointerDownOutside:c,onFocusOutside:f,onInteractOutside:d,onDismiss:g,...m}=a,h=x.useContext(dg),[v,b]=x.useState(null),E=(v==null?void 0:v.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,O]=x.useState({}),S=yn(o,W=>b(W)),w=Array.from(h.layers),[T]=[...h.layersWithOutsidePointerEventsDisabled].slice(-1),C=w.indexOf(T),U=v?w.indexOf(v):-1,D=h.layersWithOutsidePointerEventsDisabled.size>0,Y=U>=C,P=q1(W=>{const $=W.target,tt=[...h.branches].some(ft=>ft.contains($));!Y||tt||(c==null||c(W),d==null||d(W),W.defaultPrevented||g==null||g())},E),F=B1(W=>{const $=W.target;[...h.branches].some(ft=>ft.contains($))||(f==null||f(W),d==null||d(W),W.defaultPrevented||g==null||g())},E);return j1(W=>{U===h.layers.size-1&&(l==null||l(W),!W.defaultPrevented&&g&&(W.preventDefault(),g()))},E),x.useEffect(()=>{if(v)return i&&(h.layersWithOutsidePointerEventsDisabled.size===0&&(c0=E.body.style.pointerEvents,E.body.style.pointerEvents="none"),h.layersWithOutsidePointerEventsDisabled.add(v)),h.layers.add(v),f0(),()=>{i&&h.layersWithOutsidePointerEventsDisabled.size===1&&(E.body.style.pointerEvents=c0)}},[v,E,i,h]),x.useEffect(()=>()=>{v&&(h.layers.delete(v),h.layersWithOutsidePointerEventsDisabled.delete(v),f0())},[v,h]),x.useEffect(()=>{const W=()=>O({});return document.addEventListener(Rf,W),()=>document.removeEventListener(Rf,W)},[]),_.jsx(Le.div,{...m,ref:S,style:{pointerEvents:D?Y?"auto":"none":void 0,...a.style},onFocusCapture:le(a.onFocusCapture,F.onFocusCapture),onBlurCapture:le(a.onBlurCapture,F.onBlurCapture),onPointerDownCapture:le(a.onPointerDownCapture,P.onPointerDownCapture)})});Vf.displayName=U1;var P1="DismissableLayerBranch",hg=x.forwardRef((a,o)=>{const i=x.useContext(dg),l=x.useRef(null),c=yn(o,l);return x.useEffect(()=>{const f=l.current;if(f)return i.branches.add(f),()=>{i.branches.delete(f)}},[i.branches]),_.jsx(Le.div,{...a,ref:c})});hg.displayName=P1;function q1(a,o=globalThis==null?void 0:globalThis.document){const i=Za(a),l=x.useRef(!1),c=x.useRef(()=>{});return x.useEffect(()=>{const f=g=>{if(g.target&&!l.current){let m=function(){mg(L1,i,h,{discrete:!0})};const h={originalEvent:g};g.pointerType==="touch"?(o.removeEventListener("click",c.current),c.current=m,o.addEventListener("click",c.current,{once:!0})):m()}else o.removeEventListener("click",c.current);l.current=!1},d=window.setTimeout(()=>{o.addEventListener("pointerdown",f)},0);return()=>{window.clearTimeout(d),o.removeEventListener("pointerdown",f),o.removeEventListener("click",c.current)}},[o,i]),{onPointerDownCapture:()=>l.current=!0}}function B1(a,o=globalThis==null?void 0:globalThis.document){const i=Za(a),l=x.useRef(!1);return x.useEffect(()=>{const c=f=>{f.target&&!l.current&&mg(H1,i,{originalEvent:f},{discrete:!1})};return o.addEventListener("focusin",c),()=>o.removeEventListener("focusin",c)},[o,i]),{onFocusCapture:()=>l.current=!0,onBlurCapture:()=>l.current=!1}}function f0(){const a=new CustomEvent(Rf);document.dispatchEvent(a)}function mg(a,o,i,{discrete:l}){const c=i.originalEvent.target,f=new CustomEvent(a,{bubbles:!1,cancelable:!0,detail:i});o&&c.addEventListener(a,o,{once:!0}),l?fg(c,f):c.dispatchEvent(f)}var Y1=Vf,G1=hg,Ka=globalThis!=null&&globalThis.document?x.useLayoutEffect:()=>{},V1="Portal",pg=x.forwardRef((a,o)=>{var g;const{container:i,...l}=a,[c,f]=x.useState(!1);Ka(()=>f(!0),[]);const d=i||c&&((g=globalThis==null?void 0:globalThis.document)==null?void 0:g.body);return d?sg.createPortal(_.jsx(Le.div,{...l,ref:o}),d):null});pg.displayName=V1;function X1(a,o){return x.useReducer((i,l)=>o[i][l]??i,a)}var Xf=a=>{const{present:o,children:i}=a,l=Q1(o),c=typeof i=="function"?i({present:l.isPresent}):x.Children.only(i),f=yn(l.ref,Z1(c));return typeof i=="function"||l.isPresent?x.cloneElement(c,{ref:f}):null};Xf.displayName="Presence";function Q1(a){const[o,i]=x.useState(),l=x.useRef(null),c=x.useRef(a),f=x.useRef("none"),d=a?"mounted":"unmounted",[g,m]=X1(d,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return x.useEffect(()=>{const h=ms(l.current);f.current=g==="mounted"?h:"none"},[g]),Ka(()=>{const h=l.current,v=c.current;if(v!==a){const E=f.current,O=ms(h);a?m("MOUNT"):O==="none"||(h==null?void 0:h.display)==="none"?m("UNMOUNT"):m(v&&E!==O?"ANIMATION_OUT":"UNMOUNT"),c.current=a}},[a,m]),Ka(()=>{if(o){let h;const v=o.ownerDocument.defaultView??window,b=O=>{const w=ms(l.current).includes(O.animationName);if(O.target===o&&w&&(m("ANIMATION_END"),!c.current)){const T=o.style.animationFillMode;o.style.animationFillMode="forwards",h=v.setTimeout(()=>{o.style.animationFillMode==="forwards"&&(o.style.animationFillMode=T)})}},E=O=>{O.target===o&&(f.current=ms(l.current))};return o.addEventListener("animationstart",E),o.addEventListener("animationcancel",b),o.addEventListener("animationend",b),()=>{v.clearTimeout(h),o.removeEventListener("animationstart",E),o.removeEventListener("animationcancel",b),o.removeEventListener("animationend",b)}}else m("ANIMATION_END")},[o,m]),{isPresent:["mounted","unmountSuspended"].includes(g),ref:x.useCallback(h=>{l.current=h?getComputedStyle(h):null,i(h)},[])}}function ms(a){return(a==null?void 0:a.animationName)||"none"}function Z1(a){var l,c;let o=(l=Object.getOwnPropertyDescriptor(a.props,"ref"))==null?void 0:l.get,i=o&&"isReactWarning"in o&&o.isReactWarning;return i?a.ref:(o=(c=Object.getOwnPropertyDescriptor(a,"ref"))==null?void 0:c.get,i=o&&"isReactWarning"in o&&o.isReactWarning,i?a.props.ref:a.props.ref||a.ref)}var K1=m1[" useInsertionEffect ".trim().toString()]||Ka;function $1({prop:a,defaultProp:o,onChange:i=()=>{},caller:l}){const[c,f,d]=F1({defaultProp:o,onChange:i}),g=a!==void 0,m=g?a:c;{const v=x.useRef(a!==void 0);x.useEffect(()=>{const b=v.current;b!==g&&console.warn(`${l} is changing from ${b?"controlled":"uncontrolled"} to ${g?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),v.current=g},[g,l])}const h=x.useCallback(v=>{var b;if(g){const E=J1(v)?v(a):v;E!==a&&((b=d.current)==null||b.call(d,E))}else f(v)},[g,a,f,d]);return[m,h]}function F1({defaultProp:a,onChange:o}){const[i,l]=x.useState(a),c=x.useRef(i),f=x.useRef(o);return K1(()=>{f.current=o},[o]),x.useEffect(()=>{var d;c.current!==i&&((d=f.current)==null||d.call(f,i),c.current=i)},[i,c]),[i,l,f]}function J1(a){return typeof a=="function"}var W1=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),I1="VisuallyHidden",qs=x.forwardRef((a,o)=>_.jsx(Le.span,{...a,ref:o,style:{...W1,...a.style}}));qs.displayName=I1;var tx=qs,Qf="ToastProvider",[Zf,ex,nx]=N1("Toast"),[gg,nT]=Ps("Toast",[nx]),[ax,Bs]=gg(Qf),bg=a=>{const{__scopeToast:o,label:i="Notification",duration:l=5e3,swipeDirection:c="right",swipeThreshold:f=50,children:d}=a,[g,m]=x.useState(null),[h,v]=x.useState(0),b=x.useRef(!1),E=x.useRef(!1);return i.trim()||console.error(`Invalid prop \`label\` supplied to \`${Qf}\`. Expected non-empty \`string\`.`),_.jsx(Zf.Provider,{scope:o,children:_.jsx(ax,{scope:o,label:i,duration:l,swipeDirection:c,swipeThreshold:f,toastCount:h,viewport:g,onViewportChange:m,onToastAdd:x.useCallback(()=>v(O=>O+1),[]),onToastRemove:x.useCallback(()=>v(O=>O-1),[]),isFocusedToastEscapeKeyDownRef:b,isClosePausedRef:E,children:d})})};bg.displayName=Qf;var vg="ToastViewport",rx=["F8"],Cf="toast.viewportPause",Mf="toast.viewportResume",yg=x.forwardRef((a,o)=>{const{__scopeToast:i,hotkey:l=rx,label:c="Notifications ({hotkey})",...f}=a,d=Bs(vg,i),g=ex(i),m=x.useRef(null),h=x.useRef(null),v=x.useRef(null),b=x.useRef(null),E=yn(o,b,d.onViewportChange),O=l.join("+").replace(/Key/g,"").replace(/Digit/g,""),S=d.toastCount>0;x.useEffect(()=>{const T=C=>{var D;l.length!==0&&l.every(Y=>C[Y]||C.code===Y)&&((D=b.current)==null||D.focus())};return document.addEventListener("keydown",T),()=>document.removeEventListener("keydown",T)},[l]),x.useEffect(()=>{const T=m.current,C=b.current;if(S&&T&&C){const U=()=>{if(!d.isClosePausedRef.current){const F=new CustomEvent(Cf);C.dispatchEvent(F),d.isClosePausedRef.current=!0}},D=()=>{if(d.isClosePausedRef.current){const F=new CustomEvent(Mf);C.dispatchEvent(F),d.isClosePausedRef.current=!1}},Y=F=>{!T.contains(F.relatedTarget)&&D()},P=()=>{T.contains(document.activeElement)||D()};return T.addEventListener("focusin",U),T.addEventListener("focusout",Y),T.addEventListener("pointermove",U),T.addEventListener("pointerleave",P),window.addEventListener("blur",U),window.addEventListener("focus",D),()=>{T.removeEventListener("focusin",U),T.removeEventListener("focusout",Y),T.removeEventListener("pointermove",U),T.removeEventListener("pointerleave",P),window.removeEventListener("blur",U),window.removeEventListener("focus",D)}}},[S,d.isClosePausedRef]);const w=x.useCallback(({tabbingDirection:T})=>{const U=g().map(D=>{const Y=D.ref.current,P=[Y,...bx(Y)];return T==="forwards"?P:P.reverse()});return(T==="forwards"?U.reverse():U).flat()},[g]);return x.useEffect(()=>{const T=b.current;if(T){const C=U=>{var P,F,W;const D=U.altKey||U.ctrlKey||U.metaKey;if(U.key==="Tab"&&!D){const $=document.activeElement,tt=U.shiftKey;if(U.target===T&&tt){(P=h.current)==null||P.focus();return}const dt=w({tabbingDirection:tt?"backwards":"forwards"}),xt=dt.findIndex(at=>at===$);bf(dt.slice(xt+1))?U.preventDefault():tt?(F=h.current)==null||F.focus():(W=v.current)==null||W.focus()}};return T.addEventListener("keydown",C),()=>T.removeEventListener("keydown",C)}},[g,w]),_.jsxs(G1,{ref:m,role:"region","aria-label":c.replace("{hotkey}",O),tabIndex:-1,style:{pointerEvents:S?void 0:"none"},children:[S&&_.jsx(kf,{ref:h,onFocusFromOutsideViewport:()=>{const T=w({tabbingDirection:"forwards"});bf(T)}}),_.jsx(Zf.Slot,{scope:i,children:_.jsx(Le.ol,{tabIndex:-1,...f,ref:E})}),S&&_.jsx(kf,{ref:v,onFocusFromOutsideViewport:()=>{const T=w({tabbingDirection:"backwards"});bf(T)}})]})});yg.displayName=vg;var xg="ToastFocusProxy",kf=x.forwardRef((a,o)=>{const{__scopeToast:i,onFocusFromOutsideViewport:l,...c}=a,f=Bs(xg,i);return _.jsx(qs,{"aria-hidden":!0,tabIndex:0,...c,ref:o,style:{position:"fixed"},onFocus:d=>{var h;const g=d.relatedTarget;!((h=f.viewport)!=null&&h.contains(g))&&l()}})});kf.displayName=xg;var Ki="Toast",ox="toast.swipeStart",ix="toast.swipeMove",lx="toast.swipeCancel",sx="toast.swipeEnd",wg=x.forwardRef((a,o)=>{const{forceMount:i,open:l,defaultOpen:c,onOpenChange:f,...d}=a,[g,m]=$1({prop:l,defaultProp:c??!0,onChange:f,caller:Ki});return _.jsx(Xf,{present:i||g,children:_.jsx(fx,{open:g,...d,ref:o,onClose:()=>m(!1),onPause:Za(a.onPause),onResume:Za(a.onResume),onSwipeStart:le(a.onSwipeStart,h=>{h.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:le(a.onSwipeMove,h=>{const{x:v,y:b}=h.detail.delta;h.currentTarget.setAttribute("data-swipe","move"),h.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${v}px`),h.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${b}px`)}),onSwipeCancel:le(a.onSwipeCancel,h=>{h.currentTarget.setAttribute("data-swipe","cancel"),h.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),h.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),h.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),h.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:le(a.onSwipeEnd,h=>{const{x:v,y:b}=h.detail.delta;h.currentTarget.setAttribute("data-swipe","end"),h.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),h.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),h.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${v}px`),h.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${b}px`),m(!1)})})})});wg.displayName=Ki;var[ux,cx]=gg(Ki,{onClose(){}}),fx=x.forwardRef((a,o)=>{const{__scopeToast:i,type:l="foreground",duration:c,open:f,onClose:d,onEscapeKeyDown:g,onPause:m,onResume:h,onSwipeStart:v,onSwipeMove:b,onSwipeCancel:E,onSwipeEnd:O,...S}=a,w=Bs(Ki,i),[T,C]=x.useState(null),U=yn(o,at=>C(at)),D=x.useRef(null),Y=x.useRef(null),P=c||w.duration,F=x.useRef(0),W=x.useRef(P),$=x.useRef(0),{onToastAdd:tt,onToastRemove:ft}=w,pt=Za(()=>{var ot;(T==null?void 0:T.contains(document.activeElement))&&((ot=w.viewport)==null||ot.focus()),d()}),dt=x.useCallback(at=>{!at||at===1/0||(window.clearTimeout($.current),F.current=new Date().getTime(),$.current=window.setTimeout(pt,at))},[pt]);x.useEffect(()=>{const at=w.viewport;if(at){const ot=()=>{dt(W.current),h==null||h()},k=()=>{const Z=new Date().getTime()-F.current;W.current=W.current-Z,window.clearTimeout($.current),m==null||m()};return at.addEventListener(Cf,k),at.addEventListener(Mf,ot),()=>{at.removeEventListener(Cf,k),at.removeEventListener(Mf,ot)}}},[w.viewport,P,m,h,dt]),x.useEffect(()=>{f&&!w.isClosePausedRef.current&&dt(P)},[f,P,w.isClosePausedRef,dt]),x.useEffect(()=>(tt(),()=>ft()),[tt,ft]);const xt=x.useMemo(()=>T?Cg(T):null,[T]);return w.viewport?_.jsxs(_.Fragment,{children:[xt&&_.jsx(dx,{__scopeToast:i,role:"status","aria-live":l==="foreground"?"assertive":"polite","aria-atomic":!0,children:xt}),_.jsx(ux,{scope:i,onClose:pt,children:Hs.createPortal(_.jsx(Zf.ItemSlot,{scope:i,children:_.jsx(Y1,{asChild:!0,onEscapeKeyDown:le(g,()=>{w.isFocusedToastEscapeKeyDownRef.current||pt(),w.isFocusedToastEscapeKeyDownRef.current=!1}),children:_.jsx(Le.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":f?"open":"closed","data-swipe-direction":w.swipeDirection,...S,ref:U,style:{userSelect:"none",touchAction:"none",...a.style},onKeyDown:le(a.onKeyDown,at=>{at.key==="Escape"&&(g==null||g(at.nativeEvent),at.nativeEvent.defaultPrevented||(w.isFocusedToastEscapeKeyDownRef.current=!0,pt()))}),onPointerDown:le(a.onPointerDown,at=>{at.button===0&&(D.current={x:at.clientX,y:at.clientY})}),onPointerMove:le(a.onPointerMove,at=>{if(!D.current)return;const ot=at.clientX-D.current.x,k=at.clientY-D.current.y,Z=!!Y.current,q=["left","right"].includes(w.swipeDirection),rt=["left","up"].includes(w.swipeDirection)?Math.min:Math.max,R=q?rt(0,ot):0,B=q?0:rt(0,k),I=at.pointerType==="touch"?10:2,V={x:R,y:B},et={originalEvent:at,delta:V};Z?(Y.current=V,ps(ix,b,et,{discrete:!1})):d0(V,w.swipeDirection,I)?(Y.current=V,ps(ox,v,et,{discrete:!1}),at.target.setPointerCapture(at.pointerId)):(Math.abs(ot)>I||Math.abs(k)>I)&&(D.current=null)}),onPointerUp:le(a.onPointerUp,at=>{const ot=Y.current,k=at.target;if(k.hasPointerCapture(at.pointerId)&&k.releasePointerCapture(at.pointerId),Y.current=null,D.current=null,ot){const Z=at.currentTarget,q={originalEvent:at,delta:ot};d0(ot,w.swipeDirection,w.swipeThreshold)?ps(sx,O,q,{discrete:!0}):ps(lx,E,q,{discrete:!0}),Z.addEventListener("click",rt=>rt.preventDefault(),{once:!0})}})})})}),w.viewport)})]}):null}),dx=a=>{const{__scopeToast:o,children:i,...l}=a,c=Bs(Ki,o),[f,d]=x.useState(!1),[g,m]=x.useState(!1);return px(()=>d(!0)),x.useEffect(()=>{const h=window.setTimeout(()=>m(!0),1e3);return()=>window.clearTimeout(h)},[]),g?null:_.jsx(pg,{asChild:!0,children:_.jsx(qs,{...l,children:f&&_.jsxs(_.Fragment,{children:[c.label," ",i]})})})},hx="ToastTitle",Sg=x.forwardRef((a,o)=>{const{__scopeToast:i,...l}=a;return _.jsx(Le.div,{...l,ref:o})});Sg.displayName=hx;var mx="ToastDescription",Eg=x.forwardRef((a,o)=>{const{__scopeToast:i,...l}=a;return _.jsx(Le.div,{...l,ref:o})});Eg.displayName=mx;var Tg="ToastAction",Og=x.forwardRef((a,o)=>{const{altText:i,...l}=a;return i.trim()?_.jsx(Rg,{altText:i,asChild:!0,children:_.jsx(Kf,{...l,ref:o})}):(console.error(`Invalid prop \`altText\` supplied to \`${Tg}\`. Expected non-empty \`string\`.`),null)});Og.displayName=Tg;var Ag="ToastClose",Kf=x.forwardRef((a,o)=>{const{__scopeToast:i,...l}=a,c=cx(Ag,i);return _.jsx(Rg,{asChild:!0,children:_.jsx(Le.button,{type:"button",...l,ref:o,onClick:le(a.onClick,c.onClose)})})});Kf.displayName=Ag;var Rg=x.forwardRef((a,o)=>{const{__scopeToast:i,altText:l,...c}=a;return _.jsx(Le.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":l||void 0,...c,ref:o})});function Cg(a){const o=[];return Array.from(a.childNodes).forEach(l=>{if(l.nodeType===l.TEXT_NODE&&l.textContent&&o.push(l.textContent),gx(l)){const c=l.ariaHidden||l.hidden||l.style.display==="none",f=l.dataset.radixToastAnnounceExclude==="";if(!c)if(f){const d=l.dataset.radixToastAnnounceAlt;d&&o.push(d)}else o.push(...Cg(l))}}),o}function ps(a,o,i,{discrete:l}){const c=i.originalEvent.currentTarget,f=new CustomEvent(a,{bubbles:!0,cancelable:!0,detail:i});o&&c.addEventListener(a,o,{once:!0}),l?fg(c,f):c.dispatchEvent(f)}var d0=(a,o,i=0)=>{const l=Math.abs(a.x),c=Math.abs(a.y),f=l>c;return o==="left"||o==="right"?f&&l>i:!f&&c>i};function px(a=()=>{}){const o=Za(a);Ka(()=>{let i=0,l=0;return i=window.requestAnimationFrame(()=>l=window.requestAnimationFrame(o)),()=>{window.cancelAnimationFrame(i),window.cancelAnimationFrame(l)}},[o])}function gx(a){return a.nodeType===a.ELEMENT_NODE}function bx(a){const o=[],i=document.createTreeWalker(a,NodeFilter.SHOW_ELEMENT,{acceptNode:l=>{const c=l.tagName==="INPUT"&&l.type==="hidden";return l.disabled||l.hidden||c?NodeFilter.FILTER_SKIP:l.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;i.nextNode();)o.push(i.currentNode);return o}function bf(a){const o=document.activeElement;return a.some(i=>i===o?!0:(i.focus(),document.activeElement!==o))}var vx=bg,Mg=yg,kg=wg,_g=Sg,Dg=Eg,Ng=Og,zg=Kf;function jg(a){var o,i,l="";if(typeof a=="string"||typeof a=="number")l+=a;else if(typeof a=="object")if(Array.isArray(a)){var c=a.length;for(o=0;o<c;o++)a[o]&&(i=jg(a[o]))&&(l&&(l+=" "),l+=i)}else for(i in a)a[i]&&(l&&(l+=" "),l+=i);return l}function Ug(){for(var a,o,i=0,l="",c=arguments.length;i<c;i++)(a=arguments[i])&&(o=jg(a))&&(l&&(l+=" "),l+=o);return l}const h0=a=>typeof a=="boolean"?`${a}`:a===0?"0":a,m0=Ug,yx=(a,o)=>i=>{var l;if((o==null?void 0:o.variants)==null)return m0(a,i==null?void 0:i.class,i==null?void 0:i.className);const{variants:c,defaultVariants:f}=o,d=Object.keys(c).map(h=>{const v=i==null?void 0:i[h],b=f==null?void 0:f[h];if(v===null)return null;const E=h0(v)||h0(b);return c[h][E]}),g=i&&Object.entries(i).reduce((h,v)=>{let[b,E]=v;return E===void 0||(h[b]=E),h},{}),m=o==null||(l=o.compoundVariants)===null||l===void 0?void 0:l.reduce((h,v)=>{let{class:b,className:E,...O}=v;return Object.entries(O).every(S=>{let[w,T]=S;return Array.isArray(T)?T.includes({...f,...g}[w]):{...f,...g}[w]===T})?[...h,b,E]:h},[]);return m0(a,d,m,i==null?void 0:i.class,i==null?void 0:i.className)};/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xx=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),wx=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(o,i,l)=>l?l.toUpperCase():i.toLowerCase()),p0=a=>{const o=wx(a);return o.charAt(0).toUpperCase()+o.slice(1)},Lg=(...a)=>a.filter((o,i,l)=>!!o&&o.trim()!==""&&l.indexOf(o)===i).join(" ").trim(),Sx=a=>{for(const o in a)if(o.startsWith("aria-")||o==="role"||o==="title")return!0};/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ex={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tx=x.forwardRef(({color:a="currentColor",size:o=24,strokeWidth:i=2,absoluteStrokeWidth:l,className:c="",children:f,iconNode:d,...g},m)=>x.createElement("svg",{ref:m,...Ex,width:o,height:o,stroke:a,strokeWidth:l?Number(i)*24/Number(o):i,className:Lg("lucide",c),...!f&&!Sx(g)&&{"aria-hidden":"true"},...g},[...d.map(([h,v])=>x.createElement(h,v)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const da=(a,o)=>{const i=x.forwardRef(({className:l,...c},f)=>x.createElement(Tx,{ref:f,iconNode:o,className:Lg(`lucide-${xx(p0(a))}`,`lucide-${a}`,l),...c}));return i.displayName=p0(a),i};/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Ax=da("book-open",Ox);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rx=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Cx=da("chevron-left",Rx);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mx=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],kx=da("chevron-right",Mx);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _x=[["path",{d:"M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z",key:"9m4mmf"}],["path",{d:"m2.5 21.5 1.4-1.4",key:"17g3f0"}],["path",{d:"m20.1 3.9 1.4-1.4",key:"1qn309"}],["path",{d:"M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z",key:"1t2c92"}],["path",{d:"m9.6 14.4 4.8-4.8",key:"6umqxw"}]],Dx=da("dumbbell",_x);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nx=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],zx=da("graduation-cap",Nx);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx=[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]],Ux=da("list-checks",jx);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lx=[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Hx=da("settings",Lx);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Px=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],qx=da("users",Px);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bx=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Yx=da("x",Bx),$f="-",Gx=a=>{const o=Xx(a),{conflictingClassGroups:i,conflictingClassGroupModifiers:l}=a;return{getClassGroupId:d=>{const g=d.split($f);return g[0]===""&&g.length!==1&&g.shift(),Hg(g,o)||Vx(d)},getConflictingClassGroupIds:(d,g)=>{const m=i[d]||[];return g&&l[d]?[...m,...l[d]]:m}}},Hg=(a,o)=>{var d;if(a.length===0)return o.classGroupId;const i=a[0],l=o.nextPart.get(i),c=l?Hg(a.slice(1),l):void 0;if(c)return c;if(o.validators.length===0)return;const f=a.join($f);return(d=o.validators.find(({validator:g})=>g(f)))==null?void 0:d.classGroupId},g0=/^\[(.+)\]$/,Vx=a=>{if(g0.test(a)){const o=g0.exec(a)[1],i=o==null?void 0:o.substring(0,o.indexOf(":"));if(i)return"arbitrary.."+i}},Xx=a=>{const{theme:o,classGroups:i}=a,l={nextPart:new Map,validators:[]};for(const c in i)_f(i[c],l,c,o);return l},_f=(a,o,i,l)=>{a.forEach(c=>{if(typeof c=="string"){const f=c===""?o:b0(o,c);f.classGroupId=i;return}if(typeof c=="function"){if(Qx(c)){_f(c(l),o,i,l);return}o.validators.push({validator:c,classGroupId:i});return}Object.entries(c).forEach(([f,d])=>{_f(d,b0(o,f),i,l)})})},b0=(a,o)=>{let i=a;return o.split($f).forEach(l=>{i.nextPart.has(l)||i.nextPart.set(l,{nextPart:new Map,validators:[]}),i=i.nextPart.get(l)}),i},Qx=a=>a.isThemeGetter,Zx=a=>{if(a<1)return{get:()=>{},set:()=>{}};let o=0,i=new Map,l=new Map;const c=(f,d)=>{i.set(f,d),o++,o>a&&(o=0,l=i,i=new Map)};return{get(f){let d=i.get(f);if(d!==void 0)return d;if((d=l.get(f))!==void 0)return c(f,d),d},set(f,d){i.has(f)?i.set(f,d):c(f,d)}}},Df="!",Nf=":",Kx=Nf.length,$x=a=>{const{prefix:o,experimentalParseClassName:i}=a;let l=c=>{const f=[];let d=0,g=0,m=0,h;for(let S=0;S<c.length;S++){let w=c[S];if(d===0&&g===0){if(w===Nf){f.push(c.slice(m,S)),m=S+Kx;continue}if(w==="/"){h=S;continue}}w==="["?d++:w==="]"?d--:w==="("?g++:w===")"&&g--}const v=f.length===0?c:c.substring(m),b=Fx(v),E=b!==v,O=h&&h>m?h-m:void 0;return{modifiers:f,hasImportantModifier:E,baseClassName:b,maybePostfixModifierPosition:O}};if(o){const c=o+Nf,f=l;l=d=>d.startsWith(c)?f(d.substring(c.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:d,maybePostfixModifierPosition:void 0}}if(i){const c=l;l=f=>i({className:f,parseClassName:c})}return l},Fx=a=>a.endsWith(Df)?a.substring(0,a.length-1):a.startsWith(Df)?a.substring(1):a,Jx=a=>{const o=Object.fromEntries(a.orderSensitiveModifiers.map(l=>[l,!0]));return l=>{if(l.length<=1)return l;const c=[];let f=[];return l.forEach(d=>{d[0]==="["||o[d]?(c.push(...f.sort(),d),f=[]):f.push(d)}),c.push(...f.sort()),c}},Wx=a=>({cache:Zx(a.cacheSize),parseClassName:$x(a),sortModifiers:Jx(a),...Gx(a)}),Ix=/\s+/,t2=(a,o)=>{const{parseClassName:i,getClassGroupId:l,getConflictingClassGroupIds:c,sortModifiers:f}=o,d=[],g=a.trim().split(Ix);let m="";for(let h=g.length-1;h>=0;h-=1){const v=g[h],{isExternal:b,modifiers:E,hasImportantModifier:O,baseClassName:S,maybePostfixModifierPosition:w}=i(v);if(b){m=v+(m.length>0?" "+m:m);continue}let T=!!w,C=l(T?S.substring(0,w):S);if(!C){if(!T){m=v+(m.length>0?" "+m:m);continue}if(C=l(S),!C){m=v+(m.length>0?" "+m:m);continue}T=!1}const U=f(E).join(":"),D=O?U+Df:U,Y=D+C;if(d.includes(Y))continue;d.push(Y);const P=c(C,T);for(let F=0;F<P.length;++F){const W=P[F];d.push(D+W)}m=v+(m.length>0?" "+m:m)}return m};function e2(){let a=0,o,i,l="";for(;a<arguments.length;)(o=arguments[a++])&&(i=Pg(o))&&(l&&(l+=" "),l+=i);return l}const Pg=a=>{if(typeof a=="string")return a;let o,i="";for(let l=0;l<a.length;l++)a[l]&&(o=Pg(a[l]))&&(i&&(i+=" "),i+=o);return i};function n2(a,...o){let i,l,c,f=d;function d(m){const h=o.reduce((v,b)=>b(v),a());return i=Wx(h),l=i.cache.get,c=i.cache.set,f=g,g(m)}function g(m){const h=l(m);if(h)return h;const v=t2(m,i);return c(m,v),v}return function(){return f(e2.apply(null,arguments))}}const ie=a=>{const o=i=>i[a]||[];return o.isThemeGetter=!0,o},qg=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Bg=/^\((?:(\w[\w-]*):)?(.+)\)$/i,a2=/^\d+\/\d+$/,r2=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,o2=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,i2=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,l2=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,s2=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,po=a=>a2.test(a),Tt=a=>!!a&&!Number.isNaN(Number(a)),Pa=a=>!!a&&Number.isInteger(Number(a)),vf=a=>a.endsWith("%")&&Tt(a.slice(0,-1)),aa=a=>r2.test(a),u2=()=>!0,c2=a=>o2.test(a)&&!i2.test(a),Yg=()=>!1,f2=a=>l2.test(a),d2=a=>s2.test(a),h2=a=>!lt(a)&&!st(a),m2=a=>ko(a,Xg,Yg),lt=a=>qg.test(a),br=a=>ko(a,Qg,c2),yf=a=>ko(a,y2,Tt),v0=a=>ko(a,Gg,Yg),p2=a=>ko(a,Vg,d2),gs=a=>ko(a,Zg,f2),st=a=>Bg.test(a),ji=a=>_o(a,Qg),g2=a=>_o(a,x2),y0=a=>_o(a,Gg),b2=a=>_o(a,Xg),v2=a=>_o(a,Vg),bs=a=>_o(a,Zg,!0),ko=(a,o,i)=>{const l=qg.exec(a);return l?l[1]?o(l[1]):i(l[2]):!1},_o=(a,o,i=!1)=>{const l=Bg.exec(a);return l?l[1]?o(l[1]):i:!1},Gg=a=>a==="position"||a==="percentage",Vg=a=>a==="image"||a==="url",Xg=a=>a==="length"||a==="size"||a==="bg-size",Qg=a=>a==="length",y2=a=>a==="number",x2=a=>a==="family-name",Zg=a=>a==="shadow",w2=()=>{const a=ie("color"),o=ie("font"),i=ie("text"),l=ie("font-weight"),c=ie("tracking"),f=ie("leading"),d=ie("breakpoint"),g=ie("container"),m=ie("spacing"),h=ie("radius"),v=ie("shadow"),b=ie("inset-shadow"),E=ie("text-shadow"),O=ie("drop-shadow"),S=ie("blur"),w=ie("perspective"),T=ie("aspect"),C=ie("ease"),U=ie("animate"),D=()=>["auto","avoid","all","avoid-page","page","left","right","column"],Y=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],P=()=>[...Y(),st,lt],F=()=>["auto","hidden","clip","visible","scroll"],W=()=>["auto","contain","none"],$=()=>[st,lt,m],tt=()=>[po,"full","auto",...$()],ft=()=>[Pa,"none","subgrid",st,lt],pt=()=>["auto",{span:["full",Pa,st,lt]},Pa,st,lt],dt=()=>[Pa,"auto",st,lt],xt=()=>["auto","min","max","fr",st,lt],at=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],ot=()=>["start","end","center","stretch","center-safe","end-safe"],k=()=>["auto",...$()],Z=()=>[po,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...$()],q=()=>[a,st,lt],rt=()=>[...Y(),y0,v0,{position:[st,lt]}],R=()=>["no-repeat",{repeat:["","x","y","space","round"]}],B=()=>["auto","cover","contain",b2,m2,{size:[st,lt]}],I=()=>[vf,ji,br],V=()=>["","none","full",h,st,lt],et=()=>["",Tt,ji,br],bt=()=>["solid","dashed","dotted","double"],nt=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],wt=()=>[Tt,vf,y0,v0],At=()=>["","none",S,st,lt],Xt=()=>["none",Tt,st,lt],pe=()=>["none",Tt,st,lt],He=()=>[Tt,st,lt],_e=()=>[po,"full",...$()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[aa],breakpoint:[aa],color:[u2],container:[aa],"drop-shadow":[aa],ease:["in","out","in-out"],font:[h2],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[aa],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[aa],shadow:[aa],spacing:["px",Tt],text:[aa],"text-shadow":[aa],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",po,lt,st,T]}],container:["container"],columns:[{columns:[Tt,lt,st,g]}],"break-after":[{"break-after":D()}],"break-before":[{"break-before":D()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:P()}],overflow:[{overflow:F()}],"overflow-x":[{"overflow-x":F()}],"overflow-y":[{"overflow-y":F()}],overscroll:[{overscroll:W()}],"overscroll-x":[{"overscroll-x":W()}],"overscroll-y":[{"overscroll-y":W()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:tt()}],"inset-x":[{"inset-x":tt()}],"inset-y":[{"inset-y":tt()}],start:[{start:tt()}],end:[{end:tt()}],top:[{top:tt()}],right:[{right:tt()}],bottom:[{bottom:tt()}],left:[{left:tt()}],visibility:["visible","invisible","collapse"],z:[{z:[Pa,"auto",st,lt]}],basis:[{basis:[po,"full","auto",g,...$()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[Tt,po,"auto","initial","none",lt]}],grow:[{grow:["",Tt,st,lt]}],shrink:[{shrink:["",Tt,st,lt]}],order:[{order:[Pa,"first","last","none",st,lt]}],"grid-cols":[{"grid-cols":ft()}],"col-start-end":[{col:pt()}],"col-start":[{"col-start":dt()}],"col-end":[{"col-end":dt()}],"grid-rows":[{"grid-rows":ft()}],"row-start-end":[{row:pt()}],"row-start":[{"row-start":dt()}],"row-end":[{"row-end":dt()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":xt()}],"auto-rows":[{"auto-rows":xt()}],gap:[{gap:$()}],"gap-x":[{"gap-x":$()}],"gap-y":[{"gap-y":$()}],"justify-content":[{justify:[...at(),"normal"]}],"justify-items":[{"justify-items":[...ot(),"normal"]}],"justify-self":[{"justify-self":["auto",...ot()]}],"align-content":[{content:["normal",...at()]}],"align-items":[{items:[...ot(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...ot(),{baseline:["","last"]}]}],"place-content":[{"place-content":at()}],"place-items":[{"place-items":[...ot(),"baseline"]}],"place-self":[{"place-self":["auto",...ot()]}],p:[{p:$()}],px:[{px:$()}],py:[{py:$()}],ps:[{ps:$()}],pe:[{pe:$()}],pt:[{pt:$()}],pr:[{pr:$()}],pb:[{pb:$()}],pl:[{pl:$()}],m:[{m:k()}],mx:[{mx:k()}],my:[{my:k()}],ms:[{ms:k()}],me:[{me:k()}],mt:[{mt:k()}],mr:[{mr:k()}],mb:[{mb:k()}],ml:[{ml:k()}],"space-x":[{"space-x":$()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":$()}],"space-y-reverse":["space-y-reverse"],size:[{size:Z()}],w:[{w:[g,"screen",...Z()]}],"min-w":[{"min-w":[g,"screen","none",...Z()]}],"max-w":[{"max-w":[g,"screen","none","prose",{screen:[d]},...Z()]}],h:[{h:["screen",...Z()]}],"min-h":[{"min-h":["screen","none",...Z()]}],"max-h":[{"max-h":["screen",...Z()]}],"font-size":[{text:["base",i,ji,br]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[l,st,yf]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",vf,lt]}],"font-family":[{font:[g2,lt,o]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[c,st,lt]}],"line-clamp":[{"line-clamp":[Tt,"none",st,yf]}],leading:[{leading:[f,...$()]}],"list-image":[{"list-image":["none",st,lt]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",st,lt]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:q()}],"text-color":[{text:q()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...bt(),"wavy"]}],"text-decoration-thickness":[{decoration:[Tt,"from-font","auto",st,br]}],"text-decoration-color":[{decoration:q()}],"underline-offset":[{"underline-offset":[Tt,"auto",st,lt]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:$()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",st,lt]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",st,lt]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:rt()}],"bg-repeat":[{bg:R()}],"bg-size":[{bg:B()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Pa,st,lt],radial:["",st,lt],conic:[Pa,st,lt]},v2,p2]}],"bg-color":[{bg:q()}],"gradient-from-pos":[{from:I()}],"gradient-via-pos":[{via:I()}],"gradient-to-pos":[{to:I()}],"gradient-from":[{from:q()}],"gradient-via":[{via:q()}],"gradient-to":[{to:q()}],rounded:[{rounded:V()}],"rounded-s":[{"rounded-s":V()}],"rounded-e":[{"rounded-e":V()}],"rounded-t":[{"rounded-t":V()}],"rounded-r":[{"rounded-r":V()}],"rounded-b":[{"rounded-b":V()}],"rounded-l":[{"rounded-l":V()}],"rounded-ss":[{"rounded-ss":V()}],"rounded-se":[{"rounded-se":V()}],"rounded-ee":[{"rounded-ee":V()}],"rounded-es":[{"rounded-es":V()}],"rounded-tl":[{"rounded-tl":V()}],"rounded-tr":[{"rounded-tr":V()}],"rounded-br":[{"rounded-br":V()}],"rounded-bl":[{"rounded-bl":V()}],"border-w":[{border:et()}],"border-w-x":[{"border-x":et()}],"border-w-y":[{"border-y":et()}],"border-w-s":[{"border-s":et()}],"border-w-e":[{"border-e":et()}],"border-w-t":[{"border-t":et()}],"border-w-r":[{"border-r":et()}],"border-w-b":[{"border-b":et()}],"border-w-l":[{"border-l":et()}],"divide-x":[{"divide-x":et()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":et()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...bt(),"hidden","none"]}],"divide-style":[{divide:[...bt(),"hidden","none"]}],"border-color":[{border:q()}],"border-color-x":[{"border-x":q()}],"border-color-y":[{"border-y":q()}],"border-color-s":[{"border-s":q()}],"border-color-e":[{"border-e":q()}],"border-color-t":[{"border-t":q()}],"border-color-r":[{"border-r":q()}],"border-color-b":[{"border-b":q()}],"border-color-l":[{"border-l":q()}],"divide-color":[{divide:q()}],"outline-style":[{outline:[...bt(),"none","hidden"]}],"outline-offset":[{"outline-offset":[Tt,st,lt]}],"outline-w":[{outline:["",Tt,ji,br]}],"outline-color":[{outline:q()}],shadow:[{shadow:["","none",v,bs,gs]}],"shadow-color":[{shadow:q()}],"inset-shadow":[{"inset-shadow":["none",b,bs,gs]}],"inset-shadow-color":[{"inset-shadow":q()}],"ring-w":[{ring:et()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:q()}],"ring-offset-w":[{"ring-offset":[Tt,br]}],"ring-offset-color":[{"ring-offset":q()}],"inset-ring-w":[{"inset-ring":et()}],"inset-ring-color":[{"inset-ring":q()}],"text-shadow":[{"text-shadow":["none",E,bs,gs]}],"text-shadow-color":[{"text-shadow":q()}],opacity:[{opacity:[Tt,st,lt]}],"mix-blend":[{"mix-blend":[...nt(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":nt()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[Tt]}],"mask-image-linear-from-pos":[{"mask-linear-from":wt()}],"mask-image-linear-to-pos":[{"mask-linear-to":wt()}],"mask-image-linear-from-color":[{"mask-linear-from":q()}],"mask-image-linear-to-color":[{"mask-linear-to":q()}],"mask-image-t-from-pos":[{"mask-t-from":wt()}],"mask-image-t-to-pos":[{"mask-t-to":wt()}],"mask-image-t-from-color":[{"mask-t-from":q()}],"mask-image-t-to-color":[{"mask-t-to":q()}],"mask-image-r-from-pos":[{"mask-r-from":wt()}],"mask-image-r-to-pos":[{"mask-r-to":wt()}],"mask-image-r-from-color":[{"mask-r-from":q()}],"mask-image-r-to-color":[{"mask-r-to":q()}],"mask-image-b-from-pos":[{"mask-b-from":wt()}],"mask-image-b-to-pos":[{"mask-b-to":wt()}],"mask-image-b-from-color":[{"mask-b-from":q()}],"mask-image-b-to-color":[{"mask-b-to":q()}],"mask-image-l-from-pos":[{"mask-l-from":wt()}],"mask-image-l-to-pos":[{"mask-l-to":wt()}],"mask-image-l-from-color":[{"mask-l-from":q()}],"mask-image-l-to-color":[{"mask-l-to":q()}],"mask-image-x-from-pos":[{"mask-x-from":wt()}],"mask-image-x-to-pos":[{"mask-x-to":wt()}],"mask-image-x-from-color":[{"mask-x-from":q()}],"mask-image-x-to-color":[{"mask-x-to":q()}],"mask-image-y-from-pos":[{"mask-y-from":wt()}],"mask-image-y-to-pos":[{"mask-y-to":wt()}],"mask-image-y-from-color":[{"mask-y-from":q()}],"mask-image-y-to-color":[{"mask-y-to":q()}],"mask-image-radial":[{"mask-radial":[st,lt]}],"mask-image-radial-from-pos":[{"mask-radial-from":wt()}],"mask-image-radial-to-pos":[{"mask-radial-to":wt()}],"mask-image-radial-from-color":[{"mask-radial-from":q()}],"mask-image-radial-to-color":[{"mask-radial-to":q()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":Y()}],"mask-image-conic-pos":[{"mask-conic":[Tt]}],"mask-image-conic-from-pos":[{"mask-conic-from":wt()}],"mask-image-conic-to-pos":[{"mask-conic-to":wt()}],"mask-image-conic-from-color":[{"mask-conic-from":q()}],"mask-image-conic-to-color":[{"mask-conic-to":q()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:rt()}],"mask-repeat":[{mask:R()}],"mask-size":[{mask:B()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",st,lt]}],filter:[{filter:["","none",st,lt]}],blur:[{blur:At()}],brightness:[{brightness:[Tt,st,lt]}],contrast:[{contrast:[Tt,st,lt]}],"drop-shadow":[{"drop-shadow":["","none",O,bs,gs]}],"drop-shadow-color":[{"drop-shadow":q()}],grayscale:[{grayscale:["",Tt,st,lt]}],"hue-rotate":[{"hue-rotate":[Tt,st,lt]}],invert:[{invert:["",Tt,st,lt]}],saturate:[{saturate:[Tt,st,lt]}],sepia:[{sepia:["",Tt,st,lt]}],"backdrop-filter":[{"backdrop-filter":["","none",st,lt]}],"backdrop-blur":[{"backdrop-blur":At()}],"backdrop-brightness":[{"backdrop-brightness":[Tt,st,lt]}],"backdrop-contrast":[{"backdrop-contrast":[Tt,st,lt]}],"backdrop-grayscale":[{"backdrop-grayscale":["",Tt,st,lt]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[Tt,st,lt]}],"backdrop-invert":[{"backdrop-invert":["",Tt,st,lt]}],"backdrop-opacity":[{"backdrop-opacity":[Tt,st,lt]}],"backdrop-saturate":[{"backdrop-saturate":[Tt,st,lt]}],"backdrop-sepia":[{"backdrop-sepia":["",Tt,st,lt]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":$()}],"border-spacing-x":[{"border-spacing-x":$()}],"border-spacing-y":[{"border-spacing-y":$()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",st,lt]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[Tt,"initial",st,lt]}],ease:[{ease:["linear","initial",C,st,lt]}],delay:[{delay:[Tt,st,lt]}],animate:[{animate:["none",U,st,lt]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[w,st,lt]}],"perspective-origin":[{"perspective-origin":P()}],rotate:[{rotate:Xt()}],"rotate-x":[{"rotate-x":Xt()}],"rotate-y":[{"rotate-y":Xt()}],"rotate-z":[{"rotate-z":Xt()}],scale:[{scale:pe()}],"scale-x":[{"scale-x":pe()}],"scale-y":[{"scale-y":pe()}],"scale-z":[{"scale-z":pe()}],"scale-3d":["scale-3d"],skew:[{skew:He()}],"skew-x":[{"skew-x":He()}],"skew-y":[{"skew-y":He()}],transform:[{transform:[st,lt,"","none","gpu","cpu"]}],"transform-origin":[{origin:P()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:_e()}],"translate-x":[{"translate-x":_e()}],"translate-y":[{"translate-y":_e()}],"translate-z":[{"translate-z":_e()}],"translate-none":["translate-none"],accent:[{accent:q()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:q()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",st,lt]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":$()}],"scroll-mx":[{"scroll-mx":$()}],"scroll-my":[{"scroll-my":$()}],"scroll-ms":[{"scroll-ms":$()}],"scroll-me":[{"scroll-me":$()}],"scroll-mt":[{"scroll-mt":$()}],"scroll-mr":[{"scroll-mr":$()}],"scroll-mb":[{"scroll-mb":$()}],"scroll-ml":[{"scroll-ml":$()}],"scroll-p":[{"scroll-p":$()}],"scroll-px":[{"scroll-px":$()}],"scroll-py":[{"scroll-py":$()}],"scroll-ps":[{"scroll-ps":$()}],"scroll-pe":[{"scroll-pe":$()}],"scroll-pt":[{"scroll-pt":$()}],"scroll-pr":[{"scroll-pr":$()}],"scroll-pb":[{"scroll-pb":$()}],"scroll-pl":[{"scroll-pl":$()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",st,lt]}],fill:[{fill:["none",...q()]}],"stroke-w":[{stroke:[Tt,ji,br,yf]}],stroke:[{stroke:["none",...q()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},S2=n2(w2);function vn(...a){return S2(Ug(a))}const E2=vx,Kg=x.forwardRef(({className:a,...o},i)=>_.jsx(Mg,{ref:i,className:vn("fixed top-0 z-100 flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",a),...o}));Kg.displayName=Mg.displayName;const T2=yx("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-(--radix-toast-swipe-end-x) data-[swipe=move]:translate-x-(--radix-toast-swipe-move-x) data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),$g=x.forwardRef(({className:a,variant:o,...i},l)=>_.jsx(kg,{ref:l,className:vn(T2({variant:o}),a),...i}));$g.displayName=kg.displayName;const O2=x.forwardRef(({className:a,...o},i)=>_.jsx(Ng,{ref:i,className:vn("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",a),...o}));O2.displayName=Ng.displayName;const Fg=x.forwardRef(({className:a,...o},i)=>_.jsx(zg,{ref:i,className:vn("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",a),"toast-close":"",...o,children:_.jsx(Yx,{className:"h-4 w-4"})}));Fg.displayName=zg.displayName;const Jg=x.forwardRef(({className:a,...o},i)=>_.jsx(_g,{ref:i,className:vn("text-sm font-semibold",a),...o}));Jg.displayName=_g.displayName;const Wg=x.forwardRef(({className:a,...o},i)=>_.jsx(Dg,{ref:i,className:vn("text-sm opacity-90",a),...o}));Wg.displayName=Dg.displayName;function A2(){const{toasts:a}=A1();return _.jsxs(E2,{children:[a.map(function({id:o,title:i,description:l,action:c,...f}){return _.jsxs($g,{...f,children:[_.jsxs("div",{className:"grid gap-1",children:[i&&_.jsx(Jg,{children:i}),l&&_.jsx(Wg,{children:l})]}),c,_.jsx(Fg,{})]},o)}),_.jsx(Kg,{})]})}var R2=(a,o,i,l,c,f,d,g)=>{let m=document.documentElement,h=["light","dark"];function v(O){(Array.isArray(a)?a:[a]).forEach(S=>{let w=S==="class",T=w&&f?c.map(C=>f[C]||C):c;w?(m.classList.remove(...T),m.classList.add(f&&f[O]?f[O]:O)):m.setAttribute(S,O)}),b(O)}function b(O){g&&h.includes(O)&&(m.style.colorScheme=O)}function E(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}if(l)v(l);else try{let O=localStorage.getItem(o)||i,S=d&&O==="system"?E():O;v(S)}catch{}},C2=x.createContext(void 0),M2={setTheme:a=>{},themes:[]},k2=()=>{var a;return(a=x.useContext(C2))!=null?a:M2};x.memo(({forcedTheme:a,storageKey:o,attribute:i,enableSystem:l,enableColorScheme:c,defaultTheme:f,value:d,themes:g,nonce:m,scriptProps:h})=>{let v=JSON.stringify([i,o,f,a,g,d,l,c]).slice(1,-1);return x.createElement("script",{...h,suppressHydrationWarning:!0,nonce:typeof window>"u"?m:"",dangerouslySetInnerHTML:{__html:`(${R2.toString()})(${v})`}})});function _2(a){if(typeof document>"u")return;let o=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",o.appendChild(i),i.styleSheet?i.styleSheet.cssText=a:i.appendChild(document.createTextNode(a))}const D2=a=>{switch(a){case"success":return j2;case"info":return L2;case"warning":return U2;case"error":return H2;default:return null}},N2=Array(12).fill(0),z2=({visible:a,className:o})=>J.createElement("div",{className:["sonner-loading-wrapper",o].filter(Boolean).join(" "),"data-visible":a},J.createElement("div",{className:"sonner-spinner"},N2.map((i,l)=>J.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${l}`})))),j2=J.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},J.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),U2=J.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},J.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),L2=J.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},J.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),H2=J.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},J.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),P2=J.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},J.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),J.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),q2=()=>{const[a,o]=J.useState(document.hidden);return J.useEffect(()=>{const i=()=>{o(document.hidden)};return document.addEventListener("visibilitychange",i),()=>window.removeEventListener("visibilitychange",i)},[]),a};let zf=1;class B2{constructor(){this.subscribe=o=>(this.subscribers.push(o),()=>{const i=this.subscribers.indexOf(o);this.subscribers.splice(i,1)}),this.publish=o=>{this.subscribers.forEach(i=>i(o))},this.addToast=o=>{this.publish(o),this.toasts=[...this.toasts,o]},this.create=o=>{var i;const{message:l,...c}=o,f=typeof(o==null?void 0:o.id)=="number"||((i=o.id)==null?void 0:i.length)>0?o.id:zf++,d=this.toasts.find(m=>m.id===f),g=o.dismissible===void 0?!0:o.dismissible;return this.dismissedToasts.has(f)&&this.dismissedToasts.delete(f),d?this.toasts=this.toasts.map(m=>m.id===f?(this.publish({...m,...o,id:f,title:l}),{...m,...o,id:f,dismissible:g,title:l}):m):this.addToast({title:l,...c,dismissible:g,id:f}),f},this.dismiss=o=>(o?(this.dismissedToasts.add(o),requestAnimationFrame(()=>this.subscribers.forEach(i=>i({id:o,dismiss:!0})))):this.toasts.forEach(i=>{this.subscribers.forEach(l=>l({id:i.id,dismiss:!0}))}),o),this.message=(o,i)=>this.create({...i,message:o}),this.error=(o,i)=>this.create({...i,message:o,type:"error"}),this.success=(o,i)=>this.create({...i,type:"success",message:o}),this.info=(o,i)=>this.create({...i,type:"info",message:o}),this.warning=(o,i)=>this.create({...i,type:"warning",message:o}),this.loading=(o,i)=>this.create({...i,type:"loading",message:o}),this.promise=(o,i)=>{if(!i)return;let l;i.loading!==void 0&&(l=this.create({...i,promise:o,type:"loading",message:i.loading,description:typeof i.description!="function"?i.description:void 0}));const c=Promise.resolve(o instanceof Function?o():o);let f=l!==void 0,d;const g=c.then(async h=>{if(d=["resolve",h],J.isValidElement(h))f=!1,this.create({id:l,type:"default",message:h});else if(G2(h)&&!h.ok){f=!1;const b=typeof i.error=="function"?await i.error(`HTTP error! status: ${h.status}`):i.error,E=typeof i.description=="function"?await i.description(`HTTP error! status: ${h.status}`):i.description,S=typeof b=="object"&&!J.isValidElement(b)?b:{message:b};this.create({id:l,type:"error",description:E,...S})}else if(h instanceof Error){f=!1;const b=typeof i.error=="function"?await i.error(h):i.error,E=typeof i.description=="function"?await i.description(h):i.description,S=typeof b=="object"&&!J.isValidElement(b)?b:{message:b};this.create({id:l,type:"error",description:E,...S})}else if(i.success!==void 0){f=!1;const b=typeof i.success=="function"?await i.success(h):i.success,E=typeof i.description=="function"?await i.description(h):i.description,S=typeof b=="object"&&!J.isValidElement(b)?b:{message:b};this.create({id:l,type:"success",description:E,...S})}}).catch(async h=>{if(d=["reject",h],i.error!==void 0){f=!1;const v=typeof i.error=="function"?await i.error(h):i.error,b=typeof i.description=="function"?await i.description(h):i.description,O=typeof v=="object"&&!J.isValidElement(v)?v:{message:v};this.create({id:l,type:"error",description:b,...O})}}).finally(()=>{f&&(this.dismiss(l),l=void 0),i.finally==null||i.finally.call(i)}),m=()=>new Promise((h,v)=>g.then(()=>d[0]==="reject"?v(d[1]):h(d[1])).catch(v));return typeof l!="string"&&typeof l!="number"?{unwrap:m}:Object.assign(l,{unwrap:m})},this.custom=(o,i)=>{const l=(i==null?void 0:i.id)||zf++;return this.create({jsx:o(l),id:l,...i}),l},this.getActiveToasts=()=>this.toasts.filter(o=>!this.dismissedToasts.has(o.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}}const Ue=new B2,Y2=(a,o)=>{const i=(o==null?void 0:o.id)||zf++;return Ue.addToast({title:a,...o,id:i}),i},G2=a=>a&&typeof a=="object"&&"ok"in a&&typeof a.ok=="boolean"&&"status"in a&&typeof a.status=="number",V2=Y2,X2=()=>Ue.toasts,Q2=()=>Ue.getActiveToasts(),x0=Object.assign(V2,{success:Ue.success,info:Ue.info,warning:Ue.warning,error:Ue.error,custom:Ue.custom,message:Ue.message,promise:Ue.promise,dismiss:Ue.dismiss,loading:Ue.loading},{getHistory:X2,getToasts:Q2});_2("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}[data-sonner-toaster][data-lifted=true]{transform:translateY(-8px)}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");function vs(a){return a.label!==void 0}const Z2=3,K2="24px",$2="16px",w0=4e3,F2=356,J2=14,W2=45,I2=200;function kn(...a){return a.filter(Boolean).join(" ")}function t5(a){const[o,i]=a.split("-"),l=[];return o&&l.push(o),i&&l.push(i),l}const e5=a=>{var o,i,l,c,f,d,g,m,h;const{invert:v,toast:b,unstyled:E,interacting:O,setHeights:S,visibleToasts:w,heights:T,index:C,toasts:U,expanded:D,removeToast:Y,defaultRichColors:P,closeButton:F,style:W,cancelButtonStyle:$,actionButtonStyle:tt,className:ft="",descriptionClassName:pt="",duration:dt,position:xt,gap:at,expandByDefault:ot,classNames:k,icons:Z,closeButtonAriaLabel:q="Close toast"}=a,[rt,R]=J.useState(null),[B,I]=J.useState(null),[V,et]=J.useState(!1),[bt,nt]=J.useState(!1),[wt,At]=J.useState(!1),[Xt,pe]=J.useState(!1),[He,_e]=J.useState(!1),[on,Sn]=J.useState(0),[Uo,Tr]=J.useState(0),ue=J.useRef(b.duration||dt||w0),Or=J.useRef(null),ge=J.useRef(null),Ii=C===0,Ar=C+1<=w,Ae=b.type,qn=b.dismissible!==!1,Ws=b.className||"",Is=b.descriptionClassName||"",En=J.useMemo(()=>T.findIndex(vt=>vt.toastId===b.id)||0,[T,b.id]),Re=J.useMemo(()=>{var vt;return(vt=b.closeButton)!=null?vt:F},[b.closeButton,F]),ln=J.useMemo(()=>b.duration||dt||w0,[b.duration,dt]),be=J.useRef(0),ma=J.useRef(0),tl=J.useRef(0),pa=J.useRef(null),[Rr,Cr]=xt.split("-"),Tn=J.useMemo(()=>T.reduce((vt,$t,te)=>te>=En?vt:vt+$t.height,0),[T,En]),Ja=q2(),Wa=b.invert||v,Lo=Ae==="loading";ma.current=J.useMemo(()=>En*at+Tn,[En,Tn]),J.useEffect(()=>{ue.current=ln},[ln]),J.useEffect(()=>{et(!0)},[]),J.useEffect(()=>{const vt=ge.current;if(vt){const $t=vt.getBoundingClientRect().height;return Tr($t),S(te=>[{toastId:b.id,height:$t,position:b.position},...te]),()=>S(te=>te.filter(ve=>ve.toastId!==b.id))}},[S,b.id]),J.useLayoutEffect(()=>{if(!V)return;const vt=ge.current,$t=vt.style.height;vt.style.height="auto";const te=vt.getBoundingClientRect().height;vt.style.height=$t,Tr(te),S(ve=>ve.find(ae=>ae.toastId===b.id)?ve.map(ae=>ae.toastId===b.id?{...ae,height:te}:ae):[{toastId:b.id,height:te,position:b.position},...ve])},[V,b.title,b.description,S,b.id]);const sn=J.useCallback(()=>{nt(!0),Sn(ma.current),S(vt=>vt.filter($t=>$t.toastId!==b.id)),setTimeout(()=>{Y(b)},I2)},[b,Y,S,ma]);J.useEffect(()=>{if(b.promise&&Ae==="loading"||b.duration===1/0||b.type==="loading")return;let vt;return D||O||Ja?(()=>{if(tl.current<be.current){const ve=new Date().getTime()-be.current;ue.current=ue.current-ve}tl.current=new Date().getTime()})():(()=>{ue.current!==1/0&&(be.current=new Date().getTime(),vt=setTimeout(()=>{b.onAutoClose==null||b.onAutoClose.call(b,b),sn()},ue.current))})(),()=>clearTimeout(vt)},[D,O,b,Ae,Ja,sn]),J.useEffect(()=>{b.delete&&sn()},[sn,b.delete]);function el(){var vt;if(Z!=null&&Z.loading){var $t;return J.createElement("div",{className:kn(k==null?void 0:k.loader,b==null||($t=b.classNames)==null?void 0:$t.loader,"sonner-loader"),"data-visible":Ae==="loading"},Z.loading)}return J.createElement(z2,{className:kn(k==null?void 0:k.loader,b==null||(vt=b.classNames)==null?void 0:vt.loader),visible:Ae==="loading"})}const Ho=b.icon||(Z==null?void 0:Z[Ae])||D2(Ae);var ga,nl;return J.createElement("li",{tabIndex:0,ref:ge,className:kn(ft,Ws,k==null?void 0:k.toast,b==null||(o=b.classNames)==null?void 0:o.toast,k==null?void 0:k.default,k==null?void 0:k[Ae],b==null||(i=b.classNames)==null?void 0:i[Ae]),"data-sonner-toast":"","data-rich-colors":(ga=b.richColors)!=null?ga:P,"data-styled":!(b.jsx||b.unstyled||E),"data-mounted":V,"data-promise":!!b.promise,"data-swiped":He,"data-removed":bt,"data-visible":Ar,"data-y-position":Rr,"data-x-position":Cr,"data-index":C,"data-front":Ii,"data-swiping":wt,"data-dismissible":qn,"data-type":Ae,"data-invert":Wa,"data-swipe-out":Xt,"data-swipe-direction":B,"data-expanded":!!(D||ot&&V),style:{"--index":C,"--toasts-before":C,"--z-index":U.length-C,"--offset":`${bt?on:ma.current}px`,"--initial-height":ot?"auto":`${Uo}px`,...W,...b.style},onDragEnd:()=>{At(!1),R(null),pa.current=null},onPointerDown:vt=>{Lo||!qn||(Or.current=new Date,Sn(ma.current),vt.target.setPointerCapture(vt.pointerId),vt.target.tagName!=="BUTTON"&&(At(!0),pa.current={x:vt.clientX,y:vt.clientY}))},onPointerUp:()=>{var vt,$t,te;if(Xt||!qn)return;pa.current=null;const ve=Number(((vt=ge.current)==null?void 0:vt.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),Ia=Number((($t=ge.current)==null?void 0:$t.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),ae=new Date().getTime()-((te=Or.current)==null?void 0:te.getTime()),Ft=rt==="x"?ve:Ia,Jt=Math.abs(Ft)/ae;if(Math.abs(Ft)>=W2||Jt>.11){Sn(ma.current),b.onDismiss==null||b.onDismiss.call(b,b),I(rt==="x"?ve>0?"right":"left":Ia>0?"down":"up"),sn(),pe(!0);return}else{var Pt,ce;(Pt=ge.current)==null||Pt.style.setProperty("--swipe-amount-x","0px"),(ce=ge.current)==null||ce.style.setProperty("--swipe-amount-y","0px")}_e(!1),At(!1),R(null)},onPointerMove:vt=>{var $t,te,ve;if(!pa.current||!qn||(($t=window.getSelection())==null?void 0:$t.toString().length)>0)return;const ae=vt.clientY-pa.current.y,Ft=vt.clientX-pa.current.x;var Jt;const Pt=(Jt=a.swipeDirections)!=null?Jt:t5(xt);!rt&&(Math.abs(Ft)>1||Math.abs(ae)>1)&&R(Math.abs(Ft)>Math.abs(ae)?"x":"y");let ce={x:0,y:0};const Mr=Bn=>1/(1.5+Math.abs(Bn)/20);if(rt==="y"){if(Pt.includes("top")||Pt.includes("bottom"))if(Pt.includes("top")&&ae<0||Pt.includes("bottom")&&ae>0)ce.y=ae;else{const Bn=ae*Mr(ae);ce.y=Math.abs(Bn)<Math.abs(ae)?Bn:ae}}else if(rt==="x"&&(Pt.includes("left")||Pt.includes("right")))if(Pt.includes("left")&&Ft<0||Pt.includes("right")&&Ft>0)ce.x=Ft;else{const Bn=Ft*Mr(Ft);ce.x=Math.abs(Bn)<Math.abs(Ft)?Bn:Ft}(Math.abs(ce.x)>0||Math.abs(ce.y)>0)&&_e(!0),(te=ge.current)==null||te.style.setProperty("--swipe-amount-x",`${ce.x}px`),(ve=ge.current)==null||ve.style.setProperty("--swipe-amount-y",`${ce.y}px`)}},Re&&!b.jsx&&Ae!=="loading"?J.createElement("button",{"aria-label":q,"data-disabled":Lo,"data-close-button":!0,onClick:Lo||!qn?()=>{}:()=>{sn(),b.onDismiss==null||b.onDismiss.call(b,b)},className:kn(k==null?void 0:k.closeButton,b==null||(l=b.classNames)==null?void 0:l.closeButton)},(nl=Z==null?void 0:Z.close)!=null?nl:P2):null,(Ae||b.icon||b.promise)&&b.icon!==null&&((Z==null?void 0:Z[Ae])!==null||b.icon)?J.createElement("div",{"data-icon":"",className:kn(k==null?void 0:k.icon,b==null||(c=b.classNames)==null?void 0:c.icon)},b.promise||b.type==="loading"&&!b.icon?b.icon||el():null,b.type!=="loading"?Ho:null):null,J.createElement("div",{"data-content":"",className:kn(k==null?void 0:k.content,b==null||(f=b.classNames)==null?void 0:f.content)},J.createElement("div",{"data-title":"",className:kn(k==null?void 0:k.title,b==null||(d=b.classNames)==null?void 0:d.title)},b.jsx?b.jsx:typeof b.title=="function"?b.title():b.title),b.description?J.createElement("div",{"data-description":"",className:kn(pt,Is,k==null?void 0:k.description,b==null||(g=b.classNames)==null?void 0:g.description)},typeof b.description=="function"?b.description():b.description):null),J.isValidElement(b.cancel)?b.cancel:b.cancel&&vs(b.cancel)?J.createElement("button",{"data-button":!0,"data-cancel":!0,style:b.cancelButtonStyle||$,onClick:vt=>{vs(b.cancel)&&qn&&(b.cancel.onClick==null||b.cancel.onClick.call(b.cancel,vt),sn())},className:kn(k==null?void 0:k.cancelButton,b==null||(m=b.classNames)==null?void 0:m.cancelButton)},b.cancel.label):null,J.isValidElement(b.action)?b.action:b.action&&vs(b.action)?J.createElement("button",{"data-button":!0,"data-action":!0,style:b.actionButtonStyle||tt,onClick:vt=>{vs(b.action)&&(b.action.onClick==null||b.action.onClick.call(b.action,vt),!vt.defaultPrevented&&sn())},className:kn(k==null?void 0:k.actionButton,b==null||(h=b.classNames)==null?void 0:h.actionButton)},b.action.label):null)};function S0(){if(typeof window>"u"||typeof document>"u")return"ltr";const a=document.documentElement.getAttribute("dir");return a==="auto"||!a?window.getComputedStyle(document.documentElement).direction:a}function n5(a,o){const i={};return[a,o].forEach((l,c)=>{const f=c===1,d=f?"--mobile-offset":"--offset",g=f?$2:K2;function m(h){["top","right","bottom","left"].forEach(v=>{i[`${d}-${v}`]=typeof h=="number"?`${h}px`:h})}typeof l=="number"||typeof l=="string"?m(l):typeof l=="object"?["top","right","bottom","left"].forEach(h=>{l[h]===void 0?i[`${d}-${h}`]=g:i[`${d}-${h}`]=typeof l[h]=="number"?`${l[h]}px`:l[h]}):m(g)}),i}const a5=J.forwardRef(function(o,i){const{invert:l,position:c="bottom-right",hotkey:f=["altKey","KeyT"],expand:d,closeButton:g,className:m,offset:h,mobileOffset:v,theme:b="light",richColors:E,duration:O,style:S,visibleToasts:w=Z2,toastOptions:T,dir:C=S0(),gap:U=J2,icons:D,containerAriaLabel:Y="Notifications"}=o,[P,F]=J.useState([]),W=J.useMemo(()=>Array.from(new Set([c].concat(P.filter(B=>B.position).map(B=>B.position)))),[P,c]),[$,tt]=J.useState([]),[ft,pt]=J.useState(!1),[dt,xt]=J.useState(!1),[at,ot]=J.useState(b!=="system"?b:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),k=J.useRef(null),Z=f.join("+").replace(/Key/g,"").replace(/Digit/g,""),q=J.useRef(null),rt=J.useRef(!1),R=J.useCallback(B=>{F(I=>{var V;return(V=I.find(et=>et.id===B.id))!=null&&V.delete||Ue.dismiss(B.id),I.filter(({id:et})=>et!==B.id)})},[]);return J.useEffect(()=>Ue.subscribe(B=>{if(B.dismiss){requestAnimationFrame(()=>{F(I=>I.map(V=>V.id===B.id?{...V,delete:!0}:V))});return}setTimeout(()=>{sg.flushSync(()=>{F(I=>{const V=I.findIndex(et=>et.id===B.id);return V!==-1?[...I.slice(0,V),{...I[V],...B},...I.slice(V+1)]:[B,...I]})})})}),[P]),J.useEffect(()=>{if(b!=="system"){ot(b);return}if(b==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?ot("dark"):ot("light")),typeof window>"u")return;const B=window.matchMedia("(prefers-color-scheme: dark)");try{B.addEventListener("change",({matches:I})=>{ot(I?"dark":"light")})}catch{B.addListener(({matches:V})=>{try{ot(V?"dark":"light")}catch(et){console.error(et)}})}},[b]),J.useEffect(()=>{P.length<=1&&pt(!1)},[P]),J.useEffect(()=>{const B=I=>{var V;if(f.every(nt=>I[nt]||I.code===nt)){var bt;pt(!0),(bt=k.current)==null||bt.focus()}I.code==="Escape"&&(document.activeElement===k.current||(V=k.current)!=null&&V.contains(document.activeElement))&&pt(!1)};return document.addEventListener("keydown",B),()=>document.removeEventListener("keydown",B)},[f]),J.useEffect(()=>{if(k.current)return()=>{q.current&&(q.current.focus({preventScroll:!0}),q.current=null,rt.current=!1)}},[k.current]),J.createElement("section",{ref:i,"aria-label":`${Y} ${Z}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},W.map((B,I)=>{var V;const[et,bt]=B.split("-");return P.length?J.createElement("ol",{key:B,dir:C==="auto"?S0():C,tabIndex:-1,ref:k,className:m,"data-sonner-toaster":!0,"data-sonner-theme":at,"data-y-position":et,"data-lifted":ft&&P.length>1&&!d,"data-x-position":bt,style:{"--front-toast-height":`${((V=$[0])==null?void 0:V.height)||0}px`,"--width":`${F2}px`,"--gap":`${U}px`,...S,...n5(h,v)},onBlur:nt=>{rt.current&&!nt.currentTarget.contains(nt.relatedTarget)&&(rt.current=!1,q.current&&(q.current.focus({preventScroll:!0}),q.current=null))},onFocus:nt=>{nt.target instanceof HTMLElement&&nt.target.dataset.dismissible==="false"||rt.current||(rt.current=!0,q.current=nt.relatedTarget)},onMouseEnter:()=>pt(!0),onMouseMove:()=>pt(!0),onMouseLeave:()=>{dt||pt(!1)},onDragEnd:()=>pt(!1),onPointerDown:nt=>{nt.target instanceof HTMLElement&&nt.target.dataset.dismissible==="false"||xt(!0)},onPointerUp:()=>xt(!1)},P.filter(nt=>!nt.position&&I===0||nt.position===B).map((nt,wt)=>{var At,Xt;return J.createElement(e5,{key:nt.id,icons:D,index:wt,toast:nt,defaultRichColors:E,duration:(At=T==null?void 0:T.duration)!=null?At:O,className:T==null?void 0:T.className,descriptionClassName:T==null?void 0:T.descriptionClassName,invert:l,visibleToasts:w,closeButton:(Xt=T==null?void 0:T.closeButton)!=null?Xt:g,interacting:dt,position:B,style:T==null?void 0:T.style,unstyled:T==null?void 0:T.unstyled,classNames:T==null?void 0:T.classNames,cancelButtonStyle:T==null?void 0:T.cancelButtonStyle,actionButtonStyle:T==null?void 0:T.actionButtonStyle,closeButtonAriaLabel:T==null?void 0:T.closeButtonAriaLabel,removeToast:R,toasts:P.filter(pe=>pe.position==nt.position),heights:$.filter(pe=>pe.position==nt.position),setHeights:tt,expandByDefault:d,gap:U,expanded:ft,swipeDirections:o.swipeDirections})})):null}))}),r5=({...a})=>{const{theme:o="system"}=k2();return _.jsx(a5,{theme:o,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...a})},o5=["top","right","bottom","left"],$a=Math.min,Ze=Math.max,_s=Math.round,ys=Math.floor,zn=a=>({x:a,y:a}),i5={left:"right",right:"left",bottom:"top",top:"bottom"},l5={start:"end",end:"start"};function jf(a,o,i){return Ze(a,$a(o,i))}function ua(a,o){return typeof a=="function"?a(o):a}function ca(a){return a.split("-")[0]}function Do(a){return a.split("-")[1]}function Ff(a){return a==="x"?"y":"x"}function Jf(a){return a==="y"?"height":"width"}function la(a){return["top","bottom"].includes(ca(a))?"y":"x"}function Wf(a){return Ff(la(a))}function s5(a,o,i){i===void 0&&(i=!1);const l=Do(a),c=Wf(a),f=Jf(c);let d=c==="x"?l===(i?"end":"start")?"right":"left":l==="start"?"bottom":"top";return o.reference[f]>o.floating[f]&&(d=Ds(d)),[d,Ds(d)]}function u5(a){const o=Ds(a);return[Uf(a),o,Uf(o)]}function Uf(a){return a.replace(/start|end/g,o=>l5[o])}function c5(a,o,i){const l=["left","right"],c=["right","left"],f=["top","bottom"],d=["bottom","top"];switch(a){case"top":case"bottom":return i?o?c:l:o?l:c;case"left":case"right":return o?f:d;default:return[]}}function f5(a,o,i,l){const c=Do(a);let f=c5(ca(a),i==="start",l);return c&&(f=f.map(d=>d+"-"+c),o&&(f=f.concat(f.map(Uf)))),f}function Ds(a){return a.replace(/left|right|bottom|top/g,o=>i5[o])}function d5(a){return{top:0,right:0,bottom:0,left:0,...a}}function Ig(a){return typeof a!="number"?d5(a):{top:a,right:a,bottom:a,left:a}}function Ns(a){const{x:o,y:i,width:l,height:c}=a;return{width:l,height:c,top:i,left:o,right:o+l,bottom:i+c,x:o,y:i}}function E0(a,o,i){let{reference:l,floating:c}=a;const f=la(o),d=Wf(o),g=Jf(d),m=ca(o),h=f==="y",v=l.x+l.width/2-c.width/2,b=l.y+l.height/2-c.height/2,E=l[g]/2-c[g]/2;let O;switch(m){case"top":O={x:v,y:l.y-c.height};break;case"bottom":O={x:v,y:l.y+l.height};break;case"right":O={x:l.x+l.width,y:b};break;case"left":O={x:l.x-c.width,y:b};break;default:O={x:l.x,y:l.y}}switch(Do(o)){case"start":O[d]-=E*(i&&h?-1:1);break;case"end":O[d]+=E*(i&&h?-1:1);break}return O}const h5=async(a,o,i)=>{const{placement:l="bottom",strategy:c="absolute",middleware:f=[],platform:d}=i,g=f.filter(Boolean),m=await(d.isRTL==null?void 0:d.isRTL(o));let h=await d.getElementRects({reference:a,floating:o,strategy:c}),{x:v,y:b}=E0(h,l,m),E=l,O={},S=0;for(let w=0;w<g.length;w++){const{name:T,fn:C}=g[w],{x:U,y:D,data:Y,reset:P}=await C({x:v,y:b,initialPlacement:l,placement:E,strategy:c,middlewareData:O,rects:h,platform:d,elements:{reference:a,floating:o}});v=U??v,b=D??b,O={...O,[T]:{...O[T],...Y}},P&&S<=50&&(S++,typeof P=="object"&&(P.placement&&(E=P.placement),P.rects&&(h=P.rects===!0?await d.getElementRects({reference:a,floating:o,strategy:c}):P.rects),{x:v,y:b}=E0(h,E,m)),w=-1)}return{x:v,y:b,placement:E,strategy:c,middlewareData:O}};async function Bi(a,o){var i;o===void 0&&(o={});const{x:l,y:c,platform:f,rects:d,elements:g,strategy:m}=a,{boundary:h="clippingAncestors",rootBoundary:v="viewport",elementContext:b="floating",altBoundary:E=!1,padding:O=0}=ua(o,a),S=Ig(O),T=g[E?b==="floating"?"reference":"floating":b],C=Ns(await f.getClippingRect({element:(i=await(f.isElement==null?void 0:f.isElement(T)))==null||i?T:T.contextElement||await(f.getDocumentElement==null?void 0:f.getDocumentElement(g.floating)),boundary:h,rootBoundary:v,strategy:m})),U=b==="floating"?{x:l,y:c,width:d.floating.width,height:d.floating.height}:d.reference,D=await(f.getOffsetParent==null?void 0:f.getOffsetParent(g.floating)),Y=await(f.isElement==null?void 0:f.isElement(D))?await(f.getScale==null?void 0:f.getScale(D))||{x:1,y:1}:{x:1,y:1},P=Ns(f.convertOffsetParentRelativeRectToViewportRelativeRect?await f.convertOffsetParentRelativeRectToViewportRelativeRect({elements:g,rect:U,offsetParent:D,strategy:m}):U);return{top:(C.top-P.top+S.top)/Y.y,bottom:(P.bottom-C.bottom+S.bottom)/Y.y,left:(C.left-P.left+S.left)/Y.x,right:(P.right-C.right+S.right)/Y.x}}const m5=a=>({name:"arrow",options:a,async fn(o){const{x:i,y:l,placement:c,rects:f,platform:d,elements:g,middlewareData:m}=o,{element:h,padding:v=0}=ua(a,o)||{};if(h==null)return{};const b=Ig(v),E={x:i,y:l},O=Wf(c),S=Jf(O),w=await d.getDimensions(h),T=O==="y",C=T?"top":"left",U=T?"bottom":"right",D=T?"clientHeight":"clientWidth",Y=f.reference[S]+f.reference[O]-E[O]-f.floating[S],P=E[O]-f.reference[O],F=await(d.getOffsetParent==null?void 0:d.getOffsetParent(h));let W=F?F[D]:0;(!W||!await(d.isElement==null?void 0:d.isElement(F)))&&(W=g.floating[D]||f.floating[S]);const $=Y/2-P/2,tt=W/2-w[S]/2-1,ft=$a(b[C],tt),pt=$a(b[U],tt),dt=ft,xt=W-w[S]-pt,at=W/2-w[S]/2+$,ot=jf(dt,at,xt),k=!m.arrow&&Do(c)!=null&&at!==ot&&f.reference[S]/2-(at<dt?ft:pt)-w[S]/2<0,Z=k?at<dt?at-dt:at-xt:0;return{[O]:E[O]+Z,data:{[O]:ot,centerOffset:at-ot-Z,...k&&{alignmentOffset:Z}},reset:k}}}),p5=function(a){return a===void 0&&(a={}),{name:"flip",options:a,async fn(o){var i,l;const{placement:c,middlewareData:f,rects:d,initialPlacement:g,platform:m,elements:h}=o,{mainAxis:v=!0,crossAxis:b=!0,fallbackPlacements:E,fallbackStrategy:O="bestFit",fallbackAxisSideDirection:S="none",flipAlignment:w=!0,...T}=ua(a,o);if((i=f.arrow)!=null&&i.alignmentOffset)return{};const C=ca(c),U=la(g),D=ca(g)===g,Y=await(m.isRTL==null?void 0:m.isRTL(h.floating)),P=E||(D||!w?[Ds(g)]:u5(g)),F=S!=="none";!E&&F&&P.push(...f5(g,w,S,Y));const W=[g,...P],$=await Bi(o,T),tt=[];let ft=((l=f.flip)==null?void 0:l.overflows)||[];if(v&&tt.push($[C]),b){const ot=s5(c,d,Y);tt.push($[ot[0]],$[ot[1]])}if(ft=[...ft,{placement:c,overflows:tt}],!tt.every(ot=>ot<=0)){var pt,dt;const ot=(((pt=f.flip)==null?void 0:pt.index)||0)+1,k=W[ot];if(k){var xt;const q=b==="alignment"?U!==la(k):!1,rt=((xt=ft[0])==null?void 0:xt.overflows[0])>0;if(!q||rt)return{data:{index:ot,overflows:ft},reset:{placement:k}}}let Z=(dt=ft.filter(q=>q.overflows[0]<=0).sort((q,rt)=>q.overflows[1]-rt.overflows[1])[0])==null?void 0:dt.placement;if(!Z)switch(O){case"bestFit":{var at;const q=(at=ft.filter(rt=>{if(F){const R=la(rt.placement);return R===U||R==="y"}return!0}).map(rt=>[rt.placement,rt.overflows.filter(R=>R>0).reduce((R,B)=>R+B,0)]).sort((rt,R)=>rt[1]-R[1])[0])==null?void 0:at[0];q&&(Z=q);break}case"initialPlacement":Z=g;break}if(c!==Z)return{reset:{placement:Z}}}return{}}}};function T0(a,o){return{top:a.top-o.height,right:a.right-o.width,bottom:a.bottom-o.height,left:a.left-o.width}}function O0(a){return o5.some(o=>a[o]>=0)}const g5=function(a){return a===void 0&&(a={}),{name:"hide",options:a,async fn(o){const{rects:i}=o,{strategy:l="referenceHidden",...c}=ua(a,o);switch(l){case"referenceHidden":{const f=await Bi(o,{...c,elementContext:"reference"}),d=T0(f,i.reference);return{data:{referenceHiddenOffsets:d,referenceHidden:O0(d)}}}case"escaped":{const f=await Bi(o,{...c,altBoundary:!0}),d=T0(f,i.floating);return{data:{escapedOffsets:d,escaped:O0(d)}}}default:return{}}}}};async function b5(a,o){const{placement:i,platform:l,elements:c}=a,f=await(l.isRTL==null?void 0:l.isRTL(c.floating)),d=ca(i),g=Do(i),m=la(i)==="y",h=["left","top"].includes(d)?-1:1,v=f&&m?-1:1,b=ua(o,a);let{mainAxis:E,crossAxis:O,alignmentAxis:S}=typeof b=="number"?{mainAxis:b,crossAxis:0,alignmentAxis:null}:{mainAxis:b.mainAxis||0,crossAxis:b.crossAxis||0,alignmentAxis:b.alignmentAxis};return g&&typeof S=="number"&&(O=g==="end"?S*-1:S),m?{x:O*v,y:E*h}:{x:E*h,y:O*v}}const v5=function(a){return a===void 0&&(a=0),{name:"offset",options:a,async fn(o){var i,l;const{x:c,y:f,placement:d,middlewareData:g}=o,m=await b5(o,a);return d===((i=g.offset)==null?void 0:i.placement)&&(l=g.arrow)!=null&&l.alignmentOffset?{}:{x:c+m.x,y:f+m.y,data:{...m,placement:d}}}}},y5=function(a){return a===void 0&&(a={}),{name:"shift",options:a,async fn(o){const{x:i,y:l,placement:c}=o,{mainAxis:f=!0,crossAxis:d=!1,limiter:g={fn:T=>{let{x:C,y:U}=T;return{x:C,y:U}}},...m}=ua(a,o),h={x:i,y:l},v=await Bi(o,m),b=la(ca(c)),E=Ff(b);let O=h[E],S=h[b];if(f){const T=E==="y"?"top":"left",C=E==="y"?"bottom":"right",U=O+v[T],D=O-v[C];O=jf(U,O,D)}if(d){const T=b==="y"?"top":"left",C=b==="y"?"bottom":"right",U=S+v[T],D=S-v[C];S=jf(U,S,D)}const w=g.fn({...o,[E]:O,[b]:S});return{...w,data:{x:w.x-i,y:w.y-l,enabled:{[E]:f,[b]:d}}}}}},x5=function(a){return a===void 0&&(a={}),{options:a,fn(o){const{x:i,y:l,placement:c,rects:f,middlewareData:d}=o,{offset:g=0,mainAxis:m=!0,crossAxis:h=!0}=ua(a,o),v={x:i,y:l},b=la(c),E=Ff(b);let O=v[E],S=v[b];const w=ua(g,o),T=typeof w=="number"?{mainAxis:w,crossAxis:0}:{mainAxis:0,crossAxis:0,...w};if(m){const D=E==="y"?"height":"width",Y=f.reference[E]-f.floating[D]+T.mainAxis,P=f.reference[E]+f.reference[D]-T.mainAxis;O<Y?O=Y:O>P&&(O=P)}if(h){var C,U;const D=E==="y"?"width":"height",Y=["top","left"].includes(ca(c)),P=f.reference[b]-f.floating[D]+(Y&&((C=d.offset)==null?void 0:C[b])||0)+(Y?0:T.crossAxis),F=f.reference[b]+f.reference[D]+(Y?0:((U=d.offset)==null?void 0:U[b])||0)-(Y?T.crossAxis:0);S<P?S=P:S>F&&(S=F)}return{[E]:O,[b]:S}}}},w5=function(a){return a===void 0&&(a={}),{name:"size",options:a,async fn(o){var i,l;const{placement:c,rects:f,platform:d,elements:g}=o,{apply:m=()=>{},...h}=ua(a,o),v=await Bi(o,h),b=ca(c),E=Do(c),O=la(c)==="y",{width:S,height:w}=f.floating;let T,C;b==="top"||b==="bottom"?(T=b,C=E===(await(d.isRTL==null?void 0:d.isRTL(g.floating))?"start":"end")?"left":"right"):(C=b,T=E==="end"?"top":"bottom");const U=w-v.top-v.bottom,D=S-v.left-v.right,Y=$a(w-v[T],U),P=$a(S-v[C],D),F=!o.middlewareData.shift;let W=Y,$=P;if((i=o.middlewareData.shift)!=null&&i.enabled.x&&($=D),(l=o.middlewareData.shift)!=null&&l.enabled.y&&(W=U),F&&!E){const ft=Ze(v.left,0),pt=Ze(v.right,0),dt=Ze(v.top,0),xt=Ze(v.bottom,0);O?$=S-2*(ft!==0||pt!==0?ft+pt:Ze(v.left,v.right)):W=w-2*(dt!==0||xt!==0?dt+xt:Ze(v.top,v.bottom))}await m({...o,availableWidth:$,availableHeight:W});const tt=await d.getDimensions(g.floating);return S!==tt.width||w!==tt.height?{reset:{rects:!0}}:{}}}};function Ys(){return typeof window<"u"}function No(a){return tb(a)?(a.nodeName||"").toLowerCase():"#document"}function Ke(a){var o;return(a==null||(o=a.ownerDocument)==null?void 0:o.defaultView)||window}function Ln(a){var o;return(o=(tb(a)?a.ownerDocument:a.document)||window.document)==null?void 0:o.documentElement}function tb(a){return Ys()?a instanceof Node||a instanceof Ke(a).Node:!1}function xn(a){return Ys()?a instanceof Element||a instanceof Ke(a).Element:!1}function jn(a){return Ys()?a instanceof HTMLElement||a instanceof Ke(a).HTMLElement:!1}function A0(a){return!Ys()||typeof ShadowRoot>"u"?!1:a instanceof ShadowRoot||a instanceof Ke(a).ShadowRoot}function $i(a){const{overflow:o,overflowX:i,overflowY:l,display:c}=wn(a);return/auto|scroll|overlay|hidden|clip/.test(o+l+i)&&!["inline","contents"].includes(c)}function S5(a){return["table","td","th"].includes(No(a))}function Gs(a){return[":popover-open",":modal"].some(o=>{try{return a.matches(o)}catch{return!1}})}function If(a){const o=td(),i=xn(a)?wn(a):a;return["transform","translate","scale","rotate","perspective"].some(l=>i[l]?i[l]!=="none":!1)||(i.containerType?i.containerType!=="normal":!1)||!o&&(i.backdropFilter?i.backdropFilter!=="none":!1)||!o&&(i.filter?i.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(l=>(i.willChange||"").includes(l))||["paint","layout","strict","content"].some(l=>(i.contain||"").includes(l))}function E5(a){let o=Fa(a);for(;jn(o)&&!Co(o);){if(If(o))return o;if(Gs(o))return null;o=Fa(o)}return null}function td(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Co(a){return["html","body","#document"].includes(No(a))}function wn(a){return Ke(a).getComputedStyle(a)}function Vs(a){return xn(a)?{scrollLeft:a.scrollLeft,scrollTop:a.scrollTop}:{scrollLeft:a.scrollX,scrollTop:a.scrollY}}function Fa(a){if(No(a)==="html")return a;const o=a.assignedSlot||a.parentNode||A0(a)&&a.host||Ln(a);return A0(o)?o.host:o}function eb(a){const o=Fa(a);return Co(o)?a.ownerDocument?a.ownerDocument.body:a.body:jn(o)&&$i(o)?o:eb(o)}function Yi(a,o,i){var l;o===void 0&&(o=[]),i===void 0&&(i=!0);const c=eb(a),f=c===((l=a.ownerDocument)==null?void 0:l.body),d=Ke(c);if(f){const g=Lf(d);return o.concat(d,d.visualViewport||[],$i(c)?c:[],g&&i?Yi(g):[])}return o.concat(c,Yi(c,[],i))}function Lf(a){return a.parent&&Object.getPrototypeOf(a.parent)?a.frameElement:null}function nb(a){const o=wn(a);let i=parseFloat(o.width)||0,l=parseFloat(o.height)||0;const c=jn(a),f=c?a.offsetWidth:i,d=c?a.offsetHeight:l,g=_s(i)!==f||_s(l)!==d;return g&&(i=f,l=d),{width:i,height:l,$:g}}function ed(a){return xn(a)?a:a.contextElement}function vo(a){const o=ed(a);if(!jn(o))return zn(1);const i=o.getBoundingClientRect(),{width:l,height:c,$:f}=nb(o);let d=(f?_s(i.width):i.width)/l,g=(f?_s(i.height):i.height)/c;return(!d||!Number.isFinite(d))&&(d=1),(!g||!Number.isFinite(g))&&(g=1),{x:d,y:g}}const T5=zn(0);function ab(a){const o=Ke(a);return!td()||!o.visualViewport?T5:{x:o.visualViewport.offsetLeft,y:o.visualViewport.offsetTop}}function O5(a,o,i){return o===void 0&&(o=!1),!i||o&&i!==Ke(a)?!1:o}function Er(a,o,i,l){o===void 0&&(o=!1),i===void 0&&(i=!1);const c=a.getBoundingClientRect(),f=ed(a);let d=zn(1);o&&(l?xn(l)&&(d=vo(l)):d=vo(a));const g=O5(f,i,l)?ab(f):zn(0);let m=(c.left+g.x)/d.x,h=(c.top+g.y)/d.y,v=c.width/d.x,b=c.height/d.y;if(f){const E=Ke(f),O=l&&xn(l)?Ke(l):l;let S=E,w=Lf(S);for(;w&&l&&O!==S;){const T=vo(w),C=w.getBoundingClientRect(),U=wn(w),D=C.left+(w.clientLeft+parseFloat(U.paddingLeft))*T.x,Y=C.top+(w.clientTop+parseFloat(U.paddingTop))*T.y;m*=T.x,h*=T.y,v*=T.x,b*=T.y,m+=D,h+=Y,S=Ke(w),w=Lf(S)}}return Ns({width:v,height:b,x:m,y:h})}function nd(a,o){const i=Vs(a).scrollLeft;return o?o.left+i:Er(Ln(a)).left+i}function rb(a,o,i){i===void 0&&(i=!1);const l=a.getBoundingClientRect(),c=l.left+o.scrollLeft-(i?0:nd(a,l)),f=l.top+o.scrollTop;return{x:c,y:f}}function A5(a){let{elements:o,rect:i,offsetParent:l,strategy:c}=a;const f=c==="fixed",d=Ln(l),g=o?Gs(o.floating):!1;if(l===d||g&&f)return i;let m={scrollLeft:0,scrollTop:0},h=zn(1);const v=zn(0),b=jn(l);if((b||!b&&!f)&&((No(l)!=="body"||$i(d))&&(m=Vs(l)),jn(l))){const O=Er(l);h=vo(l),v.x=O.x+l.clientLeft,v.y=O.y+l.clientTop}const E=d&&!b&&!f?rb(d,m,!0):zn(0);return{width:i.width*h.x,height:i.height*h.y,x:i.x*h.x-m.scrollLeft*h.x+v.x+E.x,y:i.y*h.y-m.scrollTop*h.y+v.y+E.y}}function R5(a){return Array.from(a.getClientRects())}function C5(a){const o=Ln(a),i=Vs(a),l=a.ownerDocument.body,c=Ze(o.scrollWidth,o.clientWidth,l.scrollWidth,l.clientWidth),f=Ze(o.scrollHeight,o.clientHeight,l.scrollHeight,l.clientHeight);let d=-i.scrollLeft+nd(a);const g=-i.scrollTop;return wn(l).direction==="rtl"&&(d+=Ze(o.clientWidth,l.clientWidth)-c),{width:c,height:f,x:d,y:g}}function M5(a,o){const i=Ke(a),l=Ln(a),c=i.visualViewport;let f=l.clientWidth,d=l.clientHeight,g=0,m=0;if(c){f=c.width,d=c.height;const h=td();(!h||h&&o==="fixed")&&(g=c.offsetLeft,m=c.offsetTop)}return{width:f,height:d,x:g,y:m}}function k5(a,o){const i=Er(a,!0,o==="fixed"),l=i.top+a.clientTop,c=i.left+a.clientLeft,f=jn(a)?vo(a):zn(1),d=a.clientWidth*f.x,g=a.clientHeight*f.y,m=c*f.x,h=l*f.y;return{width:d,height:g,x:m,y:h}}function R0(a,o,i){let l;if(o==="viewport")l=M5(a,i);else if(o==="document")l=C5(Ln(a));else if(xn(o))l=k5(o,i);else{const c=ab(a);l={x:o.x-c.x,y:o.y-c.y,width:o.width,height:o.height}}return Ns(l)}function ob(a,o){const i=Fa(a);return i===o||!xn(i)||Co(i)?!1:wn(i).position==="fixed"||ob(i,o)}function _5(a,o){const i=o.get(a);if(i)return i;let l=Yi(a,[],!1).filter(g=>xn(g)&&No(g)!=="body"),c=null;const f=wn(a).position==="fixed";let d=f?Fa(a):a;for(;xn(d)&&!Co(d);){const g=wn(d),m=If(d);!m&&g.position==="fixed"&&(c=null),(f?!m&&!c:!m&&g.position==="static"&&!!c&&["absolute","fixed"].includes(c.position)||$i(d)&&!m&&ob(a,d))?l=l.filter(v=>v!==d):c=g,d=Fa(d)}return o.set(a,l),l}function D5(a){let{element:o,boundary:i,rootBoundary:l,strategy:c}=a;const d=[...i==="clippingAncestors"?Gs(o)?[]:_5(o,this._c):[].concat(i),l],g=d[0],m=d.reduce((h,v)=>{const b=R0(o,v,c);return h.top=Ze(b.top,h.top),h.right=$a(b.right,h.right),h.bottom=$a(b.bottom,h.bottom),h.left=Ze(b.left,h.left),h},R0(o,g,c));return{width:m.right-m.left,height:m.bottom-m.top,x:m.left,y:m.top}}function N5(a){const{width:o,height:i}=nb(a);return{width:o,height:i}}function z5(a,o,i){const l=jn(o),c=Ln(o),f=i==="fixed",d=Er(a,!0,f,o);let g={scrollLeft:0,scrollTop:0};const m=zn(0);function h(){m.x=nd(c)}if(l||!l&&!f)if((No(o)!=="body"||$i(c))&&(g=Vs(o)),l){const O=Er(o,!0,f,o);m.x=O.x+o.clientLeft,m.y=O.y+o.clientTop}else c&&h();f&&!l&&c&&h();const v=c&&!l&&!f?rb(c,g):zn(0),b=d.left+g.scrollLeft-m.x-v.x,E=d.top+g.scrollTop-m.y-v.y;return{x:b,y:E,width:d.width,height:d.height}}function xf(a){return wn(a).position==="static"}function C0(a,o){if(!jn(a)||wn(a).position==="fixed")return null;if(o)return o(a);let i=a.offsetParent;return Ln(a)===i&&(i=i.ownerDocument.body),i}function ib(a,o){const i=Ke(a);if(Gs(a))return i;if(!jn(a)){let c=Fa(a);for(;c&&!Co(c);){if(xn(c)&&!xf(c))return c;c=Fa(c)}return i}let l=C0(a,o);for(;l&&S5(l)&&xf(l);)l=C0(l,o);return l&&Co(l)&&xf(l)&&!If(l)?i:l||E5(a)||i}const j5=async function(a){const o=this.getOffsetParent||ib,i=this.getDimensions,l=await i(a.floating);return{reference:z5(a.reference,await o(a.floating),a.strategy),floating:{x:0,y:0,width:l.width,height:l.height}}};function U5(a){return wn(a).direction==="rtl"}const L5={convertOffsetParentRelativeRectToViewportRelativeRect:A5,getDocumentElement:Ln,getClippingRect:D5,getOffsetParent:ib,getElementRects:j5,getClientRects:R5,getDimensions:N5,getScale:vo,isElement:xn,isRTL:U5};function lb(a,o){return a.x===o.x&&a.y===o.y&&a.width===o.width&&a.height===o.height}function H5(a,o){let i=null,l;const c=Ln(a);function f(){var g;clearTimeout(l),(g=i)==null||g.disconnect(),i=null}function d(g,m){g===void 0&&(g=!1),m===void 0&&(m=1),f();const h=a.getBoundingClientRect(),{left:v,top:b,width:E,height:O}=h;if(g||o(),!E||!O)return;const S=ys(b),w=ys(c.clientWidth-(v+E)),T=ys(c.clientHeight-(b+O)),C=ys(v),D={rootMargin:-S+"px "+-w+"px "+-T+"px "+-C+"px",threshold:Ze(0,$a(1,m))||1};let Y=!0;function P(F){const W=F[0].intersectionRatio;if(W!==m){if(!Y)return d();W?d(!1,W):l=setTimeout(()=>{d(!1,1e-7)},1e3)}W===1&&!lb(h,a.getBoundingClientRect())&&d(),Y=!1}try{i=new IntersectionObserver(P,{...D,root:c.ownerDocument})}catch{i=new IntersectionObserver(P,D)}i.observe(a)}return d(!0),f}function P5(a,o,i,l){l===void 0&&(l={});const{ancestorScroll:c=!0,ancestorResize:f=!0,elementResize:d=typeof ResizeObserver=="function",layoutShift:g=typeof IntersectionObserver=="function",animationFrame:m=!1}=l,h=ed(a),v=c||f?[...h?Yi(h):[],...Yi(o)]:[];v.forEach(C=>{c&&C.addEventListener("scroll",i,{passive:!0}),f&&C.addEventListener("resize",i)});const b=h&&g?H5(h,i):null;let E=-1,O=null;d&&(O=new ResizeObserver(C=>{let[U]=C;U&&U.target===h&&O&&(O.unobserve(o),cancelAnimationFrame(E),E=requestAnimationFrame(()=>{var D;(D=O)==null||D.observe(o)})),i()}),h&&!m&&O.observe(h),O.observe(o));let S,w=m?Er(a):null;m&&T();function T(){const C=Er(a);w&&!lb(w,C)&&i(),w=C,S=requestAnimationFrame(T)}return i(),()=>{var C;v.forEach(U=>{c&&U.removeEventListener("scroll",i),f&&U.removeEventListener("resize",i)}),b==null||b(),(C=O)==null||C.disconnect(),O=null,m&&cancelAnimationFrame(S)}}const q5=v5,B5=y5,Y5=p5,G5=w5,V5=g5,M0=m5,X5=x5,Q5=(a,o,i)=>{const l=new Map,c={platform:L5,...i},f={...c.platform,_c:l};return h5(a,o,{...c,platform:f})};var As=typeof document<"u"?x.useLayoutEffect:x.useEffect;function zs(a,o){if(a===o)return!0;if(typeof a!=typeof o)return!1;if(typeof a=="function"&&a.toString()===o.toString())return!0;let i,l,c;if(a&&o&&typeof a=="object"){if(Array.isArray(a)){if(i=a.length,i!==o.length)return!1;for(l=i;l--!==0;)if(!zs(a[l],o[l]))return!1;return!0}if(c=Object.keys(a),i=c.length,i!==Object.keys(o).length)return!1;for(l=i;l--!==0;)if(!{}.hasOwnProperty.call(o,c[l]))return!1;for(l=i;l--!==0;){const f=c[l];if(!(f==="_owner"&&a.$$typeof)&&!zs(a[f],o[f]))return!1}return!0}return a!==a&&o!==o}function sb(a){return typeof window>"u"?1:(a.ownerDocument.defaultView||window).devicePixelRatio||1}function k0(a,o){const i=sb(a);return Math.round(o*i)/i}function wf(a){const o=x.useRef(a);return As(()=>{o.current=a}),o}function Z5(a){a===void 0&&(a={});const{placement:o="bottom",strategy:i="absolute",middleware:l=[],platform:c,elements:{reference:f,floating:d}={},transform:g=!0,whileElementsMounted:m,open:h}=a,[v,b]=x.useState({x:0,y:0,strategy:i,placement:o,middlewareData:{},isPositioned:!1}),[E,O]=x.useState(l);zs(E,l)||O(l);const[S,w]=x.useState(null),[T,C]=x.useState(null),U=x.useCallback(q=>{q!==F.current&&(F.current=q,w(q))},[]),D=x.useCallback(q=>{q!==W.current&&(W.current=q,C(q))},[]),Y=f||S,P=d||T,F=x.useRef(null),W=x.useRef(null),$=x.useRef(v),tt=m!=null,ft=wf(m),pt=wf(c),dt=wf(h),xt=x.useCallback(()=>{if(!F.current||!W.current)return;const q={placement:o,strategy:i,middleware:E};pt.current&&(q.platform=pt.current),Q5(F.current,W.current,q).then(rt=>{const R={...rt,isPositioned:dt.current!==!1};at.current&&!zs($.current,R)&&($.current=R,Hs.flushSync(()=>{b(R)}))})},[E,o,i,pt,dt]);As(()=>{h===!1&&$.current.isPositioned&&($.current.isPositioned=!1,b(q=>({...q,isPositioned:!1})))},[h]);const at=x.useRef(!1);As(()=>(at.current=!0,()=>{at.current=!1}),[]),As(()=>{if(Y&&(F.current=Y),P&&(W.current=P),Y&&P){if(ft.current)return ft.current(Y,P,xt);xt()}},[Y,P,xt,ft,tt]);const ot=x.useMemo(()=>({reference:F,floating:W,setReference:U,setFloating:D}),[U,D]),k=x.useMemo(()=>({reference:Y,floating:P}),[Y,P]),Z=x.useMemo(()=>{const q={position:i,left:0,top:0};if(!k.floating)return q;const rt=k0(k.floating,v.x),R=k0(k.floating,v.y);return g?{...q,transform:"translate("+rt+"px, "+R+"px)",...sb(k.floating)>=1.5&&{willChange:"transform"}}:{position:i,left:rt,top:R}},[i,g,k.floating,v.x,v.y]);return x.useMemo(()=>({...v,update:xt,refs:ot,elements:k,floatingStyles:Z}),[v,xt,ot,k,Z])}const K5=a=>{function o(i){return{}.hasOwnProperty.call(i,"current")}return{name:"arrow",options:a,fn(i){const{element:l,padding:c}=typeof a=="function"?a(i):a;return l&&o(l)?l.current!=null?M0({element:l.current,padding:c}).fn(i):{}:l?M0({element:l,padding:c}).fn(i):{}}}},$5=(a,o)=>({...q5(a),options:[a,o]}),F5=(a,o)=>({...B5(a),options:[a,o]}),J5=(a,o)=>({...X5(a),options:[a,o]}),W5=(a,o)=>({...Y5(a),options:[a,o]}),I5=(a,o)=>({...G5(a),options:[a,o]}),tw=(a,o)=>({...V5(a),options:[a,o]}),ew=(a,o)=>({...K5(a),options:[a,o]});var nw="Arrow",ub=x.forwardRef((a,o)=>{const{children:i,width:l=10,height:c=5,...f}=a;return _.jsx(Le.svg,{...f,ref:o,width:l,height:c,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:a.asChild?i:_.jsx("polygon",{points:"0,0 30,0 15,10"})})});ub.displayName=nw;var aw=ub;function rw(a){const[o,i]=x.useState(void 0);return Ka(()=>{if(a){i({width:a.offsetWidth,height:a.offsetHeight});const l=new ResizeObserver(c=>{if(!Array.isArray(c)||!c.length)return;const f=c[0];let d,g;if("borderBoxSize"in f){const m=f.borderBoxSize,h=Array.isArray(m)?m[0]:m;d=h.inlineSize,g=h.blockSize}else d=a.offsetWidth,g=a.offsetHeight;i({width:d,height:g})});return l.observe(a,{box:"border-box"}),()=>l.unobserve(a)}else i(void 0)},[a]),o}var cb="Popper",[fb,db]=Ps(cb),[aT,hb]=fb(cb),mb="PopperAnchor",pb=x.forwardRef((a,o)=>{const{__scopePopper:i,virtualRef:l,...c}=a,f=hb(mb,i),d=x.useRef(null),g=yn(o,d);return x.useEffect(()=>{f.onAnchorChange((l==null?void 0:l.current)||d.current)}),l?null:_.jsx(Le.div,{...c,ref:g})});pb.displayName=mb;var ad="PopperContent",[ow,iw]=fb(ad),gb=x.forwardRef((a,o)=>{var wt,At,Xt,pe,He,_e;const{__scopePopper:i,side:l="bottom",sideOffset:c=0,align:f="center",alignOffset:d=0,arrowPadding:g=0,avoidCollisions:m=!0,collisionBoundary:h=[],collisionPadding:v=0,sticky:b="partial",hideWhenDetached:E=!1,updatePositionStrategy:O="optimized",onPlaced:S,...w}=a,T=hb(ad,i),[C,U]=x.useState(null),D=yn(o,on=>U(on)),[Y,P]=x.useState(null),F=rw(Y),W=(F==null?void 0:F.width)??0,$=(F==null?void 0:F.height)??0,tt=l+(f!=="center"?"-"+f:""),ft=typeof v=="number"?v:{top:0,right:0,bottom:0,left:0,...v},pt=Array.isArray(h)?h:[h],dt=pt.length>0,xt={padding:ft,boundary:pt.filter(sw),altBoundary:dt},{refs:at,floatingStyles:ot,placement:k,isPositioned:Z,middlewareData:q}=Z5({strategy:"fixed",placement:tt,whileElementsMounted:(...on)=>P5(...on,{animationFrame:O==="always"}),elements:{reference:T.anchor},middleware:[$5({mainAxis:c+$,alignmentAxis:d}),m&&F5({mainAxis:!0,crossAxis:!1,limiter:b==="partial"?J5():void 0,...xt}),m&&W5({...xt}),I5({...xt,apply:({elements:on,rects:Sn,availableWidth:Uo,availableHeight:Tr})=>{const{width:ue,height:Or}=Sn.reference,ge=on.floating.style;ge.setProperty("--radix-popper-available-width",`${Uo}px`),ge.setProperty("--radix-popper-available-height",`${Tr}px`),ge.setProperty("--radix-popper-anchor-width",`${ue}px`),ge.setProperty("--radix-popper-anchor-height",`${Or}px`)}}),Y&&ew({element:Y,padding:g}),uw({arrowWidth:W,arrowHeight:$}),E&&tw({strategy:"referenceHidden",...xt})]}),[rt,R]=yb(k),B=Za(S);Ka(()=>{Z&&(B==null||B())},[Z,B]);const I=(wt=q.arrow)==null?void 0:wt.x,V=(At=q.arrow)==null?void 0:At.y,et=((Xt=q.arrow)==null?void 0:Xt.centerOffset)!==0,[bt,nt]=x.useState();return Ka(()=>{C&&nt(window.getComputedStyle(C).zIndex)},[C]),_.jsx("div",{ref:at.setFloating,"data-radix-popper-content-wrapper":"",style:{...ot,transform:Z?ot.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:bt,"--radix-popper-transform-origin":[(pe=q.transformOrigin)==null?void 0:pe.x,(He=q.transformOrigin)==null?void 0:He.y].join(" "),...((_e=q.hide)==null?void 0:_e.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:a.dir,children:_.jsx(ow,{scope:i,placedSide:rt,onArrowChange:P,arrowX:I,arrowY:V,shouldHideArrow:et,children:_.jsx(Le.div,{"data-side":rt,"data-align":R,...w,ref:D,style:{...w.style,animation:Z?void 0:"none"}})})})});gb.displayName=ad;var bb="PopperArrow",lw={top:"bottom",right:"left",bottom:"top",left:"right"},vb=x.forwardRef(function(o,i){const{__scopePopper:l,...c}=o,f=iw(bb,l),d=lw[f.placedSide];return _.jsx("span",{ref:f.onArrowChange,style:{position:"absolute",left:f.arrowX,top:f.arrowY,[d]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[f.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[f.placedSide],visibility:f.shouldHideArrow?"hidden":void 0},children:_.jsx(aw,{...c,ref:i,style:{...c.style,display:"block"}})})});vb.displayName=bb;function sw(a){return a!==null}var uw=a=>({name:"transformOrigin",options:a,fn(o){var T,C,U;const{placement:i,rects:l,middlewareData:c}=o,d=((T=c.arrow)==null?void 0:T.centerOffset)!==0,g=d?0:a.arrowWidth,m=d?0:a.arrowHeight,[h,v]=yb(i),b={start:"0%",center:"50%",end:"100%"}[v],E=(((C=c.arrow)==null?void 0:C.x)??0)+g/2,O=(((U=c.arrow)==null?void 0:U.y)??0)+m/2;let S="",w="";return h==="bottom"?(S=d?b:`${E}px`,w=`${-m}px`):h==="top"?(S=d?b:`${E}px`,w=`${l.floating.height+m}px`):h==="right"?(S=`${-m}px`,w=d?b:`${O}px`):h==="left"&&(S=`${l.floating.width+m}px`,w=d?b:`${O}px`),{data:{x:S,y:w}}}});function yb(a){const[o,i="center"]=a.split("-");return[o,i]}var cw=pb,fw=gb,dw=vb,[Xs,rT]=Ps("Tooltip",[db]),rd=db(),xb="TooltipProvider",hw=700,_0="tooltip.open",[mw,wb]=Xs(xb),Sb=a=>{const{__scopeTooltip:o,delayDuration:i=hw,skipDelayDuration:l=300,disableHoverableContent:c=!1,children:f}=a,d=x.useRef(!0),g=x.useRef(!1),m=x.useRef(0);return x.useEffect(()=>{const h=m.current;return()=>window.clearTimeout(h)},[]),_.jsx(mw,{scope:o,isOpenDelayedRef:d,delayDuration:i,onOpen:x.useCallback(()=>{window.clearTimeout(m.current),d.current=!1},[]),onClose:x.useCallback(()=>{window.clearTimeout(m.current),m.current=window.setTimeout(()=>d.current=!0,l)},[l]),isPointerInTransitRef:g,onPointerInTransitChange:x.useCallback(h=>{g.current=h},[]),disableHoverableContent:c,children:f})};Sb.displayName=xb;var Eb="Tooltip",[oT,Qs]=Xs(Eb),Hf="TooltipTrigger",pw=x.forwardRef((a,o)=>{const{__scopeTooltip:i,...l}=a,c=Qs(Hf,i),f=wb(Hf,i),d=rd(i),g=x.useRef(null),m=yn(o,g,c.onTriggerChange),h=x.useRef(!1),v=x.useRef(!1),b=x.useCallback(()=>h.current=!1,[]);return x.useEffect(()=>()=>document.removeEventListener("pointerup",b),[b]),_.jsx(cw,{asChild:!0,...d,children:_.jsx(Le.button,{"aria-describedby":c.open?c.contentId:void 0,"data-state":c.stateAttribute,...l,ref:m,onPointerMove:le(a.onPointerMove,E=>{E.pointerType!=="touch"&&!v.current&&!f.isPointerInTransitRef.current&&(c.onTriggerEnter(),v.current=!0)}),onPointerLeave:le(a.onPointerLeave,()=>{c.onTriggerLeave(),v.current=!1}),onPointerDown:le(a.onPointerDown,()=>{c.open&&c.onClose(),h.current=!0,document.addEventListener("pointerup",b,{once:!0})}),onFocus:le(a.onFocus,()=>{h.current||c.onOpen()}),onBlur:le(a.onBlur,c.onClose),onClick:le(a.onClick,c.onClose)})})});pw.displayName=Hf;var gw="TooltipPortal",[iT,bw]=Xs(gw,{forceMount:void 0}),Mo="TooltipContent",Tb=x.forwardRef((a,o)=>{const i=bw(Mo,a.__scopeTooltip),{forceMount:l=i.forceMount,side:c="top",...f}=a,d=Qs(Mo,a.__scopeTooltip);return _.jsx(Xf,{present:l||d.open,children:d.disableHoverableContent?_.jsx(Ob,{side:c,...f,ref:o}):_.jsx(vw,{side:c,...f,ref:o})})}),vw=x.forwardRef((a,o)=>{const i=Qs(Mo,a.__scopeTooltip),l=wb(Mo,a.__scopeTooltip),c=x.useRef(null),f=yn(o,c),[d,g]=x.useState(null),{trigger:m,onClose:h}=i,v=c.current,{onPointerInTransitChange:b}=l,E=x.useCallback(()=>{g(null),b(!1)},[b]),O=x.useCallback((S,w)=>{const T=S.currentTarget,C={x:S.clientX,y:S.clientY},U=Ew(C,T.getBoundingClientRect()),D=Tw(C,U),Y=Ow(w.getBoundingClientRect()),P=Rw([...D,...Y]);g(P),b(!0)},[b]);return x.useEffect(()=>()=>E(),[E]),x.useEffect(()=>{if(m&&v){const S=T=>O(T,v),w=T=>O(T,m);return m.addEventListener("pointerleave",S),v.addEventListener("pointerleave",w),()=>{m.removeEventListener("pointerleave",S),v.removeEventListener("pointerleave",w)}}},[m,v,O,E]),x.useEffect(()=>{if(d){const S=w=>{const T=w.target,C={x:w.clientX,y:w.clientY},U=(m==null?void 0:m.contains(T))||(v==null?void 0:v.contains(T)),D=!Aw(C,d);U?E():D&&(E(),h())};return document.addEventListener("pointermove",S),()=>document.removeEventListener("pointermove",S)}},[m,v,d,h,E]),_.jsx(Ob,{...a,ref:f})}),[yw,xw]=Xs(Eb,{isInside:!1}),ww=M1("TooltipContent"),Ob=x.forwardRef((a,o)=>{const{__scopeTooltip:i,children:l,"aria-label":c,onEscapeKeyDown:f,onPointerDownOutside:d,...g}=a,m=Qs(Mo,i),h=rd(i),{onClose:v}=m;return x.useEffect(()=>(document.addEventListener(_0,v),()=>document.removeEventListener(_0,v)),[v]),x.useEffect(()=>{if(m.trigger){const b=E=>{const O=E.target;O!=null&&O.contains(m.trigger)&&v()};return window.addEventListener("scroll",b,{capture:!0}),()=>window.removeEventListener("scroll",b,{capture:!0})}},[m.trigger,v]),_.jsx(Vf,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:f,onPointerDownOutside:d,onFocusOutside:b=>b.preventDefault(),onDismiss:v,children:_.jsxs(fw,{"data-state":m.stateAttribute,...h,...g,ref:o,style:{...g.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[_.jsx(ww,{children:l}),_.jsx(yw,{scope:i,isInside:!0,children:_.jsx(tx,{id:m.contentId,role:"tooltip",children:c||l})})]})})});Tb.displayName=Mo;var Ab="TooltipArrow",Sw=x.forwardRef((a,o)=>{const{__scopeTooltip:i,...l}=a,c=rd(i);return xw(Ab,i).isInside?null:_.jsx(dw,{...c,...l,ref:o})});Sw.displayName=Ab;function Ew(a,o){const i=Math.abs(o.top-a.y),l=Math.abs(o.bottom-a.y),c=Math.abs(o.right-a.x),f=Math.abs(o.left-a.x);switch(Math.min(i,l,c,f)){case f:return"left";case c:return"right";case i:return"top";case l:return"bottom";default:throw new Error("unreachable")}}function Tw(a,o,i=5){const l=[];switch(o){case"top":l.push({x:a.x-i,y:a.y+i},{x:a.x+i,y:a.y+i});break;case"bottom":l.push({x:a.x-i,y:a.y-i},{x:a.x+i,y:a.y-i});break;case"left":l.push({x:a.x+i,y:a.y-i},{x:a.x+i,y:a.y+i});break;case"right":l.push({x:a.x-i,y:a.y-i},{x:a.x-i,y:a.y+i});break}return l}function Ow(a){const{top:o,right:i,bottom:l,left:c}=a;return[{x:c,y:o},{x:i,y:o},{x:i,y:l},{x:c,y:l}]}function Aw(a,o){const{x:i,y:l}=a;let c=!1;for(let f=0,d=o.length-1;f<o.length;d=f++){const g=o[f],m=o[d],h=g.x,v=g.y,b=m.x,E=m.y;v>l!=E>l&&i<(b-h)*(l-v)/(E-v)+h&&(c=!c)}return c}function Rw(a){const o=a.slice();return o.sort((i,l)=>i.x<l.x?-1:i.x>l.x?1:i.y<l.y?-1:i.y>l.y?1:0),Cw(o)}function Cw(a){if(a.length<=1)return a.slice();const o=[];for(let l=0;l<a.length;l++){const c=a[l];for(;o.length>=2;){const f=o[o.length-1],d=o[o.length-2];if((f.x-d.x)*(c.y-d.y)>=(f.y-d.y)*(c.x-d.x))o.pop();else break}o.push(c)}o.pop();const i=[];for(let l=a.length-1;l>=0;l--){const c=a[l];for(;i.length>=2;){const f=i[i.length-1],d=i[i.length-2];if((f.x-d.x)*(c.y-d.y)>=(f.y-d.y)*(c.x-d.x))i.pop();else break}i.push(c)}return i.pop(),o.length===1&&i.length===1&&o[0].x===i[0].x&&o[0].y===i[0].y?o:o.concat(i)}var Mw=Sb,Rb=Tb;const kw=Mw,_w=x.forwardRef(({className:a,sideOffset:o=4,...i},l)=>_.jsx(Rb,{ref:l,sideOffset:o,className:vn("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a),...i}));_w.displayName=Rb.displayName;var Zs=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(a){return this.listeners.add(a),this.onSubscribe(),()=>{this.listeners.delete(a),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},Ks=typeof window>"u"||"Deno"in globalThis;function hn(){}function Dw(a,o){return typeof a=="function"?a(o):a}function Nw(a){return typeof a=="number"&&a>=0&&a!==1/0}function zw(a,o){return Math.max(a+(o||0)-Date.now(),0)}function D0(a,o){return typeof a=="function"?a(o):a}function jw(a,o){return typeof a=="function"?a(o):a}function N0(a,o){const{type:i="all",exact:l,fetchStatus:c,predicate:f,queryKey:d,stale:g}=a;if(d){if(l){if(o.queryHash!==od(d,o.options))return!1}else if(!Vi(o.queryKey,d))return!1}if(i!=="all"){const m=o.isActive();if(i==="active"&&!m||i==="inactive"&&m)return!1}return!(typeof g=="boolean"&&o.isStale()!==g||c&&c!==o.state.fetchStatus||f&&!f(o))}function z0(a,o){const{exact:i,status:l,predicate:c,mutationKey:f}=a;if(f){if(!o.options.mutationKey)return!1;if(i){if(Gi(o.options.mutationKey)!==Gi(f))return!1}else if(!Vi(o.options.mutationKey,f))return!1}return!(l&&o.state.status!==l||c&&!c(o))}function od(a,o){return((o==null?void 0:o.queryKeyHashFn)||Gi)(a)}function Gi(a){return JSON.stringify(a,(o,i)=>Pf(i)?Object.keys(i).sort().reduce((l,c)=>(l[c]=i[c],l),{}):i)}function Vi(a,o){return a===o?!0:typeof a!=typeof o?!1:a&&o&&typeof a=="object"&&typeof o=="object"?Object.keys(o).every(i=>Vi(a[i],o[i])):!1}function Cb(a,o){if(a===o)return a;const i=j0(a)&&j0(o);if(i||Pf(a)&&Pf(o)){const l=i?a:Object.keys(a),c=l.length,f=i?o:Object.keys(o),d=f.length,g=i?[]:{};let m=0;for(let h=0;h<d;h++){const v=i?h:f[h];(!i&&l.includes(v)||i)&&a[v]===void 0&&o[v]===void 0?(g[v]=void 0,m++):(g[v]=Cb(a[v],o[v]),g[v]===a[v]&&a[v]!==void 0&&m++)}return c===d&&m===c?a:g}return o}function j0(a){return Array.isArray(a)&&a.length===Object.keys(a).length}function Pf(a){if(!U0(a))return!1;const o=a.constructor;if(o===void 0)return!0;const i=o.prototype;return!(!U0(i)||!i.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(a)!==Object.prototype)}function U0(a){return Object.prototype.toString.call(a)==="[object Object]"}function Uw(a){return new Promise(o=>{setTimeout(o,a)})}function Lw(a,o,i){return typeof i.structuralSharing=="function"?i.structuralSharing(a,o):i.structuralSharing!==!1?Cb(a,o):o}function Hw(a,o,i=0){const l=[...a,o];return i&&l.length>i?l.slice(1):l}function Pw(a,o,i=0){const l=[o,...a];return i&&l.length>i?l.slice(0,-1):l}var id=Symbol();function Mb(a,o){return!a.queryFn&&(o!=null&&o.initialPromise)?()=>o.initialPromise:!a.queryFn||a.queryFn===id?()=>Promise.reject(new Error(`Missing queryFn: '${a.queryHash}'`)):a.queryFn}var vr,Ya,yo,W0,qw=(W0=class extends Zs{constructor(){super();_t(this,vr);_t(this,Ya);_t(this,yo);yt(this,yo,o=>{if(!Ks&&window.addEventListener){const i=()=>o();return window.addEventListener("visibilitychange",i,!1),()=>{window.removeEventListener("visibilitychange",i)}}})}onSubscribe(){Q(this,Ya)||this.setEventListener(Q(this,yo))}onUnsubscribe(){var o;this.hasListeners()||((o=Q(this,Ya))==null||o.call(this),yt(this,Ya,void 0))}setEventListener(o){var i;yt(this,yo,o),(i=Q(this,Ya))==null||i.call(this),yt(this,Ya,o(l=>{typeof l=="boolean"?this.setFocused(l):this.onFocus()}))}setFocused(o){Q(this,vr)!==o&&(yt(this,vr,o),this.onFocus())}onFocus(){const o=this.isFocused();this.listeners.forEach(i=>{i(o)})}isFocused(){var o;return typeof Q(this,vr)=="boolean"?Q(this,vr):((o=globalThis.document)==null?void 0:o.visibilityState)!=="hidden"}},vr=new WeakMap,Ya=new WeakMap,yo=new WeakMap,W0),kb=new qw,xo,Ga,wo,I0,Bw=(I0=class extends Zs{constructor(){super();_t(this,xo,!0);_t(this,Ga);_t(this,wo);yt(this,wo,o=>{if(!Ks&&window.addEventListener){const i=()=>o(!0),l=()=>o(!1);return window.addEventListener("online",i,!1),window.addEventListener("offline",l,!1),()=>{window.removeEventListener("online",i),window.removeEventListener("offline",l)}}})}onSubscribe(){Q(this,Ga)||this.setEventListener(Q(this,wo))}onUnsubscribe(){var o;this.hasListeners()||((o=Q(this,Ga))==null||o.call(this),yt(this,Ga,void 0))}setEventListener(o){var i;yt(this,wo,o),(i=Q(this,Ga))==null||i.call(this),yt(this,Ga,o(this.setOnline.bind(this)))}setOnline(o){Q(this,xo)!==o&&(yt(this,xo,o),this.listeners.forEach(l=>{l(o)}))}isOnline(){return Q(this,xo)}},xo=new WeakMap,Ga=new WeakMap,wo=new WeakMap,I0),js=new Bw;function Yw(){let a,o;const i=new Promise((c,f)=>{a=c,o=f});i.status="pending",i.catch(()=>{});function l(c){Object.assign(i,c),delete i.resolve,delete i.reject}return i.resolve=c=>{l({status:"fulfilled",value:c}),a(c)},i.reject=c=>{l({status:"rejected",reason:c}),o(c)},i}function Gw(a){return Math.min(1e3*2**a,3e4)}function _b(a){return(a??"online")==="online"?js.isOnline():!0}var Db=class extends Error{constructor(a){super("CancelledError"),this.revert=a==null?void 0:a.revert,this.silent=a==null?void 0:a.silent}};function Sf(a){return a instanceof Db}function Nb(a){let o=!1,i=0,l=!1,c;const f=Yw(),d=w=>{var T;l||(E(new Db(w)),(T=a.abort)==null||T.call(a))},g=()=>{o=!0},m=()=>{o=!1},h=()=>kb.isFocused()&&(a.networkMode==="always"||js.isOnline())&&a.canRun(),v=()=>_b(a.networkMode)&&a.canRun(),b=w=>{var T;l||(l=!0,(T=a.onSuccess)==null||T.call(a,w),c==null||c(),f.resolve(w))},E=w=>{var T;l||(l=!0,(T=a.onError)==null||T.call(a,w),c==null||c(),f.reject(w))},O=()=>new Promise(w=>{var T;c=C=>{(l||h())&&w(C)},(T=a.onPause)==null||T.call(a)}).then(()=>{var w;c=void 0,l||(w=a.onContinue)==null||w.call(a)}),S=()=>{if(l)return;let w;const T=i===0?a.initialPromise:void 0;try{w=T??a.fn()}catch(C){w=Promise.reject(C)}Promise.resolve(w).then(b).catch(C=>{var F;if(l)return;const U=a.retry??(Ks?0:3),D=a.retryDelay??Gw,Y=typeof D=="function"?D(i,C):D,P=U===!0||typeof U=="number"&&i<U||typeof U=="function"&&U(i,C);if(o||!P){E(C);return}i++,(F=a.onFail)==null||F.call(a,i,C),Uw(Y).then(()=>h()?void 0:O()).then(()=>{o?E(C):S()})})};return{promise:f,cancel:d,continue:()=>(c==null||c(),f),cancelRetry:g,continueRetry:m,canStart:v,start:()=>(v()?S():O().then(S),f)}}var Vw=a=>setTimeout(a,0);function Xw(){let a=[],o=0,i=g=>{g()},l=g=>{g()},c=Vw;const f=g=>{o?a.push(g):c(()=>{i(g)})},d=()=>{const g=a;a=[],g.length&&c(()=>{l(()=>{g.forEach(m=>{i(m)})})})};return{batch:g=>{let m;o++;try{m=g()}finally{o--,o||d()}return m},batchCalls:g=>(...m)=>{f(()=>{g(...m)})},schedule:f,setNotifyFunction:g=>{i=g},setBatchNotifyFunction:g=>{l=g},setScheduler:g=>{c=g}}}var ke=Xw(),yr,tg,zb=(tg=class{constructor(){_t(this,yr)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),Nw(this.gcTime)&&yt(this,yr,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(a){this.gcTime=Math.max(this.gcTime||0,a??(Ks?1/0:5*60*1e3))}clearGcTimeout(){Q(this,yr)&&(clearTimeout(Q(this,yr)),yt(this,yr,void 0))}},yr=new WeakMap,tg),So,Eo,rn,xr,Oe,Qi,wr,mn,oa,eg,Qw=(eg=class extends zb{constructor(o){super();_t(this,mn);_t(this,So);_t(this,Eo);_t(this,rn);_t(this,xr);_t(this,Oe);_t(this,Qi);_t(this,wr);yt(this,wr,!1),yt(this,Qi,o.defaultOptions),this.setOptions(o.options),this.observers=[],yt(this,xr,o.client),yt(this,rn,Q(this,xr).getQueryCache()),this.queryKey=o.queryKey,this.queryHash=o.queryHash,yt(this,So,Kw(this.options)),this.state=o.state??Q(this,So),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var o;return(o=Q(this,Oe))==null?void 0:o.promise}setOptions(o){this.options={...Q(this,Qi),...o},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&Q(this,rn).remove(this)}setData(o,i){const l=Lw(this.state.data,o,this.options);return Ee(this,mn,oa).call(this,{data:l,type:"success",dataUpdatedAt:i==null?void 0:i.updatedAt,manual:i==null?void 0:i.manual}),l}setState(o,i){Ee(this,mn,oa).call(this,{type:"setState",state:o,setStateOptions:i})}cancel(o){var l,c;const i=(l=Q(this,Oe))==null?void 0:l.promise;return(c=Q(this,Oe))==null||c.cancel(o),i?i.then(hn).catch(hn):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(Q(this,So))}isActive(){return this.observers.some(o=>jw(o.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===id||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStale(){return this.state.isInvalidated?!0:this.getObserversCount()>0?this.observers.some(o=>o.getCurrentResult().isStale):this.state.data===void 0}isStaleByTime(o=0){return this.state.isInvalidated||this.state.data===void 0||!zw(this.state.dataUpdatedAt,o)}onFocus(){var i;const o=this.observers.find(l=>l.shouldFetchOnWindowFocus());o==null||o.refetch({cancelRefetch:!1}),(i=Q(this,Oe))==null||i.continue()}onOnline(){var i;const o=this.observers.find(l=>l.shouldFetchOnReconnect());o==null||o.refetch({cancelRefetch:!1}),(i=Q(this,Oe))==null||i.continue()}addObserver(o){this.observers.includes(o)||(this.observers.push(o),this.clearGcTimeout(),Q(this,rn).notify({type:"observerAdded",query:this,observer:o}))}removeObserver(o){this.observers.includes(o)&&(this.observers=this.observers.filter(i=>i!==o),this.observers.length||(Q(this,Oe)&&(Q(this,wr)?Q(this,Oe).cancel({revert:!0}):Q(this,Oe).cancelRetry()),this.scheduleGc()),Q(this,rn).notify({type:"observerRemoved",query:this,observer:o}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||Ee(this,mn,oa).call(this,{type:"invalidate"})}fetch(o,i){var m,h,v;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(i!=null&&i.cancelRefetch))this.cancel({silent:!0});else if(Q(this,Oe))return Q(this,Oe).continueRetry(),Q(this,Oe).promise}if(o&&this.setOptions(o),!this.options.queryFn){const b=this.observers.find(E=>E.options.queryFn);b&&this.setOptions(b.options)}const l=new AbortController,c=b=>{Object.defineProperty(b,"signal",{enumerable:!0,get:()=>(yt(this,wr,!0),l.signal)})},f=()=>{const b=Mb(this.options,i),E={client:Q(this,xr),queryKey:this.queryKey,meta:this.meta};return c(E),yt(this,wr,!1),this.options.persister?this.options.persister(b,E,this):b(E)},d={fetchOptions:i,options:this.options,queryKey:this.queryKey,client:Q(this,xr),state:this.state,fetchFn:f};c(d),(m=this.options.behavior)==null||m.onFetch(d,this),yt(this,Eo,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((h=d.fetchOptions)==null?void 0:h.meta))&&Ee(this,mn,oa).call(this,{type:"fetch",meta:(v=d.fetchOptions)==null?void 0:v.meta});const g=b=>{var E,O,S,w;Sf(b)&&b.silent||Ee(this,mn,oa).call(this,{type:"error",error:b}),Sf(b)||((O=(E=Q(this,rn).config).onError)==null||O.call(E,b,this),(w=(S=Q(this,rn).config).onSettled)==null||w.call(S,this.state.data,b,this)),this.scheduleGc()};return yt(this,Oe,Nb({initialPromise:i==null?void 0:i.initialPromise,fn:d.fetchFn,abort:l.abort.bind(l),onSuccess:b=>{var E,O,S,w;if(b===void 0){g(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(b)}catch(T){g(T);return}(O=(E=Q(this,rn).config).onSuccess)==null||O.call(E,b,this),(w=(S=Q(this,rn).config).onSettled)==null||w.call(S,b,this.state.error,this),this.scheduleGc()},onError:g,onFail:(b,E)=>{Ee(this,mn,oa).call(this,{type:"failed",failureCount:b,error:E})},onPause:()=>{Ee(this,mn,oa).call(this,{type:"pause"})},onContinue:()=>{Ee(this,mn,oa).call(this,{type:"continue"})},retry:d.options.retry,retryDelay:d.options.retryDelay,networkMode:d.options.networkMode,canRun:()=>!0})),Q(this,Oe).start()}},So=new WeakMap,Eo=new WeakMap,rn=new WeakMap,xr=new WeakMap,Oe=new WeakMap,Qi=new WeakMap,wr=new WeakMap,mn=new WeakSet,oa=function(o){const i=l=>{switch(o.type){case"failed":return{...l,fetchFailureCount:o.failureCount,fetchFailureReason:o.error};case"pause":return{...l,fetchStatus:"paused"};case"continue":return{...l,fetchStatus:"fetching"};case"fetch":return{...l,...Zw(l.data,this.options),fetchMeta:o.meta??null};case"success":return{...l,data:o.data,dataUpdateCount:l.dataUpdateCount+1,dataUpdatedAt:o.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!o.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const c=o.error;return Sf(c)&&c.revert&&Q(this,Eo)?{...Q(this,Eo),fetchStatus:"idle"}:{...l,error:c,errorUpdateCount:l.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:l.fetchFailureCount+1,fetchFailureReason:c,fetchStatus:"idle",status:"error"};case"invalidate":return{...l,isInvalidated:!0};case"setState":return{...l,...o.state}}};this.state=i(this.state),ke.batch(()=>{this.observers.forEach(l=>{l.onQueryUpdate()}),Q(this,rn).notify({query:this,type:"updated",action:o})})},eg);function Zw(a,o){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:_b(o.networkMode)?"fetching":"paused",...a===void 0&&{error:null,status:"pending"}}}function Kw(a){const o=typeof a.initialData=="function"?a.initialData():a.initialData,i=o!==void 0,l=i?typeof a.initialDataUpdatedAt=="function"?a.initialDataUpdatedAt():a.initialDataUpdatedAt:0;return{data:o,dataUpdateCount:0,dataUpdatedAt:i?l??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:i?"success":"pending",fetchStatus:"idle"}}var _n,ng,$w=(ng=class extends Zs{constructor(o={}){super();_t(this,_n);this.config=o,yt(this,_n,new Map)}build(o,i,l){const c=i.queryKey,f=i.queryHash??od(c,i);let d=this.get(f);return d||(d=new Qw({client:o,queryKey:c,queryHash:f,options:o.defaultQueryOptions(i),state:l,defaultOptions:o.getQueryDefaults(c)}),this.add(d)),d}add(o){Q(this,_n).has(o.queryHash)||(Q(this,_n).set(o.queryHash,o),this.notify({type:"added",query:o}))}remove(o){const i=Q(this,_n).get(o.queryHash);i&&(o.destroy(),i===o&&Q(this,_n).delete(o.queryHash),this.notify({type:"removed",query:o}))}clear(){ke.batch(()=>{this.getAll().forEach(o=>{this.remove(o)})})}get(o){return Q(this,_n).get(o)}getAll(){return[...Q(this,_n).values()]}find(o){const i={exact:!0,...o};return this.getAll().find(l=>N0(i,l))}findAll(o={}){const i=this.getAll();return Object.keys(o).length>0?i.filter(l=>N0(o,l)):i}notify(o){ke.batch(()=>{this.listeners.forEach(i=>{i(o)})})}onFocus(){ke.batch(()=>{this.getAll().forEach(o=>{o.onFocus()})})}onOnline(){ke.batch(()=>{this.getAll().forEach(o=>{o.onOnline()})})}},_n=new WeakMap,ng),Dn,Me,Sr,Nn,Ba,ag,Fw=(ag=class extends zb{constructor(o){super();_t(this,Nn);_t(this,Dn);_t(this,Me);_t(this,Sr);this.mutationId=o.mutationId,yt(this,Me,o.mutationCache),yt(this,Dn,[]),this.state=o.state||Jw(),this.setOptions(o.options),this.scheduleGc()}setOptions(o){this.options=o,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(o){Q(this,Dn).includes(o)||(Q(this,Dn).push(o),this.clearGcTimeout(),Q(this,Me).notify({type:"observerAdded",mutation:this,observer:o}))}removeObserver(o){yt(this,Dn,Q(this,Dn).filter(i=>i!==o)),this.scheduleGc(),Q(this,Me).notify({type:"observerRemoved",mutation:this,observer:o})}optionalRemove(){Q(this,Dn).length||(this.state.status==="pending"?this.scheduleGc():Q(this,Me).remove(this))}continue(){var o;return((o=Q(this,Sr))==null?void 0:o.continue())??this.execute(this.state.variables)}async execute(o){var f,d,g,m,h,v,b,E,O,S,w,T,C,U,D,Y,P,F,W,$;const i=()=>{Ee(this,Nn,Ba).call(this,{type:"continue"})};yt(this,Sr,Nb({fn:()=>this.options.mutationFn?this.options.mutationFn(o):Promise.reject(new Error("No mutationFn found")),onFail:(tt,ft)=>{Ee(this,Nn,Ba).call(this,{type:"failed",failureCount:tt,error:ft})},onPause:()=>{Ee(this,Nn,Ba).call(this,{type:"pause"})},onContinue:i,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>Q(this,Me).canRun(this)}));const l=this.state.status==="pending",c=!Q(this,Sr).canStart();try{if(l)i();else{Ee(this,Nn,Ba).call(this,{type:"pending",variables:o,isPaused:c}),await((d=(f=Q(this,Me).config).onMutate)==null?void 0:d.call(f,o,this));const ft=await((m=(g=this.options).onMutate)==null?void 0:m.call(g,o));ft!==this.state.context&&Ee(this,Nn,Ba).call(this,{type:"pending",context:ft,variables:o,isPaused:c})}const tt=await Q(this,Sr).start();return await((v=(h=Q(this,Me).config).onSuccess)==null?void 0:v.call(h,tt,o,this.state.context,this)),await((E=(b=this.options).onSuccess)==null?void 0:E.call(b,tt,o,this.state.context)),await((S=(O=Q(this,Me).config).onSettled)==null?void 0:S.call(O,tt,null,this.state.variables,this.state.context,this)),await((T=(w=this.options).onSettled)==null?void 0:T.call(w,tt,null,o,this.state.context)),Ee(this,Nn,Ba).call(this,{type:"success",data:tt}),tt}catch(tt){try{throw await((U=(C=Q(this,Me).config).onError)==null?void 0:U.call(C,tt,o,this.state.context,this)),await((Y=(D=this.options).onError)==null?void 0:Y.call(D,tt,o,this.state.context)),await((F=(P=Q(this,Me).config).onSettled)==null?void 0:F.call(P,void 0,tt,this.state.variables,this.state.context,this)),await(($=(W=this.options).onSettled)==null?void 0:$.call(W,void 0,tt,o,this.state.context)),tt}finally{Ee(this,Nn,Ba).call(this,{type:"error",error:tt})}}finally{Q(this,Me).runNext(this)}}},Dn=new WeakMap,Me=new WeakMap,Sr=new WeakMap,Nn=new WeakSet,Ba=function(o){const i=l=>{switch(o.type){case"failed":return{...l,failureCount:o.failureCount,failureReason:o.error};case"pause":return{...l,isPaused:!0};case"continue":return{...l,isPaused:!1};case"pending":return{...l,context:o.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:o.isPaused,status:"pending",variables:o.variables,submittedAt:Date.now()};case"success":return{...l,data:o.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...l,data:void 0,error:o.error,failureCount:l.failureCount+1,failureReason:o.error,isPaused:!1,status:"error"}}};this.state=i(this.state),ke.batch(()=>{Q(this,Dn).forEach(l=>{l.onMutationUpdate(o)}),Q(this,Me).notify({mutation:this,type:"updated",action:o})})},ag);function Jw(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var ia,pn,Zi,rg,Ww=(rg=class extends Zs{constructor(o={}){super();_t(this,ia);_t(this,pn);_t(this,Zi);this.config=o,yt(this,ia,new Set),yt(this,pn,new Map),yt(this,Zi,0)}build(o,i,l){const c=new Fw({mutationCache:this,mutationId:++hs(this,Zi)._,options:o.defaultMutationOptions(i),state:l});return this.add(c),c}add(o){Q(this,ia).add(o);const i=xs(o);if(typeof i=="string"){const l=Q(this,pn).get(i);l?l.push(o):Q(this,pn).set(i,[o])}this.notify({type:"added",mutation:o})}remove(o){if(Q(this,ia).delete(o)){const i=xs(o);if(typeof i=="string"){const l=Q(this,pn).get(i);if(l)if(l.length>1){const c=l.indexOf(o);c!==-1&&l.splice(c,1)}else l[0]===o&&Q(this,pn).delete(i)}}this.notify({type:"removed",mutation:o})}canRun(o){const i=xs(o);if(typeof i=="string"){const l=Q(this,pn).get(i),c=l==null?void 0:l.find(f=>f.state.status==="pending");return!c||c===o}else return!0}runNext(o){var l;const i=xs(o);if(typeof i=="string"){const c=(l=Q(this,pn).get(i))==null?void 0:l.find(f=>f!==o&&f.state.isPaused);return(c==null?void 0:c.continue())??Promise.resolve()}else return Promise.resolve()}clear(){ke.batch(()=>{Q(this,ia).forEach(o=>{this.notify({type:"removed",mutation:o})}),Q(this,ia).clear(),Q(this,pn).clear()})}getAll(){return Array.from(Q(this,ia))}find(o){const i={exact:!0,...o};return this.getAll().find(l=>z0(i,l))}findAll(o={}){return this.getAll().filter(i=>z0(o,i))}notify(o){ke.batch(()=>{this.listeners.forEach(i=>{i(o)})})}resumePausedMutations(){const o=this.getAll().filter(i=>i.state.isPaused);return ke.batch(()=>Promise.all(o.map(i=>i.continue().catch(hn))))}},ia=new WeakMap,pn=new WeakMap,Zi=new WeakMap,rg);function xs(a){var o;return(o=a.options.scope)==null?void 0:o.id}function L0(a){return{onFetch:(o,i)=>{var v,b,E,O,S;const l=o.options,c=(E=(b=(v=o.fetchOptions)==null?void 0:v.meta)==null?void 0:b.fetchMore)==null?void 0:E.direction,f=((O=o.state.data)==null?void 0:O.pages)||[],d=((S=o.state.data)==null?void 0:S.pageParams)||[];let g={pages:[],pageParams:[]},m=0;const h=async()=>{let w=!1;const T=D=>{Object.defineProperty(D,"signal",{enumerable:!0,get:()=>(o.signal.aborted?w=!0:o.signal.addEventListener("abort",()=>{w=!0}),o.signal)})},C=Mb(o.options,o.fetchOptions),U=async(D,Y,P)=>{if(w)return Promise.reject();if(Y==null&&D.pages.length)return Promise.resolve(D);const F={client:o.client,queryKey:o.queryKey,pageParam:Y,direction:P?"backward":"forward",meta:o.options.meta};T(F);const W=await C(F),{maxPages:$}=o.options,tt=P?Pw:Hw;return{pages:tt(D.pages,W,$),pageParams:tt(D.pageParams,Y,$)}};if(c&&f.length){const D=c==="backward",Y=D?Iw:H0,P={pages:f,pageParams:d},F=Y(l,P);g=await U(P,F,D)}else{const D=a??f.length;do{const Y=m===0?d[0]??l.initialPageParam:H0(l,g);if(m>0&&Y==null)break;g=await U(g,Y),m++}while(m<D)}return g};o.options.persister?o.fetchFn=()=>{var w,T;return(T=(w=o.options).persister)==null?void 0:T.call(w,h,{client:o.client,queryKey:o.queryKey,meta:o.options.meta,signal:o.signal},i)}:o.fetchFn=h}}}function H0(a,{pages:o,pageParams:i}){const l=o.length-1;return o.length>0?a.getNextPageParam(o[l],o,i[l],i):void 0}function Iw(a,{pages:o,pageParams:i}){var l;return o.length>0?(l=a.getPreviousPageParam)==null?void 0:l.call(a,o[0],o,i[0],i):void 0}var Kt,Va,Xa,To,Oo,Qa,Ao,Ro,og,tS=(og=class{constructor(a={}){_t(this,Kt);_t(this,Va);_t(this,Xa);_t(this,To);_t(this,Oo);_t(this,Qa);_t(this,Ao);_t(this,Ro);yt(this,Kt,a.queryCache||new $w),yt(this,Va,a.mutationCache||new Ww),yt(this,Xa,a.defaultOptions||{}),yt(this,To,new Map),yt(this,Oo,new Map),yt(this,Qa,0)}mount(){hs(this,Qa)._++,Q(this,Qa)===1&&(yt(this,Ao,kb.subscribe(async a=>{a&&(await this.resumePausedMutations(),Q(this,Kt).onFocus())})),yt(this,Ro,js.subscribe(async a=>{a&&(await this.resumePausedMutations(),Q(this,Kt).onOnline())})))}unmount(){var a,o;hs(this,Qa)._--,Q(this,Qa)===0&&((a=Q(this,Ao))==null||a.call(this),yt(this,Ao,void 0),(o=Q(this,Ro))==null||o.call(this),yt(this,Ro,void 0))}isFetching(a){return Q(this,Kt).findAll({...a,fetchStatus:"fetching"}).length}isMutating(a){return Q(this,Va).findAll({...a,status:"pending"}).length}getQueryData(a){var i;const o=this.defaultQueryOptions({queryKey:a});return(i=Q(this,Kt).get(o.queryHash))==null?void 0:i.state.data}ensureQueryData(a){const o=this.defaultQueryOptions(a),i=Q(this,Kt).build(this,o),l=i.state.data;return l===void 0?this.fetchQuery(a):(a.revalidateIfStale&&i.isStaleByTime(D0(o.staleTime,i))&&this.prefetchQuery(o),Promise.resolve(l))}getQueriesData(a){return Q(this,Kt).findAll(a).map(({queryKey:o,state:i})=>{const l=i.data;return[o,l]})}setQueryData(a,o,i){const l=this.defaultQueryOptions({queryKey:a}),c=Q(this,Kt).get(l.queryHash),f=c==null?void 0:c.state.data,d=Dw(o,f);if(d!==void 0)return Q(this,Kt).build(this,l).setData(d,{...i,manual:!0})}setQueriesData(a,o,i){return ke.batch(()=>Q(this,Kt).findAll(a).map(({queryKey:l})=>[l,this.setQueryData(l,o,i)]))}getQueryState(a){var i;const o=this.defaultQueryOptions({queryKey:a});return(i=Q(this,Kt).get(o.queryHash))==null?void 0:i.state}removeQueries(a){const o=Q(this,Kt);ke.batch(()=>{o.findAll(a).forEach(i=>{o.remove(i)})})}resetQueries(a,o){const i=Q(this,Kt);return ke.batch(()=>(i.findAll(a).forEach(l=>{l.reset()}),this.refetchQueries({type:"active",...a},o)))}cancelQueries(a,o={}){const i={revert:!0,...o},l=ke.batch(()=>Q(this,Kt).findAll(a).map(c=>c.cancel(i)));return Promise.all(l).then(hn).catch(hn)}invalidateQueries(a,o={}){return ke.batch(()=>(Q(this,Kt).findAll(a).forEach(i=>{i.invalidate()}),(a==null?void 0:a.refetchType)==="none"?Promise.resolve():this.refetchQueries({...a,type:(a==null?void 0:a.refetchType)??(a==null?void 0:a.type)??"active"},o)))}refetchQueries(a,o={}){const i={...o,cancelRefetch:o.cancelRefetch??!0},l=ke.batch(()=>Q(this,Kt).findAll(a).filter(c=>!c.isDisabled()).map(c=>{let f=c.fetch(void 0,i);return i.throwOnError||(f=f.catch(hn)),c.state.fetchStatus==="paused"?Promise.resolve():f}));return Promise.all(l).then(hn)}fetchQuery(a){const o=this.defaultQueryOptions(a);o.retry===void 0&&(o.retry=!1);const i=Q(this,Kt).build(this,o);return i.isStaleByTime(D0(o.staleTime,i))?i.fetch(o):Promise.resolve(i.state.data)}prefetchQuery(a){return this.fetchQuery(a).then(hn).catch(hn)}fetchInfiniteQuery(a){return a.behavior=L0(a.pages),this.fetchQuery(a)}prefetchInfiniteQuery(a){return this.fetchInfiniteQuery(a).then(hn).catch(hn)}ensureInfiniteQueryData(a){return a.behavior=L0(a.pages),this.ensureQueryData(a)}resumePausedMutations(){return js.isOnline()?Q(this,Va).resumePausedMutations():Promise.resolve()}getQueryCache(){return Q(this,Kt)}getMutationCache(){return Q(this,Va)}getDefaultOptions(){return Q(this,Xa)}setDefaultOptions(a){yt(this,Xa,a)}setQueryDefaults(a,o){Q(this,To).set(Gi(a),{queryKey:a,defaultOptions:o})}getQueryDefaults(a){const o=[...Q(this,To).values()],i={};return o.forEach(l=>{Vi(a,l.queryKey)&&Object.assign(i,l.defaultOptions)}),i}setMutationDefaults(a,o){Q(this,Oo).set(Gi(a),{mutationKey:a,defaultOptions:o})}getMutationDefaults(a){const o=[...Q(this,Oo).values()],i={};return o.forEach(l=>{Vi(a,l.mutationKey)&&Object.assign(i,l.defaultOptions)}),i}defaultQueryOptions(a){if(a._defaulted)return a;const o={...Q(this,Xa).queries,...this.getQueryDefaults(a.queryKey),...a,_defaulted:!0};return o.queryHash||(o.queryHash=od(o.queryKey,o)),o.refetchOnReconnect===void 0&&(o.refetchOnReconnect=o.networkMode!=="always"),o.throwOnError===void 0&&(o.throwOnError=!!o.suspense),!o.networkMode&&o.persister&&(o.networkMode="offlineFirst"),o.queryFn===id&&(o.enabled=!1),o}defaultMutationOptions(a){return a!=null&&a._defaulted?a:{...Q(this,Xa).mutations,...(a==null?void 0:a.mutationKey)&&this.getMutationDefaults(a.mutationKey),...a,_defaulted:!0}}clear(){Q(this,Kt).clear(),Q(this,Va).clear()}},Kt=new WeakMap,Va=new WeakMap,Xa=new WeakMap,To=new WeakMap,Oo=new WeakMap,Qa=new WeakMap,Ao=new WeakMap,Ro=new WeakMap,og),eS=x.createContext(void 0),nS=({client:a,children:o})=>(x.useEffect(()=>(a.mount(),()=>{a.unmount()}),[a]),_.jsx(eS.Provider,{value:a,children:o})),Ui={},P0;function aS(){if(P0)return Ui;P0=1,Object.defineProperty(Ui,"__esModule",{value:!0}),Ui.parse=d,Ui.serialize=h;const a=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,o=/^[\u0021-\u003A\u003C-\u007E]*$/,i=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,l=/^[\u0020-\u003A\u003D-\u007E]*$/,c=Object.prototype.toString,f=(()=>{const E=function(){};return E.prototype=Object.create(null),E})();function d(E,O){const S=new f,w=E.length;if(w<2)return S;const T=(O==null?void 0:O.decode)||v;let C=0;do{const U=E.indexOf("=",C);if(U===-1)break;const D=E.indexOf(";",C),Y=D===-1?w:D;if(U>Y){C=E.lastIndexOf(";",U-1)+1;continue}const P=g(E,C,U),F=m(E,U,P),W=E.slice(P,F);if(S[W]===void 0){let $=g(E,U+1,Y),tt=m(E,Y,$);const ft=T(E.slice($,tt));S[W]=ft}C=Y+1}while(C<w);return S}function g(E,O,S){do{const w=E.charCodeAt(O);if(w!==32&&w!==9)return O}while(++O<S);return S}function m(E,O,S){for(;O>S;){const w=E.charCodeAt(--O);if(w!==32&&w!==9)return O+1}return S}function h(E,O,S){const w=(S==null?void 0:S.encode)||encodeURIComponent;if(!a.test(E))throw new TypeError(`argument name is invalid: ${E}`);const T=w(O);if(!o.test(T))throw new TypeError(`argument val is invalid: ${O}`);let C=E+"="+T;if(!S)return C;if(S.maxAge!==void 0){if(!Number.isInteger(S.maxAge))throw new TypeError(`option maxAge is invalid: ${S.maxAge}`);C+="; Max-Age="+S.maxAge}if(S.domain){if(!i.test(S.domain))throw new TypeError(`option domain is invalid: ${S.domain}`);C+="; Domain="+S.domain}if(S.path){if(!l.test(S.path))throw new TypeError(`option path is invalid: ${S.path}`);C+="; Path="+S.path}if(S.expires){if(!b(S.expires)||!Number.isFinite(S.expires.valueOf()))throw new TypeError(`option expires is invalid: ${S.expires}`);C+="; Expires="+S.expires.toUTCString()}if(S.httpOnly&&(C+="; HttpOnly"),S.secure&&(C+="; Secure"),S.partitioned&&(C+="; Partitioned"),S.priority)switch(typeof S.priority=="string"?S.priority.toLowerCase():void 0){case"low":C+="; Priority=Low";break;case"medium":C+="; Priority=Medium";break;case"high":C+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${S.priority}`)}if(S.sameSite)switch(typeof S.sameSite=="string"?S.sameSite.toLowerCase():S.sameSite){case!0:case"strict":C+="; SameSite=Strict";break;case"lax":C+="; SameSite=Lax";break;case"none":C+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${S.sameSite}`)}return C}function v(E){if(E.indexOf("%")===-1)return E;try{return decodeURIComponent(E)}catch{return E}}function b(E){return c.call(E)==="[object Date]"}return Ui}aS();var q0="popstate";function rS(a={}){function o(l,c){let{pathname:f,search:d,hash:g}=l.location;return qf("",{pathname:f,search:d,hash:g},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function i(l,c){return typeof c=="string"?c:Xi(c)}return iS(o,i,null,a)}function Vt(a,o){if(a===!1||a===null||typeof a>"u")throw new Error(o)}function Un(a,o){if(!a){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function oS(){return Math.random().toString(36).substring(2,10)}function B0(a,o){return{usr:a.state,key:a.key,idx:o}}function qf(a,o,i=null,l){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof o=="string"?zo(o):o,state:i,key:o&&o.key||l||oS()}}function Xi({pathname:a="/",search:o="",hash:i=""}){return o&&o!=="?"&&(a+=o.charAt(0)==="?"?o:"?"+o),i&&i!=="#"&&(a+=i.charAt(0)==="#"?i:"#"+i),a}function zo(a){let o={};if(a){let i=a.indexOf("#");i>=0&&(o.hash=a.substring(i),a=a.substring(0,i));let l=a.indexOf("?");l>=0&&(o.search=a.substring(l),a=a.substring(0,l)),a&&(o.pathname=a)}return o}function iS(a,o,i,l={}){let{window:c=document.defaultView,v5Compat:f=!1}=l,d=c.history,g="POP",m=null,h=v();h==null&&(h=0,d.replaceState({...d.state,idx:h},""));function v(){return(d.state||{idx:null}).idx}function b(){g="POP";let T=v(),C=T==null?null:T-h;h=T,m&&m({action:g,location:w.location,delta:C})}function E(T,C){g="PUSH";let U=qf(w.location,T,C);h=v()+1;let D=B0(U,h),Y=w.createHref(U);try{d.pushState(D,"",Y)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;c.location.assign(Y)}f&&m&&m({action:g,location:w.location,delta:1})}function O(T,C){g="REPLACE";let U=qf(w.location,T,C);h=v();let D=B0(U,h),Y=w.createHref(U);d.replaceState(D,"",Y),f&&m&&m({action:g,location:w.location,delta:0})}function S(T){let C=c.location.origin!=="null"?c.location.origin:c.location.href,U=typeof T=="string"?T:Xi(T);return U=U.replace(/ $/,"%20"),Vt(C,`No window.location.(origin|href) available to create URL for href: ${U}`),new URL(U,C)}let w={get action(){return g},get location(){return a(c,d)},listen(T){if(m)throw new Error("A history only accepts one active listener");return c.addEventListener(q0,b),m=T,()=>{c.removeEventListener(q0,b),m=null}},createHref(T){return o(c,T)},createURL:S,encodeLocation(T){let C=S(T);return{pathname:C.pathname,search:C.search,hash:C.hash}},push:E,replace:O,go(T){return d.go(T)}};return w}function jb(a,o,i="/"){return lS(a,o,i,!1)}function lS(a,o,i,l){let c=typeof o=="string"?zo(o):o,f=fa(c.pathname||"/",i);if(f==null)return null;let d=Ub(a);sS(d);let g=null;for(let m=0;g==null&&m<d.length;++m){let h=yS(f);g=bS(d[m],h,l)}return g}function Ub(a,o=[],i=[],l=""){let c=(f,d,g)=>{let m={relativePath:g===void 0?f.path||"":g,caseSensitive:f.caseSensitive===!0,childrenIndex:d,route:f};m.relativePath.startsWith("/")&&(Vt(m.relativePath.startsWith(l),`Absolute route path "${m.relativePath}" nested under path "${l}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(l.length));let h=sa([l,m.relativePath]),v=i.concat(m);f.children&&f.children.length>0&&(Vt(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${h}".`),Ub(f.children,o,v,h)),!(f.path==null&&!f.index)&&o.push({path:h,score:pS(h,f.index),routesMeta:v})};return a.forEach((f,d)=>{var g;if(f.path===""||!((g=f.path)!=null&&g.includes("?")))c(f,d);else for(let m of Lb(f.path))c(f,d,m)}),o}function Lb(a){let o=a.split("/");if(o.length===0)return[];let[i,...l]=o,c=i.endsWith("?"),f=i.replace(/\?$/,"");if(l.length===0)return c?[f,""]:[f];let d=Lb(l.join("/")),g=[];return g.push(...d.map(m=>m===""?f:[f,m].join("/"))),c&&g.push(...d),g.map(m=>a.startsWith("/")&&m===""?"/":m)}function sS(a){a.sort((o,i)=>o.score!==i.score?i.score-o.score:gS(o.routesMeta.map(l=>l.childrenIndex),i.routesMeta.map(l=>l.childrenIndex)))}var uS=/^:[\w-]+$/,cS=3,fS=2,dS=1,hS=10,mS=-2,Y0=a=>a==="*";function pS(a,o){let i=a.split("/"),l=i.length;return i.some(Y0)&&(l+=mS),o&&(l+=fS),i.filter(c=>!Y0(c)).reduce((c,f)=>c+(uS.test(f)?cS:f===""?dS:hS),l)}function gS(a,o){return a.length===o.length&&a.slice(0,-1).every((l,c)=>l===o[c])?a[a.length-1]-o[o.length-1]:0}function bS(a,o,i=!1){let{routesMeta:l}=a,c={},f="/",d=[];for(let g=0;g<l.length;++g){let m=l[g],h=g===l.length-1,v=f==="/"?o:o.slice(f.length)||"/",b=Us({path:m.relativePath,caseSensitive:m.caseSensitive,end:h},v),E=m.route;if(!b&&h&&i&&!l[l.length-1].route.index&&(b=Us({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},v)),!b)return null;Object.assign(c,b.params),d.push({params:c,pathname:sa([f,b.pathname]),pathnameBase:ES(sa([f,b.pathnameBase])),route:E}),b.pathnameBase!=="/"&&(f=sa([f,b.pathnameBase]))}return d}function Us(a,o){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[i,l]=vS(a.path,a.caseSensitive,a.end),c=o.match(i);if(!c)return null;let f=c[0],d=f.replace(/(.)\/+$/,"$1"),g=c.slice(1);return{params:l.reduce((h,{paramName:v,isOptional:b},E)=>{if(v==="*"){let S=g[E]||"";d=f.slice(0,f.length-S.length).replace(/(.)\/+$/,"$1")}const O=g[E];return b&&!O?h[v]=void 0:h[v]=(O||"").replace(/%2F/g,"/"),h},{}),pathname:f,pathnameBase:d,pattern:a}}function vS(a,o=!1,i=!0){Un(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let l=[],c="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,g,m)=>(l.push({paramName:g,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return a.endsWith("*")?(l.push({paramName:"*"}),c+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?c+="\\/*$":a!==""&&a!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,o?void 0:"i"),l]}function yS(a){try{return a.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return Un(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`),a}}function fa(a,o){if(o==="/")return a;if(!a.toLowerCase().startsWith(o.toLowerCase()))return null;let i=o.endsWith("/")?o.length-1:o.length,l=a.charAt(i);return l&&l!=="/"?null:a.slice(i)||"/"}function xS(a,o="/"){let{pathname:i,search:l="",hash:c=""}=typeof a=="string"?zo(a):a;return{pathname:i?i.startsWith("/")?i:wS(i,o):o,search:TS(l),hash:OS(c)}}function wS(a,o){let i=o.replace(/\/+$/,"").split("/");return a.split("/").forEach(c=>{c===".."?i.length>1&&i.pop():c!=="."&&i.push(c)}),i.length>1?i.join("/"):"/"}function Ef(a,o,i,l){return`Cannot include a '${a}' character in a manually specified \`to.${o}\` field [${JSON.stringify(l)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function SS(a){return a.filter((o,i)=>i===0||o.route.path&&o.route.path.length>0)}function Hb(a){let o=SS(a);return o.map((i,l)=>l===o.length-1?i.pathname:i.pathnameBase)}function Pb(a,o,i,l=!1){let c;typeof a=="string"?c=zo(a):(c={...a},Vt(!c.pathname||!c.pathname.includes("?"),Ef("?","pathname","search",c)),Vt(!c.pathname||!c.pathname.includes("#"),Ef("#","pathname","hash",c)),Vt(!c.search||!c.search.includes("#"),Ef("#","search","hash",c)));let f=a===""||c.pathname==="",d=f?"/":c.pathname,g;if(d==null)g=i;else{let b=o.length-1;if(!l&&d.startsWith("..")){let E=d.split("/");for(;E[0]==="..";)E.shift(),b-=1;c.pathname=E.join("/")}g=b>=0?o[b]:"/"}let m=xS(c,g),h=d&&d!=="/"&&d.endsWith("/"),v=(f||d===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(h||v)&&(m.pathname+="/"),m}var sa=a=>a.join("/").replace(/\/\/+/g,"/"),ES=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),TS=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,OS=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function AS(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}var qb=["POST","PUT","PATCH","DELETE"];new Set(qb);var RS=["GET",...qb];new Set(RS);var jo=x.createContext(null);jo.displayName="DataRouter";var $s=x.createContext(null);$s.displayName="DataRouterState";var Bb=x.createContext({isTransitioning:!1});Bb.displayName="ViewTransition";var CS=x.createContext(new Map);CS.displayName="Fetchers";var MS=x.createContext(null);MS.displayName="Await";var Hn=x.createContext(null);Hn.displayName="Navigation";var Fi=x.createContext(null);Fi.displayName="Location";var Pn=x.createContext({outlet:null,matches:[],isDataRoute:!1});Pn.displayName="Route";var ld=x.createContext(null);ld.displayName="RouteError";function kS(a,{relative:o}={}){Vt(Ji(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:l}=x.useContext(Hn),{hash:c,pathname:f,search:d}=Wi(a,{relative:o}),g=f;return i!=="/"&&(g=f==="/"?i:sa([i,f])),l.createHref({pathname:g,search:d,hash:c})}function Ji(){return x.useContext(Fi)!=null}function ha(){return Vt(Ji(),"useLocation() may be used only in the context of a <Router> component."),x.useContext(Fi).location}var Yb="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Gb(a){x.useContext(Hn).static||x.useLayoutEffect(a)}function Vb(){let{isDataRoute:a}=x.useContext(Pn);return a?VS():_S()}function _S(){Vt(Ji(),"useNavigate() may be used only in the context of a <Router> component.");let a=x.useContext(jo),{basename:o,navigator:i}=x.useContext(Hn),{matches:l}=x.useContext(Pn),{pathname:c}=ha(),f=JSON.stringify(Hb(l)),d=x.useRef(!1);return Gb(()=>{d.current=!0}),x.useCallback((m,h={})=>{if(Un(d.current,Yb),!d.current)return;if(typeof m=="number"){i.go(m);return}let v=Pb(m,JSON.parse(f),c,h.relative==="path");a==null&&o!=="/"&&(v.pathname=v.pathname==="/"?o:sa([o,v.pathname])),(h.replace?i.replace:i.push)(v,h.state,h)},[o,i,f,c,a])}x.createContext(null);function DS(){let{matches:a}=x.useContext(Pn),o=a[a.length-1];return o?o.params:{}}function Wi(a,{relative:o}={}){let{matches:i}=x.useContext(Pn),{pathname:l}=ha(),c=JSON.stringify(Hb(i));return x.useMemo(()=>Pb(a,JSON.parse(c),l,o==="path"),[a,c,l,o])}function NS(a,o){return Xb(a,o)}function Xb(a,o,i,l){var U;Vt(Ji(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c,static:f}=x.useContext(Hn),{matches:d}=x.useContext(Pn),g=d[d.length-1],m=g?g.params:{},h=g?g.pathname:"/",v=g?g.pathnameBase:"/",b=g&&g.route;{let D=b&&b.path||"";Qb(h,!b||D.endsWith("*")||D.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${D}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${D}"> to <Route path="${D==="/"?"*":`${D}/*`}">.`)}let E=ha(),O;if(o){let D=typeof o=="string"?zo(o):o;Vt(v==="/"||((U=D.pathname)==null?void 0:U.startsWith(v)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${D.pathname}" was given in the \`location\` prop.`),O=D}else O=E;let S=O.pathname||"/",w=S;if(v!=="/"){let D=v.replace(/^\//,"").split("/");w="/"+S.replace(/^\//,"").split("/").slice(D.length).join("/")}let T=!f&&i&&i.matches&&i.matches.length>0?i.matches:jb(a,{pathname:w});Un(b||T!=null,`No routes matched location "${O.pathname}${O.search}${O.hash}" `),Un(T==null||T[T.length-1].route.element!==void 0||T[T.length-1].route.Component!==void 0||T[T.length-1].route.lazy!==void 0,`Matched leaf route at location "${O.pathname}${O.search}${O.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let C=HS(T&&T.map(D=>Object.assign({},D,{params:Object.assign({},m,D.params),pathname:sa([v,c.encodeLocation?c.encodeLocation(D.pathname).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?v:sa([v,c.encodeLocation?c.encodeLocation(D.pathnameBase).pathname:D.pathnameBase])})),d,i,l);return o&&C?x.createElement(Fi.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...O},navigationType:"POP"}},C):C}function zS(){let a=GS(),o=AS(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),i=a instanceof Error?a.stack:null,l="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:l},f={padding:"2px 4px",backgroundColor:l},d=null;return console.error("Error handled by React Router default ErrorBoundary:",a),d=x.createElement(x.Fragment,null,x.createElement("p",null,"💿 Hey developer 👋"),x.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",x.createElement("code",{style:f},"ErrorBoundary")," or"," ",x.createElement("code",{style:f},"errorElement")," prop on your route.")),x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},o),i?x.createElement("pre",{style:c},i):null,d)}var jS=x.createElement(zS,null),US=class extends x.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,o){return o.location!==a.location||o.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:o.error,location:o.location,revalidation:a.revalidation||o.revalidation}}componentDidCatch(a,o){console.error("React Router caught the following error during render",a,o)}render(){return this.state.error!==void 0?x.createElement(Pn.Provider,{value:this.props.routeContext},x.createElement(ld.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function LS({routeContext:a,match:o,children:i}){let l=x.useContext(jo);return l&&l.static&&l.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=o.route.id),x.createElement(Pn.Provider,{value:a},i)}function HS(a,o=[],i=null,l=null){if(a==null){if(!i)return null;if(i.errors)a=i.matches;else if(o.length===0&&!i.initialized&&i.matches.length>0)a=i.matches;else return null}let c=a,f=i==null?void 0:i.errors;if(f!=null){let m=c.findIndex(h=>h.route.id&&(f==null?void 0:f[h.route.id])!==void 0);Vt(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),c=c.slice(0,Math.min(c.length,m+1))}let d=!1,g=-1;if(i)for(let m=0;m<c.length;m++){let h=c[m];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(g=m),h.route.id){let{loaderData:v,errors:b}=i,E=h.route.loader&&!v.hasOwnProperty(h.route.id)&&(!b||b[h.route.id]===void 0);if(h.route.lazy||E){d=!0,g>=0?c=c.slice(0,g+1):c=[c[0]];break}}}return c.reduceRight((m,h,v)=>{let b,E=!1,O=null,S=null;i&&(b=f&&h.route.id?f[h.route.id]:void 0,O=h.route.errorElement||jS,d&&(g<0&&v===0?(Qb("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,S=null):g===v&&(E=!0,S=h.route.hydrateFallbackElement||null)));let w=o.concat(c.slice(0,v+1)),T=()=>{let C;return b?C=O:E?C=S:h.route.Component?C=x.createElement(h.route.Component,null):h.route.element?C=h.route.element:C=m,x.createElement(LS,{match:h,routeContext:{outlet:m,matches:w,isDataRoute:i!=null},children:C})};return i&&(h.route.ErrorBoundary||h.route.errorElement||v===0)?x.createElement(US,{location:i.location,revalidation:i.revalidation,component:O,error:b,children:T(),routeContext:{outlet:null,matches:w,isDataRoute:!0}}):T()},null)}function sd(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function PS(a){let o=x.useContext(jo);return Vt(o,sd(a)),o}function qS(a){let o=x.useContext($s);return Vt(o,sd(a)),o}function BS(a){let o=x.useContext(Pn);return Vt(o,sd(a)),o}function ud(a){let o=BS(a),i=o.matches[o.matches.length-1];return Vt(i.route.id,`${a} can only be used on routes that contain a unique "id"`),i.route.id}function YS(){return ud("useRouteId")}function GS(){var l;let a=x.useContext(ld),o=qS("useRouteError"),i=ud("useRouteError");return a!==void 0?a:(l=o.errors)==null?void 0:l[i]}function VS(){let{router:a}=PS("useNavigate"),o=ud("useNavigate"),i=x.useRef(!1);return Gb(()=>{i.current=!0}),x.useCallback(async(c,f={})=>{Un(i.current,Yb),i.current&&(typeof c=="number"?a.navigate(c):await a.navigate(c,{fromRouteId:o,...f}))},[a,o])}var G0={};function Qb(a,o,i){!o&&!G0[a]&&(G0[a]=!0,Un(!1,i))}x.memo(XS);function XS({routes:a,future:o,state:i}){return Xb(a,void 0,i,o)}function Rs(a){Vt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function QS({basename:a="/",children:o=null,location:i,navigationType:l="POP",navigator:c,static:f=!1}){Vt(!Ji(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=a.replace(/^\/*/,"/"),g=x.useMemo(()=>({basename:d,navigator:c,static:f,future:{}}),[d,c,f]);typeof i=="string"&&(i=zo(i));let{pathname:m="/",search:h="",hash:v="",state:b=null,key:E="default"}=i,O=x.useMemo(()=>{let S=fa(m,d);return S==null?null:{location:{pathname:S,search:h,hash:v,state:b,key:E},navigationType:l}},[d,m,h,v,b,E,l]);return Un(O!=null,`<Router basename="${d}"> is not able to match the URL "${m}${h}${v}" because it does not start with the basename, so the <Router> won't render anything.`),O==null?null:x.createElement(Hn.Provider,{value:g},x.createElement(Fi.Provider,{children:o,value:O}))}function ZS({children:a,location:o}){return NS(Bf(a),o)}function Bf(a,o=[]){let i=[];return x.Children.forEach(a,(l,c)=>{if(!x.isValidElement(l))return;let f=[...o,c];if(l.type===x.Fragment){i.push.apply(i,Bf(l.props.children,f));return}Vt(l.type===Rs,`[${typeof l.type=="string"?l.type:l.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Vt(!l.props.index||!l.props.children,"An index route cannot have child routes.");let d={id:l.props.id||f.join("-"),caseSensitive:l.props.caseSensitive,element:l.props.element,Component:l.props.Component,index:l.props.index,path:l.props.path,loader:l.props.loader,action:l.props.action,hydrateFallbackElement:l.props.hydrateFallbackElement,HydrateFallback:l.props.HydrateFallback,errorElement:l.props.errorElement,ErrorBoundary:l.props.ErrorBoundary,hasErrorBoundary:l.props.hasErrorBoundary===!0||l.props.ErrorBoundary!=null||l.props.errorElement!=null,shouldRevalidate:l.props.shouldRevalidate,handle:l.props.handle,lazy:l.props.lazy};l.props.children&&(d.children=Bf(l.props.children,f)),i.push(d)}),i}var Cs="get",Ms="application/x-www-form-urlencoded";function Fs(a){return a!=null&&typeof a.tagName=="string"}function KS(a){return Fs(a)&&a.tagName.toLowerCase()==="button"}function $S(a){return Fs(a)&&a.tagName.toLowerCase()==="form"}function FS(a){return Fs(a)&&a.tagName.toLowerCase()==="input"}function JS(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function WS(a,o){return a.button===0&&(!o||o==="_self")&&!JS(a)}var ws=null;function IS(){if(ws===null)try{new FormData(document.createElement("form"),0),ws=!1}catch{ws=!0}return ws}var tE=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Tf(a){return a!=null&&!tE.has(a)?(Un(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ms}"`),null):a}function eE(a,o){let i,l,c,f,d;if($S(a)){let g=a.getAttribute("action");l=g?fa(g,o):null,i=a.getAttribute("method")||Cs,c=Tf(a.getAttribute("enctype"))||Ms,f=new FormData(a)}else if(KS(a)||FS(a)&&(a.type==="submit"||a.type==="image")){let g=a.form;if(g==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=a.getAttribute("formaction")||g.getAttribute("action");if(l=m?fa(m,o):null,i=a.getAttribute("formmethod")||g.getAttribute("method")||Cs,c=Tf(a.getAttribute("formenctype"))||Tf(g.getAttribute("enctype"))||Ms,f=new FormData(g,a),!IS()){let{name:h,type:v,value:b}=a;if(v==="image"){let E=h?`${h}.`:"";f.append(`${E}x`,"0"),f.append(`${E}y`,"0")}else h&&f.append(h,b)}}else{if(Fs(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Cs,l=null,c=Ms,d=a}return f&&c==="text/plain"&&(d=f,f=void 0),{action:l,method:i.toLowerCase(),encType:c,formData:f,body:d}}function cd(a,o){if(a===!1||a===null||typeof a>"u")throw new Error(o)}async function nE(a,o){if(a.id in o)return o[a.id];try{let i=await import(a.module);return o[a.id]=i,i}catch(i){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function aE(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function rE(a,o,i){let l=await Promise.all(a.map(async c=>{let f=o.routes[c.route.id];if(f){let d=await nE(f,i);return d.links?d.links():[]}return[]}));return sE(l.flat(1).filter(aE).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function V0(a,o,i,l,c,f){let d=(m,h)=>i[h]?m.route.id!==i[h].route.id:!0,g=(m,h)=>{var v;return i[h].pathname!==m.pathname||((v=i[h].route.path)==null?void 0:v.endsWith("*"))&&i[h].params["*"]!==m.params["*"]};return f==="assets"?o.filter((m,h)=>d(m,h)||g(m,h)):f==="data"?o.filter((m,h)=>{var b;let v=l.routes[m.route.id];if(!v||!v.hasLoader)return!1;if(d(m,h)||g(m,h))return!0;if(m.route.shouldRevalidate){let E=m.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:((b=i[0])==null?void 0:b.params)||{},nextUrl:new URL(a,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof E=="boolean")return E}return!0}):[]}function oE(a,o,{includeHydrateFallback:i}={}){return iE(a.map(l=>{let c=o.routes[l.route.id];if(!c)return[];let f=[c.module];return c.clientActionModule&&(f=f.concat(c.clientActionModule)),c.clientLoaderModule&&(f=f.concat(c.clientLoaderModule)),i&&c.hydrateFallbackModule&&(f=f.concat(c.hydrateFallbackModule)),c.imports&&(f=f.concat(c.imports)),f}).flat(1))}function iE(a){return[...new Set(a)]}function lE(a){let o={},i=Object.keys(a).sort();for(let l of i)o[l]=a[l];return o}function sE(a,o){let i=new Set;return new Set(o),a.reduce((l,c)=>{let f=JSON.stringify(lE(c));return i.has(f)||(i.add(f),l.push({key:f,link:c})),l},[])}var uE=new Set([100,101,204,205]);function cE(a,o){let i=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return i.pathname==="/"?i.pathname="_root.data":o&&fa(i.pathname,o)==="/"?i.pathname=`${o.replace(/\/$/,"")}/_root.data`:i.pathname=`${i.pathname.replace(/\/$/,"")}.data`,i}function Zb(){let a=x.useContext(jo);return cd(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function fE(){let a=x.useContext($s);return cd(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var fd=x.createContext(void 0);fd.displayName="FrameworkContext";function Kb(){let a=x.useContext(fd);return cd(a,"You must render this element inside a <HydratedRouter> element"),a}function dE(a,o){let i=x.useContext(fd),[l,c]=x.useState(!1),[f,d]=x.useState(!1),{onFocus:g,onBlur:m,onMouseEnter:h,onMouseLeave:v,onTouchStart:b}=o,E=x.useRef(null);x.useEffect(()=>{if(a==="render"&&d(!0),a==="viewport"){let w=C=>{C.forEach(U=>{d(U.isIntersecting)})},T=new IntersectionObserver(w,{threshold:.5});return E.current&&T.observe(E.current),()=>{T.disconnect()}}},[a]),x.useEffect(()=>{if(l){let w=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(w)}}},[l]);let O=()=>{c(!0)},S=()=>{c(!1),d(!1)};return i?a!=="intent"?[f,E,{}]:[f,E,{onFocus:Li(g,O),onBlur:Li(m,S),onMouseEnter:Li(h,O),onMouseLeave:Li(v,S),onTouchStart:Li(b,O)}]:[!1,E,{}]}function Li(a,o){return i=>{a&&a(i),i.defaultPrevented||o(i)}}function hE({page:a,...o}){let{router:i}=Zb(),l=x.useMemo(()=>jb(i.routes,a,i.basename),[i.routes,a,i.basename]);return l?x.createElement(pE,{page:a,matches:l,...o}):null}function mE(a){let{manifest:o,routeModules:i}=Kb(),[l,c]=x.useState([]);return x.useEffect(()=>{let f=!1;return rE(a,o,i).then(d=>{f||c(d)}),()=>{f=!0}},[a,o,i]),l}function pE({page:a,matches:o,...i}){let l=ha(),{manifest:c,routeModules:f}=Kb(),{basename:d}=Zb(),{loaderData:g,matches:m}=fE(),h=x.useMemo(()=>V0(a,o,m,c,l,"data"),[a,o,m,c,l]),v=x.useMemo(()=>V0(a,o,m,c,l,"assets"),[a,o,m,c,l]),b=x.useMemo(()=>{if(a===l.pathname+l.search+l.hash)return[];let S=new Set,w=!1;if(o.forEach(C=>{var D;let U=c.routes[C.route.id];!U||!U.hasLoader||(!h.some(Y=>Y.route.id===C.route.id)&&C.route.id in g&&((D=f[C.route.id])!=null&&D.shouldRevalidate)||U.hasClientLoader?w=!0:S.add(C.route.id))}),S.size===0)return[];let T=cE(a,d);return w&&S.size>0&&T.searchParams.set("_routes",o.filter(C=>S.has(C.route.id)).map(C=>C.route.id).join(",")),[T.pathname+T.search]},[d,g,l,c,h,o,a,f]),E=x.useMemo(()=>oE(v,c),[v,c]),O=mE(v);return x.createElement(x.Fragment,null,b.map(S=>x.createElement("link",{key:S,rel:"prefetch",as:"fetch",href:S,...i})),E.map(S=>x.createElement("link",{key:S,rel:"modulepreload",href:S,...i})),O.map(({key:S,link:w})=>x.createElement("link",{key:S,...w})))}function gE(...a){return o=>{a.forEach(i=>{typeof i=="function"?i(o):i!=null&&(i.current=o)})}}var $b=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{$b&&(window.__reactRouterVersion="7.5.3")}catch{}function bE({basename:a,children:o,window:i}){let l=x.useRef();l.current==null&&(l.current=rS({window:i,v5Compat:!0}));let c=l.current,[f,d]=x.useState({action:c.action,location:c.location}),g=x.useCallback(m=>{x.startTransition(()=>d(m))},[d]);return x.useLayoutEffect(()=>c.listen(g),[c,g]),x.createElement(QS,{basename:a,children:o,location:f.location,navigationType:f.action,navigator:c})}var Fb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Jb=x.forwardRef(function({onClick:o,discover:i="render",prefetch:l="none",relative:c,reloadDocument:f,replace:d,state:g,target:m,to:h,preventScrollReset:v,viewTransition:b,...E},O){let{basename:S}=x.useContext(Hn),w=typeof h=="string"&&Fb.test(h),T,C=!1;if(typeof h=="string"&&w&&(T=h,$b))try{let tt=new URL(window.location.href),ft=h.startsWith("//")?new URL(tt.protocol+h):new URL(h),pt=fa(ft.pathname,S);ft.origin===tt.origin&&pt!=null?h=pt+ft.search+ft.hash:C=!0}catch{Un(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let U=kS(h,{relative:c}),[D,Y,P]=dE(l,E),F=wE(h,{replace:d,state:g,target:m,preventScrollReset:v,relative:c,viewTransition:b});function W(tt){o&&o(tt),tt.defaultPrevented||F(tt)}let $=x.createElement("a",{...E,...P,href:T||U,onClick:C||f?o:W,ref:gE(O,Y),target:m,"data-discover":!w&&i==="render"?"true":void 0});return D&&!w?x.createElement(x.Fragment,null,$,x.createElement(hE,{page:U})):$});Jb.displayName="Link";var vE=x.forwardRef(function({"aria-current":o="page",caseSensitive:i=!1,className:l="",end:c=!1,style:f,to:d,viewTransition:g,children:m,...h},v){let b=Wi(d,{relative:h.relative}),E=ha(),O=x.useContext($s),{navigator:S,basename:w}=x.useContext(Hn),T=O!=null&&AE(b)&&g===!0,C=S.encodeLocation?S.encodeLocation(b).pathname:b.pathname,U=E.pathname,D=O&&O.navigation&&O.navigation.location?O.navigation.location.pathname:null;i||(U=U.toLowerCase(),D=D?D.toLowerCase():null,C=C.toLowerCase()),D&&w&&(D=fa(D,w)||D);const Y=C!=="/"&&C.endsWith("/")?C.length-1:C.length;let P=U===C||!c&&U.startsWith(C)&&U.charAt(Y)==="/",F=D!=null&&(D===C||!c&&D.startsWith(C)&&D.charAt(C.length)==="/"),W={isActive:P,isPending:F,isTransitioning:T},$=P?o:void 0,tt;typeof l=="function"?tt=l(W):tt=[l,P?"active":null,F?"pending":null,T?"transitioning":null].filter(Boolean).join(" ");let ft=typeof f=="function"?f(W):f;return x.createElement(Jb,{...h,"aria-current":$,className:tt,ref:v,style:ft,to:d,viewTransition:g},typeof m=="function"?m(W):m)});vE.displayName="NavLink";var yE=x.forwardRef(({discover:a="render",fetcherKey:o,navigate:i,reloadDocument:l,replace:c,state:f,method:d=Cs,action:g,onSubmit:m,relative:h,preventScrollReset:v,viewTransition:b,...E},O)=>{let S=TE(),w=OE(g,{relative:h}),T=d.toLowerCase()==="get"?"get":"post",C=typeof g=="string"&&Fb.test(g),U=D=>{if(m&&m(D),D.defaultPrevented)return;D.preventDefault();let Y=D.nativeEvent.submitter,P=(Y==null?void 0:Y.getAttribute("formmethod"))||d;S(Y||D.currentTarget,{fetcherKey:o,method:P,navigate:i,replace:c,state:f,relative:h,preventScrollReset:v,viewTransition:b})};return x.createElement("form",{ref:O,method:T,action:w,onSubmit:l?m:U,...E,"data-discover":!C&&a==="render"?"true":void 0})});yE.displayName="Form";function xE(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Wb(a){let o=x.useContext(jo);return Vt(o,xE(a)),o}function wE(a,{target:o,replace:i,state:l,preventScrollReset:c,relative:f,viewTransition:d}={}){let g=Vb(),m=ha(),h=Wi(a,{relative:f});return x.useCallback(v=>{if(WS(v,o)){v.preventDefault();let b=i!==void 0?i:Xi(m)===Xi(h);g(a,{replace:b,state:l,preventScrollReset:c,relative:f,viewTransition:d})}},[m,g,h,i,l,o,a,c,f,d])}var SE=0,EE=()=>`__${String(++SE)}__`;function TE(){let{router:a}=Wb("useSubmit"),{basename:o}=x.useContext(Hn),i=YS();return x.useCallback(async(l,c={})=>{let{action:f,method:d,encType:g,formData:m,body:h}=eE(l,o);if(c.navigate===!1){let v=c.fetcherKey||EE();await a.fetch(v,i,c.action||f,{preventScrollReset:c.preventScrollReset,formData:m,body:h,formMethod:c.method||d,formEncType:c.encType||g,flushSync:c.flushSync})}else await a.navigate(c.action||f,{preventScrollReset:c.preventScrollReset,formData:m,body:h,formMethod:c.method||d,formEncType:c.encType||g,replace:c.replace,state:c.state,fromRouteId:i,flushSync:c.flushSync,viewTransition:c.viewTransition})},[a,o,i])}function OE(a,{relative:o}={}){let{basename:i}=x.useContext(Hn),l=x.useContext(Pn);Vt(l,"useFormAction must be used inside a RouteContext");let[c]=l.matches.slice(-1),f={...Wi(a||".",{relative:o})},d=ha();if(a==null){f.search=d.search;let g=new URLSearchParams(f.search),m=g.getAll("index");if(m.some(v=>v==="")){g.delete("index"),m.filter(b=>b).forEach(b=>g.append("index",b));let v=g.toString();f.search=v?`?${v}`:""}}return(!a||a===".")&&c.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(f.pathname=f.pathname==="/"?i:sa([i,f.pathname])),Xi(f)}function AE(a,o={}){let i=x.useContext(Bb);Vt(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:l}=Wb("useViewTransitionState"),c=Wi(a,{relative:o.relative});if(!i.isTransitioning)return!1;let f=fa(i.currentLocation.pathname,l)||i.currentLocation.pathname,d=fa(i.nextLocation.pathname,l)||i.nextLocation.pathname;return Us(c.pathname,d)!=null||Us(c.pathname,f)!=null}new TextEncoder;[...uE];const X0=[{title:"The Art of Questioning",route:"/"},{title:"Art Of Questioning",route:"/art-of-questioning"},{title:"Expressing Honest Praise",route:"/expressing-honest-praise"},{title:"Active Listening",route:"/active-listening"},{title:"Utilizing Free Information",route:"/utilizing-free-information"},{title:"Letting Others Know You",route:"/letting-others-know-you"},{title:"Starting A Conversation",route:"/starting-a-conversation"},{title:"Issuing Invitations",route:"/issuing-invitations"},{title:"Accepting Criticism",route:"/accepting-criticism"},{title:"Refusing Manipulation",route:"/refusing-manipulation"},{title:"Requesting Change",route:"/requesting-change"},{title:"Expressing Through Actions",route:"/expressing-through-actions"},{title:"Reducing Social Anxiety",route:"/reducing-social-anxiety"},{title:"Effort With A Plan",route:"/effort-with-a-plan"}],RE=()=>{var v,b;const a=Vb(),o=ha(),[i,l]=x.useState([]),[c,f]=x.useState(0);x.useEffect(()=>{l(X0);const E=X0.findIndex(O=>O.route===o.pathname);E!==-1&&f(E)},[o.pathname]);const d=()=>{if(c>0){const E=i[c-1];a(E.route)}else x0.info("You're at the first article already")},g=()=>{if(c<i.length-1){const E=i[c+1];a(E.route)}else x0.info("You're at the last article already")},m=c>0?(v=i[c-1])==null?void 0:v.title:null,h=c<i.length-1?(b=i[c+1])==null?void 0:b.title:null;return _.jsx("header",{className:"w-full max-w-7xl px-4 md:px-6 mx-auto",children:_.jsxs("div",{className:"flex justify-between items-center py-3 border-y border-white/10 mb-4",children:[_.jsxs("button",{onClick:d,disabled:c<=0,className:"flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors disabled:opacity-50 disabled:hover:bg-white/10",children:[_.jsx(Cx,{className:"h-5 w-5"}),m||"Previous"]}),_.jsxs("div",{className:"text-white/80",children:[c+1," / ",i.length]}),_.jsxs("button",{onClick:g,disabled:c>=i.length-1,className:"flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors disabled:opacity-50 disabled:hover:bg-white/10",children:[h||"Next",_.jsx(kx,{className:"h-5 w-5"})]})]})})},CE=()=>_.jsx("footer",{className:"w-full max-w-7xl px-4 md:px-6 mx-auto",children:_.jsx("div",{className:"flex justify-center items-center py-3 mb-4",children:_.jsx("p",{children:"© 2025 交谈的力量 | The Power of Conversation"})})}),Hi=({title:a,children:o,className:i,variant:l="1",isLarge:c=!1,titleClassName:f,contentClassName:d})=>_.jsxs("div",{className:vn("bento-card",`bento-card-${l}`,c?"md:col-span-2 md:row-span-2":"",i),children:[a&&_.jsx("h3",{className:vn("card-title",f),children:a}),_.jsx("div",{className:vn(d),children:o})]}),go=({children:a,className:o})=>_.jsx("div",{className:vn("icon-container flex items-center justify-center rounded-lg p-2",o),children:a}),ME=()=>_.jsx("div",{className:"min-h-screen flex flex-col items-center justify-center bg-bento-bg",children:_.jsxs("div",{className:"grid gap-4 p-4 md:p-6 w-full max-w-7xl grid-cols-1 md:grid-cols-3 lg:grid-cols-3",children:[_.jsxs("div",{className:"title-card col-span-full animate-pulse-slow",children:[" ",_.jsxs("div",{className:"text-center py-10",children:[_.jsxs("h1",{className:"font-serif text-4xl md:text-6xl font-bold tracking-tight mb-2 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent",children:["交谈的力量 ",_.jsx("span",{className:"block text-2xl md:text-3xl mt-2",children:"The Power of Conversation"})]}),_.jsx("div",{className:"flex justify-center mt-6",children:_.jsxs(go,{className:"bg-gradient-to-br from-purple-500/30 to-indigo-600/30",children:[_.jsx(Ax,{className:"h-8 w-8 text-purple-400"})," "]})})]})]}),_.jsx(Hi,{title:"技巧而非天赋 | Skill Not Talent",variant:"1",titleClassName:"text-pink-300",children:_.jsxs("div",{className:"flex items-start",children:[_.jsxs(go,{className:"bg-gradient-to-br from-pink-500/30 to-red-600/30",children:[_.jsx(qx,{className:"h-6 w-6 text-pink-400"})," "]}),_.jsxs("div",{className:"ml-3",children:[_.jsxs("h4",{className:"font-medium mb-1 text-pink-200",children:["交谈能力可习得",_.jsx("br",{}),"Talking Ability is Learnable"]}),_.jsxs("p",{className:"text-bento-text/80 text-sm",children:["善于交谈并非天生，而是懂得简单技巧。这些技巧任何人都可以学会。",_.jsx("br",{}),"Being good at talking is not innate; it's about knowing simple techniques that anyone can learn."]})]})]})}),_.jsx(Hi,{title:"技巧如同工具 | Skills as Tools",variant:"2",titleClassName:"text-blue-300",children:_.jsxs("div",{className:"flex items-start",children:[_.jsxs(go,{className:"bg-gradient-to-br from-blue-500/30 to-indigo-600/30",children:[_.jsx(Hx,{className:"h-6 w-6 text-blue-400"})," "]}),_.jsxs("div",{className:"ml-3",children:[_.jsxs("h4",{className:"font-medium mb-1 text-blue-200",children:["使用合适的工具",_.jsx("br",{}),"Using the Right Tools"]}),_.jsxs("p",{className:"text-bento-text/80 text-sm",children:["如果使用的技巧不适合，社交会很吃力。有了合适的技巧，社交会变得容易且有效。",_.jsx("br",{}),"If the techniques used are unsuitable, social interaction will be difficult. With the right techniques, social interaction becomes easy and effective."]})]})]})}),_.jsx(Hi,{title:"研究与可学性 | Research and Learnability",variant:"3",titleClassName:"text-purple-300",children:_.jsxs("div",{className:"flex items-start",children:[_.jsxs(go,{className:"bg-gradient-to-br from-purple-500/30 to-violet-600/30",children:[_.jsx(zx,{className:"h-6 w-6 text-purple-400"})," "]}),_.jsxs("div",{className:"ml-3",children:[_.jsxs("h4",{className:"font-medium mb-1 text-purple-200",children:["有效技巧已证实",_.jsx("br",{}),"Effective Techniques Proven"]}),_.jsxs("p",{className:"text-bento-text/80 text-sm",children:["研究证实了一些有效的社交技巧，且掌握它们只需较短时间。",_.jsx("br",{}),"Research has confirmed effective social techniques that can be mastered in a relatively short time."]})]})]})}),_.jsx(Hi,{title:"阅读不足，重在练习 | Reading is Not Enough, Practice is Key",variant:"2",titleClassName:"text-sky-300",children:_.jsxs("div",{className:"flex items-start",children:[_.jsxs(go,{className:"bg-gradient-to-br from-sky-500/30 to-blue-600/30",children:[_.jsx(Dx,{className:"h-6 w-6 text-sky-400"})," "]}),_.jsxs("div",{className:"ml-3",children:[_.jsxs("h4",{className:"font-medium mb-1 text-sky-200",children:["实践出真知",_.jsx("br",{}),"Practice Makes Perfect"]}),_.jsxs("p",{className:"text-bento-text/80 text-sm",children:["单纯阅读无法提升社交能力。需要结合阅读与坚持不懈的练习。",_.jsx("br",{}),"Simply reading cannot improve social skills. It requires combining reading with persistent and focused practice."]})]})]})}),_.jsx(Hi,{title:"实践计划 | Practice Plan",variant:"3",isLarge:!0,titleClassName:"text-indigo-300",children:_.jsxs("div",{className:"flex items-start",children:[_.jsxs(go,{className:"bg-gradient-to-br from-indigo-500/30 to-violet-600/30",children:[_.jsx(Ux,{className:"h-6 w-6 text-indigo-400"})," "]}),_.jsxs("div",{className:"ml-3 flex-grow",children:[" ",_.jsxs("h4",{className:"font-medium mb-1 text-indigo-200",children:["按计划行动，持续改进",_.jsx("br",{}),"Act According to the Plan, Continuously Improve"]}),_.jsxs("p",{className:"text-bento-text/80 text-sm mb-4",children:["按计划进行，将学到的技巧运用到日常生活中，持续练习，提升社交能力。",_.jsx("br",{}),"Follow the plan, apply the learned techniques to daily life, and practice consistently to improve social skills."]}),_.jsx("div",{className:"mt-4 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 p-4 rounded-lg",children:_.jsxs("p",{className:"text-bento-text/90 text-center italic text-sm",children:["要提高你的社交能力，既需要阅读更需要坚持不懈、专注地练习。",_.jsx("br",{}),"To improve your social skills, you need both reading and persistent, focused practice."]})})]})]})})]})}),ks=()=>{const a=ha();return x.useEffect(()=>{console.error("404 Error: User attempted to access non-existent route:",a.pathname)},[a.pathname]),_.jsx("div",{className:"min-h-screen flex flex-col items-center justify-center bg-bento-bg",children:_.jsxs("div",{className:"text-center",children:[_.jsx("h1",{className:"text-6xl font-bold mb-4",children:"404"}),_.jsx("p",{className:"text-xl text-gray-600 mb-4",children:"Oops! Page not found"}),_.jsx("a",{href:"/",className:"text-blue-500 hover:text-blue-700 underline",children:"Return to Home"})]})})};function se(a,o){o===void 0&&(o={});var i=o.insertAt;if(a&&typeof document<"u"){var l=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.type="text/css",i==="top"&&l.firstChild?l.insertBefore(c,l.firstChild):l.appendChild(c),c.styleSheet?c.styleSheet.cssText=a:c.appendChild(document.createTextNode(a))}}se(`.react-loading-indicator-normalize,
[class$=rli-bounding-box] {
  font-size: 1rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: unset;
  isolation: isolate;
}

.rli-d-i-b {
  display: inline-block;
}

.rli-text-format {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
}`);var gn=function(){return gn=Object.assign||function(a){for(var o,i=1,l=arguments.length;i<l;i++)for(var c in o=arguments[i])Object.prototype.hasOwnProperty.call(o,c)&&(a[c]=o[c]);return a},gn.apply(this,arguments)};function Ls(a){return Ls=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},Ls(a)}var kE=/^\s+/,_E=/\s+$/;function ct(a,o){if(o=o||{},(a=a||"")instanceof ct)return a;if(!(this instanceof ct))return new ct(a,o);var i=function(l){var c={r:0,g:0,b:0},f=1,d=null,g=null,m=null,h=!1,v=!1;typeof l=="string"&&(l=function(S){S=S.replace(kE,"").replace(_E,"").toLowerCase();var w,T=!1;if(Yf[S])S=Yf[S],T=!0;else if(S=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(w=dn.rgb.exec(S))?{r:w[1],g:w[2],b:w[3]}:(w=dn.rgba.exec(S))?{r:w[1],g:w[2],b:w[3],a:w[4]}:(w=dn.hsl.exec(S))?{h:w[1],s:w[2],l:w[3]}:(w=dn.hsla.exec(S))?{h:w[1],s:w[2],l:w[3],a:w[4]}:(w=dn.hsv.exec(S))?{h:w[1],s:w[2],v:w[3]}:(w=dn.hsva.exec(S))?{h:w[1],s:w[2],v:w[3],a:w[4]}:(w=dn.hex8.exec(S))?{r:Qe(w[1]),g:Qe(w[2]),b:Qe(w[3]),a:J0(w[4]),format:T?"name":"hex8"}:(w=dn.hex6.exec(S))?{r:Qe(w[1]),g:Qe(w[2]),b:Qe(w[3]),format:T?"name":"hex"}:(w=dn.hex4.exec(S))?{r:Qe(w[1]+""+w[1]),g:Qe(w[2]+""+w[2]),b:Qe(w[3]+""+w[3]),a:J0(w[4]+""+w[4]),format:T?"name":"hex8"}:(w=dn.hex3.exec(S))?{r:Qe(w[1]+""+w[1]),g:Qe(w[2]+""+w[2]),b:Qe(w[3]+""+w[3]),format:T?"name":"hex"}:!1}(l)),Ls(l)=="object"&&(ra(l.r)&&ra(l.g)&&ra(l.b)?(b=l.r,E=l.g,O=l.b,c={r:255*Yt(b,255),g:255*Yt(E,255),b:255*Yt(O,255)},h=!0,v=String(l.r).substr(-1)==="%"?"prgb":"rgb"):ra(l.h)&&ra(l.s)&&ra(l.v)?(d=Pi(l.s),g=Pi(l.v),c=function(S,w,T){S=6*Yt(S,360),w=Yt(w,100),T=Yt(T,100);var C=Math.floor(S),U=S-C,D=T*(1-w),Y=T*(1-U*w),P=T*(1-(1-U)*w),F=C%6,W=[T,Y,D,D,P,T][F],$=[P,T,T,Y,D,D][F],tt=[D,D,P,T,T,Y][F];return{r:255*W,g:255*$,b:255*tt}}(l.h,d,g),h=!0,v="hsv"):ra(l.h)&&ra(l.s)&&ra(l.l)&&(d=Pi(l.s),m=Pi(l.l),c=function(S,w,T){var C,U,D;function Y(W,$,tt){return tt<0&&(tt+=1),tt>1&&(tt-=1),tt<1/6?W+6*($-W)*tt:tt<.5?$:tt<2/3?W+($-W)*(2/3-tt)*6:W}if(S=Yt(S,360),w=Yt(w,100),T=Yt(T,100),w===0)C=U=D=T;else{var P=T<.5?T*(1+w):T+w-T*w,F=2*T-P;C=Y(F,P,S+1/3),U=Y(F,P,S),D=Y(F,P,S-1/3)}return{r:255*C,g:255*U,b:255*D}}(l.h,d,m),h=!0,v="hsl"),l.hasOwnProperty("a")&&(f=l.a));var b,E,O;return f=Ib(f),{ok:h,format:l.format||v,r:Math.min(255,Math.max(c.r,0)),g:Math.min(255,Math.max(c.g,0)),b:Math.min(255,Math.max(c.b,0)),a:f}}(a);this._originalInput=a,this._r=i.r,this._g=i.g,this._b=i.b,this._a=i.a,this._roundA=Math.round(100*this._a)/100,this._format=o.format||i.format,this._gradientType=o.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=i.ok}function Q0(a,o,i){a=Yt(a,255),o=Yt(o,255),i=Yt(i,255);var l,c,f=Math.max(a,o,i),d=Math.min(a,o,i),g=(f+d)/2;if(f==d)l=c=0;else{var m=f-d;switch(c=g>.5?m/(2-f-d):m/(f+d),f){case a:l=(o-i)/m+(o<i?6:0);break;case o:l=(i-a)/m+2;break;case i:l=(a-o)/m+4}l/=6}return{h:l,s:c,l:g}}function Z0(a,o,i){a=Yt(a,255),o=Yt(o,255),i=Yt(i,255);var l,c,f=Math.max(a,o,i),d=Math.min(a,o,i),g=f,m=f-d;if(c=f===0?0:m/f,f==d)l=0;else{switch(f){case a:l=(o-i)/m+(o<i?6:0);break;case o:l=(i-a)/m+2;break;case i:l=(a-o)/m+4}l/=6}return{h:l,s:c,v:g}}function K0(a,o,i,l){var c=[bn(Math.round(a).toString(16)),bn(Math.round(o).toString(16)),bn(Math.round(i).toString(16))];return l&&c[0].charAt(0)==c[0].charAt(1)&&c[1].charAt(0)==c[1].charAt(1)&&c[2].charAt(0)==c[2].charAt(1)?c[0].charAt(0)+c[1].charAt(0)+c[2].charAt(0):c.join("")}function $0(a,o,i,l){return[bn(tv(l)),bn(Math.round(a).toString(16)),bn(Math.round(o).toString(16)),bn(Math.round(i).toString(16))].join("")}function DE(a,o){o=o===0?0:o||10;var i=ct(a).toHsl();return i.s-=o/100,i.s=Js(i.s),ct(i)}function NE(a,o){o=o===0?0:o||10;var i=ct(a).toHsl();return i.s+=o/100,i.s=Js(i.s),ct(i)}function zE(a){return ct(a).desaturate(100)}function jE(a,o){o=o===0?0:o||10;var i=ct(a).toHsl();return i.l+=o/100,i.l=Js(i.l),ct(i)}function UE(a,o){o=o===0?0:o||10;var i=ct(a).toRgb();return i.r=Math.max(0,Math.min(255,i.r-Math.round(-o/100*255))),i.g=Math.max(0,Math.min(255,i.g-Math.round(-o/100*255))),i.b=Math.max(0,Math.min(255,i.b-Math.round(-o/100*255))),ct(i)}function LE(a,o){o=o===0?0:o||10;var i=ct(a).toHsl();return i.l-=o/100,i.l=Js(i.l),ct(i)}function HE(a,o){var i=ct(a).toHsl(),l=(i.h+o)%360;return i.h=l<0?360+l:l,ct(i)}function PE(a){var o=ct(a).toHsl();return o.h=(o.h+180)%360,ct(o)}function F0(a,o){if(isNaN(o)||o<=0)throw new Error("Argument to polyad must be a positive number");for(var i=ct(a).toHsl(),l=[ct(a)],c=360/o,f=1;f<o;f++)l.push(ct({h:(i.h+f*c)%360,s:i.s,l:i.l}));return l}function qE(a){var o=ct(a).toHsl(),i=o.h;return[ct(a),ct({h:(i+72)%360,s:o.s,l:o.l}),ct({h:(i+216)%360,s:o.s,l:o.l})]}function BE(a,o,i){o=o||6,i=i||30;var l=ct(a).toHsl(),c=360/i,f=[ct(a)];for(l.h=(l.h-(c*o>>1)+720)%360;--o;)l.h=(l.h+c)%360,f.push(ct(l));return f}function YE(a,o){o=o||6;for(var i=ct(a).toHsv(),l=i.h,c=i.s,f=i.v,d=[],g=1/o;o--;)d.push(ct({h:l,s:c,v:f})),f=(f+g)%1;return d}ct.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var a=this.toRgb();return(299*a.r+587*a.g+114*a.b)/1e3},getLuminance:function(){var a,o,i,l=this.toRgb();return a=l.r/255,o=l.g/255,i=l.b/255,.2126*(a<=.03928?a/12.92:Math.pow((a+.055)/1.055,2.4))+.7152*(o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4))+.0722*(i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4))},setAlpha:function(a){return this._a=Ib(a),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var a=Z0(this._r,this._g,this._b);return{h:360*a.h,s:a.s,v:a.v,a:this._a}},toHsvString:function(){var a=Z0(this._r,this._g,this._b),o=Math.round(360*a.h),i=Math.round(100*a.s),l=Math.round(100*a.v);return this._a==1?"hsv("+o+", "+i+"%, "+l+"%)":"hsva("+o+", "+i+"%, "+l+"%, "+this._roundA+")"},toHsl:function(){var a=Q0(this._r,this._g,this._b);return{h:360*a.h,s:a.s,l:a.l,a:this._a}},toHslString:function(){var a=Q0(this._r,this._g,this._b),o=Math.round(360*a.h),i=Math.round(100*a.s),l=Math.round(100*a.l);return this._a==1?"hsl("+o+", "+i+"%, "+l+"%)":"hsla("+o+", "+i+"%, "+l+"%, "+this._roundA+")"},toHex:function(a){return K0(this._r,this._g,this._b,a)},toHexString:function(a){return"#"+this.toHex(a)},toHex8:function(a){return function(o,i,l,c,f){var d=[bn(Math.round(o).toString(16)),bn(Math.round(i).toString(16)),bn(Math.round(l).toString(16)),bn(tv(c))];return f&&d[0].charAt(0)==d[0].charAt(1)&&d[1].charAt(0)==d[1].charAt(1)&&d[2].charAt(0)==d[2].charAt(1)&&d[3].charAt(0)==d[3].charAt(1)?d[0].charAt(0)+d[1].charAt(0)+d[2].charAt(0)+d[3].charAt(0):d.join("")}(this._r,this._g,this._b,this._a,a)},toHex8String:function(a){return"#"+this.toHex8(a)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*Yt(this._r,255))+"%",g:Math.round(100*Yt(this._g,255))+"%",b:Math.round(100*Yt(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*Yt(this._r,255))+"%, "+Math.round(100*Yt(this._g,255))+"%, "+Math.round(100*Yt(this._b,255))+"%)":"rgba("+Math.round(100*Yt(this._r,255))+"%, "+Math.round(100*Yt(this._g,255))+"%, "+Math.round(100*Yt(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(GE[K0(this._r,this._g,this._b,!0)]||!1)},toFilter:function(a){var o="#"+$0(this._r,this._g,this._b,this._a),i=o,l=this._gradientType?"GradientType = 1, ":"";if(a){var c=ct(a);i="#"+$0(c._r,c._g,c._b,c._a)}return"progid:DXImageTransform.Microsoft.gradient("+l+"startColorstr="+o+",endColorstr="+i+")"},toString:function(a){var o=!!a;a=a||this._format;var i=!1,l=this._a<1&&this._a>=0;return o||!l||a!=="hex"&&a!=="hex6"&&a!=="hex3"&&a!=="hex4"&&a!=="hex8"&&a!=="name"?(a==="rgb"&&(i=this.toRgbString()),a==="prgb"&&(i=this.toPercentageRgbString()),a!=="hex"&&a!=="hex6"||(i=this.toHexString()),a==="hex3"&&(i=this.toHexString(!0)),a==="hex4"&&(i=this.toHex8String(!0)),a==="hex8"&&(i=this.toHex8String()),a==="name"&&(i=this.toName()),a==="hsl"&&(i=this.toHslString()),a==="hsv"&&(i=this.toHsvString()),i||this.toHexString()):a==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return ct(this.toString())},_applyModification:function(a,o){var i=a.apply(null,[this].concat([].slice.call(o)));return this._r=i._r,this._g=i._g,this._b=i._b,this.setAlpha(i._a),this},lighten:function(){return this._applyModification(jE,arguments)},brighten:function(){return this._applyModification(UE,arguments)},darken:function(){return this._applyModification(LE,arguments)},desaturate:function(){return this._applyModification(DE,arguments)},saturate:function(){return this._applyModification(NE,arguments)},greyscale:function(){return this._applyModification(zE,arguments)},spin:function(){return this._applyModification(HE,arguments)},_applyCombination:function(a,o){return a.apply(null,[this].concat([].slice.call(o)))},analogous:function(){return this._applyCombination(BE,arguments)},complement:function(){return this._applyCombination(PE,arguments)},monochromatic:function(){return this._applyCombination(YE,arguments)},splitcomplement:function(){return this._applyCombination(qE,arguments)},triad:function(){return this._applyCombination(F0,[3])},tetrad:function(){return this._applyCombination(F0,[4])}},ct.fromRatio=function(a,o){if(Ls(a)=="object"){var i={};for(var l in a)a.hasOwnProperty(l)&&(i[l]=l==="a"?a[l]:Pi(a[l]));a=i}return ct(a,o)},ct.equals=function(a,o){return!(!a||!o)&&ct(a).toRgbString()==ct(o).toRgbString()},ct.random=function(){return ct.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},ct.mix=function(a,o,i){i=i===0?0:i||50;var l=ct(a).toRgb(),c=ct(o).toRgb(),f=i/100;return ct({r:(c.r-l.r)*f+l.r,g:(c.g-l.g)*f+l.g,b:(c.b-l.b)*f+l.b,a:(c.a-l.a)*f+l.a})},ct.readability=function(a,o){var i=ct(a),l=ct(o);return(Math.max(i.getLuminance(),l.getLuminance())+.05)/(Math.min(i.getLuminance(),l.getLuminance())+.05)},ct.isReadable=function(a,o,i){var l,c,f=ct.readability(a,o);switch(c=!1,(l=function(d){var g,m;return g=((d=d||{level:"AA",size:"small"}).level||"AA").toUpperCase(),m=(d.size||"small").toLowerCase(),g!=="AA"&&g!=="AAA"&&(g="AA"),m!=="small"&&m!=="large"&&(m="small"),{level:g,size:m}}(i)).level+l.size){case"AAsmall":case"AAAlarge":c=f>=4.5;break;case"AAlarge":c=f>=3;break;case"AAAsmall":c=f>=7}return c},ct.mostReadable=function(a,o,i){var l,c,f,d,g=null,m=0;c=(i=i||{}).includeFallbackColors,f=i.level,d=i.size;for(var h=0;h<o.length;h++)(l=ct.readability(a,o[h]))>m&&(m=l,g=ct(o[h]));return ct.isReadable(a,g,{level:f,size:d})||!c?g:(i.includeFallbackColors=!1,ct.mostReadable(a,["#fff","#000"],i))};var Yf=ct.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},GE=ct.hexNames=function(a){var o={};for(var i in a)a.hasOwnProperty(i)&&(o[a[i]]=i);return o}(Yf);function Ib(a){return a=parseFloat(a),(isNaN(a)||a<0||a>1)&&(a=1),a}function Yt(a,o){(function(l){return typeof l=="string"&&l.indexOf(".")!=-1&&parseFloat(l)===1})(a)&&(a="100%");var i=function(l){return typeof l=="string"&&l.indexOf("%")!=-1}(a);return a=Math.min(o,Math.max(0,parseFloat(a))),i&&(a=parseInt(a*o,10)/100),Math.abs(a-o)<1e-6?1:a%o/parseFloat(o)}function Js(a){return Math.min(1,Math.max(0,a))}function Qe(a){return parseInt(a,16)}function bn(a){return a.length==1?"0"+a:""+a}function Pi(a){return a<=1&&(a=100*a+"%"),a}function tv(a){return Math.round(255*parseFloat(a)).toString(16)}function J0(a){return Qe(a)/255}var qa,Ss,Es,dn=(Ss="[\\s|\\(]+("+(qa="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+qa+")[,|\\s]+("+qa+")\\s*\\)?",Es="[\\s|\\(]+("+qa+")[,|\\s]+("+qa+")[,|\\s]+("+qa+")[,|\\s]+("+qa+")\\s*\\)?",{CSS_UNIT:new RegExp(qa),rgb:new RegExp("rgb"+Ss),rgba:new RegExp("rgba"+Es),hsl:new RegExp("hsl"+Ss),hsla:new RegExp("hsla"+Es),hsv:new RegExp("hsv"+Ss),hsva:new RegExp("hsva"+Es),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function ra(a){return!!dn.CSS_UNIT.exec(a)}var VE=function(a,o){var i=(typeof a=="string"?parseInt(a):a)||0;if(i>=-5&&i<=5){var l=i,c=parseFloat(o),f=c+l*(c/5)*-1;return(f==0||f<=Number.EPSILON)&&(f=.1),{animationPeriod:f+"s"}}return{animationPeriod:o}},XE=function(a,o){var i=a||{},l="";switch(o){case"small":l="12px";break;case"medium":l="16px";break;case"large":l="20px";break;default:l=void 0}var c={};if(i.fontSize){var f=i.fontSize;c=function(d,g){var m={};for(var h in d)Object.prototype.hasOwnProperty.call(d,h)&&g.indexOf(h)<0&&(m[h]=d[h]);if(d!=null&&typeof Object.getOwnPropertySymbols=="function"){var v=0;for(h=Object.getOwnPropertySymbols(d);v<h.length;v++)g.indexOf(h[v])<0&&Object.prototype.propertyIsEnumerable.call(d,h[v])&&(m[h[v]]=d[h[v]])}return m}(i,["fontSize"]),l=f}return{fontSize:l,styles:c}},QE={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},ZE=function(a){var o=a.className,i=a.text,l=a.textColor,c=a.staticText,f=a.style;return i?J.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(o||"").trim(),style:gn(gn(gn({},c&&QE),l&&{color:l,mixBlendMode:"unset"}),f&&f)},typeof i=="string"&&i.length?i:"loading"):null},ev="rgb(50, 205, 50)";function KE(a,o){if(o===void 0&&(o=0),a.length===0)throw new Error("Input array cannot be empty!");var i=[];return function l(c,f){return f===void 0&&(f=0),i.push.apply(i,c),i.length<f&&l(i,f),i.slice(0,f)}(a,o)}se(`.atom-rli-bounding-box {
  --atom-phase1-rgb: 50, 205, 50;
  color: rgba(var(--atom-phase1-rgb), 1);
  font-size: 16px;
  position: relative;
  text-align: unset;
  isolation: isolate;
}
.atom-rli-bounding-box .atom-indicator {
  width: 6em;
  height: 6em;
  position: relative;
  perspective: 6em;
  overflow: hidden;
  color: rgba(var(--atom-phase1-rgb), 1);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0.48em;
  height: 0.48em;
  margin: auto;
  border-radius: 50%;
  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7eg;
}
.atom-rli-bounding-box .atom-indicator::before {
  filter: drop-shadow(0px 0px 0.0625em currentColor);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit {
  color: rgba(var(--atom-phase1-rgb), 0.85);
  border: 0;
  border-left: 0.4em solid currentColor;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 4.8em;
  height: 4.8em;
  background-color: transparent;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7fj, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gy;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  color: rgba(var(--atom-phase1-rgb), 0.18);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7hv;
  border: 0.125em solid currentColor;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::before {
  content: "";
  width: 0.192em;
  height: 0.192em;
  position: absolute;
  border-radius: 50%;
  top: -0.096em;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  color: rgba(var(--atom-phase1-rgb), 1);
  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;
  background-color: currentColor;
  transform: rotateY(-70deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7ew, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {
  --orbit-vector-factor: -1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {
  --orbit-vector-factor: 1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {
  --orbit-vector-factor: 0;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --atom-phase1-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase2-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase3-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase4-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7fj {
  from {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);
  }
}
@keyframes uxlv7ew {
  from {
    transform: rotateY(-70deg) rotateX(0deg);
  }
  to {
    transform: rotateY(-70deg) rotateX(-360deg);
  }
}
@keyframes uxlv7eg {
  100%, 0% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  20% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  25% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  45% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  50% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  70% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  75% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  95% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
}
@keyframes uxlv7gg {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
}
@keyframes uxlv7gy {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
}
@keyframes uxlv7hv {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
}`);ct(ev).toRgb();Array.from({length:4},function(a,o){return"--atom-phase".concat(o+1,"-rgb")});se(`.commet-rli-bounding-box {
  --commet-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  width: 6.85em;
  height: 6.85em;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
}
.commet-rli-bounding-box .commet-indicator {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  width: 6em;
  height: 6em;
  color: var(--commet-phase1-color);
  display: inline-block;
  isolation: isolate;
  position: absolute;
  z-index: 0;
  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite uxlv7cp;
}
.commet-rli-bounding-box .commet-indicator .commet-box {
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: uxlv7bx var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {
  width: 100%;
  height: 100%;
  animation-direction: normal;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {
  width: 70%;
  height: 70%;
  animation-direction: reverse;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: currentColor;
  position: absolute;
  top: -0.125em;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  box-sizing: border-box;
  border-style: solid;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.25em 0.25em 0 0;
  transform: rotateZ(-45deg);
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.25em 0 0 0.25em;
  transform: rotateZ(45deg);
}
.commet-rli-bounding-box .commet-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--commet-phase1-color);
}

@property --commet-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7bx {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7cp {
  100%, 0% {
    color: var(--commet-phase1-color);
  }
  20% {
    color: var(--commet-phase1-color);
  }
  25% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  45% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  50% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  70% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  75% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
  95% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
}`);Array.from({length:4},function(a,o){return"--commet-phase".concat(o+1,"-color")});se(`.OP-annulus-rli-bounding-box {
  --OP-annulus-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {
  animation: uxlv7n7 calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {
  stroke-dasharray: 1, 125;
  stroke-dashoffset: 0;
  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite uxlv7oa, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7p5;
  stroke-linecap: round;
}
.OP-annulus-rli-bounding-box .OP-annulus-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7n7 {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7oa {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -124px;
  }
}
@keyframes uxlv7p5 {
  100%, 0% {
    stroke: var(--OP-annulus-phase1-color);
  }
  22% {
    stroke: var(--OP-annulus-phase1-color);
  }
  25% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  42% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  50% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  72% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  75% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
  97% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
}`);Array.from({length:4},function(a,o){return"--OP-annulus-phase".concat(o+1,"-color")});function Of(a){return a&&a.Math===Math&&a}se(`.OP-dotted-rli-bounding-box {
  --OP-dotted-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-dotted-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite uxlv7nu, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7ol;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {
  transform: rotate(0deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {
  transform: rotate(30deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {
  transform: rotate(60deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {
  transform: rotate(90deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {
  transform: rotate(120deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {
  transform: rotate(150deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {
  transform: rotate(180deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {
  transform: rotate(210deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {
  transform: rotate(240deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {
  transform: rotate(270deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {
  transform: rotate(300deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {
  transform: rotate(330deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);
}

@property --OP-dotted-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7nu {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes uxlv7ol {
  100%, 0% {
    background-color: var(--OP-dotted-phase1-color);
  }
  22% {
    background-color: var(--OP-dotted-phase1-color);
  }
  25% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  47% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  50% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  72% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  75% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
  97% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
}`);Of(typeof window=="object"&&window)||Of(typeof self=="object"&&self)||Of(typeof global=="object"&&global)||function(){return this}()||Function("return this")();Array.from({length:4},function(a,o){return"--OP-dotted-phase".concat(o+1,"-color")});se(`.OP-spokes-rli-bounding-box {
  --OP-spokes-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  position: relative;
  color: var(--OP-spokes-phase1-color);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator {
  width: 4.8em;
  height: 4.8em;
  display: block;
  position: relative;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {
  position: absolute;
  height: 1.2em;
  width: 0.4em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto auto 50%;
  background-color: var(--OP-spokes-phase1-color);
  border-radius: 0.24em;
  opacity: 0;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite uxlv7pw, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7qn;
  transform-origin: left center;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {
  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {
  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {
  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {
  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {
  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {
  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {
  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {
  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {
  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {
  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {
  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {
  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--OP-spokes-phase1-color);
  z-index: -2;
}

@property --OP-spokes-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7pw {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes uxlv7qn {
  100%, 0% {
    background-color: var(--OP-spokes-phase1-color);
  }
  22% {
    background-color: var(--OP-spokes-phase1-color);
  }
  25% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  42% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  50% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  72% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  75% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
  97% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
}`);Array.from({length:4},function(a,o){return"--OP-spokes-phase".concat(o+1,"-color")});se(`.OP-annulus-dual-sectors-rli-bounding-box {
  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {
  width: 5em;
  height: 5em;
  display: inline-block;
  position: relative;
  z-index: 0;
  color: var(--OP-annulus-dual-sectors-phase1-color);
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-width: 0.34em;
  border-style: solid;
  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;
  background-color: transparent;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite uxlv7ra, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite uxlv7sv;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-dual-sectors-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7ra {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7sv {
  100%, 0% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  20% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  25% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  45% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  50% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  70% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  75% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  95% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
}`);Array.from({length:4},function(a,o){return"--OP-annulus-dual-sectors-phase".concat(o+1,"-color")});se(`.OP-annulus-sector-track-rli-bounding-box {
  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);
  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-sector-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {
  width: 100%;
  height: 100%;
  border-width: 0.34em;
  border-style: solid;
  border-radius: 50%;
  box-sizing: border-box;
  border-color: var(--OP-annulus-track-phase1-color);
  border-top-color: var(--OP-annulus-sector-phase1-color);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7rl, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7tf;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-track-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-sector-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7rl {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7tf {
  100%, 0% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  18% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  25% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  43% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  50% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  68% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  75% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
  93% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
}`);Array.from({length:4},function(a,o){return["--OP-annulus-track-phase".concat(o+1,"-color"),"--OP-annulus-sector-phase".concat(o+1,"-color")]});se(`.foursquare-rli-bounding-box {
  --four-square-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  color: var(--four-square-phase1-color);
  display: inline-block;
  overflow: hidden;
}
.foursquare-rli-bounding-box .foursquare-indicator {
  height: 5.3033008589em;
  width: 5.3033008589em;
  position: relative;
  display: block;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 2.5em;
  width: 2.5em;
  color: inherit;
  will-change: color, width, height;
  transform: rotate(45deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7dk, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7es;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.1875em;
  background-color: currentColor;
  animation: uxlv7dd var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {
  top: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {
  top: 0;
  right: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {
  bottom: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {
  bottom: 0;
  right: 0;
}

@property --four-square-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7dk {
  0% {
    width: 2.5em;
    height: 2.5em;
  }
  10% {
    width: 2.5em;
    height: 2.5em;
  }
  50% {
    width: 3.75em;
    height: 3.75em;
  }
  90% {
    width: 2.5em;
    height: 2.5em;
  }
  100% {
    width: 2.5em;
    height: 2.5em;
  }
}
@keyframes uxlv7dd {
  0% {
    transform: rotateZ(0deg);
  }
  10% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(90deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}
@keyframes uxlv7es {
  100%, 0% {
    color: var(--four-square-phase1-color);
  }
  20% {
    color: var(--four-square-phase1-color);
  }
  25% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  45% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  50% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  70% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  75% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
  95% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
}`);Array.from({length:4},function(a,o){return"--four-square-phase".concat(o+1,"-color")});se(`.mosaic-rli-bounding-box {
  --mosaic-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  color: var(--mosaic-phase1-color);
}
.mosaic-rli-bounding-box .mosaic-indicator {
  width: 5em;
  height: 5em;
  color: currentColor;
  display: grid;
  gap: 0.125em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b c" "d e f" "g h i";
  position: relative;
  z-index: 0;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {
  background-color: var(--mosaic-phase1-color);
  animation-name: uxlv7i4, uxlv7is;
  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in-out);
  animation-iteration-count: infinite;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
  grid-area: a;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
  grid-area: b;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {
  grid-area: c;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {
  grid-area: d;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {
  grid-area: e;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {
  grid-area: f;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {
  grid-area: g;
  animation-delay: 0s;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {
  grid-area: h;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {
  grid-area: i;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}

@property --mosaic-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7i4 {
  0%, 60%, 100% {
    transform: scale3D(1, 1, 1);
  }
  30% {
    transform: scale3D(0, 0, 1);
  }
}
@keyframes uxlv7is {
  100%, 0% {
    background-color: var(--mosaic-phase1-color);
  }
  25% {
    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));
  }
  50% {
    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));
  }
  75% {
    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));
  }
}`);var bo=Array.from({length:4},function(a,o){return"--mosaic-phase".concat(o+1,"-color")}),$E=function(a){var o,i=XE(a==null?void 0:a.style,a==null?void 0:a.size),l=i.styles,c=i.fontSize,f=a==null?void 0:a.easing,d=VE(a==null?void 0:a.speedPlus,"1.5s").animationPeriod,g=Math.round(parseFloat(d)/9*100)/100;g+="s";var m=function(h){var v={};if(h instanceof Array){for(var b=KE(h,bo.length),E=0;E<b.length&&!(E>=4);E++)v[bo[E]]=b[E];return v}try{if(typeof h!="string")throw new Error("Color String expected");for(var O=0;O<bo.length;O++)v[bo[O]]=h}catch(S){for(S instanceof Error?console.warn("[".concat(S.message,']: Received "').concat(typeof h,'" instead with value, ').concat(JSON.stringify(h))):console.warn("".concat(JSON.stringify(h)," received in <Mosaic /> indicator cannot be processed. Using default instead!")),O=0;O<bo.length;O++)v[bo[O]]=ev}return v}((o=a==null?void 0:a.color)!==null&&o!==void 0?o:"");return J.createElement("span",{className:"rli-d-i-b  mosaic-rli-bounding-box",style:gn(gn(gn(gn(gn({},c&&{fontSize:c}),d&&{"--rli-animation-duration":d}),f&&{"--rli-animation-function":f}),m),l),role:"status","aria-live":"polite","aria-label":"Loading"},J.createElement("span",{className:"rli-d-i-b mosaic-indicator",style:gn({},g&&{"--mosaic-skip-interval":g})},J.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube1"}),J.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube2"}),J.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube3"}),J.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube4"}),J.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube5"}),J.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube6"}),J.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube7"}),J.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube8"}),J.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube9"})),J.createElement(ZE,{staticText:!0,text:a==null?void 0:a.text,textColor:a==null?void 0:a.textColor}))};se(`.riple-rli-bounding-box {
  --riple-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--riple-phase1-color);
}
.riple-rli-bounding-box .riple-indicator {
  display: inline-block;
  width: 5em;
  height: 5em;
  position: relative;
  z-index: 0;
}
.riple-rli-bounding-box .riple-indicator .riple-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.riple-rli-bounding-box .riple-indicator .riple {
  --border-width: 0.25em;
  position: absolute;
  border: var(--border-width) solid var(--riple-phase1-color);
  opacity: 1;
  border-radius: 50%;
  will-change: top, right, left, bottom, border-color;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7i1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7io;
}
.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);
}

@property --riple-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7i1 {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}
@keyframes uxlv7io {
  100%, 0% {
    border-color: var(--riple-phase1-color);
  }
  24.9% {
    border-color: var(--riple-phase1-color);
  }
  25% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  49.9% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  50% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  74.9% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  75% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
  99.9% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
}`);Array.from({length:4},function(a,o){return"--riple-phase".concat(o+1,"-color")});se(`.pulsate-rli-bounding-box {
  --TD-pulsate-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  color: var(--TD-pulsate-phase1-color);
}
.pulsate-rli-bounding-box .pulsate-indicator {
  width: 4.4em;
  height: 1.1em;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {
  width: 1.1em;
  height: 1.1em;
  border-radius: 50%;
  background-color: var(--TD-pulsate-phase1-color);
  transform: scale(0);
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7s0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7to;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);
}
.pulsate-rli-bounding-box .pulsate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: sans-serif;
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --TD-pulsate-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7s0 {
  0%, 90%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
@keyframes uxlv7to {
  0%, 100% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  24.9% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  25% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  49.9% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  50% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  74.9% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  75% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
  99.9% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
}`);Array.from({length:4},function(a,o){return"--TD-pulsate-phase".concat(o+1,"-color")});se(`.brick-stack-rli-bounding-box {
  --TD-brick-stack-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-brick-stack-phase1-color);
}
.brick-stack-rli-bounding-box .brick-stack-indicator {
  width: 2.8em;
  height: 2.8em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.brick-stack-rli-bounding-box .brick-stack {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite uxlv7tu, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite uxlv7us;
}

@property --TD-brick-stack-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7tu {
  0% {
    background-position: 0 0, 0 100%, 100% 100%;
  }
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
}
@keyframes uxlv7us {
  100%, 0% {
    color: var(--TD-brick-stack-phase1-color);
  }
  20% {
    color: var(--TD-brick-stack-phase1-color);
  }
  25% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  45% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  50% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  70% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  75% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
  95% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
}`);Array.from({length:4},function(a,o){return"--TD-brick-stack-phase".concat(o+1,"-color")});se(`.bob-rli-bounding-box {
  --TD-bob-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-bob-phase1-color);
}
.bob-rli-bounding-box .bob-indicator {
  width: 4.4em;
  height: 2.2em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bob-rli-bounding-box .bob-indicator .bobbing,
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  width: 1.1em;
  height: 100%;
  display: grid;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite uxlv7u0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite uxlv7vq;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  content: "";
  grid-area: 1/1;
}
.bob-rli-bounding-box .bob-indicator .bobbing {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
  transform: translateX(150%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);
  transform: translateX(300%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}

@property --TD-bob-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7u0 {
  100%, 0% {
    background-position: 50% 50%;
  }
  15% {
    background-position: 50% 10%;
  }
  30% {
    background-position: 50% 100%;
  }
  40% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 90%;
  }
  70% {
    background-position: 50% 10%;
  }
  98% {
    background-position: 50% 50%;
  }
}
@keyframes uxlv7vq {
  100%, 0% {
    color: var(--TD-bob-phase1-color);
  }
  22% {
    color: var(--TD-bob-phase1-color);
  }
  25% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  47% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  50% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  72% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  75% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
  97% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
}`);Array.from({length:4},function(a,o){return"--TD-bob-phase".concat(o+1,"-color")});se(`.bounce-rli-bounding-box {
  --TD-bounce-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--TD-bounce-phase1-color);
  display: inline-block;
  padding-bottom: 0.25125em;
}
.bounce-rli-bounding-box .wrapper {
  --dot1-delay: 0s;
  --dot1-x-offset: 0.55em;
  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);
  --dot2-x-offset: 2.2em;
  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);
  --dot3-x-offset: 3.85em;
  width: 5.5em;
  height: 3.125em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bounce-rli-bounding-box .wrapper .group {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.bounce-rli-bounding-box .wrapper .group .dot {
  width: 1.1em;
  height: 1.1em;
  position: absolute;
  border-radius: 50%;
  background-color: var(--TD-bounce-phase1-color);
  transform-origin: 50%;
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7wc, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite uxlv7x6;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .shadow {
  width: 1.1em;
  height: 0.22em;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 101%;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7ww;
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay);
}

@property --TD-bounce-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 0.5s;
}
@keyframes uxlv7wc {
  0% {
    top: 0%;
  }
  60% {
    height: 1.25em;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 100%;
    height: 0.22em;
    transform: scaleX(1.5);
    filter: blur(0.4px);
  }
}
@keyframes uxlv7ww {
  0% {
    transform: scaleX(0.2);
    opacity: 0.2;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    transform: scaleX(1.5);
    opacity: 0.6;
  }
}
@keyframes uxlv7x6 {
  0%, 100% {
    background-color: var(--TD-bounce-phase1-color);
  }
  20% {
    background-color: var(--TD-bounce-phase1-color);
  }
  25% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  45% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  50% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  70% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  75% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
  95% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
}`);Array.from({length:4},function(a,o){return"--TD-bounce-phase".concat(o+1,"-color")});se(`.blink-blur-rli-bounding-box {
  --shape-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--shape-phase1-color);
}
.blink-blur-rli-bounding-box .blink-blur-indicator {
  isolation: isolate;
  display: flex;
  flex-direction: row;
  -moz-column-gap: 0.4em;
       column-gap: 0.4em;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {
  --x-deg: -20deg;
  width: 1.8em;
  height: 2.25em;
  border-radius: 0.25em;
  color: inherit;
  transform: skewX(var(--x-deg));
  background-color: var(--shape-phase1-color);
  animation-name: uxlv7id, uxlv7jl;
  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in);
  animation-iteration-count: infinite;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);
}

@property --shape-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7id {
  100%, 0% {
    opacity: 0.3;
    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);
    transform: skewX(var(--x-deg)) scale(1.2, 1.45);
  }
  39% {
    opacity: 0.8;
  }
  40%, 41%, 42% {
    opacity: 0;
  }
  43% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
    filter: blur(0em) drop-shadow(0 0 0em);
    transform: skewX(var(--x-deg)) scale(1, 1);
  }
}
@keyframes uxlv7jl {
  100%, 0% {
    color: var(--shape-phase1-color);
    background-color: var(--shape-phase1-color);
  }
  25% {
    color: var(--shape-phase2-color, var(--shape-phase1-color));
    background-color: var(--shape-phase2-color, var(--shape-phase1-color));
  }
  50% {
    color: var(--shape-phase3-color, var(--shape-phase1-color));
    background-color: var(--shape-phase3-color, var(--shape-phase1-color));
  }
  75% {
    color: var(--shape-phase4-color, var(--shape-phase1-color));
    background-color: var(--shape-phase4-color, var(--shape-phase1-color));
  }
}`);Array.from({length:4},function(a,o){return"--shape-phase".concat(o+1,"-color")});se(`.trophy-spin-rli-bounding-box {
  --trophySpin-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  isolation: isolate;
  color: var(--trophySpin-phase1-color);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator {
  width: 4em;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: block;
  margin: 0 auto;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {
  display: block;
  width: 4em;
  height: 0.5em;
  background: var(--trophySpin-phase1-color);
  animation: uxlv7ki var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, uxlv7l2 calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, uxlv7ly calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);
}

@property --trophySpin-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2.5s;
}
@keyframes uxlv7ki {
  to {
    transform: rotateY(1turn) rotateX(-25deg);
  }
}
@keyframes uxlv7l2 {
  100%, 0% {
    filter: brightness(1);
    opacity: 1;
  }
  15% {
    filter: brightness(1);
  }
  25% {
    opacity: 0.96;
  }
  30% {
    filter: brightness(0.92);
  }
  50% {
    filter: brightness(0.7);
    opacity: 1;
  }
  75% {
    filter: brightness(0.92);
    opacity: 0.96;
  }
  90% {
    filter: brightness(1);
  }
}
@keyframes uxlv7ly {
  100%, 0% {
    background-color: var(--trophySpin-phase1-color);
  }
  18% {
    background-color: var(--trophySpin-phase1-color);
  }
  25% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  43% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  50% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  68% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  75% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
  93% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
}`);Array.from({length:4},function(a,o){return"--trophySpin-phase".concat(o+1,"-color")});se(`.slab-rli-bounding-box {
  --slab-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--slab-phase1-color);
  position: relative;
}
.slab-rli-bounding-box .slab-indicator {
  position: relative;
  display: block;
  width: 7em;
  height: 4em;
  margin: 0 auto;
  overflow: hidden;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper {
  width: 4em;
  height: 4em;
  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--slab-phase1-color);
  opacity: 0;
  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);
  transform-origin: 0% 0%;
  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite uxlv7md, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite uxlv7n0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {
  animation-delay: 0s;
}

@property --slab-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration-unitless {
  syntax: "<number>";
  inherits: true;
  initial-value: 3;
}
@keyframes uxlv7md {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-40%) rotateX(0deg);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-400%) rotateX(0deg);
    opacity: 0;
  }
}
@keyframes uxlv7n0 {
  100%, 0% {
    background-color: var(--slab-phase1-color);
  }
  24.9% {
    background-color: var(--slab-phase1-color);
  }
  25% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  49.9% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  50% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  74.9% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  75% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
  99.9% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
}`);Array.from({length:4},function(a,o){return"--slab-phase".concat(o+1,"-color")});se(`.lifeline-rli-bounding-box {
  --life-line-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  isolation: isolate;
  color: var(--life-line-phase1-color);
}
.lifeline-rli-bounding-box .lifeline-indicator {
  position: relative;
  text-align: center;
}
.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {
  stroke-dasharray: 474.7616760254 30.3039367676;
  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite uxlv7k3, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite uxlv7kg;
}
.lifeline-rli-bounding-box .lifeline-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --life-line-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2s;
}
@keyframes uxlv7k3 {
  to {
    stroke-dashoffset: -1010.1312255859;
  }
}
@keyframes uxlv7kg {
  100%, 0% {
    color: var(--life-line-phase1-color);
  }
  20% {
    color: var(--life-line-phase1-color);
  }
  25% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  45% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  50% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  70% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  75% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
  95% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
}`);Array.from({length:4},function(a,o){return"--life-line-phase".concat(o+1,"-color")});const FE=()=>_.jsx("footer",{className:"w-full max-w-7xl px-4 md:px-6 mx-auto",children:_.jsx("div",{className:"flex justify-center items-center py-3 mb-4",children:_.jsx($E,{color:"#a855f74d"})})});function JE(a){return a?a.split("-").map(l=>l.charAt(0).toUpperCase()+l.slice(1)).join(""):""}const WE=()=>{const{pageSlug:a}=DS(),[o,i]=x.useState(null),[l,c]=x.useState(!0),[f,d]=x.useState(null);if(!a)return console.warn("DynamicPageLoader received no slug."),_.jsx(ks,{});const m=`./pages/${JE(a)}.tsx`;if(x.useEffect(()=>{if(i(null),c(!0),d(null),!a){console.warn("DynamicPageLoader received no slug."),d(new Error("Page slug is missing")),c(!1);return}import(m).then(v=>{v&&typeof v.default=="function"?(i(v),c(!1),d(null)):(console.error(`Module found at "${m}" but default export is not a valid component.`),d(new Error("Invalid component module")),c(!1))}).catch(v=>{console.error(`Failed to load component for slug "${a}" from path "${m}":`,v),d(v),c(!1)})},[a,m]),l)return _.jsx(FE,{});if(f)return _.jsx(ks,{});const h=o==null?void 0:o.default;return h?_.jsx(h,{}):(console.warn("DynamicPageLoader in unexpected state: not loading, no error, but no PageComponent."),_.jsx(ks,{}))},IE=new tS,tT=()=>_.jsx(nS,{client:IE,children:_.jsxs(kw,{children:[_.jsx(A2,{}),_.jsx(r5,{}),_.jsx(bE,{children:_.jsxs("div",{className:"min-h-screen bg-bento-bg",children:[_.jsx(RE,{}),_.jsx("main",{children:_.jsx(x.Suspense,{fallback:_.jsx("div",{children:"Loading..."}),children:_.jsxs(ZS,{children:[_.jsx(Rs,{path:"/",element:_.jsx(ME,{})}),_.jsx(Rs,{path:"/:pageSlug",element:_.jsx(WE,{})}),_.jsx(Rs,{path:"*",element:_.jsx(ks,{})})]})})}),_.jsx(CE,{})]})})]})});x1.createRoot(document.getElementById("root")).render(_.jsx(x.StrictMode,{children:_.jsx(tT,{})}));
