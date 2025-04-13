import{r as wt,j as R}from"./index-dVWfZTQZ.js";import{c as ku,p as Ou}from"./Phone-C59dqUBb.js";const Mu=()=>{};var oo={};/**
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
 */const ma=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},Lu=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[e++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[e++],l=n[e++],c=n[e++],h=((i&7)<<18|(o&63)<<12|(l&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],l=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|l&63)}}return t.join("")},ga={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],l=i+1<n.length,c=l?n[i+1]:0,h=i+2<n.length,f=h?n[i+2]:0,_=o>>2,I=(o&3)<<4|c>>4;let x=(c&15)<<2|f>>6,S=f&63;h||(S=64,l||(x=64)),r.push(e[_],e[I],e[x],e[S])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(ma(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Lu(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=e[n.charAt(i++)],c=i<n.length?e[n.charAt(i)]:0;++i;const f=i<n.length?e[n.charAt(i)]:64;++i;const I=i<n.length?e[n.charAt(i)]:64;if(++i,o==null||c==null||f==null||I==null)throw new Fu;const x=o<<2|c>>4;if(r.push(x),f!==64){const S=c<<4&240|f>>2;if(r.push(S),I!==64){const N=f<<6&192|I;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Fu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Uu=function(n){const t=ma(n);return ga.encodeByteArray(t,!0)},tr=function(n){return Uu(n).replace(/\./g,"")},ju=function(n){try{return ga.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Bu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const qu=()=>Bu().__FIREBASE_DEFAULTS__,zu=()=>{if(typeof process>"u"||typeof oo>"u")return;const n=oo.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ku=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&ju(n[1]);return t&&JSON.parse(t)},Cs=()=>{try{return Mu()||qu()||zu()||Ku()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Hu=n=>{var t,e;return(e=(t=Cs())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Qu=n=>{const t=Hu(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},_a=()=>{var n;return(n=Cs())===null||n===void 0?void 0:n.config};/**
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
 */class Gu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function $u(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[tr(JSON.stringify(e)),tr(JSON.stringify(l)),""].join(".")}/**
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
 */function Wu(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Xu(){var n;const t=(n=Cs())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Yu(){return!Xu()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ju(){try{return typeof indexedDB=="object"}catch{return!1}}function Zu(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
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
 */const tc="FirebaseError";class Fe extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=tc,Object.setPrototypeOf(this,Fe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ya.prototype.create)}}class ya{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,o=this.errors[t],l=o?ec(o,r):"Error",c=`${this.serviceName}: ${l} (${i}).`;return new Fe(i,c,r)}}function ec(n,t){return n.replace(nc,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const nc=/\{\$([^}]+)}/g;function er(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const o=n[i],l=t[i];if(ao(o)&&ao(l)){if(!er(o,l))return!1}else if(o!==l)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function ao(n){return n!==null&&typeof n=="object"}/**
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
 */function hn(n){return n&&n._delegate?n._delegate:n}class dn{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const he="[DEFAULT]";/**
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
 */class rc{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Gu;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(ic(t))try{this.getOrInitializeService({instanceIdentifier:he})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=he){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=he){return this.instances.has(t)}getOptions(t=he){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,l]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&l.resolve(i)}return i}onInit(t,e){var r;const i=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const l=this.instances.get(i);return l&&t(l,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:sc(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=he){return this.component?this.component.multipleInstances?t:he:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sc(n){return n===he?void 0:n}function ic(n){return n.instantiationMode==="EAGER"}/**
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
 */class oc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new rc(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(z||(z={}));const ac={debug:z.DEBUG,verbose:z.VERBOSE,info:z.INFO,warn:z.WARN,error:z.ERROR,silent:z.SILENT},lc=z.INFO,uc={[z.DEBUG]:"log",[z.VERBOSE]:"log",[z.INFO]:"info",[z.WARN]:"warn",[z.ERROR]:"error"},cc=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=uc[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ea{constructor(t){this.name=t,this._logLevel=lc,this._logHandler=cc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in z))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?ac[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,z.DEBUG,...t),this._logHandler(this,z.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,z.VERBOSE,...t),this._logHandler(this,z.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,z.INFO,...t),this._logHandler(this,z.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,z.WARN,...t),this._logHandler(this,z.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,z.ERROR,...t),this._logHandler(this,z.ERROR,...t)}}const hc=(n,t)=>t.some(e=>n instanceof e);let lo,uo;function dc(){return lo||(lo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fc(){return uo||(uo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const va=new WeakMap,as=new WeakMap,Ta=new WeakMap,Zr=new WeakMap,Ss=new WeakMap;function pc(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",l)},o=()=>{e($t(n.result)),i()},l=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",l)});return t.then(e=>{e instanceof IDBCursor&&va.set(e,n)}).catch(()=>{}),Ss.set(t,n),t}function mc(n){if(as.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",l),n.removeEventListener("abort",l)},o=()=>{e(),i()},l=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",l),n.addEventListener("abort",l)});as.set(n,t)}let ls={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return as.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Ta.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return $t(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function gc(n){ls=n(ls)}function _c(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(ts(this),t,...e);return Ta.set(r,t.sort?t.sort():[t]),$t(r)}:fc().includes(n)?function(...t){return n.apply(ts(this),t),$t(va.get(this))}:function(...t){return $t(n.apply(ts(this),t))}}function yc(n){return typeof n=="function"?_c(n):(n instanceof IDBTransaction&&mc(n),hc(n,dc())?new Proxy(n,ls):n)}function $t(n){if(n instanceof IDBRequest)return pc(n);if(Zr.has(n))return Zr.get(n);const t=yc(n);return t!==n&&(Zr.set(n,t),Ss.set(t,n)),t}const ts=n=>Ss.get(n);function Ec(n,t,{blocked:e,upgrade:r,blocking:i,terminated:o}={}){const l=indexedDB.open(n,t),c=$t(l);return r&&l.addEventListener("upgradeneeded",h=>{r($t(l.result),h.oldVersion,h.newVersion,$t(l.transaction),h)}),e&&l.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),c.then(h=>{o&&h.addEventListener("close",()=>o()),i&&h.addEventListener("versionchange",f=>i(f.oldVersion,f.newVersion,f))}).catch(()=>{}),c}const vc=["get","getKey","getAll","getAllKeys","count"],Tc=["put","add","delete","clear"],es=new Map;function co(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(es.get(t))return es.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=Tc.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||vc.includes(e)))return;const o=async function(l,...c){const h=this.transaction(l,i?"readwrite":"readonly");let f=h.store;return r&&(f=f.index(c.shift())),(await Promise.all([f[e](...c),i&&h.done]))[0]};return es.set(t,o),o}gc(n=>({...n,get:(t,e,r)=>co(t,e)||n.get(t,e,r),has:(t,e)=>!!co(t,e)||n.has(t,e)}));/**
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
 */class Ac{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Ic(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Ic(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const us="@firebase/app",ho="0.11.4";/**
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
 */const Bt=new Ea("@firebase/app"),wc="@firebase/app-compat",xc="@firebase/analytics-compat",Rc="@firebase/analytics",bc="@firebase/app-check-compat",Cc="@firebase/app-check",Sc="@firebase/auth",Pc="@firebase/auth-compat",Vc="@firebase/database",Dc="@firebase/data-connect",Nc="@firebase/database-compat",kc="@firebase/functions",Oc="@firebase/functions-compat",Mc="@firebase/installations",Lc="@firebase/installations-compat",Fc="@firebase/messaging",Uc="@firebase/messaging-compat",jc="@firebase/performance",Bc="@firebase/performance-compat",qc="@firebase/remote-config",zc="@firebase/remote-config-compat",Kc="@firebase/storage",Hc="@firebase/storage-compat",Qc="@firebase/firestore",Gc="@firebase/vertexai",$c="@firebase/firestore-compat",Wc="firebase",Xc="11.6.0";/**
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
 */const cs="[DEFAULT]",Yc={[us]:"fire-core",[wc]:"fire-core-compat",[Rc]:"fire-analytics",[xc]:"fire-analytics-compat",[Cc]:"fire-app-check",[bc]:"fire-app-check-compat",[Sc]:"fire-auth",[Pc]:"fire-auth-compat",[Vc]:"fire-rtdb",[Dc]:"fire-data-connect",[Nc]:"fire-rtdb-compat",[kc]:"fire-fn",[Oc]:"fire-fn-compat",[Mc]:"fire-iid",[Lc]:"fire-iid-compat",[Fc]:"fire-fcm",[Uc]:"fire-fcm-compat",[jc]:"fire-perf",[Bc]:"fire-perf-compat",[qc]:"fire-rc",[zc]:"fire-rc-compat",[Kc]:"fire-gcs",[Hc]:"fire-gcs-compat",[Qc]:"fire-fst",[$c]:"fire-fst-compat",[Gc]:"fire-vertex","fire-js":"fire-js",[Wc]:"fire-js-all"};/**
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
 */const nr=new Map,Jc=new Map,hs=new Map;function fo(n,t){try{n.container.addComponent(t)}catch(e){Bt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function rr(n){const t=n.name;if(hs.has(t))return Bt.debug(`There were multiple attempts to register component ${t}.`),!1;hs.set(t,n);for(const e of nr.values())fo(e,n);for(const e of Jc.values())fo(e,n);return!0}function Zc(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function th(n){return n==null?!1:n.settings!==void 0}/**
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
 */const eh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Wt=new ya("app","Firebase",eh);/**
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
 */class nh{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new dn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Wt.create("app-deleted",{appName:this._name})}}/**
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
 */const rh=Xc;function Aa(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:cs,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Wt.create("bad-app-name",{appName:String(i)});if(e||(e=_a()),!e)throw Wt.create("no-options");const o=nr.get(i);if(o){if(er(e,o.options)&&er(r,o.config))return o;throw Wt.create("duplicate-app",{appName:i})}const l=new oc(i);for(const h of hs.values())l.addComponent(h);const c=new nh(e,r,l);return nr.set(i,c),c}function sh(n=cs){const t=nr.get(n);if(!t&&n===cs&&_a())return Aa();if(!t)throw Wt.create("no-app",{appName:n});return t}function Se(n,t,e){var r;let i=(r=Yc[n])!==null&&r!==void 0?r:n;e&&(i+=`-${e}`);const o=i.match(/\s|\//),l=t.match(/\s|\//);if(o||l){const c=[`Unable to register library "${i}" with version "${t}":`];o&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&l&&c.push("and"),l&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Bt.warn(c.join(" "));return}rr(new dn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const ih="firebase-heartbeat-database",oh=1,fn="firebase-heartbeat-store";let ns=null;function Ia(){return ns||(ns=Ec(ih,oh,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(fn)}catch(e){console.warn(e)}}}}).catch(n=>{throw Wt.create("idb-open",{originalErrorMessage:n.message})})),ns}async function ah(n){try{const e=(await Ia()).transaction(fn),r=await e.objectStore(fn).get(wa(n));return await e.done,r}catch(t){if(t instanceof Fe)Bt.warn(t.message);else{const e=Wt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Bt.warn(e.message)}}}async function po(n,t){try{const r=(await Ia()).transaction(fn,"readwrite");await r.objectStore(fn).put(t,wa(n)),await r.done}catch(e){if(e instanceof Fe)Bt.warn(e.message);else{const r=Wt.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Bt.warn(r.message)}}}function wa(n){return`${n.name}!${n.options.appId}`}/**
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
 */const lh=1024,uh=30;class ch{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new dh(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=mo();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(l=>l.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>uh){const l=fh(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(l,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Bt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=mo(),{heartbeatsToSend:r,unsentEntries:i}=hh(this._heartbeatsCache.heartbeats),o=tr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Bt.warn(e),""}}}function mo(){return new Date().toISOString().substring(0,10)}function hh(n,t=lh){const e=[];let r=n.slice();for(const i of n){const o=e.find(l=>l.agent===i.agent);if(o){if(o.dates.push(i.date),go(e)>t){o.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),go(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class dh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ju()?Zu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await ah(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return po(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return po(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function go(n){return tr(JSON.stringify({version:2,heartbeats:n})).length}function fh(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
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
 */function ph(n){rr(new dn("platform-logger",t=>new Ac(t),"PRIVATE")),rr(new dn("heartbeat",t=>new ch(t),"PRIVATE")),Se(us,ho,n),Se(us,ho,"esm2017"),Se("fire-js","")}ph("");var _o=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Xt,xa;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(T,m){function g(){}g.prototype=m.prototype,T.D=m.prototype,T.prototype=new g,T.prototype.constructor=T,T.C=function(E,v,y){for(var p=Array(arguments.length-2),et=2;et<arguments.length;et++)p[et-2]=arguments[et];return m.prototype[v].apply(E,p)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,m,g){g||(g=0);var E=Array(16);if(typeof m=="string")for(var v=0;16>v;++v)E[v]=m.charCodeAt(g++)|m.charCodeAt(g++)<<8|m.charCodeAt(g++)<<16|m.charCodeAt(g++)<<24;else for(v=0;16>v;++v)E[v]=m[g++]|m[g++]<<8|m[g++]<<16|m[g++]<<24;m=T.g[0],g=T.g[1],v=T.g[2];var y=T.g[3],p=m+(y^g&(v^y))+E[0]+3614090360&4294967295;m=g+(p<<7&4294967295|p>>>25),p=y+(v^m&(g^v))+E[1]+3905402710&4294967295,y=m+(p<<12&4294967295|p>>>20),p=v+(g^y&(m^g))+E[2]+606105819&4294967295,v=y+(p<<17&4294967295|p>>>15),p=g+(m^v&(y^m))+E[3]+3250441966&4294967295,g=v+(p<<22&4294967295|p>>>10),p=m+(y^g&(v^y))+E[4]+4118548399&4294967295,m=g+(p<<7&4294967295|p>>>25),p=y+(v^m&(g^v))+E[5]+1200080426&4294967295,y=m+(p<<12&4294967295|p>>>20),p=v+(g^y&(m^g))+E[6]+2821735955&4294967295,v=y+(p<<17&4294967295|p>>>15),p=g+(m^v&(y^m))+E[7]+4249261313&4294967295,g=v+(p<<22&4294967295|p>>>10),p=m+(y^g&(v^y))+E[8]+1770035416&4294967295,m=g+(p<<7&4294967295|p>>>25),p=y+(v^m&(g^v))+E[9]+2336552879&4294967295,y=m+(p<<12&4294967295|p>>>20),p=v+(g^y&(m^g))+E[10]+4294925233&4294967295,v=y+(p<<17&4294967295|p>>>15),p=g+(m^v&(y^m))+E[11]+2304563134&4294967295,g=v+(p<<22&4294967295|p>>>10),p=m+(y^g&(v^y))+E[12]+1804603682&4294967295,m=g+(p<<7&4294967295|p>>>25),p=y+(v^m&(g^v))+E[13]+4254626195&4294967295,y=m+(p<<12&4294967295|p>>>20),p=v+(g^y&(m^g))+E[14]+2792965006&4294967295,v=y+(p<<17&4294967295|p>>>15),p=g+(m^v&(y^m))+E[15]+1236535329&4294967295,g=v+(p<<22&4294967295|p>>>10),p=m+(v^y&(g^v))+E[1]+4129170786&4294967295,m=g+(p<<5&4294967295|p>>>27),p=y+(g^v&(m^g))+E[6]+3225465664&4294967295,y=m+(p<<9&4294967295|p>>>23),p=v+(m^g&(y^m))+E[11]+643717713&4294967295,v=y+(p<<14&4294967295|p>>>18),p=g+(y^m&(v^y))+E[0]+3921069994&4294967295,g=v+(p<<20&4294967295|p>>>12),p=m+(v^y&(g^v))+E[5]+3593408605&4294967295,m=g+(p<<5&4294967295|p>>>27),p=y+(g^v&(m^g))+E[10]+38016083&4294967295,y=m+(p<<9&4294967295|p>>>23),p=v+(m^g&(y^m))+E[15]+3634488961&4294967295,v=y+(p<<14&4294967295|p>>>18),p=g+(y^m&(v^y))+E[4]+3889429448&4294967295,g=v+(p<<20&4294967295|p>>>12),p=m+(v^y&(g^v))+E[9]+568446438&4294967295,m=g+(p<<5&4294967295|p>>>27),p=y+(g^v&(m^g))+E[14]+3275163606&4294967295,y=m+(p<<9&4294967295|p>>>23),p=v+(m^g&(y^m))+E[3]+4107603335&4294967295,v=y+(p<<14&4294967295|p>>>18),p=g+(y^m&(v^y))+E[8]+1163531501&4294967295,g=v+(p<<20&4294967295|p>>>12),p=m+(v^y&(g^v))+E[13]+2850285829&4294967295,m=g+(p<<5&4294967295|p>>>27),p=y+(g^v&(m^g))+E[2]+4243563512&4294967295,y=m+(p<<9&4294967295|p>>>23),p=v+(m^g&(y^m))+E[7]+1735328473&4294967295,v=y+(p<<14&4294967295|p>>>18),p=g+(y^m&(v^y))+E[12]+2368359562&4294967295,g=v+(p<<20&4294967295|p>>>12),p=m+(g^v^y)+E[5]+4294588738&4294967295,m=g+(p<<4&4294967295|p>>>28),p=y+(m^g^v)+E[8]+2272392833&4294967295,y=m+(p<<11&4294967295|p>>>21),p=v+(y^m^g)+E[11]+1839030562&4294967295,v=y+(p<<16&4294967295|p>>>16),p=g+(v^y^m)+E[14]+4259657740&4294967295,g=v+(p<<23&4294967295|p>>>9),p=m+(g^v^y)+E[1]+2763975236&4294967295,m=g+(p<<4&4294967295|p>>>28),p=y+(m^g^v)+E[4]+1272893353&4294967295,y=m+(p<<11&4294967295|p>>>21),p=v+(y^m^g)+E[7]+4139469664&4294967295,v=y+(p<<16&4294967295|p>>>16),p=g+(v^y^m)+E[10]+3200236656&4294967295,g=v+(p<<23&4294967295|p>>>9),p=m+(g^v^y)+E[13]+681279174&4294967295,m=g+(p<<4&4294967295|p>>>28),p=y+(m^g^v)+E[0]+3936430074&4294967295,y=m+(p<<11&4294967295|p>>>21),p=v+(y^m^g)+E[3]+3572445317&4294967295,v=y+(p<<16&4294967295|p>>>16),p=g+(v^y^m)+E[6]+76029189&4294967295,g=v+(p<<23&4294967295|p>>>9),p=m+(g^v^y)+E[9]+3654602809&4294967295,m=g+(p<<4&4294967295|p>>>28),p=y+(m^g^v)+E[12]+3873151461&4294967295,y=m+(p<<11&4294967295|p>>>21),p=v+(y^m^g)+E[15]+530742520&4294967295,v=y+(p<<16&4294967295|p>>>16),p=g+(v^y^m)+E[2]+3299628645&4294967295,g=v+(p<<23&4294967295|p>>>9),p=m+(v^(g|~y))+E[0]+4096336452&4294967295,m=g+(p<<6&4294967295|p>>>26),p=y+(g^(m|~v))+E[7]+1126891415&4294967295,y=m+(p<<10&4294967295|p>>>22),p=v+(m^(y|~g))+E[14]+2878612391&4294967295,v=y+(p<<15&4294967295|p>>>17),p=g+(y^(v|~m))+E[5]+4237533241&4294967295,g=v+(p<<21&4294967295|p>>>11),p=m+(v^(g|~y))+E[12]+1700485571&4294967295,m=g+(p<<6&4294967295|p>>>26),p=y+(g^(m|~v))+E[3]+2399980690&4294967295,y=m+(p<<10&4294967295|p>>>22),p=v+(m^(y|~g))+E[10]+4293915773&4294967295,v=y+(p<<15&4294967295|p>>>17),p=g+(y^(v|~m))+E[1]+2240044497&4294967295,g=v+(p<<21&4294967295|p>>>11),p=m+(v^(g|~y))+E[8]+1873313359&4294967295,m=g+(p<<6&4294967295|p>>>26),p=y+(g^(m|~v))+E[15]+4264355552&4294967295,y=m+(p<<10&4294967295|p>>>22),p=v+(m^(y|~g))+E[6]+2734768916&4294967295,v=y+(p<<15&4294967295|p>>>17),p=g+(y^(v|~m))+E[13]+1309151649&4294967295,g=v+(p<<21&4294967295|p>>>11),p=m+(v^(g|~y))+E[4]+4149444226&4294967295,m=g+(p<<6&4294967295|p>>>26),p=y+(g^(m|~v))+E[11]+3174756917&4294967295,y=m+(p<<10&4294967295|p>>>22),p=v+(m^(y|~g))+E[2]+718787259&4294967295,v=y+(p<<15&4294967295|p>>>17),p=g+(y^(v|~m))+E[9]+3951481745&4294967295,T.g[0]=T.g[0]+m&4294967295,T.g[1]=T.g[1]+(v+(p<<21&4294967295|p>>>11))&4294967295,T.g[2]=T.g[2]+v&4294967295,T.g[3]=T.g[3]+y&4294967295}r.prototype.u=function(T,m){m===void 0&&(m=T.length);for(var g=m-this.blockSize,E=this.B,v=this.h,y=0;y<m;){if(v==0)for(;y<=g;)i(this,T,y),y+=this.blockSize;if(typeof T=="string"){for(;y<m;)if(E[v++]=T.charCodeAt(y++),v==this.blockSize){i(this,E),v=0;break}}else for(;y<m;)if(E[v++]=T[y++],v==this.blockSize){i(this,E),v=0;break}}this.h=v,this.o+=m},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var m=1;m<T.length-8;++m)T[m]=0;var g=8*this.o;for(m=T.length-8;m<T.length;++m)T[m]=g&255,g/=256;for(this.u(T),T=Array(16),m=g=0;4>m;++m)for(var E=0;32>E;E+=8)T[g++]=this.g[m]>>>E&255;return T};function o(T,m){var g=c;return Object.prototype.hasOwnProperty.call(g,T)?g[T]:g[T]=m(T)}function l(T,m){this.h=m;for(var g=[],E=!0,v=T.length-1;0<=v;v--){var y=T[v]|0;E&&y==m||(g[v]=y,E=!1)}this.g=g}var c={};function h(T){return-128<=T&&128>T?o(T,function(m){return new l([m|0],0>m?-1:0)}):new l([T|0],0>T?-1:0)}function f(T){if(isNaN(T)||!isFinite(T))return I;if(0>T)return V(f(-T));for(var m=[],g=1,E=0;T>=g;E++)m[E]=T/g|0,g*=4294967296;return new l(m,0)}function _(T,m){if(T.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(T.charAt(0)=="-")return V(_(T.substring(1),m));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=f(Math.pow(m,8)),E=I,v=0;v<T.length;v+=8){var y=Math.min(8,T.length-v),p=parseInt(T.substring(v,v+y),m);8>y?(y=f(Math.pow(m,y)),E=E.j(y).add(f(p))):(E=E.j(g),E=E.add(f(p)))}return E}var I=h(0),x=h(1),S=h(16777216);n=l.prototype,n.m=function(){if(k(this))return-V(this).m();for(var T=0,m=1,g=0;g<this.g.length;g++){var E=this.i(g);T+=(0<=E?E:4294967296+E)*m,m*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(N(this))return"0";if(k(this))return"-"+V(this).toString(T);for(var m=f(Math.pow(T,6)),g=this,E="";;){var v=X(g,m).g;g=Q(g,v.j(m));var y=((0<g.g.length?g.g[0]:g.h)>>>0).toString(T);if(g=v,N(g))return y+E;for(;6>y.length;)y="0"+y;E=y+E}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function N(T){if(T.h!=0)return!1;for(var m=0;m<T.g.length;m++)if(T.g[m]!=0)return!1;return!0}function k(T){return T.h==-1}n.l=function(T){return T=Q(this,T),k(T)?-1:N(T)?0:1};function V(T){for(var m=T.g.length,g=[],E=0;E<m;E++)g[E]=~T.g[E];return new l(g,~T.h).add(x)}n.abs=function(){return k(this)?V(this):this},n.add=function(T){for(var m=Math.max(this.g.length,T.g.length),g=[],E=0,v=0;v<=m;v++){var y=E+(this.i(v)&65535)+(T.i(v)&65535),p=(y>>>16)+(this.i(v)>>>16)+(T.i(v)>>>16);E=p>>>16,y&=65535,p&=65535,g[v]=p<<16|y}return new l(g,g[g.length-1]&-2147483648?-1:0)};function Q(T,m){return T.add(V(m))}n.j=function(T){if(N(this)||N(T))return I;if(k(this))return k(T)?V(this).j(V(T)):V(V(this).j(T));if(k(T))return V(this.j(V(T)));if(0>this.l(S)&&0>T.l(S))return f(this.m()*T.m());for(var m=this.g.length+T.g.length,g=[],E=0;E<2*m;E++)g[E]=0;for(E=0;E<this.g.length;E++)for(var v=0;v<T.g.length;v++){var y=this.i(E)>>>16,p=this.i(E)&65535,et=T.i(v)>>>16,lt=T.i(v)&65535;g[2*E+2*v]+=p*lt,H(g,2*E+2*v),g[2*E+2*v+1]+=y*lt,H(g,2*E+2*v+1),g[2*E+2*v+1]+=p*et,H(g,2*E+2*v+1),g[2*E+2*v+2]+=y*et,H(g,2*E+2*v+2)}for(E=0;E<m;E++)g[E]=g[2*E+1]<<16|g[2*E];for(E=m;E<2*m;E++)g[E]=0;return new l(g,0)};function H(T,m){for(;(T[m]&65535)!=T[m];)T[m+1]+=T[m]>>>16,T[m]&=65535,m++}function G(T,m){this.g=T,this.h=m}function X(T,m){if(N(m))throw Error("division by zero");if(N(T))return new G(I,I);if(k(T))return m=X(V(T),m),new G(V(m.g),V(m.h));if(k(m))return m=X(T,V(m)),new G(V(m.g),m.h);if(30<T.g.length){if(k(T)||k(m))throw Error("slowDivide_ only works with positive integers.");for(var g=x,E=m;0>=E.l(T);)g=Pt(g),E=Pt(E);var v=st(g,1),y=st(E,1);for(E=st(E,2),g=st(g,2);!N(E);){var p=y.add(E);0>=p.l(T)&&(v=v.add(g),y=p),E=st(E,1),g=st(g,1)}return m=Q(T,v.j(m)),new G(v,m)}for(v=I;0<=T.l(m);){for(g=Math.max(1,Math.floor(T.m()/m.m())),E=Math.ceil(Math.log(g)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),y=f(g),p=y.j(m);k(p)||0<p.l(T);)g-=E,y=f(g),p=y.j(m);N(y)&&(y=x),v=v.add(y),T=Q(T,p)}return new G(v,T)}n.A=function(T){return X(this,T).h},n.and=function(T){for(var m=Math.max(this.g.length,T.g.length),g=[],E=0;E<m;E++)g[E]=this.i(E)&T.i(E);return new l(g,this.h&T.h)},n.or=function(T){for(var m=Math.max(this.g.length,T.g.length),g=[],E=0;E<m;E++)g[E]=this.i(E)|T.i(E);return new l(g,this.h|T.h)},n.xor=function(T){for(var m=Math.max(this.g.length,T.g.length),g=[],E=0;E<m;E++)g[E]=this.i(E)^T.i(E);return new l(g,this.h^T.h)};function Pt(T){for(var m=T.g.length+1,g=[],E=0;E<m;E++)g[E]=T.i(E)<<1|T.i(E-1)>>>31;return new l(g,T.h)}function st(T,m){var g=m>>5;m%=32;for(var E=T.g.length-g,v=[],y=0;y<E;y++)v[y]=0<m?T.i(y+g)>>>m|T.i(y+g+1)<<32-m:T.i(y+g);return new l(v,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,xa=r,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=f,l.fromString=_,Xt=l}).apply(typeof _o<"u"?_o:typeof self<"u"?self:typeof window<"u"?window:{});var Kn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ra,rn,ba,Wn,ds,Ca,Sa,Pa;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,a,u){return s==Array.prototype||s==Object.prototype||(s[a]=u.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Kn=="object"&&Kn];for(var a=0;a<s.length;++a){var u=s[a];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var r=e(this);function i(s,a){if(a)t:{var u=r;s=s.split(".");for(var d=0;d<s.length-1;d++){var A=s[d];if(!(A in u))break t;u=u[A]}s=s[s.length-1],d=u[s],a=a(d),a!=d&&a!=null&&t(u,s,{configurable:!0,writable:!0,value:a})}}function o(s,a){s instanceof String&&(s+="");var u=0,d=!1,A={next:function(){if(!d&&u<s.length){var w=u++;return{value:a(w,s[w]),done:!1}}return d=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}i("Array.prototype.values",function(s){return s||function(){return o(this,function(a,u){return u})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},c=this||self;function h(s){var a=typeof s;return a=a!="object"?a:s?Array.isArray(s)?"array":a:"null",a=="array"||a=="object"&&typeof s.length=="number"}function f(s){var a=typeof s;return a=="object"&&s!=null||a=="function"}function _(s,a,u){return s.call.apply(s.bind,arguments)}function I(s,a,u){if(!s)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,d),s.apply(a,A)}}return function(){return s.apply(a,arguments)}}function x(s,a,u){return x=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:I,x.apply(null,arguments)}function S(s,a){var u=Array.prototype.slice.call(arguments,1);return function(){var d=u.slice();return d.push.apply(d,arguments),s.apply(this,d)}}function N(s,a){function u(){}u.prototype=a.prototype,s.aa=a.prototype,s.prototype=new u,s.prototype.constructor=s,s.Qb=function(d,A,w){for(var P=Array(arguments.length-2),W=2;W<arguments.length;W++)P[W-2]=arguments[W];return a.prototype[A].apply(d,P)}}function k(s){const a=s.length;if(0<a){const u=Array(a);for(let d=0;d<a;d++)u[d]=s[d];return u}return[]}function V(s,a){for(let u=1;u<arguments.length;u++){const d=arguments[u];if(h(d)){const A=s.length||0,w=d.length||0;s.length=A+w;for(let P=0;P<w;P++)s[A+P]=d[P]}else s.push(d)}}class Q{constructor(a,u){this.i=a,this.j=u,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function H(s){return/^[\s\xa0]*$/.test(s)}function G(){var s=c.navigator;return s&&(s=s.userAgent)?s:""}function X(s){return X[" "](s),s}X[" "]=function(){};var Pt=G().indexOf("Gecko")!=-1&&!(G().toLowerCase().indexOf("webkit")!=-1&&G().indexOf("Edge")==-1)&&!(G().indexOf("Trident")!=-1||G().indexOf("MSIE")!=-1)&&G().indexOf("Edge")==-1;function st(s,a,u){for(const d in s)a.call(u,s[d],d,s)}function T(s,a){for(const u in s)a.call(void 0,s[u],u,s)}function m(s){const a={};for(const u in s)a[u]=s[u];return a}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(s,a){let u,d;for(let A=1;A<arguments.length;A++){d=arguments[A];for(u in d)s[u]=d[u];for(let w=0;w<g.length;w++)u=g[w],Object.prototype.hasOwnProperty.call(d,u)&&(s[u]=d[u])}}function v(s){var a=1;s=s.split(":");const u=[];for(;0<a&&s.length;)u.push(s.shift()),a--;return s.length&&u.push(s.join(":")),u}function y(s){c.setTimeout(()=>{throw s},0)}function p(){var s=oe;let a=null;return s.g&&(a=s.g,s.g=s.g.next,s.g||(s.h=null),a.next=null),a}class et{constructor(){this.h=this.g=null}add(a,u){const d=lt.get();d.set(a,u),this.h?this.h.next=d:this.g=d,this.h=d}}var lt=new Q(()=>new Ee,s=>s.reset());class Ee{constructor(){this.next=this.g=this.h=null}set(a,u){this.h=a,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let pt,ie=!1,oe=new et,ve=()=>{const s=c.Promise.resolve(void 0);pt=()=>{s.then(wn)}};var wn=()=>{for(var s;s=p();){try{s.h.call(s.g)}catch(u){y(u)}var a=lt;a.j(s),100>a.h&&(a.h++,s.next=a.g,a.g=s)}ie=!1};function Rt(){this.s=this.s,this.C=this.C}Rt.prototype.s=!1,Rt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Rt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function mt(s,a){this.type=s,this.g=this.target=a,this.defaultPrevented=!1}mt.prototype.h=function(){this.defaultPrevented=!0};var eu=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var s=!1,a=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const u=()=>{};c.addEventListener("test",u,a),c.removeEventListener("test",u,a)}catch{}return s}();function ze(s,a){if(mt.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var u=this.type=s.type,d=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=a,a=s.relatedTarget){if(Pt){t:{try{X(a.nodeName);var A=!0;break t}catch{}A=!1}A||(a=null)}}else u=="mouseover"?a=s.fromElement:u=="mouseout"&&(a=s.toElement);this.relatedTarget=a,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:nu[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&ze.aa.h.call(this)}}N(ze,mt);var nu={2:"touch",3:"pen",4:"mouse"};ze.prototype.h=function(){ze.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var xn="closure_listenable_"+(1e6*Math.random()|0),ru=0;function su(s,a,u,d,A){this.listener=s,this.proxy=null,this.src=a,this.type=u,this.capture=!!d,this.ha=A,this.key=++ru,this.da=this.fa=!1}function Rn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function bn(s){this.src=s,this.g={},this.h=0}bn.prototype.add=function(s,a,u,d,A){var w=s.toString();s=this.g[w],s||(s=this.g[w]=[],this.h++);var P=Vr(s,a,d,A);return-1<P?(a=s[P],u||(a.fa=!1)):(a=new su(a,this.src,w,!!d,A),a.fa=u,s.push(a)),a};function Pr(s,a){var u=a.type;if(u in s.g){var d=s.g[u],A=Array.prototype.indexOf.call(d,a,void 0),w;(w=0<=A)&&Array.prototype.splice.call(d,A,1),w&&(Rn(a),s.g[u].length==0&&(delete s.g[u],s.h--))}}function Vr(s,a,u,d){for(var A=0;A<s.length;++A){var w=s[A];if(!w.da&&w.listener==a&&w.capture==!!u&&w.ha==d)return A}return-1}var Dr="closure_lm_"+(1e6*Math.random()|0),Nr={};function ai(s,a,u,d,A){if(Array.isArray(a)){for(var w=0;w<a.length;w++)ai(s,a[w],u,d,A);return null}return u=ci(u),s&&s[xn]?s.K(a,u,f(d)?!!d.capture:!1,A):iu(s,a,u,!1,d,A)}function iu(s,a,u,d,A,w){if(!a)throw Error("Invalid event type");var P=f(A)?!!A.capture:!!A,W=Or(s);if(W||(s[Dr]=W=new bn(s)),u=W.add(a,u,d,P,w),u.proxy)return u;if(d=ou(),u.proxy=d,d.src=s,d.listener=u,s.addEventListener)eu||(A=P),A===void 0&&(A=!1),s.addEventListener(a.toString(),d,A);else if(s.attachEvent)s.attachEvent(ui(a.toString()),d);else if(s.addListener&&s.removeListener)s.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return u}function ou(){function s(u){return a.call(s.src,s.listener,u)}const a=au;return s}function li(s,a,u,d,A){if(Array.isArray(a))for(var w=0;w<a.length;w++)li(s,a[w],u,d,A);else d=f(d)?!!d.capture:!!d,u=ci(u),s&&s[xn]?(s=s.i,a=String(a).toString(),a in s.g&&(w=s.g[a],u=Vr(w,u,d,A),-1<u&&(Rn(w[u]),Array.prototype.splice.call(w,u,1),w.length==0&&(delete s.g[a],s.h--)))):s&&(s=Or(s))&&(a=s.g[a.toString()],s=-1,a&&(s=Vr(a,u,d,A)),(u=-1<s?a[s]:null)&&kr(u))}function kr(s){if(typeof s!="number"&&s&&!s.da){var a=s.src;if(a&&a[xn])Pr(a.i,s);else{var u=s.type,d=s.proxy;a.removeEventListener?a.removeEventListener(u,d,s.capture):a.detachEvent?a.detachEvent(ui(u),d):a.addListener&&a.removeListener&&a.removeListener(d),(u=Or(a))?(Pr(u,s),u.h==0&&(u.src=null,a[Dr]=null)):Rn(s)}}}function ui(s){return s in Nr?Nr[s]:Nr[s]="on"+s}function au(s,a){if(s.da)s=!0;else{a=new ze(a,this);var u=s.listener,d=s.ha||s.src;s.fa&&kr(s),s=u.call(d,a)}return s}function Or(s){return s=s[Dr],s instanceof bn?s:null}var Mr="__closure_events_fn_"+(1e9*Math.random()>>>0);function ci(s){return typeof s=="function"?s:(s[Mr]||(s[Mr]=function(a){return s.handleEvent(a)}),s[Mr])}function gt(){Rt.call(this),this.i=new bn(this),this.M=this,this.F=null}N(gt,Rt),gt.prototype[xn]=!0,gt.prototype.removeEventListener=function(s,a,u,d){li(this,s,a,u,d)};function At(s,a){var u,d=s.F;if(d)for(u=[];d;d=d.F)u.push(d);if(s=s.M,d=a.type||a,typeof a=="string")a=new mt(a,s);else if(a instanceof mt)a.target=a.target||s;else{var A=a;a=new mt(d,s),E(a,A)}if(A=!0,u)for(var w=u.length-1;0<=w;w--){var P=a.g=u[w];A=Cn(P,d,!0,a)&&A}if(P=a.g=s,A=Cn(P,d,!0,a)&&A,A=Cn(P,d,!1,a)&&A,u)for(w=0;w<u.length;w++)P=a.g=u[w],A=Cn(P,d,!1,a)&&A}gt.prototype.N=function(){if(gt.aa.N.call(this),this.i){var s=this.i,a;for(a in s.g){for(var u=s.g[a],d=0;d<u.length;d++)Rn(u[d]);delete s.g[a],s.h--}}this.F=null},gt.prototype.K=function(s,a,u,d){return this.i.add(String(s),a,!1,u,d)},gt.prototype.L=function(s,a,u,d){return this.i.add(String(s),a,!0,u,d)};function Cn(s,a,u,d){if(a=s.i.g[String(a)],!a)return!0;a=a.concat();for(var A=!0,w=0;w<a.length;++w){var P=a[w];if(P&&!P.da&&P.capture==u){var W=P.listener,ct=P.ha||P.src;P.fa&&Pr(s.i,P),A=W.call(ct,d)!==!1&&A}}return A&&!d.defaultPrevented}function hi(s,a,u){if(typeof s=="function")u&&(s=x(s,u));else if(s&&typeof s.handleEvent=="function")s=x(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:c.setTimeout(s,a||0)}function di(s){s.g=hi(()=>{s.g=null,s.i&&(s.i=!1,di(s))},s.l);const a=s.h;s.h=null,s.m.apply(null,a)}class lu extends Rt{constructor(a,u){super(),this.m=a,this.l=u,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:di(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ke(s){Rt.call(this),this.h=s,this.g={}}N(Ke,Rt);var fi=[];function pi(s){st(s.g,function(a,u){this.g.hasOwnProperty(u)&&kr(a)},s),s.g={}}Ke.prototype.N=function(){Ke.aa.N.call(this),pi(this)},Ke.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Lr=c.JSON.stringify,uu=c.JSON.parse,cu=class{stringify(s){return c.JSON.stringify(s,void 0)}parse(s){return c.JSON.parse(s,void 0)}};function Fr(){}Fr.prototype.h=null;function mi(s){return s.h||(s.h=s.i())}function gi(){}var He={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ur(){mt.call(this,"d")}N(Ur,mt);function jr(){mt.call(this,"c")}N(jr,mt);var ae={},_i=null;function Sn(){return _i=_i||new gt}ae.La="serverreachability";function yi(s){mt.call(this,ae.La,s)}N(yi,mt);function Qe(s){const a=Sn();At(a,new yi(a))}ae.STAT_EVENT="statevent";function Ei(s,a){mt.call(this,ae.STAT_EVENT,s),this.stat=a}N(Ei,mt);function It(s){const a=Sn();At(a,new Ei(a,s))}ae.Ma="timingevent";function vi(s,a){mt.call(this,ae.Ma,s),this.size=a}N(vi,mt);function Ge(s,a){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){s()},a)}function $e(){this.g=!0}$e.prototype.xa=function(){this.g=!1};function hu(s,a,u,d,A,w){s.info(function(){if(s.g)if(w)for(var P="",W=w.split("&"),ct=0;ct<W.length;ct++){var K=W[ct].split("=");if(1<K.length){var _t=K[0];K=K[1];var yt=_t.split("_");P=2<=yt.length&&yt[1]=="type"?P+(_t+"="+K+"&"):P+(_t+"=redacted&")}}else P=null;else P=w;return"XMLHTTP REQ ("+d+") [attempt "+A+"]: "+a+`
`+u+`
`+P})}function du(s,a,u,d,A,w,P){s.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+A+"]: "+a+`
`+u+`
`+w+" "+P})}function Te(s,a,u,d){s.info(function(){return"XMLHTTP TEXT ("+a+"): "+pu(s,u)+(d?" "+d:"")})}function fu(s,a){s.info(function(){return"TIMEOUT: "+a})}$e.prototype.info=function(){};function pu(s,a){if(!s.g)return a;if(!a)return null;try{var u=JSON.parse(a);if(u){for(s=0;s<u.length;s++)if(Array.isArray(u[s])){var d=u[s];if(!(2>d.length)){var A=d[1];if(Array.isArray(A)&&!(1>A.length)){var w=A[0];if(w!="noop"&&w!="stop"&&w!="close")for(var P=1;P<A.length;P++)A[P]=""}}}}return Lr(u)}catch{return a}}var Pn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ti={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Br;function Vn(){}N(Vn,Fr),Vn.prototype.g=function(){return new XMLHttpRequest},Vn.prototype.i=function(){return{}},Br=new Vn;function Kt(s,a,u,d){this.j=s,this.i=a,this.l=u,this.R=d||1,this.U=new Ke(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ai}function Ai(){this.i=null,this.g="",this.h=!1}var Ii={},qr={};function zr(s,a,u){s.L=1,s.v=On(Ft(a)),s.m=u,s.P=!0,wi(s,null)}function wi(s,a){s.F=Date.now(),Dn(s),s.A=Ft(s.v);var u=s.A,d=s.R;Array.isArray(d)||(d=[String(d)]),Fi(u.i,"t",d),s.C=0,u=s.j.J,s.h=new Ai,s.g=no(s.j,u?a:null,!s.m),0<s.O&&(s.M=new lu(x(s.Y,s,s.g),s.O)),a=s.U,u=s.g,d=s.ca;var A="readystatechange";Array.isArray(A)||(A&&(fi[0]=A.toString()),A=fi);for(var w=0;w<A.length;w++){var P=ai(u,A[w],d||a.handleEvent,!1,a.h||a);if(!P)break;a.g[P.key]=P}a=s.H?m(s.H):{},s.m?(s.u||(s.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,a)):(s.u="GET",s.g.ea(s.A,s.u,null,a)),Qe(),hu(s.i,s.u,s.A,s.l,s.R,s.m)}Kt.prototype.ca=function(s){s=s.target;const a=this.M;a&&Ut(s)==3?a.j():this.Y(s)},Kt.prototype.Y=function(s){try{if(s==this.g)t:{const yt=Ut(this.g);var a=this.g.Ba();const we=this.g.Z();if(!(3>yt)&&(yt!=3||this.g&&(this.h.h||this.g.oa()||Hi(this.g)))){this.J||yt!=4||a==7||(a==8||0>=we?Qe(3):Qe(2)),Kr(this);var u=this.g.Z();this.X=u;e:if(xi(this)){var d=Hi(this.g);s="";var A=d.length,w=Ut(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){le(this),We(this);var P="";break e}this.h.i=new c.TextDecoder}for(a=0;a<A;a++)this.h.h=!0,s+=this.h.i.decode(d[a],{stream:!(w&&a==A-1)});d.length=0,this.h.g+=s,this.C=0,P=this.h.g}else P=this.g.oa();if(this.o=u==200,du(this.i,this.u,this.A,this.l,this.R,yt,u),this.o){if(this.T&&!this.K){e:{if(this.g){var W,ct=this.g;if((W=ct.g?ct.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!H(W)){var K=W;break e}}K=null}if(u=K)Te(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Hr(this,u);else{this.o=!1,this.s=3,It(12),le(this),We(this);break t}}if(this.P){u=!0;let Vt;for(;!this.J&&this.C<P.length;)if(Vt=mu(this,P),Vt==qr){yt==4&&(this.s=4,It(14),u=!1),Te(this.i,this.l,null,"[Incomplete Response]");break}else if(Vt==Ii){this.s=4,It(15),Te(this.i,this.l,P,"[Invalid Chunk]"),u=!1;break}else Te(this.i,this.l,Vt,null),Hr(this,Vt);if(xi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),yt!=4||P.length!=0||this.h.h||(this.s=1,It(16),u=!1),this.o=this.o&&u,!u)Te(this.i,this.l,P,"[Invalid Chunked Response]"),le(this),We(this);else if(0<P.length&&!this.W){this.W=!0;var _t=this.j;_t.g==this&&_t.ba&&!_t.M&&(_t.j.info("Great, no buffering proxy detected. Bytes received: "+P.length),Yr(_t),_t.M=!0,It(11))}}else Te(this.i,this.l,P,null),Hr(this,P);yt==4&&le(this),this.o&&!this.J&&(yt==4?Ji(this.j,this):(this.o=!1,Dn(this)))}else Du(this.g),u==400&&0<P.indexOf("Unknown SID")?(this.s=3,It(12)):(this.s=0,It(13)),le(this),We(this)}}}catch{}finally{}};function xi(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function mu(s,a){var u=s.C,d=a.indexOf(`
`,u);return d==-1?qr:(u=Number(a.substring(u,d)),isNaN(u)?Ii:(d+=1,d+u>a.length?qr:(a=a.slice(d,d+u),s.C=d+u,a)))}Kt.prototype.cancel=function(){this.J=!0,le(this)};function Dn(s){s.S=Date.now()+s.I,Ri(s,s.I)}function Ri(s,a){if(s.B!=null)throw Error("WatchDog timer not null");s.B=Ge(x(s.ba,s),a)}function Kr(s){s.B&&(c.clearTimeout(s.B),s.B=null)}Kt.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(fu(this.i,this.A),this.L!=2&&(Qe(),It(17)),le(this),this.s=2,We(this)):Ri(this,this.S-s)};function We(s){s.j.G==0||s.J||Ji(s.j,s)}function le(s){Kr(s);var a=s.M;a&&typeof a.ma=="function"&&a.ma(),s.M=null,pi(s.U),s.g&&(a=s.g,s.g=null,a.abort(),a.ma())}function Hr(s,a){try{var u=s.j;if(u.G!=0&&(u.g==s||Qr(u.h,s))){if(!s.K&&Qr(u.h,s)&&u.G==3){try{var d=u.Da.g.parse(a)}catch{d=null}if(Array.isArray(d)&&d.length==3){var A=d;if(A[0]==0){t:if(!u.u){if(u.g)if(u.g.F+3e3<s.F)Bn(u),Un(u);else break t;Xr(u),It(18)}}else u.za=A[1],0<u.za-u.T&&37500>A[2]&&u.F&&u.v==0&&!u.C&&(u.C=Ge(x(u.Za,u),6e3));if(1>=Si(u.h)&&u.ca){try{u.ca()}catch{}u.ca=void 0}}else ce(u,11)}else if((s.K||u.g==s)&&Bn(u),!H(a))for(A=u.Da.g.parse(a),a=0;a<A.length;a++){let K=A[a];if(u.T=K[0],K=K[1],u.G==2)if(K[0]=="c"){u.K=K[1],u.ia=K[2];const _t=K[3];_t!=null&&(u.la=_t,u.j.info("VER="+u.la));const yt=K[4];yt!=null&&(u.Aa=yt,u.j.info("SVER="+u.Aa));const we=K[5];we!=null&&typeof we=="number"&&0<we&&(d=1.5*we,u.L=d,u.j.info("backChannelRequestTimeoutMs_="+d)),d=u;const Vt=s.g;if(Vt){const zn=Vt.g?Vt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(zn){var w=d.h;w.g||zn.indexOf("spdy")==-1&&zn.indexOf("quic")==-1&&zn.indexOf("h2")==-1||(w.j=w.l,w.g=new Set,w.h&&(Gr(w,w.h),w.h=null))}if(d.D){const Jr=Vt.g?Vt.g.getResponseHeader("X-HTTP-Session-Id"):null;Jr&&(d.ya=Jr,Y(d.I,d.D,Jr))}}u.G=3,u.l&&u.l.ua(),u.ba&&(u.R=Date.now()-s.F,u.j.info("Handshake RTT: "+u.R+"ms")),d=u;var P=s;if(d.qa=eo(d,d.J?d.ia:null,d.W),P.K){Pi(d.h,P);var W=P,ct=d.L;ct&&(W.I=ct),W.B&&(Kr(W),Dn(W)),d.g=P}else Xi(d);0<u.i.length&&jn(u)}else K[0]!="stop"&&K[0]!="close"||ce(u,7);else u.G==3&&(K[0]=="stop"||K[0]=="close"?K[0]=="stop"?ce(u,7):Wr(u):K[0]!="noop"&&u.l&&u.l.ta(K),u.v=0)}}Qe(4)}catch{}}var gu=class{constructor(s,a){this.g=s,this.map=a}};function bi(s){this.l=s||10,c.PerformanceNavigationTiming?(s=c.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ci(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function Si(s){return s.h?1:s.g?s.g.size:0}function Qr(s,a){return s.h?s.h==a:s.g?s.g.has(a):!1}function Gr(s,a){s.g?s.g.add(a):s.h=a}function Pi(s,a){s.h&&s.h==a?s.h=null:s.g&&s.g.has(a)&&s.g.delete(a)}bi.prototype.cancel=function(){if(this.i=Vi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function Vi(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let a=s.i;for(const u of s.g.values())a=a.concat(u.D);return a}return k(s.i)}function _u(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(h(s)){for(var a=[],u=s.length,d=0;d<u;d++)a.push(s[d]);return a}a=[],u=0;for(d in s)a[u++]=s[d];return a}function yu(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(h(s)||typeof s=="string"){var a=[];s=s.length;for(var u=0;u<s;u++)a.push(u);return a}a=[],u=0;for(const d in s)a[u++]=d;return a}}}function Di(s,a){if(s.forEach&&typeof s.forEach=="function")s.forEach(a,void 0);else if(h(s)||typeof s=="string")Array.prototype.forEach.call(s,a,void 0);else for(var u=yu(s),d=_u(s),A=d.length,w=0;w<A;w++)a.call(void 0,d[w],u&&u[w],s)}var Ni=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Eu(s,a){if(s){s=s.split("&");for(var u=0;u<s.length;u++){var d=s[u].indexOf("="),A=null;if(0<=d){var w=s[u].substring(0,d);A=s[u].substring(d+1)}else w=s[u];a(w,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function ue(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof ue){this.h=s.h,Nn(this,s.j),this.o=s.o,this.g=s.g,kn(this,s.s),this.l=s.l;var a=s.i,u=new Je;u.i=a.i,a.g&&(u.g=new Map(a.g),u.h=a.h),ki(this,u),this.m=s.m}else s&&(a=String(s).match(Ni))?(this.h=!1,Nn(this,a[1]||"",!0),this.o=Xe(a[2]||""),this.g=Xe(a[3]||"",!0),kn(this,a[4]),this.l=Xe(a[5]||"",!0),ki(this,a[6]||"",!0),this.m=Xe(a[7]||"")):(this.h=!1,this.i=new Je(null,this.h))}ue.prototype.toString=function(){var s=[],a=this.j;a&&s.push(Ye(a,Oi,!0),":");var u=this.g;return(u||a=="file")&&(s.push("//"),(a=this.o)&&s.push(Ye(a,Oi,!0),"@"),s.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.s,u!=null&&s.push(":",String(u))),(u=this.l)&&(this.g&&u.charAt(0)!="/"&&s.push("/"),s.push(Ye(u,u.charAt(0)=="/"?Au:Tu,!0))),(u=this.i.toString())&&s.push("?",u),(u=this.m)&&s.push("#",Ye(u,wu)),s.join("")};function Ft(s){return new ue(s)}function Nn(s,a,u){s.j=u?Xe(a,!0):a,s.j&&(s.j=s.j.replace(/:$/,""))}function kn(s,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);s.s=a}else s.s=null}function ki(s,a,u){a instanceof Je?(s.i=a,xu(s.i,s.h)):(u||(a=Ye(a,Iu)),s.i=new Je(a,s.h))}function Y(s,a,u){s.i.set(a,u)}function On(s){return Y(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function Xe(s,a){return s?a?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Ye(s,a,u){return typeof s=="string"?(s=encodeURI(s).replace(a,vu),u&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function vu(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var Oi=/[#\/\?@]/g,Tu=/[#\?:]/g,Au=/[#\?]/g,Iu=/[#\?@]/g,wu=/#/g;function Je(s,a){this.h=this.g=null,this.i=s||null,this.j=!!a}function Ht(s){s.g||(s.g=new Map,s.h=0,s.i&&Eu(s.i,function(a,u){s.add(decodeURIComponent(a.replace(/\+/g," ")),u)}))}n=Je.prototype,n.add=function(s,a){Ht(this),this.i=null,s=Ae(this,s);var u=this.g.get(s);return u||this.g.set(s,u=[]),u.push(a),this.h+=1,this};function Mi(s,a){Ht(s),a=Ae(s,a),s.g.has(a)&&(s.i=null,s.h-=s.g.get(a).length,s.g.delete(a))}function Li(s,a){return Ht(s),a=Ae(s,a),s.g.has(a)}n.forEach=function(s,a){Ht(this),this.g.forEach(function(u,d){u.forEach(function(A){s.call(a,A,d,this)},this)},this)},n.na=function(){Ht(this);const s=Array.from(this.g.values()),a=Array.from(this.g.keys()),u=[];for(let d=0;d<a.length;d++){const A=s[d];for(let w=0;w<A.length;w++)u.push(a[d])}return u},n.V=function(s){Ht(this);let a=[];if(typeof s=="string")Li(this,s)&&(a=a.concat(this.g.get(Ae(this,s))));else{s=Array.from(this.g.values());for(let u=0;u<s.length;u++)a=a.concat(s[u])}return a},n.set=function(s,a){return Ht(this),this.i=null,s=Ae(this,s),Li(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[a]),this.h+=1,this},n.get=function(s,a){return s?(s=this.V(s),0<s.length?String(s[0]):a):a};function Fi(s,a,u){Mi(s,a),0<u.length&&(s.i=null,s.g.set(Ae(s,a),k(u)),s.h+=u.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],a=Array.from(this.g.keys());for(var u=0;u<a.length;u++){var d=a[u];const w=encodeURIComponent(String(d)),P=this.V(d);for(d=0;d<P.length;d++){var A=w;P[d]!==""&&(A+="="+encodeURIComponent(String(P[d]))),s.push(A)}}return this.i=s.join("&")};function Ae(s,a){return a=String(a),s.j&&(a=a.toLowerCase()),a}function xu(s,a){a&&!s.j&&(Ht(s),s.i=null,s.g.forEach(function(u,d){var A=d.toLowerCase();d!=A&&(Mi(this,d),Fi(this,A,u))},s)),s.j=a}function Ru(s,a){const u=new $e;if(c.Image){const d=new Image;d.onload=S(Qt,u,"TestLoadImage: loaded",!0,a,d),d.onerror=S(Qt,u,"TestLoadImage: error",!1,a,d),d.onabort=S(Qt,u,"TestLoadImage: abort",!1,a,d),d.ontimeout=S(Qt,u,"TestLoadImage: timeout",!1,a,d),c.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=s}else a(!1)}function bu(s,a){const u=new $e,d=new AbortController,A=setTimeout(()=>{d.abort(),Qt(u,"TestPingServer: timeout",!1,a)},1e4);fetch(s,{signal:d.signal}).then(w=>{clearTimeout(A),w.ok?Qt(u,"TestPingServer: ok",!0,a):Qt(u,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(A),Qt(u,"TestPingServer: error",!1,a)})}function Qt(s,a,u,d,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),d(u)}catch{}}function Cu(){this.g=new cu}function Su(s,a,u){const d=u||"";try{Di(s,function(A,w){let P=A;f(A)&&(P=Lr(A)),a.push(d+w+"="+encodeURIComponent(P))})}catch(A){throw a.push(d+"type="+encodeURIComponent("_badmap")),A}}function Mn(s){this.l=s.Ub||null,this.j=s.eb||!1}N(Mn,Fr),Mn.prototype.g=function(){return new Ln(this.l,this.j)},Mn.prototype.i=function(s){return function(){return s}}({});function Ln(s,a){gt.call(this),this.D=s,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(Ln,gt),n=Ln.prototype,n.open=function(s,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=a,this.readyState=1,tn(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(a.body=s),(this.D||c).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ze(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,tn(this)),this.g&&(this.readyState=3,tn(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ui(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ui(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var a=s.value?s.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!s.done}))&&(this.response=this.responseText+=a)}s.done?Ze(this):tn(this),this.readyState==3&&Ui(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,Ze(this))},n.Qa=function(s){this.g&&(this.response=s,Ze(this))},n.ga=function(){this.g&&Ze(this)};function Ze(s){s.readyState=4,s.l=null,s.j=null,s.v=null,tn(s)}n.setRequestHeader=function(s,a){this.u.append(s,a)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],a=this.h.entries();for(var u=a.next();!u.done;)u=u.value,s.push(u[0]+": "+u[1]),u=a.next();return s.join(`\r
`)};function tn(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(Ln.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function ji(s){let a="";return st(s,function(u,d){a+=d,a+=":",a+=u,a+=`\r
`}),a}function $r(s,a,u){t:{for(d in u){var d=!1;break t}d=!0}d||(u=ji(u),typeof s=="string"?u!=null&&encodeURIComponent(String(u)):Y(s,a,u))}function tt(s){gt.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(tt,gt);var Pu=/^https?$/i,Vu=["POST","PUT"];n=tt.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,a,u,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);a=a?a.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Br.g(),this.v=this.o?mi(this.o):mi(Br),this.g.onreadystatechange=x(this.Ea,this);try{this.B=!0,this.g.open(a,String(s),!0),this.B=!1}catch(w){Bi(this,w);return}if(s=u||"",u=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var A in d)u.set(A,d[A]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const w of d.keys())u.set(w,d.get(w));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(u.keys()).find(w=>w.toLowerCase()=="content-type"),A=c.FormData&&s instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Vu,a,void 0))||d||A||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[w,P]of u)this.g.setRequestHeader(w,P);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ki(this),this.u=!0,this.g.send(s),this.u=!1}catch(w){Bi(this,w)}};function Bi(s,a){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=a,s.m=5,qi(s),Fn(s)}function qi(s){s.A||(s.A=!0,At(s,"complete"),At(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,At(this,"complete"),At(this,"abort"),Fn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Fn(this,!0)),tt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?zi(this):this.bb())},n.bb=function(){zi(this)};function zi(s){if(s.h&&typeof l<"u"&&(!s.v[1]||Ut(s)!=4||s.Z()!=2)){if(s.u&&Ut(s)==4)hi(s.Ea,0,s);else if(At(s,"readystatechange"),Ut(s)==4){s.h=!1;try{const P=s.Z();t:switch(P){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var u;if(!(u=a)){var d;if(d=P===0){var A=String(s.D).match(Ni)[1]||null;!A&&c.self&&c.self.location&&(A=c.self.location.protocol.slice(0,-1)),d=!Pu.test(A?A.toLowerCase():"")}u=d}if(u)At(s,"complete"),At(s,"success");else{s.m=6;try{var w=2<Ut(s)?s.g.statusText:""}catch{w=""}s.l=w+" ["+s.Z()+"]",qi(s)}}finally{Fn(s)}}}}function Fn(s,a){if(s.g){Ki(s);const u=s.g,d=s.v[0]?()=>{}:null;s.g=null,s.v=null,a||At(s,"ready");try{u.onreadystatechange=d}catch{}}}function Ki(s){s.I&&(c.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function Ut(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<Ut(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var a=this.g.responseText;return s&&a.indexOf(s)==0&&(a=a.substring(s.length)),uu(a)}};function Hi(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Du(s){const a={};s=(s.g&&2<=Ut(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<s.length;d++){if(H(s[d]))continue;var u=v(s[d]);const A=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const w=a[A]||[];a[A]=w,w.push(u)}T(a,function(d){return d.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function en(s,a,u){return u&&u.internalChannelParams&&u.internalChannelParams[s]||a}function Qi(s){this.Aa=0,this.i=[],this.j=new $e,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=en("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=en("baseRetryDelayMs",5e3,s),this.cb=en("retryDelaySeedMs",1e4,s),this.Wa=en("forwardChannelMaxRetries",2,s),this.wa=en("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new bi(s&&s.concurrentRequestLimit),this.Da=new Cu,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Qi.prototype,n.la=8,n.G=1,n.connect=function(s,a,u,d){It(0),this.W=s,this.H=a||{},u&&d!==void 0&&(this.H.OSID=u,this.H.OAID=d),this.F=this.X,this.I=eo(this,null,this.W),jn(this)};function Wr(s){if(Gi(s),s.G==3){var a=s.U++,u=Ft(s.I);if(Y(u,"SID",s.K),Y(u,"RID",a),Y(u,"TYPE","terminate"),nn(s,u),a=new Kt(s,s.j,a),a.L=2,a.v=On(Ft(u)),u=!1,c.navigator&&c.navigator.sendBeacon)try{u=c.navigator.sendBeacon(a.v.toString(),"")}catch{}!u&&c.Image&&(new Image().src=a.v,u=!0),u||(a.g=no(a.j,null),a.g.ea(a.v)),a.F=Date.now(),Dn(a)}to(s)}function Un(s){s.g&&(Yr(s),s.g.cancel(),s.g=null)}function Gi(s){Un(s),s.u&&(c.clearTimeout(s.u),s.u=null),Bn(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&c.clearTimeout(s.s),s.s=null)}function jn(s){if(!Ci(s.h)&&!s.s){s.s=!0;var a=s.Ga;pt||ve(),ie||(pt(),ie=!0),oe.add(a,s),s.B=0}}function Nu(s,a){return Si(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=a.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=Ge(x(s.Ga,s,a),Zi(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const A=new Kt(this,this.j,s);let w=this.o;if(this.S&&(w?(w=m(w),E(w,this.S)):w=this.S),this.m!==null||this.O||(A.H=w,w=null),this.P)t:{for(var a=0,u=0;u<this.i.length;u++){e:{var d=this.i[u];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break e}d=void 0}if(d===void 0)break;if(a+=d,4096<a){a=u;break t}if(a===4096||u===this.i.length-1){a=u+1;break t}}a=1e3}else a=1e3;a=Wi(this,A,a),u=Ft(this.I),Y(u,"RID",s),Y(u,"CVER",22),this.D&&Y(u,"X-HTTP-Session-Id",this.D),nn(this,u),w&&(this.O?a="headers="+encodeURIComponent(String(ji(w)))+"&"+a:this.m&&$r(u,this.m,w)),Gr(this.h,A),this.Ua&&Y(u,"TYPE","init"),this.P?(Y(u,"$req",a),Y(u,"SID","null"),A.T=!0,zr(A,u,null)):zr(A,u,a),this.G=2}}else this.G==3&&(s?$i(this,s):this.i.length==0||Ci(this.h)||$i(this))};function $i(s,a){var u;a?u=a.l:u=s.U++;const d=Ft(s.I);Y(d,"SID",s.K),Y(d,"RID",u),Y(d,"AID",s.T),nn(s,d),s.m&&s.o&&$r(d,s.m,s.o),u=new Kt(s,s.j,u,s.B+1),s.m===null&&(u.H=s.o),a&&(s.i=a.D.concat(s.i)),a=Wi(s,u,1e3),u.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),Gr(s.h,u),zr(u,d,a)}function nn(s,a){s.H&&st(s.H,function(u,d){Y(a,d,u)}),s.l&&Di({},function(u,d){Y(a,d,u)})}function Wi(s,a,u){u=Math.min(s.i.length,u);var d=s.l?x(s.l.Na,s.l,s):null;t:{var A=s.i;let w=-1;for(;;){const P=["count="+u];w==-1?0<u?(w=A[0].g,P.push("ofs="+w)):w=0:P.push("ofs="+w);let W=!0;for(let ct=0;ct<u;ct++){let K=A[ct].g;const _t=A[ct].map;if(K-=w,0>K)w=Math.max(0,A[ct].g-100),W=!1;else try{Su(_t,P,"req"+K+"_")}catch{d&&d(_t)}}if(W){d=P.join("&");break t}}}return s=s.i.splice(0,u),a.D=s,d}function Xi(s){if(!s.g&&!s.u){s.Y=1;var a=s.Fa;pt||ve(),ie||(pt(),ie=!0),oe.add(a,s),s.v=0}}function Xr(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=Ge(x(s.Fa,s),Zi(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,Yi(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=Ge(x(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,It(10),Un(this),Yi(this))};function Yr(s){s.A!=null&&(c.clearTimeout(s.A),s.A=null)}function Yi(s){s.g=new Kt(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var a=Ft(s.qa);Y(a,"RID","rpc"),Y(a,"SID",s.K),Y(a,"AID",s.T),Y(a,"CI",s.F?"0":"1"),!s.F&&s.ja&&Y(a,"TO",s.ja),Y(a,"TYPE","xmlhttp"),nn(s,a),s.m&&s.o&&$r(a,s.m,s.o),s.L&&(s.g.I=s.L);var u=s.g;s=s.ia,u.L=1,u.v=On(Ft(a)),u.m=null,u.P=!0,wi(u,s)}n.Za=function(){this.C!=null&&(this.C=null,Un(this),Xr(this),It(19))};function Bn(s){s.C!=null&&(c.clearTimeout(s.C),s.C=null)}function Ji(s,a){var u=null;if(s.g==a){Bn(s),Yr(s),s.g=null;var d=2}else if(Qr(s.h,a))u=a.D,Pi(s.h,a),d=1;else return;if(s.G!=0){if(a.o)if(d==1){u=a.m?a.m.length:0,a=Date.now()-a.F;var A=s.B;d=Sn(),At(d,new vi(d,u)),jn(s)}else Xi(s);else if(A=a.s,A==3||A==0&&0<a.X||!(d==1&&Nu(s,a)||d==2&&Xr(s)))switch(u&&0<u.length&&(a=s.h,a.i=a.i.concat(u)),A){case 1:ce(s,5);break;case 4:ce(s,10);break;case 3:ce(s,6);break;default:ce(s,2)}}}function Zi(s,a){let u=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(u*=2),u*a}function ce(s,a){if(s.j.info("Error code "+a),a==2){var u=x(s.fb,s),d=s.Xa;const A=!d;d=new ue(d||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Nn(d,"https"),On(d),A?Ru(d.toString(),u):bu(d.toString(),u)}else It(2);s.G=0,s.l&&s.l.sa(a),to(s),Gi(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),It(2)):(this.j.info("Failed to ping google.com"),It(1))};function to(s){if(s.G=0,s.ka=[],s.l){const a=Vi(s.h);(a.length!=0||s.i.length!=0)&&(V(s.ka,a),V(s.ka,s.i),s.h.i.length=0,k(s.i),s.i.length=0),s.l.ra()}}function eo(s,a,u){var d=u instanceof ue?Ft(u):new ue(u);if(d.g!="")a&&(d.g=a+"."+d.g),kn(d,d.s);else{var A=c.location;d=A.protocol,a=a?a+"."+A.hostname:A.hostname,A=+A.port;var w=new ue(null);d&&Nn(w,d),a&&(w.g=a),A&&kn(w,A),u&&(w.l=u),d=w}return u=s.D,a=s.ya,u&&a&&Y(d,u,a),Y(d,"VER",s.la),nn(s,d),d}function no(s,a,u){if(a&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=s.Ca&&!s.pa?new tt(new Mn({eb:u})):new tt(s.pa),a.Ha(s.J),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ro(){}n=ro.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function qn(){}qn.prototype.g=function(s,a){return new bt(s,a)};function bt(s,a){gt.call(this),this.g=new Qi(a),this.l=s,this.h=a&&a.messageUrlParams||null,s=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(s?s["X-WebChannel-Content-Type"]=a.messageContentType:s={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(s?s["X-WebChannel-Client-Profile"]=a.va:s={"X-WebChannel-Client-Profile":a.va}),this.g.S=s,(s=a&&a.Sb)&&!H(s)&&(this.g.m=s),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!H(a)&&(this.g.D=a,s=this.h,s!==null&&a in s&&(s=this.h,a in s&&delete s[a])),this.j=new Ie(this)}N(bt,gt),bt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},bt.prototype.close=function(){Wr(this.g)},bt.prototype.o=function(s){var a=this.g;if(typeof s=="string"){var u={};u.__data__=s,s=u}else this.u&&(u={},u.__data__=Lr(s),s=u);a.i.push(new gu(a.Ya++,s)),a.G==3&&jn(a)},bt.prototype.N=function(){this.g.l=null,delete this.j,Wr(this.g),delete this.g,bt.aa.N.call(this)};function so(s){Ur.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var a=s.__sm__;if(a){t:{for(const u in a){s=u;break t}s=void 0}(this.i=s)&&(s=this.i,a=a!==null&&s in a?a[s]:void 0),this.data=a}else this.data=s}N(so,Ur);function io(){jr.call(this),this.status=1}N(io,jr);function Ie(s){this.g=s}N(Ie,ro),Ie.prototype.ua=function(){At(this.g,"a")},Ie.prototype.ta=function(s){At(this.g,new so(s))},Ie.prototype.sa=function(s){At(this.g,new io)},Ie.prototype.ra=function(){At(this.g,"b")},qn.prototype.createWebChannel=qn.prototype.g,bt.prototype.send=bt.prototype.o,bt.prototype.open=bt.prototype.m,bt.prototype.close=bt.prototype.close,Pa=function(){return new qn},Sa=function(){return Sn()},Ca=ae,ds={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Pn.NO_ERROR=0,Pn.TIMEOUT=8,Pn.HTTP_ERROR=6,Wn=Pn,Ti.COMPLETE="complete",ba=Ti,gi.EventType=He,He.OPEN="a",He.CLOSE="b",He.ERROR="c",He.MESSAGE="d",gt.prototype.listen=gt.prototype.K,rn=gi,tt.prototype.listenOnce=tt.prototype.L,tt.prototype.getLastError=tt.prototype.Ka,tt.prototype.getLastErrorCode=tt.prototype.Ba,tt.prototype.getStatus=tt.prototype.Z,tt.prototype.getResponseJson=tt.prototype.Oa,tt.prototype.getResponseText=tt.prototype.oa,tt.prototype.send=tt.prototype.ea,tt.prototype.setWithCredentials=tt.prototype.Ha,Ra=tt}).apply(typeof Kn<"u"?Kn:typeof self<"u"?self:typeof window<"u"?window:{});const yo="@firebase/firestore",Eo="4.7.10";/**
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
 */class vt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}vt.UNAUTHENTICATED=new vt(null),vt.GOOGLE_CREDENTIALS=new vt("google-credentials-uid"),vt.FIRST_PARTY=new vt("first-party-uid"),vt.MOCK_USER=new vt("mock-user");/**
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
 */let Ue="11.5.0";/**
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
 */const fe=new Ea("@firebase/firestore");function xe(){return fe.logLevel}function D(n,...t){if(fe.logLevel<=z.DEBUG){const e=t.map(Ps);fe.debug(`Firestore (${Ue}): ${n}`,...e)}}function qt(n,...t){if(fe.logLevel<=z.ERROR){const e=t.map(Ps);fe.error(`Firestore (${Ue}): ${n}`,...e)}}function Ve(n,...t){if(fe.logLevel<=z.WARN){const e=t.map(Ps);fe.warn(`Firestore (${Ue}): ${n}`,...e)}}function Ps(n){if(typeof n=="string")return n;try{/**
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
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
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
 */function L(n="Unexpected state"){const t=`FIRESTORE (${Ue}) INTERNAL ASSERTION FAILED: `+n;throw qt(t),new Error(t)}function $(n,t){n||L()}function U(n,t){return n}/**
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
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends Fe{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Yt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class Va{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class mh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(vt.UNAUTHENTICATED))}shutdown(){}}class gh{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class _h{constructor(t){this.t=t,this.currentUser=vt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){$(this.o===void 0);let r=this.i;const i=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new Yt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Yt,t.enqueueRetryable(()=>i(this.currentUser))};const l=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},c=h=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Yt)}},0),l()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?($(typeof r.accessToken=="string"),new Va(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return $(t===null||typeof t=="string"),new vt(t)}}class yh{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=vt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Eh{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new yh(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(vt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class vo{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class vh{constructor(t,e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,th(t)&&t.settings.appCheckToken&&(this.V=t.settings.appCheckToken)}start(t,e){$(this.o===void 0);const r=o=>{o.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const l=o.token!==this.R;return this.R=o.token,D("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const i=o=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new vo(this.V));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?($(typeof e.token=="string"),this.R=e.token,new vo(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Th(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function Da(){return new TextEncoder}/**
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
 */class Na{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=Th(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<e&&(r+=t.charAt(i[o]%62))}return r}}function j(n,t){return n<t?-1:n>t?1:0}function fs(n,t){let e=0;for(;e<n.length&&e<t.length;){const r=n.codePointAt(e),i=t.codePointAt(e);if(r!==i){if(r<128&&i<128)return j(r,i);{const o=Da(),l=Ah(o.encode(To(n,e)),o.encode(To(t,e)));return l!==0?l:j(r,i)}}e+=r>65535?2:1}return j(n.length,t.length)}function To(n,t){return n.codePointAt(t)>65535?n.substring(t,t+2):n.substring(t,t+1)}function Ah(n,t){for(let e=0;e<n.length&&e<t.length;++e)if(n[e]!==t[e])return j(n[e],t[e]);return j(n.length,t.length)}function De(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}/**
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
 */const Ao=-62135596800,Io=1e6;class ot{static now(){return ot.fromMillis(Date.now())}static fromDate(t){return ot.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*Io);return new ot(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new O(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new O(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Ao)throw new O(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new O(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Io}_compareTo(t){return this.seconds===t.seconds?j(this.nanoseconds,t.nanoseconds):j(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-Ao;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class F{static fromTimestamp(t){return new F(t)}static min(){return new F(new ot(0,0))}static max(){return new F(new ot(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const wo="__name__";class Nt{constructor(t,e,r){e===void 0?e=0:e>t.length&&L(),r===void 0?r=t.length-e:r>t.length-e&&L(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Nt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Nt?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const o=Nt.compareSegments(t.get(i),e.get(i));if(o!==0)return o}return j(t.length,e.length)}static compareSegments(t,e){const r=Nt.isNumericId(t),i=Nt.isNumericId(e);return r&&!i?-1:!r&&i?1:r&&i?Nt.extractNumericId(t).compare(Nt.extractNumericId(e)):fs(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Xt.fromString(t.substring(4,t.length-2))}}class J extends Nt{construct(t,e,r){return new J(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new O(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new J(e)}static emptyPath(){return new J([])}}const Ih=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class dt extends Nt{construct(t,e,r){return new dt(t,e,r)}static isValidIdentifier(t){return Ih.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),dt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===wo}static keyField(){return new dt([wo])}static fromServerFormat(t){const e=[];let r="",i=0;const o=()=>{if(r.length===0)throw new O(C.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let l=!1;for(;i<t.length;){const c=t[i];if(c==="\\"){if(i+1===t.length)throw new O(C.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new O(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,i+=2}else c==="`"?(l=!l,i++):c!=="."||l?(r+=c,i++):(o(),i++)}if(o(),l)throw new O(C.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new dt(e)}static emptyPath(){return new dt([])}}/**
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
 */class M{constructor(t){this.path=t}static fromPath(t){return new M(J.fromString(t))}static fromName(t){return new M(J.fromString(t).popFirst(5))}static empty(){return new M(J.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&J.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return J.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new M(new J(t.slice()))}}/**
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
 */const pn=-1;function wh(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=F.fromTimestamp(r===1e9?new ot(e+1,0):new ot(e,r));return new Zt(i,M.empty(),t)}function xh(n){return new Zt(n.readTime,n.key,pn)}class Zt{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Zt(F.min(),M.empty(),pn)}static max(){return new Zt(F.max(),M.empty(),pn)}}function Rh(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=M.comparator(n.documentKey,t.documentKey),e!==0?e:j(n.largestBatchId,t.largestBatchId))}/**
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
 */const bh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ch{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function je(n){if(n.code!==C.FAILED_PRECONDITION||n.message!==bh)throw n;D("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class b{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&L(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new b((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof b?e:b.resolve(e)}catch(e){return b.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):b.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):b.reject(e)}static resolve(t){return new b((e,r)=>{e(t)})}static reject(t){return new b((e,r)=>{r(t)})}static waitFor(t){return new b((e,r)=>{let i=0,o=0,l=!1;t.forEach(c=>{++i,c.next(()=>{++o,l&&o===i&&e()},h=>r(h))}),l=!0,o===i&&e()})}static or(t){let e=b.resolve(!1);for(const r of t)e=e.next(i=>i?b.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,o)=>{r.push(e.call(this,i,o))}),this.waitFor(r)}static mapArray(t,e){return new b((r,i)=>{const o=t.length,l=new Array(o);let c=0;for(let h=0;h<o;h++){const f=h;e(t[f]).next(_=>{l[f]=_,++c,c===o&&r(l)},_=>i(_))}})}static doWhile(t,e){return new b((r,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):r()};o()})}}function Sh(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Be(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class _r{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.oe(r),this._e=r=>e.writeSequenceNumber(r))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}_r.ae=-1;/**
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
 */const Vs=-1;function yr(n){return n==null}function sr(n){return n===0&&1/n==-1/0}function Ph(n){return typeof n=="number"&&Number.isInteger(n)&&!sr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const ka="";function Vh(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=xo(t)),t=Dh(n.get(e),t);return xo(t)}function Dh(n,t){let e=t;const r=n.length;for(let i=0;i<r;i++){const o=n.charAt(i);switch(o){case"\0":e+="";break;case ka:e+="";break;default:e+=o}}return e}function xo(n){return n+ka+""}/**
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
 */function Ro(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function me(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Oa(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class Z{constructor(t,e){this.comparator=t,this.root=e||ht.EMPTY}insert(t,e){return new Z(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ht.BLACK,null,null))}remove(t){return new Z(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ht.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Hn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Hn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Hn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Hn(this.root,t,this.comparator,!0)}}class Hn{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ht{constructor(t,e,r,i,o){this.key=t,this.value=e,this.color=r??ht.RED,this.left=i??ht.EMPTY,this.right=o??ht.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,o){return new ht(t??this.key,e??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const o=r(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,r),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ht.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return ht.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw L();const t=this.left.check();if(t!==this.right.check())throw L();return t+(this.isRed()?0:1)}}ht.EMPTY=null,ht.RED=!0,ht.BLACK=!1;ht.EMPTY=new class{constructor(){this.size=0}get key(){throw L()}get value(){throw L()}get color(){throw L()}get left(){throw L()}get right(){throw L()}copy(t,e,r,i,o){return this}insert(t,e,r){return new ht(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class at{constructor(t){this.comparator=t,this.data=new Z(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new bo(this.data.getIterator())}getIteratorFrom(t){return new bo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof at)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new at(this.comparator);return e.data=t,e}}class bo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Dt{constructor(t){this.fields=t,t.sort(dt.comparator)}static empty(){return new Dt([])}unionWith(t){let e=new at(dt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Dt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return De(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class Ma extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ft{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Ma("Invalid base64 string: "+o):o}}(t);return new ft(e)}static fromUint8Array(t){const e=function(i){let o="";for(let l=0;l<i.length;++l)o+=String.fromCharCode(i[l]);return o}(t);return new ft(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return j(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ft.EMPTY_BYTE_STRING=new ft("");const Nh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function te(n){if($(!!n),typeof n=="string"){let t=0;const e=Nh.exec(n);if($(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:nt(n.seconds),nanos:nt(n.nanos)}}function nt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ee(n){return typeof n=="string"?ft.fromBase64String(n):ft.fromUint8Array(n)}/**
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
 */const La="server_timestamp",Fa="__type__",Ua="__previous_value__",ja="__local_write_time__";function Ds(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[Fa])===null||e===void 0?void 0:e.stringValue)===La}function Er(n){const t=n.mapValue.fields[Ua];return Ds(t)?Er(t):t}function mn(n){const t=te(n.mapValue.fields[ja].timestampValue);return new ot(t.seconds,t.nanos)}/**
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
 */class kh{constructor(t,e,r,i,o,l,c,h,f){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=l,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=f}}const ir="(default)";class gn{constructor(t,e){this.projectId=t,this.database=e||ir}static empty(){return new gn("","")}get isDefaultDatabase(){return this.database===ir}isEqual(t){return t instanceof gn&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Ba="__type__",Oh="__max__",Qn={mapValue:{}},qa="__vector__",or="value";function ne(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ds(n)?4:Lh(n)?9007199254740991:Mh(n)?10:11:L()}function Mt(n,t){if(n===t)return!0;const e=ne(n);if(e!==ne(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return mn(n).isEqual(mn(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const l=te(i.timestampValue),c=te(o.timestampValue);return l.seconds===c.seconds&&l.nanos===c.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,o){return ee(i.bytesValue).isEqual(ee(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,o){return nt(i.geoPointValue.latitude)===nt(o.geoPointValue.latitude)&&nt(i.geoPointValue.longitude)===nt(o.geoPointValue.longitude)}(n,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return nt(i.integerValue)===nt(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const l=nt(i.doubleValue),c=nt(o.doubleValue);return l===c?sr(l)===sr(c):isNaN(l)&&isNaN(c)}return!1}(n,t);case 9:return De(n.arrayValue.values||[],t.arrayValue.values||[],Mt);case 10:case 11:return function(i,o){const l=i.mapValue.fields||{},c=o.mapValue.fields||{};if(Ro(l)!==Ro(c))return!1;for(const h in l)if(l.hasOwnProperty(h)&&(c[h]===void 0||!Mt(l[h],c[h])))return!1;return!0}(n,t);default:return L()}}function _n(n,t){return(n.values||[]).find(e=>Mt(e,t))!==void 0}function Ne(n,t){if(n===t)return 0;const e=ne(n),r=ne(t);if(e!==r)return j(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return j(n.booleanValue,t.booleanValue);case 2:return function(o,l){const c=nt(o.integerValue||o.doubleValue),h=nt(l.integerValue||l.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1}(n,t);case 3:return Co(n.timestampValue,t.timestampValue);case 4:return Co(mn(n),mn(t));case 5:return fs(n.stringValue,t.stringValue);case 6:return function(o,l){const c=ee(o),h=ee(l);return c.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,l){const c=o.split("/"),h=l.split("/");for(let f=0;f<c.length&&f<h.length;f++){const _=j(c[f],h[f]);if(_!==0)return _}return j(c.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,l){const c=j(nt(o.latitude),nt(l.latitude));return c!==0?c:j(nt(o.longitude),nt(l.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return So(n.arrayValue,t.arrayValue);case 10:return function(o,l){var c,h,f,_;const I=o.fields||{},x=l.fields||{},S=(c=I[or])===null||c===void 0?void 0:c.arrayValue,N=(h=x[or])===null||h===void 0?void 0:h.arrayValue,k=j(((f=S==null?void 0:S.values)===null||f===void 0?void 0:f.length)||0,((_=N==null?void 0:N.values)===null||_===void 0?void 0:_.length)||0);return k!==0?k:So(S,N)}(n.mapValue,t.mapValue);case 11:return function(o,l){if(o===Qn.mapValue&&l===Qn.mapValue)return 0;if(o===Qn.mapValue)return 1;if(l===Qn.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),f=l.fields||{},_=Object.keys(f);h.sort(),_.sort();for(let I=0;I<h.length&&I<_.length;++I){const x=fs(h[I],_[I]);if(x!==0)return x;const S=Ne(c[h[I]],f[_[I]]);if(S!==0)return S}return j(h.length,_.length)}(n.mapValue,t.mapValue);default:throw L()}}function Co(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return j(n,t);const e=te(n),r=te(t),i=j(e.seconds,r.seconds);return i!==0?i:j(e.nanos,r.nanos)}function So(n,t){const e=n.values||[],r=t.values||[];for(let i=0;i<e.length&&i<r.length;++i){const o=Ne(e[i],r[i]);if(o)return o}return j(e.length,r.length)}function ke(n){return ps(n)}function ps(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=te(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return ee(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return M.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const o of e.values||[])i?i=!1:r+=",",r+=ps(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const l of r)o?o=!1:i+=",",i+=`${l}:${ps(e.fields[l])}`;return i+"}"}(n.mapValue):L()}function Xn(n){switch(ne(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Er(n);return t?16+Xn(t):16;case 5:return 2*n.stringValue.length;case 6:return ee(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,o)=>i+Xn(o),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return me(r.fields,(o,l)=>{i+=o.length+Xn(l)}),i}(n.mapValue);default:throw L()}}function ms(n){return!!n&&"integerValue"in n}function Ns(n){return!!n&&"arrayValue"in n}function Po(n){return!!n&&"nullValue"in n}function Vo(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Yn(n){return!!n&&"mapValue"in n}function Mh(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[Ba])===null||e===void 0?void 0:e.stringValue)===qa}function an(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return me(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=an(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=an(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Lh(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Oh}/**
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
 */class Ct{constructor(t){this.value=t}static empty(){return new Ct({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Yn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=an(e)}setAll(t){let e=dt.emptyPath(),r={},i=[];t.forEach((l,c)=>{if(!e.isImmediateParentOf(c)){const h=this.getFieldsMap(e);this.applyChanges(h,r,i),r={},i=[],e=c.popLast()}l?r[c.lastSegment()]=an(l):i.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,i)}delete(t){const e=this.field(t.popLast());Yn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Mt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];Yn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){me(e,(i,o)=>t[i]=o);for(const i of r)delete t[i]}clone(){return new Ct(an(this.value))}}function za(n){const t=[];return me(n.fields,(e,r)=>{const i=new dt([e]);if(Yn(r)){const o=za(r.mapValue).fields;if(o.length===0)t.push(i);else for(const l of o)t.push(i.child(l))}else t.push(i)}),new Dt(t)}/**
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
 */class Tt{constructor(t,e,r,i,o,l,c){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=o,this.data=l,this.documentState=c}static newInvalidDocument(t){return new Tt(t,0,F.min(),F.min(),F.min(),Ct.empty(),0)}static newFoundDocument(t,e,r,i){return new Tt(t,1,e,F.min(),r,i,0)}static newNoDocument(t,e){return new Tt(t,2,e,F.min(),F.min(),Ct.empty(),0)}static newUnknownDocument(t,e){return new Tt(t,3,e,F.min(),F.min(),Ct.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ct.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Tt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ar{constructor(t,e){this.position=t,this.inclusive=e}}function Do(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const o=t[i],l=n.position[i];if(o.field.isKeyField()?r=M.comparator(M.fromName(l.referenceValue),e.key):r=Ne(l,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function No(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Mt(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class lr{constructor(t,e="asc"){this.field=t,this.dir=e}}function Fh(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class Ka{}class it extends Ka{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new jh(t,e,r):e==="array-contains"?new zh(t,r):e==="in"?new Kh(t,r):e==="not-in"?new Hh(t,r):e==="array-contains-any"?new Qh(t,r):new it(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Bh(t,r):new qh(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Ne(e,this.value)):e!==null&&ne(this.value)===ne(e)&&this.matchesComparison(Ne(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return L()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Lt extends Ka{constructor(t,e){super(),this.filters=t,this.op=e,this.ce=null}static create(t,e){return new Lt(t,e)}matches(t){return Ha(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function Ha(n){return n.op==="and"}function Qa(n){return Uh(n)&&Ha(n)}function Uh(n){for(const t of n.filters)if(t instanceof Lt)return!1;return!0}function gs(n){if(n instanceof it)return n.field.canonicalString()+n.op.toString()+ke(n.value);if(Qa(n))return n.filters.map(t=>gs(t)).join(",");{const t=n.filters.map(e=>gs(e)).join(",");return`${n.op}(${t})`}}function Ga(n,t){return n instanceof it?function(r,i){return i instanceof it&&r.op===i.op&&r.field.isEqual(i.field)&&Mt(r.value,i.value)}(n,t):n instanceof Lt?function(r,i){return i instanceof Lt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,l,c)=>o&&Ga(l,i.filters[c]),!0):!1}(n,t):void L()}function $a(n){return n instanceof it?function(e){return`${e.field.canonicalString()} ${e.op} ${ke(e.value)}`}(n):n instanceof Lt?function(e){return e.op.toString()+" {"+e.getFilters().map($a).join(" ,")+"}"}(n):"Filter"}class jh extends it{constructor(t,e,r){super(t,e,r),this.key=M.fromName(r.referenceValue)}matches(t){const e=M.comparator(t.key,this.key);return this.matchesComparison(e)}}class Bh extends it{constructor(t,e){super(t,"in",e),this.keys=Wa("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class qh extends it{constructor(t,e){super(t,"not-in",e),this.keys=Wa("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Wa(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>M.fromName(r.referenceValue))}class zh extends it{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Ns(e)&&_n(e.arrayValue,this.value)}}class Kh extends it{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&_n(this.value.arrayValue,e)}}class Hh extends it{constructor(t,e){super(t,"not-in",e)}matches(t){if(_n(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!_n(this.value.arrayValue,e)}}class Qh extends it{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Ns(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>_n(this.value.arrayValue,r))}}/**
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
 */class Gh{constructor(t,e=null,r=[],i=[],o=null,l=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=l,this.endAt=c,this.le=null}}function ko(n,t=null,e=[],r=[],i=null,o=null,l=null){return new Gh(n,t,e,r,i,o,l)}function ks(n){const t=U(n);if(t.le===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>gs(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),yr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>ke(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>ke(r)).join(",")),t.le=e}return t.le}function Os(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Fh(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Ga(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!No(n.startAt,t.startAt)&&No(n.endAt,t.endAt)}function _s(n){return M.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class vr{constructor(t,e=null,r=[],i=[],o=null,l="F",c=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=l,this.startAt=c,this.endAt=h,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function $h(n,t,e,r,i,o,l,c){return new vr(n,t,e,r,i,o,l,c)}function Ms(n){return new vr(n)}function Oo(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Wh(n){return n.collectionGroup!==null}function ln(n){const t=U(n);if(t.he===null){t.he=[];const e=new Set;for(const o of t.explicitOrderBy)t.he.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(l){let c=new at(dt.comparator);return l.filters.forEach(h=>{h.getFlattenedFilters().forEach(f=>{f.isInequality()&&(c=c.add(f.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.he.push(new lr(o,r))}),e.has(dt.keyField().canonicalString())||t.he.push(new lr(dt.keyField(),r))}return t.he}function kt(n){const t=U(n);return t.Pe||(t.Pe=Xh(t,ln(n))),t.Pe}function Xh(n,t){if(n.limitType==="F")return ko(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new lr(i.field,o)});const e=n.endAt?new ar(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ar(n.startAt.position,n.startAt.inclusive):null;return ko(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function ys(n,t,e){return new vr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Tr(n,t){return Os(kt(n),kt(t))&&n.limitType===t.limitType}function Xa(n){return`${ks(kt(n))}|lt:${n.limitType}`}function Re(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>$a(i)).join(", ")}]`),yr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(l){return`${l.field.canonicalString()} (${l.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>ke(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>ke(i)).join(",")),`Target(${r})`}(kt(n))}; limitType=${n.limitType})`}function Ar(n,t){return t.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):M.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,i){for(const o of ln(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(l,c,h){const f=Do(l,c,h);return l.inclusive?f<=0:f<0}(r.startAt,ln(r),i)||r.endAt&&!function(l,c,h){const f=Do(l,c,h);return l.inclusive?f>=0:f>0}(r.endAt,ln(r),i))}(n,t)}function Yh(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Ya(n){return(t,e)=>{let r=!1;for(const i of ln(n)){const o=Jh(i,t,e);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function Jh(n,t,e){const r=n.field.isKeyField()?M.comparator(t.key,e.key):function(o,l,c){const h=l.data.field(o),f=c.data.field(o);return h!==null&&f!==null?Ne(h,f):L()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return L()}}/**
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
 */class ge{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){me(this.inner,(e,r)=>{for(const[i,o]of r)t(i,o)})}isEmpty(){return Oa(this.inner)}size(){return this.innerSize}}/**
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
 */const Zh=new Z(M.comparator);function zt(){return Zh}const Ja=new Z(M.comparator);function sn(...n){let t=Ja;for(const e of n)t=t.insert(e.key,e);return t}function Za(n){let t=Ja;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function de(){return un()}function tl(){return un()}function un(){return new ge(n=>n.toString(),(n,t)=>n.isEqual(t))}const td=new Z(M.comparator),ed=new at(M.comparator);function B(...n){let t=ed;for(const e of n)t=t.add(e);return t}const nd=new at(j);function rd(){return nd}/**
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
 */function Ls(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:sr(t)?"-0":t}}function el(n){return{integerValue:""+n}}function sd(n,t){return Ph(t)?el(t):Ls(n,t)}/**
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
 */class Ir{constructor(){this._=void 0}}function id(n,t,e){return n instanceof ur?function(i,o){const l={fields:{[Fa]:{stringValue:La},[ja]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&Ds(o)&&(o=Er(o)),o&&(l.fields[Ua]=o),{mapValue:l}}(e,t):n instanceof yn?rl(n,t):n instanceof En?sl(n,t):function(i,o){const l=nl(i,o),c=Mo(l)+Mo(i.Ie);return ms(l)&&ms(i.Ie)?el(c):Ls(i.serializer,c)}(n,t)}function od(n,t,e){return n instanceof yn?rl(n,t):n instanceof En?sl(n,t):e}function nl(n,t){return n instanceof cr?function(r){return ms(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class ur extends Ir{}class yn extends Ir{constructor(t){super(),this.elements=t}}function rl(n,t){const e=il(t);for(const r of n.elements)e.some(i=>Mt(i,r))||e.push(r);return{arrayValue:{values:e}}}class En extends Ir{constructor(t){super(),this.elements=t}}function sl(n,t){let e=il(t);for(const r of n.elements)e=e.filter(i=>!Mt(i,r));return{arrayValue:{values:e}}}class cr extends Ir{constructor(t,e){super(),this.serializer=t,this.Ie=e}}function Mo(n){return nt(n.integerValue||n.doubleValue)}function il(n){return Ns(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function ad(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof yn&&i instanceof yn||r instanceof En&&i instanceof En?De(r.elements,i.elements,Mt):r instanceof cr&&i instanceof cr?Mt(r.Ie,i.Ie):r instanceof ur&&i instanceof ur}(n.transform,t.transform)}class ld{constructor(t,e){this.version=t,this.transformResults=e}}class jt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new jt}static exists(t){return new jt(void 0,t)}static updateTime(t){return new jt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Jn(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class wr{}function ol(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new ll(n.key,jt.none()):new vn(n.key,n.data,jt.none());{const e=n.data,r=Ct.empty();let i=new at(dt.comparator);for(let o of t.fields)if(!i.has(o)){let l=e.field(o);l===null&&o.length>1&&(o=o.popLast(),l=e.field(o)),l===null?r.delete(o):r.set(o,l),i=i.add(o)}return new _e(n.key,r,new Dt(i.toArray()),jt.none())}}function ud(n,t,e){n instanceof vn?function(i,o,l){const c=i.value.clone(),h=Fo(i.fieldTransforms,o,l.transformResults);c.setAll(h),o.convertToFoundDocument(l.version,c).setHasCommittedMutations()}(n,t,e):n instanceof _e?function(i,o,l){if(!Jn(i.precondition,o))return void o.convertToUnknownDocument(l.version);const c=Fo(i.fieldTransforms,o,l.transformResults),h=o.data;h.setAll(al(i)),h.setAll(c),o.convertToFoundDocument(l.version,h).setHasCommittedMutations()}(n,t,e):function(i,o,l){o.convertToNoDocument(l.version).setHasCommittedMutations()}(0,t,e)}function cn(n,t,e,r){return n instanceof vn?function(o,l,c,h){if(!Jn(o.precondition,l))return c;const f=o.value.clone(),_=Uo(o.fieldTransforms,h,l);return f.setAll(_),l.convertToFoundDocument(l.version,f).setHasLocalMutations(),null}(n,t,e,r):n instanceof _e?function(o,l,c,h){if(!Jn(o.precondition,l))return c;const f=Uo(o.fieldTransforms,h,l),_=l.data;return _.setAll(al(o)),_.setAll(f),l.convertToFoundDocument(l.version,_).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(I=>I.field))}(n,t,e,r):function(o,l,c){return Jn(o.precondition,l)?(l.convertToNoDocument(l.version).setHasLocalMutations(),null):c}(n,t,e)}function cd(n,t){let e=null;for(const r of n.fieldTransforms){const i=t.data.field(r.field),o=nl(r.transform,i||null);o!=null&&(e===null&&(e=Ct.empty()),e.set(r.field,o))}return e||null}function Lo(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&De(r,i,(o,l)=>ad(o,l))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class vn extends wr{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class _e extends wr{constructor(t,e,r,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function al(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function Fo(n,t,e){const r=new Map;$(n.length===e.length);for(let i=0;i<e.length;i++){const o=n[i],l=o.transform,c=t.data.field(o.field);r.set(o.field,od(l,c,e[i]))}return r}function Uo(n,t,e){const r=new Map;for(const i of n){const o=i.transform,l=e.data.field(i.field);r.set(i.field,id(o,l,t))}return r}class ll extends wr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class hd extends wr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class dd{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&ud(o,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=cn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=cn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=tl();return this.mutations.forEach(i=>{const o=t.get(i.key),l=o.overlayedDocument;let c=this.applyToLocalView(l,o.mutatedFields);c=e.has(i.key)?null:c;const h=ol(l,c);h!==null&&r.set(i.key,h),l.isValidDocument()||l.convertToNoDocument(F.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),B())}isEqual(t){return this.batchId===t.batchId&&De(this.mutations,t.mutations,(e,r)=>Lo(e,r))&&De(this.baseMutations,t.baseMutations,(e,r)=>Lo(e,r))}}class Fs{constructor(t,e,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=i}static from(t,e,r){$(t.mutations.length===r.length);let i=function(){return td}();const o=t.mutations;for(let l=0;l<o.length;l++)i=i.insert(o[l].key,r[l].version);return new Fs(t,e,r,i)}}/**
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
 */class fd{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class pd{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var rt,q;function md(n){switch(n){case C.OK:return L();case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0;default:return L()}}function ul(n){if(n===void 0)return qt("GRPC error has no .code"),C.UNKNOWN;switch(n){case rt.OK:return C.OK;case rt.CANCELLED:return C.CANCELLED;case rt.UNKNOWN:return C.UNKNOWN;case rt.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case rt.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case rt.INTERNAL:return C.INTERNAL;case rt.UNAVAILABLE:return C.UNAVAILABLE;case rt.UNAUTHENTICATED:return C.UNAUTHENTICATED;case rt.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case rt.NOT_FOUND:return C.NOT_FOUND;case rt.ALREADY_EXISTS:return C.ALREADY_EXISTS;case rt.PERMISSION_DENIED:return C.PERMISSION_DENIED;case rt.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case rt.ABORTED:return C.ABORTED;case rt.OUT_OF_RANGE:return C.OUT_OF_RANGE;case rt.UNIMPLEMENTED:return C.UNIMPLEMENTED;case rt.DATA_LOSS:return C.DATA_LOSS;default:return L()}}(q=rt||(rt={}))[q.OK=0]="OK",q[q.CANCELLED=1]="CANCELLED",q[q.UNKNOWN=2]="UNKNOWN",q[q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",q[q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",q[q.NOT_FOUND=5]="NOT_FOUND",q[q.ALREADY_EXISTS=6]="ALREADY_EXISTS",q[q.PERMISSION_DENIED=7]="PERMISSION_DENIED",q[q.UNAUTHENTICATED=16]="UNAUTHENTICATED",q[q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",q[q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",q[q.ABORTED=10]="ABORTED",q[q.OUT_OF_RANGE=11]="OUT_OF_RANGE",q[q.UNIMPLEMENTED=12]="UNIMPLEMENTED",q[q.INTERNAL=13]="INTERNAL",q[q.UNAVAILABLE=14]="UNAVAILABLE",q[q.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const gd=new Xt([4294967295,4294967295],0);function jo(n){const t=Da().encode(n),e=new xa;return e.update(t),new Uint8Array(e.digest())}function Bo(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Xt([e,r],0),new Xt([i,o],0)]}class Us{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new on(`Invalid padding: ${e}`);if(r<0)throw new on(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new on(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new on(`Invalid padding when bitmap length is 0: ${e}`);this.Ee=8*t.length-e,this.de=Xt.fromNumber(this.Ee)}Ae(t,e,r){let i=t.add(e.multiply(Xt.fromNumber(r)));return i.compare(gd)===1&&(i=new Xt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.de).toNumber()}Re(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.Ee===0)return!1;const e=jo(t),[r,i]=Bo(e);for(let o=0;o<this.hashCount;o++){const l=this.Ae(r,i,o);if(!this.Re(l))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),l=new Us(o,i,e);return r.forEach(c=>l.insert(c)),l}insert(t){if(this.Ee===0)return;const e=jo(t),[r,i]=Bo(e);for(let o=0;o<this.hashCount;o++){const l=this.Ae(r,i,o);this.Ve(l)}}Ve(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class on extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class xr{constructor(t,e,r,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,Tn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new xr(F.min(),i,new Z(j),zt(),B())}}class Tn{constructor(t,e,r,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new Tn(r,e,B(),B(),B())}}/**
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
 */class Zn{constructor(t,e,r,i){this.me=t,this.removedTargetIds=e,this.key=r,this.fe=i}}class cl{constructor(t,e){this.targetId=t,this.ge=e}}class hl{constructor(t,e,r=ft.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class qo{constructor(){this.pe=0,this.ye=zo(),this.we=ft.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(t){t.approximateByteSize()>0&&(this.be=!0,this.we=t)}Fe(){let t=B(),e=B(),r=B();return this.ye.forEach((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:L()}}),new Tn(this.we,this.Se,t,e,r)}Me(){this.be=!1,this.ye=zo()}xe(t,e){this.be=!0,this.ye=this.ye.insert(t,e)}Oe(t){this.be=!0,this.ye=this.ye.remove(t)}Ne(){this.pe+=1}Be(){this.pe-=1,$(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class _d{constructor(t){this.ke=t,this.qe=new Map,this.Qe=zt(),this.$e=Gn(),this.Ue=Gn(),this.Ke=new Z(j)}We(t){for(const e of t.me)t.fe&&t.fe.isFoundDocument()?this.Ge(e,t.fe):this.ze(e,t.key,t.fe);for(const e of t.removedTargetIds)this.ze(e,t.key,t.fe)}je(t){this.forEachTarget(t,e=>{const r=this.He(e);switch(t.state){case 0:this.Je(e)&&r.Ce(t.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(t.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(e);break;case 3:this.Je(e)&&(r.Le(),r.Ce(t.resumeToken));break;case 4:this.Je(e)&&(this.Ye(e),r.Ce(t.resumeToken));break;default:L()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.qe.forEach((r,i)=>{this.Je(i)&&e(i)})}Ze(t){const e=t.targetId,r=t.ge.count,i=this.Xe(e);if(i){const o=i.target;if(_s(o))if(r===0){const l=new M(o.path);this.ze(e,l,Tt.newNoDocument(l,F.min()))}else $(r===1);else{const l=this.et(e);if(l!==r){const c=this.tt(t),h=c?this.nt(c,t,l):1;if(h!==0){this.Ye(e);const f=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(e,f)}}}}}tt(t){const e=t.ge.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=e;let l,c;try{l=ee(r).toUint8Array()}catch(h){if(h instanceof Ma)return Ve("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new Us(l,i,o)}catch(h){return Ve(h instanceof on?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.Ee===0?null:c}nt(t,e,r){return e.ge.count===r-this.st(t,e.targetId)?0:2}st(t,e){const r=this.ke.getRemoteKeysForTarget(e);let i=0;return r.forEach(o=>{const l=this.ke.it(),c=`projects/${l.projectId}/databases/${l.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.ze(e,o,null),i++)}),i}ot(t){const e=new Map;this.qe.forEach((o,l)=>{const c=this.Xe(l);if(c){if(o.current&&_s(c.target)){const h=new M(c.target.path);this._t(h).has(l)||this.ut(l,h)||this.ze(l,h,Tt.newNoDocument(h,t))}o.ve&&(e.set(l,o.Fe()),o.Me())}});let r=B();this.Ue.forEach((o,l)=>{let c=!0;l.forEachWhile(h=>{const f=this.Xe(h);return!f||f.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(o))}),this.Qe.forEach((o,l)=>l.setReadTime(t));const i=new xr(t,e,this.Ke,this.Qe,r);return this.Qe=zt(),this.$e=Gn(),this.Ue=Gn(),this.Ke=new Z(j),i}Ge(t,e){if(!this.Je(t))return;const r=this.ut(t,e.key)?2:0;this.He(t).xe(e.key,r),this.Qe=this.Qe.insert(e.key,e),this.$e=this.$e.insert(e.key,this._t(e.key).add(t)),this.Ue=this.Ue.insert(e.key,this.ct(e.key).add(t))}ze(t,e,r){if(!this.Je(t))return;const i=this.He(t);this.ut(t,e)?i.xe(e,1):i.Oe(e),this.Ue=this.Ue.insert(e,this.ct(e).delete(t)),this.Ue=this.Ue.insert(e,this.ct(e).add(t)),r&&(this.Qe=this.Qe.insert(e,r))}removeTarget(t){this.qe.delete(t)}et(t){const e=this.He(t).Fe();return this.ke.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ne(t){this.He(t).Ne()}He(t){let e=this.qe.get(t);return e||(e=new qo,this.qe.set(t,e)),e}ct(t){let e=this.Ue.get(t);return e||(e=new at(j),this.Ue=this.Ue.insert(t,e)),e}_t(t){let e=this.$e.get(t);return e||(e=new at(j),this.$e=this.$e.insert(t,e)),e}Je(t){const e=this.Xe(t)!==null;return e||D("WatchChangeAggregator","Detected inactive target",t),e}Xe(t){const e=this.qe.get(t);return e&&e.De?null:this.ke.lt(t)}Ye(t){this.qe.set(t,new qo),this.ke.getRemoteKeysForTarget(t).forEach(e=>{this.ze(t,e,null)})}ut(t,e){return this.ke.getRemoteKeysForTarget(t).has(e)}}function Gn(){return new Z(M.comparator)}function zo(){return new Z(M.comparator)}const yd={asc:"ASCENDING",desc:"DESCENDING"},Ed={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},vd={and:"AND",or:"OR"};class Td{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Es(n,t){return n.useProto3Json||yr(t)?t:{value:t}}function hr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function dl(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Ad(n,t){return hr(n,t.toTimestamp())}function Ot(n){return $(!!n),F.fromTimestamp(function(e){const r=te(e);return new ot(r.seconds,r.nanos)}(n))}function js(n,t){return vs(n,t).canonicalString()}function vs(n,t){const e=function(i){return new J(["projects",i.projectId,"databases",i.database])}(n).child("documents");return t===void 0?e:e.child(t)}function fl(n){const t=J.fromString(n);return $(yl(t)),t}function Ts(n,t){return js(n.databaseId,t.path)}function rs(n,t){const e=fl(t);if(e.get(1)!==n.databaseId.projectId)throw new O(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new O(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new M(ml(e))}function pl(n,t){return js(n.databaseId,t)}function Id(n){const t=fl(n);return t.length===4?J.emptyPath():ml(t)}function As(n){return new J(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function ml(n){return $(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Ko(n,t,e){return{name:Ts(n,t),fields:e.value.mapValue.fields}}function wd(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:L()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(f,_){return f.useProto3Json?($(_===void 0||typeof _=="string"),ft.fromBase64String(_||"")):($(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array),ft.fromUint8Array(_||new Uint8Array))}(n,t.targetChange.resumeToken),l=t.targetChange.cause,c=l&&function(f){const _=f.code===void 0?C.UNKNOWN:ul(f.code);return new O(_,f.message||"")}(l);e=new hl(r,i,o,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=rs(n,r.document.name),o=Ot(r.document.updateTime),l=r.document.createTime?Ot(r.document.createTime):F.min(),c=new Ct({mapValue:{fields:r.document.fields}}),h=Tt.newFoundDocument(i,o,l,c),f=r.targetIds||[],_=r.removedTargetIds||[];e=new Zn(f,_,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=rs(n,r.document),o=r.readTime?Ot(r.readTime):F.min(),l=Tt.newNoDocument(i,o),c=r.removedTargetIds||[];e=new Zn([],c,l.key,l)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=rs(n,r.document),o=r.removedTargetIds||[];e=new Zn([],o,i,null)}else{if(!("filter"in t))return L();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,l=new pd(i,o),c=r.targetId;e=new cl(c,l)}}return e}function xd(n,t){let e;if(t instanceof vn)e={update:Ko(n,t.key,t.value)};else if(t instanceof ll)e={delete:Ts(n,t.key)};else if(t instanceof _e)e={update:Ko(n,t.key,t.data),updateMask:kd(t.fieldMask)};else{if(!(t instanceof hd))return L();e={verify:Ts(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,l){const c=l.transform;if(c instanceof ur)return{fieldPath:l.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof yn)return{fieldPath:l.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof En)return{fieldPath:l.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof cr)return{fieldPath:l.field.canonicalString(),increment:c.Ie};throw L()}(0,r))),t.precondition.isNone||(e.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:Ad(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:L()}(n,t.precondition)),e}function Rd(n,t){return n&&n.length>0?($(t!==void 0),n.map(e=>function(i,o){let l=i.updateTime?Ot(i.updateTime):Ot(o);return l.isEqual(F.min())&&(l=Ot(o)),new ld(l,i.transformResults||[])}(e,t))):[]}function bd(n,t){return{documents:[pl(n,t.path)]}}function Cd(n,t){const e={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=pl(n,i);const o=function(f){if(f.length!==0)return _l(Lt.create(f,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const l=function(f){if(f.length!==0)return f.map(_=>function(x){return{field:be(x.field),direction:Vd(x.dir)}}(_))}(t.orderBy);l&&(e.structuredQuery.orderBy=l);const c=Es(n,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{ht:e,parent:i}}function Sd(n){let t=Id(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){$(r===1);const _=e.from[0];_.allDescendants?i=_.collectionId:t=t.child(_.collectionId)}let o=[];e.where&&(o=function(I){const x=gl(I);return x instanceof Lt&&Qa(x)?x.getFilters():[x]}(e.where));let l=[];e.orderBy&&(l=function(I){return I.map(x=>function(N){return new lr(Ce(N.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(x))}(e.orderBy));let c=null;e.limit&&(c=function(I){let x;return x=typeof I=="object"?I.value:I,yr(x)?null:x}(e.limit));let h=null;e.startAt&&(h=function(I){const x=!!I.before,S=I.values||[];return new ar(S,x)}(e.startAt));let f=null;return e.endAt&&(f=function(I){const x=!I.before,S=I.values||[];return new ar(S,x)}(e.endAt)),$h(t,i,l,o,c,"F",h,f)}function Pd(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return L()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function gl(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Ce(e.unaryFilter.field);return it.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ce(e.unaryFilter.field);return it.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Ce(e.unaryFilter.field);return it.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const l=Ce(e.unaryFilter.field);return it.create(l,"!=",{nullValue:"NULL_VALUE"});default:return L()}}(n):n.fieldFilter!==void 0?function(e){return it.create(Ce(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return L()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Lt.create(e.compositeFilter.filters.map(r=>gl(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return L()}}(e.compositeFilter.op))}(n):L()}function Vd(n){return yd[n]}function Dd(n){return Ed[n]}function Nd(n){return vd[n]}function be(n){return{fieldPath:n.canonicalString()}}function Ce(n){return dt.fromServerFormat(n.fieldPath)}function _l(n){return n instanceof it?function(e){if(e.op==="=="){if(Vo(e.value))return{unaryFilter:{field:be(e.field),op:"IS_NAN"}};if(Po(e.value))return{unaryFilter:{field:be(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Vo(e.value))return{unaryFilter:{field:be(e.field),op:"IS_NOT_NAN"}};if(Po(e.value))return{unaryFilter:{field:be(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:be(e.field),op:Dd(e.op),value:e.value}}}(n):n instanceof Lt?function(e){const r=e.getFilters().map(i=>_l(i));return r.length===1?r[0]:{compositeFilter:{op:Nd(e.op),filters:r}}}(n):L()}function kd(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function yl(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Gt{constructor(t,e,r,i,o=F.min(),l=F.min(),c=ft.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=l,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(t){return new Gt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Gt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Gt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Gt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class Od{constructor(t){this.Tt=t}}function Md(n){const t=Sd({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ys(t,t.limit,"L"):t}/**
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
 */class Ld{constructor(){this.Tn=new Fd}addToCollectionParentIndex(t,e){return this.Tn.add(e),b.resolve()}getCollectionParents(t,e){return b.resolve(this.Tn.getEntries(e))}addFieldIndex(t,e){return b.resolve()}deleteFieldIndex(t,e){return b.resolve()}deleteAllFieldIndexes(t){return b.resolve()}createTargetIndexes(t,e){return b.resolve()}getDocumentsMatchingTarget(t,e){return b.resolve(null)}getIndexType(t,e){return b.resolve(0)}getFieldIndexes(t,e){return b.resolve([])}getNextCollectionGroupToUpdate(t){return b.resolve(null)}getMinOffset(t,e){return b.resolve(Zt.min())}getMinOffsetFromCollectionGroup(t,e){return b.resolve(Zt.min())}updateCollectionGroup(t,e,r){return b.resolve()}updateIndexEntries(t,e){return b.resolve()}}class Fd{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new at(J.comparator),o=!i.has(r);return this.index[e]=i.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new at(J.comparator)).toArray()}}/**
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
 */const Ho={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},El=41943040;class xt{static withCacheSize(t){return new xt(t,xt.DEFAULT_COLLECTION_PERCENTILE,xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
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
 */xt.DEFAULT_COLLECTION_PERCENTILE=10,xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,xt.DEFAULT=new xt(El,xt.DEFAULT_COLLECTION_PERCENTILE,xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),xt.DISABLED=new xt(-1,0,0);/**
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
 */class Oe{constructor(t){this.$n=t}next(){return this.$n+=2,this.$n}static Un(){return new Oe(0)}static Kn(){return new Oe(-1)}}/**
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
 */const Qo="LruGarbageCollector",Ud=1048576;function Go([n,t],[e,r]){const i=j(n,e);return i===0?j(t,r):i}class jd{constructor(t){this.Hn=t,this.buffer=new at(Go),this.Jn=0}Yn(){return++this.Jn}Zn(t){const e=[t,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();Go(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Bd{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(t){D(Qo,`Garbage collection scheduled in ${t}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Be(e)?D(Qo,"Ignoring IndexedDB error during garbage collection: ",e):await je(e)}await this.er(3e5)})}}class qd{constructor(t,e){this.tr=t,this.params=e}calculateTargetCount(t,e){return this.tr.nr(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return b.resolve(_r.ae);const r=new jd(e);return this.tr.forEachTarget(t,i=>r.Zn(i.sequenceNumber)).next(()=>this.tr.rr(t,i=>r.Zn(i))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.tr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.tr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(D("LruGarbageCollector","Garbage collection skipped; disabled"),b.resolve(Ho)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(D("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ho):this.ir(t,e))}getCacheSize(t){return this.tr.getCacheSize(t)}ir(t,e){let r,i,o,l,c,h,f;const _=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(I=>(I>this.params.maximumSequenceNumbersToCollect?(D("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${I}`),i=this.params.maximumSequenceNumbersToCollect):i=I,l=Date.now(),this.nthSequenceNumber(t,i))).next(I=>(r=I,c=Date.now(),this.removeTargets(t,r,e))).next(I=>(o=I,h=Date.now(),this.removeOrphanedDocuments(t,r))).next(I=>(f=Date.now(),xe()<=z.DEBUG&&D("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${l-_}ms
	Determined least recently used ${i} in `+(c-l)+`ms
	Removed ${o} targets in `+(h-c)+`ms
	Removed ${I} documents in `+(f-h)+`ms
Total Duration: ${f-_}ms`),b.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:I})))}}function zd(n,t){return new qd(n,t)}/**
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
 */class Kd{constructor(){this.changes=new ge(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Tt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?b.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 *//**
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
 */class Hd{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class Qd{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&cn(r.mutation,i,Dt.empty(),ot.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,B()).next(()=>r))}getLocalViewOfDocuments(t,e,r=B()){const i=de();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(o=>{let l=sn();return o.forEach((c,h)=>{l=l.insert(c,h.overlayedDocument)}),l}))}getOverlayedDocuments(t,e){const r=de();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,B()))}populateOverlays(t,e,r){const i=[];return r.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((l,c)=>{e.set(l,c)})})}computeViews(t,e,r,i){let o=zt();const l=un(),c=function(){return un()}();return e.forEach((h,f)=>{const _=r.get(f.key);i.has(f.key)&&(_===void 0||_.mutation instanceof _e)?o=o.insert(f.key,f):_!==void 0?(l.set(f.key,_.mutation.getFieldMask()),cn(_.mutation,f,_.mutation.getFieldMask(),ot.now())):l.set(f.key,Dt.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((f,_)=>l.set(f,_)),e.forEach((f,_)=>{var I;return c.set(f,new Hd(_,(I=l.get(f))!==null&&I!==void 0?I:null))}),c))}recalculateAndSaveOverlays(t,e){const r=un();let i=new Z((l,c)=>l-c),o=B();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(l=>{for(const c of l)c.keys().forEach(h=>{const f=e.get(h);if(f===null)return;let _=r.get(h)||Dt.empty();_=c.applyToLocalView(f,_),r.set(h,_);const I=(i.get(c.batchId)||B()).add(h);i=i.insert(c.batchId,I)})}).next(()=>{const l=[],c=i.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),f=h.key,_=h.value,I=tl();_.forEach(x=>{if(!o.has(x)){const S=ol(e.get(x),r.get(x));S!==null&&I.set(x,S),o=o.add(x)}}),l.push(this.documentOverlayCache.saveOverlays(t,f,I))}return b.waitFor(l)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,i){return function(l){return M.isDocumentKey(l.path)&&l.collectionGroup===null&&l.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Wh(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(o=>{const l=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-o.size):b.resolve(de());let c=pn,h=o;return l.next(f=>b.forEach(f,(_,I)=>(c<I.largestBatchId&&(c=I.largestBatchId),o.get(_)?b.resolve():this.remoteDocumentCache.getEntry(t,_).next(x=>{h=h.insert(_,x)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,h,f,B())).next(_=>({batchId:c,changes:Za(_)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new M(e)).next(r=>{let i=sn();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const o=e.collectionGroup;let l=sn();return this.indexManager.getCollectionParents(t,o).next(c=>b.forEach(c,h=>{const f=function(I,x){return new vr(x,null,I.explicitOrderBy.slice(),I.filters.slice(),I.limit,I.limitType,I.startAt,I.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,r,i).next(_=>{_.forEach((I,x)=>{l=l.insert(I,x)})})}).next(()=>l))}getDocumentsMatchingCollectionQuery(t,e,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(l=>(o=l,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,i))).next(l=>{o.forEach((h,f)=>{const _=f.getKey();l.get(_)===null&&(l=l.insert(_,Tt.newInvalidDocument(_)))});let c=sn();return l.forEach((h,f)=>{const _=o.get(h);_!==void 0&&cn(_.mutation,f,Dt.empty(),ot.now()),Ar(e,f)&&(c=c.insert(h,f))}),c})}}/**
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
 */class Gd{constructor(t){this.serializer=t,this.dr=new Map,this.Ar=new Map}getBundleMetadata(t,e){return b.resolve(this.dr.get(e))}saveBundleMetadata(t,e){return this.dr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:Ot(i.createTime)}}(e)),b.resolve()}getNamedQuery(t,e){return b.resolve(this.Ar.get(e))}saveNamedQuery(t,e){return this.Ar.set(e.name,function(i){return{name:i.name,query:Md(i.bundledQuery),readTime:Ot(i.readTime)}}(e)),b.resolve()}}/**
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
 */class $d{constructor(){this.overlays=new Z(M.comparator),this.Rr=new Map}getOverlay(t,e){return b.resolve(this.overlays.get(e))}getOverlays(t,e){const r=de();return b.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,o)=>{this.Et(t,e,o)}),b.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.Rr.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Rr.delete(r)),b.resolve()}getOverlaysForCollection(t,e,r){const i=de(),o=e.length+1,l=new M(e.child("")),c=this.overlays.getIteratorFrom(l);for(;c.hasNext();){const h=c.getNext().value,f=h.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>r&&i.set(h.getKey(),h)}return b.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let o=new Z((f,_)=>f-_);const l=this.overlays.getIterator();for(;l.hasNext();){const f=l.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>r){let _=o.get(f.largestBatchId);_===null&&(_=de(),o=o.insert(f.largestBatchId,_)),_.set(f.getKey(),f)}}const c=de(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((f,_)=>c.set(f,_)),!(c.size()>=i)););return b.resolve(c)}Et(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const l=this.Rr.get(i.largestBatchId).delete(r.key);this.Rr.set(i.largestBatchId,l)}this.overlays=this.overlays.insert(r.key,new fd(e,r));let o=this.Rr.get(e);o===void 0&&(o=B(),this.Rr.set(e,o)),this.Rr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Wd{constructor(){this.sessionToken=ft.EMPTY_BYTE_STRING}getSessionToken(t){return b.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,b.resolve()}}/**
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
 */class Bs{constructor(){this.Vr=new at(ut.mr),this.gr=new at(ut.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(t,e){const r=new ut(t,e);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.wr(new ut(t,e))}Sr(t,e){t.forEach(r=>this.removeReference(r,e))}br(t){const e=new M(new J([])),r=new ut(e,t),i=new ut(e,t+1),o=[];return this.gr.forEachInRange([r,i],l=>{this.wr(l),o.push(l.key)}),o}Dr(){this.Vr.forEach(t=>this.wr(t))}wr(t){this.Vr=this.Vr.delete(t),this.gr=this.gr.delete(t)}vr(t){const e=new M(new J([])),r=new ut(e,t),i=new ut(e,t+1);let o=B();return this.gr.forEachInRange([r,i],l=>{o=o.add(l.key)}),o}containsKey(t){const e=new ut(t,0),r=this.Vr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class ut{constructor(t,e){this.key=t,this.Cr=e}static mr(t,e){return M.comparator(t.key,e.key)||j(t.Cr,e.Cr)}static pr(t,e){return j(t.Cr,e.Cr)||M.comparator(t.key,e.key)}}/**
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
 */class Xd{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Fr=1,this.Mr=new at(ut.mr)}checkEmpty(t){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const o=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const l=new dd(o,e,r,i);this.mutationQueue.push(l);for(const c of i)this.Mr=this.Mr.add(new ut(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return b.resolve(l)}lookupMutationBatch(t,e){return b.resolve(this.Or(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.Nr(r),o=i<0?0:i;return b.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?Vs:this.Fr-1)}getAllMutationBatches(t){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new ut(e,0),i=new ut(e,Number.POSITIVE_INFINITY),o=[];return this.Mr.forEachInRange([r,i],l=>{const c=this.Or(l.Cr);o.push(c)}),b.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new at(j);return e.forEach(i=>{const o=new ut(i,0),l=new ut(i,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([o,l],c=>{r=r.add(c.Cr)})}),b.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let o=r;M.isDocumentKey(o)||(o=o.child(""));const l=new ut(new M(o),0);let c=new at(j);return this.Mr.forEachWhile(h=>{const f=h.key.path;return!!r.isPrefixOf(f)&&(f.length===i&&(c=c.add(h.Cr)),!0)},l),b.resolve(this.Br(c))}Br(t){const e=[];return t.forEach(r=>{const i=this.Or(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){$(this.Lr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return b.forEach(e.mutations,i=>{const o=new ut(i.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Mr=r})}qn(t){}containsKey(t,e){const r=new ut(e,0),i=this.Mr.firstAfterOrEqual(r);return b.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,b.resolve()}Lr(t,e){return this.Nr(t)}Nr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Or(t){const e=this.Nr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class Yd{constructor(t){this.kr=t,this.docs=function(){return new Z(M.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),o=i?i.size:0,l=this.kr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:l}),this.size+=l-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return b.resolve(r?r.document.mutableCopy():Tt.newInvalidDocument(e))}getEntries(t,e){let r=zt();return e.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():Tt.newInvalidDocument(i))}),b.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let o=zt();const l=e.path,c=new M(l.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:f,value:{document:_}}=h.getNext();if(!l.isPrefixOf(f.path))break;f.path.length>l.length+1||Rh(xh(_),r)<=0||(i.has(_.key)||Ar(e,_))&&(o=o.insert(_.key,_.mutableCopy()))}return b.resolve(o)}getAllFromCollectionGroup(t,e,r,i){L()}qr(t,e){return b.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new Jd(this)}getSize(t){return b.resolve(this.size)}}class Jd extends Kd{constructor(t){super(),this.Ir=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this.Ir.addEntry(t,i)):this.Ir.removeEntry(r)}),b.waitFor(e)}getFromCache(t,e){return this.Ir.getEntry(t,e)}getAllFromCache(t,e){return this.Ir.getEntries(t,e)}}/**
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
 */class Zd{constructor(t){this.persistence=t,this.Qr=new ge(e=>ks(e),Os),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.$r=0,this.Ur=new Bs,this.targetCount=0,this.Kr=Oe.Un()}forEachTarget(t,e){return this.Qr.forEach((r,i)=>e(i)),b.resolve()}getLastRemoteSnapshotVersion(t){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return b.resolve(this.$r)}allocateTargetId(t){return this.highestTargetId=this.Kr.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.$r&&(this.$r=e),b.resolve()}zn(t){this.Qr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Kr=new Oe(e),this.highestTargetId=e),t.sequenceNumber>this.$r&&(this.$r=t.sequenceNumber)}addTargetData(t,e){return this.zn(e),this.targetCount+=1,b.resolve()}updateTargetData(t,e){return this.zn(e),b.resolve()}removeTargetData(t,e){return this.Qr.delete(e.target),this.Ur.br(e.targetId),this.targetCount-=1,b.resolve()}removeTargets(t,e,r){let i=0;const o=[];return this.Qr.forEach((l,c)=>{c.sequenceNumber<=e&&r.get(c.targetId)===null&&(this.Qr.delete(l),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),i++)}),b.waitFor(o).next(()=>i)}getTargetCount(t){return b.resolve(this.targetCount)}getTargetData(t,e){const r=this.Qr.get(e)||null;return b.resolve(r)}addMatchingKeys(t,e,r){return this.Ur.yr(e,r),b.resolve()}removeMatchingKeys(t,e,r){this.Ur.Sr(e,r);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(l=>{o.push(i.markPotentiallyOrphaned(t,l))}),b.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Ur.br(e),b.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Ur.vr(e);return b.resolve(r)}containsKey(t,e){return b.resolve(this.Ur.containsKey(e))}}/**
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
 */class vl{constructor(t,e){this.Wr={},this.overlays={},this.Gr=new _r(0),this.zr=!1,this.zr=!0,this.jr=new Wd,this.referenceDelegate=t(this),this.Hr=new Zd(this),this.indexManager=new Ld,this.remoteDocumentCache=function(i){return new Yd(i)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new Od(e),this.Yr=new Gd(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new $d,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Wr[t.toKey()];return r||(r=new Xd(e,this.referenceDelegate),this.Wr[t.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(t,e,r){D("MemoryPersistence","Starting transaction:",t);const i=new tf(this.Gr.next());return this.referenceDelegate.Zr(),r(i).next(o=>this.referenceDelegate.Xr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}ei(t,e){return b.or(Object.values(this.Wr).map(r=>()=>r.containsKey(t,e)))}}class tf extends Ch{constructor(t){super(),this.currentSequenceNumber=t}}class qs{constructor(t){this.persistence=t,this.ti=new Bs,this.ni=null}static ri(t){return new qs(t)}get ii(){if(this.ni)return this.ni;throw L()}addReference(t,e,r){return this.ti.addReference(r,e),this.ii.delete(r.toString()),b.resolve()}removeReference(t,e,r){return this.ti.removeReference(r,e),this.ii.add(r.toString()),b.resolve()}markPotentiallyOrphaned(t,e){return this.ii.add(e.toString()),b.resolve()}removeTarget(t,e){this.ti.br(e.targetId).forEach(i=>this.ii.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.ii.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Zr(){this.ni=new Set}Xr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.ii,r=>{const i=M.fromPath(r);return this.si(t,i).next(o=>{o||e.removeEntry(i,F.min())})}).next(()=>(this.ni=null,e.apply(t)))}updateLimboDocument(t,e){return this.si(t,e).next(r=>{r?this.ii.delete(e.toString()):this.ii.add(e.toString())})}Jr(t){return 0}si(t,e){return b.or([()=>b.resolve(this.ti.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.ei(t,e)])}}class dr{constructor(t,e){this.persistence=t,this.oi=new ge(r=>Vh(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=zd(this,e)}static ri(t,e){return new dr(t,e)}Zr(){}Xr(t){return b.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}nr(t){const e=this.sr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(i=>r+i))}sr(t){let e=0;return this.rr(t,r=>{e++}).next(()=>e)}rr(t,e){return b.forEach(this.oi,(r,i)=>this.ar(t,r,i).next(o=>o?b.resolve():e(i)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.qr(t,l=>this.ar(t,l,e).next(c=>{c||(r++,o.removeEntry(l,F.min()))})).next(()=>o.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.oi.set(e,t.currentSequenceNumber),b.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.oi.set(r,t.currentSequenceNumber),b.resolve()}removeReference(t,e,r){return this.oi.set(r,t.currentSequenceNumber),b.resolve()}updateLimboDocument(t,e){return this.oi.set(e,t.currentSequenceNumber),b.resolve()}Jr(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Xn(t.data.value)),e}ar(t,e,r){return b.or([()=>this.persistence.ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.oi.get(e);return b.resolve(i!==void 0&&i>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class zs{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.Hi=r,this.Ji=i}static Yi(t,e){let r=B(),i=B();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new zs(t,e.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class ef{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class nf{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return Yu()?8:Sh(Wu())>0?6:4}()}initialize(t,e){this.ns=t,this.indexManager=e,this.Zi=!0}getDocumentsMatchingQuery(t,e,r,i){const o={result:null};return this.rs(t,e).next(l=>{o.result=l}).next(()=>{if(!o.result)return this.ss(t,e,i,r).next(l=>{o.result=l})}).next(()=>{if(o.result)return;const l=new ef;return this._s(t,e,l).next(c=>{if(o.result=c,this.Xi)return this.us(t,e,l,c.size)})}).next(()=>o.result)}us(t,e,r,i){return r.documentReadCount<this.es?(xe()<=z.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",Re(e),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),b.resolve()):(xe()<=z.DEBUG&&D("QueryEngine","Query:",Re(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ts*i?(xe()<=z.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",Re(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,kt(e))):b.resolve())}rs(t,e){if(Oo(e))return b.resolve(null);let r=kt(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=ys(e,null,"F"),r=kt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const l=B(...o);return this.ns.getDocuments(t,l).next(c=>this.indexManager.getMinOffset(t,r).next(h=>{const f=this.cs(e,c);return this.ls(e,f,l,h.readTime)?this.rs(t,ys(e,null,"F")):this.hs(t,f,e,h)}))})))}ss(t,e,r,i){return Oo(e)||i.isEqual(F.min())?b.resolve(null):this.ns.getDocuments(t,r).next(o=>{const l=this.cs(e,o);return this.ls(e,l,r,i)?b.resolve(null):(xe()<=z.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Re(e)),this.hs(t,l,e,wh(i,pn)).next(c=>c))})}cs(t,e){let r=new at(Ya(t));return e.forEach((i,o)=>{Ar(t,o)&&(r=r.add(o))}),r}ls(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}_s(t,e,r){return xe()<=z.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",Re(e)),this.ns.getDocumentsMatchingQuery(t,e,Zt.min(),r)}hs(t,e,r,i){return this.ns.getDocumentsMatchingQuery(t,r,i).next(o=>(e.forEach(l=>{o=o.insert(l.key,l)}),o))}}/**
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
 */const Ks="LocalStore",rf=3e8;class sf{constructor(t,e,r,i){this.persistence=t,this.Ps=e,this.serializer=i,this.Ts=new Z(j),this.Is=new ge(o=>ks(o),Os),this.Es=new Map,this.ds=t.getRemoteDocumentCache(),this.Hr=t.getTargetCache(),this.Yr=t.getBundleCache(),this.As(r)}As(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Qd(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ts))}}function of(n,t,e,r){return new sf(n,t,e,r)}async function Tl(n,t){const e=U(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,e.As(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const l=[],c=[];let h=B();for(const f of i){l.push(f.batchId);for(const _ of f.mutations)h=h.add(_.key)}for(const f of o){c.push(f.batchId);for(const _ of f.mutations)h=h.add(_.key)}return e.localDocuments.getDocuments(r,h).next(f=>({Rs:f,removedBatchIds:l,addedBatchIds:c}))})})}function af(n,t){const e=U(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),o=e.ds.newChangeBuffer({trackRemovals:!0});return function(c,h,f,_){const I=f.batch,x=I.keys();let S=b.resolve();return x.forEach(N=>{S=S.next(()=>_.getEntry(h,N)).next(k=>{const V=f.docVersions.get(N);$(V!==null),k.version.compareTo(V)<0&&(I.applyToRemoteDocument(k,f),k.isValidDocument()&&(k.setReadTime(f.commitVersion),_.addEntry(k)))})}),S.next(()=>c.mutationQueue.removeMutationBatch(h,I))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let h=B();for(let f=0;f<c.mutationResults.length;++f)c.mutationResults[f].transformResults.length>0&&(h=h.add(c.batch.mutations[f].key));return h}(t))).next(()=>e.localDocuments.getDocuments(r,i))})}function Al(n){const t=U(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Hr.getLastRemoteSnapshotVersion(e))}function lf(n,t){const e=U(n),r=t.snapshotVersion;let i=e.Ts;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const l=e.ds.newChangeBuffer({trackRemovals:!0});i=e.Ts;const c=[];t.targetChanges.forEach((_,I)=>{const x=i.get(I);if(!x)return;c.push(e.Hr.removeMatchingKeys(o,_.removedDocuments,I).next(()=>e.Hr.addMatchingKeys(o,_.addedDocuments,I)));let S=x.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(I)!==null?S=S.withResumeToken(ft.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):_.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(_.resumeToken,r)),i=i.insert(I,S),function(k,V,Q){return k.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=rf?!0:Q.addedDocuments.size+Q.modifiedDocuments.size+Q.removedDocuments.size>0}(x,S,_)&&c.push(e.Hr.updateTargetData(o,S))});let h=zt(),f=B();if(t.documentUpdates.forEach(_=>{t.resolvedLimboDocuments.has(_)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,_))}),c.push(uf(o,l,t.documentUpdates).next(_=>{h=_.Vs,f=_.fs})),!r.isEqual(F.min())){const _=e.Hr.getLastRemoteSnapshotVersion(o).next(I=>e.Hr.setTargetsMetadata(o,o.currentSequenceNumber,r));c.push(_)}return b.waitFor(c).next(()=>l.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,f)).next(()=>h)}).then(o=>(e.Ts=i,o))}function uf(n,t,e){let r=B(),i=B();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let l=zt();return e.forEach((c,h)=>{const f=o.get(c);h.isFoundDocument()!==f.isFoundDocument()&&(i=i.add(c)),h.isNoDocument()&&h.version.isEqual(F.min())?(t.removeEntry(c,h.readTime),l=l.insert(c,h)):!f.isValidDocument()||h.version.compareTo(f.version)>0||h.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(h),l=l.insert(c,h)):D(Ks,"Ignoring outdated watch update for ",c,". Current version:",f.version," Watch version:",h.version)}),{Vs:l,fs:i}})}function cf(n,t){const e=U(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=Vs),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function hf(n,t){const e=U(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return e.Hr.getTargetData(r,t).next(o=>o?(i=o,b.resolve(i)):e.Hr.allocateTargetId(r).next(l=>(i=new Gt(t,l,"TargetPurposeListen",r.currentSequenceNumber),e.Hr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=e.Ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.Ts=e.Ts.insert(r.targetId,r),e.Is.set(t,r.targetId)),r})}async function Is(n,t,e){const r=U(n),i=r.Ts.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,l=>r.persistence.referenceDelegate.removeTarget(l,i))}catch(l){if(!Be(l))throw l;D(Ks,`Failed to update sequence numbers for target ${t}: ${l}`)}r.Ts=r.Ts.remove(t),r.Is.delete(i.target)}function $o(n,t,e){const r=U(n);let i=F.min(),o=B();return r.persistence.runTransaction("Execute query","readwrite",l=>function(h,f,_){const I=U(h),x=I.Is.get(_);return x!==void 0?b.resolve(I.Ts.get(x)):I.Hr.getTargetData(f,_)}(r,l,kt(t)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(l,c.targetId).next(h=>{o=h})}).next(()=>r.Ps.getDocumentsMatchingQuery(l,t,e?i:F.min(),e?o:B())).next(c=>(df(r,Yh(t),c),{documents:c,gs:o})))}function df(n,t,e){let r=n.Es.get(t)||F.min();e.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.Es.set(t,r)}class Wo{constructor(){this.activeTargetIds=rd()}Ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}vs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}bs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class ff{constructor(){this.ho=new Wo,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.ho.Ds(t),this.Po[t]||"not-current"}updateQueryState(t,e,r){this.Po[t]=e}removeLocalQueryTarget(t){this.ho.vs(t)}isLocalQueryTarget(t){return this.ho.activeTargetIds.has(t)}clearQueryState(t){delete this.Po[t]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(t){return this.ho.activeTargetIds.has(t)}start(){return this.ho=new Wo,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class pf{To(t){}shutdown(){}}/**
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
 */const Xo="ConnectivityMonitor";class Yo{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(t){this.Vo.push(t)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){D(Xo,"Network connectivity changed: AVAILABLE");for(const t of this.Vo)t(0)}Ro(){D(Xo,"Network connectivity changed: UNAVAILABLE");for(const t of this.Vo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let $n=null;function ws(){return $n===null?$n=function(){return 268435456+Math.round(2147483648*Math.random())}():$n++,"0x"+$n.toString(16)}/**
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
 */const ss="RestConnection",mf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class gf{get fo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.po=e+"://"+t.host,this.yo=`projects/${r}/databases/${i}`,this.wo=this.databaseId.database===ir?`project_id=${r}`:`project_id=${r}&database_id=${i}`}So(t,e,r,i,o){const l=ws(),c=this.bo(t,e.toUriEncodedString());D(ss,`Sending RPC '${t}' ${l}:`,c,r);const h={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(h,i,o),this.vo(t,c,h,r).then(f=>(D(ss,`Received RPC '${t}' ${l}: `,f),f),f=>{throw Ve(ss,`RPC '${t}' ${l} failed with error: `,f,"url: ",c,"request:",r),f})}Co(t,e,r,i,o,l){return this.So(t,e,r,i,o)}Do(t,e,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ue}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((i,o)=>t[o]=i),r&&r.headers.forEach((i,o)=>t[o]=i)}bo(t,e){const r=mf[t];return`${this.po}/v1/${e}:${r}`}terminate(){}}/**
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
 */class _f{constructor(t){this.Fo=t.Fo,this.Mo=t.Mo}xo(t){this.Oo=t}No(t){this.Bo=t}Lo(t){this.ko=t}onMessage(t){this.qo=t}close(){this.Mo()}send(t){this.Fo(t)}Qo(){this.Oo()}$o(){this.Bo()}Uo(t){this.ko(t)}Ko(t){this.qo(t)}}/**
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
 */const Et="WebChannelConnection";class yf extends gf{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}vo(t,e,r,i){const o=ws();return new Promise((l,c)=>{const h=new Ra;h.setWithCredentials(!0),h.listenOnce(ba.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Wn.NO_ERROR:const _=h.getResponseJson();D(Et,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(_)),l(_);break;case Wn.TIMEOUT:D(Et,`RPC '${t}' ${o} timed out`),c(new O(C.DEADLINE_EXCEEDED,"Request time out"));break;case Wn.HTTP_ERROR:const I=h.getStatus();if(D(Et,`RPC '${t}' ${o} failed with status:`,I,"response text:",h.getResponseText()),I>0){let x=h.getResponseJson();Array.isArray(x)&&(x=x[0]);const S=x==null?void 0:x.error;if(S&&S.status&&S.message){const N=function(V){const Q=V.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(Q)>=0?Q:C.UNKNOWN}(S.status);c(new O(N,S.message))}else c(new O(C.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new O(C.UNAVAILABLE,"Connection failed."));break;default:L()}}finally{D(Et,`RPC '${t}' ${o} completed.`)}});const f=JSON.stringify(i);D(Et,`RPC '${t}' ${o} sending request:`,i),h.send(e,"POST",f,r,15)})}Wo(t,e,r){const i=ws(),o=[this.po,"/","google.firestore.v1.Firestore","/",t,"/channel"],l=Pa(),c=Sa(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Do(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const _=o.join("");D(Et,`Creating RPC '${t}' stream ${i}: ${_}`,h);const I=l.createWebChannel(_,h);let x=!1,S=!1;const N=new _f({Fo:V=>{S?D(Et,`Not sending because RPC '${t}' stream ${i} is closed:`,V):(x||(D(Et,`Opening RPC '${t}' stream ${i} transport.`),I.open(),x=!0),D(Et,`RPC '${t}' stream ${i} sending:`,V),I.send(V))},Mo:()=>I.close()}),k=(V,Q,H)=>{V.listen(Q,G=>{try{H(G)}catch(X){setTimeout(()=>{throw X},0)}})};return k(I,rn.EventType.OPEN,()=>{S||(D(Et,`RPC '${t}' stream ${i} transport opened.`),N.Qo())}),k(I,rn.EventType.CLOSE,()=>{S||(S=!0,D(Et,`RPC '${t}' stream ${i} transport closed`),N.Uo())}),k(I,rn.EventType.ERROR,V=>{S||(S=!0,Ve(Et,`RPC '${t}' stream ${i} transport errored:`,V),N.Uo(new O(C.UNAVAILABLE,"The operation could not be completed")))}),k(I,rn.EventType.MESSAGE,V=>{var Q;if(!S){const H=V.data[0];$(!!H);const G=H,X=(G==null?void 0:G.error)||((Q=G[0])===null||Q===void 0?void 0:Q.error);if(X){D(Et,`RPC '${t}' stream ${i} received error:`,X);const Pt=X.status;let st=function(g){const E=rt[g];if(E!==void 0)return ul(E)}(Pt),T=X.message;st===void 0&&(st=C.INTERNAL,T="Unknown error status: "+Pt+" with message "+X.message),S=!0,N.Uo(new O(st,T)),I.close()}else D(Et,`RPC '${t}' stream ${i} received:`,H),N.Ko(H)}}),k(c,Ca.STAT_EVENT,V=>{V.stat===ds.PROXY?D(Et,`RPC '${t}' stream ${i} detected buffering proxy`):V.stat===ds.NOPROXY&&D(Et,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{N.$o()},0),N}}function is(){return typeof document<"u"?document:null}/**
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
 */function Rr(n){return new Td(n,!0)}/**
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
 */class Il{constructor(t,e,r=1e3,i=1.5,o=6e4){this.Ti=t,this.timerId=e,this.Go=r,this.zo=i,this.jo=o,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(t){this.cancel();const e=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),i=Math.max(0,e-r);i>0&&D("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ho} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,i,()=>(this.Yo=Date.now(),t())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const Jo="PersistentStream";class wl{constructor(t,e,r,i,o,l,c,h){this.Ti=t,this.n_=r,this.r_=i,this.connection=o,this.authCredentialsProvider=l,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new Il(t,e)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(t){this.E_(),this.stream.send(t)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(t,e){this.E_(),this.d_(),this.a_.cancel(),this.i_++,t!==4?this.a_.reset():e&&e.code===C.RESOURCE_EXHAUSTED?(qt(e.toString()),qt("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):e&&e.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Lo(e)}A_(){}auth(){this.state=1;const t=this.R_(this.i_),e=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.i_===e&&this.V_(r,i)},r=>{t(()=>{const i=new O(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(i)})})}V_(t,e){const r=this.R_(this.i_);this.stream=this.f_(t,e),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(i=>{r(()=>this.m_(i))}),this.stream.onMessage(i=>{r(()=>++this.__==1?this.g_(i):this.onNext(i))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(t){return D(Jo,`close with error: ${t}`),this.stream=null,this.close(4,t)}R_(t){return e=>{this.Ti.enqueueAndForget(()=>this.i_===t?e():(D(Jo,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ef extends wl{constructor(t,e,r,i,o,l){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,l),this.serializer=o}f_(t,e){return this.connection.Wo("Listen",t,e)}g_(t){return this.onNext(t)}onNext(t){this.a_.reset();const e=wd(this.serializer,t),r=function(o){if(!("targetChange"in o))return F.min();const l=o.targetChange;return l.targetIds&&l.targetIds.length?F.min():l.readTime?Ot(l.readTime):F.min()}(t);return this.listener.p_(e,r)}y_(t){const e={};e.database=As(this.serializer),e.addTarget=function(o,l){let c;const h=l.target;if(c=_s(h)?{documents:bd(o,h)}:{query:Cd(o,h).ht},c.targetId=l.targetId,l.resumeToken.approximateByteSize()>0){c.resumeToken=dl(o,l.resumeToken);const f=Es(o,l.expectedCount);f!==null&&(c.expectedCount=f)}else if(l.snapshotVersion.compareTo(F.min())>0){c.readTime=hr(o,l.snapshotVersion.toTimestamp());const f=Es(o,l.expectedCount);f!==null&&(c.expectedCount=f)}return c}(this.serializer,t);const r=Pd(this.serializer,t);r&&(e.labels=r),this.I_(e)}w_(t){const e={};e.database=As(this.serializer),e.removeTarget=t,this.I_(e)}}class vf extends wl{constructor(t,e,r,i,o,l){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,i,l),this.serializer=o}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(t,e){return this.connection.Wo("Write",t,e)}g_(t){return $(!!t.streamToken),this.lastStreamToken=t.streamToken,$(!t.writeResults||t.writeResults.length===0),this.listener.D_()}onNext(t){$(!!t.streamToken),this.lastStreamToken=t.streamToken,this.a_.reset();const e=Rd(t.writeResults,t.commitTime),r=Ot(t.commitTime);return this.listener.v_(r,e)}C_(){const t={};t.database=As(this.serializer),this.I_(t)}b_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>xd(this.serializer,r))};this.I_(e)}}/**
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
 */class Tf{}class Af extends Tf{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.F_=!1}M_(){if(this.F_)throw new O(C.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,e,r,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.So(t,vs(e,r),i,o,l)).catch(o=>{throw o.name==="FirebaseError"?(o.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new O(C.UNKNOWN,o.toString())})}Co(t,e,r,i,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.Co(t,vs(e,r),i,l,c,o)).catch(l=>{throw l.name==="FirebaseError"?(l.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new O(C.UNKNOWN,l.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class If{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(t){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.L_("Offline")))}set(t){this.Q_(),this.x_=0,t==="Online"&&(this.N_=!1),this.L_(t)}L_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}k_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(qt(e),this.N_=!1):D("OnlineStateTracker",e)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
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
 */const pe="RemoteStore";class wf{constructor(t,e,r,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=o,this.z_.To(l=>{r.enqueueAndForget(async()=>{ye(this)&&(D(pe,"Restarting streams for network reachability change."),await async function(h){const f=U(h);f.W_.add(4),await An(f),f.j_.set("Unknown"),f.W_.delete(4),await br(f)}(this))})}),this.j_=new If(r,i)}}async function br(n){if(ye(n))for(const t of n.G_)await t(!0)}async function An(n){for(const t of n.G_)await t(!1)}function xl(n,t){const e=U(n);e.K_.has(t.targetId)||(e.K_.set(t.targetId,t),$s(e)?Gs(e):qe(e).c_()&&Qs(e,t))}function Hs(n,t){const e=U(n),r=qe(e);e.K_.delete(t),r.c_()&&Rl(e,t),e.K_.size===0&&(r.c_()?r.P_():ye(e)&&e.j_.set("Unknown"))}function Qs(n,t){if(n.H_.Ne(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(F.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}qe(n).y_(t)}function Rl(n,t){n.H_.Ne(t),qe(n).w_(t)}function Gs(n){n.H_=new _d({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>n.K_.get(t)||null,it:()=>n.datastore.serializer.databaseId}),qe(n).start(),n.j_.B_()}function $s(n){return ye(n)&&!qe(n).u_()&&n.K_.size>0}function ye(n){return U(n).W_.size===0}function bl(n){n.H_=void 0}async function xf(n){n.j_.set("Online")}async function Rf(n){n.K_.forEach((t,e)=>{Qs(n,t)})}async function bf(n,t){bl(n),$s(n)?(n.j_.q_(t),Gs(n)):n.j_.set("Unknown")}async function Cf(n,t,e){if(n.j_.set("Online"),t instanceof hl&&t.state===2&&t.cause)try{await async function(i,o){const l=o.cause;for(const c of o.targetIds)i.K_.has(c)&&(await i.remoteSyncer.rejectListen(c,l),i.K_.delete(c),i.H_.removeTarget(c))}(n,t)}catch(r){D(pe,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await fr(n,r)}else if(t instanceof Zn?n.H_.We(t):t instanceof cl?n.H_.Ze(t):n.H_.je(t),!e.isEqual(F.min()))try{const r=await Al(n.localStore);e.compareTo(r)>=0&&await function(o,l){const c=o.H_.ot(l);return c.targetChanges.forEach((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const _=o.K_.get(f);_&&o.K_.set(f,_.withResumeToken(h.resumeToken,l))}}),c.targetMismatches.forEach((h,f)=>{const _=o.K_.get(h);if(!_)return;o.K_.set(h,_.withResumeToken(ft.EMPTY_BYTE_STRING,_.snapshotVersion)),Rl(o,h);const I=new Gt(_.target,h,f,_.sequenceNumber);Qs(o,I)}),o.remoteSyncer.applyRemoteEvent(c)}(n,e)}catch(r){D(pe,"Failed to raise snapshot:",r),await fr(n,r)}}async function fr(n,t,e){if(!Be(t))throw t;n.W_.add(1),await An(n),n.j_.set("Offline"),e||(e=()=>Al(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{D(pe,"Retrying IndexedDB access"),await e(),n.W_.delete(1),await br(n)})}function Cl(n,t){return t().catch(e=>fr(n,e,t))}async function Cr(n){const t=U(n),e=re(t);let r=t.U_.length>0?t.U_[t.U_.length-1].batchId:Vs;for(;Sf(t);)try{const i=await cf(t.localStore,r);if(i===null){t.U_.length===0&&e.P_();break}r=i.batchId,Pf(t,i)}catch(i){await fr(t,i)}Sl(t)&&Pl(t)}function Sf(n){return ye(n)&&n.U_.length<10}function Pf(n,t){n.U_.push(t);const e=re(n);e.c_()&&e.S_&&e.b_(t.mutations)}function Sl(n){return ye(n)&&!re(n).u_()&&n.U_.length>0}function Pl(n){re(n).start()}async function Vf(n){re(n).C_()}async function Df(n){const t=re(n);for(const e of n.U_)t.b_(e.mutations)}async function Nf(n,t,e){const r=n.U_.shift(),i=Fs.from(r,t,e);await Cl(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Cr(n)}async function kf(n,t){t&&re(n).S_&&await async function(r,i){if(function(l){return md(l)&&l!==C.ABORTED}(i.code)){const o=r.U_.shift();re(r).h_(),await Cl(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Cr(r)}}(n,t),Sl(n)&&Pl(n)}async function Zo(n,t){const e=U(n);e.asyncQueue.verifyOperationInProgress(),D(pe,"RemoteStore received new credentials");const r=ye(e);e.W_.add(3),await An(e),r&&e.j_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.W_.delete(3),await br(e)}async function Of(n,t){const e=U(n);t?(e.W_.delete(2),await br(e)):t||(e.W_.add(2),await An(e),e.j_.set("Unknown"))}function qe(n){return n.J_||(n.J_=function(e,r,i){const o=U(e);return o.M_(),new Ef(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{xo:xf.bind(null,n),No:Rf.bind(null,n),Lo:bf.bind(null,n),p_:Cf.bind(null,n)}),n.G_.push(async t=>{t?(n.J_.h_(),$s(n)?Gs(n):n.j_.set("Unknown")):(await n.J_.stop(),bl(n))})),n.J_}function re(n){return n.Y_||(n.Y_=function(e,r,i){const o=U(e);return o.M_(),new vf(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{xo:()=>Promise.resolve(),No:Vf.bind(null,n),Lo:kf.bind(null,n),D_:Df.bind(null,n),v_:Nf.bind(null,n)}),n.G_.push(async t=>{t?(n.Y_.h_(),await Cr(n)):(await n.Y_.stop(),n.U_.length>0&&(D(pe,`Stopping write stream with ${n.U_.length} pending writes`),n.U_=[]))})),n.Y_}/**
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
 */class Ws{constructor(t,e,r,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Yt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,o){const l=Date.now()+r,c=new Ws(t,e,l,i,o);return c.start(r),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(C.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Xs(n,t){if(qt("AsyncQueue",`${t}: ${n}`),Be(n))return new O(C.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class Pe{static emptySet(t){return new Pe(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||M.comparator(e.key,r.key):(e,r)=>M.comparator(e.key,r.key),this.keyedMap=sn(),this.sortedSet=new Z(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Pe)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Pe;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
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
 */class ta{constructor(){this.Z_=new Z(M.comparator)}track(t){const e=t.doc.key,r=this.Z_.get(e);r?t.type!==0&&r.type===3?this.Z_=this.Z_.insert(e,t):t.type===3&&r.type!==1?this.Z_=this.Z_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.Z_=this.Z_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.Z_=this.Z_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.Z_=this.Z_.remove(e):t.type===1&&r.type===2?this.Z_=this.Z_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.Z_=this.Z_.insert(e,{type:2,doc:t.doc}):L():this.Z_=this.Z_.insert(e,t)}X_(){const t=[];return this.Z_.inorderTraversal((e,r)=>{t.push(r)}),t}}class Me{constructor(t,e,r,i,o,l,c,h,f){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=l,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=f}static fromInitialDocuments(t,e,r,i,o){const l=[];return e.forEach(c=>{l.push({type:0,doc:c})}),new Me(t,e,Pe.emptySet(e),l,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Tr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class Mf{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(t=>t.ra())}}class Lf{constructor(){this.queries=ea(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(e,r){const i=U(e),o=i.queries;i.queries=ea(),o.forEach((l,c)=>{for(const h of c.ta)h.onError(r)})})(this,new O(C.ABORTED,"Firestore shutting down"))}}function ea(){return new ge(n=>Xa(n),Tr)}async function Ff(n,t){const e=U(n);let r=3;const i=t.query;let o=e.queries.get(i);o?!o.na()&&t.ra()&&(r=2):(o=new Mf,r=t.ra()?0:1);try{switch(r){case 0:o.ea=await e.onListen(i,!0);break;case 1:o.ea=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(l){const c=Xs(l,`Initialization of query '${Re(t.query)}' failed`);return void t.onError(c)}e.queries.set(i,o),o.ta.push(t),t.sa(e.onlineState),o.ea&&t.oa(o.ea)&&Ys(e)}async function Uf(n,t){const e=U(n),r=t.query;let i=3;const o=e.queries.get(r);if(o){const l=o.ta.indexOf(t);l>=0&&(o.ta.splice(l,1),o.ta.length===0?i=t.ra()?0:1:!o.na()&&t.ra()&&(i=2))}switch(i){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function jf(n,t){const e=U(n);let r=!1;for(const i of t){const o=i.query,l=e.queries.get(o);if(l){for(const c of l.ta)c.oa(i)&&(r=!0);l.ea=i}}r&&Ys(e)}function Bf(n,t,e){const r=U(n),i=r.queries.get(t);if(i)for(const o of i.ta)o.onError(e);r.queries.delete(t)}function Ys(n){n.ia.forEach(t=>{t.next()})}var xs,na;(na=xs||(xs={}))._a="default",na.Cache="cache";class qf{constructor(t,e,r){this.query=t,this.aa=e,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new Me(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.ua?this.la(t)&&(this.aa.next(t),e=!0):this.ha(t,this.onlineState)&&(this.Pa(t),e=!0),this.ca=t,e}onError(t){this.aa.error(t)}sa(t){this.onlineState=t;let e=!1;return this.ca&&!this.ua&&this.ha(this.ca,t)&&(this.Pa(this.ca),e=!0),e}ha(t,e){if(!t.fromCache||!this.ra())return!0;const r=e!=="Offline";return(!this.options.Ta||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}la(t){if(t.docChanges.length>0)return!0;const e=this.ca&&this.ca.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}Pa(t){t=Me.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ua=!0,this.aa.next(t)}ra(){return this.options.source!==xs.Cache}}/**
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
 */class Vl{constructor(t){this.key=t}}class Dl{constructor(t){this.key=t}}class zf{constructor(t,e){this.query=t,this.fa=e,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=B(),this.mutatedKeys=B(),this.ya=Ya(t),this.wa=new Pe(this.ya)}get Sa(){return this.fa}ba(t,e){const r=e?e.Da:new ta,i=e?e.wa:this.wa;let o=e?e.mutatedKeys:this.mutatedKeys,l=i,c=!1;const h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,f=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((_,I)=>{const x=i.get(_),S=Ar(this.query,I)?I:null,N=!!x&&this.mutatedKeys.has(x.key),k=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let V=!1;x&&S?x.data.isEqual(S.data)?N!==k&&(r.track({type:3,doc:S}),V=!0):this.va(x,S)||(r.track({type:2,doc:S}),V=!0,(h&&this.ya(S,h)>0||f&&this.ya(S,f)<0)&&(c=!0)):!x&&S?(r.track({type:0,doc:S}),V=!0):x&&!S&&(r.track({type:1,doc:x}),V=!0,(h||f)&&(c=!0)),V&&(S?(l=l.add(S),o=k?o.add(_):o.delete(_)):(l=l.delete(_),o=o.delete(_)))}),this.query.limit!==null)for(;l.size>this.query.limit;){const _=this.query.limitType==="F"?l.last():l.first();l=l.delete(_.key),o=o.delete(_.key),r.track({type:1,doc:_})}return{wa:l,Da:r,ls:c,mutatedKeys:o}}va(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,i){const o=this.wa;this.wa=t.wa,this.mutatedKeys=t.mutatedKeys;const l=t.Da.X_();l.sort((_,I)=>function(S,N){const k=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return L()}};return k(S)-k(N)}(_.type,I.type)||this.ya(_.doc,I.doc)),this.Ca(r),i=i!=null&&i;const c=e&&!i?this.Fa():[],h=this.pa.size===0&&this.current&&!i?1:0,f=h!==this.ga;return this.ga=h,l.length!==0||f?{snapshot:new Me(this.query,t.wa,o,l,t.mutatedKeys,h===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:c}:{Ma:c}}sa(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new ta,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(t){return!this.fa.has(t)&&!!this.wa.has(t)&&!this.wa.get(t).hasLocalMutations}Ca(t){t&&(t.addedDocuments.forEach(e=>this.fa=this.fa.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.fa=this.fa.delete(e)),this.current=t.current)}Fa(){if(!this.current)return[];const t=this.pa;this.pa=B(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const e=[];return t.forEach(r=>{this.pa.has(r)||e.push(new Dl(r))}),this.pa.forEach(r=>{t.has(r)||e.push(new Vl(r))}),e}Oa(t){this.fa=t.gs,this.pa=B();const e=this.ba(t.documents);return this.applyChanges(e,!0)}Na(){return Me.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const Js="SyncEngine";class Kf{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class Hf{constructor(t){this.key=t,this.Ba=!1}}class Qf{constructor(t,e,r,i,o,l){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=l,this.La={},this.ka=new ge(c=>Xa(c),Tr),this.qa=new Map,this.Qa=new Set,this.$a=new Z(M.comparator),this.Ua=new Map,this.Ka=new Bs,this.Wa={},this.Ga=new Map,this.za=Oe.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function Gf(n,t,e=!0){const r=Fl(n);let i;const o=r.ka.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Na()):i=await Nl(r,t,e,!0),i}async function $f(n,t){const e=Fl(n);await Nl(e,t,!0,!1)}async function Nl(n,t,e,r){const i=await hf(n.localStore,kt(t)),o=i.targetId,l=n.sharedClientState.addLocalQueryTarget(o,e);let c;return r&&(c=await Wf(n,t,o,l==="current",i.resumeToken)),n.isPrimaryClient&&e&&xl(n.remoteStore,i),c}async function Wf(n,t,e,r,i){n.Ha=(I,x,S)=>async function(k,V,Q,H){let G=V.view.ba(Q);G.ls&&(G=await $o(k.localStore,V.query,!1).then(({documents:T})=>V.view.ba(T,G)));const X=H&&H.targetChanges.get(V.targetId),Pt=H&&H.targetMismatches.get(V.targetId)!=null,st=V.view.applyChanges(G,k.isPrimaryClient,X,Pt);return sa(k,V.targetId,st.Ma),st.snapshot}(n,I,x,S);const o=await $o(n.localStore,t,!0),l=new zf(t,o.gs),c=l.ba(o.documents),h=Tn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),f=l.applyChanges(c,n.isPrimaryClient,h);sa(n,e,f.Ma);const _=new Kf(t,e,l);return n.ka.set(t,_),n.qa.has(e)?n.qa.get(e).push(t):n.qa.set(e,[t]),f.snapshot}async function Xf(n,t,e){const r=U(n),i=r.ka.get(t),o=r.qa.get(i.targetId);if(o.length>1)return r.qa.set(i.targetId,o.filter(l=>!Tr(l,t))),void r.ka.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Is(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),e&&Hs(r.remoteStore,i.targetId),Rs(r,i.targetId)}).catch(je)):(Rs(r,i.targetId),await Is(r.localStore,i.targetId,!0))}async function Yf(n,t){const e=U(n),r=e.ka.get(t),i=e.qa.get(r.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),Hs(e.remoteStore,r.targetId))}async function Jf(n,t,e){const r=ip(n);try{const i=await function(l,c){const h=U(l),f=ot.now(),_=c.reduce((S,N)=>S.add(N.key),B());let I,x;return h.persistence.runTransaction("Locally write mutations","readwrite",S=>{let N=zt(),k=B();return h.ds.getEntries(S,_).next(V=>{N=V,N.forEach((Q,H)=>{H.isValidDocument()||(k=k.add(Q))})}).next(()=>h.localDocuments.getOverlayedDocuments(S,N)).next(V=>{I=V;const Q=[];for(const H of c){const G=cd(H,I.get(H.key).overlayedDocument);G!=null&&Q.push(new _e(H.key,G,za(G.value.mapValue),jt.exists(!0)))}return h.mutationQueue.addMutationBatch(S,f,Q,c)}).next(V=>{x=V;const Q=V.applyToLocalDocumentSet(I,k);return h.documentOverlayCache.saveOverlays(S,V.batchId,Q)})}).then(()=>({batchId:x.batchId,changes:Za(I)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(l,c,h){let f=l.Wa[l.currentUser.toKey()];f||(f=new Z(j)),f=f.insert(c,h),l.Wa[l.currentUser.toKey()]=f}(r,i.batchId,e),await In(r,i.changes),await Cr(r.remoteStore)}catch(i){const o=Xs(i,"Failed to persist write");e.reject(o)}}async function kl(n,t){const e=U(n);try{const r=await lf(e.localStore,t);t.targetChanges.forEach((i,o)=>{const l=e.Ua.get(o);l&&($(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?l.Ba=!0:i.modifiedDocuments.size>0?$(l.Ba):i.removedDocuments.size>0&&($(l.Ba),l.Ba=!1))}),await In(e,r,t)}catch(r){await je(r)}}function ra(n,t,e){const r=U(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.ka.forEach((o,l)=>{const c=l.view.sa(t);c.snapshot&&i.push(c.snapshot)}),function(l,c){const h=U(l);h.onlineState=c;let f=!1;h.queries.forEach((_,I)=>{for(const x of I.ta)x.sa(c)&&(f=!0)}),f&&Ys(h)}(r.eventManager,t),i.length&&r.La.p_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Zf(n,t,e){const r=U(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.Ua.get(t),o=i&&i.key;if(o){let l=new Z(M.comparator);l=l.insert(o,Tt.newNoDocument(o,F.min()));const c=B().add(o),h=new xr(F.min(),new Map,new Z(j),l,c);await kl(r,h),r.$a=r.$a.remove(o),r.Ua.delete(t),Zs(r)}else await Is(r.localStore,t,!1).then(()=>Rs(r,t,e)).catch(je)}async function tp(n,t){const e=U(n),r=t.batch.batchId;try{const i=await af(e.localStore,t);Ml(e,r,null),Ol(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await In(e,i)}catch(i){await je(i)}}async function ep(n,t,e){const r=U(n);try{const i=await function(l,c){const h=U(l);return h.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let _;return h.mutationQueue.lookupMutationBatch(f,c).next(I=>($(I!==null),_=I.keys(),h.mutationQueue.removeMutationBatch(f,I))).next(()=>h.mutationQueue.performConsistencyCheck(f)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(f,_,c)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,_)).next(()=>h.localDocuments.getDocuments(f,_))})}(r.localStore,t);Ml(r,t,e),Ol(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await In(r,i)}catch(i){await je(i)}}function Ol(n,t){(n.Ga.get(t)||[]).forEach(e=>{e.resolve()}),n.Ga.delete(t)}function Ml(n,t,e){const r=U(n);let i=r.Wa[r.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),r.Wa[r.currentUser.toKey()]=i}}function Rs(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.qa.get(t))n.ka.delete(r),e&&n.La.Ja(r,e);n.qa.delete(t),n.isPrimaryClient&&n.Ka.br(t).forEach(r=>{n.Ka.containsKey(r)||Ll(n,r)})}function Ll(n,t){n.Qa.delete(t.path.canonicalString());const e=n.$a.get(t);e!==null&&(Hs(n.remoteStore,e),n.$a=n.$a.remove(t),n.Ua.delete(e),Zs(n))}function sa(n,t,e){for(const r of e)r instanceof Vl?(n.Ka.addReference(r.key,t),np(n,r)):r instanceof Dl?(D(Js,"Document no longer in limbo: "+r.key),n.Ka.removeReference(r.key,t),n.Ka.containsKey(r.key)||Ll(n,r.key)):L()}function np(n,t){const e=t.key,r=e.path.canonicalString();n.$a.get(e)||n.Qa.has(r)||(D(Js,"New document in limbo: "+e),n.Qa.add(r),Zs(n))}function Zs(n){for(;n.Qa.size>0&&n.$a.size<n.maxConcurrentLimboResolutions;){const t=n.Qa.values().next().value;n.Qa.delete(t);const e=new M(J.fromString(t)),r=n.za.next();n.Ua.set(r,new Hf(e)),n.$a=n.$a.insert(e,r),xl(n.remoteStore,new Gt(kt(Ms(e.path)),r,"TargetPurposeLimboResolution",_r.ae))}}async function In(n,t,e){const r=U(n),i=[],o=[],l=[];r.ka.isEmpty()||(r.ka.forEach((c,h)=>{l.push(r.Ha(h,t,e).then(f=>{var _;if((f||e)&&r.isPrimaryClient){const I=f?!f.fromCache:(_=e==null?void 0:e.targetChanges.get(h.targetId))===null||_===void 0?void 0:_.current;r.sharedClientState.updateQueryState(h.targetId,I?"current":"not-current")}if(f){i.push(f);const I=zs.Yi(h.targetId,f);o.push(I)}}))}),await Promise.all(l),r.La.p_(i),await async function(h,f){const _=U(h);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",I=>b.forEach(f,x=>b.forEach(x.Hi,S=>_.persistence.referenceDelegate.addReference(I,x.targetId,S)).next(()=>b.forEach(x.Ji,S=>_.persistence.referenceDelegate.removeReference(I,x.targetId,S)))))}catch(I){if(!Be(I))throw I;D(Ks,"Failed to update sequence numbers: "+I)}for(const I of f){const x=I.targetId;if(!I.fromCache){const S=_.Ts.get(x),N=S.snapshotVersion,k=S.withLastLimboFreeSnapshotVersion(N);_.Ts=_.Ts.insert(x,k)}}}(r.localStore,o))}async function rp(n,t){const e=U(n);if(!e.currentUser.isEqual(t)){D(Js,"User change. New user:",t.toKey());const r=await Tl(e.localStore,t);e.currentUser=t,function(o,l){o.Ga.forEach(c=>{c.forEach(h=>{h.reject(new O(C.CANCELLED,l))})}),o.Ga.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await In(e,r.Rs)}}function sp(n,t){const e=U(n),r=e.Ua.get(t);if(r&&r.Ba)return B().add(r.key);{let i=B();const o=e.qa.get(t);if(!o)return i;for(const l of o){const c=e.ka.get(l);i=i.unionWith(c.view.Sa)}return i}}function Fl(n){const t=U(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=kl.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=sp.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Zf.bind(null,t),t.La.p_=jf.bind(null,t.eventManager),t.La.Ja=Bf.bind(null,t.eventManager),t}function ip(n){const t=U(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=tp.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=ep.bind(null,t),t}class pr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Rr(t.databaseInfo.databaseId),this.sharedClientState=this.Za(t),this.persistence=this.Xa(t),await this.persistence.start(),this.localStore=this.eu(t),this.gcScheduler=this.tu(t,this.localStore),this.indexBackfillerScheduler=this.nu(t,this.localStore)}tu(t,e){return null}nu(t,e){return null}eu(t){return of(this.persistence,new nf,t.initialUser,this.serializer)}Xa(t){return new vl(qs.ri,this.serializer)}Za(t){return new ff}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}pr.provider={build:()=>new pr};class op extends pr{constructor(t){super(),this.cacheSizeBytes=t}tu(t,e){$(this.persistence.referenceDelegate instanceof dr);const r=this.persistence.referenceDelegate.garbageCollector;return new Bd(r,t.asyncQueue,e)}Xa(t){const e=this.cacheSizeBytes!==void 0?xt.withCacheSize(this.cacheSizeBytes):xt.DEFAULT;return new vl(r=>dr.ri(r,e),this.serializer)}}class bs{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ra(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=rp.bind(null,this.syncEngine),await Of(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Lf}()}createDatastore(t){const e=Rr(t.databaseInfo.databaseId),r=function(o){return new yf(o)}(t.databaseInfo);return function(o,l,c,h){return new Af(o,l,c,h)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,o,l,c){return new wf(r,i,o,l,c)}(this.localStore,this.datastore,t.asyncQueue,e=>ra(this.syncEngine,e,0),function(){return Yo.D()?new Yo:new pf}())}createSyncEngine(t,e){return function(i,o,l,c,h,f,_){const I=new Qf(i,o,l,c,h,f);return _&&(I.ja=!0),I}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const o=U(i);D(pe,"RemoteStore shutting down."),o.W_.add(5),await An(o),o.z_.shutdown(),o.j_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}bs.provider={build:()=>new bs};/**
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
 *//**
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
 */class ap{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.iu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.iu(this.observer.error,t):qt("Uncaught Error in snapshot listener:",t.toString()))}su(){this.muted=!0}iu(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */const se="FirestoreClient";class lp{constructor(t,e,r,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=vt.UNAUTHENTICATED,this.clientId=Na.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async l=>{D(se,"Received user=",l.uid),await this.authCredentialListener(l),this.user=l}),this.appCheckCredentials.start(r,l=>(D(se,"Received new app check token=",l),this.appCheckCredentialListener(l,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Yt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Xs(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function os(n,t){n.asyncQueue.verifyOperationInProgress(),D(se,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Tl(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function ia(n,t){n.asyncQueue.verifyOperationInProgress();const e=await up(n);D(se,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>Zo(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Zo(t.remoteStore,i)),n._onlineComponents=t}async function up(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){D(se,"Using user provided OfflineComponentProvider");try{await os(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===C.FAILED_PRECONDITION||i.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;Ve("Error using user provided cache. Falling back to memory cache: "+e),await os(n,new pr)}}else D(se,"Using default OfflineComponentProvider"),await os(n,new op(void 0));return n._offlineComponents}async function Ul(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(D(se,"Using user provided OnlineComponentProvider"),await ia(n,n._uninitializedComponentsProvider._online)):(D(se,"Using default OnlineComponentProvider"),await ia(n,new bs))),n._onlineComponents}function cp(n){return Ul(n).then(t=>t.syncEngine)}async function hp(n){const t=await Ul(n),e=t.eventManager;return e.onListen=Gf.bind(null,t.syncEngine),e.onUnlisten=Xf.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=$f.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Yf.bind(null,t.syncEngine),e}function dp(n,t,e={}){const r=new Yt;return n.asyncQueue.enqueueAndForget(async()=>function(o,l,c,h,f){const _=new ap({next:x=>{_.su(),l.enqueueAndForget(()=>Uf(o,I));const S=x.docs.has(c);!S&&x.fromCache?f.reject(new O(C.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&x.fromCache&&h&&h.source==="server"?f.reject(new O(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):f.resolve(x)},error:x=>f.reject(x)}),I=new qf(Ms(c.path),_,{includeMetadataChanges:!0,Ta:!0});return Ff(o,I)}(await hp(n),n.asyncQueue,t,e,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function jl(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const oa=new Map;/**
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
 */function Bl(n,t,e){if(!e)throw new O(C.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function fp(n,t,e,r){if(t===!0&&r===!0)throw new O(C.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function aa(n){if(!M.isDocumentKey(n))throw new O(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function la(n){if(M.isDocumentKey(n))throw new O(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ti(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":L()}function mr(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new O(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=ti(n);throw new O(C.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */const ql="firestore.googleapis.com",ua=!0;class ca{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new O(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ql,this.ssl=ua}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:ua;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=El;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Ud)throw new O(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}fp("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=jl((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new O(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new O(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new O(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Sr{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ca({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new O(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ca(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new mh;switch(r.type){case"firstParty":return new Eh(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new O(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=oa.get(e);r&&(D("ComponentProvider","Removing Datastore"),oa.delete(e),r.terminate())}(this),Promise.resolve()}}function pp(n,t,e,r={}){var i;const o=(n=mr(n,Sr))._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:n._getEmulatorOptions()}),c=`${t}:${e}`;o.host!==ql&&o.host!==c&&Ve("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},o),{host:c,ssl:!1,emulatorOptions:r});if(!er(h,l)&&(n._setSettings(h),r.mockUserToken)){let f,_;if(typeof r.mockUserToken=="string")f=r.mockUserToken,_=vt.MOCK_USER;else{f=$u(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const I=r.mockUserToken.sub||r.mockUserToken.user_id;if(!I)throw new O(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");_=new vt(I)}n._authCredentials=new gh(new Va(f,_))}}/**
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
 */class ei{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new ei(this.firestore,t,this._query)}}class St{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Jt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new St(this.firestore,t,this._key)}}class Jt extends ei{constructor(t,e,r){super(t,e,Ms(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new St(this.firestore,null,new M(t))}withConverter(t){return new Jt(this.firestore,t,this._path)}}function ha(n,t,...e){if(n=hn(n),Bl("collection","path",t),n instanceof Sr){const r=J.fromString(t,...e);return la(r),new Jt(n,null,r)}{if(!(n instanceof St||n instanceof Jt))throw new O(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(J.fromString(t,...e));return la(r),new Jt(n.firestore,null,r)}}function zl(n,t,...e){if(n=hn(n),arguments.length===1&&(t=Na.newId()),Bl("doc","path",t),n instanceof Sr){const r=J.fromString(t,...e);return aa(r),new St(n,null,new M(r))}{if(!(n instanceof St||n instanceof Jt))throw new O(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(J.fromString(t,...e));return aa(r),new St(n.firestore,n instanceof Jt?n.converter:null,new M(r))}}/**
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
 */const da="AsyncQueue";class fa{constructor(t=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new Il(this,"async_queue_retry"),this.Su=()=>{const r=is();r&&D(da,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.bu=t;const e=is();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Du(),this.vu(t)}enterRestrictedMode(t){if(!this.mu){this.mu=!0,this.yu=t||!1;const e=is();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Su)}}enqueue(t){if(this.Du(),this.mu)return new Promise(()=>{});const e=new Yt;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Vu.push(t),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(t){if(!Be(t))throw t;D(da,"Operation failed with retryable error: "+t)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(t){const e=this.bu.then(()=>(this.pu=!0,t().catch(r=>{this.gu=r,this.pu=!1;const i=function(l){let c=l.message||"";return l.stack&&(c=l.stack.includes(l.message)?l.stack:l.message+`
`+l.stack),c}(r);throw qt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.pu=!1,r))));return this.bu=e,e}enqueueAfterDelay(t,e,r){this.Du(),this.wu.indexOf(t)>-1&&(e=0);const i=Ws.createAndSchedule(this,t,e,r,o=>this.Fu(o));return this.fu.push(i),i}Du(){this.gu&&L()}verifyOperationInProgress(){}async Mu(){let t;do t=this.bu,await t;while(t!==this.bu)}xu(t){for(const e of this.fu)if(e.timerId===t)return!0;return!1}Ou(t){return this.Mu().then(()=>{this.fu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.fu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Mu()})}Nu(t){this.wu.push(t)}Fu(t){const e=this.fu.indexOf(t);this.fu.splice(e,1)}}class ni extends Sr{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=new fa,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new fa(t),this._firestoreClient=void 0,await t}}}function mp(n,t){const e=typeof n=="object"?n:sh(),r=typeof n=="string"?n:ir,i=Zc(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=Qu("firestore");o&&pp(i,...o)}return i}function Kl(n){if(n._terminated)throw new O(C.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||gp(n),n._firestoreClient}function gp(n){var t,e,r;const i=n._freezeSettings(),o=function(c,h,f,_){return new kh(c,h,f,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,jl(_.experimentalLongPollingOptions),_.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new lp(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(c){const h=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(h),_online:h}}(n._componentsProvider))}/**
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
 */class Le{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Le(ft.fromBase64String(t))}catch(e){throw new O(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Le(ft.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class ri{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new O(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new dt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Hl{constructor(t){this._methodName=t}}/**
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
 */class si{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new O(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new O(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return j(this._lat,t._lat)||j(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class ii{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,t._values)}}/**
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
 */const _p=/^__.*__$/;class yp{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new _e(t,this.data,this.fieldMask,e,this.fieldTransforms):new vn(t,this.data,e,this.fieldTransforms)}}function Ql(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw L()}}class oi{constructor(t,e,r,i,o,l){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.Bu(),this.fieldTransforms=o||[],this.fieldMask=l||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(t){return new oi(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.ku({path:r,Qu:!1});return i.$u(t),i}Uu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.ku({path:r,Qu:!1});return i.Bu(),i}Ku(t){return this.ku({path:void 0,Qu:!0})}Wu(t){return gr(t,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Bu(){if(this.path)for(let t=0;t<this.path.length;t++)this.$u(this.path.get(t))}$u(t){if(t.length===0)throw this.Wu("Document fields must not be empty");if(Ql(this.Lu)&&_p.test(t))throw this.Wu('Document fields cannot begin and end with "__"')}}class Ep{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Rr(t)}ju(t,e,r,i=!1){return new oi({Lu:t,methodName:e,zu:r,path:dt.emptyPath(),Qu:!1,Gu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function vp(n){const t=n._freezeSettings(),e=Rr(n._databaseId);return new Ep(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Tp(n,t,e,r,i,o={}){const l=n.ju(o.merge||o.mergeFields?2:0,t,e,i);Xl("Data must be an object, but it was:",l,r);const c=$l(r,l);let h,f;if(o.merge)h=new Dt(l.fieldMask),f=l.fieldTransforms;else if(o.mergeFields){const _=[];for(const I of o.mergeFields){const x=Ap(t,I,e);if(!l.contains(x))throw new O(C.INVALID_ARGUMENT,`Field '${x}' is specified in your field mask but missing from your input data.`);wp(_,x)||_.push(x)}h=new Dt(_),f=l.fieldTransforms.filter(I=>h.covers(I.field))}else h=null,f=l.fieldTransforms;return new yp(new Ct(c),h,f)}function Gl(n,t){if(Wl(n=hn(n)))return Xl("Unsupported field value:",t,n),$l(n,t);if(n instanceof Hl)return function(r,i){if(!Ql(i.Lu))throw i.Wu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Wu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.Qu&&t.Lu!==4)throw t.Wu("Nested arrays are not supported");return function(r,i){const o=[];let l=0;for(const c of r){let h=Gl(c,i.Ku(l));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),l++}return{arrayValue:{values:o}}}(n,t)}return function(r,i){if((r=hn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return sd(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=ot.fromDate(r);return{timestampValue:hr(i.serializer,o)}}if(r instanceof ot){const o=new ot(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:hr(i.serializer,o)}}if(r instanceof si)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Le)return{bytesValue:dl(i.serializer,r._byteString)};if(r instanceof St){const o=i.databaseId,l=r.firestore._databaseId;if(!l.isEqual(o))throw i.Wu(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:js(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof ii)return function(l,c){return{mapValue:{fields:{[Ba]:{stringValue:qa},[or]:{arrayValue:{values:l.toArray().map(f=>{if(typeof f!="number")throw c.Wu("VectorValues must only contain numeric values.");return Ls(c.serializer,f)})}}}}}}(r,i);throw i.Wu(`Unsupported field value: ${ti(r)}`)}(n,t)}function $l(n,t){const e={};return Oa(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):me(n,(r,i)=>{const o=Gl(i,t.qu(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function Wl(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ot||n instanceof si||n instanceof Le||n instanceof St||n instanceof Hl||n instanceof ii)}function Xl(n,t,e){if(!Wl(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const r=ti(e);throw r==="an object"?t.Wu(n+" a custom object"):t.Wu(n+" "+r)}}function Ap(n,t,e){if((t=hn(t))instanceof ri)return t._internalPath;if(typeof t=="string")return Yl(n,t);throw gr("Field path arguments must be of type string or ",n,!1,void 0,e)}const Ip=new RegExp("[~\\*/\\[\\]]");function Yl(n,t,e){if(t.search(Ip)>=0)throw gr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new ri(...t.split("."))._internalPath}catch{throw gr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function gr(n,t,e,r,i){const o=r&&!r.isEmpty(),l=i!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(o||l)&&(h+=" (found",o&&(h+=` in field ${r}`),l&&(h+=` in document ${i}`),h+=")"),new O(C.INVALID_ARGUMENT,c+n+h)}function wp(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */class Jl{constructor(t,e,r,i,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new St(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new xp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Zl("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class xp extends Jl{data(){return super.data()}}function Zl(n,t){return typeof t=="string"?Yl(n,t):t instanceof ri?t._internalPath:t._delegate._internalPath}class Rp{convertValue(t,e="none"){switch(ne(t)){case 0:return null;case 1:return t.booleanValue;case 2:return nt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ee(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw L()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return me(t,(i,o)=>{r[i]=this.convertValue(o,e)}),r}convertVectorValue(t){var e,r,i;const o=(i=(r=(e=t.fields)===null||e===void 0?void 0:e[or].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(l=>nt(l.doubleValue));return new ii(o)}convertGeoPoint(t){return new si(nt(t.latitude),nt(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Er(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(mn(t));default:return null}}convertTimestamp(t){const e=te(t);return new ot(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=J.fromString(t);$(yl(r));const i=new gn(r.get(1),r.get(3)),o=new M(r.popFirst(5));return i.isEqual(e)||qt(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
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
 */function bp(n,t,e){let r;return r=n?n.toFirestore(t):t,r}/**
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
 */class Cp{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class tu extends Jl{constructor(t,e,r,i,o,l){super(t,e,r,i,l),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Sp(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Zl("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class Sp extends tu{data(t={}){return super.data(t)}}/**
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
 */function Pp(n){n=mr(n,St);const t=mr(n.firestore,ni);return dp(Kl(t),n._key).then(e=>kp(t,n,e))}class Vp extends Rp{constructor(t){super(),this.firestore=t}convertBytes(t){return new Le(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new St(this.firestore,null,e)}}function Dp(n,t){const e=mr(n.firestore,ni),r=zl(n),i=bp(n.converter,t);return Np(e,[Tp(vp(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,jt.exists(!1))]).then(()=>r)}function Np(n,t){return function(r,i){const o=new Yt;return r.asyncQueue.enqueueAndForget(async()=>Jf(await cp(r),i,o)),o.promise}(Kl(n),t)}function kp(n,t,e){const r=e.docs.get(t._key),i=new Vp(n);return new tu(n,i,t._key,r,new Cp(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(i){Ue=i})(rh),rr(new dn("firestore",(r,{instanceIdentifier:i,options:o})=>{const l=r.getProvider("app").getImmediate(),c=new ni(new _h(r.getProvider("auth-internal")),new vh(l,r.getProvider("app-check-internal")),function(f,_){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new O(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new gn(f.options.projectId,_)}(l,i),l);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),Se(yo,Eo,t),Se(yo,Eo,"esm2017")})();var Op="firebase",Mp="11.6.0";/**
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
 */Se(Op,Mp,"app");const Lp={apiKey:"AIzaSyCnhfywkurko_VO25LarkHwCbcOBMK2GFA",authDomain:"euro-trans.firebaseapp.com",projectId:"euro-trans",storageBucket:"euro-trans.firebasestorage.app",messagingSenderId:"55038833188",appId:"1:55038833188:web:9fee10c474dcf8456d5eb1"},Fp=Aa(Lp),pa=mp(Fp),Up=()=>{const[n,t]=wt.useState(""),[e,r]=wt.useState(4),[i,o]=wt.useState(0),[l,c]=wt.useState(""),[h,f]=wt.useState(""),[_,I]=wt.useState(!1),[x,S]=wt.useState(!1),[N,k]=wt.useState([]),[V,Q]=wt.useState([]),[H,G]=wt.useState(!0),X=wt.useRef(null),Pt=wt.useRef(null),st=wt.useRef(null);wt.useEffect(()=>{(async()=>{try{const p=await Pp(zl(ha(pa,"cities"),"cities"));if(p.exists()){const et=p.data().list;if(k(et),et.length>0){const lt=et[0];t(lt.name),T(lt.prices),o(lt.prices[4]||0)}}}catch(p){console.error("Error loading cities:",p),alert("Failed to load cities data")}finally{G(!1)}})()},[]);const T=y=>{const p=Object.keys(y).map(Number).sort((et,lt)=>et-lt);Q(p),r(p[0]||4)},m=(y,p)=>{const et=N.find(pt=>pt.name===y);if(!et)return;const lt=Object.keys(et.prices).map(Number);let Ee=4;for(let pt=lt.length-1;pt>=0;pt--)if(lt[pt]<=p){Ee=lt[pt];break}o(et.prices[Ee]||0)},g=y=>{let p="+7 ";return y.length>0&&(p+=`(${y.substring(0,3)}`),y.length>3&&(p+=`) ${y.substring(3,6)}`),y.length>6&&(p+=`-${y.substring(6,8)}`),y.length>8&&(p+=`-${y.substring(8,10)}`),p},E=y=>{const p=y.target,et=p.selectionStart||0,lt=p.value,Ee=lt.slice(0,et).replace(/\D/g,"").length,pt=lt.replace(/\D/g,""),ie=pt.startsWith("7")?pt.substring(1):pt,oe=g(ie.substring(0,10));c(oe),setTimeout(()=>{if(X.current){let ve=4,wn=0;for(let Rt=0;Rt<oe.length;Rt++)if(/\d/.test(oe[Rt])&&(wn++,wn===Ee+1)){ve=Rt+1;break}X.current.selectionStart=ve,X.current.selectionEnd=ve}},0)},v=async y=>{if(y.preventDefault(),!n||!h||l.replace(/\D/g,"").length<11){alert("Please fill all required fields correctly");return}try{await Dp(ha(pa,"orders"),{destination:n,palletCount:e,name:h,phone:l.replace(/\D/g,""),totalPrice:i,timestamp:new Date}),alert("Order created successfully!"),f(""),c("+7 ")}catch(p){console.error("Error submitting order:",p),alert("Failed to create order")}};return H?R.jsx("div",{className:"flex justify-center items-center h-screen bg-[#07162C]",children:R.jsx("div",{className:"text-white text-2xl",children:"Loading..."})}):R.jsx("div",{className:"pt-[42px] lg:pt-[64px] pb-[74px] lg:pb-[143px] bg-[#07162C] px-[20px] lg:px-[60px] -mt-[20px] -mb-[20px]",children:R.jsxs("div",{className:"flex flex-col justify-center items-center text-white",children:[R.jsx("p",{className:"text-[20px] md:text-[32px] lg:text-[36px] xl:text-[48px] font-extrabold text-center pb-[16px] md:pb-[32px] lg:pb-[64px]",children:"Рассчет и оформление перевозки"}),R.jsx("form",{className:"w-full",onSubmit:v,children:R.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-5 grid-rows-[78px 58px 58px 58px 58px 58px 58px] gap-x-[10px] md:gap-x-[20px] gap-y-[14px]",children:[R.jsxs("div",{className:"flex flex-col col-span-2",children:[R.jsx("label",{className:"text-[12px] md:text-[16px] mb-[8px]",children:"Откуда"}),R.jsx("input",{className:"bg-white text-black py-[10px] md:py-[15px] px-[16px] rounded-[10px] text-[12px] md:text-[16px] border-b border-gray-200",type:"text",value:"Иваново",disabled:!0}),R.jsxs("p",{className:"text-[10px] md:text-[14px] mt-[8px]",children:["*Забор груза по г.Иваново - ",R.jsx("strong",{children:"бесплатно"})]})]}),R.jsxs("div",{className:"flex flex-col col-span-2 relative",ref:Pt,children:[R.jsx("label",{className:"text-[12px] md:text-[16px] mb-[8px]",children:"Куда"}),R.jsxs("div",{className:`bg-white text-black py-[8px] md:py-[15px] px-[16px] text-[12px] md:text-[16px] border-b border-gray-200 w-full cursor-pointer flex justify-between items-center transition-[border-radius] ${_?"duration-100":"duration-200 delay-200"} ${_?"rounded-t-[10px] rounded-b-none":"rounded-[10px]"}`,onClick:()=>I(!_),children:[R.jsx("span",{children:n||"Select city"}),R.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",className:`transform transition-transform duration-200 ${_?"rotate-180":""}`,children:R.jsx("path",{d:"M7 10L12 15L17 10H7Z",fill:"#07162C"})})]}),R.jsx("div",{className:`absolute top-full left-0 right-0 z-10 bg-white text-black overflow-hidden transition-all min-w-full shadow-lg ${_?"max-h-[300px] rounded-b-[10px] duration-200 delay-100":"max-h-0 duration-200"}`,children:R.jsx("div",{className:"overflow-y-auto max-h-[300px]",children:N.map(y=>R.jsx("div",{className:`py-[10px] md:py-[15px] px-[16px] text-[12px] md:text-[16px] cursor-pointer hover:bg-gray-100 transition-colors duration-150 ${n===y.name?"bg-gray-100 font-medium":""}`,onClick:()=>{t(y.name),T(y.prices),m(y.name,e),I(!1)},children:y.name},y.name))})})]}),R.jsxs("div",{className:"flex flex-col col-span-2 md:col-span-1 relative",ref:st,children:[R.jsx("label",{className:"text-[12px] md:text-[16px] mb-[8px]",children:"Кол-во паллет"}),R.jsxs("div",{className:`bg-white text-black py-[8px] md:py-[15px] px-[16px] text-[12px] md:text-[16px] border-b border-gray-200 w-full cursor-pointer flex justify-between items-center transition-[border-radius] ${x?"duration-100":"duration-200 delay-200"} ${x?"rounded-t-[10px] rounded-b-none":"rounded-[10px]"}`,onClick:()=>S(!x),children:[R.jsx("span",{children:e}),R.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",className:`transform transition-transform duration-200 ${x?"rotate-180":""}`,children:R.jsx("path",{d:"M7 10L12 15L17 10H7Z",fill:"#07162C"})})]}),R.jsx("div",{className:`absolute top-full left-0 right-0 z-10 bg-white text-black overflow-hidden transition-all min-w-full shadow-lg ${x?"max-h-[300px] rounded-b-[10px] duration-200 delay-100":"max-h-0 duration-200"}`,children:R.jsx("div",{className:"overflow-y-auto max-h-[300px]",children:V.map(y=>R.jsx("div",{className:`py-[10px] md:py-[15px] px-[16px] text-[12px] md:text-[16px] cursor-pointer hover:bg-gray-100 transition-colors duration-150 ${e===y?"bg-gray-100 font-medium":""}`,onClick:()=>{r(y),m(n,y),S(!1)},children:y},y))})})]}),R.jsxs("div",{className:"flex flex-col col-span-2",children:[R.jsx("label",{className:"text-[12px] md:text-[16px] mb-[8px]",children:"Имя"}),R.jsx("input",{className:"bg-white text-black py-[10px] md:py-[15px] px-[16px] rounded-[10px] text-[12px] border-b md:text-[16px] border-gray-200",type:"text",value:h,onChange:y=>f(y.target.value),placeholder:"Введите имя",required:!0})]}),R.jsxs("div",{className:"flex flex-col col-span-2 md:col-span-3",children:[R.jsx("label",{className:"text-[12px] md:text-[16px] mb-[8px]",children:"Телефон"}),R.jsx("input",{ref:X,className:"bg-white text-black py-[10px] md:py-[15px] px-[16px] rounded-[10px] text-[12px] border-b md:text-[16px] border-gray-200",type:"tel",value:l,onChange:E,onKeyDown:y=>!/\d|Backspace|Delete|ArrowLeft|ArrowRight|Tab/.test(y.key)&&y.preventDefault(),onFocus:()=>{l===""&&c("+7 "),setTimeout(()=>{X.current&&(X.current.selectionStart=4,X.current.selectionEnd=4)},0)},placeholder:"+7 (XXX) XXX-XX-XX",required:!0})]}),R.jsxs("div",{className:"flex flex-col col-span-1",children:[R.jsx("p",{className:"text-[20px]",children:"Итого"}),R.jsxs("p",{className:"text-[24px] font-bold",children:[i.toLocaleString()," ",R.jsx("span",{className:"text-[16px]",children:"руб."})]})]}),R.jsx("button",{type:"submit",className:"flex justify-center items-center bg-[#344E74] hover:bg-[#506fa1] active:bg-white border-1 border-[#344E74] active:text-[#344E74] text-white md:font-bold text-[14px] md:text-[20px] xl:text-[36px] h-[37px] md:h-[54px] xl:h-[84px] col-span-2 md:col-span-5 rounded-[10px] lg:rounded-[20px] transition-colors mt-[18px]",children:"Заказать"})]})})]})})},jp=()=>R.jsx("div",{className:"flex flex-col md:flex-row rounded-b-[10px] overflow-hidden leading-none bg-[url('src/shared/assets/images/Marketplace.png')]",children:R.jsxs("div",{className:"flex flex-col pt-[88px] md:pt-[120px] lg:pt-[132px] xl:pt-[184px] 2xl:pt-[206px] px-[20px] md:pl-[40px] md:pr-0 lg:pl-[60px] pb-0 md:pb-[52px] lg:pb-[46px] xl:pb-[62px] bg-[#E9EBEE] w-full",children:[R.jsx("p",{className:"text-start text-[20px] sm:text-[30px] md:text-[32px] lg:text-[36px] 2xl:text-[48px] 3xl:text-[72px] font-extrabold mb-[32px] md:mb-[24px]",children:"Логистическое сопровождение на маркетплейсы"}),R.jsxs("div",{className:"flex flex-col gap-[16px] pb-[22px] xl:pb-[32px] pr-[20%]",children:[R.jsxs("div",{className:"flex flex-col gap-[8px]",children:[R.jsx("p",{className:"text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px] font-bold relative before:content-[''] before:absolute before:left-[-10px] before:top-1/2 before:transform before:-translate-y-1/2 before:w-1 before:h-1 before:bg-black before:rounded-full ml-[20px]",children:"Доставка точно в срок"}),R.jsx("p",{className:"text-[10px] md:text-[14px] lg:text-[16px] xl:text-[20px]",children:"Координируем водителей с учетом сроков, чтобы ваш груз прибыл вовремя"})]}),R.jsxs("div",{className:"flex flex-col gap-[8px]",children:[R.jsx("p",{className:"text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px] font-bold relative before:content-[''] before:absolute before:left-[-10px] before:top-1/2 before:transform before:-translate-y-1/2 before:w-1 before:h-1 before:bg-black before:rounded-full ml-[20px]",children:"Поддержка 24/7"}),R.jsx("p",{className:"text-[10px] md:text-[14px] lg:text-[16px] xl:text-[20px]",children:"Всегда на связи для консультаций и решения любых вопросов"})]}),R.jsxs("div",{className:"flex flex-col gap-[8px]",children:[R.jsx("p",{className:"text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px] font-bold relative before:content-[''] before:absolute before:left-[-10px] before:top-1/2 before:transform before:-translate-y-1/2 before:w-1 before:h-1 before:bg-black before:rounded-full ml-[20px]",children:"Без комиссий за простой "}),R.jsx("p",{className:"text-[10px] md:text-[14px] lg:text-[16px] xl:text-[20px]",children:"Никаких дополнительных платежей за ожидание выгрузки на складе"})]})]}),R.jsxs("div",{className:"flex gap-[14px] w-full pb-[224px] md:pb-0",children:[R.jsxs("a",{className:"flex justify-center items-center gap-[8px] bg-[#344E74] hover:bg-[#506fa1] active:bg-white border-1 border-[#344E74] active:text-[#344E74] text-white py-[8px] md:py-[10.5px] lg:py-[18px] px-[14px] lg:px-[30px] rounded-[10px] lg:rounded-[20px]",children:[R.jsx("span",{className:"text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px]",children:"Рассчитать"}),R.jsx("img",{src:ku,alt:""})]}),R.jsxs("a",{className:"flex justify-center items-center gap-[8px] bg-[#E9EBEE66] hover:bg-[#506fa1] active:bg-white border-[1px] md:border-[2px] border-[#28282B] active:text-[#344E74] text-[#28282B] py-[8px] md:py-[10.5px] lg:py-[18px] px-[14px] lg:px-[30px] rounded-[10px] lg:rounded-[20px]",children:[R.jsx("span",{className:"text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px]",children:"Звонок логисту"}),R.jsx("img",{src:Ou,alt:""})]})]})]})}),Bp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABgCAYAAACKa/UAAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAYCSURBVHgB7Z3NaxxlGMCfZ2YSPUjYUqkfFLq9BE9tohVCPXSLHjzEmvwFVv+BJFohtyT0IjaxKRQ8GsGKoGASA3pzoaA9JHbFkznoRsEQKWQrbanZmXn7PO9+ZL8mOzszO7Oz8/5gszvToWR/fd6v5/0oQoSMZKZT+jN6RiCmdU2cFTam+TP/GYJINzxeoLt5EKKAmsgLgTtgQ9Z8YOZy2eUCRARCiFSEIeIFEjXRQpInkMTaaGfBgjXrgZUNU2goAs+NX8mAjlMUPRm6TEGXEShWWObWxtIqdJmuCeRoM4aMKfo4DSFIawVHpiWsBbtoZ3M/LOehCwQusBfENcIiBYiVzfXFBQiYQAW+/Nb7l3XU50RAdVvQVCLyl+8+WYGACETgyJvTaWPA+Iz+tgzEAYGrZrE4E0Sx1sEnr176cErTta9I3ksQF+h3pd/58vPDY3u72z/nwAeeI7Bc181Bqa6LM8tUN86ARzwJ5CI7MDjwLdV1I9AXYM48KE56KdIdCyzL+7FXGwqvcANTPChe7FRiRwL7VV4FLxJdC+x3eRU6lehKYFLkVehEogYuKDcYaUgI/F0N+s7c02j3bFuB5y5dud4/rW0niJFyN+1IjuxI89CMUk8fQXIZe3H4/P1/tn+64/SAYx0oh2eDxl3okYRAhBTMA3PUqT50LMLGUwPXQcljUnKc70DLIiyLLuAsKEogpGncvNNq3NwyAjklBYo62EmrVrlJILW6PZvPixLZtRkymhIndY1I0jrMHiiY/5mnayet6iJQG9AySt6RpBqjsE6gqvtcMVV7URX4yvgHEyr6XJGS07RlDiMQ4W1QuAOxGoWyERmZoPS8beyDwi3VxkRGoG7qGVB0glyiwh9KRVgVXw9oGflT/sDShcI9mlYKOlT1n3eoHjymGaaRwGRpMHA9qFEhzoDCE5RsTmuq8+wd1MRZjSyeAoUneEmyRnkalXX2iCzCoIqwL0ggqgj0iEyyQp9x4tlg4uHho8fy1Y6+EvjGa2dg5r1xCIJba7fhy/XbbZ9ztbQjDgQprxOoH4h5iDmN8h4++h9CohD7CGyUt3fvPly9+TWERN5AFHlqTtIQQ1rJm732RXj71wRFoBBiB2KIk7x/6T0seNOjhgJ9LfOPgl6Qx/COUY7APMSIXpEnsSGrWYaVhZgwNjrcO/II3qus5VaXC3Hpyvz2+1/wx9978nPU8mgYl6/OylEsrkEM4KHV7Me34M7d7UjlSRCy/FYSaJcu4gBLvHrzm2jlMRbIoJMCS/WgiOzcgTjCRwvwuxQo60GMTxRGDR8pUFniVh3KoYU3QOGOcvFlqgI3Nxazqhi3h1vf2sMsGpIJKgrbQQOPunMX6gSamrmsotAZjj5bt7O19+oEcmOiotAZBPycHOVr7zXlAzkK2TQo6mAnm+uL8433mwTKLk1DOVc0130VWmak5bkqql94iMBVp7NmHFP6JprvqgZFFt2CqRcdT/VwFMiVpa2KMhfdmcaGo5YjJ5UobLlBSWyrLGy80e6YqLazcpZmzdNb7NL+fjlxfCi3tXGt7aFCbQVyq0xdm8mkdW1eP3/GVY7U1bww1wEUiRdV/7AZ1xPrSmJrOlqZoCQ20/HSjopESGDD0gpPa2NYIo0LR5Pcxanga3HR1vrStC3sRI9YfK/O4o6mqVmjNE/Q9SOHe5FAlrdxkd5aW5rkaExaAxPo+kCORirWp+njQlJEdmWBJSceuaVOQkR2bZF5OYOxwi8+j4H+qSYoJf4OdBlOPz09OMBdrAyEQLj/GcHEdErujieZdHmBhKYhAEqLo+w1XqLCqyy+/3QupRniT/CBbYuFF547Pt/uuVAFNiL3KvN2Ww0yiOIUiUjz1jPewIING4AqK8h4STJStWDZ+CsKeidhpcmwQ3Z399NhCYx0n0j5i2fLr1jSN/tEokIJ9IkS6BMl0CdKoE+UQJ8ogT5RAn2iBPpECfSJEugTJdAnkWZj/LB3b//obIvwdx4OIvAewpaTZcXHMHny5DE5rRvfUztEdw8MEvJEJ9HyDBVdt6r3VRH2yRPPwsHz939aagAAAABJRU5ErkJggg==",qp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABgCAYAAACKa/UAAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAavSURBVHgB7Z1NbBRVHMD/7820WCTYBlLEoCwc0IuwFUwQYtgqRhOxtiZ6UBOBg9duBZQbNPFAtEg5kBgv9GCiBxM+DyaaMB78iCm60YORRB0wkRSauBiKtTszz/d/O7vsbnd252tnZrfvl7S7sztZZn/9v6//e/MgECPpTLZXWaFkGCEphbItzCIpfI7vEWCpmtPz/FUdGMsTynTGyFWwQDNuG7mcNpmHmCAQISVhhJBdXNRwHUm+IFysRSwNTDhn3ja1KIVGInDbnoMZUMgoj54MP+yFFsMIm0KZly8ePwstpmUCMdrUleoof5qFCKTVAyPTZOa4VbC03OeTOrSA0AUmQVwtKJIBm5o+PzEOIROqwMdeeGuvQpQjLKS6LWxKEfnDhQ+mICRCEZh+LptSu9TT/NMy0A4wctYoFMbCKNYKBOTxoUOjVKGfcnmPQLvAr5Vf8977N22fuX7l2xwEwHcE2nXdESjWde3MJK8bx8AnvgRike3q7jrD67o0dAQkZywURvwUac8CbXmXktpQ+AUbmMJCYdCrRE8CO1VeCT8SXQvsdHklvEp0JXCpyCvhRSIFF9gNRgqWCPhdVf6dsafR7NymArcNHTzROa2tF1ja7qY1pGFHGodmPPV0DJYu2x/YtOPWX1e++c7pBMc6UAzPutUfISEJgRjJGwvGgFN96FiE1WVdJ0DKQ3rFON+BukVYFF0gh0FShECKj5uv1hs3141ATEmBpAp0Uq9VXiSQt7qJzefFiejarFQXJU6qGpGl1mH2Qd74x9hQOWlVFYG0i2akvIb01kZhlUBZ97litPKgLHDrngPDMvpc0SumaW3uRiCBF0HiDkLKUSgakfQwT89b6t8gcUu5MRERqBhKBiReEEtU8EmxCMvi6wOaEb/FL1I8kLiH0mLQEVn/+YfXg31UNdQlmCwNB6wHKS/EGZD4giebU1R2nv1DKNtCucX1IPEFLkmmPE8js84+EUUYZBEOBBdIZAT6RCRZoU3oXx3d33nuzrz4cUNbCNy9czOM7d8DUYHyDr/3Mfz+542m57pa2hEnUctD7l1+Dxx7+3XY+GB/03PJ1qFDf5CENiR+5P12bcax+K1Y3gMbH2oupYSLSMwntgj7jbx3T30GN2Zv1X3v0YfX88h6DdxSisQGEnXekWY6JIw4iq0TDYszgzxljF2FBJEkeSWcJOJNj5QwEmiZf5hgEUuavBIlif2r7yu/hneMYgTqkBDWVFxcEkGJa1ZV9Ect0KipmhpIfIH3KtPc2ck8wxuZJZ7gwzi9PCvHY/EcSLxBQMOHokCreCDxgAki6ITAYj3IYtt3oB3BrQXwUQgU9SCRUegW3FKgtMStnEwgJjkJEnfYxRcpj4WnL05o24YO5ONMsM7M5uHLr3+CIMzd+Q9aybIuVa/czKImmSCiMLY1gj//ek38JJlnntw8/mHFcVU+0KDGpGxMGrMjvUmvPK4SiI2JHYUSlyzKSGMUYi8bJK5YJFB0aRgLfX+VTqXunIjYV0X2C13hOKlkEGOfbFCa4yiQF2XdkkW5CiK24FP1ytcaTmvyoowNimyVwZbHyODatX165etN54VNah7lD4lJ+8dBSV5/f1+uznvNSQ9nU4qlXCJAUhAhmOJ/esdmCAv8PJy08kIjefb77ohaIn5ZMYmzKr55kmby7HPcE5XEdpFnn+eNVksMKu+jT76AuX+9Z2R6lnXrb766u9zrUEDJNZOH+Nt8jEtULfUMPoUQCSPy9r1zynFpRwNyfAg7gl038Iiv1Vn4D02fnxgIu4uDE+tRF1tmkZNc3qAfeUig5W2Xzx/PWsxqyxELw2tmMHb54vvZYhbKH4HXB+K42aDmAJ8naPmWw6HBQOP924HpCxOTEJBQlrfZ4T9i73R0JOr+olswTYeZpjA3oQ11hSpeGC/WG/jT8STlFFmxihnHqAtTHtKSJb68gTnKL3YQ68c4RVaI24DXFKSuc6JlK1TtYj2FP7gfA/9TDfOi/Qa0GEoIdoA1YOwknz3ToMVE+58RDGd7xd3xXCY/3FVbV4axuPKr738ZeOX5nZElPyIVWIu4Vxlvt6WQIYStf+nZJ9L7X34qUOe8W+1J9fX1RLbqNlaBtVy/MbuXEnoaAtBI4PWbNzOUqIE+vzAPI+vW3R3itc2dSqHBgt3SoShm1cqNxN9ok3SkwIBIgQGRAgMiBQZECgyIFBgQKTAgUmBApMCASIFeYKDXLi7quLHwgjmvzcw22IyOMfAFl2eZixcXdV4ygbVg/wcHeYgsws1oIA/5H0KNs9x7ChQdAAAAAElFTkSuQmCC",zp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABgCAYAAACKa/UAAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAbHSURBVHgB7Z1LbxNXFIDPuR7zrKgtwIa+mLCglaqW8JIQKsKR2qoLGsKuKpUaNt10kVCgoivIjgoo4Q/QILVSd00oiy4qxZs+FtCmXSJVmKpqmogqpgJE8czc3jPjcTKOx56Xx+P4flLi8UOW/eXcx5x75gahg/QXRjOpp1IFjqimGN/JDVTpmJ5D4Grdy8vi0RJwXkbGS5zjXTCgqD3QZmaK42XoEAgxYgtDxENC1FADSYFAIdZAowg6TOkP9GKcQmMRuPfwqQKkcERET0HczUCb4cgnSOatG5cmoc20TSBFm7JBGRGHoxCDtEZQZOpcHzMqRnHm2/EStIHIBSZBXD0kkgOfuHn94hhETKQCd7/90XAKU2d5RH1b1NgR+fM3n01AREQisP+tUVVJK5+LdytAN8BxUqtUTkTRrFMQkn2Dp0dYin0l5L0E3YL4rOIzD2/ZsX9u9vaPMxCCwBFY7evOgtXXdTPjom88AQEJJJCabHpV+mvR1/XDigBntCeVo0GatG+BVXnTSR0ogkIDTOVJZcCvRF8CV6o8myASPQtc6fJs/Er0JLBX5Nn4kcjAA9UBQ4Uegb6rIr4zzTRavbalwL2Dpy6vnNHWD7y/Ok1rStOJNJ2aidTTeehd9j+z48D9v27/8JPbC1z7QPP0bJXyCyQkIdBBytoTbZdbf+jahJXV6csg5REZ8zzfhYZN2Gy6gGdAYoGgivPmu43OmxtGIKWkQOKAnDQalZcJFKNuYvN5ncSc2mxQliVOHINIr02YA1DW/tX6li5aOSKQpVlBymtKpj4KHQJl3+eJkaV3agL3HD45JKPPExlzmbbKYgQiHAGJNxBrUWgOIv1DIj1vKAsg8UptMDEjMKWlCiDxg1miQgdWE5bNNwCsYP42f6F1R+IdxqygQ9n/BUf0g1mmaEoPJkujgfpBJhpxASSBEMlmlcnJc3CQ8Z1MWNwGkkBQSTITeRqZdQ6I2YRBNuFQCIEoIzAgZpIVuoT169aYP3Hw8NFj88cLXSGQxJ3/+Bhsfz4PcTB37z6cufAFzIvbVngq7egkccsj8puehvOn34OcuG0F7hk8fQcTOpAEkffw0X/w+x9/N3xuy+YM5Da2lmLjIRLLiW3CQSOP5H1y4cuGz707eBCOHTkIXrEjsYnEkphI8xIkjE40WzeaNmcOZcY5vwsJIynybNwk0kWPDDmGKvOPGvqwSZJnY0tcOpWiK0YpAksg8QRJXL9u9eIDBhSZruhFkASCrlVmM5PjZU4XMkt8IU7jSrVVORGLUyDxB0KRbiyBhnVH4gMdzKAzBVr9IO/YvgPdCG0tQLemQLMfRBmFXqEtBewSt1oyAXW8AhJvVJsvUTsXvnnjYnHv4MlypxOsD0Qy4Lvvf4OgzHlIQYVBSbHS0s0s6pIJZhR2tEaQEpmXr96ApLLt2c2OfRcc+UCNaeNyMGnOwX0vO059HQJpMKlGocSFNw7sdpTBLMtIUxTSLBsknlgm0JzScB75/iorlYZrIua+KnJe6AnXRSUNteNyQKmD82vZ7FpHAtpVoGjKJUM25UWEvHxu43D9w02XNUVTpgFFjsou8oiWq3I6088phnJIHCaqEPOVF/0XleU3eV/SrNFEHuFt04mhUTVlpKYRUIUEQCKufvohtJ0W8ghPlQnUH4pIHOi1+WEF9PFWr/G38U5CIpFWxj5453Xwy/YX8n5X/MoVrg08l8u5rlz63/opYc3ZD34rE6o0lei7uMhuznQIvUEmjcr0n/PzDQfRQNVZJPHm9Yu7emiK4yoxVHnbreuXRg1u9MoZiynxzsKCI+Ecuj6Qzps1pu8S6wRt33I4AWQysMYxmYykwJKa9K2pS0cpGnttqhNphSpFo2jWfeJwLEkiudXFjL352quR99ltKfEVA8w5Gqk7HZG2OPFZ+ugzbcxuiLyvjmUreNqPQfyphsTc8X1oMyQNOSuK07ArtNK49LnZuX/OMYahFs1WKWvVpSmteP8ZwdBoxrw6XsgUdw9FNRm3iqOMKSpRoSoLa21nOe0QGGuNdPWLTVZ/rL0a6HJbBgVEvk2IUOnSM7qABevWp+0KMipJRtEt6Ab+ilzcNhEWB7FGoBdmZxdUloZpCIqIwnwue7zhe3d7BHqGB7/sAhFUiJHEX2iTdKTAkEiBIZECQyIFhkQKDIkUGBIp0A8cSmV47CiBTZzArVuzJeDGNUgaQp6h40BfNus4bUxkBOZzm4YTJbEqz/zj1pHYJpwYiU3kEYlLJtQzN39vApD5yyNi42v/RBYnw/1sNNRCnvWeXUAgiWHxII/oCoFErBI9yiP+B+aC3POIGMblAAAAAElFTkSuQmCC",Kp=()=>R.jsx("div",{className:"pt-[42px] bg-[#07162C] pb-[52px] lg:pb-[80px] px-[20px] md:px-[40px] lg:px-[60px] -mt-[10px]",children:R.jsxs("div",{className:"flex flex-col justify-center items-center text-white",children:[R.jsx("p",{className:"text-[20px] md:text-[32px] lg:text-[36px] xl:text-[48px] font-extrabold text-center pb-[16px] md:pb-[32px]",children:"Почему отправка по FBO на склады других регионов выгодна?"}),R.jsxs("div",{className:"flex flex-col md:flex-row gap-[32px]",children:[R.jsxs("div",{className:"flex flex-col gap-[32px] md:justify-center",children:[R.jsxs("div",{className:"flex gap-[24px]",children:[R.jsx("img",{className:"h-[46px] w-[40px]",src:Bp,alt:""}),R.jsxs("div",{className:"",children:[R.jsx("p",{className:"font-bold text-[14px] mb-[8px]",children:"Поисковая выдача"}),R.jsx("p",{className:"text-[12px]",children:"Маркетплейс выдвигает в первые ряды те товары, которые находятся ближе. При равных условия, в поисковой выдаче, приоритет будет у продавцов, которые доставят быстрее"})]})]}),R.jsxs("div",{className:"flex gap-[24px]",children:[R.jsx("img",{className:"h-[46px] w-[40px]",src:qp,alt:""}),R.jsxs("div",{className:"",children:[R.jsx("p",{className:"font-bold text-[14px] mb-[8px]",children:"Выгода"}),R.jsx("p",{className:"text-[12px]",children:"Мы предлагаем лучшие условия по логистике, в пересчете на единицу товара, в сравнении с логистикой маркетплейсов"})]})]}),R.jsxs("div",{className:"flex gap-[24px]",children:[R.jsx("img",{className:"h-[46px] w-[40px]",src:zp,alt:""}),R.jsxs("div",{className:"",children:[R.jsx("p",{className:"font-bold text-[14px] mb-[8px]",children:"Охват"}),R.jsx("p",{className:"text-[12px]",children:"Возможность расширить свою аудиторию за пределы домашнего региона"})]})]})]}),R.jsxs("table",{className:"border-2 border-white text-[12px]",children:[R.jsx("thead",{className:"bg-white text-[#07162C]",children:R.jsxs("tr",{children:[R.jsx("th",{className:"border-2 border-white p-2",children:"Склады"}),R.jsx("th",{className:"border-2 border-white p-2",children:"Охват"})]})}),R.jsxs("tbody",{children:[R.jsxs("tr",{children:[R.jsx("td",{className:"border-2 border-white p-2",children:"Москва, Казань"}),R.jsx("td",{className:"border-2 border-white p-2",children:"По всей России"})]}),R.jsxs("tr",{children:[R.jsx("td",{className:"border-2 border-white p-2",children:"Санкт - Петербург, Краснодар"}),R.jsx("td",{className:"border-2 border-white p-2",children:"Регионы Северо-Западного, Центрального, Приволжского, Уральского, Южного, и СевероКавказского ФО и частично Сибирский ФО"})]}),R.jsxs("tr",{children:[R.jsx("td",{className:"border-2 border-white p-2",children:"Екатеринбург"}),R.jsx("td",{className:"border-2 border-white p-2",children:"Урал, часть Поволжья и южных областей, Дальний Восток, кроме Магадана и Камчатки"})]}),R.jsxs("tr",{children:[R.jsx("td",{className:"border-2 border-white p-2",children:"Новосибирск"}),R.jsx("td",{className:"border-2 border-white p-2",children:"Как Екатеринбург + Магадан и Камчатка"})]}),R.jsxs("tr",{children:[R.jsx("td",{className:"border-2 border-white p-2",children:"Хабаровск"}),R.jsx("td",{className:"border-2 border-white p-2",children:"Дальний Восток и Сибирский ФО"})]})]})]})]})]})}),Hp="/euro-trans/assets/Wildberries-B71FL_Gk.png",Qp="/euro-trans/assets/Ozon-5G8ooATl.png",Gp="/euro-trans/assets/YandexMarket-DehntI98.png",$p=()=>R.jsxs("div",{className:"flex flex-col justify-center items-center bg-[#E9EBEE] rounded-[20px] py-[32px] lg:py-[64px] px-[20px] md:px-[41px] lg:px-[60px] -mt-[20px] relative",children:[R.jsx("p",{className:"text-[20px] md:text-[32px] lg:text-[36px] xl:text-[48px] font-extrabold text-center mb-[8px]",children:"С какими маркетплейсами мы работаем"}),R.jsx("p",{className:"text-[14px] md:text-[22px] lg:text-[26px] xl:text-[38px] text-center mb-[31px]",children:"Работаем по схеме FBO"}),R.jsxs("div",{className:"flex flex-col md:flex-row gap-[28px] md:gap-[21px] justify-center items-center",children:[R.jsx("img",{className:"hover:scale-110 transition-all transform-gpu h-[60px]",src:Hp,alt:""}),R.jsx("img",{className:"hover:scale-110 transition-all transform-gpu h-[60px]",src:Qp,alt:""}),R.jsx("img",{className:"hover:scale-110 transition-all transform-gpu h-[48px]",src:Gp,alt:""})]})]}),Jp=()=>R.jsxs(R.Fragment,{children:[R.jsx(jp,{}),R.jsx(Kp,{}),R.jsx($p,{}),R.jsx(Up,{})]});export{Jp as default};
