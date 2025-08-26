import{r as w,c as pe,o as p,a as m,b as c,n as K,d as jn,e as T,f as je,g as Se,m as Vn,h as Q,i as I,w as S,j as Y,t as v,k as $n,l as Bn,F as $,p as B,q as ve,s as oe,u as k,T as Le,v as zn,x as Hn,y as Wn,z as G,A as J,B as qn,C as Kn,D as bt,E as Gn,G as Jn}from"./vendor-be36cf19.js";import{g as Gt,i as Yn,a as Xn,_ as Et,C as Tt,r as St,b as Qn,S as _e,c as R,d as D,E as rt,e as Zn,f as Jt,h as es,j as ts,L as Yt,k as b,l as ns,m as ss,F as ot,n as is,q as ye,o as rs,p as os,s as ue,t as he,u as as,v as Xt,w as Ce,x as W,y as Ae,z as cs,A as ls,B as ds,D as Je,G as Ye,H as Xe,I as Qe,J as us,K as hs}from"./firebase-76932c27.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const fs="modulepreload",ps=function(n){return"/Tinendrakumar.github.io/"+n},Ct={},ms=function(e,t,s){if(!t||t.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(t.map(r=>{if(r=ps(r),r in Ct)return;Ct[r]=!0;const o=r.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let h=i.length-1;h>=0;h--){const d=i[h];if(d.href===r&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":fs,o||(u.as="script",u.crossOrigin=""),u.href=r,document.head.appendChild(u),o)return new Promise((h,d)=>{u.addEventListener("load",h),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})};function at(n,e){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(n);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(n,s[i])&&(t[s[i]]=n[s[i]]);return t}function Qt(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const gs=Qt,Zt=new rt("auth","Firebase",Qt());/**
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
 */const Me=new ss("@firebase/auth");function vs(n,...e){Me.logLevel<=Yt.WARN&&Me.warn(`Auth (${_e}): ${n}`,...e)}function Pe(n,...e){Me.logLevel<=Yt.ERROR&&Me.error(`Auth (${_e}): ${n}`,...e)}/**
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
 */function C(n,...e){throw ct(n,...e)}function A(n,...e){return ct(n,...e)}function en(n,e,t){const s=Object.assign(Object.assign({},gs()),{[e]:t});return new rt("auth","Firebase",s).create(e,{appName:n.name})}function z(n){return en(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ct(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return Zt.create(n,...e)}function f(n,e,...t){if(!n)throw ct(e,...t)}function O(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Pe(e),new Error(e)}function M(n,e){n||O(e)}/**
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
 */function nt(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function _s(){return At()==="http:"||At()==="https:"}function At(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function ys(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(_s()||Qn()||"connection"in navigator)?navigator.onLine:!0}function ws(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class we{constructor(e,t){this.shortDelay=e,this.longDelay=t,M(t>e,"Short delay should be less than long delay!"),this.isMobile=Yn()||Xn()}get(){return ys()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function lt(n,e){M(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class tn{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;O("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;O("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;O("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Is={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const ks=new we(3e4,6e4);function Z(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function H(n,e,t,s,i={}){return nn(n,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=ye(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const u=Object.assign({method:e,headers:l},r);return rs()||(u.referrerPolicy="no-referrer"),tn.fetch()(sn(n,n.config.apiHost,t,a),u)})}async function nn(n,e,t){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},Is),e);try{const i=new Es(n),r=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw be(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw be(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw be(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw be(n,"user-disabled",o);const h=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw en(n,h,u);C(n,h)}}catch(i){if(i instanceof ot)throw i;C(n,"network-request-failed",{message:String(i)})}}async function Ve(n,e,t,s,i={}){const r=await H(n,e,t,s,i);return"mfaPendingCredential"in r&&C(n,"multi-factor-auth-required",{_serverResponse:r}),r}function sn(n,e,t,s){const i=`${e}${t}?${s}`;return n.config.emulator?lt(n.config,i):`${n.config.apiScheme}://${i}`}function bs(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Es{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(A(this.auth,"network-request-failed")),ks.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function be(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const i=A(n,e,s);return i.customData._tokenResponse=t,i}function Pt(n){return n!==void 0&&n.enterprise!==void 0}class Ts{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return bs(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Ss(n,e){return H(n,"GET","/v2/recaptchaConfig",Z(n,e))}/**
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
 */async function Cs(n,e){return H(n,"POST","/v1/accounts:delete",e)}async function rn(n,e){return H(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function fe(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function As(n,e=!1){const t=D(n),s=await t.getIdToken(e),i=dt(s);f(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:fe(Ze(i.auth_time)),issuedAtTime:fe(Ze(i.iat)),expirationTime:fe(Ze(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Ze(n){return Number(n)*1e3}function dt(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return Pe("JWT malformed, contained fewer than 3 sections"),null;try{const i=is(t);return i?JSON.parse(i):(Pe("Failed to decode base64 JWT payload"),null)}catch(i){return Pe("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Rt(n){const e=dt(n);return f(e,"internal-error"),f(typeof e.exp<"u","internal-error"),f(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function me(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof ot&&Ps(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function Ps({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Rs{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class st{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=fe(this.lastLoginAt),this.creationTime=fe(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function De(n){var e;const t=n.auth,s=await n.getIdToken(),i=await me(n,rn(t,{idToken:s}));f(i==null?void 0:i.users.length,t,"internal-error");const r=i.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?on(r.providerUserInfo):[],a=Ns(n.providerData,o),l=n.isAnonymous,u=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),h=l?u:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new st(r.createdAt,r.lastLoginAt),isAnonymous:h};Object.assign(n,d)}async function Os(n){const e=D(n);await De(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ns(n,e){return[...n.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function on(n){return n.map(e=>{var{providerId:t}=e,s=at(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function Ls(n,e){const t=await nn(n,{},async()=>{const s=ye({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=n.config,o=sn(n,i,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",tn.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Ms(n,e){return H(n,"POST","/v2/accounts:revokeToken",Z(n,e))}/**
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
 */class ne{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){f(e.idToken,"internal-error"),f(typeof e.idToken<"u","internal-error"),f(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Rt(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){f(e.length!==0,"internal-error");const t=Rt(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(f(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:i,expiresIn:r}=await Ls(e,t);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:i,expirationTime:r}=t,o=new ne;return s&&(f(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(f(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(f(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ne,this.toJSON())}_performRefresh(){return O("not implemented")}}/**
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
 */function U(n,e){f(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class N{constructor(e){var{uid:t,auth:s,stsTokenManager:i}=e,r=at(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Rs(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new st(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await me(this,this.stsTokenManager.getToken(this.auth,e));return f(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return As(this,e)}reload(){return Os(this)}_assign(e){this!==e&&(f(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new N(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){f(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await De(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(R(this.auth.app))return Promise.reject(z(this.auth));const e=await this.getIdToken();return await me(this,Cs(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,i,r,o,a,l,u,h;const d=(s=t.displayName)!==null&&s!==void 0?s:void 0,g=(i=t.email)!==null&&i!==void 0?i:void 0,_=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,y=(o=t.photoURL)!==null&&o!==void 0?o:void 0,vt=(a=t.tenantId)!==null&&a!==void 0?a:void 0,We=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,_t=(u=t.createdAt)!==null&&u!==void 0?u:void 0,yt=(h=t.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:qe,emailVerified:wt,isAnonymous:It,providerData:Ke,stsTokenManager:kt}=t;f(qe&&kt,e,"internal-error");const xn=ne.fromJSON(this.name,kt);f(typeof qe=="string",e,"internal-error"),U(d,e.name),U(g,e.name),f(typeof wt=="boolean",e,"internal-error"),f(typeof It=="boolean",e,"internal-error"),U(_,e.name),U(y,e.name),U(vt,e.name),U(We,e.name),U(_t,e.name),U(yt,e.name);const Ge=new N({uid:qe,auth:e,email:g,emailVerified:wt,displayName:d,isAnonymous:It,photoURL:y,phoneNumber:_,tenantId:vt,stsTokenManager:xn,createdAt:_t,lastLoginAt:yt});return Ke&&Array.isArray(Ke)&&(Ge.providerData=Ke.map(Fn=>Object.assign({},Fn))),We&&(Ge._redirectEventId=We),Ge}static async _fromIdTokenResponse(e,t,s=!1){const i=new ne;i.updateFromServerResponse(t);const r=new N({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await De(r),r}static async _fromGetAccountInfoResponse(e,t,s){const i=t.users[0];f(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?on(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),a=new ne;a.updateFromIdToken(s);const l=new N({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new st(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,u),l}}/**
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
 */const Ot=new Map;function L(n){M(n instanceof Function,"Expected a class definition");let e=Ot.get(n);return e?(M(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Ot.set(n,e),e)}/**
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
 */class an{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}an.type="NONE";const Nt=an;/**
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
 */function Re(n,e,t){return`firebase:${n}:${e}:${t}`}class se{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Re(this.userKey,i.apiKey,r),this.fullPersistenceKey=Re("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?N._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new se(L(Nt),e,s);const i=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let r=i[0]||L(Nt);const o=Re(s,e.config.apiKey,e.name);let a=null;for(const u of t)try{const h=await u._get(o);if(h){const d=N._fromJSON(e,h);u!==r&&(a=d),r=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new se(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new se(r,e,s))}}/**
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
 */function Lt(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(un(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(cn(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(fn(e))return"Blackberry";if(pn(e))return"Webos";if(ln(e))return"Safari";if((e.includes("chrome/")||dn(e))&&!e.includes("edge/"))return"Chrome";if(hn(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function cn(n=b()){return/firefox\//i.test(n)}function ln(n=b()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function dn(n=b()){return/crios\//i.test(n)}function un(n=b()){return/iemobile/i.test(n)}function hn(n=b()){return/android/i.test(n)}function fn(n=b()){return/blackberry/i.test(n)}function pn(n=b()){return/webos/i.test(n)}function ut(n=b()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Ds(n=b()){var e;return ut(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Us(){return os()&&document.documentMode===10}function mn(n=b()){return ut(n)||hn(n)||pn(n)||fn(n)||/windows phone/i.test(n)||un(n)}/**
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
 */function gn(n,e=[]){let t;switch(n){case"Browser":t=Lt(b());break;case"Worker":t=`${Lt(b())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${_e}/${s}`}/**
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
 */class xs{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=t,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function Fs(n,e={}){return H(n,"GET","/v2/passwordPolicy",Z(n,e))}/**
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
 */const js=6;class Vs{constructor(e){var t,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:js,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,i,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class $s{constructor(e,t,s,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Mt(this),this.idTokenSubscription=new Mt(this),this.beforeStateQueue=new xs(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Zt,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=L(t)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await se.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await rn(this,{idToken:e}),s=await N._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(R(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return f(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await De(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ws()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(R(this.app))return Promise.reject(z(this));const t=e?D(e):null;return t&&f(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&f(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return R(this.app)?Promise.reject(z(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return R(this.app)?Promise.reject(z(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(L(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Fs(this),t=new Vs(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new rt("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await Ms(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&L(e)||this._popupRedirectResolver;f(t,this,"argument-error"),this.redirectPersistenceManager=await se.create(this,[L(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,i){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(f(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,s,i);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return f(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=gn(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&vs(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ae(n){return D(n)}class Mt{constructor(e){this.auth=e,this.observer=null,this.addObserver=Zn(t=>this.observer=t)}get next(){return f(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let $e={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Bs(n){$e=n}function vn(n){return $e.loadJS(n)}function zs(){return $e.recaptchaEnterpriseScript}function Hs(){return $e.gapiScript}function Ws(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const qs="recaptcha-enterprise",Ks="NO_RECAPTCHA";class Gs{constructor(e){this.type=qs,this.auth=ae(e)}async verify(e="verify",t=!1){async function s(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{Ss(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new Ts(l);return r.tenantId==null?r._agentRecaptchaConfig=u:r._tenantRecaptchaConfigs[r.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(r,o,a){const l=window.grecaptcha;Pt(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(u=>{o(u)}).catch(()=>{o(Ks)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(a=>{if(!t&&Pt(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=zs();l.length!==0&&(l+=a),vn(l).then(()=>{i(a,r,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function Dt(n,e,t,s=!1){const i=new Gs(n);let r;try{r=await i.verify(t)}catch{r=await i.verify(t,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Ut(n,e,t,s){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await Dt(n,e,t,t==="getOobCode");return s(n,r)}else return s(n,e).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Dt(n,e,t,t==="getOobCode");return s(n,o)}else return Promise.reject(r)})}/**
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
 */function Js(n,e){const t=Jt(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),r=t.getOptions();if(ns(r,e??{}))return i;C(i,"already-initialized")}return t.initialize({options:e})}function Ys(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(L);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Xs(n,e,t){const s=ae(n);f(s._canInitEmulator,s,"emulator-config-failed"),f(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),r=_n(e),{host:o,port:a}=Qs(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Zs()}function _n(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Qs(n){const e=_n(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:xt(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:xt(o)}}}function xt(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Zs(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class ht{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return O("not implemented")}_getIdTokenResponse(e){return O("not implemented")}_linkToIdToken(e,t){return O("not implemented")}_getReauthenticationResolver(e){return O("not implemented")}}async function ei(n,e){return H(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function ti(n,e){return Ve(n,"POST","/v1/accounts:signInWithPassword",Z(n,e))}/**
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
 */async function ni(n,e){return Ve(n,"POST","/v1/accounts:signInWithEmailLink",Z(n,e))}async function si(n,e){return Ve(n,"POST","/v1/accounts:signInWithEmailLink",Z(n,e))}/**
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
 */class ge extends ht{constructor(e,t,s,i=null){super("password",s),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new ge(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new ge(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ut(e,t,"signInWithPassword",ti);case"emailLink":return ni(e,{email:this._email,oobCode:this._password});default:C(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ut(e,s,"signUpPassword",ei);case"emailLink":return si(e,{idToken:t,email:this._email,oobCode:this._password});default:C(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ie(n,e){return Ve(n,"POST","/v1/accounts:signInWithIdp",Z(n,e))}/**
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
 */const ii="http://localhost";class X extends ht{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new X(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):C("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=t,r=at(t,["providerId","signInMethod"]);if(!s||!i)return null;const o=new X(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return ie(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,ie(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ie(e,t)}buildRequest(){const e={requestUri:ii,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ye(t)}return e}}/**
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
 */function ri(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function oi(n){const e=ue(he(n)).link,t=e?ue(he(e)).deep_link_id:null,s=ue(he(n)).deep_link_id;return(s?ue(he(s)).link:null)||s||t||e||n}class ft{constructor(e){var t,s,i,r,o,a;const l=ue(he(e)),u=(t=l.apiKey)!==null&&t!==void 0?t:null,h=(s=l.oobCode)!==null&&s!==void 0?s:null,d=ri((i=l.mode)!==null&&i!==void 0?i:null);f(u&&h&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=h,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=oi(e);try{return new ft(t)}catch{return null}}}/**
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
 */class ce{constructor(){this.providerId=ce.PROVIDER_ID}static credential(e,t){return ge._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=ft.parseLink(t);return f(s,"argument-error"),ge._fromEmailAndCode(e,s.code,s.tenantId)}}ce.PROVIDER_ID="password";ce.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ce.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class yn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ie extends yn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class x extends Ie{constructor(){super("facebook.com")}static credential(e){return X._fromParams({providerId:x.PROVIDER_ID,signInMethod:x.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return x.credentialFromTaggedObject(e)}static credentialFromError(e){return x.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return x.credential(e.oauthAccessToken)}catch{return null}}}x.FACEBOOK_SIGN_IN_METHOD="facebook.com";x.PROVIDER_ID="facebook.com";/**
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
 */class F extends Ie{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return X._fromParams({providerId:F.PROVIDER_ID,signInMethod:F.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return F.credentialFromTaggedObject(e)}static credentialFromError(e){return F.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return F.credential(t,s)}catch{return null}}}F.GOOGLE_SIGN_IN_METHOD="google.com";F.PROVIDER_ID="google.com";/**
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
 */class j extends Ie{constructor(){super("github.com")}static credential(e){return X._fromParams({providerId:j.PROVIDER_ID,signInMethod:j.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return j.credentialFromTaggedObject(e)}static credentialFromError(e){return j.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return j.credential(e.oauthAccessToken)}catch{return null}}}j.GITHUB_SIGN_IN_METHOD="github.com";j.PROVIDER_ID="github.com";/**
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
 */class V extends Ie{constructor(){super("twitter.com")}static credential(e,t){return X._fromParams({providerId:V.PROVIDER_ID,signInMethod:V.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return V.credentialFromTaggedObject(e)}static credentialFromError(e){return V.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return V.credential(t,s)}catch{return null}}}V.TWITTER_SIGN_IN_METHOD="twitter.com";V.PROVIDER_ID="twitter.com";/**
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
 */class re{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,i=!1){const r=await N._fromIdTokenResponse(e,s,i),o=Ft(s);return new re({user:r,providerId:o,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const i=Ft(s);return new re({user:e,providerId:i,_tokenResponse:s,operationType:t})}}function Ft(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Ue extends ot{constructor(e,t,s,i){var r;super(t.code,t.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Ue.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,i){return new Ue(e,t,s,i)}}function wn(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Ue._fromErrorAndOperation(n,r,e,s):r})}async function ai(n,e,t=!1){const s=await me(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return re._forOperation(n,"link",s)}/**
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
 */async function ci(n,e,t=!1){const{auth:s}=n;if(R(s.app))return Promise.reject(z(s));const i="reauthenticate";try{const r=await me(n,wn(s,i,e,n),t);f(r.idToken,s,"internal-error");const o=dt(r.idToken);f(o,s,"internal-error");const{sub:a}=o;return f(n.uid===a,s,"user-mismatch"),re._forOperation(n,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&C(s,"user-mismatch"),r}}/**
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
 */async function In(n,e,t=!1){if(R(n.app))return Promise.reject(z(n));const s="signIn",i=await wn(n,s,e),r=await re._fromIdTokenResponse(n,s,i);return t||await n._updateCurrentUser(r.user),r}async function li(n,e){return In(ae(n),e)}/**
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
 */async function di(n){const e=ae(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function ui(n,e,t){return R(n.app)?Promise.reject(z(n)):li(D(n),ce.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&di(n),s})}function hi(n,e,t,s){return D(n).onIdTokenChanged(e,t,s)}function fi(n,e,t){return D(n).beforeAuthStateChanged(e,t)}function kn(n,e,t,s){return D(n).onAuthStateChanged(e,t,s)}function pi(n){return D(n).signOut()}const xe="__sak";/**
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
 */class bn{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(xe,"1"),this.storage.removeItem(xe),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const mi=1e3,gi=10;class En extends bn{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=mn(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),i=this.localCache[t];s!==i&&e(t,i,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!t&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);Us()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,gi):i()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},mi)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}En.type="LOCAL";const vi=En;/**
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
 */class Tn extends bn{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Tn.type="SESSION";const Sn=Tn;/**
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
 */function _i(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Be{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const s=new Be(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:i,data:r}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async u=>u(t.origin,r)),l=await _i(a);t.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Be.receivers=[];/**
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
 */function pt(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class yi{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const u=pt("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(d){const g=d;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(h),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(g.data.response);break;default:clearTimeout(h),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function P(){return window}function wi(n){P().location.href=n}/**
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
 */function Cn(){return typeof P().WorkerGlobalScope<"u"&&typeof P().importScripts=="function"}async function Ii(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ki(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function bi(){return Cn()?self:null}/**
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
 */const An="firebaseLocalStorageDb",Ei=1,Fe="firebaseLocalStorage",Pn="fbase_key";class ke{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ze(n,e){return n.transaction([Fe],e?"readwrite":"readonly").objectStore(Fe)}function Ti(){const n=indexedDB.deleteDatabase(An);return new ke(n).toPromise()}function it(){const n=indexedDB.open(An,Ei);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(Fe,{keyPath:Pn})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(Fe)?e(s):(s.close(),await Ti(),e(await it()))})})}async function jt(n,e,t){const s=ze(n,!0).put({[Pn]:e,value:t});return new ke(s).toPromise()}async function Si(n,e){const t=ze(n,!1).get(e),s=await new ke(t).toPromise();return s===void 0?null:s.value}function Vt(n,e){const t=ze(n,!0).delete(e);return new ke(t).toPromise()}const Ci=800,Ai=3;class Rn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await it(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>Ai)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Cn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Be._getInstance(bi()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Ii(),!this.activeServiceWorker)return;this.sender=new yi(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ki()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await it();return await jt(e,xe,"1"),await Vt(e,xe),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>jt(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>Si(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Vt(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=ze(i,!1).getAll();return new ke(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ci)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Rn.type="LOCAL";const Pi=Rn;new we(3e4,6e4);/**
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
 */function Ri(n,e){return e?L(e):(f(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class mt extends ht{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ie(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ie(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ie(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Oi(n){return In(n.auth,new mt(n),n.bypassAuthState)}function Ni(n){const{auth:e,user:t}=n;return f(t,e,"internal-error"),ci(t,new mt(n),n.bypassAuthState)}async function Li(n){const{auth:e,user:t}=n;return f(t,e,"internal-error"),ai(t,new mt(n),n.bypassAuthState)}/**
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
 */class On{constructor(e,t,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Oi;case"linkViaPopup":case"linkViaRedirect":return Li;case"reauthViaPopup":case"reauthViaRedirect":return Ni;default:C(this.auth,"internal-error")}}resolve(e){M(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){M(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Mi=new we(2e3,1e4);class te extends On{constructor(e,t,s,i,r){super(e,t,i,r),this.provider=s,this.authWindow=null,this.pollId=null,te.currentPopupAction&&te.currentPopupAction.cancel(),te.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return f(e,this.auth,"internal-error"),e}async onExecution(){M(this.filter.length===1,"Popup operations only handle one event");const e=pt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(A(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(A(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,te.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(A(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Mi.get())};e()}}te.currentPopupAction=null;/**
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
 */const Di="pendingRedirect",Oe=new Map;class Ui extends On{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Oe.get(this.auth._key());if(!e){try{const s=await xi(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Oe.set(this.auth._key(),e)}return this.bypassAuthState||Oe.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function xi(n,e){const t=Vi(e),s=ji(n);if(!await s._isAvailable())return!1;const i=await s._get(t)==="true";return await s._remove(t),i}function Fi(n,e){Oe.set(n._key(),e)}function ji(n){return L(n._redirectPersistence)}function Vi(n){return Re(Di,n.config.apiKey,n.name)}async function $i(n,e,t=!1){if(R(n.app))return Promise.reject(z(n));const s=ae(n),i=Ri(s,e),o=await new Ui(s,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const Bi=10*60*1e3;class zi{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Hi(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Nn(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(A(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Bi&&this.cachedEventUids.clear(),this.cachedEventUids.has($t(e))}saveEventToCache(e){this.cachedEventUids.add($t(e)),this.lastProcessedEventTime=Date.now()}}function $t(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Nn({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Hi(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Nn(n);default:return!1}}/**
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
 */async function Wi(n,e={}){return H(n,"GET","/v1/projects",e)}/**
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
 */const qi=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ki=/^https?/;async function Gi(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Wi(n);for(const t of e)try{if(Ji(t))return}catch{}C(n,"unauthorized-domain")}function Ji(n){const e=nt(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===s}if(!Ki.test(t))return!1;if(qi.test(n))return s===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const Yi=new we(3e4,6e4);function Bt(){const n=P().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Xi(n){return new Promise((e,t)=>{var s,i,r;function o(){Bt(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Bt(),t(A(n,"network-request-failed"))},timeout:Yi.get()})}if(!((i=(s=P().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=P().gapi)===null||r===void 0)&&r.load)o();else{const a=Ws("iframefcb");return P()[a]=()=>{gapi.load?o():t(A(n,"network-request-failed"))},vn(`${Hs()}?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw Ne=null,e})}let Ne=null;function Qi(n){return Ne=Ne||Xi(n),Ne}/**
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
 */const Zi=new we(5e3,15e3),er="__/auth/iframe",tr="emulator/auth/iframe",nr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},sr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ir(n){const e=n.config;f(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?lt(e,tr):`https://${n.config.authDomain}/${er}`,s={apiKey:e.apiKey,appName:n.name,v:_e},i=sr.get(n.config.apiHost);i&&(s.eid=i);const r=n._getFrameworks();return r.length&&(s.fw=r.join(",")),`${t}?${ye(s).slice(1)}`}async function rr(n){const e=await Qi(n),t=P().gapi;return f(t,n,"internal-error"),e.open({where:document.body,url:ir(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nr,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=A(n,"network-request-failed"),a=P().setTimeout(()=>{r(o)},Zi.get());function l(){P().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const or={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ar=500,cr=600,lr="_blank",dr="http://localhost";class zt{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ur(n,e,t,s=ar,i=cr){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},or),{width:s.toString(),height:i.toString(),top:r,left:o}),u=b().toLowerCase();t&&(a=dn(u)?lr:t),cn(u)&&(e=e||dr,l.scrollbars="yes");const h=Object.entries(l).reduce((g,[_,y])=>`${g}${_}=${y},`,"");if(Ds(u)&&a!=="_self")return hr(e||"",a),new zt(null);const d=window.open(e||"",a,h);f(d,n,"popup-blocked");try{d.focus()}catch{}return new zt(d)}function hr(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const fr="__/auth/handler",pr="emulator/auth/handler",mr=encodeURIComponent("fac");async function Ht(n,e,t,s,i,r){f(n.config.authDomain,n,"auth-domain-config-required"),f(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:_e,eventId:i};if(e instanceof yn){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",as(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries(r||{}))o[h]=d}if(e instanceof Ie){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await n._getAppCheckToken(),u=l?`#${mr}=${encodeURIComponent(l)}`:"";return`${gr(n)}?${ye(a).slice(1)}${u}`}function gr({config:n}){return n.emulator?lt(n,pr):`https://${n.authDomain}/${fr}`}/**
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
 */const et="webStorageSupport";class vr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Sn,this._completeRedirectFn=$i,this._overrideRedirectResult=Fi}async _openPopup(e,t,s,i){var r;M((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Ht(e,t,s,nt(),i);return ur(e,o,pt())}async _openRedirect(e,t,s,i){await this._originValidation(e);const r=await Ht(e,t,s,nt(),i);return wi(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:r}=this.eventManagers[t];return i?Promise.resolve(i):(M(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await rr(e),s=new zi(e);return t.register("authEvent",i=>(f(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(et,{type:et},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[et];o!==void 0&&t(!!o),C(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Gi(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return mn()||ln()||ut()}}const _r=vr;var Wt="@firebase/auth",qt="1.7.9";/**
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
 */class yr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){f(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function wr(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ir(n){Et(new Tt("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;f(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:gn(n)},u=new $s(s,i,r,l);return Ys(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Et(new Tt("auth-internal",e=>{const t=ae(e.getProvider("auth").getImmediate());return(s=>new yr(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),St(Wt,qt,wr(n)),St(Wt,qt,"esm2017")}/**
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
 */const kr=5*60,br=Gt("authIdTokenMaxAge")||kr;let Kt=null;const Er=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>br)return;const i=t==null?void 0:t.token;Kt!==i&&(Kt=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Ln(n=ts()){const e=Jt(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Js(n,{popupRedirectResolver:_r,persistence:[Pi,vi,Sn]}),s=Gt("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=Er(r.toString());fi(t,o,()=>o(t.currentUser)),hi(t,a=>o(a))}}const i=es("auth");return i&&Xs(t,`http://${i}`),t}function Tr(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Bs({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=i=>{const r=A("internal-error");r.customData=i,t(r)},s.type="text/javascript",s.charset="UTF-8",Tr().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ir("Browser");const Sr={durations:{fast:150,normal:300,slow:500,slower:750},easing:{ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",smooth:"cubic-bezier(0.16, 1, 0.3, 1)",bounce:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"}},Cr=(n,e)=>{const t=n.getBoundingClientRect(),s=Math.max(t.width,t.height),i=e.clientX-t.left-s/2,r=e.clientY-t.top-s/2,o=document.createElement("span");o.style.cssText=`
    position: absolute;
    width: ${s}px;
    height: ${s}px;
    left: ${i}px;
    top: ${r}px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    transform: scale(0);
    animation: ripple 0.6s ease-out;
    pointer-events: none;
  `,n.appendChild(o),setTimeout(()=>{o.parentNode&&o.parentNode.removeChild(o)},600)},Ar=(n,e=100)=>{n.forEach((t,s)=>{setTimeout(()=>{t.classList.add("animate-in")},s*e)})};function Pr(){const n=w(!1),e=w("idle"),t=(o,a)=>{const l=new IntersectionObserver(u=>{u.forEach(h=>{h.isIntersecting&&a(h.target)})},{threshold:.1,rootMargin:"50px"});return o&&l.observe(o),l};return{isVisible:n,animationState:e,animationConfig:Sr,observeElement:t,animateOnScroll:o=>{o&&t(o,a=>{a.classList.add("animate-in")})},animateList:(o,a=100)=>{if(!o.value)return;const l=o.value.querySelectorAll(".animate-item");Ar(Array.from(l),a)},addRippleEffect:o=>{const a=o.currentTarget;Cr(a,o)}}}const E=(n,e)=>{const t=n.__vccOpts||n;for(const[s,i]of e)t[s]=i;return t},Rr={name:"LoadingSpinner",props:{size:{type:String,default:"medium",validator:n=>["small","medium","large"].includes(n)},color:{type:String,default:"primary"}},setup(n){const e={small:"1rem",medium:"1.5rem",large:"2rem"},t={primary:"#3B82F6",secondary:"#64748B",white:"#FFFFFF",dark:"#1E293B"},s=pe(()=>["loading-spinner",`loading-spinner--${n.size}`]),i=pe(()=>({width:e[n.size],height:e[n.size],borderTopColor:t[n.color]||n.color}));return{spinnerClasses:s,spinnerStyle:i}}};function Or(n,e,t,s,i,r){return p(),m("div",{class:K(s.spinnerClasses),style:jn(s.spinnerStyle)},e[0]||(e[0]=[c("div",{class:"spinner-circle"},null,-1)]),6)}const Nr=E(Rr,[["render",Or],["__scopeId","data-v-3577c9dd"]]);const Lr={name:"BaseButton",components:{LoadingSpinner:Nr},inheritAttrs:!1,props:{variant:{type:String,default:"primary",validator:n=>["primary","secondary","outline","text","danger"].includes(n)},size:{type:String,default:"medium",validator:n=>["small","medium","large"].includes(n)},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},fullWidth:{type:Boolean,default:!1}},emits:["click"],setup(n,{emit:e}){const{addRippleEffect:t}=Pr(),s=w(null);return{buttonClasses:pe(()=>["base-button",`base-button--${n.variant}`,`base-button--${n.size}`,{"base-button--disabled":n.disabled,"base-button--loading":n.loading,"base-button--full-width":n.fullWidth}]),handleClick:o=>{!n.disabled&&!n.loading&&(t(o),e("click",o))},rippleContainer:s}}},Mr=["disabled"],Dr={class:"button-content"},Ur={class:"button-ripple",ref:"rippleContainer"};function xr(n,e,t,s,i,r){const o=T("LoadingSpinner");return p(),m("button",Vn({class:s.buttonClasses,disabled:t.disabled||t.loading,onClick:e[0]||(e[0]=(...a)=>s.handleClick&&s.handleClick(...a))},n.$attrs),[c("div",Dr,[t.loading?(p(),je(o,{key:0,size:"small"})):Se(n.$slots,"default",{key:1},void 0,!0)]),c("div",Ur,null,512)],16,Mr)}const He=E(Lr,[["render",xr],["__scopeId","data-v-c0da8657"]]);function ee(){const n=async(r,o)=>{try{const a=Xt();await Ce(W(a,r),{...o,timestamp:Ae()})}catch(a){console.error(`Error writing to Firestore collection '${r}':`,a)}},e=async()=>{try{return(await(await fetch("https://api.ipify.org?format=json")).json()).ip}catch(r){return console.error("Failed to fetch IP:",r),"unknown"}};return{trackPageView:async r=>{const o=await e(),a={page:r,url:window.location.href,ip:o};n("page_views",a)},trackInteraction:(r,o,a={})=>{const l={type:r,element:o,...a};n("user_interactions",l)},trackVisitorSession:()=>{const r={sessionStart:new Date().toISOString(),userAgent:navigator.userAgent,language:navigator.language,platform:navigator.platform,screenResolution:`${window.screen.width}x${window.screen.height}`,referrer:document.referrer||"direct",timezone:Intl.DateTimeFormat().resolvedOptions().timeZone};n("visitor_sessions",r)}}}const Fr="/Tinendrakumar.github.io/assets/1-91ca4758.jpg";const jr={name:"Home",components:{BaseButton:He},emits:["show-overlay"],setup(){const{trackPageView:n}=ee(),e={intro:"Machine Learning | Generative AI | Multi‑modal ML | NLP",description:"Machine Learning Engineer with a passion for building intelligent systems that solve real-world problems. I specialize in Generative AI, multi-modal learning, and natural language processing, leveraging AWS and SageMaker to deploy scalable solutions."};return Q(()=>{n("home")}),{personalInfo:e}}},Vr={class:"homepage"},$r={class:"hero"},Br={class:"hero-container"},zr={class:"hero-content"},Hr={class:"hero-buttons"},Wr={class:"hero-description"};function qr(n,e,t,s,i,r){const o=T("BaseButton");return p(),m("main",Vr,[c("section",$r,[c("div",Br,[e[5]||(e[5]=c("div",{class:"hero-image"},[c("div",{class:"profile-placeholder"},[c("img",{src:Fr,alt:"Tinendra Kandula",loading:"lazy",class:"profile-img"})])],-1)),c("div",zr,[e[4]||(e[4]=c("h2",{class:"hero-title"},"Hello, I'm Tinendra Kandula",-1)),c("div",Hr,[I(o,{variant:"primary",onClick:e[0]||(e[0]=a=>n.$emit("show-overlay","Resume"))},{default:S(()=>e[2]||(e[2]=[Y(" RESUME ",-1)])),_:1,__:[2]}),I(o,{variant:"primary",onClick:e[1]||(e[1]=a=>n.$emit("show-overlay","Projects"))},{default:S(()=>e[3]||(e[3]=[Y(" PROJECTS ",-1)])),_:1,__:[3]})]),c("div",Wr,[c("p",null,v(s.personalInfo.intro),1),c("p",null,v(s.personalInfo.description),1)])])])])])}const Kr=E(jr,[["render",qr],["__scopeId","data-v-5745d983"]]),Gr=[{path:"/",name:"Home",component:Kr},{path:"/admin",name:"AdminDashboard",component:()=>ms(()=>import("./AdminDashboard-3665fcbb.js"),["assets/AdminDashboard-3665fcbb.js","assets/vendor-be36cf19.js","assets/firebase-76932c27.js","assets/AdminDashboard-5667306d.css"]),meta:{requiresAuth:!0}}],Mn=$n({history:Bn(),routes:Gr}),Jr=()=>new Promise((n,e)=>{const t=kn(Ln(),s=>{t(),n(s)},e)});Mn.beforeEach(async(n,e,t)=>{n.meta.requiresAuth?await Jr()?t():(alert("You do not have access to this page. Please log in as an admin."),t("/")):t()});const Yr={name:"Navbar",emits:["show-overlay"],data(){return{navItems:[{name:"ABOUT ME",route:"About"},{name:"RESUME",route:"Resume"},{name:"PROJECTS",route:"Projects"},{name:"CONTACT",route:"Contact"}]}}},Xr={class:"navbar",role:"navigation","aria-label":"Main navigation"},Qr={class:"nav-container"},Zr={class:"nav-brand"},eo={class:"nav-menu"},to=["onClick"],no={class:"nav-text"};function so(n,e,t,s,i,r){const o=T("router-link");return p(),m("nav",Xr,[c("div",Qr,[c("div",Zr,[I(o,{to:"/",class:"brand-text"},{default:S(()=>e[0]||(e[0]=[Y(" Tinendra Kandula ",-1)])),_:1,__:[0]}),e[1]||(e[1]=c("div",{class:"brand-underline"},null,-1))]),c("ul",eo,[(p(!0),m($,null,B(i.navItems,a=>(p(),m("li",{key:a.name},[c("a",{href:"#",class:"nav-link",onClick:ve(l=>n.$emit("show-overlay",a.route),["prevent"])},[c("span",no,v(a.name),1),e[2]||(e[2]=c("div",{class:"nav-hover-effect"},null,-1))],8,to)]))),128))])])])}const io=E(Yr,[["render",so],["__scopeId","data-v-6608581d"]]);const ro={name:"Footer",emits:["admin-access"],setup(){const n=w(!1),e=w(0);let t=null;return{showAdminButton:n,handleAdminClick:()=>{e.value++,t&&clearTimeout(t),t=setTimeout(()=>{e.value=0},1500),e.value>=3&&(n.value=!0,e.value=0,clearTimeout(t))}}}},oo={class:"site-footer"},ao={class:"footer-container"},co={class:"footer-content"};function lo(n,e,t,s,i,r){return p(),m("footer",oo,[c("div",ao,[c("div",co,[e[4]||(e[4]=oe('<div class="footer-section contact-details" data-v-f1de6654><div class="contact-item" data-v-f1de6654><span class="contact-label" data-v-f1de6654>Call</span><a href="tel:+15551234567" class="contact-value" data-v-f1de6654>+1 (857) 209-8105</a></div><div class="contact-item" data-v-f1de6654><span class="contact-label" data-v-f1de6654>Write</span><a href="mailto:tinendra.kandula@gmail.com" class="contact-value" data-v-f1de6654>tinendra.kandula@gmail.com</a></div><div class="contact-item" data-v-f1de6654><span class="contact-label" data-v-f1de6654>Follow</span><div class="social-links" data-v-f1de6654><a href="https://www.linkedin.com/in/tinendra-kumar/" class="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" data-v-f1de6654><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" data-v-f1de6654><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" data-v-f1de6654></path></svg></a><a href="https://x.com/TinendraKumar/" class="social-link" aria-label="Twitter" target="_blank" rel="noopener noreferrer" data-v-f1de6654><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" data-v-f1de6654><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" data-v-f1de6654></path></svg></a><a href="https://www.instagram.com/tinendra_kumar/" class="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer" data-v-f1de6654><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" data-v-f1de6654><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" data-v-f1de6654></path></svg></a></div></div></div>',1)),c("div",{class:"footer-section copyright",onClick:e[1]||(e[1]=(...o)=>s.handleAdminClick&&s.handleAdminClick(...o))},[e[2]||(e[2]=c("p",null,"© 2025 by Tinendra Kandula.",-1)),e[3]||(e[3]=c("p",null,"Powered and secured by Firebase",-1)),I(Le,{name:"fade"},{default:S(()=>[s.showAdminButton?(p(),m("button",{key:0,class:"admin-button",onClick:e[0]||(e[0]=ve(o=>n.$emit("admin-access"),["stop"]))}," Admin Panel ")):k("",!0)]),_:1})])])])])}const uo=E(ro,[["render",lo],["__scopeId","data-v-f1de6654"]]);const ho={name:"BaseModal",props:{modelValue:{type:Boolean,default:!1},title:{type:String,default:""},size:{type:String,default:"medium",validator:n=>["small","medium","large","full"].includes(n)},showCloseButton:{type:Boolean,default:!0},closeOnOverlay:{type:Boolean,default:!0},closeOnEscape:{type:Boolean,default:!0}},emits:["update:modelValue","close"],setup(n,{emit:e}){const t=pe(()=>[`modal-container--${n.size}`]),s=()=>{e("update:modelValue",!1),e("close")},i=()=>{n.closeOnOverlay&&s()},r=o=>{n.closeOnEscape&&o.key==="Escape"&&s()};return Q(()=>{n.closeOnEscape&&document.addEventListener("keydown",r),document.body.style.overflow="hidden"}),zn(()=>{document.removeEventListener("keydown",r),document.body.style.overflow=""}),{containerClasses:t,close:s,handleOverlayClick:i}}},fo={key:0,class:"modal-header"},po={key:0,class:"modal-title"},mo={class:"modal-body"},go={key:1,class:"modal-footer"};function vo(n,e,t,s,i,r){return p(),je(Hn,{to:"body"},[I(Le,{name:"modal",appear:""},{default:S(()=>[t.modelValue?(p(),m("div",{key:0,class:"modal-overlay",onClick:e[2]||(e[2]=(...o)=>s.handleOverlayClick&&s.handleOverlayClick(...o))},[c("div",{class:K(["modal-container",s.containerClasses]),onClick:e[1]||(e[1]=ve(()=>{},["stop"]))},[n.$slots.header||t.showCloseButton?(p(),m("div",fo,[Se(n.$slots,"header",{},()=>[t.title?(p(),m("h3",po,v(t.title),1)):k("",!0)],!0),t.showCloseButton?(p(),m("button",{key:0,class:"modal-close",onClick:e[0]||(e[0]=(...o)=>s.close&&s.close(...o)),"aria-label":"Close modal"},e[3]||(e[3]=[c("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[c("path",{d:"M18 6L6 18M6 6L18 18",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)]))):k("",!0)])):k("",!0),c("div",mo,[Se(n.$slots,"default",{},void 0,!0)]),n.$slots.footer?(p(),m("div",go,[Se(n.$slots,"footer",{},void 0,!0)])):k("",!0)],2)])):k("",!0)]),_:3})])}const _o=E(ho,[["render",vo],["__scopeId","data-v-d84053e9"]]);const yo={name:"About",emits:["close"],setup(){const{trackPageView:n}=ee();return Q(()=>{n("about")}),{}}},wo={class:"overlay-page about-page"},Io={class:"overlay-content"},ko={class:"overlay-header"};function bo(n,e,t,s,i,r){return p(),m("div",wo,[c("div",Io,[c("div",ko,[e[2]||(e[2]=c("h1",{class:"overlay-title"},"About Me",-1)),c("button",{class:"overlay-close",onClick:e[0]||(e[0]=o=>n.$emit("close")),"aria-label":"Close overlay"},e[1]||(e[1]=[c("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[c("path",{d:"M18 6L6 18M6 6L18 18",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)]))]),e[3]||(e[3]=oe('<div class="about-content" data-v-36f68e58><div class="about-intro" data-v-36f68e58><h2 data-v-36f68e58>Machine Learning Engineer</h2><p data-v-36f68e58> I&#39;m Tinendra Kandula, a passionate Machine Learning Engineer with extensive experience in designing and deploying advanced AI systems. My expertise lies in Generative AI, multi‑modal learning, and NLP, with a strong focus on AWS/SageMaker. </p></div><div class="about-sections" data-v-36f68e58><div class="about-section" data-v-36f68e58><h3 data-v-36f68e58>My Journey</h3><p data-v-36f68e58> My career in Machine Learning began with a fascination for bringing order to complex challenges. Over the years, I&#39;ve had the privilege of working with diverse teams across various industries, from research labs to established enterprises. </p></div><div class="about-section" data-v-36f68e58><h3 data-v-36f68e58>Philosophy</h3><p data-v-36f68e58> I believe in the power of collaborative leadership and data-driven decision making. My approach combines strategic thinking with hands-on execution, ensuring projects not only meet their objectives but exceed expectations. </p></div><div class="about-section" data-v-36f68e58><h3 data-v-36f68e58>Specializations</h3><div class="specializations-grid" data-v-36f68e58><div class="specialization-card" data-v-36f68e58><div class="card-icon" data-v-36f68e58>🚀</div><h4 data-v-36f68e58>AI Research</h4><p data-v-36f68e58>Exploring cutting-edge AI technologies and methodologies</p></div><div class="specialization-card" data-v-36f68e58><div class="card-icon" data-v-36f68e58>⚡</div><h4 data-v-36f68e58>Cloud Computing</h4><p data-v-36f68e58>Leveraging cloud technologies for scalable AI solutions</p></div><div class="specialization-card" data-v-36f68e58><div class="card-icon" data-v-36f68e58>👥</div><h4 data-v-36f68e58>Machine Learning</h4><p data-v-36f68e58>Designing and deploying ML models for real-world applications</p></div><div class="specialization-card" data-v-36f68e58><div class="card-icon" data-v-36f68e58>📊</div><h4 data-v-36f68e58>Data Strategy</h4><p data-v-36f68e58>Developing data-driven strategies for business growth</p></div></div></div><div class="about-section" data-v-36f68e58><h3 data-v-36f68e58>Beyond Work I&#39;m Passionate About</h3><p data-v-36f68e58> Well, when I&#39;m not immersed in the world of AI, I enjoy exploring the latest advancements in technology, reading about the intersection of AI and society, and engaging in community initiatives that promote </p></div></div></div>',1))])])}const Eo=E(yo,[["render",bo],["__scopeId","data-v-36f68e58"]]),To={apiKey:"AIzaSyBXMlgU7A517YZ1DuPf4bsFpHqkBUyMz0M",authDomain:"tini-portfolio.firebaseapp.com",projectId:"tini-portfolio",storageBucket:"tini-portfolio.firebasestorage.app",messagingSenderId:"983899171834",appId:"1:983899171834:web:00bc38223fe882e3db5243",measurementId:"G-2837ZHSZ97"};let le,q,Dn,So;const Co=()=>{try{return le=cs(To),q=Xt(le),Dn=ls(le),So=ds(le),console.log("Firebase initialized successfully"),le}catch(n){throw console.error("Firebase initialization error:",n),n}};function Un(){const n=w(!1),e=w(null),t=async d=>{n.value=!0,e.value=null;try{const g=await a();return await Ce(W(q,"contact_submissions"),{...d,timestamp:Ae(),visitor:g}),await l(d,g),{success:!0}}catch(g){return e.value=g.message,{success:!1,error:g.message}}finally{n.value=!1}},s=async()=>{n.value=!0,e.value=null;try{const d=Je(W(q,"contact_submissions"),Ye("timestamp","desc"),Xe(50)),g=await Qe(d),_=[];return g.forEach(y=>{_.push({id:y.id,...y.data()})}),_}catch(d){return e.value=d.message,[]}finally{n.value=!1}},i=async()=>{try{const d=us(Dn,"files/resume.pdf"),g=await hs(d);return await o("resume_download"),window.open(g,"_blank"),{success:!0}}catch(d){return e.value=d.message,{success:!1,error:d.message}}},r=async d=>{try{const g=await a();await Ce(W(q,"site_visitors"),{...d,...g,timestamp:Ae()})}catch(g){console.error("Visitor tracking error:",g)}},o=async(d,g={})=>{try{await Ce(W(q,"site_analytics"),{event:d,data:g,timestamp:Ae()})}catch(_){console.error("Event tracking error:",_)}},a=async()=>{try{const[d,g]=await Promise.all([fetch("https://api.ipify.org?format=json").catch(()=>null),fetch("https://ipapi.co/json/").catch(()=>null)]),_=d?await d.json():{ip:"unknown"},y=g?await g.json():{};return{ip:_.ip||"unknown",userAgent:navigator.userAgent,language:navigator.language,platform:navigator.platform,referrer:document.referrer||"direct",screenResolution:`${screen.width}x${screen.height}`,timezone:Intl.DateTimeFormat().resolvedOptions().timeZone,city:y.city||"unknown",country:y.country_name||"unknown"}}catch{return{ip:"unknown",userAgent:navigator.userAgent,language:navigator.language,platform:navigator.platform}}},l=async(d,g)=>{console.log("Email notification would be sent:",{to:"tinendra.kumar@gmail.com",subject:`New Portfolio Contact: ${d.subject}`,formData:d,visitorInfo:g})};return{loading:n,error:e,submitContact:t,getContactSubmissions:s,downloadResume:i,trackVisitor:r,trackEvent:o,getVisitorAnalytics:async()=>{n.value=!0,e.value=null;try{const d=Je(W(q,"site_visitors"),Ye("timestamp","desc"),Xe(100)),g=await Qe(d),_=[];return g.forEach(y=>{_.push({id:y.id,...y.data()})}),console.log("Fetched visitors:",_),_}catch(d){return e.value=d.message,console.error("Error fetching visitors:",d),[]}finally{n.value=!1}},getPageViews:async()=>{n.value=!0,e.value=null;try{const d=Je(W(q,"page_views"),Ye("timestamp","desc"),Xe(100)),g=await Qe(d),_=[];return g.forEach(y=>{_.push({id:y.id,...y.data()})}),console.log("Fetched page views:",_),_}catch(d){return e.value=d.message,console.error("Error fetching page views:",d),[]}finally{n.value=!1}}}}const Ao={name:"Resume",components:{BaseButton:He},emits:["close"],setup(){const{downloadResume:n}=Un(),{trackPageView:e,trackInteraction:t}=ee(),s=w(!1),i=[{period:"Aug 2025 - Present",position:"MLDOPS III",company:"Amazon",location:"Boston, MA",description:"Create and annotate high-quality, complex multimodal training data (text, image, video); Collaborate with scientists and engineers to refine guidelines and tooling; research and synthesize technical topics; and identify/report tooling bugs and suggest improvements to improve LLM training data quality."},{period:"May 2025 - August 2025",position:"AI Research Assistant",company:"Harvard Medical School - Brigham and Women's Hospital",location:"Cambridge, MA",description:"Conducted IVF-related research applying deep learning models for sperm classification and investigating bias in embryo grading; developed and evaluated ensemble methods to improve classification robustness and mitigate bias."},{period:"June 2024 - April 2025",position:"Machine Learning Engineer Consultant",company:"HighQuartile Consultancy Inc",location:"Remote",description:"Developed and deployed machine learning models for various clients, focusing on predictive analytics and data-driven decision-making. Collaborated with cross-functional teams to integrate ML solutions into existing systems."},{period:"June 2023 - May 2024",position:"AI Research Intern",company:"Harvard Medical School - Brigham and Women's Hospital",location:"Cambridge, MA",description:"Conducted research on AI applications in healthcare, focusing on improving diagnostic accuracy and patient outcomes. Assisted in developing machine learning models and analyzing clinical data."}],r={professional:["AI Research","Machine Learning","Data Analysis","Python","TensorFlow & PyTorch","Keras","Scikit-learn","Deep Learning","NLP","Computer Vision","Data Engineering","Cloud Computing","DevOps"],tools:["Jira & Confluence","Microsoft Project","Slack & Teams","Google Analytics","Tableau","AWS & Azure","Git & Version Control"]},o=[{title:"Master of Science in Computer Science",institution:"University of Massachusetts Lowell",year:"2024"},{title:"Master of Technology (M.Tech) in Communication Systems",institution:"SASTRA University, Thanjavur",year:"2022"},{title:"Bachelor of Technology (B.Tech) in Electronics and Communication Engineering",institution:"SASTRA University, Thanjavur",year:"2021"}],a=async()=>{s.value=!0,t("resume_download","button"),(await n()).success||alert("Resume download failed. Please try again."),s.value=!1};return Q(()=>{e("resume")}),{experience:i,skills:r,education:o,downloading:s,downloadResume:a}}},Po={class:"overlay-page resume-page"},Ro={class:"overlay-content"},Oo={class:"overlay-header"},No={class:"header-actions"},Lo={class:"resume-content"},Mo={class:"experience-section"},Do={class:"timeline"},Uo={class:"timeline-date"},xo={class:"timeline-content"},Fo={class:"job-details"},jo={class:"company"},Vo={class:"location"},$o={class:"skills-section"},Bo={class:"skills-grid"},zo={class:"skill-category"},Ho={class:"skills-list"},Wo={class:"skill-category"},qo={class:"skills-list"},Ko={class:"education-section"},Go={class:"education-list"},Jo={class:"edu-institution"},Yo={class:"edu-year"};function Xo(n,e,t,s,i,r){const o=T("BaseButton");return p(),m("div",Po,[c("div",Ro,[c("div",Oo,[e[3]||(e[3]=c("h1",{class:"overlay-title"},"Resume",-1)),c("div",No,[I(o,{variant:"primary",onClick:s.downloadResume,loading:s.downloading},{default:S(()=>e[1]||(e[1]=[Y(" Download CV ",-1)])),_:1,__:[1]},8,["onClick","loading"]),c("button",{class:"overlay-close",onClick:e[0]||(e[0]=a=>n.$emit("close")),"aria-label":"Close overlay"},e[2]||(e[2]=[c("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[c("path",{d:"M18 6L6 18M6 6L18 18",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)]))])]),c("div",Lo,[c("section",Mo,[e[4]||(e[4]=c("h2",null,"Experience",-1)),c("div",Do,[(p(!0),m($,null,B(s.experience,a=>(p(),m("div",{key:a.period,class:"timeline-item"},[c("div",Uo,v(a.period),1),c("div",xo,[c("h3",null,v(a.position),1),c("div",Fo,[c("span",jo,v(a.company),1),c("span",Vo,v(a.location),1)]),c("p",null,v(a.description),1)])]))),128))])]),c("section",$o,[e[7]||(e[7]=c("h2",null,"Professional Skills",-1)),c("div",Bo,[c("div",zo,[e[5]||(e[5]=c("h3",null,"Core Competencies",-1)),c("div",Ho,[(p(!0),m($,null,B(s.skills.professional,a=>(p(),m("span",{key:a,class:"skill-tag"},v(a),1))),128))])]),c("div",Wo,[e[6]||(e[6]=c("h3",null,"Tools & Technologies",-1)),c("div",qo,[(p(!0),m($,null,B(s.skills.tools,a=>(p(),m("span",{key:a,class:"skill-tag"},v(a),1))),128))])])])]),c("section",Ko,[e[8]||(e[8]=c("h2",null,"Education & Certifications",-1)),c("div",Go,[(p(!0),m($,null,B(s.education,a=>(p(),m("div",{key:a.title,class:"education-item"},[c("h4",null,v(a.title),1),c("p",Jo,v(a.institution),1),c("p",Yo,v(a.year),1)]))),128))])])])])])}const Qo=E(Ao,[["render",Xo],["__scopeId","data-v-577cdc23"]]);const Zo={name:"ProjectCard",props:{project:{type:Object,required:!0}},emits:["click"]},ea={class:"project-content"},ta={class:"project-header"},na={class:"project-title"},sa={class:"project-role"},ia={class:"project-description"},ra={class:"project-meta"},oa={class:"project-technologies"},aa={class:"project-details"},ca={class:"project-detail"},la={class:"detail-value"},da={class:"project-detail"},ua={class:"detail-value"},ha={key:0,class:"project-highlights"};function fa(n,e,t,s,i,r){return p(),m("div",{class:"project-card",onClick:e[0]||(e[0]=o=>n.$emit("click"))},[e[4]||(e[4]=oe('<div class="project-image" data-v-9f5958c7><div class="project-placeholder" data-v-9f5958c7><svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9f5958c7><rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor" stroke-width="2" data-v-9f5958c7></rect><circle cx="9" cy="9" r="2" stroke="currentColor" stroke-width="2" data-v-9f5958c7></circle><path d="M21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21" stroke="currentColor" stroke-width="2" data-v-9f5958c7></path></svg></div></div>',1)),c("div",ea,[c("div",ta,[c("h3",na,v(t.project.title),1),c("span",sa,v(t.project.role),1)]),c("p",ia,v(t.project.description),1),c("div",ra,[c("div",oa,[(p(!0),m($,null,B(t.project.technologies,o=>(p(),m("span",{key:o,class:"tech-tag"},v(o),1))),128))]),c("div",aa,[c("div",ca,[e[1]||(e[1]=c("span",{class:"detail-label"},"Duration:",-1)),c("span",la,v(t.project.duration),1)]),c("div",da,[e[2]||(e[2]=c("span",{class:"detail-label"},"Team:",-1)),c("span",ua,v(t.project.teamSize),1)])])]),t.project.highlights?(p(),m("div",ha,[e[3]||(e[3]=c("h4",null,"Key Achievements:",-1)),c("ul",null,[(p(!0),m($,null,B(t.project.highlights,o=>(p(),m("li",{key:o},v(o),1))),128))])])):k("",!0)]),e[5]||(e[5]=c("div",{class:"project-overlay"},[c("div",{class:"overlay-content"},[c("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[c("path",{d:"M7 17L17 7M17 7H7M17 7V17",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]),c("span",null,"View Project")])],-1))])}const pa=E(Zo,[["render",fa],["__scopeId","data-v-9f5958c7"]]);const ma={name:"Projects",components:{ProjectCard:pa},emits:["close"],setup(){const{trackPageView:n,trackInteraction:e}=ee(),t=w([{id:1,title:"Digital Transformation Initiative",role:"Lead Project Manager",description:"Led a comprehensive digital transformation project for a Fortune 500 company, resulting in 40% improvement in operational efficiency and $2M cost savings.",technologies:["Agile","Scrum","Digital Strategy"],duration:"18 months",teamSize:"25+ members",highlights:["40% improvement in operational efficiency","$2M cost savings achieved","Successful migration of legacy systems","Team of 25+ cross-functional members"],url:"https://example.com/digital-transformation",image:"/images/project1.jpg"},{id:2,title:"Mobile App Launch",role:"Senior Project Manager",description:"Managed end-to-end development and launch of a mobile application that achieved 100K+ downloads within the first 3 months and 4.8-star rating.",technologies:["Mobile Development","User Experience","Market Research"],duration:"12 months",teamSize:"15 members",highlights:["100K+ downloads in first 3 months","4.8-star average rating","Featured in App Store","Award-winning UX design"],url:"https://example.com/mobile-app-launch",image:"/images/project2.jpg"},{id:3,title:"Cloud Migration Project",role:"Technical Project Manager",description:"Orchestrated migration of legacy systems to cloud infrastructure, ensuring zero downtime and 99.9% uptime post-migration with enhanced security protocols.",technologies:["Cloud Architecture","DevOps","Security"],duration:"9 months",teamSize:"20 members",highlights:["Zero downtime during migration","99.9% uptime post-migration","Enhanced security protocols","50% reduction in infrastructure costs"],url:"https://example.com/cloud-migration",image:"/images/project3.jpg"},{id:4,title:"E-commerce Platform Redesign",role:"Project Manager",description:"Spearheaded complete redesign of e-commerce platform resulting in 60% increase in conversion rates and improved user experience metrics.",technologies:["UX/UI Design","E-commerce","Analytics"],duration:"6 months",teamSize:"12 members",highlights:["60% increase in conversion rates","Improved user experience metrics","Mobile-first responsive design","Accessibility compliance achieved"],url:"https://example.com/ecommerce-redesign",image:"/images/project4.jpg"}]),s=i=>{e("project_click","project_card",{projectId:i.id,title:i.title}),i.url?window.open(i.url,"_blank"):alert(`Opening ${i.title} project details...`)};return Q(()=>{n("projects")}),{projects:t,openProject:s}}},ga={class:"overlay-page projects-page"},va={class:"overlay-content"},_a={class:"overlay-header"},ya={class:"projects-grid"};function wa(n,e,t,s,i,r){const o=T("ProjectCard");return p(),m("div",ga,[c("div",va,[c("div",_a,[e[2]||(e[2]=oe('<h1 class="overlay-title" data-v-f3a6ade2><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-f3a6ade2><rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor" stroke-width="2" data-v-f3a6ade2></rect><circle cx="9" cy="9" r="2" stroke="currentColor" stroke-width="2" data-v-f3a6ade2></circle><path d="M21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21" stroke="currentColor" stroke-width="2" data-v-f3a6ade2></path></svg> Projects </h1>',1)),c("button",{class:"overlay-close",onClick:e[0]||(e[0]=a=>n.$emit("close")),"aria-label":"Close overlay"},e[1]||(e[1]=[c("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[c("path",{d:"M18 6L6 18M6 6L18 18",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)]))]),e[3]||(e[3]=c("div",{class:"projects-intro"},[c("p",null,"Here are some of the key projects I've led throughout my career. Each project represents a unique challenge and showcases different aspects of my project management expertise.")],-1)),c("div",ya,[(p(!0),m($,null,B(s.projects,a=>(p(),je(o,{key:a.id,project:a,onClick:l=>s.openProject(a)},null,8,["project","onClick"]))),128))])])])}const Ia=E(ma,[["render",wa],["__scopeId","data-v-f3a6ade2"]]),ka=n=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n),de=n=>n!=null&&n.toString().trim().length>0,Ee=(n,e)=>n&&n.toString().length>=e,Te=(n,e)=>!n||n.toString().length<=e,tt=n=>{const e={};return de(n.firstName)?Ee(n.firstName,2)?Te(n.firstName,50)||(e.firstName="First name must be less than 50 characters"):e.firstName="First name must be at least 2 characters":e.firstName="First name is required",de(n.lastName)?Ee(n.lastName,2)?Te(n.lastName,50)||(e.lastName="Last name must be less than 50 characters"):e.lastName="Last name must be at least 2 characters":e.lastName="Last name is required",de(n.email)?ka(n.email)||(e.email="Please enter a valid email address"):e.email="Email is required",de(n.subject)?Ee(n.subject,5)?Te(n.subject,100)||(e.subject="Subject must be less than 100 characters"):e.subject="Subject must be at least 5 characters":e.subject="Subject is required",de(n.message)?Ee(n.message,10)?Te(n.message,1e3)||(e.message="Message must be less than 1000 characters"):e.message="Message must be at least 10 characters":e.message="Message is required",{isValid:Object.keys(e).length===0,errors:e}};const ba={name:"ContactForm",components:{BaseButton:He},emits:["success"],setup(n,{emit:e}){const{submitContact:t}=Un(),{trackInteraction:s}=ee(),i=Wn({firstName:"",lastName:"",email:"",subject:"",message:""}),r=w({}),o=w(!1),a=pe(()=>tt(i).isValid&&Object.keys(r.value).length===0);return{formData:i,errors:r,isSubmitting:o,isFormValid:a,validateField:h=>{const d=tt({[h]:i[h]});d.errors[h]?r.value[h]=d.errors[h]:delete r.value[h]},submitForm:async()=>{const h=tt(i);if(!h.isValid){r.value=h.errors;return}o.value=!0;try{s("form_submit","contact_form");const d=await t(i);d.success?(Object.keys(i).forEach(g=>{i[g]=""}),r.value={},e("success"),s("form_success","contact_form")):(alert("There was an error sending your message. Please try again."),s("form_error","contact_form",{error:d.error}))}catch(d){alert("There was an error sending your message. Please try again."),console.error("Form submission error:",d)}finally{o.value=!1}}}}},Ea={class:"contact-form-container"},Ta={class:"form-row"},Sa={class:"form-group"},Ca={key:0,class:"error-message"},Aa={class:"form-group"},Pa={key:0,class:"error-message"},Ra={class:"form-group"},Oa={key:0,class:"error-message"},Na={class:"form-group"},La={key:0,class:"error-message"},Ma={class:"form-group"},Da={key:0,class:"error-message"};function Ua(n,e,t,s,i,r){const o=T("BaseButton");return p(),m("div",Ea,[c("form",{onSubmit:e[10]||(e[10]=ve((...a)=>s.submitForm&&s.submitForm(...a),["prevent"])),class:"contact-form"},[c("div",Ta,[c("div",Sa,[e[11]||(e[11]=c("label",{for:"firstName"},"First Name *",-1)),G(c("input",{id:"firstName",type:"text","onUpdate:modelValue":e[0]||(e[0]=a=>s.formData.firstName=a),class:K({error:s.errors.firstName}),onBlur:e[1]||(e[1]=a=>s.validateField("firstName"))},null,34),[[J,s.formData.firstName]]),s.errors.firstName?(p(),m("span",Ca,v(s.errors.firstName),1)):k("",!0)]),c("div",Aa,[e[12]||(e[12]=c("label",{for:"lastName"},"Last Name *",-1)),G(c("input",{id:"lastName",type:"text","onUpdate:modelValue":e[2]||(e[2]=a=>s.formData.lastName=a),class:K({error:s.errors.lastName}),onBlur:e[3]||(e[3]=a=>s.validateField("lastName"))},null,34),[[J,s.formData.lastName]]),s.errors.lastName?(p(),m("span",Pa,v(s.errors.lastName),1)):k("",!0)])]),c("div",Ra,[e[13]||(e[13]=c("label",{for:"email"},"Email *",-1)),G(c("input",{id:"email",type:"email","onUpdate:modelValue":e[4]||(e[4]=a=>s.formData.email=a),class:K({error:s.errors.email}),onBlur:e[5]||(e[5]=a=>s.validateField("email"))},null,34),[[J,s.formData.email]]),s.errors.email?(p(),m("span",Oa,v(s.errors.email),1)):k("",!0)]),c("div",Na,[e[14]||(e[14]=c("label",{for:"subject"},"Subject *",-1)),G(c("input",{id:"subject",type:"text","onUpdate:modelValue":e[6]||(e[6]=a=>s.formData.subject=a),class:K({error:s.errors.subject}),onBlur:e[7]||(e[7]=a=>s.validateField("subject"))},null,34),[[J,s.formData.subject]]),s.errors.subject?(p(),m("span",La,v(s.errors.subject),1)):k("",!0)]),c("div",Ma,[e[15]||(e[15]=c("label",{for:"message"},"Message *",-1)),G(c("textarea",{id:"message","onUpdate:modelValue":e[8]||(e[8]=a=>s.formData.message=a),class:K({error:s.errors.message}),rows:"5",onBlur:e[9]||(e[9]=a=>s.validateField("message"))},null,34),[[J,s.formData.message]]),s.errors.message?(p(),m("span",Da,v(s.errors.message),1)):k("",!0)]),I(o,{type:"submit",variant:"primary",size:"large",loading:s.isSubmitting,disabled:!s.isFormValid,"full-width":""},{default:S(()=>[Y(v(s.isSubmitting?"Sending...":"Send Message"),1)]),_:1},8,["loading","disabled"])],32)])}const xa=E(ba,[["render",Ua],["__scopeId","data-v-b2055081"]]);const Fa={name:"Contact",components:{ContactForm:xa},emits:["close"],setup(){const{trackPageView:n}=ee(),e=()=>{alert("Thank you for your message! I will get back to you soon.")};return Q(()=>{n("contact")}),{handleContactSuccess:e}}},ja={class:"overlay-page contact-page"},Va={class:"overlay-content"},$a={class:"overlay-header"},Ba={class:"contact-content"};function za(n,e,t,s,i,r){const o=T("ContactForm");return p(),m("div",ja,[c("div",Va,[c("div",$a,[e[2]||(e[2]=c("h1",{class:"overlay-title"},[c("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[c("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z",stroke:"currentColor","stroke-width":"2"}),c("polyline",{points:"22,6 12,13 2,6",stroke:"currentColor","stroke-width":"2"})]),Y(" Let's talk ")],-1)),c("button",{class:"overlay-close",onClick:e[0]||(e[0]=a=>n.$emit("close")),"aria-label":"Close overlay"},e[1]||(e[1]=[c("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[c("path",{d:"M18 6L6 18M6 6L18 18",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)]))]),e[4]||(e[4]=c("div",{class:"contact-intro"},[c("p",null,"Ready to start your next project? Get in touch and let's discuss how we can work together to achieve your goals.")],-1)),c("div",Ba,[I(o,{onSuccess:s.handleContactSuccess},null,8,["onSuccess"]),e[3]||(e[3]=oe('<div class="contact-info" data-v-98c79717><div class="contact-item" data-v-98c79717><div class="contact-icon" data-v-98c79717><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-98c79717><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" stroke-width="2" data-v-98c79717></path></svg></div><div class="contact-details" data-v-98c79717><h3 data-v-98c79717>Call</h3><p data-v-98c79717>+1 (555) 123-4567</p></div></div><div class="contact-item" data-v-98c79717><div class="contact-icon" data-v-98c79717><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-98c79717><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" stroke-width="2" data-v-98c79717></path><polyline points="22,6 12,13 2,6" stroke="currentColor" stroke-width="2" data-v-98c79717></polyline></svg></div><div class="contact-details" data-v-98c79717><h3 data-v-98c79717>Write</h3><p data-v-98c79717>tinendra.kandula@gmail.com</p></div></div><div class="contact-item" data-v-98c79717><div class="contact-icon" data-v-98c79717><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-98c79717><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="currentColor" stroke-width="2" data-v-98c79717></path><rect x="2" y="9" width="4" height="12" stroke="currentColor" stroke-width="2" data-v-98c79717></rect><circle cx="4" cy="4" r="2" stroke="currentColor" stroke-width="2" data-v-98c79717></circle></svg></div><div class="contact-details" data-v-98c79717><h3 data-v-98c79717>Connect</h3><div class="social-links" data-v-98c79717><a href="https://www.linkedin.com/in/tinendra-kumar/" class="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" data-v-98c79717> LinkedIn </a><a href="https://x.com/TinendraKumar/" class="social-link" aria-label="Twitter" target="_blank" rel="noopener noreferrer" data-v-98c79717> Twitter </a></div></div></div></div>',1))])])])}const Ha=E(Fa,[["render",za],["__scopeId","data-v-98c79717"]]);function Wa(){const n=Ln(),e=w(!1),t=w(null);return{isAuthenticated:e,authenticateAdmin:async(o,a)=>{try{return t.value=null,await ui(n,o,a),e.value=!0,!0}catch(l){return t.value=l.message,!1}},logout:()=>{pi(n).then(()=>{e.value=!1}).catch(o=>{t.value=o.message})},checkAuthStatus:()=>new Promise(o=>{kn(n,a=>{e.value=!!a,o(!!a)})}),error:t}}const qa={name:"App",components:{Navbar:io,Footer:uo,BaseModal:_o,BaseButton:He,About:Eo,Resume:Qo,Projects:Ia,Contact:Ha},setup(){const n=qn(),{authenticateAdmin:e}=Wa(),{trackVisitorSession:t}=ee(),s=w(null),i=w(!1),r=w(""),o=w(""),a=w(0),l=w(""),u=()=>{try{document.body.classList.remove("overlay-active"),document.body.style.overflow="",document.body.style.position="",document.body.style.top="",document.body.style.width="",console.log("Body styles reset")}catch(y){console.error("Error resetting body styles:",y)}};Q(()=>{t(),u()});const h=y=>{a.value=window.pageYOffset,document.body.style.position="fixed",document.body.style.top=`-${a.value}px`,document.body.style.width="100%",document.body.classList.add("overlay-active"),s.value=y},d=()=>{s.value=null,u(),window.scrollTo(0,a.value)},g=async()=>{l.value="",await e(r.value,o.value)?(i.value=!1,u(),window.scrollTo(0,0),n.push("/admin")):l.value="Invalid email or password. Please try again.",o.value=""},_=()=>{u(),i.value=!0};return n.afterEach(()=>{u()}),{activeOverlay:s,showAdminModal:i,adminEmail:r,adminPassword:o,setActiveOverlay:h,clearActiveOverlay:d,checkAdminPassword:g,openAdminModal:_,errorMessage:l}}},Ka={id:"app"},Ga={class:"admin-login"},Ja={key:0,class:"error-message"};function Ya(n,e,t,s,i,r){const o=T("Navbar"),a=T("router-view"),l=T("Footer"),u=T("BaseButton"),h=T("BaseModal");return p(),m("div",Ka,[e[9]||(e[9]=oe('<div class="bg-elements"><div class="floating-element floating-element-1"></div><div class="floating-element floating-element-2"></div><div class="floating-element floating-element-3"></div><div class="mesh-gradient"></div></div>',1)),I(o,{onShowOverlay:s.setActiveOverlay},null,8,["onShowOverlay"]),I(a,{onShowOverlay:s.setActiveOverlay,class:"main-content-area"},null,8,["onShowOverlay"]),I(Le,{name:"fade"},{default:S(()=>[s.activeOverlay?(p(),m("div",{key:0,class:"overlay-backdrop",onClick:e[0]||(e[0]=ve((...d)=>s.clearActiveOverlay&&s.clearActiveOverlay(...d),["self"]))},[I(Le,{name:"slide-up"},{default:S(()=>[(p(),je(Kn(s.activeOverlay),{onClose:s.clearActiveOverlay,class:"overlay-content-wrapper"},null,40,["onClose"]))]),_:1})])):k("",!0)]),_:1}),I(l,{onAdminAccess:s.openAdminModal},null,8,["onAdminAccess"]),I(h,{modelValue:s.showAdminModal,"onUpdate:modelValue":e[5]||(e[5]=d=>s.showAdminModal=d),onClose:e[6]||(e[6]=d=>s.showAdminModal=!1),title:"Admin Access",size:"small"},{default:S(()=>[c("div",Ga,[e[8]||(e[8]=c("h3",null,"Admin Access",-1)),G(c("input",{type:"email","onUpdate:modelValue":e[1]||(e[1]=d=>s.adminEmail=d),placeholder:"Admin email",onKeyup:e[2]||(e[2]=bt((...d)=>s.checkAdminPassword&&s.checkAdminPassword(...d),["enter"]))},null,544),[[J,s.adminEmail]]),G(c("input",{type:"password","onUpdate:modelValue":e[3]||(e[3]=d=>s.adminPassword=d),placeholder:"Enter admin password",onKeyup:e[4]||(e[4]=bt((...d)=>s.checkAdminPassword&&s.checkAdminPassword(...d),["enter"]))},null,544),[[J,s.adminPassword]]),s.errorMessage?(p(),m("p",Ja,v(s.errorMessage),1)):k("",!0),I(u,{onClick:s.checkAdminPassword},{default:S(()=>e[7]||(e[7]=[Y("Login",-1)])),_:1,__:[7]},8,["onClick"])])]),_:1},8,["modelValue"])])}const Xa=E(qa,[["render",Ya]]);Co();const gt=Gn(Xa),Qa=Jn();gt.use(Qa);gt.use(Mn);gt.mount("#app");export{He as B,E as _,Un as a,Wa as u};
//# sourceMappingURL=index-39300b0a.js.map
