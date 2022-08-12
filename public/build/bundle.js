var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function s(t){t.forEach(e)}function r(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let o,a;function c(t,e){return o||(o=document.createElement("a")),o.href=e,t===o.href}function u(t,e,n,s){if(t){const r=h(t,e,n,s);return t[0](r)}}function h(t,e,n,s){return t[1]&&s?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](s(e))):n.ctx}function l(t,e,n,s){if(t[2]&&s){const r=t[2](s(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let s=0;s<n;s+=1)t[s]=e.dirty[s]|r[s];return t}return e.dirty|r}return e.dirty}function d(t,e,n,s,r,i){if(r){const o=h(e,n,s,i);t.p(o,r)}}function f(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}function p(t,e){t.appendChild(e)}function g(t,e,n){t.insertBefore(e,n||null)}function m(t){t.parentNode.removeChild(t)}function y(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function v(t){return document.createElement(t)}function w(t){return document.createTextNode(t)}function b(){return w(" ")}function E(){return w("")}function T(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function _(t){return function(e){return e.preventDefault(),t.call(this,e)}}function I(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function C(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function S(t,e,n,s){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}function A(t,e,n){t.classList[n?"add":"remove"](e)}function k(t){a=t}function D(){if(!a)throw new Error("Function called outside component initialization");return a}function N(){const t=D();return(e,n,{cancelable:s=!1}={})=>{const r=t.$$.callbacks[e];if(r){const i=function(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,s,e),r}(e,n,{cancelable:s});return r.slice().forEach((e=>{e.call(t,i)})),!i.defaultPrevented}return!0}}const x=[],R=[],O=[],L=[],M=Promise.resolve();let P=!1;function F(t){O.push(t)}const V=new Set;let U=0;function $(){const t=a;do{for(;U<x.length;){const t=x[U];U++,k(t),B(t.$$)}for(k(null),x.length=0,U=0;R.length;)R.pop()();for(let t=0;t<O.length;t+=1){const e=O[t];V.has(e)||(V.add(e),e())}O.length=0}while(x.length);for(;L.length;)L.pop()();P=!1,V.clear(),k(t)}function B(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(F)}}const j=new Set;let q;function K(){q={r:0,c:[],p:q}}function z(){q.r||s(q.c),q=q.p}function G(t,e){t&&t.i&&(j.delete(t),t.i(e))}function H(t,e,n,s){if(t&&t.o){if(j.has(t))return;j.add(t),q.c.push((()=>{j.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}else s&&s()}function W(t){t&&t.c()}function Q(t,n,i,o){const{fragment:a,on_mount:c,on_destroy:u,after_update:h}=t.$$;a&&a.m(n,i),o||F((()=>{const n=c.map(e).filter(r);u?u.push(...n):s(n),t.$$.on_mount=[]})),h.forEach(F)}function X(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Y(t,e){-1===t.$$.dirty[0]&&(x.push(t),P||(P=!0,M.then($)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function J(e,r,i,o,c,u,h,l=[-1]){const d=a;k(e);const f=e.$$={fragment:null,ctx:null,props:u,update:t,not_equal:c,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(d?d.$$.context:[])),callbacks:n(),dirty:l,skip_bound:!1,root:r.target||d.$$.root};h&&h(f.root);let p=!1;if(f.ctx=i?i(e,r.props||{},((t,n,...s)=>{const r=s.length?s[0]:n;return f.ctx&&c(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),p&&Y(e,t)),n})):[],f.update(),p=!0,s(f.before_update),f.fragment=!!o&&o(f.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);f.fragment&&f.fragment.l(t),t.forEach(m)}else f.fragment&&f.fragment.c();r.intro&&G(e.$$.fragment),Q(e,r.target,r.anchor,r.customElement),$()}k(d)}class Z{$destroy(){X(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const tt=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=63&r|128):55296==(64512&r)&&s+1<t.length&&56320==(64512&t.charCodeAt(s+1))?(r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++s)),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=63&r|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=63&r|128)}return e},et={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let e=0;e<t.length;e+=3){const r=t[e],i=e+1<t.length,o=i?t[e+1]:0,a=e+2<t.length,c=a?t[e+2]:0,u=r>>2,h=(3&r)<<4|o>>4;let l=(15&o)<<2|c>>6,d=63&c;a||(d=64,i||(l=64)),s.push(n[u],n[h],n[l],n[d])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(tt(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((31&r)<<6|63&i)}else if(r>239&&r<365){const i=((7&r)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[s++]=String.fromCharCode(55296+(i>>10)),e[s++]=String.fromCharCode(56320+(1023&i))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((15&r)<<12|(63&i)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let e=0;e<t.length;){const r=n[t.charAt(e++)],i=e<t.length?n[t.charAt(e)]:0;++e;const o=e<t.length?n[t.charAt(e)]:64;++e;const a=e<t.length?n[t.charAt(e)]:64;if(++e,null==r||null==i||null==o||null==a)throw Error();const c=r<<2|i>>4;if(s.push(c),64!==o){const t=i<<4&240|o>>2;if(s.push(t),64!==a){const t=o<<6&192|a;s.push(t)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},nt=function(t){return function(t){const e=tt(t);return et.encodeByteArray(e,!0)}(t).replace(/\./g,"")};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class st{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function rt(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}class it extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,it.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ot.prototype.create)}}class ot{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},s=`${this.service}/${t}`,r=this.errors[t],i=r?function(t,e){return t.replace(at,((t,n)=>{const s=e[n];return null!=s?String(s):`<${n}?>`}))}(r,n):"Error",o=`${this.serviceName}: ${i} (${s}).`;return new it(s,o,n)}}const at=/\{\$([^}]+)}/g;function ct(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const n=t[r],i=e[r];if(ut(n)&&ut(i)){if(!ct(n,i))return!1}else if(n!==i)return!1}for(const t of s)if(!n.includes(t))return!1;return!0}function ut(t){return null!==t&&"object"==typeof t}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function ht(t){return t&&t._delegate?t._delegate:t}class lt{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const dt="[DEFAULT]";
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ft{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new st;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),s=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(s)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(s)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t))try{this.getOrInitializeService({instanceIdentifier:dt})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t="[DEFAULT]"){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t="[DEFAULT]"){return this.instances.has(t)}getOptions(t="[DEFAULT]"){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(s)}return s}onInit(t,e){var n;const s=this.normalizeInstanceIdentifier(e),r=null!==(n=this.onInitCallbacks.get(s))&&void 0!==n?n:new Set;r.add(t),this.onInitCallbacks.set(s,r);const i=this.instances.get(s);return i&&t(i,s),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(s=t,s===dt?void 0:s),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var s;return n||null}normalizeInstanceIdentifier(t="[DEFAULT]"){return this.component?this.component.multipleInstances?t:dt:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class pt{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new ft(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var gt;!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(gt||(gt={}));const mt={debug:gt.DEBUG,verbose:gt.VERBOSE,info:gt.INFO,warn:gt.WARN,error:gt.ERROR,silent:gt.SILENT},yt=gt.INFO,vt={[gt.DEBUG]:"log",[gt.VERBOSE]:"log",[gt.INFO]:"info",[gt.WARN]:"warn",[gt.ERROR]:"error"},wt=(t,e,...n)=>{if(e<t.logLevel)return;const s=(new Date).toISOString(),r=vt[e];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[r](`[${s}]  ${t.name}:`,...n)};class bt{constructor(t){this.name=t,this._logLevel=yt,this._logHandler=wt,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in gt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?mt[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,gt.DEBUG,...t),this._logHandler(this,gt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,gt.VERBOSE,...t),this._logHandler(this,gt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,gt.INFO,...t),this._logHandler(this,gt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,gt.WARN,...t),this._logHandler(this,gt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,gt.ERROR,...t),this._logHandler(this,gt.ERROR,...t)}}let Et,Tt;const _t=new WeakMap,It=new WeakMap,Ct=new WeakMap,St=new WeakMap,At=new WeakMap;let kt={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return It.get(t);if("objectStoreNames"===e)return t.objectStoreNames||Ct.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return xt(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function Dt(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Tt||(Tt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(Rt(this),e),xt(_t.get(this))}:function(...e){return xt(t.apply(Rt(this),e))}:function(e,...n){const s=t.call(Rt(this),e,...n);return Ct.set(s,e.sort?e.sort():[e]),xt(s)}}function Nt(t){return"function"==typeof t?Dt(t):(t instanceof IDBTransaction&&function(t){if(It.has(t))return;const e=new Promise(((e,n)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",i),t.removeEventListener("abort",i)},r=()=>{e(),s()},i=()=>{n(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",i),t.addEventListener("abort",i)}));It.set(t,e)}(t),e=t,(Et||(Et=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>e instanceof t))?new Proxy(t,kt):t);var e}function xt(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",i)},r=()=>{e(xt(t.result)),s()},i=()=>{n(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",i)}));return e.then((e=>{e instanceof IDBCursor&&_t.set(e,t)})).catch((()=>{})),At.set(e,t),e}(t);if(St.has(t))return St.get(t);const e=Nt(t);return e!==t&&(St.set(t,e),At.set(e,t)),e}const Rt=t=>At.get(t);const Ot=["get","getKey","getAll","getAllKeys","count"],Lt=["put","add","delete","clear"],Mt=new Map;function Pt(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(Mt.get(e))return Mt.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=Lt.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!r&&!Ot.includes(n))return;const i=async function(t,...e){const i=this.transaction(t,r?"readwrite":"readonly");let o=i.store;return s&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),r&&i.done]))[0]};return Mt.set(e,i),i}kt=(t=>({...t,get:(e,n,s)=>Pt(e,n)||t.get(e,n,s),has:(e,n)=>!!Pt(e,n)||t.has(e,n)}))(kt);
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Ft{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const Vt="@firebase/app",Ut="0.7.30",$t=new bt("@firebase/app"),Bt="[DEFAULT]",jt={[Vt]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},qt=new Map,Kt=new Map;function zt(t,e){try{t.container.addComponent(e)}catch(n){$t.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Gt(t){const e=t.name;if(Kt.has(e))return $t.debug(`There were multiple attempts to register component ${e}.`),!1;Kt.set(e,t);for(const e of qt.values())zt(e,t);return!0}function Ht(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Wt=new ot("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Qt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new lt("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Wt.create("app-deleted",{appName:this._name})}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Xt="9.9.2";function Yt(t="[DEFAULT]"){const e=qt.get(t);if(!e)throw Wt.create("no-app",{appName:t});return e}function Jt(t,e,n){var s;let r=null!==(s=jt[t])&&void 0!==s?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const t=[`Unable to register library "${r}" with version "${e}":`];return i&&t.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void $t.warn(t.join(" "))}Gt(new lt(`${r}-version`,(()=>({library:r,version:e})),"VERSION"))}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Zt="firebase-heartbeat-store";let te=null;function ee(){return te||(te=function(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=xt(o);return s&&o.addEventListener("upgradeneeded",(t=>{s(xt(o.result),t.oldVersion,t.newVersion,xt(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((t=>{i&&t.addEventListener("close",(()=>i())),r&&t.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),a}("firebase-heartbeat-database",1,{upgrade:(t,e)=>{if(0===e)t.createObjectStore(Zt)}}).catch((t=>{throw Wt.create("idb-open",{originalErrorMessage:t.message})}))),te}async function ne(t,e){var n;try{const n=(await ee()).transaction(Zt,"readwrite"),s=n.objectStore(Zt);return await s.put(e,se(t)),n.done}catch(t){if(t instanceof it)$t.warn(t.message);else{const e=Wt.create("idb-set",{originalErrorMessage:null===(n=t)||void 0===n?void 0:n.message});$t.warn(e.message)}}}function se(t){return`${t.name}!${t.options.appId}`}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class re{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new oe(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=ie();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==e&&!this._heartbeatsCache.heartbeats.some((t=>t.date===e)))return this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=ie(),{heartbeatsToSend:e,unsentEntries:n}=function(t,e=1024){const n=[];let s=t.slice();for(const r of t){const t=n.find((t=>t.agent===r.agent));if(t){if(t.dates.push(r.date),ae(n)>e){t.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),ae(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}(this._heartbeatsCache.heartbeats),s=nt(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function ie(){return(new Date).toISOString().substring(0,10)}class oe{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return"object"==typeof indexedDB&&new Promise(((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var t;e((null===(t=r.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const t=await async function(t){var e;try{return(await ee()).transaction(Zt).objectStore(Zt).get(se(t))}catch(t){if(t instanceof it)$t.warn(t.message);else{const n=Wt.create("idb-get",{originalErrorMessage:null===(e=t)||void 0===e?void 0:e.message});$t.warn(n.message)}}}(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return ne(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return ne(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function ae(t){return nt(JSON.stringify({version:2,heartbeats:t})).length}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var ce;ce="",Gt(new lt("platform-logger",(t=>new Ft(t)),"PRIVATE")),Gt(new lt("heartbeat",(t=>new re(t)),"PRIVATE")),Jt(Vt,Ut,ce),Jt(Vt,Ut,"esm2017"),Jt("fire-js","");var ue,he="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},le=le||{},de=he||self;function fe(){}function pe(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function ge(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var me="closure_uid_"+(1e9*Math.random()>>>0),ye=0;function ve(t,e,n){return t.call.apply(t.bind,arguments)}function we(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,s),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function be(t,e,n){return(be=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ve:we).apply(null,arguments)}function Ee(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function Te(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,s){for(var r=Array(arguments.length-2),i=2;i<arguments.length;i++)r[i-2]=arguments[i];return e.prototype[n].apply(t,r)}}function _e(){this.s=this.s,this.o=this.o}_e.prototype.s=!1,_e.prototype.na=function(){var t;!this.s&&(this.s=!0,this.M(),0)&&(t=this,Object.prototype.hasOwnProperty.call(t,me)&&t[me]||(t[me]=++ye))},_e.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ie=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Ce=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const s=t.length,r="string"==typeof t?t.split(""):t;for(let i=0;i<s;i++)i in r&&e.call(n,r[i],i,t)};function Se(t){return Array.prototype.concat.apply([],arguments)}function Ae(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function ke(t){return/^[\s\xa0]*$/.test(t)}var De,Ne=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function xe(t,e){return-1!=t.indexOf(e)}function Re(t,e){return t<e?-1:t>e?1:0}t:{var Oe=de.navigator;if(Oe){var Le=Oe.userAgent;if(Le){De=Le;break t}}De=""}function Me(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Pe(t){const e={};for(const n in t)e[n]=t[n];return e}var Fe="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ve(t,e){let n,s;for(let e=1;e<arguments.length;e++){for(n in s=arguments[e],s)t[n]=s[n];for(let e=0;e<Fe.length;e++)n=Fe[e],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Ue(t){return Ue[" "](t),t}Ue[" "]=fe;var $e,Be,je=xe(De,"Opera"),qe=xe(De,"Trident")||xe(De,"MSIE"),Ke=xe(De,"Edge"),ze=Ke||qe,Ge=xe(De,"Gecko")&&!(xe(De.toLowerCase(),"webkit")&&!xe(De,"Edge"))&&!(xe(De,"Trident")||xe(De,"MSIE"))&&!xe(De,"Edge"),He=xe(De.toLowerCase(),"webkit")&&!xe(De,"Edge");function We(){var t=de.document;return t?t.documentMode:void 0}t:{var Qe="",Xe=(Be=De,Ge?/rv:([^\);]+)(\)|;)/.exec(Be):Ke?/Edge\/([\d\.]+)/.exec(Be):qe?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Be):He?/WebKit\/(\S+)/.exec(Be):je?/(?:Version)[ \/]?(\S+)/.exec(Be):void 0);if(Xe&&(Qe=Xe?Xe[1]:""),qe){var Ye=We();if(null!=Ye&&Ye>parseFloat(Qe)){$e=String(Ye);break t}}$e=Qe}var Je,Ze={};function tn(){return function(t){var e=Ze;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){let t=0;const e=Ne(String($e)).split("."),n=Ne("9").split("."),s=Math.max(e.length,n.length);for(let o=0;0==t&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],0==r[0].length&&0==i[0].length)break;t=Re(0==r[1].length?0:parseInt(r[1],10),0==i[1].length?0:parseInt(i[1],10))||Re(0==r[2].length,0==i[2].length)||Re(r[2],i[2]),r=r[3],i=i[3]}while(0==t)}return 0<=t}))}if(de.document&&qe){var en=We();Je=en||(parseInt($e,10)||void 0)}else Je=void 0;var nn=Je,sn=function(){if(!de.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{de.addEventListener("test",fe,e),de.removeEventListener("test",fe,e)}catch(t){}return t}();function rn(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function on(t,e){if(rn.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Ge){t:{try{Ue(e.nodeName);var r=!0;break t}catch(t){}r=!1}r||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=void 0!==s.clientX?s.clientX:s.pageX,this.clientY=void 0!==s.clientY?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:an[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&on.Z.h.call(this)}}rn.prototype.h=function(){this.defaultPrevented=!0},Te(on,rn);var an={2:"touch",3:"pen",4:"mouse"};on.prototype.h=function(){on.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var cn="closure_listenable_"+(1e6*Math.random()|0),un=0;function hn(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ia=r,this.key=++un,this.ca=this.fa=!1}function ln(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function dn(t){this.src=t,this.g={},this.h=0}function fn(t,e){var n=e.type;if(n in t.g){var s,r=t.g[n],i=Ie(r,e);(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(ln(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function pn(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==s)return r}return-1}dn.prototype.add=function(t,e,n,s,r){var i=t.toString();(t=this.g[i])||(t=this.g[i]=[],this.h++);var o=pn(t,e,s,r);return-1<o?(e=t[o],n||(e.fa=!1)):((e=new hn(e,this.src,i,!!s,r)).fa=n,t.push(e)),e};var gn="closure_lm_"+(1e6*Math.random()|0),mn={};function yn(t,e,n,s,r){if(s&&s.once)return wn(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)yn(t,e[i],n,s,r);return null}return n=Sn(n),t&&t[cn]?t.N(e,n,ge(s)?!!s.capture:!!s,r):vn(t,e,n,!1,s,r)}function vn(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=ge(r)?!!r.capture:!!r,a=In(t);if(a||(t[gn]=a=new dn(t)),(n=a.add(e,n,s,o,i)).proxy)return n;if(s=function(){function t(n){return e.call(t.src,t.listener,n)}var e=_n;return t}(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)sn||(r=o),void 0===r&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Tn(e.toString()),s);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(s)}return n}function wn(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)wn(t,e[i],n,s,r);return null}return n=Sn(n),t&&t[cn]?t.O(e,n,ge(s)?!!s.capture:!!s,r):vn(t,e,n,!0,s,r)}function bn(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)bn(t,e[i],n,s,r);else s=ge(s)?!!s.capture:!!s,n=Sn(n),t&&t[cn]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=pn(i=t.g[e],n,s,r))&&(ln(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete t.g[e],t.h--)))):t&&(t=In(t))&&(e=t.g[e.toString()],t=-1,e&&(t=pn(e,n,s,r)),(n=-1<t?e[t]:null)&&En(n))}function En(t){if("number"!=typeof t&&t&&!t.ca){var e=t.src;if(e&&e[cn])fn(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Tn(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=In(e))?(fn(n,t),0==n.h&&(n.src=null,e[gn]=null)):ln(t)}}}function Tn(t){return t in mn?mn[t]:mn[t]="on"+t}function _n(t,e){if(t.ca)t=!0;else{e=new on(e,this);var n=t.listener,s=t.ia||t.src;t.fa&&En(t),t=n.call(s,e)}return t}function In(t){return(t=t[gn])instanceof dn?t:null}var Cn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Sn(t){return"function"==typeof t?t:(t[Cn]||(t[Cn]=function(e){return t.handleEvent(e)}),t[Cn])}function An(){_e.call(this),this.i=new dn(this),this.P=this,this.I=null}function kn(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,"string"==typeof e)e=new rn(e,t);else if(e instanceof rn)e.target=e.target||t;else{var r=e;Ve(e=new rn(s,t),r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Dn(o,s,!0,e)&&r}if(r=Dn(o=e.g=t,s,!0,e)&&r,r=Dn(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)r=Dn(o=e.g=n[i],s,!1,e)&&r}function Dn(t,e,n,s){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&fn(t.i,o),r=!1!==a.call(c,s)&&r}}return r&&!s.defaultPrevented}Te(An,_e),An.prototype[cn]=!0,An.prototype.removeEventListener=function(t,e,n,s){bn(this,t,e,n,s)},An.prototype.M=function(){if(An.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)ln(n[s]);delete e.g[t],e.h--}}this.I=null},An.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)},An.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};var Nn=de.JSON.stringify;function xn(){var t=Vn;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var Rn,On=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Ln),(t=>t.reset()));class Ln{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Mn(t){de.setTimeout((()=>{throw t}),0)}function Pn(t,e){Rn||function(){var t=de.Promise.resolve(void 0);Rn=function(){t.then(Un)}}(),Fn||(Rn(),Fn=!0),Vn.add(t,e)}var Fn=!1,Vn=new class{constructor(){this.h=this.g=null}add(t,e){const n=On.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}};function Un(){for(var t;t=xn();){try{t.h.call(t.g)}catch(t){Mn(t)}var e=On;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Fn=!1}function $n(t,e){An.call(this),this.h=t||1,this.g=e||de,this.j=be(this.kb,this),this.l=Date.now()}function Bn(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function jn(t,e,n){if("function"==typeof t)n&&(t=be(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=be(t.handleEvent,t)}return 2147483647<Number(e)?-1:de.setTimeout(t,e||0)}function qn(t){t.g=jn((()=>{t.g=null,t.i&&(t.i=!1,qn(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}Te($n,An),(ue=$n.prototype).da=!1,ue.S=null,ue.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),kn(this,"tick"),this.da&&(Bn(this),this.start()))}},ue.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},ue.M=function(){$n.Z.M.call(this),Bn(this),delete this.g};class Kn extends _e{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:qn(this)}M(){super.M(),this.g&&(de.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function zn(t){_e.call(this),this.h=t,this.g={}}Te(zn,_e);var Gn=[];function Hn(t,e,n,s){Array.isArray(n)||(n&&(Gn[0]=n.toString()),n=Gn);for(var r=0;r<n.length;r++){var i=yn(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Wn(t){Me(t.g,(function(t,e){this.g.hasOwnProperty(e)&&En(t)}),t),t.g={}}function Qn(){this.g=!0}function Xn(t,e,n,s){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var o=1;o<r.length;o++)r[o]=""}}}return Nn(n)}catch(t){return e}}(t,n)+(s?" "+s:"")}))}zn.prototype.M=function(){zn.Z.M.call(this),Wn(this)},zn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Qn.prototype.Aa=function(){this.g=!1},Qn.prototype.info=function(){};var Yn={},Jn=null;function Zn(){return Jn=Jn||new An}function ts(t){rn.call(this,Yn.Ma,t)}function es(t){const e=Zn();kn(e,new ts(e))}function ns(t,e){rn.call(this,Yn.STAT_EVENT,t),this.stat=e}function ss(t){const e=Zn();kn(e,new ns(e,t))}function rs(t,e){rn.call(this,Yn.Na,t),this.size=e}function is(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return de.setTimeout((function(){t()}),e)}Yn.Ma="serverreachability",Te(ts,rn),Yn.STAT_EVENT="statevent",Te(ns,rn),Yn.Na="timingevent",Te(rs,rn);var os={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},as={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function cs(){}function us(t){return t.h||(t.h=t.i())}function hs(){}cs.prototype.h=null;var ls,ds={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function fs(){rn.call(this,"d")}function ps(){rn.call(this,"c")}function gs(){}function ms(t,e,n,s){this.l=t,this.j=e,this.m=n,this.X=s||1,this.V=new zn(this),this.P=vs,t=ze?125:void 0,this.W=new $n(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new ys}function ys(){this.i=null,this.g="",this.h=!1}Te(fs,rn),Te(ps,rn),Te(gs,cs),gs.prototype.g=function(){return new XMLHttpRequest},gs.prototype.i=function(){return{}},ls=new gs;var vs=45e3,ws={},bs={};function Es(t,e,n){t.K=1,t.v=Ks(Vs(e)),t.s=n,t.U=!0,Ts(t,null)}function Ts(t,e){t.F=Date.now(),Ss(t),t.A=Vs(t.v);var n=t.A,s=t.X;Array.isArray(s)||(s=[String(s)]),sr(n.h,"t",s),t.C=0,n=t.l.H,t.h=new ys,t.g=si(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Kn(be(t.Ia,t,t.g),t.O)),Hn(t.V,t.g,"readystatechange",t.gb),e=t.H?Pe(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),es(),function(t,e,n,s,r,i){t.info((function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var h=u[0];u=u[1];var l=h.split("_");o=2<=l.length&&"type"==l[1]?o+(h+"=")+u+"&":o+(h+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.X,t.s)}function _s(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function Is(t,e,n){let s,r=!0;for(;!t.I&&t.C<n.length;){if(s=Cs(t,n),s==bs){4==e&&(t.o=4,ss(14),r=!1),Xn(t.j,t.m,null,"[Incomplete Response]");break}if(s==ws){t.o=4,ss(15),Xn(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}Xn(t.j,t.m,s,null),xs(t,s)}_s(t)&&s!=bs&&s!=ws&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,ss(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,(e=t.l).g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Qr(e),e.L=!0,ss(11))):(Xn(t.j,t.m,n,"[Invalid Chunked Response]"),Ns(t),Ds(t))}function Cs(t,e){var n=t.C,s=e.indexOf("\n",n);return-1==s?bs:(n=Number(e.substring(n,s)),isNaN(n)?ws:(s+=1)+n>e.length?bs:(e=e.substr(s,n),t.C=s+n,e))}function Ss(t){t.Y=Date.now()+t.P,As(t,t.P)}function As(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=is(be(t.eb,t),e)}function ks(t){t.B&&(de.clearTimeout(t.B),t.B=null)}function Ds(t){0==t.l.G||t.I||Jr(t.l,t)}function Ns(t){ks(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Bn(t.W),Wn(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function xs(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||ur(n.i,t)))if(n.I=t.N,!t.J&&ur(n.i,t)&&3==n.G){try{var s=n.Ca.g.parse(e)}catch(t){s=null}if(Array.isArray(s)&&3==s.length){var r=s;if(0==r[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;Yr(n),$r(n)}Wr(n),ss(18)}}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&0==n.A&&!n.v&&(n.v=is(be(n.ab,n),6e3));if(1>=cr(n.i)&&n.ka){try{n.ka()}catch(t){}n.ka=void 0}}else ti(n,11)}else if((t.J||n.g==t)&&Yr(n),!ke(e))for(r=n.Ca.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const e=u[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const r=u[4];null!=r&&(n.za=r,n.h.info("SVER="+n.za));const h=u[5];null!=h&&"number"==typeof h&&0<h&&(s=1.5*h,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var i=s.i;!i.g&&(xe(t,"spdy")||xe(t,"quic")||xe(t,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(hr(i,i.h),i.h=null))}if(s.D){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(s.sa=t,qs(s.F,s.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms"));var o=t;if((s=n).oa=ni(s,s.H?s.la:null,s.W),o.J){lr(s.i,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(ks(a),Ss(a)),s.g=o}else Hr(s);0<n.l.length&&qr(n)}else"stop"!=u[0]&&"close"!=u[0]||ti(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?ti(n,7):Ur(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}es()}catch(t){}}function Rs(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(pe(t)||"string"==typeof t)Ce(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(pe(t)||"string"==typeof t){n=[];for(var s=t.length,r=0;r<s;r++)n.push(r)}else for(r in n=[],s=0,t)n[s++]=r;s=function(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"==typeof t)return t.split("");if(pe(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}for(s in e=[],n=0,t)e[n++]=t[s];return e}(t),r=s.length;for(var i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}}function Os(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(t)if(t instanceof Os)for(n=t.T(),s=0;s<n.length;s++)this.set(n[s],t.get(n[s]));else for(s in t)this.set(s,t[s])}function Ls(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var s=t.g[e];Ms(t.h,s)&&(t.g[n++]=s),e++}t.g.length=n}if(t.i!=t.g.length){var r={};for(n=e=0;e<t.g.length;)Ms(r,s=t.g[e])||(t.g[n++]=s,r[s]=1),e++;t.g.length=n}}function Ms(t,e){return Object.prototype.hasOwnProperty.call(t,e)}(ue=ms.prototype).setTimeout=function(t){this.P=t},ue.gb=function(t){t=t.target;const e=this.L;e&&3==Lr(t)?e.l():this.Ia(t)},ue.Ia=function(t){try{if(t==this.g)t:{const h=Lr(this.g);var e=this.g.Da();this.g.ba();if(!(3>h)&&(3!=h||ze||this.g&&(this.h.h||this.g.ga()||Mr(this.g)))){this.I||4!=h||7==e||es(),ks(this);var n=this.g.ba();this.N=n;e:if(_s(this)){var s=Mr(this.g);t="";var r=s.length,i=4==Lr(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Ns(this),Ds(this);var o="";break e}this.h.i=new de.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,function(t,e,n,s,r,i,o){t.info((function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+"\n"+n+"\n"+i+" "+o}))}(this.j,this.u,this.A,this.m,this.X,h,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ke(a)){var u=a;break e}}u=null}if(!(n=u)){this.i=!1,this.o=3,ss(12),Ns(this),Ds(this);break t}Xn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,xs(this,n)}this.U?(Is(this,h,o),ze&&this.i&&3==h&&(Hn(this.V,this.W,"tick",this.fb),this.W.start())):(Xn(this.j,this.m,o,null),xs(this,o)),4==h&&Ns(this),this.i&&!this.I&&(4==h?Jr(this.l,this):(this.i=!1,Ss(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ss(12)):(this.o=0,ss(13)),Ns(this),Ds(this)}}}catch(t){}},ue.fb=function(){if(this.g){var t=Lr(this.g),e=this.g.ga();this.C<e.length&&(ks(this),Is(this,t,e),this.i&&4!=t&&Ss(this))}},ue.cancel=function(){this.I=!0,Ns(this)},ue.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(es(),ss(17)),Ns(this),this.o=2,Ds(this)):As(this,this.Y-t)},(ue=Os.prototype).R=function(){Ls(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},ue.T=function(){return Ls(this),this.g.concat()},ue.get=function(t,e){return Ms(this.h,t)?this.h[t]:e},ue.set=function(t,e){Ms(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},ue.forEach=function(t,e){for(var n=this.T(),s=0;s<n.length;s++){var r=n[s],i=this.get(r);t.call(e,i,r,this)}};var Ps=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Fs(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Fs){this.g=void 0!==e?e:t.g,Us(this,t.j),this.s=t.s,$s(this,t.i),Bs(this,t.m),this.l=t.l,e=t.h;var n=new Zs;n.i=e.i,e.g&&(n.g=new Os(e.g),n.h=e.h),js(this,n),this.o=t.o}else t&&(n=String(t).match(Ps))?(this.g=!!e,Us(this,n[1]||"",!0),this.s=zs(n[2]||""),$s(this,n[3]||"",!0),Bs(this,n[4]),this.l=zs(n[5]||"",!0),js(this,n[6]||"",!0),this.o=zs(n[7]||"")):(this.g=!!e,this.h=new Zs(null,this.g))}function Vs(t){return new Fs(t)}function Us(t,e,n){t.j=n?zs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function $s(t,e,n){t.i=n?zs(e,!0):e}function Bs(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function js(t,e,n){e instanceof Zs?(t.h=e,function(t,e){e&&!t.j&&(tr(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(er(this,e),sr(this,n,t))}),t)),t.j=e}(t.h,t.g)):(n||(e=Gs(e,Ys)),t.h=new Zs(e,t.g))}function qs(t,e,n){t.h.set(e,n)}function Ks(t){return qs(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function zs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Gs(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,Hs),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Hs(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}Fs.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Gs(e,Ws,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Gs(e,Ws,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(Gs(n,"/"==n.charAt(0)?Xs:Qs,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Gs(n,Js)),t.join("")};var Ws=/[#\/\?@]/g,Qs=/[#\?:]/g,Xs=/[#\?]/g,Ys=/[#\?@]/g,Js=/#/g;function Zs(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function tr(t){t.g||(t.g=new Os,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function er(t,e){tr(t),e=rr(t,e),Ms(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,Ms((t=t.g).h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Ls(t)))}function nr(t,e){return tr(t),e=rr(t,e),Ms(t.g.h,e)}function sr(t,e,n){er(t,e),0<n.length&&(t.i=null,t.g.set(rr(t,e),Ae(n)),t.h+=n.length)}function rr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(ue=Zs.prototype).add=function(t,e){tr(this),this.i=null,t=rr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},ue.forEach=function(t,e){tr(this),this.g.forEach((function(n,s){Ce(n,(function(n){t.call(e,n,s,this)}),this)}),this)},ue.T=function(){tr(this);for(var t=this.g.R(),e=this.g.T(),n=[],s=0;s<e.length;s++)for(var r=t[s],i=0;i<r.length;i++)n.push(e[s]);return n},ue.R=function(t){tr(this);var e=[];if("string"==typeof t)nr(this,t)&&(e=Se(e,this.g.get(rr(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Se(e,t[n])}return e},ue.set=function(t,e){return tr(this),this.i=null,nr(this,t=rr(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},ue.get=function(t,e){return t&&0<(t=this.R(t)).length?String(t[0]):e},ue.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var s=e[n],r=encodeURIComponent(String(s));s=this.R(s);for(var i=0;i<s.length;i++){var o=r;""!==s[i]&&(o+="="+encodeURIComponent(String(s[i]))),t.push(o)}}return this.i=t.join("&")};function ir(t){this.l=t||or,de.PerformanceNavigationTiming?t=0<(t=de.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(de.g&&de.g.Ea&&de.g.Ea()&&de.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var or=10;function ar(t){return!!t.h||!!t.g&&t.g.size>=t.j}function cr(t){return t.h?1:t.g?t.g.size:0}function ur(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function hr(t,e){t.g?t.g.add(e):t.h=e}function lr(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function dr(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Ae(t.i)}function fr(){}function pr(){this.g=new fr}function gr(t,e,n){const s=n||"";try{Rs(t,(function(t,n){let r=t;ge(t)&&(r=Nn(t)),e.push(s+n+"="+encodeURIComponent(r))}))}catch(t){throw e.push(s+"type="+encodeURIComponent("_badmap")),t}}function mr(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch(t){}}function yr(t){this.l=t.$b||null,this.j=t.ib||!1}function vr(t,e){An.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=wr,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ir.prototype.cancel=function(){if(this.i=dr(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},fr.prototype.stringify=function(t){return de.JSON.stringify(t,void 0)},fr.prototype.parse=function(t){return de.JSON.parse(t,void 0)},Te(yr,cs),yr.prototype.g=function(){return new vr(this.l,this.j)},yr.prototype.i=function(t){return function(){return t}}({}),Te(vr,An);var wr=0;function br(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Er(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Tr(t)}function Tr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(ue=vr.prototype).open=function(t,e){if(this.readyState!=wr)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Tr(this)},ue.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||de).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},ue.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Er(this)),this.readyState=wr},ue.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Tr(this)),this.g&&(this.readyState=3,Tr(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==de.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;br(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},ue.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Er(this):Tr(this),3==this.readyState&&br(this)}},ue.Ua=function(t){this.g&&(this.response=this.responseText=t,Er(this))},ue.Ta=function(t){this.g&&(this.response=t,Er(this))},ue.ha=function(){this.g&&Er(this)},ue.setRequestHeader=function(t,e){this.v.append(t,e)},ue.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},ue.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(vr.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var _r=de.JSON.parse;function Ir(t){An.call(this),this.headers=new Os,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Cr,this.K=this.L=!1}Te(Ir,An);var Cr="",Sr=/^https?$/i,Ar=["POST","PUT"];function kr(t){return"content-type"==t.toLowerCase()}function Dr(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Nr(t),Rr(t)}function Nr(t){t.D||(t.D=!0,kn(t,"complete"),kn(t,"error"))}function xr(t){if(t.h&&void 0!==le&&(!t.C[1]||4!=Lr(t)||2!=t.ba()))if(t.v&&4==Lr(t))jn(t.Fa,0,t);else if(kn(t,"readystatechange"),4==Lr(t)){t.h=!1;try{const a=t.ba();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var s;if(s=0===a){var r=String(t.H).match(Ps)[1]||null;if(!r&&de.self&&de.self.location){var i=de.self.location.protocol;r=i.substr(0,i.length-1)}s=!Sr.test(r?r.toLowerCase():"")}n=s}if(n)kn(t,"complete"),kn(t,"success");else{t.m=6;try{var o=2<Lr(t)?t.g.statusText:""}catch(t){o=""}t.j=o+" ["+t.ba()+"]",Nr(t)}}finally{Rr(t)}}}function Rr(t,e){if(t.g){Or(t);const n=t.g,s=t.C[0]?fe:null;t.g=null,t.C=null,e||kn(t,"ready");try{n.onreadystatechange=s}catch(t){}}}function Or(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(de.clearTimeout(t.A),t.A=null)}function Lr(t){return t.g?t.g.readyState:0}function Mr(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Cr:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Pr(t,e,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=function(t){let e="";return Me(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):qs(t,e,n))}function Fr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Vr(t){this.za=0,this.l=[],this.h=new Qn,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Fr("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Fr("baseRetryDelayMs",5e3,t),this.$a=Fr("retryDelaySeedMs",1e4,t),this.Ya=Fr("forwardChannelMaxRetries",2,t),this.ra=Fr("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new ir(t&&t.concurrentRequestLimit),this.Ca=new pr,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function Ur(t){if(Br(t),3==t.G){var e=t.V++,n=Vs(t.F);qs(n,"SID",t.J),qs(n,"RID",e),qs(n,"TYPE","terminate"),zr(t,n),(e=new ms(t,t.h,e,void 0)).K=2,e.v=Ks(Vs(n)),n=!1,de.navigator&&de.navigator.sendBeacon&&(n=de.navigator.sendBeacon(e.v.toString(),"")),!n&&de.Image&&((new Image).src=e.v,n=!0),n||(e.g=si(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Ss(e)}ei(t)}function $r(t){t.g&&(Qr(t),t.g.cancel(),t.g=null)}function Br(t){$r(t),t.u&&(de.clearTimeout(t.u),t.u=null),Yr(t),t.i.cancel(),t.m&&("number"==typeof t.m&&de.clearTimeout(t.m),t.m=null)}function jr(t,e){t.l.push(new class{constructor(t,e){this.h=t,this.g=e}}(t.Za++,e)),3==t.G&&qr(t)}function qr(t){ar(t.i)||t.m||(t.m=!0,Pn(t.Ha,t),t.C=0)}function Kr(t,e){var n;n=e?e.m:t.V++;const s=Vs(t.F);qs(s,"SID",t.J),qs(s,"RID",n),qs(s,"AID",t.U),zr(t,s),t.o&&t.s&&Pr(s,t.o,t.s),n=new ms(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Gr(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),hr(t.i,n),Es(n,s,e)}function zr(t,e){t.j&&Rs({},(function(t,n){qs(e,n,t)}))}function Gr(t,e,n){n=Math.min(t.l.length,n);var s=t.j?be(t.j.Oa,t.j,t):null;t:{var r=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=r[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let i=!0;for(let o=0;o<n;o++){let n=r[o].h;const a=r[o].g;if(n-=e,0>n)e=Math.max(0,r[o].h-100),i=!1;else try{gr(a,t,"req"+n+"_")}catch(t){s&&s(a)}}if(i){s=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,s}function Hr(t){t.g||t.u||(t.Y=1,Pn(t.Ga,t),t.A=0)}function Wr(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=is(be(t.Ga,t),Zr(t,t.A)),t.A++,!0)}function Qr(t){null!=t.B&&(de.clearTimeout(t.B),t.B=null)}function Xr(t){t.g=new ms(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=Vs(t.oa);qs(e,"RID","rpc"),qs(e,"SID",t.J),qs(e,"CI",t.N?"0":"1"),qs(e,"AID",t.U),zr(t,e),qs(e,"TYPE","xmlhttp"),t.o&&t.s&&Pr(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Ks(Vs(e)),n.s=null,n.U=!0,Ts(n,t)}function Yr(t){null!=t.v&&(de.clearTimeout(t.v),t.v=null)}function Jr(t,e){var n=null;if(t.g==e){Yr(t),Qr(t),t.g=null;var s=2}else{if(!ur(t.i,e))return;n=e.D,lr(t.i,e),s=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==s){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;kn(s=Zn(),new rs(s,n)),qr(t)}else Hr(t);else if(3==(r=e.o)||0==r&&0<t.I||!(1==s&&function(t,e){return!(cr(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.l=e.D.concat(t.l),0):1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya)||(t.m=is(be(t.Ha,t,e),Zr(t,t.C)),t.C++,0)))}(t,e)||2==s&&Wr(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:ti(t,5);break;case 4:ti(t,10);break;case 3:ti(t,6);break;default:ti(t,2)}}function Zr(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function ti(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var s=be(t.jb,t);n||(n=new Fs("//www.google.com/images/cleardot.gif"),de.location&&"http"==de.location.protocol||Us(n,"https"),Ks(n)),function(t,e){const n=new Qn;if(de.Image){const s=new Image;s.onload=Ee(mr,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Ee(mr,n,s,"TestLoadImage: error",!1,e),s.onabort=Ee(mr,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Ee(mr,n,s,"TestLoadImage: timeout",!1,e),de.setTimeout((function(){s.ontimeout&&s.ontimeout()}),1e4),s.src=t}else e(!1)}(n.toString(),s)}else ss(2);t.G=0,t.j&&t.j.va(e),ei(t),Br(t)}function ei(t){t.G=0,t.I=-1,t.j&&(0==dr(t.i).length&&0==t.l.length||(t.i.i.length=0,Ae(t.l),t.l.length=0),t.j.ua())}function ni(t,e,n){let s=function(t){return t instanceof Fs?Vs(t):new Fs(t,void 0)}(n);if(""!=s.i)e&&$s(s,e+"."+s.i),Bs(s,s.m);else{const t=de.location;s=function(t,e,n,s){var r=new Fs(null,void 0);return t&&Us(r,t),e&&$s(r,e),n&&Bs(r,n),s&&(r.l=s),r}(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&Me(t.aa,(function(t,e){qs(s,e,t)})),e=t.D,n=t.sa,e&&n&&qs(s,e,n),qs(s,"VER",t.ma),zr(t,s),s}function si(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Ba&&!t.qa?new Ir(new yr({ib:!0})):new Ir(t.qa)).L=t.H,e}function ri(){}function ii(){if(qe&&!(10<=Number(nn)))throw Error("Environmental error: no available transport.")}function oi(t,e){An.call(this),this.g=new Vr(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!ke(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ke(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new ui(this)}function ai(t){fs.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function ci(){ps.call(this),this.status=1}function ui(t){this.g=t}(ue=Ir.prototype).ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ls.g(),this.C=this.u?us(this.u):us(ls),this.g.onreadystatechange=be(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void Dr(this,t)}t=n||"";const r=new Os(this.headers);s&&Rs(s,(function(t,e){r.set(e,t)})),s=function(t){t:{var e=kr;const n=t.length,s="string"==typeof t?t.split(""):t;for(let r=0;r<n;r++)if(r in s&&e.call(void 0,s[r],r,t)){e=r;break t}e=-1}return 0>e?null:"string"==typeof t?t.charAt(e):t[e]}(r.T()),n=de.FormData&&t instanceof de.FormData,!(0<=Ie(Ar,e))||s||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Or(this),0<this.B&&((this.K=function(t){return qe&&tn()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=be(this.pa,this)):this.A=jn(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){Dr(this,t)}},ue.pa=function(){void 0!==le&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,kn(this,"timeout"),this.abort(8))},ue.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,kn(this,"complete"),kn(this,"abort"),Rr(this))},ue.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Rr(this,!0)),Ir.Z.M.call(this)},ue.Fa=function(){this.s||(this.F||this.v||this.l?xr(this):this.cb())},ue.cb=function(){xr(this)},ue.ba=function(){try{return 2<Lr(this)?this.g.status:-1}catch(t){return-1}},ue.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},ue.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),_r(e)}},ue.Da=function(){return this.m},ue.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(ue=Vr.prototype).ma=8,ue.G=1,ue.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(t){}},ue.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const r=new ms(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=Pe(i),Ve(i,this.P)):i=this.P),null===this.o&&(r.H=i),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var s=this.l[n];if(void 0===(s="__data__"in s.g&&"string"==typeof(s=s.g.__data__)?s.length:void 0))break;if(4096<(e+=s)){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Gr(this,r,e),qs(n=Vs(this.F),"RID",t),qs(n,"CVER",22),this.D&&qs(n,"X-HTTP-Session-Id",this.D),zr(this,n),this.o&&i&&Pr(n,this.o,i),hr(this.i,r),this.Ra&&qs(n,"TYPE","init"),this.ja?(qs(n,"$req",e),qs(n,"SID","null"),r.$=!0,Es(r,n,null)):Es(r,n,e),this.G=2}}else 3==this.G&&(t?Kr(this,t):0==this.l.length||ar(this.i)||Kr(this))},ue.Ga=function(){if(this.u=null,Xr(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=is(be(this.bb,this),t)}},ue.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ss(10),$r(this),Xr(this))},ue.ab=function(){null!=this.v&&(this.v=null,$r(this),Wr(this),ss(19))},ue.jb=function(t){t?(this.h.info("Successfully pinged google.com"),ss(2)):(this.h.info("Failed to ping google.com"),ss(1))},(ue=ri.prototype).xa=function(){},ue.wa=function(){},ue.va=function(){},ue.ua=function(){},ue.Oa=function(){},ii.prototype.g=function(t,e){return new oi(t,e)},Te(oi,An),oi.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Pn(be(t.hb,t,e))),ss(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=ni(t,null,t.W),qr(t)},oi.prototype.close=function(){Ur(this.g)},oi.prototype.u=function(t){if("string"==typeof t){var e={};e.__data__=t,jr(this.g,e)}else this.v?((e={}).__data__=Nn(t),jr(this.g,e)):jr(this.g,t)},oi.prototype.M=function(){this.g.j=null,delete this.j,Ur(this.g),delete this.g,oi.Z.M.call(this)},Te(ai,fs),Te(ci,ps),Te(ui,ri),ui.prototype.xa=function(){kn(this.g,"a")},ui.prototype.wa=function(t){kn(this.g,new ai(t))},ui.prototype.va=function(t){kn(this.g,new ci)},ui.prototype.ua=function(){kn(this.g,"b")},ii.prototype.createWebChannel=ii.prototype.g,oi.prototype.send=oi.prototype.u,oi.prototype.open=oi.prototype.m,oi.prototype.close=oi.prototype.close,os.NO_ERROR=0,os.TIMEOUT=8,os.HTTP_ERROR=6,as.COMPLETE="complete",hs.EventType=ds,ds.OPEN="a",ds.CLOSE="b",ds.ERROR="c",ds.MESSAGE="d",An.prototype.listen=An.prototype.N,Ir.prototype.listenOnce=Ir.prototype.O,Ir.prototype.getLastError=Ir.prototype.La,Ir.prototype.getLastErrorCode=Ir.prototype.Da,Ir.prototype.getStatus=Ir.prototype.ba,Ir.prototype.getResponseJson=Ir.prototype.Qa,Ir.prototype.getResponseText=Ir.prototype.ga,Ir.prototype.send=Ir.prototype.ea;var hi=os,li=as,di=Yn,fi=10,pi=11,gi=yr,mi=hs,yi=Ir;const vi="@firebase/firestore";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class wi{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}wi.UNAUTHENTICATED=new wi(null),wi.GOOGLE_CREDENTIALS=new wi("google-credentials-uid"),wi.FIRST_PARTY=new wi("first-party-uid"),wi.MOCK_USER=new wi("mock-user");
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
let bi="9.9.2";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Ei=new bt("@firebase/firestore");function Ti(){return Ei.logLevel}function _i(t,...e){if(Ei.logLevel<=gt.DEBUG){const n=e.map(Si);Ei.debug(`Firestore (${bi}): ${t}`,...n)}}function Ii(t,...e){if(Ei.logLevel<=gt.ERROR){const n=e.map(Si);Ei.error(`Firestore (${bi}): ${t}`,...n)}}function Ci(t,...e){if(Ei.logLevel<=gt.WARN){const n=e.map(Si);Ei.warn(`Firestore (${bi}): ${t}`,...n)}}function Si(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var e}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Ai(t="Unexpected state"){const e=`FIRESTORE (${bi}) INTERNAL ASSERTION FAILED: `+t;throw Ii(e),new Error(e)}function ki(t,e){t||Ai()}function Di(t,e){return t}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Ni={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class xi extends it{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ri{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Oi{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Li{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(wi.UNAUTHENTICATED)))}shutdown(){}}class Mi{constructor(t){this.t=t,this.currentUser=wi.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const s=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let r=new Ri;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Ri,t.enqueueRetryable((()=>s(this.currentUser)))};const i=()=>{const e=r;t.enqueueRetryable((async()=>{await e.promise,await s(this.currentUser)}))},o=t=>{_i("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(_i("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Ri)}}),0),i()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(_i("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(ki("string"==typeof e.accessToken),new Oi(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return ki(null===t||"string"==typeof t),new wi(t)}}class Pi{constructor(t,e,n){this.type="FirstParty",this.user=wi.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const s=t.auth.getAuthHeaderValueForFirstParty([]);s&&this.headers.set("Authorization",s),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class Fi{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new Pi(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(wi.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Vi{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ui{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,e){const n=t=>{null!=t.error&&_i("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.p;return this.p=t.token,_i("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const s=t=>{_i("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit((t=>s(t))),setTimeout((()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?s(t):_i("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(ki("string"==typeof t.token),this.p=t.token,new Vi(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function $i(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Bi{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const s=$i(40);for(let r=0;r<s.length;++r)n.length<20&&s[r]<e&&(n+=t.charAt(s[r]%t.length))}return n}}function ji(t,e){return t<e?-1:t>e?1:0}function qi(t,e,n){return t.length===e.length&&t.every(((t,s)=>n(t,e[s])))}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ki{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new xi(Ni.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new xi(Ni.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new xi(Ni.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new xi(Ni.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Ki.fromMillis(Date.now())}static fromDate(t){return Ki.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new Ki(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?ji(this.nanoseconds,t.nanoseconds):ji(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class zi{constructor(t){this.timestamp=t}static fromTimestamp(t){return new zi(t)}static min(){return new zi(new Ki(0,0))}static max(){return new zi(new Ki(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Gi{constructor(t,e,n){void 0===e?e=0:e>t.length&&Ai(),void 0===n?n=t.length-e:n>t.length-e&&Ai(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Gi.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Gi?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const n=t.get(s),r=e.get(s);if(n<r)return-1;if(n>r)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Hi extends Gi{construct(t,e,n){return new Hi(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new xi(Ni.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new Hi(e)}static emptyPath(){return new Hi([])}}const Wi=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Qi extends Gi{construct(t,e,n){return new Qi(t,e,n)}static isValidIdentifier(t){return Wi.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Qi.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Qi(["__name__"])}static fromServerFormat(t){const e=[];let n="",s=0;const r=()=>{if(0===n.length)throw new xi(Ni.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let i=!1;for(;s<t.length;){const e=t[s];if("\\"===e){if(s+1===t.length)throw new xi(Ni.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[s+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new xi(Ni.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,s+=2}else"`"===e?(i=!i,s++):"."!==e||i?(n+=e,s++):(r(),s++)}if(r(),i)throw new xi(Ni.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Qi(e)}static emptyPath(){return new Qi([])}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Xi{constructor(t){this.path=t}static fromPath(t){return new Xi(Hi.fromString(t))}static fromName(t){return new Xi(Hi.fromString(t).popFirst(5))}static empty(){return new Xi(Hi.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===Hi.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Hi.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Xi(new Hi(t.slice()))}}function Yi(t){return new Ji(t.readTime,t.key,-1)}class Ji{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Ji(zi.min(),Xi.empty(),-1)}static max(){return new Ji(zi.max(),Xi.empty(),-1)}}function Zi(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=Xi.comparator(t.documentKey,e.documentKey),0!==n?n:ji(t.largestBatchId,e.largestBatchId))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function to(t){if(t.code!==Ni.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==t.message)throw t;_i("LocalStore","Unexpectedly lost primary lease")}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class eo{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Ai(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new eo(((n,s)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,s)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof eo?e:eo.resolve(e)}catch(t){return eo.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):eo.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):eo.reject(e)}static resolve(t){return new eo(((e,n)=>{e(t)}))}static reject(t){return new eo(((e,n)=>{n(t)}))}static waitFor(t){return new eo(((e,n)=>{let s=0,r=0,i=!1;t.forEach((t=>{++s,t.next((()=>{++r,i&&r===s&&e()}),(t=>n(t)))})),i=!0,r===s&&e()}))}static or(t){let e=eo.resolve(!1);for(const n of t)e=e.next((t=>t?eo.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,s)=>{n.push(e.call(this,t,s))})),this.waitFor(n)}static mapArray(t,e){return new eo(((n,s)=>{const r=t.length,i=new Array(r);let o=0;for(let a=0;a<r;a++){const c=a;e(t[c]).next((t=>{i[c]=t,++o,o===r&&n(i)}),(t=>s(t)))}}))}static doWhile(t,e){return new eo(((n,s)=>{const r=()=>{!0===t()?e().next((()=>{r()}),s):n()};r()}))}}function no(t){return"IndexedDbTransactionError"===t.name}
/**
     * @license
     * Copyright 2018 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class so{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.it(t),this.rt=t=>e.writeSequenceNumber(t))}it(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.rt&&this.rt(t),t}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function ro(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function io(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function oo(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */so.ot=-1;class ao{constructor(t,e){this.comparator=t,this.root=e||uo.EMPTY}insert(t,e){return new ao(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,uo.BLACK,null,null))}remove(t){return new ao(this.comparator,this.root.remove(t,this.comparator).copy(null,null,uo.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(0===s)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new co(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new co(this.root,t,this.comparator,!1)}getReverseIterator(){return new co(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new co(this.root,t,this.comparator,!0)}}class co{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?n(t.key,e):1,e&&s&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class uo{constructor(t,e,n,s,r){this.key=t,this.value=e,this.color=null!=n?n:uo.RED,this.left=null!=s?s:uo.EMPTY,this.right=null!=r?r:uo.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,r){return new uo(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=s?s:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const r=n(t,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(t,e,n),null):0===r?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return uo.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),0===e(t,s.key)){if(s.right.isEmpty())return uo.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,uo.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,uo.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ai();if(this.right.isRed())throw Ai();const t=this.left.check();if(t!==this.right.check())throw Ai();return t+(this.isRed()?0:1)}}uo.EMPTY=null,uo.RED=!0,uo.BLACK=!1,uo.EMPTY=new class{constructor(){this.size=0}get key(){throw Ai()}get value(){throw Ai()}get color(){throw Ai()}get left(){throw Ai()}get right(){throw Ai()}copy(t,e,n,s,r){return this}insert(t,e,n){return new uo(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class ho{constructor(t){this.comparator=t,this.data=new ao(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new lo(this.data.getIterator())}getIteratorFrom(t){return new lo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof ho))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(0!==this.comparator(t,s))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new ho(this.comparator);return e.data=t,e}}class lo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class fo{constructor(t){this.fields=t,t.sort(Qi.comparator)}static empty(){return new fo([])}unionWith(t){let e=new ho(Qi.comparator);for(const t of this.fields)e=e.add(t);for(const n of t)e=e.add(n);return new fo(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return qi(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class po{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new po(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new po(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return ji(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}po.EMPTY_BYTE_STRING=new po("");const go=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function mo(t){if(ki(!!t),"string"==typeof t){let e=0;const n=go.exec(t);if(ki(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:yo(t.seconds),nanos:yo(t.nanos)}}function yo(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function vo(t){return"string"==typeof t?po.fromBase64String(t):po.fromUint8Array(t)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function wo(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function bo(t){const e=t.mapValue.fields.__previous_value__;return wo(e)?bo(e):e}function Eo(t){const e=mo(t.mapValue.fields.__local_write_time__.timestampValue);return new Ki(e.seconds,e.nanos)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class To{constructor(t,e,n,s,r,i,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=r,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class _o{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new _o("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof _o&&t.projectId===this.projectId&&t.database===this.database}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Io(t){return null==t}function Co(t){return 0===t&&1/t==-1/0}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const So={fields:{__type__:{stringValue:"__max__"}}};function Ao(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?wo(t)?4:function(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t)?9007199254740991:10:Ai()}function ko(t,e){if(t===e)return!0;const n=Ao(t);if(n!==Ao(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Eo(t).isEqual(Eo(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=mo(t.timestampValue),s=mo(e.timestampValue);return n.seconds===s.seconds&&n.nanos===s.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return vo(t.bytesValue).isEqual(vo(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return yo(t.geoPointValue.latitude)===yo(e.geoPointValue.latitude)&&yo(t.geoPointValue.longitude)===yo(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return yo(t.integerValue)===yo(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=yo(t.doubleValue),s=yo(e.doubleValue);return n===s?Co(n)===Co(s):isNaN(n)&&isNaN(s)}return!1}(t,e);case 9:return qi(t.arrayValue.values||[],e.arrayValue.values||[],ko);case 10:return function(t,e){const n=t.mapValue.fields||{},s=e.mapValue.fields||{};if(ro(n)!==ro(s))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===s[t]||!ko(n[t],s[t])))return!1;return!0}(t,e);default:return Ai()}}function Do(t,e){return void 0!==(t.values||[]).find((t=>ko(t,e)))}function No(t,e){if(t===e)return 0;const n=Ao(t),s=Ao(e);if(n!==s)return ji(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ji(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=yo(t.integerValue||t.doubleValue),s=yo(e.integerValue||e.doubleValue);return n<s?-1:n>s?1:n===s?0:isNaN(n)?isNaN(s)?0:-1:1}(t,e);case 3:return xo(t.timestampValue,e.timestampValue);case 4:return xo(Eo(t),Eo(e));case 5:return ji(t.stringValue,e.stringValue);case 6:return function(t,e){const n=vo(t),s=vo(e);return n.compareTo(s)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),s=e.split("/");for(let t=0;t<n.length&&t<s.length;t++){const e=ji(n[t],s[t]);if(0!==e)return e}return ji(n.length,s.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=ji(yo(t.latitude),yo(e.latitude));return 0!==n?n:ji(yo(t.longitude),yo(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],s=e.values||[];for(let t=0;t<n.length&&t<s.length;++t){const e=No(n[t],s[t]);if(e)return e}return ji(n.length,s.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===So&&e===So)return 0;if(t===So)return 1;if(e===So)return-1;const n=t.fields||{},s=Object.keys(n),r=e.fields||{},i=Object.keys(r);s.sort(),i.sort();for(let t=0;t<s.length&&t<i.length;++t){const e=ji(s[t],i[t]);if(0!==e)return e;const o=No(n[s[t]],r[i[t]]);if(0!==o)return o}return ji(s.length,i.length)}(t.mapValue,e.mapValue);default:throw Ai()}}function xo(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return ji(t,e);const n=mo(t),s=mo(e),r=ji(n.seconds,s.seconds);return 0!==r?r:ji(n.nanos,s.nanos)}function Ro(t){return Oo(t)}function Oo(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=mo(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?vo(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Xi.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const s of t.values||[])n?n=!1:e+=",",e+=Oo(s);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",s=!0;for(const r of e)s?s=!1:n+=",",n+=`${r}:${Oo(t.fields[r])}`;return n+"}"}(t.mapValue):Ai();var e,n}function Lo(t){return!!t&&"integerValue"in t}function Mo(t){return!!t&&"arrayValue"in t}function Po(t){return!!t&&"nullValue"in t}function Fo(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Vo(t){return!!t&&"mapValue"in t}function Uo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return io(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Uo(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Uo(t.arrayValue.values[n]);return e}return Object.assign({},t)}class $o{constructor(t){this.value=t}static empty(){return new $o({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Vo(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Uo(e)}setAll(t){let e=Qi.emptyPath(),n={},s=[];t.forEach(((t,r)=>{if(!e.isImmediateParentOf(r)){const t=this.getFieldsMap(e);this.applyChanges(t,n,s),n={},s=[],e=r.popLast()}t?n[r.lastSegment()]=Uo(t):s.push(r.lastSegment())}));const r=this.getFieldsMap(e);this.applyChanges(r,n,s)}delete(t){const e=this.field(t.popLast());Vo(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return ko(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];Vo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){io(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new $o(Uo(this.value))}}function Bo(t){const e=[];return io(t.fields,((t,n)=>{const s=new Qi([t]);if(Vo(n)){const t=Bo(n.mapValue).fields;if(0===t.length)e.push(s);else for(const n of t)e.push(s.child(n))}else e.push(s)})),new fo(e)
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}class jo{constructor(t,e,n,s,r,i){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.data=r,this.documentState=i}static newInvalidDocument(t){return new jo(t,0,zi.min(),zi.min(),$o.empty(),0)}static newFoundDocument(t,e,n){return new jo(t,1,e,zi.min(),n,0)}static newNoDocument(t,e){return new jo(t,2,e,zi.min(),$o.empty(),0)}static newUnknownDocument(t,e){return new jo(t,3,e,zi.min(),$o.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=$o.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=$o.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=zi.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof jo&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new jo(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class qo{constructor(t,e=null,n=[],s=[],r=null,i=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=r,this.startAt=i,this.endAt=o,this.ut=null}}function Ko(t,e=null,n=[],s=[],r=null,i=null,o=null){return new qo(t,e,n,s,r,i,o)}function zo(t){const e=Di(t);if(null===e.ut){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>{return(e=t).field.canonicalString()+e.op.toString()+Ro(e.value);var e})).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Io(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Ro(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Ro(t))).join(",")),e.ut=t}return e.ut}function Go(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!ia(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],s=e.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!ko(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!aa(t.startAt,e.startAt)&&aa(t.endAt,e.endAt)}function Ho(t){return Xi.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class Wo extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.ct(t,e,n):new Qo(t,e,n):"array-contains"===e?new Zo(t,n):"in"===e?new ta(t,n):"not-in"===e?new ea(t,n):"array-contains-any"===e?new na(t,n):new Wo(t,e,n)}static ct(t,e,n){return"in"===e?new Xo(t,n):new Yo(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.at(No(e,this.value)):null!==e&&Ao(this.value)===Ao(e)&&this.at(No(e,this.value))}at(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Ai()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Qo extends Wo{constructor(t,e,n){super(t,e,n),this.key=Xi.fromName(n.referenceValue)}matches(t){const e=Xi.comparator(t.key,this.key);return this.at(e)}}class Xo extends Wo{constructor(t,e){super(t,"in",e),this.keys=Jo("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Yo extends Wo{constructor(t,e){super(t,"not-in",e),this.keys=Jo("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Jo(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>Xi.fromName(t.referenceValue)))}class Zo extends Wo{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Mo(e)&&Do(e.arrayValue,this.value)}}class ta extends Wo{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Do(this.value.arrayValue,e)}}class ea extends Wo{constructor(t,e){super(t,"not-in",e)}matches(t){if(Do(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Do(this.value.arrayValue,e)}}class na extends Wo{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Mo(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Do(this.value.arrayValue,t)))}}class sa{constructor(t,e){this.position=t,this.inclusive=e}}class ra{constructor(t,e="asc"){this.field=t,this.dir=e}}function ia(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function oa(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(s=i.field.isKeyField()?Xi.comparator(Xi.fromName(o.referenceValue),n.key):No(o,n.data.field(i.field)),"desc"===i.dir&&(s*=-1),0!==s)break}return s}function aa(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ko(t.position[n],e.position[n]))return!1;return!0}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ca{constructor(t,e=null,n=[],s=[],r=null,i="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=r,this.limitType=i,this.startAt=o,this.endAt=a,this.lt=null,this.ft=null,this.startAt,this.endAt}}function ua(t){return new ca(t)}function ha(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function la(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function da(t){for(const e of t.filters)if(e.ht())return e.field;return null}function fa(t){const e=Di(t);if(null===e.lt){e.lt=[];const t=da(e),n=la(e);if(null!==t&&null===n)t.isKeyField()||e.lt.push(new ra(t)),e.lt.push(new ra(Qi.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.lt.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new ra(Qi.keyField(),t))}}}return e.lt}function pa(t){const e=Di(t);if(!e.ft)if("F"===e.limitType)e.ft=Ko(e.path,e.collectionGroup,fa(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const n of fa(e)){const e="desc"===n.dir?"asc":"desc";t.push(new ra(n.field,e))}const n=e.endAt?new sa(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new sa(e.startAt.position,e.startAt.inclusive):null;e.ft=Ko(e.path,e.collectionGroup,t,e.filters,e.limit,n,s)}return e.ft}function ga(t,e,n){return new ca(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ma(t,e){return Go(pa(t),pa(e))&&t.limitType===e.limitType}function ya(t){return`${zo(pa(t))}|lt:${t.limitType}`}function va(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${Ro(e.value)}`;var e})).join(", ")}]`),Io(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Ro(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Ro(t))).join(",")),`Target(${e})`}(pa(t))}; limitType=${t.limitType})`}function wa(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Xi.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const s=oa(t,e,n);return t.inclusive?s<=0:s<0}(t.startAt,fa(t),e))&&!(t.endAt&&!function(t,e,n){const s=oa(t,e,n);return t.inclusive?s>=0:s>0}(t.endAt,fa(t),e))}(t,e)}function ba(t){return(e,n)=>{let s=!1;for(const r of fa(t)){const t=Ea(r,e,n);if(0!==t)return t;s=s||r.field.isKeyField()}return 0}}function Ea(t,e,n){const s=t.field.isKeyField()?Xi.comparator(e.key,n.key):function(t,e,n){const s=e.data.field(t),r=n.data.field(t);return null!==s&&null!==r?No(s,r):Ai()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return Ai()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Ta(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Co(e)?"-0":e}}function _a(t){return{integerValue:""+t}}function Ia(t,e){return function(t){return"number"==typeof t&&Number.isInteger(t)&&!Co(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}(e)?_a(e):Ta(t,e)}
/**
     * @license
     * Copyright 2018 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ca{constructor(){this._=void 0}}function Sa(t,e,n){return t instanceof Da?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Na?xa(t,e):t instanceof Ra?Oa(t,e):function(t,e){const n=ka(t,e),s=Ma(n)+Ma(t._t);return Lo(n)&&Lo(t._t)?_a(s):Ta(t.wt,s)}(t,e)}function Aa(t,e,n){return t instanceof Na?xa(t,e):t instanceof Ra?Oa(t,e):n}function ka(t,e){return t instanceof La?Lo(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class Da extends Ca{}class Na extends Ca{constructor(t){super(),this.elements=t}}function xa(t,e){const n=Pa(e);for(const e of t.elements)n.some((t=>ko(t,e)))||n.push(e);return{arrayValue:{values:n}}}class Ra extends Ca{constructor(t){super(),this.elements=t}}function Oa(t,e){let n=Pa(e);for(const e of t.elements)n=n.filter((t=>!ko(t,e)));return{arrayValue:{values:n}}}class La extends Ca{constructor(t,e){super(),this.wt=t,this._t=e}}function Ma(t){return yo(t.integerValue||t.doubleValue)}function Pa(t){return Mo(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}class Fa{constructor(t,e){this.version=t,this.transformResults=e}}class Va{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Va}static exists(t){return new Va(void 0,t)}static updateTime(t){return new Va(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ua(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class $a{}function Ba(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new Ya(t.key,Va.none()):new Ga(t.key,t.data,Va.none());{const n=t.data,s=$o.empty();let r=new ho(Qi.comparator);for(let t of e.fields)if(!r.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?s.delete(t):s.set(t,e),r=r.add(t)}return new Ha(t.key,s,new fo(r.toArray()),Va.none())}}function ja(t,e,n){t instanceof Ga?function(t,e,n){const s=t.value.clone(),r=Qa(t.fieldTransforms,e,n.transformResults);s.setAll(r),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):t instanceof Ha?function(t,e,n){if(!Ua(t.precondition,e))return void e.convertToUnknownDocument(n.version);const s=Qa(t.fieldTransforms,e,n.transformResults),r=e.data;r.setAll(Wa(t)),r.setAll(s),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function qa(t,e,n,s){return t instanceof Ga?function(t,e,n,s){if(!Ua(t.precondition,e))return n;const r=t.value.clone(),i=Xa(t.fieldTransforms,s,e);return r.setAll(i),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null}(t,e,n,s):t instanceof Ha?function(t,e,n,s){if(!Ua(t.precondition,e))return n;const r=Xa(t.fieldTransforms,s,e),i=e.data;return i.setAll(Wa(t)),i.setAll(r),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,s):function(t,e,n){return Ua(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function Ka(t,e){let n=null;for(const s of t.fieldTransforms){const t=e.data.field(s.field),r=ka(s.transform,t||null);null!=r&&(null===n&&(n=$o.empty()),n.set(s.field,r))}return n||null}function za(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&qi(t,e,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof Na&&e instanceof Na||t instanceof Ra&&e instanceof Ra?qi(t.elements,e.elements,ko):t instanceof La&&e instanceof La?ko(t._t,e._t):t instanceof Da&&e instanceof Da}(t.transform,e.transform)}(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ga extends $a{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ha extends $a{constructor(t,e,n,s,r=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Wa(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}})),e}function Qa(t,e,n){const s=new Map;ki(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,Aa(o,a,n[r]))}return s}function Xa(t,e,n){const s=new Map;for(const r of t){const t=r.transform,i=n.data.field(r.field);s.set(r.field,Sa(t,i,e))}return s}class Ya extends $a{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ja extends $a{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Za{constructor(t){this.count=t}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var tc,ec;function nc(t){if(void 0===t)return Ii("GRPC error has no .code"),Ni.UNKNOWN;switch(t){case tc.OK:return Ni.OK;case tc.CANCELLED:return Ni.CANCELLED;case tc.UNKNOWN:return Ni.UNKNOWN;case tc.DEADLINE_EXCEEDED:return Ni.DEADLINE_EXCEEDED;case tc.RESOURCE_EXHAUSTED:return Ni.RESOURCE_EXHAUSTED;case tc.INTERNAL:return Ni.INTERNAL;case tc.UNAVAILABLE:return Ni.UNAVAILABLE;case tc.UNAUTHENTICATED:return Ni.UNAUTHENTICATED;case tc.INVALID_ARGUMENT:return Ni.INVALID_ARGUMENT;case tc.NOT_FOUND:return Ni.NOT_FOUND;case tc.ALREADY_EXISTS:return Ni.ALREADY_EXISTS;case tc.PERMISSION_DENIED:return Ni.PERMISSION_DENIED;case tc.FAILED_PRECONDITION:return Ni.FAILED_PRECONDITION;case tc.ABORTED:return Ni.ABORTED;case tc.OUT_OF_RANGE:return Ni.OUT_OF_RANGE;case tc.UNIMPLEMENTED:return Ni.UNIMPLEMENTED;case tc.DATA_LOSS:return Ni.DATA_LOSS;default:return Ai()}}(ec=tc||(tc={}))[ec.OK=0]="OK",ec[ec.CANCELLED=1]="CANCELLED",ec[ec.UNKNOWN=2]="UNKNOWN",ec[ec.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ec[ec.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ec[ec.NOT_FOUND=5]="NOT_FOUND",ec[ec.ALREADY_EXISTS=6]="ALREADY_EXISTS",ec[ec.PERMISSION_DENIED=7]="PERMISSION_DENIED",ec[ec.UNAUTHENTICATED=16]="UNAUTHENTICATED",ec[ec.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ec[ec.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ec[ec.ABORTED=10]="ABORTED",ec[ec.OUT_OF_RANGE=11]="OUT_OF_RANGE",ec[ec.UNIMPLEMENTED=12]="UNIMPLEMENTED",ec[ec.INTERNAL=13]="INTERNAL",ec[ec.UNAVAILABLE=14]="UNAVAILABLE",ec[ec.DATA_LOSS=15]="DATA_LOSS";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class sc{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,s]of n)if(this.equalsFn(e,t))return s}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(void 0===s)return this.inner[n]=[[t,e]],void this.innerSize++;for(let n=0;n<s.length;n++)if(this.equalsFn(s[n][0],t))return void(s[n]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return 1===n.length?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){io(this.inner,((e,n)=>{for(const[e,s]of n)t(e,s)}))}isEmpty(){return oo(this.inner)}size(){return this.innerSize}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const rc=new ao(Xi.comparator);function ic(){return rc}const oc=new ao(Xi.comparator);function ac(...t){let e=oc;for(const n of t)e=e.insert(n.key,n);return e}function cc(t){let e=oc;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function uc(){return lc()}function hc(){return lc()}function lc(){return new sc((t=>t.toString()),((t,e)=>t.isEqual(e)))}const dc=new ao(Xi.comparator),fc=new ho(Xi.comparator);function pc(...t){let e=fc;for(const n of t)e=e.add(n);return e}const gc=new ho(ji);function mc(){return gc}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class yc{constructor(t,e,n,s,r){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,vc.createSynthesizedTargetChangeForCurrentChange(t,e)),new yc(zi.min(),n,mc(),ic(),pc())}}class vc{constructor(t,e,n,s,r){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,e){return new vc(po.EMPTY_BYTE_STRING,e,pc(),pc(),pc())}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class wc{constructor(t,e,n,s){this.gt=t,this.removedTargetIds=e,this.key=n,this.yt=s}}class bc{constructor(t,e){this.targetId=t,this.It=e}}class Ec{constructor(t,e,n=po.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class Tc{constructor(){this.Tt=0,this.Et=Cc(),this.At=po.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return 0!==this.Tt}get vt(){return this.bt}Vt(t){t.approximateByteSize()>0&&(this.bt=!0,this.At=t)}St(){let t=pc(),e=pc(),n=pc();return this.Et.forEach(((s,r)=>{switch(r){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:Ai()}})),new vc(this.At,this.Rt,t,e,n)}Dt(){this.bt=!1,this.Et=Cc()}Ct(t,e){this.bt=!0,this.Et=this.Et.insert(t,e)}xt(t){this.bt=!0,this.Et=this.Et.remove(t)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Mt(){this.bt=!0,this.Rt=!0}}class _c{constructor(t){this.Ot=t,this.Ft=new Map,this.$t=ic(),this.Bt=Ic(),this.Lt=new ho(ji)}Ut(t){for(const e of t.gt)t.yt&&t.yt.isFoundDocument()?this.qt(e,t.yt):this.Kt(e,t.key,t.yt);for(const e of t.removedTargetIds)this.Kt(e,t.key,t.yt)}Gt(t){this.forEachTarget(t,(e=>{const n=this.Qt(e);switch(t.state){case 0:this.jt(e)&&n.Vt(t.resumeToken);break;case 1:n.kt(),n.Pt||n.Dt(),n.Vt(t.resumeToken);break;case 2:n.kt(),n.Pt||this.removeTarget(e);break;case 3:this.jt(e)&&(n.Mt(),n.Vt(t.resumeToken));break;case 4:this.jt(e)&&(this.Wt(e),n.Vt(t.resumeToken));break;default:Ai()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Ft.forEach(((t,n)=>{this.jt(n)&&e(n)}))}zt(t){const e=t.targetId,n=t.It.count,s=this.Ht(e);if(s){const t=s.target;if(Ho(t))if(0===n){const n=new Xi(t.path);this.Kt(e,n,jo.newNoDocument(n,zi.min()))}else ki(1===n);else this.Jt(e)!==n&&(this.Wt(e),this.Lt=this.Lt.add(e))}}Yt(t){const e=new Map;this.Ft.forEach(((n,s)=>{const r=this.Ht(s);if(r){if(n.current&&Ho(r.target)){const e=new Xi(r.target.path);null!==this.$t.get(e)||this.Xt(s,e)||this.Kt(s,e,jo.newNoDocument(e,t))}n.vt&&(e.set(s,n.St()),n.Dt())}}));let n=pc();this.Bt.forEach(((t,e)=>{let s=!0;e.forEachWhile((t=>{const e=this.Ht(t);return!e||2===e.purpose||(s=!1,!1)})),s&&(n=n.add(t))})),this.$t.forEach(((e,n)=>n.setReadTime(t)));const s=new yc(t,e,this.Lt,this.$t,n);return this.$t=ic(),this.Bt=Ic(),this.Lt=new ho(ji),s}qt(t,e){if(!this.jt(t))return;const n=this.Xt(t,e.key)?2:0;this.Qt(t).Ct(e.key,n),this.$t=this.$t.insert(e.key,e),this.Bt=this.Bt.insert(e.key,this.Zt(e.key).add(t))}Kt(t,e,n){if(!this.jt(t))return;const s=this.Qt(t);this.Xt(t,e)?s.Ct(e,1):s.xt(e),this.Bt=this.Bt.insert(e,this.Zt(e).delete(t)),n&&(this.$t=this.$t.insert(e,n))}removeTarget(t){this.Ft.delete(t)}Jt(t){const e=this.Qt(t).St();return this.Ot.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Nt(t){this.Qt(t).Nt()}Qt(t){let e=this.Ft.get(t);return e||(e=new Tc,this.Ft.set(t,e)),e}Zt(t){let e=this.Bt.get(t);return e||(e=new ho(ji),this.Bt=this.Bt.insert(t,e)),e}jt(t){const e=null!==this.Ht(t);return e||_i("WatchChangeAggregator","Detected inactive target",t),e}Ht(t){const e=this.Ft.get(t);return e&&e.Pt?null:this.Ot.te(t)}Wt(t){this.Ft.set(t,new Tc),this.Ot.getRemoteKeysForTarget(t).forEach((e=>{this.Kt(t,e,null)}))}Xt(t,e){return this.Ot.getRemoteKeysForTarget(t).has(e)}}function Ic(){return new ao(Xi.comparator)}function Cc(){return new ao(Xi.comparator)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Sc={asc:"ASCENDING",desc:"DESCENDING"},Ac={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class kc{constructor(t,e){this.databaseId=t,this.dt=e}}function Dc(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Nc(t,e){return t.dt?e.toBase64():e.toUint8Array()}function xc(t,e){return Dc(t,e.toTimestamp())}function Rc(t){return ki(!!t),zi.fromTimestamp(function(t){const e=mo(t);return new Ki(e.seconds,e.nanos)}(t))}function Oc(t,e){return function(t){return new Hi(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function Lc(t){const e=Hi.fromString(t);return ki(Jc(e)),e}function Mc(t,e){return Oc(t.databaseId,e.path)}function Pc(t,e){const n=Lc(e);if(n.get(1)!==t.databaseId.projectId)throw new xi(Ni.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new xi(Ni.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Xi(Uc(n))}function Fc(t,e){return Oc(t.databaseId,e)}function Vc(t){return new Hi(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Uc(t){return ki(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function $c(t,e,n){return{name:Mc(t,e),fields:n.value.mapValue.fields}}function Bc(t,e){return{documents:[Fc(t,e.path)]}}function jc(t,e){const n={structuredQuery:{}},s=e.path;null!==e.collectionGroup?(n.parent=Fc(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Fc(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(Fo(t.value))return{unaryFilter:{field:Hc(t.field),op:"IS_NAN"}};if(Po(t.value))return{unaryFilter:{field:Hc(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Fo(t.value))return{unaryFilter:{field:Hc(t.field),op:"IS_NOT_NAN"}};if(Po(t.value))return{unaryFilter:{field:Hc(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Hc(t.field),op:Gc(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);r&&(n.structuredQuery.where=r);const i=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:Hc(t.field),direction:zc(t.dir)}}(t)))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(t,e){return t.dt||Io(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function qc(t){let e=function(t){const e=Lc(t);return 4===e.length?Hi.emptyPath():Uc(e)}(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){ki(1===s);const t=n.from[0];t.allDescendants?r=t.collectionId:e=e.child(t.collectionId)}let i=[];n.where&&(i=Kc(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new ra(Wc(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Io(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new sa(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new sa(n,e)}(n.endAt)),function(t,e,n,s,r,i,o,a){return new ca(t,e,n,s,r,i,o,a)}(e,r,o,i,a,"F",c,u)}function Kc(t){return t?void 0!==t.unaryFilter?[Xc(t)]:void 0!==t.fieldFilter?[Qc(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>Kc(t))).reduce(((t,e)=>t.concat(e))):Ai():[]}function zc(t){return Sc[t]}function Gc(t){return Ac[t]}function Hc(t){return{fieldPath:t.canonicalString()}}function Wc(t){return Qi.fromServerFormat(t.fieldPath)}function Qc(t){return Wo.create(Wc(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ai()}}(t.fieldFilter.op),t.fieldFilter.value)}function Xc(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Wc(t.unaryFilter.field);return Wo.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Wc(t.unaryFilter.field);return Wo.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Wc(t.unaryFilter.field);return Wo.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Wc(t.unaryFilter.field);return Wo.create(r,"!=",{nullValue:"NULL_VALUE"});default:return Ai()}}function Yc(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Jc(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Zc{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const s=this.mutations[e];s.key.isEqual(t.key)&&ja(s,t,n[e])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=qa(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=qa(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=hc();return this.mutations.forEach((s=>{const r=t.get(s.key),i=r.overlayedDocument;let o=this.applyToLocalView(i,r.mutatedFields);o=e.has(s.key)?null:o;const a=Ba(i,o);null!==a&&n.set(s.key,a),i.isValidDocument()||i.convertToNoDocument(zi.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),pc())}isEqual(t){return this.batchId===t.batchId&&qi(this.mutations,t.mutations,((t,e)=>za(t,e)))&&qi(this.baseMutations,t.baseMutations,((t,e)=>za(t,e)))}}class tu{constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}static from(t,e,n){ki(t.mutations.length===n.length);let s=dc;const r=t.mutations;for(let t=0;t<r.length;t++)s=s.insert(r[t].key,n[t].version);return new tu(t,e,n,s)}}
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class eu{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class nu{constructor(t,e,n,s,r=zi.min(),i=zi.min(),o=po.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o}withSequenceNumber(t){return new nu(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new nu(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new nu(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class su{constructor(t){this.ne=t}}function ru(t){const e=qc({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?ga(e,e.limit,"L"):e}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class iu{constructor(){this.ze=new ou}addToCollectionParentIndex(t,e){return this.ze.add(e),eo.resolve()}getCollectionParents(t,e){return eo.resolve(this.ze.getEntries(e))}addFieldIndex(t,e){return eo.resolve()}deleteFieldIndex(t,e){return eo.resolve()}getDocumentsMatchingTarget(t,e){return eo.resolve(null)}getIndexType(t,e){return eo.resolve(0)}getFieldIndexes(t,e){return eo.resolve([])}getNextCollectionGroupToUpdate(t){return eo.resolve(null)}getMinOffset(t,e){return eo.resolve(Ji.min())}getMinOffsetFromCollectionGroup(t,e){return eo.resolve(Ji.min())}updateCollectionGroup(t,e,n){return eo.resolve()}updateIndexEntries(t,e){return eo.resolve()}}class ou{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new ho(Hi.comparator),r=!s.has(n);return this.index[e]=s.add(n),r}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new ho(Hi.comparator)).toArray()}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class au{constructor(t){this.En=t}next(){return this.En+=2,this.En}static An(){return new au(0)}static Rn(){return new au(-1)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class cu{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class uu{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(n=s,this.getBaseDocument(t,e,n)))).next((t=>(null!==n&&qa(n.mutation,t,fo.empty(),Ki.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,pc()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=pc()){const s=uc();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,n).next((t=>{let e=ac();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=uc();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,pc())))}populateOverlays(t,e,n){const s=[];return n.forEach((t=>{e.has(t)||s.push(t)})),this.documentOverlayCache.getOverlays(t,s).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,s){let r=ic();const i=lc(),o=lc();return e.forEach(((t,e)=>{const o=n.get(e.key);s.has(e.key)&&(void 0===o||o.mutation instanceof Ha)?r=r.insert(e.key,e):void 0!==o&&(i.set(e.key,o.mutation.getFieldMask()),qa(o.mutation,e,o.mutation.getFieldMask(),Ki.now()))})),this.recalculateAndSaveOverlays(t,r).next((t=>(t.forEach(((t,e)=>i.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new cu(e,null!==(n=i.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=lc();let s=new ao(((t,e)=>t-e)),r=pc();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const r of t)r.keys().forEach((t=>{const i=e.get(t);if(null===i)return;let o=n.get(t)||fo.empty();o=r.applyToLocalView(i,o),n.set(t,o);const a=(s.get(r.batchId)||pc()).add(t);s=s.insert(r.batchId,a)}))})).next((()=>{const i=[],o=s.getReverseIterator();for(;o.hasNext();){const s=o.getNext(),a=s.key,c=s.value,u=hc();c.forEach((t=>{if(!r.has(t)){const s=Ba(e.get(t),n.get(t));null!==s&&u.set(t,s),r=r.add(t)}})),i.push(this.documentOverlayCache.saveOverlays(t,a,u))}return eo.waitFor(i)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return function(t){return Xi.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):function(t){return null!==t.collectionGroup}(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next((r=>{const i=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-r.size):eo.resolve(uc());let o=-1,a=r;return i.next((e=>eo.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),r.get(e)?eo.resolve():this.getBaseDocument(t,e,n).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,r))).next((()=>this.computeViews(t,a,e,pc()))).next((t=>({batchId:o,changes:cc(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new Xi(e)).next((t=>{let e=ac();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const s=e.collectionGroup;let r=ac();return this.indexManager.getCollectionParents(t,s).next((i=>eo.forEach(i,(i=>{const o=function(t,e){return new ca(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,i.child(s));return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{r=r.insert(t,e)}))}))})).next((()=>r))))}getDocumentsMatchingCollectionQuery(t,e,n){let s;return this.remoteDocumentCache.getAllFromCollection(t,e.path,n).next((r=>(s=r,this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId)))).next((t=>{t.forEach(((t,e)=>{const n=e.getKey();null===s.get(n)&&(s=s.insert(n,jo.newInvalidDocument(n)))}));let n=ac();return s.forEach(((s,r)=>{const i=t.get(s);void 0!==i&&qa(i.mutation,r,fo.empty(),Ki.now()),wa(e,r)&&(n=n.insert(s,r))})),n}))}getBaseDocument(t,e,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(t,e):eo.resolve(jo.newInvalidDocument(e))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class hu{constructor(t){this.wt=t,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(t,e){return eo.resolve(this.Jn.get(e))}saveBundleMetadata(t,e){var n;return this.Jn.set(e.id,{id:(n=e).id,version:n.version,createTime:Rc(n.createTime)}),eo.resolve()}getNamedQuery(t,e){return eo.resolve(this.Yn.get(e))}saveNamedQuery(t,e){return this.Yn.set(e.name,function(t){return{name:t.name,query:ru(t.bundledQuery),readTime:Rc(t.readTime)}}(e)),eo.resolve()}}
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class lu{constructor(){this.overlays=new ao(Xi.comparator),this.Xn=new Map}getOverlay(t,e){return eo.resolve(this.overlays.get(e))}getOverlays(t,e){const n=uc();return eo.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,s)=>{this.ie(t,e,s)})),eo.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.Xn.get(n);return void 0!==s&&(s.forEach((t=>this.overlays=this.overlays.remove(t))),this.Xn.delete(n)),eo.resolve()}getOverlaysForCollection(t,e,n){const s=uc(),r=e.length+1,i=new Xi(e.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const t=o.getNext().value,i=t.getKey();if(!e.isPrefixOf(i.path))break;i.path.length===r&&t.largestBatchId>n&&s.set(t.getKey(),t)}return eo.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let r=new ao(((t,e)=>t-e));const i=this.overlays.getIterator();for(;i.hasNext();){const t=i.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=r.get(t.largestBatchId);null===e&&(e=uc(),r=r.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=uc(),a=r.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,e)=>o.set(t,e))),!(o.size()>=s)););return eo.resolve(o)}ie(t,e,n){const s=this.overlays.get(n.key);if(null!==s){const t=this.Xn.get(s.largestBatchId).delete(n.key);this.Xn.set(s.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new eu(e,n));let r=this.Xn.get(e);void 0===r&&(r=pc(),this.Xn.set(e,r)),this.Xn.set(e,r.add(n.key))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class du{constructor(){this.Zn=new ho(fu.ts),this.es=new ho(fu.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(t,e){const n=new fu(t,e);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.rs(new fu(t,e))}os(t,e){t.forEach((t=>this.removeReference(t,e)))}us(t){const e=new Xi(new Hi([])),n=new fu(e,t),s=new fu(e,t+1),r=[];return this.es.forEachInRange([n,s],(t=>{this.rs(t),r.push(t.key)})),r}cs(){this.Zn.forEach((t=>this.rs(t)))}rs(t){this.Zn=this.Zn.delete(t),this.es=this.es.delete(t)}hs(t){const e=new Xi(new Hi([])),n=new fu(e,t),s=new fu(e,t+1);let r=pc();return this.es.forEachInRange([n,s],(t=>{r=r.add(t.key)})),r}containsKey(t){const e=new fu(t,0),n=this.Zn.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class fu{constructor(t,e){this.key=t,this.ls=e}static ts(t,e){return Xi.comparator(t.key,e.key)||ji(t.ls,e.ls)}static ns(t,e){return ji(t.ls,e.ls)||Xi.comparator(t.key,e.key)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class pu{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.fs=1,this.ds=new ho(fu.ts)}checkEmpty(t){return eo.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,s){const r=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new Zc(r,e,n,s);this.mutationQueue.push(i);for(const e of s)this.ds=this.ds.add(new fu(e.key,r)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return eo.resolve(i)}lookupMutationBatch(t,e){return eo.resolve(this._s(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.ws(n),r=s<0?0:s;return eo.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return eo.resolve(0===this.mutationQueue.length?-1:this.fs-1)}getAllMutationBatches(t){return eo.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new fu(e,0),s=new fu(e,Number.POSITIVE_INFINITY),r=[];return this.ds.forEachInRange([n,s],(t=>{const e=this._s(t.ls);r.push(e)})),eo.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new ho(ji);return e.forEach((t=>{const e=new fu(t,0),s=new fu(t,Number.POSITIVE_INFINITY);this.ds.forEachInRange([e,s],(t=>{n=n.add(t.ls)}))})),eo.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let r=n;Xi.isDocumentKey(r)||(r=r.child(""));const i=new fu(new Xi(r),0);let o=new ho(ji);return this.ds.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===s&&(o=o.add(t.ls)),!0)}),i),eo.resolve(this.gs(o))}gs(t){const e=[];return t.forEach((t=>{const n=this._s(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){ki(0===this.ys(e.batchId,"removed")),this.mutationQueue.shift();let n=this.ds;return eo.forEach(e.mutations,(s=>{const r=new fu(s.key,e.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.ds=n}))}In(t){}containsKey(t,e){const n=new fu(e,0),s=this.ds.firstAfterOrEqual(n);return eo.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,eo.resolve()}ys(t,e){return this.ws(t)}ws(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}_s(t){const e=this.ws(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class gu{constructor(t){this.ps=t,this.docs=new ao(Xi.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),r=s?s.size:0,i=this.ps(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:i}),this.size+=i-r,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return eo.resolve(n?n.document.mutableCopy():jo.newInvalidDocument(e))}getEntries(t,e){let n=ic();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():jo.newInvalidDocument(t))})),eo.resolve(n)}getAllFromCollection(t,e,n){let s=ic();const r=new Xi(e.child("")),i=this.docs.getIteratorFrom(r);for(;i.hasNext();){const{key:t,value:{document:r}}=i.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||Zi(Yi(r),n)<=0||(s=s.insert(r.key,r.mutableCopy()))}return eo.resolve(s)}getAllFromCollectionGroup(t,e,n,s){Ai()}Is(t,e){return eo.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new mu(this)}getSize(t){return eo.resolve(this.size)}}class mu extends class{constructor(){this.changes=new sc((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,jo.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?eo.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}{constructor(t){super(),this.zn=t}applyChanges(t){const e=[];return this.changes.forEach(((n,s)=>{s.isValidDocument()?e.push(this.zn.addEntry(t,s)):this.zn.removeEntry(n)})),eo.waitFor(e)}getFromCache(t,e){return this.zn.getEntry(t,e)}getAllFromCache(t,e){return this.zn.getEntries(t,e)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class yu{constructor(t){this.persistence=t,this.Ts=new sc((t=>zo(t)),Go),this.lastRemoteSnapshotVersion=zi.min(),this.highestTargetId=0,this.Es=0,this.As=new du,this.targetCount=0,this.Rs=au.An()}forEachTarget(t,e){return this.Ts.forEach(((t,n)=>e(n))),eo.resolve()}getLastRemoteSnapshotVersion(t){return eo.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return eo.resolve(this.Es)}allocateTargetId(t){return this.highestTargetId=this.Rs.next(),eo.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Es&&(this.Es=e),eo.resolve()}vn(t){this.Ts.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Rs=new au(e),this.highestTargetId=e),t.sequenceNumber>this.Es&&(this.Es=t.sequenceNumber)}addTargetData(t,e){return this.vn(e),this.targetCount+=1,eo.resolve()}updateTargetData(t,e){return this.vn(e),eo.resolve()}removeTargetData(t,e){return this.Ts.delete(e.target),this.As.us(e.targetId),this.targetCount-=1,eo.resolve()}removeTargets(t,e,n){let s=0;const r=[];return this.Ts.forEach(((i,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Ts.delete(i),r.push(this.removeMatchingKeysForTargetId(t,o.targetId)),s++)})),eo.waitFor(r).next((()=>s))}getTargetCount(t){return eo.resolve(this.targetCount)}getTargetData(t,e){const n=this.Ts.get(e)||null;return eo.resolve(n)}addMatchingKeys(t,e,n){return this.As.ss(e,n),eo.resolve()}removeMatchingKeys(t,e,n){this.As.os(e,n);const s=this.persistence.referenceDelegate,r=[];return s&&e.forEach((e=>{r.push(s.markPotentiallyOrphaned(t,e))})),eo.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.As.us(e),eo.resolve()}getMatchingKeysForTargetId(t,e){const n=this.As.hs(e);return eo.resolve(n)}containsKey(t,e){return eo.resolve(this.As.containsKey(e))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class vu{constructor(t,e){this.bs={},this.overlays={},this.Ps=new so(0),this.vs=!1,this.vs=!0,this.referenceDelegate=t(this),this.Vs=new yu(this),this.indexManager=new iu,this.remoteDocumentCache=function(t){return new gu(t)}((t=>this.referenceDelegate.Ss(t))),this.wt=new su(e),this.Ds=new hu(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new lu,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.bs[t.toKey()];return n||(n=new pu(e,this.referenceDelegate),this.bs[t.toKey()]=n),n}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(t,e,n){_i("MemoryPersistence","Starting transaction:",t);const s=new wu(this.Ps.next());return this.referenceDelegate.Cs(),n(s).next((t=>this.referenceDelegate.xs(s).next((()=>t)))).toPromise().then((t=>(s.raiseOnCommittedEvent(),t)))}Ns(t,e){return eo.or(Object.values(this.bs).map((n=>()=>n.containsKey(t,e))))}}class wu extends class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}{constructor(t){super(),this.currentSequenceNumber=t}}class bu{constructor(t){this.persistence=t,this.ks=new du,this.Ms=null}static Os(t){return new bu(t)}get Fs(){if(this.Ms)return this.Ms;throw Ai()}addReference(t,e,n){return this.ks.addReference(n,e),this.Fs.delete(n.toString()),eo.resolve()}removeReference(t,e,n){return this.ks.removeReference(n,e),this.Fs.add(n.toString()),eo.resolve()}markPotentiallyOrphaned(t,e){return this.Fs.add(e.toString()),eo.resolve()}removeTarget(t,e){this.ks.us(e.targetId).forEach((t=>this.Fs.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Fs.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Cs(){this.Ms=new Set}xs(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return eo.forEach(this.Fs,(n=>{const s=Xi.fromPath(n);return this.$s(t,s).next((t=>{t||e.removeEntry(s,zi.min())}))})).next((()=>(this.Ms=null,e.apply(t))))}updateLimboDocument(t,e){return this.$s(t,e).next((t=>{t?this.Fs.delete(e.toString()):this.Fs.add(e.toString())}))}Ss(t){return 0}$s(t,e){return eo.or([()=>eo.resolve(this.ks.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ns(t,e)])}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Eu{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.Pi=n,this.vi=s}static Vi(t,e){let n=pc(),s=pc();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:s=s.add(t.doc.key)}return new Eu(t,e.fromCache,n,s)}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Tu{constructor(){this.Si=!1}initialize(t,e){this.Di=t,this.indexManager=e,this.Si=!0}getDocumentsMatchingQuery(t,e,n,s){return this.Ci(t,e).next((r=>r||this.xi(t,e,s,n))).next((n=>n||this.Ni(t,e)))}Ci(t,e){if(ha(e))return eo.resolve(null);let n=pa(e);return this.indexManager.getIndexType(t,n).next((s=>0===s?null:(null!==e.limit&&1===s&&(e=ga(e,null,"F"),n=pa(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((s=>{const r=pc(...s);return this.Di.getDocuments(t,r).next((s=>this.indexManager.getMinOffset(t,n).next((n=>{const i=this.ki(e,s);return this.Mi(e,i,r,n.readTime)?this.Ci(t,ga(e,null,"F")):this.Oi(t,i,e,n)}))))})))))}xi(t,e,n,s){return ha(e)||s.isEqual(zi.min())?this.Ni(t,e):this.Di.getDocuments(t,n).next((r=>{const i=this.ki(e,r);return this.Mi(e,i,n,s)?this.Ni(t,e):(Ti()<=gt.DEBUG&&_i("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),va(e)),this.Oi(t,i,e,function(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=zi.fromTimestamp(1e9===s?new Ki(n+1,0):new Ki(n,s));return new Ji(r,Xi.empty(),e)}(s,-1)))}))}ki(t,e){let n=new ho(ba(t));return e.forEach(((e,s)=>{wa(t,s)&&(n=n.add(s))})),n}Mi(t,e,n,s){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const r="F"===t.limitType?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Ni(t,e){return Ti()<=gt.DEBUG&&_i("QueryEngine","Using full collection scan to execute query:",va(e)),this.Di.getDocumentsMatchingQuery(t,e,Ji.min())}Oi(t,e,n,s){return this.Di.getDocumentsMatchingQuery(t,n,s).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class _u{constructor(t,e,n,s){this.persistence=t,this.Fi=e,this.wt=s,this.$i=new ao(ji),this.Bi=new sc((t=>zo(t)),Go),this.Li=new Map,this.Ui=t.getRemoteDocumentCache(),this.Vs=t.getTargetCache(),this.Ds=t.getBundleCache(),this.qi(n)}qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new uu(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.$i)))}}async function Iu(t,e){const n=Di(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let s;return n.mutationQueue.getAllMutationBatches(t).next((r=>(s=r,n.qi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const r=[],i=[];let o=pc();for(const t of s){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({Ki:t,removedBatchIds:r,addedBatchIds:i})))}))}))}function Cu(t){const e=Di(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Vs.getLastRemoteSnapshotVersion(t)))}function Su(t,e){const n=Di(t),s=e.snapshotVersion;let r=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const i=n.Ui.newChangeBuffer({trackRemovals:!0});r=n.$i;const o=[];e.targetChanges.forEach(((i,a)=>{const c=r.get(a);if(!c)return;o.push(n.Vs.removeMatchingKeys(t,i.removedDocuments,a).next((()=>n.Vs.addMatchingKeys(t,i.addedDocuments,a))));let u=c.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?u=u.withResumeToken(po.EMPTY_BYTE_STRING,zi.min()).withLastLimboFreeSnapshotVersion(zi.min()):i.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(i.resumeToken,s)),r=r.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,i)&&o.push(n.Vs.updateTargetData(t,u))}));let a=ic(),c=pc();if(e.documentUpdates.forEach((s=>{e.resolvedLimboDocuments.has(s)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,s))})),o.push(function(t,e,n){let s=pc(),r=pc();return n.forEach((t=>s=s.add(t))),e.getEntries(t,s).next((t=>{let s=ic();return n.forEach(((n,i)=>{const o=t.get(n);i.isFoundDocument()!==o.isFoundDocument()&&(r=r.add(n)),i.isNoDocument()&&i.version.isEqual(zi.min())?(e.removeEntry(n,i.readTime),s=s.insert(n,i)):!o.isValidDocument()||i.version.compareTo(o.version)>0||0===i.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(i),s=s.insert(n,i)):_i("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",i.version)})),{Gi:s,Qi:r}}))}(t,i,e.documentUpdates).next((t=>{a=t.Gi,c=t.Qi}))),!s.isEqual(zi.min())){const e=n.Vs.getLastRemoteSnapshotVersion(t).next((e=>n.Vs.setTargetsMetadata(t,t.currentSequenceNumber,s)));o.push(e)}return eo.waitFor(o).next((()=>i.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.$i=r,t)))}function Au(t,e){const n=Di(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}async function ku(t,e,n){const s=Di(t),r=s.$i.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,(t=>s.persistence.referenceDelegate.removeTarget(t,r)))}catch(t){if(!no(t))throw t;_i("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}s.$i=s.$i.remove(e),s.Bi.delete(r.target)}function Du(t,e,n){const s=Di(t);let r=zi.min(),i=pc();return s.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const s=Di(t),r=s.Bi.get(n);return void 0!==r?eo.resolve(s.$i.get(r)):s.Vs.getTargetData(e,n)}(s,t,pa(e)).next((e=>{if(e)return r=e.lastLimboFreeSnapshotVersion,s.Vs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{i=t}))})).next((()=>s.Fi.getDocumentsMatchingQuery(t,e,n?r:zi.min(),n?i:pc()))).next((t=>(function(t,e,n){let s=zi.min();n.forEach(((t,e)=>{e.readTime.compareTo(s)>0&&(s=e.readTime)})),t.Li.set(e,s)}(s,function(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}(e),t),{documents:t,ji:i})))))}class Nu{constructor(){this.activeTargetIds=mc()}Xi(t){this.activeTargetIds=this.activeTargetIds.add(t)}Zi(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Yi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class xu{constructor(){this.Fr=new Nu,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Fr.Xi(t),this.$r[t]||"not-current"}updateQueryState(t,e,n){this.$r[t]=e}removeLocalQueryTarget(t){this.Fr.Zi(t)}isLocalQueryTarget(t){return this.Fr.activeTargetIds.has(t)}clearQueryState(t){delete this.$r[t]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(t){return this.Fr.activeTargetIds.has(t)}start(){return this.Fr=new Nu,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ru{Br(t){}shutdown(){}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ou{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(t){this.Gr.push(t)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){_i("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Gr)t(0)}Kr(){_i("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Gr)t(1)}static V(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Lu={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Mu{constructor(t){this.jr=t.jr,this.Wr=t.Wr}zr(t){this.Hr=t}Jr(t){this.Yr=t}onMessage(t){this.Xr=t}close(){this.Wr()}send(t){this.jr(t)}Zr(){this.Hr()}eo(t){this.Yr(t)}no(t){this.Xr(t)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Pu extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.so=e+"://"+t.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(t,e,n,s,r){const i=this.oo(t,e);_i("RestConnection","Sending: ",i,n);const o={};return this.uo(o,s,r),this.co(t,i,o,n).then((t=>(_i("RestConnection","Received: ",t),t)),(e=>{throw Ci("RestConnection",`${t} failed with error: `,e,"url: ",i,"request:",n),e}))}ao(t,e,n,s,r,i){return this.ro(t,e,n,s,r)}uo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+bi,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}oo(t,e){const n=Lu[t];return`${this.so}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}co(t,e,n,s){return new Promise(((r,i)=>{const o=new yi;o.listenOnce(li.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case hi.NO_ERROR:const e=o.getResponseJson();_i("Connection","XHR received:",JSON.stringify(e)),r(e);break;case hi.TIMEOUT:_i("Connection",'RPC "'+t+'" timed out'),i(new xi(Ni.DEADLINE_EXCEEDED,"Request time out"));break;case hi.HTTP_ERROR:const n=o.getStatus();if(_i("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Ni).indexOf(e)>=0?e:Ni.UNKNOWN}(t.status);i(new xi(e,t.message))}else i(new xi(Ni.UNKNOWN,"Server responded with status "+o.getStatus()))}else i(new xi(Ni.UNAVAILABLE,"Connection failed."));break;default:Ai()}}finally{_i("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(s);o.send(e,"POST",a,n,15)}))}ho(t,e,n){const s=[this.so,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=new ii,i=Zn(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new gi({})),this.uo(o.initMessageHeaders,e,n),"undefined"!=typeof window&&(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rt())||"object"==typeof navigator&&"ReactNative"===navigator.product||rt().indexOf("Electron/")>=0||function(){const t=rt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}()||rt().indexOf("MSAppHost/")>=0||function(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=s.join("");_i("Connection","Creating WebChannel: "+a,o);const c=r.createWebChannel(a,o);let u=!1,h=!1;const l=new Mu({jr:t=>{h?_i("Connection","Not sending because WebChannel is closed:",t):(u||(_i("Connection","Opening WebChannel transport."),c.open(),u=!0),_i("Connection","WebChannel sending:",t),c.send(t))},Wr:()=>c.close()}),d=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return d(c,mi.EventType.OPEN,(()=>{h||_i("Connection","WebChannel transport opened.")})),d(c,mi.EventType.CLOSE,(()=>{h||(h=!0,_i("Connection","WebChannel transport closed"),l.eo())})),d(c,mi.EventType.ERROR,(t=>{h||(h=!0,Ci("Connection","WebChannel transport errored:",t),l.eo(new xi(Ni.UNAVAILABLE,"The operation could not be completed")))})),d(c,mi.EventType.MESSAGE,(t=>{var e;if(!h){const n=t.data[0];ki(!!n);const s=n,r=s.error||(null===(e=s[0])||void 0===e?void 0:e.error);if(r){_i("Connection","WebChannel received error:",r);const t=r.status;let e=function(t){const e=tc[t];if(void 0!==e)return nc(e)}(t),n=r.message;void 0===e&&(e=Ni.INTERNAL,n="Unknown error status: "+t+" with message "+r.message),h=!0,l.eo(new xi(e,n)),c.close()}else _i("Connection","WebChannel received:",n),l.no(n)}})),d(i,di.STAT_EVENT,(t=>{t.stat===fi?_i("Connection","Detected buffering proxy"):t.stat===pi&&_i("Connection","Detected no buffering proxy")})),setTimeout((()=>{l.Zr()}),0),l}}function Fu(){return"undefined"!=typeof document?document:null}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Vu(t){return new kc(t,!0)}class Uu{constructor(t,e,n=1e3,s=1.5,r=6e4){this.js=t,this.timerId=e,this.lo=n,this.fo=s,this._o=r,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(t){this.cancel();const e=Math.floor(this.wo+this.To()),n=Math.max(0,Date.now()-this.yo),s=Math.max(0,e-n);s>0&&_i("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.wo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,s,(()=>(this.yo=Date.now(),t()))),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){null!==this.mo&&(this.mo.skipDelay(),this.mo=null)}cancel(){null!==this.mo&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class $u{constructor(t,e,n,s,r,i,o,a){this.js=t,this.Ao=n,this.Ro=s,this.bo=r,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new Uu(t,e)}Do(){return 1===this.state||5===this.state||this.Co()}Co(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&null===this.vo&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,(()=>this.Mo())))}Oo(t){this.Fo(),this.stream.send(t)}async Mo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(t,e){this.Fo(),this.$o(),this.So.cancel(),this.Po++,4!==t?this.So.reset():e&&e.code===Ni.RESOURCE_EXHAUSTED?(Ii(e.toString()),Ii("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):e&&e.code===Ni.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Bo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Jr(e)}Bo(){}auth(){this.state=1;const t=this.Lo(this.Po),e=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Po===e&&this.Uo(t,n)}),(e=>{t((()=>{const t=new xi(Ni.UNKNOWN,"Fetching auth token failed: "+e.message);return this.qo(t)}))}))}Uo(t,e){const n=this.Lo(this.Po);this.stream=this.Ko(t,e),this.stream.zr((()=>{n((()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,(()=>(this.Co()&&(this.state=3),Promise.resolve()))),this.listener.zr())))})),this.stream.Jr((t=>{n((()=>this.qo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}xo(){this.state=5,this.So.Io((async()=>{this.state=0,this.start()}))}qo(t){return _i("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Lo(t){return e=>{this.js.enqueueAndForget((()=>this.Po===t?e():(_i("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Bu extends $u{constructor(t,e,n,s,r,i){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,i),this.wt=r}Ko(t,e){return this.bo.ho("Listen",t,e)}onMessage(t){this.So.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:Ai()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(t,e){return t.dt?(ki(void 0===e||"string"==typeof e),po.fromBase64String(e||"")):(ki(void 0===e||e instanceof Uint8Array),po.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?Ni.UNKNOWN:nc(t.code);return new xi(e,t.message||"")}(o);n=new Ec(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Pc(t,s.document.name),i=Rc(s.document.updateTime),o=new $o({mapValue:{fields:s.document.fields}}),a=jo.newFoundDocument(r,i,o),c=s.targetIds||[],u=s.removedTargetIds||[];n=new wc(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Pc(t,s.document),i=s.readTime?Rc(s.readTime):zi.min(),o=jo.newNoDocument(r,i),a=s.removedTargetIds||[];n=new wc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Pc(t,s.document),i=s.removedTargetIds||[];n=new wc([],i,r,null)}else{if(!("filter"in e))return Ai();{e.filter;const t=e.filter;t.targetId;const s=t.count||0,r=new Za(s),i=t.targetId;n=new bc(i,r)}}return n}(this.wt,t),n=function(t){if(!("targetChange"in t))return zi.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?zi.min():e.readTime?Rc(e.readTime):zi.min()}(t);return this.listener.Go(e,n)}Qo(t){const e={};e.database=Vc(this.wt),e.addTarget=function(t,e){let n;const s=e.target;return n=Ho(s)?{documents:Bc(t,s)}:{query:jc(t,s)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=Nc(t,e.resumeToken):e.snapshotVersion.compareTo(zi.min())>0&&(n.readTime=Dc(t,e.snapshotVersion.toTimestamp())),n}(this.wt,t);const n=function(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Ai()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.wt,t);n&&(e.labels=n),this.Oo(e)}jo(t){const e={};e.database=Vc(this.wt),e.removeTarget=t,this.Oo(e)}}class ju extends $u{constructor(t,e,n,s,r,i){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,i),this.wt=r,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(t,e){return this.bo.ho("Write",t,e)}onMessage(t){if(ki(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Wo){this.So.reset();const e=function(t,e){return t&&t.length>0?(ki(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?Rc(t.updateTime):Rc(e);return n.isEqual(zi.min())&&(n=Rc(e)),new Fa(n,t.transformResults||[])}(t,e)))):[]}(t.writeResults,t.commitTime),n=Rc(t.commitTime);return this.listener.Jo(n,e)}return ki(!t.writeResults||0===t.writeResults.length),this.Wo=!0,this.listener.Yo()}Xo(){const t={};t.database=Vc(this.wt),this.Oo(t)}Ho(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>function(t,e){let n;if(e instanceof Ga)n={update:$c(t,e.key,e.value)};else if(e instanceof Ya)n={delete:Mc(t,e.key)};else if(e instanceof Ha)n={update:$c(t,e.key,e.data),updateMask:Yc(e.fieldMask)};else{if(!(e instanceof Ja))return Ai();n={verify:Mc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof Da)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Na)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Ra)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof La)return{fieldPath:e.field.canonicalString(),increment:n._t};throw Ai()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:xc(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:Ai()}(t,e.precondition)),n}(this.wt,t)))};this.Oo(e)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class qu extends class{}{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.bo=n,this.wt=s,this.Zo=!1}tu(){if(this.Zo)throw new xi(Ni.FAILED_PRECONDITION,"The client has already been terminated.")}ro(t,e,n){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,r])=>this.bo.ro(t,e,n,s,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Ni.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new xi(Ni.UNKNOWN,t.toString())}))}ao(t,e,n,s){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.bo.ao(t,e,n,r,i,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Ni.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new xi(Ni.UNKNOWN,t.toString())}))}terminate(){this.Zo=!0}}class Ku{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){0===this.eu&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve()))))}uu(t){"Online"===this.state?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ru("Offline")))}set(t){this.cu(),this.eu=0,"Online"===t&&(this.su=!1),this.ru(t)}ru(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ou(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(Ii(e),this.su=!1):_i("OnlineStateTracker",e)}cu(){null!==this.nu&&(this.nu.cancel(),this.nu=null)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class zu{constructor(t,e,n,s,r){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=r,this.du.Br((t=>{n.enqueueAndForget((async()=>{th(this)&&(_i("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Di(t);e.lu.add(4),await Hu(e),e._u.set("Unknown"),e.lu.delete(4),await Gu(e)}(this))}))})),this._u=new Ku(n,s)}}async function Gu(t){if(th(t))for(const e of t.fu)await e(!0)}async function Hu(t){for(const e of t.fu)await e(!1)}function Wu(t,e){const n=Di(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),Zu(n)?Ju(n):yh(n).Co()&&Xu(n,e))}function Qu(t,e){const n=Di(t),s=yh(n);n.hu.delete(e),s.Co()&&Yu(n,e),0===n.hu.size&&(s.Co()?s.ko():th(n)&&n._u.set("Unknown"))}function Xu(t,e){t.wu.Nt(e.targetId),yh(t).Qo(e)}function Yu(t,e){t.wu.Nt(e),yh(t).jo(e)}function Ju(t){t.wu=new _c({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),te:e=>t.hu.get(e)||null}),yh(t).start(),t._u.iu()}function Zu(t){return th(t)&&!yh(t).Do()&&t.hu.size>0}function th(t){return 0===Di(t).lu.size}function eh(t){t.wu=void 0}async function nh(t){t.hu.forEach(((e,n)=>{Xu(t,e)}))}async function sh(t,e){eh(t),Zu(t)?(t._u.uu(e),Ju(t)):t._u.set("Unknown")}async function rh(t,e,n){if(t._u.set("Online"),e instanceof Ec&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const s of e.targetIds)t.hu.has(s)&&(await t.remoteSyncer.rejectListen(s,n),t.hu.delete(s),t.wu.removeTarget(s))}(t,e)}catch(n){_i("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await ih(t,n)}else if(e instanceof wc?t.wu.Ut(e):e instanceof bc?t.wu.zt(e):t.wu.Gt(e),!n.isEqual(zi.min()))try{const e=await Cu(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.wu.Yt(e);return n.targetChanges.forEach(((n,s)=>{if(n.resumeToken.approximateByteSize()>0){const r=t.hu.get(s);r&&t.hu.set(s,r.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.hu.get(e);if(!n)return;t.hu.set(e,n.withResumeToken(po.EMPTY_BYTE_STRING,n.snapshotVersion)),Yu(t,e);const s=new nu(n.target,e,1,n.sequenceNumber);Xu(t,s)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){_i("RemoteStore","Failed to raise snapshot:",e),await ih(t,e)}}async function ih(t,e,n){if(!no(e))throw e;t.lu.add(1),await Hu(t),t._u.set("Offline"),n||(n=()=>Cu(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{_i("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await Gu(t)}))}function oh(t,e){return e().catch((n=>ih(t,n,e)))}async function ah(t){const e=Di(t),n=vh(e);let s=e.au.length>0?e.au[e.au.length-1].batchId:-1;for(;ch(e);)try{const t=await Au(e.localStore,s);if(null===t){0===e.au.length&&n.ko();break}s=t.batchId,uh(e,t)}catch(t){await ih(e,t)}hh(e)&&lh(e)}function ch(t){return th(t)&&t.au.length<10}function uh(t,e){t.au.push(e);const n=vh(t);n.Co()&&n.zo&&n.Ho(e.mutations)}function hh(t){return th(t)&&!vh(t).Do()&&t.au.length>0}function lh(t){vh(t).start()}async function dh(t){vh(t).Xo()}async function fh(t){const e=vh(t);for(const n of t.au)e.Ho(n.mutations)}async function ph(t,e,n){const s=t.au.shift(),r=tu.from(s,e,n);await oh(t,(()=>t.remoteSyncer.applySuccessfulWrite(r))),await ah(t)}async function gh(t,e){e&&vh(t).zo&&await async function(t,e){if(function(t){switch(t){default:return Ai();case Ni.CANCELLED:case Ni.UNKNOWN:case Ni.DEADLINE_EXCEEDED:case Ni.RESOURCE_EXHAUSTED:case Ni.INTERNAL:case Ni.UNAVAILABLE:case Ni.UNAUTHENTICATED:return!1;case Ni.INVALID_ARGUMENT:case Ni.NOT_FOUND:case Ni.ALREADY_EXISTS:case Ni.PERMISSION_DENIED:case Ni.FAILED_PRECONDITION:case Ni.ABORTED:case Ni.OUT_OF_RANGE:case Ni.UNIMPLEMENTED:case Ni.DATA_LOSS:return!0}}(n=e.code)&&n!==Ni.ABORTED){const n=t.au.shift();vh(t).No(),await oh(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await ah(t)}var n}(t,e),hh(t)&&lh(t)}async function mh(t,e){const n=Di(t);n.asyncQueue.verifyOperationInProgress(),_i("RemoteStore","RemoteStore received new credentials");const s=th(n);n.lu.add(3),await Hu(n),s&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await Gu(n)}function yh(t){return t.mu||(t.mu=function(t,e,n){const s=Di(t);return s.tu(),new Bu(e,s.bo,s.authCredentials,s.appCheckCredentials,s.wt,n)
/**
     * @license
     * Copyright 2018 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}(t.datastore,t.asyncQueue,{zr:nh.bind(null,t),Jr:sh.bind(null,t),Go:rh.bind(null,t)}),t.fu.push((async e=>{e?(t.mu.No(),Zu(t)?Ju(t):t._u.set("Unknown")):(await t.mu.stop(),eh(t))}))),t.mu}function vh(t){return t.gu||(t.gu=function(t,e,n){const s=Di(t);return s.tu(),new ju(e,s.bo,s.authCredentials,s.appCheckCredentials,s.wt,n)}(t.datastore,t.asyncQueue,{zr:dh.bind(null,t),Jr:gh.bind(null,t),Yo:fh.bind(null,t),Jo:ph.bind(null,t)}),t.fu.push((async e=>{e?(t.gu.No(),await ah(t)):(await t.gu.stop(),t.au.length>0&&(_i("RemoteStore",`Stopping write stream with ${t.au.length} pending writes`),t.au=[]))}))),t.gu
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}class wh{constructor(t,e,n,s,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=r,this.deferred=new Ri,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,s,r){const i=Date.now()+n,o=new wh(t,e,i,s,r);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new xi(Ni.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function bh(t,e){if(Ii("AsyncQueue",`${e}: ${t}`),no(t))return new xi(Ni.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Eh{constructor(t){this.comparator=t?(e,n)=>t(e,n)||Xi.comparator(e.key,n.key):(t,e)=>Xi.comparator(t.key,e.key),this.keyedMap=ac(),this.sortedSet=new ao(this.comparator)}static emptySet(t){return new Eh(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Eh))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(!t.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Eh;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Th{constructor(){this.yu=new ao(Xi.comparator)}track(t){const e=t.doc.key,n=this.yu.get(e);n?0!==t.type&&3===n.type?this.yu=this.yu.insert(e,t):3===t.type&&1!==n.type?this.yu=this.yu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.yu=this.yu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.yu=this.yu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.yu=this.yu.remove(e):1===t.type&&2===n.type?this.yu=this.yu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.yu=this.yu.insert(e,{type:2,doc:t.doc}):Ai():this.yu=this.yu.insert(e,t)}pu(){const t=[];return this.yu.inorderTraversal(((e,n)=>{t.push(n)})),t}}class _h{constructor(t,e,n,s,r,i,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=r,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,s){const r=[];return e.forEach((t=>{r.push({type:0,doc:t})})),new _h(t,e,Eh.emptySet(e),r,n,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ma(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t].type!==n[t].type||!e[t].doc.isEqual(n[t].doc))return!1;return!0}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ih{constructor(){this.Iu=void 0,this.listeners=[]}}class Ch{constructor(){this.queries=new sc((t=>ya(t)),ma),this.onlineState="Unknown",this.Tu=new Set}}function Sh(t,e){const n=Di(t);let s=!1;for(const t of e){const e=t.query,r=n.queries.get(e);if(r){for(const e of r.listeners)e.Au(t)&&(s=!0);r.Iu=t}}s&&kh(n)}function Ah(t,e,n){const s=Di(t),r=s.queries.get(e);if(r)for(const t of r.listeners)t.onError(n);s.queries.delete(e)}function kh(t){t.Tu.forEach((t=>{t.next()}))}class Dh{constructor(t,e,n){this.query=t,this.Ru=e,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=n||{}}Au(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new _h(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.bu?this.vu(t)&&(this.Ru.next(t),e=!0):this.Vu(t,this.onlineState)&&(this.Su(t),e=!0),this.Pu=t,e}onError(t){this.Ru.error(t)}Eu(t){this.onlineState=t;let e=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,t)&&(this.Su(this.Pu),e=!0),e}Vu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return!(this.options.Du&&n||t.docs.isEmpty()&&"Offline"!==e)}vu(t){if(t.docChanges.length>0)return!0;const e=this.Pu&&this.Pu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Su(t){t=_h.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.bu=!0,this.Ru.next(t)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Nh{constructor(t){this.key=t}}class xh{constructor(t){this.key=t}}class Rh{constructor(t,e){this.query=t,this.Fu=e,this.$u=null,this.current=!1,this.Bu=pc(),this.mutatedKeys=pc(),this.Lu=ba(t),this.Uu=new Eh(this.Lu)}get qu(){return this.Fu}Ku(t,e){const n=e?e.Gu:new Th,s=e?e.Uu:this.Uu;let r=e?e.mutatedKeys:this.mutatedKeys,i=s,o=!1;const a="F"===this.query.limitType&&s.size===this.query.limit?s.last():null,c="L"===this.query.limitType&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((t,e)=>{const u=s.get(t),h=wa(this.query,e)?e:null,l=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let f=!1;u&&h?u.data.isEqual(h.data)?l!==d&&(n.track({type:3,doc:h}),f=!0):this.Qu(u,h)||(n.track({type:2,doc:h}),f=!0,(a&&this.Lu(h,a)>0||c&&this.Lu(h,c)<0)&&(o=!0)):!u&&h?(n.track({type:0,doc:h}),f=!0):u&&!h&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(h?(i=i.add(h),r=d?r.add(t):r.delete(t)):(i=i.delete(t),r=r.delete(t)))})),null!==this.query.limit)for(;i.size>this.query.limit;){const t="F"===this.query.limitType?i.last():i.first();i=i.delete(t.key),r=r.delete(t.key),n.track({type:1,doc:t})}return{Uu:i,Gu:n,Mi:o,mutatedKeys:r}}Qu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const s=this.Uu;this.Uu=t.Uu,this.mutatedKeys=t.mutatedKeys;const r=t.Gu.pu();r.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ai()}};return n(t)-n(e)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t.type,e.type)||this.Lu(t.doc,e.doc))),this.ju(n);const i=e?this.Wu():[],o=0===this.Bu.size&&this.current?1:0,a=o!==this.$u;return this.$u=o,0!==r.length||a?{snapshot:new _h(this.query,t.Uu,s,r,t.mutatedKeys,0===o,a,!1),zu:i}:{zu:i}}Eu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new Th,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{zu:[]}}Hu(t){return!this.Fu.has(t)&&!!this.Uu.has(t)&&!this.Uu.get(t).hasLocalMutations}ju(t){t&&(t.addedDocuments.forEach((t=>this.Fu=this.Fu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Fu=this.Fu.delete(t))),this.current=t.current)}Wu(){if(!this.current)return[];const t=this.Bu;this.Bu=pc(),this.Uu.forEach((t=>{this.Hu(t.key)&&(this.Bu=this.Bu.add(t.key))}));const e=[];return t.forEach((t=>{this.Bu.has(t)||e.push(new xh(t))})),this.Bu.forEach((n=>{t.has(n)||e.push(new Nh(n))})),e}Ju(t){this.Fu=t.ji,this.Bu=pc();const e=this.Ku(t.documents);return this.applyChanges(e,!0)}Yu(){return _h.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,0===this.$u)}}class Oh{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Lh{constructor(t){this.key=t,this.Xu=!1}}class Mh{constructor(t,e,n,s,r,i){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=i,this.Zu={},this.tc=new sc((t=>ya(t)),ma),this.ec=new Map,this.nc=new Set,this.sc=new ao(Xi.comparator),this.ic=new Map,this.rc=new du,this.oc={},this.uc=new Map,this.cc=au.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return!0===this.ac}}async function Ph(t,e){const n=function(t){const e=Di(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Uh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Zh.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Bh.bind(null,e),e.Zu.Go=Sh.bind(null,e.eventManager),e.Zu.lc=Ah.bind(null,e.eventManager),e}(t);let s,r;const i=n.tc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.Yu();else{const t=await function(t,e){const n=Di(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let s;return n.Vs.getTargetData(t,e).next((r=>r?(s=r,eo.resolve(s)):n.Vs.allocateTargetId(t).next((r=>(s=new nu(e,r,0,t.currentSequenceNumber),n.Vs.addTargetData(t,s).next((()=>s)))))))})).then((t=>{const s=n.$i.get(t.targetId);return(null===s||t.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.$i=n.$i.insert(t.targetId,t),n.Bi.set(e,t.targetId)),t}))}(n.localStore,pa(e));n.isPrimaryClient&&Wu(n.remoteStore,t);const i=n.sharedClientState.addLocalQueryTarget(t.targetId);s=t.targetId,r=await async function(t,e,n,s){t.hc=(e,n,s)=>async function(t,e,n,s){let r=e.view.Ku(n);r.Mi&&(r=await Du(t.localStore,e.query,!1).then((({documents:t})=>e.view.Ku(t,r))));const i=s&&s.targetChanges.get(e.targetId),o=e.view.applyChanges(r,t.isPrimaryClient,i);return Wh(t,e.targetId,o.zu),o.snapshot}(t,e,n,s);const r=await Du(t.localStore,e,!0),i=new Rh(e,r.ji),o=i.Ku(r.documents),a=vc.createSynthesizedTargetChangeForCurrentChange(n,s&&"Offline"!==t.onlineState),c=i.applyChanges(o,t.isPrimaryClient,a);Wh(t,n,c.zu);const u=new Oh(e,n,i);return t.tc.set(e,u),t.ec.has(n)?t.ec.get(n).push(e):t.ec.set(n,[e]),c.snapshot}(n,e,s,"current"===i)}return r}async function Fh(t,e){const n=Di(t),s=n.tc.get(e),r=n.ec.get(s.targetId);if(r.length>1)return n.ec.set(s.targetId,r.filter((t=>!ma(t,e)))),void n.tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await ku(n.localStore,s.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(s.targetId),Qu(n.remoteStore,s.targetId),Gh(n,s.targetId)})).catch(to)):(Gh(n,s.targetId),await ku(n.localStore,s.targetId,!0))}async function Vh(t,e,n){const s=function(t){const e=Di(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=jh.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=qh.bind(null,e),e}(t);try{const t=await function(t,e){const n=Di(t),s=Ki.now(),r=e.reduce(((t,e)=>t.add(e.key)),pc());let i,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=ic(),c=pc();return n.Ui.getEntries(t,r).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((r=>{i=r;const o=[];for(const t of e){const e=Ka(t,i.get(t.key).overlayedDocument);null!=e&&o.push(new Ha(t.key,e,Bo(e.value.mapValue),Va.exists(!0)))}return n.mutationQueue.addMutationBatch(t,s,o,e)})).next((e=>{o=e;const s=e.applyToLocalDocumentSet(i,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,s)}))})).then((()=>({batchId:o.batchId,changes:cc(i)})))}(s.localStore,e);s.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let s=t.oc[t.currentUser.toKey()];s||(s=new ao(ji)),s=s.insert(e,n),t.oc[t.currentUser.toKey()]=s}(s,t.batchId,n),await Yh(s,t.changes),await ah(s.remoteStore)}catch(t){const e=bh(t,"Failed to persist write");n.reject(e)}}async function Uh(t,e){const n=Di(t);try{const t=await Su(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const s=n.ic.get(e);s&&(ki(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?s.Xu=!0:t.modifiedDocuments.size>0?ki(s.Xu):t.removedDocuments.size>0&&(ki(s.Xu),s.Xu=!1))})),await Yh(n,t,e)}catch(t){await to(t)}}function $h(t,e,n){const s=Di(t);if(s.isPrimaryClient&&0===n||!s.isPrimaryClient&&1===n){const t=[];s.tc.forEach(((n,s)=>{const r=s.view.Eu(e);r.snapshot&&t.push(r.snapshot)})),function(t,e){const n=Di(t);n.onlineState=e;let s=!1;n.queries.forEach(((t,n)=>{for(const t of n.listeners)t.Eu(e)&&(s=!0)})),s&&kh(n)}(s.eventManager,e),t.length&&s.Zu.Go(t),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Bh(t,e,n){const s=Di(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.ic.get(e),i=r&&r.key;if(i){let t=new ao(Xi.comparator);t=t.insert(i,jo.newNoDocument(i,zi.min()));const n=pc().add(i),r=new yc(zi.min(),new Map,new ho(ji),t,n);await Uh(s,r),s.sc=s.sc.remove(i),s.ic.delete(e),Xh(s)}else await ku(s.localStore,e,!1).then((()=>Gh(s,e,n))).catch(to)}async function jh(t,e){const n=Di(t),s=e.batch.batchId;try{const t=await function(t,e){const n=Di(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const s=e.batch.keys(),r=n.Ui.newChangeBuffer({trackRemovals:!0});return function(t,e,n,s){const r=n.batch,i=r.keys();let o=eo.resolve();return i.forEach((t=>{o=o.next((()=>s.getEntry(e,t))).next((e=>{const i=n.docVersions.get(t);ki(null!==i),e.version.compareTo(i)<0&&(r.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),s.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,r)))}(n,t,e,r).next((()=>r.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=pc();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,s)))}))}(n.localStore,e);zh(n,s,null),Kh(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Yh(n,t)}catch(t){await to(t)}}async function qh(t,e,n){const s=Di(t);try{const t=await function(t,e){const n=Di(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let s;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(ki(null!==e),s=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,s,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,s))).next((()=>n.localDocuments.getDocuments(t,s)))}))}(s.localStore,e);zh(s,e,n),Kh(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Yh(s,t)}catch(n){await to(n)}}function Kh(t,e){(t.uc.get(e)||[]).forEach((t=>{t.resolve()})),t.uc.delete(e)}function zh(t,e,n){const s=Di(t);let r=s.oc[s.currentUser.toKey()];if(r){const t=r.get(e);t&&(n?t.reject(n):t.resolve(),r=r.remove(e)),s.oc[s.currentUser.toKey()]=r}}function Gh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ec.get(e))t.tc.delete(s),n&&t.Zu.lc(s,n);t.ec.delete(e),t.isPrimaryClient&&t.rc.us(e).forEach((e=>{t.rc.containsKey(e)||Hh(t,e)}))}function Hh(t,e){t.nc.delete(e.path.canonicalString());const n=t.sc.get(e);null!==n&&(Qu(t.remoteStore,n),t.sc=t.sc.remove(e),t.ic.delete(n),Xh(t))}function Wh(t,e,n){for(const s of n)s instanceof Nh?(t.rc.addReference(s.key,e),Qh(t,s)):s instanceof xh?(_i("SyncEngine","Document no longer in limbo: "+s.key),t.rc.removeReference(s.key,e),t.rc.containsKey(s.key)||Hh(t,s.key)):Ai()}function Qh(t,e){const n=e.key,s=n.path.canonicalString();t.sc.get(n)||t.nc.has(s)||(_i("SyncEngine","New document in limbo: "+n),t.nc.add(s),Xh(t))}function Xh(t){for(;t.nc.size>0&&t.sc.size<t.maxConcurrentLimboResolutions;){const e=t.nc.values().next().value;t.nc.delete(e);const n=new Xi(Hi.fromString(e)),s=t.cc.next();t.ic.set(s,new Lh(n)),t.sc=t.sc.insert(n,s),Wu(t.remoteStore,new nu(pa(ua(n.path)),s,2,so.ot))}}async function Yh(t,e,n){const s=Di(t),r=[],i=[],o=[];s.tc.isEmpty()||(s.tc.forEach(((t,a)=>{o.push(s.hc(a,e,n).then((t=>{if(t){s.isPrimaryClient&&s.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),r.push(t);const e=Eu.Vi(a.targetId,t);i.push(e)}})))})),await Promise.all(o),s.Zu.Go(r),await async function(t,e){const n=Di(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>eo.forEach(e,(e=>eo.forEach(e.Pi,(s=>n.persistence.referenceDelegate.addReference(t,e.targetId,s))).next((()=>eo.forEach(e.vi,(s=>n.persistence.referenceDelegate.removeReference(t,e.targetId,s)))))))))}catch(t){if(!no(t))throw t;_i("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.$i.get(e),s=t.snapshotVersion,r=t.withLastLimboFreeSnapshotVersion(s);n.$i=n.$i.insert(e,r)}}}(s.localStore,i))}async function Jh(t,e){const n=Di(t);if(!n.currentUser.isEqual(e)){_i("SyncEngine","User change. New user:",e.toKey());const t=await Iu(n.localStore,e);n.currentUser=e,function(t,e){t.uc.forEach((t=>{t.forEach((t=>{t.reject(new xi(Ni.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),t.uc.clear()}(n),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Yh(n,t.Ki)}}function Zh(t,e){const n=Di(t),s=n.ic.get(e);if(s&&s.Xu)return pc().add(s.key);{let t=pc();const s=n.ec.get(e);if(!s)return t;for(const e of s){const s=n.tc.get(e);t=t.unionWith(s.view.qu)}return t}}class tl{constructor(){this.synchronizeTabs=!1}async initialize(t){this.wt=Vu(t.databaseInfo.databaseId),this.sharedClientState=this.dc(t),this.persistence=this._c(t),await this.persistence.start(),this.localStore=this.wc(t),this.gcScheduler=this.mc(t,this.localStore),this.indexBackfillerScheduler=this.gc(t,this.localStore)}mc(t,e){return null}gc(t,e){return null}wc(t){return function(t,e,n,s){return new _u(t,e,n,s)}(this.persistence,new Tu,t.initialUser,this.wt)}_c(t){return new vu(bu.Os,this.wt)}dc(t){return new xu}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class el{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>$h(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Jh.bind(null,this.syncEngine),await async function(t,e){const n=Di(t);e?(n.lu.delete(2),await Gu(n)):e||(n.lu.add(2),await Hu(n),n._u.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Ch}createDatastore(t){const e=Vu(t.databaseInfo.databaseId),n=(s=t.databaseInfo,new Pu(s));var s;return function(t,e,n,s){return new qu(t,e,n,s)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,s=t.asyncQueue,r=t=>$h(this.syncEngine,t,0),i=Ou.V()?new Ou:new Ru,new zu(e,n,s,r,i);var e,n,s,r,i}createSyncEngine(t,e){return function(t,e,n,s,r,i,o){const a=new Mh(t,e,n,s,r,i);return o&&(a.ac=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=Di(t);_i("RemoteStore","RemoteStore shutting down."),e.lu.add(5),await Hu(e),e.du.shutdown(),e._u.set("Unknown")}(this.remoteStore)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class nl{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ic(this.observer.next,t)}error(t){this.observer.error?this.Ic(this.observer.error,t):Ii("Uncaught Error in snapshot listener:",t)}Tc(){this.muted=!0}Ic(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class sl{constructor(t,e,n,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=wi.UNAUTHENTICATED,this.clientId=Bi.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{_i("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(_i("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new xi(Ni.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ri;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=bh(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function rl(t,e){t.asyncQueue.verifyOperationInProgress();const n=await async function(t){return t.offlineComponents||(_i("FirestoreClient","Using default OfflineComponentProvider"),await async function(t,e){t.asyncQueue.verifyOperationInProgress(),_i("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener((async t=>{s.isEqual(t)||(await Iu(e.localStore,t),s=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}(t,new tl)),t.offlineComponents}(t);_i("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener((t=>mh(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>mh(e.remoteStore,n))),t.onlineComponents=e}async function il(t){return t.onlineComponents||(_i("FirestoreClient","Using default OnlineComponentProvider"),await rl(t,new el)),t.onlineComponents}async function ol(t){const e=await il(t),n=e.eventManager;return n.onListen=Ph.bind(null,e.syncEngine),n.onUnlisten=Fh.bind(null,e.syncEngine),n}const al=new Map;
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function cl(t,e,n){if(!n)throw new xi(Ni.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ul(t){if(!Xi.isDocumentKey(t))throw new xi(Ni.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function hl(t){if(Xi.isDocumentKey(t))throw new xi(Ni.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ll(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Ai()}function dl(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new xi(Ni.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ll(t);throw new xi(Ni.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class fl{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new xi(Ni.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new xi(Ni.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,s){if(!0===e&&!0===s)throw new xi(Ni.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class pl{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new fl({}),this._settingsFrozen=!1,t instanceof _o?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new xi(Ni.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _o(t.options.projectId)}(t))}get app(){if(!this._app)throw new xi(Ni.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new xi(Ni.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new fl(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new Li;switch(t.type){case"gapi":const e=t.client;return ki(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new Fi(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new xi(Ni.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=al.get(t);e&&(_i("ComponentProvider","Removing Datastore"),al.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class gl{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new yl(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new gl(this.firestore,t,this._key)}}class ml{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new ml(this.firestore,t,this._query)}}class yl extends ml{constructor(t,e,n){super(t,e,ua(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new gl(this.firestore,null,new Xi(t))}withConverter(t){return new yl(this.firestore,t,this._path)}}function vl(t,e,...n){if(t=ht(t),cl("collection","path",e),t instanceof pl){const s=Hi.fromString(e,...n);return hl(s),new yl(t,null,s)}{if(!(t instanceof gl||t instanceof yl))throw new xi(Ni.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Hi.fromString(e,...n));return hl(s),new yl(t.firestore,null,s)}}function wl(t,e,...n){if(t=ht(t),1===arguments.length&&(e=Bi.I()),cl("doc","path",e),t instanceof pl){const s=Hi.fromString(e,...n);return ul(s),new gl(t,null,new Xi(s))}{if(!(t instanceof gl||t instanceof yl))throw new xi(Ni.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Hi.fromString(e,...n));return ul(s),new gl(t.firestore,t instanceof yl?t.converter:null,new Xi(s))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class bl{constructor(){this.Mc=Promise.resolve(),this.Oc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new Uu(this,"async_queue_retry"),this.Kc=()=>{const t=Fu();t&&_i("AsyncQueue","Visibility state changed to "+t.visibilityState),this.So.Eo()};const t=Fu();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Gc(),this.Qc(t)}enterRestrictedMode(t){if(!this.Fc){this.Fc=!0,this.Uc=t||!1;const e=Fu();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Kc)}}enqueue(t){if(this.Gc(),this.Fc)return new Promise((()=>{}));const e=new Ri;return this.Qc((()=>this.Fc&&this.Uc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Oc.push(t),this.jc())))}async jc(){if(0!==this.Oc.length){try{await this.Oc[0](),this.Oc.shift(),this.So.reset()}catch(t){if(!no(t))throw t;_i("AsyncQueue","Operation failed with retryable error: "+t)}this.Oc.length>0&&this.So.Io((()=>this.jc()))}}Qc(t){const e=this.Mc.then((()=>(this.Lc=!0,t().catch((t=>{this.Bc=t,this.Lc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t);throw Ii("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Lc=!1,t))))));return this.Mc=e,e}enqueueAfterDelay(t,e,n){this.Gc(),this.qc.indexOf(t)>-1&&(e=0);const s=wh.createAndSchedule(this,t,e,n,(t=>this.Wc(t)));return this.$c.push(s),s}Gc(){this.Bc&&Ai()}verifyOperationInProgress(){}async zc(){let t;do{t=this.Mc,await t}while(t!==this.Mc)}Hc(t){for(const e of this.$c)if(e.timerId===t)return!0;return!1}Jc(t){return this.zc().then((()=>{this.$c.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.$c)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.zc()}))}Yc(t){this.qc.push(t)}Wc(t){const e=this.$c.indexOf(t);this.$c.splice(e,1)}}function El(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const t of["next","error","complete"])if(t in n&&"function"==typeof n[t])return!0;return!1}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t)}class Tl extends pl{constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new bl,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Il(this),this._firestoreClient.terminate()}}function _l(t){return t._firestoreClient||Il(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Il(t){var e;const n=t._freezeSettings(),s=function(t,e,n,s){return new To(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new sl(t._authCredentials,t._appCheckCredentials,t._queue,s)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Cl{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new xi(Ni.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Qi(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Sl{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Sl(po.fromBase64String(t))}catch(t){throw new xi(Ni.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Sl(po.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Al{constructor(t){this._methodName=t}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class kl{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new xi(Ni.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new xi(Ni.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return ji(this._lat,t._lat)||ji(this._long,t._long)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Dl=/^__.*__$/;class Nl{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Ha(t,this.data,this.fieldMask,e,this.fieldTransforms):new Ga(t,this.data,e,this.fieldTransforms)}}class xl{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new Ha(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Rl(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ai()}}class Ol{constructor(t,e,n,s,r,i){this.settings=t,this.databaseId=e,this.wt=n,this.ignoreUndefinedProperties=s,void 0===r&&this.Xc(),this.fieldTransforms=r||[],this.fieldMask=i||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(t){return new Ol(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.ta({path:n,na:!1});return s.sa(t),s}ia(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.ta({path:n,na:!1});return s.Xc(),s}ra(t){return this.ta({path:void 0,na:!0})}oa(t){return zl(t,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Xc(){if(this.path)for(let t=0;t<this.path.length;t++)this.sa(this.path.get(t))}sa(t){if(0===t.length)throw this.oa("Document fields must not be empty");if(Rl(this.Zc)&&Dl.test(t))throw this.oa('Document fields cannot begin and end with "__"')}}class Ll{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.wt=n||Vu(t)}aa(t,e,n,s=!1){return new Ol({Zc:t,methodName:e,ca:n,path:Qi.emptyPath(),na:!1,ua:s},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function Ml(t){const e=t._freezeSettings(),n=Vu(t._databaseId);return new Ll(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Pl(t,e,n,s,r,i={}){const o=t.aa(i.merge||i.mergeFields?2:0,e,n,r);Bl("Data must be an object, but it was:",o,s);const a=Ul(s,o);let c,u;if(i.merge)c=new fo(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const t=[];for(const s of i.mergeFields){const r=jl(e,s,n);if(!o.contains(r))throw new xi(Ni.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);Gl(t,r)||t.push(r)}c=new fo(t),u=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,u=o.fieldTransforms;return new Nl(new $o(a),c,u)}class Fl extends Al{_toFieldTransform(t){if(2!==t.Zc)throw 1===t.Zc?t.oa(`${this._methodName}() can only appear at the top level of your update data`):t.oa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Fl}}function Vl(t,e){if($l(t=ht(t)))return Bl("Unsupported field value:",e,t),Ul(t,e);if(t instanceof Al)return function(t,e){if(!Rl(e.Zc))throw e.oa(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.oa(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.na&&4!==e.Zc)throw e.oa("Nested arrays are not supported");return function(t,e){const n=[];let s=0;for(const r of t){let t=Vl(r,e.ra(s));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),s++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=ht(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Ia(e.wt,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=Ki.fromDate(t);return{timestampValue:Dc(e.wt,n)}}if(t instanceof Ki){const n=new Ki(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Dc(e.wt,n)}}if(t instanceof kl)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Sl)return{bytesValue:Nc(e.wt,t._byteString)};if(t instanceof gl){const n=e.databaseId,s=t.firestore._databaseId;if(!s.isEqual(n))throw e.oa(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Oc(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.oa(`Unsupported field value: ${ll(t)}`)}(t,e)}function Ul(t,e){const n={};return oo(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):io(t,((t,s)=>{const r=Vl(s,e.ea(t));null!=r&&(n[t]=r)})),{mapValue:{fields:n}}}function $l(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof Ki||t instanceof kl||t instanceof Sl||t instanceof gl||t instanceof Al)}function Bl(t,e,n){if(!$l(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const s=ll(n);throw"an object"===s?e.oa(t+" a custom object"):e.oa(t+" "+s)}}function jl(t,e,n){if((e=ht(e))instanceof Cl)return e._internalPath;if("string"==typeof e)return Kl(t,e);throw zl("Field path arguments must be of type string or ",t,!1,void 0,n)}const ql=new RegExp("[~\\*/\\[\\]]");function Kl(t,e,n){if(e.search(ql)>=0)throw zl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Cl(...e.split("."))._internalPath}catch(s){throw zl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function zl(t,e,n,s,r){const i=s&&!s.isEmpty(),o=void 0!==r;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new xi(Ni.INVALID_ARGUMENT,a+t+c)}function Gl(t,e){return t.some((t=>t.isEqual(e)))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Hl{constructor(t,e,n,s,r){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new gl(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Wl(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Ql("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Wl extends Hl{data(){return super.data()}}function Ql(t,e){return"string"==typeof e?Kl(t,e):e instanceof Cl?e._internalPath:e._delegate._internalPath}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Xl{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Yl extends Hl{constructor(t,e,n,s,r,i){super(t,e,n,s,i),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Jl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Ql("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Jl extends Yl{data(t={}){return super.data(t)}}class Zl{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Xl(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new Jl(this._firestore,this._userDataWriter,n.key,n,new Xl(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new xi(Ni.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>({type:"added",doc:new Jl(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Xl(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++})))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const s=new Jl(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Xl(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let r=-1,i=-1;return 0!==e.type&&(r=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),i=n.indexOf(e.doc.key)),{type:td(e.type),doc:s,oldIndex:r,newIndex:i}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function td(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ai()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function ed(t,...e){for(const n of e)t=n._apply(t);return t}class nd extends class{}{constructor(t,e){super(),this.fa=t,this.wa=e,this.type="orderBy"}_apply(t){const e=function(t,e,n){if(null!==t.startAt)throw new xi(Ni.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new xi(Ni.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const s=new ra(e,n);return function(t,e){if(null===la(t)){const n=da(t);null!==n&&function(t,e,n){if(!n.isEqual(e))throw new xi(Ni.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(0,n,e.field)}}(t,s),s}(t._query,this.fa,this.wa);return new ml(t.firestore,t.converter,function(t,e){const n=t.explicitOrderBy.concat([e]);return new ca(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function sd(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}class rd extends class{convertValue(t,e="none"){switch(Ao(t)){case 0:return null;case 1:return t.booleanValue;case 2:return yo(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(vo(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw Ai()}}convertObject(t,e){const n={};return io(t.fields,((t,s)=>{n[t]=this.convertValue(s,e)})),n}convertGeoPoint(t){return new kl(yo(t.latitude),yo(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=bo(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Eo(t));default:return null}}convertTimestamp(t){const e=mo(t);return new Ki(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Hi.fromString(t);ki(Jc(n));const s=new _o(n.get(1),n.get(3)),r=new Xi(n.popFirst(5));return s.isEqual(e)||Ii(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),r}}{constructor(t){super(),this.firestore=t}convertBytes(t){return new Sl(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new gl(this.firestore,null,e)}}function id(t,e,n,...s){t=dl(t,gl);const r=dl(t.firestore,Tl),i=Ml(r);let o;return o="string"==typeof(e=ht(e))||e instanceof Cl?function(t,e,n,s,r,i){const o=t.aa(1,e,n),a=[jl(e,s,n)],c=[r];if(i.length%2!=0)throw new xi(Ni.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let t=0;t<i.length;t+=2)a.push(jl(e,i[t])),c.push(i[t+1]);const u=[],h=$o.empty();for(let t=a.length-1;t>=0;--t)if(!Gl(u,a[t])){const e=a[t];let n=c[t];n=ht(n);const s=o.ia(e);if(n instanceof Fl)u.push(e);else{const t=Vl(n,s);null!=t&&(u.push(e),h.set(e,t))}}const l=new fo(u);return new xl(h,l,o.fieldTransforms)}(i,"updateDoc",t._key,e,n,s):function(t,e,n,s){const r=t.aa(1,e,n);Bl("Data must be an object, but it was:",r,s);const i=[],o=$o.empty();io(s,((t,s)=>{const a=Kl(e,t,n);s=ht(s);const c=r.ia(a);if(s instanceof Fl)i.push(a);else{const t=Vl(s,c);null!=t&&(i.push(a),o.set(a,t))}}));const a=new fo(i);return new xl(o,a,r.fieldTransforms)}(i,"updateDoc",t._key,e),cd(r,[o.toMutation(t._key,Va.exists(!0))])}function od(t,e){const n=dl(t.firestore,Tl),s=wl(t),r=sd(t.converter,e);return cd(n,[Pl(Ml(t.firestore),"addDoc",s._key,r,null!==t.converter,{}).toMutation(s._key,Va.exists(!1))]).then((()=>s))}function ad(t,...e){var n,s,r;t=ht(t);let i={includeMetadataChanges:!1},o=0;"object"!=typeof e[o]||El(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(El(e[o])){const t=e[o];e[o]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[o+1]=null===(s=t.error)||void 0===s?void 0:s.bind(t),e[o+2]=null===(r=t.complete)||void 0===r?void 0:r.bind(t)}let c,u,h;if(t instanceof gl)u=dl(t.firestore,Tl),h=ua(t._key.path),c={next:n=>{e[o]&&e[o](function(t,e,n){const s=n.docs.get(e._key),r=new rd(t);return new Yl(t,r,e._key,s,new Xl(n.hasPendingWrites,n.fromCache),e.converter)}(u,t,n))},error:e[o+1],complete:e[o+2]};else{const n=dl(t,ml);u=dl(n.firestore,Tl),h=n._query;const s=new rd(u);c={next:t=>{e[o]&&e[o](new Zl(u,s,n,t))},error:e[o+1],complete:e[o+2]},function(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new xi(Ni.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(t._query)}return function(t,e,n,s){const r=new nl(s),i=new Dh(e,r,n);return t.asyncQueue.enqueueAndForget((async()=>async function(t,e){const n=Di(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new Ih),r)try{i.Iu=await n.onListen(s)}catch(t){const n=bh(t,`Initialization of query '${va(e.query)}' failed`);return void e.onError(n)}n.queries.set(s,i),i.listeners.push(e),e.Eu(n.onlineState),i.Iu&&e.Au(i.Iu)&&kh(n)}(await ol(t),i))),()=>{r.Tc(),t.asyncQueue.enqueueAndForget((async()=>async function(t,e){const n=Di(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const t=i.listeners.indexOf(e);t>=0&&(i.listeners.splice(t,1),r=0===i.listeners.length)}if(r)return n.queries.delete(s),n.onUnlisten(s)}(await ol(t),i)))}}(_l(u),h,a,c)}function cd(t,e){return function(t,e){const n=new Ri;return t.asyncQueue.enqueueAndForget((async()=>Vh(await function(t){return il(t).then((t=>t.syncEngine))}(t),e,n))),n.promise}(_l(t),e)}!function(t,e=!0){bi="9.9.2",Gt(new lt("firestore",((t,{options:n})=>{const s=t.getProvider("app").getImmediate(),r=new Tl(s,new Mi(t.getProvider("auth-internal")),new Ui(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),r._setSettings(n),r}),"PUBLIC")),Jt(vi,"3.4.14",t),Jt(vi,"3.4.14","esm2017")}();
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const ud="firebasestorage.googleapis.com";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class hd extends it{constructor(t,e){super(ld(t),`Firebase Storage: ${e} (${ld(t)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,hd.prototype)}_codeEquals(t){return ld(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function ld(t){return"storage/"+t}function dd(){return new hd("unknown","An unknown error occurred, please check the error payload for server response.")}function fd(t){return new hd("invalid-argument",t)}function pd(){return new hd("app-deleted","The Firebase app was deleted.")}function gd(t,e){return new hd("invalid-format","String does not match format '"+t+"': "+e)}function md(t){throw new hd("internal-error","Internal error: "+t)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class yd{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let n;try{n=yd.makeFromUrl(t,e)}catch(e){return new yd(t,"")}if(""===n.path)return n;throw new hd("invalid-default-bucket","Invalid default bucket '"+t+"'.")}static makeFromUrl(t,e){let n=null;const s="([A-Za-z0-9.\\-_]+)";const r=new RegExp("^gs://"+s+"(/(.*))?$","i");function i(t){t.path_=decodeURIComponent(t.path)}const o=e.replace(/[.]/g,"\\."),a=[{regex:r,indices:{bucket:1,path:3},postModify:function(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}},{regex:new RegExp(`^https?://${o}/v[A-Za-z0-9_]+/b/${s}/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:i},{regex:new RegExp(`^https?://${e===ud?"(?:storage.googleapis.com|storage.cloud.google.com)":e}/${s}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:i}];for(let e=0;e<a.length;e++){const s=a[e],r=s.regex.exec(t);if(r){const t=r[s.indices.bucket];let e=r[s.indices.path];e||(e=""),n=new yd(t,e),s.postModify(n);break}}if(null==n)throw function(t){return new hd("invalid-url","Invalid URL '"+t+"'.")}(t);return n}}class vd{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function wd(t){return"string"==typeof t||t instanceof String}function bd(t){return Ed()&&t instanceof Blob}function Ed(){return"undefined"!=typeof Blob}function Td(t,e,n,s){if(s<e)throw fd(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw fd(`Invalid value for '${t}'. Expected ${n} or less.`)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function _d(t,e,n){let s=e;return null==n&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function Id(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){n=n+(e(s)+"="+e(t[s]))+"&"}return n=n.slice(0,-1),n}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var Cd;!function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"}(Cd||(Cd={}));
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Sd{constructor(t,e,n,s,r,i,o,a,c,u,h){this.url_=t,this.method_=e,this.headers_=n,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=i,this.callback_=o,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((t,e)=>{this.resolve_=t,this.reject_=e,this.start_()}))}start_(){const t=(t,e)=>{if(e)return void t(!1,new Ad(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const s=t=>{const e=t.loaded,n=t.lengthComputable?t.total:-1;null!==this.progressCallback_&&this.progressCallback_(e,n)};null!==this.progressCallback_&&n.addUploadProgressListener(s),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(s),this.pendingConnection_=null;const e=n.getErrorCode()===Cd.NO_ERROR,r=n.getStatus();if(!e||this.isRetryStatusCode_(r)){const e=n.getErrorCode()===Cd.ABORT;return void t(!1,new Ad(!1,null,e))}const i=-1!==this.successCodes_.indexOf(r);t(!0,new Ad(i,n))}))},e=(t,e)=>{const n=this.resolve_,s=this.reject_,r=e.connection;if(e.wasSuccessCode)try{const t=this.callback_(r,r.getResponse());!
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function(t){return void 0!==t}(t)?n():n(t)}catch(t){s(t)}else if(null!==r){const t=dd();t.serverResponse=r.getErrorText(),this.errorCallback_?s(this.errorCallback_(r,t)):s(t)}else if(e.canceled){s(this.appDelete_?pd():new hd("canceled","User canceled the upload/download."))}else{s(new hd("retry-limit-exceeded","Max retry time for operation exceeded, please try again."))}};this.canceled_?e(0,new Ad(!1,null,!0)):this.backoffId_=function(t,e,n){let s=1,r=null,i=null,o=!1,a=0;function c(){return 2===a}let u=!1;function h(...t){u||(u=!0,e.apply(null,t))}function l(e){r=setTimeout((()=>{r=null,t(f,c())}),e)}function d(){i&&clearTimeout(i)}function f(t,...e){if(u)return void d();if(t)return d(),void h.call(null,t,...e);if(c()||o)return d(),void h.call(null,t,...e);let n;s<64&&(s*=2),1===a?(a=2,n=0):n=1e3*(s+Math.random()),l(n)}let p=!1;function g(t){p||(p=!0,d(),u||(null!==r?(t||(a=2),clearTimeout(r),l(0)):t||(a=1)))}return l(0),i=setTimeout((()=>{o=!0,g(!0)}),n),g}(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&function(t){t(!1)}(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(t){const e=t>=500&&t<600,n=-1!==[408,429].indexOf(t),s=-1!==this.additionalRetryCodes_.indexOf(t);return e||n||s}}class Ad{constructor(t,e,n){this.wasSuccessCode=t,this.connection=e,this.canceled=!!n}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function kd(){return"undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function Dd(...t){const e=kd();if(void 0!==e){const n=new e;for(let e=0;e<t.length;e++)n.append(t[e]);return n.getBlob()}if(Ed())return new Blob(t);throw new hd("unsupported-environment","This browser doesn't seem to support creating Blobs")}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const Nd="raw",xd="base64",Rd="base64url",Od="data_url";class Ld{constructor(t,e){this.data=t,this.contentType=e||null}}function Md(t,e){switch(t){case Nd:return new Ld(Pd(e));case xd:case Rd:return new Ld(Fd(t,e));case Od:return new Ld(function(t){const e=new Vd(t);return e.base64?Fd(xd,e.rest):function(t){let e;try{e=decodeURIComponent(t)}catch(t){throw gd(Od,"Malformed data URL.")}return Pd(e)}(e.rest)}(e),new Vd(e).contentType)}throw dd()}function Pd(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|63&s);else if(55296==(64512&s)){if(n<t.length-1&&56320==(64512&t.charCodeAt(n+1))){s=65536|(1023&s)<<10|1023&t.charCodeAt(++n),e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|63&s)}else e.push(239,191,189)}else 56320==(64512&s)?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|63&s)}return new Uint8Array(e)}function Fd(t,e){switch(t){case xd:{const n=-1!==e.indexOf("-"),s=-1!==e.indexOf("_");if(n||s){throw gd(t,"Invalid character '"+(n?"-":"_")+"' found: is it base64url encoded?")}break}case Rd:{const n=-1!==e.indexOf("+"),s=-1!==e.indexOf("/");if(n||s){throw gd(t,"Invalid character '"+(n?"+":"/")+"' found: is it base64 encoded?")}e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=atob(e)}catch(e){throw gd(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let t=0;t<n.length;t++)s[t]=n.charCodeAt(t);return s}class Vd{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(null===e)throw gd(Od,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=e[1]||null;null!=n&&(this.base64=function(t,e){if(!(t.length>=e.length))return!1;return t.substring(t.length-e.length)===e}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=t.substring(t.indexOf(",")+1)}}class Ud{constructor(t,e){let n=0,s="";bd(t)?(this.data_=t,n=t.size,s=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),n=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),n=t.length),this.size_=n,this.type_=s}size(){return this.size_}type(){return this.type_}slice(t,e){if(bd(this.data_)){const n=function(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(this.data_,t,e);return null===n?null:new Ud(n)}{const n=new Uint8Array(this.data_.buffer,t,e-t);return new Ud(n,!0)}}static getBlob(...t){if(Ed()){const e=t.map((t=>t instanceof Ud?t.data_:t));return new Ud(Dd.apply(null,e))}{const e=t.map((t=>wd(t)?Md(Nd,t).data:t.data_));let n=0;e.forEach((t=>{n+=t.byteLength}));const s=new Uint8Array(n);let r=0;return e.forEach((t=>{for(let e=0;e<t.length;e++)s[r++]=t[e]})),new Ud(s,!0)}}uploadData(){return this.data_}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function $d(t){let e;try{e=JSON.parse(t)}catch(t){return null}return function(t){return"object"==typeof t&&!Array.isArray(t)}(e)?e:null}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Bd(t){const e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function jd(t,e){return e}class qd{constructor(t,e,n,s){this.server=t,this.local=e||t,this.writable=!!n,this.xform=s||jd}}let Kd=null;function zd(){if(Kd)return Kd;const t=[];t.push(new qd("bucket")),t.push(new qd("generation")),t.push(new qd("metageneration")),t.push(new qd("name","fullPath",!0));const e=new qd("name");e.xform=function(t,e){return function(t){return!wd(t)||t.length<2?t:Bd(t)}(e)},t.push(e);const n=new qd("size");return n.xform=function(t,e){return void 0!==e?Number(e):e},t.push(n),t.push(new qd("timeCreated")),t.push(new qd("updated")),t.push(new qd("md5Hash",null,!0)),t.push(new qd("cacheControl",null,!0)),t.push(new qd("contentDisposition",null,!0)),t.push(new qd("contentEncoding",null,!0)),t.push(new qd("contentLanguage",null,!0)),t.push(new qd("contentType",null,!0)),t.push(new qd("metadata","customMetadata",!0)),Kd=t,Kd}function Gd(t,e,n){const s={type:"file"},r=n.length;for(let t=0;t<r;t++){const r=n[t];s[r.local]=r.xform(s,e[r.server])}return function(t,e){Object.defineProperty(t,"ref",{get:function(){const n=t.bucket,s=t.fullPath,r=new yd(n,s);return e._makeStorageReference(r)}})}(s,t),s}function Hd(t,e,n){const s=$d(e);if(null===s)return null;return Gd(t,s,n)}class Wd{constructor(t,e,n,s){this.url=t,this.method=e,this.handler=n,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Qd(t){if(!t)throw dd()}function Xd(t,e){return function(n,s){const r=Hd(t,s,e);return Qd(null!==r),function(t,e,n,s){const r=$d(e);if(null===r)return null;if(!wd(r.downloadTokens))return null;const i=r.downloadTokens;if(0===i.length)return null;const o=encodeURIComponent;return i.split(",").map((e=>{const r=t.bucket,i=t.fullPath;return _d("/b/"+o(r)+"/o/"+o(i),n,s)+Id({alt:"media",token:e})}))[0]}(r,s,t.host,t._protocol)}}function Yd(t){return function(e,n){let s;var r,i;return 401===e.getStatus()?s=e.getErrorText().includes("Firebase App Check token is invalid")?new hd("unauthorized-app","This app does not have permission to access Firebase Storage on this project."):new hd("unauthenticated","User is not authenticated, please authenticate using Firebase Authentication and try again."):402===e.getStatus()?(i=t.bucket,s=new hd("quota-exceeded","Quota for bucket '"+i+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===e.getStatus()?(r=t.path,s=new hd("unauthorized","User does not have permission to access '"+r+"'.")):s=n,s.serverResponse=n.serverResponse,s}}function Jd(t){const e=Yd(t);return function(n,s){let r=e(n,s);var i;return 404===n.getStatus()&&(i=t.path,r=new hd("object-not-found","Object '"+i+"' does not exist.")),r.serverResponse=s.serverResponse,r}}function Zd(t,e,n,s,r){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};const a=function(){let t="";for(let e=0;e<2;e++)t+=Math.random().toString().slice(2);return t}();o["Content-Type"]="multipart/related; boundary="+a;const c=function(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=function(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}(null,e)),s}(e,s,r),u=function(t,e){const n={},s=e.length;for(let r=0;r<s;r++){const s=e[r];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}(c,n),h="--"+a+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+u+"\r\n--"+a+"\r\nContent-Type: "+c.contentType+"\r\n\r\n",l="\r\n--"+a+"--",d=Ud.getBlob(h,s,l);if(null===d)throw new hd("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.");const f={name:c.fullPath},p=_d(i,t.host,t._protocol),g=t.maxUploadRetryTime,m=new Wd(p,"POST",function(t,e){return function(n,s){const r=Hd(t,s,e);return Qd(null!==r),r}}(t,n),g);return m.urlParams=f,m.headers=o,m.body=d.uploadData(),m.errorHandler=Yd(e),m}class tf extends class{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Cd.NO_ERROR,this.sendPromise_=new Promise((t=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=Cd.ABORT,t()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=Cd.NETWORK_ERROR,t()})),this.xhr_.addEventListener("load",(()=>{t()}))}))}send(t,e,n,s){if(this.sent_)throw md("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),void 0!==s)for(const t in s)s.hasOwnProperty(t)&&this.xhr_.setRequestHeader(t,s[t].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw md("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw md("cannot .getStatus() before sending");try{return this.xhr_.status}catch(t){return-1}}getResponse(){if(!this.sent_)throw md("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw md("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",t)}}{initXhr(){this.xhr_.responseType="text"}}function ef(){return new tf}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class nf{constructor(t,e){this._service=t,this._location=e instanceof yd?e:yd.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new nf(t,e)}get root(){const t=new yd(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Bd(this._location.path)}get storage(){return this._service}get parent(){const t=function(t){if(0===t.length)return null;const e=t.lastIndexOf("/");return-1===e?"":t.slice(0,e)}(this._location.path);if(null===t)return null;const e=new yd(this._location.bucket,t);return new nf(this._service,e)}_throwIfRoot(t){if(""===this._location.path)throw function(t){return new hd("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(t)}}function sf(t){t._throwIfRoot("getDownloadURL");const e=function(t,e,n){const s=_d(e.fullServerUrl(),t.host,t._protocol),r=t.maxOperationRetryTime,i=new Wd(s,"GET",Xd(t,n),r);return i.errorHandler=Jd(e),i}(t.storage,t._location,zd());return t.storage.makeRequestWithTokens(e,ef).then((t=>{if(null===t)throw new hd("no-download-url","The given file does not have any download URLs.");return t}))}function rf(t,e){if(t instanceof cf){const n=t;if(null==n._bucket)throw new hd("no-default-bucket","No default bucket found. Did you set the 'storageBucket' property when initializing the app?");const s=new nf(n,n._bucket);return null!=e?rf(s,e):s}return void 0!==e?function(t,e){const n=function(t,e){const n=e.split("/").filter((t=>t.length>0)).join("/");return 0===t.length?n:t+"/"+n}(t._location.path,e),s=new yd(t._location.bucket,n);return new nf(t.storage,s)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t,e):t}function of(t,e){if(e&&/^[A-Za-z]+:\/\//.test(e)){if(t instanceof cf)return new nf(t,e);throw fd("To use ref(service, url), the first argument must be a Storage instance.")}return rf(t,e)}function af(t,e){const n=null==e?void 0:e.storageBucket;return null==n?null:yd.makeFromBucketSpec(n,t)}class cf{constructor(t,e,n,s,r){this.app=t,this._authProvider=e,this._appCheckProvider=n,this._url=s,this._firebaseVersion=r,this._bucket=null,this._host=ud,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=s?yd.makeFromBucketSpec(s,this._host):af(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,null!=this._url?this._bucket=yd.makeFromBucketSpec(this._url,t):this._bucket=af(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Td("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Td("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(null!==e)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});if(t){return(await t.getToken()).token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((t=>t.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new nf(this,t)}_makeRequest(t,e,n,s){if(this._deleted)return new vd(pd());{const r=function(t,e,n,s,r,i){const o=Id(t.urlParams),a=t.url+o,c=Object.assign({},t.headers);return function(t,e){e&&(t["X-Firebase-GMPID"]=e)}(c,e),function(t,e){null!==e&&e.length>0&&(t.Authorization="Firebase "+e)}(c,n),function(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(null!=e?e:"AppManager")}(c,i),function(t,e){null!==e&&(t["X-Firebase-AppCheck"]=e)}(c,s),new Sd(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r)}(t,this._appId,n,s,e,this._firebaseVersion);return this._requests.add(r),r.getPromise().then((()=>this._requests.delete(r)),(()=>this._requests.delete(r))),r}}async makeRequestWithTokens(t,e){const[n,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,n,s).getPromise()}}const uf="@firebase/storage",hf="0.9.9",lf="storage";function df(t,e,n){return function(t,e,n){t._throwIfRoot("uploadBytes");const s=Zd(t.storage,t._location,zd(),new Ud(e,!0),n);return t.storage.makeRequestWithTokens(s,ef).then((e=>({metadata:e,ref:t})))}(t=ht(t),e,n)}function ff(t,e){return of(t=ht(t),e)}function pf(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new cf(n,s,r,e,Xt)}Gt(new lt(lf,pf,"PUBLIC").setMultipleInstances(!0)),Jt(uf,hf,""),Jt(uf,hf,"esm2017");
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
Jt("firebase","9.9.2","app");const gf=function(t,e={}){if("object"!=typeof e){e={name:e}}const n=Object.assign({name:Bt,automaticDataCollectionEnabled:!1},e),s=n.name;if("string"!=typeof s||!s)throw Wt.create("bad-app-name",{appName:String(s)});const r=qt.get(s);if(r){if(ct(t,r.options)&&ct(n,r.config))return r;throw Wt.create("duplicate-app",{appName:s})}const i=new pt(s);for(const t of Kt.values())i.addComponent(t);const o=new Qt(t,n,i);return qt.set(s,o),o}({apiKey:"AIzaSyB6xQPs2cYZJiLDX68FKMkkvQiJzqnDHn0",authDomain:"cloudnaming.firebaseapp.com",projectId:"cloudnaming",storageBucket:"cloudnaming.appspot.com",messagingSenderId:"715109841779",appId:"1:715109841779:web:e3400c78af8f2744afa306"}),mf=t=>({}),yf=t=>({});function vf(t){let e,n,r,i,o,a,c,h,y;const w=t[4].header,E=u(w,t,t[3],yf),_=t[4].default,C=u(_,t,t[3],null);return{c(){e=v("div"),n=b(),r=v("div"),E&&E.c(),i=b(),o=v("hr"),a=b(),C&&C.c(),I(e,"class","modal-background svelte-1b6qbrg"),I(r,"class","modal svelte-1b6qbrg"),I(r,"role","dialog"),I(r,"aria-modal","true")},m(s,u){g(s,e,u),g(s,n,u),g(s,r,u),E&&E.m(r,null),p(r,i),p(r,o),p(r,a),C&&C.m(r,null),t[5](r),c=!0,h||(y=[T(window,"keydown",t[2]),T(e,"click",t[1])],h=!0)},p(t,[e]){E&&E.p&&(!c||8&e)&&d(E,w,t,t[3],c?l(w,t[3],e,mf):f(t[3]),yf),C&&C.p&&(!c||8&e)&&d(C,_,t,t[3],c?l(_,t[3],e,null):f(t[3]),null)},i(t){c||(G(E,t),G(C,t),c=!0)},o(t){H(E,t),H(C,t),c=!1},d(i){i&&m(e),i&&m(n),i&&m(r),E&&E.d(i),C&&C.d(i),t[5](null),h=!1,s(y)}}}function wf(t,e,n){let{$$slots:s={},$$scope:r}=e;const i=N(),o=()=>i("close");let a;const c="undefined"!=typeof document&&document.activeElement;return c&&function(t){D().$$.on_destroy.push(t)}((()=>{c.focus()})),t.$$set=t=>{"$$scope"in t&&n(3,r=t.$$scope)},[a,o,t=>{if("Escape"!==t.key){if("Tab"===t.key){const e=a.querySelectorAll("*"),n=Array.from(e).filter((t=>t.tabIndex>=0));let s=n.indexOf(document.activeElement);-1===s&&t.shiftKey&&(s=0),s+=n.length+(t.shiftKey?-1:1),s%=n.length,n[s].focus(),t.preventDefault()}}else o()},r,s,function(t){R[t?"unshift":"push"]((()=>{a=t,n(0,a)}))}]}class bf extends Z{constructor(t){super(),J(this,t,wf,vf,i,{})}}function Ef(t,e,n){const s=t.slice();return s[4]=e[n],s}function Tf(t){let e,n,s,i,o,a,c,u,h=t[4].title+"",l=t[4].like+"";return{c(){e=v("li"),n=w(h),s=b(),i=w(l),o=b(),a=v("button"),a.textContent="^"},m(h,l){g(h,e,l),p(e,n),p(e,s),p(e,i),p(e,o),p(e,a),c||(u=T(a,"click",(function(){r(t[1](t[4]))&&t[1](t[4]).apply(this,arguments)})),c=!0)},p(e,s){t=e,1&s&&h!==(h=t[4].title+"")&&C(n,h),1&s&&l!==(l=t[4].like+"")&&C(i,l)},d(t){t&&m(e),c=!1,u()}}}function _f(e){let n,s,r,i,o,a,u,h,l,d=e[0].titles,f=[];for(let t=0;t<d.length;t+=1)f[t]=Tf(Ef(e,d,t));return{c(){n=v("img"),r=b(),i=v("hr"),o=b();for(let t=0;t<f.length;t+=1)f[t].c();a=b(),u=v("form"),u.innerHTML='<input type="text" name="" id=""/> \n    <button>ok</button>',c(n.src,s=e[0].img)||I(n,"src",s),I(n,"alt","detailImg")},m(t,s){g(t,n,s),g(t,r,s),g(t,i,s),g(t,o,s);for(let e=0;e<f.length;e+=1)f[e].m(t,s);g(t,a,s),g(t,u,s),h||(l=T(u,"submit",_(e[2])),h=!0)},p(t,[e]){if(1&e&&!c(n.src,s=t[0].img)&&I(n,"src",s),3&e){let n;for(d=t[0].titles,n=0;n<d.length;n+=1){const s=Ef(t,d,n);f[n]?f[n].p(s,e):(f[n]=Tf(s),f[n].c(),f[n].m(a.parentNode,a))}for(;n<f.length;n+=1)f[n].d(1);f.length=d.length}},i:t,o:t,d(t){t&&m(n),t&&m(r),t&&m(i),t&&m(o),y(f,t),t&&m(a),t&&m(u),h=!1,l()}}}function If(t,e,n){let{coordinate:s}=e,{cloudRef:r}=e;return t.$$set=t=>{"coordinate"in t&&n(0,s=t.coordinate),"cloudRef"in t&&n(3,r=t.cloudRef)},[s,async function(t){const e=wl(vl(r,s.id,"titles"),t.id);await id(e,{title:{title:t.title,like:t.like+1}})},async function(t){const e=t.target[0].value;await od(vl(r,s.id,"titles"),{title:{title:e,like:1}}),t.target[0].value="",blur()},r]}class Cf extends Z{constructor(t){super(),J(this,t,If,_f,i,{coordinate:0,cloudRef:3})}}function Sf(t,e,n){const s=t.slice();return s[11]=e[n],s}function Af(t){let e,n,s,i;return{c(){e=v("img"),I(e,"width","20px"),S(e,"left",t[11].coordinate.x+"px"),S(e,"top",t[11].coordinate.y+"px"),S(e,"position","absolute"),c(e.src,n="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Cloud_%28fixed_width%29.svg/2048px-Cloud_%28fixed_width%29.svg.png")||I(e,"src","https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Cloud_%28fixed_width%29.svg/2048px-Cloud_%28fixed_width%29.svg.png"),I(e,"alt","cloud"),I(e,"class","svelte-1hbxe4z"),A(e,"uploadMode",1==t[0])},m(n,o){g(n,e,o),s||(i=T(e,"click",(function(){r(t[5](t[11]))&&t[5](t[11]).apply(this,arguments)})),s=!0)},p(n,s){t=n,2&s&&S(e,"left",t[11].coordinate.x+"px"),2&s&&S(e,"top",t[11].coordinate.y+"px"),1&s&&A(e,"uploadMode",1==t[0])},d(t){t&&m(e),s=!1,i()}}}function kf(t){let e,n;return e=new bf({props:{$$slots:{header:[Nf],default:[Df]},$$scope:{ctx:t}}}),e.$on("close",t[8]),{c(){W(e.$$.fragment)},m(t,s){Q(e,t,s),n=!0},p(t,n){const s={};16388&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(G(e.$$.fragment,t),n=!0)},o(t){H(e.$$.fragment,t),n=!1},d(t){X(e,t)}}}function Df(t){let e,n;return e=new Cf({props:{coordinate:t[2],cloudRef:t[4]}}),{c(){W(e.$$.fragment)},m(t,s){Q(e,t,s),n=!0},p(t,n){const s={};4&n&&(s.coordinate=t[2]),e.$set(s)},i(t){n||(G(e.$$.fragment,t),n=!0)},o(t){H(e.$$.fragment,t),n=!1},d(t){X(e,t)}}}function Nf(t){let e,n,s=t[2].titles[0].title+"";return{c(){e=v("h2"),n=w(s),I(e,"slot","header")},m(t,s){g(t,e,s),p(e,n)},p(t,e){4&e&&s!==(s=t[2].titles[0].title+"")&&C(n,s)},d(t){t&&m(e)}}}function xf(t){let e,n,s,r=t[1],i=[];for(let e=0;e<r.length;e+=1)i[e]=Af(Sf(t,r,e));let o=t[3]&&kf(t);return{c(){for(let t=0;t<i.length;t+=1)i[t].c();e=b(),o&&o.c(),n=E()},m(t,r){for(let e=0;e<i.length;e+=1)i[e].m(t,r);g(t,e,r),o&&o.m(t,r),g(t,n,r),s=!0},p(t,[s]){if(35&s){let n;for(r=t[1],n=0;n<r.length;n+=1){const o=Sf(t,r,n);i[n]?i[n].p(o,s):(i[n]=Af(o),i[n].c(),i[n].m(e.parentNode,e))}for(;n<i.length;n+=1)i[n].d(1);i.length=r.length}t[3]?o?(o.p(t,s),8&s&&G(o,1)):(o=kf(t),o.c(),G(o,1),o.m(n.parentNode,n)):o&&(K(),H(o,1,1,(()=>{o=null})),z())},i(t){s||(G(o),s=!0)},o(t){H(o),s=!1},d(t){y(i,t),t&&m(e),o&&o.d(t),t&&m(n)}}}function Rf(t,e,n){let{db:s}=e,{storage:r}=e,{upload:i}=e;const o=vl(s,"clouds");let a,c=[],u=[],h=!1;!function(t){D().$$.on_mount.push(t)}((function(){const t=ed(o,function(t,e="asc"){const n=e,s=Ql("orderBy",t);return new nd(s,n)}("createdAt","desc"));ad(t,(t=>{t.forEach((t=>{const e={id:t.id,...t.data()};(function(t){return sf(t=ht(t))})(ff(r,t.id)).then((t=>{e.img=t})),c.push(e)})),n(1,c)}))}));return t.$$set=t=>{"db"in t&&n(6,s=t.db),"storage"in t&&n(7,r=t.storage),"upload"in t&&n(0,i=t.upload)},[i,c,a,h,o,function(t){ad(ed(vl(o,t.id,"titles")),(e=>{e.forEach((e=>{const n={id:e.id,...e.data().title};u.push(n),t.titles=u})),n(2,a=t),function(t){t.titles.sort(((t,e)=>e.like-t.like))}(a),n(3,h=!0),u=[]}))},s,r,()=>n(3,h=!1)]}class Of extends Z{constructor(t){super(),J(this,t,Rf,xf,i,{db:6,storage:7,upload:0})}}function Lf(e){let n,r,i,o,a,u,h,l,d,f,y,w,E,C,S,A,k,D,N;return{c(){n=v("form"),r=v("label"),r.textContent="Title",i=b(),o=v("input"),a=b(),u=v("label"),u.textContent="Image",h=b(),l=v("input"),d=b(),f=v("img"),w=b(),E=v("hr"),C=b(),S=v("button"),S.textContent="submit",A=b(),k=v("button"),k.textContent="cancel",I(r,"for","title"),I(o,"type","text"),I(o,"name","title"),I(o,"id","title"),o.required=!0,I(u,"for","image"),I(l,"type","file"),I(l,"name","image"),I(l,"id","image"),I(l,"accept","image/*"),l.required=!0,c(f.src,y=e[0])||I(f,"src",y),I(f,"alt",""),I(S,"type","submit"),I(k,"type","button")},m(t,s){g(t,n,s),p(n,r),p(n,i),p(n,o),p(n,a),p(n,u),p(n,h),p(n,l),p(n,d),p(n,f),p(n,w),p(n,E),p(n,C),p(n,S),p(n,A),p(n,k),D||(N=[T(l,"change",e[3]),T(k,"click",e[1]),T(n,"submit",_(e[2]))],D=!0)},p(t,[e]){1&e&&!c(f.src,y=t[0])&&I(f,"src",y)},i:t,o:t,d(t){t&&m(n),D=!1,s(N)}}}function Mf(t,e,n){const s=N(),r=()=>s("close");let i,o,a,{coordinate:c}=e,{db:u}=e,{storage:h}=e;return t.$$set=t=>{"coordinate"in t&&n(4,c=t.coordinate),"db"in t&&n(5,u=t.db),"storage"in t&&n(6,h=t.storage)},[a,r,async function(t){r(),i=t.target[0].value;const e=wl(vl(u,"clouds")).id;await df(ff(h,e),o),await function(t,e,n){t=dl(t,gl);const s=dl(t.firestore,Tl),r=sd(t.converter,e,n);return cd(s,[Pl(Ml(s),"setDoc",t._key,r,null!==t.converter,n).toMutation(t._key,Va.none())])}(wl(u,"clouds",e),{coordinate:c,createdAt:Date.now()});const n=vl(u,"clouds");await od(vl(n,e,"titles"),{title:{title:i,like:1}})},function(t){o=t.target.files[0],n(0,a=URL.createObjectURL(o))},c,u,h]}class Pf extends Z{constructor(t){super(),J(this,t,Mf,Lf,i,{coordinate:4,db:5,storage:6})}}function Ff(t){let e,n;return e=new bf({props:{$$slots:{header:[Uf],default:[Vf]},$$scope:{ctx:t}}}),e.$on("close",t[6]),{c(){W(e.$$.fragment)},m(t,s){Q(e,t,s),n=!0},p(t,n){const s={};257&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(G(e.$$.fragment,t),n=!0)},o(t){H(e.$$.fragment,t),n=!1},d(t){X(e,t)}}}function Vf(t){let e,n;return e=new Pf({props:{coordinate:t[0],db:t[3],storage:t[4]}}),e.$on("close",t[6]),{c(){W(e.$$.fragment)},m(t,s){Q(e,t,s),n=!0},p(t,n){const s={};1&n&&(s.coordinate=t[0]),e.$set(s)},i(t){n||(G(e.$$.fragment,t),n=!0)},o(t){H(e.$$.fragment,t),n=!1},d(t){X(e,t)}}}function Uf(e){let n;return{c(){n=v("h2"),n.textContent="UPLOAD",I(n,"slot","header")},m(t,e){g(t,n,e)},p:t,d(t){t&&m(n)}}}function $f(t){let e,n,r,i,o,a,c,u,h,l,d=t[1]?"cancel":"+";o=new Of({props:{db:t[3],storage:t[4],upload:t[1]}});let f=t[2]&&Ff(t);return{c(){e=v("button"),n=w(d),r=b(),i=v("div"),W(o.$$.fragment),a=b(),f&&f.c(),c=E(),I(e,"class","svelte-jkhhl1"),I(i,"class","svelte-jkhhl1"),A(i,"upload",!0===t[1])},m(s,d){g(s,e,d),p(e,n),g(s,r,d),g(s,i,d),Q(o,i,null),g(s,a,d),f&&f.m(s,d),g(s,c,d),u=!0,h||(l=[T(e,"click",t[7]),T(i,"click",t[5])],h=!0)},p(t,[e]){(!u||2&e)&&d!==(d=t[1]?"cancel":"+")&&C(n,d);const s={};2&e&&(s.upload=t[1]),o.$set(s),2&e&&A(i,"upload",!0===t[1]),t[2]?f?(f.p(t,e),4&e&&G(f,1)):(f=Ff(t),f.c(),G(f,1),f.m(c.parentNode,c)):f&&(K(),H(f,1,1,(()=>{f=null})),z())},i(t){u||(G(o.$$.fragment,t),G(f),u=!0)},o(t){H(o.$$.fragment,t),H(f),u=!1},d(t){t&&m(e),t&&m(r),t&&m(i),X(o),t&&m(a),f&&f.d(t),t&&m(c),h=!1,s(l)}}}function Bf(t,e,n){let s={},r=!1,i=!1;const o=function(t=Yt()){return Ht(t,"firestore").getImmediate()}(gf),a=function(t=Yt(),e){return Ht(t=ht(t),lf).getImmediate({identifier:e})}(gf);return[s,r,i,o,a,function(t){1==r&&(n(0,s.x=t.clientX-10,s),n(0,s.y=t.clientY-10,s),n(2,i=!0))},function(){n(2,i=!1),n(1,r=!1)},()=>n(1,r=!r)]}return new class extends Z{constructor(t){super(),J(this,t,Bf,$f,i,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
