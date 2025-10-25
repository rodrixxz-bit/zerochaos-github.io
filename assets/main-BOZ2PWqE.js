var ic=Object.defineProperty;var ac=(e,t,n)=>t in e?ic(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var C=(e,t,n)=>ac(e,typeof t!="symbol"?t+"":t,n);import{M as Se,D as oc}from"./bootstrap-BWZ_srF0.js";import{c as sc}from"./vendor-CZnAS8i4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();var ea={exports:{}};/*!
  * Bootstrap v5.3.8 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Yo;function rc(){return Yo||(Yo=1,function(e,t){(function(n,a){e.exports=a()})(sc,function(){const n=new Map,a={set(l,i,s){n.has(l)||n.set(l,new Map);const c=n.get(l);c.has(i)||c.size===0?c.set(i,s):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(c.keys())[0]}.`)},get:(l,i)=>n.has(l)&&n.get(l).get(i)||null,remove(l,i){if(!n.has(l))return;const s=n.get(l);s.delete(i),s.size===0&&n.delete(l)}},o="transitionend",r=l=>(l&&window.CSS&&window.CSS.escape&&(l=l.replace(/#([^\s"#']+)/g,(i,s)=>`#${CSS.escape(s)}`)),l),d=l=>l==null?`${l}`:Object.prototype.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase(),f=l=>{l.dispatchEvent(new Event(o))},h=l=>!(!l||typeof l!="object")&&(l.jquery!==void 0&&(l=l[0]),l.nodeType!==void 0),m=l=>h(l)?l.jquery?l[0]:l:typeof l=="string"&&l.length>0?document.querySelector(r(l)):null,k=l=>{if(!h(l)||l.getClientRects().length===0)return!1;const i=getComputedStyle(l).getPropertyValue("visibility")==="visible",s=l.closest("details:not([open])");if(!s)return i;if(s!==l){const c=l.closest("summary");if(c&&c.parentNode!==s||c===null)return!1}return i},v=l=>!l||l.nodeType!==Node.ELEMENT_NODE||!!l.classList.contains("disabled")||(l.disabled!==void 0?l.disabled:l.hasAttribute("disabled")&&l.getAttribute("disabled")!=="false"),D=l=>{if(!document.documentElement.attachShadow)return null;if(typeof l.getRootNode=="function"){const i=l.getRootNode();return i instanceof ShadowRoot?i:null}return l instanceof ShadowRoot?l:l.parentNode?D(l.parentNode):null},X=()=>{},ae=l=>{l.offsetHeight},ee=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,Ee=[],pe=()=>document.documentElement.dir==="rtl",ve=l=>{var i;i=()=>{const s=ee();if(s){const c=l.NAME,p=s.fn[c];s.fn[c]=l.jQueryInterface,s.fn[c].Constructor=l,s.fn[c].noConflict=()=>(s.fn[c]=p,l.jQueryInterface)}},document.readyState==="loading"?(Ee.length||document.addEventListener("DOMContentLoaded",()=>{for(const s of Ee)s()}),Ee.push(i)):i()},ke=(l,i=[],s=l)=>typeof l=="function"?l.call(...i):s,wt=(l,i,s=!0)=>{if(!s)return void ke(l);const c=(b=>{if(!b)return 0;let{transitionDuration:_,transitionDelay:I}=window.getComputedStyle(b);const S=Number.parseFloat(_),P=Number.parseFloat(I);return S||P?(_=_.split(",")[0],I=I.split(",")[0],1e3*(Number.parseFloat(_)+Number.parseFloat(I))):0})(i)+5;let p=!1;const u=({target:b})=>{b===i&&(p=!0,i.removeEventListener(o,u),ke(l))};i.addEventListener(o,u),setTimeout(()=>{p||f(i)},c)},rt=(l,i,s,c)=>{const p=l.length;let u=l.indexOf(i);return u===-1?!s&&c?l[p-1]:l[0]:(u+=s?1:-1,c&&(u=(u+p)%p),l[Math.max(0,Math.min(u,p-1))])},ut=/[^.]*(?=\..*)\.|.*/,Ft=/\..*/,dn=/::\d+$/,mt={};let _t=1;const Rn={mouseenter:"mouseover",mouseleave:"mouseout"},yi=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function pn(l,i){return i&&`${i}::${_t++}`||l.uidEvent||_t++}function un(l){const i=pn(l);return l.uidEvent=i,mt[i]=mt[i]||{},mt[i]}function mn(l,i,s=null){return Object.values(l).find(c=>c.callable===i&&c.delegationSelector===s)}function Mn(l,i,s){const c=typeof i=="string",p=c?s:i||s;let u=E(l);return yi.has(u)||(u=l),[c,p,u]}function Ke(l,i,s,c,p){if(typeof i!="string"||!l)return;let[u,b,_]=Mn(i,s,c);i in Rn&&(b=(U=>function(O){if(!O.relatedTarget||O.relatedTarget!==O.delegateTarget&&!O.delegateTarget.contains(O.relatedTarget))return U.call(this,O)})(b));const I=un(l),S=I[_]||(I[_]={}),P=mn(S,b,u?s:null);if(P)return void(P.oneOff=P.oneOff&&p);const T=pn(b,i.replace(ut,"")),H=u?function(R,U,O){return function q(le){const ue=R.querySelectorAll(U);for(let{target:W}=le;W&&W!==this;W=W.parentNode)for(const te of ue)if(te===W)return fn(le,{delegateTarget:W}),q.oneOff&&y.off(R,le.type,U,O),O.apply(W,[le])}}(l,s,b):function(R,U){return function O(q){return fn(q,{delegateTarget:R}),O.oneOff&&y.off(R,q.type,U),U.apply(R,[q])}}(l,b);H.delegationSelector=u?s:null,H.callable=b,H.oneOff=p,H.uidEvent=T,S[T]=H,l.addEventListener(_,H,u)}function x(l,i,s,c,p){const u=mn(i[s],c,p);u&&(l.removeEventListener(s,u,!!p),delete i[s][u.uidEvent])}function A(l,i,s,c){const p=i[s]||{};for(const[u,b]of Object.entries(p))u.includes(c)&&x(l,i,s,b.callable,b.delegationSelector)}function E(l){return l=l.replace(Ft,""),Rn[l]||l}const y={on(l,i,s,c){Ke(l,i,s,c,!1)},one(l,i,s,c){Ke(l,i,s,c,!0)},off(l,i,s,c){if(typeof i!="string"||!l)return;const[p,u,b]=Mn(i,s,c),_=b!==i,I=un(l),S=I[b]||{},P=i.startsWith(".");if(u===void 0){if(P)for(const T of Object.keys(I))A(l,I,T,i.slice(1));for(const[T,H]of Object.entries(S)){const R=T.replace(dn,"");_&&!i.includes(R)||x(l,I,b,H.callable,H.delegationSelector)}}else{if(!Object.keys(S).length)return;x(l,I,b,u,p?s:null)}},trigger(l,i,s){if(typeof i!="string"||!l)return null;const c=ee();let p=null,u=!0,b=!0,_=!1;i!==E(i)&&c&&(p=c.Event(i,s),c(l).trigger(p),u=!p.isPropagationStopped(),b=!p.isImmediatePropagationStopped(),_=p.isDefaultPrevented());const I=fn(new Event(i,{bubbles:u,cancelable:!0}),s);return _&&I.preventDefault(),b&&l.dispatchEvent(I),I.defaultPrevented&&p&&p.preventDefault(),I}};function fn(l,i={}){for(const[s,c]of Object.entries(i))try{l[s]=c}catch{Object.defineProperty(l,s,{configurable:!0,get:()=>c})}return l}function hn(l){if(l==="true")return!0;if(l==="false")return!1;if(l===Number(l).toString())return Number(l);if(l===""||l==="null")return null;if(typeof l!="string")return l;try{return JSON.parse(decodeURIComponent(l))}catch{return l}}function gn(l){return l.replace(/[A-Z]/g,i=>`-${i.toLowerCase()}`)}const lt={setDataAttribute(l,i,s){l.setAttribute(`data-bs-${gn(i)}`,s)},removeDataAttribute(l,i){l.removeAttribute(`data-bs-${gn(i)}`)},getDataAttributes(l){if(!l)return{};const i={},s=Object.keys(l.dataset).filter(c=>c.startsWith("bs")&&!c.startsWith("bsConfig"));for(const c of s){let p=c.replace(/^bs/,"");p=p.charAt(0).toLowerCase()+p.slice(1),i[p]=hn(l.dataset[c])}return i},getDataAttribute:(l,i)=>hn(l.getAttribute(`data-bs-${gn(i)}`))};class bn{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(i){return i=this._mergeConfigObj(i),i=this._configAfterMerge(i),this._typeCheckConfig(i),i}_configAfterMerge(i){return i}_mergeConfigObj(i,s){const c=h(s)?lt.getDataAttribute(s,"config"):{};return{...this.constructor.Default,...typeof c=="object"?c:{},...h(s)?lt.getDataAttributes(s):{},...typeof i=="object"?i:{}}}_typeCheckConfig(i,s=this.constructor.DefaultType){for(const[c,p]of Object.entries(s)){const u=i[c],b=h(u)?"element":d(u);if(!new RegExp(p).test(b))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${c}" provided type "${b}" but expected type "${p}".`)}}}class Xe extends bn{constructor(i,s){super(),(i=m(i))&&(this._element=i,this._config=this._getConfig(s),a.set(this._element,this.constructor.DATA_KEY,this))}dispose(){a.remove(this._element,this.constructor.DATA_KEY),y.off(this._element,this.constructor.EVENT_KEY);for(const i of Object.getOwnPropertyNames(this))this[i]=null}_queueCallback(i,s,c=!0){wt(i,s,c)}_getConfig(i){return i=this._mergeConfigObj(i,this._element),i=this._configAfterMerge(i),this._typeCheckConfig(i),i}static getInstance(i){return a.get(m(i),this.DATA_KEY)}static getOrCreateInstance(i,s={}){return this.getInstance(i)||new this(i,typeof s=="object"?s:null)}static get VERSION(){return"5.3.8"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(i){return`${i}${this.EVENT_KEY}`}}const vi=l=>{let i=l.getAttribute("data-bs-target");if(!i||i==="#"){let s=l.getAttribute("href");if(!s||!s.includes("#")&&!s.startsWith("."))return null;s.includes("#")&&!s.startsWith("#")&&(s=`#${s.split("#")[1]}`),i=s&&s!=="#"?s.trim():null}return i?i.split(",").map(s=>r(s)).join(","):null},j={find:(l,i=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(i,l)),findOne:(l,i=document.documentElement)=>Element.prototype.querySelector.call(i,l),children:(l,i)=>[].concat(...l.children).filter(s=>s.matches(i)),parents(l,i){const s=[];let c=l.parentNode.closest(i);for(;c;)s.push(c),c=c.parentNode.closest(i);return s},prev(l,i){let s=l.previousElementSibling;for(;s;){if(s.matches(i))return[s];s=s.previousElementSibling}return[]},next(l,i){let s=l.nextElementSibling;for(;s;){if(s.matches(i))return[s];s=s.nextElementSibling}return[]},focusableChildren(l){const i=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(s=>`${s}:not([tabindex^="-"])`).join(",");return this.find(i,l).filter(s=>!v(s)&&k(s))},getSelectorFromElement(l){const i=vi(l);return i&&j.findOne(i)?i:null},getElementFromSelector(l){const i=vi(l);return i?j.findOne(i):null},getMultipleElementsFromSelector(l){const i=vi(l);return i?j.find(i):[]}},On=(l,i="hide")=>{const s=`click.dismiss${l.EVENT_KEY}`,c=l.NAME;y.on(document,s,`[data-bs-dismiss="${c}"]`,function(p){if(["A","AREA"].includes(this.tagName)&&p.preventDefault(),v(this))return;const u=j.getElementFromSelector(this)||this.closest(`.${c}`);l.getOrCreateInstance(u)[i]()})},ya=".bs.alert",Os=`close${ya}`,Ns=`closed${ya}`;class yn extends Xe{static get NAME(){return"alert"}close(){if(y.trigger(this._element,Os).defaultPrevented)return;this._element.classList.remove("show");const i=this._element.classList.contains("fade");this._queueCallback(()=>this._destroyElement(),this._element,i)}_destroyElement(){this._element.remove(),y.trigger(this._element,Ns),this.dispose()}static jQueryInterface(i){return this.each(function(){const s=yn.getOrCreateInstance(this);if(typeof i=="string"){if(s[i]===void 0||i.startsWith("_")||i==="constructor")throw new TypeError(`No method named "${i}"`);s[i](this)}})}}On(yn,"close"),ve(yn);const va='[data-bs-toggle="button"]';class vn extends Xe{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(i){return this.each(function(){const s=vn.getOrCreateInstance(this);i==="toggle"&&s[i]()})}}y.on(document,"click.bs.button.data-api",va,l=>{l.preventDefault();const i=l.target.closest(va);vn.getOrCreateInstance(i).toggle()}),ve(vn);const Ht=".bs.swipe",Bs=`touchstart${Ht}`,Us=`touchmove${Ht}`,qs=`touchend${Ht}`,Fs=`pointerdown${Ht}`,Hs=`pointerup${Ht}`,Vs={endCallback:null,leftCallback:null,rightCallback:null},zs={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class Nn extends bn{constructor(i,s){super(),this._element=i,i&&Nn.isSupported()&&(this._config=this._getConfig(s),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return Vs}static get DefaultType(){return zs}static get NAME(){return"swipe"}dispose(){y.off(this._element,Ht)}_start(i){this._supportPointerEvents?this._eventIsPointerPenTouch(i)&&(this._deltaX=i.clientX):this._deltaX=i.touches[0].clientX}_end(i){this._eventIsPointerPenTouch(i)&&(this._deltaX=i.clientX-this._deltaX),this._handleSwipe(),ke(this._config.endCallback)}_move(i){this._deltaX=i.touches&&i.touches.length>1?0:i.touches[0].clientX-this._deltaX}_handleSwipe(){const i=Math.abs(this._deltaX);if(i<=40)return;const s=i/this._deltaX;this._deltaX=0,s&&ke(s>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(y.on(this._element,Fs,i=>this._start(i)),y.on(this._element,Hs,i=>this._end(i)),this._element.classList.add("pointer-event")):(y.on(this._element,Bs,i=>this._start(i)),y.on(this._element,Us,i=>this._move(i)),y.on(this._element,qs,i=>this._end(i)))}_eventIsPointerPenTouch(i){return this._supportPointerEvents&&(i.pointerType==="pen"||i.pointerType==="touch")}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const ft=".bs.carousel",wa=".data-api",Ws="ArrowLeft",Ks="ArrowRight",wn="next",Vt="prev",zt="left",Bn="right",Xs=`slide${ft}`,wi=`slid${ft}`,Qs=`keydown${ft}`,Js=`mouseenter${ft}`,Ys=`mouseleave${ft}`,Zs=`dragstart${ft}`,Gs=`load${ft}${wa}`,er=`click${ft}${wa}`,_a="carousel",Un="active",xa=".active",ka=".carousel-item",tr=xa+ka,nr={[Ws]:Bn,[Ks]:zt},ir={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},ar={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class Wt extends Xe{constructor(i,s){super(i,s),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=j.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===_a&&this.cycle()}static get Default(){return ir}static get DefaultType(){return ar}static get NAME(){return"carousel"}next(){this._slide(wn)}nextWhenVisible(){!document.hidden&&k(this._element)&&this.next()}prev(){this._slide(Vt)}pause(){this._isSliding&&f(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?y.one(this._element,wi,()=>this.cycle()):this.cycle())}to(i){const s=this._getItems();if(i>s.length-1||i<0)return;if(this._isSliding)return void y.one(this._element,wi,()=>this.to(i));const c=this._getItemIndex(this._getActive());if(c===i)return;const p=i>c?wn:Vt;this._slide(p,s[i])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(i){return i.defaultInterval=i.interval,i}_addEventListeners(){this._config.keyboard&&y.on(this._element,Qs,i=>this._keydown(i)),this._config.pause==="hover"&&(y.on(this._element,Js,()=>this.pause()),y.on(this._element,Ys,()=>this._maybeEnableCycle())),this._config.touch&&Nn.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const s of j.find(".carousel-item img",this._element))y.on(s,Zs,c=>c.preventDefault());const i={leftCallback:()=>this._slide(this._directionToOrder(zt)),rightCallback:()=>this._slide(this._directionToOrder(Bn)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),500+this._config.interval))}};this._swipeHelper=new Nn(this._element,i)}_keydown(i){if(/input|textarea/i.test(i.target.tagName))return;const s=nr[i.key];s&&(i.preventDefault(),this._slide(this._directionToOrder(s)))}_getItemIndex(i){return this._getItems().indexOf(i)}_setActiveIndicatorElement(i){if(!this._indicatorsElement)return;const s=j.findOne(xa,this._indicatorsElement);s.classList.remove(Un),s.removeAttribute("aria-current");const c=j.findOne(`[data-bs-slide-to="${i}"]`,this._indicatorsElement);c&&(c.classList.add(Un),c.setAttribute("aria-current","true"))}_updateInterval(){const i=this._activeElement||this._getActive();if(!i)return;const s=Number.parseInt(i.getAttribute("data-bs-interval"),10);this._config.interval=s||this._config.defaultInterval}_slide(i,s=null){if(this._isSliding)return;const c=this._getActive(),p=i===wn,u=s||rt(this._getItems(),c,p,this._config.wrap);if(u===c)return;const b=this._getItemIndex(u),_=T=>y.trigger(this._element,T,{relatedTarget:u,direction:this._orderToDirection(i),from:this._getItemIndex(c),to:b});if(_(Xs).defaultPrevented||!c||!u)return;const I=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(b),this._activeElement=u;const S=p?"carousel-item-start":"carousel-item-end",P=p?"carousel-item-next":"carousel-item-prev";u.classList.add(P),ae(u),c.classList.add(S),u.classList.add(S),this._queueCallback(()=>{u.classList.remove(S,P),u.classList.add(Un),c.classList.remove(Un,P,S),this._isSliding=!1,_(wi)},c,this._isAnimated()),I&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return j.findOne(tr,this._element)}_getItems(){return j.find(ka,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(i){return pe()?i===zt?Vt:wn:i===zt?wn:Vt}_orderToDirection(i){return pe()?i===Vt?zt:Bn:i===Vt?Bn:zt}static jQueryInterface(i){return this.each(function(){const s=Wt.getOrCreateInstance(this,i);if(typeof i!="number"){if(typeof i=="string"){if(s[i]===void 0||i.startsWith("_")||i==="constructor")throw new TypeError(`No method named "${i}"`);s[i]()}}else s.to(i)})}}y.on(document,er,"[data-bs-slide], [data-bs-slide-to]",function(l){const i=j.getElementFromSelector(this);if(!i||!i.classList.contains(_a))return;l.preventDefault();const s=Wt.getOrCreateInstance(i),c=this.getAttribute("data-bs-slide-to");return c?(s.to(c),void s._maybeEnableCycle()):lt.getDataAttribute(this,"slide")==="next"?(s.next(),void s._maybeEnableCycle()):(s.prev(),void s._maybeEnableCycle())}),y.on(window,Gs,()=>{const l=j.find('[data-bs-ride="carousel"]');for(const i of l)Wt.getOrCreateInstance(i)}),ve(Wt);const _n=".bs.collapse",or=`show${_n}`,sr=`shown${_n}`,rr=`hide${_n}`,lr=`hidden${_n}`,cr=`click${_n}.data-api`,_i="show",Kt="collapse",qn="collapsing",dr=`:scope .${Kt} .${Kt}`,xi='[data-bs-toggle="collapse"]',pr={parent:null,toggle:!0},ur={parent:"(null|element)",toggle:"boolean"};class Xt extends Xe{constructor(i,s){super(i,s),this._isTransitioning=!1,this._triggerArray=[];const c=j.find(xi);for(const p of c){const u=j.getSelectorFromElement(p),b=j.find(u).filter(_=>_===this._element);u!==null&&b.length&&this._triggerArray.push(p)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return pr}static get DefaultType(){return ur}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let i=[];if(this._config.parent&&(i=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(p=>p!==this._element).map(p=>Xt.getOrCreateInstance(p,{toggle:!1}))),i.length&&i[0]._isTransitioning||y.trigger(this._element,or).defaultPrevented)return;for(const p of i)p.hide();const s=this._getDimension();this._element.classList.remove(Kt),this._element.classList.add(qn),this._element.style[s]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const c=`scroll${s[0].toUpperCase()+s.slice(1)}`;this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(qn),this._element.classList.add(Kt,_i),this._element.style[s]="",y.trigger(this._element,sr)},this._element,!0),this._element.style[s]=`${this._element[c]}px`}hide(){if(this._isTransitioning||!this._isShown()||y.trigger(this._element,rr).defaultPrevented)return;const i=this._getDimension();this._element.style[i]=`${this._element.getBoundingClientRect()[i]}px`,ae(this._element),this._element.classList.add(qn),this._element.classList.remove(Kt,_i);for(const s of this._triggerArray){const c=j.getElementFromSelector(s);c&&!this._isShown(c)&&this._addAriaAndCollapsedClass([s],!1)}this._isTransitioning=!0,this._element.style[i]="",this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(qn),this._element.classList.add(Kt),y.trigger(this._element,lr)},this._element,!0)}_isShown(i=this._element){return i.classList.contains(_i)}_configAfterMerge(i){return i.toggle=!!i.toggle,i.parent=m(i.parent),i}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const i=this._getFirstLevelChildren(xi);for(const s of i){const c=j.getElementFromSelector(s);c&&this._addAriaAndCollapsedClass([s],this._isShown(c))}}_getFirstLevelChildren(i){const s=j.find(dr,this._config.parent);return j.find(i,this._config.parent).filter(c=>!s.includes(c))}_addAriaAndCollapsedClass(i,s){if(i.length)for(const c of i)c.classList.toggle("collapsed",!s),c.setAttribute("aria-expanded",s)}static jQueryInterface(i){const s={};return typeof i=="string"&&/show|hide/.test(i)&&(s.toggle=!1),this.each(function(){const c=Xt.getOrCreateInstance(this,s);if(typeof i=="string"){if(c[i]===void 0)throw new TypeError(`No method named "${i}"`);c[i]()}})}}y.on(document,cr,xi,function(l){(l.target.tagName==="A"||l.delegateTarget&&l.delegateTarget.tagName==="A")&&l.preventDefault();for(const i of j.getMultipleElementsFromSelector(this))Xt.getOrCreateInstance(i,{toggle:!1}).toggle()}),ve(Xt);var Pe="top",Oe="bottom",Ne="right",Ce="left",Fn="auto",Qt=[Pe,Oe,Ne,Ce],xt="start",Jt="end",Aa="clippingParents",ki="viewport",Yt="popper",Ia="reference",Ai=Qt.reduce(function(l,i){return l.concat([i+"-"+xt,i+"-"+Jt])},[]),Ii=[].concat(Qt,[Fn]).reduce(function(l,i){return l.concat([i,i+"-"+xt,i+"-"+Jt])},[]),Ta="beforeRead",Ea="read",Sa="afterRead",Pa="beforeMain",Ca="main",Da="afterMain",$a="beforeWrite",La="write",ja="afterWrite",Ra=[Ta,Ea,Sa,Pa,Ca,Da,$a,La,ja];function et(l){return l?(l.nodeName||"").toLowerCase():null}function Be(l){if(l==null)return window;if(l.toString()!=="[object Window]"){var i=l.ownerDocument;return i&&i.defaultView||window}return l}function kt(l){return l instanceof Be(l).Element||l instanceof Element}function Fe(l){return l instanceof Be(l).HTMLElement||l instanceof HTMLElement}function Ti(l){return typeof ShadowRoot<"u"&&(l instanceof Be(l).ShadowRoot||l instanceof ShadowRoot)}const Ei={name:"applyStyles",enabled:!0,phase:"write",fn:function(l){var i=l.state;Object.keys(i.elements).forEach(function(s){var c=i.styles[s]||{},p=i.attributes[s]||{},u=i.elements[s];Fe(u)&&et(u)&&(Object.assign(u.style,c),Object.keys(p).forEach(function(b){var _=p[b];_===!1?u.removeAttribute(b):u.setAttribute(b,_===!0?"":_)}))})},effect:function(l){var i=l.state,s={popper:{position:i.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(i.elements.popper.style,s.popper),i.styles=s,i.elements.arrow&&Object.assign(i.elements.arrow.style,s.arrow),function(){Object.keys(i.elements).forEach(function(c){var p=i.elements[c],u=i.attributes[c]||{},b=Object.keys(i.styles.hasOwnProperty(c)?i.styles[c]:s[c]).reduce(function(_,I){return _[I]="",_},{});Fe(p)&&et(p)&&(Object.assign(p.style,b),Object.keys(u).forEach(function(_){p.removeAttribute(_)}))})}},requires:["computeStyles"]};function tt(l){return l.split("-")[0]}var At=Math.max,Hn=Math.min,Zt=Math.round;function Si(){var l=navigator.userAgentData;return l!=null&&l.brands&&Array.isArray(l.brands)?l.brands.map(function(i){return i.brand+"/"+i.version}).join(" "):navigator.userAgent}function Ma(){return!/^((?!chrome|android).)*safari/i.test(Si())}function Gt(l,i,s){i===void 0&&(i=!1),s===void 0&&(s=!1);var c=l.getBoundingClientRect(),p=1,u=1;i&&Fe(l)&&(p=l.offsetWidth>0&&Zt(c.width)/l.offsetWidth||1,u=l.offsetHeight>0&&Zt(c.height)/l.offsetHeight||1);var b=(kt(l)?Be(l):window).visualViewport,_=!Ma()&&s,I=(c.left+(_&&b?b.offsetLeft:0))/p,S=(c.top+(_&&b?b.offsetTop:0))/u,P=c.width/p,T=c.height/u;return{width:P,height:T,top:S,right:I+P,bottom:S+T,left:I,x:I,y:S}}function Pi(l){var i=Gt(l),s=l.offsetWidth,c=l.offsetHeight;return Math.abs(i.width-s)<=1&&(s=i.width),Math.abs(i.height-c)<=1&&(c=i.height),{x:l.offsetLeft,y:l.offsetTop,width:s,height:c}}function Oa(l,i){var s=i.getRootNode&&i.getRootNode();if(l.contains(i))return!0;if(s&&Ti(s)){var c=i;do{if(c&&l.isSameNode(c))return!0;c=c.parentNode||c.host}while(c)}return!1}function ct(l){return Be(l).getComputedStyle(l)}function mr(l){return["table","td","th"].indexOf(et(l))>=0}function ht(l){return((kt(l)?l.ownerDocument:l.document)||window.document).documentElement}function Vn(l){return et(l)==="html"?l:l.assignedSlot||l.parentNode||(Ti(l)?l.host:null)||ht(l)}function Na(l){return Fe(l)&&ct(l).position!=="fixed"?l.offsetParent:null}function xn(l){for(var i=Be(l),s=Na(l);s&&mr(s)&&ct(s).position==="static";)s=Na(s);return s&&(et(s)==="html"||et(s)==="body"&&ct(s).position==="static")?i:s||function(c){var p=/firefox/i.test(Si());if(/Trident/i.test(Si())&&Fe(c)&&ct(c).position==="fixed")return null;var u=Vn(c);for(Ti(u)&&(u=u.host);Fe(u)&&["html","body"].indexOf(et(u))<0;){var b=ct(u);if(b.transform!=="none"||b.perspective!=="none"||b.contain==="paint"||["transform","perspective"].indexOf(b.willChange)!==-1||p&&b.willChange==="filter"||p&&b.filter&&b.filter!=="none")return u;u=u.parentNode}return null}(l)||i}function Ci(l){return["top","bottom"].indexOf(l)>=0?"x":"y"}function kn(l,i,s){return At(l,Hn(i,s))}function Ba(l){return Object.assign({},{top:0,right:0,bottom:0,left:0},l)}function Ua(l,i){return i.reduce(function(s,c){return s[c]=l,s},{})}const qa={name:"arrow",enabled:!0,phase:"main",fn:function(l){var i,s=l.state,c=l.name,p=l.options,u=s.elements.arrow,b=s.modifiersData.popperOffsets,_=tt(s.placement),I=Ci(_),S=[Ce,Ne].indexOf(_)>=0?"height":"width";if(u&&b){var P=function(ce,se){return Ba(typeof(ce=typeof ce=="function"?ce(Object.assign({},se.rects,{placement:se.placement})):ce)!="number"?ce:Ua(ce,Qt))}(p.padding,s),T=Pi(u),H=I==="y"?Pe:Ce,R=I==="y"?Oe:Ne,U=s.rects.reference[S]+s.rects.reference[I]-b[I]-s.rects.popper[S],O=b[I]-s.rects.reference[I],q=xn(u),le=q?I==="y"?q.clientHeight||0:q.clientWidth||0:0,ue=U/2-O/2,W=P[H],te=le-T[S]-P[R],V=le/2-T[S]/2+ue,Q=kn(W,V,te),oe=I;s.modifiersData[c]=((i={})[oe]=Q,i.centerOffset=Q-V,i)}},effect:function(l){var i=l.state,s=l.options.element,c=s===void 0?"[data-popper-arrow]":s;c!=null&&(typeof c!="string"||(c=i.elements.popper.querySelector(c)))&&Oa(i.elements.popper,c)&&(i.elements.arrow=c)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function en(l){return l.split("-")[1]}var fr={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Fa(l){var i,s=l.popper,c=l.popperRect,p=l.placement,u=l.variation,b=l.offsets,_=l.position,I=l.gpuAcceleration,S=l.adaptive,P=l.roundOffsets,T=l.isFixed,H=b.x,R=H===void 0?0:H,U=b.y,O=U===void 0?0:U,q=typeof P=="function"?P({x:R,y:O}):{x:R,y:O};R=q.x,O=q.y;var le=b.hasOwnProperty("x"),ue=b.hasOwnProperty("y"),W=Ce,te=Pe,V=window;if(S){var Q=xn(s),oe="clientHeight",ce="clientWidth";Q===Be(s)&&ct(Q=ht(s)).position!=="static"&&_==="absolute"&&(oe="scrollHeight",ce="scrollWidth"),(p===Pe||(p===Ce||p===Ne)&&u===Jt)&&(te=Oe,O-=(T&&Q===V&&V.visualViewport?V.visualViewport.height:Q[oe])-c.height,O*=I?1:-1),p!==Ce&&(p!==Pe&&p!==Oe||u!==Jt)||(W=Ne,R-=(T&&Q===V&&V.visualViewport?V.visualViewport.width:Q[ce])-c.width,R*=I?1:-1)}var se,ge=Object.assign({position:_},S&&fr),Ue=P===!0?function(Je,De){var Ve=Je.x,ze=Je.y,fe=De.devicePixelRatio||1;return{x:Zt(Ve*fe)/fe||0,y:Zt(ze*fe)/fe||0}}({x:R,y:O},Be(s)):{x:R,y:O};return R=Ue.x,O=Ue.y,I?Object.assign({},ge,((se={})[te]=ue?"0":"",se[W]=le?"0":"",se.transform=(V.devicePixelRatio||1)<=1?"translate("+R+"px, "+O+"px)":"translate3d("+R+"px, "+O+"px, 0)",se)):Object.assign({},ge,((i={})[te]=ue?O+"px":"",i[W]=le?R+"px":"",i.transform="",i))}const Di={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(l){var i=l.state,s=l.options,c=s.gpuAcceleration,p=c===void 0||c,u=s.adaptive,b=u===void 0||u,_=s.roundOffsets,I=_===void 0||_,S={placement:tt(i.placement),variation:en(i.placement),popper:i.elements.popper,popperRect:i.rects.popper,gpuAcceleration:p,isFixed:i.options.strategy==="fixed"};i.modifiersData.popperOffsets!=null&&(i.styles.popper=Object.assign({},i.styles.popper,Fa(Object.assign({},S,{offsets:i.modifiersData.popperOffsets,position:i.options.strategy,adaptive:b,roundOffsets:I})))),i.modifiersData.arrow!=null&&(i.styles.arrow=Object.assign({},i.styles.arrow,Fa(Object.assign({},S,{offsets:i.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:I})))),i.attributes.popper=Object.assign({},i.attributes.popper,{"data-popper-placement":i.placement})},data:{}};var zn={passive:!0};const $i={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(l){var i=l.state,s=l.instance,c=l.options,p=c.scroll,u=p===void 0||p,b=c.resize,_=b===void 0||b,I=Be(i.elements.popper),S=[].concat(i.scrollParents.reference,i.scrollParents.popper);return u&&S.forEach(function(P){P.addEventListener("scroll",s.update,zn)}),_&&I.addEventListener("resize",s.update,zn),function(){u&&S.forEach(function(P){P.removeEventListener("scroll",s.update,zn)}),_&&I.removeEventListener("resize",s.update,zn)}},data:{}};var hr={left:"right",right:"left",bottom:"top",top:"bottom"};function Wn(l){return l.replace(/left|right|bottom|top/g,function(i){return hr[i]})}var gr={start:"end",end:"start"};function Ha(l){return l.replace(/start|end/g,function(i){return gr[i]})}function Li(l){var i=Be(l);return{scrollLeft:i.pageXOffset,scrollTop:i.pageYOffset}}function ji(l){return Gt(ht(l)).left+Li(l).scrollLeft}function Ri(l){var i=ct(l),s=i.overflow,c=i.overflowX,p=i.overflowY;return/auto|scroll|overlay|hidden/.test(s+p+c)}function Va(l){return["html","body","#document"].indexOf(et(l))>=0?l.ownerDocument.body:Fe(l)&&Ri(l)?l:Va(Vn(l))}function An(l,i){var s;i===void 0&&(i=[]);var c=Va(l),p=c===((s=l.ownerDocument)==null?void 0:s.body),u=Be(c),b=p?[u].concat(u.visualViewport||[],Ri(c)?c:[]):c,_=i.concat(b);return p?_:_.concat(An(Vn(b)))}function Mi(l){return Object.assign({},l,{left:l.x,top:l.y,right:l.x+l.width,bottom:l.y+l.height})}function za(l,i,s){return i===ki?Mi(function(c,p){var u=Be(c),b=ht(c),_=u.visualViewport,I=b.clientWidth,S=b.clientHeight,P=0,T=0;if(_){I=_.width,S=_.height;var H=Ma();(H||!H&&p==="fixed")&&(P=_.offsetLeft,T=_.offsetTop)}return{width:I,height:S,x:P+ji(c),y:T}}(l,s)):kt(i)?function(c,p){var u=Gt(c,!1,p==="fixed");return u.top=u.top+c.clientTop,u.left=u.left+c.clientLeft,u.bottom=u.top+c.clientHeight,u.right=u.left+c.clientWidth,u.width=c.clientWidth,u.height=c.clientHeight,u.x=u.left,u.y=u.top,u}(i,s):Mi(function(c){var p,u=ht(c),b=Li(c),_=(p=c.ownerDocument)==null?void 0:p.body,I=At(u.scrollWidth,u.clientWidth,_?_.scrollWidth:0,_?_.clientWidth:0),S=At(u.scrollHeight,u.clientHeight,_?_.scrollHeight:0,_?_.clientHeight:0),P=-b.scrollLeft+ji(c),T=-b.scrollTop;return ct(_||u).direction==="rtl"&&(P+=At(u.clientWidth,_?_.clientWidth:0)-I),{width:I,height:S,x:P,y:T}}(ht(l)))}function Wa(l){var i,s=l.reference,c=l.element,p=l.placement,u=p?tt(p):null,b=p?en(p):null,_=s.x+s.width/2-c.width/2,I=s.y+s.height/2-c.height/2;switch(u){case Pe:i={x:_,y:s.y-c.height};break;case Oe:i={x:_,y:s.y+s.height};break;case Ne:i={x:s.x+s.width,y:I};break;case Ce:i={x:s.x-c.width,y:I};break;default:i={x:s.x,y:s.y}}var S=u?Ci(u):null;if(S!=null){var P=S==="y"?"height":"width";switch(b){case xt:i[S]=i[S]-(s[P]/2-c[P]/2);break;case Jt:i[S]=i[S]+(s[P]/2-c[P]/2)}}return i}function tn(l,i){i===void 0&&(i={});var s=i,c=s.placement,p=c===void 0?l.placement:c,u=s.strategy,b=u===void 0?l.strategy:u,_=s.boundary,I=_===void 0?Aa:_,S=s.rootBoundary,P=S===void 0?ki:S,T=s.elementContext,H=T===void 0?Yt:T,R=s.altBoundary,U=R!==void 0&&R,O=s.padding,q=O===void 0?0:O,le=Ba(typeof q!="number"?q:Ua(q,Qt)),ue=H===Yt?Ia:Yt,W=l.rects.popper,te=l.elements[U?ue:H],V=function(De,Ve,ze,fe){var nt=Ve==="clippingParents"?function(de){var $e=An(Vn(de)),We=["absolute","fixed"].indexOf(ct(de).position)>=0&&Fe(de)?xn(de):de;return kt(We)?$e.filter(function(bt){return kt(bt)&&Oa(bt,We)&&et(bt)!=="body"}):[]}(De):[].concat(Ve),it=[].concat(nt,[ze]),on=it[0],Ae=it.reduce(function(de,$e){var We=za(De,$e,fe);return de.top=At(We.top,de.top),de.right=Hn(We.right,de.right),de.bottom=Hn(We.bottom,de.bottom),de.left=At(We.left,de.left),de},za(De,on,fe));return Ae.width=Ae.right-Ae.left,Ae.height=Ae.bottom-Ae.top,Ae.x=Ae.left,Ae.y=Ae.top,Ae}(kt(te)?te:te.contextElement||ht(l.elements.popper),I,P,b),Q=Gt(l.elements.reference),oe=Wa({reference:Q,element:W,placement:p}),ce=Mi(Object.assign({},W,oe)),se=H===Yt?ce:Q,ge={top:V.top-se.top+le.top,bottom:se.bottom-V.bottom+le.bottom,left:V.left-se.left+le.left,right:se.right-V.right+le.right},Ue=l.modifiersData.offset;if(H===Yt&&Ue){var Je=Ue[p];Object.keys(ge).forEach(function(De){var Ve=[Ne,Oe].indexOf(De)>=0?1:-1,ze=[Pe,Oe].indexOf(De)>=0?"y":"x";ge[De]+=Je[ze]*Ve})}return ge}function br(l,i){i===void 0&&(i={});var s=i,c=s.placement,p=s.boundary,u=s.rootBoundary,b=s.padding,_=s.flipVariations,I=s.allowedAutoPlacements,S=I===void 0?Ii:I,P=en(c),T=P?_?Ai:Ai.filter(function(U){return en(U)===P}):Qt,H=T.filter(function(U){return S.indexOf(U)>=0});H.length===0&&(H=T);var R=H.reduce(function(U,O){return U[O]=tn(l,{placement:O,boundary:p,rootBoundary:u,padding:b})[tt(O)],U},{});return Object.keys(R).sort(function(U,O){return R[U]-R[O]})}const Ka={name:"flip",enabled:!0,phase:"main",fn:function(l){var i=l.state,s=l.options,c=l.name;if(!i.modifiersData[c]._skip){for(var p=s.mainAxis,u=p===void 0||p,b=s.altAxis,_=b===void 0||b,I=s.fallbackPlacements,S=s.padding,P=s.boundary,T=s.rootBoundary,H=s.altBoundary,R=s.flipVariations,U=R===void 0||R,O=s.allowedAutoPlacements,q=i.options.placement,le=tt(q),ue=I||(le!==q&&U?function(de){if(tt(de)===Fn)return[];var $e=Wn(de);return[Ha(de),$e,Ha($e)]}(q):[Wn(q)]),W=[q].concat(ue).reduce(function(de,$e){return de.concat(tt($e)===Fn?br(i,{placement:$e,boundary:P,rootBoundary:T,padding:S,flipVariations:U,allowedAutoPlacements:O}):$e)},[]),te=i.rects.reference,V=i.rects.popper,Q=new Map,oe=!0,ce=W[0],se=0;se<W.length;se++){var ge=W[se],Ue=tt(ge),Je=en(ge)===xt,De=[Pe,Oe].indexOf(Ue)>=0,Ve=De?"width":"height",ze=tn(i,{placement:ge,boundary:P,rootBoundary:T,altBoundary:H,padding:S}),fe=De?Je?Ne:Ce:Je?Oe:Pe;te[Ve]>V[Ve]&&(fe=Wn(fe));var nt=Wn(fe),it=[];if(u&&it.push(ze[Ue]<=0),_&&it.push(ze[fe]<=0,ze[nt]<=0),it.every(function(de){return de})){ce=ge,oe=!1;break}Q.set(ge,it)}if(oe)for(var on=function(de){var $e=W.find(function(We){var bt=Q.get(We);if(bt)return bt.slice(0,de).every(function(ti){return ti})});if($e)return ce=$e,"break"},Ae=U?3:1;Ae>0&&on(Ae)!=="break";Ae--);i.placement!==ce&&(i.modifiersData[c]._skip=!0,i.placement=ce,i.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function Xa(l,i,s){return s===void 0&&(s={x:0,y:0}),{top:l.top-i.height-s.y,right:l.right-i.width+s.x,bottom:l.bottom-i.height+s.y,left:l.left-i.width-s.x}}function Qa(l){return[Pe,Ne,Oe,Ce].some(function(i){return l[i]>=0})}const Ja={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(l){var i=l.state,s=l.name,c=i.rects.reference,p=i.rects.popper,u=i.modifiersData.preventOverflow,b=tn(i,{elementContext:"reference"}),_=tn(i,{altBoundary:!0}),I=Xa(b,c),S=Xa(_,p,u),P=Qa(I),T=Qa(S);i.modifiersData[s]={referenceClippingOffsets:I,popperEscapeOffsets:S,isReferenceHidden:P,hasPopperEscaped:T},i.attributes.popper=Object.assign({},i.attributes.popper,{"data-popper-reference-hidden":P,"data-popper-escaped":T})}},Ya={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(l){var i=l.state,s=l.options,c=l.name,p=s.offset,u=p===void 0?[0,0]:p,b=Ii.reduce(function(P,T){return P[T]=function(H,R,U){var O=tt(H),q=[Ce,Pe].indexOf(O)>=0?-1:1,le=typeof U=="function"?U(Object.assign({},R,{placement:H})):U,ue=le[0],W=le[1];return ue=ue||0,W=(W||0)*q,[Ce,Ne].indexOf(O)>=0?{x:W,y:ue}:{x:ue,y:W}}(T,i.rects,u),P},{}),_=b[i.placement],I=_.x,S=_.y;i.modifiersData.popperOffsets!=null&&(i.modifiersData.popperOffsets.x+=I,i.modifiersData.popperOffsets.y+=S),i.modifiersData[c]=b}},Oi={name:"popperOffsets",enabled:!0,phase:"read",fn:function(l){var i=l.state,s=l.name;i.modifiersData[s]=Wa({reference:i.rects.reference,element:i.rects.popper,placement:i.placement})},data:{}},Za={name:"preventOverflow",enabled:!0,phase:"main",fn:function(l){var i=l.state,s=l.options,c=l.name,p=s.mainAxis,u=p===void 0||p,b=s.altAxis,_=b!==void 0&&b,I=s.boundary,S=s.rootBoundary,P=s.altBoundary,T=s.padding,H=s.tether,R=H===void 0||H,U=s.tetherOffset,O=U===void 0?0:U,q=tn(i,{boundary:I,rootBoundary:S,padding:T,altBoundary:P}),le=tt(i.placement),ue=en(i.placement),W=!ue,te=Ci(le),V=te==="x"?"y":"x",Q=i.modifiersData.popperOffsets,oe=i.rects.reference,ce=i.rects.popper,se=typeof O=="function"?O(Object.assign({},i.rects,{placement:i.placement})):O,ge=typeof se=="number"?{mainAxis:se,altAxis:se}:Object.assign({mainAxis:0,altAxis:0},se),Ue=i.modifiersData.offset?i.modifiersData.offset[i.placement]:null,Je={x:0,y:0};if(Q){if(u){var De,Ve=te==="y"?Pe:Ce,ze=te==="y"?Oe:Ne,fe=te==="y"?"height":"width",nt=Q[te],it=nt+q[Ve],on=nt-q[ze],Ae=R?-ce[fe]/2:0,de=ue===xt?oe[fe]:ce[fe],$e=ue===xt?-ce[fe]:-oe[fe],We=i.elements.arrow,bt=R&&We?Pi(We):{width:0,height:0},ti=i.modifiersData["arrow#persistent"]?i.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},Bo=ti[Ve],Uo=ti[ze],ni=kn(0,oe[fe],bt[fe]),Ql=W?oe[fe]/2-Ae-ni-Bo-ge.mainAxis:de-ni-Bo-ge.mainAxis,Jl=W?-oe[fe]/2+Ae+ni+Uo+ge.mainAxis:$e+ni+Uo+ge.mainAxis,Yi=i.elements.arrow&&xn(i.elements.arrow),Yl=Yi?te==="y"?Yi.clientTop||0:Yi.clientLeft||0:0,qo=(De=Ue==null?void 0:Ue[te])!=null?De:0,Zl=nt+Jl-qo,Fo=kn(R?Hn(it,nt+Ql-qo-Yl):it,nt,R?At(on,Zl):on);Q[te]=Fo,Je[te]=Fo-nt}if(_){var Ho,Gl=te==="x"?Pe:Ce,ec=te==="x"?Oe:Ne,$t=Q[V],ii=V==="y"?"height":"width",Vo=$t+q[Gl],zo=$t-q[ec],Zi=[Pe,Ce].indexOf(le)!==-1,Wo=(Ho=Ue==null?void 0:Ue[V])!=null?Ho:0,Ko=Zi?Vo:$t-oe[ii]-ce[ii]-Wo+ge.altAxis,Xo=Zi?$t+oe[ii]+ce[ii]-Wo-ge.altAxis:zo,Qo=R&&Zi?function(tc,nc,Gi){var Jo=kn(tc,nc,Gi);return Jo>Gi?Gi:Jo}(Ko,$t,Xo):kn(R?Ko:Vo,$t,R?Xo:zo);Q[V]=Qo,Je[V]=Qo-$t}i.modifiersData[c]=Je}},requiresIfExists:["offset"]};function yr(l,i,s){s===void 0&&(s=!1);var c,p,u=Fe(i),b=Fe(i)&&function(T){var H=T.getBoundingClientRect(),R=Zt(H.width)/T.offsetWidth||1,U=Zt(H.height)/T.offsetHeight||1;return R!==1||U!==1}(i),_=ht(i),I=Gt(l,b,s),S={scrollLeft:0,scrollTop:0},P={x:0,y:0};return(u||!u&&!s)&&((et(i)!=="body"||Ri(_))&&(S=(c=i)!==Be(c)&&Fe(c)?{scrollLeft:(p=c).scrollLeft,scrollTop:p.scrollTop}:Li(c)),Fe(i)?((P=Gt(i,!0)).x+=i.clientLeft,P.y+=i.clientTop):_&&(P.x=ji(_))),{x:I.left+S.scrollLeft-P.x,y:I.top+S.scrollTop-P.y,width:I.width,height:I.height}}function vr(l){var i=new Map,s=new Set,c=[];function p(u){s.add(u.name),[].concat(u.requires||[],u.requiresIfExists||[]).forEach(function(b){if(!s.has(b)){var _=i.get(b);_&&p(_)}}),c.push(u)}return l.forEach(function(u){i.set(u.name,u)}),l.forEach(function(u){s.has(u.name)||p(u)}),c}var Ga={placement:"bottom",modifiers:[],strategy:"absolute"};function eo(){for(var l=arguments.length,i=new Array(l),s=0;s<l;s++)i[s]=arguments[s];return!i.some(function(c){return!(c&&typeof c.getBoundingClientRect=="function")})}function Kn(l){l===void 0&&(l={});var i=l,s=i.defaultModifiers,c=s===void 0?[]:s,p=i.defaultOptions,u=p===void 0?Ga:p;return function(b,_,I){I===void 0&&(I=u);var S,P,T={placement:"bottom",orderedModifiers:[],options:Object.assign({},Ga,u),modifiersData:{},elements:{reference:b,popper:_},attributes:{},styles:{}},H=[],R=!1,U={state:T,setOptions:function(q){var le=typeof q=="function"?q(T.options):q;O(),T.options=Object.assign({},u,T.options,le),T.scrollParents={reference:kt(b)?An(b):b.contextElement?An(b.contextElement):[],popper:An(_)};var ue,W,te=function(V){var Q=vr(V);return Ra.reduce(function(oe,ce){return oe.concat(Q.filter(function(se){return se.phase===ce}))},[])}((ue=[].concat(c,T.options.modifiers),W=ue.reduce(function(V,Q){var oe=V[Q.name];return V[Q.name]=oe?Object.assign({},oe,Q,{options:Object.assign({},oe.options,Q.options),data:Object.assign({},oe.data,Q.data)}):Q,V},{}),Object.keys(W).map(function(V){return W[V]})));return T.orderedModifiers=te.filter(function(V){return V.enabled}),T.orderedModifiers.forEach(function(V){var Q=V.name,oe=V.options,ce=oe===void 0?{}:oe,se=V.effect;if(typeof se=="function"){var ge=se({state:T,name:Q,instance:U,options:ce});H.push(ge||function(){})}}),U.update()},forceUpdate:function(){if(!R){var q=T.elements,le=q.reference,ue=q.popper;if(eo(le,ue)){T.rects={reference:yr(le,xn(ue),T.options.strategy==="fixed"),popper:Pi(ue)},T.reset=!1,T.placement=T.options.placement,T.orderedModifiers.forEach(function(se){return T.modifiersData[se.name]=Object.assign({},se.data)});for(var W=0;W<T.orderedModifiers.length;W++)if(T.reset!==!0){var te=T.orderedModifiers[W],V=te.fn,Q=te.options,oe=Q===void 0?{}:Q,ce=te.name;typeof V=="function"&&(T=V({state:T,options:oe,name:ce,instance:U})||T)}else T.reset=!1,W=-1}}},update:(S=function(){return new Promise(function(q){U.forceUpdate(),q(T)})},function(){return P||(P=new Promise(function(q){Promise.resolve().then(function(){P=void 0,q(S())})})),P}),destroy:function(){O(),R=!0}};if(!eo(b,_))return U;function O(){H.forEach(function(q){return q()}),H=[]}return U.setOptions(I).then(function(q){!R&&I.onFirstUpdate&&I.onFirstUpdate(q)}),U}}var wr=Kn(),_r=Kn({defaultModifiers:[$i,Oi,Di,Ei]}),Ni=Kn({defaultModifiers:[$i,Oi,Di,Ei,Ya,Ka,Za,qa,Ja]});const to=Object.freeze(Object.defineProperty({__proto__:null,afterMain:Da,afterRead:Sa,afterWrite:ja,applyStyles:Ei,arrow:qa,auto:Fn,basePlacements:Qt,beforeMain:Pa,beforeRead:Ta,beforeWrite:$a,bottom:Oe,clippingParents:Aa,computeStyles:Di,createPopper:Ni,createPopperBase:wr,createPopperLite:_r,detectOverflow:tn,end:Jt,eventListeners:$i,flip:Ka,hide:Ja,left:Ce,main:Ca,modifierPhases:Ra,offset:Ya,placements:Ii,popper:Yt,popperGenerator:Kn,popperOffsets:Oi,preventOverflow:Za,read:Ea,reference:Ia,right:Ne,start:xt,top:Pe,variationPlacements:Ai,viewport:ki,write:La},Symbol.toStringTag,{value:"Module"})),no="dropdown",It=".bs.dropdown",Bi=".data-api",xr="ArrowUp",io="ArrowDown",kr=`hide${It}`,Ar=`hidden${It}`,Ir=`show${It}`,Tr=`shown${It}`,ao=`click${It}${Bi}`,oo=`keydown${It}${Bi}`,Er=`keyup${It}${Bi}`,nn="show",Tt='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',Sr=`${Tt}.${nn}`,Xn=".dropdown-menu",Pr=pe()?"top-end":"top-start",Cr=pe()?"top-start":"top-end",Dr=pe()?"bottom-end":"bottom-start",$r=pe()?"bottom-start":"bottom-end",Lr=pe()?"left-start":"right-start",jr=pe()?"right-start":"left-start",Rr={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},Mr={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class Qe extends Xe{constructor(i,s){super(i,s),this._popper=null,this._parent=this._element.parentNode,this._menu=j.next(this._element,Xn)[0]||j.prev(this._element,Xn)[0]||j.findOne(Xn,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return Rr}static get DefaultType(){return Mr}static get NAME(){return no}toggle(){return this._isShown()?this.hide():this.show()}show(){if(v(this._element)||this._isShown())return;const i={relatedTarget:this._element};if(!y.trigger(this._element,Ir,i).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(const s of[].concat(...document.body.children))y.on(s,"mouseover",X);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(nn),this._element.classList.add(nn),y.trigger(this._element,Tr,i)}}hide(){if(v(this._element)||!this._isShown())return;const i={relatedTarget:this._element};this._completeHide(i)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(i){if(!y.trigger(this._element,kr,i).defaultPrevented){if("ontouchstart"in document.documentElement)for(const s of[].concat(...document.body.children))y.off(s,"mouseover",X);this._popper&&this._popper.destroy(),this._menu.classList.remove(nn),this._element.classList.remove(nn),this._element.setAttribute("aria-expanded","false"),lt.removeDataAttribute(this._menu,"popper"),y.trigger(this._element,Ar,i)}}_getConfig(i){if(typeof(i=super._getConfig(i)).reference=="object"&&!h(i.reference)&&typeof i.reference.getBoundingClientRect!="function")throw new TypeError(`${no.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return i}_createPopper(){if(to===void 0)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");let i=this._element;this._config.reference==="parent"?i=this._parent:h(this._config.reference)?i=m(this._config.reference):typeof this._config.reference=="object"&&(i=this._config.reference);const s=this._getPopperConfig();this._popper=Ni(i,this._menu,s)}_isShown(){return this._menu.classList.contains(nn)}_getPlacement(){const i=this._parent;if(i.classList.contains("dropend"))return Lr;if(i.classList.contains("dropstart"))return jr;if(i.classList.contains("dropup-center"))return"top";if(i.classList.contains("dropdown-center"))return"bottom";const s=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return i.classList.contains("dropup")?s?Cr:Pr:s?$r:Dr}_detectNavbar(){return this._element.closest(".navbar")!==null}_getOffset(){const{offset:i}=this._config;return typeof i=="string"?i.split(",").map(s=>Number.parseInt(s,10)):typeof i=="function"?s=>i(s,this._element):i}_getPopperConfig(){const i={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(lt.setDataAttribute(this._menu,"popper","static"),i.modifiers=[{name:"applyStyles",enabled:!1}]),{...i,...ke(this._config.popperConfig,[void 0,i])}}_selectMenuItem({key:i,target:s}){const c=j.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter(p=>k(p));c.length&&rt(c,s,i===io,!c.includes(s)).focus()}static jQueryInterface(i){return this.each(function(){const s=Qe.getOrCreateInstance(this,i);if(typeof i=="string"){if(s[i]===void 0)throw new TypeError(`No method named "${i}"`);s[i]()}})}static clearMenus(i){if(i.button===2||i.type==="keyup"&&i.key!=="Tab")return;const s=j.find(Sr);for(const c of s){const p=Qe.getInstance(c);if(!p||p._config.autoClose===!1)continue;const u=i.composedPath(),b=u.includes(p._menu);if(u.includes(p._element)||p._config.autoClose==="inside"&&!b||p._config.autoClose==="outside"&&b||p._menu.contains(i.target)&&(i.type==="keyup"&&i.key==="Tab"||/input|select|option|textarea|form/i.test(i.target.tagName)))continue;const _={relatedTarget:p._element};i.type==="click"&&(_.clickEvent=i),p._completeHide(_)}}static dataApiKeydownHandler(i){const s=/input|textarea/i.test(i.target.tagName),c=i.key==="Escape",p=[xr,io].includes(i.key);if(!p&&!c||s&&!c)return;i.preventDefault();const u=this.matches(Tt)?this:j.prev(this,Tt)[0]||j.next(this,Tt)[0]||j.findOne(Tt,i.delegateTarget.parentNode),b=Qe.getOrCreateInstance(u);if(p)return i.stopPropagation(),b.show(),void b._selectMenuItem(i);b._isShown()&&(i.stopPropagation(),b.hide(),u.focus())}}y.on(document,oo,Tt,Qe.dataApiKeydownHandler),y.on(document,oo,Xn,Qe.dataApiKeydownHandler),y.on(document,ao,Qe.clearMenus),y.on(document,Er,Qe.clearMenus),y.on(document,ao,Tt,function(l){l.preventDefault(),Qe.getOrCreateInstance(this).toggle()}),ve(Qe);const so="backdrop",ro="show",lo=`mousedown.bs.${so}`,Or={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Nr={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class co extends bn{constructor(i){super(),this._config=this._getConfig(i),this._isAppended=!1,this._element=null}static get Default(){return Or}static get DefaultType(){return Nr}static get NAME(){return so}show(i){if(!this._config.isVisible)return void ke(i);this._append();const s=this._getElement();this._config.isAnimated&&ae(s),s.classList.add(ro),this._emulateAnimation(()=>{ke(i)})}hide(i){this._config.isVisible?(this._getElement().classList.remove(ro),this._emulateAnimation(()=>{this.dispose(),ke(i)})):ke(i)}dispose(){this._isAppended&&(y.off(this._element,lo),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const i=document.createElement("div");i.className=this._config.className,this._config.isAnimated&&i.classList.add("fade"),this._element=i}return this._element}_configAfterMerge(i){return i.rootElement=m(i.rootElement),i}_append(){if(this._isAppended)return;const i=this._getElement();this._config.rootElement.append(i),y.on(i,lo,()=>{ke(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(i){wt(i,this._getElement(),this._config.isAnimated)}}const Qn=".bs.focustrap",Br=`focusin${Qn}`,Ur=`keydown.tab${Qn}`,po="backward",qr={autofocus:!0,trapElement:null},Fr={autofocus:"boolean",trapElement:"element"};class uo extends bn{constructor(i){super(),this._config=this._getConfig(i),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return qr}static get DefaultType(){return Fr}static get NAME(){return"focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),y.off(document,Qn),y.on(document,Br,i=>this._handleFocusin(i)),y.on(document,Ur,i=>this._handleKeydown(i)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,y.off(document,Qn))}_handleFocusin(i){const{trapElement:s}=this._config;if(i.target===document||i.target===s||s.contains(i.target))return;const c=j.focusableChildren(s);c.length===0?s.focus():this._lastTabNavDirection===po?c[c.length-1].focus():c[0].focus()}_handleKeydown(i){i.key==="Tab"&&(this._lastTabNavDirection=i.shiftKey?po:"forward")}}const mo=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",fo=".sticky-top",Jn="padding-right",ho="margin-right";class Ui{constructor(){this._element=document.body}getWidth(){const i=document.documentElement.clientWidth;return Math.abs(window.innerWidth-i)}hide(){const i=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,Jn,s=>s+i),this._setElementAttributes(mo,Jn,s=>s+i),this._setElementAttributes(fo,ho,s=>s-i)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,Jn),this._resetElementAttributes(mo,Jn),this._resetElementAttributes(fo,ho)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(i,s,c){const p=this.getWidth();this._applyManipulationCallback(i,u=>{if(u!==this._element&&window.innerWidth>u.clientWidth+p)return;this._saveInitialAttribute(u,s);const b=window.getComputedStyle(u).getPropertyValue(s);u.style.setProperty(s,`${c(Number.parseFloat(b))}px`)})}_saveInitialAttribute(i,s){const c=i.style.getPropertyValue(s);c&&lt.setDataAttribute(i,s,c)}_resetElementAttributes(i,s){this._applyManipulationCallback(i,c=>{const p=lt.getDataAttribute(c,s);p!==null?(lt.removeDataAttribute(c,s),c.style.setProperty(s,p)):c.style.removeProperty(s)})}_applyManipulationCallback(i,s){if(h(i))s(i);else for(const c of j.find(i,this._element))s(c)}}const He=".bs.modal",Hr=`hide${He}`,Vr=`hidePrevented${He}`,go=`hidden${He}`,bo=`show${He}`,zr=`shown${He}`,Wr=`resize${He}`,Kr=`click.dismiss${He}`,Xr=`mousedown.dismiss${He}`,Qr=`keydown.dismiss${He}`,Jr=`click${He}.data-api`,yo="modal-open",vo="show",qi="modal-static",Yr={backdrop:!0,focus:!0,keyboard:!0},Zr={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Et extends Xe{constructor(i,s){super(i,s),this._dialog=j.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Ui,this._addEventListeners()}static get Default(){return Yr}static get DefaultType(){return Zr}static get NAME(){return"modal"}toggle(i){return this._isShown?this.hide():this.show(i)}show(i){this._isShown||this._isTransitioning||y.trigger(this._element,bo,{relatedTarget:i}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(yo),this._adjustDialog(),this._backdrop.show(()=>this._showElement(i)))}hide(){this._isShown&&!this._isTransitioning&&(y.trigger(this._element,Hr).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(vo),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated())))}dispose(){y.off(window,He),y.off(this._dialog,He),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new co({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new uo({trapElement:this._element})}_showElement(i){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const s=j.findOne(".modal-body",this._dialog);s&&(s.scrollTop=0),ae(this._element),this._element.classList.add(vo),this._queueCallback(()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,y.trigger(this._element,zr,{relatedTarget:i})},this._dialog,this._isAnimated())}_addEventListeners(){y.on(this._element,Qr,i=>{i.key==="Escape"&&(this._config.keyboard?this.hide():this._triggerBackdropTransition())}),y.on(window,Wr,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),y.on(this._element,Xr,i=>{y.one(this._element,Kr,s=>{this._element===i.target&&this._element===s.target&&(this._config.backdrop!=="static"?this._config.backdrop&&this.hide():this._triggerBackdropTransition())})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(yo),this._resetAdjustments(),this._scrollBar.reset(),y.trigger(this._element,go)})}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(y.trigger(this._element,Vr).defaultPrevented)return;const i=this._element.scrollHeight>document.documentElement.clientHeight,s=this._element.style.overflowY;s==="hidden"||this._element.classList.contains(qi)||(i||(this._element.style.overflowY="hidden"),this._element.classList.add(qi),this._queueCallback(()=>{this._element.classList.remove(qi),this._queueCallback(()=>{this._element.style.overflowY=s},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const i=this._element.scrollHeight>document.documentElement.clientHeight,s=this._scrollBar.getWidth(),c=s>0;if(c&&!i){const p=pe()?"paddingLeft":"paddingRight";this._element.style[p]=`${s}px`}if(!c&&i){const p=pe()?"paddingRight":"paddingLeft";this._element.style[p]=`${s}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(i,s){return this.each(function(){const c=Et.getOrCreateInstance(this,i);if(typeof i=="string"){if(c[i]===void 0)throw new TypeError(`No method named "${i}"`);c[i](s)}})}}y.on(document,Jr,'[data-bs-toggle="modal"]',function(l){const i=j.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&l.preventDefault(),y.one(i,bo,c=>{c.defaultPrevented||y.one(i,go,()=>{k(this)&&this.focus()})});const s=j.findOne(".modal.show");s&&Et.getInstance(s).hide(),Et.getOrCreateInstance(i).toggle(this)}),On(Et),ve(Et);const dt=".bs.offcanvas",wo=".data-api",Gr=`load${dt}${wo}`,_o="show",xo="showing",ko="hiding",Ao=".offcanvas.show",el=`show${dt}`,tl=`shown${dt}`,nl=`hide${dt}`,Io=`hidePrevented${dt}`,To=`hidden${dt}`,il=`resize${dt}`,al=`click${dt}${wo}`,ol=`keydown.dismiss${dt}`,sl={backdrop:!0,keyboard:!0,scroll:!1},rl={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class pt extends Xe{constructor(i,s){super(i,s),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return sl}static get DefaultType(){return rl}static get NAME(){return"offcanvas"}toggle(i){return this._isShown?this.hide():this.show(i)}show(i){this._isShown||y.trigger(this._element,el,{relatedTarget:i}).defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||new Ui().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(xo),this._queueCallback(()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(_o),this._element.classList.remove(xo),y.trigger(this._element,tl,{relatedTarget:i})},this._element,!0))}hide(){this._isShown&&(y.trigger(this._element,nl).defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(ko),this._backdrop.hide(),this._queueCallback(()=>{this._element.classList.remove(_o,ko),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new Ui().reset(),y.trigger(this._element,To)},this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const i=!!this._config.backdrop;return new co({className:"offcanvas-backdrop",isVisible:i,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:i?()=>{this._config.backdrop!=="static"?this.hide():y.trigger(this._element,Io)}:null})}_initializeFocusTrap(){return new uo({trapElement:this._element})}_addEventListeners(){y.on(this._element,ol,i=>{i.key==="Escape"&&(this._config.keyboard?this.hide():y.trigger(this._element,Io))})}static jQueryInterface(i){return this.each(function(){const s=pt.getOrCreateInstance(this,i);if(typeof i=="string"){if(s[i]===void 0||i.startsWith("_")||i==="constructor")throw new TypeError(`No method named "${i}"`);s[i](this)}})}}y.on(document,al,'[data-bs-toggle="offcanvas"]',function(l){const i=j.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&l.preventDefault(),v(this))return;y.one(i,To,()=>{k(this)&&this.focus()});const s=j.findOne(Ao);s&&s!==i&&pt.getInstance(s).hide(),pt.getOrCreateInstance(i).toggle(this)}),y.on(window,Gr,()=>{for(const l of j.find(Ao))pt.getOrCreateInstance(l).show()}),y.on(window,il,()=>{for(const l of j.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(l).position!=="fixed"&&pt.getOrCreateInstance(l).hide()}),On(pt),ve(pt);const Eo={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},ll=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),cl=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,dl=(l,i)=>{const s=l.nodeName.toLowerCase();return i.includes(s)?!ll.has(s)||!!cl.test(l.nodeValue):i.filter(c=>c instanceof RegExp).some(c=>c.test(s))},pl={allowList:Eo,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},ul={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},ml={entry:"(string|element|function|null)",selector:"(string|element)"};class fl extends bn{constructor(i){super(),this._config=this._getConfig(i)}static get Default(){return pl}static get DefaultType(){return ul}static get NAME(){return"TemplateFactory"}getContent(){return Object.values(this._config.content).map(i=>this._resolvePossibleFunction(i)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(i){return this._checkContent(i),this._config.content={...this._config.content,...i},this}toHtml(){const i=document.createElement("div");i.innerHTML=this._maybeSanitize(this._config.template);for(const[p,u]of Object.entries(this._config.content))this._setContent(i,u,p);const s=i.children[0],c=this._resolvePossibleFunction(this._config.extraClass);return c&&s.classList.add(...c.split(" ")),s}_typeCheckConfig(i){super._typeCheckConfig(i),this._checkContent(i.content)}_checkContent(i){for(const[s,c]of Object.entries(i))super._typeCheckConfig({selector:s,entry:c},ml)}_setContent(i,s,c){const p=j.findOne(c,i);p&&((s=this._resolvePossibleFunction(s))?h(s)?this._putElementInTemplate(m(s),p):this._config.html?p.innerHTML=this._maybeSanitize(s):p.textContent=s:p.remove())}_maybeSanitize(i){return this._config.sanitize?function(s,c,p){if(!s.length)return s;if(p&&typeof p=="function")return p(s);const u=new window.DOMParser().parseFromString(s,"text/html"),b=[].concat(...u.body.querySelectorAll("*"));for(const _ of b){const I=_.nodeName.toLowerCase();if(!Object.keys(c).includes(I)){_.remove();continue}const S=[].concat(..._.attributes),P=[].concat(c["*"]||[],c[I]||[]);for(const T of S)dl(T,P)||_.removeAttribute(T.nodeName)}return u.body.innerHTML}(i,this._config.allowList,this._config.sanitizeFn):i}_resolvePossibleFunction(i){return ke(i,[void 0,this])}_putElementInTemplate(i,s){if(this._config.html)return s.innerHTML="",void s.append(i);s.textContent=i.textContent}}const hl=new Set(["sanitize","allowList","sanitizeFn"]),Fi="fade",Yn="show",gl=".tooltip-inner",So=".modal",Po="hide.bs.modal",In="hover",Hi="focus",Vi="click",bl={AUTO:"auto",TOP:"top",RIGHT:pe()?"left":"right",BOTTOM:"bottom",LEFT:pe()?"right":"left"},yl={allowList:Eo,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},vl={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class St extends Xe{constructor(i,s){if(to===void 0)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");super(i,s),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return yl}static get DefaultType(){return vl}static get NAME(){return"tooltip"}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),y.off(this._element.closest(So),Po,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const i=y.trigger(this._element,this.constructor.eventName("show")),s=(D(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(i.defaultPrevented||!s)return;this._disposePopper();const c=this._getTipElement();this._element.setAttribute("aria-describedby",c.getAttribute("id"));const{container:p}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(p.append(c),y.trigger(this._element,this.constructor.eventName("inserted"))),this._popper=this._createPopper(c),c.classList.add(Yn),"ontouchstart"in document.documentElement)for(const u of[].concat(...document.body.children))y.on(u,"mouseover",X);this._queueCallback(()=>{y.trigger(this._element,this.constructor.eventName("shown")),this._isHovered===!1&&this._leave(),this._isHovered=!1},this.tip,this._isAnimated())}hide(){if(this._isShown()&&!y.trigger(this._element,this.constructor.eventName("hide")).defaultPrevented){if(this._getTipElement().classList.remove(Yn),"ontouchstart"in document.documentElement)for(const i of[].concat(...document.body.children))y.off(i,"mouseover",X);this._activeTrigger[Vi]=!1,this._activeTrigger[Hi]=!1,this._activeTrigger[In]=!1,this._isHovered=null,this._queueCallback(()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),y.trigger(this._element,this.constructor.eventName("hidden")))},this.tip,this._isAnimated())}}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(i){const s=this._getTemplateFactory(i).toHtml();if(!s)return null;s.classList.remove(Fi,Yn),s.classList.add(`bs-${this.constructor.NAME}-auto`);const c=(p=>{do p+=Math.floor(1e6*Math.random());while(document.getElementById(p));return p})(this.constructor.NAME).toString();return s.setAttribute("id",c),this._isAnimated()&&s.classList.add(Fi),s}setContent(i){this._newContent=i,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(i){return this._templateFactory?this._templateFactory.changeContent(i):this._templateFactory=new fl({...this._config,content:i,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[gl]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(i){return this.constructor.getOrCreateInstance(i.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Fi)}_isShown(){return this.tip&&this.tip.classList.contains(Yn)}_createPopper(i){const s=ke(this._config.placement,[this,i,this._element]),c=bl[s.toUpperCase()];return Ni(this._element,i,this._getPopperConfig(c))}_getOffset(){const{offset:i}=this._config;return typeof i=="string"?i.split(",").map(s=>Number.parseInt(s,10)):typeof i=="function"?s=>i(s,this._element):i}_resolvePossibleFunction(i){return ke(i,[this._element,this._element])}_getPopperConfig(i){const s={placement:i,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:c=>{this._getTipElement().setAttribute("data-popper-placement",c.state.placement)}}]};return{...s,...ke(this._config.popperConfig,[void 0,s])}}_setListeners(){const i=this._config.trigger.split(" ");for(const s of i)if(s==="click")y.on(this._element,this.constructor.eventName("click"),this._config.selector,c=>{const p=this._initializeOnDelegatedTarget(c);p._activeTrigger[Vi]=!(p._isShown()&&p._activeTrigger[Vi]),p.toggle()});else if(s!=="manual"){const c=s===In?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),p=s===In?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout");y.on(this._element,c,this._config.selector,u=>{const b=this._initializeOnDelegatedTarget(u);b._activeTrigger[u.type==="focusin"?Hi:In]=!0,b._enter()}),y.on(this._element,p,this._config.selector,u=>{const b=this._initializeOnDelegatedTarget(u);b._activeTrigger[u.type==="focusout"?Hi:In]=b._element.contains(u.relatedTarget),b._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},y.on(this._element.closest(So),Po,this._hideModalHandler)}_fixTitle(){const i=this._element.getAttribute("title");i&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",i),this._element.setAttribute("data-bs-original-title",i),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(i,s){clearTimeout(this._timeout),this._timeout=setTimeout(i,s)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(i){const s=lt.getDataAttributes(this._element);for(const c of Object.keys(s))hl.has(c)&&delete s[c];return i={...s,...typeof i=="object"&&i?i:{}},i=this._mergeConfigObj(i),i=this._configAfterMerge(i),this._typeCheckConfig(i),i}_configAfterMerge(i){return i.container=i.container===!1?document.body:m(i.container),typeof i.delay=="number"&&(i.delay={show:i.delay,hide:i.delay}),typeof i.title=="number"&&(i.title=i.title.toString()),typeof i.content=="number"&&(i.content=i.content.toString()),i}_getDelegateConfig(){const i={};for(const[s,c]of Object.entries(this._config))this.constructor.Default[s]!==c&&(i[s]=c);return i.selector=!1,i.trigger="manual",i}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(i){return this.each(function(){const s=St.getOrCreateInstance(this,i);if(typeof i=="string"){if(s[i]===void 0)throw new TypeError(`No method named "${i}"`);s[i]()}})}}ve(St);const wl=".popover-header",_l=".popover-body",xl={...St.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},kl={...St.DefaultType,content:"(null|string|element|function)"};class Zn extends St{static get Default(){return xl}static get DefaultType(){return kl}static get NAME(){return"popover"}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[wl]:this._getTitle(),[_l]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(i){return this.each(function(){const s=Zn.getOrCreateInstance(this,i);if(typeof i=="string"){if(s[i]===void 0)throw new TypeError(`No method named "${i}"`);s[i]()}})}}ve(Zn);const zi=".bs.scrollspy",Al=`activate${zi}`,Co=`click${zi}`,Il=`load${zi}.data-api`,an="active",Wi="[href]",Do=".nav-link",Tl=`${Do}, .nav-item > ${Do}, .list-group-item`,El={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},Sl={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class Tn extends Xe{constructor(i,s){super(i,s),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return El}static get DefaultType(){return Sl}static get NAME(){return"scrollspy"}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const i of this._observableSections.values())this._observer.observe(i)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(i){return i.target=m(i.target)||document.body,i.rootMargin=i.offset?`${i.offset}px 0px -30%`:i.rootMargin,typeof i.threshold=="string"&&(i.threshold=i.threshold.split(",").map(s=>Number.parseFloat(s))),i}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(y.off(this._config.target,Co),y.on(this._config.target,Co,Wi,i=>{const s=this._observableSections.get(i.target.hash);if(s){i.preventDefault();const c=this._rootElement||window,p=s.offsetTop-this._element.offsetTop;if(c.scrollTo)return void c.scrollTo({top:p,behavior:"smooth"});c.scrollTop=p}}))}_getNewObserver(){const i={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(s=>this._observerCallback(s),i)}_observerCallback(i){const s=b=>this._targetLinks.get(`#${b.target.id}`),c=b=>{this._previousScrollData.visibleEntryTop=b.target.offsetTop,this._process(s(b))},p=(this._rootElement||document.documentElement).scrollTop,u=p>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=p;for(const b of i){if(!b.isIntersecting){this._activeTarget=null,this._clearActiveClass(s(b));continue}const _=b.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(u&&_){if(c(b),!p)return}else u||_||c(b)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const i=j.find(Wi,this._config.target);for(const s of i){if(!s.hash||v(s))continue;const c=j.findOne(decodeURI(s.hash),this._element);k(c)&&(this._targetLinks.set(decodeURI(s.hash),s),this._observableSections.set(s.hash,c))}}_process(i){this._activeTarget!==i&&(this._clearActiveClass(this._config.target),this._activeTarget=i,i.classList.add(an),this._activateParents(i),y.trigger(this._element,Al,{relatedTarget:i}))}_activateParents(i){if(i.classList.contains("dropdown-item"))j.findOne(".dropdown-toggle",i.closest(".dropdown")).classList.add(an);else for(const s of j.parents(i,".nav, .list-group"))for(const c of j.prev(s,Tl))c.classList.add(an)}_clearActiveClass(i){i.classList.remove(an);const s=j.find(`${Wi}.${an}`,i);for(const c of s)c.classList.remove(an)}static jQueryInterface(i){return this.each(function(){const s=Tn.getOrCreateInstance(this,i);if(typeof i=="string"){if(s[i]===void 0||i.startsWith("_")||i==="constructor")throw new TypeError(`No method named "${i}"`);s[i]()}})}}y.on(window,Il,()=>{for(const l of j.find('[data-bs-spy="scroll"]'))Tn.getOrCreateInstance(l)}),ve(Tn);const Pt=".bs.tab",Pl=`hide${Pt}`,Cl=`hidden${Pt}`,Dl=`show${Pt}`,$l=`shown${Pt}`,Ll=`click${Pt}`,jl=`keydown${Pt}`,Rl=`load${Pt}`,Ml="ArrowLeft",$o="ArrowRight",Ol="ArrowUp",Lo="ArrowDown",Ki="Home",jo="End",Ct="active",Ro="fade",Xi="show",Mo=".dropdown-toggle",Qi=`:not(${Mo})`,Oo='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Ji=`.nav-link${Qi}, .list-group-item${Qi}, [role="tab"]${Qi}, ${Oo}`,Nl=`.${Ct}[data-bs-toggle="tab"], .${Ct}[data-bs-toggle="pill"], .${Ct}[data-bs-toggle="list"]`;class Dt extends Xe{constructor(i){super(i),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),y.on(this._element,jl,s=>this._keydown(s)))}static get NAME(){return"tab"}show(){const i=this._element;if(this._elemIsActive(i))return;const s=this._getActiveElem(),c=s?y.trigger(s,Pl,{relatedTarget:i}):null;y.trigger(i,Dl,{relatedTarget:s}).defaultPrevented||c&&c.defaultPrevented||(this._deactivate(s,i),this._activate(i,s))}_activate(i,s){i&&(i.classList.add(Ct),this._activate(j.getElementFromSelector(i)),this._queueCallback(()=>{i.getAttribute("role")==="tab"?(i.removeAttribute("tabindex"),i.setAttribute("aria-selected",!0),this._toggleDropDown(i,!0),y.trigger(i,$l,{relatedTarget:s})):i.classList.add(Xi)},i,i.classList.contains(Ro)))}_deactivate(i,s){i&&(i.classList.remove(Ct),i.blur(),this._deactivate(j.getElementFromSelector(i)),this._queueCallback(()=>{i.getAttribute("role")==="tab"?(i.setAttribute("aria-selected",!1),i.setAttribute("tabindex","-1"),this._toggleDropDown(i,!1),y.trigger(i,Cl,{relatedTarget:s})):i.classList.remove(Xi)},i,i.classList.contains(Ro)))}_keydown(i){if(![Ml,$o,Ol,Lo,Ki,jo].includes(i.key))return;i.stopPropagation(),i.preventDefault();const s=this._getChildren().filter(p=>!v(p));let c;if([Ki,jo].includes(i.key))c=s[i.key===Ki?0:s.length-1];else{const p=[$o,Lo].includes(i.key);c=rt(s,i.target,p,!0)}c&&(c.focus({preventScroll:!0}),Dt.getOrCreateInstance(c).show())}_getChildren(){return j.find(Ji,this._parent)}_getActiveElem(){return this._getChildren().find(i=>this._elemIsActive(i))||null}_setInitialAttributes(i,s){this._setAttributeIfNotExists(i,"role","tablist");for(const c of s)this._setInitialAttributesOnChild(c)}_setInitialAttributesOnChild(i){i=this._getInnerElement(i);const s=this._elemIsActive(i),c=this._getOuterElement(i);i.setAttribute("aria-selected",s),c!==i&&this._setAttributeIfNotExists(c,"role","presentation"),s||i.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(i,"role","tab"),this._setInitialAttributesOnTargetPanel(i)}_setInitialAttributesOnTargetPanel(i){const s=j.getElementFromSelector(i);s&&(this._setAttributeIfNotExists(s,"role","tabpanel"),i.id&&this._setAttributeIfNotExists(s,"aria-labelledby",`${i.id}`))}_toggleDropDown(i,s){const c=this._getOuterElement(i);if(!c.classList.contains("dropdown"))return;const p=(u,b)=>{const _=j.findOne(u,c);_&&_.classList.toggle(b,s)};p(Mo,Ct),p(".dropdown-menu",Xi),c.setAttribute("aria-expanded",s)}_setAttributeIfNotExists(i,s,c){i.hasAttribute(s)||i.setAttribute(s,c)}_elemIsActive(i){return i.classList.contains(Ct)}_getInnerElement(i){return i.matches(Ji)?i:j.findOne(Ji,i)}_getOuterElement(i){return i.closest(".nav-item, .list-group-item")||i}static jQueryInterface(i){return this.each(function(){const s=Dt.getOrCreateInstance(this);if(typeof i=="string"){if(s[i]===void 0||i.startsWith("_")||i==="constructor")throw new TypeError(`No method named "${i}"`);s[i]()}})}}y.on(document,Ll,Oo,function(l){["A","AREA"].includes(this.tagName)&&l.preventDefault(),v(this)||Dt.getOrCreateInstance(this).show()}),y.on(window,Rl,()=>{for(const l of j.find(Nl))Dt.getOrCreateInstance(l)}),ve(Dt);const gt=".bs.toast",Bl=`mouseover${gt}`,Ul=`mouseout${gt}`,ql=`focusin${gt}`,Fl=`focusout${gt}`,Hl=`hide${gt}`,Vl=`hidden${gt}`,zl=`show${gt}`,Wl=`shown${gt}`,No="hide",Gn="show",ei="showing",Kl={animation:"boolean",autohide:"boolean",delay:"number"},Xl={animation:!0,autohide:!0,delay:5e3};class En extends Xe{constructor(i,s){super(i,s),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return Xl}static get DefaultType(){return Kl}static get NAME(){return"toast"}show(){y.trigger(this._element,zl).defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove(No),ae(this._element),this._element.classList.add(Gn,ei),this._queueCallback(()=>{this._element.classList.remove(ei),y.trigger(this._element,Wl),this._maybeScheduleHide()},this._element,this._config.animation))}hide(){this.isShown()&&(y.trigger(this._element,Hl).defaultPrevented||(this._element.classList.add(ei),this._queueCallback(()=>{this._element.classList.add(No),this._element.classList.remove(ei,Gn),y.trigger(this._element,Vl)},this._element,this._config.animation)))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(Gn),super.dispose()}isShown(){return this._element.classList.contains(Gn)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(i,s){switch(i.type){case"mouseover":case"mouseout":this._hasMouseInteraction=s;break;case"focusin":case"focusout":this._hasKeyboardInteraction=s}if(s)return void this._clearTimeout();const c=i.relatedTarget;this._element===c||this._element.contains(c)||this._maybeScheduleHide()}_setListeners(){y.on(this._element,Bl,i=>this._onInteraction(i,!0)),y.on(this._element,Ul,i=>this._onInteraction(i,!1)),y.on(this._element,ql,i=>this._onInteraction(i,!0)),y.on(this._element,Fl,i=>this._onInteraction(i,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(i){return this.each(function(){const s=En.getOrCreateInstance(this,i);if(typeof i=="string"){if(s[i]===void 0)throw new TypeError(`No method named "${i}"`);s[i](this)}})}}return On(En),ve(En),{Alert:yn,Button:vn,Carousel:Wt,Collapse:Xt,Dropdown:Qe,Modal:Et,Offcanvas:pt,Popover:Zn,ScrollSpy:Tn,Tab:Dt,Toast:En,Tooltip:St}})}(ea)),ea.exports}rc();const ra="https://huggingface.co",vs="https://router.huggingface.co",lc="X-HF-Bill-To",Zo={baseten:{},"black-forest-labs":{},cerebras:{},clarifai:{},cohere:{},"fal-ai":{},"featherless-ai":{},"fireworks-ai":{},groq:{},"hf-inference":{},hyperbolic:{},nebius:{},novita:{},nscale:{},openai:{},publicai:{},ovhcloud:{},replicate:{},sambanova:{},scaleway:{},together:{},wavespeed:{},"zai-org":{}};class ci extends Error{constructor(t){super(t),this.name="InferenceClientError"}}class ye extends ci{constructor(t){super(t),this.name="InputError"}}class cc extends ci{constructor(t){super(t),this.name="RoutingError"}}class ws extends ci{constructor(n,a,o){super(n);C(this,"httpRequest");C(this,"httpResponse");this.httpRequest={...a,...a.headers?{headers:{...a.headers,..."Authorization"in a.headers?{Authorization:"Bearer [redacted]"}:void 0}}:void 0},this.httpResponse=o}}class we extends ws{constructor(t,n,a){super(t,n,a),this.name="ProviderApiError"}}class Cn extends ws{constructor(t,n,a){super(t,n,a),this.name="HubApiError"}}class $ extends ci{constructor(t){super(t),this.name="ProviderOutputError"}}function _s(e){return Array.isArray(e)?e:[e]}class Re{constructor(t,n,a=!1){C(this,"provider");C(this,"baseUrl");C(this,"clientSideRoutingOnly");this.provider=t,this.baseUrl=n,this.clientSideRoutingOnly=a}makeBaseUrl(t){return t.authMethod!=="provider-key"?`${vs}/${this.provider}`:this.baseUrl}makeBody(t){return"data"in t.args&&t.args.data?t.args.data:JSON.stringify(this.preparePayload(t))}makeUrl(t){const n=this.makeBaseUrl(t),a=this.makeRoute(t).replace(/^\/+/,"");return`${n}/${a}`}prepareHeaders(t,n){const a={};return t.authMethod!=="none"&&(a.Authorization=`Bearer ${t.accessToken}`),n||(a["Content-Type"]="application/json"),a}}class xe extends Re{constructor(t,n,a=!1){super(t,n,a)}makeRoute(){return"v1/chat/completions"}preparePayload(t){return{...t.args,model:t.model}}async getResponse(t){if(typeof t=="object"&&Array.isArray(t==null?void 0:t.choices)&&typeof(t==null?void 0:t.created)=="number"&&typeof(t==null?void 0:t.id)=="string"&&typeof(t==null?void 0:t.model)=="string"&&(t.system_fingerprint===void 0||t.system_fingerprint===null||typeof t.system_fingerprint=="string")&&typeof(t==null?void 0:t.usage)=="object")return t;throw new $("Expected ChatCompletionOutput")}}class vt extends Re{constructor(t,n,a=!1){super(t,n,a)}preparePayload(t){return{...t.args,model:t.model}}makeRoute(){return"v1/completions"}async getResponse(t){const n=_s(t);if(Array.isArray(n)&&n.length>0&&n.every(a=>typeof a=="object"&&!!a&&"generated_text"in a&&typeof a.generated_text=="string"))return n[0];throw new $("Expected Array<{generated_text: string}>")}}class dc extends xe{constructor(){super("auto","https://router.huggingface.co")}makeBaseUrl(t){if(t.authMethod!=="hf-token")throw new cc("Cannot select auto-router when using non-Hugging Face API key.");return this.baseUrl}}function je(e){if(globalThis.Buffer)return globalThis.Buffer.from(e).toString("base64");{const t=[];return e.forEach(n=>{t.push(String.fromCharCode(n))}),globalThis.btoa(t.join(""))}}function pc(e,t){return Object.assign({},...t.map(n=>{if(e[n]!==void 0)return{[n]:e[n]}}))}function oa(e,t){return e.includes(t)}function Y(e,t){const n=Array.isArray(t)?t:[t],a=Object.keys(e).filter(o=>!oa(n,o));return pc(e,a)}const Go=["feature-extraction","sentence-similarity"];class re extends Re{constructor(){super("hf-inference",`${vs}/hf-inference`)}preparePayload(t){return t.args}makeUrl(t){return t.model.startsWith("http://")||t.model.startsWith("https://")?t.model:super.makeUrl(t)}makeRoute(t){return t.task&&["feature-extraction","sentence-similarity"].includes(t.task)?`models/${t.model}/pipeline/${t.task}`:`models/${t.model}`}async getResponse(t){return t}}class uc extends re{async getResponse(t,n,a,o){if(!t)throw new $("Received malformed response from HF-Inference text-to-image API: response is undefined");if(typeof t=="object"){if(o==="json")return{...t};if("data"in t&&Array.isArray(t.data)&&t.data[0].b64_json){const r=t.data[0].b64_json;return o==="url"?`data:image/jpeg;base64,${r}`:await(await fetch(`data:image/jpeg;base64,${r}`)).blob()}if("output"in t&&Array.isArray(t.output))return o==="url"?t.output[0]:await(await fetch(t.output[0])).blob()}if(t instanceof Blob){if(o==="url"||o==="json"){const r=await t.arrayBuffer().then(d=>Buffer.from(d).toString("base64"));return o==="url"?`data:image/jpeg;base64,${r}`:{output:`data:image/jpeg;base64,${r}`}}return t}throw new $("Received malformed response from HF-Inference text-to-image API: expected a Blob")}}class mc extends re{makeUrl(t){let n;return t.model.startsWith("http://")||t.model.startsWith("https://")?n=t.model.trim():n=`${this.makeBaseUrl(t)}/models/${t.model}`,n=n.replace(/\/+$/,""),n.endsWith("/v1")?n+="/chat/completions":n.endsWith("/chat/completions")||(n+="/v1/chat/completions"),n}preparePayload(t){return{...t.args,model:t.model}}async getResponse(t){return t}}class fc extends re{async getResponse(t){const n=_s(t);if(Array.isArray(n)&&n.every(a=>"generated_text"in a&&typeof(a==null?void 0:a.generated_text)=="string"))return n==null?void 0:n[0];throw new $("Received malformed response from HF-Inference text generation API: expected Array<{generated_text: string}>")}}class hc extends re{async getResponse(t){if(Array.isArray(t)&&t.every(n=>typeof n=="object"&&n!==null&&typeof n.label=="string"&&typeof n.score=="number"))return t;throw new $("Received malformed response from HF-Inference audio-classification API: expected Array<{label: string, score: number}> but received different format")}}class gc extends re{async getResponse(t){return t}async preparePayloadAsync(t){return"data"in t?t:{...Y(t,"inputs"),data:t.inputs}}}class bc extends re{async getResponse(t){if(!Array.isArray(t))throw new $("Received malformed response from HF-Inference audio-to-audio API: expected Array");if(!t.every(n=>typeof n=="object"&&n&&"label"in n&&typeof n.label=="string"&&"content-type"in n&&typeof n["content-type"]=="string"&&"blob"in n&&typeof n.blob=="string"))throw new $("Received malformed response from HF-Inference audio-to-audio API: expected Array<{label: string, audio: Blob}>");return t}}class yc extends re{async getResponse(t){if(Array.isArray(t)&&t.every(n=>typeof n=="object"&&!!n&&typeof(n==null?void 0:n.answer)=="string"&&(typeof n.end=="number"||typeof n.end>"u")&&(typeof n.score=="number"||typeof n.score>"u")&&(typeof n.start=="number"||typeof n.start>"u")))return t[0];throw new $("Received malformed response from HF-Inference document-question-answering API: expected Array<{answer: string, end: number, score: number, start: number}>")}}class vc extends re{async getResponse(t){const n=(a,o,r=0)=>r>o?!1:a.every(d=>Array.isArray(d))?a.every(d=>n(d,o,r+1)):a.every(d=>typeof d=="number");if(Array.isArray(t)&&n(t,3,0))return t;throw new $("Received malformed response from HF-Inference feature-extraction API: expected Array<number[][][] | number[][] | number[] | number>")}}class wc extends re{async getResponse(t){if(Array.isArray(t)&&t.every(n=>typeof n.label=="string"&&typeof n.score=="number"))return t;throw new $("Received malformed response from HF-Inference image-classification API: expected Array<{label: string, score: number}>")}}class _c extends re{async getResponse(t){if(Array.isArray(t)&&t.every(n=>typeof n.label=="string"&&typeof n.mask=="string"&&(n.score===void 0||typeof n.score=="number")))return t;throw new $("Received malformed response from HF-Inference image-segmentation API: expected Array<{label: string, mask: string, score: number}>")}async preparePayloadAsync(t){return{...t,inputs:je(new Uint8Array(t.inputs instanceof ArrayBuffer?t.inputs:await t.inputs.arrayBuffer()))}}}class xc extends re{async getResponse(t){if(typeof(t==null?void 0:t.generated_text)!="string")throw new $("Received malformed response from HF-Inference image-to-text API: expected {generated_text: string}");return t}}class kc extends re{async preparePayloadAsync(t){return t.parameters?{...t,inputs:je(new Uint8Array(t.inputs instanceof ArrayBuffer?t.inputs:await t.inputs.arrayBuffer()))}:{...t,model:t.model,data:t.inputs}}async getResponse(t){if(t instanceof Blob)return t;throw new $("Received malformed response from HF-Inference image-to-image API: expected Blob")}}class Ac extends re{async getResponse(t){if(Array.isArray(t)&&t.every(n=>typeof n.label=="string"&&typeof n.score=="number"&&typeof n.box.xmin=="number"&&typeof n.box.ymin=="number"&&typeof n.box.xmax=="number"&&typeof n.box.ymax=="number"))return t;throw new $("Received malformed response from HF-Inference object-detection API: expected Array<{label: string, score: number, box: {xmin: number, ymin: number, xmax: number, ymax: number}}>")}}class Ic extends re{async getResponse(t){if(Array.isArray(t)&&t.every(n=>typeof n.label=="string"&&typeof n.score=="number"))return t;throw new $("Received malformed response from HF-Inference zero-shot-image-classification API: expected Array<{label: string, score: number}>")}}class Tc extends re{async getResponse(t){const n=t==null?void 0:t[0];if(Array.isArray(n)&&n.every(a=>typeof(a==null?void 0:a.label)=="string"&&typeof a.score=="number"))return n;throw new $("Received malformed response from HF-Inference text-classification API: expected Array<{label: string, score: number}>")}}class Ec extends re{async getResponse(t){if(Array.isArray(t)?t.every(n=>typeof n=="object"&&!!n&&typeof n.answer=="string"&&typeof n.end=="number"&&typeof n.score=="number"&&typeof n.start=="number"):typeof t=="object"&&t&&typeof t.answer=="string"&&typeof t.end=="number"&&typeof t.score=="number"&&typeof t.start=="number")return Array.isArray(t)?t[0]:t;throw new $("Received malformed response from HF-Inference question-answering API: expected Array<{answer: string, end: number, score: number, start: number}>")}}class Sc extends re{async getResponse(t){if(Array.isArray(t)&&t.every(n=>typeof n.score=="number"&&typeof n.sequence=="string"&&typeof n.token=="number"&&typeof n.token_str=="string"))return t;throw new $("Received malformed response from HF-Inference fill-mask API: expected Array<{score: number, sequence: string, token: number, token_str: string}>")}}class la extends re{async getResponse(t){if(typeof t=="object"&&t!==null&&"labels"in t&&"scores"in t&&Array.isArray(t.labels)&&Array.isArray(t.scores)&&t.labels.length===t.scores.length&&t.labels.every(n=>typeof n=="string")&&t.scores.every(n=>typeof n=="number")){const n=t.scores;return t.labels.map((a,o)=>({label:a,score:n[o]}))}if(Array.isArray(t)&&t.every(la.validateOutputElement))return t;throw new $("Received malformed response from HF-Inference zero-shot-classification API: expected Array<{label: string, score: number}>")}static validateOutputElement(t){return typeof t=="object"&&!!t&&"label"in t&&"score"in t&&typeof t.label=="string"&&typeof t.score=="number"}}class Pc extends re{async getResponse(t){if(Array.isArray(t)&&t.every(n=>typeof n=="number"))return t;throw new $("Received malformed response from HF-Inference sentence-similarity API: expected Array<number>")}}class si extends re{static validate(t){return typeof t=="object"&&!!t&&"aggregator"in t&&typeof t.aggregator=="string"&&"answer"in t&&typeof t.answer=="string"&&"cells"in t&&Array.isArray(t.cells)&&t.cells.every(n=>typeof n=="string")&&"coordinates"in t&&Array.isArray(t.coordinates)&&t.coordinates.every(n=>Array.isArray(n)&&n.every(a=>typeof a=="number"))}async getResponse(t){if(Array.isArray(t)&&Array.isArray(t)?t.every(n=>si.validate(n)):si.validate(t))return Array.isArray(t)?t[0]:t;throw new $("Received malformed response from HF-Inference table-question-answering API: expected {aggregator: string, answer: string, cells: string[], coordinates: number[][]}")}}class Cc extends re{async getResponse(t){if(Array.isArray(t)&&t.every(n=>typeof n.end=="number"&&typeof n.entity_group=="string"&&typeof n.score=="number"&&typeof n.start=="number"&&typeof n.word=="string"))return t;throw new $("Received malformed response from HF-Inference token-classification API: expected Array<{end: number, entity_group: string, score: number, start: number, word: string}>")}}class Dc extends re{async getResponse(t){if(Array.isArray(t)&&t.every(n=>typeof(n==null?void 0:n.translation_text)=="string"))return(t==null?void 0:t.length)===1?t==null?void 0:t[0]:t;throw new $("Received malformed response from HF-Inference translation API: expected Array<{translation_text: string}>")}}class $c extends re{async getResponse(t){if(Array.isArray(t)&&t.every(n=>typeof(n==null?void 0:n.summary_text)=="string"))return t==null?void 0:t[0];throw new $("Received malformed response from HF-Inference summarization API: expected Array<{summary_text: string}>")}}class Lc extends re{async getResponse(t){return t}}class jc extends re{async getResponse(t){if(Array.isArray(t)&&t.every(n=>typeof n=="number"))return t;throw new $("Received malformed response from HF-Inference tabular-classification API: expected Array<number>")}}class Rc extends re{async getResponse(t){if(Array.isArray(t)&&t.every(n=>typeof n=="object"&&!!n&&typeof(n==null?void 0:n.answer)=="string"&&typeof n.score=="number"))return t[0];throw new $("Received malformed response from HF-Inference visual-question-answering API: expected Array<{answer: string, score: number}>")}}class Mc extends re{async getResponse(t){if(Array.isArray(t)&&t.every(n=>typeof n=="number"))return t;throw new $("Received malformed response from HF-Inference tabular-regression API: expected Array<number>")}}class Oc extends re{async getResponse(t){return t}}let Nc=console;function $n(){return Nc}const ta=new Map;function Bc(e,t){return t?Array.isArray(t)?t:Object.entries(t).map(([n,a])=>({provider:n,hfModelId:e,providerId:a.providerId,status:a.status,task:a.task,adapter:a.adapter,adapterWeightsPath:a.adapterWeightsPath})):[]}async function xs(e,t,n){var o;let a;if(ta.has(e))a=ta.get(e);else{const r=`${ra}/api/models/${e}?expand[]=inferenceProviderMapping`,d=await((n==null?void 0:n.fetch)??fetch)(r,{headers:t!=null&&t.startsWith("hf_")?{Authorization:`Bearer ${t}`}:{}});if(!d.ok)if((o=d.headers.get("Content-Type"))!=null&&o.startsWith("application/json")){const h=await d.json();if("error"in h&&typeof h.error=="string")throw new Cn(`Failed to fetch inference provider mapping for model ${e}: ${h.error}`,{url:r,method:"GET"},{requestId:d.headers.get("x-request-id")??"",status:d.status,body:h})}else throw new Cn(`Failed to fetch inference provider mapping for model ${e}`,{url:r,method:"GET"},{requestId:d.headers.get("x-request-id")??"",status:d.status,body:await d.text()});let f=null;try{f=await d.json()}catch{throw new Cn(`Failed to fetch inference provider mapping for model ${e}: malformed API response, invalid JSON`,{url:r,method:"GET"},{requestId:d.headers.get("x-request-id")??"",status:d.status,body:await d.text()})}if(!(f!=null&&f.inferenceProviderMapping))throw new Cn(`We have not been able to find inference provider information for model ${e}.`,{url:r,method:"GET"},{requestId:d.headers.get("x-request-id")??"",status:d.status,body:await d.text()});a=Bc(e,f.inferenceProviderMapping),ta.set(e,a)}return a}async function Uc(e,t){const n=$n();if(e.provider==="auto"&&e.task==="conversational")return{hfModelId:e.modelId,provider:"auto",providerId:e.modelId,status:"live",task:"conversational"};if(Zo[e.provider][e.modelId])return Zo[e.provider][e.modelId];const o=(await xs(e.modelId,e.accessToken,t)).find(r=>r.provider===e.provider);if(o){const r=e.provider==="hf-inference"&&oa(Go,e.task)?Go:[e.task];if(!oa(r,o.task))throw new ye(`Model ${e.modelId} is not supported for task ${e.task} and provider ${e.provider}. Supported task: ${o.task}.`);return o.status==="staging"&&n.warn(`Model ${e.modelId} is in staging mode for provider ${e.provider}. Meant for test purposes only.`),o}return null}async function Z(e,t,n){var o;const a=$n();if(n){if(e)throw new ye("Specifying both endpointUrl and provider is not supported.");return"hf-inference"}if(e||(a.log("Defaulting to 'auto' which will select the first provider available for the model, sorted by the user's order in https://hf.co/settings/inference-providers."),e="auto"),e==="auto"){if(!t)throw new ye("Specifying a model is required when provider is 'auto'");e=(o=(await xs(t))[0])==null?void 0:o.provider,a.log("Auto selected provider:",e)}if(!e)throw new ye(`No Inference Provider available for model ${t}.`);return e}const qc="https://inference.baseten.co";class Fc extends xe{constructor(){super("baseten",qc)}}const Hc="https://api.clarifai.com";class Vc extends xe{constructor(){super("clarifai",Hc)}makeRoute(){return"/v2/ext/openai/v1/chat/completions"}prepareHeaders(t,n){const a={Authorization:t.authMethod!=="provider-key"?`Bearer ${t.accessToken}`:`Key ${t.accessToken}`};return n||(a["Content-Type"]="application/json"),a}}function di(e){return new Promise(t=>{setTimeout(()=>t(),e)})}const zc="https://api.us1.bfl.ai";class Wc extends Re{constructor(){super("black-forest-labs",zc)}preparePayload(t){return{...Y(t.args,["inputs","parameters"]),...t.args.parameters,prompt:t.args.inputs}}prepareHeaders(t,n){const a={Authorization:t.authMethod!=="provider-key"?`Bearer ${t.accessToken}`:`X-Key ${t.accessToken}`};return n||(a["Content-Type"]="application/json"),a}makeRoute(t){if(!t)throw new ye("Params are required");return`/v1/${t.model}`}async getResponse(t,n,a,o){const r=$n(),d=new URL(t.polling_url);for(let f=0;f<5;f++){await di(1e3),r.debug(`Polling Black Forest Labs API for the result... ${f+1}/5`),d.searchParams.set("attempt",f.toString(10));const h=await fetch(d,{headers:{"Content-Type":"application/json"}});if(!h.ok)throw new we("Failed to fetch result from black forest labs API",{url:d.toString(),method:"GET",headers:{"Content-Type":"application/json"}},{requestId:h.headers.get("x-request-id")??"",status:h.status,body:await h.text()});const m=await h.json();if(typeof m=="object"&&m&&"status"in m&&typeof m.status=="string"&&m.status==="Ready"&&"result"in m&&typeof m.result=="object"&&m.result&&"sample"in m.result&&typeof m.result.sample=="string")return o==="json"?m.result:o==="url"?m.result.sample:await(await fetch(m.result.sample)).blob()}throw new $("Timed out while waiting for the result from black forest labs API - aborting after 5 attempts")}}class Kc extends xe{constructor(){super("cerebras","https://api.cerebras.ai")}}class Xc extends xe{constructor(){super("cohere","https://api.cohere.com")}makeRoute(){return"/compatibility/v1/chat/completions"}}function Ot(e){return/^http(s?):/.test(e)||e.startsWith("/")}const es=["audio/mpeg","audio/mp4","audio/wav","audio/x-wav"];class pi extends Re{constructor(t){super("fal-ai",t||"https://fal.run")}preparePayload(t){return t.args}makeRoute(t){return`/${t.model}`}prepareHeaders(t,n){const a={Authorization:t.authMethod!=="provider-key"?`Bearer ${t.accessToken}`:`Key ${t.accessToken}`};return n||(a["Content-Type"]="application/json"),a}}class ui extends pi{async getResponseFromQueueApi(t,n,a){if(!n||!a)throw new ye(`URL and headers are required for ${this.task} task`);if(!t.request_id)throw new $(`Received malformed response from Fal.ai ${this.task} API: no request ID found in the response`);let r=t.status;const d=new URL(n),f=`${d.protocol}//${d.host}${d.host==="router.huggingface.co"?"/fal-ai":""}`,h=new URL(t.response_url).pathname,m=d.search,k=`${f}${h}/status${m}`,v=`${f}${h}${m}`;for(;r!=="COMPLETED";){await di(500);const ae=await fetch(k,{headers:a});if(!ae.ok)throw new we("Failed to fetch response status from fal-ai API",{url:k,method:"GET"},{requestId:ae.headers.get("x-request-id")??"",status:ae.status,body:await ae.text()});try{r=(await ae.json()).status}catch{throw new $("Failed to parse status response from fal-ai API: received malformed response")}}const D=await fetch(v,{headers:a});let X;try{X=await D.json()}catch{throw new $("Failed to parse result response from fal-ai API: received malformed response")}return X}}function ks(e,t){return`${ra}/${e}/resolve/main/${t}`}class Qc extends pi{preparePayload(t){var a;const n={...Y(t.args,["inputs","parameters"]),...t.args.parameters,sync_mode:!0,prompt:t.args.inputs};return((a=t.mapping)==null?void 0:a.adapter)==="lora"&&t.mapping.adapterWeightsPath&&(n.loras=[{path:ks(t.mapping.hfModelId,t.mapping.adapterWeightsPath),scale:1}],t.mapping.providerId==="fal-ai/lora"&&(n.model_name="stabilityai/stable-diffusion-xl-base-1.0")),n}async getResponse(t,n,a,o){if(typeof t=="object"&&"images"in t&&Array.isArray(t.images)&&t.images.length>0&&"url"in t.images[0]&&typeof t.images[0].url=="string")return o==="json"?{...t}:o==="url"?t.images[0].url:await(await fetch(t.images[0].url)).blob();throw new $("Received malformed response from Fal.ai text-to-image API")}}class Jc extends ui{constructor(){super("https://queue.fal.run");C(this,"task");this.task="image-to-image"}makeRoute(n){return n.authMethod!=="provider-key"?`/${n.model}?_subdomain=queue`:`/${n.model}`}preparePayload(n){var o;const a=n.args;return((o=n.mapping)==null?void 0:o.adapter)==="lora"&&n.mapping.adapterWeightsPath&&(a.loras=[{path:ks(n.mapping.hfModelId,n.mapping.adapterWeightsPath),scale:1}]),a}async preparePayloadAsync(n){const a=n.inputs instanceof Blob?n.inputs.type:"image/png";return{...Y(n,["inputs","parameters"]),image_url:`data:${a};base64,${je(new Uint8Array(n.inputs instanceof ArrayBuffer?n.inputs:await n.inputs.arrayBuffer()))}`,...n.parameters,...n}}async getResponse(n,a,o){const r=await this.getResponseFromQueueApi(n,a,o);if(typeof r=="object"&&r&&"images"in r&&Array.isArray(r.images)&&r.images.length>0&&typeof r.images[0]=="object"&&r.images[0]&&"url"in r.images[0]&&typeof r.images[0].url=="string"&&Ot(r.images[0].url))return await(await fetch(r.images[0].url)).blob();throw new $(`Received malformed response from Fal.ai image-to-image API: expected { images: Array<{ url: string }> } result format, got instead: ${JSON.stringify(r)}`)}}class Yc extends ui{constructor(){super("https://queue.fal.run");C(this,"task");this.task="text-to-video"}makeRoute(n){return n.authMethod!=="provider-key"?`/${n.model}?_subdomain=queue`:`/${n.model}`}preparePayload(n){return{...Y(n.args,["inputs","parameters"]),...n.args.parameters,prompt:n.args.inputs}}async getResponse(n,a,o){const r=await this.getResponseFromQueueApi(n,a,o);if(typeof r=="object"&&r&&"video"in r&&typeof r.video=="object"&&r.video&&"url"in r.video&&typeof r.video.url=="string"&&Ot(r.video.url))return await(await fetch(r.video.url)).blob();throw new $(`Received malformed response from Fal.ai text-to-video API: expected { video: { url: string } } result format, got instead: ${JSON.stringify(r)}`)}}class Zc extends ui{constructor(){super("https://queue.fal.run");C(this,"task");this.task="image-to-video"}makeRoute(n){return n.authMethod!=="provider-key"?`/${n.model}?_subdomain=queue`:`/${n.model}`}preparePayload(n){return{...Y(n.args,["inputs","parameters"]),...n.args.parameters,image_url:n.args.image_url}}async preparePayloadAsync(n){const a=n.inputs instanceof Blob?n.inputs.type:"image/png";return{...Y(n,["inputs","parameters"]),image_url:`data:${a};base64,${je(new Uint8Array(n.inputs instanceof ArrayBuffer?n.inputs:await n.inputs.arrayBuffer()))}`,...n.parameters,...n}}async getResponse(n,a,o){const r=await this.getResponseFromQueueApi(n,a,o);if(typeof r=="object"&&r!==null&&"video"in r&&typeof r.video=="object"&&r.video!==null&&"url"in r.video&&typeof r.video.url=="string"&&"url"in r.video&&Ot(r.video.url))return await(await fetch(r.video.url)).blob();throw new $(`Received malformed response from Fal.ai image‑to‑video API: expected { video: { url: string } }, got: ${JSON.stringify(r)}`)}}class Gc extends pi{prepareHeaders(t,n){const a=super.prepareHeaders(t,n);return a["Content-Type"]="application/json",a}async getResponse(t){const n=t;if(typeof(n==null?void 0:n.text)!="string")throw new $(`Received malformed response from Fal.ai Automatic Speech Recognition API: expected { text: string } format, got instead: ${JSON.stringify(t)}`);return{text:n.text}}async preparePayloadAsync(t){const n="data"in t&&t.data instanceof Blob?t.data:"inputs"in t?t.inputs:void 0,a=n==null?void 0:n.type;if(!a)throw new ye("Unable to determine the input's content-type. Make sure your are passing a Blob when using provider fal-ai.");if(!es.includes(a))throw new ye(`Provider fal-ai does not support blob type ${a} - supported content types are: ${es.join(", ")}`);const o=je(new Uint8Array(await n.arrayBuffer()));return{..."data"in t?Y(t,"data"):Y(t,"inputs"),audio_url:`data:${a};base64,${o}`}}}class ed extends pi{preparePayload(t){return{...Y(t.args,["inputs","parameters"]),...t.args.parameters,text:t.args.inputs}}async getResponse(t){var o;const n=t;if(typeof((o=n==null?void 0:n.audio)==null?void 0:o.url)!="string")throw new $(`Received malformed response from Fal.ai Text-to-Speech API: expected { audio: { url: string } } format, got instead: ${JSON.stringify(t)}`);const a=await fetch(n.audio.url);if(!a.ok)throw new we(`Failed to fetch audio from ${n.audio.url}: ${a.statusText}`,{url:n.audio.url,method:"GET",headers:{"Content-Type":"application/json"}},{requestId:a.headers.get("x-request-id")??"",status:a.status,body:await a.text()});try{return await a.blob()}catch(r){throw new we(`Failed to fetch audio from ${n.audio.url}: ${r instanceof Error?r.message:String(r)}`,{url:n.audio.url,method:"GET",headers:{"Content-Type":"application/json"}},{requestId:a.headers.get("x-request-id")??"",status:a.status,body:await a.text()})}}}class td extends ui{constructor(){super("https://queue.fal.run");C(this,"task");this.task="image-segmentation"}makeRoute(n){return n.authMethod!=="provider-key"?`/${n.model}?_subdomain=queue`:`/${n.model}`}preparePayload(n){return{...Y(n.args,["inputs","parameters"]),...n.args.parameters,sync_mode:!0}}async preparePayloadAsync(n){const a="data"in n&&n.data instanceof Blob?n.data:"inputs"in n?n.inputs:void 0,o=a instanceof Blob?a.type:"image/png",r=je(new Uint8Array(a instanceof ArrayBuffer?a:await a.arrayBuffer()));return{...Y(n,["inputs","parameters","data"]),...n.parameters,...n,image_url:`data:${o};base64,${r}`,sync_mode:!0}}async getResponse(n,a,o){const r=await this.getResponseFromQueueApi(n,a,o);if(typeof r=="object"&&r!==null&&"image"in r&&typeof r.image=="object"&&r.image!==null&&"url"in r.image&&typeof r.image.url=="string"){const d=await fetch(r.image.url);if(!d.ok)throw new we(`Failed to fetch segmentation mask from ${r.image.url}`,{url:r.image.url,method:"GET"},{requestId:d.headers.get("x-request-id")??"",status:d.status,body:await d.text()});const h=await(await d.blob()).arrayBuffer();return[{label:"mask",score:1,mask:je(new Uint8Array(h))}]}throw new $(`Received malformed response from Fal.ai image-segmentation API: expected { image: { url: string } } format, got instead: ${JSON.stringify(n)}`)}}const As="https://api.featherless.ai";class nd extends xe{constructor(){super("featherless-ai",As)}}class id extends vt{constructor(){super("featherless-ai",As)}preparePayload(t){return{model:t.model,...Y(t.args,["inputs","parameters"]),...t.args.parameters?{max_tokens:t.args.parameters.max_new_tokens,...Y(t.args.parameters,"max_new_tokens")}:void 0,prompt:t.args.inputs}}async getResponse(t){if(typeof t=="object"&&"choices"in t&&Array.isArray(t==null?void 0:t.choices)&&typeof(t==null?void 0:t.model)=="string")return{generated_text:t.choices[0].text};throw new $("Received malformed response from Featherless AI text generation API")}}class ad extends xe{constructor(){super("fireworks-ai","https://api.fireworks.ai")}makeRoute(){return"/inference/v1/chat/completions"}}const Is="https://api.groq.com";class od extends vt{constructor(){super("groq",Is)}makeRoute(){return"/openai/v1/chat/completions"}}class sd extends xe{constructor(){super("groq",Is)}makeRoute(){return"/openai/v1/chat/completions"}}const ca="https://api.hyperbolic.xyz";class rd extends xe{constructor(){super("hyperbolic",ca)}}class ld extends vt{constructor(){super("hyperbolic",ca)}makeRoute(){return"v1/chat/completions"}preparePayload(t){return{messages:[{content:t.args.inputs,role:"user"}],...t.args.parameters?{max_tokens:t.args.parameters.max_new_tokens,...Y(t.args.parameters,"max_new_tokens")}:void 0,...Y(t.args,["inputs","parameters"]),model:t.model}}async getResponse(t){if(typeof t=="object"&&"choices"in t&&Array.isArray(t==null?void 0:t.choices)&&typeof(t==null?void 0:t.model)=="string")return{generated_text:t.choices[0].message.content};throw new $("Received malformed response from Hyperbolic text generation API")}}class cd extends Re{constructor(){super("hyperbolic",ca)}makeRoute(t){return"/v1/images/generations"}preparePayload(t){return{...Y(t.args,["inputs","parameters"]),...t.args.parameters,prompt:t.args.inputs,model_name:t.model}}async getResponse(t,n,a,o){if(typeof t=="object"&&"images"in t&&Array.isArray(t.images)&&t.images[0]&&typeof t.images[0].image=="string")return o==="json"?{...t}:o==="url"?`data:image/jpeg;base64,${t.images[0].image}`:fetch(`data:image/jpeg;base64,${t.images[0].image}`).then(r=>r.blob());throw new $("Received malformed response from Hyperbolic text-to-image API")}}const mi="https://api.studio.nebius.ai";class dd extends xe{constructor(){super("nebius",mi)}preparePayload(t){var o;const n=super.preparePayload(t),a=t.args.response_format;return(a==null?void 0:a.type)==="json_schema"&&((o=a.json_schema)!=null&&o.schema)&&(n.guided_json=a.json_schema.schema),n}}class pd extends vt{constructor(){super("nebius",mi)}preparePayload(t){return{...t.args,model:t.model,prompt:t.args.inputs}}async getResponse(t){var n;if(typeof t=="object"&&"choices"in t&&Array.isArray(t==null?void 0:t.choices)&&t.choices.length>0&&typeof((n=t.choices[0])==null?void 0:n.text)=="string")return{generated_text:t.choices[0].text};throw new $("Received malformed response from Nebius text generation API")}}class ud extends Re{constructor(){super("nebius",mi)}preparePayload(t){return{...Y(t.args,["inputs","parameters"]),...t.args.parameters,response_format:"b64_json",prompt:t.args.inputs,model:t.model}}makeRoute(){return"v1/images/generations"}async getResponse(t,n,a,o){if(typeof t=="object"&&"data"in t&&Array.isArray(t.data)&&t.data.length>0&&"b64_json"in t.data[0]&&typeof t.data[0].b64_json=="string"){if(o==="json")return{...t};const r=t.data[0].b64_json;return o==="url"?`data:image/jpeg;base64,${r}`:fetch(`data:image/jpeg;base64,${r}`).then(d=>d.blob())}throw new $("Received malformed response from Nebius text-to-image API")}}class md extends Re{constructor(){super("nebius",mi)}preparePayload(t){return{input:t.args.inputs,model:t.model}}makeRoute(){return"v1/embeddings"}async getResponse(t){return t.data.map(n=>n.embedding)}}const da="https://api.novita.ai";class fd extends vt{constructor(){super("novita",da)}makeRoute(){return"/v3/openai/chat/completions"}}class hd extends xe{constructor(){super("novita",da)}makeRoute(){return"/v3/openai/chat/completions"}}class gd extends Re{constructor(){super("novita",da)}makeRoute(t){return`/v3/async/${t.model}`}preparePayload(t){const{num_inference_steps:n,...a}=t.args.parameters??{};return{...Y(t.args,["inputs","parameters"]),...a,steps:n,prompt:t.args.inputs}}async getResponse(t,n,a){if(!n||!a)throw new ye("URL and headers are required for text-to-video task");const o=t.task_id;if(!o)throw new $("Received malformed response from Novita text-to-video API: no task ID found in the response");const r=new URL(n),f=`${`${r.protocol}//${r.host}${r.host==="router.huggingface.co"?"/novita":""}`}/v3/async/task-result?task_id=${o}`;let h="",m;for(;h!=="TASK_STATUS_SUCCEED"&&h!=="TASK_STATUS_FAILED";){await di(500);const k=await fetch(f,{headers:a});if(!k.ok)throw new we("Failed to fetch task result",{url:f,method:"GET",headers:a},{requestId:k.headers.get("x-request-id")??"",status:k.status,body:await k.text()});try{if(m=await k.json(),m&&typeof m=="object"&&"task"in m&&m.task&&typeof m.task=="object"&&"status"in m.task&&typeof m.task.status=="string")h=m.task.status;else throw new $("Received malformed response from Novita text-to-video API: failed to get task status")}catch{throw new $("Received malformed response from Novita text-to-video API: failed to parse task result")}}if(h==="TASK_STATUS_FAILED")throw new $("Novita text-to-video task failed");if(typeof m=="object"&&m&&"videos"in m&&typeof m.videos=="object"&&m.videos&&Array.isArray(m.videos)&&m.videos.length>0&&"video_url"in m.videos[0]&&typeof m.videos[0].video_url=="string"&&Ot(m.videos[0].video_url))return await(await fetch(m.videos[0].video_url)).blob();throw new $(`Received malformed response from Novita text-to-video API: expected { videos: [{ video_url: string }] } format, got instead: ${JSON.stringify(m)}`)}}const Ts="https://inference.api.nscale.com";class bd extends xe{constructor(){super("nscale",Ts)}}class yd extends Re{constructor(){super("nscale",Ts)}preparePayload(t){return{...Y(t.args,["inputs","parameters"]),...t.args.parameters,response_format:"b64_json",prompt:t.args.inputs,model:t.model}}makeRoute(){return"v1/images/generations"}async getResponse(t,n,a,o){if(typeof t=="object"&&"data"in t&&Array.isArray(t.data)&&t.data.length>0&&"b64_json"in t.data[0]&&typeof t.data[0].b64_json=="string"){if(o==="json")return{...t};const r=t.data[0].b64_json;return o==="url"?`data:image/jpeg;base64,${r}`:fetch(`data:image/jpeg;base64,${r}`).then(d=>d.blob())}throw new $("Received malformed response from Nscale text-to-image API")}}const vd="https://api.openai.com";class wd extends xe{constructor(){super("openai",vd,!0)}}const Es="https://oai.endpoints.kepler.ai.cloud.ovh.net";class _d extends xe{constructor(){super("ovhcloud",Es)}}class xd extends vt{constructor(){super("ovhcloud",Es)}preparePayload(t){return{model:t.model,...Y(t.args,["inputs","parameters"]),...t.args.parameters?{max_tokens:t.args.parameters.max_new_tokens,...Y(t.args.parameters,"max_new_tokens")}:void 0,prompt:t.args.inputs}}async getResponse(t){if(typeof t=="object"&&"choices"in t&&Array.isArray(t==null?void 0:t.choices)&&typeof(t==null?void 0:t.model)=="string")return{generated_text:t.choices[0].text};throw new $("Received malformed response from OVHcloud text generation API")}}class kd extends xe{constructor(){super("publicai","https://api.publicai.co")}}class Ln extends Re{constructor(t){super("replicate",t||"https://api.replicate.com")}makeRoute(t){return t.model.includes(":")?"v1/predictions":`v1/models/${t.model}/predictions`}preparePayload(t){return{input:{...Y(t.args,["inputs","parameters"]),...t.args.parameters,prompt:t.args.inputs},version:t.model.includes(":")?t.model.split(":")[1]:void 0}}prepareHeaders(t,n){const a={Authorization:`Bearer ${t.accessToken}`,Prefer:"wait"};return n||(a["Content-Type"]="application/json"),a}makeUrl(t){const n=this.makeBaseUrl(t);return t.model.includes(":")?`${n}/v1/predictions`:`${n}/v1/models/${t.model}/predictions`}}class Ad extends Ln{preparePayload(t){var n;return{input:{...Y(t.args,["inputs","parameters"]),...t.args.parameters,prompt:t.args.inputs,lora_weights:((n=t.mapping)==null?void 0:n.adapter)==="lora"&&t.mapping.adapterWeightsPath?`https://huggingface.co/${t.mapping.hfModelId}`:void 0},version:t.model.includes(":")?t.model.split(":")[1]:void 0}}async getResponse(t,n,a,o){if(typeof t=="object"&&"output"in t&&Array.isArray(t.output)&&t.output.length>0&&typeof t.output[0]=="string")return o==="json"?{...t}:o==="url"?t.output[0]:await(await fetch(t.output[0])).blob();throw new $("Received malformed response from Replicate text-to-image API")}}class Id extends Ln{preparePayload(t){const n=super.preparePayload(t),a=n.input;if(typeof a=="object"&&a!==null&&"prompt"in a){const o=a;o.text=o.prompt,delete o.prompt}return n}async getResponse(t){if(t instanceof Blob)return t;if(t&&typeof t=="object"&&"output"in t){if(typeof t.output=="string")return await(await fetch(t.output)).blob();if(Array.isArray(t.output))return await(await fetch(t.output[0])).blob()}throw new $("Received malformed response from Replicate text-to-speech API")}}class Td extends Ln{async getResponse(t){if(typeof t=="object"&&t&&"output"in t&&typeof t.output=="string"&&Ot(t.output))return await(await fetch(t.output)).blob();throw new $("Received malformed response from Replicate text-to-video API")}}class Ed extends Ln{preparePayload(t){return{input:{...Y(t.args,["inputs","parameters"]),...t.args.parameters,audio:t.args.inputs},version:t.model.includes(":")?t.model.split(":")[1]:void 0}}async preparePayloadAsync(t){const n="data"in t&&t.data instanceof Blob?t.data:"inputs"in t?t.inputs:void 0;if(!n||!(n instanceof Blob))throw new Error("Audio input must be a Blob");const a=new Uint8Array(await n.arrayBuffer()),o=je(a),r=`data:${n.type||"audio/wav"};base64,${o}`;return{..."data"in t?Y(t,"data"):Y(t,"inputs"),inputs:r}}async getResponse(t){if(typeof(t==null?void 0:t.output)=="string")return{text:t.output};if(Array.isArray(t==null?void 0:t.output)&&typeof t.output[0]=="string")return{text:t.output[0]};const n=t==null?void 0:t.output;if(n&&typeof n=="object"){if(typeof n.transcription=="string")return{text:n.transcription};if(typeof n.translation=="string")return{text:n.translation};if(typeof n.txt_file=="string")return{text:await(await fetch(n.txt_file)).text()}}throw new $("Received malformed response from Replicate automatic-speech-recognition API")}}class Sd extends Ln{preparePayload(t){var n;return{input:{...Y(t.args,["inputs","parameters"]),...t.args.parameters,input_image:t.args.inputs,lora_weights:((n=t.mapping)==null?void 0:n.adapter)==="lora"&&t.mapping.adapterWeightsPath?`https://huggingface.co/${t.mapping.hfModelId}`:void 0},version:t.model.includes(":")?t.model.split(":")[1]:void 0}}async preparePayloadAsync(t){const{inputs:n,...a}=t,o=new Uint8Array(await n.arrayBuffer()),r=je(o),d=`data:${n.type||"image/jpeg"};base64,${r}`;return{...a,inputs:d}}async getResponse(t){if(typeof t=="object"&&t&&"output"in t&&Array.isArray(t.output)&&t.output.length>0&&typeof t.output[0]=="string")return await(await fetch(t.output[0])).blob();if(typeof t=="object"&&t&&"output"in t&&typeof t.output=="string"&&Ot(t.output))return await(await fetch(t.output)).blob();throw new $("Received malformed response from Replicate image-to-image API")}}class Pd extends xe{constructor(){super("sambanova","https://api.sambanova.ai")}preparePayload(t){const n=t.args.response_format;return(n==null?void 0:n.type)==="json_schema"&&n.json_schema&&(n.json_schema.strict??!0)&&(n.json_schema.strict=!1),super.preparePayload(t)}}class Cd extends Re{constructor(){super("sambanova","https://api.sambanova.ai")}makeRoute(){return"/v1/embeddings"}async getResponse(t){if(typeof t=="object"&&"data"in t&&Array.isArray(t.data))return t.data.map(n=>n.embedding);throw new $("Received malformed response from Sambanova feature-extraction (embeddings) API")}preparePayload(t){return{model:t.model,input:t.args.inputs,...t.args}}}const pa="https://api.scaleway.ai";class Dd extends xe{constructor(){super("scaleway",pa)}}class $d extends vt{constructor(){super("scaleway",pa)}preparePayload(t){return{model:t.model,...t.args,prompt:t.args.inputs}}async getResponse(t){if(typeof t=="object"&&t!==null&&"choices"in t&&Array.isArray(t.choices)&&t.choices.length>0){const n=t.choices[0];if(typeof n=="object"&&n&&"text"in n&&n.text&&typeof n.text=="string")return{generated_text:n.text}}throw new $("Received malformed response from Scaleway text generation API")}}class Ld extends Re{constructor(){super("scaleway",pa)}preparePayload(t){return{input:t.args.inputs,model:t.model}}makeRoute(){return"v1/embeddings"}async getResponse(t){return t.data.map(n=>n.embedding)}}const ua="https://api.together.xyz";class jd extends xe{constructor(){super("together",ua)}preparePayload(t){var o;const n=super.preparePayload(t),a=n.response_format;return(a==null?void 0:a.type)==="json_schema"&&((o=a==null?void 0:a.json_schema)!=null&&o.schema)&&(n.response_format={type:"json_schema",schema:a.json_schema.schema}),n}}class Rd extends vt{constructor(){super("together",ua)}preparePayload(t){return{model:t.model,...t.args,prompt:t.args.inputs}}async getResponse(t){if(typeof t=="object"&&"choices"in t&&Array.isArray(t==null?void 0:t.choices)&&typeof(t==null?void 0:t.model)=="string")return{generated_text:t.choices[0].text};throw new $("Received malformed response from Together text generation API")}}class Md extends Re{constructor(){super("together",ua)}makeRoute(){return"v1/images/generations"}preparePayload(t){return{...Y(t.args,["inputs","parameters"]),...t.args.parameters,prompt:t.args.inputs,response_format:"base64",model:t.model}}async getResponse(t,n,a,o){if(typeof t=="object"&&"data"in t&&Array.isArray(t.data)&&t.data.length>0&&"b64_json"in t.data[0]&&typeof t.data[0].b64_json=="string"){if(o==="json")return{...t};const r=t.data[0].b64_json;return o==="url"?`data:image/jpeg;base64,${r}`:fetch(`data:image/jpeg;base64,${r}`).then(d=>d.blob())}throw new $("Received malformed response from Together text-to-image API")}}const jn="https://api.wavespeed.ai";class fi extends Re{constructor(t){super("wavespeed",t||jn)}makeRoute(t){return`/api/v3/${t.model}`}preparePayload(t){var a;const n={...Y(t.args,["inputs","parameters"]),...t.args.parameters,prompt:t.args.inputs};return((a=t.mapping)==null?void 0:a.adapter)==="lora"&&(n.loras=[{path:t.mapping.hfModelId,scale:1}]),n}async getResponse(t,n,a){var h;if(!n||!a)throw new ye("Headers are required for WaveSpeed AI API calls");const o=new URL(n),r=new URL(t.data.urls.get).pathname,f=`${`${o.protocol}//${o.host}${o.host==="router.huggingface.co"?"/wavespeed":""}`}${r}`;for(;;){const m=await fetch(f,{headers:a});if(!m.ok)throw new we("Failed to fetch response status from WaveSpeed AI API",{url:f,method:"GET"},{requestId:m.headers.get("x-request-id")??"",status:m.status,body:await m.text()});const v=(await m.json()).data;switch(v.status){case"completed":{if(!((h=v.outputs)!=null&&h[0]))throw new $("Received malformed response from WaveSpeed AI API: No output URL in completed response");const D=await fetch(v.outputs[0]);if(!D.ok)throw new we("Failed to fetch generation output from WaveSpeed AI API",{url:v.outputs[0],method:"GET"},{requestId:D.headers.get("x-request-id")??"",status:D.status,body:await D.text()});return await D.blob()}case"failed":throw new $(v.error||"Task failed");default:{await di(500);continue}}}}}class Od extends fi{constructor(){super(jn)}}class Nd extends fi{constructor(){super(jn)}}class Bd extends fi{constructor(){super(jn)}async preparePayloadAsync(t){var n;return{...t,inputs:(n=t.parameters)==null?void 0:n.prompt,image:je(new Uint8Array(t.inputs instanceof ArrayBuffer?t.inputs:await t.inputs.arrayBuffer()))}}}class Ud extends fi{constructor(){super(jn)}async preparePayloadAsync(t){var n;return{...t,inputs:(n=t.parameters)==null?void 0:n.prompt,image:je(new Uint8Array(t.inputs instanceof ArrayBuffer?t.inputs:await t.inputs.arrayBuffer()))}}}const qd="https://api.z.ai";class Fd extends xe{constructor(){super("zai-org",qd)}prepareHeaders(t,n){const a=super.prepareHeaders(t,n);return a["x-source-channel"]="hugging_face",a["accept-language"]="en-US,en",a}makeRoute(){return"/api/paas/v4/chat/completions"}}const na={baseten:{conversational:new Fc},"black-forest-labs":{"text-to-image":new Wc},cerebras:{conversational:new Kc},clarifai:{conversational:new Vc},cohere:{conversational:new Xc},"fal-ai":{"text-to-image":new Qc,"text-to-speech":new ed,"text-to-video":new Yc,"image-to-image":new Jc,"automatic-speech-recognition":new Gc,"image-segmentation":new td,"image-to-video":new Zc},"featherless-ai":{conversational:new nd,"text-generation":new id},"hf-inference":{"text-to-image":new uc,conversational:new mc,"text-generation":new fc,"text-classification":new Tc,"question-answering":new Ec,"audio-classification":new hc,"automatic-speech-recognition":new gc,"fill-mask":new Sc,"feature-extraction":new vc,"image-classification":new wc,"image-segmentation":new _c,"document-question-answering":new yc,"image-to-text":new xc,"object-detection":new Ac,"audio-to-audio":new bc,"zero-shot-image-classification":new Ic,"zero-shot-classification":new la,"image-to-image":new kc,"sentence-similarity":new Pc,"table-question-answering":new si,"tabular-classification":new jc,"text-to-speech":new Lc,"token-classification":new Cc,translation:new Dc,summarization:new $c,"visual-question-answering":new Rc,"tabular-regression":new Mc,"text-to-audio":new Oc},"fireworks-ai":{conversational:new ad},groq:{conversational:new sd,"text-generation":new od},hyperbolic:{"text-to-image":new cd,conversational:new rd,"text-generation":new ld},nebius:{"text-to-image":new ud,conversational:new dd,"text-generation":new pd,"feature-extraction":new md},novita:{conversational:new hd,"text-generation":new fd,"text-to-video":new gd},nscale:{"text-to-image":new yd,conversational:new bd},openai:{conversational:new wd},ovhcloud:{conversational:new _d,"text-generation":new xd},publicai:{conversational:new kd},replicate:{"text-to-image":new Ad,"text-to-speech":new Id,"text-to-video":new Td,"image-to-image":new Sd,"automatic-speech-recognition":new Ed},sambanova:{conversational:new Pd,"feature-extraction":new Cd},scaleway:{conversational:new Dd,"text-generation":new $d,"feature-extraction":new Ld},together:{"text-to-image":new Md,conversational:new jd,"text-generation":new Rd},wavespeed:{"text-to-image":new Od,"text-to-video":new Nd,"image-to-image":new Bd,"image-to-video":new Ud},"zai-org":{conversational:new Fd}};function G(e,t){if(e==="hf-inference"&&!t||e==="auto")return new re;if(!t)throw new ye("you need to provide a task name when using an external provider, e.g. 'text-to-image'");if(!(e in na))throw new ye(`Provider '${e}' not supported. Available providers: ${Object.keys(na)}`);const n=na[e];if(!n||!(t in n))throw new ye(`Task '${t}' not supported for provider '${e}'. Available tasks: ${Object.keys(n??{})}`);return n[t]}const Hd="4.13.0",Vd="@huggingface/inference";let ia=null;async function Nt(e,t,n){const{model:a}=e,o=t.provider,{task:r}=n??{};if(e.endpointUrl&&o!=="hf-inference")throw new ye("Cannot use endpointUrl with a third-party provider.");if(a&&Ot(a))throw new ye("Model URLs are no longer supported. Use endpointUrl instead.");if(e.endpointUrl)return ts(a??e.endpointUrl,t,e,void 0,n);if(!a&&!r)throw new ye("No model provided, and no task has been specified.");const d=a??await zd(r);if(t.clientSideRoutingOnly&&!a)throw new ye(`Provider ${o} requires a model ID to be passed directly.`);const f=t.clientSideRoutingOnly?{provider:o,providerId:Kd(a,o),hfModelId:a,status:"live",task:r}:await Uc({modelId:d,task:r,provider:o,accessToken:e.accessToken},{fetch:n==null?void 0:n.fetch});if(!f)throw new ye(`We have not been able to find inference provider information for model ${d}.`);return ts(f.providerId,t,e,f,n)}function ts(e,t,n,a,o){const{accessToken:r,endpointUrl:d,provider:f,model:h,...m}=n,k=t.provider,{includeCredentials:v,task:D,signal:X,billTo:ae}=o??{},ee=(()=>{if(t.clientSideRoutingOnly&&r&&r.startsWith("hf_"))throw new ye(`Provider ${k} is closed-source and does not support HF tokens.`);return r?r.startsWith("hf_")?"hf-token":"provider-key":v==="include"?"credentials-include":"none"})(),Ee=d??e,pe=t.makeUrl({authMethod:ee,model:Ee,task:D}),ve=t.prepareHeaders({accessToken:r,authMethod:ee},"data"in n&&!!n.data);ae&&(ve[lc]=ae);const wt=[`${Vd}/${Hd}`,typeof navigator<"u"?navigator.userAgent:void 0].filter(dn=>dn!==void 0).join(" ");ve["User-Agent"]=wt;const rt=t.makeBody({args:m,model:e,task:D,mapping:a});let ut;typeof v=="string"?ut=v:v===!0&&(ut="include");const Ft={headers:ve,method:"POST",body:rt,...ut?{credentials:ut}:void 0,signal:X};return{url:pe,info:Ft}}async function zd(e){ia||(ia=await Wd());const t=ia[e];if(((t==null?void 0:t.models.length)??0)<=0)throw new ye(`No default model defined for task ${e}, please define the model explicitly.`);return t.models[0].id}async function Wd(){const e=`${ra}/api/tasks`,t=await fetch(e);if(!t.ok)throw new Cn("Failed to load tasks definitions from Hugging Face Hub.",{url:e,method:"GET"},{requestId:t.headers.get("x-request-id")??"",status:t.status,body:await t.text()});return await t.json()}function Kd(e,t){if(!e.startsWith(`${t}/`))throw new ye(`Models from ${t} must be prefixed by "${t}/". Got "${e}".`);return e.slice(t.length+1)}function Xd(e){let t,n,a,o=!1;return function(d){t===void 0?(t=d,n=0,a=-1):t=Jd(t,d);const f=t.length;let h=0;for(;n<f;){o&&(t[n]===10&&(h=++n),o=!1);let m=-1;for(;n<f&&m===-1;++n)switch(t[n]){case 58:a===-1&&(a=n-h);break;case 13:o=!0;case 10:m=n;break}if(m===-1)break;e(t.subarray(h,m),a),h=n,a=-1}h===f?t=void 0:h!==0&&(t=t.subarray(h),n-=h)}}function Qd(e,t,n){let a=ns();const o=new TextDecoder;return function(d,f){if(d.length===0)n==null||n(a),a=ns();else if(f>0){const h=o.decode(d.subarray(0,f)),m=f+(d[f+1]===32?2:1),k=o.decode(d.subarray(m));switch(h){case"data":a.data=a.data?a.data+`
`+k:k;break;case"event":a.event=k;break;case"id":e(a.id=k);break;case"retry":{const v=parseInt(k,10);isNaN(v)||t(a.retry=v);break}}}}}function Jd(e,t){const n=new Uint8Array(e.length+t.length);return n.set(e),n.set(t,e.length),n}function ns(){return{data:"",event:"",id:"",retry:void 0}}function Ye(e){let t=null;if(e instanceof Blob||e instanceof ArrayBuffer)t="[Blob or ArrayBuffer]";else if(typeof e=="string")try{t=JSON.parse(e)}catch{t=e}return t.accessToken&&(t.accessToken="[REDACTED]"),t}async function ie(e,t,n){var h;const{url:a,info:o}=await Nt(e,t,n),r=await((n==null?void 0:n.fetch)??fetch)(a,o),d={url:a,info:o};if((n==null?void 0:n.retry_on_error)!==!1&&r.status===503)return ie(e,t,n);if(!r.ok){const m=r.headers.get("Content-Type");if(["application/json","application/problem+json"].some(v=>m==null?void 0:m.startsWith(v))){const v=await r.json();throw[400,422,404,500].includes(r.status)&&(n!=null&&n.chatCompletion)?new we(`Provider ${e.provider} does not seem to support chat completion for model ${e.model} . Error: ${JSON.stringify(v.error)}`,{url:a,method:o.method??"GET",headers:o.headers,body:Ye(o.body)},{requestId:r.headers.get("x-request-id")??"",status:r.status,body:v}):typeof v.error=="string"||typeof v.detail=="string"||typeof v.message=="string"?new we(`Failed to perform inference: ${v.error??v.detail??v.message}`,{url:a,method:o.method??"GET",headers:o.headers,body:Ye(o.body)},{requestId:r.headers.get("x-request-id")??"",status:r.status,body:v}):new we("Failed to perform inference: an HTTP error occurred when requesting the provider.",{url:a,method:o.method??"GET",headers:o.headers,body:Ye(o.body)},{requestId:r.headers.get("x-request-id")??"",status:r.status,body:v})}const k=m!=null&&m.startsWith("text/plain;")?await r.text():void 0;throw new we(`Failed to perform inference: ${k??"an HTTP error occurred when requesting the provider"}`,{url:a,method:o.method??"GET",headers:o.headers,body:Ye(o.body)},{requestId:r.headers.get("x-request-id")??"",status:r.status,body:k??""})}return(h=r.headers.get("Content-Type"))!=null&&h.startsWith("application/json")?{data:await r.json(),requestContext:d}:{data:await r.blob(),requestContext:d}}async function*hi(e,t,n){var k,v;const{url:a,info:o}=await Nt({...e,stream:!0},t,n),r=await((n==null?void 0:n.fetch)??fetch)(a,o);if((n==null?void 0:n.retry_on_error)!==!1&&r.status===503)return yield*hi(e,t,n);if(!r.ok){if((k=r.headers.get("Content-Type"))!=null&&k.startsWith("application/json")){const D=await r.json();if([400,422,404,500].includes(r.status)&&(n!=null&&n.chatCompletion))throw new we(`Provider ${e.provider} does not seem to support chat completion for model ${e.model} . Error: ${JSON.stringify(D.error)}`,{url:a,method:o.method??"GET",headers:o.headers,body:Ye(o.body)},{requestId:r.headers.get("x-request-id")??"",status:r.status,body:D});if(typeof D.error=="string")throw new we(`Failed to perform inference: ${D.error}`,{url:a,method:o.method??"GET",headers:o.headers,body:Ye(o.body)},{requestId:r.headers.get("x-request-id")??"",status:r.status,body:D});if(D.error&&"message"in D.error&&typeof D.error.message=="string")throw new we(`Failed to perform inference: ${D.error.message}`,{url:a,method:o.method??"GET",headers:o.headers,body:Ye(o.body)},{requestId:r.headers.get("x-request-id")??"",status:r.status,body:D});if(typeof D.message=="string")throw new we(`Failed to perform inference: ${D.message}`,{url:a,method:o.method??"GET",headers:o.headers,body:Ye(o.body)},{requestId:r.headers.get("x-request-id")??"",status:r.status,body:D})}throw new we("Failed to perform inference: an HTTP error occurred when requesting the provider.",{url:a,method:o.method??"GET",headers:o.headers,body:Ye(o.body)},{requestId:r.headers.get("x-request-id")??"",status:r.status,body:""})}if(!((v=r.headers.get("content-type"))!=null&&v.startsWith("text/event-stream")))throw new we("Failed to perform inference: server does not support event stream content type, it returned "+r.headers.get("content-type"),{url:a,method:o.method??"GET",headers:o.headers,body:Ye(o.body)},{requestId:r.headers.get("x-request-id")??"",status:r.status,body:""});if(!r.body)return;const d=r.body.getReader();let f=[];const m=Xd(Qd(()=>{},()=>{},D=>{f.push(D)}));try{for(;;){const{done:D,value:X}=await d.read();if(D)return;m(X);for(const ae of f)if(ae.data.length>0){if(ae.data==="[DONE]")return;const ee=JSON.parse(ae.data);if(typeof ee=="object"&&ee!==null&&"error"in ee){const Ee=typeof ee.error=="string"?ee.error:typeof ee.error=="object"&&ee.error&&"message"in ee.error&&typeof ee.error.message=="string"?ee.error.message:JSON.stringify(ee.error);throw new we(`Failed to perform inference: an occurred while streaming the response: ${Ee}`,{url:a,method:o.method??"GET",headers:o.headers,body:Ye(o.body)},{requestId:r.headers.get("x-request-id")??"",status:r.status,body:ee})}yield ee}f=[]}}finally{d.releaseLock()}}async function Yd(e,t){$n().warn("The request method is deprecated and will be removed in a future version of huggingface.js. Use specific task functions instead.");const a=await Z(e.provider,e.model,e.endpointUrl),o=G(a,t==null?void 0:t.task);return(await ie(e,o,t)).data}async function*Zd(e,t){$n().warn("The streamingRequest method is deprecated and will be removed in a future version of huggingface.js. Use specific task functions instead.");const a=await Z(e.provider,e.model,e.endpointUrl),o=G(a,t==null?void 0:t.task);yield*hi(e,o,t)}function Ss(e){return"data"in e?e:{...Y(e,"inputs"),data:e.inputs}}async function Gd(e,t){const n=await Z(e.provider,e.model,e.endpointUrl),a=G(n,"audio-classification"),o=Ss(e),{data:r}=await ie(o,a,{...t,task:"audio-classification"});return a.getResponse(r)}async function ep(e,t){const n="inputs"in e?e.model:void 0,a=await Z(e.provider,n),o=G(a,"audio-to-audio"),r=Ss(e),{data:d}=await ie(r,o,{...t,task:"audio-to-audio"});return o.getResponse(d)}async function tp(e,t){const n=await Z(e.provider,e.model,e.endpointUrl),a=G(n,"automatic-speech-recognition"),o=await a.preparePayloadAsync(e),{data:r}=await ie(o,a,{...t,task:"automatic-speech-recognition"});return a.getResponse(r)}async function np(e,t){const n=await Z(e.provider,e.model,e.endpointUrl),a=G(n,"text-to-speech"),{data:o}=await ie(e,a,{...t,task:"text-to-speech"});return a.getResponse(o)}function ma(e){return"data"in e?e:{...Y(e,"inputs"),data:e.inputs}}async function ip(e,t){const n=await Z(e.provider,e.model,e.endpointUrl),a=G(n,"image-classification"),o=ma(e),{data:r}=await ie(o,a,{...t,task:"image-classification"});return a.getResponse(r)}async function ap(e,t){const n=await Z(e.provider,e.model,e.endpointUrl),a=G(n,"image-segmentation"),o=await a.preparePayloadAsync(e),{data:r}=await ie(o,a,{...t,task:"image-segmentation"}),{url:d,info:f}=await Nt(e,a,{...t,task:"image-segmentation"});return a.getResponse(r,d,f.headers)}async function op(e,t){const n=await Z(e.provider,e.model,e.endpointUrl),a=G(n,"image-to-image"),o=await a.preparePayloadAsync(e),{data:r}=await ie(o,a,{...t,task:"image-to-image"}),{url:d,info:f}=await Nt(e,a,{...t,task:"image-to-image"});return a.getResponse(r,d,f.headers)}async function sp(e,t){const n=await Z(e.provider,e.model,e.endpointUrl),a=G(n,"image-to-text"),o=ma(e),{data:r}=await ie(o,a,{...t,task:"image-to-text"});return a.getResponse(r[0])}async function rp(e,t){const n=await Z(e.provider,e.model,e.endpointUrl),a=G(n,"image-to-video"),o=await a.preparePayloadAsync(e),{data:r}=await ie(o,a,{...t,task:"image-to-video"}),{url:d,info:f}=await Nt(e,a,{...t,task:"image-to-video"});return a.getResponse(r,d,f.headers)}async function lp(e,t){const n=await Z(e.provider,e.model,e.endpointUrl),a=G(n,"object-detection"),o=ma(e),{data:r}=await ie(o,a,{...t,task:"object-detection"});return a.getResponse(r)}async function cp(e,t){const n=await Z(e.provider,e.model,e.endpointUrl),a=G(n,"text-to-image"),{data:o}=await ie(e,a,{...t,task:"text-to-image"}),{url:r,info:d}=await Nt(e,a,{...t,task:"text-to-image"});return a.getResponse(o,r,d.headers,t==null?void 0:t.outputType)}async function dp(e,t){const n=await Z(e.provider,e.model,e.endpointUrl),a=G(n,"text-to-video"),{data:o}=await ie(e,a,{...t,task:"text-to-video"}),{url:r,info:d}=await Nt(e,a,{...t,task:"text-to-video"});return a.getResponse(o,r,d.headers)}async function pp(e){return e.inputs instanceof Blob?{...e,inputs:{image:je(new Uint8Array(await e.inputs.arrayBuffer()))}}:{...e,inputs:{image:je(new Uint8Array(e.inputs.image instanceof ArrayBuffer?e.inputs.image:await e.inputs.image.arrayBuffer()))}}}async function up(e,t){const n=await Z(e.provider,e.model,e.endpointUrl),a=G(n,"zero-shot-image-classification"),o=await pp(e),{data:r}=await ie(o,a,{...t,task:"zero-shot-image-classification"});return a.getResponse(r)}async function mp(e,t){let n;if(!e.provider||e.provider==="auto")n=new dc;else{const o=await Z(e.provider,e.model,e.endpointUrl);n=G(o,"conversational")}const{data:a}=await ie(e,n,{...t,task:"conversational"});return n.getResponse(a)}async function*fp(e,t){const n=await Z(e.provider,e.model,e.endpointUrl),a=G(n,"conversational");yield*hi(e,a,{...t,task:"conversational"})}async function hp(e,t){const n=await Z(e.provider,e.model,e.endpointUrl),a=G(n,"feature-extraction"),{data:o}=await ie(e,a,{...t,task:"feature-extraction"});return a.getResponse(o)}async function gp(e,t){const n=await Z(e.provider,e.model,e.endpointUrl),a=G(n,"fill-mask"),{data:o}=await ie(e,a,{...t,task:"fill-mask"});return a.getResponse(o)}async function bp(e,t){const n=await Z(e.provider,e.model,e.endpointUrl),a=G(n,"question-answering"),{data:o}=await ie(e,a,{...t,task:"question-answering"});return a.getResponse(o)}async function yp(e,t){const n=await Z(e.provider,e.model,e.endpointUrl),a=G(n,"sentence-similarity"),{data:o}=await ie(e,a,{...t,task:"sentence-similarity"});return a.getResponse(o)}async function vp(e,t){const n=await Z(e.provider,e.model,e.endpointUrl),a=G(n,"summarization"),{data:o}=await ie(e,a,{...t,task:"summarization"});return a.getResponse(o)}async function wp(e,t){const n=await Z(e.provider,e.model,e.endpointUrl),a=G(n,"table-question-answering"),{data:o}=await ie(e,a,{...t,task:"table-question-answering"});return a.getResponse(o)}async function _p(e,t){const n=await Z(e.provider,e.model,e.endpointUrl),a=G(n,"text-classification"),{data:o}=await ie(e,a,{...t,task:"text-classification"});return a.getResponse(o)}async function xp(e,t){const n=await Z(e.provider,e.model,e.endpointUrl),a=G(n,"text-generation"),{data:o}=await ie(e,a,{...t,task:"text-generation"});return a.getResponse(o)}async function*kp(e,t){const n=await Z(e.provider,e.model,e.endpointUrl),a=G(n,"text-generation");yield*hi(e,a,{...t,task:"text-generation"})}async function Ap(e,t){const n=await Z(e.provider,e.model,e.endpointUrl),a=G(n,"token-classification"),{data:o}=await ie(e,a,{...t,task:"token-classification"});return a.getResponse(o)}async function Ip(e,t){const n=await Z(e.provider,e.model,e.endpointUrl),a=G(n,"translation"),{data:o}=await ie(e,a,{...t,task:"translation"});return a.getResponse(o)}async function Tp(e,t){const n=await Z(e.provider,e.model,e.endpointUrl),a=G(n,"zero-shot-classification"),{data:o}=await ie(e,a,{...t,task:"zero-shot-classification"});return a.getResponse(o)}async function Ep(e,t){const n=await Z(e.provider,e.model,e.endpointUrl),a=G(n,"document-question-answering"),o={...e,inputs:{question:e.inputs.question,image:je(new Uint8Array(await e.inputs.image.arrayBuffer()))}},{data:r}=await ie(o,a,{...t,task:"document-question-answering"});return a.getResponse(r)}async function Sp(e,t){const n=await Z(e.provider,e.model,e.endpointUrl),a=G(n,"visual-question-answering"),o={...e,inputs:{question:e.inputs.question,image:je(new Uint8Array(await e.inputs.image.arrayBuffer()))}},{data:r}=await ie(o,a,{...t,task:"visual-question-answering"});return a.getResponse(r)}async function Pp(e,t){const n=await Z(e.provider,e.model,e.endpointUrl),a=G(n,"tabular-classification"),{data:o}=await ie(e,a,{...t,task:"tabular-classification"});return a.getResponse(o)}async function Cp(e,t){const n=await Z(e.provider,e.model,e.endpointUrl),a=G(n,"tabular-regression"),{data:o}=await ie(e,a,{...t,task:"tabular-regression"});return a.getResponse(o)}const Dp=Object.freeze(Object.defineProperty({__proto__:null,audioClassification:Gd,audioToAudio:ep,automaticSpeechRecognition:tp,chatCompletion:mp,chatCompletionStream:fp,documentQuestionAnswering:Ep,featureExtraction:hp,fillMask:gp,imageClassification:ip,imageSegmentation:ap,imageToImage:op,imageToText:sp,imageToVideo:rp,objectDetection:lp,questionAnswering:bp,request:Yd,sentenceSimilarity:yp,streamingRequest:Zd,summarization:vp,tableQuestionAnswering:wp,tabularClassification:Pp,tabularRegression:Cp,textClassification:_p,textGeneration:xp,textGenerationStream:kp,textToImage:cp,textToSpeech:np,textToVideo:dp,tokenClassification:Ap,translation:Ip,visualQuestionAnswering:Sp,zeroShotClassification:Tp,zeroShotImageClassification:up},Symbol.toStringTag,{value:"Module"}));function $p(e){return Object.entries(e)}class fa{constructor(t="",n={}){C(this,"accessToken");C(this,"defaultOptions");this.accessToken=t,this.defaultOptions=n;for(const[a,o]of $p(Dp))Object.defineProperty(this,a,{enumerable:!1,value:(r,d)=>o({endpointUrl:n.endpointUrl,accessToken:t,...r},{...Y(n,["endpointUrl"]),...d})})}endpoint(t){return new fa(this.accessToken,{...this.defaultOptions,endpointUrl:t})}}class Lp extends fa{}var w=Object.freeze({Text:"Text",NumericLiteral:"NumericLiteral",StringLiteral:"StringLiteral",Identifier:"Identifier",Equals:"Equals",OpenParen:"OpenParen",CloseParen:"CloseParen",OpenStatement:"OpenStatement",CloseStatement:"CloseStatement",OpenExpression:"OpenExpression",CloseExpression:"CloseExpression",OpenSquareBracket:"OpenSquareBracket",CloseSquareBracket:"CloseSquareBracket",OpenCurlyBracket:"OpenCurlyBracket",CloseCurlyBracket:"CloseCurlyBracket",Comma:"Comma",Dot:"Dot",Colon:"Colon",Pipe:"Pipe",CallOperator:"CallOperator",AdditiveBinaryOperator:"AdditiveBinaryOperator",MultiplicativeBinaryOperator:"MultiplicativeBinaryOperator",ComparisonBinaryOperator:"ComparisonBinaryOperator",UnaryOperator:"UnaryOperator",Comment:"Comment"}),yt=class{constructor(e,t){this.value=e,this.type=t}};function is(e){return/\w/.test(e)}function Sn(e){return/[0-9]/.test(e)}var jp=[["{%",w.OpenStatement],["%}",w.CloseStatement],["{{",w.OpenExpression],["}}",w.CloseExpression],["(",w.OpenParen],[")",w.CloseParen],["{",w.OpenCurlyBracket],["}",w.CloseCurlyBracket],["[",w.OpenSquareBracket],["]",w.CloseSquareBracket],[",",w.Comma],[".",w.Dot],[":",w.Colon],["|",w.Pipe],["<=",w.ComparisonBinaryOperator],[">=",w.ComparisonBinaryOperator],["==",w.ComparisonBinaryOperator],["!=",w.ComparisonBinaryOperator],["<",w.ComparisonBinaryOperator],[">",w.ComparisonBinaryOperator],["+",w.AdditiveBinaryOperator],["-",w.AdditiveBinaryOperator],["~",w.AdditiveBinaryOperator],["*",w.MultiplicativeBinaryOperator],["/",w.MultiplicativeBinaryOperator],["%",w.MultiplicativeBinaryOperator],["=",w.Equals]],Rp=new Map([["n",`
`],["t","	"],["r","\r"],["b","\b"],["f","\f"],["v","\v"],["'","'"],['"','"'],["\\","\\"]]);function Mp(e,t={}){return e.endsWith(`
`)&&(e=e.slice(0,-1)),t.lstrip_blocks&&(e=e.replace(/^[ \t]*({[#%-])/gm,"$1")),t.trim_blocks&&(e=e.replace(/([#%-]})\n/g,"$1")),e.replace(/-%}\s*/g,"%}").replace(/\s*{%-/g,"{%").replace(/-}}\s*/g,"}}").replace(/\s*{{-/g,"{{").replace(/-#}\s*/g,"#}").replace(/\s*{#-/g,"{#").replace(/{%\s*(end)?generation\s*%}/gs,"")}function Op(e,t={}){var f,h;const n=[],a=Mp(e,t);let o=0,r=0;const d=m=>{let k="";for(;m(a[o]);){if(a[o]==="\\"){if(++o,o>=a.length)throw new SyntaxError("Unexpected end of input");const v=a[o++],D=Rp.get(v);if(D===void 0)throw new SyntaxError(`Unexpected escaped character: ${v}`);k+=D;continue}if(k+=a[o++],o>=a.length)throw new SyntaxError("Unexpected end of input")}return k};e:for(;o<a.length;){const m=(f=n.at(-1))==null?void 0:f.type;if(m===void 0||m===w.CloseStatement||m===w.CloseExpression||m===w.Comment){let v="";for(;o<a.length&&!(a[o]==="{"&&(a[o+1]==="%"||a[o+1]==="{"||a[o+1]==="#"));)v+=a[o++];if(v.length>0){n.push(new yt(v,w.Text));continue}}if(a[o]==="{"&&a[o+1]==="#"){o+=2;let v="";for(;a[o]!=="#"||a[o+1]!=="}";){if(o+2>=a.length)throw new SyntaxError("Missing end of comment tag");v+=a[o++]}n.push(new yt(v,w.Comment)),o+=2;continue}d(v=>/\s/.test(v));const k=a[o];if(k==="-"||k==="+"){const v=(h=n.at(-1))==null?void 0:h.type;if(v===w.Text||v===void 0)throw new SyntaxError(`Unexpected character: ${k}`);switch(v){case w.Identifier:case w.NumericLiteral:case w.StringLiteral:case w.CloseParen:case w.CloseSquareBracket:break;default:{++o;const D=d(Sn);n.push(new yt(`${k}${D}`,D.length>0?w.NumericLiteral:w.UnaryOperator));continue}}}for(const[v,D]of jp){if(v==="}}"&&r>0)continue;if(a.slice(o,o+v.length)===v){n.push(new yt(v,D)),D===w.OpenExpression?r=0:D===w.OpenCurlyBracket?++r:D===w.CloseCurlyBracket&&--r,o+=v.length;continue e}}if(k==="'"||k==='"'){++o;const v=d(D=>D!==k);n.push(new yt(v,w.StringLiteral)),++o;continue}if(Sn(k)){let v=d(Sn);if(a[o]==="."&&Sn(a[o+1])){++o;const D=d(Sn);v=`${v}.${D}`}n.push(new yt(v,w.NumericLiteral));continue}if(is(k)){const v=d(is);n.push(new yt(v,w.Identifier));continue}throw new SyntaxError(`Unexpected character: ${k}`)}return n}var Ge=class{constructor(){C(this,"type","Statement")}},Np=class extends Ge{constructor(t){super();C(this,"type","Program");this.body=t}},Bp=class extends Ge{constructor(t,n,a){super();C(this,"type","If");this.test=t,this.body=n,this.alternate=a}},Up=class extends Ge{constructor(t,n,a,o){super();C(this,"type","For");this.loopvar=t,this.iterable=n,this.body=a,this.defaultBlock=o}},qp=class extends Ge{constructor(){super(...arguments);C(this,"type","Break")}},Fp=class extends Ge{constructor(){super(...arguments);C(this,"type","Continue")}},Hp=class extends Ge{constructor(t,n,a){super();C(this,"type","Set");this.assignee=t,this.value=n,this.body=a}},Vp=class extends Ge{constructor(t,n,a){super();C(this,"type","Macro");this.name=t,this.args=n,this.body=a}},zp=class extends Ge{constructor(t){super();C(this,"type","Comment");this.value=t}},qe=class extends Ge{constructor(){super(...arguments);C(this,"type","Expression")}},Wp=class extends qe{constructor(t,n,a){super();C(this,"type","MemberExpression");this.object=t,this.property=n,this.computed=a}},as=class extends qe{constructor(t,n){super();C(this,"type","CallExpression");this.callee=t,this.args=n}},sn=class extends qe{constructor(t){super();C(this,"type","Identifier");this.value=t}},rn=class extends qe{constructor(t){super();C(this,"type","Literal");this.value=t}},Kp=class extends rn{constructor(){super(...arguments);C(this,"type","IntegerLiteral")}},Xp=class extends rn{constructor(){super(...arguments);C(this,"type","FloatLiteral")}},os=class extends rn{constructor(){super(...arguments);C(this,"type","StringLiteral")}},Qp=class extends rn{constructor(){super(...arguments);C(this,"type","ArrayLiteral")}},ss=class extends rn{constructor(){super(...arguments);C(this,"type","TupleLiteral")}},Jp=class extends rn{constructor(){super(...arguments);C(this,"type","ObjectLiteral")}},Pn=class extends qe{constructor(t,n,a){super();C(this,"type","BinaryExpression");this.operator=t,this.left=n,this.right=a}},Yp=class extends qe{constructor(t,n){super();C(this,"type","FilterExpression");this.operand=t,this.filter=n}},Zp=class extends Ge{constructor(t,n){super();C(this,"type","FilterStatement");this.filter=t,this.body=n}},Gp=class extends qe{constructor(t,n){super();C(this,"type","SelectExpression");this.lhs=t,this.test=n}},eu=class extends qe{constructor(t,n,a){super();C(this,"type","TestExpression");this.operand=t,this.negate=n,this.test=a}},tu=class extends qe{constructor(t,n){super();C(this,"type","UnaryExpression");this.operator=t,this.argument=n}},nu=class extends qe{constructor(t=void 0,n=void 0,a=void 0){super();C(this,"type","SliceExpression");this.start=t,this.stop=n,this.step=a}},iu=class extends qe{constructor(t,n){super();C(this,"type","KeywordArgumentExpression");this.key=t,this.value=n}},au=class extends qe{constructor(t){super();C(this,"type","SpreadExpression");this.argument=t}},ou=class extends Ge{constructor(t,n,a){super();C(this,"type","CallStatement");this.call=t,this.callerArgs=n,this.body=a}},su=class extends qe{constructor(t,n,a){super();C(this,"type","Ternary");this.condition=t,this.trueExpr=n,this.falseExpr=a}};function ru(e){const t=new Np([]);let n=0;function a(x,A){const E=e[n++];if(!E||E.type!==x)throw new Error(`Parser Error: ${A}. ${E.type} !== ${x}.`);return E}function o(x){if(!h(x))throw new SyntaxError(`Expected ${x}`);++n}function r(){switch(e[n].type){case w.Comment:return new zp(e[n++].value);case w.Text:return m();case w.OpenStatement:return k();case w.OpenExpression:return v();default:throw new SyntaxError(`Unexpected token type: ${e[n].type}`)}}function d(...x){return n+x.length<=e.length&&x.every((A,E)=>A===e[n+E].type)}function f(...x){var A,E,y;return((A=e[n])==null?void 0:A.type)===w.OpenStatement&&((E=e[n+1])==null?void 0:E.type)===w.Identifier&&x.includes((y=e[n+1])==null?void 0:y.value)}function h(...x){return n+x.length<=e.length&&x.every((A,E)=>e[n+E].type==="Identifier"&&A===e[n+E].value)}function m(){return new os(a(w.Text,"Expected text token").value)}function k(){if(a(w.OpenStatement,"Expected opening statement token"),e[n].type!==w.Identifier)throw new SyntaxError(`Unknown statement, got ${e[n].type}`);const x=e[n].value;let A;switch(x){case"set":++n,A=D();break;case"if":++n,A=X(),a(w.OpenStatement,"Expected {% token"),o("endif"),a(w.CloseStatement,"Expected %} token");break;case"macro":++n,A=ae(),a(w.OpenStatement,"Expected {% token"),o("endmacro"),a(w.CloseStatement,"Expected %} token");break;case"for":++n,A=Ee(),a(w.OpenStatement,"Expected {% token"),o("endfor"),a(w.CloseStatement,"Expected %} token");break;case"call":{++n;let E=null;d(w.OpenParen)&&(E=_t());const y=Ke();if(y.type!=="Identifier")throw new SyntaxError("Expected identifier following call statement");const fn=_t();a(w.CloseStatement,"Expected closing statement token");const hn=[];for(;!f("endcall");)hn.push(r());a(w.OpenStatement,"Expected '{%'"),o("endcall"),a(w.CloseStatement,"Expected closing statement token");const gn=new as(y,fn);A=new ou(gn,E,hn);break}case"break":++n,a(w.CloseStatement,"Expected closing statement token"),A=new qp;break;case"continue":++n,a(w.CloseStatement,"Expected closing statement token"),A=new Fp;break;case"filter":{++n;let E=Ke();E instanceof sn&&d(w.OpenParen)&&(E=mt(E)),a(w.CloseStatement,"Expected closing statement token");const y=[];for(;!f("endfilter");)y.push(r());a(w.OpenStatement,"Expected '{%'"),o("endfilter"),a(w.CloseStatement,"Expected '%}'"),A=new Zp(E,y);break}default:throw new SyntaxError(`Unknown statement type: ${x}`)}return A}function v(){a(w.OpenExpression,"Expected opening expression token");const x=pe();return a(w.CloseExpression,"Expected closing expression token"),x}function D(){const x=ee();let A=null;const E=[];if(d(w.Equals))++n,A=ee();else{for(a(w.CloseStatement,"Expected %} token");!f("endset");)E.push(r());a(w.OpenStatement,"Expected {% token"),o("endset")}return a(w.CloseStatement,"Expected closing statement token"),new Hp(x,A,E)}function X(){const x=pe();a(w.CloseStatement,"Expected closing statement token");const A=[],E=[];for(;!f("elif","else","endif");)A.push(r());if(f("elif")){++n,++n;const y=X();E.push(y)}else if(f("else"))for(++n,++n,a(w.CloseStatement,"Expected closing statement token");!f("endif");)E.push(r());return new Bp(x,A,E)}function ae(){const x=Ke();if(x.type!=="Identifier")throw new SyntaxError("Expected identifier following macro statement");const A=_t();a(w.CloseStatement,"Expected closing statement token");const E=[];for(;!f("endmacro");)E.push(r());return new Vp(x,A,E)}function ee(x=!1){const A=x?Ke:pe,E=[A()],y=d(w.Comma);for(;y&&(++n,E.push(A()),!!d(w.Comma)););return y?new ss(E):E[0]}function Ee(){const x=ee(!0);if(!(x instanceof sn||x instanceof ss))throw new SyntaxError(`Expected identifier/tuple for the loop variable, got ${x.type} instead`);if(!h("in"))throw new SyntaxError("Expected `in` keyword following loop variable");++n;const A=pe();a(w.CloseStatement,"Expected closing statement token");const E=[];for(;!f("endfor","else");)E.push(r());const y=[];if(f("else"))for(++n,++n,a(w.CloseStatement,"Expected closing statement token");!f("endfor");)y.push(r());return new Up(x,A,E,y)}function pe(){return ve()}function ve(){const x=ke();if(h("if")){++n;const A=ke();if(h("else")){++n;const E=ve();return new su(A,x,E)}else return new Gp(x,A)}return x}function ke(){let x=wt();for(;h("or");){const A=e[n];++n;const E=wt();x=new Pn(A,x,E)}return x}function wt(){let x=rt();for(;h("and");){const A=e[n];++n;const E=rt();x=new Pn(A,x,E)}return x}function rt(){let x;for(;h("not");){const A=e[n];++n;const E=rt();x=new tu(A,E)}return x??ut()}function ut(){let x=Ft();for(;;){let A;if(h("not","in"))A=new yt("not in",w.Identifier),n+=2;else if(h("in"))A=e[n++];else if(d(w.ComparisonBinaryOperator))A=e[n++];else break;const E=Ft();x=new Pn(A,x,E)}return x}function Ft(){let x=un();for(;d(w.AdditiveBinaryOperator);){const A=e[n];++n;const E=un();x=new Pn(A,x,E)}return x}function dn(){const x=pn(Ke());return d(w.OpenParen)?mt(x):x}function mt(x){let A=new as(x,_t());return A=pn(A),d(w.OpenParen)&&(A=mt(A)),A}function _t(){a(w.OpenParen,"Expected opening parenthesis for arguments list");const x=Rn();return a(w.CloseParen,"Expected closing parenthesis for arguments list"),x}function Rn(){const x=[];for(;!d(w.CloseParen);){let A;if(e[n].type===w.MultiplicativeBinaryOperator&&e[n].value==="*"){++n;const E=pe();A=new au(E)}else if(A=pe(),d(w.Equals)){if(++n,!(A instanceof sn))throw new SyntaxError("Expected identifier for keyword argument");const E=pe();A=new iu(A,E)}x.push(A),d(w.Comma)&&++n}return x}function yi(){const x=[];let A=!1;for(;!d(w.CloseSquareBracket);)d(w.Colon)?(x.push(void 0),++n,A=!0):(x.push(pe()),d(w.Colon)&&(++n,A=!0));if(x.length===0)throw new SyntaxError("Expected at least one argument for member/slice expression");if(A){if(x.length>3)throw new SyntaxError("Expected 0-3 arguments for slice expression");return new nu(...x)}return x[0]}function pn(x){for(;d(w.Dot)||d(w.OpenSquareBracket);){const A=e[n];++n;let E;const y=A.type===w.OpenSquareBracket;if(y)E=yi(),a(w.CloseSquareBracket,"Expected closing square bracket");else if(E=Ke(),E.type!=="Identifier")throw new SyntaxError("Expected identifier following dot operator");x=new Wp(x,E,y)}return x}function un(){let x=mn();for(;d(w.MultiplicativeBinaryOperator);){const A=e[n++],E=mn();x=new Pn(A,x,E)}return x}function mn(){let x=Mn();for(;h("is");){++n;const A=h("not");A&&++n;const E=Ke();if(!(E instanceof sn))throw new SyntaxError("Expected identifier for the test");x=new eu(x,A,E)}return x}function Mn(){let x=dn();for(;d(w.Pipe);){++n;let A=Ke();if(!(A instanceof sn))throw new SyntaxError("Expected identifier for the filter");d(w.OpenParen)&&(A=mt(A)),x=new Yp(x,A)}return x}function Ke(){const x=e[n++];switch(x.type){case w.NumericLiteral:{const A=x.value;return A.includes(".")?new Xp(Number(A)):new Kp(Number(A))}case w.StringLiteral:{let A=x.value;for(;d(w.StringLiteral);)A+=e[n++].value;return new os(A)}case w.Identifier:return new sn(x.value);case w.OpenParen:{const A=ee();return a(w.CloseParen,"Expected closing parenthesis, got ${tokens[current].type} instead."),A}case w.OpenSquareBracket:{const A=[];for(;!d(w.CloseSquareBracket);)A.push(pe()),d(w.Comma)&&++n;return++n,new Qp(A)}case w.OpenCurlyBracket:{const A=new Map;for(;!d(w.CloseCurlyBracket);){const E=pe();a(w.Colon,"Expected colon between key and value in object literal");const y=pe();A.set(E,y),d(w.Comma)&&++n}return++n,new Jp(A)}default:throw new SyntaxError(`Unexpected token: ${x.type}`)}}for(;n<e.length;)t.body.push(r());return t}function lu(e,t,n=1){t===void 0&&(t=e,e=0);const a=[];for(let o=e;o<t;o+=n)a.push(o);return a}function rs(e,t,n,a=1){const o=Math.sign(a);o>=0?(t=(t??(t=0))<0?Math.max(e.length+t,0):Math.min(t,e.length),n=(n??(n=e.length))<0?Math.max(e.length+n,0):Math.min(n,e.length)):(t=(t??(t=e.length-1))<0?Math.max(e.length+t,-1):Math.min(t,e.length-1),n=(n??(n=-1))<-1?Math.max(e.length+n,-1):Math.min(n,e.length-1));const r=[];for(let d=t;o*d<o*n;d+=a)r.push(e[d]);return r}function cu(e){return e.replace(/\b\w/g,t=>t.toUpperCase())}function du(e){return pu(new Date,e)}function pu(e,t){const n=new Intl.DateTimeFormat(void 0,{month:"long"}),a=new Intl.DateTimeFormat(void 0,{month:"short"}),o=r=>r<10?"0"+r:r.toString();return t.replace(/%[YmdbBHM%]/g,r=>{switch(r){case"%Y":return e.getFullYear().toString();case"%m":return o(e.getMonth()+1);case"%d":return o(e.getDate());case"%b":return a.format(e);case"%B":return n.format(e);case"%H":return o(e.getHours());case"%M":return o(e.getMinutes());case"%%":return"%";default:return r}})}function uu(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function mu(e,t,n,a){if(a===0)return e;let o=a==null||a<0?1/0:a;const r=t.length===0?new RegExp("(?=)","gu"):new RegExp(uu(t),"gu");return e.replaceAll(r,d=>o>0?(--o,n):d)}var ls=class extends Error{},cs=class extends Error{},ot=class{constructor(e=void 0){C(this,"type","RuntimeValue");C(this,"value");C(this,"builtins",new Map);this.value=e}__bool__(){return new J(!!this.value)}toString(){return String(this.value)}},z=class extends ot{constructor(){super(...arguments);C(this,"type","IntegerValue")}},be=class extends ot{constructor(){super(...arguments);C(this,"type","FloatValue")}toString(){return this.value%1===0?this.value.toFixed(1):this.value.toString()}},L=class extends ot{constructor(){super(...arguments);C(this,"type","StringValue");C(this,"builtins",new Map([["upper",new he(()=>new L(this.value.toUpperCase()))],["lower",new he(()=>new L(this.value.toLowerCase()))],["strip",new he(()=>new L(this.value.trim()))],["title",new he(()=>new L(cu(this.value)))],["capitalize",new he(()=>new L(this.value.charAt(0).toUpperCase()+this.value.slice(1)))],["length",new z(this.value.length)],["rstrip",new he(()=>new L(this.value.trimEnd()))],["lstrip",new he(()=>new L(this.value.trimStart()))],["startswith",new he(t=>{if(t.length===0)throw new Error("startswith() requires at least one argument");const n=t[0];if(n instanceof L)return new J(this.value.startsWith(n.value));if(n instanceof ne){for(const a of n.value){if(!(a instanceof L))throw new Error("startswith() tuple elements must be strings");if(this.value.startsWith(a.value))return new J(!0)}return new J(!1)}throw new Error("startswith() argument must be a string or tuple of strings")})],["endswith",new he(t=>{if(t.length===0)throw new Error("endswith() requires at least one argument");const n=t[0];if(n instanceof L)return new J(this.value.endsWith(n.value));if(n instanceof ne){for(const a of n.value){if(!(a instanceof L))throw new Error("endswith() tuple elements must be strings");if(this.value.endsWith(a.value))return new J(!0)}return new J(!1)}throw new Error("endswith() argument must be a string or tuple of strings")})],["split",new he(t=>{const n=t[0]??new Le;if(!(n instanceof L||n instanceof Le))throw new Error("sep argument must be a string or null");const a=t[1]??new z(-1);if(!(a instanceof z))throw new Error("maxsplit argument must be a number");let o=[];if(n instanceof Le){const r=this.value.trimStart();for(const{0:d,index:f}of r.matchAll(/\S+/g)){if(a.value!==-1&&o.length>=a.value&&f!==void 0){o.push(d+r.slice(f+d.length));break}o.push(d)}}else{if(n.value==="")throw new Error("empty separator");o=this.value.split(n.value),a.value!==-1&&o.length>a.value&&o.push(o.splice(a.value).join(n.value))}return new ne(o.map(r=>new L(r)))})],["replace",new he(t=>{if(t.length<2)throw new Error("replace() requires at least two arguments");const n=t[0],a=t[1];if(!(n instanceof L&&a instanceof L))throw new Error("replace() arguments must be strings");let o;if(t.length>2?t[2].type==="KeywordArgumentsValue"?o=t[2].value.get("count")??new Le:o=t[2]:o=new Le,!(o instanceof z||o instanceof Le))throw new Error("replace() count argument must be a number or null");return new L(mu(this.value,n.value,a.value,o.value))})]]))}},J=class extends ot{constructor(){super(...arguments);C(this,"type","BooleanValue")}},Me=class extends ot{constructor(){super(...arguments);C(this,"type","ObjectValue");C(this,"builtins",new Map([["get",new he(([t,n])=>{if(!(t instanceof L))throw new Error(`Object key must be a string: got ${t.type}`);return this.value.get(t.value)??n??new Le})],["items",new he(()=>this.items())],["keys",new he(()=>this.keys())],["values",new he(()=>this.values())]]))}__bool__(){return new J(this.value.size>0)}items(){return new ne(Array.from(this.value.entries()).map(([t,n])=>new ne([new L(t),n])))}keys(){return new ne(Array.from(this.value.keys()).map(t=>new L(t)))}values(){return new ne(Array.from(this.value.values()))}},aa=class extends Me{constructor(){super(...arguments);C(this,"type","KeywordArgumentsValue")}},ne=class extends ot{constructor(){super(...arguments);C(this,"type","ArrayValue");C(this,"builtins",new Map([["length",new z(this.value.length)]]))}__bool__(){return new J(this.value.length>0)}},fu=class extends ne{constructor(){super(...arguments);C(this,"type","TupleValue")}},he=class extends ot{constructor(){super(...arguments);C(this,"type","FunctionValue")}},Le=class extends ot{constructor(){super(...arguments);C(this,"type","NullValue")}},Ie=class extends ot{constructor(){super(...arguments);C(this,"type","UndefinedValue")}},Lt=class{constructor(e){C(this,"variables",new Map([["namespace",new he(e=>{if(e.length===0)return new Me(new Map);if(e.length!==1||!(e[0]instanceof Me))throw new Error("`namespace` expects either zero arguments or a single object argument");return e[0]})]]));C(this,"tests",new Map([["boolean",e=>e.type==="BooleanValue"],["callable",e=>e instanceof he],["odd",e=>{if(!(e instanceof z))throw new Error(`cannot odd on ${e.type}`);return e.value%2!==0}],["even",e=>{if(!(e instanceof z))throw new Error(`cannot even on ${e.type}`);return e.value%2===0}],["false",e=>e.type==="BooleanValue"&&!e.value],["true",e=>e.type==="BooleanValue"&&e.value],["none",e=>e.type==="NullValue"],["string",e=>e.type==="StringValue"],["number",e=>e instanceof z||e instanceof be],["integer",e=>e instanceof z],["iterable",e=>e.type==="ArrayValue"||e.type==="StringValue"],["mapping",e=>e.type==="ObjectValue"],["lower",e=>{const t=e.value;return e.type==="StringValue"&&t===t.toLowerCase()}],["upper",e=>{const t=e.value;return e.type==="StringValue"&&t===t.toUpperCase()}],["none",e=>e.type==="NullValue"],["defined",e=>e.type!=="UndefinedValue"],["undefined",e=>e.type==="UndefinedValue"],["equalto",(e,t)=>e.value===t.value],["eq",(e,t)=>e.value===t.value]]));this.parent=e}set(e,t){return this.declareVariable(e,ai(t))}declareVariable(e,t){if(this.variables.has(e))throw new SyntaxError(`Variable already declared: ${e}`);return this.variables.set(e,t),t}setVariable(e,t){return this.variables.set(e,t),t}resolve(e){if(this.variables.has(e))return this;if(this.parent)return this.parent.resolve(e);throw new Error(`Unknown variable: ${e}`)}lookupVariable(e){try{return this.resolve(e).variables.get(e)??new Ie}catch{return new Ie}}};function hu(e){e.set("false",!1),e.set("true",!0),e.set("none",null),e.set("raise_exception",t=>{throw new Error(t)}),e.set("range",lu),e.set("strftime_now",du),e.set("True",!0),e.set("False",!1),e.set("None",null)}var gu=class{constructor(e){C(this,"global");this.global=e??new Lt}run(e){return this.evaluate(e,this.global)}evaluateBinaryExpression(e,t){const n=this.evaluate(e.left,t);switch(e.operator.value){case"and":return n.__bool__().value?this.evaluate(e.right,t):n;case"or":return n.__bool__().value?n:this.evaluate(e.right,t)}const a=this.evaluate(e.right,t);switch(e.operator.value){case"==":return new J(n.value==a.value);case"!=":return new J(n.value!=a.value)}if(n instanceof Ie||a instanceof Ie){if(a instanceof Ie&&["in","not in"].includes(e.operator.value))return new J(e.operator.value==="not in");throw new Error(`Cannot perform operation ${e.operator.value} on undefined values`)}else{if(n instanceof Le||a instanceof Le)throw new Error("Cannot perform operation on null values");if(e.operator.value==="~")return new L(n.value.toString()+a.value.toString());if((n instanceof z||n instanceof be)&&(a instanceof z||a instanceof be)){const o=n.value,r=a.value;switch(e.operator.value){case"+":case"-":case"*":{const d=e.operator.value==="+"?o+r:e.operator.value==="-"?o-r:o*r;return n instanceof be||a instanceof be?new be(d):new z(d)}case"/":return new be(o/r);case"%":{const d=o%r;return n instanceof be||a instanceof be?new be(d):new z(d)}case"<":return new J(o<r);case">":return new J(o>r);case">=":return new J(o>=r);case"<=":return new J(o<=r)}}else if(n instanceof ne&&a instanceof ne)switch(e.operator.value){case"+":return new ne(n.value.concat(a.value))}else if(a instanceof ne){const o=a.value.find(r=>r.value===n.value)!==void 0;switch(e.operator.value){case"in":return new J(o);case"not in":return new J(!o)}}}if(n instanceof L||a instanceof L)switch(e.operator.value){case"+":return new L(n.value.toString()+a.value.toString())}if(n instanceof L&&a instanceof L)switch(e.operator.value){case"in":return new J(a.value.includes(n.value));case"not in":return new J(!a.value.includes(n.value))}if(n instanceof L&&a instanceof Me)switch(e.operator.value){case"in":return new J(a.value.has(n.value));case"not in":return new J(!a.value.has(n.value))}throw new SyntaxError(`Unknown operator "${e.operator.value}" between ${n.type} and ${a.type}`)}evaluateArguments(e,t){const n=[],a=new Map;for(const o of e)if(o.type==="SpreadExpression"){const r=o,d=this.evaluate(r.argument,t);if(!(d instanceof ne))throw new Error(`Cannot unpack non-iterable type: ${d.type}`);for(const f of d.value)n.push(f)}else if(o.type==="KeywordArgumentExpression"){const r=o;a.set(r.key.value,this.evaluate(r.value,t))}else{if(a.size>0)throw new Error("Positional arguments must come before keyword arguments");n.push(this.evaluate(o,t))}return[n,a]}applyFilter(e,t,n){if(t.type==="Identifier"){const a=t;if(a.value==="tojson")return new L(Dn(e));if(e instanceof ne)switch(a.value){case"list":return e;case"first":return e.value[0];case"last":return e.value[e.value.length-1];case"length":return new z(e.value.length);case"reverse":return new ne(e.value.reverse());case"sort":return new ne(e.value.sort((o,r)=>{if(o.type!==r.type)throw new Error(`Cannot compare different types: ${o.type} and ${r.type}`);switch(o.type){case"IntegerValue":case"FloatValue":return o.value-r.value;case"StringValue":return o.value.localeCompare(r.value);default:throw new Error(`Cannot compare type: ${o.type}`)}}));case"join":return new L(e.value.map(o=>o.value).join(""));case"string":return new L(Dn(e));case"unique":{const o=new Set,r=[];for(const d of e.value)o.has(d.value)||(o.add(d.value),r.push(d));return new ne(r)}default:throw new Error(`Unknown ArrayValue filter: ${a.value}`)}else if(e instanceof L)switch(a.value){case"length":case"upper":case"lower":case"title":case"capitalize":{const o=e.builtins.get(a.value);if(o instanceof he)return o.value([],n);if(o instanceof z)return o;throw new Error(`Unknown StringValue filter: ${a.value}`)}case"trim":return new L(e.value.trim());case"indent":return new L(e.value.split(`
`).map((o,r)=>r===0||o.length===0?o:"    "+o).join(`
`));case"join":case"string":return e;case"int":{const o=parseInt(e.value,10);return new z(isNaN(o)?0:o)}case"float":{const o=parseFloat(e.value);return new be(isNaN(o)?0:o)}default:throw new Error(`Unknown StringValue filter: ${a.value}`)}else if(e instanceof z||e instanceof be)switch(a.value){case"abs":return e instanceof z?new z(Math.abs(e.value)):new be(Math.abs(e.value));case"int":return new z(Math.floor(e.value));case"float":return new be(e.value);default:throw new Error(`Unknown NumericValue filter: ${a.value}`)}else if(e instanceof Me)switch(a.value){case"items":return new ne(Array.from(e.value.entries()).map(([o,r])=>new ne([new L(o),r])));case"length":return new z(e.value.size);default:throw new Error(`Unknown ObjectValue filter: ${a.value}`)}else if(e instanceof J)switch(a.value){case"bool":return new J(e.value);case"int":return new z(e.value?1:0);case"float":return new be(e.value?1:0);case"string":return new L(e.value?"true":"false");default:throw new Error(`Unknown BooleanValue filter: ${a.value}`)}throw new Error(`Cannot apply filter "${a.value}" to type: ${e.type}`)}else if(t.type==="CallExpression"){const a=t;if(a.callee.type!=="Identifier")throw new Error(`Unknown filter: ${a.callee.type}`);const o=a.callee.value;if(o==="tojson"){const[,r]=this.evaluateArguments(a.args,n),d=r.get("indent")??new Le;if(!(d instanceof z||d instanceof Le))throw new Error("If set, indent must be a number");return new L(Dn(e,d.value))}else if(o==="join"){let r;if(e instanceof L)r=Array.from(e.value);else if(e instanceof ne)r=e.value.map(m=>m.value);else throw new Error(`Cannot apply filter "${o}" to type: ${e.type}`);const[d,f]=this.evaluateArguments(a.args,n),h=d.at(0)??f.get("separator")??new L("");if(!(h instanceof L))throw new Error("separator must be a string");return new L(r.join(h.value))}else if(o==="int"||o==="float"){const[r,d]=this.evaluateArguments(a.args,n),f=r.at(0)??d.get("default")??(o==="int"?new z(0):new be(0));if(e instanceof L){const h=o==="int"?parseInt(e.value,10):parseFloat(e.value);return isNaN(h)?f:o==="int"?new z(h):new be(h)}else{if(e instanceof z||e instanceof be)return e;if(e instanceof J)return o==="int"?new z(e.value?1:0):new be(e.value?1:0);throw new Error(`Cannot apply filter "${o}" to type: ${e.type}`)}}else if(o==="default"){const[r,d]=this.evaluateArguments(a.args,n),f=r[0]??new L(""),h=r[1]??d.get("boolean")??new J(!1);if(!(h instanceof J))throw new Error("`default` filter flag must be a boolean");return e instanceof Ie||h.value&&!e.__bool__().value?f:e}if(e instanceof ne){switch(o){case"selectattr":case"rejectattr":{const r=o==="selectattr";if(e.value.some(v=>!(v instanceof Me)))throw new Error(`\`${o}\` can only be applied to array of objects`);if(a.args.some(v=>v.type!=="StringLiteral"))throw new Error(`arguments of \`${o}\` must be strings`);const[d,f,h]=a.args.map(v=>this.evaluate(v,n));let m;if(f){const v=n.tests.get(f.value);if(!v)throw new Error(`Unknown test: ${f.value}`);m=v}else m=(...v)=>v[0].__bool__().value;const k=e.value.filter(v=>{const D=v.value.get(d.value),X=D?m(D,h):!1;return r?X:!X});return new ne(k)}case"map":{const[,r]=this.evaluateArguments(a.args,n);if(r.has("attribute")){const d=r.get("attribute");if(!(d instanceof L))throw new Error("attribute must be a string");const f=r.get("default"),h=e.value.map(m=>{if(!(m instanceof Me))throw new Error("items in map must be an object");return m.value.get(d.value)??f??new Ie});return new ne(h)}else throw new Error("`map` expressions without `attribute` set are not currently supported.")}}throw new Error(`Unknown ArrayValue filter: ${o}`)}else if(e instanceof L){switch(o){case"indent":{const[r,d]=this.evaluateArguments(a.args,n),f=r.at(0)??d.get("width")??new z(4);if(!(f instanceof z))throw new Error("width must be a number");const h=r.at(1)??d.get("first")??new J(!1),m=r.at(2)??d.get("blank")??new J(!1),k=e.value.split(`
`),v=" ".repeat(f.value),D=k.map((X,ae)=>!h.value&&ae===0||!m.value&&X.length===0?X:v+X);return new L(D.join(`
`))}case"replace":{const r=e.builtins.get("replace");if(!(r instanceof he))throw new Error("replace filter not available");const[d,f]=this.evaluateArguments(a.args,n);return r.value([...d,new aa(f)],n)}}throw new Error(`Unknown StringValue filter: ${o}`)}else throw new Error(`Cannot apply filter "${o}" to type: ${e.type}`)}throw new Error(`Unknown filter: ${t.type}`)}evaluateFilterExpression(e,t){const n=this.evaluate(e.operand,t);return this.applyFilter(n,e.filter,t)}evaluateTestExpression(e,t){const n=this.evaluate(e.operand,t),a=t.tests.get(e.test.value);if(!a)throw new Error(`Unknown test: ${e.test.value}`);const o=a(n);return new J(e.negate?!o:o)}evaluateSelectExpression(e,t){return this.evaluate(e.test,t).__bool__().value?this.evaluate(e.lhs,t):new Ie}evaluateUnaryExpression(e,t){const n=this.evaluate(e.argument,t);switch(e.operator.value){case"not":return new J(!n.value);default:throw new SyntaxError(`Unknown operator: ${e.operator.value}`)}}evaluateTernaryExpression(e,t){return this.evaluate(e.condition,t).__bool__().value?this.evaluate(e.trueExpr,t):this.evaluate(e.falseExpr,t)}evalProgram(e,t){return this.evaluateBlock(e.body,t)}evaluateBlock(e,t){let n="";for(const a of e){const o=this.evaluate(a,t);o.type!=="NullValue"&&o.type!=="UndefinedValue"&&(n+=o.toString())}return new L(n)}evaluateIdentifier(e,t){return t.lookupVariable(e.value)}evaluateCallExpression(e,t){const[n,a]=this.evaluateArguments(e.args,t);a.size>0&&n.push(new aa(a));const o=this.evaluate(e.callee,t);if(o.type!=="FunctionValue")throw new Error(`Cannot call something that is not a function: got ${o.type}`);return o.value(n,t)}evaluateSliceExpression(e,t,n){if(!(e instanceof ne||e instanceof L))throw new Error("Slice object must be an array or string");const a=this.evaluate(t.start,n),o=this.evaluate(t.stop,n),r=this.evaluate(t.step,n);if(!(a instanceof z||a instanceof Ie))throw new Error("Slice start must be numeric or undefined");if(!(o instanceof z||o instanceof Ie))throw new Error("Slice stop must be numeric or undefined");if(!(r instanceof z||r instanceof Ie))throw new Error("Slice step must be numeric or undefined");return e instanceof ne?new ne(rs(e.value,a.value,o.value,r.value)):new L(rs(Array.from(e.value),a.value,o.value,r.value).join(""))}evaluateMemberExpression(e,t){const n=this.evaluate(e.object,t);let a;if(e.computed){if(e.property.type==="SliceExpression")return this.evaluateSliceExpression(n,e.property,t);a=this.evaluate(e.property,t)}else a=new L(e.property.value);let o;if(n instanceof Me){if(!(a instanceof L))throw new Error(`Cannot access property with non-string: got ${a.type}`);o=n.value.get(a.value)??n.builtins.get(a.value)}else if(n instanceof ne||n instanceof L)if(a instanceof z)o=n.value.at(a.value),n instanceof L&&(o=new L(n.value.at(a.value)));else if(a instanceof L)o=n.builtins.get(a.value);else throw new Error(`Cannot access property with non-string/non-number: got ${a.type}`);else{if(!(a instanceof L))throw new Error(`Cannot access property with non-string: got ${a.type}`);o=n.builtins.get(a.value)}return o instanceof ot?o:new Ie}evaluateSet(e,t){const n=e.value?this.evaluate(e.value,t):this.evaluateBlock(e.body,t);if(e.assignee.type==="Identifier"){const a=e.assignee.value;t.setVariable(a,n)}else if(e.assignee.type==="TupleLiteral"){const a=e.assignee;if(!(n instanceof ne))throw new Error(`Cannot unpack non-iterable type in set: ${n.type}`);const o=n.value;if(o.length!==a.value.length)throw new Error(`Too ${a.value.length>o.length?"few":"many"} items to unpack in set`);for(let r=0;r<a.value.length;++r){const d=a.value[r];if(d.type!=="Identifier")throw new Error(`Cannot unpack to non-identifier in set: ${d.type}`);t.setVariable(d.value,o[r])}}else if(e.assignee.type==="MemberExpression"){const a=e.assignee,o=this.evaluate(a.object,t);if(!(o instanceof Me))throw new Error("Cannot assign to member of non-object");if(a.property.type!=="Identifier")throw new Error("Cannot assign to member with non-identifier property");o.value.set(a.property.value,n)}else throw new Error(`Invalid LHS inside assignment expression: ${JSON.stringify(e.assignee)}`);return new Le}evaluateIf(e,t){const n=this.evaluate(e.test,t);return this.evaluateBlock(n.__bool__().value?e.body:e.alternate,t)}evaluateFor(e,t){const n=new Lt(t);let a,o;if(e.iterable.type==="SelectExpression"){const m=e.iterable;o=this.evaluate(m.lhs,n),a=m.test}else o=this.evaluate(e.iterable,n);if(!(o instanceof ne||o instanceof Me))throw new Error(`Expected iterable or object type in for loop: got ${o.type}`);o instanceof Me&&(o=o.keys());const r=[],d=[];for(let m=0;m<o.value.length;++m){const k=new Lt(n),v=o.value[m];let D;if(e.loopvar.type==="Identifier")D=X=>X.setVariable(e.loopvar.value,v);else if(e.loopvar.type==="TupleLiteral"){const X=e.loopvar;if(v.type!=="ArrayValue")throw new Error(`Cannot unpack non-iterable type: ${v.type}`);const ae=v;if(X.value.length!==ae.value.length)throw new Error(`Too ${X.value.length>ae.value.length?"few":"many"} items to unpack`);D=ee=>{for(let Ee=0;Ee<X.value.length;++Ee){if(X.value[Ee].type!=="Identifier")throw new Error(`Cannot unpack non-identifier type: ${X.value[Ee].type}`);ee.setVariable(X.value[Ee].value,ae.value[Ee])}}}else throw new Error(`Invalid loop variable(s): ${e.loopvar.type}`);a&&(D(k),!this.evaluate(a,k).__bool__().value)||(r.push(v),d.push(D))}let f="",h=!0;for(let m=0;m<r.length;++m){const k=new Map([["index",new z(m+1)],["index0",new z(m)],["revindex",new z(r.length-m)],["revindex0",new z(r.length-m-1)],["first",new J(m===0)],["last",new J(m===r.length-1)],["length",new z(r.length)],["previtem",m>0?r[m-1]:new Ie],["nextitem",m<r.length-1?r[m+1]:new Ie]]);n.setVariable("loop",new Me(k)),d[m](n);try{const v=this.evaluateBlock(e.body,n);f+=v.value}catch(v){if(v instanceof cs)continue;if(v instanceof ls)break;throw v}h=!1}if(h){const m=this.evaluateBlock(e.defaultBlock,n);f+=m.value}return new L(f)}evaluateMacro(e,t){return t.setVariable(e.name.value,new he((n,a)=>{var d;const o=new Lt(a);n=n.slice();let r;((d=n.at(-1))==null?void 0:d.type)==="KeywordArgumentsValue"&&(r=n.pop());for(let f=0;f<e.args.length;++f){const h=e.args[f],m=n[f];if(h.type==="Identifier"){const k=h;if(!m)throw new Error(`Missing positional argument: ${k.value}`);o.setVariable(k.value,m)}else if(h.type==="KeywordArgumentExpression"){const k=h,v=m??(r==null?void 0:r.value.get(k.key.value))??this.evaluate(k.value,o);o.setVariable(k.key.value,v)}else throw new Error(`Unknown argument type: ${h.type}`)}return this.evaluateBlock(e.body,o)})),new Le}evaluateCallStatement(e,t){const n=new he((f,h)=>{const m=new Lt(h);if(e.callerArgs)for(let k=0;k<e.callerArgs.length;++k){const v=e.callerArgs[k];if(v.type!=="Identifier")throw new Error(`Caller parameter must be an identifier, got ${v.type}`);m.setVariable(v.value,f[k]??new Ie)}return this.evaluateBlock(e.body,m)}),[a,o]=this.evaluateArguments(e.call.args,t);a.push(new aa(o));const r=this.evaluate(e.call.callee,t);if(r.type!=="FunctionValue")throw new Error(`Cannot call something that is not a function: got ${r.type}`);const d=new Lt(t);return d.setVariable("caller",n),r.value(a,d)}evaluateFilterStatement(e,t){const n=this.evaluateBlock(e.body,t);return this.applyFilter(n,e.filter,t)}evaluate(e,t){if(!e)return new Ie;switch(e.type){case"Program":return this.evalProgram(e,t);case"Set":return this.evaluateSet(e,t);case"If":return this.evaluateIf(e,t);case"For":return this.evaluateFor(e,t);case"Macro":return this.evaluateMacro(e,t);case"CallStatement":return this.evaluateCallStatement(e,t);case"Break":throw new ls;case"Continue":throw new cs;case"IntegerLiteral":return new z(e.value);case"FloatLiteral":return new be(e.value);case"StringLiteral":return new L(e.value);case"ArrayLiteral":return new ne(e.value.map(n=>this.evaluate(n,t)));case"TupleLiteral":return new fu(e.value.map(n=>this.evaluate(n,t)));case"ObjectLiteral":{const n=new Map;for(const[a,o]of e.value){const r=this.evaluate(a,t);if(!(r instanceof L))throw new Error(`Object keys must be strings: got ${r.type}`);n.set(r.value,this.evaluate(o,t))}return new Me(n)}case"Identifier":return this.evaluateIdentifier(e,t);case"CallExpression":return this.evaluateCallExpression(e,t);case"MemberExpression":return this.evaluateMemberExpression(e,t);case"UnaryExpression":return this.evaluateUnaryExpression(e,t);case"BinaryExpression":return this.evaluateBinaryExpression(e,t);case"FilterExpression":return this.evaluateFilterExpression(e,t);case"FilterStatement":return this.evaluateFilterStatement(e,t);case"TestExpression":return this.evaluateTestExpression(e,t);case"SelectExpression":return this.evaluateSelectExpression(e,t);case"Ternary":return this.evaluateTernaryExpression(e,t);case"Comment":return new Le;default:throw new SyntaxError(`Unknown node type: ${e.type}`)}}};function ai(e){switch(typeof e){case"number":return Number.isInteger(e)?new z(e):new be(e);case"string":return new L(e);case"boolean":return new J(e);case"undefined":return new Ie;case"object":return e===null?new Le:Array.isArray(e)?new ne(e.map(ai)):new Me(new Map(Object.entries(e).map(([t,n])=>[t,ai(n)])));case"function":return new he((t,n)=>{const a=e(...t.map(o=>o.value))??null;return ai(a)});default:throw new Error(`Cannot convert to runtime value: ${e}`)}}function Dn(e,t,n){const a=n??0;switch(e.type){case"NullValue":case"UndefinedValue":return"null";case"IntegerValue":case"FloatValue":case"StringValue":case"BooleanValue":return JSON.stringify(e.value);case"ArrayValue":case"ObjectValue":{const o=t?" ".repeat(t):"",r=`
`+o.repeat(a),d=r+o;if(e.type==="ArrayValue"){const f=e.value.map(h=>Dn(h,t,a+1));return t?`[${d}${f.join(`,${d}`)}${r}]`:`[${f.join(", ")}]`}else{const f=Array.from(e.value.entries()).map(([h,m])=>{const k=`"${h}": ${Dn(m,t,a+1)}`;return t?`${d}${k}`:k});return t?`{${f.join(",")}${r}}`:`{${f.join(", ")}}`}}default:throw new Error(`Cannot convert to JSON: ${e.type}`)}}var _e=`
`,bu="{%- ",yu=" -%}";function vu(e){switch(e.operator.type){case"MultiplicativeBinaryOperator":return 4;case"AdditiveBinaryOperator":return 3;case"ComparisonBinaryOperator":return 2;case"Identifier":return e.operator.value==="and"?1:e.operator.value==="in"||e.operator.value==="not in"?2:0}return 0}function wu(e,t="	"){const n=typeof t=="number"?" ".repeat(t):t;return Ze(e.body,0,n).replace(/\n$/,"")}function Te(...e){return bu+e.join(" ")+yu}function Ze(e,t,n){return e.map(a=>_u(a,t,n)).join(_e)}function _u(e,t,n){const a=n.repeat(t);switch(e.type){case"Program":return Ze(e.body,t,n);case"If":return xu(e,t,n);case"For":return ku(e,t,n);case"Set":return Au(e,t,n);case"Macro":return Iu(e,t,n);case"Break":return a+Te("break");case"Continue":return a+Te("continue");case"CallStatement":return Tu(e,t,n);case"FilterStatement":return Eu(e,t,n);case"Comment":return a+"{# "+e.value+" #}";default:return a+"{{- "+K(e)+" -}}"}}function xu(e,t,n){const a=n.repeat(t),o=[];let r=e;for(;r&&(o.push({test:r.test,body:r.body}),r.alternate.length===1&&r.alternate[0].type==="If");)r=r.alternate[0];let d=a+Te("if",K(o[0].test))+_e+Ze(o[0].body,t+1,n);for(let f=1;f<o.length;++f)d+=_e+a+Te("elif",K(o[f].test))+_e+Ze(o[f].body,t+1,n);return r&&r.alternate.length>0&&(d+=_e+a+Te("else")+_e+Ze(r.alternate,t+1,n)),d+=_e+a+Te("endif"),d}function ku(e,t,n){const a=n.repeat(t);let o="";if(e.iterable.type==="SelectExpression"){const d=e.iterable;o=`${K(d.lhs)} if ${K(d.test)}`}else o=K(e.iterable);let r=a+Te("for",K(e.loopvar),"in",o)+_e+Ze(e.body,t+1,n);return e.defaultBlock.length>0&&(r+=_e+a+Te("else")+_e+Ze(e.defaultBlock,t+1,n)),r+=_e+a+Te("endfor"),r}function Au(e,t,n){const a=n.repeat(t),o=K(e.assignee),r=e.value?K(e.value):"",d=a+Te("set",`${o}${e.value?" = "+r:""}`);return e.body.length===0?d:d+_e+Ze(e.body,t+1,n)+_e+a+Te("endset")}function Iu(e,t,n){const a=n.repeat(t),o=e.args.map(K).join(", ");return a+Te("macro",`${e.name.value}(${o})`)+_e+Ze(e.body,t+1,n)+_e+a+Te("endmacro")}function Tu(e,t,n){const a=n.repeat(t),o=e.callerArgs&&e.callerArgs.length>0?`(${e.callerArgs.map(K).join(", ")})`:"",r=K(e.call);let d=a+Te(`call${o}`,r)+_e;return d+=Ze(e.body,t+1,n)+_e,d+=a+Te("endcall"),d}function Eu(e,t,n){const a=n.repeat(t),o=e.filter.type==="Identifier"?e.filter.value:K(e.filter);let r=a+Te("filter",o)+_e;return r+=Ze(e.body,t+1,n)+_e,r+=a+Te("endfilter"),r}function K(e,t=-1){switch(e.type){case"SpreadExpression":return`*${K(e.argument)}`;case"Identifier":return e.value;case"IntegerLiteral":return`${e.value}`;case"FloatLiteral":return`${e.value}`;case"StringLiteral":return JSON.stringify(e.value);case"BinaryExpression":{const n=e,a=vu(n),o=K(n.left,a),r=K(n.right,a+1),d=`${o} ${n.operator.value} ${r}`;return a<t?`(${d})`:d}case"UnaryExpression":{const n=e;return n.operator.value+(n.operator.value==="not"?" ":"")+K(n.argument,1/0)}case"CallExpression":{const n=e,a=n.args.map(K).join(", ");return`${K(n.callee)}(${a})`}case"MemberExpression":{const n=e;let a=K(n.object);["Identifier","MemberExpression","CallExpression","StringLiteral","IntegerLiteral","FloatLiteral","ArrayLiteral","TupleLiteral","ObjectLiteral"].includes(n.object.type)||(a=`(${a})`);let o=K(n.property);return!n.computed&&n.property.type!=="Identifier"&&(o=`(${o})`),n.computed?`${a}[${o}]`:`${a}.${o}`}case"FilterExpression":{const n=e,a=K(n.operand,1/0);return n.filter.type==="CallExpression"?`${a} | ${K(n.filter)}`:`${a} | ${n.filter.value}`}case"SelectExpression":{const n=e;return`${K(n.lhs)} if ${K(n.test)}`}case"TestExpression":{const n=e;return`${K(n.operand)} is${n.negate?" not":""} ${n.test.value}`}case"ArrayLiteral":case"TupleLiteral":{const n=e.value.map(K),a=e.type==="ArrayLiteral"?"[]":"()";return`${a[0]}${n.join(", ")}${a[1]}`}case"ObjectLiteral":return`{${Array.from(e.value.entries()).map(([a,o])=>`${K(a)}: ${K(o)}`).join(", ")}}`;case"SliceExpression":{const n=e,a=n.start?K(n.start):"",o=n.stop?K(n.stop):"",r=n.step?`:${K(n.step)}`:"";return`${a}:${o}${r}`}case"KeywordArgumentExpression":{const n=e;return`${n.key.value}=${K(n.value)}`}case"Ternary":{const n=e,a=`${K(n.trueExpr)} if ${K(n.condition,0)} else ${K(n.falseExpr)}`;return t>-1?`(${a})`:a}default:throw new Error(`Unknown expression type: ${e.type}`)}}var Su=class{constructor(e){C(this,"parsed");const t=Op(e,{lstrip_blocks:!0,trim_blocks:!0});this.parsed=ru(t)}render(e){const t=new Lt;if(hu(t),e)for(const[o,r]of Object.entries(e))t.set(o,r);return new gu(t).run(this.parsed).value}format(e){return wu(this.parsed,(e==null?void 0:e.indent)||"	")}};const Pu={transformers:["audio-classification","automatic-speech-recognition","depth-estimation","document-question-answering","feature-extraction","fill-mask","image-classification","image-feature-extraction","image-segmentation","image-to-image","image-to-text","image-text-to-text","mask-generation","object-detection","question-answering","summarization","table-question-answering","text-classification","text-generation","text-to-audio","text-to-speech","token-classification","translation","video-classification","visual-question-answering","zero-shot-classification","zero-shot-image-classification","zero-shot-object-detection"]},ha={"text-classification":{name:"Text Classification",subtasks:[{type:"acceptability-classification",name:"Acceptability Classification"},{type:"entity-linking-classification",name:"Entity Linking Classification"},{type:"fact-checking",name:"Fact Checking"},{type:"intent-classification",name:"Intent Classification"},{type:"language-identification",name:"Language Identification"},{type:"multi-class-classification",name:"Multi Class Classification"},{type:"multi-label-classification",name:"Multi Label Classification"},{type:"multi-input-text-classification",name:"Multi-input Text Classification"},{type:"natural-language-inference",name:"Natural Language Inference"},{type:"semantic-similarity-classification",name:"Semantic Similarity Classification"},{type:"sentiment-classification",name:"Sentiment Classification"},{type:"topic-classification",name:"Topic Classification"},{type:"semantic-similarity-scoring",name:"Semantic Similarity Scoring"},{type:"sentiment-scoring",name:"Sentiment Scoring"},{type:"sentiment-analysis",name:"Sentiment Analysis"},{type:"hate-speech-detection",name:"Hate Speech Detection"},{type:"text-scoring",name:"Text Scoring"}],modality:"nlp"},"token-classification":{name:"Token Classification",subtasks:[{type:"named-entity-recognition",name:"Named Entity Recognition"},{type:"part-of-speech",name:"Part of Speech"},{type:"parsing",name:"Parsing"},{type:"lemmatization",name:"Lemmatization"},{type:"word-sense-disambiguation",name:"Word Sense Disambiguation"},{type:"coreference-resolution",name:"Coreference-resolution"}],modality:"nlp"},"table-question-answering":{name:"Table Question Answering",modality:"nlp"},"question-answering":{name:"Question Answering",subtasks:[{type:"extractive-qa",name:"Extractive QA"},{type:"open-domain-qa",name:"Open Domain QA"},{type:"closed-domain-qa",name:"Closed Domain QA"}],modality:"nlp"},"zero-shot-classification":{name:"Zero-Shot Classification",modality:"nlp"},translation:{name:"Translation",modality:"nlp"},summarization:{name:"Summarization",subtasks:[{type:"news-articles-summarization",name:"News Articles Summarization"},{type:"news-articles-headline-generation",name:"News Articles Headline Generation"}],modality:"nlp"},"feature-extraction":{name:"Feature Extraction",modality:"nlp"},"text-generation":{name:"Text Generation",subtasks:[{type:"dialogue-modeling",name:"Dialogue Modeling"},{type:"dialogue-generation",name:"Dialogue Generation"},{type:"conversational",name:"Conversational"},{type:"language-modeling",name:"Language Modeling"},{type:"text-simplification",name:"Text simplification"},{type:"explanation-generation",name:"Explanation Generation"},{type:"abstractive-qa",name:"Abstractive QA"},{type:"open-domain-abstractive-qa",name:"Open Domain Abstractive QA"},{type:"closed-domain-qa",name:"Closed Domain QA"},{type:"open-book-qa",name:"Open Book QA"},{type:"closed-book-qa",name:"Closed Book QA"},{type:"text2text-generation",name:"Text2Text Generation"}],modality:"nlp"},"fill-mask":{name:"Fill-Mask",subtasks:[{type:"slot-filling",name:"Slot Filling"},{type:"masked-language-modeling",name:"Masked Language Modeling"}],modality:"nlp"},"sentence-similarity":{name:"Sentence Similarity",modality:"nlp"},"text-to-speech":{name:"Text-to-Speech",modality:"audio"},"text-to-audio":{name:"Text-to-Audio",modality:"audio"},"automatic-speech-recognition":{name:"Automatic Speech Recognition",modality:"audio"},"audio-to-audio":{name:"Audio-to-Audio",modality:"audio"},"audio-classification":{name:"Audio Classification",subtasks:[{type:"keyword-spotting",name:"Keyword Spotting"},{type:"speaker-identification",name:"Speaker Identification"},{type:"audio-intent-classification",name:"Audio Intent Classification"},{type:"audio-emotion-recognition",name:"Audio Emotion Recognition"},{type:"audio-language-identification",name:"Audio Language Identification"}],modality:"audio"},"audio-text-to-text":{name:"Audio-Text-to-Text",modality:"multimodal",hideInDatasets:!0},"voice-activity-detection":{name:"Voice Activity Detection",modality:"audio"},"depth-estimation":{name:"Depth Estimation",modality:"cv"},"image-classification":{name:"Image Classification",subtasks:[{type:"multi-label-image-classification",name:"Multi Label Image Classification"},{type:"multi-class-image-classification",name:"Multi Class Image Classification"}],modality:"cv"},"object-detection":{name:"Object Detection",subtasks:[{type:"face-detection",name:"Face Detection"},{type:"vehicle-detection",name:"Vehicle Detection"}],modality:"cv"},"image-segmentation":{name:"Image Segmentation",subtasks:[{type:"instance-segmentation",name:"Instance Segmentation"},{type:"semantic-segmentation",name:"Semantic Segmentation"},{type:"panoptic-segmentation",name:"Panoptic Segmentation"}],modality:"cv"},"text-to-image":{name:"Text-to-Image",modality:"cv"},"image-to-text":{name:"Image-to-Text",subtasks:[{type:"image-captioning",name:"Image Captioning"}],modality:"cv"},"image-to-image":{name:"Image-to-Image",subtasks:[{type:"image-inpainting",name:"Image Inpainting"},{type:"image-colorization",name:"Image Colorization"},{type:"super-resolution",name:"Super Resolution"}],modality:"cv"},"image-to-video":{name:"Image-to-Video",modality:"cv"},"unconditional-image-generation":{name:"Unconditional Image Generation",modality:"cv"},"video-classification":{name:"Video Classification",modality:"cv"},"reinforcement-learning":{name:"Reinforcement Learning",modality:"rl"},robotics:{name:"Robotics",modality:"rl",subtasks:[{type:"grasping",name:"Grasping"},{type:"task-planning",name:"Task Planning"}]},"tabular-classification":{name:"Tabular Classification",modality:"tabular",subtasks:[{type:"tabular-multi-class-classification",name:"Tabular Multi Class Classification"},{type:"tabular-multi-label-classification",name:"Tabular Multi Label Classification"}]},"tabular-regression":{name:"Tabular Regression",modality:"tabular",subtasks:[{type:"tabular-single-column-regression",name:"Tabular Single Column Regression"}]},"tabular-to-text":{name:"Tabular to Text",modality:"tabular",subtasks:[{type:"rdf-to-text",name:"RDF to text"}],hideInModels:!0},"table-to-text":{name:"Table to Text",modality:"nlp",hideInModels:!0},"multiple-choice":{name:"Multiple Choice",subtasks:[{type:"multiple-choice-qa",name:"Multiple Choice QA"},{type:"multiple-choice-coreference-resolution",name:"Multiple Choice Coreference Resolution"}],modality:"nlp",hideInModels:!0},"text-ranking":{name:"Text Ranking",modality:"nlp"},"text-retrieval":{name:"Text Retrieval",subtasks:[{type:"document-retrieval",name:"Document Retrieval"},{type:"utterance-retrieval",name:"Utterance Retrieval"},{type:"entity-linking-retrieval",name:"Entity Linking Retrieval"},{type:"fact-checking-retrieval",name:"Fact Checking Retrieval"}],modality:"nlp",hideInModels:!0},"time-series-forecasting":{name:"Time Series Forecasting",modality:"tabular",subtasks:[{type:"univariate-time-series-forecasting",name:"Univariate Time Series Forecasting"},{type:"multivariate-time-series-forecasting",name:"Multivariate Time Series Forecasting"}]},"text-to-video":{name:"Text-to-Video",modality:"cv"},"image-text-to-text":{name:"Image-Text-to-Text",modality:"multimodal"},"visual-question-answering":{name:"Visual Question Answering",subtasks:[{type:"visual-question-answering",name:"Visual Question Answering"}],modality:"multimodal"},"document-question-answering":{name:"Document Question Answering",subtasks:[{type:"document-question-answering",name:"Document Question Answering"}],modality:"multimodal",hideInDatasets:!0},"zero-shot-image-classification":{name:"Zero-Shot Image Classification",modality:"cv"},"graph-ml":{name:"Graph Machine Learning",modality:"other"},"mask-generation":{name:"Mask Generation",modality:"cv"},"zero-shot-object-detection":{name:"Zero-Shot Object Detection",modality:"cv"},"text-to-3d":{name:"Text-to-3D",modality:"cv"},"image-to-3d":{name:"Image-to-3D",modality:"cv"},"image-feature-extraction":{name:"Image Feature Extraction",modality:"cv"},"video-text-to-text":{name:"Video-Text-to-Text",modality:"multimodal",hideInDatasets:!1},"keypoint-detection":{name:"Keypoint Detection",subtasks:[{type:"pose-estimation",name:"Pose Estimation"}],modality:"cv",hideInDatasets:!0},"visual-document-retrieval":{name:"Visual Document Retrieval",modality:"multimodal"},"any-to-any":{name:"Any-to-Any",modality:"multimodal"},"video-to-video":{name:"Video-to-Video",modality:"cv",hideInDatasets:!0},other:{name:"Other",modality:"other",hideInModels:!0,hideInDatasets:!0}},Cu=Object.keys(ha);Object.values(ha).flatMap(e=>"subtasks"in e?e.subtasks:[]).map(e=>e.type);new Set(Cu);const Du={datasets:[{description:"A dataset with multiple modality input and output pairs.",id:"PKU-Alignment/align-anything"}],demo:{inputs:[{filename:"any-to-any-input.jpg",type:"img"},{label:"Text Prompt",content:"What is the significance of this place?",type:"text"}],outputs:[{label:"Generated Text",content:"The place in the picture is Osaka Castle, located in Osaka, Japan. Osaka Castle is a historic castle that was originally built in the 16th century by Toyotomi Hideyoshi, a powerful warlord of the time. It is one of the most famous landmarks in Osaka and is known for its distinctive white walls and black roof tiles. The castle has been rebuilt several times over the centuries and is now a popular tourist attraction, offering visitors a glimpse into Japan's rich history and culture.",type:"text"},{filename:"any-to-any-output.wav",type:"audio"}]},metrics:[],models:[{description:"Strong model that can take in video, audio, image, text and output text and natural speech.",id:"Qwen/Qwen2.5-Omni-7B"},{description:"Robust model that can take in image and text and generate image and text.",id:"OmniGen2/OmniGen2"},{description:"Any-to-any model with speech, video, audio, image and text understanding capabilities.",id:"openbmb/MiniCPM-o-2_6"},{description:"A model that can understand image and text and generate image and text.",id:"ByteDance-Seed/BAGEL-7B-MoT"}],spaces:[{description:"An application to chat with an any-to-any (image & text) model.",id:"OmniGen2/OmniGen2"}],summary:"Any-to-any models can understand two or more modalities and output two or more modalities.",widgetModels:[],youtubeId:""},$u={datasets:[{description:"A benchmark of 10 different audio tasks.",id:"s3prl/superb"},{description:"A dataset of YouTube clips and their sound categories.",id:"agkphysics/AudioSet"}],demo:{inputs:[{filename:"audio.wav",type:"audio"}],outputs:[{data:[{label:"Up",score:.2},{label:"Down",score:.8}],type:"chart"}]},metrics:[{description:"",id:"accuracy"},{description:"",id:"recall"},{description:"",id:"precision"},{description:"",id:"f1"}],models:[{description:"An easy-to-use model for command recognition.",id:"speechbrain/google_speech_command_xvector"},{description:"An emotion recognition model.",id:"ehcalabres/wav2vec2-lg-xlsr-en-speech-emotion-recognition"},{description:"A language identification model.",id:"facebook/mms-lid-126"}],spaces:[{description:"An application that can classify music into different genre.",id:"kurianbenoy/audioclassification"}],summary:"Audio classification is the task of assigning a label or class to a given audio. It can be used for recognizing which command a user is giving or the emotion of a statement, as well as identifying a speaker.",widgetModels:["MIT/ast-finetuned-audioset-10-10-0.4593"],youtubeId:"KWwzcmG98Ds"},Lu={datasets:[{description:"A dataset containing audio conversations with question–answer pairs.",id:"nvidia/AF-Think"},{description:"A more advanced and comprehensive dataset that contains characteristics of the audio as well",id:"tsinghua-ee/QualiSpeech"}],demo:{inputs:[{filename:"audio.wav",type:"audio"},{label:"Text Prompt",content:"What is the gender of the speaker?",type:"text"}],outputs:[{label:"Generated Text",content:"The gender of the speaker is female.",type:"text"}]},metrics:[],models:[{description:"A lightweight model that has capabilities of taking both audio and text as inputs and generating responses.",id:"fixie-ai/ultravox-v0_5-llama-3_2-1b"},{description:"A multimodal model that supports voice chat and audio analysis.",id:"Qwen/Qwen2-Audio-7B-Instruct"},{description:"A model for audio understanding, speech translation, and transcription.",id:"mistralai/Voxtral-Small-24B-2507"},{description:"A new model capable of audio question answering and reasoning.",id:"nvidia/audio-flamingo-3"}],spaces:[{description:"A space that takes input as both audio and text and generates answers.",id:"iamomtiwari/ATTT"},{description:"A web application that demonstrates chatting with the Qwen2Audio Model.",id:"freddyaboulton/talk-to-qwen-webrtc"}],summary:"Audio-text-to-text models take both an audio clip and a text prompt as input, and generate natural language text as output. These models can answer questions about spoken content, summarize meetings, analyze music, or interpret speech beyond simple transcription. They are useful for applications that combine speech understanding with reasoning or conversation.",widgetModels:[],youtubeId:""},ju={datasets:[{description:"512-element X-vector embeddings of speakers from CMU ARCTIC dataset.",id:"Matthijs/cmu-arctic-xvectors"}],demo:{inputs:[{filename:"input.wav",type:"audio"}],outputs:[{filename:"label-0.wav",type:"audio"},{filename:"label-1.wav",type:"audio"}]},metrics:[{description:"The Signal-to-Noise ratio is the relationship between the target signal level and the background noise level. It is calculated as the logarithm of the target signal divided by the background noise, in decibels.",id:"snri"},{description:"The Signal-to-Distortion ratio is the relationship between the target signal and the sum of noise, interference, and artifact errors",id:"sdri"}],models:[{description:"A speech enhancement model.",id:"ResembleAI/resemble-enhance"},{description:"A model that can change the voice in a speech recording.",id:"microsoft/speecht5_vc"}],spaces:[{description:"An application for speech separation.",id:"younver/speechbrain-speech-separation"},{description:"An application for audio style transfer.",id:"nakas/audio-diffusion_style_transfer"}],summary:"Audio-to-Audio is a family of tasks in which the input is an audio and the output is one or multiple generated audios. Some example tasks are speech enhancement and source separation.",widgetModels:["speechbrain/sepformer-wham"],youtubeId:"iohj7nCCYoM"},Ru={datasets:[{description:"31,175 hours of multilingual audio-text dataset in 108 languages.",id:"mozilla-foundation/common_voice_17_0"},{description:"Multilingual and diverse audio dataset with 101k hours of audio.",id:"amphion/Emilia-Dataset"},{description:"A dataset with 44.6k hours of English speaker data and 6k hours of other language speakers.",id:"parler-tts/mls_eng"},{description:"A multilingual audio dataset with 370K hours of audio.",id:"espnet/yodas"}],demo:{inputs:[{filename:"input.flac",type:"audio"}],outputs:[{label:"Transcript",content:"Going along slushy country roads and speaking to damp audiences in...",type:"text"}]},metrics:[{description:"",id:"wer"},{description:"",id:"cer"}],models:[{description:"A powerful ASR model by OpenAI.",id:"openai/whisper-large-v3"},{description:"A good generic speech model by MetaAI for fine-tuning.",id:"facebook/w2v-bert-2.0"},{description:"An end-to-end model that performs ASR and Speech Translation by MetaAI.",id:"facebook/seamless-m4t-v2-large"},{description:"A powerful multilingual ASR and Speech Translation model by Nvidia.",id:"nvidia/canary-1b"},{description:"Powerful speaker diarization model.",id:"pyannote/speaker-diarization-3.1"}],spaces:[{description:"A powerful general-purpose speech recognition application.",id:"hf-audio/whisper-large-v3"},{description:"Latest ASR model from Useful Sensors.",id:"mrfakename/Moonshinex"},{description:"A high quality speech and text translation model by Meta.",id:"facebook/seamless_m4t"},{description:"A powerful multilingual ASR and Speech Translation model by Nvidia",id:"nvidia/canary-1b"}],summary:"Automatic Speech Recognition (ASR), also known as Speech to Text (STT), is the task of transcribing a given audio to text. It has many applications, such as voice user interfaces.",widgetModels:["openai/whisper-large-v3"],youtubeId:"TksaY_FDgnk"},Mu={datasets:[{description:"Largest document understanding dataset.",id:"HuggingFaceM4/Docmatix"},{description:"Dataset from the 2020 DocVQA challenge. The documents are taken from the UCSF Industry Documents Library.",id:"eliolio/docvqa"}],demo:{inputs:[{label:"Question",content:"What is the idea behind the consumer relations efficiency team?",type:"text"},{filename:"document-question-answering-input.png",type:"img"}],outputs:[{label:"Answer",content:"Balance cost efficiency with quality customer service",type:"text"}]},metrics:[{description:"The evaluation metric for the DocVQA challenge is the Average Normalized Levenshtein Similarity (ANLS). This metric is flexible to character regognition errors and compares the predicted answer with the ground truth answer.",id:"anls"},{description:"Exact Match is a metric based on the strict character match of the predicted answer and the right answer. For answers predicted correctly, the Exact Match will be 1. Even if only one character is different, Exact Match will be 0",id:"exact-match"}],models:[{description:"A robust document question answering model.",id:"impira/layoutlm-document-qa"},{description:"A document question answering model specialized in invoices.",id:"impira/layoutlm-invoices"},{description:"A special model for OCR-free document question answering.",id:"microsoft/udop-large"},{description:"A powerful model for document question answering.",id:"google/pix2struct-docvqa-large"}],spaces:[{description:"A robust document question answering application.",id:"impira/docquery"},{description:"An application that can answer questions from invoices.",id:"impira/invoices"},{description:"An application to compare different document question answering models.",id:"merve/compare_docvqa_models"}],summary:"Document Question Answering (also known as Document Visual Question Answering) is the task of answering questions on document images. Document question answering models take a (document, question) pair as input and return an answer in natural language. Models usually rely on multi-modal features, combining text, position of words (bounding-boxes) and image.",widgetModels:["impira/layoutlm-invoices"],youtubeId:""},Ou={datasets:[{description:"Wikipedia dataset containing cleaned articles of all languages. Can be used to train `feature-extraction` models.",id:"wikipedia"}],demo:{inputs:[{label:"Input",content:"India, officially the Republic of India, is a country in South Asia.",type:"text"}],outputs:[{table:[["Dimension 1","Dimension 2","Dimension 3"],["2.583383083343506","2.757075071334839","0.9023529887199402"],["8.29393482208252","1.1071064472198486","2.03399395942688"],["-0.7754912972450256","-1.647324562072754","-0.6113331913948059"],["0.07087723910808563","1.5942802429199219","1.4610432386398315"]],type:"tabular"}]},metrics:[],models:[{description:"A powerful feature extraction model for natural language processing tasks.",id:"thenlper/gte-large"},{description:"A strong feature extraction model for retrieval.",id:"Alibaba-NLP/gte-Qwen1.5-7B-instruct"}],spaces:[{description:"A leaderboard to rank text feature extraction models based on a benchmark.",id:"mteb/leaderboard"},{description:"A leaderboard to rank best feature extraction models based on human feedback.",id:"mteb/arena"}],summary:"Feature extraction is the task of extracting features learnt in a model.",widgetModels:["facebook/bart-base"]},Nu={datasets:[{description:"A common dataset that is used to train models for many languages.",id:"wikipedia"},{description:"A large English dataset with text crawled from the web.",id:"c4"}],demo:{inputs:[{label:"Input",content:"The <mask> barked at me",type:"text"}],outputs:[{type:"chart",data:[{label:"wolf",score:.487},{label:"dog",score:.061},{label:"cat",score:.058},{label:"fox",score:.047},{label:"squirrel",score:.025}]}]},metrics:[{description:"Cross Entropy is a metric that calculates the difference between two probability distributions. Each probability distribution is the distribution of predicted words",id:"cross_entropy"},{description:"Perplexity is the exponential of the cross-entropy loss. It evaluates the probabilities assigned to the next word by the model. Lower perplexity indicates better performance",id:"perplexity"}],models:[{description:"State-of-the-art masked language model.",id:"answerdotai/ModernBERT-large"},{description:"A multilingual model trained on 100 languages.",id:"FacebookAI/xlm-roberta-base"}],spaces:[],summary:"Masked language modeling is the task of masking some of the words in a sentence and predicting which words should replace those masks. These models are useful when we want to get a statistical understanding of the language in which the model is trained in.",widgetModels:["distilroberta-base"],youtubeId:"mqElG5QJWUg"},Bu={datasets:[{description:"Benchmark dataset used for image classification with images that belong to 100 classes.",id:"cifar100"},{description:"Dataset consisting of images of garments.",id:"fashion_mnist"}],demo:{inputs:[{filename:"image-classification-input.jpeg",type:"img"}],outputs:[{type:"chart",data:[{label:"Egyptian cat",score:.514},{label:"Tabby cat",score:.193},{label:"Tiger cat",score:.068}]}]},metrics:[{description:"",id:"accuracy"},{description:"",id:"recall"},{description:"",id:"precision"},{description:"",id:"f1"}],models:[{description:"A strong image classification model.",id:"google/vit-base-patch16-224"},{description:"A robust image classification model.",id:"facebook/deit-base-distilled-patch16-224"},{description:"A strong image classification model.",id:"facebook/convnext-large-224"}],spaces:[{description:"A leaderboard to evaluate different image classification models.",id:"timm/leaderboard"}],summary:"Image classification is the task of assigning a label or class to an entire image. Images are expected to have only one class for each image. Image classification models take an image as input and return a prediction about which class the image belongs to.",widgetModels:["google/vit-base-patch16-224"],youtubeId:"tjAIM7BOYhw"},Uu={datasets:[{description:"ImageNet-1K is a image classification dataset in which images are used to train image-feature-extraction models.",id:"imagenet-1k"}],demo:{inputs:[{filename:"mask-generation-input.png",type:"img"}],outputs:[{table:[["Dimension 1","Dimension 2","Dimension 3"],["0.21236686408519745","1.0919708013534546","0.8512550592422485"],["0.809657871723175","-0.18544459342956543","-0.7851548194885254"],["1.3103108406066895","-0.2479034662246704","-0.9107287526130676"],["1.8536205291748047","-0.36419737339019775","0.09717650711536407"]],type:"tabular"}]},metrics:[],models:[{description:"A powerful image feature extraction model.",id:"timm/vit_large_patch14_dinov2.lvd142m"},{description:"A strong image feature extraction model.",id:"nvidia/MambaVision-T-1K"},{description:"A robust image feature extraction model.",id:"facebook/dino-vitb16"},{description:"Cutting-edge image feature extraction model.",id:"apple/aimv2-large-patch14-336-distilled"},{description:"Strong image feature extraction model that can be used on images and documents.",id:"OpenGVLab/InternViT-6B-448px-V1-2"}],spaces:[{description:"A leaderboard to evaluate different image-feature-extraction models on classification performances",id:"timm/leaderboard"}],summary:"Image feature extraction is the task of extracting features learnt in a computer vision model.",widgetModels:[]},qu={datasets:[{description:"Synthetic dataset, for image relighting",id:"VIDIT"},{description:"Multiple images of celebrities, used for facial expression translation",id:"huggan/CelebA-faces"},{description:"12M image-caption pairs.",id:"Spawning/PD12M"}],demo:{inputs:[{filename:"image-to-image-input.jpeg",type:"img"}],outputs:[{filename:"image-to-image-output.png",type:"img"}]},isPlaceholder:!1,metrics:[{description:"Peak Signal to Noise Ratio (PSNR) is an approximation of the human perception, considering the ratio of the absolute intensity with respect to the variations. Measured in dB, a high value indicates a high fidelity.",id:"PSNR"},{description:"Structural Similarity Index (SSIM) is a perceptual metric which compares the luminance, contrast and structure of two images. The values of SSIM range between -1 and 1, and higher values indicate closer resemblance to the original image.",id:"SSIM"},{description:"Inception Score (IS) is an analysis of the labels predicted by an image classification model when presented with a sample of the generated images.",id:"IS"}],models:[{description:"An image-to-image model to improve image resolution.",id:"fal/AuraSR-v2"},{description:"Powerful image editing model.",id:"black-forest-labs/FLUX.1-Kontext-dev"},{description:"Virtual try-on model.",id:"yisol/IDM-VTON"},{description:"Image re-lighting model.",id:"kontext-community/relighting-kontext-dev-lora-v3"},{description:"Strong model for inpainting and outpainting.",id:"black-forest-labs/FLUX.1-Fill-dev"},{description:"Strong model for image editing using depth maps.",id:"black-forest-labs/FLUX.1-Depth-dev-lora"}],spaces:[{description:"Image editing application.",id:"black-forest-labs/FLUX.1-Kontext-Dev"},{description:"Image relighting application.",id:"lllyasviel/iclight-v2-vary"},{description:"An application for image upscaling.",id:"jasperai/Flux.1-dev-Controlnet-Upscaler"}],summary:"Image-to-image is the task of transforming an input image through a variety of possible manipulations and enhancements, such as super-resolution, image inpainting, colorization, and more.",widgetModels:["Qwen/Qwen-Image"],youtubeId:""},Fu={datasets:[{description:"Dataset from 12M image-text of Reddit",id:"red_caps"},{description:"Dataset from 3.3M images of Google",id:"datasets/conceptual_captions"}],demo:{inputs:[{filename:"savanna.jpg",type:"img"}],outputs:[{label:"Detailed description",content:"a herd of giraffes and zebras grazing in a field",type:"text"}]},metrics:[],models:[{description:"Strong OCR model.",id:"allenai/olmOCR-7B-0725"},{description:"Powerful image captioning model.",id:"fancyfeast/llama-joycaption-beta-one-hf-llava"}],spaces:[{description:"SVG generator app from images.",id:"multimodalart/OmniSVG-3B"},{description:"An application that converts documents to markdown.",id:"numind/NuMarkdown-8B-Thinking"},{description:"An application that can caption images.",id:"fancyfeast/joy-caption-beta-one"}],summary:"Image to text models output a text from a given image. Image captioning or optical character recognition can be considered as the most common applications of image to text.",widgetModels:["Salesforce/blip-image-captioning-large"],youtubeId:""},Hu={datasets:[{description:"Instructions composed of image and text.",id:"liuhaotian/LLaVA-Instruct-150K"},{description:"Collection of image-text pairs on scientific topics.",id:"DAMO-NLP-SG/multimodal_textbook"},{description:"A collection of datasets made for model fine-tuning.",id:"HuggingFaceM4/the_cauldron"},{description:"Screenshots of websites with their HTML/CSS codes.",id:"HuggingFaceM4/WebSight"}],demo:{inputs:[{filename:"image-text-to-text-input.png",type:"img"},{label:"Text Prompt",content:"Describe the position of the bee in detail.",type:"text"}],outputs:[{label:"Answer",content:"The bee is sitting on a pink flower, surrounded by other flowers. The bee is positioned in the center of the flower, with its head and front legs sticking out.",type:"text"}]},metrics:[],models:[{description:"Small and efficient yet powerful vision language model.",id:"HuggingFaceTB/SmolVLM-Instruct"},{description:"Cutting-edge reasoning vision language model.",id:"zai-org/GLM-4.5V"},{description:"Cutting-edge small vision language model to convert documents to text.",id:"rednote-hilab/dots.ocr"},{description:"Small yet powerful model.",id:"Qwen/Qwen2.5-VL-3B-Instruct"},{description:"Image-text-to-text model with agentic capabilities.",id:"microsoft/Magma-8B"}],spaces:[{description:"Leaderboard to evaluate vision language models.",id:"opencompass/open_vlm_leaderboard"},{description:"An application that compares object detection capabilities of different vision language models.",id:"sergiopaniego/vlm_object_understanding"},{description:"An application to compare different OCR models.",id:"prithivMLmods/Multimodal-OCR"}],summary:"Image-text-to-text models take in an image and text prompt and output text. These models are also called vision-language models, or VLMs. The difference from image-to-text models is that these models take an additional text input, not restricting the model to certain use cases like image captioning, and may also be trained to accept a conversation as input.",widgetModels:["zai-org/GLM-4.5V"],youtubeId:"IoGaGfU1CIg"},Vu={datasets:[{description:"Scene segmentation dataset.",id:"scene_parse_150"}],demo:{inputs:[{filename:"image-segmentation-input.jpeg",type:"img"}],outputs:[{filename:"image-segmentation-output.png",type:"img"}]},metrics:[{description:"Average Precision (AP) is the Area Under the PR Curve (AUC-PR). It is calculated for each semantic class separately",id:"Average Precision"},{description:"Mean Average Precision (mAP) is the overall average of the AP values",id:"Mean Average Precision"},{description:"Intersection over Union (IoU) is the overlap of segmentation masks. Mean IoU is the average of the IoU of all semantic classes",id:"Mean Intersection over Union"},{description:"APα is the Average Precision at the IoU threshold of a α value, for example, AP50 and AP75",id:"APα"}],models:[{description:"Solid panoptic segmentation model trained on COCO.",id:"tue-mps/coco_panoptic_eomt_large_640"},{description:"Background removal model.",id:"briaai/RMBG-1.4"},{description:"A multipurpose image segmentation model for high resolution images.",id:"ZhengPeng7/BiRefNet"},{description:"Powerful human-centric image segmentation model.",id:"facebook/sapiens-seg-1b"},{description:"Panoptic segmentation model trained on the COCO (common objects) dataset.",id:"facebook/mask2former-swin-large-coco-panoptic"}],spaces:[{description:"A semantic segmentation application that can predict unseen instances out of the box.",id:"facebook/ov-seg"},{description:"One of the strongest segmentation applications.",id:"jbrinkma/segment-anything"},{description:"A human-centric segmentation model.",id:"facebook/sapiens-pose"},{description:"An instance segmentation application to predict neuronal cell types from microscopy images.",id:"rashmi/sartorius-cell-instance-segmentation"},{description:"An application that segments videos.",id:"ArtGAN/Segment-Anything-Video"},{description:"An panoptic segmentation application built for outdoor environments.",id:"segments/panoptic-segment-anything"}],summary:"Image Segmentation divides an image into segments where each pixel in the image is mapped to an object. This task has multiple variants such as instance segmentation, panoptic segmentation and semantic segmentation.",widgetModels:["nvidia/segformer-b0-finetuned-ade-512-512"],youtubeId:"dKE8SIt9C-w"},zu={datasets:[{description:"A benchmark dataset for reference image controlled video generation.",id:"ali-vilab/VACE-Benchmark"},{description:"A dataset of video generation style preferences.",id:"Rapidata/sora-video-generation-style-likert-scoring"},{description:"A dataset with videos and captions throughout the videos.",id:"BestWishYsh/ChronoMagic"}],demo:{inputs:[{filename:"image-to-video-input.jpg",type:"img"},{label:"Optional Text Prompt",content:"This penguin is dancing",type:"text"}],outputs:[{filename:"image-to-video-output.gif",type:"img"}]},metrics:[{description:"Fréchet Video Distance (FVD) measures the perceptual similarity between the distributions of generated videos and a set of real videos, assessing overall visual quality and temporal coherence of the video generated from an input image.",id:"fvd"},{description:"CLIP Score measures the semantic similarity between a textual prompt (if provided alongside the input image) and the generated video frames. It evaluates how well the video's generated content and motion align with the textual description, conditioned on the initial image.",id:"clip_score"},{description:"First Frame Fidelity, often measured using LPIPS (Learned Perceptual Image Patch Similarity), PSNR, or SSIM, quantifies how closely the first frame of the generated video matches the input conditioning image.",id:"lpips"},{description:"Identity Preservation Score measures the consistency of identity (e.g., a person's face or a specific object's characteristics) between the input image and throughout the generated video frames, often calculated using features from specialized models like face recognition (e.g., ArcFace) or re-identification models.",id:"identity_preservation"},{description:"Motion Score evaluates the quality, realism, and temporal consistency of motion in the video generated from a static image. This can be based on optical flow analysis (e.g., smoothness, magnitude), consistency of object trajectories, or specific motion plausibility assessments.",id:"motion_score"}],models:[{description:"LTX-Video, a 13B parameter model for high quality video generation",id:"Lightricks/LTX-Video-0.9.7-dev"},{description:"A 14B parameter model for reference image controlled video generation",id:"Wan-AI/Wan2.1-VACE-14B"},{description:"An image-to-video generation model using FramePack F1 methodology with Hunyuan-DiT architecture",id:"lllyasviel/FramePack_F1_I2V_HY_20250503"},{description:"A distilled version of the LTX-Video-0.9.7-dev model for faster inference",id:"Lightricks/LTX-Video-0.9.7-distilled"},{description:"An image-to-video generation model by Skywork AI, 14B parameters, producing 720p videos.",id:"Skywork/SkyReels-V2-I2V-14B-720P"},{description:"Image-to-video variant of Tencent's HunyuanVideo.",id:"tencent/HunyuanVideo-I2V"},{description:"A 14B parameter model for 720p image-to-video generation by Wan-AI.",id:"Wan-AI/Wan2.1-I2V-14B-720P"},{description:"A Diffusers version of the Wan2.1-I2V-14B-720P model for 720p image-to-video generation.",id:"Wan-AI/Wan2.1-I2V-14B-720P-Diffusers"}],spaces:[{description:"An application to generate videos fast.",id:"Lightricks/ltx-video-distilled"},{description:"Generate videos with the FramePack-F1",id:"linoyts/FramePack-F1"},{description:"Generate videos with the FramePack",id:"lisonallen/framepack-i2v"},{description:"Wan2.1 with CausVid LoRA",id:"multimodalart/wan2-1-fast"},{description:"A demo for Stable Video Diffusion",id:"multimodalart/stable-video-diffusion"}],summary:"Image-to-video models take a still image as input and generate a video. These models can be guided by text prompts to influence the content and style of the output video.",widgetModels:[],youtubeId:void 0},Wu={datasets:[{description:"Widely used benchmark dataset for multiple Vision tasks.",id:"merve/coco2017"},{description:"Medical Imaging dataset of the Human Brain for segmentation and mask generating tasks",id:"rocky93/BraTS_segmentation"}],demo:{inputs:[{filename:"mask-generation-input.png",type:"img"}],outputs:[{filename:"mask-generation-output.png",type:"img"}]},metrics:[{description:"IoU is used to measure the overlap between predicted mask and the ground truth mask.",id:"Intersection over Union (IoU)"}],models:[{description:"Small yet powerful mask generation model.",id:"Zigeng/SlimSAM-uniform-50"},{description:"Very strong mask generation model.",id:"facebook/sam2-hiera-large"}],spaces:[{description:"An application that combines a mask generation model with a zero-shot object detection model for text-guided image segmentation.",id:"merve/OWLSAM2"},{description:"An application that compares the performance of a large and a small mask generation model.",id:"merve/slimsam"},{description:"An application based on an improved mask generation model.",id:"SkalskiP/segment-anything-model-2"},{description:"An application to remove objects from videos using mask generation models.",id:"SkalskiP/SAM_and_ProPainter"}],summary:"Mask generation is the task of generating masks that identify a specific object or region of interest in a given image. Masks are often used in segmentation tasks, where they provide a precise way to isolate the object of interest for further processing or analysis.",widgetModels:[],youtubeId:""},Ku={datasets:[{description:"Widely used benchmark dataset for multiple vision tasks.",id:"merve/coco2017"},{description:"Multi-task computer vision benchmark.",id:"merve/pascal-voc"}],demo:{inputs:[{filename:"object-detection-input.jpg",type:"img"}],outputs:[{filename:"object-detection-output.jpg",type:"img"}]},metrics:[{description:"The Average Precision (AP) metric is the Area Under the PR Curve (AUC-PR). It is calculated for each class separately",id:"Average Precision"},{description:"The Mean Average Precision (mAP) metric is the overall average of the AP values",id:"Mean Average Precision"},{description:"The APα metric is the Average Precision at the IoU threshold of a α value, for example, AP50 and AP75",id:"APα"}],models:[{description:"Solid object detection model pre-trained on the COCO 2017 dataset.",id:"facebook/detr-resnet-50"},{description:"Accurate object detection model.",id:"IDEA-Research/dab-detr-resnet-50"},{description:"Fast and accurate object detection model.",id:"PekingU/rtdetr_v2_r50vd"},{description:"Object detection model for low-lying objects.",id:"StephanST/WALDO30"}],spaces:[{description:"Real-time object detection demo.",id:"Roboflow/RF-DETR"},{description:"An application that contains various object detection models to try from.",id:"Gradio-Blocks/Object-Detection-With-DETR-and-YOLOS"},{description:"A cutting-edge object detection application.",id:"sunsmarterjieleaf/yolov12"},{description:"An object tracking, segmentation and inpainting application.",id:"VIPLab/Track-Anything"},{description:"Very fast object tracking application based on object detection.",id:"merve/RT-DETR-tracking-coco"}],summary:"Object Detection models allow users to identify objects of certain defined classes. Object detection models receive an image as input and output the images with bounding boxes and labels on detected objects.",widgetModels:["facebook/detr-resnet-50"],youtubeId:"WdAeKSOpxhw"},Xu={datasets:[{description:"NYU Depth V2 Dataset: Video dataset containing both RGB and depth sensor data.",id:"sayakpaul/nyu_depth_v2"},{description:"Monocular depth estimation benchmark based without noise and errors.",id:"depth-anything/DA-2K"}],demo:{inputs:[{filename:"depth-estimation-input.jpg",type:"img"}],outputs:[{filename:"depth-estimation-output.png",type:"img"}]},metrics:[],models:[{description:"Cutting-edge depth estimation model.",id:"depth-anything/Depth-Anything-V2-Large"},{description:"A strong monocular depth estimation model.",id:"jingheya/lotus-depth-g-v1-0"},{description:"A depth estimation model that predicts depth in videos.",id:"tencent/DepthCrafter"},{description:"A robust depth estimation model.",id:"apple/DepthPro-hf"}],spaces:[{description:"An application that predicts the depth of an image and then reconstruct the 3D model as voxels.",id:"radames/dpt-depth-estimation-3d-voxels"},{description:"An application for bleeding-edge depth estimation.",id:"akhaliq/depth-pro"},{description:"An application on cutting-edge depth estimation in videos.",id:"tencent/DepthCrafter"},{description:"A human-centric depth estimation application.",id:"facebook/sapiens-depth"}],summary:"Depth estimation is the task of predicting depth of the objects present in an image.",widgetModels:[""],youtubeId:""},Qu={datasets:[],demo:{inputs:[],outputs:[]},isPlaceholder:!0,metrics:[],models:[],spaces:[],summary:"",widgetModels:[],youtubeId:void 0,canonicalId:void 0},Ju={datasets:[{description:"A curation of widely used datasets for Data Driven Deep Reinforcement Learning (D4RL)",id:"edbeeching/decision_transformer_gym_replay"}],demo:{inputs:[{label:"State",content:"Red traffic light, pedestrians are about to pass.",type:"text"}],outputs:[{label:"Action",content:"Stop the car.",type:"text"},{label:"Next State",content:"Yellow light, pedestrians have crossed.",type:"text"}]},metrics:[{description:"Accumulated reward across all time steps discounted by a factor that ranges between 0 and 1 and determines how much the agent optimizes for future relative to immediate rewards. Measures how good is the policy ultimately found by a given algorithm considering uncertainty over the future.",id:"Discounted Total Reward"},{description:"Average return obtained after running the policy for a certain number of evaluation episodes. As opposed to total reward, mean reward considers how much reward a given algorithm receives while learning.",id:"Mean Reward"},{description:"Measures how good a given algorithm is after a predefined time. Some algorithms may be guaranteed to converge to optimal behavior across many time steps. However, an agent that reaches an acceptable level of optimality after a given time horizon may be preferable to one that ultimately reaches optimality but takes a long time.",id:"Level of Performance After Some Time"}],models:[{description:"A Reinforcement Learning model trained on expert data from the Gym Hopper environment",id:"edbeeching/decision-transformer-gym-hopper-expert"},{description:"A PPO agent playing seals/CartPole-v0 using the stable-baselines3 library and the RL Zoo.",id:"HumanCompatibleAI/ppo-seals-CartPole-v0"}],spaces:[{description:"An application for a cute puppy agent learning to catch a stick.",id:"ThomasSimonini/Huggy"},{description:"An application to play Snowball Fight with a reinforcement learning agent.",id:"ThomasSimonini/SnowballFight"}],summary:"Reinforcement learning is the computational approach of learning from action by interacting with an environment through trial and error and receiving rewards (negative or positive) as feedback",widgetModels:[],youtubeId:"q0BiUn5LiBc"},Yu={datasets:[{description:"A famous question answering dataset based on English articles from Wikipedia.",id:"squad_v2"},{description:"A dataset of aggregated anonymized actual queries issued to the Google search engine.",id:"natural_questions"}],demo:{inputs:[{label:"Question",content:"Which name is also used to describe the Amazon rainforest in English?",type:"text"},{label:"Context",content:"The Amazon rainforest, also known in English as Amazonia or the Amazon Jungle",type:"text"}],outputs:[{label:"Answer",content:"Amazonia",type:"text"}]},metrics:[{description:"Exact Match is a metric based on the strict character match of the predicted answer and the right answer. For answers predicted correctly, the Exact Match will be 1. Even if only one character is different, Exact Match will be 0",id:"exact-match"},{description:" The F1-Score metric is useful if we value both false positives and false negatives equally. The F1-Score is calculated on each word in the predicted sequence against the correct answer",id:"f1"}],models:[{description:"A robust baseline model for most question answering domains.",id:"deepset/roberta-base-squad2"},{description:"Small yet robust model that can answer questions.",id:"distilbert/distilbert-base-cased-distilled-squad"},{description:"A special model that can answer questions from tables.",id:"google/tapas-base-finetuned-wtq"}],spaces:[{description:"An application that can answer a long question from Wikipedia.",id:"deepset/wikipedia-assistant"}],summary:"Question Answering models can retrieve the answer to a question from a given text, which is useful for searching for an answer in a document. Some question answering models can generate answers without context!",widgetModels:["deepset/roberta-base-squad2"],youtubeId:"ajPx5LwJD-I"},Zu={datasets:[{description:"Bing queries with relevant passages from various web sources.",id:"microsoft/ms_marco"}],demo:{inputs:[{label:"Source sentence",content:"Machine learning is so easy.",type:"text"},{label:"Sentences to compare to",content:"Deep learning is so straightforward.",type:"text"},{label:"",content:"This is so difficult, like rocket science.",type:"text"},{label:"",content:"I can't believe how much I struggled with this.",type:"text"}],outputs:[{type:"chart",data:[{label:"Deep learning is so straightforward.",score:.623},{label:"This is so difficult, like rocket science.",score:.413},{label:"I can't believe how much I struggled with this.",score:.256}]}]},metrics:[{description:"Reciprocal Rank is a measure used to rank the relevancy of documents given a set of documents. Reciprocal Rank is the reciprocal of the rank of the document retrieved, meaning, if the rank is 3, the Reciprocal Rank is 0.33. If the rank is 1, the Reciprocal Rank is 1",id:"Mean Reciprocal Rank"},{description:"The similarity of the embeddings is evaluated mainly on cosine similarity. It is calculated as the cosine of the angle between two vectors. It is particularly useful when your texts are not the same length",id:"Cosine Similarity"}],models:[{description:"This model works well for sentences and paragraphs and can be used for clustering/grouping and semantic searches.",id:"sentence-transformers/all-mpnet-base-v2"},{description:"A multilingual robust sentence similarity model.",id:"BAAI/bge-m3"},{description:"A robust sentence similarity model.",id:"HIT-TMG/KaLM-embedding-multilingual-mini-instruct-v1.5"}],spaces:[{description:"An application that leverages sentence similarity to answer questions from YouTube videos.",id:"Gradio-Blocks/Ask_Questions_To_YouTube_Videos"},{description:"An application that retrieves relevant PubMed abstracts for a given online article which can be used as further references.",id:"Gradio-Blocks/pubmed-abstract-retriever"},{description:"An application that leverages sentence similarity to summarize text.",id:"nickmuchi/article-text-summarizer"},{description:"A guide that explains how Sentence Transformers can be used for semantic search.",id:"sentence-transformers/Sentence_Transformers_for_semantic_search"}],summary:"Sentence Similarity is the task of determining how similar two texts are. Sentence similarity models convert input texts into vectors (embeddings) that capture semantic information and calculate how close (similar) they are between them. This task is particularly useful for information retrieval and clustering/grouping.",widgetModels:["sentence-transformers/all-MiniLM-L6-v2"],youtubeId:"VCZq5AkbNEU"},Gu={canonicalId:"text-generation",datasets:[{description:"News articles in five different languages along with their summaries. Widely used for benchmarking multilingual summarization models.",id:"mlsum"},{description:"English conversations and their summaries. Useful for benchmarking conversational agents.",id:"samsum"}],demo:{inputs:[{label:"Input",content:"The tower is 324 metres (1,063 ft) tall, about the same height as an 81-storey building, and the tallest structure in Paris. Its base is square, measuring 125 metres (410 ft) on each side. It was the first structure to reach a height of 300 metres. Excluding transmitters, the Eiffel Tower is the second tallest free-standing structure in France after the Millau Viaduct.",type:"text"}],outputs:[{label:"Output",content:"The tower is 324 metres (1,063 ft) tall, about the same height as an 81-storey building. It was the first structure to reach a height of 300 metres.",type:"text"}]},metrics:[{description:"The generated sequence is compared against its summary, and the overlap of tokens are counted. ROUGE-N refers to overlap of N subsequent tokens, ROUGE-1 refers to overlap of single tokens and ROUGE-2 is the overlap of two subsequent tokens.",id:"rouge"}],models:[{description:"A strong summarization model trained on English news articles. Excels at generating factual summaries.",id:"facebook/bart-large-cnn"},{description:"A summarization model trained on medical articles.",id:"Falconsai/medical_summarization"}],spaces:[{description:"An application that can summarize long paragraphs.",id:"pszemraj/summarize-long-text"},{description:"A much needed summarization application for terms and conditions.",id:"ml6team/distilbart-tos-summarizer-tosdr"},{description:"An application that summarizes long documents.",id:"pszemraj/document-summarization"},{description:"An application that can detect errors in abstractive summarization.",id:"ml6team/post-processing-summarization"}],summary:"Summarization is the task of producing a shorter version of a document while preserving its important information. Some models can extract text from the original input, while other models can generate entirely new text.",widgetModels:["facebook/bart-large-cnn"],youtubeId:"yHnr5Dk2zCI"},em={datasets:[{description:"The WikiTableQuestions dataset is a large-scale dataset for the task of question answering on semi-structured tables.",id:"wikitablequestions"},{description:"WikiSQL is a dataset of 80654 hand-annotated examples of questions and SQL queries distributed across 24241 tables from Wikipedia.",id:"wikisql"}],demo:{inputs:[{table:[["Rank","Name","No.of reigns","Combined days"],["1","lou Thesz","3","3749"],["2","Ric Flair","8","3103"],["3","Harley Race","7","1799"]],type:"tabular"},{label:"Question",content:"What is the number of reigns for Harley Race?",type:"text"}],outputs:[{label:"Result",content:"7",type:"text"}]},metrics:[{description:"Checks whether the predicted answer(s) is the same as the ground-truth answer(s).",id:"Denotation Accuracy"}],models:[{description:"A table question answering model that is capable of neural SQL execution, i.e., employ TAPEX to execute a SQL query on a given table.",id:"microsoft/tapex-base"},{description:"A robust table question answering model.",id:"google/tapas-base-finetuned-wtq"}],spaces:[{description:"An application that answers questions based on table CSV files.",id:"katanaml/table-query"}],summary:"Table Question Answering (Table QA) is the answering a question about an information on a given table.",widgetModels:["google/tapas-base-finetuned-wtq"]},tm={datasets:[{description:"A comprehensive curation of datasets covering all benchmarks.",id:"inria-soda/tabular-benchmark"}],demo:{inputs:[{table:[["Glucose","Blood Pressure ","Skin Thickness","Insulin","BMI"],["148","72","35","0","33.6"],["150","50","30","0","35.1"],["141","60","29","1","39.2"]],type:"tabular"}],outputs:[{table:[["Diabetes"],["1"],["1"],["0"]],type:"tabular"}]},metrics:[{description:"",id:"accuracy"},{description:"",id:"recall"},{description:"",id:"precision"},{description:"",id:"f1"}],models:[{description:"Breast cancer prediction model based on decision trees.",id:"scikit-learn/cancer-prediction-trees"}],spaces:[{description:"An application that can predict defective products on a production line.",id:"scikit-learn/tabular-playground"},{description:"An application that compares various tabular classification techniques on different datasets.",id:"scikit-learn/classification"}],summary:"Tabular classification is the task of classifying a target category (a group) based on set of attributes.",widgetModels:["scikit-learn/tabular-playground"],youtubeId:""},nm={datasets:[{description:"A comprehensive curation of datasets covering all benchmarks.",id:"inria-soda/tabular-benchmark"}],demo:{inputs:[{table:[["Car Name","Horsepower","Weight"],["ford torino","140","3,449"],["amc hornet","97","2,774"],["toyota corolla","65","1,773"]],type:"tabular"}],outputs:[{table:[["MPG (miles per gallon)"],["17"],["18"],["31"]],type:"tabular"}]},metrics:[{description:"",id:"mse"},{description:"Coefficient of determination (or R-squared) is a measure of how well the model fits the data. Higher R-squared is considered a better fit.",id:"r-squared"}],models:[{description:"Fish weight prediction based on length measurements and species.",id:"scikit-learn/Fish-Weight"}],spaces:[{description:"An application that can predict weight of a fish based on set of attributes.",id:"scikit-learn/fish-weight-prediction"}],summary:"Tabular regression is the task of predicting a numerical value given a set of attributes.",widgetModels:["scikit-learn/Fish-Weight"],youtubeId:""},im={datasets:[{description:"RedCaps is a large-scale dataset of 12M image-text pairs collected from Reddit.",id:"red_caps"},{description:"Conceptual Captions is a dataset consisting of ~3.3M images annotated with captions.",id:"conceptual_captions"},{description:"12M image-caption pairs.",id:"Spawning/PD12M"}],demo:{inputs:[{label:"Input",content:"A city above clouds, pastel colors, Victorian style",type:"text"}],outputs:[{filename:"image.jpeg",type:"img"}]},metrics:[{description:"The Inception Score (IS) measure assesses diversity and meaningfulness. It uses a generated image sample to predict its label. A higher score signifies more diverse and meaningful images.",id:"IS"},{description:"The Fréchet Inception Distance (FID) calculates the distance between distributions between synthetic and real samples. A lower FID score indicates better similarity between the distributions of real and generated images.",id:"FID"},{description:"R-precision assesses how the generated image aligns with the provided text description. It uses the generated images as queries to retrieve relevant text descriptions. The top 'r' relevant descriptions are selected and used to calculate R-precision as r/R, where 'R' is the number of ground truth descriptions associated with the generated images. A higher R-precision value indicates a better model.",id:"R-Precision"}],models:[{description:"One of the most powerful image generation models that can generate realistic outputs.",id:"black-forest-labs/FLUX.1-Krea-dev"},{description:"A powerful image generation model.",id:"Qwen/Qwen-Image"},{description:"Powerful and fast image generation model.",id:"ByteDance/SDXL-Lightning"},{description:"A powerful text-to-image model.",id:"ByteDance/Hyper-SD"}],spaces:[{description:"A powerful text-to-image application.",id:"stabilityai/stable-diffusion-3-medium"},{description:"A text-to-image application to generate comics.",id:"jbilcke-hf/ai-comic-factory"},{description:"An application to match multiple custom image generation models.",id:"multimodalart/flux-lora-lab"},{description:"A powerful yet very fast image generation application.",id:"latent-consistency/lcm-lora-for-sdxl"},{description:"A gallery to explore various text-to-image models.",id:"multimodalart/LoraTheExplorer"},{description:"An application for `text-to-image`, `image-to-image` and image inpainting.",id:"ArtGAN/Stable-Diffusion-ControlNet-WebUI"},{description:"An application to generate realistic images given photos of a person and a prompt.",id:"InstantX/InstantID"}],summary:"Text-to-image is the task of generating images from input text. These pipelines can also be used to modify and edit images based on text prompts.",widgetModels:["black-forest-labs/FLUX.1-dev"],youtubeId:""},am={canonicalId:"text-to-audio",datasets:[{description:"10K hours of multi-speaker English dataset.",id:"parler-tts/mls_eng_10k"},{description:"Multi-speaker English dataset.",id:"mythicinfinity/libritts_r"},{description:"Multi-lingual dataset.",id:"facebook/multilingual_librispeech"}],demo:{inputs:[{label:"Input",content:"I love audio models on the Hub!",type:"text"}],outputs:[{filename:"audio.wav",type:"audio"}]},metrics:[{description:"The Mel Cepstral Distortion (MCD) metric is used to calculate the quality of generated speech.",id:"mel cepstral distortion"}],models:[{description:"Small yet powerful TTS model.",id:"KittenML/kitten-tts-nano-0.1"},{description:"Bleeding edge TTS model.",id:"ResembleAI/chatterbox"},{description:"A massively multi-lingual TTS model.",id:"fishaudio/fish-speech-1.5"},{description:"A text-to-dialogue model.",id:"nari-labs/Dia-1.6B-0626"}],spaces:[{description:"An application for generate high quality speech in different languages.",id:"hexgrad/Kokoro-TTS"},{description:"A multilingual text-to-speech application.",id:"fishaudio/fish-speech-1"},{description:"Performant TTS application.",id:"ResembleAI/Chatterbox"},{description:"An application to compare different TTS models.",id:"TTS-AGI/TTS-Arena-V2"},{description:"An application that generates podcast episodes.",id:"ngxson/kokoro-podcast-generator"}],summary:"Text-to-Speech (TTS) is the task of generating natural sounding speech given text input. TTS models can be extended to have a single model that generates speech for multiple speakers and multiple languages.",widgetModels:["suno/bark"],youtubeId:"NW62DpzJ274"},om={datasets:[{description:"A widely used dataset useful to benchmark named entity recognition models.",id:"eriktks/conll2003"},{description:"A multilingual dataset of Wikipedia articles annotated for named entity recognition in over 150 different languages.",id:"unimelb-nlp/wikiann"}],demo:{inputs:[{label:"Input",content:"My name is Omar and I live in Zürich.",type:"text"}],outputs:[{text:"My name is Omar and I live in Zürich.",tokens:[{type:"PERSON",start:11,end:15},{type:"GPE",start:30,end:36}],type:"text-with-tokens"}]},metrics:[{description:"",id:"accuracy"},{description:"",id:"recall"},{description:"",id:"precision"},{description:"",id:"f1"}],models:[{description:"A robust performance model to identify people, locations, organizations and names of miscellaneous entities.",id:"dslim/bert-base-NER"},{description:"A strong model to identify people, locations, organizations and names in multiple languages.",id:"FacebookAI/xlm-roberta-large-finetuned-conll03-english"},{description:"A token classification model specialized on medical entity recognition.",id:"blaze999/Medical-NER"},{description:"Flair models are typically the state of the art in named entity recognition tasks.",id:"flair/ner-english"}],spaces:[{description:"An application that can recognizes entities, extracts noun chunks and recognizes various linguistic features of each token.",id:"spacy/gradio_pipeline_visualizer"}],summary:"Token classification is a natural language understanding task in which a label is assigned to some tokens in a text. Some popular token classification subtasks are Named Entity Recognition (NER) and Part-of-Speech (PoS) tagging. NER models could be trained to identify specific entities in a text, such as dates, individuals and places; and PoS tagging would identify, for example, which words in a text are verbs, nouns, and punctuation marks.",widgetModels:["FacebookAI/xlm-roberta-large-finetuned-conll03-english"],youtubeId:"wVHdVlPScxA"},sm={canonicalId:"text-generation",datasets:[{description:"A dataset of copyright-free books translated into 16 different languages.",id:"Helsinki-NLP/opus_books"},{description:"An example of translation between programming languages. This dataset consists of functions in Java and C#.",id:"google/code_x_glue_cc_code_to_code_trans"}],demo:{inputs:[{label:"Input",content:"My name is Omar and I live in Zürich.",type:"text"}],outputs:[{label:"Output",content:"Mein Name ist Omar und ich wohne in Zürich.",type:"text"}]},metrics:[{description:"BLEU score is calculated by counting the number of shared single or subsequent tokens between the generated sequence and the reference. Subsequent n tokens are called “n-grams”. Unigram refers to a single token while bi-gram refers to token pairs and n-grams refer to n subsequent tokens. The score ranges from 0 to 1, where 1 means the translation perfectly matched and 0 did not match at all",id:"bleu"},{description:"",id:"sacrebleu"}],models:[{description:"Very powerful model that can translate many languages between each other, especially low-resource languages.",id:"facebook/nllb-200-1.3B"},{description:"A general-purpose Transformer that can be used to translate from English to German, French, or Romanian.",id:"google-t5/t5-base"}],spaces:[{description:"An application that can translate between 100 languages.",id:"Iker/Translate-100-languages"},{description:"An application that can translate between many languages.",id:"Geonmo/nllb-translation-demo"}],summary:"Translation is the task of converting text from one language to another.",widgetModels:["facebook/mbart-large-50-many-to-many-mmt"],youtubeId:"1JvfrvZgi6c"},rm={datasets:[{description:"A widely used dataset used to benchmark multiple variants of text classification.",id:"nyu-mll/glue"},{description:"A text classification dataset used to benchmark natural language inference models",id:"stanfordnlp/snli"}],demo:{inputs:[{label:"Input",content:"I love Hugging Face!",type:"text"}],outputs:[{type:"chart",data:[{label:"POSITIVE",score:.9},{label:"NEUTRAL",score:.1},{label:"NEGATIVE",score:0}]}]},metrics:[{description:"",id:"accuracy"},{description:"",id:"recall"},{description:"",id:"precision"},{description:"The F1 metric is the harmonic mean of the precision and recall. It can be calculated as: F1 = 2 * (precision * recall) / (precision + recall)",id:"f1"}],models:[{description:"A robust model trained for sentiment analysis.",id:"distilbert/distilbert-base-uncased-finetuned-sst-2-english"},{description:"A sentiment analysis model specialized in financial sentiment.",id:"ProsusAI/finbert"},{description:"A sentiment analysis model specialized in analyzing tweets.",id:"cardiffnlp/twitter-roberta-base-sentiment-latest"},{description:"A model that can classify languages.",id:"papluca/xlm-roberta-base-language-detection"},{description:"A model that can classify text generation attacks.",id:"meta-llama/Prompt-Guard-86M"}],spaces:[{description:"An application that can classify financial sentiment.",id:"IoannisTr/Tech_Stocks_Trading_Assistant"},{description:"A dashboard that contains various text classification tasks.",id:"miesnerjacob/Multi-task-NLP"},{description:"An application that analyzes user reviews in healthcare.",id:"spacy/healthsea-demo"}],summary:"Text Classification is the task of assigning a label or class to a given text. Some use cases are sentiment analysis, natural language inference, and assessing grammatical correctness.",widgetModels:["distilbert/distilbert-base-uncased-finetuned-sst-2-english"],youtubeId:"leNG9fN9FQU"},lm={datasets:[{description:"Multilingual dataset used to evaluate text generation models.",id:"CohereForAI/Global-MMLU"},{description:"High quality multilingual data used to train text-generation models.",id:"HuggingFaceFW/fineweb-2"},{description:"Truly open-source, curated and cleaned dialogue dataset.",id:"HuggingFaceH4/ultrachat_200k"},{description:"A reasoning dataset.",id:"open-r1/OpenThoughts-114k-math"},{description:"A multilingual instruction dataset with preference ratings on responses.",id:"allenai/tulu-3-sft-mixture"},{description:"A large synthetic dataset for alignment of text generation models.",id:"HuggingFaceTB/smoltalk"},{description:"A dataset made for training text generation models solving math questions.",id:"HuggingFaceTB/finemath"}],demo:{inputs:[{label:"Input",content:"Once upon a time,",type:"text"}],outputs:[{label:"Output",content:"Once upon a time, we knew that our ancestors were on the verge of extinction. The great explorers and poets of the Old World, from Alexander the Great to Chaucer, are dead and gone. A good many of our ancient explorers and poets have",type:"text"}]},metrics:[{description:"Cross Entropy is a metric that calculates the difference between two probability distributions. Each probability distribution is the distribution of predicted words",id:"Cross Entropy"},{description:"The Perplexity metric is the exponential of the cross-entropy loss. It evaluates the probabilities assigned to the next word by the model. Lower perplexity indicates better performance",id:"Perplexity"}],models:[{description:"A text-generation model trained to follow instructions.",id:"google/gemma-2-2b-it"},{description:"Powerful text generation model for coding.",id:"Qwen/Qwen3-Coder-480B-A35B-Instruct"},{description:"Great text generation model with top-notch tool calling capabilities.",id:"openai/gpt-oss-120b"},{description:"Powerful text generation model.",id:"zai-org/GLM-4.5"},{description:"A powerful small model with reasoning capabilities.",id:"Qwen/Qwen3-4B-Thinking-2507"},{description:"Strong conversational model that supports very long instructions.",id:"Qwen/Qwen2.5-7B-Instruct-1M"},{description:"Text generation model used to write code.",id:"Qwen/Qwen2.5-Coder-32B-Instruct"},{description:"Powerful reasoning based open large language model.",id:"deepseek-ai/DeepSeek-R1"}],spaces:[{description:"An application that writes and executes code from text instructions and supports many models.",id:"akhaliq/anycoder"},{description:"An application that builds websites from natural language prompts.",id:"enzostvs/deepsite"},{description:"A leaderboard for comparing chain-of-thought performance of models.",id:"logikon/open_cot_leaderboard"},{description:"An text generation based application based on a very powerful LLaMA2 model.",id:"ysharma/Explore_llamav2_with_TGI"},{description:"An text generation based application to converse with Zephyr model.",id:"HuggingFaceH4/zephyr-chat"},{description:"A leaderboard that ranks text generation models based on blind votes from people.",id:"lmsys/chatbot-arena-leaderboard"},{description:"An chatbot to converse with a very powerful text generation model.",id:"mlabonne/phixtral-chat"}],summary:"Generating text is the task of generating new text given another text. These models can, for example, fill in incomplete text or paraphrase.",widgetModels:["mistralai/Mistral-Nemo-Instruct-2407"],youtubeId:"e9gNEAlsOvU"},cm={datasets:[{description:"Bing queries with relevant passages from various web sources.",id:"microsoft/ms_marco"}],demo:{inputs:[{label:"Source sentence",content:"Machine learning is so easy.",type:"text"},{label:"Sentences to compare to",content:"Deep learning is so straightforward.",type:"text"},{label:"",content:"This is so difficult, like rocket science.",type:"text"},{label:"",content:"I can't believe how much I struggled with this.",type:"text"}],outputs:[{type:"chart",data:[{label:"Deep learning is so straightforward.",score:2.2006407},{label:"This is so difficult, like rocket science.",score:-6.2634873},{label:"I can't believe how much I struggled with this.",score:-10.251488}]}]},metrics:[{description:"Discounted Cumulative Gain (DCG) measures the gain, or usefulness, of search results discounted by their position. The normalization is done by dividing the DCG by the ideal DCG, which is the DCG of the perfect ranking.",id:"Normalized Discounted Cumulative Gain"},{description:"Reciprocal Rank is a measure used to rank the relevancy of documents given a set of documents. Reciprocal Rank is the reciprocal of the rank of the document retrieved, meaning, if the rank is 3, the Reciprocal Rank is 0.33. If the rank is 1, the Reciprocal Rank is 1",id:"Mean Reciprocal Rank"},{description:"Mean Average Precision (mAP) is the overall average of the Average Precision (AP) values, where AP is the Area Under the PR Curve (AUC-PR)",id:"Mean Average Precision"}],models:[{description:"An extremely efficient text ranking model trained on a web search dataset.",id:"cross-encoder/ms-marco-MiniLM-L6-v2"},{description:"A strong multilingual text reranker model.",id:"Alibaba-NLP/gte-multilingual-reranker-base"},{description:"An efficient text ranking model that punches above its weight.",id:"Alibaba-NLP/gte-reranker-modernbert-base"}],spaces:[],summary:"Text Ranking is the task of ranking a set of texts based on their relevance to a query. Text ranking models are trained on large datasets of queries and relevant documents to learn how to rank documents based on their relevance to the query. This task is particularly useful for search engines and information retrieval systems.",widgetModels:["cross-encoder/ms-marco-MiniLM-L6-v2"],youtubeId:""},dm={datasets:[{description:"Microsoft Research Video to Text is a large-scale dataset for open domain video captioning",id:"iejMac/CLIP-MSR-VTT"},{description:"UCF101 Human Actions dataset consists of 13,320 video clips from YouTube, with 101 classes.",id:"quchenyuan/UCF101-ZIP"},{description:"A high-quality dataset for human action recognition in YouTube videos.",id:"nateraw/kinetics"},{description:"A dataset of video clips of humans performing pre-defined basic actions with everyday objects.",id:"HuggingFaceM4/something_something_v2"},{description:"This dataset consists of text-video pairs and contains noisy samples with irrelevant video descriptions",id:"HuggingFaceM4/webvid"},{description:"A dataset of short Flickr videos for the temporal localization of events with descriptions.",id:"iejMac/CLIP-DiDeMo"}],demo:{inputs:[{label:"Input",content:"Darth Vader is surfing on the waves.",type:"text"}],outputs:[{filename:"text-to-video-output.gif",type:"img"}]},metrics:[{description:"Inception Score uses an image classification model that predicts class labels and evaluates how distinct and diverse the images are. A higher score indicates better video generation.",id:"is"},{description:"Frechet Inception Distance uses an image classification model to obtain image embeddings. The metric compares mean and standard deviation of the embeddings of real and generated images. A smaller score indicates better video generation.",id:"fid"},{description:"Frechet Video Distance uses a model that captures coherence for changes in frames and the quality of each frame. A smaller score indicates better video generation.",id:"fvd"},{description:"CLIPSIM measures similarity between video frames and text using an image-text similarity model. A higher score indicates better video generation.",id:"clipsim"}],models:[{description:"A strong model for consistent video generation.",id:"tencent/HunyuanVideo"},{description:"A text-to-video model with high fidelity motion and strong prompt adherence.",id:"Lightricks/LTX-Video"},{description:"A text-to-video model focusing on physics-aware applications like robotics.",id:"nvidia/Cosmos-1.0-Diffusion-7B-Text2World"},{description:"Very fast model for video generation.",id:"Lightricks/LTX-Video-0.9.8-13B-distilled"}],spaces:[{description:"An application that generates video from text.",id:"VideoCrafter/VideoCrafter"},{description:"Consistent video generation application.",id:"Wan-AI/Wan2.1"},{description:"A cutting edge video generation application.",id:"Pyramid-Flow/pyramid-flow"}],summary:"Text-to-video models can be used in any application that requires generating consistent sequence of images from text. ",widgetModels:["Wan-AI/Wan2.2-TI2V-5B"],youtubeId:void 0},pm={datasets:[{description:"The CIFAR-100 dataset consists of 60000 32x32 colour images in 100 classes, with 600 images per class.",id:"cifar100"},{description:"Multiple images of celebrities, used for facial expression translation.",id:"CelebA"}],demo:{inputs:[{label:"Seed",content:"42",type:"text"},{label:"Number of images to generate:",content:"4",type:"text"}],outputs:[{filename:"unconditional-image-generation-output.jpeg",type:"img"}]},metrics:[{description:"The inception score (IS) evaluates the quality of generated images. It measures the diversity of the generated images (the model predictions are evenly distributed across all possible labels) and their 'distinction' or 'sharpness' (the model confidently predicts a single label for each image).",id:"Inception score (IS)"},{description:"The Fréchet Inception Distance (FID) evaluates the quality of images created by a generative model by calculating the distance between feature vectors for real and generated images.",id:"Frećhet Inception Distance (FID)"}],models:[{description:"High-quality image generation model trained on the CIFAR-10 dataset. It synthesizes images of the ten classes presented in the dataset using diffusion probabilistic models, a class of latent variable models inspired by considerations from nonequilibrium thermodynamics.",id:"google/ddpm-cifar10-32"},{description:"High-quality image generation model trained on the 256x256 CelebA-HQ dataset. It synthesizes images of faces using diffusion probabilistic models, a class of latent variable models inspired by considerations from nonequilibrium thermodynamics.",id:"google/ddpm-celebahq-256"}],spaces:[{description:"An application that can generate realistic faces.",id:"CompVis/celeba-latent-diffusion"}],summary:"Unconditional image generation is the task of generating images with no condition in any context (like a prompt text or another image). Once trained, the model will create images that resemble its training data distribution.",widgetModels:[""],youtubeId:""},um={datasets:[{description:"Benchmark dataset used for video classification with videos that belong to 400 classes.",id:"kinetics400"}],demo:{inputs:[{filename:"video-classification-input.gif",type:"img"}],outputs:[{type:"chart",data:[{label:"Playing Guitar",score:.514},{label:"Playing Tennis",score:.193},{label:"Cooking",score:.068}]}]},metrics:[{description:"",id:"accuracy"},{description:"",id:"recall"},{description:"",id:"precision"},{description:"",id:"f1"}],models:[{description:"Strong Video Classification model trained on the Kinetics 400 dataset.",id:"google/vivit-b-16x2-kinetics400"},{description:"Strong Video Classification model trained on the Kinetics 400 dataset.",id:"microsoft/xclip-base-patch32"}],spaces:[{description:"An application that classifies video at different timestamps.",id:"nateraw/lavila"},{description:"An application that classifies video.",id:"fcakyon/video-classification"}],summary:"Video classification is the task of assigning a label or class to an entire video. Videos are expected to have only one class for each video. Video classification models take a video as input and return a prediction about which class the video belongs to.",widgetModels:[],youtubeId:""},mm={datasets:[{description:"A large dataset used to train visual document retrieval models.",id:"vidore/colpali_train_set"}],demo:{inputs:[{filename:"input.png",type:"img"},{label:"Question",content:"Is the model in this paper the fastest for inference?",type:"text"}],outputs:[{type:"chart",data:[{label:"Page 10",score:.7},{label:"Page 11",score:.06},{label:"Page 9",score:.003}]}]},isPlaceholder:!1,metrics:[{description:"NDCG@k scores ranked recommendation lists for top-k results. 0 is the worst, 1 is the best.",id:"Normalized Discounted Cumulative Gain at K"}],models:[{description:"Very accurate visual document retrieval model for multilingual queries and documents.",id:"vidore/colqwen2-v1.0"},{description:"Very fast and efficient visual document retrieval model that can also take in other modalities like audio.",id:"Tevatron/OmniEmbed-v0.1"}],spaces:[{description:"A leaderboard of visual document retrieval models.",id:"vidore/vidore-leaderboard"},{description:"Visual retrieval augmented generation demo based on ColQwen2 model.",id:"vidore/visual-rag-tool"}],summary:"Visual document retrieval is the task of searching for relevant image-based documents, such as PDFs. These models take a text query and multiple documents as input and return the top-most relevant documents and relevancy scores as output.",widgetModels:[""],youtubeId:""},fm={datasets:[{description:"A widely used dataset containing questions (with answers) about images.",id:"Graphcore/vqa"},{description:"A dataset to benchmark visual reasoning based on text in images.",id:"facebook/textvqa"}],demo:{inputs:[{filename:"elephant.jpeg",type:"img"},{label:"Question",content:"What is in this image?",type:"text"}],outputs:[{type:"chart",data:[{label:"elephant",score:.97},{label:"elephants",score:.06},{label:"animal",score:.003}]}]},isPlaceholder:!1,metrics:[{description:"",id:"accuracy"},{description:"Measures how much a predicted answer differs from the ground truth based on the difference in their semantic meaning.",id:"wu-palmer similarity"}],models:[{description:"A visual question answering model trained to convert charts and plots to text.",id:"google/deplot"},{description:"A visual question answering model trained for mathematical reasoning and chart derendering from images.",id:"google/matcha-base"},{description:"A strong visual question answering that answers questions from book covers.",id:"google/pix2struct-ocrvqa-large"}],spaces:[{description:"An application that compares visual question answering models across different tasks.",id:"merve/pix2struct"},{description:"An application that can answer questions based on images.",id:"nielsr/vilt-vqa"},{description:"An application that can caption images and answer questions about a given image. ",id:"Salesforce/BLIP"},{description:"An application that can caption images and answer questions about a given image. ",id:"vumichien/Img2Prompt"}],summary:"Visual Question Answering is the task of answering open-ended questions based on an image. They output natural language responses to natural language questions.",widgetModels:["dandelin/vilt-b32-finetuned-vqa"],youtubeId:""},hm={datasets:[{description:"A widely used dataset used to benchmark multiple variants of text classification.",id:"nyu-mll/glue"},{description:"The Multi-Genre Natural Language Inference (MultiNLI) corpus is a crowd-sourced collection of 433k sentence pairs annotated with textual entailment information.",id:"nyu-mll/multi_nli"},{description:"FEVER is a publicly available dataset for fact extraction and verification against textual sources.",id:"fever/fever"}],demo:{inputs:[{label:"Text Input",content:"Dune is the best movie ever.",type:"text"},{label:"Candidate Labels",content:"CINEMA, ART, MUSIC",type:"text"}],outputs:[{type:"chart",data:[{label:"CINEMA",score:.9},{label:"ART",score:.1},{label:"MUSIC",score:0}]}]},metrics:[],models:[{description:"Powerful zero-shot text classification model.",id:"facebook/bart-large-mnli"},{description:"Cutting-edge zero-shot multilingual text classification model.",id:"MoritzLaurer/ModernBERT-large-zeroshot-v2.0"},{description:"Zero-shot text classification model that can be used for topic and sentiment classification.",id:"knowledgator/gliclass-modern-base-v2.0-init"}],spaces:[],summary:"Zero-shot text classification is a task in natural language processing where a model is trained on a set of labeled examples but is then able to classify new examples from previously unseen classes.",widgetModels:["facebook/bart-large-mnli"]},gm={datasets:[{description:"",id:""}],demo:{inputs:[{filename:"image-classification-input.jpeg",type:"img"},{label:"Classes",content:"cat, dog, bird",type:"text"}],outputs:[{type:"chart",data:[{label:"Cat",score:.664},{label:"Dog",score:.329},{label:"Bird",score:.008}]}]},metrics:[{description:"Computes the number of times the correct label appears in top K labels predicted",id:"top-K accuracy"}],models:[{description:"Multilingual image classification model for 80 languages.",id:"visheratin/mexma-siglip"},{description:"Strong zero-shot image classification model.",id:"google/siglip2-base-patch16-224"},{description:"Robust zero-shot image classification model.",id:"intfloat/mmE5-mllama-11b-instruct"},{description:"Powerful zero-shot image classification model supporting 94 languages.",id:"jinaai/jina-clip-v2"},{description:"Strong image classification model for biomedical domain.",id:"microsoft/BiomedCLIP-PubMedBERT_256-vit_base_patch16_224"}],spaces:[{description:"An application that leverages zero-shot image classification to find best captions to generate an image. ",id:"pharma/CLIP-Interrogator"},{description:"An application to compare different zero-shot image classification models. ",id:"merve/compare_clip_siglip"}],summary:"Zero-shot image classification is the task of classifying previously unseen classes during training of a model.",widgetModels:["google/siglip-so400m-patch14-224"],youtubeId:""},bm={datasets:[],demo:{inputs:[{filename:"zero-shot-object-detection-input.jpg",type:"img"},{label:"Classes",content:"cat, dog, bird",type:"text"}],outputs:[{filename:"zero-shot-object-detection-output.jpg",type:"img"}]},metrics:[{description:"The Average Precision (AP) metric is the Area Under the PR Curve (AUC-PR). It is calculated for each class separately",id:"Average Precision"},{description:"The Mean Average Precision (mAP) metric is the overall average of the AP values",id:"Mean Average Precision"},{description:"The APα metric is the Average Precision at the IoU threshold of a α value, for example, AP50 and AP75",id:"APα"}],models:[{description:"Solid zero-shot object detection model.",id:"openmmlab-community/mm_grounding_dino_large_all"},{description:"Cutting-edge zero-shot object detection model.",id:"fushh7/LLMDet"}],spaces:[{description:"A demo to compare different zero-shot object detection models per output and latency.",id:"ariG23498/zero-shot-od"},{description:"A demo that combines a zero-shot object detection and mask generation model for zero-shot segmentation.",id:"merve/OWLSAM"}],summary:"Zero-shot object detection is a computer vision task to detect objects and their classes in images, without any prior training or knowledge of the classes. Zero-shot object detection models receive an image as input, as well as a list of candidate classes, and output the bounding boxes and labels where the objects have been detected.",widgetModels:[],youtubeId:""},ym={datasets:[{description:"A large dataset of over 10 million 3D objects.",id:"allenai/objaverse-xl"},{description:"A dataset of isolated object images for evaluating image-to-3D models.",id:"dylanebert/iso3d"}],demo:{inputs:[{filename:"image-to-3d-image-input.png",type:"img"}],outputs:[{label:"Result",content:"image-to-3d-3d-output-filename.glb",type:"text"}]},metrics:[],models:[{description:"Fast image-to-3D mesh model by Tencent.",id:"TencentARC/InstantMesh"},{description:"3D world generation model.",id:"tencent/HunyuanWorld-1"},{description:"A scaled up image-to-3D mesh model derived from TripoSR.",id:"hwjiang/Real3D"},{description:"Consistent image-to-3d generation model.",id:"stabilityai/stable-point-aware-3d"}],spaces:[{description:"Leaderboard to evaluate image-to-3D models.",id:"dylanebert/3d-arena"},{description:"Image-to-3D demo with mesh outputs.",id:"TencentARC/InstantMesh"},{description:"Image-to-3D demo.",id:"stabilityai/stable-point-aware-3d"},{description:"Image-to-3D demo with mesh outputs.",id:"hwjiang/Real3D"},{description:"Image-to-3D demo with splat outputs.",id:"dylanebert/LGM-mini"}],summary:"Image-to-3D models take in image input and produce 3D output.",widgetModels:[],youtubeId:""},vm={datasets:[{description:"A large dataset of over 10 million 3D objects.",id:"allenai/objaverse-xl"},{description:"Descriptive captions for 3D objects in Objaverse.",id:"tiange/Cap3D"}],demo:{inputs:[{label:"Prompt",content:"a cat statue",type:"text"}],outputs:[{label:"Result",content:"text-to-3d-3d-output-filename.glb",type:"text"}]},metrics:[],models:[{description:"Text-to-3D mesh model by OpenAI",id:"openai/shap-e"},{description:"Generative 3D gaussian splatting model.",id:"ashawkey/LGM"}],spaces:[{description:"Text-to-3D demo with mesh outputs.",id:"hysts/Shap-E"},{description:"Text/image-to-3D demo with splat outputs.",id:"ashawkey/LGM"}],summary:"Text-to-3D models take in text input and produce 3D output.",widgetModels:[],youtubeId:""},wm={datasets:[{description:"A dataset of hand keypoints of over 500k examples.",id:"Vincent-luo/hagrid-mediapipe-hands"}],demo:{inputs:[{filename:"keypoint-detection-input.png",type:"img"}],outputs:[{filename:"keypoint-detection-output.png",type:"img"}]},metrics:[],models:[{description:"A robust keypoint detection model.",id:"magic-leap-community/superpoint"},{description:"A robust keypoint matching model.",id:"magic-leap-community/superglue_outdoor"},{description:"Strong keypoint detection model used to detect human pose.",id:"qualcomm/RTMPose-Body2d"},{description:"Powerful keypoint matching model.",id:"ETH-CVG/lightglue_disk"}],spaces:[{description:"An application that detects hand keypoints in real-time.",id:"datasciencedojo/Hand-Keypoint-Detection-Realtime"},{description:"An application for keypoint detection and matching.",id:"ETH-CVG/LightGlue"}],summary:"Keypoint detection is the task of identifying meaningful distinctive points or features in an image.",widgetModels:[],youtubeId:""},_m={datasets:[{description:"Multiple-choice questions and answers about videos.",id:"lmms-lab/Video-MME"},{description:"A dataset of instructions and question-answer pairs about videos.",id:"lmms-lab/VideoChatGPT"},{description:"Large video understanding dataset.",id:"HuggingFaceFV/finevideo"}],demo:{inputs:[{filename:"video-text-to-text-input.gif",type:"img"},{label:"Text Prompt",content:"What is happening in this video?",type:"text"}],outputs:[{label:"Answer",content:"The video shows a series of images showing a fountain with water jets and a variety of colorful flowers and butterflies in the background.",type:"text"}]},metrics:[],models:[{description:"A robust video-text-to-text model.",id:"Vision-CAIR/LongVU_Qwen2_7B"},{description:"Strong video-text-to-text model with reasoning capabilities.",id:"GoodiesHere/Apollo-LMMs-Apollo-7B-t32"},{description:"Strong video-text-to-text model.",id:"HuggingFaceTB/SmolVLM2-2.2B-Instruct"}],spaces:[{description:"An application to chat with a video-text-to-text model.",id:"llava-hf/video-llava"},{description:"A leaderboard for various video-text-to-text models.",id:"opencompass/openvlm_video_leaderboard"},{description:"An application to generate highlights from a video.",id:"HuggingFaceTB/SmolVLM2-HighlightGenerator"}],summary:"Video-text-to-text models take in a video and a text prompt and output text. These models are also called video-language models.",widgetModels:[""],youtubeId:""},xm={datasets:[{description:"Dataset with detailed annotations for training and benchmarking video instance editing.",id:"suimu/VIRESET"},{description:"Dataset to evaluate models on long video generation and understanding.",id:"zhangsh2001/LongV-EVAL"},{description:"Collection of 104 demo videos from the SeedVR/SeedVR2 series showcasing model outputs.",id:"Iceclear/SeedVR_VideoDemos"}],demo:{inputs:[{filename:"input.gif",type:"img"}],outputs:[{filename:"output.gif",type:"img"}]},metrics:[],models:[{description:"Model for editing outfits, character, and scenery in videos.",id:"decart-ai/Lucy-Edit-Dev"},{description:"Framework that uses 3D mesh proxies for precise, consistent video editing.",id:"LeoLau/Shape-for-Motion"},{description:"Model for generating physics-aware videos from input videos and control conditions.",id:"nvidia/Cosmos-Transfer2.5-2B"},{description:"A model to upscale videos at input, designed for seamless use with ComfyUI.",id:"numz/SeedVR2_comfyUI"}],spaces:[{description:"Interactive demo space for Lucy-Edit-Dev video editing.",id:"decart-ai/lucy-edit-dev"},{description:"Demo space for SeedVR2-3B showcasing video upscaling and restoration.",id:"ByteDance-Seed/SeedVR2-3B"}],summary:"Video-to-video models take one or more videos as input and generate new videos as output. They can enhance quality, interpolate frames, modify styles, or create new motion dynamics, enabling creative applications, video production, and research.",widgetModels:[],youtubeId:""},km={"audio-classification":["speechbrain","transformers","transformers.js"],"audio-to-audio":["asteroid","fairseq","speechbrain"],"automatic-speech-recognition":["espnet","nemo","speechbrain","transformers","transformers.js"],"audio-text-to-text":["transformers"],"depth-estimation":["transformers","transformers.js"],"document-question-answering":["transformers","transformers.js"],"feature-extraction":["sentence-transformers","transformers","transformers.js"],"fill-mask":["transformers","transformers.js"],"graph-ml":["transformers"],"image-classification":["keras","timm","transformers","transformers.js"],"image-feature-extraction":["timm","transformers"],"image-segmentation":["transformers","transformers.js"],"image-text-to-text":["transformers"],"image-to-image":["diffusers","transformers","transformers.js"],"image-to-text":["transformers","transformers.js"],"image-to-video":["diffusers"],"keypoint-detection":["transformers"],"video-classification":["transformers"],"mask-generation":["transformers"],"multiple-choice":["transformers"],"object-detection":["transformers","transformers.js","ultralytics"],other:[],"question-answering":["adapter-transformers","allennlp","transformers","transformers.js"],robotics:[],"reinforcement-learning":["transformers","stable-baselines3","ml-agents","sample-factory"],"sentence-similarity":["sentence-transformers","spacy","transformers.js"],summarization:["transformers","transformers.js"],"table-question-answering":["transformers"],"table-to-text":["transformers"],"tabular-classification":["sklearn"],"tabular-regression":["sklearn"],"tabular-to-text":["transformers"],"text-classification":["adapter-transformers","setfit","spacy","transformers","transformers.js"],"text-generation":["transformers","transformers.js"],"text-ranking":["sentence-transformers","transformers"],"text-retrieval":[],"text-to-image":["diffusers"],"text-to-speech":["espnet","tensorflowtts","transformers","transformers.js"],"text-to-audio":["transformers","transformers.js"],"text-to-video":["diffusers"],"time-series-forecasting":[],"token-classification":["adapter-transformers","flair","spacy","span-marker","stanza","transformers","transformers.js"],translation:["transformers","transformers.js"],"unconditional-image-generation":["diffusers"],"video-text-to-text":["transformers"],"visual-question-answering":["transformers","transformers.js"],"voice-activity-detection":[],"zero-shot-classification":["transformers","transformers.js"],"zero-shot-image-classification":["transformers","transformers.js"],"zero-shot-object-detection":["transformers","transformers.js"],"text-to-3d":["diffusers"],"image-to-3d":["diffusers"],"any-to-any":["transformers"],"visual-document-retrieval":["transformers"],"video-to-video":["diffusers"]};function N(e,t=Qu){return{...t,id:e,label:ha[e].name,libraries:km[e]}}N("any-to-any",Du),N("audio-classification",$u),N("audio-to-audio",ju),N("audio-text-to-text",Lu),N("automatic-speech-recognition",Ru),N("depth-estimation",Xu),N("document-question-answering",Mu),N("visual-document-retrieval",mm),N("feature-extraction",Ou),N("fill-mask",Nu),N("image-classification",Bu),N("image-feature-extraction",Uu),N("image-segmentation",Vu),N("image-to-image",qu),N("image-text-to-text",Hu),N("image-to-text",Fu),N("image-to-video",zu),N("keypoint-detection",wm),N("mask-generation",Wu),N("object-detection",Ku),N("video-classification",um),N("question-answering",Yu),N("reinforcement-learning",Ju),N("sentence-similarity",Zu),N("summarization",Gu),N("table-question-answering",em),N("tabular-classification",tm),N("tabular-regression",nm),N("text-classification",rm),N("text-generation",lm),N("text-ranking",cm),N("text-to-image",im),N("text-to-speech",am),N("text-to-video",dm),N("token-classification",om),N("translation",sm),N("unconditional-image-generation",pm),N("video-text-to-text",_m),N("video-to-video",xm),N("visual-question-answering",fm),N("zero-shot-classification",hm),N("zero-shot-image-classification",gm),N("zero-shot-object-detection",bm),N("text-to-3d",vm),N("image-to-3d",ym);const Am=()=>'"Hi, I recently bought a device from your company but it is not working as advertised and I would like to get reimbursed!"',Im=()=>'"Меня зовут Вольфганг и я живу в Берлине"',Tm=()=>'"The tower is 324 metres (1,063 ft) tall, about the same height as an 81-storey building, and the tallest structure in Paris. Its base is square, measuring 125 metres (410 ft) on each side. During its construction, the Eiffel Tower surpassed the Washington Monument to become the tallest man-made structure in the world, a title it held for 41 years until the Chrysler Building in New York City was finished in 1930. It was the first structure to reach a height of 300 metres. Due to the addition of a broadcasting aerial at the top of the tower in 1957, it is now taller than the Chrysler Building by 5.2 metres (17 ft). Excluding transmitters, the Eiffel Tower is the second tallest free-standing structure in France after the Millau Viaduct."',Em=()=>`{
    "query": "How many stars does the transformers repository have?",
    "table": {
        "Repository": ["Transformers", "Datasets", "Tokenizers"],
        "Stars": ["36542", "4512", "3934"],
        "Contributors": ["651", "77", "34"],
        "Programming language": [
            "Python",
            "Python",
            "Rust, Python and NodeJS"
        ]
    }
}`,Sm=()=>`{
        "image": "cat.png",
        "question": "What is in this image?"
    }`,Pm=()=>`{
    "question": "What is my name?",
    "context": "My name is Clara and I live in Berkeley."
}`,Cm=()=>'"I like you. I love you"',Dm=()=>'"My name is Sarah Jessica Parker but you can call me Jessica"',ds=e=>e.tags.includes("conversational")?e.pipeline_tag==="text-generation"?[{role:"user",content:"What is the capital of France?"}]:[{role:"user",content:[{type:"text",text:"Describe this image in one sentence."},{type:"image_url",image_url:{url:"https://cdn.britannica.com/61/93061-050-99147DCE/Statue-of-Liberty-Island-New-York-Bay.jpg"}}]}]:'"Can you please let us know more details about your "',$m=e=>`"The answer to the universe is ${e.mask_token}."`,Lm=()=>`{
    "source_sentence": "That is a happy person",
    "sentences": [
        "That is a happy dog",
        "That is a very happy person",
        "Today is a sunny day"
    ]
}`,jm=()=>'"Today is a sunny day and I will get some ice cream."',Rm=()=>'"cats.jpg"',Mm=()=>'"cats.jpg"',Om=()=>`{
    "image": "cat.png",
    "prompt": "Turn the cat into a tiger."
}`,Nm=()=>`{
    "image": "cat.png",
    "prompt": "The cat starts to dance"
}`,Bm=()=>'"cats.jpg"',Um=()=>'"cats.jpg"',qm=()=>'"sample1.flac"',Fm=()=>'"sample1.flac"',Hm=()=>'"Astronaut riding a horse"',Vm=()=>'"A young man walking on the street"',zm=()=>'"The answer to the universe is 42"',Wm=()=>'"liquid drum and bass, atmospheric synths, airy sounds"',Km=()=>'"sample1.flac"',ps=()=>`'{"Height":[11.52,12.48],"Length1":[23.2,24.0],"Length2":[25.4,26.3],"Species": ["Bream","Bream"]}'`,Xm=()=>'"cats.jpg"',Qm={"audio-to-audio":qm,"audio-classification":Fm,"automatic-speech-recognition":Km,"document-question-answering":Sm,"feature-extraction":jm,"fill-mask":$m,"image-classification":Rm,"image-to-text":Mm,"image-to-image":Om,"image-to-video":Nm,"image-segmentation":Bm,"object-detection":Um,"question-answering":Pm,"sentence-similarity":Lm,summarization:Tm,"table-question-answering":Em,"tabular-regression":ps,"tabular-classification":ps,"text-classification":Cm,"text-generation":ds,"image-text-to-text":ds,"text-to-image":Hm,"text-to-video":Vm,"text-to-speech":zm,"text-to-audio":Wm,"token-classification":Dm,translation:Im,"zero-shot-classification":Am,"zero-shot-image-classification":Xm};function Jm(e,t=!1,n=!1){if(e.pipeline_tag){const a=Qm[e.pipeline_tag];if(a){let o=a(e);if(typeof o=="string"&&(t&&(o=o.replace(/(?:(?:\r?\n|\r)\t*)|\t+/g," ")),n)){const r=/^"(.+)"$/s,d=o.match(r);o=d?d[1]:o}return o}}return"No input example has been defined for this model task."}function Ym(e,t){let n=JSON.stringify(e,null,"	");return t!=null&&t.indent&&(n=n.replaceAll(`
`,`
${t.indent}`)),t!=null&&t.attributeKeyQuotes||(n=n.replace(/"([^"]+)":/g,"$1:")),t!=null&&t.customContentEscaper&&(n=t.customContentEscaper(n)),n}const Ps="custom_code";function at(e){const t=e.split("/");return t.length===1?t[0]:t[1]}const Zm=e=>JSON.stringify(e).slice(1,-1),Gm=e=>{var t,n;return[`from adapters import AutoAdapterModel

model = AutoAdapterModel.from_pretrained("${(n=(t=e.config)==null?void 0:t.adapter_transformers)==null?void 0:n.model_name}")
model.load_adapter("${e.id}", set_active=True)`]},ef=e=>[`import allennlp_models
from allennlp.predictors.predictor import Predictor

predictor = Predictor.from_path("hf://${e.id}")`],tf=e=>[`import allennlp_models
from allennlp.predictors.predictor import Predictor

predictor = Predictor.from_path("hf://${e.id}")
predictor_input = {"passage": "My name is Wolfgang and I live in Berlin", "question": "Where do I live?"}
predictions = predictor.predict_json(predictor_input)`],nf=e=>e.tags.includes("question-answering")?tf(e):ef(e),af=e=>[`from araclip import AraClip

model = AraClip.from_pretrained("${e.id}")`],of=e=>[`from asteroid.models import BaseModel

model = BaseModel.from_pretrained("${e.id}")`],sf=e=>{const t=`# Watermark Generator
from audioseal import AudioSeal

model = AudioSeal.load_generator("${e.id}")
# pass a tensor (tensor_wav) of shape (batch, channels, samples) and a sample rate
wav, sr = tensor_wav, 16000
	
watermark = model.get_watermark(wav, sr)
watermarked_audio = wav + watermark`,n=`# Watermark Detector
from audioseal import AudioSeal

detector = AudioSeal.load_detector("${e.id}")
	
result, message = detector.detect_watermark(watermarked_audio, sr)`;return[t,n]};function ln(e){var t,n;return((n=(t=e.cardData)==null?void 0:t.base_model)==null?void 0:n.toString())??"fill-in-base-model"}function Bt(e){var n,a,o;const t=((a=(n=e.widgetData)==null?void 0:n[0])==null?void 0:a.text)??((o=e.cardData)==null?void 0:o.instance_prompt);if(t)return Zm(t)}const rf=e=>[`import requests
from PIL import Image
from ben2 import AutoModel

url = "https://huggingface.co/datasets/mishig/sample_images/resolve/main/teapot.jpg"
image = Image.open(requests.get(url, stream=True).raw)

model = AutoModel.from_pretrained("${e.id}")
model.to("cuda").eval()
foreground = model.inference(image)
`],lf=e=>[`from bertopic import BERTopic

model = BERTopic.load("${e.id}")`],cf=e=>[`from bm25s.hf import BM25HF

retriever = BM25HF.load_from_hub("${e.id}")`],df=()=>[`# pip install chatterbox-tts
import torchaudio as ta
from chatterbox.tts import ChatterboxTTS

model = ChatterboxTTS.from_pretrained(device="cuda")

text = "Ezreal and Jinx teamed up with Ahri, Yasuo, and Teemo to take down the enemy's Nexus in an epic late-game pentakill."
wav = model.generate(text)
ta.save("test-1.wav", wav, model.sr)

# If you want to synthesize with a different voice, specify the audio prompt
AUDIO_PROMPT_PATH="YOUR_FILE.wav"
wav = model.generate(text, audio_prompt_path=AUDIO_PROMPT_PATH)
ta.save("test-2.wav", wav, model.sr)`],pf=()=>["pip install git+https://github.com/SAP-samples/contexttab",`# Run a classification task
from sklearn.datasets import load_breast_cancer
from sklearn.metrics import accuracy_score
from sklearn.model_selection import train_test_split

from contexttab import ConTextTabClassifier

# Load sample data
X, y = load_breast_cancer(return_X_y=True)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.5, random_state=42)

# Initialize a classifier
# You can omit checkpoint and checkpoint_revision to use the default model
clf = ConTextTabClassifier(checkpoint="l2/base.pt", checkpoint_revision="v1.0.0", bagging=1, max_context_size=2048)

clf.fit(X_train, y_train)

# Predict probabilities
prediction_probabilities = clf.predict_proba(X_test)
# Predict labels
predictions = clf.predict(X_test)
print("Accuracy", accuracy_score(y_test, predictions))`,`# Run a regression task
from sklearn.datasets import fetch_openml
from sklearn.metrics import r2_score
from sklearn.model_selection import train_test_split

from contexttab import ConTextTabRegressor


# Load sample data
df = fetch_openml(data_id=531, as_frame=True)
X = df.data
y = df.target.astype(float)

# Train-test split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.5, random_state=42)

# Initialize the regressor
# You can omit checkpoint and checkpoint_revision to use the default model
regressor = ConTextTabRegressor(checkpoint="l2/base.pt", checkpoint_revision="v1.0.0", bagging=1, max_context_size=2048)

regressor.fit(X_train, y_train)

# Predict on the test set
predictions = regressor.predict(X_test)

r2 = r2_score(y_test, predictions)
print("R² Score:", r2)`],uf=()=>[`# pip install git+https://github.com/Google-Health/cxr-foundation.git#subdirectory=python

# Load image as grayscale (Stillwaterising, CC0, via Wikimedia Commons)
import requests
from PIL import Image
from io import BytesIO
image_url = "https://upload.wikimedia.org/wikipedia/commons/c/c8/Chest_Xray_PA_3-8-2010.png"
img = Image.open(requests.get(image_url, headers={'User-Agent': 'Demo'}, stream=True).raw).convert('L')

# Run inference
from clientside.clients import make_hugging_face_client
cxr_client = make_hugging_face_client('cxr_model')
print(cxr_client.get_image_embeddings_from_images([img]))`],mf=e=>{let t,n,a;return t="<ENCODER>",n="<NUMBER_OF_FEATURES>",a="<OUT_CHANNELS>",e.id==="depth-anything/Depth-Anything-V2-Small"?(t="vits",n="64",a="[48, 96, 192, 384]"):e.id==="depth-anything/Depth-Anything-V2-Base"?(t="vitb",n="128",a="[96, 192, 384, 768]"):e.id==="depth-anything/Depth-Anything-V2-Large"&&(t="vitl",n="256",a="[256, 512, 1024, 1024"),[`
# Install from https://github.com/DepthAnything/Depth-Anything-V2

# Load the model and infer depth from an image
import cv2
import torch

from depth_anything_v2.dpt import DepthAnythingV2

# instantiate the model
model = DepthAnythingV2(encoder="${t}", features=${n}, out_channels=${a})

# load the weights
filepath = hf_hub_download(repo_id="${e.id}", filename="depth_anything_v2_${t}.pth", repo_type="model")
state_dict = torch.load(filepath, map_location="cpu")
model.load_state_dict(state_dict).eval()

raw_img = cv2.imread("your/image/path")
depth = model.infer_image(raw_img) # HxW raw depth map in numpy
    `]},ff=e=>[`# Download checkpoint
pip install huggingface-hub
huggingface-cli download --local-dir checkpoints ${e.id}`,`import depth_pro

# Load model and preprocessing transform
model, transform = depth_pro.create_model_and_transforms()
model.eval()

# Load and preprocess an image.
image, _, f_px = depth_pro.load_rgb("example.png")
image = transform(image)

# Run inference.
prediction = model.infer(image, f_px=f_px)

# Results: 1. Depth in meters
depth = prediction["depth"]
# Results: 2. Focal length in pixels
focallength_px = prediction["focallength_px"]`],hf=()=>[`from huggingface_hub import from_pretrained_keras
import tensorflow as tf, requests

# Load and format input
IMAGE_URL = "https://storage.googleapis.com/dx-scin-public-data/dataset/images/3445096909671059178.png"
input_tensor = tf.train.Example(
    features=tf.train.Features(
        feature={
            "image/encoded": tf.train.Feature(
                bytes_list=tf.train.BytesList(value=[requests.get(IMAGE_URL, stream=True).content])
            )
        }
    )
).SerializeToString()

# Load model and run inference
loaded_model = from_pretrained_keras("google/derm-foundation")
infer = loaded_model.signatures["serving_default"]
print(infer(inputs=tf.constant([input_tensor])))`],gf=e=>[`import soundfile as sf
from dia.model import Dia

model = Dia.from_pretrained("${e.id}")
text = "[S1] Dia is an open weights text to dialogue model. [S2] You get full control over scripts and voices. [S1] Wow. Amazing. (laughs) [S2] Try it now on Git hub or Hugging Face."
output = model.generate(text)

sf.write("simple.mp3", output, 44100)`],bf=e=>[`# pip install git+https://github.com/NVlabs/describe-anything
from huggingface_hub import snapshot_download
from dam import DescribeAnythingModel

snapshot_download(${e.id}, local_dir="checkpoints")

dam = DescribeAnythingModel(
	model_path="checkpoints",
	conv_mode="v1",
	prompt_mode="focal_prompt",
)`],yf="pip install -U diffusers transformers",Cs="Astronaut in a jungle, cold color palette, muted colors, detailed, 8k",Ds="Turn this cat into a dog",ga="A man with short gray hair plays a red electric guitar.",vf=e=>[`from diffusers import DiffusionPipeline

pipe = DiffusionPipeline.from_pretrained("${e.id}")

prompt = "${Bt(e)??Cs}"
image = pipe(prompt).images[0]`],wf=e=>[`from diffusers import DiffusionPipeline
from diffusers.utils import load_image

pipe = DiffusionPipeline.from_pretrained("${e.id}")

prompt = "${Bt(e)??Ds}"
input_image = load_image("https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/diffusers/cat.png")

image = pipe(image=input_image, prompt=prompt).images[0]`],_f=e=>[`import torch
from diffusers import DiffusionPipeline
from diffusers.utils import load_image, export_to_video

pipe = DiffusionPipeline.from_pretrained("${e.id}", torch_dtype=torch.float16)
pipe.to("cuda")

prompt = "${Bt(e)??ga}"
image = load_image(
    "https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/diffusers/guitar-man.png"
)

output = pipe(image=image, prompt=prompt).frames[0]
export_to_video(output, "output.mp4")`],xf=e=>[`from diffusers import ControlNetModel, StableDiffusionControlNetPipeline

controlnet = ControlNetModel.from_pretrained("${e.id}")
pipe = StableDiffusionControlNetPipeline.from_pretrained(
	"${ln(e)}", controlnet=controlnet
)`],kf=e=>[`from diffusers import DiffusionPipeline

pipe = DiffusionPipeline.from_pretrained("${ln(e)}")
pipe.load_lora_weights("${e.id}")

prompt = "${Bt(e)??Cs}"
image = pipe(prompt).images[0]`],Af=e=>[`from diffusers import DiffusionPipeline
from diffusers.utils import load_image

pipe = DiffusionPipeline.from_pretrained("${ln(e)}")
pipe.load_lora_weights("${e.id}")

prompt = "${Bt(e)??Ds}"
input_image = load_image("https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/diffusers/cat.png")

image = pipe(image=input_image, prompt=prompt).images[0]`],If=e=>[`from diffusers import DiffusionPipeline
from diffusers.utils import export_to_video

pipe = DiffusionPipeline.from_pretrained("${ln(e)}")
pipe.load_lora_weights("${e.id}")

prompt = "${Bt(e)??ga}"

output = pipe(prompt=prompt).frames[0]
export_to_video(output, "output.mp4")`],Tf=e=>[`from diffusers import DiffusionPipeline
from diffusers.utils import load_image, export_to_video

pipe = DiffusionPipeline.from_pretrained("${ln(e)}")
pipe.load_lora_weights("${e.id}")

prompt = "${Bt(e)??ga}"
input_image = load_image("https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/diffusers/guitar-man.png")

image = pipe(image=input_image, prompt=prompt).frames[0]
export_to_video(output, "output.mp4")`],Ef=e=>[`from diffusers import DiffusionPipeline

pipe = DiffusionPipeline.from_pretrained("${ln(e)}")
pipe.load_textual_inversion("${e.id}")`],Sf=e=>[`import torch
from diffusers import FluxFillPipeline
from diffusers.utils import load_image

image = load_image("https://huggingface.co/datasets/diffusers/diffusers-images-docs/resolve/main/cup.png")
mask = load_image("https://huggingface.co/datasets/diffusers/diffusers-images-docs/resolve/main/cup_mask.png")

pipe = FluxFillPipeline.from_pretrained("${e.id}", torch_dtype=torch.bfloat16).to("cuda")
image = pipe(
    prompt="a white paper cup",
    image=image,
    mask_image=mask,
    height=1632,
    width=1232,
    guidance_scale=30,
    num_inference_steps=50,
    max_sequence_length=512,
    generator=torch.Generator("cpu").manual_seed(0)
).images[0]
image.save(f"flux-fill-dev.png")`],Pf=e=>[`import torch
from diffusers import AutoPipelineForInpainting
from diffusers.utils import load_image

pipe = AutoPipelineForInpainting.from_pretrained("${e.id}", torch_dtype=torch.float16, variant="fp16").to("cuda")

img_url = "https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo.png"
mask_url = "https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo_mask.png"

image = load_image(img_url).resize((1024, 1024))
mask_image = load_image(mask_url).resize((1024, 1024))

prompt = "a tiger sitting on a park bench"
generator = torch.Generator(device="cuda").manual_seed(0)

image = pipe(
  prompt=prompt,
  image=image,
  mask_image=mask_image,
  guidance_scale=8.0,
  num_inference_steps=20,  # steps between 15 and 30 work well for us
  strength=0.99,  # make sure to use \`strength\` below 1.0
  generator=generator,
).images[0]`],$s=e=>{let t;return e.tags.includes("StableDiffusionInpaintPipeline")||e.tags.includes("StableDiffusionXLInpaintPipeline")?t=Pf(e):e.tags.includes("controlnet")?t=xf(e):e.tags.includes("lora")?e.pipeline_tag==="image-to-image"?t=Af(e):e.pipeline_tag==="image-to-video"?t=Tf(e):e.pipeline_tag==="text-to-video"?t=If(e):t=kf(e):e.tags.includes("textual_inversion")?t=Ef(e):e.tags.includes("FluxFillPipeline")?t=Sf(e):e.pipeline_tag==="image-to-video"?t=_f(e):e.pipeline_tag==="image-to-image"?t=wf(e):t=vf(e),[yf,...t]},Cf=e=>{const t=`# Pipeline for Stable Diffusion 3
from diffusionkit.mlx import DiffusionPipeline

pipeline = DiffusionPipeline(
	shift=3.0,
	use_t5=False,
	model_version=${e.id},
	low_memory_mode=True,
	a16=True,
	w16=True,
)`,n=`# Pipeline for Flux
from diffusionkit.mlx import FluxPipeline

pipeline = FluxPipeline(
  shift=1.0,
  model_version=${e.id},
  low_memory_mode=True,
  a16=True,
  w16=True,
)`,a=`# Image Generation
HEIGHT = 512
WIDTH = 512
NUM_STEPS = ${e.tags.includes("flux")?4:50}
CFG_WEIGHT = ${e.tags.includes("flux")?0:5}

image, _ = pipeline.generate_image(
  "a photo of a cat",
  cfg_weight=CFG_WEIGHT,
  num_steps=NUM_STEPS,
  latent_size=(HEIGHT // 8, WIDTH // 8),
)`;return[e.tags.includes("flux")?n:t,a]},Df=e=>[`# pip install --no-binary :all: cartesia-pytorch
from cartesia_pytorch import ReneLMHeadModel
from transformers import AutoTokenizer

model = ReneLMHeadModel.from_pretrained("${e.id}")
tokenizer = AutoTokenizer.from_pretrained("allenai/OLMo-1B-hf")

in_message = ["Rene Descartes was"]
inputs = tokenizer(in_message, return_tensors="pt")

outputs = model.generate(inputs.input_ids, max_length=50, top_k=100, top_p=0.99)
out_message = tokenizer.batch_decode(outputs, skip_special_tokens=True)[0]

print(out_message)
)`],$f=e=>[`import mlx.core as mx
import cartesia_mlx as cmx

model = cmx.from_pretrained("${e.id}")
model.set_dtype(mx.float32)   

prompt = "Rene Descartes was"

for text in model.generate(
    prompt,
    max_tokens=500,
    eval_every_n=5,
    verbose=True,
    top_p=0.99,
    temperature=0.85,
):
    print(text, end="", flush=True)
`],Lf=e=>{const t=at(e.id).replaceAll("-","_");return[`# Load it from the Hub directly
import edsnlp
nlp = edsnlp.load("${e.id}")
`,`# Or install it as a package
!pip install git+https://huggingface.co/${e.id}

# and import it as a module
import ${t}

nlp = ${t}.load()  # or edsnlp.load("${t}")
`]},jf=e=>[`from espnet2.bin.tts_inference import Text2Speech

model = Text2Speech.from_pretrained("${e.id}")

speech, *_ = model("text to generate speech from")`],Rf=e=>[`from espnet2.bin.asr_inference import Speech2Text

model = Speech2Text.from_pretrained(
  "${e.id}"
)

speech, rate = soundfile.read("speech.wav")
text, *_ = model(speech)[0]`],Mf=()=>["unknown model type (must be text-to-speech or automatic-speech-recognition)"],Of=e=>e.tags.includes("text-to-speech")?jf(e):e.tags.includes("automatic-speech-recognition")?Rf(e):Mf(),Nf=e=>[`from fairseq.checkpoint_utils import load_model_ensemble_and_task_from_hf_hub

models, cfg, task = load_model_ensemble_and_task_from_hf_hub(
    "${e.id}"
)`],Bf=e=>[`from flair.models import SequenceTagger

tagger = SequenceTagger.load("${e.id}")`],Uf=e=>[`from gliner import GLiNER

model = GLiNER.from_pretrained("${e.id}")`],qf=e=>[`# Download model
from huggingface_hub import snapshot_download

snapshot_download(${e.id}, local_dir="checkpoints")

from indextts.infer import IndexTTS

# Ensure config.yaml is present in the checkpoints directory
tts = IndexTTS(model_dir="checkpoints", cfg_path="checkpoints/config.yaml")

voice = "path/to/your/reference_voice.wav"  # Path to the voice reference audio file
text = "Hello, how are you?"
output_path = "output_index.wav"

tts.infer(voice, text, output_path)`],Ff=e=>[`# CLI usage
# see docs: https://ai-riksarkivet.github.io/htrflow/latest/getting_started/quick_start.html
htrflow pipeline <path/to/pipeline.yaml> <path/to/image>`,`# Python usage
from htrflow.pipeline.pipeline import Pipeline
from htrflow.pipeline.steps import Task
from htrflow.models.framework.model import ModelClass

pipeline = Pipeline(
    [
        Task(
            ModelClass, {"model": "${e.id}"}, {}
        ),
    ])`],Hf=e=>[`# Available backend options are: "jax", "torch", "tensorflow".
import os
os.environ["KERAS_BACKEND"] = "jax"
	
import keras

model = keras.saving.load_model("hf://${e.id}")
`],Vf=e=>`
import keras_hub

# Load CausalLM model (optional: use half precision for inference)
causal_lm = keras_hub.models.CausalLM.from_preset("hf://${e}", dtype="bfloat16")
causal_lm.compile(sampler="greedy")  # (optional) specify a sampler

# Generate text
causal_lm.generate("Keras: deep learning for", max_length=64)
`,zf=e=>`
import keras_hub

# Load TextToImage model (optional: use half precision for inference)
text_to_image = keras_hub.models.TextToImage.from_preset("hf://${e}", dtype="bfloat16")

# Generate images with a TextToImage model.
text_to_image.generate("Astronaut in a jungle")
`,Wf=e=>`
import keras_hub

# Load TextClassifier model
text_classifier = keras_hub.models.TextClassifier.from_preset(
    "hf://${e}",
    num_classes=2,
)
# Fine-tune
text_classifier.fit(x=["Thilling adventure!", "Total snoozefest."], y=[1, 0])
# Classify text
text_classifier.predict(["Not my cup of tea."])
`,Kf=e=>`
import keras_hub
import keras

# Load ImageClassifier model
image_classifier = keras_hub.models.ImageClassifier.from_preset(
    "hf://${e}",
    num_classes=2,
)
# Fine-tune
image_classifier.fit(
    x=keras.random.randint((32, 64, 64, 3), 0, 256),
    y=keras.random.randint((32, 1), 0, 2),
)
# Classify image
image_classifier.predict(keras.random.randint((1, 64, 64, 3), 0, 256))
`,us={CausalLM:Vf,TextToImage:zf,TextClassifier:Wf,ImageClassifier:Kf},Xf=(e,t)=>`
import keras_hub

# Create a ${e} model
task = keras_hub.models.${e}.from_preset("hf://${t}")
`,Qf=e=>`
import keras_hub

# Create a Backbone model unspecialized for any task
backbone = keras_hub.models.Backbone.from_preset("hf://${e}")
`,Jf=e=>{var o,r;const t=e.id,n=((r=(o=e.config)==null?void 0:o.keras_hub)==null?void 0:r.tasks)??[],a=[];for(const[d,f]of Object.entries(us))n.includes(d)&&a.push(f(t));for(const d of n)Object.keys(us).includes(d)||a.push(Xf(d,t));return a.push(Qf(t)),a},Yf=e=>[`# Example usage for KimiAudio
# pip install git+https://github.com/MoonshotAI/Kimi-Audio.git

from kimia_infer.api.kimia import KimiAudio

model = KimiAudio(model_path="${e.id}", load_detokenizer=True)

sampling_params = {
    "audio_temperature": 0.8,
    "audio_top_k": 10,
    "text_temperature": 0.0,
    "text_top_k": 5,
}

# For ASR
asr_audio = "asr_example.wav"
messages_asr = [
    {"role": "user", "message_type": "text", "content": "Please transcribe the following audio:"},
    {"role": "user", "message_type": "audio", "content": asr_audio}
]
_, text = model.generate(messages_asr, **sampling_params, output_type="text")
print(text)

# For Q&A
qa_audio = "qa_example.wav"
messages_conv = [{"role": "user", "message_type": "audio", "content": qa_audio}]
wav, text = model.generate(messages_conv, **sampling_params, output_type="both")
sf.write("output_audio.wav", wav.cpu().view(-1).numpy(), 24000)
print(text)
`],Zf=e=>[`from kittentts import KittenTTS
m = KittenTTS("${e.id}")

audio = m.generate("This high quality TTS model works without a GPU")

# Save the audio
import soundfile as sf
sf.write('output.wav', audio, 24000)`],Gf=e=>e.tags.includes("bi-encoder")?[`#install from https://github.com/webis-de/lightning-ir

from lightning_ir import BiEncoderModule
model = BiEncoderModule("${e.id}")

model.score("query", ["doc1", "doc2", "doc3"])`]:e.tags.includes("cross-encoder")?[`#install from https://github.com/webis-de/lightning-ir

from lightning_ir import CrossEncoderModule
model = CrossEncoderModule("${e.id}")

model.score("query", ["doc1", "doc2", "doc3"])`]:[`#install from https://github.com/webis-de/lightning-ir

from lightning_ir import BiEncoderModule, CrossEncoderModule

# depending on the model type, use either BiEncoderModule or CrossEncoderModule
model = BiEncoderModule("${e.id}") 
# model = CrossEncoderModule("${e.id}")

model.score("query", ["doc1", "doc2", "doc3"])`],eh=e=>{const t=[`# !pip install llama-cpp-python

from llama_cpp import Llama

llm = Llama.from_pretrained(
	repo_id="${e.id}",
	filename="{{GGUF_FILE}}",
)
`];if(e.tags.includes("conversational")){const n=Jm(e);t.push(`llm.create_chat_completion(
	messages = ${Ym(n,{attributeKeyQuotes:!0,indent:"	"})}
)`)}else t.push(`output = llm(
	"Once upon a time,",
	max_tokens=512,
	echo=True
)
print(output)`);return t},th=e=>{if(e.tags.includes("smolvla")){const t=[`# See https://github.com/huggingface/lerobot?tab=readme-ov-file#installation for more details
git clone https://github.com/huggingface/lerobot.git
cd lerobot
pip install -e .[smolvla]`,`# Launch finetuning on your dataset
python lerobot/scripts/train.py \\
--policy.path=${e.id} \\
--dataset.repo_id=lerobot/svla_so101_pickplace \\ 
--batch_size=64 \\
--steps=20000 \\
--output_dir=outputs/train/my_smolvla \\
--job_name=my_smolvla_training \\
--policy.device=cuda \\
--wandb.enable=true`];return e.id!=="lerobot/smolvla_base"&&t.push(`# Run the policy using the record function	
python -m lerobot.record \\
  --robot.type=so101_follower \\
  --robot.port=/dev/ttyACM0 \\ # <- Use your port
  --robot.id=my_blue_follower_arm \\ # <- Use your robot id
  --robot.cameras="{ front: {type: opencv, index_or_path: 8, width: 640, height: 480, fps: 30}}" \\ # <- Use your cameras
  --dataset.single_task="Grasp a lego block and put it in the bin." \\ # <- Use the same task description you used in your dataset recording
  --dataset.repo_id=HF_USER/dataset_name \\  # <- This will be the dataset name on HF Hub
  --dataset.episode_time_s=50 \\
  --dataset.num_episodes=10 \\
  --policy.path=${e.id}`),t}return[]},nh=e=>[`# Note: 'keras<3.x' or 'tf_keras' must be installed (legacy)
# See https://github.com/keras-team/tf-keras for more details.
from huggingface_hub import from_pretrained_keras

model = from_pretrained_keras("${e.id}")
`],ih=e=>[`from mamba_ssm import MambaLMHeadModel

model = MambaLMHeadModel.from_pretrained("${e.id}")`],ah=e=>[`# Install from https://github.com/Camb-ai/MARS5-TTS

from inference import Mars5TTS
mars5 = Mars5TTS.from_pretrained("${e.id}")`],oh=e=>[`# Install from https://github.com/pq-yang/MatAnyone.git

from matanyone.model.matanyone import MatAnyone
model = MatAnyone.from_pretrained("${e.id}")`,`
from matanyone import InferenceCore
processor = InferenceCore("${e.id}")`],sh=()=>[`# Install from https://github.com/buaacyw/MeshAnything.git

from MeshAnything.models.meshanything import MeshAnything

# refer to https://github.com/buaacyw/MeshAnything/blob/main/main.py#L91 on how to define args
# and https://github.com/buaacyw/MeshAnything/blob/main/app.py regarding usage
model = MeshAnything(args)`],rh=e=>[`import open_clip

model, preprocess_train, preprocess_val = open_clip.create_model_and_transforms('hf-hub:${e.id}')
tokenizer = open_clip.get_tokenizer('hf-hub:${e.id}')`],lh=e=>{var t,n;if((n=(t=e.config)==null?void 0:t.architectures)!=null&&n[0]){const a=e.config.architectures[0];return[[`from paddlenlp.transformers import AutoTokenizer, ${a}`,"",`tokenizer = AutoTokenizer.from_pretrained("${e.id}", from_hf_hub=True)`,`model = ${a}.from_pretrained("${e.id}", from_hf_hub=True)`].join(`
`)]}else return[["# ⚠️ Type of model unknown","from paddlenlp.transformers import AutoTokenizer, AutoModel","",`tokenizer = AutoTokenizer.from_pretrained("${e.id}", from_hf_hub=True)`,`model = AutoModel.from_pretrained("${e.id}", from_hf_hub=True)`].join(`
`)]},ch=e=>{const t={textline_detection:{className:"TextDetection"},textline_recognition:{className:"TextRecognition"},seal_text_detection:{className:"SealTextDetection"},doc_img_unwarping:{className:"TextImageUnwarping"},doc_img_orientation_classification:{className:"DocImgOrientationClassification"},textline_orientation_classification:{className:"TextLineOrientationClassification"},chart_parsing:{className:"ChartParsing"},formula_recognition:{className:"FormulaRecognition"},layout_detection:{className:"LayoutDetection"},table_cells_detection:{className:"TableCellsDetection"},wired_table_classification:{className:"TableClassification"},table_structure_recognition:{className:"TableStructureRecognition"}};if(e.tags.includes("doc_vlm"))return[`# 1. See https://www.paddlepaddle.org.cn/en/install to install paddlepaddle
# 2. pip install paddleocr

from paddleocr import DocVLM
model = DocVLM(model_name="${at(e.id)}")
output = model.predict(
    input={"image": "path/to/image.png", "query": "Parsing this image and output the content in Markdown format."},
    batch_size=1
)
for res in output:
    res.print()
    res.save_to_json(save_path="./output/res.json")`];if(e.tags.includes("document-parse"))return[`# See https://www.paddleocr.ai/latest/version3.x/pipeline_usage/PaddleOCR-VL.html to installation

from paddleocr import PaddleOCRVL
pipeline = PaddleOCRVL()
output = pipeline.predict("path/to/document_image.png")
for res in output:
	res.print()
	res.save_to_json(save_path="output")
	res.save_to_markdown(save_path="output")`];for(const n of e.tags)if(n in t){const{className:a}=t[n];return[`# 1. See https://www.paddlepaddle.org.cn/en/install to install paddlepaddle
# 2. pip install paddleocr

from paddleocr import ${a}
model = ${a}(model_name="${at(e.id)}")
output = model.predict(input="path/to/image.png", batch_size=1)
for res in output:
    res.print()
    res.save_to_img(save_path="./output/")
    res.save_to_json(save_path="./output/res.json")`]}return[`# Please refer to the document for information on how to use the model. 
# https://paddlepaddle.github.io/PaddleOCR/latest/en/version3.x/module_usage/module_overview.html`]},dh=e=>{const t=`# Use PE-Core models as CLIP models
import core.vision_encoder.pe as pe

model = pe.CLIP.from_config("${e.id}", pretrained=True)`,n=`# Use any PE model as a vision encoder
import core.vision_encoder.pe as pe

model = pe.VisionTransformer.from_config("${e.id}", pretrained=True)`;return e.id.includes("Core")?[t,n]:[n]},ph=e=>[`from huggingface_hub import snapshot_download
from phantom_wan import WANI2V, configs

checkpoint_dir = snapshot_download("${e.id}")
wan_i2v = WanI2V(
            config=configs.WAN_CONFIGS['i2v-14B'],
            checkpoint_dir=checkpoint_dir,
        )
 video = wan_i2v.generate(text_prompt, image_prompt)`],uh=e=>[`from pyannote.audio import Pipeline
  
pipeline = Pipeline.from_pretrained("${e.id}")

# inference on the whole file
pipeline("file.wav")

# inference on an excerpt
from pyannote.core import Segment
excerpt = Segment(start=2.0, end=5.0)

from pyannote.audio import Audio
waveform, sample_rate = Audio().crop("file.wav", excerpt)
pipeline({"waveform": waveform, "sample_rate": sample_rate})`],mh=e=>[`from pyannote.audio import Model, Inference

model = Model.from_pretrained("${e.id}")
inference = Inference(model)

# inference on the whole file
inference("file.wav")

# inference on an excerpt
from pyannote.core import Segment
excerpt = Segment(start=2.0, end=5.0)
inference.crop("file.wav", excerpt)`],fh=e=>e.tags.includes("pyannote-audio-pipeline")?uh(e):mh(e),hh=e=>[`from relik import Relik
 
relik = Relik.from_pretrained("${e.id}")`],gh=e=>[`# Install from https://github.com/microsoft/renderformer

from renderformer import RenderFormerRenderingPipeline
pipeline = RenderFormerRenderingPipeline.from_pretrained("${e.id}")`],bh=e=>[`from tensorflow_tts.inference import AutoProcessor, TFAutoModel

processor = AutoProcessor.from_pretrained("${e.id}")
model = TFAutoModel.from_pretrained("${e.id}")
`],yh=e=>[`from tensorflow_tts.inference import TFAutoModel

model = TFAutoModel.from_pretrained("${e.id}")
audios = model.inference(mels)
`],vh=e=>[`from tensorflow_tts.inference import TFAutoModel

model = TFAutoModel.from_pretrained("${e.id}")
`],wh=e=>e.tags.includes("text-to-mel")?bh(e):e.tags.includes("mel-to-wav")?yh(e):vh(e),_h=e=>[`import timm

model = timm.create_model("hf_hub:${e.id}", pretrained=True)`],xh=()=>[`# pip install sae-lens
from sae_lens import SAE

sae, cfg_dict, sparsity = SAE.from_pretrained(
    release = "RELEASE_ID", # e.g., "gpt2-small-res-jb". See other options in https://github.com/jbloomAus/SAELens/blob/main/sae_lens/pretrained_saes.yaml
    sae_id = "SAE_ID", # e.g., "blocks.8.hook_resid_pre". Won't always be a hook point
)`],kh=()=>[`# seed_story_cfg_path refers to 'https://github.com/TencentARC/SEED-Story/blob/master/configs/clm_models/agent_7b_sft.yaml'
# llm_cfg_path refers to 'https://github.com/TencentARC/SEED-Story/blob/master/configs/clm_models/llama2chat7b_lora.yaml'
from omegaconf import OmegaConf
import hydra

# load Llama2
llm_cfg = OmegaConf.load(llm_cfg_path)
llm = hydra.utils.instantiate(llm_cfg, torch_dtype="fp16")

# initialize seed_story
seed_story_cfg = OmegaConf.load(seed_story_cfg_path)
seed_story = hydra.utils.instantiate(seed_story_cfg, llm=llm) `],Ah=(e,t)=>[`import joblib
from skops.hub_utils import download
download("${e.id}", "path_to_folder")
model = joblib.load(
	"${t}"
)
# only load pickle files from sources you trust
# read more about it here https://skops.readthedocs.io/en/stable/persistence.html`],Ih=(e,t)=>[`from skops.hub_utils import download
from skops.io import load
download("${e.id}", "path_to_folder")
# make sure model file is in skops format
# if model is a pickle file, make sure it's from a source you trust
model = load("path_to_folder/${t}")`],Th=e=>[`from huggingface_hub import hf_hub_download
import joblib
model = joblib.load(
	hf_hub_download("${e.id}", "sklearn_model.joblib")
)
# only load pickle files from sources you trust
# read more about it here https://skops.readthedocs.io/en/stable/persistence.html`],Eh=e=>{var t,n,a,o,r;if(e.tags.includes("skops")){const d=(a=(n=(t=e.config)==null?void 0:t.sklearn)==null?void 0:n.model)==null?void 0:a.file,f=(r=(o=e.config)==null?void 0:o.sklearn)==null?void 0:r.model_format;return d?f==="pickle"?Ah(e,d):Ih(e,d):["# ⚠️ Model filename not specified in config.json"]}else return Th(e)},Sh=e=>[`import torch
import torchaudio
from einops import rearrange
from stable_audio_tools import get_pretrained_model
from stable_audio_tools.inference.generation import generate_diffusion_cond

device = "cuda" if torch.cuda.is_available() else "cpu"

# Download model
model, model_config = get_pretrained_model("${e.id}")
sample_rate = model_config["sample_rate"]
sample_size = model_config["sample_size"]

model = model.to(device)

# Set up text and timing conditioning
conditioning = [{
	"prompt": "128 BPM tech house drum loop",
}]

# Generate stereo audio
output = generate_diffusion_cond(
	model,
	conditioning=conditioning,
	sample_size=sample_size,
	device=device
)

# Rearrange audio batch to a single sequence
output = rearrange(output, "b d n -> d (b n)")

# Peak normalize, clip, convert to int16, and save to file
output = output.to(torch.float32).div(torch.max(torch.abs(output))).clamp(-1, 1).mul(32767).to(torch.int16).cpu()
torchaudio.save("output.wav", output, sample_rate)`],Ph=e=>[`from huggingface_hub import from_pretrained_fastai

learn = from_pretrained_fastai("${e.id}")`],Ch=e=>{const t=`# Use SAM2 with images
import torch
from sam2.sam2_image_predictor import SAM2ImagePredictor

predictor = SAM2ImagePredictor.from_pretrained(${e.id})

with torch.inference_mode(), torch.autocast("cuda", dtype=torch.bfloat16):
    predictor.set_image(<your_image>)
    masks, _, _ = predictor.predict(<input_prompts>)`,n=`# Use SAM2 with videos
import torch
from sam2.sam2_video_predictor import SAM2VideoPredictor
	
predictor = SAM2VideoPredictor.from_pretrained(${e.id})

with torch.inference_mode(), torch.autocast("cuda", dtype=torch.bfloat16):
    state = predictor.init_state(<your_video>)

    # add new prompts and instantly get the output on the same frame
    frame_idx, object_ids, masks = predictor.add_new_points(state, <your_prompts>):

    # propagate the prompts to get masklets throughout the video
    for frame_idx, object_ids, masks in predictor.propagate_in_video(state):
        ...`;return[t,n]},Dh=e=>[`python -m sample_factory.huggingface.load_from_hub -r ${e.id} -d ./train_dir`];function $h(e){var n,a;const t=(n=e.widgetData)==null?void 0:n[0];if(t!=null&&t.source_sentence&&((a=t==null?void 0:t.sentences)!=null&&a.length))return[t.source_sentence,...t.sentences]}const Lh=e=>{const t=e.tags.includes(Ps)?", trust_remote_code=True":"";if(e.tags.includes("PyLate"))return[`from pylate import models

queries = [
    "Which planet is known as the Red Planet?",
    "What is the largest planet in our solar system?",
]

documents = [
    ["Mars is the Red Planet.", "Venus is Earth's twin."],
    ["Jupiter is the largest planet.", "Saturn has rings."],
]

model = models.ColBERT(model_name_or_path="${e.id}")

queries_emb = model.encode(queries, is_query=True)
docs_emb = model.encode(documents, is_query=False)`];if(e.tags.includes("cross-encoder")||e.pipeline_tag=="text-ranking")return[`from sentence_transformers import CrossEncoder

model = CrossEncoder("${e.id}"${t})

query = "Which planet is known as the Red Planet?"
passages = [
	"Venus is often called Earth's twin because of its similar size and proximity.",
	"Mars, known for its reddish appearance, is often referred to as the Red Planet.",
	"Jupiter, the largest planet in our solar system, has a prominent red spot.",
	"Saturn, famous for its rings, is sometimes mistaken for the Red Planet."
]

scores = model.predict([(query, passage) for passage in passages])
print(scores)`];const n=$h(e)??["The weather is lovely today.","It's so sunny outside!","He drove to the stadium."];return[`from sentence_transformers import SentenceTransformer

model = SentenceTransformer("${e.id}"${t})

sentences = ${JSON.stringify(n,null,4)}
embeddings = model.encode(sentences)

similarities = model.similarity(embeddings, embeddings)
print(similarities.shape)
# [${n.length}, ${n.length}]`]},jh=e=>[`from setfit import SetFitModel

model = SetFitModel.from_pretrained("${e.id}")`],Rh=e=>[`!pip install https://huggingface.co/${e.id}/resolve/main/${at(e.id)}-any-py3-none-any.whl

# Using spacy.load().
import spacy
nlp = spacy.load("${at(e.id)}")

# Importing as module.
import ${at(e.id)}
nlp = ${at(e.id)}.load()`],Mh=e=>[`from span_marker import SpanMarkerModel

model = SpanMarkerModel.from_pretrained("${e.id}")`],Oh=e=>[`import stanza

stanza.download("${at(e.id).replace("stanza-","")}")
nlp = stanza.Pipeline("${at(e.id).replace("stanza-","")}")`],Nh=e=>{switch(e){case"EncoderClassifier":return"classify_file";case"EncoderDecoderASR":case"EncoderASR":return"transcribe_file";case"SpectralMaskEnhancement":return"enhance_file";case"SepformerSeparation":return"separate_file";default:return}},Bh=e=>{var a,o;const t=(o=(a=e.config)==null?void 0:a.speechbrain)==null?void 0:o.speechbrain_interface;if(t===void 0)return["# interface not specified in config.json"];const n=Nh(t);return n===void 0?["# interface in config.json invalid"]:[`from speechbrain.pretrained import ${t}
model = ${t}.from_hparams(
  "${e.id}"
)
model.${n}("file.wav")`]},Uh=e=>[`from terratorch.registry import BACKBONE_REGISTRY

model = BACKBONE_REGISTRY.build("${e.id}")`],qh=e=>{var t,n,a,o,r;return((n=(t=e.config)==null?void 0:t.tokenizer_config)==null?void 0:n.chat_template)!==void 0||((o=(a=e.config)==null?void 0:a.processor_config)==null?void 0:o.chat_template)!==void 0||((r=e.config)==null?void 0:r.chat_template_jinja)!==void 0},Ls=e=>{var o;const t=e.transformersInfo;if(!t)return["# ⚠️ Type of model unknown"];const n=e.tags.includes(Ps)?", trust_remote_code=True":"",a=[];if(t.processor){const r=t.processor==="AutoTokenizer"?"tokenizer":t.processor==="AutoFeatureExtractor"?"extractor":"processor";a.push("# Load model directly",`from transformers import ${t.processor}, ${t.auto_model}`,"",`${r} = ${t.processor}.from_pretrained("${e.id}"`+n+")",`model = ${t.auto_model}.from_pretrained("${e.id}"`+n+")"),e.tags.includes("conversational")&&qh(e)&&(e.tags.includes("image-text-to-text")?a.push("messages = [",["    {",'        "role": "user",','        "content": [','            {"type": "image", "url": "https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/p-blog/candy.JPG"},','            {"type": "text", "text": "What animal is on the candy?"}',"        ]","    },"].join(`
`),"]"):a.push("messages = [",'    {"role": "user", "content": "Who are you?"},',"]"),a.push(`inputs = ${r}.apply_chat_template(`,"	messages,","	add_generation_prompt=True,","	tokenize=True,","	return_dict=True,",'	return_tensors="pt",',").to(model.device)","","outputs = model.generate(**inputs, max_new_tokens=40)",`print(${r}.decode(outputs[0][inputs["input_ids"].shape[-1]:]))`))}else a.push("# Load model directly",`from transformers import ${t.auto_model}`,`model = ${t.auto_model}.from_pretrained("${e.id}"`+n+', torch_dtype="auto")');if(e.pipeline_tag&&((o=Pu.transformers)!=null&&o.includes(e.pipeline_tag))){const r=["# Use a pipeline as a high-level helper","from transformers import pipeline","",`pipe = pipeline("${e.pipeline_tag}", model="${e.id}"`+n+")"];return e.tags.includes("conversational")?e.tags.includes("image-text-to-text")?(r.push("messages = [",["    {",'        "role": "user",','        "content": [','            {"type": "image", "url": "https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/p-blog/candy.JPG"},','            {"type": "text", "text": "What animal is on the candy?"}',"        ]","    },"].join(`
`),"]"),r.push("pipe(text=messages)")):(r.push("messages = [",'    {"role": "user", "content": "Who are you?"},',"]"),r.push("pipe(messages)")):e.pipeline_tag==="zero-shot-image-classification"?r.push("pipe(",'    "https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/hub/parrots.png",','    candidate_labels=["animals", "humans", "landscape"],',")"):e.pipeline_tag==="image-classification"&&r.push('pipe("https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/hub/parrots.png")'),[r.join(`
`),a.join(`
`)]}return[a.join(`
`)]},Fh=e=>{if(!e.pipeline_tag)return["// ⚠️ Unknown pipeline tag"];const t="@huggingface/transformers";return[`// npm i ${t}
import { pipeline } from '${t}';

// Allocate pipeline
const pipe = await pipeline('${e.pipeline_tag}', '${e.id}');`]},Hh=e=>{switch(e){case"CAUSAL_LM":return"CausalLM";case"SEQ_2_SEQ_LM":return"Seq2SeqLM";case"TOKEN_CLS":return"TokenClassification";case"SEQ_CLS":return"SequenceClassification";default:return}},Vh=e=>{var o;const{base_model_name_or_path:t,task_type:n}=((o=e.config)==null?void 0:o.peft)??{},a=Hh(n);return a?t?[`from peft import PeftModel
from transformers import AutoModelFor${a}

base_model = AutoModelFor${a}.from_pretrained("${t}")
model = PeftModel.from_pretrained(base_model, "${e.id}")`]:["Base model is not found."]:["Task type is invalid."]},zh=e=>[`from huggingface_hub import hf_hub_download
import fasttext

model = fasttext.load_model(hf_hub_download("${e.id}", "model.bin"))`],Wh=e=>[`from huggingface_sb3 import load_from_hub
checkpoint = load_from_hub(
	repo_id="${e.id}",
	filename="{MODEL FILENAME}.zip",
)`],Kh=(e,t)=>{switch(e){case"ASR":return[`import nemo.collections.asr as nemo_asr
asr_model = nemo_asr.models.ASRModel.from_pretrained("${t.id}")

transcriptions = asr_model.transcribe(["file.wav"])`];default:return}},Xh=e=>[`mlagents-load-from-hf --repo-id="${e.id}" --local-dir="./download: string[]s"`],Qh=()=>[`string modelName = "[Your model name here].sentis";
Model model = ModelLoader.Load(Application.streamingAssetsPath + "/" + modelName);
IWorker engine = WorkerFactory.CreateWorker(BackendType.GPUCompute, model);
// Please see provided C# file for more details
`],Jh=e=>[`
# Load the model and infer image from text
import torch
from app.sana_pipeline import SanaPipeline
from torchvision.utils import save_image

sana = SanaPipeline("configs/sana_config/1024ms/Sana_1600M_img1024.yaml")
sana.from_pretrained("hf://${e.id}")

image = sana(
    prompt='a cyberpunk cat with a neon sign that says "Sana"',
    height=1024,
    width=1024,
    guidance_scale=5.0,
    pag_guidance_scale=2.0,
    num_inference_steps=18,
) `],Yh=e=>[`import torch, soundfile as sf, librosa, numpy as np
from vibevoice.processor.vibevoice_processor import VibeVoiceProcessor
from vibevoice.modular.modeling_vibevoice_inference import VibeVoiceForConditionalGenerationInference

# Load voice sample (should be 24kHz mono)
voice, sr = sf.read("path/to/voice_sample.wav")
if voice.ndim > 1: voice = voice.mean(axis=1)
if sr != 24000: voice = librosa.resample(voice, sr, 24000)

processor = VibeVoiceProcessor.from_pretrained("${e.id}")
model = VibeVoiceForConditionalGenerationInference.from_pretrained(
    "${e.id}", torch_dtype=torch.bfloat16
).to("cuda").eval()
model.set_ddpm_inference_steps(5)

inputs = processor(text=["Speaker 0: Hello!\\nSpeaker 1: Hi there!"],
                   voice_samples=[[voice]], return_tensors="pt")
audio = model.generate(**inputs, cfg_scale=1.3,
                       tokenizer=processor.tokenizer).speech_outputs[0]
sf.write("output.wav", audio.cpu().numpy().squeeze(), 24000)`],Zh=e=>[`# Install from https://github.com/google-deepmind/videoprism
import jax
from videoprism import models as vp

flax_model = vp.get_model("${e.id}")
loaded_state = vp.load_pretrained_weights("${e.id}")

@jax.jit
def forward_fn(inputs, train=False):
  return flax_model.apply(loaded_state, inputs, train=train)`],Gh=e=>[`from Trainer_finetune import Model

model = Model.from_pretrained("${e.id}")`],eg=e=>[`from huggingface_hub import hf_hub_download
	 from inference_onnx import LVFaceONNXInferencer

model_path = hf_hub_download("${e.id}", "LVFace-L_Glint360K/LVFace-L_Glint360K.onnx")
inferencer = LVFaceONNXInferencer(model_path, use_gpu=True, timeout=300)
img_path = 'path/to/image1.jpg'
embedding = inferencer.infer_from_image(img_path)`],tg=e=>[`from voicecraft import VoiceCraft

model = VoiceCraft.from_pretrained("${e.id}")`],ng=e=>[`import soundfile as sf
from voxcpm import VoxCPM

model = VoxCPM.from_pretrained("${e.id}")

wav = model.generate(
    text="VoxCPM is an innovative end-to-end TTS model from ModelBest, designed to generate highly expressive speech.",
    prompt_wav_path=None,      # optional: path to a prompt speech for voice cloning
    prompt_text=None,          # optional: reference text
    cfg_value=2.0,             # LM guidance on LocDiT, higher for better adherence to the prompt, but maybe worse
    inference_timesteps=10,   # LocDiT inference timesteps, higher for better result, lower for fast speed
    normalize=True,           # enable external TN tool
    denoise=True,             # enable external Denoise tool
    retry_badcase=True,        # enable retrying mode for some bad cases (unstoppable)
    retry_badcase_max_times=3,  # maximum retrying times
    retry_badcase_ratio_threshold=6.0, # maximum length restriction for bad case detection (simple but effective), it could be adjusted for slow pace speech
)

sf.write("output.wav", wav, 16000)
print("saved: output.wav")`],ig=()=>[`# !pip install git+https://github.com/fluxions-ai/vui

import torchaudio

from vui.inference import render
from vui.model import Vui,

model = Vui.from_pretrained().cuda()
waveform = render(
    model,
    "Hey, here is some random stuff, usually something quite long as the shorter the text the less likely the model can cope!",
)
print(waveform.shape)
torchaudio.save("out.opus", waveform[0], 22050)
`],ag=()=>[`import ChatTTS
import torchaudio

chat = ChatTTS.Chat()
chat.load_models(compile=False) # Set to True for better performance

texts = ["PUT YOUR TEXT HERE",]

wavs = chat.infer(texts, )

torchaudio.save("output1.wav", torch.from_numpy(wavs[0]), 24000)`],ms=e=>{const t=e.tags.find(o=>o.match(/^yolov\d+$/)),n=t?`YOLOv${t.slice(4)}`:"YOLOvXX";return[(t?"":`# Couldn't find a valid YOLO version tag.
# Replace XX with the correct version.
`)+`from ultralytics import ${n}

model = ${n}.from_pretrained("${e.id}")
source = 'http://images.cocodataset.org/val2017/000000039769.jpg'
model.predict(source=source, save=True)`]},og=e=>[`# Option 1: use with transformers

from transformers import AutoModelForImageSegmentation
birefnet = AutoModelForImageSegmentation.from_pretrained("${e.id}", trust_remote_code=True)
`,`# Option 2: use with BiRefNet

# Install from https://github.com/ZhengPeng7/BiRefNet

from models.birefnet import BiRefNet
model = BiRefNet.from_pretrained("${e.id}")`],sg=e=>[`from swarmformer import SwarmFormerModel

model = SwarmFormerModel.from_pretrained("${e.id}")
`],rg=e=>[`# Follow installation instructions at https://github.com/PKU-YuanGroup/UniWorld-V1

from univa.models.qwen2p5vl.modeling_univa_qwen2p5vl import UnivaQwen2p5VLForConditionalGeneration
	model = UnivaQwen2p5VLForConditionalGeneration.from_pretrained(
        "${e.id}",
        torch_dtype=torch.bfloat16,
        attn_implementation="flash_attention_2",
    ).to("cuda")
	processor = AutoProcessor.from_pretrained("${e.id}")
`],lg=e=>[`# Download the model from the Hub
pip install huggingface_hub[hf_xet]

huggingface-cli download --local-dir ${at(e.id)} ${e.id}`],cg=e=>[`# Make sure mlx-lm is installed
# pip install --upgrade mlx-lm
# if on a CUDA device, also pip install mlx[cuda]

# Generate text with mlx-lm
from mlx_lm import load, generate

model, tokenizer = load("${e.id}")

prompt = "Once upon a time in"
text = generate(model, tokenizer, prompt=prompt, verbose=True)`],dg=e=>[`# Make sure mlx-lm is installed
# pip install --upgrade mlx-lm

# Generate text with mlx-lm
from mlx_lm import load, generate

model, tokenizer = load("${e.id}")

prompt = "Write a story about Einstein"
messages = [{"role": "user", "content": prompt}]
prompt = tokenizer.apply_chat_template(
    messages, add_generation_prompt=True
)

text = generate(model, tokenizer, prompt=prompt, verbose=True)`],pg=e=>[`# Make sure mlx-vlm is installed
# pip install --upgrade mlx-vlm

from mlx_vlm import load, generate
from mlx_vlm.prompt_utils import apply_chat_template
from mlx_vlm.utils import load_config

# Load the model
model, processor = load("${e.id}")
config = load_config("${e.id}")

# Prepare input
image = ["http://images.cocodataset.org/val2017/000000039769.jpg"]
prompt = "Describe this image."

# Apply chat template
formatted_prompt = apply_chat_template(
    processor, config, prompt, num_images=1
)

# Generate output
output = generate(model, processor, formatted_prompt, image)
print(output)`],ug=e=>[`from mlxim.model import create_model

model = create_model(${e.id})`],mg=e=>e.pipeline_tag==="image-text-to-text"?pg(e):e.pipeline_tag==="text-generation"?e.tags.includes("conversational")?dg(e):cg(e):lg(e),fg=e=>[`from model2vec import StaticModel

model = StaticModel.from_pretrained("${e.id}")`],hg=e=>{let t;e.tags.includes("diffusers")?t=gg(e):e.tags.includes("transformers")?t=bg(e):t=yg(e);const n=a=>/^from pruna import PrunaModel/m.test(a)?a:`from pruna import PrunaModel
${a}`;return t=t.map(n),e.tags.includes("pruna_pro-ai")?t.map(a=>a.replace(/\bpruna\b/g,"pruna_pro").replace(/\bPrunaModel\b/g,"PrunaProModel")):t},gg=e=>$s(e).map(n=>n.replace(/\b\w*Pipeline\w*\b/g,"PrunaModel").replace(/from diffusers import ([^,\n]*PrunaModel[^,\n]*)/g,"").replace(/from diffusers import ([^,\n]+),?\s*([^,\n]*PrunaModel[^,\n]*)/g,"from diffusers import $1").replace(/from diffusers import\s*(\n|$)/g,"").replace(/from diffusers import PrunaModel/g,"from pruna import PrunaModel").replace(/from diffusers import ([^,\n]+), PrunaModel/g,"from diffusers import $1").replace(/from diffusers import PrunaModel, ([^,\n]+)/g,"from diffusers import $1").replace(/\n\n+/g,`
`).trim()),bg=e=>{const t=e.transformersInfo;let a=Ls(e).map(o=>o.replace(/from transformers import pipeline/g,"from pruna import PrunaModel").replace(/pipeline\([^)]*\)/g,`PrunaModel.from_pretrained("${e.id}")`));return t!=null&&t.auto_model&&(a=a.map(o=>o.replace(new RegExp(`from transformers import ${t.auto_model}
?`,"g"),"").replace(new RegExp(`${t.auto_model}.from_pretrained`,"g"),"PrunaModel.from_pretrained").replace(new RegExp(`^.*from.*import.*(, *${t.auto_model})+.*$`,"gm"),r=>r.replace(new RegExp(`, *${t.auto_model}`,"g"),"")))),a},yg=e=>[`from pruna import PrunaModel
model = PrunaModel.from_pretrained("${e.id}")
`],vg=e=>{let t;return e.tags.includes("automatic-speech-recognition")&&(t=Kh("ASR",e)),t??["# tag did not correspond to a valid NeMo domain."]},wg=e=>{const t=e.tags??[];return t.includes("gguf")||t.includes("onnx")?[]:[`
  import outetts
  
  enum = outetts.Models("${e.id}".split("/", 1)[1])       # VERSION_1_0_SIZE_1B
  cfg  = outetts.ModelConfig.auto_config(enum, outetts.Backend.HF)
  tts  = outetts.Interface(cfg)
  
  speaker = tts.load_default_speaker("EN-FEMALE-1-NEUTRAL")
  tts.generate(
	  outetts.GenerationConfig(
		  text="Hello there, how are you doing?",
		  speaker=speaker,
	  )
  ).save("output.wav")
  `]},_g=e=>[`from pxia import AutoModel

model = AutoModel.from_pretrained("${e.id}")`],xg=e=>[`from pythae.models import AutoModel

model = AutoModel.load_from_hf_hub("${e.id}")`],kg=e=>[`from audiocraft.models import MusicGen

model = MusicGen.get_pretrained("${e.id}")

descriptions = ['happy rock', 'energetic EDM', 'sad jazz']
wav = model.generate(descriptions)  # generates 3 samples.`],Ag=e=>[`from audiocraft.models import MAGNeT
	
model = MAGNeT.get_pretrained("${e.id}")

descriptions = ['disco beat', 'energetic EDM', 'funky groove']
wav = model.generate(descriptions)  # generates 3 samples.`],Ig=e=>[`from audiocraft.models import AudioGen
	
model = AudioGen.get_pretrained("${e.id}")
model.set_generation_params(duration=5)  # generate 5 seconds.
descriptions = ['dog barking', 'sirene of an emergency vehicle', 'footsteps in a corridor']
wav = model.generate(descriptions)  # generates 3 samples.`],Tg=e=>[`from anemoi.inference.runners.default import DefaultRunner
from anemoi.inference.config.run import RunConfiguration
# Create Configuration
config = RunConfiguration(checkpoint = {"huggingface":"${e.id}"})
# Load Runner
runner = DefaultRunner(config)`],Eg=e=>e.tags.includes("musicgen")?kg(e):e.tags.includes("audiogen")?Ig(e):e.tags.includes("magnet")?Ag(e):["# Type of model unknown."],Sg=()=>[`# Install CLI with Homebrew on macOS device
brew install whisperkit-cli

# View all available inference options
whisperkit-cli transcribe --help
	
# Download and run inference using whisper base model
whisperkit-cli transcribe --audio-path /path/to/audio.mp3

# Or use your preferred model variant
whisperkit-cli transcribe --model "large-v3" --model-prefix "distil" --audio-path /path/to/audio.mp3 --verbose`],Pg=e=>[`from threedtopia_xl.models import threedtopia_xl

model = threedtopia_xl.from_pretrained("${e.id}")
model.generate(cond="path/to/image.png")`],Cg=e=>[`# pip install git+https://github.com/Zyphra/Zonos.git
import torchaudio
from zonos.model import Zonos
from zonos.conditioning import make_cond_dict

model = Zonos.from_pretrained("${e.id}", device="cuda")

wav, sr = torchaudio.load("speaker.wav")           # 5-10s reference clip
speaker = model.make_speaker_embedding(wav, sr)

cond  = make_cond_dict(text="Hello, world!", speaker=speaker, language="en-us")
codes = model.generate(model.prepare_conditioning(cond))

audio = model.autoencoder.decode(codes)[0].cpu()
torchaudio.save("sample.wav", audio, model.autoencoder.sampling_rate)
`],Dg={acestep:{prettyLabel:"ACE-Step",repoName:"ACE-Step",repoUrl:"https://github.com/ace-step/ACE-Step",filter:!1,countDownloads:'path:"ace_step_transformer/config.json"'},"adapter-transformers":{prettyLabel:"Adapters",repoName:"adapters",repoUrl:"https://github.com/Adapter-Hub/adapters",docsUrl:"https://huggingface.co/docs/hub/adapters",snippets:Gm,filter:!0,countDownloads:'path:"adapter_config.json"'},allennlp:{prettyLabel:"AllenNLP",repoName:"AllenNLP",repoUrl:"https://github.com/allenai/allennlp",docsUrl:"https://huggingface.co/docs/hub/allennlp",snippets:nf,filter:!0},anemoi:{prettyLabel:"AnemoI",repoName:"AnemoI",repoUrl:"https://github.com/ecmwf/anemoi-inference",docsUrl:"https://anemoi.readthedocs.io/en/latest/",filter:!1,countDownloads:'path_extension:"ckpt"',snippets:Tg},araclip:{prettyLabel:"AraClip",repoName:"AraClip",repoUrl:"https://huggingface.co/Arabic-Clip/araclip",filter:!1,snippets:af},asteroid:{prettyLabel:"Asteroid",repoName:"Asteroid",repoUrl:"https://github.com/asteroid-team/asteroid",docsUrl:"https://huggingface.co/docs/hub/asteroid",snippets:of,filter:!0,countDownloads:'path:"pytorch_model.bin"'},audiocraft:{prettyLabel:"Audiocraft",repoName:"audiocraft",repoUrl:"https://github.com/facebookresearch/audiocraft",snippets:Eg,filter:!1,countDownloads:'path:"state_dict.bin"'},audioseal:{prettyLabel:"AudioSeal",repoName:"audioseal",repoUrl:"https://github.com/facebookresearch/audioseal",filter:!1,countDownloads:'path_extension:"pth"',snippets:sf},"bagel-mot":{prettyLabel:"Bagel",repoName:"Bagel",repoUrl:"https://github.com/ByteDance-Seed/Bagel/",filter:!1,countDownloads:'path:"llm_config.json"'},bboxmaskpose:{prettyLabel:"BBoxMaskPose",repoName:"BBoxMaskPose",repoUrl:"https://github.com/MiraPurkrabek/BBoxMaskPose",filter:!1,countDownloads:'path_extension:"pth"'},ben2:{prettyLabel:"BEN2",repoName:"BEN2",repoUrl:"https://github.com/PramaLLC/BEN2",snippets:rf,filter:!1},bertopic:{prettyLabel:"BERTopic",repoName:"BERTopic",repoUrl:"https://github.com/MaartenGr/BERTopic",snippets:lf,filter:!0},big_vision:{prettyLabel:"Big Vision",repoName:"big_vision",repoUrl:"https://github.com/google-research/big_vision",filter:!1,countDownloads:'path_extension:"npz"'},birder:{prettyLabel:"Birder",repoName:"Birder",repoUrl:"https://gitlab.com/birder/birder",filter:!1,countDownloads:'path_extension:"pt"'},birefnet:{prettyLabel:"BiRefNet",repoName:"BiRefNet",repoUrl:"https://github.com/ZhengPeng7/BiRefNet",snippets:og,filter:!1},bm25s:{prettyLabel:"BM25S",repoName:"bm25s",repoUrl:"https://github.com/xhluca/bm25s",snippets:cf,filter:!1,countDownloads:'path:"params.index.json"'},champ:{prettyLabel:"Champ",repoName:"Champ",repoUrl:"https://github.com/fudan-generative-vision/champ",countDownloads:'path:"champ/motion_module.pth"'},chatterbox:{prettyLabel:"Chatterbox",repoName:"Chatterbox",repoUrl:"https://github.com/resemble-ai/chatterbox",snippets:df,countDownloads:'path:"tokenizer.json"',filter:!1},chat_tts:{prettyLabel:"ChatTTS",repoName:"ChatTTS",repoUrl:"https://github.com/2noise/ChatTTS.git",snippets:ag,filter:!1,countDownloads:'path:"asset/GPT.pt"'},"cloud-agents":{prettyLabel:"Cloud Agents",repoName:"Cloud Agents",repoUrl:"https://huggingface.co/OpenPeerAI/Cloud-Agents",filter:!1,countDownloads:'path:"setup.py"'},colpali:{prettyLabel:"ColPali",repoName:"ColPali",repoUrl:"https://github.com/ManuelFay/colpali",filter:!1,countDownloads:'path:"adapter_config.json"'},comet:{prettyLabel:"COMET",repoName:"COMET",repoUrl:"https://github.com/Unbabel/COMET/",countDownloads:'path:"hparams.yaml"'},contexttab:{prettyLabel:"ConTextTab",repoName:"ConTextTab",repoUrl:"https://github.com/SAP-samples/contexttab",countDownloads:'path_extension:"pt"',snippets:pf},cosmos:{prettyLabel:"Cosmos",repoName:"Cosmos",repoUrl:"https://github.com/NVIDIA/Cosmos",countDownloads:'path:"config.json" OR path_extension:"pt"'},"cxr-foundation":{prettyLabel:"CXR Foundation",repoName:"cxr-foundation",repoUrl:"https://github.com/google-health/cxr-foundation",snippets:uf,filter:!1,countDownloads:'path:"precomputed_embeddings/embeddings.npz" OR path:"pax-elixr-b-text/saved_model.pb"'},deepforest:{prettyLabel:"DeepForest",repoName:"deepforest",docsUrl:"https://deepforest.readthedocs.io/en/latest/",repoUrl:"https://github.com/weecology/DeepForest"},"depth-anything-v2":{prettyLabel:"DepthAnythingV2",repoName:"Depth Anything V2",repoUrl:"https://github.com/DepthAnything/Depth-Anything-V2",snippets:mf,filter:!1,countDownloads:'path_extension:"pth"'},"depth-pro":{prettyLabel:"Depth Pro",repoName:"Depth Pro",repoUrl:"https://github.com/apple/ml-depth-pro",countDownloads:'path_extension:"pt"',snippets:ff,filter:!1},"derm-foundation":{prettyLabel:"Derm Foundation",repoName:"derm-foundation",repoUrl:"https://github.com/google-health/derm-foundation",snippets:hf,filter:!1,countDownloads:'path:"scin_dataset_precomputed_embeddings.npz" OR path:"saved_model.pb"'},"describe-anything":{prettyLabel:"Describe Anything",repoName:"Describe Anything",repoUrl:"https://github.com/NVlabs/describe-anything",snippets:bf,filter:!1},"dia-tts":{prettyLabel:"Dia",repoName:"Dia",repoUrl:"https://github.com/nari-labs/dia",snippets:gf,filter:!1},"diff-interpretation-tuning":{prettyLabel:"Diff Interpretation Tuning",repoName:"Diff Interpretation Tuning",repoUrl:"https://github.com/Aviously/diff-interpretation-tuning",filter:!1,countDownloads:'path_extension:"pt"'},diffree:{prettyLabel:"Diffree",repoName:"Diffree",repoUrl:"https://github.com/OpenGVLab/Diffree",filter:!1,countDownloads:'path:"diffree-step=000010999.ckpt"'},diffusers:{prettyLabel:"Diffusers",repoName:"🤗/diffusers",repoUrl:"https://github.com/huggingface/diffusers",docsUrl:"https://huggingface.co/docs/hub/diffusers",snippets:$s,filter:!0},diffusionkit:{prettyLabel:"DiffusionKit",repoName:"DiffusionKit",repoUrl:"https://github.com/argmaxinc/DiffusionKit",snippets:Cf},doctr:{prettyLabel:"docTR",repoName:"doctr",repoUrl:"https://github.com/mindee/doctr"},cartesia_pytorch:{prettyLabel:"Cartesia Pytorch",repoName:"Cartesia Pytorch",repoUrl:"https://github.com/cartesia-ai/cartesia_pytorch",snippets:Df},cartesia_mlx:{prettyLabel:"Cartesia MLX",repoName:"Cartesia MLX",repoUrl:"https://github.com/cartesia-ai/cartesia_mlx",snippets:$f},clipscope:{prettyLabel:"clipscope",repoName:"clipscope",repoUrl:"https://github.com/Lewington-pitsos/clipscope",filter:!1,countDownloads:'path_extension:"pt"'},cosyvoice:{prettyLabel:"CosyVoice",repoName:"CosyVoice",repoUrl:"https://github.com/FunAudioLLM/CosyVoice",filter:!1,countDownloads:'path_extension:"onnx" OR path_extension:"pt"'},cotracker:{prettyLabel:"CoTracker",repoName:"CoTracker",repoUrl:"https://github.com/facebookresearch/co-tracker",filter:!1,countDownloads:'path_extension:"pth"'},edsnlp:{prettyLabel:"EDS-NLP",repoName:"edsnlp",repoUrl:"https://github.com/aphp/edsnlp",docsUrl:"https://aphp.github.io/edsnlp/latest/",filter:!1,snippets:Lf,countDownloads:'path_filename:"config" AND path_extension:"cfg"'},elm:{prettyLabel:"ELM",repoName:"elm",repoUrl:"https://github.com/slicex-ai/elm",filter:!1,countDownloads:'path_filename:"slicex_elm_config" AND path_extension:"json"'},espnet:{prettyLabel:"ESPnet",repoName:"ESPnet",repoUrl:"https://github.com/espnet/espnet",docsUrl:"https://huggingface.co/docs/hub/espnet",snippets:Of,filter:!0},fairseq:{prettyLabel:"Fairseq",repoName:"fairseq",repoUrl:"https://github.com/pytorch/fairseq",snippets:Nf,filter:!0},fastai:{prettyLabel:"fastai",repoName:"fastai",repoUrl:"https://github.com/fastai/fastai",docsUrl:"https://huggingface.co/docs/hub/fastai",snippets:Ph,filter:!0},fastprint:{prettyLabel:"Fast Print",repoName:"Fast Print",repoUrl:"https://huggingface.co/OpenPeerAI/FastPrint",countDownloads:'path_extension:"cs"'},fasttext:{prettyLabel:"fastText",repoName:"fastText",repoUrl:"https://fasttext.cc/",snippets:zh,filter:!0,countDownloads:'path_extension:"bin"'},flair:{prettyLabel:"Flair",repoName:"Flair",repoUrl:"https://github.com/flairNLP/flair",docsUrl:"https://huggingface.co/docs/hub/flair",snippets:Bf,filter:!0,countDownloads:'path:"pytorch_model.bin"'},fme:{prettyLabel:"Full Model Emulation",repoName:"Full Model Emulation",repoUrl:"https://github.com/ai2cm/ace",docsUrl:"https://ai2-climate-emulator.readthedocs.io/en/latest/",filter:!1,countDownloads:'path_extension:"tar"'},"gemma.cpp":{prettyLabel:"gemma.cpp",repoName:"gemma.cpp",repoUrl:"https://github.com/google/gemma.cpp",filter:!1,countDownloads:'path_extension:"sbs"'},"geometry-crafter":{prettyLabel:"GeometryCrafter",repoName:"GeometryCrafter",repoUrl:"https://github.com/TencentARC/GeometryCrafter",countDownloads:'path:"point_map_vae/diffusion_pytorch_model.safetensors"'},gliner:{prettyLabel:"GLiNER",repoName:"GLiNER",repoUrl:"https://github.com/urchade/GLiNER",snippets:Uf,filter:!1,countDownloads:'path:"gliner_config.json"'},"glyph-byt5":{prettyLabel:"Glyph-ByT5",repoName:"Glyph-ByT5",repoUrl:"https://github.com/AIGText/Glyph-ByT5",filter:!1,countDownloads:'path:"checkpoints/byt5_model.pt"'},grok:{prettyLabel:"Grok",repoName:"Grok",repoUrl:"https://github.com/xai-org/grok-1",filter:!1,countDownloads:'path:"ckpt/tensor00000_000" OR path:"ckpt-0/tensor00000_000"'},hallo:{prettyLabel:"Hallo",repoName:"Hallo",repoUrl:"https://github.com/fudan-generative-vision/hallo",countDownloads:'path:"hallo/net.pth"'},hermes:{prettyLabel:"HERMES",repoName:"HERMES",repoUrl:"https://github.com/LMD0311/HERMES",filter:!1,countDownloads:'path:"ckpt/hermes_final.pth"'},hezar:{prettyLabel:"Hezar",repoName:"Hezar",repoUrl:"https://github.com/hezarai/hezar",docsUrl:"https://hezarai.github.io/hezar",countDownloads:'path:"model_config.yaml" OR path:"embedding/embedding_config.yaml"'},htrflow:{prettyLabel:"HTRflow",repoName:"HTRflow",repoUrl:"https://github.com/AI-Riksarkivet/htrflow",docsUrl:"https://ai-riksarkivet.github.io/htrflow",snippets:Ff},"hunyuan-dit":{prettyLabel:"HunyuanDiT",repoName:"HunyuanDiT",repoUrl:"https://github.com/Tencent/HunyuanDiT",countDownloads:'path:"pytorch_model_ema.pt" OR path:"pytorch_model_distill.pt"'},"hunyuan3d-2":{prettyLabel:"Hunyuan3D-2",repoName:"Hunyuan3D-2",repoUrl:"https://github.com/Tencent/Hunyuan3D-2",countDownloads:'path_filename:"model_index" OR path_filename:"config"'},"hunyuanworld-voyager":{prettyLabel:"HunyuanWorld-voyager",repoName:"HunyuanWorld-voyager",repoUrl:"https://github.com/Tencent-Hunyuan/HunyuanWorld-Voyager"},imstoucan:{prettyLabel:"IMS Toucan",repoName:"IMS-Toucan",repoUrl:"https://github.com/DigitalPhonetics/IMS-Toucan",countDownloads:'path:"embedding_gan.pt" OR path:"Vocoder.pt" OR path:"ToucanTTS.pt"'},"index-tts":{prettyLabel:"IndexTTS",repoName:"IndexTTS",repoUrl:"https://github.com/index-tts/index-tts",snippets:qf,filter:!1},infinitetalk:{prettyLabel:"InfiniteTalk",repoName:"InfiniteTalk",repoUrl:"https://github.com/MeiGen-AI/InfiniteTalk",filter:!1,countDownloads:'path_extension:"safetensors"'},"infinite-you":{prettyLabel:"InfiniteYou",repoName:"InfiniteYou",repoUrl:"https://github.com/bytedance/InfiniteYou",filter:!1,countDownloads:'path:"infu_flux_v1.0/sim_stage1/image_proj_model.bin" OR path:"infu_flux_v1.0/aes_stage2/image_proj_model.bin"'},keras:{prettyLabel:"Keras",repoName:"Keras",repoUrl:"https://github.com/keras-team/keras",docsUrl:"https://huggingface.co/docs/hub/keras",snippets:Hf,filter:!0,countDownloads:'path:"config.json" OR path_extension:"keras"'},"tf-keras":{prettyLabel:"TF-Keras",repoName:"TF-Keras",repoUrl:"https://github.com/keras-team/tf-keras",docsUrl:"https://huggingface.co/docs/hub/tf-keras",snippets:nh,countDownloads:'path:"saved_model.pb"'},"keras-hub":{prettyLabel:"KerasHub",repoName:"KerasHub",repoUrl:"https://github.com/keras-team/keras-hub",docsUrl:"https://keras.io/keras_hub/",snippets:Jf,filter:!0},"kimi-audio":{prettyLabel:"KimiAudio",repoName:"KimiAudio",repoUrl:"https://github.com/MoonshotAI/Kimi-Audio",snippets:Yf,filter:!1},kittentts:{prettyLabel:"KittenTTS",repoName:"KittenTTS",repoUrl:"https://github.com/KittenML/KittenTTS",snippets:Zf},kronos:{prettyLabel:"KRONOS",repoName:"KRONOS",repoUrl:"https://github.com/mahmoodlab/KRONOS",filter:!1,countDownloads:'path_extension:"pt"'},k2:{prettyLabel:"K2",repoName:"k2",repoUrl:"https://github.com/k2-fsa/k2"},"lightning-ir":{prettyLabel:"Lightning IR",repoName:"Lightning IR",repoUrl:"https://github.com/webis-de/lightning-ir",snippets:Gf},litert:{prettyLabel:"LiteRT",repoName:"LiteRT",repoUrl:"https://github.com/google-ai-edge/LiteRT",filter:!1,countDownloads:'path_extension:"tflite"'},"litert-lm":{prettyLabel:"LiteRT-LM",repoName:"LiteRT-LM",repoUrl:"https://github.com/google-ai-edge/LiteRT-LM",filter:!1,countDownloads:'path_extension:"litertlm" OR path_extension:"task"'},lerobot:{prettyLabel:"LeRobot",repoName:"LeRobot",repoUrl:"https://github.com/huggingface/lerobot",docsUrl:"https://huggingface.co/docs/lerobot",filter:!1,snippets:th},liveportrait:{prettyLabel:"LivePortrait",repoName:"LivePortrait",repoUrl:"https://github.com/KwaiVGI/LivePortrait",filter:!1,countDownloads:'path:"liveportrait/landmark.onnx"'},"llama-cpp-python":{prettyLabel:"llama-cpp-python",repoName:"llama-cpp-python",repoUrl:"https://github.com/abetlen/llama-cpp-python",snippets:eh},"mini-omni2":{prettyLabel:"Mini-Omni2",repoName:"Mini-Omni2",repoUrl:"https://github.com/gpt-omni/mini-omni2",countDownloads:'path:"model_config.yaml"'},mindspore:{prettyLabel:"MindSpore",repoName:"mindspore",repoUrl:"https://github.com/mindspore-ai/mindspore"},"magi-1":{prettyLabel:"MAGI-1",repoName:"MAGI-1",repoUrl:"https://github.com/SandAI-org/MAGI-1",countDownloads:'path:"ckpt/vae/config.json"'},"magenta-realtime":{prettyLabel:"Magenta RT",repoName:"Magenta RT",repoUrl:"https://github.com/magenta/magenta-realtime",countDownloads:'path:"checkpoints/llm_base_x4286_c1860k.tar" OR path:"checkpoints/llm_large_x3047_c1860k.tar" OR path:"checkpoints/llm_large_x3047_c1860k/checkpoint"'},"mamba-ssm":{prettyLabel:"MambaSSM",repoName:"MambaSSM",repoUrl:"https://github.com/state-spaces/mamba",filter:!1,snippets:ih},"mars5-tts":{prettyLabel:"MARS5-TTS",repoName:"MARS5-TTS",repoUrl:"https://github.com/Camb-ai/MARS5-TTS",filter:!1,countDownloads:'path:"mars5_ar.safetensors"',snippets:ah},matanyone:{prettyLabel:"MatAnyone",repoName:"MatAnyone",repoUrl:"https://github.com/pq-yang/MatAnyone",snippets:oh,filter:!1},"mesh-anything":{prettyLabel:"MeshAnything",repoName:"MeshAnything",repoUrl:"https://github.com/buaacyw/MeshAnything",filter:!1,countDownloads:'path:"MeshAnything_350m.pth"',snippets:sh},merlin:{prettyLabel:"Merlin",repoName:"Merlin",repoUrl:"https://github.com/StanfordMIMI/Merlin",filter:!1,countDownloads:'path_extension:"pt"'},medvae:{prettyLabel:"MedVAE",repoName:"MedVAE",repoUrl:"https://github.com/StanfordMIMI/MedVAE",filter:!1,countDownloads:'path_extension:"ckpt"'},mitie:{prettyLabel:"MITIE",repoName:"MITIE",repoUrl:"https://github.com/mit-nlp/MITIE",countDownloads:'path_filename:"total_word_feature_extractor"'},"ml-agents":{prettyLabel:"ml-agents",repoName:"ml-agents",repoUrl:"https://github.com/Unity-Technologies/ml-agents",docsUrl:"https://huggingface.co/docs/hub/ml-agents",snippets:Xh,filter:!0,countDownloads:'path_extension:"onnx"'},mlx:{prettyLabel:"MLX",repoName:"MLX",repoUrl:"https://github.com/ml-explore/mlx-examples/tree/main",snippets:mg,filter:!0},"mlx-image":{prettyLabel:"mlx-image",repoName:"mlx-image",repoUrl:"https://github.com/riccardomusmeci/mlx-image",docsUrl:"https://huggingface.co/docs/hub/mlx-image",snippets:ug,filter:!1,countDownloads:'path:"model.safetensors"'},"mlc-llm":{prettyLabel:"MLC-LLM",repoName:"MLC-LLM",repoUrl:"https://github.com/mlc-ai/mlc-llm",docsUrl:"https://llm.mlc.ai/docs/",filter:!1,countDownloads:'path:"mlc-chat-config.json"'},model2vec:{prettyLabel:"Model2Vec",repoName:"model2vec",repoUrl:"https://github.com/MinishLab/model2vec",snippets:fg,filter:!1},moshi:{prettyLabel:"Moshi",repoName:"Moshi",repoUrl:"https://github.com/kyutai-labs/moshi",filter:!1,countDownloads:'path:"tokenizer-e351c8d8-checkpoint125.safetensors"'},mtvcraft:{prettyLabel:"MTVCraft",repoName:"MTVCraft",repoUrl:"https://github.com/baaivision/MTVCraft",filter:!1,countDownloads:'path:"vae/3d-vae.pt"'},nemo:{prettyLabel:"NeMo",repoName:"NeMo",repoUrl:"https://github.com/NVIDIA/NeMo",snippets:vg,filter:!0,countDownloads:'path_extension:"nemo" OR path:"model_config.yaml" OR path_extension:"json"'},"open-oasis":{prettyLabel:"open-oasis",repoName:"open-oasis",repoUrl:"https://github.com/etched-ai/open-oasis",countDownloads:'path:"oasis500m.safetensors"'},open_clip:{prettyLabel:"OpenCLIP",repoName:"OpenCLIP",repoUrl:"https://github.com/mlfoundations/open_clip",snippets:rh,filter:!0,countDownloads:`path:"open_clip_model.safetensors"
			OR path:"model.safetensors"
			OR path:"open_clip_pytorch_model.bin"
			OR path:"pytorch_model.bin"`},openpeerllm:{prettyLabel:"OpenPeerLLM",repoName:"OpenPeerLLM",repoUrl:"https://huggingface.co/openpeerai/openpeerllm",docsUrl:"https://huggingface.co/OpenPeerAI/OpenPeerLLM/blob/main/README.md",countDownloads:'path:".meta-huggingface.json"',filter:!1},"open-sora":{prettyLabel:"Open-Sora",repoName:"Open-Sora",repoUrl:"https://github.com/hpcaitech/Open-Sora",filter:!1,countDownloads:'path:"Open_Sora_v2.safetensors"'},outetts:{prettyLabel:"OuteTTS",repoName:"OuteTTS",repoUrl:"https://github.com/edwko/OuteTTS",snippets:wg,filter:!1},paddlenlp:{prettyLabel:"paddlenlp",repoName:"PaddleNLP",repoUrl:"https://github.com/PaddlePaddle/PaddleNLP",docsUrl:"https://huggingface.co/docs/hub/paddlenlp",snippets:lh,filter:!0,countDownloads:'path:"model_config.json"'},PaddleOCR:{prettyLabel:"PaddleOCR",repoName:"PaddleOCR",repoUrl:"https://github.com/PaddlePaddle/PaddleOCR",docsUrl:"https://www.paddleocr.ai/",snippets:ch,filter:!0,countDownloads:'path_extension:"safetensors" OR path:"inference.pdiparams"'},peft:{prettyLabel:"PEFT",repoName:"PEFT",repoUrl:"https://github.com/huggingface/peft",snippets:Vh,filter:!0,countDownloads:'path:"adapter_config.json"'},"perception-encoder":{prettyLabel:"PerceptionEncoder",repoName:"PerceptionModels",repoUrl:"https://github.com/facebookresearch/perception_models",filter:!1,snippets:dh,countDownloads:'path_extension:"pt"'},"phantom-wan":{prettyLabel:"Phantom",repoName:"Phantom",repoUrl:"https://github.com/Phantom-video/Phantom",snippets:ph,filter:!1,countDownloads:'path_extension:"pth"'},"pruna-ai":{prettyLabel:"Pruna AI",repoName:"Pruna AI",repoUrl:"https://github.com/PrunaAI/pruna",snippets:hg,docsUrl:"https://docs.pruna.ai"},pxia:{prettyLabel:"pxia",repoName:"pxia",repoUrl:"https://github.com/not-lain/pxia",snippets:_g,filter:!1},"pyannote-audio":{prettyLabel:"pyannote.audio",repoName:"pyannote-audio",repoUrl:"https://github.com/pyannote/pyannote-audio",snippets:fh,filter:!0},"py-feat":{prettyLabel:"Py-Feat",repoName:"Py-Feat",repoUrl:"https://github.com/cosanlab/py-feat",docsUrl:"https://py-feat.org/",filter:!1},pythae:{prettyLabel:"pythae",repoName:"pythae",repoUrl:"https://github.com/clementchadebec/benchmark_VAE",snippets:xg,filter:!1},quantumpeer:{prettyLabel:"QuantumPeer",repoName:"QuantumPeer",repoUrl:"https://github.com/OpenPeer-AI/QuantumPeer",filter:!1,countDownloads:'path_extension:"setup.py"'},recurrentgemma:{prettyLabel:"RecurrentGemma",repoName:"recurrentgemma",repoUrl:"https://github.com/google-deepmind/recurrentgemma",filter:!1,countDownloads:'path:"tokenizer.model"'},relik:{prettyLabel:"Relik",repoName:"Relik",repoUrl:"https://github.com/SapienzaNLP/relik",snippets:hh,filter:!1},refiners:{prettyLabel:"Refiners",repoName:"Refiners",repoUrl:"https://github.com/finegrain-ai/refiners",docsUrl:"https://refine.rs/",filter:!1,countDownloads:'path:"model.safetensors"'},renderformer:{prettyLabel:"RenderFormer",repoName:"RenderFormer",repoUrl:"https://github.com/microsoft/renderformer",snippets:gh,filter:!1},reverb:{prettyLabel:"Reverb",repoName:"Reverb",repoUrl:"https://github.com/revdotcom/reverb",filter:!1},rkllm:{prettyLabel:"RKLLM",repoName:"RKLLM",repoUrl:"https://github.com/airockchip/rknn-llm",countDownloads:'path_extension:"rkllm"'},saelens:{prettyLabel:"SAELens",repoName:"SAELens",repoUrl:"https://github.com/jbloomAus/SAELens",snippets:xh,filter:!1},sam2:{prettyLabel:"sam2",repoName:"sam2",repoUrl:"https://github.com/facebookresearch/segment-anything-2",filter:!1,snippets:Ch,countDownloads:'path_extension:"pt"'},"sample-factory":{prettyLabel:"sample-factory",repoName:"sample-factory",repoUrl:"https://github.com/alex-petrenko/sample-factory",docsUrl:"https://huggingface.co/docs/hub/sample-factory",snippets:Dh,filter:!0,countDownloads:'path:"cfg.json"'},sapiens:{prettyLabel:"sapiens",repoName:"sapiens",repoUrl:"https://github.com/facebookresearch/sapiens",filter:!1,countDownloads:'path_extension:"pt2" OR path_extension:"pth" OR path_extension:"onnx"'},seedvr:{prettyLabel:"SeedVR",repoName:"SeedVR",repoUrl:"https://github.com/ByteDance-Seed/SeedVR",filter:!1,countDownloads:'path_extension:"pth"'},"self-forcing":{prettyLabel:"SelfForcing",repoName:"SelfForcing",repoUrl:"https://github.com/guandeh17/Self-Forcing",filter:!1,countDownloads:'path_extension:"pt"'},"sentence-transformers":{prettyLabel:"sentence-transformers",repoName:"sentence-transformers",repoUrl:"https://github.com/UKPLab/sentence-transformers",docsUrl:"https://huggingface.co/docs/hub/sentence-transformers",snippets:Lh,filter:!0},setfit:{prettyLabel:"setfit",repoName:"setfit",repoUrl:"https://github.com/huggingface/setfit",docsUrl:"https://huggingface.co/docs/hub/setfit",snippets:jh,filter:!0},sklearn:{prettyLabel:"Scikit-learn",repoName:"Scikit-learn",repoUrl:"https://github.com/scikit-learn/scikit-learn",snippets:Eh,filter:!0,countDownloads:'path:"sklearn_model.joblib"'},spacy:{prettyLabel:"spaCy",repoName:"spaCy",repoUrl:"https://github.com/explosion/spaCy",docsUrl:"https://huggingface.co/docs/hub/spacy",snippets:Rh,filter:!0,countDownloads:'path_extension:"whl"'},"span-marker":{prettyLabel:"SpanMarker",repoName:"SpanMarkerNER",repoUrl:"https://github.com/tomaarsen/SpanMarkerNER",docsUrl:"https://huggingface.co/docs/hub/span_marker",snippets:Mh,filter:!0},speechbrain:{prettyLabel:"speechbrain",repoName:"speechbrain",repoUrl:"https://github.com/speechbrain/speechbrain",docsUrl:"https://huggingface.co/docs/hub/speechbrain",snippets:Bh,filter:!0,countDownloads:'path:"hyperparams.yaml"'},"ssr-speech":{prettyLabel:"SSR-Speech",repoName:"SSR-Speech",repoUrl:"https://github.com/WangHelin1997/SSR-Speech",filter:!1,countDownloads:'path_extension:".pth"'},"stable-audio-tools":{prettyLabel:"Stable Audio Tools",repoName:"stable-audio-tools",repoUrl:"https://github.com/Stability-AI/stable-audio-tools.git",filter:!1,countDownloads:'path:"model.safetensors"',snippets:Sh},monkeyocr:{prettyLabel:"MonkeyOCR",repoName:"monkeyocr",repoUrl:"https://github.com/Yuliang-Liu/MonkeyOCR",filter:!1,countDownloads:'path:"Recognition/config.json"'},"diffusion-single-file":{prettyLabel:"Diffusion Single File",repoName:"diffusion-single-file",repoUrl:"https://github.com/comfyanonymous/ComfyUI",filter:!1,countDownloads:'path_extension:"safetensors"'},"seed-story":{prettyLabel:"SEED-Story",repoName:"SEED-Story",repoUrl:"https://github.com/TencentARC/SEED-Story",filter:!1,countDownloads:'path:"cvlm_llama2_tokenizer/tokenizer.model"',snippets:kh},soloaudio:{prettyLabel:"SoloAudio",repoName:"SoloAudio",repoUrl:"https://github.com/WangHelin1997/SoloAudio",filter:!1,countDownloads:'path:"soloaudio_v2.pt"'},songbloom:{prettyLabel:"SongBloom",repoName:"SongBloom",repoUrl:"https://github.com/Cypress-Yang/SongBloom",filter:!1,countDownloads:'path_extension:"pt"'},"stable-baselines3":{prettyLabel:"stable-baselines3",repoName:"stable-baselines3",repoUrl:"https://github.com/huggingface/huggingface_sb3",docsUrl:"https://huggingface.co/docs/hub/stable-baselines3",snippets:Wh,filter:!0,countDownloads:'path_extension:"zip"'},stanza:{prettyLabel:"Stanza",repoName:"stanza",repoUrl:"https://github.com/stanfordnlp/stanza",docsUrl:"https://huggingface.co/docs/hub/stanza",snippets:Oh,filter:!0,countDownloads:'path:"models/default.zip"'},swarmformer:{prettyLabel:"SwarmFormer",repoName:"SwarmFormer",repoUrl:"https://github.com/takara-ai/SwarmFormer",snippets:sg,filter:!1},"f5-tts":{prettyLabel:"F5-TTS",repoName:"F5-TTS",repoUrl:"https://github.com/SWivid/F5-TTS",filter:!1,countDownloads:'path_extension:"safetensors" OR path_extension:"pt"'},genmo:{prettyLabel:"Genmo",repoName:"Genmo",repoUrl:"https://github.com/genmoai/models",filter:!1,countDownloads:'path:"vae_stats.json"'},"tencent-song-generation":{prettyLabel:"SongGeneration",repoName:"SongGeneration",repoUrl:"https://github.com/tencent-ailab/songgeneration",filter:!1,countDownloads:'path:"ckpt/songgeneration_base/model.pt"'},tensorflowtts:{prettyLabel:"TensorFlowTTS",repoName:"TensorFlowTTS",repoUrl:"https://github.com/TensorSpeech/TensorFlowTTS",snippets:wh},tensorrt:{prettyLabel:"TensorRT",repoName:"TensorRT",repoUrl:"https://github.com/NVIDIA/TensorRT",countDownloads:'path_extension:"onnx"'},tabpfn:{prettyLabel:"TabPFN",repoName:"TabPFN",repoUrl:"https://github.com/PriorLabs/TabPFN"},terratorch:{prettyLabel:"TerraTorch",repoName:"TerraTorch",repoUrl:"https://github.com/IBM/terratorch",docsUrl:"https://ibm.github.io/terratorch/",filter:!1,countDownloads:'path_extension:"pt" OR path_extension:"ckpt"',snippets:Uh},"tic-clip":{prettyLabel:"TiC-CLIP",repoName:"TiC-CLIP",repoUrl:"https://github.com/apple/ml-tic-clip",filter:!1,countDownloads:'path_extension:"pt" AND path_prefix:"checkpoints/"'},timesfm:{prettyLabel:"TimesFM",repoName:"timesfm",repoUrl:"https://github.com/google-research/timesfm",filter:!1,countDownloads:'path:"checkpoints/checkpoint_1100000/state/checkpoint" OR path:"checkpoints/checkpoint_2150000/state/checkpoint" OR path_extension:"ckpt"'},timm:{prettyLabel:"timm",repoName:"pytorch-image-models",repoUrl:"https://github.com/rwightman/pytorch-image-models",docsUrl:"https://huggingface.co/docs/hub/timm",snippets:_h,filter:!0,countDownloads:'path:"pytorch_model.bin" OR path:"model.safetensors"'},tirex:{prettyLabel:"TiRex",repoName:"TiRex",repoUrl:"https://github.com/NX-AI/tirex",countDownloads:'path_extension:"ckpt"'},torchgeo:{prettyLabel:"TorchGeo",repoName:"TorchGeo",repoUrl:"https://github.com/microsoft/torchgeo",docsUrl:"https://torchgeo.readthedocs.io/",filter:!1,countDownloads:'path_extension:"pt" OR path_extension:"pth"'},transformers:{prettyLabel:"Transformers",repoName:"🤗/transformers",repoUrl:"https://github.com/huggingface/transformers",docsUrl:"https://huggingface.co/docs/hub/transformers",snippets:Ls,filter:!0},"transformers.js":{prettyLabel:"Transformers.js",repoName:"transformers.js",repoUrl:"https://github.com/huggingface/transformers.js",docsUrl:"https://huggingface.co/docs/hub/transformers-js",snippets:Fh,filter:!0},trellis:{prettyLabel:"Trellis",repoName:"Trellis",repoUrl:"https://github.com/microsoft/TRELLIS",countDownloads:'path_extension:"safetensors"'},ultralytics:{prettyLabel:"ultralytics",repoName:"ultralytics",repoUrl:"https://github.com/ultralytics/ultralytics",docsUrl:"https://github.com/ultralytics/ultralytics",filter:!1,countDownloads:'path_extension:"pt"',snippets:ms},univa:{prettyLabel:"univa",repoName:"univa",repoUrl:"https://github.com/PKU-YuanGroup/UniWorld-V1",snippets:rg,filter:!0,countDownloads:'path:"config.json"'},"uni-3dar":{prettyLabel:"Uni-3DAR",repoName:"Uni-3DAR",repoUrl:"https://github.com/dptech-corp/Uni-3DAR",docsUrl:"https://github.com/dptech-corp/Uni-3DAR",countDownloads:'path_extension:"pt"'},"unity-sentis":{prettyLabel:"unity-sentis",repoName:"unity-sentis",repoUrl:"https://github.com/Unity-Technologies/sentis-samples",snippets:Qh,filter:!0,countDownloads:'path_extension:"sentis"'},sana:{prettyLabel:"Sana",repoName:"Sana",repoUrl:"https://github.com/NVlabs/Sana",countDownloads:'path_extension:"pth"',snippets:Jh},videoprism:{prettyLabel:"VideoPrism",repoName:"VideoPrism",repoUrl:"https://github.com/google-deepmind/videoprism",countDownloads:'path_extension:"npz"',snippets:Zh},"vfi-mamba":{prettyLabel:"VFIMamba",repoName:"VFIMamba",repoUrl:"https://github.com/MCG-NJU/VFIMamba",countDownloads:'path_extension:"pkl"',snippets:Gh},lvface:{prettyLabel:"LVFace",repoName:"LVFace",repoUrl:"https://github.com/bytedance/LVFace",countDownloads:'path_extension:"pt" OR path_extension:"onnx"',snippets:eg},voicecraft:{prettyLabel:"VoiceCraft",repoName:"VoiceCraft",repoUrl:"https://github.com/jasonppy/VoiceCraft",docsUrl:"https://github.com/jasonppy/VoiceCraft",snippets:tg},voxcpm:{prettyLabel:"VoxCPM",repoName:"VoxCPM",repoUrl:"https://github.com/OpenBMB/VoxCPM",snippets:ng,filter:!1},vui:{prettyLabel:"Vui",repoName:"Vui",repoUrl:"https://github.com/vui-ai/vui",countDownloads:'path_extension:"pt"',snippets:ig},vibevoice:{prettyLabel:"VibeVoice",repoName:"VibeVoice",repoUrl:"https://github.com/microsoft/VibeVoice",snippets:Yh,filter:!1},"wan2.2":{prettyLabel:"Wan2.2",repoName:"Wan2.2",repoUrl:"https://github.com/Wan-Video/Wan2.2",countDownloads:'path_filename:"config" AND path_extension:"json"'},wham:{prettyLabel:"WHAM",repoName:"wham",repoUrl:"https://huggingface.co/microsoft/wham",docsUrl:"https://huggingface.co/microsoft/wham/blob/main/README.md",countDownloads:'path_extension:"ckpt"'},whisperkit:{prettyLabel:"WhisperKit",repoName:"WhisperKit",repoUrl:"https://github.com/argmaxinc/WhisperKit",docsUrl:"https://github.com/argmaxinc/WhisperKit?tab=readme-ov-file#homebrew",snippets:Sg,countDownloads:'path_filename:"model" AND path_extension:"mil" AND _exists_:"path_prefix"'},yolov10:{prettyLabel:"YOLOv10",repoName:"YOLOv10",repoUrl:"https://github.com/THU-MIG/yolov10",docsUrl:"https://github.com/THU-MIG/yolov10",countDownloads:'path_extension:"pt" OR path_extension:"safetensors"',snippets:ms},zonos:{prettyLabel:"Zonos",repoName:"Zonos",repoUrl:"https://github.com/Zyphra/Zonos",docsUrl:"https://github.com/Zyphra/Zonos",snippets:Cg,filter:!1},"3dtopia-xl":{prettyLabel:"3DTopia-XL",repoName:"3DTopia-XL",repoUrl:"https://github.com/3DTopia/3DTopia-XL",filter:!1,countDownloads:'path:"model_vae_fp16.pt"',snippets:Pg}};Object.entries(Dg).filter(([e,t])=>t.filter).map(([e])=>e);var M;(function(e){e[e.F32=0]="F32",e[e.F16=1]="F16",e[e.Q4_0=2]="Q4_0",e[e.Q4_1=3]="Q4_1",e[e.Q4_1_SOME_F16=4]="Q4_1_SOME_F16",e[e.Q4_2=5]="Q4_2",e[e.Q4_3=6]="Q4_3",e[e.Q8_0=7]="Q8_0",e[e.Q5_0=8]="Q5_0",e[e.Q5_1=9]="Q5_1",e[e.Q2_K=10]="Q2_K",e[e.Q3_K_S=11]="Q3_K_S",e[e.Q3_K_M=12]="Q3_K_M",e[e.Q3_K_L=13]="Q3_K_L",e[e.Q4_K_S=14]="Q4_K_S",e[e.Q4_K_M=15]="Q4_K_M",e[e.Q5_K_S=16]="Q5_K_S",e[e.Q5_K_M=17]="Q5_K_M",e[e.Q6_K=18]="Q6_K",e[e.IQ2_XXS=19]="IQ2_XXS",e[e.IQ2_XS=20]="IQ2_XS",e[e.Q2_K_S=21]="Q2_K_S",e[e.IQ3_XS=22]="IQ3_XS",e[e.IQ3_XXS=23]="IQ3_XXS",e[e.IQ1_S=24]="IQ1_S",e[e.IQ4_NL=25]="IQ4_NL",e[e.IQ3_S=26]="IQ3_S",e[e.IQ3_M=27]="IQ3_M",e[e.IQ2_S=28]="IQ2_S",e[e.IQ2_M=29]="IQ2_M",e[e.IQ4_XS=30]="IQ4_XS",e[e.IQ1_M=31]="IQ1_M",e[e.BF16=32]="BF16",e[e.Q4_0_4_4=33]="Q4_0_4_4",e[e.Q4_0_4_8=34]="Q4_0_4_8",e[e.Q4_0_8_8=35]="Q4_0_8_8",e[e.TQ1_0=36]="TQ1_0",e[e.TQ2_0=37]="TQ2_0",e[e.MXFP4_MOE=38]="MXFP4_MOE",e[e.Q2_K_XL=1e3]="Q2_K_XL",e[e.Q3_K_XL=1001]="Q3_K_XL",e[e.Q4_K_XL=1002]="Q4_K_XL",e[e.Q5_K_XL=1003]="Q5_K_XL",e[e.Q6_K_XL=1004]="Q6_K_XL",e[e.Q8_K_XL=1005]="Q8_K_XL"})(M||(M={}));const $g=Object.values(M).filter(e=>typeof e=="string");new RegExp(`(?<quant>${$g.join("|")})(_(?<sizeVariation>[A-Z]+))?`);M.F32,M.BF16,M.F16,M.Q8_K_XL,M.Q8_0,M.Q6_K_XL,M.Q6_K,M.Q5_K_XL,M.Q5_K_M,M.Q5_K_S,M.Q5_0,M.Q5_1,M.Q4_K_XL,M.Q4_K_M,M.Q4_K_S,M.IQ4_NL,M.IQ4_XS,M.Q4_0_4_4,M.Q4_0_4_8,M.Q4_0_8_8,M.Q4_1_SOME_F16,M.Q4_0,M.Q4_1,M.Q4_2,M.Q4_3,M.MXFP4_MOE,M.Q3_K_XL,M.Q3_K_L,M.Q3_K_M,M.Q3_K_S,M.IQ3_M,M.IQ3_S,M.IQ3_XS,M.IQ3_XXS,M.Q2_K_XL,M.Q2_K,M.Q2_K_S,M.IQ2_M,M.IQ2_S,M.IQ2_XS,M.IQ2_XXS,M.IQ1_S,M.IQ1_M,M.TQ1_0,M.TQ2_0;var fs;(function(e){e[e.F32=0]="F32",e[e.F16=1]="F16",e[e.Q4_0=2]="Q4_0",e[e.Q4_1=3]="Q4_1",e[e.Q5_0=6]="Q5_0",e[e.Q5_1=7]="Q5_1",e[e.Q8_0=8]="Q8_0",e[e.Q8_1=9]="Q8_1",e[e.Q2_K=10]="Q2_K",e[e.Q3_K=11]="Q3_K",e[e.Q4_K=12]="Q4_K",e[e.Q5_K=13]="Q5_K",e[e.Q6_K=14]="Q6_K",e[e.Q8_K=15]="Q8_K",e[e.IQ2_XXS=16]="IQ2_XXS",e[e.IQ2_XS=17]="IQ2_XS",e[e.IQ3_XXS=18]="IQ3_XXS",e[e.IQ1_S=19]="IQ1_S",e[e.IQ4_NL=20]="IQ4_NL",e[e.IQ3_S=21]="IQ3_S",e[e.IQ2_S=22]="IQ2_S",e[e.IQ4_XS=23]="IQ4_XS",e[e.I8=24]="I8",e[e.I16=25]="I16",e[e.I32=26]="I32",e[e.I64=27]="I64",e[e.F64=28]="F64",e[e.IQ1_M=29]="IQ1_M",e[e.BF16=30]="BF16",e[e.TQ1_0=34]="TQ1_0",e[e.TQ2_0=35]="TQ2_0",e[e.MXFP4=39]="MXFP4"})(fs||(fs={}));const Lg={js:{fetch:{basic:`async function query(data) {
	const response = await fetch(
		"{{ fullUrl }}",
		{
			headers: {
				Authorization: "{{ authorizationHeader }}",
				"Content-Type": "application/json",
{% if billTo %}
				"X-HF-Bill-To": "{{ billTo }}",
{% endif %}			},
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
	return result;
}

query({ inputs: {{ providerInputs.asObj.inputs }} }).then((response) => {
    console.log(JSON.stringify(response));
});`,basicAudio:`async function query(data) {
	const response = await fetch(
		"{{ fullUrl }}",
		{
			headers: {
				Authorization: "{{ authorizationHeader }}",
				"Content-Type": "audio/flac",
{% if billTo %}
				"X-HF-Bill-To": "{{ billTo }}",
{% endif %}			},
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
	return result;
}

query({ inputs: {{ providerInputs.asObj.inputs }} }).then((response) => {
    console.log(JSON.stringify(response));
});`,basicImage:`async function query(data) {
	const response = await fetch(
		"{{ fullUrl }}",
		{
			headers: {
				Authorization: "{{ authorizationHeader }}",
				"Content-Type": "image/jpeg",
{% if billTo %}
				"X-HF-Bill-To": "{{ billTo }}",
{% endif %}			},
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
	return result;
}

query({ inputs: {{ providerInputs.asObj.inputs }} }).then((response) => {
    console.log(JSON.stringify(response));
});`,conversational:`async function query(data) {
	const response = await fetch(
		"{{ fullUrl }}",
		{
			headers: {
				Authorization: "{{ authorizationHeader }}",
				"Content-Type": "application/json",
{% if billTo %}
				"X-HF-Bill-To": "{{ billTo }}",
{% endif %}			},
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
	return result;
}

query({ 
{{ autoInputs.asTsString }}
}).then((response) => {
    console.log(JSON.stringify(response));
});`,imageToImage:`const image = fs.readFileSync("{{inputs.asObj.inputs}}");

async function query(data) {
	const response = await fetch(
		"{{ fullUrl }}",
		{
			headers: {
				Authorization: "{{ authorizationHeader }}",
				"Content-Type": "image/jpeg",
{% if billTo %}
				"X-HF-Bill-To": "{{ billTo }}",
{% endif %}			},
			method: "POST",
			body: {
				"inputs": \`data:image/png;base64,\${data.inputs.encode("base64")}\`,
				"parameters": data.parameters,
			}
		}
	);
	const result = await response.json();
	return result;
}

query({ 
	inputs: image,
	parameters: {
		prompt: "{{ inputs.asObj.parameters.prompt }}",
	}
}).then((response) => {
    console.log(JSON.stringify(response));
});`,imageToVideo:`const image = fs.readFileSync("{{inputs.asObj.inputs}}");

async function query(data) {
	const response = await fetch(
		"{{ fullUrl }}",
		{
			headers: {
				Authorization: "{{ authorizationHeader }}",
				"Content-Type": "image/jpeg",
{% if billTo %}
				"X-HF-Bill-To": "{{ billTo }}",
{% endif %}			},
			method: "POST",
			body: {
				"image_url": \`data:image/png;base64,\${data.image.encode("base64")}\`,
				"prompt": data.prompt,
			}
		}
	);
	const result = await response.json();
	return result;
}

query({
	"image": image,
	"prompt": "{{inputs.asObj.parameters.prompt}}",
}).then((response) => {
    // Use video
});`,textToAudio:`{% if model.library_name == "transformers" %}
async function query(data) {
	const response = await fetch(
		"{{ fullUrl }}",
		{
			headers: {
				Authorization: "{{ authorizationHeader }}",
				"Content-Type": "application/json",
{% if billTo %}
				"X-HF-Bill-To": "{{ billTo }}",
{% endif %}			},
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.blob();
    return result;
}

query({ inputs: {{ providerInputs.asObj.inputs }} }).then((response) => {
    // Returns a byte object of the Audio wavform. Use it directly!
});
{% else %}
async function query(data) {
	const response = await fetch(
		"{{ fullUrl }}",
		{
			headers: {
				Authorization: "{{ authorizationHeader }}",
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify(data),
		}
	);
    const result = await response.json();
    return result;
}

query({ inputs: {{ providerInputs.asObj.inputs }} }).then((response) => {
    console.log(JSON.stringify(response));
});
{% endif %} `,textToImage:`async function query(data) {
	const response = await fetch(
		"{{ fullUrl }}",
		{
			headers: {
				Authorization: "{{ authorizationHeader }}",
				"Content-Type": "application/json",
{% if billTo %}
				"X-HF-Bill-To": "{{ billTo }}",
{% endif %}			},
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.blob();
	return result;
}


query({ {{ providerInputs.asTsString }} }).then((response) => {
    // Use image
});`,textToSpeech:`{% if model.library_name == "transformers" %}
async function query(data) {
	const response = await fetch(
		"{{ fullUrl }}",
		{
			headers: {
				Authorization: "{{ authorizationHeader }}",
				"Content-Type": "application/json",
{% if billTo %}
				"X-HF-Bill-To": "{{ billTo }}",
{% endif %}			},
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.blob();
    return result;
}

query({ text: {{ inputs.asObj.inputs }} }).then((response) => {
    // Returns a byte object of the Audio wavform. Use it directly!
});
{% else %}
async function query(data) {
	const response = await fetch(
		"{{ fullUrl }}",
		{
			headers: {
				Authorization: "{{ authorizationHeader }}",
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify(data),
		}
	);
    const result = await response.json();
    return result;
}

query({ text: {{ inputs.asObj.inputs }} }).then((response) => {
    console.log(JSON.stringify(response));
});
{% endif %} `,zeroShotClassification:`async function query(data) {
    const response = await fetch(
		"{{ fullUrl }}",
        {
            headers: {
				Authorization: "{{ authorizationHeader }}",
                "Content-Type": "application/json",
{% if billTo %}
                "X-HF-Bill-To": "{{ billTo }}",
{% endif %}         },
            method: "POST",
            body: JSON.stringify(data),
        }
    );
    const result = await response.json();
    return result;
}

query({
    inputs: {{ providerInputs.asObj.inputs }},
    parameters: { candidate_labels: ["refund", "legal", "faq"] }
}).then((response) => {
    console.log(JSON.stringify(response));
});`},"huggingface.js":{basic:`import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient("{{ accessToken }}");

const output = await client.{{ methodName }}({
{% if endpointUrl %}
    endpointUrl: "{{ endpointUrl }}",
{% endif %}
	model: "{{ model.id }}",
	inputs: {{ inputs.asObj.inputs }},
	provider: "{{ provider }}",
}{% if billTo %}, {
	billTo: "{{ billTo }}",
}{% endif %});

console.log(output);`,basicAudio:`import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient("{{ accessToken }}");

const data = fs.readFileSync({{inputs.asObj.inputs}});

const output = await client.{{ methodName }}({
{% if endpointUrl %}
    endpointUrl: "{{ endpointUrl }}",
{% endif %}
	data,
	model: "{{ model.id }}",
	provider: "{{ provider }}",
}{% if billTo %}, {
	billTo: "{{ billTo }}",
}{% endif %});

console.log(output);`,basicImage:`import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient("{{ accessToken }}");

const data = fs.readFileSync({{inputs.asObj.inputs}});

const output = await client.{{ methodName }}({
{% if endpointUrl %}
    endpointUrl: "{{ endpointUrl }}",
{% endif %}
	data,
	model: "{{ model.id }}",
	provider: "{{ provider }}",
}{% if billTo %}, {
	billTo: "{{ billTo }}",
}{% endif %});

console.log(output);`,conversational:`import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient("{{ accessToken }}");

const chatCompletion = await client.chatCompletion({
{% if endpointUrl %}
    endpointUrl: "{{ endpointUrl }}",
{% endif %}
    provider: "{{ provider }}",
    model: "{{ model.id }}",
{{ inputs.asTsString }}
}{% if billTo %}, {
    billTo: "{{ billTo }}",
}{% endif %});

console.log(chatCompletion.choices[0].message);`,conversationalStream:`import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient("{{ accessToken }}");

let out = "";

const stream = client.chatCompletionStream({
{% if endpointUrl %}
    endpointUrl: "{{ endpointUrl }}",
{% endif %}
    provider: "{{ provider }}",
    model: "{{ model.id }}",
{{ inputs.asTsString }}
}{% if billTo %}, {
    billTo: "{{ billTo }}",
}{% endif %});

for await (const chunk of stream) {
	if (chunk.choices && chunk.choices.length > 0) {
		const newContent = chunk.choices[0].delta.content;
		out += newContent;
		console.log(newContent);
	}
}`,imageToImage:`import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient("{{ accessToken }}");

const data = fs.readFileSync("{{inputs.asObj.inputs}}");

const image = await client.imageToImage({
{% if endpointUrl %}
	endpointUrl: "{{ endpointUrl }}",
{% endif %}
	provider: "{{provider}}",
	model: "{{model.id}}",
	inputs: data,
	parameters: { prompt: "{{inputs.asObj.parameters.prompt}}", },
}{% if billTo %}, {
	billTo: "{{ billTo }}",
}{% endif %});
/// Use the generated image (it's a Blob)
// For example, you can save it to a file or display it in an image element
`,imageToVideo:`import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient("{{ accessToken }}");

const data = fs.readFileSync("{{inputs.asObj.inputs}}");

const video = await client.imageToVideo({
{% if endpointUrl %}
	endpointUrl: "{{ endpointUrl }}",
{% endif %}
	provider: "{{provider}}",
	model: "{{model.id}}",
	inputs: data,
	parameters: { prompt: "{{inputs.asObj.parameters.prompt}}", },
}{% if billTo %}, {
	billTo: "{{ billTo }}",
}{% endif %});

/// Use the generated video (it's a Blob)
// For example, you can save it to a file or display it in a video element
`,textToImage:`import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient("{{ accessToken }}");

const image = await client.textToImage({
{% if endpointUrl %}
    endpointUrl: "{{ endpointUrl }}",
{% endif %}
    provider: "{{ provider }}",
    model: "{{ model.id }}",
	inputs: {{ inputs.asObj.inputs }},
	parameters: { num_inference_steps: 5 },
}{% if billTo %}, {
    billTo: "{{ billTo }}",
}{% endif %});
/// Use the generated image (it's a Blob)`,textToSpeech:`import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient("{{ accessToken }}");

const audio = await client.textToSpeech({
{% if endpointUrl %}
    endpointUrl: "{{ endpointUrl }}",
{% endif %}
    provider: "{{ provider }}",
    model: "{{ model.id }}",
	inputs: {{ inputs.asObj.inputs }},
}{% if billTo %}, {
    billTo: "{{ billTo }}",
}{% endif %});
// Use the generated audio (it's a Blob)`,textToVideo:`import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient("{{ accessToken }}");

const video = await client.textToVideo({
{% if endpointUrl %}
    endpointUrl: "{{ endpointUrl }}",
{% endif %}
    provider: "{{ provider }}",
    model: "{{ model.id }}",
	inputs: {{ inputs.asObj.inputs }},
}{% if billTo %}, {
    billTo: "{{ billTo }}",
}{% endif %});
// Use the generated video (it's a Blob)`},openai:{conversational:`import { OpenAI } from "openai";

const client = new OpenAI({
	baseURL: "{{ baseUrl }}",
	apiKey: "{{ accessToken }}",
{% if billTo %}
	defaultHeaders: {
		"X-HF-Bill-To": "{{ billTo }}" 
	}
{% endif %}
});

const chatCompletion = await client.chat.completions.create({
	model: "{{ providerModelId }}",
{{ inputs.asTsString }}
});

console.log(chatCompletion.choices[0].message);`,conversationalStream:`import { OpenAI } from "openai";

const client = new OpenAI({
	baseURL: "{{ baseUrl }}",
	apiKey: "{{ accessToken }}",
{% if billTo %}
    defaultHeaders: {
		"X-HF-Bill-To": "{{ billTo }}" 
	}
{% endif %}
});

const stream = await client.chat.completions.create({
    model: "{{ providerModelId }}",
{{ inputs.asTsString }}
    stream: true,
});

for await (const chunk of stream) {
    process.stdout.write(chunk.choices[0]?.delta?.content || "");
}`}},python:{fal_client:{imageToImage:`{%if provider == "fal-ai" %}
import fal_client
import base64

def on_queue_update(update):
    if isinstance(update, fal_client.InProgress):
        for log in update.logs:
           print(log["message"])

with open("{{inputs.asObj.inputs}}", "rb") as image_file:
    image_base_64 = base64.b64encode(image_file.read()).decode('utf-8')

result = fal_client.subscribe(
    "fal-ai/flux-kontext/dev",
    arguments={
        "prompt": f"data:image/png;base64,{image_base_64}",
        "image_url": "{{ providerInputs.asObj.inputs }}",
    },
    with_logs=True,
    on_queue_update=on_queue_update,
)
print(result)
{%endif%}
`,imageToVideo:`{%if provider == "fal-ai" %}
import fal_client
import base64

def on_queue_update(update):
    if isinstance(update, fal_client.InProgress):
        for log in update.logs:
           print(log["message"])

with open("{{inputs.asObj.inputs}}", "rb") as image_file:
    image_base_64 = base64.b64encode(image_file.read()).decode('utf-8')

result = fal_client.subscribe(
    "{{model.id}}",
    arguments={
        "image_url": f"data:image/png;base64,{image_base_64}",
        "prompt": "{{inputs.asObj.parameters.prompt}}",
    },
    with_logs=True,
    on_queue_update=on_queue_update,
)
print(result)
{%endif%}
`,textToImage:`{% if provider == "fal-ai" %}
import fal_client

{% if providerInputs.asObj.loras is defined and providerInputs.asObj.loras != none %}
result = fal_client.subscribe(
    "{{ providerModelId }}",
    arguments={
        "prompt": {{ inputs.asObj.inputs }},
        "loras":{{ providerInputs.asObj.loras | tojson }},
    },
)
{% else %}
result = fal_client.subscribe(
    "{{ providerModelId }}",
    arguments={
        "prompt": {{ inputs.asObj.inputs }},
    },
)
{% endif %} 
print(result)
{% endif %} `},huggingface_hub:{basic:`result = client.{{ methodName }}(
    {{ inputs.asObj.inputs }},
    model="{{ model.id }}",
)`,basicAudio:'output = client.{{ methodName }}({{ inputs.asObj.inputs }}, model="{{ model.id }}")',basicImage:'output = client.{{ methodName }}({{ inputs.asObj.inputs }}, model="{{ model.id }}")',conversational:`completion = client.chat.completions.create(
    model="{{ model.id }}",
{{ inputs.asPythonString }}
)

print(completion.choices[0].message) `,conversationalStream:`stream = client.chat.completions.create(
    model="{{ model.id }}",
{{ inputs.asPythonString }}
    stream=True,
)

for chunk in stream:
    print(chunk.choices[0].delta.content, end="") `,documentQuestionAnswering:`output = client.document_question_answering(
    "{{ inputs.asObj.image }}",
    question="{{ inputs.asObj.question }}",
    model="{{ model.id }}",
) `,imageToImage:`with open("{{ inputs.asObj.inputs }}", "rb") as image_file:
   input_image = image_file.read()

# output is a PIL.Image object
image = client.image_to_image(
    input_image,
    prompt="{{ inputs.asObj.parameters.prompt }}",
    model="{{ model.id }}",
)
`,imageToVideo:`with open("{{ inputs.asObj.inputs }}", "rb") as image_file:
   input_image = image_file.read()

video = client.image_to_video(
    input_image,
    prompt="{{ inputs.asObj.parameters.prompt }}",
    model="{{ model.id }}",
) 
`,importInferenceClient:`from huggingface_hub import InferenceClient

client = InferenceClient(
{% if endpointUrl %}
    base_url="{{ baseUrl }}",
{% endif %}
    provider="{{ provider }}",
    api_key="{{ accessToken }}",
{% if billTo %}
    bill_to="{{ billTo }}",
{% endif %}
)`,questionAnswering:`answer = client.question_answering(
    question="{{ inputs.asObj.question }}",
    context="{{ inputs.asObj.context }}",
    model="{{ model.id }}",
) `,tableQuestionAnswering:`answer = client.table_question_answering(
    query="{{ inputs.asObj.query }}",
    table={{ inputs.asObj.table }},
    model="{{ model.id }}",
) `,textToImage:`# output is a PIL.Image object
image = client.text_to_image(
    {{ inputs.asObj.inputs }},
    model="{{ model.id }}",
) `,textToSpeech:`# audio is returned as bytes
audio = client.text_to_speech(
    {{ inputs.asObj.inputs }},
    model="{{ model.id }}",
) 
`,textToVideo:`video = client.text_to_video(
    {{ inputs.asObj.inputs }},
    model="{{ model.id }}",
) `},openai:{conversational:`from openai import OpenAI

client = OpenAI(
    base_url="{{ baseUrl }}",
    api_key="{{ accessToken }}",
{% if billTo %}
    default_headers={
        "X-HF-Bill-To": "{{ billTo }}"
    }
{% endif %}
)

completion = client.chat.completions.create(
    model="{{ providerModelId }}",
{{ inputs.asPythonString }}
)

print(completion.choices[0].message) `,conversationalStream:`from openai import OpenAI

client = OpenAI(
    base_url="{{ baseUrl }}",
    api_key="{{ accessToken }}",
{% if billTo %}
    default_headers={
        "X-HF-Bill-To": "{{ billTo }}"
    }
{% endif %}
)

stream = client.chat.completions.create(
    model="{{ providerModelId }}",
{{ inputs.asPythonString }}
    stream=True,
)

for chunk in stream:
    print(chunk.choices[0].delta.content, end="")`},requests:{basic:`def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.json()

output = query({
    "inputs": {{ providerInputs.asObj.inputs }},
}) `,basicAudio:`def query(filename):
    with open(filename, "rb") as f:
        data = f.read()
    response = requests.post(API_URL, headers={"Content-Type": "audio/flac", **headers}, data=data)
    return response.json()

output = query({{ providerInputs.asObj.inputs }})`,basicImage:`def query(filename):
    with open(filename, "rb") as f:
        data = f.read()
    response = requests.post(API_URL, headers={"Content-Type": "image/jpeg", **headers}, data=data)
    return response.json()

output = query({{ providerInputs.asObj.inputs }})`,conversational:`def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.json()

response = query({
{{ autoInputs.asJsonString }}
})

print(response["choices"][0]["message"])`,conversationalStream:`def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload, stream=True)
    for line in response.iter_lines():
        if not line.startswith(b"data:"):
            continue
        if line.strip() == b"data: [DONE]":
            return
        yield json.loads(line.decode("utf-8").lstrip("data:").rstrip("/n"))

chunks = query({
{{ autoInputs.asJsonString }},
    "stream": True,
})

for chunk in chunks:
    print(chunk["choices"][0]["delta"]["content"], end="")`,documentQuestionAnswering:`def query(payload):
    with open(payload["image"], "rb") as f:
        img = f.read()
        payload["image"] = base64.b64encode(img).decode("utf-8")
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.json()

output = query({
    "inputs": {
        "image": "{{ inputs.asObj.image }}",
        "question": "{{ inputs.asObj.question }}",
    },
}) `,imageToImage:`
def query(payload):
    with open(payload["inputs"], "rb") as f:
        img = f.read()
        payload["inputs"] = base64.b64encode(img).decode("utf-8")
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.content

image_bytes = query({
{{ providerInputs.asJsonString }}
})

# You can access the image with PIL.Image for example
import io
from PIL import Image
image = Image.open(io.BytesIO(image_bytes)) `,imageToVideo:`
def query(payload):
    with open(payload["inputs"], "rb") as f:
        img = f.read()
        payload["inputs"] = base64.b64encode(img).decode("utf-8")
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.content

video_bytes = query({
{{ inputs.asJsonString }}
})
`,importRequests:`{% if importBase64 %}
import base64
{% endif %}
{% if importJson %}
import json
{% endif %}
import requests

API_URL = "{{ fullUrl }}"
headers = {
    "Authorization": "{{ authorizationHeader }}",
{% if billTo %}
    "X-HF-Bill-To": "{{ billTo }}"
{% endif %}
}`,tabular:`def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.content

response = query({
    "inputs": {
        "data": {{ providerInputs.asObj.inputs }}
    },
}) `,textToAudio:`{% if model.library_name == "transformers" %}
def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.content

audio_bytes = query({
    "inputs": {{ inputs.asObj.inputs }},
})
# You can access the audio with IPython.display for example
from IPython.display import Audio
Audio(audio_bytes)
{% else %}
def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.json()

audio, sampling_rate = query({
    "inputs": {{ inputs.asObj.inputs }},
})
# You can access the audio with IPython.display for example
from IPython.display import Audio
Audio(audio, rate=sampling_rate)
{% endif %} `,textToImage:`{% if provider == "hf-inference" %}
def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.content

image_bytes = query({
    "inputs": {{ providerInputs.asObj.inputs }},
})

# You can access the image with PIL.Image for example
import io
from PIL import Image
image = Image.open(io.BytesIO(image_bytes))
{% endif %}`,textToSpeech:`{% if model.library_name == "transformers" %}
def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.content

audio_bytes = query({
    "text": {{ inputs.asObj.inputs }},
})
# You can access the audio with IPython.display for example
from IPython.display import Audio
Audio(audio_bytes)
{% else %}
def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.json()

audio, sampling_rate = query({
    "text": {{ inputs.asObj.inputs }},
})
# You can access the audio with IPython.display for example
from IPython.display import Audio
Audio(audio, rate=sampling_rate)
{% endif %} `,zeroShotClassification:`def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.json()

output = query({
    "inputs": {{ providerInputs.asObj.inputs }},
    "parameters": {"candidate_labels": ["refund", "legal", "faq"]},
}) `,zeroShotImageClassification:`def query(data):
    with open(data["image_path"], "rb") as f:
        img = f.read()
    payload={
        "parameters": data["parameters"],
        "inputs": base64.b64encode(img).decode("utf-8")
    }
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.json()

output = query({
    "image_path": {{ providerInputs.asObj.inputs }},
    "parameters": {"candidate_labels": ["cat", "dog", "llama"]},
}) `}},sh:{curl:{basic:`curl {{ fullUrl }} \\
    -X POST \\
    -H 'Authorization: {{ authorizationHeader }}' \\
    -H 'Content-Type: application/json' \\
{% if billTo %}
    -H 'X-HF-Bill-To: {{ billTo }}' \\
{% endif %}
    -d '{
{{ providerInputs.asCurlString }}
    }'`,basicAudio:`curl {{ fullUrl }} \\
    -X POST \\
    -H 'Authorization: {{ authorizationHeader }}' \\
    -H 'Content-Type: audio/flac' \\
{% if billTo %}
    -H 'X-HF-Bill-To: {{ billTo }}' \\
{% endif %}
    --data-binary @{{ providerInputs.asObj.inputs }}`,basicImage:`curl {{ fullUrl }} \\
    -X POST \\
    -H 'Authorization: {{ authorizationHeader }}' \\
    -H 'Content-Type: image/jpeg' \\
{% if billTo %}
    -H 'X-HF-Bill-To: {{ billTo }}' \\
{% endif %}
    --data-binary @{{ providerInputs.asObj.inputs }}`,conversational:`curl {{ fullUrl }} \\
    -H 'Authorization: {{ authorizationHeader }}' \\
    -H 'Content-Type: application/json' \\
{% if billTo %}
    -H 'X-HF-Bill-To: {{ billTo }}' \\
{% endif %}
    -d '{
{{ autoInputs.asCurlString }},
        "stream": false
    }'`,conversationalStream:`curl {{ fullUrl }} \\
    -H 'Authorization: {{ authorizationHeader }}' \\
    -H 'Content-Type: application/json' \\
{% if billTo %}
    -H 'X-HF-Bill-To: {{ billTo }}' \\
{% endif %}
    -d '{
{{ autoInputs.asCurlString }},
        "stream": true
    }'`,zeroShotClassification:`curl {{ fullUrl }} \\
    -X POST \\
    -d '{"inputs": {{ providerInputs.asObj.inputs }}, "parameters": {"candidate_labels": ["refund", "legal", "faq"]}}' \\
    -H 'Content-Type: application/json' \\
    -H 'Authorization: {{ authorizationHeader }}'
{% if billTo %} \\
    -H 'X-HF-Bill-To: {{ billTo }}'
{% endif %}`}}},js=(e,t,n)=>{var o,r;const a=(r=(o=Lg[e])==null?void 0:o[t])==null?void 0:r[n];if(!a)throw new Error(`Template not found: ${e}/${t}/${n}`);return d=>new Su(a).render({...d})};js("python","huggingface_hub","importInferenceClient");js("python","requests","importRequests");let B="landing",g=null,Rt=[],hs=!1;const st=document.querySelector("#app");function F(){try{const e=document.getElementById("app");if(!e){console.error('No se encontró el elemento con ID "app"');return}e.innerHTML="",B==="landing"&&!g?gs():B==="login"?Og():B==="register"?Ng():B==="dashboard"&&g?Bg():B==="projects"&&g?qg():B==="pricing"&&g?Ug():B==="teams"&&g?Vg():B==="calendar"&&g?Kg():B==="settings"&&g?Zg():B==="profile"&&g?Gg():(B="landing",gs()),g&&setTimeout(jg,0)}catch(e){console.error("Error en la función render:",e);const t=document.getElementById("app");t&&(t.innerHTML=`
        <div class="alert alert-danger m-4">
          <h4>Error al cargar la página</h4>
          <p>Por favor, recarga la página. Si el problema persiste, contacta al soporte.</p>
          <p><small>${e.message}</small></p>
        </div>
      `)}}function jg(){document.querySelectorAll(".nav-link").forEach(n=>{n.classList.remove("active"),n.style.backgroundColor=""});const t={dashboard:"navDashboard",projects:"navProjects",teams:"navTeams",calendar:"navCalendar",settings:"navSettings"}[B];if(t){const n=document.getElementById(t);n&&(n.classList.add("active"),n.style.backgroundColor="rgba(255,255,255,0.1)")}}async function Rg(e){throw new Error("Token de Hugging Face no configurado. Por favor, agrega VITE_HF_TOKEN a tu archivo .env.development")}async function Mg(e){if(!e||e.length===0)return console.log("No hay tareas para analizar"),e;if(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1")try{const n="tu_token_aqui",a=new Lp(n),r=`Eres un experto en gestión de proyectos. Analiza estas tareas y clasifícalas por dificultad según estos criterios:

**CRITERIOS DE DIFICULTAD:**

🟢 FÁCIL (1): 
- Tareas simples y rápidas (menos de 30 minutos)
- No requieren conocimientos técnicos avanzados
- Ejemplos: enviar email, actualizar documento, hacer llamada, revisar texto

🟡 MEDIA (2):
- Tareas que requieren 1-3 horas
- Conocimientos técnicos básicos o intermedios
- Ejemplos: crear presentación, configurar herramienta, investigar tema, escribir artículo

🔴 DIFÍCIL (3):
- Tareas complejas (más de 3 horas)
- Requieren conocimientos técnicos avanzados
- Múltiples pasos o dependencias
- Ejemplos: desarrollar API, diseñar arquitectura, implementar base de datos, crear sistema completo

**TAREAS A ANALIZAR:**
${e.map((k,v)=>`${v+1}. ${k.name}`).join(`
`)}

**INSTRUCCIONES:**
- Analiza cada tarea considerando: complejidad técnica, tiempo estimado, conocimientos requeridos
- Responde SOLO con números (1, 2 o 3) separados por comas
- Un número por cada tarea en el mismo orden
- NO agregues explicaciones, SOLO números

Ejemplo de respuesta correcta: 1,3,2,1,3`,h=(await a.chatCompletion({model:"meta-llama/Llama-3.2-3B-Instruct",messages:[{role:"system",content:"Eres un experto en gestión de proyectos que clasifica tareas por dificultad de forma precisa y consistente."},{role:"user",content:r}],max_tokens:100,temperature:.2})).choices[0].message.content.match(/[1-3]/g)||[];return e.forEach((k,v)=>{k.difficulty=parseInt(h[v])||2;const D={1:"🟢 Fácil",2:"🟡 Media",3:"🔴 Difícil"};k.difficultyLabel=D[k.difficulty]}),e.sort((k,v)=>(k.difficulty||0)-(v.difficulty||0))}catch(n){throw console.error("Error en desarrollo:",n),new Error("Error al analizar tareas en modo desarrollo")}else try{const n=await fetch("/api/analyze-tasks",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tasks:e})});if(!n.ok)throw new Error("Error en el análisis de IA");return(await n.json()).sortedTasks}catch(n){throw console.error("Error:",n),n}}function gs(){st.innerHTML=`
    <!-- Navbar -->
    <nav class="navbar navbar-dark" style="background-color: #2d3748;">
      <div class="container-fluid px-4">
        <span class="navbar-brand mb-0 h1 fs-2 fw-bold">ZeroChaos</span>
        <div class="d-flex gap-2">
          <button class="btn btn-primary px-4" id="btnLogin">
            Login
          </button>
          <button class="btn btn-light px-4" id="btnRegister">
            Register
          </button>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <div class="d-flex align-items-center justify-content-center" 
         style="min-height: calc(100vh - 72px); background-color: #e2e8f0;">
      <div class="text-center px-4">
        <h1 class="display-3 fw-bold mb-3" style="color: #1a202c;">
          Organiza tus proyectos con
        </h1>
        <h2 class="display-3 fw-bold mb-4" style="color: #0d6efd;">
          ZeroChaos
        </h2>
        <p class="fs-4 mb-5" style="color: #4a5568; max-width: 700px; margin: 0 auto;">
          Un plataforma moderna de gestion de proyectos para mejorar tu productividad
        </p>
        <button class="btn btn-primary btn-lg px-5 py-3" id="btnEmpezar">
          Empezar
        </button>
      </div>
    </div>
  `,document.getElementById("btnLogin").addEventListener("click",()=>{B="login",F()}),document.getElementById("btnRegister").addEventListener("click",()=>{B="register",F()}),document.getElementById("btnEmpezar").addEventListener("click",()=>{B="login",F()})}function Og(){st.innerHTML=`
    <div class="min-vh-100 d-flex align-items-center justify-content-center p-4" 
         style="background: linear-gradient(135deg, #0d6efd 0%, #4c1d95 100%);">
      <div style="width: 100%; max-width: 450px;">
        <div class="text-center mb-4">
          <h1 class="display-4 fw-bold text-white mb-2">ZeroChaos</h1>
          <p class="text-white-50">Gestor de Proyectos Inteligente</p>
        </div>

        <div class="card shadow-lg">
          <div class="card-body p-4">
            <h2 class="h3 fw-bold mb-4">Iniciar Sesión</h2>

            <div id="loginError" class="alert alert-danger d-none"></div>

            <div class="mb-3">
              <label class="form-label fw-semibold">Email</label>
              <input type="email" class="form-control form-control-lg" 
                     id="loginEmail" placeholder="correo@ejemplo.com">
            </div>

            <div class="mb-4">
              <label class="form-label fw-semibold">Contraseña</label>
              <input type="password" class="form-control form-control-lg" 
                     id="loginPassword" placeholder="••••••">
            </div>

            <button class="btn btn-primary btn-lg w-100 mb-3" id="btnLoginSubmit">
              Iniciar Sesión
            </button>

            <p class="text-center mb-0">
              ¿No tienes cuenta? 
              <a href="#" class="text-primary fw-semibold text-decoration-none" id="linkRegister">
                Regístrate aquí
              </a>
            </p>
          </div>
        </div>

        <div class="alert alert-info mt-3">
          <p class="fw-semibold mb-2">Para probar, registra un usuario primero:</p>
          <p class="mb-0">Luego inicia sesión con tus credenciales</p>
        </div>
      </div>
    </div>
  `,document.getElementById("btnLoginSubmit").addEventListener("click",ys),document.getElementById("loginPassword").addEventListener("keypress",e=>{e.key==="Enter"&&ys()}),document.getElementById("linkRegister").addEventListener("click",e=>{e.preventDefault(),B="register",F()})}function Ng(){st.innerHTML=`
    <div class="min-vh-100 d-flex align-items-center justify-content-center p-4" 
         style="background: linear-gradient(135deg, #0d6efd 0%, #4c1d95 100%);">
      <div style="width: 100%; max-width: 450px;">
        <div class="text-center mb-4">
          <h1 class="display-4 fw-bold text-white mb-2">ZeroChaos</h1>
          <p class="text-white-50">Gestiona tus proyectos sin caos</p>
        </div>

        <div class="card shadow-lg">
          <div class="card-body p-4">
            <h2 class="h3 fw-bold mb-4">Crear Cuenta</h2>

            <div id="registerError" class="alert alert-danger d-none"></div>

            <div class="mb-3">
              <label class="form-label fw-semibold">Nombre Completo</label>
              <input type="text" class="form-control form-control-lg" 
                     id="registerName" placeholder="Tu nombre">
            </div>

            <div class="mb-3">
              <label class="form-label fw-semibold">Email</label>
              <input type="email" class="form-control form-control-lg" 
                     id="registerEmail" placeholder="correo@ejemplo.com">
            </div>

            <div class="mb-3">
              <label class="form-label fw-semibold">Contraseña</label>
              <input type="password" class="form-control form-control-lg" 
                     id="registerPassword" placeholder="••••••">
            </div>

            <div class="mb-4">
              <label class="form-label fw-semibold">Confirmar Contraseña</label>
              <input type="password" class="form-control form-control-lg" 
                     id="registerConfirmPassword" placeholder="••••••">
            </div>

            <button class="btn btn-success btn-lg w-100 mb-3" id="btnRegisterSubmit">
              Registrarse
            </button>

            <p class="text-center mb-0">
              ¿Ya tienes cuenta? 
              <a href="#" class="text-primary fw-semibold text-decoration-none" id="linkLogin">
                Inicia sesión aquí
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  `,document.getElementById("btnRegisterSubmit").addEventListener("click",db),document.getElementById("linkLogin").addEventListener("click",e=>{e.preventDefault(),B="login",F()})}function Bg(){st.innerHTML=`
    <div style="display: flex; min-height: 100vh;">
      ${qt()}

      <!-- Main Content -->
      <div class="flex-grow-1" style="background-color: #f8f9fa;">
        <!-- Top Bar -->
        <div class="bg-white border-bottom p-3">
          <div class="container-fluid">
            <div class="row align-items-center">
              <div class="col-md-6">
                <div class="input-group">
                  <span class="input-group-text bg-white border-end-0">
                    <i class="bi bi-search"></i>
                  </span>
                  <input type="text" class="form-control border-start-0" placeholder="Search">
                </div>
              </div>
              <div class="col-md-6 text-end">
                <button class="btn btn-light rounded-circle me-2">
                  <i class="bi bi-inbox-fill"></i>
                </button>
                <button class="btn btn-light rounded-circle me-2">
                  <i class="bi bi-clock-fill"></i>
                </button>
                <div class="dropdown d-inline-block">
                  <button class="btn btn-light rounded-circle dropdown-toggle" type="button" id="btnProfile" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="bi bi-person-fill"></i>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="btnProfile">
                    <li><a class="dropdown-item" href="#" id="menuProfile">
                      <i class="bi bi-person me-2"></i>Profile
                    </a></li>
                    <li><a class="dropdown-item" href="#" id="menuSettings">
                      <i class="bi bi-gear me-2"></i>Settings
                    </a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item text-danger" href="#" id="menuLogout">
                      <i class="bi bi-box-arrow-right me-2"></i>Logout
                    </a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Dashboard Content -->
        <div class="container-fluid p-4">
          <div class="d-flex justify-content-between align-items-center mb-4">
            <h2 class="h3 fw-bold">Dashboard</h2>
          </div>

          <!-- Projects Section -->
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h3 class="h5 fw-bold">Projects</h3>
            <button class="btn btn-primary" id="btnNewProject">
              <i class="bi bi-plus-lg me-2"></i>Nuevo Proyecto
            </button>
          </div>

          <!-- Projects Grid -->
          <div class="row g-3 mb-5" id="projectsGrid">
            ${ri()}
          </div>

          <!-- Recent Projects -->
          <h3 class="h5 fw-bold mb-3">Recent Projects</h3>
          <div class="row g-3">
            <div class="col-md-4">
              <div class="card h-100">
                <div class="card-body">
                  <h5 class="card-title">To Do</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal: Nuevo Proyecto -->
    <div class="modal fade" id="newProjectModal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Nuevo Proyecto</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label">Project Name</label>
              <input type="text" class="form-control" id="newProjectName" placeholder="Enter project name">
            </div>
            <div class="mb-3">
              <label class="form-label">Due Date (optional)</label>
              <input type="text" class="form-control" id="newProjectDue" placeholder="e.g., in 5 days, 2 weeks">
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-primary" id="btnCreateProject">Crear Proyecto</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal: Project Details -->
    <div class="modal fade" id="projectDetailModal" tabindex="-1">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header bg-primary text-white">
            <h5 class="modal-title" id="projectDetailTitle">Project Name</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <!-- Sección Agregar Tarea -->
            <div class="card mb-4">
              <div class="card-body">
                <div class="input-group">
                  <input type="text" class="form-control" id="newTaskName" placeholder="Agregar nueva tarea...">
                  <button class="btn btn-success" id="btnAddTask">
                    <i class="bi bi-plus-lg"></i> Agregar Tarea
                  </button>
                  <button class="btn btn-primary" id="btnAISort">
                    🤖 Ordenar con IA
                  </button>
                  <button class="btn btn-info" id="btnAIAnalyze">
                    🧠 Analizar con IA
                  </button>
                </div>
              </div>
            </div>

            <!-- Tasks List -->
            <div id="tasksList"></div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" id="btnDeleteProject">
              <i class="bi bi-trash"></i> Eliminar Proyecto
            </button>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal: Detalles de Tarea (Avanzado) -->
    <div class="modal fade" id="taskDetailModal" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Detalles de Tarea</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <!-- Task Name -->
            <div class="mb-3">
              <label class="form-label fw-bold">Nombre de Tarea</label>
              <input type="text" class="form-control" id="taskDetailName" placeholder="Nombre de la tarea">
            </div>

            <!-- Description -->
            <div class="mb-3">
              <label class="form-label fw-bold">Descripción</label>
              <textarea class="form-control" id="taskDetailDescription" rows="3" placeholder="Agregar descripción..."></textarea>
            </div>

            <div class="row">
              <!-- AI Difficulty -->
              <div class="col-md-4 mb-3">
                <label class="form-label fw-bold">AI Difficulty</label>
                <div id="taskDetailAIDifficulty" class="form-control bg-light" style="display: flex; align-items: center; min-height: 38px;">
                  <span class="text-muted">Not analyzed yet</span>
                </div>
              </div>

              <!-- Priority -->
              <div class="col-md-4 mb-3">
                <label class="form-label fw-bold">Priority</label>
                <select class="form-select" id="taskDetailPriority">
                  <option value="low">🟢 Low</option>
                  <option value="medium" selected>🟡 Medium</option>
                  <option value="high">🔴 High</option>
                </select>
              </div>

              <!-- Estimated Duration (AI) -->
              <div class="col-md-4 mb-3">
                <label class="form-label fw-bold">Estimated Duration (AI)</label>
                <div id="taskDetailEstimatedDuration" class="form-control bg-light" style="display: flex; align-items: center; min-height: 38px;">
                  <span class="text-muted">Not analyzed yet</span>
                </div>
              </div>
            </div>

            <!-- Tags -->
            <div class="mb-3">
              <label class="form-label fw-bold">Tags</label>
              <div class="input-group mb-2">
                <input type="text" class="form-control" id="taskDetailNewTag" placeholder="Add tag...">
                <button class="btn btn-outline-primary" id="btnAddTag">
                  <i class="bi bi-plus"></i> Add
                </button>
              </div>
              <div id="taskDetailTags" class="d-flex flex-wrap gap-2"></div>
            </div>

            <!-- Dependencies -->
            <div class="mb-3">
              <label class="form-label fw-bold">Dependencies</label>
              <select class="form-select" id="taskDetailDependencies" multiple size="3">
                <!-- Options will be populated dynamically -->
              </select>
              <small class="text-muted">Hold Ctrl/Cmd to select multiple tasks</small>
            </div>

            <!-- Subtasks -->
            <div class="mb-3">
              <label class="form-label fw-bold">Subtasks</label>
              <div class="input-group mb-2">
                <input type="text" class="form-control" id="taskDetailNewSubtask" placeholder="Add subtask...">
                <button class="btn btn-outline-success" id="btnAddSubtask">
                  <i class="bi bi-plus"></i> Add
                </button>
              </div>
              <div id="taskDetailSubtasks"></div>
            </div>

            <!-- AI Suggestions -->
            <div id="taskDetailAISuggestions" class="alert alert-info d-none">
              <h6 class="alert-heading"><i class="bi bi-lightbulb"></i> AI Suggestions</h6>
              <div id="aiSuggestionsContent"></div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" id="btnAITaskAnalyze">
              🤖 Analizar con IA
            </button>
            <button type="button" class="btn btn-success" id="btnSaveTaskDetail">
              <i class="bi bi-check-lg"></i> Guardar Cambios
            </button>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  `,rb()}function Ug(){const e=(g==null?void 0:g.plan)||"basico";st.innerHTML=`
    <div class="d-flex" style="min-height: 100vh;">
      ${qt()}

      <!-- Main Content -->
      <div class="flex-grow-1" style="background-color: #f7fafc;">
        ${cn()}

        <!-- Pricing Content -->
        <div class="container py-5">
          <div class="text-center mb-5">
            <h1 class="display-4 fw-bold mb-3">Escoge el plan que creas necesitar</h1>
            
            <!-- Toggle Mensual/Anual -->
            <div class="d-flex justify-content-center align-items-center gap-3 mb-5">
              <span class="fw-semibold" id="monthlyLabel" style="color: #000;">Mensual</span>
              <div class="form-check form-switch" style="font-size: 1.5rem;">
                <input class="form-check-input" type="checkbox" id="billingToggle" style="cursor: pointer;">
              </div>
              <span class="fw-semibold text-muted" id="annualLabel">Anual</span>
            </div>
          </div>

          <!-- Plans Grid -->
          <div class="row g-4 justify-content-center">
            <!-- Plan Básico -->
            <div class="col-md-4">
              <div class="card h-100 shadow-sm" style="border-radius: 12px;">
                <div class="card-body p-4 text-center">
                  <h3 class="h4 fw-bold mb-4">Básico</h3>
                  <div class="mb-4">
                    <span class="display-4 fw-bold">$</span>
                    <span class="display-4 fw-bold" id="basicPrice">0</span>
                    <span class="text-muted" id="basicPeriod"></span>
                  </div>

                  <ul class="list-unstyled text-start mb-4">
                    <li class="mb-3">• Hasta 3 proyectos activos</li>
                    <li class="mb-3">• Hasta 3 miembros por equipo</li>
                    <li class="mb-3">• IA Básica: para ordenar tareas por dificultades</li>
                    <li class="mb-3">• Chat básico</li>
                    <li class="mb-3">• Almacenamiento limitado 2Gb</li>
                  </ul>

                  <button class="btn btn-dark w-100 py-2" id="btnBasicPlan" 
                          ${e==="basico"?"disabled":""}>
                    ${e==="basico"?"Plan Actual":"Empezar"}
                  </button>
                </div>
              </div>
            </div>

            <!-- Plan Premium -->
            <div class="col-md-4">
              <div class="card h-100 shadow-lg" style="border-radius: 12px; background-color: #2d3748; color: white;">
                <div class="card-body p-4 text-center">
                  <h3 class="h4 fw-bold mb-4">Premium</h3>
                  <div class="mb-4">
                    <span class="display-4 fw-bold">$</span>
                    <span class="display-4 fw-bold" id="premiumPrice">9.99</span>
                    <span class="text-white-50" id="premiumPeriod">/ mes</span>
                  </div>

                  <ul class="list-unstyled text-start mb-4">
                    <li class="mb-3">• Incluye todo lo anterior+</li>
                    <li class="mb-3">• Hasta 10 proyectos activos</li>
                    <li class="mb-3">• Hasta 10 miembros por equipo</li>
                    <li class="mb-3">• Dashboard analítico básico</li>
                    <li class="mb-3">• Almacenamiento limitado 15Gb</li>
                  </ul>

                  <button class="btn btn-light w-100 py-2" id="btnPremiumPlan"
                          ${e==="premium"?"disabled":""}>
                    ${e==="premium"?"Plan Actual":"Comprar ahora"}
                  </button>
                </div>
              </div>
            </div>

            <!-- Plan Professional -->
            <div class="col-md-4">
              <div class="card h-100 shadow-sm" style="border-radius: 12px;">
                <div class="card-body p-4 text-center">
                  <h3 class="h4 fw-bold mb-4">Professional</h3>
                  <div class="mb-4">
                    <span class="display-4 fw-bold">$</span>
                    <span class="display-4 fw-bold" id="professionalPrice">19.99</span>
                    <span class="text-muted" id="professionalPeriod">/ mes</span>
                  </div>

                  <ul class="list-unstyled text-start mb-4">
                    <li class="mb-3">• Incluye todo lo anterior +</li>
                    <li class="mb-3">• Hasta 30 miembros</li>
                    <li class="mb-3">• Dashboard analítico completo</li>
                    <li class="mb-3">• Subequipos / departamentos</li>
                    <li class="mb-3">• Almacenamiento ilimitado</li>
                  </ul>

                  <button class="btn btn-dark w-100 py-2" id="btnProfessionalPlan"
                          ${e==="professional"?"disabled":""}>
                    ${e==="professional"?"Plan Actual":"Comprar ahora"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal de Pago -->
    <div class="modal fade" id="paymentModal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Procesar Pago</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <div class="alert alert-info">
              <strong>Modo Demo:</strong> Este es un pago simulado. No se procesará ningún cargo real.
            </div>

            <h6 class="mb-3">Plan seleccionado: <strong id="selectedPlanName"></strong></h6>
            <h4 class="mb-4">Total: <strong id="selectedPlanPrice"></strong></h4>

            <div class="mb-3">
              <label class="form-label">Número de tarjeta</label>
              <input type="text" class="form-control" placeholder="1234 5678 9012 3456" maxlength="19">
            </div>

            <div class="row">
              <div class="col-6">
                <label class="form-label">Fecha de expiración</label>
                <input type="text" class="form-control" placeholder="MM/AA" maxlength="5">
              </div>
              <div class="col-6">
                <label class="form-label">CVV</label>
                <input type="text" class="form-control" placeholder="123" maxlength="3">
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-primary" id="btnConfirmPayment">Confirmar Pago</button>
          </div>
        </div>
      </div>
    </div>
  `,ib()}function Ut(){if(hs)return;hs=!0,document.addEventListener("click",t=>{const n=t.target.closest('a[id^="nav"], a[id^="link"]');n&&(t.preventDefault(),document.querySelectorAll(".nav-link").forEach(a=>{a.classList.remove("active"),a.style.backgroundColor=""}),n.classList.contains("nav-link")&&(n.classList.add("active"),n.style.backgroundColor="rgba(255,255,255,0.1)"),n.id==="navDashboard"?(B="dashboard",F()):n.id==="navProjects"?(B="projects",F()):n.id==="navTeams"?(B="teams",F()):n.id==="navCalendar"?(B="calendar",F()):n.id==="navSettings"?(B="settings",F()):n.id==="linkPlans"&&(B="pricing",F()))}),document.addEventListener("click",t=>{if(t.target.closest("#btnProfile")){t.preventDefault(),t.stopPropagation();const n=t.target.closest(".dropdown"),a=n==null?void 0:n.querySelector(".dropdown-menu");if(a){const o=a.classList.contains("show");document.querySelectorAll(".dropdown-menu.show").forEach(r=>r.classList.remove("show")),o||a.classList.add("show")}return}t.target.closest("#menuProfile")?(t.preventDefault(),B="profile",document.querySelectorAll(".dropdown-menu.show").forEach(n=>n.classList.remove("show")),F()):t.target.closest("#menuSettings")?(t.preventDefault(),B="settings",document.querySelectorAll(".dropdown-menu.show").forEach(n=>n.classList.remove("show")),F()):t.target.closest("#menuLogout")?(t.preventDefault(),document.querySelectorAll(".dropdown-menu.show").forEach(n=>n.classList.remove("show")),confirm("¿Cerrar sesión?")&&Ms()):t.target.closest(".dropdown")||document.querySelectorAll(".dropdown-menu.show").forEach(n=>n.classList.remove("show"))});let e=!0;document.addEventListener("click",t=>{const n=t.target.closest("#toggleSidebar");if(!n)return;const a=document.getElementById("sidebar"),o=document.querySelectorAll(".sidebar-text"),r=document.querySelector(".sidebar-title"),d=document.querySelector(".sidebar-footer"),f=document.querySelectorAll(".nav-link");e?(a.style.width="80px",n.innerHTML='<i class="bi bi-chevron-right"></i>',o.forEach(h=>{h.style.opacity="0",h.style.width="0",h.style.overflow="hidden"}),r&&(r.style.opacity="0",r.style.width="0"),d&&(d.style.opacity="0",d.style.height="0",d.style.padding="0"),f.forEach(h=>{h.style.justifyContent="center",h.style.paddingLeft="0",h.style.paddingRight="0"})):(a.style.width="280px",n.innerHTML='<i class="bi bi-chevron-left"></i>',o.forEach(h=>{h.style.opacity="1",h.style.width="auto",h.style.overflow="visible"}),r&&(r.style.opacity="1",r.style.width="auto"),d&&(d.style.opacity="1",d.style.height="auto",d.style.padding="1rem"),f.forEach(h=>{h.style.justifyContent="flex-start",h.style.paddingLeft="0.75rem",h.style.paddingRight="0.75rem"})),e=!e})}function qg(){g.projects||(g.projects=[]),st.innerHTML=`
    <div style="display: flex; min-height: 100vh;">
      ${qt()}
      
      <!-- Main Content -->
      <div class="flex-grow-1" style="background-color: #f8f9fa;">
        ${cn()}

        <!-- Projects Content -->
        <div class="container-fluid p-4">
          <div class="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h3 class="h5 fw-bold mb-1">Todos los Proyectos</h3>
              <p class="text-muted mb-0">Gestiona y organiza tus proyectos</p>
            </div>
            <button class="btn btn-primary" id="btnNewProjectPage">
              <i class="bi bi-plus-circle me-2"></i>Nuevo Proyecto
            </button>
          </div>

          <!-- Projects Grid -->
          <div class="row g-4" id="projectsGridPage">
            ${Fg()}
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Nuevo Proyecto -->
    <div class="modal fade" id="newProjectModal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Nuevo Proyecto</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label">Nombre del Proyecto</label>
              <input type="text" class="form-control" id="newProjectName" placeholder="Ej: Rediseño de sitio web">
            </div>
            <div class="mb-3">
              <label class="form-label">Fecha de Entrega</label>
              <input type="date" class="form-control" id="newProjectDue">
            </div>
            <div class="mb-3">
              <label class="form-label">Descripción</label>
              <textarea class="form-control" id="newProjectDesc" rows="3" placeholder="Descripción del proyecto..."></textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-primary" id="btnCreateProject">Crear Proyecto</button>
          </div>
        </div>
      </div>
    </div>
  `,Hg()}function Fg(){return!g.projects||g.projects.length===0?`
      <div class="col-12">
        <div class="text-center py-5">
          <i class="bi bi-folder" style="font-size: 4rem; color: #dee2e6;"></i>
          <p class="text-muted mt-3">No tienes proyectos creados</p>
          <p class="text-muted">Crea tu primer proyecto para comenzar</p>
        </div>
      </div>
    `:g.projects.map(e=>{var o,r;const t=((o=e.tasks)==null?void 0:o.length)||0,n=((r=e.tasks)==null?void 0:r.filter(d=>d.completed).length)||0,a=t>0?Math.round(n/t*100):0;return`
      <div class="col-md-6 col-lg-4">
        <div class="card h-100 shadow-sm project-card" style="cursor: pointer;" data-project-id="${e.id}">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-start mb-3">
              <h5 class="card-title mb-0">${e.name}</h5>
              <div class="dropdown">
                <button class="btn btn-sm btn-link text-muted" data-bs-toggle="dropdown" onclick="event.stopPropagation()">
                  <i class="bi bi-three-dots-vertical"></i>
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#" onclick="event.stopPropagation(); editProject(${e.id})">
                    <i class="bi bi-pencil me-2"></i>Editar
                  </a></li>
                  <li><a class="dropdown-item text-danger" href="#" onclick="event.stopPropagation(); deleteProject(${e.id})">
                    <i class="bi bi-trash me-2"></i>Eliminar
                  </a></li>
                </ul>
              </div>
            </div>

            ${e.description?`<p class="text-muted small mb-3">${e.description}</p>`:""}

            <div class="mb-3">
              <div class="d-flex justify-content-between align-items-center mb-1">
                <span class="small text-muted">Progreso</span>
                <span class="small fw-bold">${a}%</span>
              </div>
              <div class="progress" style="height: 8px;">
                <div class="progress-bar ${a===100?"bg-success":"bg-primary"}" 
                     style="width: ${a}%"></div>
              </div>
            </div>

            <div class="d-flex justify-content-between align-items-center text-muted small">
              <div>
                <i class="bi bi-list-task me-1"></i>
                ${t} tareas
              </div>
              <div>
                <i class="bi bi-calendar me-1"></i>
                ${e.dueDate||"Sin fecha"}
              </div>
            </div>

            ${e.createdAt?`
              <div class="mt-2 text-muted small">
                <i class="bi bi-clock me-1"></i>
                Creado: ${e.createdAt}
              </div>
            `:""}
          </div>
        </div>
      </div>
    `}).join("")}function Hg(){var e,t;Ut(),(e=document.getElementById("btnNewProjectPage"))==null||e.addEventListener("click",()=>{new Se(document.getElementById("newProjectModal")).show()}),(t=document.getElementById("btnCreateProject"))==null||t.addEventListener("click",()=>{const n=document.getElementById("newProjectName").value.trim(),a=document.getElementById("newProjectDue").value,o=document.getElementById("newProjectDesc").value.trim();if(!n){alert("Por favor ingresa un nombre para el proyecto");return}const r={id:Date.now(),name:n,dueDate:a||"Sin fecha",description:o,tasks:[],createdAt:new Date().toLocaleDateString("es-ES")};g.projects||(g.projects=[]),g.projects.push(r),me(),Se.getInstance(document.getElementById("newProjectModal")).hide(),document.getElementById("newProjectName").value="",document.getElementById("newProjectDue").value="",document.getElementById("newProjectDesc").value="",F()}),document.querySelectorAll(".project-card").forEach(n=>{n.addEventListener("click",()=>{const a=parseInt(n.dataset.projectId);li(a)})})}window.deleteProject=function(e){confirm("¿Estás seguro de eliminar este proyecto y todas sus tareas?")&&(g.projects=g.projects.filter(t=>t.id!==e),me(),F())};function Vg(){g.teams||(g.teams=[]),st.innerHTML=`
    <div style="display: flex; min-height: 100vh;">
      ${qt()}
      
      <!-- Main Content -->
      <div class="flex-grow-1" style="background-color: #f8f9fa;">
        ${cn()}

        <!-- Teams Content -->
        <div class="container-fluid p-4">
          <div class="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h3 class="h5 fw-bold mb-1">Gestión de Equipos</h3>
              <p class="text-muted mb-0">Administra tus equipos y miembros</p>
            </div>
            <button class="btn btn-primary" id="btnAddTeam">
              <i class="bi bi-plus-circle me-2"></i>Nuevo Equipo
            </button>
          </div>

          <!-- Teams Grid -->
          <div class="row g-4" id="teamsGrid">
            ${zg()}
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Nuevo Equipo -->
    <div class="modal fade" id="modalNewTeam" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Nuevo Equipo</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label">Nombre del Equipo</label>
              <input type="text" class="form-control" id="inputTeamName" placeholder="Ej: Desarrollo Frontend">
            </div>
            <div class="mb-3">
              <label class="form-label">Descripción</label>
              <textarea class="form-control" id="inputTeamDesc" rows="3" placeholder="Descripción del equipo..."></textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-primary" id="btnSaveTeam">Crear Equipo</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Agregar Miembro -->
    <div class="modal fade" id="modalAddMember" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Agregar Miembro</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label">Nombre del Miembro</label>
              <input type="text" class="form-control" id="inputMemberName" placeholder="Nombre completo">
            </div>
            <div class="mb-3">
              <label class="form-label">Email</label>
              <input type="email" class="form-control" id="inputMemberEmail" placeholder="email@ejemplo.com">
            </div>
            <div class="mb-3">
              <label class="form-label">Rol</label>
              <select class="form-select" id="inputMemberRole">
                <option value="member">Miembro</option>
                <option value="leader">Líder</option>
                <option value="admin">Administrador</option>
              </select>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-primary" id="btnSaveMember">Agregar</button>
          </div>
        </div>
      </div>
    </div>
  `,Wg()}function zg(){return!g.teams||g.teams.length===0?`
      <div class="col-12">
        <div class="text-center py-5">
          <i class="bi bi-people" style="font-size: 4rem; color: #dee2e6;"></i>
          <p class="text-muted mt-3">No tienes equipos creados</p>
          <p class="text-muted">Crea tu primer equipo para comenzar</p>
        </div>
      </div>
    `:g.teams.map(e=>{var t;return`
    <div class="col-md-6 col-lg-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-start mb-3">
            <h5 class="card-title mb-0">${e.name}</h5>
            <div class="dropdown">
              <button class="btn btn-sm btn-link text-muted" data-bs-toggle="dropdown">
                <i class="bi bi-three-dots-vertical"></i>
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#" onclick="editTeam('${e.id}')">Editar</a></li>
                <li><a class="dropdown-item text-danger" href="#" onclick="deleteTeam('${e.id}')">Eliminar</a></li>
              </ul>
            </div>
          </div>
          <p class="text-muted small mb-3">${e.description||"Sin descripción"}</p>
          <div class="d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center gap-2">
              <i class="bi bi-people-fill text-primary"></i>
              <span class="small">${((t=e.members)==null?void 0:t.length)||0} miembros</span>
            </div>
            <button class="btn btn-sm btn-outline-primary" onclick="addMemberToTeam('${e.id}')">
              <i class="bi bi-plus"></i> Agregar
            </button>
          </div>
          ${e.members&&e.members.length>0?`
            <div class="mt-3">
              <div class="d-flex flex-wrap gap-2">
                ${e.members.slice(0,3).map(n=>`
                  <span class="badge bg-light text-dark">${n.name}</span>
                `).join("")}
                ${e.members.length>3?`<span class="badge bg-secondary">+${e.members.length-3}</span>`:""}
              </div>
            </div>
          `:""}
        </div>
      </div>
    </div>
  `}).join("")}function Wg(){var e,t,n,a,o,r;Ut(),(e=document.getElementById("btnAddTeam"))==null||e.addEventListener("click",()=>{new Se(document.getElementById("modalNewTeam")).show()}),(t=document.getElementById("btnSaveTeam"))==null||t.addEventListener("click",()=>{const d=document.getElementById("inputTeamName").value.trim(),f=document.getElementById("inputTeamDesc").value.trim();if(!d){alert("Por favor ingresa un nombre para el equipo");return}const h={id:Date.now().toString(),name:d,description:f,members:[],createdAt:new Date().toISOString()};g.teams||(g.teams=[]),g.teams.push(h),me(),Se.getInstance(document.getElementById("modalNewTeam")).hide(),F()}),(n=document.getElementById("navDashboard"))==null||n.addEventListener("click",d=>{d.preventDefault(),B="dashboard",F()}),(a=document.getElementById("navTeams"))==null||a.addEventListener("click",d=>{d.preventDefault(),B="teams",F()}),(o=document.getElementById("navCalendar"))==null||o.addEventListener("click",d=>{d.preventDefault(),B="calendar",F()}),(r=document.getElementById("navSettings"))==null||r.addEventListener("click",d=>{d.preventDefault(),B="settings",F()})}window.addMemberToTeam=function(e){window.currentTeamId=e,new Se(document.getElementById("modalAddMember")).show(),document.getElementById("btnSaveMember").onclick=()=>{const n=document.getElementById("inputMemberName").value.trim(),a=document.getElementById("inputMemberEmail").value.trim(),o=document.getElementById("inputMemberRole").value;if(!n||!a){alert("Por favor completa todos los campos");return}const r=g.teams.find(d=>d.id===e);r&&(r.members||(r.members=[]),r.members.push({id:Date.now().toString(),name:n,email:a,role:o}),me(),Se.getInstance(document.getElementById("modalAddMember")).hide(),F())}};window.deleteTeam=function(e){confirm("¿Estás seguro de eliminar este equipo?")&&(g.teams=g.teams.filter(t=>t.id!==e),me(),F())};function Kg(){g.events||(g.events=[]);const e=new Date,t=e.getMonth(),n=e.getFullYear();st.innerHTML=`
    <div style="display: flex; min-height: 100vh;">
      ${qt()}
      
      <!-- Main Content -->
      <div class="flex-grow-1" style="background-color: #f8f9fa;">
        ${cn()}

        <!-- Calendar Content -->
        <div class="container-fluid p-4">
          <div class="row g-4">
            <!-- Calendar View -->
            <div class="col-lg-8">
              <div class="card shadow-sm">
                <div class="card-header bg-white d-flex justify-content-between align-items-center">
                  <h5 class="mb-0">${Xg(t)} ${n}</h5>
                  <button class="btn btn-primary btn-sm" id="btnAddEvent">
                    <i class="bi bi-plus-circle me-1"></i>Nuevo Evento
                  </button>
                </div>
                <div class="card-body">
                  ${Qg(t,n)}
                </div>
              </div>
            </div>

            <!-- Upcoming Events -->
            <div class="col-lg-4">
              <div class="card shadow-sm">
                <div class="card-header bg-white">
                  <h5 class="mb-0">Próximos Eventos</h5>
                </div>
                <div class="card-body">
                  ${Jg()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Nuevo Evento -->
    <div class="modal fade" id="modalNewEvent" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Nuevo Evento</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label">Título del Evento</label>
              <input type="text" class="form-control" id="inputEventTitle" placeholder="Reunión de equipo">
            </div>
            <div class="mb-3">
              <label class="form-label">Fecha</label>
              <input type="date" class="form-control" id="inputEventDate">
            </div>
            <div class="mb-3">
              <label class="form-label">Hora</label>
              <input type="time" class="form-control" id="inputEventTime">
            </div>
            <div class="mb-3">
              <label class="form-label">Descripción</label>
              <textarea class="form-control" id="inputEventDesc" rows="3"></textarea>
            </div>
            <div class="mb-3">
              <label class="form-label">Tipo</label>
              <select class="form-select" id="inputEventType">
                <option value="meeting">Reunión</option>
                <option value="deadline">Fecha límite</option>
                <option value="reminder">Recordatorio</option>
                <option value="other">Otro</option>
              </select>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-primary" id="btnSaveEvent">Guardar</button>
          </div>
        </div>
      </div>
    </div>
  `,Yg()}function Xg(e){return["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"][e]}function Qg(e,t){var m;const n=new Date(t,e,1).getDay(),a=new Date(t,e+1,0).getDate(),o=new Date().getDate(),r=new Date().getMonth(),d=new Date().getFullYear();let f=`
    <div class="calendar-grid">
      <div class="row text-center fw-bold mb-2">
        <div class="col">Dom</div>
        <div class="col">Lun</div>
        <div class="col">Mar</div>
        <div class="col">Mié</div>
        <div class="col">Jue</div>
        <div class="col">Vie</div>
        <div class="col">Sáb</div>
      </div>
  `,h=1;for(let k=0;k<6;k++){f+='<div class="row mb-2">';for(let v=0;v<7;v++)if(k===0&&v<n||h>a)f+='<div class="col p-2"></div>';else{const D=h===o&&e===r&&t===d,X=(m=g.events)==null?void 0:m.some(ae=>{const ee=new Date(ae.date);return ee.getDate()===h&&ee.getMonth()===e&&ee.getFullYear()===t});f+=`
          <div class="col p-2">
            <div class="calendar-day ${D?"bg-primary text-white":""} ${X?"border border-warning":""} 
                        rounded p-2 text-center" style="min-height: 50px; cursor: pointer;">
              ${h}
              ${X?'<div class="mt-1"><i class="bi bi-circle-fill text-warning" style="font-size: 6px;"></i></div>':""}
            </div>
          </div>
        `,h++}if(f+="</div>",h>a)break}return f+="</div>",f}function Jg(){if(!g.events||g.events.length===0)return'<p class="text-muted text-center">No hay eventos próximos</p>';const e=new Date,t=g.events.filter(n=>new Date(n.date)>=e).sort((n,a)=>new Date(n.date)-new Date(a.date)).slice(0,5);return t.length===0?'<p class="text-muted text-center">No hay eventos próximos</p>':t.map(n=>{const a=new Date(n.date);return`
      <div class="mb-3 pb-3 border-bottom">
        <div class="d-flex align-items-start gap-2">
          <i class="bi ${{meeting:"bi-camera-video",deadline:"bi-alarm",reminder:"bi-bell",other:"bi-calendar-event"}[n.type]||"bi-calendar-event"} text-primary mt-1"></i>
          <div class="flex-grow-1">
            <h6 class="mb-1">${n.title}</h6>
            <p class="text-muted small mb-1">
              ${a.toLocaleDateString("es-ES",{day:"numeric",month:"long",year:"numeric"})}
              ${n.time?`- ${n.time}`:""}
            </p>
            ${n.description?`<p class="small text-muted mb-0">${n.description}</p>`:""}
          </div>
          <button class="btn btn-sm btn-link text-danger" onclick="deleteEvent('${n.id}')">
            <i class="bi bi-trash"></i>
          </button>
        </div>
      </div>
    `}).join("")}function Yg(){var e,t,n,a,o,r;Ut(),(e=document.getElementById("btnAddEvent"))==null||e.addEventListener("click",()=>{new Se(document.getElementById("modalNewEvent")).show()}),(t=document.getElementById("btnSaveEvent"))==null||t.addEventListener("click",()=>{const d=document.getElementById("inputEventTitle").value.trim(),f=document.getElementById("inputEventDate").value,h=document.getElementById("inputEventTime").value,m=document.getElementById("inputEventDesc").value.trim(),k=document.getElementById("inputEventType").value;if(!d||!f){alert("Por favor completa el título y la fecha");return}const v={id:Date.now().toString(),title:d,date:f,time:h,description:m,type:k,createdAt:new Date().toISOString()};g.events||(g.events=[]),g.events.push(v),me(),Se.getInstance(document.getElementById("modalNewEvent")).hide(),F()}),(n=document.getElementById("navDashboard"))==null||n.addEventListener("click",d=>{d.preventDefault(),B="dashboard",F()}),(a=document.getElementById("navTeams"))==null||a.addEventListener("click",d=>{d.preventDefault(),B="teams",F()}),(o=document.getElementById("navCalendar"))==null||o.addEventListener("click",d=>{d.preventDefault(),B="calendar",F()}),(r=document.getElementById("navSettings"))==null||r.addEventListener("click",d=>{d.preventDefault(),B="settings",F()})}window.deleteEvent=function(e){confirm("¿Eliminar este evento?")&&(g.events=g.events.filter(t=>t.id!==e),me(),F())};function Zg(){var e,t,n,a,o;st.innerHTML=`
    <div style="display: flex; min-height: 100vh;">
      ${qt()}
      
      <!-- Main Content -->
      <div class="flex-grow-1" style="background-color: #f8f9fa;">
        ${cn()}

        <!-- Settings Content -->
        <div class="container-fluid p-4">
          <div class="row g-4">
            <!-- Profile Settings -->
            <div class="col-lg-8">
              <div class="card shadow-sm mb-4">
                <div class="card-header bg-white">
                  <h5 class="mb-0"><i class="bi bi-person-circle me-2"></i>Perfil</h5>
                </div>
                <div class="card-body">
                  <div class="mb-3">
                    <label class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="inputProfileName" value="${g.name}">
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Email</label>
                    <input type="email" class="form-control" id="inputProfileEmail" value="${g.email}">
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Empresa</label>
                    <input type="text" class="form-control" id="inputProfileCompany" value="${g.company||""}" placeholder="Nombre de tu empresa">
                  </div>
                  <button class="btn btn-primary" id="btnSaveProfile">
                    <i class="bi bi-check-circle me-2"></i>Guardar Cambios
                  </button>
                </div>
              </div>

              <!-- Password Settings -->
              <div class="card shadow-sm mb-4">
                <div class="card-header bg-white">
                  <h5 class="mb-0"><i class="bi bi-shield-lock me-2"></i>Seguridad</h5>
                </div>
                <div class="card-body">
                  <div class="mb-3">
                    <label class="form-label">Contraseña Actual</label>
                    <input type="password" class="form-control" id="inputCurrentPassword">
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Nueva Contraseña</label>
                    <input type="password" class="form-control" id="inputNewPassword">
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Confirmar Nueva Contraseña</label>
                    <input type="password" class="form-control" id="inputConfirmPassword">
                  </div>
                  <button class="btn btn-warning" id="btnChangePassword">
                    <i class="bi bi-key me-2"></i>Cambiar Contraseña
                  </button>
                </div>
              </div>

              <!-- Notifications Settings -->
              <div class="card shadow-sm">
                <div class="card-header bg-white">
                  <h5 class="mb-0"><i class="bi bi-bell me-2"></i>Notificaciones</h5>
                </div>
                <div class="card-body">
                  <div class="form-check form-switch mb-3">
                    <input class="form-check-input" type="checkbox" id="notifEmail" ${((e=g.notifications)==null?void 0:e.email)!==!1?"checked":""}>
                    <label class="form-check-label" for="notifEmail">
                      Notificaciones por Email
                    </label>
                  </div>
                  <div class="form-check form-switch mb-3">
                    <input class="form-check-input" type="checkbox" id="notifTasks" ${((t=g.notifications)==null?void 0:t.tasks)!==!1?"checked":""}>
                    <label class="form-check-label" for="notifTasks">
                      Recordatorios de Tareas
                    </label>
                  </div>
                  <div class="form-check form-switch mb-3">
                    <input class="form-check-input" type="checkbox" id="notifEvents" ${((n=g.notifications)==null?void 0:n.events)!==!1?"checked":""}>
                    <label class="form-check-label" for="notifEvents">
                      Recordatorios de Eventos
                    </label>
                  </div>
                  <button class="btn btn-primary" id="btnSaveNotifications">
                    <i class="bi bi-check-circle me-2"></i>Guardar Preferencias
                  </button>
                </div>
              </div>
            </div>

            <!-- Account Info -->
            <div class="col-lg-4">
              <div class="card shadow-sm mb-4">
                <div class="card-header bg-white">
                  <h5 class="mb-0">Información de Cuenta</h5>
                </div>
                <div class="card-body">
                  <div class="mb-3">
                    <label class="text-muted small">Plan Actual</label>
                    <p class="fw-bold mb-0 text-capitalize">${g.plan||"Básico"}</p>
                  </div>
                  <div class="mb-3">
                    <label class="text-muted small">Ciclo de Facturación</label>
                    <p class="fw-bold mb-0 text-capitalize">${g.billingCycle==="annual"?"Anual":"Mensual"}</p>
                  </div>
                  <div class="mb-3">
                    <label class="text-muted small">Proyectos Activos</label>
                    <p class="fw-bold mb-0">${((a=g.projects)==null?void 0:a.length)||0}</p>
                  </div>
                  <div class="mb-3">
                    <label class="text-muted small">Equipos</label>
                    <p class="fw-bold mb-0">${((o=g.teams)==null?void 0:o.length)||0}</p>
                  </div>
                  <button class="btn btn-outline-primary w-100" id="btnUpgradePlan">
                    <i class="bi bi-arrow-up-circle me-2"></i>Mejorar Plan
                  </button>
                </div>
              </div>

              <!-- Danger Zone -->
              <div class="card shadow-sm border-danger">
                <div class="card-header bg-danger text-white">
                  <h5 class="mb-0">Zona de Peligro</h5>
                </div>
                <div class="card-body">
                  <p class="text-muted small">Eliminar tu cuenta es permanente y no se puede deshacer.</p>
                  <button class="btn btn-danger w-100" id="btnDeleteAccount">
                    <i class="bi bi-trash me-2"></i>Eliminar Cuenta
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,nb()}function Gg(){var e,t,n;st.innerHTML=`
    <div style="display: flex; min-height: 100vh;">
      ${qt()}

      <!-- Main Content -->
      <div class="flex-grow-1" style="background-color: #f8f9fa;">
        ${cn()}

        <!-- Profile Content -->
        <div class="container py-5">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <h1 class="h2 fw-bold mb-4">Mi Perfil</h1>

              <!-- Información Personal -->
              <div class="card mb-4">
                <div class="card-header bg-primary text-white">
                  <h5 class="mb-0"><i class="bi bi-person-circle me-2"></i>Información Personal</h5>
                </div>
                <div class="card-body">
                  <div class="row mb-3">
                    <div class="col-md-4 text-center">
                      <div class="mb-3">
                        <div class="rounded-circle bg-primary text-white d-inline-flex align-items-center justify-content-center" 
                             style="width: 120px; height: 120px; font-size: 48px;">
                          <i class="bi bi-person-fill"></i>
                        </div>
                      </div>
                      <button class="btn btn-sm btn-outline-primary" id="btnChangeAvatar">
                        <i class="bi bi-camera me-1"></i>Cambiar Foto
                      </button>
                    </div>
                    <div class="col-md-8">
                      <div class="mb-3">
                        <label class="form-label fw-semibold">Nombre Completo</label>
                        <input type="text" class="form-control" id="profileName" value="${(g==null?void 0:g.name)||""}" placeholder="Tu nombre">
                      </div>
                      <div class="mb-3">
                        <label class="form-label fw-semibold">Email</label>
                        <input type="email" class="form-control" id="profileEmail" value="${(g==null?void 0:g.email)||""}" readonly>
                        <small class="text-muted">El email no se puede cambiar</small>
                      </div>
                      <div class="mb-3">
                        <label class="form-label fw-semibold">Empresa</label>
                        <input type="text" class="form-control" id="profileCompany" value="${(g==null?void 0:g.company)||""}" placeholder="Nombre de tu empresa">
                      </div>
                      <div class="mb-3">
                        <label class="form-label fw-semibold">Biografía</label>
                        <textarea class="form-control" id="profileBio" rows="3" placeholder="Cuéntanos sobre ti...">${(g==null?void 0:g.bio)||""}</textarea>
                      </div>
                    </div>
                  </div>
                  <button class="btn btn-primary" id="btnSaveProfileInfo">
                    <i class="bi bi-check-lg me-2"></i>Guardar Cambios
                  </button>
                </div>
              </div>

              <!-- Estadísticas -->
              <div class="card mb-4">
                <div class="card-header bg-info text-white">
                  <h5 class="mb-0"><i class="bi bi-graph-up me-2"></i>Estadísticas</h5>
                </div>
                <div class="card-body">
                  <div class="row text-center">
                    <div class="col-md-3">
                      <div class="p-3">
                        <i class="bi bi-folder-fill text-primary fs-1"></i>
                        <h3 class="mt-2 mb-0">${((e=g==null?void 0:g.projects)==null?void 0:e.length)||0}</h3>
                        <p class="text-muted small mb-0">Proyectos</p>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="p-3">
                        <i class="bi bi-check-circle-fill text-success fs-1"></i>
                        <h3 class="mt-2 mb-0">${eb()}</h3>
                        <p class="text-muted small mb-0">Tareas Completadas</p>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="p-3">
                        <i class="bi bi-people-fill text-warning fs-1"></i>
                        <h3 class="mt-2 mb-0">${((t=g==null?void 0:g.teams)==null?void 0:t.length)||0}</h3>
                        <p class="text-muted small mb-0">Equipos</p>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="p-3">
                        <i class="bi bi-calendar-check-fill text-danger fs-1"></i>
                        <h3 class="mt-2 mb-0">${((n=g==null?void 0:g.events)==null?void 0:n.length)||0}</h3>
                        <p class="text-muted small mb-0">Eventos</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Plan Actual -->
              <div class="card mb-4">
                <div class="card-header bg-success text-white">
                  <h5 class="mb-0"><i class="bi bi-star-fill me-2"></i>Plan Actual</h5>
                </div>
                <div class="card-body">
                  <div class="d-flex justify-content-between align-items-center">
                    <div>
                      <h4 class="mb-1">Plan ${(g==null?void 0:g.plan)==="premium"?"Premium":(g==null?void 0:g.plan)==="professional"?"Professional":"Básico"}</h4>
                      <p class="text-muted mb-0">
                        ${(g==null?void 0:g.plan)==="basico"?"Funcionalidades básicas gratuitas":(g==null?void 0:g.plan)==="premium"?"Acceso a funcionalidades premium":"Acceso completo a todas las funcionalidades"}
                      </p>
                    </div>
                    ${(g==null?void 0:g.plan)==="basico"?`
                      <button class="btn btn-success" id="btnUpgradePlanProfile">
                        <i class="bi bi-arrow-up-circle me-2"></i>Mejorar Plan
                      </button>
                    `:""}
                  </div>
                </div>
              </div>

              <!-- Seguridad -->
              <div class="card mb-4">
                <div class="card-header bg-warning text-dark">
                  <h5 class="mb-0"><i class="bi bi-shield-lock me-2"></i>Seguridad</h5>
                </div>
                <div class="card-body">
                  <button class="btn btn-warning w-100 mb-2" id="btnChangePassword">
                    <i class="bi bi-key me-2"></i>Cambiar Contraseña
                  </button>
                  <button class="btn btn-outline-secondary w-100" id="btnEnable2FA">
                    <i class="bi bi-shield-check me-2"></i>Habilitar Autenticación de Dos Factores
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,tb()}function eb(){return g!=null&&g.projects?g.projects.reduce((e,t)=>{var a;const n=((a=t.tasks)==null?void 0:a.filter(o=>o.completed).length)||0;return e+n},0):0}function tb(){var e,t,n,a,o;Ut(),(e=document.getElementById("btnSaveProfileInfo"))==null||e.addEventListener("click",()=>{g.name=document.getElementById("profileName").value.trim(),g.company=document.getElementById("profileCompany").value.trim(),g.bio=document.getElementById("profileBio").value.trim(),me(),alert("✅ Perfil actualizado correctamente")}),(t=document.getElementById("btnChangeAvatar"))==null||t.addEventListener("click",()=>{alert("Funcionalidad de cambio de avatar próximamente")}),(n=document.getElementById("btnUpgradePlanProfile"))==null||n.addEventListener("click",()=>{B="pricing",F()}),(a=document.getElementById("btnChangePassword"))==null||a.addEventListener("click",()=>{const r=prompt("Ingresa tu nueva contraseña:");r&&r.length>=6?(g.password=r,me(),alert("✅ Contraseña cambiada correctamente")):r&&alert("❌ La contraseña debe tener al menos 6 caracteres")}),(o=document.getElementById("btnEnable2FA"))==null||o.addEventListener("click",()=>{alert("Funcionalidad de 2FA próximamente")})}function nb(){var e,t,n,a,o,r,d,f,h;Ut(),(e=document.getElementById("btnSaveProfile"))==null||e.addEventListener("click",()=>{g.name=document.getElementById("inputProfileName").value.trim(),g.email=document.getElementById("inputProfileEmail").value.trim(),g.company=document.getElementById("inputProfileCompany").value.trim(),me(),alert("✅ Perfil actualizado correctamente")}),(t=document.getElementById("btnChangePassword"))==null||t.addEventListener("click",()=>{const m=document.getElementById("inputCurrentPassword").value,k=document.getElementById("inputNewPassword").value,v=document.getElementById("inputConfirmPassword").value;if(!m||!k||!v){alert("Por favor completa todos los campos");return}if(m!==g.password){alert("❌ Contraseña actual incorrecta");return}if(k!==v){alert("❌ Las contraseñas no coinciden");return}if(k.length<6){alert("❌ La contraseña debe tener al menos 6 caracteres");return}g.password=k,me(),alert("✅ Contraseña cambiada correctamente"),document.getElementById("inputCurrentPassword").value="",document.getElementById("inputNewPassword").value="",document.getElementById("inputConfirmPassword").value=""}),(n=document.getElementById("btnSaveNotifications"))==null||n.addEventListener("click",()=>{g.notifications||(g.notifications={}),g.notifications.email=document.getElementById("notifEmail").checked,g.notifications.tasks=document.getElementById("notifTasks").checked,g.notifications.events=document.getElementById("notifEvents").checked,me(),alert("✅ Preferencias de notificaciones guardadas")}),(a=document.getElementById("btnUpgradePlan"))==null||a.addEventListener("click",()=>{B="pricing",F()}),(o=document.getElementById("btnDeleteAccount"))==null||o.addEventListener("click",()=>{confirm("⚠️ ¿Estás seguro? Esta acción no se puede deshacer.")&&confirm("¿Realmente deseas eliminar tu cuenta y todos tus datos?")&&(Rt=Rt.filter(m=>m.email!==g.email),Ms(),alert("Tu cuenta ha sido eliminada"))}),(r=document.getElementById("navDashboard"))==null||r.addEventListener("click",m=>{m.preventDefault(),B="dashboard",F()}),(d=document.getElementById("navTeams"))==null||d.addEventListener("click",m=>{m.preventDefault(),B="teams",F()}),(f=document.getElementById("navCalendar"))==null||f.addEventListener("click",m=>{m.preventDefault(),B="calendar",F()}),(h=document.getElementById("navSettings"))==null||h.addEventListener("click",m=>{m.preventDefault(),B="settings",F()})}function ib(){const e=document.getElementById("billingToggle"),t=document.getElementById("monthlyLabel"),n=document.getElementById("annualLabel");let a=!1;const o={basic:{monthly:0,annual:0},premium:{monthly:9.99,annual:(9.99*12*.85).toFixed(2)},professional:{monthly:19.99,annual:(19.99*12*.85).toFixed(2)}};function r(){const m=a?"annual":"monthly",k=a?"/ año":"/ mes";document.getElementById("basicPrice").textContent=o.basic[m],document.getElementById("basicPeriod").textContent=o.basic[m]>0?k:"",document.getElementById("premiumPrice").textContent=o.premium[m],document.getElementById("premiumPeriod").textContent=k,document.getElementById("professionalPrice").textContent=o.professional[m],document.getElementById("professionalPeriod").textContent=k,a?(t.style.color="#9ca3af",n.style.color="#000"):(t.style.color="#000",n.style.color="#9ca3af")}e.addEventListener("change",()=>{a=e.checked,r()}),r();const d=document.getElementById("btnBasicPlan");d&&!d.disabled&&d.addEventListener("click",()=>{ab("basico","Básico")});const f=document.getElementById("btnPremiumPlan");f&&!f.disabled&&f.addEventListener("click",()=>{const m=a?`$${o.premium.annual} / año`:`$${o.premium.monthly} / mes`;bs("premium","Premium",m,a)});const h=document.getElementById("btnProfessionalPlan");h&&!h.disabled&&h.addEventListener("click",()=>{const m=a?`$${o.professional.annual} / año`:`$${o.professional.monthly} / mes`;bs("professional","Professional",m,a)}),setupPricingNavigation()}function ab(e,t,n){g.plan=e,g.billingCycle="monthly",me(),sa(`✅ Plan ${t} activado correctamente`,"success"),setTimeout(()=>{B="dashboard",F()},1500)}let oi=null;function bs(e,t,n,a){oi={planId:e,planName:t,price:n,isAnnual:a},document.getElementById("selectedPlanName").textContent=t,document.getElementById("selectedPlanPrice").textContent=n,new Se(document.getElementById("paymentModal")).show(),document.getElementById("btnConfirmPayment").onclick=()=>{ob()}}function ob(){Se.getInstance(document.getElementById("paymentModal")).hide(),sa("⏳ Procesando pago...","info"),setTimeout(()=>{g.plan=oi.planId,g.billingCycle=oi.isAnnual?"annual":"monthly",me(),sa(`✅ ¡Pago exitoso! Plan ${oi.planName} activado`,"success"),setTimeout(()=>{B="dashboard",F()},2e3)},2e3)}function sa(e,t="info"){let n=document.getElementById("toastContainer");n||(n=document.createElement("div"),n.id="toastContainer",n.style.cssText="position: fixed; top: 20px; right: 20px; z-index: 9999;",document.body.appendChild(n));const a={success:"#10b981",error:"#ef4444",info:"#3b82f6",warning:"#f59e0b"},o=document.createElement("div");o.style.cssText=`
    background-color: ${a[t]||a.info};
    color: white;
    padding: 16px 24px;
    border-radius: 8px;
    margin-bottom: 10px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    animation: slideIn 0.3s ease-out;
    min-width: 300px;
  `,o.textContent=e,n.appendChild(o),setTimeout(()=>{o.style.animation="slideOut 0.3s ease-in",setTimeout(()=>o.remove(),300)},3e3)}const Rs=document.createElement("style");Rs.textContent=`
  @keyframes slideIn {
    from {
      transform: translateX(400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(400px);
      opacity: 0;
    }
  }
  
  /* Ocultar flecha del dropdown en botón de perfil */
  #btnProfile.dropdown-toggle::after {
    display: none;
  }
`;document.head.appendChild(Rs);function qt(){return`
    <div id="sidebar" class="bg-dark text-white d-flex flex-column" style="width: 280px; min-height: 100vh; transition: width 0.3s ease; position: relative;">
      <div class="p-4">
        <div class="d-flex justify-content-between align-items-center mb-5">
          <h1 class="h3 fw-bold mb-0 sidebar-title" style="white-space: nowrap; overflow: hidden; transition: opacity 0.2s ease, width 0.2s ease;">ZeroChaos</h1>
          <button id="toggleSidebar" class="btn btn-sm btn-dark border-0" style="background-color: rgba(255,255,255,0.1); flex-shrink: 0;">
            <i class="bi bi-chevron-left"></i>
          </button>
        </div>
        
        <nav class="nav flex-column gap-2">
          <a href="#" class="nav-link text-white d-flex align-items-center py-3 px-3 rounded hover-link" 
             style="white-space: nowrap; overflow: hidden; transition: all 0.3s ease;" id="navDashboard" title="Dashboard">
            <i class="bi bi-grid-fill fs-5" style="min-width: 24px; margin-right: 12px;"></i>
            <span class="sidebar-text" style="transition: opacity 0.2s ease, width 0.2s ease;">Dashboard</span>
          </a>
          <a href="#" class="nav-link text-white d-flex align-items-center py-3 px-3 rounded hover-link" 
             style="white-space: nowrap; overflow: hidden; transition: all 0.3s ease;" id="navProjects" title="Projects">
            <i class="bi bi-folder-fill fs-5" style="min-width: 24px; margin-right: 12px;"></i>
            <span class="sidebar-text" style="transition: opacity 0.2s ease, width 0.2s ease;">Projects</span>
          </a>
          <a href="#" class="nav-link text-white d-flex align-items-center py-3 px-3 rounded hover-link" 
             style="white-space: nowrap; overflow: hidden; transition: all 0.3s ease;" id="navTeams" title="Teams">
            <i class="bi bi-people-fill fs-5" style="min-width: 24px; margin-right: 12px;"></i>
            <span class="sidebar-text" style="transition: opacity 0.2s ease, width 0.2s ease;">Teams</span>
          </a>
          <a href="#" class="nav-link text-white d-flex align-items-center py-3 px-3 rounded hover-link" 
             style="white-space: nowrap; overflow: hidden; transition: all 0.3s ease;" id="navCalendar" title="Calendar">
            <i class="bi bi-calendar-fill fs-5" style="min-width: 24px; margin-right: 12px;"></i>
            <span class="sidebar-text" style="transition: opacity 0.2s ease, width 0.2s ease;">Calendar</span>
          </a>
          <a href="#" class="nav-link text-white d-flex align-items-center py-3 px-3 rounded hover-link" 
             style="white-space: nowrap; overflow: hidden; transition: all 0.3s ease;" id="navSettings" title="Settings">
            <i class="bi bi-gear-fill fs-5" style="min-width: 24px; margin-right: 12px;"></i>
            <span class="sidebar-text" style="transition: opacity 0.2s ease, width 0.2s ease;">Settings</span>
          </a>
        </nav>
      </div>

      <div class="mt-auto p-4 sidebar-footer" style="overflow: hidden; transition: all 0.3s ease;">
        <div class="bg-secondary rounded p-3">
          <p class="mb-1 small fw-semibold sidebar-text" style="white-space: nowrap; overflow: hidden; transition: opacity 0.2s ease, width 0.2s ease;">Plan ${(g==null?void 0:g.plan)==="premium"?"Premium":(g==null?void 0:g.plan)==="professional"?"Professional":"Básico"}</p>
          <a href="#" class="text-white small text-decoration-none sidebar-text" style="white-space: nowrap; overflow: hidden; display: block; transition: opacity 0.2s ease, width 0.2s ease;" id="linkPlans">Ver planes →</a>
        </div>
      </div>
    </div>
  `}function cn(){return`
    <div class="bg-white border-bottom p-3">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-md-6">
            <div class="input-group">
              <span class="input-group-text bg-white border-end-0">
                <i class="bi bi-search"></i>
              </span>
              <input type="text" class="form-control border-start-0" placeholder="Search">
            </div>
          </div>
          <div class="col-md-6 text-end">
            <button class="btn btn-light rounded-circle me-2">
              <i class="bi bi-inbox-fill"></i>
            </button>
            <button class="btn btn-light rounded-circle me-2">
              <i class="bi bi-clock-fill"></i>
            </button>
            <div class="dropdown d-inline-block">
              <button class="btn btn-light rounded-circle dropdown-toggle" type="button" id="btnProfile" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="bi bi-person-fill"></i>
              </button>
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="btnProfile">
                <li><a class="dropdown-item" href="#" id="menuProfile">
                  <i class="bi bi-person me-2"></i>Profile
                </a></li>
                <li><a class="dropdown-item" href="#" id="menuSettings">
                  <i class="bi bi-gear me-2"></i>Settings
                </a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item text-danger" href="#" id="menuLogout">
                  <i class="bi bi-box-arrow-right me-2"></i>Logout
                </a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  `}function ri(){return!g.projects||g.projects.length===0?`
      <div class="col-12">
        <div class="alert alert-info">
          No hay proyectos aún. ¡Haz clic en "Nuevo Proyecto" para crear uno!
        </div>
      </div>
    `:g.projects.map(e=>{const t=sb(e.tasks),n=t>70?"success":t>30?"primary":"warning";return`
      <div class="col-md-4">
        <div class="card h-100 project-card" data-project-id="${e.id}" style="cursor: pointer;">
          <div class="card-body">
            <h5 class="card-title fw-bold mb-3">${e.name}</h5>
            <div class="progress mb-2" style="height: 8px;">
              <div class="progress-bar bg-${n}" style="width: ${t}%"></div>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <small class="text-muted">${e.dueDate||"No due date"}</small>
              <strong>${t}%</strong>
            </div>
          </div>
        </div>
      </div>
    `}).join("")}function sb(e){if(!e||e.length===0)return 0;const t=e.filter(n=>n.completed).length;return Math.round(t/e.length*100)}function rb(){Ut(),setTimeout(()=>{[...document.querySelectorAll('[data-bs-toggle="dropdown"]')].map(a=>new oc(a))},100);const e=document.getElementById("btnNewProject");e&&e.addEventListener("click",()=>{const n=document.getElementById("newProjectModal");new Se(n).show()});const t=document.getElementById("btnCreateProject");t&&t.addEventListener("click",()=>{const n=document.getElementById("newProjectName").value,a=document.getElementById("newProjectDue").value;if(!n.trim()){alert("Please enter a project name");return}g.projects||(g.projects=[]);const o={id:Date.now(),name:n,dueDate:a||"No due date",tasks:[],createdAt:new Date().toLocaleDateString("es-ES")};g.projects.push(o),me();const r=document.getElementById("newProjectModal");Se.getInstance(r).hide(),document.getElementById("newProjectName").value="",document.getElementById("newProjectDue").value="",F()}),document.querySelectorAll(".project-card").forEach(n=>{n.addEventListener("click",()=>{const a=parseInt(n.dataset.projectId);li(a)})})}let Mt=null;function li(e){const t=document.getElementById("btnAISort");t&&(t.onclick=async()=>{if(!n.tasks||n.tasks.length===0){alert("No hay tareas para ordenar");return}t.disabled=!0,t.innerHTML="⏳ Analizando...";try{const h=await Mg([...n.tasks]);n.tasks=h,me(),jt(n.tasks),t.disabled=!1,t.innerHTML="🤖 Ordenar con IA",alert("✅ Tareas ordenadas por dificultad")}catch(h){console.error("Error:",h),t.disabled=!1,t.innerHTML="🤖 Ordenar con IA",alert("❌ Error: "+h.message)}}),Mt=e;const n=g.projects.find(h=>h.id===e);if(!n){console.error("Project not found:",e);return}const a=document.getElementById("projectDetailTitle");a&&(a.textContent=n.name),n.tasks||(n.tasks=[]),jt(n.tasks);const o=document.getElementById("projectDetailModal");new Se(o).show();const d=document.getElementById("btnAddTask");d&&(d.onclick=()=>{const h=document.getElementById("newTaskName").value;if(!h.trim()){alert("Please enter a task name");return}n.tasks.push({id:Date.now(),name:h,completed:!1,description:"",priority:"medium",tags:[],subtasks:[],dependencies:[],estimatedDuration:null,aiSuggestions:null}),document.getElementById("newTaskName").value="",jt(n.tasks),me();const m=document.getElementById("projectsGrid");m&&(m.innerHTML=ri())});const f=document.getElementById("btnDeleteProject");f&&(f.onclick=()=>{confirm("Are you sure you want to delete this project?")&&(g.projects=g.projects.filter(m=>m.id!==e),me(),Se.getInstance(o).hide(),F())})}function jt(e){const t=document.getElementById("tasksList");if(!e||e.length===0){t.innerHTML='<p class="text-muted">No tasks yet. Add your first task!</p>';return}t.innerHTML=e.map(n=>`
    <div class="card mb-3 task-card" data-task-id="${n.id}" style="cursor: pointer; transition: all 0.2s;">
      <div class="card-body">
        <div class="d-flex align-items-start gap-3">
          <input type="checkbox" class="form-check-input task-checkbox mt-1" 
                 data-task-id="${n.id}" ${n.completed?"checked":""} 
                 onclick="event.stopPropagation()">
          
          <div class="flex-grow-1">
            <div class="d-flex justify-content-between align-items-start mb-2">
              <h6 class="mb-1 ${n.completed?"text-decoration-line-through text-muted":""}">
                ${n.name}
              </h6>
              <div class="d-flex gap-2">
                ${n.difficultyLabel?`<span class="badge bg-info">${n.difficultyLabel}</span>`:""}
                <button class="btn btn-sm btn-outline-danger task-delete" data-task-id="${n.id}" onclick="event.stopPropagation()">
                  <i class="bi bi-trash"></i>
                </button>
              </div>
            </div>
            
            ${n.description?`<p class="text-muted small mb-2">${n.description.substring(0,100)}${n.description.length>100?"...":""}</p>`:""}
            
            <div class="d-flex flex-wrap gap-2 align-items-center">
              ${n.tags&&n.tags.length>0?n.tags.map(a=>`
                <span class="badge bg-primary">${a}</span>
              `).join(""):""}
              
              ${n.estimatedDuration?`<small class="text-muted"><i class="bi bi-clock"></i> ${n.estimatedDuration}</small>`:""}
              
              ${n.subtasks&&n.subtasks.length>0?`
                <small class="text-muted">
                  <i class="bi bi-list-check"></i> ${n.subtasks.filter(a=>a.completed).length}/${n.subtasks.length}
                </small>
              `:""}
              
              ${n.dependencies&&n.dependencies.length>0?`
                <small class="text-muted"><i class="bi bi-link-45deg"></i> ${n.dependencies.length} dependencies</small>
              `:""}
            </div>
          </div>
        </div>
      </div>
    </div>
  `).join(""),document.querySelectorAll(".task-checkbox").forEach(n=>{n.addEventListener("change",a=>{const o=parseInt(a.target.dataset.taskId),r=g.projects.find(h=>h.id===Mt),d=r.tasks.find(h=>h.id===o);d.completed=a.target.checked,jt(r.tasks),me();const f=document.getElementById("projectsGrid");f&&(f.innerHTML=ri(),document.querySelectorAll(".project-card").forEach(h=>{h.addEventListener("click",()=>{const m=parseInt(h.dataset.projectId);li(m)})}))})}),document.querySelectorAll(".task-delete").forEach(n=>{n.addEventListener("click",a=>{const o=parseInt(a.currentTarget.dataset.taskId),r=g.projects.find(f=>f.id===Mt);r.tasks=r.tasks.filter(f=>f.id!==o),jt(r.tasks),me();const d=document.getElementById("projectsGrid");d&&(d.innerHTML=ri(),document.querySelectorAll(".project-card").forEach(f=>{f.addEventListener("click",()=>{const h=parseInt(f.dataset.projectId);li(h)})}))})}),document.querySelectorAll(".task-card").forEach(n=>{n.addEventListener("click",a=>{const o=parseInt(n.dataset.taskId);lb(o)})})}let gi=null;function lb(e){gi=e;const t=g.projects.find(f=>f.id===Mt),n=t.tasks.find(f=>f.id===e);if(!n)return;n.tags||(n.tags=[]),n.subtasks||(n.subtasks=[]),n.dependencies||(n.dependencies=[]),n.priority||(n.priority="medium"),document.getElementById("taskDetailName").value=n.name||"",document.getElementById("taskDetailDescription").value=n.description||"",document.getElementById("taskDetailPriority").value=n.priority||"medium";const a=document.getElementById("taskDetailAIDifficulty");n.difficultyLabel?a.innerHTML=`<span class="badge bg-info">${n.difficultyLabel}</span>`:a.innerHTML='<span class="text-muted">Not analyzed yet</span>';const o=document.getElementById("taskDetailEstimatedDuration");n.estimatedDuration?o.innerHTML=`<span class="badge bg-success"><i class="bi bi-clock"></i> ${n.estimatedDuration}</span>`:o.innerHTML='<span class="text-muted">Not analyzed yet</span>',ba(n.tags),bi(n.subtasks);const r=document.getElementById("taskDetailDependencies");r.innerHTML=t.tasks.filter(f=>f.id!==e).map(f=>`<option value="${f.id}" ${n.dependencies.includes(f.id)?"selected":""}>${f.name}</option>`).join(""),n.aiSuggestions?(document.getElementById("taskDetailAISuggestions").classList.remove("d-none"),document.getElementById("aiSuggestionsContent").innerHTML=n.aiSuggestions):document.getElementById("taskDetailAISuggestions").classList.add("d-none"),new Se(document.getElementById("taskDetailModal")).show(),cb(n,t)}function ba(e){const t=document.getElementById("taskDetailTags");t.innerHTML=e.map(n=>`
    <span class="badge bg-primary d-flex align-items-center gap-1">
      ${n}
      <i class="bi bi-x-circle" style="cursor: pointer;" onclick="removeTag('${n}')"></i>
    </span>
  `).join("")}function bi(e){const t=document.getElementById("taskDetailSubtasks");t.innerHTML=e.map((n,a)=>`
    <div class="d-flex align-items-center gap-2 mb-2">
      <input type="checkbox" class="form-check-input" ${n.completed?"checked":""} 
             onchange="toggleSubtask(${a})">
      <span class="${n.completed?"text-decoration-line-through text-muted":""}">${n.name}</span>
      <button class="btn btn-sm btn-outline-danger ms-auto" onclick="removeSubtask(${a})">
        <i class="bi bi-trash"></i>
      </button>
    </div>
  `).join("")}window.removeTag=function(e){const n=g.projects.find(a=>a.id===Mt).tasks.find(a=>a.id===gi);n.tags=n.tags.filter(a=>a!==e),ba(n.tags)};window.toggleSubtask=function(e){const n=g.projects.find(a=>a.id===Mt).tasks.find(a=>a.id===gi);n.subtasks[e].completed=!n.subtasks[e].completed,bi(n.subtasks)};window.removeSubtask=function(e){const n=g.projects.find(a=>a.id===Mt).tasks.find(a=>a.id===gi);n.subtasks.splice(e,1),bi(n.subtasks)};function cb(e,t){document.getElementById("btnAddTag").onclick=()=>{const n=document.getElementById("taskDetailNewTag"),a=n.value.trim();a&&!e.tags.includes(a)&&(e.tags.push(a),ba(e.tags),n.value="")},document.getElementById("btnAddSubtask").onclick=()=>{const n=document.getElementById("taskDetailNewSubtask"),a=n.value.trim();a&&(e.subtasks.push({name:a,completed:!1}),bi(e.subtasks),n.value="")},document.getElementById("btnAITaskAnalyze").onclick=async()=>{const n=document.getElementById("btnAITaskAnalyze");n.disabled=!0,n.innerHTML="⏳ Analyzing...";try{const a=await Rg(e);e.aiSuggestions=a,e.difficultyLabel&&(document.getElementById("taskDetailAIDifficulty").innerHTML=`<span class="badge bg-info">${e.difficultyLabel}</span>`),e.estimatedDuration&&(document.getElementById("taskDetailEstimatedDuration").innerHTML=`<span class="badge bg-success"><i class="bi bi-clock"></i> ${e.estimatedDuration}</span>`),document.getElementById("taskDetailAISuggestions").classList.remove("d-none"),document.getElementById("aiSuggestionsContent").innerHTML=a,me(),jt(t.tasks),n.disabled=!1,n.innerHTML="🤖 Analizar con IA",alert("✅ ¡Tarea analizada exitosamente!")}catch(a){console.error("Error:",a),n.disabled=!1,n.innerHTML="🤖 Analizar con IA",alert("❌ Error: "+a.message)}},document.getElementById("btnSaveTaskDetail").onclick=()=>{e.name=document.getElementById("taskDetailName").value.trim(),e.description=document.getElementById("taskDetailDescription").value.trim(),e.priority=document.getElementById("taskDetailPriority").value;const n=Array.from(document.getElementById("taskDetailDependencies").selectedOptions);e.dependencies=n.map(o=>parseInt(o.value)),me(),jt(t.tasks),Se.getInstance(document.getElementById("taskDetailModal")).hide()}}function ys(){const e=document.getElementById("loginEmail").value,t=document.getElementById("loginPassword").value,n=document.getElementById("loginError");if(!e.trim()||!t){n.textContent="Email y contraseña son requeridos",n.classList.remove("d-none");return}const a=Rt.find(o=>o.email===e&&o.password===t);if(!a){n.textContent="Email o contraseña incorrectos",n.classList.remove("d-none");return}g=a,me(),B="dashboard",F()}function db(){const e=document.getElementById("registerName").value,t=document.getElementById("registerEmail").value,n=document.getElementById("registerPassword").value,a=document.getElementById("registerConfirmPassword").value,o=document.getElementById("registerError");if(!e.trim()||!t.trim()||!n){o.textContent="Todos los campos son obligatorios",o.classList.remove("d-none");return}if(n!==a){o.textContent="Las contraseñas no coinciden",o.classList.remove("d-none");return}if(n.length<6){o.textContent="La contraseña debe tener al menos 6 caracteres",o.classList.remove("d-none");return}if(Rt.some(d=>d.email===t)){o.textContent="El email ya está registrado",o.classList.remove("d-none");return}const r={id:Date.now(),name:e,email:t,password:n,projects:[],plan:"basico",billingCycle:"monthly"};Rt.push(r),me(),B="login",F()}function Ms(){g=null,localStorage.removeItem("zerochaos_logged_user"),B="landing",F()}function me(){localStorage.setItem("zerochaos_users",JSON.stringify(Rt)),g&&localStorage.setItem("zerochaos_logged_user",JSON.stringify(g))}function pb(){const e=localStorage.getItem("zerochaos_users"),t=localStorage.getItem("zerochaos_logged_user");e&&(Rt=JSON.parse(e)),t&&(g=JSON.parse(t),B="dashboard")}pb();function ub(){try{if(F(),g)try{Ut()}catch(e){console.error("Error initializing navigation:",e)}}catch(e){console.error("Error initializing application:",e);const t=document.getElementById("app");t&&(t.innerHTML=`
        <div class="alert alert-danger m-4">
          <h4>Error al cargar la aplicación</h4>
          <p>Por favor, recarga la página. Si el problema persiste, contacta al soporte.</p>
          <p><small>${e.message}</small></p>
        </div>
      `)}}document.addEventListener("DOMContentLoaded",ub);
