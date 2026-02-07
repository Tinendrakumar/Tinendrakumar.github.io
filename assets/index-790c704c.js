import{r as w,c as ge,o as f,a as m,b as c,n as Y,d as $e,e as E,f as ve,g as Ae,m as zn,h as q,i as H,j as b,w as k,k as R,l as Hn,p as Wn,q as Xt,T as ie,s as ce,F as B,t as z,u as v,v as I,x as Qt,y as qn,z as Kn,A as X,B as Q,C as Gn,D as Et,E as Ct,G as Jn,H as Yn}from"./vendor-5699d02f.js";import{g as Zt,i as Xn,a as Qn,_ as St,C as At,r as Pt,b as Zn,S as we,c as O,d as x,E as at,e as ei,f as en,h as ti,j as ni,L as tn,k as C,l as ii,m as si,F as ct,n as ri,q as be,o as oi,p as ai,s as fe,t as pe,u as ci,v as nn,w as Pe,x as G,y as Re,z as li,A as di,B as ui,D as Xe,G as Qe,H as Ze,I as et,J as hi,K as fi}from"./firebase-76932c27.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const pi="modulepreload",mi=function(n){return"/"+n},Rt={},gi=function(e,t,i){if(!t||t.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(t.map(r=>{if(r=mi(r),r in Rt)return;Rt[r]=!0;const o=r.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!i)for(let h=s.length-1;h>=0;h--){const d=s[h];if(d.href===r&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":pi,o||(u.as="script",u.crossOrigin=""),u.href=r,document.head.appendChild(u),o)return new Promise((h,d)=>{u.addEventListener("load",h),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})};function lt(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t}function sn(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const vi=sn,rn=new at("auth","Firebase",sn());/**
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
 */const xe=new si("@firebase/auth");function _i(n,...e){xe.logLevel<=tn.WARN&&xe.warn(`Auth (${we}): ${n}`,...e)}function Oe(n,...e){xe.logLevel<=tn.ERROR&&xe.error(`Auth (${we}): ${n}`,...e)}/**
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
 */function S(n,...e){throw dt(n,...e)}function A(n,...e){return dt(n,...e)}function on(n,e,t){const i=Object.assign(Object.assign({},vi()),{[e]:t});return new at("auth","Firebase",i).create(e,{appName:n.name})}function W(n){return on(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function dt(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return rn.create(n,...e)}function p(n,e,...t){if(!n)throw dt(e,...t)}function L(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Oe(e),new Error(e)}function D(n,e){n||L(e)}/**
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
 */function st(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function yi(){return Ot()==="http:"||Ot()==="https:"}function Ot(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function wi(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(yi()||Zn()||"connection"in navigator)?navigator.onLine:!0}function bi(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class ke{constructor(e,t){this.shortDelay=e,this.longDelay=t,D(t>e,"Short delay should be less than long delay!"),this.isMobile=Xn()||Qn()}get(){return wi()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ut(n,e){D(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class an{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;L("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;L("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;L("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ki={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Ii=new ke(3e4,6e4);function ee(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function K(n,e,t,i,s={}){return cn(n,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=be(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const u=Object.assign({method:e,headers:l},r);return oi()||(u.referrerPolicy="no-referrer"),an.fetch()(ln(n,n.config.apiHost,t,a),u)})}async function cn(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},ki),e);try{const s=new Ei(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Ee(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ee(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ee(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ee(n,"user-disabled",o);const h=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw on(n,h,u);S(n,h)}}catch(s){if(s instanceof ct)throw s;S(n,"network-request-failed",{message:String(s)})}}async function Be(n,e,t,i,s={}){const r=await K(n,e,t,i,s);return"mfaPendingCredential"in r&&S(n,"multi-factor-auth-required",{_serverResponse:r}),r}function ln(n,e,t,i){const s=`${e}${t}?${i}`;return n.config.emulator?ut(n.config,s):`${n.config.apiScheme}://${s}`}function Ti(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Ei{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(A(this.auth,"network-request-failed")),Ii.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ee(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=A(n,e,i);return s.customData._tokenResponse=t,s}function Lt(n){return n!==void 0&&n.enterprise!==void 0}class Ci{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Ti(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Si(n,e){return K(n,"GET","/v2/recaptchaConfig",ee(n,e))}/**
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
 */async function Ai(n,e){return K(n,"POST","/v1/accounts:delete",e)}async function dn(n,e){return K(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function me(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Pi(n,e=!1){const t=x(n),i=await t.getIdToken(e),s=ht(i);p(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:me(tt(s.auth_time)),issuedAtTime:me(tt(s.iat)),expirationTime:me(tt(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function tt(n){return Number(n)*1e3}function ht(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Oe("JWT malformed, contained fewer than 3 sections"),null;try{const s=ri(t);return s?JSON.parse(s):(Oe("Failed to decode base64 JWT payload"),null)}catch(s){return Oe("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Nt(n){const e=ht(n);return p(e,"internal-error"),p(typeof e.exp<"u","internal-error"),p(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function _e(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof ct&&Ri(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function Ri({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Oi{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class rt{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=me(this.lastLoginAt),this.creationTime=me(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ue(n){var e;const t=n.auth,i=await n.getIdToken(),s=await _e(n,dn(t,{idToken:i}));p(s==null?void 0:s.users.length,t,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?un(r.providerUserInfo):[],a=Ni(n.providerData,o),l=n.isAnonymous,u=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),h=l?u:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new rt(r.createdAt,r.lastLoginAt),isAnonymous:h};Object.assign(n,d)}async function Li(n){const e=x(n);await Ue(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ni(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function un(n){return n.map(e=>{var{providerId:t}=e,i=lt(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function Mi(n,e){const t=await cn(n,{},async()=>{const i=be({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=ln(n,s,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",an.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Di(n,e){return K(n,"POST","/v2/accounts:revokeToken",ee(n,e))}/**
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
 */class se{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){p(e.idToken,"internal-error"),p(typeof e.idToken<"u","internal-error"),p(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Nt(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){p(e.length!==0,"internal-error");const t=Nt(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(p(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await Mi(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,o=new se;return i&&(p(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(p(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(p(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new se,this.toJSON())}_performRefresh(){return L("not implemented")}}/**
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
 */function U(n,e){p(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class N{constructor(e){var{uid:t,auth:i,stsTokenManager:s}=e,r=lt(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Oi(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new rt(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await _e(this,this.stsTokenManager.getToken(this.auth,e));return p(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Pi(this,e)}reload(){return Li(this)}_assign(e){this!==e&&(p(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new N(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){p(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Ue(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(O(this.auth.app))return Promise.reject(W(this.auth));const e=await this.getIdToken();return await _e(this,Ai(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,s,r,o,a,l,u,h;const d=(i=t.displayName)!==null&&i!==void 0?i:void 0,g=(s=t.email)!==null&&s!==void 0?s:void 0,_=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,y=(o=t.photoURL)!==null&&o!==void 0?o:void 0,yt=(a=t.tenantId)!==null&&a!==void 0?a:void 0,Ke=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,wt=(u=t.createdAt)!==null&&u!==void 0?u:void 0,bt=(h=t.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:Ge,emailVerified:kt,isAnonymous:It,providerData:Je,stsTokenManager:Tt}=t;p(Ge&&Tt,e,"internal-error");const $n=se.fromJSON(this.name,Tt);p(typeof Ge=="string",e,"internal-error"),U(d,e.name),U(g,e.name),p(typeof kt=="boolean",e,"internal-error"),p(typeof It=="boolean",e,"internal-error"),U(_,e.name),U(y,e.name),U(yt,e.name),U(Ke,e.name),U(wt,e.name),U(bt,e.name);const Ye=new N({uid:Ge,auth:e,email:g,emailVerified:kt,displayName:d,isAnonymous:It,photoURL:y,phoneNumber:_,tenantId:yt,stsTokenManager:$n,createdAt:wt,lastLoginAt:bt});return Je&&Array.isArray(Je)&&(Ye.providerData=Je.map(Bn=>Object.assign({},Bn))),Ke&&(Ye._redirectEventId=Ke),Ye}static async _fromIdTokenResponse(e,t,i=!1){const s=new se;s.updateFromServerResponse(t);const r=new N({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Ue(r),r}static async _fromGetAccountInfoResponse(e,t,i){const s=t.users[0];p(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?un(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(r!=null&&r.length),a=new se;a.updateFromIdToken(i);const l=new N({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new rt(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,u),l}}/**
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
 */const Mt=new Map;function M(n){D(n instanceof Function,"Expected a class definition");let e=Mt.get(n);return e?(D(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Mt.set(n,e),e)}/**
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
 */class hn{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}hn.type="NONE";const Dt=hn;/**
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
 */function Le(n,e,t){return`firebase:${n}:${e}:${t}`}class re{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Le(this.userKey,s.apiKey,r),this.fullPersistenceKey=Le("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?N._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new re(M(Dt),e,i);const s=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let r=s[0]||M(Dt);const o=Le(i,e.config.apiKey,e.name);let a=null;for(const u of t)try{const h=await u._get(o);if(h){const d=N._fromJSON(e,h);u!==r&&(a=d),r=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new re(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new re(r,e,i))}}/**
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
 */function xt(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(gn(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(fn(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(_n(e))return"Blackberry";if(yn(e))return"Webos";if(pn(e))return"Safari";if((e.includes("chrome/")||mn(e))&&!e.includes("edge/"))return"Chrome";if(vn(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function fn(n=C()){return/firefox\//i.test(n)}function pn(n=C()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function mn(n=C()){return/crios\//i.test(n)}function gn(n=C()){return/iemobile/i.test(n)}function vn(n=C()){return/android/i.test(n)}function _n(n=C()){return/blackberry/i.test(n)}function yn(n=C()){return/webos/i.test(n)}function ft(n=C()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function xi(n=C()){var e;return ft(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ui(){return ai()&&document.documentMode===10}function wn(n=C()){return ft(n)||vn(n)||yn(n)||_n(n)||/windows phone/i.test(n)||gn(n)}/**
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
 */function bn(n,e=[]){let t;switch(n){case"Browser":t=xt(C());break;case"Worker":t=`${xt(C())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${we}/${i}`}/**
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
 */class ji{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function Fi(n,e={}){return K(n,"GET","/v2/passwordPolicy",ee(n,e))}/**
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
 */const Vi=6;class $i{constructor(e){var t,i,s,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:Vi,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,s,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(i=l.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class Bi{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ut(this),this.idTokenSubscription=new Ut(this),this.beforeStateQueue=new ji(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=rn,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=M(t)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await re.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await dn(this,{idToken:e}),i=await N._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(O(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return p(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ue(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=bi()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(O(this.app))return Promise.reject(W(this));const t=e?x(e):null;return t&&p(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&p(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return O(this.app)?Promise.reject(W(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return O(this.app)?Promise.reject(W(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(M(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Fi(this),t=new $i(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new at("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await Di(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&M(e)||this._popupRedirectResolver;p(t,this,"argument-error"),this.redirectPersistenceManager=await re.create(this,[M(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(p(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,i,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return p(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=bn(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&_i(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function le(n){return x(n)}class Ut{constructor(e){this.auth=e,this.observer=null,this.addObserver=ei(t=>this.observer=t)}get next(){return p(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ze={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function zi(n){ze=n}function kn(n){return ze.loadJS(n)}function Hi(){return ze.recaptchaEnterpriseScript}function Wi(){return ze.gapiScript}function qi(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const Ki="recaptcha-enterprise",Gi="NO_RECAPTCHA";class Ji{constructor(e){this.type=Ki,this.auth=le(e)}async verify(e="verify",t=!1){async function i(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{Si(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new Ci(l);return r.tenantId==null?r._agentRecaptchaConfig=u:r._tenantRecaptchaConfigs[r.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function s(r,o,a){const l=window.grecaptcha;Lt(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(u=>{o(u)}).catch(()=>{o(Gi)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{i(this.auth).then(a=>{if(!t&&Lt(window.grecaptcha))s(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Hi();l.length!==0&&(l+=a),kn(l).then(()=>{s(a,r,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function jt(n,e,t,i=!1){const s=new Ji(n);let r;try{r=await s.verify(t)}catch{r=await s.verify(t,!0)}const o=Object.assign({},e);return i?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Ft(n,e,t,i){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await jt(n,e,t,t==="getOobCode");return i(n,r)}else return i(n,e).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await jt(n,e,t,t==="getOobCode");return i(n,o)}else return Promise.reject(r)})}/**
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
 */function Yi(n,e){const t=en(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(ii(r,e??{}))return s;S(s,"already-initialized")}return t.initialize({options:e})}function Xi(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(M);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function Qi(n,e,t){const i=le(n);p(i._canInitEmulator,i,"emulator-config-failed"),p(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!!(t!=null&&t.disableWarnings),r=In(e),{host:o,port:a}=Zi(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||es()}function In(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Zi(n){const e=In(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Vt(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:Vt(o)}}}function Vt(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function es(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class pt{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return L("not implemented")}_getIdTokenResponse(e){return L("not implemented")}_linkToIdToken(e,t){return L("not implemented")}_getReauthenticationResolver(e){return L("not implemented")}}async function ts(n,e){return K(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function ns(n,e){return Be(n,"POST","/v1/accounts:signInWithPassword",ee(n,e))}/**
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
 */async function is(n,e){return Be(n,"POST","/v1/accounts:signInWithEmailLink",ee(n,e))}async function ss(n,e){return Be(n,"POST","/v1/accounts:signInWithEmailLink",ee(n,e))}/**
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
 */class ye extends pt{constructor(e,t,i,s=null){super("password",i),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new ye(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new ye(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ft(e,t,"signInWithPassword",ns);case"emailLink":return is(e,{email:this._email,oobCode:this._password});default:S(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ft(e,i,"signUpPassword",ts);case"emailLink":return ss(e,{idToken:t,email:this._email,oobCode:this._password});default:S(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function oe(n,e){return Be(n,"POST","/v1/accounts:signInWithIdp",ee(n,e))}/**
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
 */const rs="http://localhost";class Z extends pt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Z(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):S("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=t,r=lt(t,["providerId","signInMethod"]);if(!i||!s)return null;const o=new Z(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return oe(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,oe(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,oe(e,t)}buildRequest(){const e={requestUri:rs,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=be(t)}return e}}/**
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
 */function os(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function as(n){const e=fe(pe(n)).link,t=e?fe(pe(e)).deep_link_id:null,i=fe(pe(n)).deep_link_id;return(i?fe(pe(i)).link:null)||i||t||e||n}class mt{constructor(e){var t,i,s,r,o,a;const l=fe(pe(e)),u=(t=l.apiKey)!==null&&t!==void 0?t:null,h=(i=l.oobCode)!==null&&i!==void 0?i:null,d=os((s=l.mode)!==null&&s!==void 0?s:null);p(u&&h&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=h,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=as(e);try{return new mt(t)}catch{return null}}}/**
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
 */class de{constructor(){this.providerId=de.PROVIDER_ID}static credential(e,t){return ye._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=mt.parseLink(t);return p(i,"argument-error"),ye._fromEmailAndCode(e,i.code,i.tenantId)}}de.PROVIDER_ID="password";de.EMAIL_PASSWORD_SIGN_IN_METHOD="password";de.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Tn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ie extends Tn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class j extends Ie{constructor(){super("facebook.com")}static credential(e){return Z._fromParams({providerId:j.PROVIDER_ID,signInMethod:j.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return j.credentialFromTaggedObject(e)}static credentialFromError(e){return j.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return j.credential(e.oauthAccessToken)}catch{return null}}}j.FACEBOOK_SIGN_IN_METHOD="facebook.com";j.PROVIDER_ID="facebook.com";/**
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
 */class F extends Ie{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Z._fromParams({providerId:F.PROVIDER_ID,signInMethod:F.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return F.credentialFromTaggedObject(e)}static credentialFromError(e){return F.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return F.credential(t,i)}catch{return null}}}F.GOOGLE_SIGN_IN_METHOD="google.com";F.PROVIDER_ID="google.com";/**
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
 */class V extends Ie{constructor(){super("github.com")}static credential(e){return Z._fromParams({providerId:V.PROVIDER_ID,signInMethod:V.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return V.credentialFromTaggedObject(e)}static credentialFromError(e){return V.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return V.credential(e.oauthAccessToken)}catch{return null}}}V.GITHUB_SIGN_IN_METHOD="github.com";V.PROVIDER_ID="github.com";/**
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
 */class $ extends Ie{constructor(){super("twitter.com")}static credential(e,t){return Z._fromParams({providerId:$.PROVIDER_ID,signInMethod:$.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return $.credentialFromTaggedObject(e)}static credentialFromError(e){return $.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return $.credential(t,i)}catch{return null}}}$.TWITTER_SIGN_IN_METHOD="twitter.com";$.PROVIDER_ID="twitter.com";/**
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
 */class ae{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await N._fromIdTokenResponse(e,i,s),o=$t(i);return new ae({user:r,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=$t(i);return new ae({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function $t(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class je extends ct{constructor(e,t,i,s){var r;super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,je.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new je(e,t,i,s)}}function En(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?je._fromErrorAndOperation(n,r,e,i):r})}async function cs(n,e,t=!1){const i=await _e(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ae._forOperation(n,"link",i)}/**
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
 */async function ls(n,e,t=!1){const{auth:i}=n;if(O(i.app))return Promise.reject(W(i));const s="reauthenticate";try{const r=await _e(n,En(i,s,e,n),t);p(r.idToken,i,"internal-error");const o=ht(r.idToken);p(o,i,"internal-error");const{sub:a}=o;return p(n.uid===a,i,"user-mismatch"),ae._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&S(i,"user-mismatch"),r}}/**
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
 */async function Cn(n,e,t=!1){if(O(n.app))return Promise.reject(W(n));const i="signIn",s=await En(n,i,e),r=await ae._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}async function ds(n,e){return Cn(le(n),e)}/**
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
 */async function us(n){const e=le(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function hs(n,e,t){return O(n.app)?Promise.reject(W(n)):ds(x(n),de.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&us(n),i})}function fs(n,e,t,i){return x(n).onIdTokenChanged(e,t,i)}function ps(n,e,t){return x(n).beforeAuthStateChanged(e,t)}function Sn(n,e,t,i){return x(n).onAuthStateChanged(e,t,i)}function ms(n){return x(n).signOut()}const Fe="__sak";/**
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
 */class An{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Fe,"1"),this.storage.removeItem(Fe),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const gs=1e3,vs=10;class Pn extends An{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=wn(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);Ui()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,vs):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},gs)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Pn.type="LOCAL";const _s=Pn;/**
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
 */class Rn extends An{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Rn.type="SESSION";const On=Rn;/**
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
 */function ys(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class He{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new He(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async u=>u(t.origin,r)),l=await ys(a);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}He.receivers=[];/**
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
 */function gt(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class ws{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const u=gt("",20);s.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(d){const g=d;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(h),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(g.data.response);break;default:clearTimeout(h),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function P(){return window}function bs(n){P().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(){return typeof P().WorkerGlobalScope<"u"&&typeof P().importScripts=="function"}async function ks(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Is(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Ts(){return Ln()?self:null}/**
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
 */const Nn="firebaseLocalStorageDb",Es=1,Ve="firebaseLocalStorage",Mn="fbase_key";class Te{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function We(n,e){return n.transaction([Ve],e?"readwrite":"readonly").objectStore(Ve)}function Cs(){const n=indexedDB.deleteDatabase(Nn);return new Te(n).toPromise()}function ot(){const n=indexedDB.open(Nn,Es);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Ve,{keyPath:Mn})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Ve)?e(i):(i.close(),await Cs(),e(await ot()))})})}async function Bt(n,e,t){const i=We(n,!0).put({[Mn]:e,value:t});return new Te(i).toPromise()}async function Ss(n,e){const t=We(n,!1).get(e),i=await new Te(t).toPromise();return i===void 0?null:i.value}function zt(n,e){const t=We(n,!0).delete(e);return new Te(t).toPromise()}const As=800,Ps=3;class Dn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ot(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>Ps)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ln()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=He._getInstance(Ts()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await ks(),!this.activeServiceWorker)return;this.sender=new ws(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Is()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ot();return await Bt(e,Fe,"1"),await zt(e,Fe),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Bt(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>Ss(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>zt(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=We(s,!1).getAll();return new Te(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),As)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Dn.type="LOCAL";const Rs=Dn;new ke(3e4,6e4);/**
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
 */function Os(n,e){return e?M(e):(p(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class vt extends pt{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return oe(e,this._buildIdpRequest())}_linkToIdToken(e,t){return oe(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return oe(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Ls(n){return Cn(n.auth,new vt(n),n.bypassAuthState)}function Ns(n){const{auth:e,user:t}=n;return p(t,e,"internal-error"),ls(t,new vt(n),n.bypassAuthState)}async function Ms(n){const{auth:e,user:t}=n;return p(t,e,"internal-error"),cs(t,new vt(n),n.bypassAuthState)}/**
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
 */class xn{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ls;case"linkViaPopup":case"linkViaRedirect":return Ms;case"reauthViaPopup":case"reauthViaRedirect":return Ns;default:S(this.auth,"internal-error")}}resolve(e){D(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){D(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Ds=new ke(2e3,1e4);class ne extends xn{constructor(e,t,i,s,r){super(e,t,s,r),this.provider=i,this.authWindow=null,this.pollId=null,ne.currentPopupAction&&ne.currentPopupAction.cancel(),ne.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return p(e,this.auth,"internal-error"),e}async onExecution(){D(this.filter.length===1,"Popup operations only handle one event");const e=gt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(A(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(A(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ne.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(A(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ds.get())};e()}}ne.currentPopupAction=null;/**
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
 */const xs="pendingRedirect",Ne=new Map;class Us extends xn{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Ne.get(this.auth._key());if(!e){try{const i=await js(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Ne.set(this.auth._key(),e)}return this.bypassAuthState||Ne.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function js(n,e){const t=$s(e),i=Vs(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function Fs(n,e){Ne.set(n._key(),e)}function Vs(n){return M(n._redirectPersistence)}function $s(n){return Le(xs,n.config.apiKey,n.name)}async function Bs(n,e,t=!1){if(O(n.app))return Promise.reject(W(n));const i=le(n),s=Os(i,e),o=await new Us(i,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
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
 */const zs=10*60*1e3;class Hs{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ws(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Un(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(A(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=zs&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ht(e))}saveEventToCache(e){this.cachedEventUids.add(Ht(e)),this.lastProcessedEventTime=Date.now()}}function Ht(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Un({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ws(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Un(n);default:return!1}}/**
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
 */async function qs(n,e={}){return K(n,"GET","/v1/projects",e)}/**
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
 */const Ks=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Gs=/^https?/;async function Js(n){if(n.config.emulator)return;const{authorizedDomains:e}=await qs(n);for(const t of e)try{if(Ys(t))return}catch{}S(n,"unauthorized-domain")}function Ys(n){const e=st(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!Gs.test(t))return!1;if(Ks.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xs=new ke(3e4,6e4);function Wt(){const n=P().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Qs(n){return new Promise((e,t)=>{var i,s,r;function o(){Wt(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Wt(),t(A(n,"network-request-failed"))},timeout:Xs.get()})}if(!((s=(i=P().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=P().gapi)===null||r===void 0)&&r.load)o();else{const a=qi("iframefcb");return P()[a]=()=>{gapi.load?o():t(A(n,"network-request-failed"))},kn(`${Wi()}?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw Me=null,e})}let Me=null;function Zs(n){return Me=Me||Qs(n),Me}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er=new ke(5e3,15e3),tr="__/auth/iframe",nr="emulator/auth/iframe",ir={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},sr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function rr(n){const e=n.config;p(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ut(e,nr):`https://${n.config.authDomain}/${tr}`,i={apiKey:e.apiKey,appName:n.name,v:we},s=sr.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${be(i).slice(1)}`}async function or(n){const e=await Zs(n),t=P().gapi;return p(t,n,"internal-error"),e.open({where:document.body,url:rr(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ir,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=A(n,"network-request-failed"),a=P().setTimeout(()=>{r(o)},er.get());function l(){P().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},cr=500,lr=600,dr="_blank",ur="http://localhost";class qt{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function hr(n,e,t,i=cr,s=lr){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},ar),{width:i.toString(),height:s.toString(),top:r,left:o}),u=C().toLowerCase();t&&(a=mn(u)?dr:t),fn(u)&&(e=e||ur,l.scrollbars="yes");const h=Object.entries(l).reduce((g,[_,y])=>`${g}${_}=${y},`,"");if(xi(u)&&a!=="_self")return fr(e||"",a),new qt(null);const d=window.open(e||"",a,h);p(d,n,"popup-blocked");try{d.focus()}catch{}return new qt(d)}function fr(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const pr="__/auth/handler",mr="emulator/auth/handler",gr=encodeURIComponent("fac");async function Kt(n,e,t,i,s,r){p(n.config.authDomain,n,"auth-domain-config-required"),p(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:we,eventId:s};if(e instanceof Tn){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",ci(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries(r||{}))o[h]=d}if(e instanceof Ie){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await n._getAppCheckToken(),u=l?`#${gr}=${encodeURIComponent(l)}`:"";return`${vr(n)}?${be(a).slice(1)}${u}`}function vr({config:n}){return n.emulator?ut(n,mr):`https://${n.authDomain}/${pr}`}/**
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
 */const nt="webStorageSupport";class _r{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=On,this._completeRedirectFn=Bs,this._overrideRedirectResult=Fs}async _openPopup(e,t,i,s){var r;D((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Kt(e,t,i,st(),s);return hr(e,o,gt())}async _openRedirect(e,t,i,s){await this._originValidation(e);const r=await Kt(e,t,i,st(),s);return bs(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(D(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await or(e),i=new Hs(e);return t.register("authEvent",s=>(p(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(nt,{type:nt},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[nt];o!==void 0&&t(!!o),S(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Js(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return wn()||pn()||ft()}}const yr=_r;var Gt="@firebase/auth",Jt="1.7.9";/**
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
 */class wr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){p(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function br(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function kr(n){St(new At("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;p(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:bn(n)},u=new Bi(i,s,r,l);return Xi(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),St(new At("auth-internal",e=>{const t=le(e.getProvider("auth").getImmediate());return(i=>new wr(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pt(Gt,Jt,br(n)),Pt(Gt,Jt,"esm2017")}/**
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
 */const Ir=5*60,Tr=Zt("authIdTokenMaxAge")||Ir;let Yt=null;const Er=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>Tr)return;const s=t==null?void 0:t.token;Yt!==s&&(Yt=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function De(n=ni()){const e=en(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Yi(n,{popupRedirectResolver:yr,persistence:[Rs,_s,On]}),i=Zt("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(i,location.origin);if(location.origin===r.origin){const o=Er(r.toString());ps(t,o,()=>o(t.currentUser)),fs(t,a=>o(a))}}const s=ti("auth");return s&&Qi(t,`http://${s}`),t}function Cr(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}zi({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=A("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",Cr().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});kr("Browser");const Sr={durations:{fast:150,normal:300,slow:500,slower:750},easing:{ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",smooth:"cubic-bezier(0.16, 1, 0.3, 1)",bounce:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"}},Ar=(n,e)=>{const t=n.getBoundingClientRect(),i=Math.max(t.width,t.height),s=e.clientX-t.left-i/2,r=e.clientY-t.top-i/2,o=document.createElement("span");o.style.cssText=`
    position: absolute;
    width: ${i}px;
    height: ${i}px;
    left: ${s}px;
    top: ${r}px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    transform: scale(0);
    animation: ripple 0.6s ease-out;
    pointer-events: none;
  `,n.appendChild(o),setTimeout(()=>{o.parentNode&&o.parentNode.removeChild(o)},600)},Pr=(n,e=100)=>{n.forEach((t,i)=>{setTimeout(()=>{t.classList.add("animate-in")},i*e)})};function Rr(){const n=w(!1),e=w("idle"),t=(o,a)=>{const l=new IntersectionObserver(u=>{u.forEach(h=>{h.isIntersecting&&a(h.target)})},{threshold:.1,rootMargin:"50px"});return o&&l.observe(o),l};return{isVisible:n,animationState:e,animationConfig:Sr,observeElement:t,animateOnScroll:o=>{o&&t(o,a=>{a.classList.add("animate-in")})},animateList:(o,a=100)=>{if(!o.value)return;const l=o.value.querySelectorAll(".animate-item");Pr(Array.from(l),a)},addRippleEffect:o=>{const a=o.currentTarget;Ar(a,o)}}}const T=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},Or={name:"LoadingSpinner",props:{size:{type:String,default:"medium",validator:n=>["small","medium","large"].includes(n)},color:{type:String,default:"primary"}},setup(n){const e={small:"1rem",medium:"1.5rem",large:"2rem"},t={primary:"#3B82F6",secondary:"#64748B",white:"#FFFFFF",dark:"#1E293B"},i=ge(()=>["loading-spinner",`loading-spinner--${n.size}`]),s=ge(()=>({width:e[n.size],height:e[n.size],borderTopColor:t[n.color]||n.color}));return{spinnerClasses:i,spinnerStyle:s}}};function Lr(n,e,t,i,s,r){return f(),m("div",{class:Y(i.spinnerClasses),style:$e(i.spinnerStyle)},e[0]||(e[0]=[c("div",{class:"spinner-circle"},null,-1)]),6)}const Nr=T(Or,[["render",Lr],["__scopeId","data-v-3577c9dd"]]);const Mr={name:"BaseButton",components:{LoadingSpinner:Nr},inheritAttrs:!1,props:{variant:{type:String,default:"primary",validator:n=>["primary","secondary","outline","text","danger"].includes(n)},size:{type:String,default:"medium",validator:n=>["small","medium","large"].includes(n)},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},fullWidth:{type:Boolean,default:!1}},emits:["click"],setup(n,{emit:e}){const{addRippleEffect:t}=Rr(),i=w(null);return{buttonClasses:ge(()=>["base-button",`base-button--${n.variant}`,`base-button--${n.size}`,{"base-button--disabled":n.disabled,"base-button--loading":n.loading,"base-button--full-width":n.fullWidth}]),handleClick:o=>{!n.disabled&&!n.loading&&(t(o),e("click",o))},rippleContainer:i}}},Dr=["disabled"],xr={class:"button-content"},Ur={class:"button-ripple",ref:"rippleContainer"};function jr(n,e,t,i,s,r){const o=E("LoadingSpinner");return f(),m("button",zn({class:i.buttonClasses,disabled:t.disabled||t.loading,onClick:e[0]||(e[0]=(...a)=>i.handleClick&&i.handleClick(...a))},n.$attrs),[c("div",xr,[t.loading?(f(),ve(o,{key:0,size:"small"})):Ae(n.$slots,"default",{key:1},void 0,!0)]),c("div",Ur,null,512)],16,Dr)}const qe=T(Mr,[["render",jr],["__scopeId","data-v-c0da8657"]]);function te(){const n=async(r,o)=>{try{const a=nn();await Pe(G(a,r),{...o,timestamp:Re()})}catch(a){console.error(`Error writing to Firestore collection '${r}':`,a)}},e=async()=>{try{return(await(await fetch("https://api.ipify.org?format=json")).json()).ip}catch(r){return console.error("Failed to fetch IP:",r),"unknown"}};return{trackPageView:async r=>{const o=await e(),a={page:r,url:window.location.href,ip:o};n("page_views",a)},trackInteraction:(r,o,a={})=>{const l={type:r,element:o,...a};n("user_interactions",l)},trackVisitorSession:()=>{const r={sessionStart:new Date().toISOString(),userAgent:navigator.userAgent,language:navigator.language,platform:navigator.platform,screenResolution:`${window.screen.width}x${window.screen.height}`,referrer:document.referrer||"direct",timezone:Intl.DateTimeFormat().resolvedOptions().timeZone};n("visitor_sessions",r)}}}const Fr="/assets/1-91ca4758.jpg";const Vr={name:"Home",components:{BaseButton:qe},emits:["show-overlay"],setup(){const{trackPageView:n}=te(),e=i=>{const s=Math.random()*100,r=Math.random()*100,o=10+Math.random()*20,a=Math.random()*5,l=2+Math.random()*3;return{left:`${s}%`,top:`${r}%`,width:`${l}px`,height:`${l}px`,animationDuration:`${o}s`,animationDelay:`${a}s`}},t=()=>{window.scrollTo({top:window.innerHeight,behavior:"smooth"})};return q(()=>{n("home")}),{getParticleStyle:e,scrollToContent:t}}},$r={class:"homepage"},Br={class:"hero"},zr={class:"hero-container"},Hr={class:"hero-content"},Wr={class:"hero-buttons"};function qr(n,e,t,i,s,r){const o=E("BaseButton");return f(),m("main",$r,[c("section",Br,[c("div",zr,[c("div",Hr,[e[5]||(e[5]=H('<div class="greeting-pill" data-v-bd3e337c><span class="wave" data-v-bd3e337c>👋</span><span data-v-bd3e337c>Hello, I&#39;m</span></div><h1 class="hero-title" data-v-bd3e337c> Tinendra <span class="text-gradient" data-v-bd3e337c>Kandula</span></h1><div class="typing-container" data-v-bd3e337c><span class="typing-text" data-v-bd3e337c>Machine Learning Engineer</span></div><div class="specialization-tags" data-v-bd3e337c><span class="spec-tag" data-v-bd3e337c>Generative AI</span><span class="spec-tag" data-v-bd3e337c>Multi-modal Learning</span><span class="spec-tag" data-v-bd3e337c>NLP</span></div><p class="hero-description" data-v-bd3e337c> Building intelligent systems that solve real-world problems with scalable cloud solutions. Passionate about pushing the boundaries of AI and machine learning. </p>',5)),c("div",Wr,[b(o,{variant:"primary",size:"large",class:"glow-button",onClick:e[0]||(e[0]=a=>n.$emit("show-overlay","Projects"))},{default:k(()=>e[3]||(e[3]=[R(" View Projects ",-1),c("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[c("path",{d:"M5 12h14M12 5l7 7-7 7",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])),_:1,__:[3]}),b(o,{variant:"outline",size:"large",onClick:e[1]||(e[1]=a=>n.$emit("show-overlay","Resume"))},{default:k(()=>e[4]||(e[4]=[R(" Resume ",-1)])),_:1,__:[4]})]),e[6]||(e[6]=H('<div class="social-links" data-v-bd3e337c><a href="https://github.com/Tinendrakumar" target="_blank" class="social-icon" aria-label="GitHub" data-v-bd3e337c><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-bd3e337c><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" data-v-bd3e337c></path></svg></a><a href="https://www.linkedin.com/in/tinendra-kumar/" target="_blank" class="social-icon" aria-label="LinkedIn" data-v-bd3e337c><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-bd3e337c><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" data-v-bd3e337c></path><rect x="2" y="9" width="4" height="12" data-v-bd3e337c></rect><circle cx="4" cy="4" r="2" data-v-bd3e337c></circle></svg></a><a href="mailto:tinendra.kandula@gmail.com" class="social-icon" aria-label="Email" data-v-bd3e337c><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-bd3e337c><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" data-v-bd3e337c></path><polyline points="22,6 12,13 2,6" data-v-bd3e337c></polyline></svg></a></div>',1))]),e[7]||(e[7]=H('<div class="hero-visual" data-v-bd3e337c><div class="profile-card" data-v-bd3e337c><div class="profile-image-container" data-v-bd3e337c><img src="'+Fr+'" alt="Tinendra Kandula" class="profile-img" data-v-bd3e337c><div class="profile-glow" data-v-bd3e337c></div><div class="profile-ring" data-v-bd3e337c></div></div><div class="tech-stack-orbit" data-v-bd3e337c><div class="orbit-item item-1" data-v-bd3e337c><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" data-v-bd3e337c></div><div class="orbit-item item-2" data-v-bd3e337c><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" alt="TensorFlow" data-v-bd3e337c></div><div class="orbit-item item-3" data-v-bd3e337c><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" alt="PyTorch" data-v-bd3e337c></div><div class="orbit-item item-4" data-v-bd3e337c><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" data-v-bd3e337c></div></div></div></div>',1))]),c("div",{class:"scroll-indicator",onClick:e[2]||(e[2]=(...a)=>i.scrollToContent&&i.scrollToContent(...a))},e[8]||(e[8]=[c("div",{class:"mouse"},[c("div",{class:"wheel"})],-1),c("span",null,"Scroll to explore",-1)]))])])}const Kr=T(Vr,[["render",qr],["__scopeId","data-v-bd3e337c"]]),Gr=[{path:"/",name:"Home",component:Kr},{path:"/admin",name:"AdminDashboard",component:()=>gi(()=>import("./AdminDashboard-af61d3c1.js"),["assets/AdminDashboard-af61d3c1.js","assets/vendor-5699d02f.js","assets/firebase-76932c27.js","assets/AdminDashboard-86a96473.css"]),meta:{requiresAuth:!0}}],jn=Hn({history:Wn("/"),routes:Gr}),Jr=()=>new Promise((n,e)=>{const t=Sn(De(),i=>{t(),n(i)},e)});jn.beforeEach(async(n,e,t)=>{n.meta.requiresAuth?await Jr()?t():(alert("You do not have access to this page. Please log in as an admin."),t("/")):t()});const Yr={name:"ThemeToggle",setup(){const n=w(!1),e=()=>{const s=localStorage.getItem("theme");s?n.value=s==="dark":n.value=window.matchMedia("(prefers-color-scheme: dark)").matches,t()},t=()=>{n.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},i=()=>{n.value=!n.value,localStorage.setItem("theme",n.value?"dark":"light"),t()};return Xt(n,()=>{t()}),q(()=>{e()}),{isDark:n,toggleTheme:i}}},Xr=["aria-label","title"],Qr={key:"moon",class:"theme-icon",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Zr={key:"sun",class:"theme-icon",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"};function eo(n,e,t,i,s,r){return f(),m("button",{onClick:e[0]||(e[0]=ce((...o)=>i.toggleTheme&&i.toggleTheme(...o),["stop"])),class:"theme-toggle","aria-label":i.isDark?"Switch to light mode":"Switch to dark mode",title:i.isDark?"Switch to light mode":"Switch to dark mode"},[b(ie,{name:"icon-fade",mode:"out-in"},{default:k(()=>[i.isDark?(f(),m("svg",Qr,e[1]||(e[1]=[c("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)]))):(f(),m("svg",Zr,e[2]||(e[2]=[c("circle",{cx:"12",cy:"12",r:"5",stroke:"currentColor","stroke-width":"2"},null,-1),c("line",{x1:"12",y1:"1",x2:"12",y2:"3",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"},null,-1),c("line",{x1:"12",y1:"21",x2:"12",y2:"23",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"},null,-1),c("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"},null,-1),c("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"},null,-1),c("line",{x1:"1",y1:"12",x2:"3",y2:"12",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"},null,-1),c("line",{x1:"21",y1:"12",x2:"23",y2:"12",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"},null,-1),c("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"},null,-1),c("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"},null,-1)])))]),_:1})],8,Xr)}const to=T(Yr,[["render",eo],["__scopeId","data-v-a8d8ebce"]]);const no={name:"Navbar",components:{ThemeToggle:to},emits:["show-overlay"],data(){return{navItems:[{name:"ABOUT ME",route:"About"},{name:"RESUME",route:"Resume"},{name:"PROJECTS",route:"Projects"},{name:"CONTACT",route:"Contact"}]}}},io={class:"navbar",role:"navigation","aria-label":"Main navigation"},so={class:"nav-container"},ro={class:"nav-brand"},oo={class:"nav-right"},ao={class:"nav-menu"},co=["onClick"],lo={class:"nav-text"};function uo(n,e,t,i,s,r){const o=E("router-link"),a=E("ThemeToggle");return f(),m("nav",io,[c("div",so,[c("div",ro,[b(o,{to:"/",class:"brand-text"},{default:k(()=>e[0]||(e[0]=[R(" Tinendra Kandula ",-1)])),_:1,__:[0]}),e[1]||(e[1]=c("div",{class:"brand-underline"},null,-1))]),c("div",oo,[c("ul",ao,[(f(!0),m(B,null,z(s.navItems,l=>(f(),m("li",{key:l.name},[c("a",{href:"#",class:"nav-link",onClick:ce(u=>n.$emit("show-overlay",l.route),["prevent"])},[c("span",lo,v(l.name),1),e[2]||(e[2]=c("div",{class:"nav-hover-effect"},null,-1))],8,co)]))),128))]),b(a)])])])}const ho=T(no,[["render",uo],["__scopeId","data-v-ebcb037d"]]);const fo={name:"Footer",emits:["admin-access"],setup(){const n=w(!1),e=w(0);let t=null;return{showAdminButton:n,handleAdminClick:()=>{e.value++,t&&clearTimeout(t),t=setTimeout(()=>{e.value=0},1500),e.value>=3&&(n.value=!0,e.value=0,clearTimeout(t))}}}},po={class:"site-footer"},mo={class:"footer-container"},go={class:"footer-content"};function vo(n,e,t,i,s,r){return f(),m("footer",po,[c("div",mo,[c("div",go,[e[4]||(e[4]=H('<div class="footer-section contact-details" data-v-f1de6654><div class="contact-item" data-v-f1de6654><span class="contact-label" data-v-f1de6654>Call</span><a href="tel:+15551234567" class="contact-value" data-v-f1de6654>+1 (857) 209-8105</a></div><div class="contact-item" data-v-f1de6654><span class="contact-label" data-v-f1de6654>Write</span><a href="mailto:tinendra.kandula@gmail.com" class="contact-value" data-v-f1de6654>tinendra.kandula@gmail.com</a></div><div class="contact-item" data-v-f1de6654><span class="contact-label" data-v-f1de6654>Follow</span><div class="social-links" data-v-f1de6654><a href="https://www.linkedin.com/in/tinendra-kumar/" class="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" data-v-f1de6654><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" data-v-f1de6654><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" data-v-f1de6654></path></svg></a><a href="https://x.com/TinendraKumar/" class="social-link" aria-label="Twitter" target="_blank" rel="noopener noreferrer" data-v-f1de6654><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" data-v-f1de6654><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" data-v-f1de6654></path></svg></a><a href="https://www.instagram.com/tinendra_kumar/" class="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer" data-v-f1de6654><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" data-v-f1de6654><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" data-v-f1de6654></path></svg></a></div></div></div>',1)),c("div",{class:"footer-section copyright",onClick:e[1]||(e[1]=(...o)=>i.handleAdminClick&&i.handleAdminClick(...o))},[e[2]||(e[2]=c("p",null,"© 2025 by Tinendra Kandula.",-1)),e[3]||(e[3]=c("p",null,"Powered and secured by Firebase",-1)),b(ie,{name:"fade"},{default:k(()=>[i.showAdminButton?(f(),m("button",{key:0,class:"admin-button",onClick:e[0]||(e[0]=ce(o=>n.$emit("admin-access"),["stop"]))}," Admin Panel ")):I("",!0)]),_:1})])])])])}const _o=T(fo,[["render",vo],["__scopeId","data-v-f1de6654"]]);const yo={name:"BaseModal",props:{modelValue:{type:Boolean,default:!1},title:{type:String,default:""},size:{type:String,default:"medium",validator:n=>["small","medium","large","full"].includes(n)},showCloseButton:{type:Boolean,default:!0},closeOnOverlay:{type:Boolean,default:!0},closeOnEscape:{type:Boolean,default:!0}},emits:["update:modelValue","close"],setup(n,{emit:e}){const t=ge(()=>[`modal-container--${n.size}`]),i=()=>{e("update:modelValue",!1),e("close")},s=()=>{n.closeOnOverlay&&i()},r=a=>{n.closeOnEscape&&a.key==="Escape"&&i()},o=a=>{document.body.style.overflow=a?"hidden":""};return Xt(()=>n.modelValue,a=>{o(a)}),q(()=>{n.closeOnEscape&&document.addEventListener("keydown",r),n.modelValue&&o(!0)}),Qt(()=>{document.removeEventListener("keydown",r),o(!1)}),{containerClasses:t,close:i,handleOverlayClick:s}}},wo={key:0,class:"modal-header"},bo={key:0,class:"modal-title"},ko={class:"modal-body"},Io={key:1,class:"modal-footer"};function To(n,e,t,i,s,r){return f(),ve(qn,{to:"body"},[b(ie,{name:"modal",appear:""},{default:k(()=>[t.modelValue?(f(),m("div",{key:0,class:"modal-overlay",onClick:e[2]||(e[2]=(...o)=>i.handleOverlayClick&&i.handleOverlayClick(...o))},[c("div",{class:Y(["modal-container",i.containerClasses]),onClick:e[1]||(e[1]=ce(()=>{},["stop"]))},[n.$slots.header||t.showCloseButton?(f(),m("div",wo,[Ae(n.$slots,"header",{},()=>[t.title?(f(),m("h3",bo,v(t.title),1)):I("",!0)],!0),t.showCloseButton?(f(),m("button",{key:0,class:"modal-close",onClick:e[0]||(e[0]=(...o)=>i.close&&i.close(...o)),"aria-label":"Close modal"},e[3]||(e[3]=[c("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[c("path",{d:"M18 6L6 18M6 6L18 18",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)]))):I("",!0)])):I("",!0),c("div",ko,[Ae(n.$slots,"default",{},void 0,!0)]),n.$slots.footer?(f(),m("div",Io,[Ae(n.$slots,"footer",{},void 0,!0)])):I("",!0)],2)])):I("",!0)]),_:3})])}const Eo=T(yo,[["render",To],["__scopeId","data-v-818d05c0"]]);const Co={name:"About",emits:["close"],setup(){const{trackPageView:n}=te();return q(()=>{n("about")}),{}}},So={class:"overlay-page about-page"},Ao={class:"overlay-content"},Po={class:"overlay-header"};function Ro(n,e,t,i,s,r){return f(),m("div",So,[c("div",Ao,[c("div",Po,[e[2]||(e[2]=c("h1",{class:"overlay-title"},[c("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[c("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2",stroke:"currentColor","stroke-width":"2"}),c("circle",{cx:"12",cy:"7",r:"4",stroke:"currentColor","stroke-width":"2"})]),R(" 👨‍💻 About Me ")],-1)),c("button",{class:"overlay-close",onClick:e[0]||(e[0]=o=>n.$emit("close")),"aria-label":"Close overlay"},e[1]||(e[1]=[c("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[c("path",{d:"M18 6L6 18M6 6L18 18",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)]))]),e[3]||(e[3]=H('<div class="about-content" data-v-fe62d814><div class="about-intro" data-v-fe62d814><h2 data-v-fe62d814>Machine Learning Engineer</h2><p data-v-fe62d814> I&#39;m Tinendra Kandula, a passionate Machine Learning Engineer with extensive experience in designing and deploying advanced AI systems. My expertise lies in Generative AI, multi‑modal learning, and NLP, with a strong focus on AWS/SageMaker. </p></div><div class="about-sections" data-v-fe62d814><div class="about-section" data-v-fe62d814><h3 data-v-fe62d814>🚀 My Journey</h3><p data-v-fe62d814> My career in Machine Learning began with a fascination for bringing order to complex challenges. Over the years, I&#39;ve had the privilege of working with diverse teams across various industries, from research labs to established enterprises. </p></div><div class="about-section" data-v-fe62d814><h3 data-v-fe62d814>💡 Philosophy</h3><p data-v-fe62d814> I believe in the power of collaborative leadership and data-driven decision making. My approach combines strategic thinking with hands-on execution, ensuring projects not only meet their objectives but exceed expectations. </p></div><div class="about-section" data-v-fe62d814><h3 data-v-fe62d814>⚡ Specializations</h3><div class="specializations-grid" data-v-fe62d814><div class="specialization-card" data-v-fe62d814><div class="card-icon" data-v-fe62d814>🚀</div><h4 data-v-fe62d814>AI Research</h4><p data-v-fe62d814>Exploring cutting-edge AI technologies and methodologies</p></div><div class="specialization-card" data-v-fe62d814><div class="card-icon" data-v-fe62d814>☁️</div><h4 data-v-fe62d814>Cloud Computing</h4><p data-v-fe62d814>Leveraging cloud technologies for scalable AI solutions</p></div><div class="specialization-card" data-v-fe62d814><div class="card-icon" data-v-fe62d814>🤖</div><h4 data-v-fe62d814>Machine Learning</h4><p data-v-fe62d814>Designing and deploying ML models for real-world applications</p></div><div class="specialization-card" data-v-fe62d814><div class="card-icon" data-v-fe62d814>📊</div><h4 data-v-fe62d814>Data Strategy</h4><p data-v-fe62d814>Developing data-driven strategies for business growth</p></div></div></div><div class="about-section" data-v-fe62d814><h3 data-v-fe62d814>🎯 Beyond Work</h3><p data-v-fe62d814> When I&#39;m not immersed in the world of AI, I enjoy exploring the latest advancements in technology, reading about the intersection of AI and society, and engaging in community initiatives that promote innovation and education in machine learning. </p></div></div></div>',1))])])}const Oo=T(Co,[["render",Ro],["__scopeId","data-v-fe62d814"]]),Lo={apiKey:"AIzaSyBXMlgU7A517YZ1DuPf4bsFpHqkBUyMz0M",authDomain:"tini-portfolio.firebaseapp.com",projectId:"tini-portfolio",storageBucket:"tini-portfolio.firebasestorage.app",messagingSenderId:"983899171834",appId:"1:983899171834:web:00bc38223fe882e3db5243",measurementId:"G-2837ZHSZ97"};let ue,J,Fn,No;const Mo=()=>{try{return ue=li(Lo),J=nn(ue),Fn=di(ue),No=ui(ue),console.log("Firebase initialized successfully"),ue}catch(n){throw console.error("Firebase initialization error:",n),n}};function Vn(){const n=w(!1),e=w(null),t=async d=>{n.value=!0,e.value=null;try{const g=await a();return await Pe(G(J,"contact_submissions"),{...d,timestamp:Re(),visitor:g}),await l(d,g),{success:!0}}catch(g){return e.value=g.message,{success:!1,error:g.message}}finally{n.value=!1}},i=async()=>{n.value=!0,e.value=null;try{const d=Xe(G(J,"contact_submissions"),Qe("timestamp","desc"),Ze(50)),g=await et(d),_=[];return g.forEach(y=>{_.push({id:y.id,...y.data()})}),_}catch(d){return e.value=d.message,[]}finally{n.value=!1}},s=async()=>{try{const d=hi(Fn,"files/resume.pdf"),g=await fi(d);return await o("resume_download"),window.open(g,"_blank"),{success:!0}}catch(d){return e.value=d.message,{success:!1,error:d.message}}},r=async d=>{try{const g=await a();await Pe(G(J,"site_visitors"),{...d,...g,timestamp:Re()})}catch(g){console.error("Visitor tracking error:",g)}},o=async(d,g={})=>{try{await Pe(G(J,"site_analytics"),{event:d,data:g,timestamp:Re()})}catch(_){console.error("Event tracking error:",_)}},a=async()=>{try{const[d,g]=await Promise.all([fetch("https://api.ipify.org?format=json").catch(()=>null),fetch("https://ipapi.co/json/").catch(()=>null)]),_=d?await d.json():{ip:"unknown"},y=g?await g.json():{};return{ip:_.ip||"unknown",userAgent:navigator.userAgent,language:navigator.language,platform:navigator.platform,referrer:document.referrer||"direct",screenResolution:`${screen.width}x${screen.height}`,timezone:Intl.DateTimeFormat().resolvedOptions().timeZone,city:y.city||"unknown",country:y.country_name||"unknown"}}catch{return{ip:"unknown",userAgent:navigator.userAgent,language:navigator.language,platform:navigator.platform}}},l=async(d,g)=>{console.log("Email notification would be sent:",{to:"tinendra.kumar@gmail.com",subject:`New Portfolio Contact: ${d.subject}`,formData:d,visitorInfo:g})};return{loading:n,error:e,submitContact:t,getContactSubmissions:i,downloadResume:s,trackVisitor:r,trackEvent:o,getVisitorAnalytics:async()=>{n.value=!0,e.value=null;try{const d=Xe(G(J,"site_visitors"),Qe("timestamp","desc"),Ze(100)),g=await et(d),_=[];return g.forEach(y=>{_.push({id:y.id,...y.data()})}),console.log("Fetched visitors:",_),_}catch(d){return e.value=d.message,console.error("Error fetching visitors:",d),[]}finally{n.value=!1}},getPageViews:async()=>{n.value=!0,e.value=null;try{const d=Xe(G(J,"page_views"),Qe("timestamp","desc"),Ze(100)),g=await et(d),_=[];return g.forEach(y=>{_.push({id:y.id,...y.data()})}),console.log("Fetched page views:",_),_}catch(d){return e.value=d.message,console.error("Error fetching page views:",d),[]}finally{n.value=!1}}}}const Do={name:"Resume",components:{BaseButton:qe},emits:["close"],setup(){const{downloadResume:n}=Vn(),{trackPageView:e,trackInteraction:t}=te(),i=w(!1),s=[{period:"Aug 2025 - Present",position:"MLDOPS III",company:"Amazon",location:"Boston, MA",description:"Create and annotate high-quality, complex multimodal training data (text, image, video); Collaborate with scientists and engineers to refine guidelines and tooling; research and synthesize technical topics; and identify/report tooling bugs and suggest improvements to improve LLM training data quality."},{period:"May 2025 - Aug 2025",position:"AI Research Assistant",company:"Harvard Medical School - Brigham and Women's Hospital",location:"Cambridge, MA",description:"Conducted IVF-related research applying deep learning models for sperm classification and investigating bias in embryo grading; developed and evaluated ensemble methods to improve classification robustness and mitigate bias."},{period:"June 2024 - April 2025",position:"Machine Learning Engineer Consultant",company:"HighQuartile Consultancy Inc",location:"Remote",description:"Developed and deployed machine learning models for various clients, focusing on predictive analytics and data-driven decision-making. Collaborated with cross-functional teams to integrate ML solutions into existing systems."},{period:"June 2023 - May 2024",position:"AI Research Intern",company:"Harvard Medical School - Brigham and Women's Hospital",location:"Cambridge, MA",description:"Conducted research on AI applications in healthcare, focusing on improving diagnostic accuracy and patient outcomes. Assisted in developing machine learning models and analyzing clinical data."}],r={professional:["AI Research","Machine Learning","Data Analysis","Python","TensorFlow & PyTorch","Keras","Scikit-learn","Deep Learning","NLP","Computer Vision","Data Engineering","Cloud Computing","DevOps"],tools:["Jira & Confluence","Microsoft Project","Slack & Teams","Google Analytics","Tableau","AWS & Azure","Git & Version Control"]},o=[{title:"Master of Science in Computer Science",institution:"University of Massachusetts Lowell",year:"2024"},{title:"Master of Technology (M.Tech) in Communication Systems",institution:"SASTRA University, Thanjavur",year:"2022"},{title:"Bachelor of Technology (B.Tech) in Electronics and Communication Engineering",institution:"SASTRA University, Thanjavur",year:"2021"}],a=async()=>{i.value=!0,t("resume_download","button"),(await n()).success||alert("Resume download failed. Please try again."),i.value=!1};return q(()=>{e("resume")}),{experience:s,skills:r,education:o,downloading:i,downloadResume:a}}},xo={class:"overlay-page resume-page"},Uo={class:"overlay-content"},jo={class:"overlay-header"},Fo={class:"header-actions"},Vo={class:"resume-content"},$o={class:"experience-section"},Bo={class:"timeline"},zo={class:"timeline-date"},Ho={class:"timeline-content"},Wo={class:"job-details"},qo={class:"company"},Ko={class:"location"},Go={class:"skills-section"},Jo={class:"skills-grid"},Yo={class:"skill-category"},Xo={class:"skills-list"},Qo={class:"skill-category"},Zo={class:"skills-list"},ea={class:"education-section"},ta={class:"education-list"},na={class:"edu-institution"},ia={class:"edu-year"};function sa(n,e,t,i,s,r){const o=E("BaseButton");return f(),m("div",xo,[c("div",Uo,[c("div",jo,[e[3]||(e[3]=c("h1",{class:"overlay-title"},[c("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[c("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z",stroke:"currentColor","stroke-width":"2"}),c("polyline",{points:"14,2 14,8 20,8",stroke:"currentColor","stroke-width":"2"})]),R(" Resume ")],-1)),c("div",Fo,[b(o,{variant:"primary",onClick:i.downloadResume,loading:i.downloading},{default:k(()=>e[1]||(e[1]=[R(" Download CV ",-1)])),_:1,__:[1]},8,["onClick","loading"]),c("button",{class:"overlay-close",onClick:e[0]||(e[0]=a=>n.$emit("close")),"aria-label":"Close overlay"},e[2]||(e[2]=[c("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[c("path",{d:"M18 6L6 18M6 6L18 18",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)]))])]),c("div",Vo,[c("section",$o,[e[4]||(e[4]=c("h2",null,"💼 Experience",-1)),c("div",Bo,[(f(!0),m(B,null,z(i.experience,(a,l)=>(f(),m("div",{key:a.period,class:"timeline-item",style:$e({animationDelay:`${l*.1}s`})},[c("div",zo,v(a.period),1),c("div",Ho,[c("h3",null,v(a.position),1),c("div",Wo,[c("span",qo,v(a.company),1),c("span",Ko,v(a.location),1)]),c("p",null,v(a.description),1)])],4))),128))])]),c("section",Go,[e[7]||(e[7]=c("h2",null,"⚡ Professional Skills",-1)),c("div",Jo,[c("div",Yo,[e[5]||(e[5]=c("h3",null,"Core Competencies",-1)),c("div",Xo,[(f(!0),m(B,null,z(i.skills.professional,a=>(f(),m("span",{key:a,class:"skill-tag"},v(a),1))),128))])]),c("div",Qo,[e[6]||(e[6]=c("h3",null,"Tools & Technologies",-1)),c("div",Zo,[(f(!0),m(B,null,z(i.skills.tools,a=>(f(),m("span",{key:a,class:"skill-tag"},v(a),1))),128))])])])]),c("section",ea,[e[8]||(e[8]=c("h2",null,"🎓 Education & Certifications",-1)),c("div",ta,[(f(!0),m(B,null,z(i.education,a=>(f(),m("div",{key:a.title,class:"education-item"},[c("h4",null,v(a.title),1),c("p",na,v(a.institution),1),c("p",ia,v(a.year),1)]))),128))])])])])])}const ra=T(Do,[["render",sa],["__scopeId","data-v-de81ca5d"]]);const oa={name:"ProjectCard",props:{project:{type:Object,required:!0}},emits:["click"]},aa={class:"project-content"},ca={class:"project-header"},la={class:"project-title"},da={class:"project-role"},ua={class:"project-description"},ha={class:"project-meta"},fa={class:"project-technologies"},pa={class:"project-details"},ma={class:"project-detail"},ga={class:"detail-value"},va={class:"project-detail"},_a={class:"detail-value"},ya={key:0,class:"project-highlights"};function wa(n,e,t,i,s,r){return f(),m("div",{class:"project-card",onClick:e[0]||(e[0]=o=>n.$emit("click"))},[e[4]||(e[4]=H('<div class="project-image" data-v-8fe0068f><div class="project-placeholder" data-v-8fe0068f><svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-8fe0068f><rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor" stroke-width="2" data-v-8fe0068f></rect><circle cx="9" cy="9" r="2" stroke="currentColor" stroke-width="2" data-v-8fe0068f></circle><path d="M21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21" stroke="currentColor" stroke-width="2" data-v-8fe0068f></path></svg></div></div>',1)),c("div",aa,[c("div",ca,[c("h3",la,v(t.project.title),1),c("span",da,v(t.project.role),1)]),c("p",ua,v(t.project.description),1),c("div",ha,[c("div",fa,[(f(!0),m(B,null,z(t.project.technologies,o=>(f(),m("span",{key:o,class:"tech-tag"},v(o),1))),128))]),c("div",pa,[c("div",ma,[e[1]||(e[1]=c("span",{class:"detail-label"},"Duration:",-1)),c("span",ga,v(t.project.duration),1)]),c("div",va,[e[2]||(e[2]=c("span",{class:"detail-label"},"Team:",-1)),c("span",_a,v(t.project.teamSize),1)])])]),t.project.highlights?(f(),m("div",ya,[e[3]||(e[3]=c("h4",null,"Key Achievements:",-1)),c("ul",null,[(f(!0),m(B,null,z(t.project.highlights,o=>(f(),m("li",{key:o},v(o),1))),128))])])):I("",!0)]),e[5]||(e[5]=c("div",{class:"project-overlay"},[c("div",{class:"overlay-content"},[c("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[c("path",{d:"M7 17L17 7M17 7H7M17 7V17",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]),c("span",null,"View Project")])],-1))])}const ba=T(oa,[["render",wa],["__scopeId","data-v-8fe0068f"]]);const ka={name:"Projects",components:{ProjectCard:ba},emits:["close"],setup(){const{trackPageView:n,trackInteraction:e}=te(),t=w([{title:"WebApp for Car Decision Platform",role:"Full Stack Developer",description:"An interactive web application that helps users make informed decisions between buying and leasing a car. Features real-time calculations, comparison charts, and financial analysis.",technologies:["Vue.js","HTML","CSS","JavaScript"],duration:"2 months",teamSize:"Solo",highlights:["Interactive buy vs lease calculator","Real-time financial projections","Responsive design for all devices","Clean and intuitive user interface"],githubUrl:"https://github.com/Tinendrakumar/WebApp-for-Car-Decision-Platform",image:"/images/project1.jpg"},{title:"Smart Stick for Visually Impaired People",role:"ML Engineer",description:"An assistive technology project using computer vision to help visually impaired individuals navigate their environment. Uses real-time object detection and audio feedback.",technologies:["TensorFlow","OpenCV","Python","Raspberry Pi"],duration:"4 months",teamSize:"4 members",highlights:["Real-time object detection with 90% accuracy","Audio feedback system for obstacle detection","Portable and battery-powered design","Robotics Club award-winning project"],image:"/images/project2.jpg"},{title:"Ensemble Models for Gas Detection",role:"Research Developer",description:"Advanced machine learning models for detecting and classifying different types of gases using sensor data. Implemented ensemble methods for improved accuracy and reliability.",technologies:["Python","MLP","Time Series Analysis","Scikit-learn"],duration:"3 months",teamSize:"Solo",highlights:["85% detection accuracy","Multiple ensemble techniques implemented","Time-series pattern recognition","Real-time gas concentration prediction"],githubUrl:"https://github.com/Tinendrakumar/Ensemble-gas-analysis",image:"/images/project3.jpg"},{title:"Radio Modulation Classification",role:"Deep Learning Engineer",description:"Deep learning solution for classifying radio signal modulations, crucial for 5G communications. Achieved high accuracy while significantly reducing model size for edge deployment.",technologies:["CNN","Deep Learning","Python","PyTorch"],duration:"5 months",teamSize:"2 members",highlights:["95% classification accuracy","50x model size reduction","Optimized for edge devices","5G communication standards compliant"],githubUrl:"https://github.com/Tinendrakumar/Radio-Modulation-Classification",image:"/images/project4.jpg"}]),i=s=>{e("project_view","projects",{project:s.title}),s.githubUrl&&window.open(s.githubUrl,"_blank","noopener,noreferrer")};return q(()=>{n("projects")}),{projects:t,openProject:i}}},Ia={class:"overlay-page projects-page"},Ta={class:"overlay-content"},Ea={class:"overlay-header"},Ca={class:"projects-grid"};function Sa(n,e,t,i,s,r){const o=E("ProjectCard");return f(),m("div",Ia,[c("div",Ta,[c("div",Ea,[e[2]||(e[2]=c("h1",{class:"overlay-title"},[c("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[c("path",{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]),R(" 💻 Featured Projects ")],-1)),c("button",{class:"overlay-close",onClick:e[0]||(e[0]=a=>n.$emit("close")),"aria-label":"Close overlay"},e[1]||(e[1]=[c("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[c("path",{d:"M18 6L6 18M6 6L18 18",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)]))]),e[3]||(e[3]=c("div",{class:"projects-intro"},[c("p",{class:"intro-text"}," Explore my portfolio of innovative machine learning and AI projects. Each project demonstrates my expertise in building intelligent systems and solving complex problems. ")],-1)),c("div",Ca,[(f(!0),m(B,null,z(i.projects,(a,l)=>(f(),ve(o,{key:l,project:a,onClick:u=>i.openProject(a),style:$e({animationDelay:`${l*.1}s`})},null,8,["project","onClick","style"]))),128))])])])}const Aa=T(ka,[["render",Sa],["__scopeId","data-v-c7108c15"]]),Pa=n=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n),he=n=>n!=null&&n.toString().trim().length>0,Ce=(n,e)=>n&&n.toString().length>=e,Se=(n,e)=>!n||n.toString().length<=e,it=n=>{const e={};return he(n.firstName)?Ce(n.firstName,2)?Se(n.firstName,50)||(e.firstName="First name must be less than 50 characters"):e.firstName="First name must be at least 2 characters":e.firstName="First name is required",he(n.lastName)?Ce(n.lastName,2)?Se(n.lastName,50)||(e.lastName="Last name must be less than 50 characters"):e.lastName="Last name must be at least 2 characters":e.lastName="Last name is required",he(n.email)?Pa(n.email)||(e.email="Please enter a valid email address"):e.email="Email is required",he(n.subject)?Ce(n.subject,5)?Se(n.subject,100)||(e.subject="Subject must be less than 100 characters"):e.subject="Subject must be at least 5 characters":e.subject="Subject is required",he(n.message)?Ce(n.message,10)?Se(n.message,1e3)||(e.message="Message must be less than 1000 characters"):e.message="Message must be at least 10 characters":e.message="Message is required",{isValid:Object.keys(e).length===0,errors:e}};const Ra={name:"ContactForm",components:{BaseButton:qe},emits:["success"],setup(n,{emit:e}){const{submitContact:t}=Vn(),{trackInteraction:i}=te(),s=Kn({firstName:"",lastName:"",email:"",subject:"",message:""}),r=w({}),o=w(!1),a=ge(()=>it(s).isValid&&Object.keys(r.value).length===0);return{formData:s,errors:r,isSubmitting:o,isFormValid:a,validateField:h=>{const d=it({[h]:s[h]});d.errors[h]?r.value[h]=d.errors[h]:delete r.value[h]},submitForm:async()=>{const h=it(s);if(!h.isValid){r.value=h.errors;return}o.value=!0;try{i("form_submit","contact_form");const d=await t(s);d.success?(Object.keys(s).forEach(g=>{s[g]=""}),r.value={},e("success"),i("form_success","contact_form")):(alert("There was an error sending your message. Please try again."),i("form_error","contact_form",{error:d.error}))}catch(d){alert("There was an error sending your message. Please try again."),console.error("Form submission error:",d)}finally{o.value=!1}}}}},Oa={class:"contact-form-container"},La={class:"form-row"},Na={class:"form-group"},Ma={key:0,class:"error-message"},Da={class:"form-group"},xa={key:0,class:"error-message"},Ua={class:"form-group"},ja={key:0,class:"error-message"},Fa={class:"form-group"},Va={key:0,class:"error-message"},$a={class:"form-group"},Ba={key:0,class:"error-message"};function za(n,e,t,i,s,r){const o=E("BaseButton");return f(),m("div",Oa,[c("form",{onSubmit:e[10]||(e[10]=ce((...a)=>i.submitForm&&i.submitForm(...a),["prevent"])),class:"contact-form"},[c("div",La,[c("div",Na,[e[11]||(e[11]=c("label",{for:"firstName"},"First Name *",-1)),X(c("input",{id:"firstName",type:"text","onUpdate:modelValue":e[0]||(e[0]=a=>i.formData.firstName=a),class:Y({error:i.errors.firstName}),onBlur:e[1]||(e[1]=a=>i.validateField("firstName"))},null,34),[[Q,i.formData.firstName]]),i.errors.firstName?(f(),m("span",Ma,v(i.errors.firstName),1)):I("",!0)]),c("div",Da,[e[12]||(e[12]=c("label",{for:"lastName"},"Last Name *",-1)),X(c("input",{id:"lastName",type:"text","onUpdate:modelValue":e[2]||(e[2]=a=>i.formData.lastName=a),class:Y({error:i.errors.lastName}),onBlur:e[3]||(e[3]=a=>i.validateField("lastName"))},null,34),[[Q,i.formData.lastName]]),i.errors.lastName?(f(),m("span",xa,v(i.errors.lastName),1)):I("",!0)])]),c("div",Ua,[e[13]||(e[13]=c("label",{for:"email"},"Email *",-1)),X(c("input",{id:"email",type:"email","onUpdate:modelValue":e[4]||(e[4]=a=>i.formData.email=a),class:Y({error:i.errors.email}),onBlur:e[5]||(e[5]=a=>i.validateField("email"))},null,34),[[Q,i.formData.email]]),i.errors.email?(f(),m("span",ja,v(i.errors.email),1)):I("",!0)]),c("div",Fa,[e[14]||(e[14]=c("label",{for:"subject"},"Subject *",-1)),X(c("input",{id:"subject",type:"text","onUpdate:modelValue":e[6]||(e[6]=a=>i.formData.subject=a),class:Y({error:i.errors.subject}),onBlur:e[7]||(e[7]=a=>i.validateField("subject"))},null,34),[[Q,i.formData.subject]]),i.errors.subject?(f(),m("span",Va,v(i.errors.subject),1)):I("",!0)]),c("div",$a,[e[15]||(e[15]=c("label",{for:"message"},"Message *",-1)),X(c("textarea",{id:"message","onUpdate:modelValue":e[8]||(e[8]=a=>i.formData.message=a),class:Y({error:i.errors.message}),rows:"5",onBlur:e[9]||(e[9]=a=>i.validateField("message"))},null,34),[[Q,i.formData.message]]),i.errors.message?(f(),m("span",Ba,v(i.errors.message),1)):I("",!0)]),b(o,{type:"submit",variant:"primary",size:"large",loading:i.isSubmitting,disabled:!i.isFormValid,"full-width":""},{default:k(()=>[R(v(i.isSubmitting?"Sending...":"Send Message"),1)]),_:1},8,["loading","disabled"])],32)])}const Ha=T(Ra,[["render",za],["__scopeId","data-v-16a165fd"]]);const Wa={name:"Contact",components:{ContactForm:Ha},emits:["close"],setup(){const{trackPageView:n}=te(),e=w(null);let t=null;const i=()=>{alert("Thank you for your message! I will get back to you soon.")},s=()=>{const r=e.value;if(!r)return;const o=r.getContext("2d");r.width=window.innerWidth,r.height=window.innerHeight;const a=[],l=50;for(let h=0;h<l;h++)a.push({x:Math.random()*r.width,y:Math.random()*r.height,vx:(Math.random()-.5)*.5,vy:(Math.random()-.5)*.5,radius:2});const u=()=>{o.clearRect(0,0,r.width,r.height),a.forEach(h=>{h.x+=h.vx,h.y+=h.vy,(h.x<0||h.x>r.width)&&(h.vx*=-1),(h.y<0||h.y>r.height)&&(h.vy*=-1),o.beginPath(),o.arc(h.x,h.y,h.radius,0,Math.PI*2),o.fillStyle="rgba(96, 165, 250, 0.6)",o.fill()});for(let h=0;h<a.length;h++)for(let d=h+1;d<a.length;d++){const g=a[h].x-a[d].x,_=a[h].y-a[d].y,y=Math.sqrt(g*g+_*_);y<150&&(o.beginPath(),o.moveTo(a[h].x,a[h].y),o.lineTo(a[d].x,a[d].y),o.strokeStyle=`rgba(96, 165, 250, ${(1-y/150)*.2})`,o.stroke())}t=requestAnimationFrame(u)};u()};return q(()=>{n("contact"),setTimeout(s,100),window.addEventListener("resize",()=>{e.value&&(e.value.width=window.innerWidth,e.value.height=window.innerHeight)})}),Qt(()=>{t&&cancelAnimationFrame(t)}),{handleContactSuccess:i,networkCanvas:e}}},qa={class:"overlay-page contact-page"},Ka={class:"overlay-content"},Ga={class:"overlay-header"},Ja={class:"contact-content"};function Ya(n,e,t,i,s,r){const o=E("ContactForm");return f(),m("div",qa,[c("div",Ka,[c("div",Ga,[e[2]||(e[2]=c("h1",{class:"overlay-title"},[c("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[c("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z",stroke:"currentColor","stroke-width":"2"}),c("polyline",{points:"22,6 12,13 2,6",stroke:"currentColor","stroke-width":"2"})]),R(" 💬 Let's Connect ")],-1)),c("button",{class:"overlay-close",onClick:e[0]||(e[0]=a=>n.$emit("close")),"aria-label":"Close overlay"},e[1]||(e[1]=[c("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[c("path",{d:"M18 6L6 18M6 6L18 18",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)]))]),e[4]||(e[4]=c("div",{class:"contact-intro"},[c("p",null,"Ready to start your next project? Get in touch and let's discuss how we can work together to achieve your goals.")],-1)),c("div",Ja,[b(o,{onSuccess:i.handleContactSuccess},null,8,["onSuccess"]),e[3]||(e[3]=H('<div class="contact-info" data-v-9fd6bdb4><div class="contact-item" data-v-9fd6bdb4><div class="contact-icon" data-v-9fd6bdb4><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9fd6bdb4><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" stroke-width="2" data-v-9fd6bdb4></path></svg></div><div class="contact-details" data-v-9fd6bdb4><h3 data-v-9fd6bdb4>Call</h3><p data-v-9fd6bdb4>+1 (617) 807-0490 </p></div></div><div class="contact-item" data-v-9fd6bdb4><div class="contact-icon" data-v-9fd6bdb4><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9fd6bdb4><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" stroke-width="2" data-v-9fd6bdb4></path><polyline points="22,6 12,13 2,6" stroke="currentColor" stroke-width="2" data-v-9fd6bdb4></polyline></svg></div><div class="contact-details" data-v-9fd6bdb4><h3 data-v-9fd6bdb4>Write</h3><p data-v-9fd6bdb4>tinendra.kandula@gmail.com</p></div></div><div class="contact-item" data-v-9fd6bdb4><div class="contact-icon" data-v-9fd6bdb4><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9fd6bdb4><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="currentColor" stroke-width="2" data-v-9fd6bdb4></path><rect x="2" y="9" width="4" height="12" stroke="currentColor" stroke-width="2" data-v-9fd6bdb4></rect><circle cx="4" cy="4" r="2" stroke="currentColor" stroke-width="2" data-v-9fd6bdb4></circle></svg></div><div class="contact-details" data-v-9fd6bdb4><h3 data-v-9fd6bdb4>Connect</h3><div class="social-links" data-v-9fd6bdb4><a href="https://www.linkedin.com/in/tinendra-kumar/" class="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" data-v-9fd6bdb4> LinkedIn </a><a href="https://x.com/TinendraKumar/" class="social-link" aria-label="Twitter" target="_blank" rel="noopener noreferrer" data-v-9fd6bdb4> Twitter </a></div></div></div></div>',1))])])])}const Xa=T(Wa,[["render",Ya],["__scopeId","data-v-9fd6bdb4"]]);function Qa(){const n=w(!1),e=w(null);return{isAuthenticated:n,authenticateAdmin:async(r,o)=>{try{e.value=null;const a=De();return await hs(a,r,o),n.value=!0,!0}catch(a){return e.value=a.message,!1}},logout:()=>{const r=De();ms(r).then(()=>{n.value=!1}).catch(o=>{e.value=o.message})},checkAuthStatus:()=>new Promise(r=>{const o=De();Sn(o,a=>{n.value=!!a,r(!!a)})}),error:e}}const Za={name:"App",components:{Navbar:ho,Footer:_o,BaseModal:Eo,BaseButton:qe,About:Oo,Resume:ra,Projects:Aa,Contact:Xa},setup(){const n=Gn(),{authenticateAdmin:e}=Qa(),{trackVisitorSession:t}=te(),i=w(null),s=w(!1),r=w(""),o=w(""),a=w(0),l=w(""),u=()=>{try{document.body.classList.remove("overlay-active"),document.body.style.overflow="",document.body.style.position="",document.body.style.top="",document.body.style.width="",console.log("Body styles reset")}catch(y){console.error("Error resetting body styles:",y)}};q(()=>{t(),u()});const h=y=>{a.value=window.pageYOffset,document.body.style.position="fixed",document.body.style.top=`-${a.value}px`,document.body.style.width="100%",document.body.classList.add("overlay-active"),i.value=y},d=()=>{i.value=null,u(),window.scrollTo(0,a.value)},g=async()=>{l.value="",await e(r.value,o.value)?(s.value=!1,u(),window.scrollTo(0,0),n.push("/admin")):l.value="Invalid email or password. Please try again.",o.value=""},_=()=>{u(),s.value=!0};return n.afterEach(()=>{u()}),{activeOverlay:i,showAdminModal:s,adminEmail:r,adminPassword:o,setActiveOverlay:h,clearActiveOverlay:d,checkAdminPassword:g,openAdminModal:_,errorMessage:l}}},ec={class:"app-layout"},tc={class:"admin-login"},nc={key:0,class:"error-message"};function ic(n,e,t,i,s,r){const o=E("Navbar"),a=E("router-view"),l=E("Footer"),u=E("BaseButton"),h=E("BaseModal");return f(),m("div",ec,[e[9]||(e[9]=H('<div class="bg-elements"><div class="floating-element floating-element-1"></div><div class="floating-element floating-element-2"></div><div class="floating-element floating-element-3"></div><div class="mesh-gradient"></div></div>',1)),b(o,{onShowOverlay:i.setActiveOverlay},null,8,["onShowOverlay"]),b(a,null,{default:k(({Component:d})=>[b(ie,{name:"page-fade",mode:"out-in"},{default:k(()=>[(f(),ve(Et(d),{onShowOverlay:i.setActiveOverlay,class:"main-content-area"},null,40,["onShowOverlay"]))]),_:2},1024)]),_:1}),b(ie,{name:"fade"},{default:k(()=>[i.activeOverlay?(f(),m("div",{key:0,class:"overlay-backdrop",style:$e({display:i.activeOverlay?"flex":"none"}),onClick:e[0]||(e[0]=ce((...d)=>i.clearActiveOverlay&&i.clearActiveOverlay(...d),["self"]))},[b(ie,{name:"slide-up"},{default:k(()=>[(f(),ve(Et(i.activeOverlay),{onClose:i.clearActiveOverlay,class:"overlay-content-wrapper"},null,40,["onClose"]))]),_:1})],4)):I("",!0)]),_:1}),b(l,{onAdminAccess:i.openAdminModal},null,8,["onAdminAccess"]),b(h,{modelValue:i.showAdminModal,"onUpdate:modelValue":e[5]||(e[5]=d=>i.showAdminModal=d),onClose:e[6]||(e[6]=d=>i.showAdminModal=!1),title:"Admin Access",size:"small"},{default:k(()=>[c("div",tc,[e[8]||(e[8]=c("h3",null,"Admin Access",-1)),X(c("input",{type:"email","onUpdate:modelValue":e[1]||(e[1]=d=>i.adminEmail=d),placeholder:"Admin email",onKeyup:e[2]||(e[2]=Ct((...d)=>i.checkAdminPassword&&i.checkAdminPassword(...d),["enter"]))},null,544),[[Q,i.adminEmail]]),X(c("input",{type:"password","onUpdate:modelValue":e[3]||(e[3]=d=>i.adminPassword=d),placeholder:"Enter admin password",onKeyup:e[4]||(e[4]=Ct((...d)=>i.checkAdminPassword&&i.checkAdminPassword(...d),["enter"]))},null,544),[[Q,i.adminPassword]]),i.errorMessage?(f(),m("p",nc,v(i.errorMessage),1)):I("",!0),b(u,{onClick:i.checkAdminPassword},{default:k(()=>e[7]||(e[7]=[R("Login",-1)])),_:1,__:[7]},8,["onClick"])])]),_:1},8,["modelValue"])])}const sc=T(Za,[["render",ic]]);Mo();const _t=Jn(sc),rc=Yn();_t.use(rc);_t.use(jn);_t.mount("#app");export{qe as B,T as _,Vn as a,Qa as u};
//# sourceMappingURL=index-790c704c.js.map
