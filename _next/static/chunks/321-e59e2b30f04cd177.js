(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[321],{2350:function(){},3454:function(e,t,r){"use strict";var n,i;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(i=r.g.process)?void 0:i.env)?r.g.process:r(7663)},2470:function(e,t,r){var n=r(3454);r(2350);var i=r(7294),s=i&&"object"==typeof i&&"default"in i?i:{default:i};function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var u=void 0!==n&&n.env&&!0,l=function(e){return"[object String]"===Object.prototype.toString.call(e)},a=function(){function e(e){var t=void 0===e?{}:e,r=t.name,n=void 0===r?"stylesheet":r,i=t.optimizeForSpeed,s=void 0===i?u:i;c(l(n),"`name` must be a string"),this._name=n,this._deletedRulePlaceholder="#"+n+"-deleted-rule____{}",c("boolean"==typeof s,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=s,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var o=document.querySelector('meta[property="csp-nonce"]');this._nonce=o?o.getAttribute("content"):null}var t,r=e.prototype;return r.setOptimizeForSpeed=function(e){c("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),c(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},r.isOptimizeForSpeed=function(){return this._optimizeForSpeed},r.inject=function(){var e=this;if(c(!this._injected,"sheet already injected"),this._injected=!0,this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(u||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0);return}this._serverSheet={cssRules:[],insertRule:function(t,r){return"number"==typeof r?e._serverSheet.cssRules[r]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),r},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},r.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},r.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},r.insertRule=function(e,t){if(c(l(e),"`insertRule` accepts only strings"),this._optimizeForSpeed){var r=this.getSheet();"number"!=typeof t&&(t=r.cssRules.length);try{r.insertRule(e,t)}catch(n){return u||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var i=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,i))}return this._rulesCount++},r.replaceRule=function(e,t){if(this._optimizeForSpeed){var r=this.getSheet();if(t.trim()||(t=this._deletedRulePlaceholder),!r.cssRules[e])return e;r.deleteRule(e);try{r.insertRule(t,e)}catch(n){u||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),r.insertRule(this._deletedRulePlaceholder,e)}}else{var i=this._tags[e];c(i,"old rule at index `"+e+"` not found"),i.textContent=t}return e},r.deleteRule=function(e){if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];c(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}},r.flush=function(){this._injected=!1,this._rulesCount=0,this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]},r.cssRules=function(){var e=this;return this._tags.reduce(function(t,r){return r?t=t.concat(Array.prototype.map.call(e.getSheetForTag(r).cssRules,function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[])},r.makeStyleTag=function(e,t,r){t&&c(l(t),"makeStyleTag accepts only strings as second parameter");var n=document.createElement("style");this._nonce&&n.setAttribute("nonce",this._nonce),n.type="text/css",n.setAttribute("data-"+e,""),t&&n.appendChild(document.createTextNode(t));var i=document.head||document.getElementsByTagName("head")[0];return r?i.insertBefore(n,r):i.appendChild(n),n},o(e.prototype,[{key:"length",get:function(){return this._rulesCount}}]),t&&o(e,t),e}();function c(e,t){if(!e)throw Error("StyleSheet: "+t+".")}var h=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return t>>>0},d={};function f(e,t){if(!t)return"jsx-"+e;var r=String(t),n=e+r;return d[n]||(d[n]="jsx-"+h(e+"-"+r)),d[n]}function m(e,t){var r=e+t;return d[r]||(d[r]=t.replace(/__jsx-style-dynamic-selector/g,e)),d[r]}var p=function(){function e(e){var t=void 0===e?{}:e,r=t.styleSheet,n=void 0===r?null:r,i=t.optimizeForSpeed,s=void 0!==i&&i;this._sheet=n||new a({name:"styled-jsx",optimizeForSpeed:s}),this._sheet.inject(),n&&"boolean"==typeof s&&(this._sheet.setOptimizeForSpeed(s),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer||(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var r=this.getIdAndRules(e),n=r.styleId,i=r.rules;if(n in this._instancesCounts){this._instancesCounts[n]+=1;return}var s=i.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return -1!==e});this._indices[n]=s,this._instancesCounts[n]=1},t.remove=function(e){var t=this,r=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw Error("StyleSheetRegistry: "+t+".")}(r in this._instancesCounts,"styleId: `"+r+"` not found"),this._instancesCounts[r]-=1,this._instancesCounts[r]<1){var n=this._fromServer&&this._fromServer[r];n?(n.parentNode.removeChild(n),delete this._fromServer[r]):(this._indices[r].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[r]),delete this._instancesCounts[r]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],r=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return r[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return Boolean(e[1])}))},t.styles=function(e){var t,r;return t=this.cssRules(),void 0===(r=e)&&(r={}),t.map(function(e){var t=e[0],n=e[1];return s.default.createElement("style",{id:"__"+t,key:"__"+t,nonce:r.nonce?r.nonce:void 0,dangerouslySetInnerHTML:{__html:n}})})},t.getIdAndRules=function(e){var t=e.children,r=e.dynamic,n=e.id;if(r){var i=f(n,r);return{styleId:i,rules:Array.isArray(t)?t.map(function(e){return m(i,e)}):[m(i,t)]}}return{styleId:f(n),rules:Array.isArray(t)?t:[t]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})},e}(),v=i.createContext(null);v.displayName="StyleSheetContext";var _=s.default.useInsertionEffect||s.default.useLayoutEffect,y=new p;function S(e){var t=y||i.useContext(v);return t&&_(function(){return t.add(e),function(){t.remove(e)}},[e.id,String(e.dynamic)]),null}S.dynamic=function(e){return e.map(function(e){return f(e[0],e[1])}).join(" ")},t.style=S},1857:function(e,t,r){"use strict";e.exports=r(2470).style},7663:function(e){!function(){var t={229:function(e){var t,r,n,i=e.exports={};function s(){throw Error("setTimeout has not been defined")}function o(){throw Error("clearTimeout has not been defined")}function u(e){if(t===setTimeout)return setTimeout(e,0);if((t===s||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:s}catch(e){t=s}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(n){r=o}}();var l=[],a=!1,c=-1;function h(){a&&n&&(a=!1,n.length?l=n.concat(l):c=-1,l.length&&d())}function d(){if(!a){var e=u(h);a=!0;for(var t=l.length;t;){for(n=l,l=[];++c<t;)n&&n[c].run();c=-1,t=l.length}n=null,a=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(n){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new f(e,t)),1!==l.length||a||u(d)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var s=r[e]={exports:{}},o=!0;try{t[e](s,s.exports,n),o=!1}finally{o&&delete r[e]}return s.exports}n.ab="//";var i=n(229);e.exports=i}()},9008:function(e,t,r){e.exports=r(3121)},4544:function(e,t){"use strict";t.Xw=t.um=void 0;let r=(e,t)=>{let r=Math.abs(e),n=Math.abs(t);return r<3e3&&n<3e3?Math.sqrt(r*r+n*n):(r<n?(r=n,n=e/t):n=t/e,r*Math.sqrt(1+n*n))},n=(e,t)=>{let r={re:0,im:0};if(null==e)r.re=r.im=0;else if(null!=t&&"number"==typeof e)r.re=e,r.im=t;else switch(typeof e){case"object":r.im=e.im,r.re=e.re;break;case"number":r.im=0,r.re=e;break;default:throw Error("Wrong params in Complex constructor")}return r};class i{constructor(e,t){let r=n(e,t);this.re=r.re,this.im=r.im}add(e){let t=new i(e);return new i(this.re+t.re,this.im+t.im)}mul(e){let t=new i(e);return new i(this.re*t.re-this.im*t.im,this.re*t.im+this.im*t.re)}div(e){let t,r;let n=new i(e),s=this.re,o=this.im,u=n.re,l=n.im;return 0===l?new i(s/u,o/u):Math.abs(u)<Math.abs(l)?(r=u/l,t=u*r+l,new i((s*r+o)/t,(o*r-s)/t)):(r=l/u,t=l*r+u,new i((s+o*r)/t,(o-s*r)/t))}sqrt(){let e,t;let r=this.re,n=this.im,s=this.abs();if(r>=0){if(0===n)return new i(Math.sqrt(r),0);e=.5*Math.sqrt(2*(s+r))}else e=Math.abs(n)/Math.sqrt(2*(s-r));return t=r<=0?.5*Math.sqrt(2*(s-r)):Math.abs(n)/Math.sqrt(2*(s+r)),new i(e,n<0?-t:t)}exp(){let e=Math.exp(this.re);return new i(e*Math.cos(this.im),e*Math.sin(this.im))}abs(){return r(this.re,this.im)}valueOf(){return 0===this.im?this.re:null}isZero(){return 0===this.re&&0===this.im}isInfinite(){return!(this.isNaN()||this.isFinite())}isNaN(){return isNaN(this.re)||isNaN(this.im)}isFinite(){return isFinite(this.re)&&isFinite(this.im)}}let s=(e,t,r,n,s)=>{let o=n-r,u=new i(t*t-4*e).sqrt(),l=new i(-1).div(2).div(u);return e=>{var n;let a=new i(2*s).mul(u.mul(-1).add(-t).mul(e).mul(.5).exp()),c=new i(-2*s).mul(u.add(-t).mul(e).mul(.5).exp()),h=new i(-t).mul(o).mul(u.mul(-1).add(-t).mul(e).mul(.5).exp()),d=new i(t).mul(o).mul(u.add(-t).mul(e).mul(.5).exp()),f=u.mul(o).mul(u.mul(-1).add(-t).mul(e).mul(.5).exp()),m=u.mul(o).mul(u.add(-t).mul(e).mul(.5).exp()),p=u.mul(o).mul(-2),v=new i(0).add(a).add(c).add(h).add(d).add(f).add(m).add(p).mul(l);return(null!==(n=v.valueOf())&&void 0!==n?n:0)+r}};t.um={default:{tension:170,friction:26},gentle:{tension:120,friction:14},wobbly:{tension:180,friction:12},stiff:{tension:210,friction:20},slow:{tension:280,friction:60},molasses:{tension:280,friction:120}};let o=["perspective","translateY","translateX","translateZ","scale","scaleX","scaleY"],u=({from:e,to:t,tension:r,friction:n,startingVelocity:i=0})=>s(r,n,e,t,i),l=(e,{time:t=1}={})=>{let r=e.filter(e=>!o.includes(e.property)).map(e=>Object.assign(Object.assign({},e),{f:u(Object.assign({},e))})),n=e.filter(e=>o.includes(e.property)).map(e=>Object.assign(Object.assign({},e),{f:u(Object.assign({},e))})),i="";for(let s=0;s<=100;s++){if(i+=`${s}% {`,i+="\n",n.length>0){i+=" transform: ";for(let l=0;l<n.length;l++){let{property:a,unit:c=""}=n[l],h=s*t/100,{f:d}=n[l],f=d(h);i+=`${a}(${f}${c}) `}i+=";\n"}for(let m=0;m<r.length;m++){let{property:p,unit:v=""}=r[m],_=s*t/100,{f:y}=r[m],S=y(_);i+=`${p}: ${S}${v};`,i+="\n"}i+="}",i+="\n"}return i};t.Xw=l}}]);