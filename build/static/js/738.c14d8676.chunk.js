/*! For license information please see 738.c14d8676.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkerp_inventory=self.webpackChunkerp_inventory||[]).push([[738],{738:(t,e,r)=>{r.r(e),r.d(e,{createSwipeBackGesture:()=>S});var s=r(384);const i=t=>t&&""!==t.dir?"rtl"===t.dir.toLowerCase():"rtl"===(null===document||void 0===document?void 0:document.dir.toLowerCase());class n{constructor(t,e,r,s,i){this.id=e,this.name=r,this.disableScroll=i,this.priority=1e6*s+e,this.ctrl=t}canStart(){return!!this.ctrl&&this.ctrl.canStart(this.name)}start(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)}capture(){if(!this.ctrl)return!1;const t=this.ctrl.capture(this.name,this.id,this.priority);return t&&this.disableScroll&&this.ctrl.disableScroll(this.id),t}release(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))}destroy(){this.release(),this.ctrl=void 0}}class l{constructor(t,e,r,s){this.id=e,this.disable=r,this.disableScroll=s,this.ctrl=t}block(){if(this.ctrl){if(this.disable)for(const t of this.disable)this.ctrl.disableGesture(t,this.id);this.disableScroll&&this.ctrl.disableScroll(this.id)}}unblock(){if(this.ctrl){if(this.disable)for(const t of this.disable)this.ctrl.enableGesture(t,this.id);this.disableScroll&&this.ctrl.enableScroll(this.id)}}destroy(){this.unblock(),this.ctrl=void 0}}const a="backdrop-no-scroll",o=new class{constructor(){this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set}createGesture(t){var e;return new n(this,this.newID(),t.name,null!==(e=t.priority)&&void 0!==e?e:0,!!t.disableScroll)}createBlocker(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new l(this,this.newID(),t.disable,!!t.disableScroll)}start(t,e,r){return this.canStart(t)?(this.requestedStart.set(e,r),!0):(this.requestedStart.delete(e),!1)}capture(t,e,r){if(!this.start(t,e,r))return!1;const s=this.requestedStart;let i=-1e4;if(s.forEach((t=>{i=Math.max(i,t)})),i===r){this.capturedId=e,s.clear();const r=new CustomEvent("ionGestureCaptured",{detail:{gestureName:t}});return document.dispatchEvent(r),!0}return s.delete(e),!1}release(t){this.requestedStart.delete(t),this.capturedId===t&&(this.capturedId=void 0)}disableGesture(t,e){let r=this.disabledGestures.get(t);void 0===r&&(r=new Set,this.disabledGestures.set(t,r)),r.add(e)}enableGesture(t,e){const r=this.disabledGestures.get(t);void 0!==r&&r.delete(e)}disableScroll(t){this.disabledScroll.add(t),1===this.disabledScroll.size&&document.body.classList.add(a)}enableScroll(t){this.disabledScroll.delete(t),0===this.disabledScroll.size&&document.body.classList.remove(a)}canStart(t){return void 0===this.capturedId&&!this.isDisabled(t)}isCaptured(){return void 0!==this.capturedId}isScrollDisabled(){return this.disabledScroll.size>0}isDisabled(t){const e=this.disabledGestures.get(t);return!!(e&&e.size>0)}newID(){return this.gestureId++,this.gestureId}},c=(t,e,r,s)=>{const i=d(t)?{capture:!!s.capture,passive:!!s.passive}:!!s.capture;let n,l;return t.__zone_symbol__addEventListener?(n="__zone_symbol__addEventListener",l="__zone_symbol__removeEventListener"):(n="addEventListener",l="removeEventListener"),t[n](e,r,i),()=>{t[l](e,r,i)}},d=t=>{if(void 0===u)try{const e=Object.defineProperty({},"passive",{get:()=>{u=!0}});t.addEventListener("optsTest",(()=>{}),e)}catch(e){u=!1}return!!u};let u;const h=t=>t instanceof Document?t:t.ownerDocument,v=t=>{let e=!1,r=!1,s=!0,i=!1;const n=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},t),l=n.canStart,a=n.onWillStart,d=n.onStart,u=n.onEnd,v=n.notCaptured,S=n.onMove,y=n.threshold,f=n.passive,g=n.blurOnStart,X={type:"pan",startX:0,startY:0,startTime:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,currentTime:0,event:void 0,data:void 0},w=((t,e,r)=>{const s=r*(Math.PI/180),i="x"===t,n=Math.cos(s),l=e*e;let a=0,o=0,c=!1,d=0;return{start(t,e){a=t,o=e,d=0,c=!0},detect(t,e){if(!c)return!1;const r=t-a,s=e-o,u=r*r+s*s;if(u<l)return!1;const h=Math.sqrt(u),v=(i?r:s)/h;return d=v>n?1:v<-n?-1:0,c=!1,!0},isGesture:()=>0!==d,getDirection:()=>d}})(n.direction,n.threshold,n.maxAngle),Y=o.createGesture({name:t.gestureName,priority:t.gesturePriority,disableScroll:t.disableScroll}),_=()=>{e&&(i=!1,S&&S(X))},G=()=>!!Y.capture()&&(e=!0,s=!1,X.startX=X.currentX,X.startY=X.currentY,X.startTime=X.currentTime,a?a(X).then(D):D(),!0),D=()=>{g&&(()=>{if("undefined"!==typeof document){const t=document.activeElement;(null===t||void 0===t?void 0:t.blur)&&t.blur()}})(),d&&d(X),s=!0},k=()=>{e=!1,r=!1,i=!1,s=!0,Y.release()},E=t=>{const r=e,i=s;k(),i&&(b(X,t),r?u&&u(X):v&&v(X))},I=((t,e,r,s,i)=>{let n,l,a,o,d,u,v,b=0;const p=s=>{b=Date.now()+2e3,e(s)&&(!l&&r&&(l=c(t,"touchmove",r,i)),a||(a=c(s.target,"touchend",S,i)),o||(o=c(s.target,"touchcancel",S,i)))},m=s=>{b>Date.now()||e(s)&&(!u&&r&&(u=c(h(t),"mousemove",r,i)),v||(v=c(h(t),"mouseup",y,i)))},S=t=>{f(),s&&s(t)},y=t=>{g(),s&&s(t)},f=()=>{l&&l(),a&&a(),o&&o(),l=a=o=void 0},g=()=>{u&&u(),v&&v(),u=v=void 0},X=()=>{f(),g()},w=function(){arguments.length>0&&void 0!==arguments[0]&&!arguments[0]?(n&&n(),d&&d(),n=d=void 0,X()):(n||(n=c(t,"touchstart",p,i)),d||(d=c(t,"mousedown",m,i)))};return{enable:w,stop:X,destroy:()=>{w(!1),s=r=e=void 0}}})(n.el,(t=>{const e=m(t);return!(r||!s)&&(p(t,X),X.startX=X.currentX,X.startY=X.currentY,X.startTime=X.currentTime=e,X.velocityX=X.velocityY=X.deltaX=X.deltaY=0,X.event=t,(!l||!1!==l(X))&&(Y.release(),!!Y.start()&&(r=!0,0===y?G():(w.start(X.startX,X.startY),!0))))}),(t=>{e?!i&&s&&(i=!0,b(X,t),requestAnimationFrame(_)):(b(X,t),w.detect(X.currentX,X.currentY)&&(w.isGesture()&&G()||L()))}),E,{capture:!1,passive:f}),L=()=>{k(),I.stop(),v&&v(X)};return{enable(){let t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];t||(e&&E(void 0),k()),I.enable(t)},destroy(){Y.destroy(),I.destroy()}}},b=(t,e)=>{if(!e)return;const r=t.currentX,s=t.currentY,i=t.currentTime;p(e,t);const n=t.currentX,l=t.currentY,a=(t.currentTime=m(e))-i;if(a>0&&a<100){const e=(n-r)/a,i=(l-s)/a;t.velocityX=.7*e+.3*t.velocityX,t.velocityY=.7*i+.3*t.velocityY}t.deltaX=n-t.startX,t.deltaY=l-t.startY,t.event=e},p=(t,e)=>{let r=0,s=0;if(t){const e=t.changedTouches;if(e&&e.length>0){const t=e[0];r=t.clientX,s=t.clientY}else void 0!==t.pageX&&(r=t.pageX,s=t.pageY)}e.currentX=r,e.currentY=s},m=t=>t.timeStamp||Date.now(),S=(t,e,r,n,l)=>{const a=t.ownerDocument.defaultView;let o=i(t);const c=t=>o?-t.deltaX:t.deltaX;return v({el:t,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:r=>(o=i(t),(t=>{const{startX:e}=t;return o?e>=a.innerWidth-50:e<=50})(r)&&e()),onStart:r,onMove:t=>{const e=c(t)/a.innerWidth;n(e)},onEnd:t=>{const e=c(t),r=a.innerWidth,i=e/r,n=(t=>o?-t.velocityX:t.velocityX)(t),d=n>=0&&(n>.2||e>r/2),u=(d?1-i:i)*r;let h=0;if(u>5){const t=u/Math.abs(n);h=Math.min(t,540)}l(d,i<=0?.01:(0,s.k)(0,i,.9999),h)}})}}}]);
//# sourceMappingURL=738.c14d8676.chunk.js.map