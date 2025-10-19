(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();var ze="top",st="bottom",at="right",Xe="left",Ro="auto",pi=[ze,st,at,Xe],In="start",si="end",bc="clippingParents",da="viewport",ti="popper",_c="reference",Gs=pi.reduce(function(t,e){return t.concat([e+"-"+In,e+"-"+si])},[]),pa=[].concat(pi,[Ro]).reduce(function(t,e){return t.concat([e,e+"-"+In,e+"-"+si])},[]),yc="beforeRead",vc="read",wc="afterRead",xc="beforeMain",Ac="main",Ec="afterMain",kc="beforeWrite",Tc="write",Ic="afterWrite",Sc=[yc,vc,wc,xc,Ac,Ec,kc,Tc,Ic];function Ut(t){return t?(t.nodeName||"").toLowerCase():null}function rt(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function Sn(t){var e=rt(t).Element;return t instanceof e||t instanceof Element}function ht(t){var e=rt(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function ua(t){if(typeof ShadowRoot>"u")return!1;var e=rt(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function Wu(t){var e=t.state;Object.keys(e.elements).forEach(function(n){var i=e.styles[n]||{},s=e.attributes[n]||{},r=e.elements[n];!ht(r)||!Ut(r)||(Object.assign(r.style,i),Object.keys(s).forEach(function(c){var p=s[c];p===!1?r.removeAttribute(c):r.setAttribute(c,p===!0?"":p)}))})}function Ku(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,n.popper),e.styles=n,e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach(function(i){var s=e.elements[i],r=e.attributes[i]||{},c=Object.keys(e.styles.hasOwnProperty(i)?e.styles[i]:n[i]),p=c.reduce(function(u,m){return u[m]="",u},{});!ht(s)||!Ut(s)||(Object.assign(s.style,p),Object.keys(r).forEach(function(u){s.removeAttribute(u)}))})}}const ma={name:"applyStyles",enabled:!0,phase:"write",fn:Wu,effect:Ku,requires:["computeStyles"]};function Rt(t){return t.split("-")[0]}var Tn=Math.max,Po=Math.min,ai=Math.round;function ea(){var t=navigator.userAgentData;return t!=null&&t.brands&&Array.isArray(t.brands)?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function Cc(){return!/^((?!chrome|android).)*safari/i.test(ea())}function ri(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!1);var i=t.getBoundingClientRect(),s=1,r=1;e&&ht(t)&&(s=t.offsetWidth>0&&ai(i.width)/t.offsetWidth||1,r=t.offsetHeight>0&&ai(i.height)/t.offsetHeight||1);var c=Sn(t)?rt(t):window,p=c.visualViewport,u=!Cc()&&n,m=(i.left+(u&&p?p.offsetLeft:0))/s,h=(i.top+(u&&p?p.offsetTop:0))/r,E=i.width/s,O=i.height/r;return{width:E,height:O,top:h,right:m+E,bottom:h+O,left:m,x:m,y:h}}function fa(t){var e=ri(t),n=t.offsetWidth,i=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-i)<=1&&(i=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:i}}function Pc(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&ua(n)){var i=e;do{if(i&&t.isSameNode(i))return!0;i=i.parentNode||i.host}while(i)}return!1}function Xt(t){return rt(t).getComputedStyle(t)}function zu(t){return["table","td","th"].indexOf(Ut(t))>=0}function an(t){return((Sn(t)?t.ownerDocument:t.document)||window.document).documentElement}function Mo(t){return Ut(t)==="html"?t:t.assignedSlot||t.parentNode||(ua(t)?t.host:null)||an(t)}function hl(t){return!ht(t)||Xt(t).position==="fixed"?null:t.offsetParent}function Xu(t){var e=/firefox/i.test(ea()),n=/Trident/i.test(ea());if(n&&ht(t)){var i=Xt(t);if(i.position==="fixed")return null}var s=Mo(t);for(ua(s)&&(s=s.host);ht(s)&&["html","body"].indexOf(Ut(s))<0;){var r=Xt(s);if(r.transform!=="none"||r.perspective!=="none"||r.contain==="paint"||["transform","perspective"].indexOf(r.willChange)!==-1||e&&r.willChange==="filter"||e&&r.filter&&r.filter!=="none")return s;s=s.parentNode}return null}function ji(t){for(var e=rt(t),n=hl(t);n&&zu(n)&&Xt(n).position==="static";)n=hl(n);return n&&(Ut(n)==="html"||Ut(n)==="body"&&Xt(n).position==="static")?e:n||Xu(t)||e}function ha(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function Di(t,e,n){return Tn(t,Po(e,n))}function Yu(t,e,n){var i=Di(t,e,n);return i>n?n:i}function Oc(){return{top:0,right:0,bottom:0,left:0}}function Dc(t){return Object.assign({},Oc(),t)}function Lc(t,e){return e.reduce(function(n,i){return n[i]=t,n},{})}var Qu=function(e,n){return e=typeof e=="function"?e(Object.assign({},n.rects,{placement:n.placement})):e,Dc(typeof e!="number"?e:Lc(e,pi))};function Ju(t){var e,n=t.state,i=t.name,s=t.options,r=n.elements.arrow,c=n.modifiersData.popperOffsets,p=Rt(n.placement),u=ha(p),m=[Xe,at].indexOf(p)>=0,h=m?"height":"width";if(!(!r||!c)){var E=Qu(s.padding,n),O=fa(r),k=u==="y"?ze:Xe,R=u==="y"?st:at,M=n.rects.reference[h]+n.rects.reference[u]-c[u]-n.rects.popper[h],q=c[u]-n.rects.reference[u],j=ji(r),z=j?u==="y"?j.clientHeight||0:j.clientWidth||0:0,Y=M/2-q/2,H=E[k],Z=z-O[h]-E[R],ee=z/2-O[h]/2+Y,de=Di(H,ee,Z),we=u;n.modifiersData[i]=(e={},e[we]=de,e.centerOffset=de-ee,e)}}function Zu(t){var e=t.state,n=t.options,i=n.element,s=i===void 0?"[data-popper-arrow]":i;s!=null&&(typeof s=="string"&&(s=e.elements.popper.querySelector(s),!s)||Pc(e.elements.popper,s)&&(e.elements.arrow=s))}const $c={name:"arrow",enabled:!0,phase:"main",fn:Ju,effect:Zu,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function li(t){return t.split("-")[1]}var Gu={top:"auto",right:"auto",bottom:"auto",left:"auto"};function em(t,e){var n=t.x,i=t.y,s=e.devicePixelRatio||1;return{x:ai(n*s)/s||0,y:ai(i*s)/s||0}}function gl(t){var e,n=t.popper,i=t.popperRect,s=t.placement,r=t.variation,c=t.offsets,p=t.position,u=t.gpuAcceleration,m=t.adaptive,h=t.roundOffsets,E=t.isFixed,O=c.x,k=O===void 0?0:O,R=c.y,M=R===void 0?0:R,q=typeof h=="function"?h({x:k,y:M}):{x:k,y:M};k=q.x,M=q.y;var j=c.hasOwnProperty("x"),z=c.hasOwnProperty("y"),Y=Xe,H=ze,Z=window;if(m){var ee=ji(n),de="clientHeight",we="clientWidth";if(ee===rt(n)&&(ee=an(n),Xt(ee).position!=="static"&&p==="absolute"&&(de="scrollHeight",we="scrollWidth")),ee=ee,s===ze||(s===Xe||s===at)&&r===si){H=st;var ge=E&&ee===Z&&Z.visualViewport?Z.visualViewport.height:ee[de];M-=ge-i.height,M*=u?1:-1}if(s===Xe||(s===ze||s===st)&&r===si){Y=at;var be=E&&ee===Z&&Z.visualViewport?Z.visualViewport.width:ee[we];k-=be-i.width,k*=u?1:-1}}var ke=Object.assign({position:p},m&&Gu),qe=h===!0?em({x:k,y:M},rt(n)):{x:k,y:M};if(k=qe.x,M=qe.y,u){var Te;return Object.assign({},ke,(Te={},Te[H]=z?"0":"",Te[Y]=j?"0":"",Te.transform=(Z.devicePixelRatio||1)<=1?"translate("+k+"px, "+M+"px)":"translate3d("+k+"px, "+M+"px, 0)",Te))}return Object.assign({},ke,(e={},e[H]=z?M+"px":"",e[Y]=j?k+"px":"",e.transform="",e))}function tm(t){var e=t.state,n=t.options,i=n.gpuAcceleration,s=i===void 0?!0:i,r=n.adaptive,c=r===void 0?!0:r,p=n.roundOffsets,u=p===void 0?!0:p,m={placement:Rt(e.placement),variation:li(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:s,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,gl(Object.assign({},m,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:c,roundOffsets:u})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,gl(Object.assign({},m,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:u})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const ga={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:tm,data:{}};var bo={passive:!0};function nm(t){var e=t.state,n=t.instance,i=t.options,s=i.scroll,r=s===void 0?!0:s,c=i.resize,p=c===void 0?!0:c,u=rt(e.elements.popper),m=[].concat(e.scrollParents.reference,e.scrollParents.popper);return r&&m.forEach(function(h){h.addEventListener("scroll",n.update,bo)}),p&&u.addEventListener("resize",n.update,bo),function(){r&&m.forEach(function(h){h.removeEventListener("scroll",n.update,bo)}),p&&u.removeEventListener("resize",n.update,bo)}}const ba={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:nm,data:{}};var im={left:"right",right:"left",bottom:"top",top:"bottom"};function Eo(t){return t.replace(/left|right|bottom|top/g,function(e){return im[e]})}var om={start:"end",end:"start"};function bl(t){return t.replace(/start|end/g,function(e){return om[e]})}function _a(t){var e=rt(t),n=e.pageXOffset,i=e.pageYOffset;return{scrollLeft:n,scrollTop:i}}function ya(t){return ri(an(t)).left+_a(t).scrollLeft}function sm(t,e){var n=rt(t),i=an(t),s=n.visualViewport,r=i.clientWidth,c=i.clientHeight,p=0,u=0;if(s){r=s.width,c=s.height;var m=Cc();(m||!m&&e==="fixed")&&(p=s.offsetLeft,u=s.offsetTop)}return{width:r,height:c,x:p+ya(t),y:u}}function am(t){var e,n=an(t),i=_a(t),s=(e=t.ownerDocument)==null?void 0:e.body,r=Tn(n.scrollWidth,n.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),c=Tn(n.scrollHeight,n.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0),p=-i.scrollLeft+ya(t),u=-i.scrollTop;return Xt(s||n).direction==="rtl"&&(p+=Tn(n.clientWidth,s?s.clientWidth:0)-r),{width:r,height:c,x:p,y:u}}function va(t){var e=Xt(t),n=e.overflow,i=e.overflowX,s=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+s+i)}function Nc(t){return["html","body","#document"].indexOf(Ut(t))>=0?t.ownerDocument.body:ht(t)&&va(t)?t:Nc(Mo(t))}function Li(t,e){var n;e===void 0&&(e=[]);var i=Nc(t),s=i===((n=t.ownerDocument)==null?void 0:n.body),r=rt(i),c=s?[r].concat(r.visualViewport||[],va(i)?i:[]):i,p=e.concat(c);return s?p:p.concat(Li(Mo(c)))}function ta(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function rm(t,e){var n=ri(t,!1,e==="fixed");return n.top=n.top+t.clientTop,n.left=n.left+t.clientLeft,n.bottom=n.top+t.clientHeight,n.right=n.left+t.clientWidth,n.width=t.clientWidth,n.height=t.clientHeight,n.x=n.left,n.y=n.top,n}function _l(t,e,n){return e===da?ta(sm(t,n)):Sn(e)?rm(e,n):ta(am(an(t)))}function lm(t){var e=Li(Mo(t)),n=["absolute","fixed"].indexOf(Xt(t).position)>=0,i=n&&ht(t)?ji(t):t;return Sn(i)?e.filter(function(s){return Sn(s)&&Pc(s,i)&&Ut(s)!=="body"}):[]}function cm(t,e,n,i){var s=e==="clippingParents"?lm(t):[].concat(e),r=[].concat(s,[n]),c=r[0],p=r.reduce(function(u,m){var h=_l(t,m,i);return u.top=Tn(h.top,u.top),u.right=Po(h.right,u.right),u.bottom=Po(h.bottom,u.bottom),u.left=Tn(h.left,u.left),u},_l(t,c,i));return p.width=p.right-p.left,p.height=p.bottom-p.top,p.x=p.left,p.y=p.top,p}function Rc(t){var e=t.reference,n=t.element,i=t.placement,s=i?Rt(i):null,r=i?li(i):null,c=e.x+e.width/2-n.width/2,p=e.y+e.height/2-n.height/2,u;switch(s){case ze:u={x:c,y:e.y-n.height};break;case st:u={x:c,y:e.y+e.height};break;case at:u={x:e.x+e.width,y:p};break;case Xe:u={x:e.x-n.width,y:p};break;default:u={x:e.x,y:e.y}}var m=s?ha(s):null;if(m!=null){var h=m==="y"?"height":"width";switch(r){case In:u[m]=u[m]-(e[h]/2-n[h]/2);break;case si:u[m]=u[m]+(e[h]/2-n[h]/2);break}}return u}function ci(t,e){e===void 0&&(e={});var n=e,i=n.placement,s=i===void 0?t.placement:i,r=n.strategy,c=r===void 0?t.strategy:r,p=n.boundary,u=p===void 0?bc:p,m=n.rootBoundary,h=m===void 0?da:m,E=n.elementContext,O=E===void 0?ti:E,k=n.altBoundary,R=k===void 0?!1:k,M=n.padding,q=M===void 0?0:M,j=Dc(typeof q!="number"?q:Lc(q,pi)),z=O===ti?_c:ti,Y=t.rects.popper,H=t.elements[R?z:O],Z=cm(Sn(H)?H:H.contextElement||an(t.elements.popper),u,h,c),ee=ri(t.elements.reference),de=Rc({reference:ee,element:Y,placement:s}),we=ta(Object.assign({},Y,de)),ge=O===ti?we:ee,be={top:Z.top-ge.top+j.top,bottom:ge.bottom-Z.bottom+j.bottom,left:Z.left-ge.left+j.left,right:ge.right-Z.right+j.right},ke=t.modifiersData.offset;if(O===ti&&ke){var qe=ke[s];Object.keys(be).forEach(function(Te){var Ge=[at,st].indexOf(Te)>=0?1:-1,et=[ze,st].indexOf(Te)>=0?"y":"x";be[Te]+=qe[et]*Ge})}return be}function dm(t,e){e===void 0&&(e={});var n=e,i=n.placement,s=n.boundary,r=n.rootBoundary,c=n.padding,p=n.flipVariations,u=n.allowedAutoPlacements,m=u===void 0?pa:u,h=li(i),E=h?p?Gs:Gs.filter(function(R){return li(R)===h}):pi,O=E.filter(function(R){return m.indexOf(R)>=0});O.length===0&&(O=E);var k=O.reduce(function(R,M){return R[M]=ci(t,{placement:M,boundary:s,rootBoundary:r,padding:c})[Rt(M)],R},{});return Object.keys(k).sort(function(R,M){return k[R]-k[M]})}function pm(t){if(Rt(t)===Ro)return[];var e=Eo(t);return[bl(t),e,bl(e)]}function um(t){var e=t.state,n=t.options,i=t.name;if(!e.modifiersData[i]._skip){for(var s=n.mainAxis,r=s===void 0?!0:s,c=n.altAxis,p=c===void 0?!0:c,u=n.fallbackPlacements,m=n.padding,h=n.boundary,E=n.rootBoundary,O=n.altBoundary,k=n.flipVariations,R=k===void 0?!0:k,M=n.allowedAutoPlacements,q=e.options.placement,j=Rt(q),z=j===q,Y=u||(z||!R?[Eo(q)]:pm(q)),H=[q].concat(Y).reduce(function(ct,$e){return ct.concat(Rt($e)===Ro?dm(e,{placement:$e,boundary:h,rootBoundary:E,padding:m,flipVariations:R,allowedAutoPlacements:M}):$e)},[]),Z=e.rects.reference,ee=e.rects.popper,de=new Map,we=!0,ge=H[0],be=0;be<H.length;be++){var ke=H[be],qe=Rt(ke),Te=li(ke)===In,Ge=[ze,st].indexOf(qe)>=0,et=Ge?"width":"height",Le=ci(e,{placement:ke,boundary:h,rootBoundary:E,altBoundary:O,padding:m}),xe=Ge?Te?at:Xe:Te?st:ze;Z[et]>ee[et]&&(xe=Eo(xe));var w=Eo(xe),A=[];if(r&&A.push(Le[qe]<=0),p&&A.push(Le[xe]<=0,Le[w]<=0),A.every(function(ct){return ct})){ge=ke,we=!1;break}de.set(ke,A)}if(we)for(var S=R?3:1,_=function($e){var wt=H.find(function(Be){var xt=de.get(Be);if(xt)return xt.slice(0,$e).every(function($){return $})});if(wt)return ge=wt,"break"},vt=S;vt>0;vt--){var Pt=_(vt);if(Pt==="break")break}e.placement!==ge&&(e.modifiersData[i]._skip=!0,e.placement=ge,e.reset=!0)}}const Mc={name:"flip",enabled:!0,phase:"main",fn:um,requiresIfExists:["offset"],data:{_skip:!1}};function yl(t,e,n){return n===void 0&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function vl(t){return[ze,at,st,Xe].some(function(e){return t[e]>=0})}function mm(t){var e=t.state,n=t.name,i=e.rects.reference,s=e.rects.popper,r=e.modifiersData.preventOverflow,c=ci(e,{elementContext:"reference"}),p=ci(e,{altBoundary:!0}),u=yl(c,i),m=yl(p,s,r),h=vl(u),E=vl(m);e.modifiersData[n]={referenceClippingOffsets:u,popperEscapeOffsets:m,isReferenceHidden:h,hasPopperEscaped:E},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":h,"data-popper-escaped":E})}const jc={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:mm};function fm(t,e,n){var i=Rt(t),s=[Xe,ze].indexOf(i)>=0?-1:1,r=typeof n=="function"?n(Object.assign({},e,{placement:t})):n,c=r[0],p=r[1];return c=c||0,p=(p||0)*s,[Xe,at].indexOf(i)>=0?{x:p,y:c}:{x:c,y:p}}function hm(t){var e=t.state,n=t.options,i=t.name,s=n.offset,r=s===void 0?[0,0]:s,c=pa.reduce(function(h,E){return h[E]=fm(E,e.rects,r),h},{}),p=c[e.placement],u=p.x,m=p.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=u,e.modifiersData.popperOffsets.y+=m),e.modifiersData[i]=c}const Uc={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:hm};function gm(t){var e=t.state,n=t.name;e.modifiersData[n]=Rc({reference:e.rects.reference,element:e.rects.popper,placement:e.placement})}const wa={name:"popperOffsets",enabled:!0,phase:"read",fn:gm,data:{}};function bm(t){return t==="x"?"y":"x"}function _m(t){var e=t.state,n=t.options,i=t.name,s=n.mainAxis,r=s===void 0?!0:s,c=n.altAxis,p=c===void 0?!1:c,u=n.boundary,m=n.rootBoundary,h=n.altBoundary,E=n.padding,O=n.tether,k=O===void 0?!0:O,R=n.tetherOffset,M=R===void 0?0:R,q=ci(e,{boundary:u,rootBoundary:m,padding:E,altBoundary:h}),j=Rt(e.placement),z=li(e.placement),Y=!z,H=ha(j),Z=bm(H),ee=e.modifiersData.popperOffsets,de=e.rects.reference,we=e.rects.popper,ge=typeof M=="function"?M(Object.assign({},e.rects,{placement:e.placement})):M,be=typeof ge=="number"?{mainAxis:ge,altAxis:ge}:Object.assign({mainAxis:0,altAxis:0},ge),ke=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,qe={x:0,y:0};if(ee){if(r){var Te,Ge=H==="y"?ze:Xe,et=H==="y"?st:at,Le=H==="y"?"height":"width",xe=ee[H],w=xe+q[Ge],A=xe-q[et],S=k?-we[Le]/2:0,_=z===In?de[Le]:we[Le],vt=z===In?-we[Le]:-de[Le],Pt=e.elements.arrow,ct=k&&Pt?fa(Pt):{width:0,height:0},$e=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:Oc(),wt=$e[Ge],Be=$e[et],xt=Di(0,de[Le],ct[Le]),$=Y?de[Le]/2-S-xt-wt-be.mainAxis:_-xt-wt-be.mainAxis,$n=Y?-de[Le]/2+S+xt+Be+be.mainAxis:vt+xt+Be+be.mainAxis,Nn=e.elements.arrow&&ji(e.elements.arrow),Qo=Nn?H==="y"?Nn.clientTop||0:Nn.clientLeft||0:0,Ki=(Te=ke?.[H])!=null?Te:0,dn=xe+$-Ki-Qo,zi=xe+$n-Ki,Qt=Di(k?Po(w,dn):w,xe,k?Tn(A,zi):A);ee[H]=Qt,qe[H]=Qt-xe}if(p){var qt,Jo=H==="x"?ze:Xe,Zo=H==="x"?st:at,Ft=ee[Z],Rn=Z==="y"?"height":"width",Xi=Ft+q[Jo],Yi=Ft-q[Zo],bi=[ze,Xe].indexOf(j)!==-1,pn=(qt=ke?.[Z])!=null?qt:0,At=bi?Xi:Ft-de[Rn]-we[Rn]-pn+be.altAxis,_i=bi?Ft+de[Rn]+we[Rn]-pn-be.altAxis:Yi,Qi=k&&bi?Yu(At,Ft,_i):Di(k?At:Xi,Ft,k?_i:Yi);ee[Z]=Qi,qe[Z]=Qi-Ft}e.modifiersData[i]=qe}}const Bc={name:"preventOverflow",enabled:!0,phase:"main",fn:_m,requiresIfExists:["offset"]};function ym(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function vm(t){return t===rt(t)||!ht(t)?_a(t):ym(t)}function wm(t){var e=t.getBoundingClientRect(),n=ai(e.width)/t.offsetWidth||1,i=ai(e.height)/t.offsetHeight||1;return n!==1||i!==1}function xm(t,e,n){n===void 0&&(n=!1);var i=ht(e),s=ht(e)&&wm(e),r=an(e),c=ri(t,s,n),p={scrollLeft:0,scrollTop:0},u={x:0,y:0};return(i||!i&&!n)&&((Ut(e)!=="body"||va(r))&&(p=vm(e)),ht(e)?(u=ri(e,!0),u.x+=e.clientLeft,u.y+=e.clientTop):r&&(u.x=ya(r))),{x:c.left+p.scrollLeft-u.x,y:c.top+p.scrollTop-u.y,width:c.width,height:c.height}}function Am(t){var e=new Map,n=new Set,i=[];t.forEach(function(r){e.set(r.name,r)});function s(r){n.add(r.name);var c=[].concat(r.requires||[],r.requiresIfExists||[]);c.forEach(function(p){if(!n.has(p)){var u=e.get(p);u&&s(u)}}),i.push(r)}return t.forEach(function(r){n.has(r.name)||s(r)}),i}function Em(t){var e=Am(t);return Sc.reduce(function(n,i){return n.concat(e.filter(function(s){return s.phase===i}))},[])}function km(t){var e;return function(){return e||(e=new Promise(function(n){Promise.resolve().then(function(){e=void 0,n(t())})})),e}}function Tm(t){var e=t.reduce(function(n,i){var s=n[i.name];return n[i.name]=s?Object.assign({},s,i,{options:Object.assign({},s.options,i.options),data:Object.assign({},s.data,i.data)}):i,n},{});return Object.keys(e).map(function(n){return e[n]})}var wl={placement:"bottom",modifiers:[],strategy:"absolute"};function xl(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some(function(i){return!(i&&typeof i.getBoundingClientRect=="function")})}function jo(t){t===void 0&&(t={});var e=t,n=e.defaultModifiers,i=n===void 0?[]:n,s=e.defaultOptions,r=s===void 0?wl:s;return function(p,u,m){m===void 0&&(m=r);var h={placement:"bottom",orderedModifiers:[],options:Object.assign({},wl,r),modifiersData:{},elements:{reference:p,popper:u},attributes:{},styles:{}},E=[],O=!1,k={state:h,setOptions:function(j){var z=typeof j=="function"?j(h.options):j;M(),h.options=Object.assign({},r,h.options,z),h.scrollParents={reference:Sn(p)?Li(p):p.contextElement?Li(p.contextElement):[],popper:Li(u)};var Y=Em(Tm([].concat(i,h.options.modifiers)));return h.orderedModifiers=Y.filter(function(H){return H.enabled}),R(),k.update()},forceUpdate:function(){if(!O){var j=h.elements,z=j.reference,Y=j.popper;if(xl(z,Y)){h.rects={reference:xm(z,ji(Y),h.options.strategy==="fixed"),popper:fa(Y)},h.reset=!1,h.placement=h.options.placement,h.orderedModifiers.forEach(function(be){return h.modifiersData[be.name]=Object.assign({},be.data)});for(var H=0;H<h.orderedModifiers.length;H++){if(h.reset===!0){h.reset=!1,H=-1;continue}var Z=h.orderedModifiers[H],ee=Z.fn,de=Z.options,we=de===void 0?{}:de,ge=Z.name;typeof ee=="function"&&(h=ee({state:h,options:we,name:ge,instance:k})||h)}}}},update:km(function(){return new Promise(function(q){k.forceUpdate(),q(h)})}),destroy:function(){M(),O=!0}};if(!xl(p,u))return k;k.setOptions(m).then(function(q){!O&&m.onFirstUpdate&&m.onFirstUpdate(q)});function R(){h.orderedModifiers.forEach(function(q){var j=q.name,z=q.options,Y=z===void 0?{}:z,H=q.effect;if(typeof H=="function"){var Z=H({state:h,name:j,instance:k,options:Y}),ee=function(){};E.push(Z||ee)}})}function M(){E.forEach(function(q){return q()}),E=[]}return k}}var Im=jo(),Sm=[ba,wa,ga,ma],Cm=jo({defaultModifiers:Sm}),Pm=[ba,wa,ga,ma,Uc,Mc,Bc,$c,jc],xa=jo({defaultModifiers:Pm});const qc=Object.freeze(Object.defineProperty({__proto__:null,afterMain:Ec,afterRead:wc,afterWrite:Ic,applyStyles:ma,arrow:$c,auto:Ro,basePlacements:pi,beforeMain:xc,beforeRead:yc,beforeWrite:kc,bottom:st,clippingParents:bc,computeStyles:ga,createPopper:xa,createPopperBase:Im,createPopperLite:Cm,detectOverflow:ci,end:si,eventListeners:ba,flip:Mc,hide:jc,left:Xe,main:Ac,modifierPhases:Sc,offset:Uc,placements:pa,popper:ti,popperGenerator:jo,popperOffsets:wa,preventOverflow:Bc,read:vc,reference:_c,right:at,start:In,top:ze,variationPlacements:Gs,viewport:da,write:Tc},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.3.8 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const en=new Map,Ls={set(t,e,n){en.has(t)||en.set(t,new Map);const i=en.get(t);if(!i.has(e)&&i.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`);return}i.set(e,n)},get(t,e){return en.has(t)&&en.get(t).get(e)||null},remove(t,e){if(!en.has(t))return;const n=en.get(t);n.delete(e),n.size===0&&en.delete(t)}},Om=1e6,Dm=1e3,na="transitionend",Fc=t=>(t&&window.CSS&&window.CSS.escape&&(t=t.replace(/#([^\s"#']+)/g,(e,n)=>`#${CSS.escape(n)}`)),t),Lm=t=>t==null?`${t}`:Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),$m=t=>{do t+=Math.floor(Math.random()*Om);while(document.getElementById(t));return t},Nm=t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:n}=window.getComputedStyle(t);const i=Number.parseFloat(e),s=Number.parseFloat(n);return!i&&!s?0:(e=e.split(",")[0],n=n.split(",")[0],(Number.parseFloat(e)+Number.parseFloat(n))*Dm)},Vc=t=>{t.dispatchEvent(new Event(na))},Kt=t=>!t||typeof t!="object"?!1:(typeof t.jquery<"u"&&(t=t[0]),typeof t.nodeType<"u"),nn=t=>Kt(t)?t.jquery?t[0]:t:typeof t=="string"&&t.length>0?document.querySelector(Fc(t)):null,ui=t=>{if(!Kt(t)||t.getClientRects().length===0)return!1;const e=getComputedStyle(t).getPropertyValue("visibility")==="visible",n=t.closest("details:not([open])");if(!n)return e;if(n!==t){const i=t.closest("summary");if(i&&i.parentNode!==n||i===null)return!1}return e},on=t=>!t||t.nodeType!==Node.ELEMENT_NODE||t.classList.contains("disabled")?!0:typeof t.disabled<"u"?t.disabled:t.hasAttribute("disabled")&&t.getAttribute("disabled")!=="false",Hc=t=>{if(!document.documentElement.attachShadow)return null;if(typeof t.getRootNode=="function"){const e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?Hc(t.parentNode):null},Oo=()=>{},Ui=t=>{t.offsetHeight},Wc=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,$s=[],Rm=t=>{document.readyState==="loading"?($s.length||document.addEventListener("DOMContentLoaded",()=>{for(const e of $s)e()}),$s.push(t)):t()},gt=()=>document.documentElement.dir==="rtl",yt=t=>{Rm(()=>{const e=Wc();if(e){const n=t.NAME,i=e.fn[n];e.fn[n]=t.jQueryInterface,e.fn[n].Constructor=t,e.fn[n].noConflict=()=>(e.fn[n]=i,t.jQueryInterface)}})},Je=(t,e=[],n=t)=>typeof t=="function"?t.call(...e):n,Kc=(t,e,n=!0)=>{if(!n){Je(t);return}const s=Nm(e)+5;let r=!1;const c=({target:p})=>{p===e&&(r=!0,e.removeEventListener(na,c),Je(t))};e.addEventListener(na,c),setTimeout(()=>{r||Vc(e)},s)},Aa=(t,e,n,i)=>{const s=t.length;let r=t.indexOf(e);return r===-1?!n&&i?t[s-1]:t[0]:(r+=n?1:-1,i&&(r=(r+s)%s),t[Math.max(0,Math.min(r,s-1))])},Mm=/[^.]*(?=\..*)\.|.*/,jm=/\..*/,Um=/::\d+$/,Ns={};let Al=1;const zc={mouseenter:"mouseover",mouseleave:"mouseout"},Bm=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function Xc(t,e){return e&&`${e}::${Al++}`||t.uidEvent||Al++}function Yc(t){const e=Xc(t);return t.uidEvent=e,Ns[e]=Ns[e]||{},Ns[e]}function qm(t,e){return function n(i){return Ea(i,{delegateTarget:t}),n.oneOff&&x.off(t,i.type,e),e.apply(t,[i])}}function Fm(t,e,n){return function i(s){const r=t.querySelectorAll(e);for(let{target:c}=s;c&&c!==this;c=c.parentNode)for(const p of r)if(p===c)return Ea(s,{delegateTarget:c}),i.oneOff&&x.off(t,s.type,e,n),n.apply(c,[s])}}function Qc(t,e,n=null){return Object.values(t).find(i=>i.callable===e&&i.delegationSelector===n)}function Jc(t,e,n){const i=typeof e=="string",s=i?n:e||n;let r=Zc(t);return Bm.has(r)||(r=t),[i,s,r]}function El(t,e,n,i,s){if(typeof e!="string"||!t)return;let[r,c,p]=Jc(e,n,i);e in zc&&(c=(R=>function(M){if(!M.relatedTarget||M.relatedTarget!==M.delegateTarget&&!M.delegateTarget.contains(M.relatedTarget))return R.call(this,M)})(c));const u=Yc(t),m=u[p]||(u[p]={}),h=Qc(m,c,r?n:null);if(h){h.oneOff=h.oneOff&&s;return}const E=Xc(c,e.replace(Mm,"")),O=r?Fm(t,n,c):qm(t,c);O.delegationSelector=r?n:null,O.callable=c,O.oneOff=s,O.uidEvent=E,m[E]=O,t.addEventListener(p,O,r)}function ia(t,e,n,i,s){const r=Qc(e[n],i,s);r&&(t.removeEventListener(n,r,!!s),delete e[n][r.uidEvent])}function Vm(t,e,n,i){const s=e[n]||{};for(const[r,c]of Object.entries(s))r.includes(i)&&ia(t,e,n,c.callable,c.delegationSelector)}function Zc(t){return t=t.replace(jm,""),zc[t]||t}const x={on(t,e,n,i){El(t,e,n,i,!1)},one(t,e,n,i){El(t,e,n,i,!0)},off(t,e,n,i){if(typeof e!="string"||!t)return;const[s,r,c]=Jc(e,n,i),p=c!==e,u=Yc(t),m=u[c]||{},h=e.startsWith(".");if(typeof r<"u"){if(!Object.keys(m).length)return;ia(t,u,c,r,s?n:null);return}if(h)for(const E of Object.keys(u))Vm(t,u,E,e.slice(1));for(const[E,O]of Object.entries(m)){const k=E.replace(Um,"");(!p||e.includes(k))&&ia(t,u,c,O.callable,O.delegationSelector)}},trigger(t,e,n){if(typeof e!="string"||!t)return null;const i=Wc(),s=Zc(e),r=e!==s;let c=null,p=!0,u=!0,m=!1;r&&i&&(c=i.Event(e,n),i(t).trigger(c),p=!c.isPropagationStopped(),u=!c.isImmediatePropagationStopped(),m=c.isDefaultPrevented());const h=Ea(new Event(e,{bubbles:p,cancelable:!0}),n);return m&&h.preventDefault(),u&&t.dispatchEvent(h),h.defaultPrevented&&c&&c.preventDefault(),h}};function Ea(t,e={}){for(const[n,i]of Object.entries(e))try{t[n]=i}catch{Object.defineProperty(t,n,{configurable:!0,get(){return i}})}return t}function kl(t){if(t==="true")return!0;if(t==="false")return!1;if(t===Number(t).toString())return Number(t);if(t===""||t==="null")return null;if(typeof t!="string")return t;try{return JSON.parse(decodeURIComponent(t))}catch{return t}}function Rs(t){return t.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}const zt={setDataAttribute(t,e,n){t.setAttribute(`data-bs-${Rs(e)}`,n)},removeDataAttribute(t,e){t.removeAttribute(`data-bs-${Rs(e)}`)},getDataAttributes(t){if(!t)return{};const e={},n=Object.keys(t.dataset).filter(i=>i.startsWith("bs")&&!i.startsWith("bsConfig"));for(const i of n){let s=i.replace(/^bs/,"");s=s.charAt(0).toLowerCase()+s.slice(1),e[s]=kl(t.dataset[i])}return e},getDataAttribute(t,e){return kl(t.getAttribute(`data-bs-${Rs(e)}`))}};class Bi{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(e,n){const i=Kt(n)?zt.getDataAttribute(n,"config"):{};return{...this.constructor.Default,...typeof i=="object"?i:{},...Kt(n)?zt.getDataAttributes(n):{},...typeof e=="object"?e:{}}}_typeCheckConfig(e,n=this.constructor.DefaultType){for(const[i,s]of Object.entries(n)){const r=e[i],c=Kt(r)?"element":Lm(r);if(!new RegExp(s).test(c))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${i}" provided type "${c}" but expected type "${s}".`)}}}const Hm="5.3.8";class St extends Bi{constructor(e,n){super(),e=nn(e),e&&(this._element=e,this._config=this._getConfig(n),Ls.set(this._element,this.constructor.DATA_KEY,this))}dispose(){Ls.remove(this._element,this.constructor.DATA_KEY),x.off(this._element,this.constructor.EVENT_KEY);for(const e of Object.getOwnPropertyNames(this))this[e]=null}_queueCallback(e,n,i=!0){Kc(e,n,i)}_getConfig(e){return e=this._mergeConfigObj(e,this._element),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}static getInstance(e){return Ls.get(nn(e),this.DATA_KEY)}static getOrCreateInstance(e,n={}){return this.getInstance(e)||new this(e,typeof n=="object"?n:null)}static get VERSION(){return Hm}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(e){return`${e}${this.EVENT_KEY}`}}const Ms=t=>{let e=t.getAttribute("data-bs-target");if(!e||e==="#"){let n=t.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),e=n&&n!=="#"?n.trim():null}return e?e.split(",").map(n=>Fc(n)).join(","):null},N={find(t,e=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(e,t))},findOne(t,e=document.documentElement){return Element.prototype.querySelector.call(e,t)},children(t,e){return[].concat(...t.children).filter(n=>n.matches(e))},parents(t,e){const n=[];let i=t.parentNode.closest(e);for(;i;)n.push(i),i=i.parentNode.closest(e);return n},prev(t,e){let n=t.previousElementSibling;for(;n;){if(n.matches(e))return[n];n=n.previousElementSibling}return[]},next(t,e){let n=t.nextElementSibling;for(;n;){if(n.matches(e))return[n];n=n.nextElementSibling}return[]},focusableChildren(t){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(n=>`${n}:not([tabindex^="-"])`).join(",");return this.find(e,t).filter(n=>!on(n)&&ui(n))},getSelectorFromElement(t){const e=Ms(t);return e&&N.findOne(e)?e:null},getElementFromSelector(t){const e=Ms(t);return e?N.findOne(e):null},getMultipleElementsFromSelector(t){const e=Ms(t);return e?N.find(e):[]}},Uo=(t,e="hide")=>{const n=`click.dismiss${t.EVENT_KEY}`,i=t.NAME;x.on(document,n,`[data-bs-dismiss="${i}"]`,function(s){if(["A","AREA"].includes(this.tagName)&&s.preventDefault(),on(this))return;const r=N.getElementFromSelector(this)||this.closest(`.${i}`);t.getOrCreateInstance(r)[e]()})},Wm="alert",Km="bs.alert",Gc=`.${Km}`,zm=`close${Gc}`,Xm=`closed${Gc}`,Ym="fade",Qm="show";class Bo extends St{static get NAME(){return Wm}close(){if(x.trigger(this._element,zm).defaultPrevented)return;this._element.classList.remove(Qm);const n=this._element.classList.contains(Ym);this._queueCallback(()=>this._destroyElement(),this._element,n)}_destroyElement(){this._element.remove(),x.trigger(this._element,Xm),this.dispose()}static jQueryInterface(e){return this.each(function(){const n=Bo.getOrCreateInstance(this);if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e](this)}})}}Uo(Bo,"close");yt(Bo);const Jm="button",Zm="bs.button",Gm=`.${Zm}`,ef=".data-api",tf="active",Tl='[data-bs-toggle="button"]',nf=`click${Gm}${ef}`;class qo extends St{static get NAME(){return Jm}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(tf))}static jQueryInterface(e){return this.each(function(){const n=qo.getOrCreateInstance(this);e==="toggle"&&n[e]()})}}x.on(document,nf,Tl,t=>{t.preventDefault();const e=t.target.closest(Tl);qo.getOrCreateInstance(e).toggle()});yt(qo);const of="swipe",mi=".bs.swipe",sf=`touchstart${mi}`,af=`touchmove${mi}`,rf=`touchend${mi}`,lf=`pointerdown${mi}`,cf=`pointerup${mi}`,df="touch",pf="pen",uf="pointer-event",mf=40,ff={endCallback:null,leftCallback:null,rightCallback:null},hf={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class Do extends Bi{constructor(e,n){super(),this._element=e,!(!e||!Do.isSupported())&&(this._config=this._getConfig(n),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return ff}static get DefaultType(){return hf}static get NAME(){return of}dispose(){x.off(this._element,mi)}_start(e){if(!this._supportPointerEvents){this._deltaX=e.touches[0].clientX;return}this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX)}_end(e){this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX-this._deltaX),this._handleSwipe(),Je(this._config.endCallback)}_move(e){this._deltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this._deltaX}_handleSwipe(){const e=Math.abs(this._deltaX);if(e<=mf)return;const n=e/this._deltaX;this._deltaX=0,n&&Je(n>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(x.on(this._element,lf,e=>this._start(e)),x.on(this._element,cf,e=>this._end(e)),this._element.classList.add(uf)):(x.on(this._element,sf,e=>this._start(e)),x.on(this._element,af,e=>this._move(e)),x.on(this._element,rf,e=>this._end(e)))}_eventIsPointerPenTouch(e){return this._supportPointerEvents&&(e.pointerType===pf||e.pointerType===df)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const gf="carousel",bf="bs.carousel",rn=`.${bf}`,ed=".data-api",_f="ArrowLeft",yf="ArrowRight",vf=500,Ii="next",Zn="prev",ni="left",ko="right",wf=`slide${rn}`,js=`slid${rn}`,xf=`keydown${rn}`,Af=`mouseenter${rn}`,Ef=`mouseleave${rn}`,kf=`dragstart${rn}`,Tf=`load${rn}${ed}`,If=`click${rn}${ed}`,td="carousel",_o="active",Sf="slide",Cf="carousel-item-end",Pf="carousel-item-start",Of="carousel-item-next",Df="carousel-item-prev",nd=".active",id=".carousel-item",Lf=nd+id,$f=".carousel-item img",Nf=".carousel-indicators",Rf="[data-bs-slide], [data-bs-slide-to]",Mf='[data-bs-ride="carousel"]',jf={[_f]:ko,[yf]:ni},Uf={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},Bf={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class qi extends St{constructor(e,n){super(e,n),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=N.findOne(Nf,this._element),this._addEventListeners(),this._config.ride===td&&this.cycle()}static get Default(){return Uf}static get DefaultType(){return Bf}static get NAME(){return gf}next(){this._slide(Ii)}nextWhenVisible(){!document.hidden&&ui(this._element)&&this.next()}prev(){this._slide(Zn)}pause(){this._isSliding&&Vc(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){x.one(this._element,js,()=>this.cycle());return}this.cycle()}}to(e){const n=this._getItems();if(e>n.length-1||e<0)return;if(this._isSliding){x.one(this._element,js,()=>this.to(e));return}const i=this._getItemIndex(this._getActive());if(i===e)return;const s=e>i?Ii:Zn;this._slide(s,n[e])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(e){return e.defaultInterval=e.interval,e}_addEventListeners(){this._config.keyboard&&x.on(this._element,xf,e=>this._keydown(e)),this._config.pause==="hover"&&(x.on(this._element,Af,()=>this.pause()),x.on(this._element,Ef,()=>this._maybeEnableCycle())),this._config.touch&&Do.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const i of N.find($f,this._element))x.on(i,kf,s=>s.preventDefault());const n={leftCallback:()=>this._slide(this._directionToOrder(ni)),rightCallback:()=>this._slide(this._directionToOrder(ko)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),vf+this._config.interval))}};this._swipeHelper=new Do(this._element,n)}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;const n=jf[e.key];n&&(e.preventDefault(),this._slide(this._directionToOrder(n)))}_getItemIndex(e){return this._getItems().indexOf(e)}_setActiveIndicatorElement(e){if(!this._indicatorsElement)return;const n=N.findOne(nd,this._indicatorsElement);n.classList.remove(_o),n.removeAttribute("aria-current");const i=N.findOne(`[data-bs-slide-to="${e}"]`,this._indicatorsElement);i&&(i.classList.add(_o),i.setAttribute("aria-current","true"))}_updateInterval(){const e=this._activeElement||this._getActive();if(!e)return;const n=Number.parseInt(e.getAttribute("data-bs-interval"),10);this._config.interval=n||this._config.defaultInterval}_slide(e,n=null){if(this._isSliding)return;const i=this._getActive(),s=e===Ii,r=n||Aa(this._getItems(),i,s,this._config.wrap);if(r===i)return;const c=this._getItemIndex(r),p=k=>x.trigger(this._element,k,{relatedTarget:r,direction:this._orderToDirection(e),from:this._getItemIndex(i),to:c});if(p(wf).defaultPrevented||!i||!r)return;const m=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(c),this._activeElement=r;const h=s?Pf:Cf,E=s?Of:Df;r.classList.add(E),Ui(r),i.classList.add(h),r.classList.add(h);const O=()=>{r.classList.remove(h,E),r.classList.add(_o),i.classList.remove(_o,E,h),this._isSliding=!1,p(js)};this._queueCallback(O,i,this._isAnimated()),m&&this.cycle()}_isAnimated(){return this._element.classList.contains(Sf)}_getActive(){return N.findOne(Lf,this._element)}_getItems(){return N.find(id,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(e){return gt()?e===ni?Zn:Ii:e===ni?Ii:Zn}_orderToDirection(e){return gt()?e===Zn?ni:ko:e===Zn?ko:ni}static jQueryInterface(e){return this.each(function(){const n=qi.getOrCreateInstance(this,e);if(typeof e=="number"){n.to(e);return}if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e]()}})}}x.on(document,If,Rf,function(t){const e=N.getElementFromSelector(this);if(!e||!e.classList.contains(td))return;t.preventDefault();const n=qi.getOrCreateInstance(e),i=this.getAttribute("data-bs-slide-to");if(i){n.to(i),n._maybeEnableCycle();return}if(zt.getDataAttribute(this,"slide")==="next"){n.next(),n._maybeEnableCycle();return}n.prev(),n._maybeEnableCycle()});x.on(window,Tf,()=>{const t=N.find(Mf);for(const e of t)qi.getOrCreateInstance(e)});yt(qi);const qf="collapse",Ff="bs.collapse",Fi=`.${Ff}`,Vf=".data-api",Hf=`show${Fi}`,Wf=`shown${Fi}`,Kf=`hide${Fi}`,zf=`hidden${Fi}`,Xf=`click${Fi}${Vf}`,Us="show",oi="collapse",yo="collapsing",Yf="collapsed",Qf=`:scope .${oi} .${oi}`,Jf="collapse-horizontal",Zf="width",Gf="height",eh=".collapse.show, .collapse.collapsing",oa='[data-bs-toggle="collapse"]',th={parent:null,toggle:!0},nh={parent:"(null|element)",toggle:"boolean"};class Ri extends St{constructor(e,n){super(e,n),this._isTransitioning=!1,this._triggerArray=[];const i=N.find(oa);for(const s of i){const r=N.getSelectorFromElement(s),c=N.find(r).filter(p=>p===this._element);r!==null&&c.length&&this._triggerArray.push(s)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return th}static get DefaultType(){return nh}static get NAME(){return qf}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e=[];if(this._config.parent&&(e=this._getFirstLevelChildren(eh).filter(p=>p!==this._element).map(p=>Ri.getOrCreateInstance(p,{toggle:!1}))),e.length&&e[0]._isTransitioning||x.trigger(this._element,Hf).defaultPrevented)return;for(const p of e)p.hide();const i=this._getDimension();this._element.classList.remove(oi),this._element.classList.add(yo),this._element.style[i]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const s=()=>{this._isTransitioning=!1,this._element.classList.remove(yo),this._element.classList.add(oi,Us),this._element.style[i]="",x.trigger(this._element,Wf)},c=`scroll${i[0].toUpperCase()+i.slice(1)}`;this._queueCallback(s,this._element,!0),this._element.style[i]=`${this._element[c]}px`}hide(){if(this._isTransitioning||!this._isShown()||x.trigger(this._element,Kf).defaultPrevented)return;const n=this._getDimension();this._element.style[n]=`${this._element.getBoundingClientRect()[n]}px`,Ui(this._element),this._element.classList.add(yo),this._element.classList.remove(oi,Us);for(const s of this._triggerArray){const r=N.getElementFromSelector(s);r&&!this._isShown(r)&&this._addAriaAndCollapsedClass([s],!1)}this._isTransitioning=!0;const i=()=>{this._isTransitioning=!1,this._element.classList.remove(yo),this._element.classList.add(oi),x.trigger(this._element,zf)};this._element.style[n]="",this._queueCallback(i,this._element,!0)}_isShown(e=this._element){return e.classList.contains(Us)}_configAfterMerge(e){return e.toggle=!!e.toggle,e.parent=nn(e.parent),e}_getDimension(){return this._element.classList.contains(Jf)?Zf:Gf}_initializeChildren(){if(!this._config.parent)return;const e=this._getFirstLevelChildren(oa);for(const n of e){const i=N.getElementFromSelector(n);i&&this._addAriaAndCollapsedClass([n],this._isShown(i))}}_getFirstLevelChildren(e){const n=N.find(Qf,this._config.parent);return N.find(e,this._config.parent).filter(i=>!n.includes(i))}_addAriaAndCollapsedClass(e,n){if(e.length)for(const i of e)i.classList.toggle(Yf,!n),i.setAttribute("aria-expanded",n)}static jQueryInterface(e){const n={};return typeof e=="string"&&/show|hide/.test(e)&&(n.toggle=!1),this.each(function(){const i=Ri.getOrCreateInstance(this,n);if(typeof e=="string"){if(typeof i[e]>"u")throw new TypeError(`No method named "${e}"`);i[e]()}})}}x.on(document,Xf,oa,function(t){(t.target.tagName==="A"||t.delegateTarget&&t.delegateTarget.tagName==="A")&&t.preventDefault();for(const e of N.getMultipleElementsFromSelector(this))Ri.getOrCreateInstance(e,{toggle:!1}).toggle()});yt(Ri);const Il="dropdown",ih="bs.dropdown",Cn=`.${ih}`,ka=".data-api",oh="Escape",Sl="Tab",sh="ArrowUp",Cl="ArrowDown",ah=2,rh=`hide${Cn}`,lh=`hidden${Cn}`,ch=`show${Cn}`,dh=`shown${Cn}`,od=`click${Cn}${ka}`,sd=`keydown${Cn}${ka}`,ph=`keyup${Cn}${ka}`,ii="show",uh="dropup",mh="dropend",fh="dropstart",hh="dropup-center",gh="dropdown-center",En='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',bh=`${En}.${ii}`,To=".dropdown-menu",_h=".navbar",yh=".navbar-nav",vh=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",wh=gt()?"top-end":"top-start",xh=gt()?"top-start":"top-end",Ah=gt()?"bottom-end":"bottom-start",Eh=gt()?"bottom-start":"bottom-end",kh=gt()?"left-start":"right-start",Th=gt()?"right-start":"left-start",Ih="top",Sh="bottom",Ch={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},Ph={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class Mt extends St{constructor(e,n){super(e,n),this._popper=null,this._parent=this._element.parentNode,this._menu=N.next(this._element,To)[0]||N.prev(this._element,To)[0]||N.findOne(To,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return Ch}static get DefaultType(){return Ph}static get NAME(){return Il}toggle(){return this._isShown()?this.hide():this.show()}show(){if(on(this._element)||this._isShown())return;const e={relatedTarget:this._element};if(!x.trigger(this._element,ch,e).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(yh))for(const i of[].concat(...document.body.children))x.on(i,"mouseover",Oo);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(ii),this._element.classList.add(ii),x.trigger(this._element,dh,e)}}hide(){if(on(this._element)||!this._isShown())return;const e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(e){if(!x.trigger(this._element,rh,e).defaultPrevented){if("ontouchstart"in document.documentElement)for(const i of[].concat(...document.body.children))x.off(i,"mouseover",Oo);this._popper&&this._popper.destroy(),this._menu.classList.remove(ii),this._element.classList.remove(ii),this._element.setAttribute("aria-expanded","false"),zt.removeDataAttribute(this._menu,"popper"),x.trigger(this._element,lh,e)}}_getConfig(e){if(e=super._getConfig(e),typeof e.reference=="object"&&!Kt(e.reference)&&typeof e.reference.getBoundingClientRect!="function")throw new TypeError(`${Il.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return e}_createPopper(){if(typeof qc>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");let e=this._element;this._config.reference==="parent"?e=this._parent:Kt(this._config.reference)?e=nn(this._config.reference):typeof this._config.reference=="object"&&(e=this._config.reference);const n=this._getPopperConfig();this._popper=xa(e,this._menu,n)}_isShown(){return this._menu.classList.contains(ii)}_getPlacement(){const e=this._parent;if(e.classList.contains(mh))return kh;if(e.classList.contains(fh))return Th;if(e.classList.contains(hh))return Ih;if(e.classList.contains(gh))return Sh;const n=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return e.classList.contains(uh)?n?xh:wh:n?Eh:Ah}_detectNavbar(){return this._element.closest(_h)!==null}_getOffset(){const{offset:e}=this._config;return typeof e=="string"?e.split(",").map(n=>Number.parseInt(n,10)):typeof e=="function"?n=>e(n,this._element):e}_getPopperConfig(){const e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(zt.setDataAttribute(this._menu,"popper","static"),e.modifiers=[{name:"applyStyles",enabled:!1}]),{...e,...Je(this._config.popperConfig,[void 0,e])}}_selectMenuItem({key:e,target:n}){const i=N.find(vh,this._menu).filter(s=>ui(s));i.length&&Aa(i,n,e===Cl,!i.includes(n)).focus()}static jQueryInterface(e){return this.each(function(){const n=Mt.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]>"u")throw new TypeError(`No method named "${e}"`);n[e]()}})}static clearMenus(e){if(e.button===ah||e.type==="keyup"&&e.key!==Sl)return;const n=N.find(bh);for(const i of n){const s=Mt.getInstance(i);if(!s||s._config.autoClose===!1)continue;const r=e.composedPath(),c=r.includes(s._menu);if(r.includes(s._element)||s._config.autoClose==="inside"&&!c||s._config.autoClose==="outside"&&c||s._menu.contains(e.target)&&(e.type==="keyup"&&e.key===Sl||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;const p={relatedTarget:s._element};e.type==="click"&&(p.clickEvent=e),s._completeHide(p)}}static dataApiKeydownHandler(e){const n=/input|textarea/i.test(e.target.tagName),i=e.key===oh,s=[sh,Cl].includes(e.key);if(!s&&!i||n&&!i)return;e.preventDefault();const r=this.matches(En)?this:N.prev(this,En)[0]||N.next(this,En)[0]||N.findOne(En,e.delegateTarget.parentNode),c=Mt.getOrCreateInstance(r);if(s){e.stopPropagation(),c.show(),c._selectMenuItem(e);return}c._isShown()&&(e.stopPropagation(),c.hide(),r.focus())}}x.on(document,sd,En,Mt.dataApiKeydownHandler);x.on(document,sd,To,Mt.dataApiKeydownHandler);x.on(document,od,Mt.clearMenus);x.on(document,ph,Mt.clearMenus);x.on(document,od,En,function(t){t.preventDefault(),Mt.getOrCreateInstance(this).toggle()});yt(Mt);const ad="backdrop",Oh="fade",Pl="show",Ol=`mousedown.bs.${ad}`,Dh={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Lh={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class rd extends Bi{constructor(e){super(),this._config=this._getConfig(e),this._isAppended=!1,this._element=null}static get Default(){return Dh}static get DefaultType(){return Lh}static get NAME(){return ad}show(e){if(!this._config.isVisible){Je(e);return}this._append();const n=this._getElement();this._config.isAnimated&&Ui(n),n.classList.add(Pl),this._emulateAnimation(()=>{Je(e)})}hide(e){if(!this._config.isVisible){Je(e);return}this._getElement().classList.remove(Pl),this._emulateAnimation(()=>{this.dispose(),Je(e)})}dispose(){this._isAppended&&(x.off(this._element,Ol),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add(Oh),this._element=e}return this._element}_configAfterMerge(e){return e.rootElement=nn(e.rootElement),e}_append(){if(this._isAppended)return;const e=this._getElement();this._config.rootElement.append(e),x.on(e,Ol,()=>{Je(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(e){Kc(e,this._getElement(),this._config.isAnimated)}}const $h="focustrap",Nh="bs.focustrap",Lo=`.${Nh}`,Rh=`focusin${Lo}`,Mh=`keydown.tab${Lo}`,jh="Tab",Uh="forward",Dl="backward",Bh={autofocus:!0,trapElement:null},qh={autofocus:"boolean",trapElement:"element"};class ld extends Bi{constructor(e){super(),this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return Bh}static get DefaultType(){return qh}static get NAME(){return $h}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),x.off(document,Lo),x.on(document,Rh,e=>this._handleFocusin(e)),x.on(document,Mh,e=>this._handleKeydown(e)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,x.off(document,Lo))}_handleFocusin(e){const{trapElement:n}=this._config;if(e.target===document||e.target===n||n.contains(e.target))return;const i=N.focusableChildren(n);i.length===0?n.focus():this._lastTabNavDirection===Dl?i[i.length-1].focus():i[0].focus()}_handleKeydown(e){e.key===jh&&(this._lastTabNavDirection=e.shiftKey?Dl:Uh)}}const Ll=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",$l=".sticky-top",vo="padding-right",Nl="margin-right";class sa{constructor(){this._element=document.body}getWidth(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){const e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,vo,n=>n+e),this._setElementAttributes(Ll,vo,n=>n+e),this._setElementAttributes($l,Nl,n=>n-e)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,vo),this._resetElementAttributes(Ll,vo),this._resetElementAttributes($l,Nl)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(e,n,i){const s=this.getWidth(),r=c=>{if(c!==this._element&&window.innerWidth>c.clientWidth+s)return;this._saveInitialAttribute(c,n);const p=window.getComputedStyle(c).getPropertyValue(n);c.style.setProperty(n,`${i(Number.parseFloat(p))}px`)};this._applyManipulationCallback(e,r)}_saveInitialAttribute(e,n){const i=e.style.getPropertyValue(n);i&&zt.setDataAttribute(e,n,i)}_resetElementAttributes(e,n){const i=s=>{const r=zt.getDataAttribute(s,n);if(r===null){s.style.removeProperty(n);return}zt.removeDataAttribute(s,n),s.style.setProperty(n,r)};this._applyManipulationCallback(e,i)}_applyManipulationCallback(e,n){if(Kt(e)){n(e);return}for(const i of N.find(e,this._element))n(i)}}const Fh="modal",Vh="bs.modal",bt=`.${Vh}`,Hh=".data-api",Wh="Escape",Kh=`hide${bt}`,zh=`hidePrevented${bt}`,cd=`hidden${bt}`,dd=`show${bt}`,Xh=`shown${bt}`,Yh=`resize${bt}`,Qh=`click.dismiss${bt}`,Jh=`mousedown.dismiss${bt}`,Zh=`keydown.dismiss${bt}`,Gh=`click${bt}${Hh}`,Rl="modal-open",eg="fade",Ml="show",Bs="modal-static",tg=".modal.show",ng=".modal-dialog",ig=".modal-body",og='[data-bs-toggle="modal"]',sg={backdrop:!0,focus:!0,keyboard:!0},ag={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class _t extends St{constructor(e,n){super(e,n),this._dialog=N.findOne(ng,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new sa,this._addEventListeners()}static get Default(){return sg}static get DefaultType(){return ag}static get NAME(){return Fh}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){this._isShown||this._isTransitioning||x.trigger(this._element,dd,{relatedTarget:e}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Rl),this._adjustDialog(),this._backdrop.show(()=>this._showElement(e)))}hide(){!this._isShown||this._isTransitioning||x.trigger(this._element,Kh).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(Ml),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){x.off(window,bt),x.off(this._dialog,bt),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new rd({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new ld({trapElement:this._element})}_showElement(e){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const n=N.findOne(ig,this._dialog);n&&(n.scrollTop=0),Ui(this._element),this._element.classList.add(Ml);const i=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,x.trigger(this._element,Xh,{relatedTarget:e})};this._queueCallback(i,this._dialog,this._isAnimated())}_addEventListeners(){x.on(this._element,Zh,e=>{if(e.key===Wh){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),x.on(window,Yh,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),x.on(this._element,Jh,e=>{x.one(this._element,Qh,n=>{if(!(this._element!==e.target||this._element!==n.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(Rl),this._resetAdjustments(),this._scrollBar.reset(),x.trigger(this._element,cd)})}_isAnimated(){return this._element.classList.contains(eg)}_triggerBackdropTransition(){if(x.trigger(this._element,zh).defaultPrevented)return;const n=this._element.scrollHeight>document.documentElement.clientHeight,i=this._element.style.overflowY;i==="hidden"||this._element.classList.contains(Bs)||(n||(this._element.style.overflowY="hidden"),this._element.classList.add(Bs),this._queueCallback(()=>{this._element.classList.remove(Bs),this._queueCallback(()=>{this._element.style.overflowY=i},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const e=this._element.scrollHeight>document.documentElement.clientHeight,n=this._scrollBar.getWidth(),i=n>0;if(i&&!e){const s=gt()?"paddingLeft":"paddingRight";this._element.style[s]=`${n}px`}if(!i&&e){const s=gt()?"paddingRight":"paddingLeft";this._element.style[s]=`${n}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(e,n){return this.each(function(){const i=_t.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof i[e]>"u")throw new TypeError(`No method named "${e}"`);i[e](n)}})}}x.on(document,Gh,og,function(t){const e=N.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&t.preventDefault(),x.one(e,dd,s=>{s.defaultPrevented||x.one(e,cd,()=>{ui(this)&&this.focus()})});const n=N.findOne(tg);n&&_t.getInstance(n).hide(),_t.getOrCreateInstance(e).toggle(this)});Uo(_t);yt(_t);const rg="offcanvas",lg="bs.offcanvas",Yt=`.${lg}`,pd=".data-api",cg=`load${Yt}${pd}`,dg="Escape",jl="show",Ul="showing",Bl="hiding",pg="offcanvas-backdrop",ud=".offcanvas.show",ug=`show${Yt}`,mg=`shown${Yt}`,fg=`hide${Yt}`,ql=`hidePrevented${Yt}`,md=`hidden${Yt}`,hg=`resize${Yt}`,gg=`click${Yt}${pd}`,bg=`keydown.dismiss${Yt}`,_g='[data-bs-toggle="offcanvas"]',yg={backdrop:!0,keyboard:!0,scroll:!1},vg={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class sn extends St{constructor(e,n){super(e,n),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return yg}static get DefaultType(){return vg}static get NAME(){return rg}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown||x.trigger(this._element,ug,{relatedTarget:e}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new sa().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Ul);const i=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(jl),this._element.classList.remove(Ul),x.trigger(this._element,mg,{relatedTarget:e})};this._queueCallback(i,this._element,!0)}hide(){if(!this._isShown||x.trigger(this._element,fg).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Bl),this._backdrop.hide();const n=()=>{this._element.classList.remove(jl,Bl),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new sa().reset(),x.trigger(this._element,md)};this._queueCallback(n,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const e=()=>{if(this._config.backdrop==="static"){x.trigger(this._element,ql);return}this.hide()},n=!!this._config.backdrop;return new rd({className:pg,isVisible:n,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:n?e:null})}_initializeFocusTrap(){return new ld({trapElement:this._element})}_addEventListeners(){x.on(this._element,bg,e=>{if(e.key===dg){if(this._config.keyboard){this.hide();return}x.trigger(this._element,ql)}})}static jQueryInterface(e){return this.each(function(){const n=sn.getOrCreateInstance(this,e);if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e](this)}})}}x.on(document,gg,_g,function(t){const e=N.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),on(this))return;x.one(e,md,()=>{ui(this)&&this.focus()});const n=N.findOne(ud);n&&n!==e&&sn.getInstance(n).hide(),sn.getOrCreateInstance(e).toggle(this)});x.on(window,cg,()=>{for(const t of N.find(ud))sn.getOrCreateInstance(t).show()});x.on(window,hg,()=>{for(const t of N.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(t).position!=="fixed"&&sn.getOrCreateInstance(t).hide()});Uo(sn);yt(sn);const wg=/^aria-[\w-]*$/i,fd={"*":["class","dir","id","lang","role",wg],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},xg=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Ag=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,Eg=(t,e)=>{const n=t.nodeName.toLowerCase();return e.includes(n)?xg.has(n)?!!Ag.test(t.nodeValue):!0:e.filter(i=>i instanceof RegExp).some(i=>i.test(n))};function kg(t,e,n){if(!t.length)return t;if(n&&typeof n=="function")return n(t);const s=new window.DOMParser().parseFromString(t,"text/html"),r=[].concat(...s.body.querySelectorAll("*"));for(const c of r){const p=c.nodeName.toLowerCase();if(!Object.keys(e).includes(p)){c.remove();continue}const u=[].concat(...c.attributes),m=[].concat(e["*"]||[],e[p]||[]);for(const h of u)Eg(h,m)||c.removeAttribute(h.nodeName)}return s.body.innerHTML}const Tg="TemplateFactory",Ig={allowList:fd,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},Sg={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},Cg={entry:"(string|element|function|null)",selector:"(string|element)"};class Pg extends Bi{constructor(e){super(),this._config=this._getConfig(e)}static get Default(){return Ig}static get DefaultType(){return Sg}static get NAME(){return Tg}getContent(){return Object.values(this._config.content).map(e=>this._resolvePossibleFunction(e)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(e){return this._checkContent(e),this._config.content={...this._config.content,...e},this}toHtml(){const e=document.createElement("div");e.innerHTML=this._maybeSanitize(this._config.template);for(const[s,r]of Object.entries(this._config.content))this._setContent(e,r,s);const n=e.children[0],i=this._resolvePossibleFunction(this._config.extraClass);return i&&n.classList.add(...i.split(" ")),n}_typeCheckConfig(e){super._typeCheckConfig(e),this._checkContent(e.content)}_checkContent(e){for(const[n,i]of Object.entries(e))super._typeCheckConfig({selector:n,entry:i},Cg)}_setContent(e,n,i){const s=N.findOne(i,e);if(s){if(n=this._resolvePossibleFunction(n),!n){s.remove();return}if(Kt(n)){this._putElementInTemplate(nn(n),s);return}if(this._config.html){s.innerHTML=this._maybeSanitize(n);return}s.textContent=n}}_maybeSanitize(e){return this._config.sanitize?kg(e,this._config.allowList,this._config.sanitizeFn):e}_resolvePossibleFunction(e){return Je(e,[void 0,this])}_putElementInTemplate(e,n){if(this._config.html){n.innerHTML="",n.append(e);return}n.textContent=e.textContent}}const Og="tooltip",Dg=new Set(["sanitize","allowList","sanitizeFn"]),qs="fade",Lg="modal",wo="show",$g=".tooltip-inner",Fl=`.${Lg}`,Vl="hide.bs.modal",Si="hover",Fs="focus",Vs="click",Ng="manual",Rg="hide",Mg="hidden",jg="show",Ug="shown",Bg="inserted",qg="click",Fg="focusin",Vg="focusout",Hg="mouseenter",Wg="mouseleave",Kg={AUTO:"auto",TOP:"top",RIGHT:gt()?"left":"right",BOTTOM:"bottom",LEFT:gt()?"right":"left"},zg={allowList:fd,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},Xg={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class fi extends St{constructor(e,n){if(typeof qc>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");super(e,n),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return zg}static get DefaultType(){return Xg}static get NAME(){return Og}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),x.off(this._element.closest(Fl),Vl,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const e=x.trigger(this._element,this.constructor.eventName(jg)),i=(Hc(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(e.defaultPrevented||!i)return;this._disposePopper();const s=this._getTipElement();this._element.setAttribute("aria-describedby",s.getAttribute("id"));const{container:r}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(r.append(s),x.trigger(this._element,this.constructor.eventName(Bg))),this._popper=this._createPopper(s),s.classList.add(wo),"ontouchstart"in document.documentElement)for(const p of[].concat(...document.body.children))x.on(p,"mouseover",Oo);const c=()=>{x.trigger(this._element,this.constructor.eventName(Ug)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(c,this.tip,this._isAnimated())}hide(){if(!this._isShown()||x.trigger(this._element,this.constructor.eventName(Rg)).defaultPrevented)return;if(this._getTipElement().classList.remove(wo),"ontouchstart"in document.documentElement)for(const s of[].concat(...document.body.children))x.off(s,"mouseover",Oo);this._activeTrigger[Vs]=!1,this._activeTrigger[Fs]=!1,this._activeTrigger[Si]=!1,this._isHovered=null;const i=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),x.trigger(this._element,this.constructor.eventName(Mg)))};this._queueCallback(i,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(e){const n=this._getTemplateFactory(e).toHtml();if(!n)return null;n.classList.remove(qs,wo),n.classList.add(`bs-${this.constructor.NAME}-auto`);const i=$m(this.constructor.NAME).toString();return n.setAttribute("id",i),this._isAnimated()&&n.classList.add(qs),n}setContent(e){this._newContent=e,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(e){return this._templateFactory?this._templateFactory.changeContent(e):this._templateFactory=new Pg({...this._config,content:e,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[$g]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(e){return this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(qs)}_isShown(){return this.tip&&this.tip.classList.contains(wo)}_createPopper(e){const n=Je(this._config.placement,[this,e,this._element]),i=Kg[n.toUpperCase()];return xa(this._element,e,this._getPopperConfig(i))}_getOffset(){const{offset:e}=this._config;return typeof e=="string"?e.split(",").map(n=>Number.parseInt(n,10)):typeof e=="function"?n=>e(n,this._element):e}_resolvePossibleFunction(e){return Je(e,[this._element,this._element])}_getPopperConfig(e){const n={placement:e,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:i=>{this._getTipElement().setAttribute("data-popper-placement",i.state.placement)}}]};return{...n,...Je(this._config.popperConfig,[void 0,n])}}_setListeners(){const e=this._config.trigger.split(" ");for(const n of e)if(n==="click")x.on(this._element,this.constructor.eventName(qg),this._config.selector,i=>{const s=this._initializeOnDelegatedTarget(i);s._activeTrigger[Vs]=!(s._isShown()&&s._activeTrigger[Vs]),s.toggle()});else if(n!==Ng){const i=n===Si?this.constructor.eventName(Hg):this.constructor.eventName(Fg),s=n===Si?this.constructor.eventName(Wg):this.constructor.eventName(Vg);x.on(this._element,i,this._config.selector,r=>{const c=this._initializeOnDelegatedTarget(r);c._activeTrigger[r.type==="focusin"?Fs:Si]=!0,c._enter()}),x.on(this._element,s,this._config.selector,r=>{const c=this._initializeOnDelegatedTarget(r);c._activeTrigger[r.type==="focusout"?Fs:Si]=c._element.contains(r.relatedTarget),c._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},x.on(this._element.closest(Fl),Vl,this._hideModalHandler)}_fixTitle(){const e=this._element.getAttribute("title");e&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",e),this._element.setAttribute("data-bs-original-title",e),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(e,n){clearTimeout(this._timeout),this._timeout=setTimeout(e,n)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(e){const n=zt.getDataAttributes(this._element);for(const i of Object.keys(n))Dg.has(i)&&delete n[i];return e={...n,...typeof e=="object"&&e?e:{}},e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e.container=e.container===!1?document.body:nn(e.container),typeof e.delay=="number"&&(e.delay={show:e.delay,hide:e.delay}),typeof e.title=="number"&&(e.title=e.title.toString()),typeof e.content=="number"&&(e.content=e.content.toString()),e}_getDelegateConfig(){const e={};for(const[n,i]of Object.entries(this._config))this.constructor.Default[n]!==i&&(e[n]=i);return e.selector=!1,e.trigger="manual",e}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(e){return this.each(function(){const n=fi.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]>"u")throw new TypeError(`No method named "${e}"`);n[e]()}})}}yt(fi);const Yg="popover",Qg=".popover-header",Jg=".popover-body",Zg={...fi.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},Gg={...fi.DefaultType,content:"(null|string|element|function)"};class Ta extends fi{static get Default(){return Zg}static get DefaultType(){return Gg}static get NAME(){return Yg}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[Qg]:this._getTitle(),[Jg]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(e){return this.each(function(){const n=Ta.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]>"u")throw new TypeError(`No method named "${e}"`);n[e]()}})}}yt(Ta);const eb="scrollspy",tb="bs.scrollspy",Ia=`.${tb}`,nb=".data-api",ib=`activate${Ia}`,Hl=`click${Ia}`,ob=`load${Ia}${nb}`,sb="dropdown-item",Gn="active",ab='[data-bs-spy="scroll"]',Hs="[href]",rb=".nav, .list-group",Wl=".nav-link",lb=".nav-item",cb=".list-group-item",db=`${Wl}, ${lb} > ${Wl}, ${cb}`,pb=".dropdown",ub=".dropdown-toggle",mb={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},fb={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class Fo extends St{constructor(e,n){super(e,n),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return mb}static get DefaultType(){return fb}static get NAME(){return eb}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const e of this._observableSections.values())this._observer.observe(e)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(e){return e.target=nn(e.target)||document.body,e.rootMargin=e.offset?`${e.offset}px 0px -30%`:e.rootMargin,typeof e.threshold=="string"&&(e.threshold=e.threshold.split(",").map(n=>Number.parseFloat(n))),e}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(x.off(this._config.target,Hl),x.on(this._config.target,Hl,Hs,e=>{const n=this._observableSections.get(e.target.hash);if(n){e.preventDefault();const i=this._rootElement||window,s=n.offsetTop-this._element.offsetTop;if(i.scrollTo){i.scrollTo({top:s,behavior:"smooth"});return}i.scrollTop=s}}))}_getNewObserver(){const e={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(n=>this._observerCallback(n),e)}_observerCallback(e){const n=c=>this._targetLinks.get(`#${c.target.id}`),i=c=>{this._previousScrollData.visibleEntryTop=c.target.offsetTop,this._process(n(c))},s=(this._rootElement||document.documentElement).scrollTop,r=s>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=s;for(const c of e){if(!c.isIntersecting){this._activeTarget=null,this._clearActiveClass(n(c));continue}const p=c.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(r&&p){if(i(c),!s)return;continue}!r&&!p&&i(c)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const e=N.find(Hs,this._config.target);for(const n of e){if(!n.hash||on(n))continue;const i=N.findOne(decodeURI(n.hash),this._element);ui(i)&&(this._targetLinks.set(decodeURI(n.hash),n),this._observableSections.set(n.hash,i))}}_process(e){this._activeTarget!==e&&(this._clearActiveClass(this._config.target),this._activeTarget=e,e.classList.add(Gn),this._activateParents(e),x.trigger(this._element,ib,{relatedTarget:e}))}_activateParents(e){if(e.classList.contains(sb)){N.findOne(ub,e.closest(pb)).classList.add(Gn);return}for(const n of N.parents(e,rb))for(const i of N.prev(n,db))i.classList.add(Gn)}_clearActiveClass(e){e.classList.remove(Gn);const n=N.find(`${Hs}.${Gn}`,e);for(const i of n)i.classList.remove(Gn)}static jQueryInterface(e){return this.each(function(){const n=Fo.getOrCreateInstance(this,e);if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e]()}})}}x.on(window,ob,()=>{for(const t of N.find(ab))Fo.getOrCreateInstance(t)});yt(Fo);const hb="tab",gb="bs.tab",Pn=`.${gb}`,bb=`hide${Pn}`,_b=`hidden${Pn}`,yb=`show${Pn}`,vb=`shown${Pn}`,wb=`click${Pn}`,xb=`keydown${Pn}`,Ab=`load${Pn}`,Eb="ArrowLeft",Kl="ArrowRight",kb="ArrowUp",zl="ArrowDown",Ws="Home",Xl="End",kn="active",Yl="fade",Ks="show",Tb="dropdown",hd=".dropdown-toggle",Ib=".dropdown-menu",zs=`:not(${hd})`,Sb='.list-group, .nav, [role="tablist"]',Cb=".nav-item, .list-group-item",Pb=`.nav-link${zs}, .list-group-item${zs}, [role="tab"]${zs}`,gd='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Xs=`${Pb}, ${gd}`,Ob=`.${kn}[data-bs-toggle="tab"], .${kn}[data-bs-toggle="pill"], .${kn}[data-bs-toggle="list"]`;class di extends St{constructor(e){super(e),this._parent=this._element.closest(Sb),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),x.on(this._element,xb,n=>this._keydown(n)))}static get NAME(){return hb}show(){const e=this._element;if(this._elemIsActive(e))return;const n=this._getActiveElem(),i=n?x.trigger(n,bb,{relatedTarget:e}):null;x.trigger(e,yb,{relatedTarget:n}).defaultPrevented||i&&i.defaultPrevented||(this._deactivate(n,e),this._activate(e,n))}_activate(e,n){if(!e)return;e.classList.add(kn),this._activate(N.getElementFromSelector(e));const i=()=>{if(e.getAttribute("role")!=="tab"){e.classList.add(Ks);return}e.removeAttribute("tabindex"),e.setAttribute("aria-selected",!0),this._toggleDropDown(e,!0),x.trigger(e,vb,{relatedTarget:n})};this._queueCallback(i,e,e.classList.contains(Yl))}_deactivate(e,n){if(!e)return;e.classList.remove(kn),e.blur(),this._deactivate(N.getElementFromSelector(e));const i=()=>{if(e.getAttribute("role")!=="tab"){e.classList.remove(Ks);return}e.setAttribute("aria-selected",!1),e.setAttribute("tabindex","-1"),this._toggleDropDown(e,!1),x.trigger(e,_b,{relatedTarget:n})};this._queueCallback(i,e,e.classList.contains(Yl))}_keydown(e){if(![Eb,Kl,kb,zl,Ws,Xl].includes(e.key))return;e.stopPropagation(),e.preventDefault();const n=this._getChildren().filter(s=>!on(s));let i;if([Ws,Xl].includes(e.key))i=n[e.key===Ws?0:n.length-1];else{const s=[Kl,zl].includes(e.key);i=Aa(n,e.target,s,!0)}i&&(i.focus({preventScroll:!0}),di.getOrCreateInstance(i).show())}_getChildren(){return N.find(Xs,this._parent)}_getActiveElem(){return this._getChildren().find(e=>this._elemIsActive(e))||null}_setInitialAttributes(e,n){this._setAttributeIfNotExists(e,"role","tablist");for(const i of n)this._setInitialAttributesOnChild(i)}_setInitialAttributesOnChild(e){e=this._getInnerElement(e);const n=this._elemIsActive(e),i=this._getOuterElement(e);e.setAttribute("aria-selected",n),i!==e&&this._setAttributeIfNotExists(i,"role","presentation"),n||e.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(e,"role","tab"),this._setInitialAttributesOnTargetPanel(e)}_setInitialAttributesOnTargetPanel(e){const n=N.getElementFromSelector(e);n&&(this._setAttributeIfNotExists(n,"role","tabpanel"),e.id&&this._setAttributeIfNotExists(n,"aria-labelledby",`${e.id}`))}_toggleDropDown(e,n){const i=this._getOuterElement(e);if(!i.classList.contains(Tb))return;const s=(r,c)=>{const p=N.findOne(r,i);p&&p.classList.toggle(c,n)};s(hd,kn),s(Ib,Ks),i.setAttribute("aria-expanded",n)}_setAttributeIfNotExists(e,n,i){e.hasAttribute(n)||e.setAttribute(n,i)}_elemIsActive(e){return e.classList.contains(kn)}_getInnerElement(e){return e.matches(Xs)?e:N.findOne(Xs,e)}_getOuterElement(e){return e.closest(Cb)||e}static jQueryInterface(e){return this.each(function(){const n=di.getOrCreateInstance(this);if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e]()}})}}x.on(document,wb,gd,function(t){["A","AREA"].includes(this.tagName)&&t.preventDefault(),!on(this)&&di.getOrCreateInstance(this).show()});x.on(window,Ab,()=>{for(const t of N.find(Ob))di.getOrCreateInstance(t)});yt(di);const Db="toast",Lb="bs.toast",ln=`.${Lb}`,$b=`mouseover${ln}`,Nb=`mouseout${ln}`,Rb=`focusin${ln}`,Mb=`focusout${ln}`,jb=`hide${ln}`,Ub=`hidden${ln}`,Bb=`show${ln}`,qb=`shown${ln}`,Fb="fade",Ql="hide",xo="show",Ao="showing",Vb={animation:"boolean",autohide:"boolean",delay:"number"},Hb={animation:!0,autohide:!0,delay:5e3};class Vo extends St{constructor(e,n){super(e,n),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return Hb}static get DefaultType(){return Vb}static get NAME(){return Db}show(){if(x.trigger(this._element,Bb).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(Fb);const n=()=>{this._element.classList.remove(Ao),x.trigger(this._element,qb),this._maybeScheduleHide()};this._element.classList.remove(Ql),Ui(this._element),this._element.classList.add(xo,Ao),this._queueCallback(n,this._element,this._config.animation)}hide(){if(!this.isShown()||x.trigger(this._element,jb).defaultPrevented)return;const n=()=>{this._element.classList.add(Ql),this._element.classList.remove(Ao,xo),x.trigger(this._element,Ub)};this._element.classList.add(Ao),this._queueCallback(n,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(xo),super.dispose()}isShown(){return this._element.classList.contains(xo)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(e,n){switch(e.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=n;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=n;break}}if(n){this._clearTimeout();return}const i=e.relatedTarget;this._element===i||this._element.contains(i)||this._maybeScheduleHide()}_setListeners(){x.on(this._element,$b,e=>this._onInteraction(e,!0)),x.on(this._element,Nb,e=>this._onInteraction(e,!1)),x.on(this._element,Rb,e=>this._onInteraction(e,!0)),x.on(this._element,Mb,e=>this._onInteraction(e,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each(function(){const n=Vo.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]>"u")throw new TypeError(`No method named "${e}"`);n[e](this)}})}}Uo(Vo);yt(Vo);var Io={exports:{}};/*!
  * Bootstrap v5.3.8 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Wb=Io.exports,Jl;function Kb(){return Jl||(Jl=1,(function(t,e){(function(n,i){t.exports=i()})(Wb,function(){const n=new Map,i={set(l,o,a){n.has(l)||n.set(l,new Map);const d=n.get(l);d.has(o)||d.size===0?d.set(o,a):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(d.keys())[0]}.`)},get:(l,o)=>n.has(l)&&n.get(l).get(o)||null,remove(l,o){if(!n.has(l))return;const a=n.get(l);a.delete(o),a.size===0&&n.delete(l)}},s="transitionend",r=l=>(l&&window.CSS&&window.CSS.escape&&(l=l.replace(/#([^\s"#']+)/g,(o,a)=>`#${CSS.escape(a)}`)),l),c=l=>l==null?`${l}`:Object.prototype.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase(),p=l=>{l.dispatchEvent(new Event(s))},u=l=>!(!l||typeof l!="object")&&(l.jquery!==void 0&&(l=l[0]),l.nodeType!==void 0),m=l=>u(l)?l.jquery?l[0]:l:typeof l=="string"&&l.length>0?document.querySelector(r(l)):null,h=l=>{if(!u(l)||l.getClientRects().length===0)return!1;const o=getComputedStyle(l).getPropertyValue("visibility")==="visible",a=l.closest("details:not([open])");if(!a)return o;if(a!==l){const d=l.closest("summary");if(d&&d.parentNode!==a||d===null)return!1}return o},E=l=>!l||l.nodeType!==Node.ELEMENT_NODE||!!l.classList.contains("disabled")||(l.disabled!==void 0?l.disabled:l.hasAttribute("disabled")&&l.getAttribute("disabled")!=="false"),O=l=>{if(!document.documentElement.attachShadow)return null;if(typeof l.getRootNode=="function"){const o=l.getRootNode();return o instanceof ShadowRoot?o:null}return l instanceof ShadowRoot?l:l.parentNode?O(l.parentNode):null},k=()=>{},R=l=>{l.offsetHeight},M=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,q=[],j=()=>document.documentElement.dir==="rtl",z=l=>{var o;o=()=>{const a=M();if(a){const d=l.NAME,f=a.fn[d];a.fn[d]=l.jQueryInterface,a.fn[d].Constructor=l,a.fn[d].noConflict=()=>(a.fn[d]=f,l.jQueryInterface)}},document.readyState==="loading"?(q.length||document.addEventListener("DOMContentLoaded",()=>{for(const a of q)a()}),q.push(o)):o()},Y=(l,o=[],a=l)=>typeof l=="function"?l.call(...o):a,H=(l,o,a=!0)=>{if(!a)return void Y(l);const d=(b=>{if(!b)return 0;let{transitionDuration:v,transitionDelay:T}=window.getComputedStyle(b);const C=Number.parseFloat(v),P=Number.parseFloat(T);return C||P?(v=v.split(",")[0],T=T.split(",")[0],1e3*(Number.parseFloat(v)+Number.parseFloat(T))):0})(o)+5;let f=!1;const g=({target:b})=>{b===o&&(f=!0,o.removeEventListener(s,g),Y(l))};o.addEventListener(s,g),setTimeout(()=>{f||p(o)},d)},Z=(l,o,a,d)=>{const f=l.length;let g=l.indexOf(o);return g===-1?!a&&d?l[f-1]:l[0]:(g+=a?1:-1,d&&(g=(g+f)%f),l[Math.max(0,Math.min(g,f-1))])},ee=/[^.]*(?=\..*)\.|.*/,de=/\..*/,we=/::\d+$/,ge={};let be=1;const ke={mouseenter:"mouseover",mouseleave:"mouseout"},qe=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function Te(l,o){return o&&`${o}::${be++}`||l.uidEvent||be++}function Ge(l){const o=Te(l);return l.uidEvent=o,ge[o]=ge[o]||{},ge[o]}function et(l,o,a=null){return Object.values(l).find(d=>d.callable===o&&d.delegationSelector===a)}function Le(l,o,a){const d=typeof o=="string",f=d?a:o||a;let g=S(l);return qe.has(g)||(g=l),[d,f,g]}function xe(l,o,a,d,f){if(typeof o!="string"||!l)return;let[g,b,v]=Le(o,a,d);o in ke&&(b=(W=>function(F){if(!F.relatedTarget||F.relatedTarget!==F.delegateTarget&&!F.delegateTarget.contains(F.relatedTarget))return W.call(this,F)})(b));const T=Ge(l),C=T[v]||(T[v]={}),P=et(C,b,g?a:null);if(P)return void(P.oneOff=P.oneOff&&f);const I=Te(b,o.replace(ee,"")),X=g?(function(U,W,F){return function K(fe){const ye=U.querySelectorAll(W);for(let{target:G}=fe;G&&G!==this;G=G.parentNode)for(const re of ye)if(re===G)return vt(fe,{delegateTarget:G}),K.oneOff&&_.off(U,fe.type,W,F),F.apply(G,[fe])}})(l,a,b):(function(U,W){return function F(K){return vt(K,{delegateTarget:U}),F.oneOff&&_.off(U,K.type,W),W.apply(U,[K])}})(l,b);X.delegationSelector=g?a:null,X.callable=b,X.oneOff=f,X.uidEvent=I,C[I]=X,l.addEventListener(v,X,g)}function w(l,o,a,d,f){const g=et(o[a],d,f);g&&(l.removeEventListener(a,g,!!f),delete o[a][g.uidEvent])}function A(l,o,a,d){const f=o[a]||{};for(const[g,b]of Object.entries(f))g.includes(d)&&w(l,o,a,b.callable,b.delegationSelector)}function S(l){return l=l.replace(de,""),ke[l]||l}const _={on(l,o,a,d){xe(l,o,a,d,!1)},one(l,o,a,d){xe(l,o,a,d,!0)},off(l,o,a,d){if(typeof o!="string"||!l)return;const[f,g,b]=Le(o,a,d),v=b!==o,T=Ge(l),C=T[b]||{},P=o.startsWith(".");if(g===void 0){if(P)for(const I of Object.keys(T))A(l,T,I,o.slice(1));for(const[I,X]of Object.entries(C)){const U=I.replace(we,"");v&&!o.includes(U)||w(l,T,b,X.callable,X.delegationSelector)}}else{if(!Object.keys(C).length)return;w(l,T,b,g,f?a:null)}},trigger(l,o,a){if(typeof o!="string"||!l)return null;const d=M();let f=null,g=!0,b=!0,v=!1;o!==S(o)&&d&&(f=d.Event(o,a),d(l).trigger(f),g=!f.isPropagationStopped(),b=!f.isImmediatePropagationStopped(),v=f.isDefaultPrevented());const T=vt(new Event(o,{bubbles:g,cancelable:!0}),a);return v&&T.preventDefault(),b&&l.dispatchEvent(T),T.defaultPrevented&&f&&f.preventDefault(),T}};function vt(l,o={}){for(const[a,d]of Object.entries(o))try{l[a]=d}catch{Object.defineProperty(l,a,{configurable:!0,get:()=>d})}return l}function Pt(l){if(l==="true")return!0;if(l==="false")return!1;if(l===Number(l).toString())return Number(l);if(l===""||l==="null")return null;if(typeof l!="string")return l;try{return JSON.parse(decodeURIComponent(l))}catch{return l}}function ct(l){return l.replace(/[A-Z]/g,o=>`-${o.toLowerCase()}`)}const $e={setDataAttribute(l,o,a){l.setAttribute(`data-bs-${ct(o)}`,a)},removeDataAttribute(l,o){l.removeAttribute(`data-bs-${ct(o)}`)},getDataAttributes(l){if(!l)return{};const o={},a=Object.keys(l.dataset).filter(d=>d.startsWith("bs")&&!d.startsWith("bsConfig"));for(const d of a){let f=d.replace(/^bs/,"");f=f.charAt(0).toLowerCase()+f.slice(1),o[f]=Pt(l.dataset[d])}return o},getDataAttribute:(l,o)=>Pt(l.getAttribute(`data-bs-${ct(o)}`))};class wt{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(o){return o=this._mergeConfigObj(o),o=this._configAfterMerge(o),this._typeCheckConfig(o),o}_configAfterMerge(o){return o}_mergeConfigObj(o,a){const d=u(a)?$e.getDataAttribute(a,"config"):{};return{...this.constructor.Default,...typeof d=="object"?d:{},...u(a)?$e.getDataAttributes(a):{},...typeof o=="object"?o:{}}}_typeCheckConfig(o,a=this.constructor.DefaultType){for(const[d,f]of Object.entries(a)){const g=o[d],b=u(g)?"element":c(g);if(!new RegExp(f).test(b))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${d}" provided type "${b}" but expected type "${f}".`)}}}class Be extends wt{constructor(o,a){super(),(o=m(o))&&(this._element=o,this._config=this._getConfig(a),i.set(this._element,this.constructor.DATA_KEY,this))}dispose(){i.remove(this._element,this.constructor.DATA_KEY),_.off(this._element,this.constructor.EVENT_KEY);for(const o of Object.getOwnPropertyNames(this))this[o]=null}_queueCallback(o,a,d=!0){H(o,a,d)}_getConfig(o){return o=this._mergeConfigObj(o,this._element),o=this._configAfterMerge(o),this._typeCheckConfig(o),o}static getInstance(o){return i.get(m(o),this.DATA_KEY)}static getOrCreateInstance(o,a={}){return this.getInstance(o)||new this(o,typeof a=="object"?a:null)}static get VERSION(){return"5.3.8"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(o){return`${o}${this.EVENT_KEY}`}}const xt=l=>{let o=l.getAttribute("data-bs-target");if(!o||o==="#"){let a=l.getAttribute("href");if(!a||!a.includes("#")&&!a.startsWith("."))return null;a.includes("#")&&!a.startsWith("#")&&(a=`#${a.split("#")[1]}`),o=a&&a!=="#"?a.trim():null}return o?o.split(",").map(a=>r(a)).join(","):null},$={find:(l,o=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(o,l)),findOne:(l,o=document.documentElement)=>Element.prototype.querySelector.call(o,l),children:(l,o)=>[].concat(...l.children).filter(a=>a.matches(o)),parents(l,o){const a=[];let d=l.parentNode.closest(o);for(;d;)a.push(d),d=d.parentNode.closest(o);return a},prev(l,o){let a=l.previousElementSibling;for(;a;){if(a.matches(o))return[a];a=a.previousElementSibling}return[]},next(l,o){let a=l.nextElementSibling;for(;a;){if(a.matches(o))return[a];a=a.nextElementSibling}return[]},focusableChildren(l){const o=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(a=>`${a}:not([tabindex^="-"])`).join(",");return this.find(o,l).filter(a=>!E(a)&&h(a))},getSelectorFromElement(l){const o=xt(l);return o&&$.findOne(o)?o:null},getElementFromSelector(l){const o=xt(l);return o?$.findOne(o):null},getMultipleElementsFromSelector(l){const o=xt(l);return o?$.find(o):[]}},$n=(l,o="hide")=>{const a=`click.dismiss${l.EVENT_KEY}`,d=l.NAME;_.on(document,a,`[data-bs-dismiss="${d}"]`,function(f){if(["A","AREA"].includes(this.tagName)&&f.preventDefault(),E(this))return;const g=$.getElementFromSelector(this)||this.closest(`.${d}`);l.getOrCreateInstance(g)[o]()})},Nn=".bs.alert",Qo=`close${Nn}`,Ki=`closed${Nn}`;class dn extends Be{static get NAME(){return"alert"}close(){if(_.trigger(this._element,Qo).defaultPrevented)return;this._element.classList.remove("show");const o=this._element.classList.contains("fade");this._queueCallback(()=>this._destroyElement(),this._element,o)}_destroyElement(){this._element.remove(),_.trigger(this._element,Ki),this.dispose()}static jQueryInterface(o){return this.each(function(){const a=dn.getOrCreateInstance(this);if(typeof o=="string"){if(a[o]===void 0||o.startsWith("_")||o==="constructor")throw new TypeError(`No method named "${o}"`);a[o](this)}})}}$n(dn,"close"),z(dn);const zi='[data-bs-toggle="button"]';class Qt extends Be{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(o){return this.each(function(){const a=Qt.getOrCreateInstance(this);o==="toggle"&&a[o]()})}}_.on(document,"click.bs.button.data-api",zi,l=>{l.preventDefault();const o=l.target.closest(zi);Qt.getOrCreateInstance(o).toggle()}),z(Qt);const qt=".bs.swipe",Jo=`touchstart${qt}`,Zo=`touchmove${qt}`,Ft=`touchend${qt}`,Rn=`pointerdown${qt}`,Xi=`pointerup${qt}`,Yi={endCallback:null,leftCallback:null,rightCallback:null},bi={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class pn extends wt{constructor(o,a){super(),this._element=o,o&&pn.isSupported()&&(this._config=this._getConfig(a),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return Yi}static get DefaultType(){return bi}static get NAME(){return"swipe"}dispose(){_.off(this._element,qt)}_start(o){this._supportPointerEvents?this._eventIsPointerPenTouch(o)&&(this._deltaX=o.clientX):this._deltaX=o.touches[0].clientX}_end(o){this._eventIsPointerPenTouch(o)&&(this._deltaX=o.clientX-this._deltaX),this._handleSwipe(),Y(this._config.endCallback)}_move(o){this._deltaX=o.touches&&o.touches.length>1?0:o.touches[0].clientX-this._deltaX}_handleSwipe(){const o=Math.abs(this._deltaX);if(o<=40)return;const a=o/this._deltaX;this._deltaX=0,a&&Y(a>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(_.on(this._element,Rn,o=>this._start(o)),_.on(this._element,Xi,o=>this._end(o)),this._element.classList.add("pointer-event")):(_.on(this._element,Jo,o=>this._start(o)),_.on(this._element,Zo,o=>this._move(o)),_.on(this._element,Ft,o=>this._end(o)))}_eventIsPointerPenTouch(o){return this._supportPointerEvents&&(o.pointerType==="pen"||o.pointerType==="touch")}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const At=".bs.carousel",_i=".data-api",Qi="ArrowLeft",Nd="ArrowRight",yi="next",Mn="prev",jn="left",Ji="right",Rd=`slide${At}`,Go=`slid${At}`,Md=`keydown${At}`,jd=`mouseenter${At}`,Ud=`mouseleave${At}`,Bd=`dragstart${At}`,qd=`load${At}${_i}`,Fd=`click${At}${_i}`,Ba="carousel",Zi="active",qa=".active",Fa=".carousel-item",Vd=qa+Fa,Hd={[Qi]:Ji,[Nd]:jn},Wd={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},Kd={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class Un extends Be{constructor(o,a){super(o,a),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=$.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===Ba&&this.cycle()}static get Default(){return Wd}static get DefaultType(){return Kd}static get NAME(){return"carousel"}next(){this._slide(yi)}nextWhenVisible(){!document.hidden&&h(this._element)&&this.next()}prev(){this._slide(Mn)}pause(){this._isSliding&&p(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?_.one(this._element,Go,()=>this.cycle()):this.cycle())}to(o){const a=this._getItems();if(o>a.length-1||o<0)return;if(this._isSliding)return void _.one(this._element,Go,()=>this.to(o));const d=this._getItemIndex(this._getActive());if(d===o)return;const f=o>d?yi:Mn;this._slide(f,a[o])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(o){return o.defaultInterval=o.interval,o}_addEventListeners(){this._config.keyboard&&_.on(this._element,Md,o=>this._keydown(o)),this._config.pause==="hover"&&(_.on(this._element,jd,()=>this.pause()),_.on(this._element,Ud,()=>this._maybeEnableCycle())),this._config.touch&&pn.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const a of $.find(".carousel-item img",this._element))_.on(a,Bd,d=>d.preventDefault());const o={leftCallback:()=>this._slide(this._directionToOrder(jn)),rightCallback:()=>this._slide(this._directionToOrder(Ji)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),500+this._config.interval))}};this._swipeHelper=new pn(this._element,o)}_keydown(o){if(/input|textarea/i.test(o.target.tagName))return;const a=Hd[o.key];a&&(o.preventDefault(),this._slide(this._directionToOrder(a)))}_getItemIndex(o){return this._getItems().indexOf(o)}_setActiveIndicatorElement(o){if(!this._indicatorsElement)return;const a=$.findOne(qa,this._indicatorsElement);a.classList.remove(Zi),a.removeAttribute("aria-current");const d=$.findOne(`[data-bs-slide-to="${o}"]`,this._indicatorsElement);d&&(d.classList.add(Zi),d.setAttribute("aria-current","true"))}_updateInterval(){const o=this._activeElement||this._getActive();if(!o)return;const a=Number.parseInt(o.getAttribute("data-bs-interval"),10);this._config.interval=a||this._config.defaultInterval}_slide(o,a=null){if(this._isSliding)return;const d=this._getActive(),f=o===yi,g=a||Z(this._getItems(),d,f,this._config.wrap);if(g===d)return;const b=this._getItemIndex(g),v=I=>_.trigger(this._element,I,{relatedTarget:g,direction:this._orderToDirection(o),from:this._getItemIndex(d),to:b});if(v(Rd).defaultPrevented||!d||!g)return;const T=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(b),this._activeElement=g;const C=f?"carousel-item-start":"carousel-item-end",P=f?"carousel-item-next":"carousel-item-prev";g.classList.add(P),R(g),d.classList.add(C),g.classList.add(C),this._queueCallback(()=>{g.classList.remove(C,P),g.classList.add(Zi),d.classList.remove(Zi,P,C),this._isSliding=!1,v(Go)},d,this._isAnimated()),T&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return $.findOne(Vd,this._element)}_getItems(){return $.find(Fa,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(o){return j()?o===jn?Mn:yi:o===jn?yi:Mn}_orderToDirection(o){return j()?o===Mn?jn:Ji:o===Mn?Ji:jn}static jQueryInterface(o){return this.each(function(){const a=Un.getOrCreateInstance(this,o);if(typeof o!="number"){if(typeof o=="string"){if(a[o]===void 0||o.startsWith("_")||o==="constructor")throw new TypeError(`No method named "${o}"`);a[o]()}}else a.to(o)})}}_.on(document,Fd,"[data-bs-slide], [data-bs-slide-to]",function(l){const o=$.getElementFromSelector(this);if(!o||!o.classList.contains(Ba))return;l.preventDefault();const a=Un.getOrCreateInstance(o),d=this.getAttribute("data-bs-slide-to");return d?(a.to(d),void a._maybeEnableCycle()):$e.getDataAttribute(this,"slide")==="next"?(a.next(),void a._maybeEnableCycle()):(a.prev(),void a._maybeEnableCycle())}),_.on(window,qd,()=>{const l=$.find('[data-bs-ride="carousel"]');for(const o of l)Un.getOrCreateInstance(o)}),z(Un);const vi=".bs.collapse",zd=`show${vi}`,Xd=`shown${vi}`,Yd=`hide${vi}`,Qd=`hidden${vi}`,Jd=`click${vi}.data-api`,es="show",Bn="collapse",Gi="collapsing",Zd=`:scope .${Bn} .${Bn}`,ts='[data-bs-toggle="collapse"]',Gd={parent:null,toggle:!0},ep={parent:"(null|element)",toggle:"boolean"};class qn extends Be{constructor(o,a){super(o,a),this._isTransitioning=!1,this._triggerArray=[];const d=$.find(ts);for(const f of d){const g=$.getSelectorFromElement(f),b=$.find(g).filter(v=>v===this._element);g!==null&&b.length&&this._triggerArray.push(f)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Gd}static get DefaultType(){return ep}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let o=[];if(this._config.parent&&(o=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(f=>f!==this._element).map(f=>qn.getOrCreateInstance(f,{toggle:!1}))),o.length&&o[0]._isTransitioning||_.trigger(this._element,zd).defaultPrevented)return;for(const f of o)f.hide();const a=this._getDimension();this._element.classList.remove(Bn),this._element.classList.add(Gi),this._element.style[a]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const d=`scroll${a[0].toUpperCase()+a.slice(1)}`;this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(Gi),this._element.classList.add(Bn,es),this._element.style[a]="",_.trigger(this._element,Xd)},this._element,!0),this._element.style[a]=`${this._element[d]}px`}hide(){if(this._isTransitioning||!this._isShown()||_.trigger(this._element,Yd).defaultPrevented)return;const o=this._getDimension();this._element.style[o]=`${this._element.getBoundingClientRect()[o]}px`,R(this._element),this._element.classList.add(Gi),this._element.classList.remove(Bn,es);for(const a of this._triggerArray){const d=$.getElementFromSelector(a);d&&!this._isShown(d)&&this._addAriaAndCollapsedClass([a],!1)}this._isTransitioning=!0,this._element.style[o]="",this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(Gi),this._element.classList.add(Bn),_.trigger(this._element,Qd)},this._element,!0)}_isShown(o=this._element){return o.classList.contains(es)}_configAfterMerge(o){return o.toggle=!!o.toggle,o.parent=m(o.parent),o}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const o=this._getFirstLevelChildren(ts);for(const a of o){const d=$.getElementFromSelector(a);d&&this._addAriaAndCollapsedClass([a],this._isShown(d))}}_getFirstLevelChildren(o){const a=$.find(Zd,this._config.parent);return $.find(o,this._config.parent).filter(d=>!a.includes(d))}_addAriaAndCollapsedClass(o,a){if(o.length)for(const d of o)d.classList.toggle("collapsed",!a),d.setAttribute("aria-expanded",a)}static jQueryInterface(o){const a={};return typeof o=="string"&&/show|hide/.test(o)&&(a.toggle=!1),this.each(function(){const d=qn.getOrCreateInstance(this,a);if(typeof o=="string"){if(d[o]===void 0)throw new TypeError(`No method named "${o}"`);d[o]()}})}}_.on(document,Jd,ts,function(l){(l.target.tagName==="A"||l.delegateTarget&&l.delegateTarget.tagName==="A")&&l.preventDefault();for(const o of $.getMultipleElementsFromSelector(this))qn.getOrCreateInstance(o,{toggle:!1}).toggle()}),z(qn);var Fe="top",tt="bottom",nt="right",Ve="left",eo="auto",Fn=[Fe,tt,nt,Ve],un="start",Vn="end",Va="clippingParents",ns="viewport",Hn="popper",Ha="reference",is=Fn.reduce(function(l,o){return l.concat([o+"-"+un,o+"-"+Vn])},[]),os=[].concat(Fn,[eo]).reduce(function(l,o){return l.concat([o,o+"-"+un,o+"-"+Vn])},[]),Wa="beforeRead",Ka="read",za="afterRead",Xa="beforeMain",Ya="main",Qa="afterMain",Ja="beforeWrite",Za="write",Ga="afterWrite",er=[Wa,Ka,za,Xa,Ya,Qa,Ja,Za,Ga];function Ot(l){return l?(l.nodeName||"").toLowerCase():null}function it(l){if(l==null)return window;if(l.toString()!=="[object Window]"){var o=l.ownerDocument;return o&&o.defaultView||window}return l}function mn(l){return l instanceof it(l).Element||l instanceof Element}function dt(l){return l instanceof it(l).HTMLElement||l instanceof HTMLElement}function ss(l){return typeof ShadowRoot<"u"&&(l instanceof it(l).ShadowRoot||l instanceof ShadowRoot)}const as={name:"applyStyles",enabled:!0,phase:"write",fn:function(l){var o=l.state;Object.keys(o.elements).forEach(function(a){var d=o.styles[a]||{},f=o.attributes[a]||{},g=o.elements[a];dt(g)&&Ot(g)&&(Object.assign(g.style,d),Object.keys(f).forEach(function(b){var v=f[b];v===!1?g.removeAttribute(b):g.setAttribute(b,v===!0?"":v)}))})},effect:function(l){var o=l.state,a={popper:{position:o.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(o.elements.popper.style,a.popper),o.styles=a,o.elements.arrow&&Object.assign(o.elements.arrow.style,a.arrow),function(){Object.keys(o.elements).forEach(function(d){var f=o.elements[d],g=o.attributes[d]||{},b=Object.keys(o.styles.hasOwnProperty(d)?o.styles[d]:a[d]).reduce(function(v,T){return v[T]="",v},{});dt(f)&&Ot(f)&&(Object.assign(f.style,b),Object.keys(g).forEach(function(v){f.removeAttribute(v)}))})}},requires:["computeStyles"]};function Dt(l){return l.split("-")[0]}var fn=Math.max,to=Math.min,Wn=Math.round;function rs(){var l=navigator.userAgentData;return l!=null&&l.brands&&Array.isArray(l.brands)?l.brands.map(function(o){return o.brand+"/"+o.version}).join(" "):navigator.userAgent}function tr(){return!/^((?!chrome|android).)*safari/i.test(rs())}function Kn(l,o,a){o===void 0&&(o=!1),a===void 0&&(a=!1);var d=l.getBoundingClientRect(),f=1,g=1;o&&dt(l)&&(f=l.offsetWidth>0&&Wn(d.width)/l.offsetWidth||1,g=l.offsetHeight>0&&Wn(d.height)/l.offsetHeight||1);var b=(mn(l)?it(l):window).visualViewport,v=!tr()&&a,T=(d.left+(v&&b?b.offsetLeft:0))/f,C=(d.top+(v&&b?b.offsetTop:0))/g,P=d.width/f,I=d.height/g;return{width:P,height:I,top:C,right:T+P,bottom:C+I,left:T,x:T,y:C}}function ls(l){var o=Kn(l),a=l.offsetWidth,d=l.offsetHeight;return Math.abs(o.width-a)<=1&&(a=o.width),Math.abs(o.height-d)<=1&&(d=o.height),{x:l.offsetLeft,y:l.offsetTop,width:a,height:d}}function nr(l,o){var a=o.getRootNode&&o.getRootNode();if(l.contains(o))return!0;if(a&&ss(a)){var d=o;do{if(d&&l.isSameNode(d))return!0;d=d.parentNode||d.host}while(d)}return!1}function Vt(l){return it(l).getComputedStyle(l)}function tp(l){return["table","td","th"].indexOf(Ot(l))>=0}function Jt(l){return((mn(l)?l.ownerDocument:l.document)||window.document).documentElement}function no(l){return Ot(l)==="html"?l:l.assignedSlot||l.parentNode||(ss(l)?l.host:null)||Jt(l)}function ir(l){return dt(l)&&Vt(l).position!=="fixed"?l.offsetParent:null}function wi(l){for(var o=it(l),a=ir(l);a&&tp(a)&&Vt(a).position==="static";)a=ir(a);return a&&(Ot(a)==="html"||Ot(a)==="body"&&Vt(a).position==="static")?o:a||(function(d){var f=/firefox/i.test(rs());if(/Trident/i.test(rs())&&dt(d)&&Vt(d).position==="fixed")return null;var g=no(d);for(ss(g)&&(g=g.host);dt(g)&&["html","body"].indexOf(Ot(g))<0;){var b=Vt(g);if(b.transform!=="none"||b.perspective!=="none"||b.contain==="paint"||["transform","perspective"].indexOf(b.willChange)!==-1||f&&b.willChange==="filter"||f&&b.filter&&b.filter!=="none")return g;g=g.parentNode}return null})(l)||o}function cs(l){return["top","bottom"].indexOf(l)>=0?"x":"y"}function xi(l,o,a){return fn(l,to(o,a))}function or(l){return Object.assign({},{top:0,right:0,bottom:0,left:0},l)}function sr(l,o){return o.reduce(function(a,d){return a[d]=l,a},{})}const ar={name:"arrow",enabled:!0,phase:"main",fn:function(l){var o,a=l.state,d=l.name,f=l.options,g=a.elements.arrow,b=a.modifiersData.popperOffsets,v=Dt(a.placement),T=cs(v),C=[Ve,nt].indexOf(v)>=0?"height":"width";if(g&&b){var P=(function(he,ue){return or(typeof(he=typeof he=="function"?he(Object.assign({},ue.rects,{placement:ue.placement})):he)!="number"?he:sr(he,Fn))})(f.padding,a),I=ls(g),X=T==="y"?Fe:Ve,U=T==="y"?tt:nt,W=a.rects.reference[C]+a.rects.reference[T]-b[T]-a.rects.popper[C],F=b[T]-a.rects.reference[T],K=wi(g),fe=K?T==="y"?K.clientHeight||0:K.clientWidth||0:0,ye=W/2-F/2,G=P[X],re=fe-I[C]-P[U],Q=fe/2-I[C]/2+ye,ne=xi(G,Q,re),pe=T;a.modifiersData[d]=((o={})[pe]=ne,o.centerOffset=ne-Q,o)}},effect:function(l){var o=l.state,a=l.options.element,d=a===void 0?"[data-popper-arrow]":a;d!=null&&(typeof d!="string"||(d=o.elements.popper.querySelector(d)))&&nr(o.elements.popper,d)&&(o.elements.arrow=d)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function zn(l){return l.split("-")[1]}var np={top:"auto",right:"auto",bottom:"auto",left:"auto"};function rr(l){var o,a=l.popper,d=l.popperRect,f=l.placement,g=l.variation,b=l.offsets,v=l.position,T=l.gpuAcceleration,C=l.adaptive,P=l.roundOffsets,I=l.isFixed,X=b.x,U=X===void 0?0:X,W=b.y,F=W===void 0?0:W,K=typeof P=="function"?P({x:U,y:F}):{x:U,y:F};U=K.x,F=K.y;var fe=b.hasOwnProperty("x"),ye=b.hasOwnProperty("y"),G=Ve,re=Fe,Q=window;if(C){var ne=wi(a),pe="clientHeight",he="clientWidth";ne===it(a)&&Vt(ne=Jt(a)).position!=="static"&&v==="absolute"&&(pe="scrollHeight",he="scrollWidth"),(f===Fe||(f===Ve||f===nt)&&g===Vn)&&(re=tt,F-=(I&&ne===Q&&Q.visualViewport?Q.visualViewport.height:ne[pe])-d.height,F*=T?1:-1),f!==Ve&&(f!==Fe&&f!==tt||g!==Vn)||(G=nt,U-=(I&&ne===Q&&Q.visualViewport?Q.visualViewport.width:ne[he])-d.width,U*=T?1:-1)}var ue,Ie=Object.assign({position:v},C&&np),ot=P===!0?(function(kt,He){var ut=kt.x,mt=kt.y,Ae=He.devicePixelRatio||1;return{x:Wn(ut*Ae)/Ae||0,y:Wn(mt*Ae)/Ae||0}})({x:U,y:F},it(a)):{x:U,y:F};return U=ot.x,F=ot.y,T?Object.assign({},Ie,((ue={})[re]=ye?"0":"",ue[G]=fe?"0":"",ue.transform=(Q.devicePixelRatio||1)<=1?"translate("+U+"px, "+F+"px)":"translate3d("+U+"px, "+F+"px, 0)",ue)):Object.assign({},Ie,((o={})[re]=ye?F+"px":"",o[G]=fe?U+"px":"",o.transform="",o))}const ds={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(l){var o=l.state,a=l.options,d=a.gpuAcceleration,f=d===void 0||d,g=a.adaptive,b=g===void 0||g,v=a.roundOffsets,T=v===void 0||v,C={placement:Dt(o.placement),variation:zn(o.placement),popper:o.elements.popper,popperRect:o.rects.popper,gpuAcceleration:f,isFixed:o.options.strategy==="fixed"};o.modifiersData.popperOffsets!=null&&(o.styles.popper=Object.assign({},o.styles.popper,rr(Object.assign({},C,{offsets:o.modifiersData.popperOffsets,position:o.options.strategy,adaptive:b,roundOffsets:T})))),o.modifiersData.arrow!=null&&(o.styles.arrow=Object.assign({},o.styles.arrow,rr(Object.assign({},C,{offsets:o.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:T})))),o.attributes.popper=Object.assign({},o.attributes.popper,{"data-popper-placement":o.placement})},data:{}};var io={passive:!0};const ps={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(l){var o=l.state,a=l.instance,d=l.options,f=d.scroll,g=f===void 0||f,b=d.resize,v=b===void 0||b,T=it(o.elements.popper),C=[].concat(o.scrollParents.reference,o.scrollParents.popper);return g&&C.forEach(function(P){P.addEventListener("scroll",a.update,io)}),v&&T.addEventListener("resize",a.update,io),function(){g&&C.forEach(function(P){P.removeEventListener("scroll",a.update,io)}),v&&T.removeEventListener("resize",a.update,io)}},data:{}};var ip={left:"right",right:"left",bottom:"top",top:"bottom"};function oo(l){return l.replace(/left|right|bottom|top/g,function(o){return ip[o]})}var op={start:"end",end:"start"};function lr(l){return l.replace(/start|end/g,function(o){return op[o]})}function us(l){var o=it(l);return{scrollLeft:o.pageXOffset,scrollTop:o.pageYOffset}}function ms(l){return Kn(Jt(l)).left+us(l).scrollLeft}function fs(l){var o=Vt(l),a=o.overflow,d=o.overflowX,f=o.overflowY;return/auto|scroll|overlay|hidden/.test(a+f+d)}function cr(l){return["html","body","#document"].indexOf(Ot(l))>=0?l.ownerDocument.body:dt(l)&&fs(l)?l:cr(no(l))}function Ai(l,o){var a;o===void 0&&(o=[]);var d=cr(l),f=d===((a=l.ownerDocument)==null?void 0:a.body),g=it(d),b=f?[g].concat(g.visualViewport||[],fs(d)?d:[]):d,v=o.concat(b);return f?v:v.concat(Ai(no(b)))}function hs(l){return Object.assign({},l,{left:l.x,top:l.y,right:l.x+l.width,bottom:l.y+l.height})}function dr(l,o,a){return o===ns?hs((function(d,f){var g=it(d),b=Jt(d),v=g.visualViewport,T=b.clientWidth,C=b.clientHeight,P=0,I=0;if(v){T=v.width,C=v.height;var X=tr();(X||!X&&f==="fixed")&&(P=v.offsetLeft,I=v.offsetTop)}return{width:T,height:C,x:P+ms(d),y:I}})(l,a)):mn(o)?(function(d,f){var g=Kn(d,!1,f==="fixed");return g.top=g.top+d.clientTop,g.left=g.left+d.clientLeft,g.bottom=g.top+d.clientHeight,g.right=g.left+d.clientWidth,g.width=d.clientWidth,g.height=d.clientHeight,g.x=g.left,g.y=g.top,g})(o,a):hs((function(d){var f,g=Jt(d),b=us(d),v=(f=d.ownerDocument)==null?void 0:f.body,T=fn(g.scrollWidth,g.clientWidth,v?v.scrollWidth:0,v?v.clientWidth:0),C=fn(g.scrollHeight,g.clientHeight,v?v.scrollHeight:0,v?v.clientHeight:0),P=-b.scrollLeft+ms(d),I=-b.scrollTop;return Vt(v||g).direction==="rtl"&&(P+=fn(g.clientWidth,v?v.clientWidth:0)-T),{width:T,height:C,x:P,y:I}})(Jt(l)))}function pr(l){var o,a=l.reference,d=l.element,f=l.placement,g=f?Dt(f):null,b=f?zn(f):null,v=a.x+a.width/2-d.width/2,T=a.y+a.height/2-d.height/2;switch(g){case Fe:o={x:v,y:a.y-d.height};break;case tt:o={x:v,y:a.y+a.height};break;case nt:o={x:a.x+a.width,y:T};break;case Ve:o={x:a.x-d.width,y:T};break;default:o={x:a.x,y:a.y}}var C=g?cs(g):null;if(C!=null){var P=C==="y"?"height":"width";switch(b){case un:o[C]=o[C]-(a[P]/2-d[P]/2);break;case Vn:o[C]=o[C]+(a[P]/2-d[P]/2)}}return o}function Xn(l,o){o===void 0&&(o={});var a=o,d=a.placement,f=d===void 0?l.placement:d,g=a.strategy,b=g===void 0?l.strategy:g,v=a.boundary,T=v===void 0?Va:v,C=a.rootBoundary,P=C===void 0?ns:C,I=a.elementContext,X=I===void 0?Hn:I,U=a.altBoundary,W=U!==void 0&&U,F=a.padding,K=F===void 0?0:F,fe=or(typeof K!="number"?K:sr(K,Fn)),ye=X===Hn?Ha:Hn,G=l.rects.popper,re=l.elements[W?ye:X],Q=(function(He,ut,mt,Ae){var Lt=ut==="clippingParents"?(function(_e){var We=Ai(no(_e)),ft=["absolute","fixed"].indexOf(Vt(_e).position)>=0&&dt(_e)?wi(_e):_e;return mn(ft)?We.filter(function(Gt){return mn(Gt)&&nr(Gt,ft)&&Ot(Gt)!=="body"}):[]})(He):[].concat(ut),$t=[].concat(Lt,[mt]),Jn=$t[0],Ne=$t.reduce(function(_e,We){var ft=dr(He,We,Ae);return _e.top=fn(ft.top,_e.top),_e.right=to(ft.right,_e.right),_e.bottom=to(ft.bottom,_e.bottom),_e.left=fn(ft.left,_e.left),_e},dr(He,Jn,Ae));return Ne.width=Ne.right-Ne.left,Ne.height=Ne.bottom-Ne.top,Ne.x=Ne.left,Ne.y=Ne.top,Ne})(mn(re)?re:re.contextElement||Jt(l.elements.popper),T,P,b),ne=Kn(l.elements.reference),pe=pr({reference:ne,element:G,placement:f}),he=hs(Object.assign({},G,pe)),ue=X===Hn?he:ne,Ie={top:Q.top-ue.top+fe.top,bottom:ue.bottom-Q.bottom+fe.bottom,left:Q.left-ue.left+fe.left,right:ue.right-Q.right+fe.right},ot=l.modifiersData.offset;if(X===Hn&&ot){var kt=ot[f];Object.keys(Ie).forEach(function(He){var ut=[nt,tt].indexOf(He)>=0?1:-1,mt=[Fe,tt].indexOf(He)>=0?"y":"x";Ie[He]+=kt[mt]*ut})}return Ie}function sp(l,o){o===void 0&&(o={});var a=o,d=a.placement,f=a.boundary,g=a.rootBoundary,b=a.padding,v=a.flipVariations,T=a.allowedAutoPlacements,C=T===void 0?os:T,P=zn(d),I=P?v?is:is.filter(function(W){return zn(W)===P}):Fn,X=I.filter(function(W){return C.indexOf(W)>=0});X.length===0&&(X=I);var U=X.reduce(function(W,F){return W[F]=Xn(l,{placement:F,boundary:f,rootBoundary:g,padding:b})[Dt(F)],W},{});return Object.keys(U).sort(function(W,F){return U[W]-U[F]})}const ur={name:"flip",enabled:!0,phase:"main",fn:function(l){var o=l.state,a=l.options,d=l.name;if(!o.modifiersData[d]._skip){for(var f=a.mainAxis,g=f===void 0||f,b=a.altAxis,v=b===void 0||b,T=a.fallbackPlacements,C=a.padding,P=a.boundary,I=a.rootBoundary,X=a.altBoundary,U=a.flipVariations,W=U===void 0||U,F=a.allowedAutoPlacements,K=o.options.placement,fe=Dt(K),ye=T||(fe!==K&&W?(function(_e){if(Dt(_e)===eo)return[];var We=oo(_e);return[lr(_e),We,lr(We)]})(K):[oo(K)]),G=[K].concat(ye).reduce(function(_e,We){return _e.concat(Dt(We)===eo?sp(o,{placement:We,boundary:P,rootBoundary:I,padding:C,flipVariations:W,allowedAutoPlacements:F}):We)},[]),re=o.rects.reference,Q=o.rects.popper,ne=new Map,pe=!0,he=G[0],ue=0;ue<G.length;ue++){var Ie=G[ue],ot=Dt(Ie),kt=zn(Ie)===un,He=[Fe,tt].indexOf(ot)>=0,ut=He?"width":"height",mt=Xn(o,{placement:Ie,boundary:P,rootBoundary:I,altBoundary:X,padding:C}),Ae=He?kt?nt:Ve:kt?tt:Fe;re[ut]>Q[ut]&&(Ae=oo(Ae));var Lt=oo(Ae),$t=[];if(g&&$t.push(mt[ot]<=0),v&&$t.push(mt[Ae]<=0,mt[Lt]<=0),$t.every(function(_e){return _e})){he=Ie,pe=!1;break}ne.set(Ie,$t)}if(pe)for(var Jn=function(_e){var We=G.find(function(ft){var Gt=ne.get(ft);if(Gt)return Gt.slice(0,_e).every(function(fo){return fo})});if(We)return he=We,"break"},Ne=W?3:1;Ne>0&&Jn(Ne)!=="break";Ne--);o.placement!==he&&(o.modifiersData[d]._skip=!0,o.placement=he,o.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function mr(l,o,a){return a===void 0&&(a={x:0,y:0}),{top:l.top-o.height-a.y,right:l.right-o.width+a.x,bottom:l.bottom-o.height+a.y,left:l.left-o.width-a.x}}function fr(l){return[Fe,nt,tt,Ve].some(function(o){return l[o]>=0})}const hr={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(l){var o=l.state,a=l.name,d=o.rects.reference,f=o.rects.popper,g=o.modifiersData.preventOverflow,b=Xn(o,{elementContext:"reference"}),v=Xn(o,{altBoundary:!0}),T=mr(b,d),C=mr(v,f,g),P=fr(T),I=fr(C);o.modifiersData[a]={referenceClippingOffsets:T,popperEscapeOffsets:C,isReferenceHidden:P,hasPopperEscaped:I},o.attributes.popper=Object.assign({},o.attributes.popper,{"data-popper-reference-hidden":P,"data-popper-escaped":I})}},gr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(l){var o=l.state,a=l.options,d=l.name,f=a.offset,g=f===void 0?[0,0]:f,b=os.reduce(function(P,I){return P[I]=(function(X,U,W){var F=Dt(X),K=[Ve,Fe].indexOf(F)>=0?-1:1,fe=typeof W=="function"?W(Object.assign({},U,{placement:X})):W,ye=fe[0],G=fe[1];return ye=ye||0,G=(G||0)*K,[Ve,nt].indexOf(F)>=0?{x:G,y:ye}:{x:ye,y:G}})(I,o.rects,g),P},{}),v=b[o.placement],T=v.x,C=v.y;o.modifiersData.popperOffsets!=null&&(o.modifiersData.popperOffsets.x+=T,o.modifiersData.popperOffsets.y+=C),o.modifiersData[d]=b}},gs={name:"popperOffsets",enabled:!0,phase:"read",fn:function(l){var o=l.state,a=l.name;o.modifiersData[a]=pr({reference:o.rects.reference,element:o.rects.popper,placement:o.placement})},data:{}},br={name:"preventOverflow",enabled:!0,phase:"main",fn:function(l){var o=l.state,a=l.options,d=l.name,f=a.mainAxis,g=f===void 0||f,b=a.altAxis,v=b!==void 0&&b,T=a.boundary,C=a.rootBoundary,P=a.altBoundary,I=a.padding,X=a.tether,U=X===void 0||X,W=a.tetherOffset,F=W===void 0?0:W,K=Xn(o,{boundary:T,rootBoundary:C,padding:I,altBoundary:P}),fe=Dt(o.placement),ye=zn(o.placement),G=!ye,re=cs(fe),Q=re==="x"?"y":"x",ne=o.modifiersData.popperOffsets,pe=o.rects.reference,he=o.rects.popper,ue=typeof F=="function"?F(Object.assign({},o.rects,{placement:o.placement})):F,Ie=typeof ue=="number"?{mainAxis:ue,altAxis:ue}:Object.assign({mainAxis:0,altAxis:0},ue),ot=o.modifiersData.offset?o.modifiersData.offset[o.placement]:null,kt={x:0,y:0};if(ne){if(g){var He,ut=re==="y"?Fe:Ve,mt=re==="y"?tt:nt,Ae=re==="y"?"height":"width",Lt=ne[re],$t=Lt+K[ut],Jn=Lt-K[mt],Ne=U?-he[Ae]/2:0,_e=ye===un?pe[Ae]:he[Ae],We=ye===un?-he[Ae]:-pe[Ae],ft=o.elements.arrow,Gt=U&&ft?ls(ft):{width:0,height:0},fo=o.modifiersData["arrow#persistent"]?o.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},il=fo[ut],ol=fo[mt],ho=xi(0,pe[Ae],Gt[Ae]),Mu=G?pe[Ae]/2-Ne-ho-il-Ie.mainAxis:_e-ho-il-Ie.mainAxis,ju=G?-pe[Ae]/2+Ne+ho+ol+Ie.mainAxis:We+ho+ol+Ie.mainAxis,Ps=o.elements.arrow&&wi(o.elements.arrow),Uu=Ps?re==="y"?Ps.clientTop||0:Ps.clientLeft||0:0,sl=(He=ot?.[re])!=null?He:0,Bu=Lt+ju-sl,al=xi(U?to($t,Lt+Mu-sl-Uu):$t,Lt,U?fn(Jn,Bu):Jn);ne[re]=al,kt[re]=al-Lt}if(v){var rl,qu=re==="x"?Fe:Ve,Fu=re==="x"?tt:nt,xn=ne[Q],go=Q==="y"?"height":"width",ll=xn+K[qu],cl=xn-K[Fu],Os=[Fe,Ve].indexOf(fe)!==-1,dl=(rl=ot?.[Q])!=null?rl:0,pl=Os?ll:xn-pe[go]-he[go]-dl+Ie.altAxis,ul=Os?xn+pe[go]+he[go]-dl-Ie.altAxis:cl,ml=U&&Os?(function(Vu,Hu,Ds){var fl=xi(Vu,Hu,Ds);return fl>Ds?Ds:fl})(pl,xn,ul):xi(U?pl:ll,xn,U?ul:cl);ne[Q]=ml,kt[Q]=ml-xn}o.modifiersData[d]=kt}},requiresIfExists:["offset"]};function ap(l,o,a){a===void 0&&(a=!1);var d,f,g=dt(o),b=dt(o)&&(function(I){var X=I.getBoundingClientRect(),U=Wn(X.width)/I.offsetWidth||1,W=Wn(X.height)/I.offsetHeight||1;return U!==1||W!==1})(o),v=Jt(o),T=Kn(l,b,a),C={scrollLeft:0,scrollTop:0},P={x:0,y:0};return(g||!g&&!a)&&((Ot(o)!=="body"||fs(v))&&(C=(d=o)!==it(d)&&dt(d)?{scrollLeft:(f=d).scrollLeft,scrollTop:f.scrollTop}:us(d)),dt(o)?((P=Kn(o,!0)).x+=o.clientLeft,P.y+=o.clientTop):v&&(P.x=ms(v))),{x:T.left+C.scrollLeft-P.x,y:T.top+C.scrollTop-P.y,width:T.width,height:T.height}}function rp(l){var o=new Map,a=new Set,d=[];function f(g){a.add(g.name),[].concat(g.requires||[],g.requiresIfExists||[]).forEach(function(b){if(!a.has(b)){var v=o.get(b);v&&f(v)}}),d.push(g)}return l.forEach(function(g){o.set(g.name,g)}),l.forEach(function(g){a.has(g.name)||f(g)}),d}var _r={placement:"bottom",modifiers:[],strategy:"absolute"};function yr(){for(var l=arguments.length,o=new Array(l),a=0;a<l;a++)o[a]=arguments[a];return!o.some(function(d){return!(d&&typeof d.getBoundingClientRect=="function")})}function so(l){l===void 0&&(l={});var o=l,a=o.defaultModifiers,d=a===void 0?[]:a,f=o.defaultOptions,g=f===void 0?_r:f;return function(b,v,T){T===void 0&&(T=g);var C,P,I={placement:"bottom",orderedModifiers:[],options:Object.assign({},_r,g),modifiersData:{},elements:{reference:b,popper:v},attributes:{},styles:{}},X=[],U=!1,W={state:I,setOptions:function(K){var fe=typeof K=="function"?K(I.options):K;F(),I.options=Object.assign({},g,I.options,fe),I.scrollParents={reference:mn(b)?Ai(b):b.contextElement?Ai(b.contextElement):[],popper:Ai(v)};var ye,G,re=(function(Q){var ne=rp(Q);return er.reduce(function(pe,he){return pe.concat(ne.filter(function(ue){return ue.phase===he}))},[])})((ye=[].concat(d,I.options.modifiers),G=ye.reduce(function(Q,ne){var pe=Q[ne.name];return Q[ne.name]=pe?Object.assign({},pe,ne,{options:Object.assign({},pe.options,ne.options),data:Object.assign({},pe.data,ne.data)}):ne,Q},{}),Object.keys(G).map(function(Q){return G[Q]})));return I.orderedModifiers=re.filter(function(Q){return Q.enabled}),I.orderedModifiers.forEach(function(Q){var ne=Q.name,pe=Q.options,he=pe===void 0?{}:pe,ue=Q.effect;if(typeof ue=="function"){var Ie=ue({state:I,name:ne,instance:W,options:he});X.push(Ie||function(){})}}),W.update()},forceUpdate:function(){if(!U){var K=I.elements,fe=K.reference,ye=K.popper;if(yr(fe,ye)){I.rects={reference:ap(fe,wi(ye),I.options.strategy==="fixed"),popper:ls(ye)},I.reset=!1,I.placement=I.options.placement,I.orderedModifiers.forEach(function(ue){return I.modifiersData[ue.name]=Object.assign({},ue.data)});for(var G=0;G<I.orderedModifiers.length;G++)if(I.reset!==!0){var re=I.orderedModifiers[G],Q=re.fn,ne=re.options,pe=ne===void 0?{}:ne,he=re.name;typeof Q=="function"&&(I=Q({state:I,options:pe,name:he,instance:W})||I)}else I.reset=!1,G=-1}}},update:(C=function(){return new Promise(function(K){W.forceUpdate(),K(I)})},function(){return P||(P=new Promise(function(K){Promise.resolve().then(function(){P=void 0,K(C())})})),P}),destroy:function(){F(),U=!0}};if(!yr(b,v))return W;function F(){X.forEach(function(K){return K()}),X=[]}return W.setOptions(T).then(function(K){!U&&T.onFirstUpdate&&T.onFirstUpdate(K)}),W}}var lp=so(),cp=so({defaultModifiers:[ps,gs,ds,as]}),bs=so({defaultModifiers:[ps,gs,ds,as,gr,ur,br,ar,hr]});const vr=Object.freeze(Object.defineProperty({__proto__:null,afterMain:Qa,afterRead:za,afterWrite:Ga,applyStyles:as,arrow:ar,auto:eo,basePlacements:Fn,beforeMain:Xa,beforeRead:Wa,beforeWrite:Ja,bottom:tt,clippingParents:Va,computeStyles:ds,createPopper:bs,createPopperBase:lp,createPopperLite:cp,detectOverflow:Xn,end:Vn,eventListeners:ps,flip:ur,hide:hr,left:Ve,main:Ya,modifierPhases:er,offset:gr,placements:os,popper:Hn,popperGenerator:so,popperOffsets:gs,preventOverflow:br,read:Ka,reference:Ha,right:nt,start:un,top:Fe,variationPlacements:is,viewport:ns,write:Za},Symbol.toStringTag,{value:"Module"})),wr="dropdown",hn=".bs.dropdown",_s=".data-api",dp="ArrowUp",xr="ArrowDown",pp=`hide${hn}`,up=`hidden${hn}`,mp=`show${hn}`,fp=`shown${hn}`,Ar=`click${hn}${_s}`,Er=`keydown${hn}${_s}`,hp=`keyup${hn}${_s}`,Yn="show",gn='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',gp=`${gn}.${Yn}`,ao=".dropdown-menu",bp=j()?"top-end":"top-start",_p=j()?"top-start":"top-end",yp=j()?"bottom-end":"bottom-start",vp=j()?"bottom-start":"bottom-end",wp=j()?"left-start":"right-start",xp=j()?"right-start":"left-start",Ap={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},Ep={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class Et extends Be{constructor(o,a){super(o,a),this._popper=null,this._parent=this._element.parentNode,this._menu=$.next(this._element,ao)[0]||$.prev(this._element,ao)[0]||$.findOne(ao,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return Ap}static get DefaultType(){return Ep}static get NAME(){return wr}toggle(){return this._isShown()?this.hide():this.show()}show(){if(E(this._element)||this._isShown())return;const o={relatedTarget:this._element};if(!_.trigger(this._element,mp,o).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(const a of[].concat(...document.body.children))_.on(a,"mouseover",k);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Yn),this._element.classList.add(Yn),_.trigger(this._element,fp,o)}}hide(){if(E(this._element)||!this._isShown())return;const o={relatedTarget:this._element};this._completeHide(o)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(o){if(!_.trigger(this._element,pp,o).defaultPrevented){if("ontouchstart"in document.documentElement)for(const a of[].concat(...document.body.children))_.off(a,"mouseover",k);this._popper&&this._popper.destroy(),this._menu.classList.remove(Yn),this._element.classList.remove(Yn),this._element.setAttribute("aria-expanded","false"),$e.removeDataAttribute(this._menu,"popper"),_.trigger(this._element,up,o)}}_getConfig(o){if(typeof(o=super._getConfig(o)).reference=="object"&&!u(o.reference)&&typeof o.reference.getBoundingClientRect!="function")throw new TypeError(`${wr.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return o}_createPopper(){if(vr===void 0)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");let o=this._element;this._config.reference==="parent"?o=this._parent:u(this._config.reference)?o=m(this._config.reference):typeof this._config.reference=="object"&&(o=this._config.reference);const a=this._getPopperConfig();this._popper=bs(o,this._menu,a)}_isShown(){return this._menu.classList.contains(Yn)}_getPlacement(){const o=this._parent;if(o.classList.contains("dropend"))return wp;if(o.classList.contains("dropstart"))return xp;if(o.classList.contains("dropup-center"))return"top";if(o.classList.contains("dropdown-center"))return"bottom";const a=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return o.classList.contains("dropup")?a?_p:bp:a?vp:yp}_detectNavbar(){return this._element.closest(".navbar")!==null}_getOffset(){const{offset:o}=this._config;return typeof o=="string"?o.split(",").map(a=>Number.parseInt(a,10)):typeof o=="function"?a=>o(a,this._element):o}_getPopperConfig(){const o={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&($e.setDataAttribute(this._menu,"popper","static"),o.modifiers=[{name:"applyStyles",enabled:!1}]),{...o,...Y(this._config.popperConfig,[void 0,o])}}_selectMenuItem({key:o,target:a}){const d=$.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter(f=>h(f));d.length&&Z(d,a,o===xr,!d.includes(a)).focus()}static jQueryInterface(o){return this.each(function(){const a=Et.getOrCreateInstance(this,o);if(typeof o=="string"){if(a[o]===void 0)throw new TypeError(`No method named "${o}"`);a[o]()}})}static clearMenus(o){if(o.button===2||o.type==="keyup"&&o.key!=="Tab")return;const a=$.find(gp);for(const d of a){const f=Et.getInstance(d);if(!f||f._config.autoClose===!1)continue;const g=o.composedPath(),b=g.includes(f._menu);if(g.includes(f._element)||f._config.autoClose==="inside"&&!b||f._config.autoClose==="outside"&&b||f._menu.contains(o.target)&&(o.type==="keyup"&&o.key==="Tab"||/input|select|option|textarea|form/i.test(o.target.tagName)))continue;const v={relatedTarget:f._element};o.type==="click"&&(v.clickEvent=o),f._completeHide(v)}}static dataApiKeydownHandler(o){const a=/input|textarea/i.test(o.target.tagName),d=o.key==="Escape",f=[dp,xr].includes(o.key);if(!f&&!d||a&&!d)return;o.preventDefault();const g=this.matches(gn)?this:$.prev(this,gn)[0]||$.next(this,gn)[0]||$.findOne(gn,o.delegateTarget.parentNode),b=Et.getOrCreateInstance(g);if(f)return o.stopPropagation(),b.show(),void b._selectMenuItem(o);b._isShown()&&(o.stopPropagation(),b.hide(),g.focus())}}_.on(document,Er,gn,Et.dataApiKeydownHandler),_.on(document,Er,ao,Et.dataApiKeydownHandler),_.on(document,Ar,Et.clearMenus),_.on(document,hp,Et.clearMenus),_.on(document,Ar,gn,function(l){l.preventDefault(),Et.getOrCreateInstance(this).toggle()}),z(Et);const kr="backdrop",Tr="show",Ir=`mousedown.bs.${kr}`,kp={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Tp={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Sr extends wt{constructor(o){super(),this._config=this._getConfig(o),this._isAppended=!1,this._element=null}static get Default(){return kp}static get DefaultType(){return Tp}static get NAME(){return kr}show(o){if(!this._config.isVisible)return void Y(o);this._append();const a=this._getElement();this._config.isAnimated&&R(a),a.classList.add(Tr),this._emulateAnimation(()=>{Y(o)})}hide(o){this._config.isVisible?(this._getElement().classList.remove(Tr),this._emulateAnimation(()=>{this.dispose(),Y(o)})):Y(o)}dispose(){this._isAppended&&(_.off(this._element,Ir),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const o=document.createElement("div");o.className=this._config.className,this._config.isAnimated&&o.classList.add("fade"),this._element=o}return this._element}_configAfterMerge(o){return o.rootElement=m(o.rootElement),o}_append(){if(this._isAppended)return;const o=this._getElement();this._config.rootElement.append(o),_.on(o,Ir,()=>{Y(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(o){H(o,this._getElement(),this._config.isAnimated)}}const ro=".bs.focustrap",Ip=`focusin${ro}`,Sp=`keydown.tab${ro}`,Cr="backward",Cp={autofocus:!0,trapElement:null},Pp={autofocus:"boolean",trapElement:"element"};class Pr extends wt{constructor(o){super(),this._config=this._getConfig(o),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return Cp}static get DefaultType(){return Pp}static get NAME(){return"focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),_.off(document,ro),_.on(document,Ip,o=>this._handleFocusin(o)),_.on(document,Sp,o=>this._handleKeydown(o)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,_.off(document,ro))}_handleFocusin(o){const{trapElement:a}=this._config;if(o.target===document||o.target===a||a.contains(o.target))return;const d=$.focusableChildren(a);d.length===0?a.focus():this._lastTabNavDirection===Cr?d[d.length-1].focus():d[0].focus()}_handleKeydown(o){o.key==="Tab"&&(this._lastTabNavDirection=o.shiftKey?Cr:"forward")}}const Or=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Dr=".sticky-top",lo="padding-right",Lr="margin-right";class ys{constructor(){this._element=document.body}getWidth(){const o=document.documentElement.clientWidth;return Math.abs(window.innerWidth-o)}hide(){const o=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,lo,a=>a+o),this._setElementAttributes(Or,lo,a=>a+o),this._setElementAttributes(Dr,Lr,a=>a-o)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,lo),this._resetElementAttributes(Or,lo),this._resetElementAttributes(Dr,Lr)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(o,a,d){const f=this.getWidth();this._applyManipulationCallback(o,g=>{if(g!==this._element&&window.innerWidth>g.clientWidth+f)return;this._saveInitialAttribute(g,a);const b=window.getComputedStyle(g).getPropertyValue(a);g.style.setProperty(a,`${d(Number.parseFloat(b))}px`)})}_saveInitialAttribute(o,a){const d=o.style.getPropertyValue(a);d&&$e.setDataAttribute(o,a,d)}_resetElementAttributes(o,a){this._applyManipulationCallback(o,d=>{const f=$e.getDataAttribute(d,a);f!==null?($e.removeDataAttribute(d,a),d.style.setProperty(a,f)):d.style.removeProperty(a)})}_applyManipulationCallback(o,a){if(u(o))a(o);else for(const d of $.find(o,this._element))a(d)}}const pt=".bs.modal",Op=`hide${pt}`,Dp=`hidePrevented${pt}`,$r=`hidden${pt}`,Nr=`show${pt}`,Lp=`shown${pt}`,$p=`resize${pt}`,Np=`click.dismiss${pt}`,Rp=`mousedown.dismiss${pt}`,Mp=`keydown.dismiss${pt}`,jp=`click${pt}.data-api`,Rr="modal-open",Mr="show",vs="modal-static",Up={backdrop:!0,focus:!0,keyboard:!0},Bp={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class bn extends Be{constructor(o,a){super(o,a),this._dialog=$.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new ys,this._addEventListeners()}static get Default(){return Up}static get DefaultType(){return Bp}static get NAME(){return"modal"}toggle(o){return this._isShown?this.hide():this.show(o)}show(o){this._isShown||this._isTransitioning||_.trigger(this._element,Nr,{relatedTarget:o}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Rr),this._adjustDialog(),this._backdrop.show(()=>this._showElement(o)))}hide(){this._isShown&&!this._isTransitioning&&(_.trigger(this._element,Op).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(Mr),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated())))}dispose(){_.off(window,pt),_.off(this._dialog,pt),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Sr({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Pr({trapElement:this._element})}_showElement(o){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const a=$.findOne(".modal-body",this._dialog);a&&(a.scrollTop=0),R(this._element),this._element.classList.add(Mr),this._queueCallback(()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,_.trigger(this._element,Lp,{relatedTarget:o})},this._dialog,this._isAnimated())}_addEventListeners(){_.on(this._element,Mp,o=>{o.key==="Escape"&&(this._config.keyboard?this.hide():this._triggerBackdropTransition())}),_.on(window,$p,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),_.on(this._element,Rp,o=>{_.one(this._element,Np,a=>{this._element===o.target&&this._element===a.target&&(this._config.backdrop!=="static"?this._config.backdrop&&this.hide():this._triggerBackdropTransition())})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(Rr),this._resetAdjustments(),this._scrollBar.reset(),_.trigger(this._element,$r)})}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(_.trigger(this._element,Dp).defaultPrevented)return;const o=this._element.scrollHeight>document.documentElement.clientHeight,a=this._element.style.overflowY;a==="hidden"||this._element.classList.contains(vs)||(o||(this._element.style.overflowY="hidden"),this._element.classList.add(vs),this._queueCallback(()=>{this._element.classList.remove(vs),this._queueCallback(()=>{this._element.style.overflowY=a},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const o=this._element.scrollHeight>document.documentElement.clientHeight,a=this._scrollBar.getWidth(),d=a>0;if(d&&!o){const f=j()?"paddingLeft":"paddingRight";this._element.style[f]=`${a}px`}if(!d&&o){const f=j()?"paddingRight":"paddingLeft";this._element.style[f]=`${a}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(o,a){return this.each(function(){const d=bn.getOrCreateInstance(this,o);if(typeof o=="string"){if(d[o]===void 0)throw new TypeError(`No method named "${o}"`);d[o](a)}})}}_.on(document,jp,'[data-bs-toggle="modal"]',function(l){const o=$.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&l.preventDefault(),_.one(o,Nr,d=>{d.defaultPrevented||_.one(o,$r,()=>{h(this)&&this.focus()})});const a=$.findOne(".modal.show");a&&bn.getInstance(a).hide(),bn.getOrCreateInstance(o).toggle(this)}),$n(bn),z(bn);const Ht=".bs.offcanvas",jr=".data-api",qp=`load${Ht}${jr}`,Ur="show",Br="showing",qr="hiding",Fr=".offcanvas.show",Fp=`show${Ht}`,Vp=`shown${Ht}`,Hp=`hide${Ht}`,Vr=`hidePrevented${Ht}`,Hr=`hidden${Ht}`,Wp=`resize${Ht}`,Kp=`click${Ht}${jr}`,zp=`keydown.dismiss${Ht}`,Xp={backdrop:!0,keyboard:!0,scroll:!1},Yp={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Wt extends Be{constructor(o,a){super(o,a),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return Xp}static get DefaultType(){return Yp}static get NAME(){return"offcanvas"}toggle(o){return this._isShown?this.hide():this.show(o)}show(o){this._isShown||_.trigger(this._element,Fp,{relatedTarget:o}).defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||new ys().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Br),this._queueCallback(()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(Ur),this._element.classList.remove(Br),_.trigger(this._element,Vp,{relatedTarget:o})},this._element,!0))}hide(){this._isShown&&(_.trigger(this._element,Hp).defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(qr),this._backdrop.hide(),this._queueCallback(()=>{this._element.classList.remove(Ur,qr),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new ys().reset(),_.trigger(this._element,Hr)},this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const o=!!this._config.backdrop;return new Sr({className:"offcanvas-backdrop",isVisible:o,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:o?()=>{this._config.backdrop!=="static"?this.hide():_.trigger(this._element,Vr)}:null})}_initializeFocusTrap(){return new Pr({trapElement:this._element})}_addEventListeners(){_.on(this._element,zp,o=>{o.key==="Escape"&&(this._config.keyboard?this.hide():_.trigger(this._element,Vr))})}static jQueryInterface(o){return this.each(function(){const a=Wt.getOrCreateInstance(this,o);if(typeof o=="string"){if(a[o]===void 0||o.startsWith("_")||o==="constructor")throw new TypeError(`No method named "${o}"`);a[o](this)}})}}_.on(document,Kp,'[data-bs-toggle="offcanvas"]',function(l){const o=$.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&l.preventDefault(),E(this))return;_.one(o,Hr,()=>{h(this)&&this.focus()});const a=$.findOne(Fr);a&&a!==o&&Wt.getInstance(a).hide(),Wt.getOrCreateInstance(o).toggle(this)}),_.on(window,qp,()=>{for(const l of $.find(Fr))Wt.getOrCreateInstance(l).show()}),_.on(window,Wp,()=>{for(const l of $.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(l).position!=="fixed"&&Wt.getOrCreateInstance(l).hide()}),$n(Wt),z(Wt);const Wr={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Qp=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Jp=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,Zp=(l,o)=>{const a=l.nodeName.toLowerCase();return o.includes(a)?!Qp.has(a)||!!Jp.test(l.nodeValue):o.filter(d=>d instanceof RegExp).some(d=>d.test(a))},Gp={allowList:Wr,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},eu={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},tu={entry:"(string|element|function|null)",selector:"(string|element)"};class nu extends wt{constructor(o){super(),this._config=this._getConfig(o)}static get Default(){return Gp}static get DefaultType(){return eu}static get NAME(){return"TemplateFactory"}getContent(){return Object.values(this._config.content).map(o=>this._resolvePossibleFunction(o)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(o){return this._checkContent(o),this._config.content={...this._config.content,...o},this}toHtml(){const o=document.createElement("div");o.innerHTML=this._maybeSanitize(this._config.template);for(const[f,g]of Object.entries(this._config.content))this._setContent(o,g,f);const a=o.children[0],d=this._resolvePossibleFunction(this._config.extraClass);return d&&a.classList.add(...d.split(" ")),a}_typeCheckConfig(o){super._typeCheckConfig(o),this._checkContent(o.content)}_checkContent(o){for(const[a,d]of Object.entries(o))super._typeCheckConfig({selector:a,entry:d},tu)}_setContent(o,a,d){const f=$.findOne(d,o);f&&((a=this._resolvePossibleFunction(a))?u(a)?this._putElementInTemplate(m(a),f):this._config.html?f.innerHTML=this._maybeSanitize(a):f.textContent=a:f.remove())}_maybeSanitize(o){return this._config.sanitize?(function(a,d,f){if(!a.length)return a;if(f&&typeof f=="function")return f(a);const g=new window.DOMParser().parseFromString(a,"text/html"),b=[].concat(...g.body.querySelectorAll("*"));for(const v of b){const T=v.nodeName.toLowerCase();if(!Object.keys(d).includes(T)){v.remove();continue}const C=[].concat(...v.attributes),P=[].concat(d["*"]||[],d[T]||[]);for(const I of C)Zp(I,P)||v.removeAttribute(I.nodeName)}return g.body.innerHTML})(o,this._config.allowList,this._config.sanitizeFn):o}_resolvePossibleFunction(o){return Y(o,[void 0,this])}_putElementInTemplate(o,a){if(this._config.html)return a.innerHTML="",void a.append(o);a.textContent=o.textContent}}const iu=new Set(["sanitize","allowList","sanitizeFn"]),ws="fade",co="show",ou=".tooltip-inner",Kr=".modal",zr="hide.bs.modal",Ei="hover",xs="focus",As="click",su={AUTO:"auto",TOP:"top",RIGHT:j()?"left":"right",BOTTOM:"bottom",LEFT:j()?"right":"left"},au={allowList:Wr,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},ru={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class _n extends Be{constructor(o,a){if(vr===void 0)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");super(o,a),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return au}static get DefaultType(){return ru}static get NAME(){return"tooltip"}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),_.off(this._element.closest(Kr),zr,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const o=_.trigger(this._element,this.constructor.eventName("show")),a=(O(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(o.defaultPrevented||!a)return;this._disposePopper();const d=this._getTipElement();this._element.setAttribute("aria-describedby",d.getAttribute("id"));const{container:f}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(f.append(d),_.trigger(this._element,this.constructor.eventName("inserted"))),this._popper=this._createPopper(d),d.classList.add(co),"ontouchstart"in document.documentElement)for(const g of[].concat(...document.body.children))_.on(g,"mouseover",k);this._queueCallback(()=>{_.trigger(this._element,this.constructor.eventName("shown")),this._isHovered===!1&&this._leave(),this._isHovered=!1},this.tip,this._isAnimated())}hide(){if(this._isShown()&&!_.trigger(this._element,this.constructor.eventName("hide")).defaultPrevented){if(this._getTipElement().classList.remove(co),"ontouchstart"in document.documentElement)for(const o of[].concat(...document.body.children))_.off(o,"mouseover",k);this._activeTrigger[As]=!1,this._activeTrigger[xs]=!1,this._activeTrigger[Ei]=!1,this._isHovered=null,this._queueCallback(()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),_.trigger(this._element,this.constructor.eventName("hidden")))},this.tip,this._isAnimated())}}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(o){const a=this._getTemplateFactory(o).toHtml();if(!a)return null;a.classList.remove(ws,co),a.classList.add(`bs-${this.constructor.NAME}-auto`);const d=(f=>{do f+=Math.floor(1e6*Math.random());while(document.getElementById(f));return f})(this.constructor.NAME).toString();return a.setAttribute("id",d),this._isAnimated()&&a.classList.add(ws),a}setContent(o){this._newContent=o,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(o){return this._templateFactory?this._templateFactory.changeContent(o):this._templateFactory=new nu({...this._config,content:o,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[ou]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(o){return this.constructor.getOrCreateInstance(o.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(ws)}_isShown(){return this.tip&&this.tip.classList.contains(co)}_createPopper(o){const a=Y(this._config.placement,[this,o,this._element]),d=su[a.toUpperCase()];return bs(this._element,o,this._getPopperConfig(d))}_getOffset(){const{offset:o}=this._config;return typeof o=="string"?o.split(",").map(a=>Number.parseInt(a,10)):typeof o=="function"?a=>o(a,this._element):o}_resolvePossibleFunction(o){return Y(o,[this._element,this._element])}_getPopperConfig(o){const a={placement:o,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:d=>{this._getTipElement().setAttribute("data-popper-placement",d.state.placement)}}]};return{...a,...Y(this._config.popperConfig,[void 0,a])}}_setListeners(){const o=this._config.trigger.split(" ");for(const a of o)if(a==="click")_.on(this._element,this.constructor.eventName("click"),this._config.selector,d=>{const f=this._initializeOnDelegatedTarget(d);f._activeTrigger[As]=!(f._isShown()&&f._activeTrigger[As]),f.toggle()});else if(a!=="manual"){const d=a===Ei?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),f=a===Ei?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout");_.on(this._element,d,this._config.selector,g=>{const b=this._initializeOnDelegatedTarget(g);b._activeTrigger[g.type==="focusin"?xs:Ei]=!0,b._enter()}),_.on(this._element,f,this._config.selector,g=>{const b=this._initializeOnDelegatedTarget(g);b._activeTrigger[g.type==="focusout"?xs:Ei]=b._element.contains(g.relatedTarget),b._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},_.on(this._element.closest(Kr),zr,this._hideModalHandler)}_fixTitle(){const o=this._element.getAttribute("title");o&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",o),this._element.setAttribute("data-bs-original-title",o),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(o,a){clearTimeout(this._timeout),this._timeout=setTimeout(o,a)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(o){const a=$e.getDataAttributes(this._element);for(const d of Object.keys(a))iu.has(d)&&delete a[d];return o={...a,...typeof o=="object"&&o?o:{}},o=this._mergeConfigObj(o),o=this._configAfterMerge(o),this._typeCheckConfig(o),o}_configAfterMerge(o){return o.container=o.container===!1?document.body:m(o.container),typeof o.delay=="number"&&(o.delay={show:o.delay,hide:o.delay}),typeof o.title=="number"&&(o.title=o.title.toString()),typeof o.content=="number"&&(o.content=o.content.toString()),o}_getDelegateConfig(){const o={};for(const[a,d]of Object.entries(this._config))this.constructor.Default[a]!==d&&(o[a]=d);return o.selector=!1,o.trigger="manual",o}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(o){return this.each(function(){const a=_n.getOrCreateInstance(this,o);if(typeof o=="string"){if(a[o]===void 0)throw new TypeError(`No method named "${o}"`);a[o]()}})}}z(_n);const lu=".popover-header",cu=".popover-body",du={..._n.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},pu={..._n.DefaultType,content:"(null|string|element|function)"};class po extends _n{static get Default(){return du}static get DefaultType(){return pu}static get NAME(){return"popover"}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[lu]:this._getTitle(),[cu]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(o){return this.each(function(){const a=po.getOrCreateInstance(this,o);if(typeof o=="string"){if(a[o]===void 0)throw new TypeError(`No method named "${o}"`);a[o]()}})}}z(po);const Es=".bs.scrollspy",uu=`activate${Es}`,Xr=`click${Es}`,mu=`load${Es}.data-api`,Qn="active",ks="[href]",Yr=".nav-link",fu=`${Yr}, .nav-item > ${Yr}, .list-group-item`,hu={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},gu={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class ki extends Be{constructor(o,a){super(o,a),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return hu}static get DefaultType(){return gu}static get NAME(){return"scrollspy"}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const o of this._observableSections.values())this._observer.observe(o)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(o){return o.target=m(o.target)||document.body,o.rootMargin=o.offset?`${o.offset}px 0px -30%`:o.rootMargin,typeof o.threshold=="string"&&(o.threshold=o.threshold.split(",").map(a=>Number.parseFloat(a))),o}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(_.off(this._config.target,Xr),_.on(this._config.target,Xr,ks,o=>{const a=this._observableSections.get(o.target.hash);if(a){o.preventDefault();const d=this._rootElement||window,f=a.offsetTop-this._element.offsetTop;if(d.scrollTo)return void d.scrollTo({top:f,behavior:"smooth"});d.scrollTop=f}}))}_getNewObserver(){const o={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(a=>this._observerCallback(a),o)}_observerCallback(o){const a=b=>this._targetLinks.get(`#${b.target.id}`),d=b=>{this._previousScrollData.visibleEntryTop=b.target.offsetTop,this._process(a(b))},f=(this._rootElement||document.documentElement).scrollTop,g=f>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=f;for(const b of o){if(!b.isIntersecting){this._activeTarget=null,this._clearActiveClass(a(b));continue}const v=b.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(g&&v){if(d(b),!f)return}else g||v||d(b)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const o=$.find(ks,this._config.target);for(const a of o){if(!a.hash||E(a))continue;const d=$.findOne(decodeURI(a.hash),this._element);h(d)&&(this._targetLinks.set(decodeURI(a.hash),a),this._observableSections.set(a.hash,d))}}_process(o){this._activeTarget!==o&&(this._clearActiveClass(this._config.target),this._activeTarget=o,o.classList.add(Qn),this._activateParents(o),_.trigger(this._element,uu,{relatedTarget:o}))}_activateParents(o){if(o.classList.contains("dropdown-item"))$.findOne(".dropdown-toggle",o.closest(".dropdown")).classList.add(Qn);else for(const a of $.parents(o,".nav, .list-group"))for(const d of $.prev(a,fu))d.classList.add(Qn)}_clearActiveClass(o){o.classList.remove(Qn);const a=$.find(`${ks}.${Qn}`,o);for(const d of a)d.classList.remove(Qn)}static jQueryInterface(o){return this.each(function(){const a=ki.getOrCreateInstance(this,o);if(typeof o=="string"){if(a[o]===void 0||o.startsWith("_")||o==="constructor")throw new TypeError(`No method named "${o}"`);a[o]()}})}}_.on(window,mu,()=>{for(const l of $.find('[data-bs-spy="scroll"]'))ki.getOrCreateInstance(l)}),z(ki);const yn=".bs.tab",bu=`hide${yn}`,_u=`hidden${yn}`,yu=`show${yn}`,vu=`shown${yn}`,wu=`click${yn}`,xu=`keydown${yn}`,Au=`load${yn}`,Eu="ArrowLeft",Qr="ArrowRight",ku="ArrowUp",Jr="ArrowDown",Ts="Home",Zr="End",vn="active",Gr="fade",Is="show",el=".dropdown-toggle",Ss=`:not(${el})`,tl='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Cs=`.nav-link${Ss}, .list-group-item${Ss}, [role="tab"]${Ss}, ${tl}`,Tu=`.${vn}[data-bs-toggle="tab"], .${vn}[data-bs-toggle="pill"], .${vn}[data-bs-toggle="list"]`;class wn extends Be{constructor(o){super(o),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),_.on(this._element,xu,a=>this._keydown(a)))}static get NAME(){return"tab"}show(){const o=this._element;if(this._elemIsActive(o))return;const a=this._getActiveElem(),d=a?_.trigger(a,bu,{relatedTarget:o}):null;_.trigger(o,yu,{relatedTarget:a}).defaultPrevented||d&&d.defaultPrevented||(this._deactivate(a,o),this._activate(o,a))}_activate(o,a){o&&(o.classList.add(vn),this._activate($.getElementFromSelector(o)),this._queueCallback(()=>{o.getAttribute("role")==="tab"?(o.removeAttribute("tabindex"),o.setAttribute("aria-selected",!0),this._toggleDropDown(o,!0),_.trigger(o,vu,{relatedTarget:a})):o.classList.add(Is)},o,o.classList.contains(Gr)))}_deactivate(o,a){o&&(o.classList.remove(vn),o.blur(),this._deactivate($.getElementFromSelector(o)),this._queueCallback(()=>{o.getAttribute("role")==="tab"?(o.setAttribute("aria-selected",!1),o.setAttribute("tabindex","-1"),this._toggleDropDown(o,!1),_.trigger(o,_u,{relatedTarget:a})):o.classList.remove(Is)},o,o.classList.contains(Gr)))}_keydown(o){if(![Eu,Qr,ku,Jr,Ts,Zr].includes(o.key))return;o.stopPropagation(),o.preventDefault();const a=this._getChildren().filter(f=>!E(f));let d;if([Ts,Zr].includes(o.key))d=a[o.key===Ts?0:a.length-1];else{const f=[Qr,Jr].includes(o.key);d=Z(a,o.target,f,!0)}d&&(d.focus({preventScroll:!0}),wn.getOrCreateInstance(d).show())}_getChildren(){return $.find(Cs,this._parent)}_getActiveElem(){return this._getChildren().find(o=>this._elemIsActive(o))||null}_setInitialAttributes(o,a){this._setAttributeIfNotExists(o,"role","tablist");for(const d of a)this._setInitialAttributesOnChild(d)}_setInitialAttributesOnChild(o){o=this._getInnerElement(o);const a=this._elemIsActive(o),d=this._getOuterElement(o);o.setAttribute("aria-selected",a),d!==o&&this._setAttributeIfNotExists(d,"role","presentation"),a||o.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(o,"role","tab"),this._setInitialAttributesOnTargetPanel(o)}_setInitialAttributesOnTargetPanel(o){const a=$.getElementFromSelector(o);a&&(this._setAttributeIfNotExists(a,"role","tabpanel"),o.id&&this._setAttributeIfNotExists(a,"aria-labelledby",`${o.id}`))}_toggleDropDown(o,a){const d=this._getOuterElement(o);if(!d.classList.contains("dropdown"))return;const f=(g,b)=>{const v=$.findOne(g,d);v&&v.classList.toggle(b,a)};f(el,vn),f(".dropdown-menu",Is),d.setAttribute("aria-expanded",a)}_setAttributeIfNotExists(o,a,d){o.hasAttribute(a)||o.setAttribute(a,d)}_elemIsActive(o){return o.classList.contains(vn)}_getInnerElement(o){return o.matches(Cs)?o:$.findOne(Cs,o)}_getOuterElement(o){return o.closest(".nav-item, .list-group-item")||o}static jQueryInterface(o){return this.each(function(){const a=wn.getOrCreateInstance(this);if(typeof o=="string"){if(a[o]===void 0||o.startsWith("_")||o==="constructor")throw new TypeError(`No method named "${o}"`);a[o]()}})}}_.on(document,wu,tl,function(l){["A","AREA"].includes(this.tagName)&&l.preventDefault(),E(this)||wn.getOrCreateInstance(this).show()}),_.on(window,Au,()=>{for(const l of $.find(Tu))wn.getOrCreateInstance(l)}),z(wn);const Zt=".bs.toast",Iu=`mouseover${Zt}`,Su=`mouseout${Zt}`,Cu=`focusin${Zt}`,Pu=`focusout${Zt}`,Ou=`hide${Zt}`,Du=`hidden${Zt}`,Lu=`show${Zt}`,$u=`shown${Zt}`,nl="hide",uo="show",mo="showing",Nu={animation:"boolean",autohide:"boolean",delay:"number"},Ru={animation:!0,autohide:!0,delay:5e3};class Ti extends Be{constructor(o,a){super(o,a),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return Ru}static get DefaultType(){return Nu}static get NAME(){return"toast"}show(){_.trigger(this._element,Lu).defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove(nl),R(this._element),this._element.classList.add(uo,mo),this._queueCallback(()=>{this._element.classList.remove(mo),_.trigger(this._element,$u),this._maybeScheduleHide()},this._element,this._config.animation))}hide(){this.isShown()&&(_.trigger(this._element,Ou).defaultPrevented||(this._element.classList.add(mo),this._queueCallback(()=>{this._element.classList.add(nl),this._element.classList.remove(mo,uo),_.trigger(this._element,Du)},this._element,this._config.animation)))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(uo),super.dispose()}isShown(){return this._element.classList.contains(uo)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(o,a){switch(o.type){case"mouseover":case"mouseout":this._hasMouseInteraction=a;break;case"focusin":case"focusout":this._hasKeyboardInteraction=a}if(a)return void this._clearTimeout();const d=o.relatedTarget;this._element===d||this._element.contains(d)||this._maybeScheduleHide()}_setListeners(){_.on(this._element,Iu,o=>this._onInteraction(o,!0)),_.on(this._element,Su,o=>this._onInteraction(o,!1)),_.on(this._element,Cu,o=>this._onInteraction(o,!0)),_.on(this._element,Pu,o=>this._onInteraction(o,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(o){return this.each(function(){const a=Ti.getOrCreateInstance(this,o);if(typeof o=="string"){if(a[o]===void 0)throw new TypeError(`No method named "${o}"`);a[o](this)}})}}return $n(Ti),z(Ti),{Alert:dn,Button:Qt,Carousel:Un,Collapse:qn,Dropdown:Et,Modal:bn,Offcanvas:Wt,Popover:po,ScrollSpy:ki,Tab:wn,Toast:Ti,Tooltip:_n}})})(Io)),Io.exports}Kb();const Sa="https://huggingface.co",bd="https://router.huggingface.co",zb="X-HF-Bill-To",Zl={baseten:{},"black-forest-labs":{},cerebras:{},clarifai:{},cohere:{},"fal-ai":{},"featherless-ai":{},"fireworks-ai":{},groq:{},"hf-inference":{},hyperbolic:{},nebius:{},novita:{},nscale:{},openai:{},publicai:{},ovhcloud:{},replicate:{},sambanova:{},scaleway:{},together:{},wavespeed:{},"zai-org":{}};class Ca extends Error{constructor(e){super(e),this.name="InferenceClientError"}}class Ce extends Ca{constructor(e){super(e),this.name="InputError"}}class _d extends Ca{httpRequest;httpResponse;constructor(e,n,i){super(e),this.httpRequest={...n,...n.headers?{headers:{...n.headers,..."Authorization"in n.headers?{Authorization:"Bearer [redacted]"}:void 0}}:void 0},this.httpResponse=i}}class Oe extends _d{constructor(e,n,i){super(e,n,i),this.name="ProviderApiError"}}class Oi extends _d{constructor(e,n,i){super(e,n,i),this.name="HubApiError"}}class D extends Ca{constructor(e){super(e),this.name="ProviderOutputError"}}function yd(t){return Array.isArray(t)?t:[t]}class Ye{provider;baseUrl;clientSideRoutingOnly;constructor(e,n,i=!1){this.provider=e,this.baseUrl=n,this.clientSideRoutingOnly=i}makeBaseUrl(e){return e.authMethod!=="provider-key"?`${bd}/${this.provider}`:this.baseUrl}makeBody(e){return"data"in e.args&&e.args.data?e.args.data:JSON.stringify(this.preparePayload(e))}makeUrl(e){const n=this.makeBaseUrl(e),i=this.makeRoute(e).replace(/^\/+/,"");return`${n}/${i}`}prepareHeaders(e,n){const i={};return e.authMethod!=="none"&&(i.Authorization=`Bearer ${e.accessToken}`),n||(i["Content-Type"]="application/json"),i}}class Re extends Ye{constructor(e,n,i=!1){super(e,n,i)}makeRoute(){return"v1/chat/completions"}preparePayload(e){return{...e.args,model:e.model}}async getResponse(e){if(typeof e=="object"&&Array.isArray(e?.choices)&&typeof e?.created=="number"&&typeof e?.id=="string"&&typeof e?.model=="string"&&(e.system_fingerprint===void 0||e.system_fingerprint===null||typeof e.system_fingerprint=="string")&&typeof e?.usage=="object")return e;throw new D("Expected ChatCompletionOutput")}}class cn extends Ye{constructor(e,n,i=!1){super(e,n,i)}preparePayload(e){return{...e.args,model:e.model}}makeRoute(){return"v1/completions"}async getResponse(e){const n=yd(e);if(Array.isArray(n)&&n.length>0&&n.every(i=>typeof i=="object"&&!!i&&"generated_text"in i&&typeof i.generated_text=="string"))return n[0];throw new D("Expected Array<{generated_text: string}>")}}function Ze(t){if(globalThis.Buffer)return globalThis.Buffer.from(t).toString("base64");{const e=[];return t.forEach(n=>{e.push(String.fromCharCode(n))}),globalThis.btoa(e.join(""))}}function Xb(t,e){return Object.assign({},...e.map(n=>{if(t[n]!==void 0)return{[n]:t[n]}}))}function aa(t,e){return t.includes(e)}function oe(t,e){const n=Array.isArray(e)?e:[e],i=Object.keys(t).filter(s=>!aa(n,s));return Xb(t,i)}const Gl=["feature-extraction","sentence-similarity"];class me extends Ye{constructor(){super("hf-inference",`${bd}/hf-inference`)}preparePayload(e){return e.args}makeUrl(e){return e.model.startsWith("http://")||e.model.startsWith("https://")?e.model:super.makeUrl(e)}makeRoute(e){return e.task&&["feature-extraction","sentence-similarity"].includes(e.task)?`models/${e.model}/pipeline/${e.task}`:`models/${e.model}`}async getResponse(e){return e}}class Yb extends me{async getResponse(e,n,i,s){if(!e)throw new D("Received malformed response from HF-Inference text-to-image API: response is undefined");if(typeof e=="object"){if(s==="json")return{...e};if("data"in e&&Array.isArray(e.data)&&e.data[0].b64_json){const r=e.data[0].b64_json;return s==="url"?`data:image/jpeg;base64,${r}`:await(await fetch(`data:image/jpeg;base64,${r}`)).blob()}if("output"in e&&Array.isArray(e.output))return s==="url"?e.output[0]:await(await fetch(e.output[0])).blob()}if(e instanceof Blob){if(s==="url"||s==="json"){const r=await e.arrayBuffer().then(c=>Buffer.from(c).toString("base64"));return s==="url"?`data:image/jpeg;base64,${r}`:{output:`data:image/jpeg;base64,${r}`}}return e}throw new D("Received malformed response from HF-Inference text-to-image API: expected a Blob")}}class Qb extends me{makeUrl(e){let n;return e.model.startsWith("http://")||e.model.startsWith("https://")?n=e.model.trim():n=`${this.makeBaseUrl(e)}/models/${e.model}`,n=n.replace(/\/+$/,""),n.endsWith("/v1")?n+="/chat/completions":n.endsWith("/chat/completions")||(n+="/v1/chat/completions"),n}preparePayload(e){return{...e.args,model:e.model}}async getResponse(e){return e}}class Jb extends me{async getResponse(e){const n=yd(e);if(Array.isArray(n)&&n.every(i=>"generated_text"in i&&typeof i?.generated_text=="string"))return n?.[0];throw new D("Received malformed response from HF-Inference text generation API: expected Array<{generated_text: string}>")}}class Zb extends me{async getResponse(e){if(Array.isArray(e)&&e.every(n=>typeof n=="object"&&n!==null&&typeof n.label=="string"&&typeof n.score=="number"))return e;throw new D("Received malformed response from HF-Inference audio-classification API: expected Array<{label: string, score: number}> but received different format")}}class Gb extends me{async getResponse(e){return e}async preparePayloadAsync(e){return"data"in e?e:{...oe(e,"inputs"),data:e.inputs}}}class e_ extends me{async getResponse(e){if(!Array.isArray(e))throw new D("Received malformed response from HF-Inference audio-to-audio API: expected Array");if(!e.every(n=>typeof n=="object"&&n&&"label"in n&&typeof n.label=="string"&&"content-type"in n&&typeof n["content-type"]=="string"&&"blob"in n&&typeof n.blob=="string"))throw new D("Received malformed response from HF-Inference audio-to-audio API: expected Array<{label: string, audio: Blob}>");return e}}class t_ extends me{async getResponse(e){if(Array.isArray(e)&&e.every(n=>typeof n=="object"&&!!n&&typeof n?.answer=="string"&&(typeof n.end=="number"||typeof n.end>"u")&&(typeof n.score=="number"||typeof n.score>"u")&&(typeof n.start=="number"||typeof n.start>"u")))return e[0];throw new D("Received malformed response from HF-Inference document-question-answering API: expected Array<{answer: string, end: number, score: number, start: number}>")}}class n_ extends me{async getResponse(e){const n=(i,s,r=0)=>r>s?!1:i.every(c=>Array.isArray(c))?i.every(c=>n(c,s,r+1)):i.every(c=>typeof c=="number");if(Array.isArray(e)&&n(e,3,0))return e;throw new D("Received malformed response from HF-Inference feature-extraction API: expected Array<number[][][] | number[][] | number[] | number>")}}class i_ extends me{async getResponse(e){if(Array.isArray(e)&&e.every(n=>typeof n.label=="string"&&typeof n.score=="number"))return e;throw new D("Received malformed response from HF-Inference image-classification API: expected Array<{label: string, score: number}>")}}class o_ extends me{async getResponse(e){if(Array.isArray(e)&&e.every(n=>typeof n.label=="string"&&typeof n.mask=="string"&&(n.score===void 0||typeof n.score=="number")))return e;throw new D("Received malformed response from HF-Inference image-segmentation API: expected Array<{label: string, mask: string, score: number}>")}async preparePayloadAsync(e){return{...e,inputs:Ze(new Uint8Array(e.inputs instanceof ArrayBuffer?e.inputs:await e.inputs.arrayBuffer()))}}}class s_ extends me{async getResponse(e){if(typeof e?.generated_text!="string")throw new D("Received malformed response from HF-Inference image-to-text API: expected {generated_text: string}");return e}}class a_ extends me{async preparePayloadAsync(e){return e.parameters?{...e,inputs:Ze(new Uint8Array(e.inputs instanceof ArrayBuffer?e.inputs:await e.inputs.arrayBuffer()))}:{...e,model:e.model,data:e.inputs}}async getResponse(e){if(e instanceof Blob)return e;throw new D("Received malformed response from HF-Inference image-to-image API: expected Blob")}}class r_ extends me{async getResponse(e){if(Array.isArray(e)&&e.every(n=>typeof n.label=="string"&&typeof n.score=="number"&&typeof n.box.xmin=="number"&&typeof n.box.ymin=="number"&&typeof n.box.xmax=="number"&&typeof n.box.ymax=="number"))return e;throw new D("Received malformed response from HF-Inference object-detection API: expected Array<{label: string, score: number, box: {xmin: number, ymin: number, xmax: number, ymax: number}}>")}}class l_ extends me{async getResponse(e){if(Array.isArray(e)&&e.every(n=>typeof n.label=="string"&&typeof n.score=="number"))return e;throw new D("Received malformed response from HF-Inference zero-shot-image-classification API: expected Array<{label: string, score: number}>")}}class c_ extends me{async getResponse(e){const n=e?.[0];if(Array.isArray(n)&&n.every(i=>typeof i?.label=="string"&&typeof i.score=="number"))return n;throw new D("Received malformed response from HF-Inference text-classification API: expected Array<{label: string, score: number}>")}}class d_ extends me{async getResponse(e){if(Array.isArray(e)?e.every(n=>typeof n=="object"&&!!n&&typeof n.answer=="string"&&typeof n.end=="number"&&typeof n.score=="number"&&typeof n.start=="number"):typeof e=="object"&&e&&typeof e.answer=="string"&&typeof e.end=="number"&&typeof e.score=="number"&&typeof e.start=="number")return Array.isArray(e)?e[0]:e;throw new D("Received malformed response from HF-Inference question-answering API: expected Array<{answer: string, end: number, score: number, start: number}>")}}class p_ extends me{async getResponse(e){if(Array.isArray(e)&&e.every(n=>typeof n.score=="number"&&typeof n.sequence=="string"&&typeof n.token=="number"&&typeof n.token_str=="string"))return e;throw new D("Received malformed response from HF-Inference fill-mask API: expected Array<{score: number, sequence: string, token: number, token_str: string}>")}}class Pa extends me{async getResponse(e){if(typeof e=="object"&&e!==null&&"labels"in e&&"scores"in e&&Array.isArray(e.labels)&&Array.isArray(e.scores)&&e.labels.length===e.scores.length&&e.labels.every(n=>typeof n=="string")&&e.scores.every(n=>typeof n=="number")){const n=e.scores;return e.labels.map((i,s)=>({label:i,score:n[s]}))}if(Array.isArray(e)&&e.every(Pa.validateOutputElement))return e;throw new D("Received malformed response from HF-Inference zero-shot-classification API: expected Array<{label: string, score: number}>")}static validateOutputElement(e){return typeof e=="object"&&!!e&&"label"in e&&"score"in e&&typeof e.label=="string"&&typeof e.score=="number"}}class u_ extends me{async getResponse(e){if(Array.isArray(e)&&e.every(n=>typeof n=="number"))return e;throw new D("Received malformed response from HF-Inference sentence-similarity API: expected Array<number>")}}class $o extends me{static validate(e){return typeof e=="object"&&!!e&&"aggregator"in e&&typeof e.aggregator=="string"&&"answer"in e&&typeof e.answer=="string"&&"cells"in e&&Array.isArray(e.cells)&&e.cells.every(n=>typeof n=="string")&&"coordinates"in e&&Array.isArray(e.coordinates)&&e.coordinates.every(n=>Array.isArray(n)&&n.every(i=>typeof i=="number"))}async getResponse(e){if(Array.isArray(e)&&Array.isArray(e)?e.every(n=>$o.validate(n)):$o.validate(e))return Array.isArray(e)?e[0]:e;throw new D("Received malformed response from HF-Inference table-question-answering API: expected {aggregator: string, answer: string, cells: string[], coordinates: number[][]}")}}class m_ extends me{async getResponse(e){if(Array.isArray(e)&&e.every(n=>typeof n.end=="number"&&typeof n.entity_group=="string"&&typeof n.score=="number"&&typeof n.start=="number"&&typeof n.word=="string"))return e;throw new D("Received malformed response from HF-Inference token-classification API: expected Array<{end: number, entity_group: string, score: number, start: number, word: string}>")}}class f_ extends me{async getResponse(e){if(Array.isArray(e)&&e.every(n=>typeof n?.translation_text=="string"))return e?.length===1?e?.[0]:e;throw new D("Received malformed response from HF-Inference translation API: expected Array<{translation_text: string}>")}}class h_ extends me{async getResponse(e){if(Array.isArray(e)&&e.every(n=>typeof n?.summary_text=="string"))return e?.[0];throw new D("Received malformed response from HF-Inference summarization API: expected Array<{summary_text: string}>")}}class g_ extends me{async getResponse(e){return e}}class b_ extends me{async getResponse(e){if(Array.isArray(e)&&e.every(n=>typeof n=="number"))return e;throw new D("Received malformed response from HF-Inference tabular-classification API: expected Array<number>")}}class __ extends me{async getResponse(e){if(Array.isArray(e)&&e.every(n=>typeof n=="object"&&!!n&&typeof n?.answer=="string"&&typeof n.score=="number"))return e[0];throw new D("Received malformed response from HF-Inference visual-question-answering API: expected Array<{answer: string, score: number}>")}}class y_ extends me{async getResponse(e){if(Array.isArray(e)&&e.every(n=>typeof n=="number"))return e;throw new D("Received malformed response from HF-Inference tabular-regression API: expected Array<number>")}}class v_ extends me{async getResponse(e){return e}}let w_=console;function Vi(){return w_}const Ys=new Map;function x_(t,e){return e?Array.isArray(e)?e:Object.entries(e).map(([n,i])=>({provider:n,hfModelId:t,providerId:i.providerId,status:i.status,task:i.task,adapter:i.adapter,adapterWeightsPath:i.adapterWeightsPath})):[]}async function vd(t,e,n){let i;if(Ys.has(t))i=Ys.get(t);else{const s=`${Sa}/api/models/${t}?expand[]=inferenceProviderMapping`,r=await(n?.fetch??fetch)(s,{headers:e?.startsWith("hf_")?{Authorization:`Bearer ${e}`}:{}});if(!r.ok)if(r.headers.get("Content-Type")?.startsWith("application/json")){const p=await r.json();if("error"in p&&typeof p.error=="string")throw new Oi(`Failed to fetch inference provider mapping for model ${t}: ${p.error}`,{url:s,method:"GET"},{requestId:r.headers.get("x-request-id")??"",status:r.status,body:p})}else throw new Oi(`Failed to fetch inference provider mapping for model ${t}`,{url:s,method:"GET"},{requestId:r.headers.get("x-request-id")??"",status:r.status,body:await r.text()});let c=null;try{c=await r.json()}catch{throw new Oi(`Failed to fetch inference provider mapping for model ${t}: malformed API response, invalid JSON`,{url:s,method:"GET"},{requestId:r.headers.get("x-request-id")??"",status:r.status,body:await r.text()})}if(!c?.inferenceProviderMapping)throw new Oi(`We have not been able to find inference provider information for model ${t}.`,{url:s,method:"GET"},{requestId:r.headers.get("x-request-id")??"",status:r.status,body:await r.text()});i=x_(t,c.inferenceProviderMapping),Ys.set(t,i)}return i}async function A_(t,e){const n=Vi();if(Zl[t.provider][t.modelId])return Zl[t.provider][t.modelId];const s=(await vd(t.modelId,t.accessToken,e)).find(r=>r.provider===t.provider);if(s){const r=t.provider==="hf-inference"&&aa(Gl,t.task)?Gl:[t.task];if(!aa(r,s.task))throw new Ce(`Model ${t.modelId} is not supported for task ${t.task} and provider ${t.provider}. Supported task: ${s.task}.`);return s.status==="staging"&&n.warn(`Model ${t.modelId} is in staging mode for provider ${t.provider}. Meant for test purposes only.`),s}return null}async function se(t,e,n){const i=Vi();if(n){if(t)throw new Ce("Specifying both endpointUrl and provider is not supported.");return"hf-inference"}if(t||(i.log("Defaulting to 'auto' which will select the first provider available for the model, sorted by the user's order in https://hf.co/settings/inference-providers."),t="auto"),t==="auto"){if(!e)throw new Ce("Specifying a model is required when provider is 'auto'");t=(await vd(e))[0]?.provider,i.log("Auto selected provider:",t)}if(!t)throw new Ce(`No Inference Provider available for model ${e}.`);return t}const E_="https://inference.baseten.co";class k_ extends Re{constructor(){super("baseten",E_)}}const T_="https://api.clarifai.com";class I_ extends Re{constructor(){super("clarifai",T_)}makeRoute(){return"/v2/ext/openai/v1/chat/completions"}prepareHeaders(e,n){const i={Authorization:e.authMethod!=="provider-key"?`Bearer ${e.accessToken}`:`Key ${e.accessToken}`};return n||(i["Content-Type"]="application/json"),i}}function Ho(t){return new Promise(e=>{setTimeout(()=>e(),t)})}const S_="https://api.us1.bfl.ai";class C_ extends Ye{constructor(){super("black-forest-labs",S_)}preparePayload(e){return{...oe(e.args,["inputs","parameters"]),...e.args.parameters,prompt:e.args.inputs}}prepareHeaders(e,n){const i={Authorization:e.authMethod!=="provider-key"?`Bearer ${e.accessToken}`:`X-Key ${e.accessToken}`};return n||(i["Content-Type"]="application/json"),i}makeRoute(e){if(!e)throw new Ce("Params are required");return`/v1/${e.model}`}async getResponse(e,n,i,s){const r=Vi(),c=new URL(e.polling_url);for(let p=0;p<5;p++){await Ho(1e3),r.debug(`Polling Black Forest Labs API for the result... ${p+1}/5`),c.searchParams.set("attempt",p.toString(10));const u=await fetch(c,{headers:{"Content-Type":"application/json"}});if(!u.ok)throw new Oe("Failed to fetch result from black forest labs API",{url:c.toString(),method:"GET",headers:{"Content-Type":"application/json"}},{requestId:u.headers.get("x-request-id")??"",status:u.status,body:await u.text()});const m=await u.json();if(typeof m=="object"&&m&&"status"in m&&typeof m.status=="string"&&m.status==="Ready"&&"result"in m&&typeof m.result=="object"&&m.result&&"sample"in m.result&&typeof m.result.sample=="string")return s==="json"?m.result:s==="url"?m.result.sample:await(await fetch(m.result.sample)).blob()}throw new D("Timed out while waiting for the result from black forest labs API - aborting after 5 attempts")}}class P_ extends Re{constructor(){super("cerebras","https://api.cerebras.ai")}}class O_ extends Re{constructor(){super("cohere","https://api.cohere.com")}makeRoute(){return"/compatibility/v1/chat/completions"}}function On(t){return/^http(s?):/.test(t)||t.startsWith("/")}const ec=["audio/mpeg","audio/mp4","audio/wav","audio/x-wav"];class Wo extends Ye{constructor(e){super("fal-ai",e||"https://fal.run")}preparePayload(e){return e.args}makeRoute(e){return`/${e.model}`}prepareHeaders(e,n){const i={Authorization:e.authMethod!=="provider-key"?`Bearer ${e.accessToken}`:`Key ${e.accessToken}`};return n||(i["Content-Type"]="application/json"),i}}class Ko extends Wo{async getResponseFromQueueApi(e,n,i){if(!n||!i)throw new Ce(`URL and headers are required for ${this.task} task`);if(!e.request_id)throw new D(`Received malformed response from Fal.ai ${this.task} API: no request ID found in the response`);let r=e.status;const c=new URL(n),p=`${c.protocol}//${c.host}${c.host==="router.huggingface.co"?"/fal-ai":""}`,u=new URL(e.response_url).pathname,m=c.search,h=`${p}${u}/status${m}`,E=`${p}${u}${m}`;for(;r!=="COMPLETED";){await Ho(500);const R=await fetch(h,{headers:i});if(!R.ok)throw new Oe("Failed to fetch response status from fal-ai API",{url:h,method:"GET"},{requestId:R.headers.get("x-request-id")??"",status:R.status,body:await R.text()});try{r=(await R.json()).status}catch{throw new D("Failed to parse status response from fal-ai API: received malformed response")}}const O=await fetch(E,{headers:i});let k;try{k=await O.json()}catch{throw new D("Failed to parse result response from fal-ai API: received malformed response")}return k}}function wd(t,e){return`${Sa}/${t}/resolve/main/${e}`}class D_ extends Wo{preparePayload(e){const n={...oe(e.args,["inputs","parameters"]),...e.args.parameters,sync_mode:!0,prompt:e.args.inputs};return e.mapping?.adapter==="lora"&&e.mapping.adapterWeightsPath&&(n.loras=[{path:wd(e.mapping.hfModelId,e.mapping.adapterWeightsPath),scale:1}],e.mapping.providerId==="fal-ai/lora"&&(n.model_name="stabilityai/stable-diffusion-xl-base-1.0")),n}async getResponse(e,n,i,s){if(typeof e=="object"&&"images"in e&&Array.isArray(e.images)&&e.images.length>0&&"url"in e.images[0]&&typeof e.images[0].url=="string")return s==="json"?{...e}:s==="url"?e.images[0].url:await(await fetch(e.images[0].url)).blob();throw new D("Received malformed response from Fal.ai text-to-image API")}}class L_ extends Ko{task;constructor(){super("https://queue.fal.run"),this.task="image-to-image"}makeRoute(e){return e.authMethod!=="provider-key"?`/${e.model}?_subdomain=queue`:`/${e.model}`}preparePayload(e){const n=e.args;return e.mapping?.adapter==="lora"&&e.mapping.adapterWeightsPath&&(n.loras=[{path:wd(e.mapping.hfModelId,e.mapping.adapterWeightsPath),scale:1}]),n}async preparePayloadAsync(e){const n=e.inputs instanceof Blob?e.inputs.type:"image/png";return{...oe(e,["inputs","parameters"]),image_url:`data:${n};base64,${Ze(new Uint8Array(e.inputs instanceof ArrayBuffer?e.inputs:await e.inputs.arrayBuffer()))}`,...e.parameters,...e}}async getResponse(e,n,i){const s=await this.getResponseFromQueueApi(e,n,i);if(typeof s=="object"&&s&&"images"in s&&Array.isArray(s.images)&&s.images.length>0&&typeof s.images[0]=="object"&&s.images[0]&&"url"in s.images[0]&&typeof s.images[0].url=="string"&&On(s.images[0].url))return await(await fetch(s.images[0].url)).blob();throw new D(`Received malformed response from Fal.ai image-to-image API: expected { images: Array<{ url: string }> } result format, got instead: ${JSON.stringify(s)}`)}}class $_ extends Ko{task;constructor(){super("https://queue.fal.run"),this.task="text-to-video"}makeRoute(e){return e.authMethod!=="provider-key"?`/${e.model}?_subdomain=queue`:`/${e.model}`}preparePayload(e){return{...oe(e.args,["inputs","parameters"]),...e.args.parameters,prompt:e.args.inputs}}async getResponse(e,n,i){const s=await this.getResponseFromQueueApi(e,n,i);if(typeof s=="object"&&s&&"video"in s&&typeof s.video=="object"&&s.video&&"url"in s.video&&typeof s.video.url=="string"&&On(s.video.url))return await(await fetch(s.video.url)).blob();throw new D(`Received malformed response from Fal.ai text-to-video API: expected { video: { url: string } } result format, got instead: ${JSON.stringify(s)}`)}}class N_ extends Ko{task;constructor(){super("https://queue.fal.run"),this.task="image-to-video"}makeRoute(e){return e.authMethod!=="provider-key"?`/${e.model}?_subdomain=queue`:`/${e.model}`}preparePayload(e){return{...oe(e.args,["inputs","parameters"]),...e.args.parameters,image_url:e.args.image_url}}async preparePayloadAsync(e){const n=e.inputs instanceof Blob?e.inputs.type:"image/png";return{...oe(e,["inputs","parameters"]),image_url:`data:${n};base64,${Ze(new Uint8Array(e.inputs instanceof ArrayBuffer?e.inputs:await e.inputs.arrayBuffer()))}`,...e.parameters,...e}}async getResponse(e,n,i){const s=await this.getResponseFromQueueApi(e,n,i);if(typeof s=="object"&&s!==null&&"video"in s&&typeof s.video=="object"&&s.video!==null&&"url"in s.video&&typeof s.video.url=="string"&&"url"in s.video&&On(s.video.url))return await(await fetch(s.video.url)).blob();throw new D(`Received malformed response from Fal.ai image‑to‑video API: expected { video: { url: string } }, got: ${JSON.stringify(s)}`)}}class R_ extends Wo{prepareHeaders(e,n){const i=super.prepareHeaders(e,n);return i["Content-Type"]="application/json",i}async getResponse(e){const n=e;if(typeof n?.text!="string")throw new D(`Received malformed response from Fal.ai Automatic Speech Recognition API: expected { text: string } format, got instead: ${JSON.stringify(e)}`);return{text:n.text}}async preparePayloadAsync(e){const n="data"in e&&e.data instanceof Blob?e.data:"inputs"in e?e.inputs:void 0,i=n?.type;if(!i)throw new Ce("Unable to determine the input's content-type. Make sure your are passing a Blob when using provider fal-ai.");if(!ec.includes(i))throw new Ce(`Provider fal-ai does not support blob type ${i} - supported content types are: ${ec.join(", ")}`);const s=Ze(new Uint8Array(await n.arrayBuffer()));return{..."data"in e?oe(e,"data"):oe(e,"inputs"),audio_url:`data:${i};base64,${s}`}}}class M_ extends Wo{preparePayload(e){return{...oe(e.args,["inputs","parameters"]),...e.args.parameters,text:e.args.inputs}}async getResponse(e){const n=e;if(typeof n?.audio?.url!="string")throw new D(`Received malformed response from Fal.ai Text-to-Speech API: expected { audio: { url: string } } format, got instead: ${JSON.stringify(e)}`);const i=await fetch(n.audio.url);if(!i.ok)throw new Oe(`Failed to fetch audio from ${n.audio.url}: ${i.statusText}`,{url:n.audio.url,method:"GET",headers:{"Content-Type":"application/json"}},{requestId:i.headers.get("x-request-id")??"",status:i.status,body:await i.text()});try{return await i.blob()}catch(s){throw new Oe(`Failed to fetch audio from ${n.audio.url}: ${s instanceof Error?s.message:String(s)}`,{url:n.audio.url,method:"GET",headers:{"Content-Type":"application/json"}},{requestId:i.headers.get("x-request-id")??"",status:i.status,body:await i.text()})}}}class j_ extends Ko{task;constructor(){super("https://queue.fal.run"),this.task="image-segmentation"}makeRoute(e){return e.authMethod!=="provider-key"?`/${e.model}?_subdomain=queue`:`/${e.model}`}preparePayload(e){return{...oe(e.args,["inputs","parameters"]),...e.args.parameters,sync_mode:!0}}async preparePayloadAsync(e){const n="data"in e&&e.data instanceof Blob?e.data:"inputs"in e?e.inputs:void 0,i=n instanceof Blob?n.type:"image/png",s=Ze(new Uint8Array(n instanceof ArrayBuffer?n:await n.arrayBuffer()));return{...oe(e,["inputs","parameters","data"]),...e.parameters,...e,image_url:`data:${i};base64,${s}`,sync_mode:!0}}async getResponse(e,n,i){const s=await this.getResponseFromQueueApi(e,n,i);if(typeof s=="object"&&s!==null&&"image"in s&&typeof s.image=="object"&&s.image!==null&&"url"in s.image&&typeof s.image.url=="string"){const r=await fetch(s.image.url);if(!r.ok)throw new Oe(`Failed to fetch segmentation mask from ${s.image.url}`,{url:s.image.url,method:"GET"},{requestId:r.headers.get("x-request-id")??"",status:r.status,body:await r.text()});const p=await(await r.blob()).arrayBuffer();return[{label:"mask",score:1,mask:Ze(new Uint8Array(p))}]}throw new D(`Received malformed response from Fal.ai image-segmentation API: expected { image: { url: string } } format, got instead: ${JSON.stringify(e)}`)}}const xd="https://api.featherless.ai";class U_ extends Re{constructor(){super("featherless-ai",xd)}}class B_ extends cn{constructor(){super("featherless-ai",xd)}preparePayload(e){return{model:e.model,...oe(e.args,["inputs","parameters"]),...e.args.parameters?{max_tokens:e.args.parameters.max_new_tokens,...oe(e.args.parameters,"max_new_tokens")}:void 0,prompt:e.args.inputs}}async getResponse(e){if(typeof e=="object"&&"choices"in e&&Array.isArray(e?.choices)&&typeof e?.model=="string")return{generated_text:e.choices[0].text};throw new D("Received malformed response from Featherless AI text generation API")}}class q_ extends Re{constructor(){super("fireworks-ai","https://api.fireworks.ai")}makeRoute(){return"/inference/v1/chat/completions"}}const Ad="https://api.groq.com";class F_ extends cn{constructor(){super("groq",Ad)}makeRoute(){return"/openai/v1/chat/completions"}}class V_ extends Re{constructor(){super("groq",Ad)}makeRoute(){return"/openai/v1/chat/completions"}}const Oa="https://api.hyperbolic.xyz";class H_ extends Re{constructor(){super("hyperbolic",Oa)}}class W_ extends cn{constructor(){super("hyperbolic",Oa)}makeRoute(){return"v1/chat/completions"}preparePayload(e){return{messages:[{content:e.args.inputs,role:"user"}],...e.args.parameters?{max_tokens:e.args.parameters.max_new_tokens,...oe(e.args.parameters,"max_new_tokens")}:void 0,...oe(e.args,["inputs","parameters"]),model:e.model}}async getResponse(e){if(typeof e=="object"&&"choices"in e&&Array.isArray(e?.choices)&&typeof e?.model=="string")return{generated_text:e.choices[0].message.content};throw new D("Received malformed response from Hyperbolic text generation API")}}class K_ extends Ye{constructor(){super("hyperbolic",Oa)}makeRoute(e){return"/v1/images/generations"}preparePayload(e){return{...oe(e.args,["inputs","parameters"]),...e.args.parameters,prompt:e.args.inputs,model_name:e.model}}async getResponse(e,n,i,s){if(typeof e=="object"&&"images"in e&&Array.isArray(e.images)&&e.images[0]&&typeof e.images[0].image=="string")return s==="json"?{...e}:s==="url"?`data:image/jpeg;base64,${e.images[0].image}`:fetch(`data:image/jpeg;base64,${e.images[0].image}`).then(r=>r.blob());throw new D("Received malformed response from Hyperbolic text-to-image API")}}const zo="https://api.studio.nebius.ai";class z_ extends Re{constructor(){super("nebius",zo)}preparePayload(e){const n=super.preparePayload(e),i=e.args.response_format;return i?.type==="json_schema"&&i.json_schema?.schema&&(n.guided_json=i.json_schema.schema),n}}class X_ extends cn{constructor(){super("nebius",zo)}preparePayload(e){return{...e.args,model:e.model,prompt:e.args.inputs}}async getResponse(e){if(typeof e=="object"&&"choices"in e&&Array.isArray(e?.choices)&&e.choices.length>0&&typeof e.choices[0]?.text=="string")return{generated_text:e.choices[0].text};throw new D("Received malformed response from Nebius text generation API")}}class Y_ extends Ye{constructor(){super("nebius",zo)}preparePayload(e){return{...oe(e.args,["inputs","parameters"]),...e.args.parameters,response_format:"b64_json",prompt:e.args.inputs,model:e.model}}makeRoute(){return"v1/images/generations"}async getResponse(e,n,i,s){if(typeof e=="object"&&"data"in e&&Array.isArray(e.data)&&e.data.length>0&&"b64_json"in e.data[0]&&typeof e.data[0].b64_json=="string"){if(s==="json")return{...e};const r=e.data[0].b64_json;return s==="url"?`data:image/jpeg;base64,${r}`:fetch(`data:image/jpeg;base64,${r}`).then(c=>c.blob())}throw new D("Received malformed response from Nebius text-to-image API")}}class Q_ extends Ye{constructor(){super("nebius",zo)}preparePayload(e){return{input:e.args.inputs,model:e.model}}makeRoute(){return"v1/embeddings"}async getResponse(e){return e.data.map(n=>n.embedding)}}const Da="https://api.novita.ai";class J_ extends cn{constructor(){super("novita",Da)}makeRoute(){return"/v3/openai/chat/completions"}}class Z_ extends Re{constructor(){super("novita",Da)}makeRoute(){return"/v3/openai/chat/completions"}}class G_ extends Ye{constructor(){super("novita",Da)}makeRoute(e){return`/v3/async/${e.model}`}preparePayload(e){const{num_inference_steps:n,...i}=e.args.parameters??{};return{...oe(e.args,["inputs","parameters"]),...i,steps:n,prompt:e.args.inputs}}async getResponse(e,n,i){if(!n||!i)throw new Ce("URL and headers are required for text-to-video task");const s=e.task_id;if(!s)throw new D("Received malformed response from Novita text-to-video API: no task ID found in the response");const r=new URL(n),p=`${`${r.protocol}//${r.host}${r.host==="router.huggingface.co"?"/novita":""}`}/v3/async/task-result?task_id=${s}`;let u="",m;for(;u!=="TASK_STATUS_SUCCEED"&&u!=="TASK_STATUS_FAILED";){await Ho(500);const h=await fetch(p,{headers:i});if(!h.ok)throw new Oe("Failed to fetch task result",{url:p,method:"GET",headers:i},{requestId:h.headers.get("x-request-id")??"",status:h.status,body:await h.text()});try{if(m=await h.json(),m&&typeof m=="object"&&"task"in m&&m.task&&typeof m.task=="object"&&"status"in m.task&&typeof m.task.status=="string")u=m.task.status;else throw new D("Received malformed response from Novita text-to-video API: failed to get task status")}catch{throw new D("Received malformed response from Novita text-to-video API: failed to parse task result")}}if(u==="TASK_STATUS_FAILED")throw new D("Novita text-to-video task failed");if(typeof m=="object"&&m&&"videos"in m&&typeof m.videos=="object"&&m.videos&&Array.isArray(m.videos)&&m.videos.length>0&&"video_url"in m.videos[0]&&typeof m.videos[0].video_url=="string"&&On(m.videos[0].video_url))return await(await fetch(m.videos[0].video_url)).blob();throw new D(`Received malformed response from Novita text-to-video API: expected { videos: [{ video_url: string }] } format, got instead: ${JSON.stringify(m)}`)}}const Ed="https://inference.api.nscale.com";class ey extends Re{constructor(){super("nscale",Ed)}}class ty extends Ye{constructor(){super("nscale",Ed)}preparePayload(e){return{...oe(e.args,["inputs","parameters"]),...e.args.parameters,response_format:"b64_json",prompt:e.args.inputs,model:e.model}}makeRoute(){return"v1/images/generations"}async getResponse(e,n,i,s){if(typeof e=="object"&&"data"in e&&Array.isArray(e.data)&&e.data.length>0&&"b64_json"in e.data[0]&&typeof e.data[0].b64_json=="string"){if(s==="json")return{...e};const r=e.data[0].b64_json;return s==="url"?`data:image/jpeg;base64,${r}`:fetch(`data:image/jpeg;base64,${r}`).then(c=>c.blob())}throw new D("Received malformed response from Nscale text-to-image API")}}const ny="https://api.openai.com";class iy extends Re{constructor(){super("openai",ny,!0)}}const kd="https://oai.endpoints.kepler.ai.cloud.ovh.net";class oy extends Re{constructor(){super("ovhcloud",kd)}}class sy extends cn{constructor(){super("ovhcloud",kd)}preparePayload(e){return{model:e.model,...oe(e.args,["inputs","parameters"]),...e.args.parameters?{max_tokens:e.args.parameters.max_new_tokens,...oe(e.args.parameters,"max_new_tokens")}:void 0,prompt:e.args.inputs}}async getResponse(e){if(typeof e=="object"&&"choices"in e&&Array.isArray(e?.choices)&&typeof e?.model=="string")return{generated_text:e.choices[0].text};throw new D("Received malformed response from OVHcloud text generation API")}}class ay extends Re{constructor(){super("publicai","https://api.publicai.co")}}class Hi extends Ye{constructor(e){super("replicate",e||"https://api.replicate.com")}makeRoute(e){return e.model.includes(":")?"v1/predictions":`v1/models/${e.model}/predictions`}preparePayload(e){return{input:{...oe(e.args,["inputs","parameters"]),...e.args.parameters,prompt:e.args.inputs},version:e.model.includes(":")?e.model.split(":")[1]:void 0}}prepareHeaders(e,n){const i={Authorization:`Bearer ${e.accessToken}`,Prefer:"wait"};return n||(i["Content-Type"]="application/json"),i}makeUrl(e){const n=this.makeBaseUrl(e);return e.model.includes(":")?`${n}/v1/predictions`:`${n}/v1/models/${e.model}/predictions`}}class ry extends Hi{preparePayload(e){return{input:{...oe(e.args,["inputs","parameters"]),...e.args.parameters,prompt:e.args.inputs,lora_weights:e.mapping?.adapter==="lora"&&e.mapping.adapterWeightsPath?`https://huggingface.co/${e.mapping.hfModelId}`:void 0},version:e.model.includes(":")?e.model.split(":")[1]:void 0}}async getResponse(e,n,i,s){if(typeof e=="object"&&"output"in e&&Array.isArray(e.output)&&e.output.length>0&&typeof e.output[0]=="string")return s==="json"?{...e}:s==="url"?e.output[0]:await(await fetch(e.output[0])).blob();throw new D("Received malformed response from Replicate text-to-image API")}}class ly extends Hi{preparePayload(e){const n=super.preparePayload(e),i=n.input;if(typeof i=="object"&&i!==null&&"prompt"in i){const s=i;s.text=s.prompt,delete s.prompt}return n}async getResponse(e){if(e instanceof Blob)return e;if(e&&typeof e=="object"&&"output"in e){if(typeof e.output=="string")return await(await fetch(e.output)).blob();if(Array.isArray(e.output))return await(await fetch(e.output[0])).blob()}throw new D("Received malformed response from Replicate text-to-speech API")}}class cy extends Hi{async getResponse(e){if(typeof e=="object"&&e&&"output"in e&&typeof e.output=="string"&&On(e.output))return await(await fetch(e.output)).blob();throw new D("Received malformed response from Replicate text-to-video API")}}class dy extends Hi{preparePayload(e){return{input:{...oe(e.args,["inputs","parameters"]),...e.args.parameters,audio:e.args.inputs},version:e.model.includes(":")?e.model.split(":")[1]:void 0}}async preparePayloadAsync(e){const n="data"in e&&e.data instanceof Blob?e.data:"inputs"in e?e.inputs:void 0;if(!n||!(n instanceof Blob))throw new Error("Audio input must be a Blob");const i=new Uint8Array(await n.arrayBuffer()),s=Ze(i),r=`data:${n.type||"audio/wav"};base64,${s}`;return{..."data"in e?oe(e,"data"):oe(e,"inputs"),inputs:r}}async getResponse(e){if(typeof e?.output=="string")return{text:e.output};if(Array.isArray(e?.output)&&typeof e.output[0]=="string")return{text:e.output[0]};const n=e?.output;if(n&&typeof n=="object"){if(typeof n.transcription=="string")return{text:n.transcription};if(typeof n.translation=="string")return{text:n.translation};if(typeof n.txt_file=="string")return{text:await(await fetch(n.txt_file)).text()}}throw new D("Received malformed response from Replicate automatic-speech-recognition API")}}class py extends Hi{preparePayload(e){return{input:{...oe(e.args,["inputs","parameters"]),...e.args.parameters,input_image:e.args.inputs,lora_weights:e.mapping?.adapter==="lora"&&e.mapping.adapterWeightsPath?`https://huggingface.co/${e.mapping.hfModelId}`:void 0},version:e.model.includes(":")?e.model.split(":")[1]:void 0}}async preparePayloadAsync(e){const{inputs:n,...i}=e,s=new Uint8Array(await n.arrayBuffer()),r=Ze(s),c=`data:${n.type||"image/jpeg"};base64,${r}`;return{...i,inputs:c}}async getResponse(e){if(typeof e=="object"&&e&&"output"in e&&Array.isArray(e.output)&&e.output.length>0&&typeof e.output[0]=="string")return await(await fetch(e.output[0])).blob();if(typeof e=="object"&&e&&"output"in e&&typeof e.output=="string"&&On(e.output))return await(await fetch(e.output)).blob();throw new D("Received malformed response from Replicate image-to-image API")}}class uy extends Re{constructor(){super("sambanova","https://api.sambanova.ai")}preparePayload(e){const n=e.args.response_format;return n?.type==="json_schema"&&n.json_schema&&(n.json_schema.strict??!0)&&(n.json_schema.strict=!1),super.preparePayload(e)}}class my extends Ye{constructor(){super("sambanova","https://api.sambanova.ai")}makeRoute(){return"/v1/embeddings"}async getResponse(e){if(typeof e=="object"&&"data"in e&&Array.isArray(e.data))return e.data.map(n=>n.embedding);throw new D("Received malformed response from Sambanova feature-extraction (embeddings) API")}preparePayload(e){return{model:e.model,input:e.args.inputs,...e.args}}}const La="https://api.scaleway.ai";class fy extends Re{constructor(){super("scaleway",La)}}class hy extends cn{constructor(){super("scaleway",La)}preparePayload(e){return{model:e.model,...e.args,prompt:e.args.inputs}}async getResponse(e){if(typeof e=="object"&&e!==null&&"choices"in e&&Array.isArray(e.choices)&&e.choices.length>0){const n=e.choices[0];if(typeof n=="object"&&n&&"text"in n&&n.text&&typeof n.text=="string")return{generated_text:n.text}}throw new D("Received malformed response from Scaleway text generation API")}}class gy extends Ye{constructor(){super("scaleway",La)}preparePayload(e){return{input:e.args.inputs,model:e.model}}makeRoute(){return"v1/embeddings"}async getResponse(e){return e.data.map(n=>n.embedding)}}const $a="https://api.together.xyz";class by extends Re{constructor(){super("together",$a)}preparePayload(e){const n=super.preparePayload(e),i=n.response_format;return i?.type==="json_schema"&&i?.json_schema?.schema&&(n.response_format={type:"json_schema",schema:i.json_schema.schema}),n}}class _y extends cn{constructor(){super("together",$a)}preparePayload(e){return{model:e.model,...e.args,prompt:e.args.inputs}}async getResponse(e){if(typeof e=="object"&&"choices"in e&&Array.isArray(e?.choices)&&typeof e?.model=="string")return{generated_text:e.choices[0].text};throw new D("Received malformed response from Together text generation API")}}class yy extends Ye{constructor(){super("together",$a)}makeRoute(){return"v1/images/generations"}preparePayload(e){return{...oe(e.args,["inputs","parameters"]),...e.args.parameters,prompt:e.args.inputs,response_format:"base64",model:e.model}}async getResponse(e,n,i,s){if(typeof e=="object"&&"data"in e&&Array.isArray(e.data)&&e.data.length>0&&"b64_json"in e.data[0]&&typeof e.data[0].b64_json=="string"){if(s==="json")return{...e};const r=e.data[0].b64_json;return s==="url"?`data:image/jpeg;base64,${r}`:fetch(`data:image/jpeg;base64,${r}`).then(c=>c.blob())}throw new D("Received malformed response from Together text-to-image API")}}const Xo="https://api.wavespeed.ai";class Na extends Ye{constructor(e){super("wavespeed",e||Xo)}makeRoute(e){return`/api/v3/${e.model}`}preparePayload(e){const n={...oe(e.args,["inputs","parameters"]),...e.args.parameters,prompt:e.args.inputs};return e.mapping?.adapter==="lora"&&(n.loras=[{path:e.mapping.hfModelId,scale:1}]),n}async getResponse(e,n,i){if(!i)throw new Ce("Headers are required for WaveSpeed AI API calls");const s=e.data.urls.get;for(;;){const r=await fetch(s,{headers:i});if(!r.ok)throw new Oe("Failed to fetch response status from WaveSpeed AI API",{url:s,method:"GET"},{requestId:r.headers.get("x-request-id")??"",status:r.status,body:await r.text()});const p=(await r.json()).data;switch(p.status){case"completed":{if(!p.outputs?.[0])throw new D("Received malformed response from WaveSpeed AI API: No output URL in completed response");const u=await fetch(p.outputs[0]);if(!u.ok)throw new Oe("Failed to fetch generation output from WaveSpeed AI API",{url:p.outputs[0],method:"GET"},{requestId:u.headers.get("x-request-id")??"",status:u.status,body:await u.text()});return await u.blob()}case"failed":throw new D(p.error||"Task failed");default:{await Ho(500);continue}}}}}class vy extends Na{constructor(){super(Xo)}}class wy extends Na{constructor(){super(Xo)}}class xy extends Na{constructor(){super(Xo)}async preparePayloadAsync(e){return{...e,inputs:e.parameters?.prompt,image:Ze(new Uint8Array(e.inputs instanceof ArrayBuffer?e.inputs:await e.inputs.arrayBuffer()))}}}const Ay="https://api.z.ai";class Ey extends Re{constructor(){super("zai-org",Ay)}prepareHeaders(e,n){const i=super.prepareHeaders(e,n);return i["x-source-channel"]="hugging_face",i["accept-language"]="en-US,en",i}makeRoute(){return"/api/paas/v4/chat/completions"}}const Qs={baseten:{conversational:new k_},"black-forest-labs":{"text-to-image":new C_},cerebras:{conversational:new P_},clarifai:{conversational:new I_},cohere:{conversational:new O_},"fal-ai":{"text-to-image":new D_,"text-to-speech":new M_,"text-to-video":new $_,"image-to-image":new L_,"automatic-speech-recognition":new R_,"image-segmentation":new j_,"image-to-video":new N_},"featherless-ai":{conversational:new U_,"text-generation":new B_},"hf-inference":{"text-to-image":new Yb,conversational:new Qb,"text-generation":new Jb,"text-classification":new c_,"question-answering":new d_,"audio-classification":new Zb,"automatic-speech-recognition":new Gb,"fill-mask":new p_,"feature-extraction":new n_,"image-classification":new i_,"image-segmentation":new o_,"document-question-answering":new t_,"image-to-text":new s_,"object-detection":new r_,"audio-to-audio":new e_,"zero-shot-image-classification":new l_,"zero-shot-classification":new Pa,"image-to-image":new a_,"sentence-similarity":new u_,"table-question-answering":new $o,"tabular-classification":new b_,"text-to-speech":new g_,"token-classification":new m_,translation:new f_,summarization:new h_,"visual-question-answering":new __,"tabular-regression":new y_,"text-to-audio":new v_},"fireworks-ai":{conversational:new q_},groq:{conversational:new V_,"text-generation":new F_},hyperbolic:{"text-to-image":new K_,conversational:new H_,"text-generation":new W_},nebius:{"text-to-image":new Y_,conversational:new z_,"text-generation":new X_,"feature-extraction":new Q_},novita:{conversational:new Z_,"text-generation":new J_,"text-to-video":new G_},nscale:{"text-to-image":new ty,conversational:new ey},openai:{conversational:new iy},ovhcloud:{conversational:new oy,"text-generation":new sy},publicai:{conversational:new ay},replicate:{"text-to-image":new ry,"text-to-speech":new ly,"text-to-video":new cy,"image-to-image":new py,"automatic-speech-recognition":new dy},sambanova:{conversational:new uy,"feature-extraction":new my},scaleway:{conversational:new fy,"text-generation":new hy,"feature-extraction":new gy},together:{"text-to-image":new yy,conversational:new by,"text-generation":new _y},wavespeed:{"text-to-image":new vy,"text-to-video":new wy,"image-to-image":new xy},"zai-org":{conversational:new Ey}};function ae(t,e){if(t==="hf-inference"&&!e||t==="auto")return new me;if(!e)throw new Ce("you need to provide a task name when using an external provider, e.g. 'text-to-image'");if(!(t in Qs))throw new Ce(`Provider '${t}' not supported. Available providers: ${Object.keys(Qs)}`);const n=Qs[t];if(!n||!(e in n))throw new Ce(`Task '${e}' not supported for provider '${t}'. Available tasks: ${Object.keys(n??{})}`);return n[e]}const ky="4.11.3",Ty="@huggingface/inference";let Js=null;async function Dn(t,e,n){const{model:i}=t,s=e.provider,{task:r}=n??{};if(t.endpointUrl&&s!=="hf-inference")throw new Ce("Cannot use endpointUrl with a third-party provider.");if(i&&On(i))throw new Ce("Model URLs are no longer supported. Use endpointUrl instead.");if(t.endpointUrl)return tc(i??t.endpointUrl,e,t,void 0,n);if(!i&&!r)throw new Ce("No model provided, and no task has been specified.");const c=i??await Iy(r);if(e.clientSideRoutingOnly&&!i)throw new Ce(`Provider ${s} requires a model ID to be passed directly.`);const p=e.clientSideRoutingOnly?{provider:s,providerId:Cy(i,s),hfModelId:i,status:"live",task:r}:await A_({modelId:c,task:r,provider:s,accessToken:t.accessToken},{fetch:n?.fetch});if(!p)throw new Ce(`We have not been able to find inference provider information for model ${c}.`);return tc(p.providerId,e,t,p,n)}function tc(t,e,n,i,s){const{accessToken:r,endpointUrl:c,provider:p,model:u,...m}=n,h=e.provider,{includeCredentials:E,task:O,signal:k,billTo:R}=s??{},M=(()=>{if(e.clientSideRoutingOnly&&r&&r.startsWith("hf_"))throw new Ce(`Provider ${h} is closed-source and does not support HF tokens.`);return r?r.startsWith("hf_")?"hf-token":"provider-key":E==="include"?"credentials-include":"none"})(),q=c??t,j=e.makeUrl({authMethod:M,model:q,task:O}),z=e.prepareHeaders({accessToken:r,authMethod:M},"data"in n&&!!n.data);R&&(z[zb]=R);const H=[`${Ty}/${ky}`,typeof navigator<"u"?navigator.userAgent:void 0].filter(we=>we!==void 0).join(" ");z["User-Agent"]=H;const Z=e.makeBody({args:m,model:t,task:O,mapping:i});let ee;typeof E=="string"?ee=E:E===!0&&(ee="include");const de={headers:z,method:"POST",body:Z,...ee?{credentials:ee}:void 0,signal:k};return{url:j,info:de}}async function Iy(t){Js||(Js=await Sy());const e=Js[t];if((e?.models.length??0)<=0)throw new Ce(`No default model defined for task ${t}, please define the model explicitly.`);return e.models[0].id}async function Sy(){const t=`${Sa}/api/tasks`,e=await fetch(t);if(!e.ok)throw new Oi("Failed to load tasks definitions from Hugging Face Hub.",{url:t,method:"GET"},{requestId:e.headers.get("x-request-id")??"",status:e.status,body:await e.text()});return await e.json()}function Cy(t,e){if(!t.startsWith(`${e}/`))throw new Ce(`Models from ${e} must be prefixed by "${e}/". Got "${t}".`);return t.slice(e.length+1)}function Py(t){let e,n,i,s=!1;return function(c){e===void 0?(e=c,n=0,i=-1):e=Dy(e,c);const p=e.length;let u=0;for(;n<p;){s&&(e[n]===10&&(u=++n),s=!1);let m=-1;for(;n<p&&m===-1;++n)switch(e[n]){case 58:i===-1&&(i=n-u);break;case 13:s=!0;case 10:m=n;break}if(m===-1)break;t(e.subarray(u,m),i),u=n,i=-1}u===p?e=void 0:u!==0&&(e=e.subarray(u),n-=u)}}function Oy(t,e,n){let i=nc();const s=new TextDecoder;return function(c,p){if(c.length===0)n?.(i),i=nc();else if(p>0){const u=s.decode(c.subarray(0,p)),m=p+(c[p+1]===32?2:1),h=s.decode(c.subarray(m));switch(u){case"data":i.data=i.data?i.data+`
`+h:h;break;case"event":i.event=h;break;case"id":t(i.id=h);break;case"retry":{const E=parseInt(h,10);isNaN(E)||e(i.retry=E);break}}}}}function Dy(t,e){const n=new Uint8Array(t.length+e.length);return n.set(t),n.set(e,t.length),n}function nc(){return{data:"",event:"",id:"",retry:void 0}}function Tt(t){let e=null;if(t instanceof Blob||t instanceof ArrayBuffer)e="[Blob or ArrayBuffer]";else if(typeof t=="string")try{e=JSON.parse(t)}catch{e=t}return e.accessToken&&(e.accessToken="[REDACTED]"),e}async function ce(t,e,n){const{url:i,info:s}=await Dn(t,e,n),r=await(n?.fetch??fetch)(i,s),c={url:i,info:s};if(n?.retry_on_error!==!1&&r.status===503)return ce(t,e,n);if(!r.ok){const u=r.headers.get("Content-Type");if(["application/json","application/problem+json"].some(h=>u?.startsWith(h))){const h=await r.json();throw[400,422,404,500].includes(r.status)&&n?.chatCompletion?new Oe(`Provider ${t.provider} does not seem to support chat completion for model ${t.model} . Error: ${JSON.stringify(h.error)}`,{url:i,method:s.method??"GET",headers:s.headers,body:Tt(s.body)},{requestId:r.headers.get("x-request-id")??"",status:r.status,body:h}):typeof h.error=="string"||typeof h.detail=="string"||typeof h.message=="string"?new Oe(`Failed to perform inference: ${h.error??h.detail??h.message}`,{url:i,method:s.method??"GET",headers:s.headers,body:Tt(s.body)},{requestId:r.headers.get("x-request-id")??"",status:r.status,body:h}):new Oe("Failed to perform inference: an HTTP error occurred when requesting the provider.",{url:i,method:s.method??"GET",headers:s.headers,body:Tt(s.body)},{requestId:r.headers.get("x-request-id")??"",status:r.status,body:h})}const m=u?.startsWith("text/plain;")?await r.text():void 0;throw new Oe(`Failed to perform inference: ${m??"an HTTP error occurred when requesting the provider"}`,{url:i,method:s.method??"GET",headers:s.headers,body:Tt(s.body)},{requestId:r.headers.get("x-request-id")??"",status:r.status,body:m??""})}return r.headers.get("Content-Type")?.startsWith("application/json")?{data:await r.json(),requestContext:c}:{data:await r.blob(),requestContext:c}}async function*Yo(t,e,n){const{url:i,info:s}=await Dn({...t,stream:!0},e,n),r=await(n?.fetch??fetch)(i,s);if(n?.retry_on_error!==!1&&r.status===503)return yield*Yo(t,e,n);if(!r.ok){if(r.headers.get("Content-Type")?.startsWith("application/json")){const h=await r.json();if([400,422,404,500].includes(r.status)&&n?.chatCompletion)throw new Oe(`Provider ${t.provider} does not seem to support chat completion for model ${t.model} . Error: ${JSON.stringify(h.error)}`,{url:i,method:s.method??"GET",headers:s.headers,body:Tt(s.body)},{requestId:r.headers.get("x-request-id")??"",status:r.status,body:h});if(typeof h.error=="string")throw new Oe(`Failed to perform inference: ${h.error}`,{url:i,method:s.method??"GET",headers:s.headers,body:Tt(s.body)},{requestId:r.headers.get("x-request-id")??"",status:r.status,body:h});if(h.error&&"message"in h.error&&typeof h.error.message=="string")throw new Oe(`Failed to perform inference: ${h.error.message}`,{url:i,method:s.method??"GET",headers:s.headers,body:Tt(s.body)},{requestId:r.headers.get("x-request-id")??"",status:r.status,body:h});if(typeof h.message=="string")throw new Oe(`Failed to perform inference: ${h.message}`,{url:i,method:s.method??"GET",headers:s.headers,body:Tt(s.body)},{requestId:r.headers.get("x-request-id")??"",status:r.status,body:h})}throw new Oe("Failed to perform inference: an HTTP error occurred when requesting the provider.",{url:i,method:s.method??"GET",headers:s.headers,body:Tt(s.body)},{requestId:r.headers.get("x-request-id")??"",status:r.status,body:""})}if(!r.headers.get("content-type")?.startsWith("text/event-stream"))throw new Oe("Failed to perform inference: server does not support event stream content type, it returned "+r.headers.get("content-type"),{url:i,method:s.method??"GET",headers:s.headers,body:Tt(s.body)},{requestId:r.headers.get("x-request-id")??"",status:r.status,body:""});if(!r.body)return;const c=r.body.getReader();let p=[];const m=Py(Oy(()=>{},()=>{},h=>{p.push(h)}));try{for(;;){const{done:h,value:E}=await c.read();if(h)return;m(E);for(const O of p)if(O.data.length>0){if(O.data==="[DONE]")return;const k=JSON.parse(O.data);if(typeof k=="object"&&k!==null&&"error"in k){const R=typeof k.error=="string"?k.error:typeof k.error=="object"&&k.error&&"message"in k.error&&typeof k.error.message=="string"?k.error.message:JSON.stringify(k.error);throw new Oe(`Failed to perform inference: an occurred while streaming the response: ${R}`,{url:i,method:s.method??"GET",headers:s.headers,body:Tt(s.body)},{requestId:r.headers.get("x-request-id")??"",status:r.status,body:k})}yield k}p=[]}}finally{c.releaseLock()}}async function Ly(t,e){Vi().warn("The request method is deprecated and will be removed in a future version of huggingface.js. Use specific task functions instead.");const i=await se(t.provider,t.model,t.endpointUrl),s=ae(i,e?.task);return(await ce(t,s,e)).data}async function*$y(t,e){Vi().warn("The streamingRequest method is deprecated and will be removed in a future version of huggingface.js. Use specific task functions instead.");const i=await se(t.provider,t.model,t.endpointUrl),s=ae(i,e?.task);yield*Yo(t,s,e)}function Td(t){return"data"in t?t:{...oe(t,"inputs"),data:t.inputs}}async function Ny(t,e){const n=await se(t.provider,t.model,t.endpointUrl),i=ae(n,"audio-classification"),s=Td(t),{data:r}=await ce(s,i,{...e,task:"audio-classification"});return i.getResponse(r)}async function Ry(t,e){const n="inputs"in t?t.model:void 0,i=await se(t.provider,n),s=ae(i,"audio-to-audio"),r=Td(t),{data:c}=await ce(r,s,{...e,task:"audio-to-audio"});return s.getResponse(c)}async function My(t,e){const n=await se(t.provider,t.model,t.endpointUrl),i=ae(n,"automatic-speech-recognition"),s=await i.preparePayloadAsync(t),{data:r}=await ce(s,i,{...e,task:"automatic-speech-recognition"});return i.getResponse(r)}async function jy(t,e){const n=await se(t.provider,t.model,t.endpointUrl),i=ae(n,"text-to-speech"),{data:s}=await ce(t,i,{...e,task:"text-to-speech"});return i.getResponse(s)}function Ra(t){return"data"in t?t:{...oe(t,"inputs"),data:t.inputs}}async function Uy(t,e){const n=await se(t.provider,t.model,t.endpointUrl),i=ae(n,"image-classification"),s=Ra(t),{data:r}=await ce(s,i,{...e,task:"image-classification"});return i.getResponse(r)}async function By(t,e){const n=await se(t.provider,t.model,t.endpointUrl),i=ae(n,"image-segmentation"),s=await i.preparePayloadAsync(t),{data:r}=await ce(s,i,{...e,task:"image-segmentation"}),{url:c,info:p}=await Dn(t,i,{...e,task:"image-segmentation"});return i.getResponse(r,c,p.headers)}async function qy(t,e){const n=await se(t.provider,t.model,t.endpointUrl),i=ae(n,"image-to-image"),s=await i.preparePayloadAsync(t),{data:r}=await ce(s,i,{...e,task:"image-to-image"}),{url:c,info:p}=await Dn(t,i,{...e,task:"image-to-image"});return i.getResponse(r,c,p.headers)}async function Fy(t,e){const n=await se(t.provider,t.model,t.endpointUrl),i=ae(n,"image-to-text"),s=Ra(t),{data:r}=await ce(s,i,{...e,task:"image-to-text"});return i.getResponse(r[0])}async function Vy(t,e){const n=await se(t.provider,t.model,t.endpointUrl),i=ae(n,"image-to-video"),s=await i.preparePayloadAsync(t),{data:r}=await ce(s,i,{...e,task:"image-to-video"}),{url:c,info:p}=await Dn(t,i,{...e,task:"image-to-video"});return i.getResponse(r,c,p.headers)}async function Hy(t,e){const n=await se(t.provider,t.model,t.endpointUrl),i=ae(n,"object-detection"),s=Ra(t),{data:r}=await ce(s,i,{...e,task:"object-detection"});return i.getResponse(r)}async function Wy(t,e){const n=await se(t.provider,t.model,t.endpointUrl),i=ae(n,"text-to-image"),{data:s}=await ce(t,i,{...e,task:"text-to-image"}),{url:r,info:c}=await Dn(t,i,{...e,task:"text-to-image"});return i.getResponse(s,r,c.headers,e?.outputType)}async function Ky(t,e){const n=await se(t.provider,t.model,t.endpointUrl),i=ae(n,"text-to-video"),{data:s}=await ce(t,i,{...e,task:"text-to-video"}),{url:r,info:c}=await Dn(t,i,{...e,task:"text-to-video"});return i.getResponse(s,r,c.headers)}async function zy(t){return t.inputs instanceof Blob?{...t,inputs:{image:Ze(new Uint8Array(await t.inputs.arrayBuffer()))}}:{...t,inputs:{image:Ze(new Uint8Array(t.inputs.image instanceof ArrayBuffer?t.inputs.image:await t.inputs.image.arrayBuffer()))}}}async function Xy(t,e){const n=await se(t.provider,t.model,t.endpointUrl),i=ae(n,"zero-shot-image-classification"),s=await zy(t),{data:r}=await ce(s,i,{...e,task:"zero-shot-image-classification"});return i.getResponse(r)}async function Yy(t,e){const n=await se(t.provider,t.model,t.endpointUrl),i=ae(n,"conversational"),{data:s}=await ce(t,i,{...e,task:"conversational"});return i.getResponse(s)}async function*Qy(t,e){const n=await se(t.provider,t.model,t.endpointUrl),i=ae(n,"conversational");yield*Yo(t,i,{...e,task:"conversational"})}async function Jy(t,e){const n=await se(t.provider,t.model,t.endpointUrl),i=ae(n,"feature-extraction"),{data:s}=await ce(t,i,{...e,task:"feature-extraction"});return i.getResponse(s)}async function Zy(t,e){const n=await se(t.provider,t.model,t.endpointUrl),i=ae(n,"fill-mask"),{data:s}=await ce(t,i,{...e,task:"fill-mask"});return i.getResponse(s)}async function Gy(t,e){const n=await se(t.provider,t.model,t.endpointUrl),i=ae(n,"question-answering"),{data:s}=await ce(t,i,{...e,task:"question-answering"});return i.getResponse(s)}async function ev(t,e){const n=await se(t.provider,t.model,t.endpointUrl),i=ae(n,"sentence-similarity"),{data:s}=await ce(t,i,{...e,task:"sentence-similarity"});return i.getResponse(s)}async function tv(t,e){const n=await se(t.provider,t.model,t.endpointUrl),i=ae(n,"summarization"),{data:s}=await ce(t,i,{...e,task:"summarization"});return i.getResponse(s)}async function nv(t,e){const n=await se(t.provider,t.model,t.endpointUrl),i=ae(n,"table-question-answering"),{data:s}=await ce(t,i,{...e,task:"table-question-answering"});return i.getResponse(s)}async function iv(t,e){const n=await se(t.provider,t.model,t.endpointUrl),i=ae(n,"text-classification"),{data:s}=await ce(t,i,{...e,task:"text-classification"});return i.getResponse(s)}async function ov(t,e){const n=await se(t.provider,t.model,t.endpointUrl),i=ae(n,"text-generation"),{data:s}=await ce(t,i,{...e,task:"text-generation"});return i.getResponse(s)}async function*sv(t,e){const n=await se(t.provider,t.model,t.endpointUrl),i=ae(n,"text-generation");yield*Yo(t,i,{...e,task:"text-generation"})}async function av(t,e){const n=await se(t.provider,t.model,t.endpointUrl),i=ae(n,"token-classification"),{data:s}=await ce(t,i,{...e,task:"token-classification"});return i.getResponse(s)}async function rv(t,e){const n=await se(t.provider,t.model,t.endpointUrl),i=ae(n,"translation"),{data:s}=await ce(t,i,{...e,task:"translation"});return i.getResponse(s)}async function lv(t,e){const n=await se(t.provider,t.model,t.endpointUrl),i=ae(n,"zero-shot-classification"),{data:s}=await ce(t,i,{...e,task:"zero-shot-classification"});return i.getResponse(s)}async function cv(t,e){const n=await se(t.provider,t.model,t.endpointUrl),i=ae(n,"document-question-answering"),s={...t,inputs:{question:t.inputs.question,image:Ze(new Uint8Array(await t.inputs.image.arrayBuffer()))}},{data:r}=await ce(s,i,{...e,task:"document-question-answering"});return i.getResponse(r)}async function dv(t,e){const n=await se(t.provider,t.model,t.endpointUrl),i=ae(n,"visual-question-answering"),s={...t,inputs:{question:t.inputs.question,image:Ze(new Uint8Array(await t.inputs.image.arrayBuffer()))}},{data:r}=await ce(s,i,{...e,task:"visual-question-answering"});return i.getResponse(r)}async function pv(t,e){const n=await se(t.provider,t.model,t.endpointUrl),i=ae(n,"tabular-classification"),{data:s}=await ce(t,i,{...e,task:"tabular-classification"});return i.getResponse(s)}async function uv(t,e){const n=await se(t.provider,t.model,t.endpointUrl),i=ae(n,"tabular-regression"),{data:s}=await ce(t,i,{...e,task:"tabular-regression"});return i.getResponse(s)}const mv=Object.freeze(Object.defineProperty({__proto__:null,audioClassification:Ny,audioToAudio:Ry,automaticSpeechRecognition:My,chatCompletion:Yy,chatCompletionStream:Qy,documentQuestionAnswering:cv,featureExtraction:Jy,fillMask:Zy,imageClassification:Uy,imageSegmentation:By,imageToImage:qy,imageToText:Fy,imageToVideo:Vy,objectDetection:Hy,questionAnswering:Gy,request:Ly,sentenceSimilarity:ev,streamingRequest:$y,summarization:tv,tableQuestionAnswering:nv,tabularClassification:pv,tabularRegression:uv,textClassification:iv,textGeneration:ov,textGenerationStream:sv,textToImage:Wy,textToSpeech:jy,textToVideo:Ky,tokenClassification:av,translation:rv,visualQuestionAnswering:dv,zeroShotClassification:lv,zeroShotImageClassification:Xy},Symbol.toStringTag,{value:"Module"}));function fv(t){return Object.entries(t)}class Ma{accessToken;defaultOptions;constructor(e="",n={}){this.accessToken=e,this.defaultOptions=n;for(const[i,s]of fv(mv))Object.defineProperty(this,i,{enumerable:!1,value:(r,c)=>s({endpointUrl:n.endpointUrl,accessToken:e,...r},{...oe(n,["endpointUrl"]),...c})})}endpoint(e){return new Ma(this.accessToken,{...this.defaultOptions,endpointUrl:e})}}var y=Object.freeze({Text:"Text",NumericLiteral:"NumericLiteral",StringLiteral:"StringLiteral",Identifier:"Identifier",Equals:"Equals",OpenParen:"OpenParen",CloseParen:"CloseParen",OpenStatement:"OpenStatement",CloseStatement:"CloseStatement",OpenExpression:"OpenExpression",CloseExpression:"CloseExpression",OpenSquareBracket:"OpenSquareBracket",CloseSquareBracket:"CloseSquareBracket",OpenCurlyBracket:"OpenCurlyBracket",CloseCurlyBracket:"CloseCurlyBracket",Comma:"Comma",Dot:"Dot",Colon:"Colon",Pipe:"Pipe",CallOperator:"CallOperator",AdditiveBinaryOperator:"AdditiveBinaryOperator",MultiplicativeBinaryOperator:"MultiplicativeBinaryOperator",ComparisonBinaryOperator:"ComparisonBinaryOperator",UnaryOperator:"UnaryOperator",Comment:"Comment"}),tn=class{constructor(t,e){this.value=t,this.type=e}};function ic(t){return/\w/.test(t)}function Ci(t){return/[0-9]/.test(t)}var hv=[["{%",y.OpenStatement],["%}",y.CloseStatement],["{{",y.OpenExpression],["}}",y.CloseExpression],["(",y.OpenParen],[")",y.CloseParen],["{",y.OpenCurlyBracket],["}",y.CloseCurlyBracket],["[",y.OpenSquareBracket],["]",y.CloseSquareBracket],[",",y.Comma],[".",y.Dot],[":",y.Colon],["|",y.Pipe],["<=",y.ComparisonBinaryOperator],[">=",y.ComparisonBinaryOperator],["==",y.ComparisonBinaryOperator],["!=",y.ComparisonBinaryOperator],["<",y.ComparisonBinaryOperator],[">",y.ComparisonBinaryOperator],["+",y.AdditiveBinaryOperator],["-",y.AdditiveBinaryOperator],["~",y.AdditiveBinaryOperator],["*",y.MultiplicativeBinaryOperator],["/",y.MultiplicativeBinaryOperator],["%",y.MultiplicativeBinaryOperator],["=",y.Equals]],gv=new Map([["n",`
`],["t","	"],["r","\r"],["b","\b"],["f","\f"],["v","\v"],["'","'"],['"','"'],["\\","\\"]]);function bv(t,e={}){return t.endsWith(`
`)&&(t=t.slice(0,-1)),e.lstrip_blocks&&(t=t.replace(/^[ \t]*({[#%-])/gm,"$1")),e.trim_blocks&&(t=t.replace(/([#%-]})\n/g,"$1")),t.replace(/-%}\s*/g,"%}").replace(/\s*{%-/g,"{%").replace(/-}}\s*/g,"}}").replace(/\s*{{-/g,"{{").replace(/-#}\s*/g,"#}").replace(/\s*{#-/g,"{#").replace(/{%\s*(end)?generation\s*%}/gs,"")}function _v(t,e={}){const n=[],i=bv(t,e);let s=0,r=0;const c=p=>{let u="";for(;p(i[s]);){if(i[s]==="\\"){if(++s,s>=i.length)throw new SyntaxError("Unexpected end of input");const m=i[s++],h=gv.get(m);if(h===void 0)throw new SyntaxError(`Unexpected escaped character: ${m}`);u+=h;continue}if(u+=i[s++],s>=i.length)throw new SyntaxError("Unexpected end of input")}return u};e:for(;s<i.length;){const p=n.at(-1)?.type;if(p===void 0||p===y.CloseStatement||p===y.CloseExpression||p===y.Comment){let m="";for(;s<i.length&&!(i[s]==="{"&&(i[s+1]==="%"||i[s+1]==="{"||i[s+1]==="#"));)m+=i[s++];if(m.length>0){n.push(new tn(m,y.Text));continue}}if(i[s]==="{"&&i[s+1]==="#"){s+=2;let m="";for(;i[s]!=="#"||i[s+1]!=="}";){if(s+2>=i.length)throw new SyntaxError("Missing end of comment tag");m+=i[s++]}n.push(new tn(m,y.Comment)),s+=2;continue}c(m=>/\s/.test(m));const u=i[s];if(u==="-"||u==="+"){const m=n.at(-1)?.type;if(m===y.Text||m===void 0)throw new SyntaxError(`Unexpected character: ${u}`);switch(m){case y.Identifier:case y.NumericLiteral:case y.StringLiteral:case y.CloseParen:case y.CloseSquareBracket:break;default:{++s;const h=c(Ci);n.push(new tn(`${u}${h}`,h.length>0?y.NumericLiteral:y.UnaryOperator));continue}}}for(const[m,h]of hv){if(m==="}}"&&r>0)continue;if(i.slice(s,s+m.length)===m){n.push(new tn(m,h)),h===y.OpenExpression?r=0:h===y.OpenCurlyBracket?++r:h===y.CloseCurlyBracket&&--r,s+=m.length;continue e}}if(u==="'"||u==='"'){++s;const m=c(h=>h!==u);n.push(new tn(m,y.StringLiteral)),++s;continue}if(Ci(u)){let m=c(Ci);if(i[s]==="."&&Ci(i[s+1])){++s;const h=c(Ci);m=`${m}.${h}`}n.push(new tn(m,y.NumericLiteral));continue}if(ic(u)){const m=c(ic);n.push(new tn(m,y.Identifier));continue}throw new SyntaxError(`Unexpected character: ${u}`)}return n}var Ct=class{type="Statement"},yv=class extends Ct{constructor(t){super(),this.body=t}type="Program"},vv=class extends Ct{constructor(t,e,n){super(),this.test=t,this.body=e,this.alternate=n}type="If"},wv=class extends Ct{constructor(t,e,n,i){super(),this.loopvar=t,this.iterable=e,this.body=n,this.defaultBlock=i}type="For"},xv=class extends Ct{type="Break"},Av=class extends Ct{type="Continue"},Ev=class extends Ct{constructor(t,e,n){super(),this.assignee=t,this.value=e,this.body=n}type="Set"},kv=class extends Ct{constructor(t,e,n){super(),this.name=t,this.args=e,this.body=n}type="Macro"},Tv=class extends Ct{constructor(t){super(),this.value=t}type="Comment"},lt=class extends Ct{type="Expression"},Iv=class extends lt{constructor(t,e,n){super(),this.object=t,this.property=e,this.computed=n}type="MemberExpression"},oc=class extends lt{constructor(t,e){super(),this.callee=t,this.args=e}type="CallExpression"},ei=class extends lt{constructor(t){super(),this.value=t}type="Identifier"},hi=class extends lt{constructor(t){super(),this.value=t}type="Literal"},Sv=class extends hi{type="IntegerLiteral"},Cv=class extends hi{type="FloatLiteral"},sc=class extends hi{type="StringLiteral"},Pv=class extends hi{type="ArrayLiteral"},ac=class extends hi{type="TupleLiteral"},Ov=class extends hi{type="ObjectLiteral"},Pi=class extends lt{constructor(t,e,n){super(),this.operator=t,this.left=e,this.right=n}type="BinaryExpression"},Dv=class extends lt{constructor(t,e){super(),this.operand=t,this.filter=e}type="FilterExpression"},Lv=class extends Ct{constructor(t,e){super(),this.filter=t,this.body=e}type="FilterStatement"},$v=class extends lt{constructor(t,e){super(),this.lhs=t,this.test=e}type="SelectExpression"},Nv=class extends lt{constructor(t,e,n){super(),this.operand=t,this.negate=e,this.test=n}type="TestExpression"},Rv=class extends lt{constructor(t,e){super(),this.operator=t,this.argument=e}type="UnaryExpression"},Mv=class extends lt{constructor(t=void 0,e=void 0,n=void 0){super(),this.start=t,this.stop=e,this.step=n}type="SliceExpression"},jv=class extends lt{constructor(t,e){super(),this.key=t,this.value=e}type="KeywordArgumentExpression"},Uv=class extends lt{constructor(t){super(),this.argument=t}type="SpreadExpression"},Bv=class extends Ct{constructor(t,e,n){super(),this.call=t,this.callerArgs=e,this.body=n}type="CallStatement"},qv=class extends lt{constructor(t,e,n){super(),this.condition=t,this.trueExpr=e,this.falseExpr=n}type="Ternary"};function Fv(t){const e=new yv([]);let n=0;function i(w,A){const S=t[n++];if(!S||S.type!==w)throw new Error(`Parser Error: ${A}. ${S.type} !== ${w}.`);return S}function s(w){if(!u(w))throw new SyntaxError(`Expected ${w}`);++n}function r(){switch(t[n].type){case y.Comment:return new Tv(t[n++].value);case y.Text:return m();case y.OpenStatement:return h();case y.OpenExpression:return E();default:throw new SyntaxError(`Unexpected token type: ${t[n].type}`)}}function c(...w){return n+w.length<=t.length&&w.every((A,S)=>A===t[n+S].type)}function p(...w){return t[n]?.type===y.OpenStatement&&t[n+1]?.type===y.Identifier&&w.includes(t[n+1]?.value)}function u(...w){return n+w.length<=t.length&&w.every((A,S)=>t[n+S].type==="Identifier"&&A===t[n+S].value)}function m(){return new sc(i(y.Text,"Expected text token").value)}function h(){if(i(y.OpenStatement,"Expected opening statement token"),t[n].type!==y.Identifier)throw new SyntaxError(`Unknown statement, got ${t[n].type}`);const w=t[n].value;let A;switch(w){case"set":++n,A=O();break;case"if":++n,A=k(),i(y.OpenStatement,"Expected {% token"),s("endif"),i(y.CloseStatement,"Expected %} token");break;case"macro":++n,A=R(),i(y.OpenStatement,"Expected {% token"),s("endmacro"),i(y.CloseStatement,"Expected %} token");break;case"for":++n,A=q(),i(y.OpenStatement,"Expected {% token"),s("endfor"),i(y.CloseStatement,"Expected %} token");break;case"call":{++n;let S=null;c(y.OpenParen)&&(S=be());const _=xe();if(_.type!=="Identifier")throw new SyntaxError("Expected identifier following call statement");const vt=be();i(y.CloseStatement,"Expected closing statement token");const Pt=[];for(;!p("endcall");)Pt.push(r());i(y.OpenStatement,"Expected '{%'"),s("endcall"),i(y.CloseStatement,"Expected closing statement token");const ct=new oc(_,vt);A=new Bv(ct,S,Pt);break}case"break":++n,i(y.CloseStatement,"Expected closing statement token"),A=new xv;break;case"continue":++n,i(y.CloseStatement,"Expected closing statement token"),A=new Av;break;case"filter":{++n;let S=xe();S instanceof ei&&c(y.OpenParen)&&(S=ge(S)),i(y.CloseStatement,"Expected closing statement token");const _=[];for(;!p("endfilter");)_.push(r());i(y.OpenStatement,"Expected '{%'"),s("endfilter"),i(y.CloseStatement,"Expected '%}'"),A=new Lv(S,_);break}default:throw new SyntaxError(`Unknown statement type: ${w}`)}return A}function E(){i(y.OpenExpression,"Expected opening expression token");const w=j();return i(y.CloseExpression,"Expected closing expression token"),w}function O(){const w=M();let A=null;const S=[];if(c(y.Equals))++n,A=M();else{for(i(y.CloseStatement,"Expected %} token");!p("endset");)S.push(r());i(y.OpenStatement,"Expected {% token"),s("endset")}return i(y.CloseStatement,"Expected closing statement token"),new Ev(w,A,S)}function k(){const w=j();i(y.CloseStatement,"Expected closing statement token");const A=[],S=[];for(;!p("elif","else","endif");)A.push(r());if(p("elif")){++n,++n;const _=k();S.push(_)}else if(p("else"))for(++n,++n,i(y.CloseStatement,"Expected closing statement token");!p("endif");)S.push(r());return new vv(w,A,S)}function R(){const w=xe();if(w.type!=="Identifier")throw new SyntaxError("Expected identifier following macro statement");const A=be();i(y.CloseStatement,"Expected closing statement token");const S=[];for(;!p("endmacro");)S.push(r());return new kv(w,A,S)}function M(w=!1){const A=w?xe:j,S=[A()],_=c(y.Comma);for(;_&&(++n,S.push(A()),!!c(y.Comma)););return _?new ac(S):S[0]}function q(){const w=M(!0);if(!(w instanceof ei||w instanceof ac))throw new SyntaxError(`Expected identifier/tuple for the loop variable, got ${w.type} instead`);if(!u("in"))throw new SyntaxError("Expected `in` keyword following loop variable");++n;const A=j();i(y.CloseStatement,"Expected closing statement token");const S=[];for(;!p("endfor","else");)S.push(r());const _=[];if(p("else"))for(++n,++n,i(y.CloseStatement,"Expected closing statement token");!p("endfor");)_.push(r());return new wv(w,A,S,_)}function j(){return z()}function z(){const w=Y();if(u("if")){++n;const A=Y();if(u("else")){++n;const S=z();return new qv(A,w,S)}else return new $v(w,A)}return w}function Y(){let w=H();for(;u("or");){const A=t[n];++n;const S=H();w=new Pi(A,w,S)}return w}function H(){let w=Z();for(;u("and");){const A=t[n];++n;const S=Z();w=new Pi(A,w,S)}return w}function Z(){let w;for(;u("not");){const A=t[n];++n;const S=Z();w=new Rv(A,S)}return w??ee()}function ee(){let w=de();for(;;){let A;if(u("not","in"))A=new tn("not in",y.Identifier),n+=2;else if(u("in"))A=t[n++];else if(c(y.ComparisonBinaryOperator))A=t[n++];else break;const S=de();w=new Pi(A,w,S)}return w}function de(){let w=Ge();for(;c(y.AdditiveBinaryOperator);){const A=t[n];++n;const S=Ge();w=new Pi(A,w,S)}return w}function we(){const w=Te(xe());return c(y.OpenParen)?ge(w):w}function ge(w){let A=new oc(w,be());return A=Te(A),c(y.OpenParen)&&(A=ge(A)),A}function be(){i(y.OpenParen,"Expected opening parenthesis for arguments list");const w=ke();return i(y.CloseParen,"Expected closing parenthesis for arguments list"),w}function ke(){const w=[];for(;!c(y.CloseParen);){let A;if(t[n].type===y.MultiplicativeBinaryOperator&&t[n].value==="*"){++n;const S=j();A=new Uv(S)}else if(A=j(),c(y.Equals)){if(++n,!(A instanceof ei))throw new SyntaxError("Expected identifier for keyword argument");const S=j();A=new jv(A,S)}w.push(A),c(y.Comma)&&++n}return w}function qe(){const w=[];let A=!1;for(;!c(y.CloseSquareBracket);)c(y.Colon)?(w.push(void 0),++n,A=!0):(w.push(j()),c(y.Colon)&&(++n,A=!0));if(w.length===0)throw new SyntaxError("Expected at least one argument for member/slice expression");if(A){if(w.length>3)throw new SyntaxError("Expected 0-3 arguments for slice expression");return new Mv(...w)}return w[0]}function Te(w){for(;c(y.Dot)||c(y.OpenSquareBracket);){const A=t[n];++n;let S;const _=A.type===y.OpenSquareBracket;if(_)S=qe(),i(y.CloseSquareBracket,"Expected closing square bracket");else if(S=xe(),S.type!=="Identifier")throw new SyntaxError("Expected identifier following dot operator");w=new Iv(w,S,_)}return w}function Ge(){let w=et();for(;c(y.MultiplicativeBinaryOperator);){const A=t[n++],S=et();w=new Pi(A,w,S)}return w}function et(){let w=Le();for(;u("is");){++n;const A=u("not");A&&++n;const S=xe();if(!(S instanceof ei))throw new SyntaxError("Expected identifier for the test");w=new Nv(w,A,S)}return w}function Le(){let w=we();for(;c(y.Pipe);){++n;let A=xe();if(!(A instanceof ei))throw new SyntaxError("Expected identifier for the filter");c(y.OpenParen)&&(A=ge(A)),w=new Dv(w,A)}return w}function xe(){const w=t[n++];switch(w.type){case y.NumericLiteral:{const A=w.value;return A.includes(".")?new Cv(Number(A)):new Sv(Number(A))}case y.StringLiteral:{let A=w.value;for(;c(y.StringLiteral);)A+=t[n++].value;return new sc(A)}case y.Identifier:return new ei(w.value);case y.OpenParen:{const A=M();return i(y.CloseParen,"Expected closing parenthesis, got ${tokens[current].type} instead."),A}case y.OpenSquareBracket:{const A=[];for(;!c(y.CloseSquareBracket);)A.push(j()),c(y.Comma)&&++n;return++n,new Pv(A)}case y.OpenCurlyBracket:{const A=new Map;for(;!c(y.CloseCurlyBracket);){const S=j();i(y.Colon,"Expected colon between key and value in object literal");const _=j();A.set(S,_),c(y.Comma)&&++n}return++n,new Ov(A)}default:throw new SyntaxError(`Unexpected token: ${w.type}`)}}for(;n<t.length;)e.body.push(r());return e}function Vv(t,e,n=1){e===void 0&&(e=t,t=0);const i=[];for(let s=t;s<e;s+=n)i.push(s);return i}function rc(t,e,n,i=1){const s=Math.sign(i);s>=0?(e=(e??=0)<0?Math.max(t.length+e,0):Math.min(e,t.length),n=(n??=t.length)<0?Math.max(t.length+n,0):Math.min(n,t.length)):(e=(e??=t.length-1)<0?Math.max(t.length+e,-1):Math.min(e,t.length-1),n=(n??=-1)<-1?Math.max(t.length+n,-1):Math.min(n,t.length-1));const r=[];for(let c=e;s*c<s*n;c+=i)r.push(t[c]);return r}function Hv(t){return t.replace(/\b\w/g,e=>e.toUpperCase())}function Wv(t){return Kv(new Date,t)}function Kv(t,e){const n=new Intl.DateTimeFormat(void 0,{month:"long"}),i=new Intl.DateTimeFormat(void 0,{month:"short"}),s=r=>r<10?"0"+r:r.toString();return e.replace(/%[YmdbBHM%]/g,r=>{switch(r){case"%Y":return t.getFullYear().toString();case"%m":return s(t.getMonth()+1);case"%d":return s(t.getDate());case"%b":return i.format(t);case"%B":return n.format(t);case"%H":return s(t.getHours());case"%M":return s(t.getMinutes());case"%%":return"%";default:return r}})}function zv(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Xv(t,e,n,i){if(i===0)return t;let s=i==null||i<0?1/0:i;const r=e.length===0?new RegExp("(?=)","gu"):new RegExp(zv(e),"gu");return t.replaceAll(r,c=>s>0?(--s,n):c)}var lc=class extends Error{},cc=class extends Error{},Bt=class{type="RuntimeValue";value;builtins=new Map;constructor(t=void 0){this.value=t}__bool__(){return new ie(!!this.value)}toString(){return String(this.value)}},J=class extends Bt{type="IntegerValue"},Se=class extends Bt{type="FloatValue";toString(){return this.value%1===0?this.value.toFixed(1):this.value.toString()}},L=class extends Bt{type="StringValue";builtins=new Map([["upper",new Ee(()=>new L(this.value.toUpperCase()))],["lower",new Ee(()=>new L(this.value.toLowerCase()))],["strip",new Ee(()=>new L(this.value.trim()))],["title",new Ee(()=>new L(Hv(this.value)))],["capitalize",new Ee(()=>new L(this.value.charAt(0).toUpperCase()+this.value.slice(1)))],["length",new J(this.value.length)],["rstrip",new Ee(()=>new L(this.value.trimEnd()))],["lstrip",new Ee(()=>new L(this.value.trimStart()))],["startswith",new Ee(t=>{if(t.length===0)throw new Error("startswith() requires at least one argument");const e=t[0];if(e instanceof L)return new ie(this.value.startsWith(e.value));if(e instanceof le){for(const n of e.value){if(!(n instanceof L))throw new Error("startswith() tuple elements must be strings");if(this.value.startsWith(n.value))return new ie(!0)}return new ie(!1)}throw new Error("startswith() argument must be a string or tuple of strings")})],["endswith",new Ee(t=>{if(t.length===0)throw new Error("endswith() requires at least one argument");const e=t[0];if(e instanceof L)return new ie(this.value.endsWith(e.value));if(e instanceof le){for(const n of e.value){if(!(n instanceof L))throw new Error("endswith() tuple elements must be strings");if(this.value.endsWith(n.value))return new ie(!0)}return new ie(!1)}throw new Error("endswith() argument must be a string or tuple of strings")})],["split",new Ee(t=>{const e=t[0]??new Ke;if(!(e instanceof L||e instanceof Ke))throw new Error("sep argument must be a string or null");const n=t[1]??new J(-1);if(!(n instanceof J))throw new Error("maxsplit argument must be a number");let i=[];if(e instanceof Ke){const s=this.value.trimStart();for(const{0:r,index:c}of s.matchAll(/\S+/g)){if(n.value!==-1&&i.length>=n.value&&c!==void 0){i.push(r+s.slice(c+r.length));break}i.push(r)}}else{if(e.value==="")throw new Error("empty separator");i=this.value.split(e.value),n.value!==-1&&i.length>n.value&&i.push(i.splice(n.value).join(e.value))}return new le(i.map(s=>new L(s)))})],["replace",new Ee(t=>{if(t.length<2)throw new Error("replace() requires at least two arguments");const e=t[0],n=t[1];if(!(e instanceof L&&n instanceof L))throw new Error("replace() arguments must be strings");let i;if(t.length>2?t[2].type==="KeywordArgumentsValue"?i=t[2].value.get("count")??new Ke:i=t[2]:i=new Ke,!(i instanceof J||i instanceof Ke))throw new Error("replace() count argument must be a number or null");return new L(Xv(this.value,e.value,n.value,i.value))})]])},ie=class extends Bt{type="BooleanValue"},Qe=class extends Bt{type="ObjectValue";__bool__(){return new ie(this.value.size>0)}builtins=new Map([["get",new Ee(([t,e])=>{if(!(t instanceof L))throw new Error(`Object key must be a string: got ${t.type}`);return this.value.get(t.value)??e??new Ke})],["items",new Ee(()=>this.items())],["keys",new Ee(()=>this.keys())],["values",new Ee(()=>this.values())]]);items(){return new le(Array.from(this.value.entries()).map(([t,e])=>new le([new L(t),e])))}keys(){return new le(Array.from(this.value.keys()).map(t=>new L(t)))}values(){return new le(Array.from(this.value.values()))}},Zs=class extends Qe{type="KeywordArgumentsValue"},le=class extends Bt{type="ArrayValue";builtins=new Map([["length",new J(this.value.length)]]);__bool__(){return new ie(this.value.length>0)}},Yv=class extends le{type="TupleValue"},Ee=class extends Bt{type="FunctionValue"},Ke=class extends Bt{type="NullValue"},Me=class extends Bt{type="UndefinedValue"},An=class{constructor(t){this.parent=t}variables=new Map([["namespace",new Ee(t=>{if(t.length===0)return new Qe(new Map);if(t.length!==1||!(t[0]instanceof Qe))throw new Error("`namespace` expects either zero arguments or a single object argument");return t[0]})]]);tests=new Map([["boolean",t=>t.type==="BooleanValue"],["callable",t=>t instanceof Ee],["odd",t=>{if(!(t instanceof J))throw new Error(`cannot odd on ${t.type}`);return t.value%2!==0}],["even",t=>{if(!(t instanceof J))throw new Error(`cannot even on ${t.type}`);return t.value%2===0}],["false",t=>t.type==="BooleanValue"&&!t.value],["true",t=>t.type==="BooleanValue"&&t.value],["none",t=>t.type==="NullValue"],["string",t=>t.type==="StringValue"],["number",t=>t instanceof J||t instanceof Se],["integer",t=>t instanceof J],["iterable",t=>t.type==="ArrayValue"||t.type==="StringValue"],["mapping",t=>t.type==="ObjectValue"],["lower",t=>{const e=t.value;return t.type==="StringValue"&&e===e.toLowerCase()}],["upper",t=>{const e=t.value;return t.type==="StringValue"&&e===e.toUpperCase()}],["none",t=>t.type==="NullValue"],["defined",t=>t.type!=="UndefinedValue"],["undefined",t=>t.type==="UndefinedValue"],["equalto",(t,e)=>t.value===e.value],["eq",(t,e)=>t.value===e.value]]);set(t,e){return this.declareVariable(t,So(e))}declareVariable(t,e){if(this.variables.has(t))throw new SyntaxError(`Variable already declared: ${t}`);return this.variables.set(t,e),e}setVariable(t,e){return this.variables.set(t,e),e}resolve(t){if(this.variables.has(t))return this;if(this.parent)return this.parent.resolve(t);throw new Error(`Unknown variable: ${t}`)}lookupVariable(t){try{return this.resolve(t).variables.get(t)??new Me}catch{return new Me}}};function Qv(t){t.set("false",!1),t.set("true",!0),t.set("none",null),t.set("raise_exception",e=>{throw new Error(e)}),t.set("range",Vv),t.set("strftime_now",Wv),t.set("True",!0),t.set("False",!1),t.set("None",null)}var Jv=class{global;constructor(t){this.global=t??new An}run(t){return this.evaluate(t,this.global)}evaluateBinaryExpression(t,e){const n=this.evaluate(t.left,e);switch(t.operator.value){case"and":return n.__bool__().value?this.evaluate(t.right,e):n;case"or":return n.__bool__().value?n:this.evaluate(t.right,e)}const i=this.evaluate(t.right,e);switch(t.operator.value){case"==":return new ie(n.value==i.value);case"!=":return new ie(n.value!=i.value)}if(n instanceof Me||i instanceof Me){if(i instanceof Me&&["in","not in"].includes(t.operator.value))return new ie(t.operator.value==="not in");throw new Error(`Cannot perform operation ${t.operator.value} on undefined values`)}else{if(n instanceof Ke||i instanceof Ke)throw new Error("Cannot perform operation on null values");if(t.operator.value==="~")return new L(n.value.toString()+i.value.toString());if((n instanceof J||n instanceof Se)&&(i instanceof J||i instanceof Se)){const s=n.value,r=i.value;switch(t.operator.value){case"+":case"-":case"*":{const c=t.operator.value==="+"?s+r:t.operator.value==="-"?s-r:s*r;return n instanceof Se||i instanceof Se?new Se(c):new J(c)}case"/":return new Se(s/r);case"%":{const c=s%r;return n instanceof Se||i instanceof Se?new Se(c):new J(c)}case"<":return new ie(s<r);case">":return new ie(s>r);case">=":return new ie(s>=r);case"<=":return new ie(s<=r)}}else if(n instanceof le&&i instanceof le)switch(t.operator.value){case"+":return new le(n.value.concat(i.value))}else if(i instanceof le){const s=i.value.find(r=>r.value===n.value)!==void 0;switch(t.operator.value){case"in":return new ie(s);case"not in":return new ie(!s)}}}if(n instanceof L||i instanceof L)switch(t.operator.value){case"+":return new L(n.value.toString()+i.value.toString())}if(n instanceof L&&i instanceof L)switch(t.operator.value){case"in":return new ie(i.value.includes(n.value));case"not in":return new ie(!i.value.includes(n.value))}if(n instanceof L&&i instanceof Qe)switch(t.operator.value){case"in":return new ie(i.value.has(n.value));case"not in":return new ie(!i.value.has(n.value))}throw new SyntaxError(`Unknown operator "${t.operator.value}" between ${n.type} and ${i.type}`)}evaluateArguments(t,e){const n=[],i=new Map;for(const s of t)if(s.type==="SpreadExpression"){const r=s,c=this.evaluate(r.argument,e);if(!(c instanceof le))throw new Error(`Cannot unpack non-iterable type: ${c.type}`);for(const p of c.value)n.push(p)}else if(s.type==="KeywordArgumentExpression"){const r=s;i.set(r.key.value,this.evaluate(r.value,e))}else{if(i.size>0)throw new Error("Positional arguments must come before keyword arguments");n.push(this.evaluate(s,e))}return[n,i]}applyFilter(t,e,n){if(e.type==="Identifier"){const i=e;if(i.value==="tojson")return new L($i(t));if(t instanceof le)switch(i.value){case"list":return t;case"first":return t.value[0];case"last":return t.value[t.value.length-1];case"length":return new J(t.value.length);case"reverse":return new le(t.value.reverse());case"sort":return new le(t.value.sort((s,r)=>{if(s.type!==r.type)throw new Error(`Cannot compare different types: ${s.type} and ${r.type}`);switch(s.type){case"IntegerValue":case"FloatValue":return s.value-r.value;case"StringValue":return s.value.localeCompare(r.value);default:throw new Error(`Cannot compare type: ${s.type}`)}}));case"join":return new L(t.value.map(s=>s.value).join(""));case"string":return new L($i(t));case"unique":{const s=new Set,r=[];for(const c of t.value)s.has(c.value)||(s.add(c.value),r.push(c));return new le(r)}default:throw new Error(`Unknown ArrayValue filter: ${i.value}`)}else if(t instanceof L)switch(i.value){case"length":case"upper":case"lower":case"title":case"capitalize":{const s=t.builtins.get(i.value);if(s instanceof Ee)return s.value([],n);if(s instanceof J)return s;throw new Error(`Unknown StringValue filter: ${i.value}`)}case"trim":return new L(t.value.trim());case"indent":return new L(t.value.split(`
`).map((s,r)=>r===0||s.length===0?s:"    "+s).join(`
`));case"join":case"string":return t;case"int":{const s=parseInt(t.value,10);return new J(isNaN(s)?0:s)}case"float":{const s=parseFloat(t.value);return new Se(isNaN(s)?0:s)}default:throw new Error(`Unknown StringValue filter: ${i.value}`)}else if(t instanceof J||t instanceof Se)switch(i.value){case"abs":return t instanceof J?new J(Math.abs(t.value)):new Se(Math.abs(t.value));case"int":return new J(Math.floor(t.value));case"float":return new Se(t.value);default:throw new Error(`Unknown NumericValue filter: ${i.value}`)}else if(t instanceof Qe)switch(i.value){case"items":return new le(Array.from(t.value.entries()).map(([s,r])=>new le([new L(s),r])));case"length":return new J(t.value.size);default:throw new Error(`Unknown ObjectValue filter: ${i.value}`)}else if(t instanceof ie)switch(i.value){case"bool":return new ie(t.value);case"int":return new J(t.value?1:0);case"float":return new Se(t.value?1:0);case"string":return new L(t.value?"true":"false");default:throw new Error(`Unknown BooleanValue filter: ${i.value}`)}throw new Error(`Cannot apply filter "${i.value}" to type: ${t.type}`)}else if(e.type==="CallExpression"){const i=e;if(i.callee.type!=="Identifier")throw new Error(`Unknown filter: ${i.callee.type}`);const s=i.callee.value;if(s==="tojson"){const[,r]=this.evaluateArguments(i.args,n),c=r.get("indent")??new Ke;if(!(c instanceof J||c instanceof Ke))throw new Error("If set, indent must be a number");return new L($i(t,c.value))}else if(s==="join"){let r;if(t instanceof L)r=Array.from(t.value);else if(t instanceof le)r=t.value.map(m=>m.value);else throw new Error(`Cannot apply filter "${s}" to type: ${t.type}`);const[c,p]=this.evaluateArguments(i.args,n),u=c.at(0)??p.get("separator")??new L("");if(!(u instanceof L))throw new Error("separator must be a string");return new L(r.join(u.value))}else if(s==="int"||s==="float"){const[r,c]=this.evaluateArguments(i.args,n),p=r.at(0)??c.get("default")??(s==="int"?new J(0):new Se(0));if(t instanceof L){const u=s==="int"?parseInt(t.value,10):parseFloat(t.value);return isNaN(u)?p:s==="int"?new J(u):new Se(u)}else{if(t instanceof J||t instanceof Se)return t;if(t instanceof ie)return s==="int"?new J(t.value?1:0):new Se(t.value?1:0);throw new Error(`Cannot apply filter "${s}" to type: ${t.type}`)}}else if(s==="default"){const[r,c]=this.evaluateArguments(i.args,n),p=r[0]??new L(""),u=r[1]??c.get("boolean")??new ie(!1);if(!(u instanceof ie))throw new Error("`default` filter flag must be a boolean");return t instanceof Me||u.value&&!t.__bool__().value?p:t}if(t instanceof le){switch(s){case"selectattr":case"rejectattr":{const r=s==="selectattr";if(t.value.some(E=>!(E instanceof Qe)))throw new Error(`\`${s}\` can only be applied to array of objects`);if(i.args.some(E=>E.type!=="StringLiteral"))throw new Error(`arguments of \`${s}\` must be strings`);const[c,p,u]=i.args.map(E=>this.evaluate(E,n));let m;if(p){const E=n.tests.get(p.value);if(!E)throw new Error(`Unknown test: ${p.value}`);m=E}else m=(...E)=>E[0].__bool__().value;const h=t.value.filter(E=>{const O=E.value.get(c.value),k=O?m(O,u):!1;return r?k:!k});return new le(h)}case"map":{const[,r]=this.evaluateArguments(i.args,n);if(r.has("attribute")){const c=r.get("attribute");if(!(c instanceof L))throw new Error("attribute must be a string");const p=r.get("default"),u=t.value.map(m=>{if(!(m instanceof Qe))throw new Error("items in map must be an object");return m.value.get(c.value)??p??new Me});return new le(u)}else throw new Error("`map` expressions without `attribute` set are not currently supported.")}}throw new Error(`Unknown ArrayValue filter: ${s}`)}else if(t instanceof L){switch(s){case"indent":{const[r,c]=this.evaluateArguments(i.args,n),p=r.at(0)??c.get("width")??new J(4);if(!(p instanceof J))throw new Error("width must be a number");const u=r.at(1)??c.get("first")??new ie(!1),m=r.at(2)??c.get("blank")??new ie(!1),h=t.value.split(`
`),E=" ".repeat(p.value),O=h.map((k,R)=>!u.value&&R===0||!m.value&&k.length===0?k:E+k);return new L(O.join(`
`))}case"replace":{const r=t.builtins.get("replace");if(!(r instanceof Ee))throw new Error("replace filter not available");const[c,p]=this.evaluateArguments(i.args,n);return r.value([...c,new Zs(p)],n)}}throw new Error(`Unknown StringValue filter: ${s}`)}else throw new Error(`Cannot apply filter "${s}" to type: ${t.type}`)}throw new Error(`Unknown filter: ${e.type}`)}evaluateFilterExpression(t,e){const n=this.evaluate(t.operand,e);return this.applyFilter(n,t.filter,e)}evaluateTestExpression(t,e){const n=this.evaluate(t.operand,e),i=e.tests.get(t.test.value);if(!i)throw new Error(`Unknown test: ${t.test.value}`);const s=i(n);return new ie(t.negate?!s:s)}evaluateSelectExpression(t,e){return this.evaluate(t.test,e).__bool__().value?this.evaluate(t.lhs,e):new Me}evaluateUnaryExpression(t,e){const n=this.evaluate(t.argument,e);switch(t.operator.value){case"not":return new ie(!n.value);default:throw new SyntaxError(`Unknown operator: ${t.operator.value}`)}}evaluateTernaryExpression(t,e){return this.evaluate(t.condition,e).__bool__().value?this.evaluate(t.trueExpr,e):this.evaluate(t.falseExpr,e)}evalProgram(t,e){return this.evaluateBlock(t.body,e)}evaluateBlock(t,e){let n="";for(const i of t){const s=this.evaluate(i,e);s.type!=="NullValue"&&s.type!=="UndefinedValue"&&(n+=s.toString())}return new L(n)}evaluateIdentifier(t,e){return e.lookupVariable(t.value)}evaluateCallExpression(t,e){const[n,i]=this.evaluateArguments(t.args,e);i.size>0&&n.push(new Zs(i));const s=this.evaluate(t.callee,e);if(s.type!=="FunctionValue")throw new Error(`Cannot call something that is not a function: got ${s.type}`);return s.value(n,e)}evaluateSliceExpression(t,e,n){if(!(t instanceof le||t instanceof L))throw new Error("Slice object must be an array or string");const i=this.evaluate(e.start,n),s=this.evaluate(e.stop,n),r=this.evaluate(e.step,n);if(!(i instanceof J||i instanceof Me))throw new Error("Slice start must be numeric or undefined");if(!(s instanceof J||s instanceof Me))throw new Error("Slice stop must be numeric or undefined");if(!(r instanceof J||r instanceof Me))throw new Error("Slice step must be numeric or undefined");return t instanceof le?new le(rc(t.value,i.value,s.value,r.value)):new L(rc(Array.from(t.value),i.value,s.value,r.value).join(""))}evaluateMemberExpression(t,e){const n=this.evaluate(t.object,e);let i;if(t.computed){if(t.property.type==="SliceExpression")return this.evaluateSliceExpression(n,t.property,e);i=this.evaluate(t.property,e)}else i=new L(t.property.value);let s;if(n instanceof Qe){if(!(i instanceof L))throw new Error(`Cannot access property with non-string: got ${i.type}`);s=n.value.get(i.value)??n.builtins.get(i.value)}else if(n instanceof le||n instanceof L)if(i instanceof J)s=n.value.at(i.value),n instanceof L&&(s=new L(n.value.at(i.value)));else if(i instanceof L)s=n.builtins.get(i.value);else throw new Error(`Cannot access property with non-string/non-number: got ${i.type}`);else{if(!(i instanceof L))throw new Error(`Cannot access property with non-string: got ${i.type}`);s=n.builtins.get(i.value)}return s instanceof Bt?s:new Me}evaluateSet(t,e){const n=t.value?this.evaluate(t.value,e):this.evaluateBlock(t.body,e);if(t.assignee.type==="Identifier"){const i=t.assignee.value;e.setVariable(i,n)}else if(t.assignee.type==="TupleLiteral"){const i=t.assignee;if(!(n instanceof le))throw new Error(`Cannot unpack non-iterable type in set: ${n.type}`);const s=n.value;if(s.length!==i.value.length)throw new Error(`Too ${i.value.length>s.length?"few":"many"} items to unpack in set`);for(let r=0;r<i.value.length;++r){const c=i.value[r];if(c.type!=="Identifier")throw new Error(`Cannot unpack to non-identifier in set: ${c.type}`);e.setVariable(c.value,s[r])}}else if(t.assignee.type==="MemberExpression"){const i=t.assignee,s=this.evaluate(i.object,e);if(!(s instanceof Qe))throw new Error("Cannot assign to member of non-object");if(i.property.type!=="Identifier")throw new Error("Cannot assign to member with non-identifier property");s.value.set(i.property.value,n)}else throw new Error(`Invalid LHS inside assignment expression: ${JSON.stringify(t.assignee)}`);return new Ke}evaluateIf(t,e){const n=this.evaluate(t.test,e);return this.evaluateBlock(n.__bool__().value?t.body:t.alternate,e)}evaluateFor(t,e){const n=new An(e);let i,s;if(t.iterable.type==="SelectExpression"){const m=t.iterable;s=this.evaluate(m.lhs,n),i=m.test}else s=this.evaluate(t.iterable,n);if(!(s instanceof le||s instanceof Qe))throw new Error(`Expected iterable or object type in for loop: got ${s.type}`);s instanceof Qe&&(s=s.keys());const r=[],c=[];for(let m=0;m<s.value.length;++m){const h=new An(n),E=s.value[m];let O;if(t.loopvar.type==="Identifier")O=k=>k.setVariable(t.loopvar.value,E);else if(t.loopvar.type==="TupleLiteral"){const k=t.loopvar;if(E.type!=="ArrayValue")throw new Error(`Cannot unpack non-iterable type: ${E.type}`);const R=E;if(k.value.length!==R.value.length)throw new Error(`Too ${k.value.length>R.value.length?"few":"many"} items to unpack`);O=M=>{for(let q=0;q<k.value.length;++q){if(k.value[q].type!=="Identifier")throw new Error(`Cannot unpack non-identifier type: ${k.value[q].type}`);M.setVariable(k.value[q].value,R.value[q])}}}else throw new Error(`Invalid loop variable(s): ${t.loopvar.type}`);i&&(O(h),!this.evaluate(i,h).__bool__().value)||(r.push(E),c.push(O))}let p="",u=!0;for(let m=0;m<r.length;++m){const h=new Map([["index",new J(m+1)],["index0",new J(m)],["revindex",new J(r.length-m)],["revindex0",new J(r.length-m-1)],["first",new ie(m===0)],["last",new ie(m===r.length-1)],["length",new J(r.length)],["previtem",m>0?r[m-1]:new Me],["nextitem",m<r.length-1?r[m+1]:new Me]]);n.setVariable("loop",new Qe(h)),c[m](n);try{const E=this.evaluateBlock(t.body,n);p+=E.value}catch(E){if(E instanceof cc)continue;if(E instanceof lc)break;throw E}u=!1}if(u){const m=this.evaluateBlock(t.defaultBlock,n);p+=m.value}return new L(p)}evaluateMacro(t,e){return e.setVariable(t.name.value,new Ee((n,i)=>{const s=new An(i);n=n.slice();let r;n.at(-1)?.type==="KeywordArgumentsValue"&&(r=n.pop());for(let c=0;c<t.args.length;++c){const p=t.args[c],u=n[c];if(p.type==="Identifier"){const m=p;if(!u)throw new Error(`Missing positional argument: ${m.value}`);s.setVariable(m.value,u)}else if(p.type==="KeywordArgumentExpression"){const m=p,h=u??r?.value.get(m.key.value)??this.evaluate(m.value,s);s.setVariable(m.key.value,h)}else throw new Error(`Unknown argument type: ${p.type}`)}return this.evaluateBlock(t.body,s)})),new Ke}evaluateCallStatement(t,e){const n=new Ee((p,u)=>{const m=new An(u);if(t.callerArgs)for(let h=0;h<t.callerArgs.length;++h){const E=t.callerArgs[h];if(E.type!=="Identifier")throw new Error(`Caller parameter must be an identifier, got ${E.type}`);m.setVariable(E.value,p[h]??new Me)}return this.evaluateBlock(t.body,m)}),[i,s]=this.evaluateArguments(t.call.args,e);i.push(new Zs(s));const r=this.evaluate(t.call.callee,e);if(r.type!=="FunctionValue")throw new Error(`Cannot call something that is not a function: got ${r.type}`);const c=new An(e);return c.setVariable("caller",n),r.value(i,c)}evaluateFilterStatement(t,e){const n=this.evaluateBlock(t.body,e);return this.applyFilter(n,t.filter,e)}evaluate(t,e){if(!t)return new Me;switch(t.type){case"Program":return this.evalProgram(t,e);case"Set":return this.evaluateSet(t,e);case"If":return this.evaluateIf(t,e);case"For":return this.evaluateFor(t,e);case"Macro":return this.evaluateMacro(t,e);case"CallStatement":return this.evaluateCallStatement(t,e);case"Break":throw new lc;case"Continue":throw new cc;case"IntegerLiteral":return new J(t.value);case"FloatLiteral":return new Se(t.value);case"StringLiteral":return new L(t.value);case"ArrayLiteral":return new le(t.value.map(n=>this.evaluate(n,e)));case"TupleLiteral":return new Yv(t.value.map(n=>this.evaluate(n,e)));case"ObjectLiteral":{const n=new Map;for(const[i,s]of t.value){const r=this.evaluate(i,e);if(!(r instanceof L))throw new Error(`Object keys must be strings: got ${r.type}`);n.set(r.value,this.evaluate(s,e))}return new Qe(n)}case"Identifier":return this.evaluateIdentifier(t,e);case"CallExpression":return this.evaluateCallExpression(t,e);case"MemberExpression":return this.evaluateMemberExpression(t,e);case"UnaryExpression":return this.evaluateUnaryExpression(t,e);case"BinaryExpression":return this.evaluateBinaryExpression(t,e);case"FilterExpression":return this.evaluateFilterExpression(t,e);case"FilterStatement":return this.evaluateFilterStatement(t,e);case"TestExpression":return this.evaluateTestExpression(t,e);case"SelectExpression":return this.evaluateSelectExpression(t,e);case"Ternary":return this.evaluateTernaryExpression(t,e);case"Comment":return new Ke;default:throw new SyntaxError(`Unknown node type: ${t.type}`)}}};function So(t){switch(typeof t){case"number":return Number.isInteger(t)?new J(t):new Se(t);case"string":return new L(t);case"boolean":return new ie(t);case"undefined":return new Me;case"object":return t===null?new Ke:Array.isArray(t)?new le(t.map(So)):new Qe(new Map(Object.entries(t).map(([e,n])=>[e,So(n)])));case"function":return new Ee((e,n)=>{const i=t(...e.map(s=>s.value))??null;return So(i)});default:throw new Error(`Cannot convert to runtime value: ${t}`)}}function $i(t,e,n){const i=n??0;switch(t.type){case"NullValue":case"UndefinedValue":return"null";case"IntegerValue":case"FloatValue":case"StringValue":case"BooleanValue":return JSON.stringify(t.value);case"ArrayValue":case"ObjectValue":{const s=e?" ".repeat(e):"",r=`
`+s.repeat(i),c=r+s;if(t.type==="ArrayValue"){const p=t.value.map(u=>$i(u,e,i+1));return e?`[${c}${p.join(`,${c}`)}${r}]`:`[${p.join(", ")}]`}else{const p=Array.from(t.value.entries()).map(([u,m])=>{const h=`"${u}": ${$i(m,e,i+1)}`;return e?`${c}${h}`:h});return e?`{${p.join(",")}${r}}`:`{${p.join(", ")}}`}}default:throw new Error(`Cannot convert to JSON: ${t.type}`)}}var De=`
`,Zv="{%- ",Gv=" -%}";function ew(t){switch(t.operator.type){case"MultiplicativeBinaryOperator":return 4;case"AdditiveBinaryOperator":return 3;case"ComparisonBinaryOperator":return 2;case"Identifier":return t.operator.value==="and"?1:t.operator.value==="in"||t.operator.value==="not in"?2:0}return 0}function tw(t,e="	"){const n=typeof e=="number"?" ".repeat(e):e;return It(t.body,0,n).replace(/\n$/,"")}function je(...t){return Zv+t.join(" ")+Gv}function It(t,e,n){return t.map(i=>nw(i,e,n)).join(De)}function nw(t,e,n){const i=n.repeat(e);switch(t.type){case"Program":return It(t.body,e,n);case"If":return iw(t,e,n);case"For":return ow(t,e,n);case"Set":return sw(t,e,n);case"Macro":return aw(t,e,n);case"Break":return i+je("break");case"Continue":return i+je("continue");case"CallStatement":return rw(t,e,n);case"FilterStatement":return lw(t,e,n);case"Comment":return i+"{# "+t.value+" #}";default:return i+"{{- "+te(t)+" -}}"}}function iw(t,e,n){const i=n.repeat(e),s=[];let r=t;for(;r&&(s.push({test:r.test,body:r.body}),r.alternate.length===1&&r.alternate[0].type==="If");)r=r.alternate[0];let c=i+je("if",te(s[0].test))+De+It(s[0].body,e+1,n);for(let p=1;p<s.length;++p)c+=De+i+je("elif",te(s[p].test))+De+It(s[p].body,e+1,n);return r&&r.alternate.length>0&&(c+=De+i+je("else")+De+It(r.alternate,e+1,n)),c+=De+i+je("endif"),c}function ow(t,e,n){const i=n.repeat(e);let s="";if(t.iterable.type==="SelectExpression"){const c=t.iterable;s=`${te(c.lhs)} if ${te(c.test)}`}else s=te(t.iterable);let r=i+je("for",te(t.loopvar),"in",s)+De+It(t.body,e+1,n);return t.defaultBlock.length>0&&(r+=De+i+je("else")+De+It(t.defaultBlock,e+1,n)),r+=De+i+je("endfor"),r}function sw(t,e,n){const i=n.repeat(e),s=te(t.assignee),r=t.value?te(t.value):"",c=i+je("set",`${s}${t.value?" = "+r:""}`);return t.body.length===0?c:c+De+It(t.body,e+1,n)+De+i+je("endset")}function aw(t,e,n){const i=n.repeat(e),s=t.args.map(te).join(", ");return i+je("macro",`${t.name.value}(${s})`)+De+It(t.body,e+1,n)+De+i+je("endmacro")}function rw(t,e,n){const i=n.repeat(e),s=t.callerArgs&&t.callerArgs.length>0?`(${t.callerArgs.map(te).join(", ")})`:"",r=te(t.call);let c=i+je(`call${s}`,r)+De;return c+=It(t.body,e+1,n)+De,c+=i+je("endcall"),c}function lw(t,e,n){const i=n.repeat(e),s=t.filter.type==="Identifier"?t.filter.value:te(t.filter);let r=i+je("filter",s)+De;return r+=It(t.body,e+1,n)+De,r+=i+je("endfilter"),r}function te(t,e=-1){switch(t.type){case"SpreadExpression":return`*${te(t.argument)}`;case"Identifier":return t.value;case"IntegerLiteral":return`${t.value}`;case"FloatLiteral":return`${t.value}`;case"StringLiteral":return JSON.stringify(t.value);case"BinaryExpression":{const n=t,i=ew(n),s=te(n.left,i),r=te(n.right,i+1),c=`${s} ${n.operator.value} ${r}`;return i<e?`(${c})`:c}case"UnaryExpression":{const n=t;return n.operator.value+(n.operator.value==="not"?" ":"")+te(n.argument,1/0)}case"CallExpression":{const n=t,i=n.args.map(te).join(", ");return`${te(n.callee)}(${i})`}case"MemberExpression":{const n=t;let i=te(n.object);["Identifier","MemberExpression","CallExpression","StringLiteral","IntegerLiteral","FloatLiteral","ArrayLiteral","TupleLiteral","ObjectLiteral"].includes(n.object.type)||(i=`(${i})`);let s=te(n.property);return!n.computed&&n.property.type!=="Identifier"&&(s=`(${s})`),n.computed?`${i}[${s}]`:`${i}.${s}`}case"FilterExpression":{const n=t,i=te(n.operand,1/0);return n.filter.type==="CallExpression"?`${i} | ${te(n.filter)}`:`${i} | ${n.filter.value}`}case"SelectExpression":{const n=t;return`${te(n.lhs)} if ${te(n.test)}`}case"TestExpression":{const n=t;return`${te(n.operand)} is${n.negate?" not":""} ${n.test.value}`}case"ArrayLiteral":case"TupleLiteral":{const n=t.value.map(te),i=t.type==="ArrayLiteral"?"[]":"()";return`${i[0]}${n.join(", ")}${i[1]}`}case"ObjectLiteral":return`{${Array.from(t.value.entries()).map(([i,s])=>`${te(i)}: ${te(s)}`).join(", ")}}`;case"SliceExpression":{const n=t,i=n.start?te(n.start):"",s=n.stop?te(n.stop):"",r=n.step?`:${te(n.step)}`:"";return`${i}:${s}${r}`}case"KeywordArgumentExpression":{const n=t;return`${n.key.value}=${te(n.value)}`}case"Ternary":{const n=t,i=`${te(n.trueExpr)} if ${te(n.condition,0)} else ${te(n.falseExpr)}`;return e>-1?`(${i})`:i}default:throw new Error(`Unknown expression type: ${t.type}`)}}var cw=class{parsed;constructor(t){const e=_v(t,{lstrip_blocks:!0,trim_blocks:!0});this.parsed=Fv(e)}render(t){const e=new An;if(Qv(e),t)for(const[s,r]of Object.entries(t))e.set(s,r);return new Jv(e).run(this.parsed).value}format(t){return tw(this.parsed,t?.indent||"	")}};const dw={transformers:["audio-classification","automatic-speech-recognition","depth-estimation","document-question-answering","feature-extraction","fill-mask","image-classification","image-feature-extraction","image-segmentation","image-to-image","image-to-text","image-text-to-text","mask-generation","object-detection","question-answering","summarization","table-question-answering","text-classification","text-generation","text-to-audio","text-to-speech","token-classification","translation","video-classification","visual-question-answering","zero-shot-classification","zero-shot-image-classification","zero-shot-object-detection"]},ja={"text-classification":{name:"Text Classification",subtasks:[{type:"acceptability-classification",name:"Acceptability Classification"},{type:"entity-linking-classification",name:"Entity Linking Classification"},{type:"fact-checking",name:"Fact Checking"},{type:"intent-classification",name:"Intent Classification"},{type:"language-identification",name:"Language Identification"},{type:"multi-class-classification",name:"Multi Class Classification"},{type:"multi-label-classification",name:"Multi Label Classification"},{type:"multi-input-text-classification",name:"Multi-input Text Classification"},{type:"natural-language-inference",name:"Natural Language Inference"},{type:"semantic-similarity-classification",name:"Semantic Similarity Classification"},{type:"sentiment-classification",name:"Sentiment Classification"},{type:"topic-classification",name:"Topic Classification"},{type:"semantic-similarity-scoring",name:"Semantic Similarity Scoring"},{type:"sentiment-scoring",name:"Sentiment Scoring"},{type:"sentiment-analysis",name:"Sentiment Analysis"},{type:"hate-speech-detection",name:"Hate Speech Detection"},{type:"text-scoring",name:"Text Scoring"}],modality:"nlp"},"token-classification":{name:"Token Classification",subtasks:[{type:"named-entity-recognition",name:"Named Entity Recognition"},{type:"part-of-speech",name:"Part of Speech"},{type:"parsing",name:"Parsing"},{type:"lemmatization",name:"Lemmatization"},{type:"word-sense-disambiguation",name:"Word Sense Disambiguation"},{type:"coreference-resolution",name:"Coreference-resolution"}],modality:"nlp"},"table-question-answering":{name:"Table Question Answering",modality:"nlp"},"question-answering":{name:"Question Answering",subtasks:[{type:"extractive-qa",name:"Extractive QA"},{type:"open-domain-qa",name:"Open Domain QA"},{type:"closed-domain-qa",name:"Closed Domain QA"}],modality:"nlp"},"zero-shot-classification":{name:"Zero-Shot Classification",modality:"nlp"},translation:{name:"Translation",modality:"nlp"},summarization:{name:"Summarization",subtasks:[{type:"news-articles-summarization",name:"News Articles Summarization"},{type:"news-articles-headline-generation",name:"News Articles Headline Generation"}],modality:"nlp"},"feature-extraction":{name:"Feature Extraction",modality:"nlp"},"text-generation":{name:"Text Generation",subtasks:[{type:"dialogue-modeling",name:"Dialogue Modeling"},{type:"dialogue-generation",name:"Dialogue Generation"},{type:"conversational",name:"Conversational"},{type:"language-modeling",name:"Language Modeling"},{type:"text-simplification",name:"Text simplification"},{type:"explanation-generation",name:"Explanation Generation"},{type:"abstractive-qa",name:"Abstractive QA"},{type:"open-domain-abstractive-qa",name:"Open Domain Abstractive QA"},{type:"closed-domain-qa",name:"Closed Domain QA"},{type:"open-book-qa",name:"Open Book QA"},{type:"closed-book-qa",name:"Closed Book QA"},{type:"text2text-generation",name:"Text2Text Generation"}],modality:"nlp"},"fill-mask":{name:"Fill-Mask",subtasks:[{type:"slot-filling",name:"Slot Filling"},{type:"masked-language-modeling",name:"Masked Language Modeling"}],modality:"nlp"},"sentence-similarity":{name:"Sentence Similarity",modality:"nlp"},"text-to-speech":{name:"Text-to-Speech",modality:"audio"},"text-to-audio":{name:"Text-to-Audio",modality:"audio"},"automatic-speech-recognition":{name:"Automatic Speech Recognition",modality:"audio"},"audio-to-audio":{name:"Audio-to-Audio",modality:"audio"},"audio-classification":{name:"Audio Classification",subtasks:[{type:"keyword-spotting",name:"Keyword Spotting"},{type:"speaker-identification",name:"Speaker Identification"},{type:"audio-intent-classification",name:"Audio Intent Classification"},{type:"audio-emotion-recognition",name:"Audio Emotion Recognition"},{type:"audio-language-identification",name:"Audio Language Identification"}],modality:"audio"},"audio-text-to-text":{name:"Audio-Text-to-Text",modality:"multimodal",hideInDatasets:!0},"voice-activity-detection":{name:"Voice Activity Detection",modality:"audio"},"depth-estimation":{name:"Depth Estimation",modality:"cv"},"image-classification":{name:"Image Classification",subtasks:[{type:"multi-label-image-classification",name:"Multi Label Image Classification"},{type:"multi-class-image-classification",name:"Multi Class Image Classification"}],modality:"cv"},"object-detection":{name:"Object Detection",subtasks:[{type:"face-detection",name:"Face Detection"},{type:"vehicle-detection",name:"Vehicle Detection"}],modality:"cv"},"image-segmentation":{name:"Image Segmentation",subtasks:[{type:"instance-segmentation",name:"Instance Segmentation"},{type:"semantic-segmentation",name:"Semantic Segmentation"},{type:"panoptic-segmentation",name:"Panoptic Segmentation"}],modality:"cv"},"text-to-image":{name:"Text-to-Image",modality:"cv"},"image-to-text":{name:"Image-to-Text",subtasks:[{type:"image-captioning",name:"Image Captioning"}],modality:"cv"},"image-to-image":{name:"Image-to-Image",subtasks:[{type:"image-inpainting",name:"Image Inpainting"},{type:"image-colorization",name:"Image Colorization"},{type:"super-resolution",name:"Super Resolution"}],modality:"cv"},"image-to-video":{name:"Image-to-Video",modality:"cv"},"unconditional-image-generation":{name:"Unconditional Image Generation",modality:"cv"},"video-classification":{name:"Video Classification",modality:"cv"},"reinforcement-learning":{name:"Reinforcement Learning",modality:"rl"},robotics:{name:"Robotics",modality:"rl",subtasks:[{type:"grasping",name:"Grasping"},{type:"task-planning",name:"Task Planning"}]},"tabular-classification":{name:"Tabular Classification",modality:"tabular",subtasks:[{type:"tabular-multi-class-classification",name:"Tabular Multi Class Classification"},{type:"tabular-multi-label-classification",name:"Tabular Multi Label Classification"}]},"tabular-regression":{name:"Tabular Regression",modality:"tabular",subtasks:[{type:"tabular-single-column-regression",name:"Tabular Single Column Regression"}]},"tabular-to-text":{name:"Tabular to Text",modality:"tabular",subtasks:[{type:"rdf-to-text",name:"RDF to text"}],hideInModels:!0},"table-to-text":{name:"Table to Text",modality:"nlp",hideInModels:!0},"multiple-choice":{name:"Multiple Choice",subtasks:[{type:"multiple-choice-qa",name:"Multiple Choice QA"},{type:"multiple-choice-coreference-resolution",name:"Multiple Choice Coreference Resolution"}],modality:"nlp",hideInModels:!0},"text-ranking":{name:"Text Ranking",modality:"nlp"},"text-retrieval":{name:"Text Retrieval",subtasks:[{type:"document-retrieval",name:"Document Retrieval"},{type:"utterance-retrieval",name:"Utterance Retrieval"},{type:"entity-linking-retrieval",name:"Entity Linking Retrieval"},{type:"fact-checking-retrieval",name:"Fact Checking Retrieval"}],modality:"nlp",hideInModels:!0},"time-series-forecasting":{name:"Time Series Forecasting",modality:"tabular",subtasks:[{type:"univariate-time-series-forecasting",name:"Univariate Time Series Forecasting"},{type:"multivariate-time-series-forecasting",name:"Multivariate Time Series Forecasting"}]},"text-to-video":{name:"Text-to-Video",modality:"cv"},"image-text-to-text":{name:"Image-Text-to-Text",modality:"multimodal"},"visual-question-answering":{name:"Visual Question Answering",subtasks:[{type:"visual-question-answering",name:"Visual Question Answering"}],modality:"multimodal"},"document-question-answering":{name:"Document Question Answering",subtasks:[{type:"document-question-answering",name:"Document Question Answering"}],modality:"multimodal",hideInDatasets:!0},"zero-shot-image-classification":{name:"Zero-Shot Image Classification",modality:"cv"},"graph-ml":{name:"Graph Machine Learning",modality:"other"},"mask-generation":{name:"Mask Generation",modality:"cv"},"zero-shot-object-detection":{name:"Zero-Shot Object Detection",modality:"cv"},"text-to-3d":{name:"Text-to-3D",modality:"cv"},"image-to-3d":{name:"Image-to-3D",modality:"cv"},"image-feature-extraction":{name:"Image Feature Extraction",modality:"cv"},"video-text-to-text":{name:"Video-Text-to-Text",modality:"multimodal",hideInDatasets:!1},"keypoint-detection":{name:"Keypoint Detection",subtasks:[{type:"pose-estimation",name:"Pose Estimation"}],modality:"cv",hideInDatasets:!0},"visual-document-retrieval":{name:"Visual Document Retrieval",modality:"multimodal"},"any-to-any":{name:"Any-to-Any",modality:"multimodal"},"video-to-video":{name:"Video-to-Video",modality:"cv",hideInDatasets:!0},other:{name:"Other",modality:"other",hideInModels:!0,hideInDatasets:!0}},pw=Object.keys(ja);Object.values(ja).flatMap(t=>"subtasks"in t?t.subtasks:[]).map(t=>t.type);new Set(pw);const uw={datasets:[{description:"A dataset with multiple modality input and output pairs.",id:"PKU-Alignment/align-anything"}],demo:{inputs:[{filename:"any-to-any-input.jpg",type:"img"},{label:"Text Prompt",content:"What is the significance of this place?",type:"text"}],outputs:[{label:"Generated Text",content:"The place in the picture is Osaka Castle, located in Osaka, Japan. Osaka Castle is a historic castle that was originally built in the 16th century by Toyotomi Hideyoshi, a powerful warlord of the time. It is one of the most famous landmarks in Osaka and is known for its distinctive white walls and black roof tiles. The castle has been rebuilt several times over the centuries and is now a popular tourist attraction, offering visitors a glimpse into Japan's rich history and culture.",type:"text"},{filename:"any-to-any-output.wav",type:"audio"}]},metrics:[],models:[{description:"Strong model that can take in video, audio, image, text and output text and natural speech.",id:"Qwen/Qwen2.5-Omni-7B"},{description:"Robust model that can take in image and text and generate image and text.",id:"OmniGen2/OmniGen2"},{description:"Any-to-any model with speech, video, audio, image and text understanding capabilities.",id:"openbmb/MiniCPM-o-2_6"},{description:"A model that can understand image and text and generate image and text.",id:"ByteDance-Seed/BAGEL-7B-MoT"}],spaces:[{description:"An application to chat with an any-to-any (image & text) model.",id:"OmniGen2/OmniGen2"}],summary:"Any-to-any models can understand two or more modalities and output two or more modalities.",widgetModels:[],youtubeId:""},mw={datasets:[{description:"A benchmark of 10 different audio tasks.",id:"s3prl/superb"},{description:"A dataset of YouTube clips and their sound categories.",id:"agkphysics/AudioSet"}],demo:{inputs:[{filename:"audio.wav",type:"audio"}],outputs:[{data:[{label:"Up",score:.2},{label:"Down",score:.8}],type:"chart"}]},metrics:[{description:"",id:"accuracy"},{description:"",id:"recall"},{description:"",id:"precision"},{description:"",id:"f1"}],models:[{description:"An easy-to-use model for command recognition.",id:"speechbrain/google_speech_command_xvector"},{description:"An emotion recognition model.",id:"ehcalabres/wav2vec2-lg-xlsr-en-speech-emotion-recognition"},{description:"A language identification model.",id:"facebook/mms-lid-126"}],spaces:[{description:"An application that can classify music into different genre.",id:"kurianbenoy/audioclassification"}],summary:"Audio classification is the task of assigning a label or class to a given audio. It can be used for recognizing which command a user is giving or the emotion of a statement, as well as identifying a speaker.",widgetModels:["MIT/ast-finetuned-audioset-10-10-0.4593"],youtubeId:"KWwzcmG98Ds"},fw={datasets:[{description:"A dataset containing audio conversations with question–answer pairs.",id:"nvidia/AF-Think"},{description:"A more advanced and comprehensive dataset that contains characteristics of the audio as well",id:"tsinghua-ee/QualiSpeech"}],demo:{inputs:[{filename:"audio.wav",type:"audio"},{label:"Text Prompt",content:"What is the gender of the speaker?",type:"text"}],outputs:[{label:"Generated Text",content:"The gender of the speaker is female.",type:"text"}]},metrics:[],models:[{description:"A lightweight model that has capabilities of taking both audio and text as inputs and generating responses.",id:"fixie-ai/ultravox-v0_5-llama-3_2-1b"},{description:"A multimodal model that supports voice chat and audio analysis.",id:"Qwen/Qwen2-Audio-7B-Instruct"},{description:"A model for audio understanding, speech translation, and transcription.",id:"mistralai/Voxtral-Small-24B-2507"},{description:"A new model capable of audio question answering and reasoning.",id:"nvidia/audio-flamingo-3"}],spaces:[{description:"A space that takes input as both audio and text and generates answers.",id:"iamomtiwari/ATTT"},{description:"A web application that demonstrates chatting with the Qwen2Audio Model.",id:"freddyaboulton/talk-to-qwen-webrtc"}],summary:"Audio-text-to-text models take both an audio clip and a text prompt as input, and generate natural language text as output. These models can answer questions about spoken content, summarize meetings, analyze music, or interpret speech beyond simple transcription. They are useful for applications that combine speech understanding with reasoning or conversation.",widgetModels:[],youtubeId:""},hw={datasets:[{description:"512-element X-vector embeddings of speakers from CMU ARCTIC dataset.",id:"Matthijs/cmu-arctic-xvectors"}],demo:{inputs:[{filename:"input.wav",type:"audio"}],outputs:[{filename:"label-0.wav",type:"audio"},{filename:"label-1.wav",type:"audio"}]},metrics:[{description:"The Signal-to-Noise ratio is the relationship between the target signal level and the background noise level. It is calculated as the logarithm of the target signal divided by the background noise, in decibels.",id:"snri"},{description:"The Signal-to-Distortion ratio is the relationship between the target signal and the sum of noise, interference, and artifact errors",id:"sdri"}],models:[{description:"A speech enhancement model.",id:"ResembleAI/resemble-enhance"},{description:"A model that can change the voice in a speech recording.",id:"microsoft/speecht5_vc"}],spaces:[{description:"An application for speech separation.",id:"younver/speechbrain-speech-separation"},{description:"An application for audio style transfer.",id:"nakas/audio-diffusion_style_transfer"}],summary:"Audio-to-Audio is a family of tasks in which the input is an audio and the output is one or multiple generated audios. Some example tasks are speech enhancement and source separation.",widgetModels:["speechbrain/sepformer-wham"],youtubeId:"iohj7nCCYoM"},gw={datasets:[{description:"31,175 hours of multilingual audio-text dataset in 108 languages.",id:"mozilla-foundation/common_voice_17_0"},{description:"Multilingual and diverse audio dataset with 101k hours of audio.",id:"amphion/Emilia-Dataset"},{description:"A dataset with 44.6k hours of English speaker data and 6k hours of other language speakers.",id:"parler-tts/mls_eng"},{description:"A multilingual audio dataset with 370K hours of audio.",id:"espnet/yodas"}],demo:{inputs:[{filename:"input.flac",type:"audio"}],outputs:[{label:"Transcript",content:"Going along slushy country roads and speaking to damp audiences in...",type:"text"}]},metrics:[{description:"",id:"wer"},{description:"",id:"cer"}],models:[{description:"A powerful ASR model by OpenAI.",id:"openai/whisper-large-v3"},{description:"A good generic speech model by MetaAI for fine-tuning.",id:"facebook/w2v-bert-2.0"},{description:"An end-to-end model that performs ASR and Speech Translation by MetaAI.",id:"facebook/seamless-m4t-v2-large"},{description:"A powerful multilingual ASR and Speech Translation model by Nvidia.",id:"nvidia/canary-1b"},{description:"Powerful speaker diarization model.",id:"pyannote/speaker-diarization-3.1"}],spaces:[{description:"A powerful general-purpose speech recognition application.",id:"hf-audio/whisper-large-v3"},{description:"Latest ASR model from Useful Sensors.",id:"mrfakename/Moonshinex"},{description:"A high quality speech and text translation model by Meta.",id:"facebook/seamless_m4t"},{description:"A powerful multilingual ASR and Speech Translation model by Nvidia",id:"nvidia/canary-1b"}],summary:"Automatic Speech Recognition (ASR), also known as Speech to Text (STT), is the task of transcribing a given audio to text. It has many applications, such as voice user interfaces.",widgetModels:["openai/whisper-large-v3"],youtubeId:"TksaY_FDgnk"},bw={datasets:[{description:"Largest document understanding dataset.",id:"HuggingFaceM4/Docmatix"},{description:"Dataset from the 2020 DocVQA challenge. The documents are taken from the UCSF Industry Documents Library.",id:"eliolio/docvqa"}],demo:{inputs:[{label:"Question",content:"What is the idea behind the consumer relations efficiency team?",type:"text"},{filename:"document-question-answering-input.png",type:"img"}],outputs:[{label:"Answer",content:"Balance cost efficiency with quality customer service",type:"text"}]},metrics:[{description:"The evaluation metric for the DocVQA challenge is the Average Normalized Levenshtein Similarity (ANLS). This metric is flexible to character regognition errors and compares the predicted answer with the ground truth answer.",id:"anls"},{description:"Exact Match is a metric based on the strict character match of the predicted answer and the right answer. For answers predicted correctly, the Exact Match will be 1. Even if only one character is different, Exact Match will be 0",id:"exact-match"}],models:[{description:"A robust document question answering model.",id:"impira/layoutlm-document-qa"},{description:"A document question answering model specialized in invoices.",id:"impira/layoutlm-invoices"},{description:"A special model for OCR-free document question answering.",id:"microsoft/udop-large"},{description:"A powerful model for document question answering.",id:"google/pix2struct-docvqa-large"}],spaces:[{description:"A robust document question answering application.",id:"impira/docquery"},{description:"An application that can answer questions from invoices.",id:"impira/invoices"},{description:"An application to compare different document question answering models.",id:"merve/compare_docvqa_models"}],summary:"Document Question Answering (also known as Document Visual Question Answering) is the task of answering questions on document images. Document question answering models take a (document, question) pair as input and return an answer in natural language. Models usually rely on multi-modal features, combining text, position of words (bounding-boxes) and image.",widgetModels:["impira/layoutlm-invoices"],youtubeId:""},_w={datasets:[{description:"Wikipedia dataset containing cleaned articles of all languages. Can be used to train `feature-extraction` models.",id:"wikipedia"}],demo:{inputs:[{label:"Input",content:"India, officially the Republic of India, is a country in South Asia.",type:"text"}],outputs:[{table:[["Dimension 1","Dimension 2","Dimension 3"],["2.583383083343506","2.757075071334839","0.9023529887199402"],["8.29393482208252","1.1071064472198486","2.03399395942688"],["-0.7754912972450256","-1.647324562072754","-0.6113331913948059"],["0.07087723910808563","1.5942802429199219","1.4610432386398315"]],type:"tabular"}]},metrics:[],models:[{description:"A powerful feature extraction model for natural language processing tasks.",id:"thenlper/gte-large"},{description:"A strong feature extraction model for retrieval.",id:"Alibaba-NLP/gte-Qwen1.5-7B-instruct"}],spaces:[{description:"A leaderboard to rank text feature extraction models based on a benchmark.",id:"mteb/leaderboard"},{description:"A leaderboard to rank best feature extraction models based on human feedback.",id:"mteb/arena"}],summary:"Feature extraction is the task of extracting features learnt in a model.",widgetModels:["facebook/bart-base"]},yw={datasets:[{description:"A common dataset that is used to train models for many languages.",id:"wikipedia"},{description:"A large English dataset with text crawled from the web.",id:"c4"}],demo:{inputs:[{label:"Input",content:"The <mask> barked at me",type:"text"}],outputs:[{type:"chart",data:[{label:"wolf",score:.487},{label:"dog",score:.061},{label:"cat",score:.058},{label:"fox",score:.047},{label:"squirrel",score:.025}]}]},metrics:[{description:"Cross Entropy is a metric that calculates the difference between two probability distributions. Each probability distribution is the distribution of predicted words",id:"cross_entropy"},{description:"Perplexity is the exponential of the cross-entropy loss. It evaluates the probabilities assigned to the next word by the model. Lower perplexity indicates better performance",id:"perplexity"}],models:[{description:"State-of-the-art masked language model.",id:"answerdotai/ModernBERT-large"},{description:"A multilingual model trained on 100 languages.",id:"FacebookAI/xlm-roberta-base"}],spaces:[],summary:"Masked language modeling is the task of masking some of the words in a sentence and predicting which words should replace those masks. These models are useful when we want to get a statistical understanding of the language in which the model is trained in.",widgetModels:["distilroberta-base"],youtubeId:"mqElG5QJWUg"},vw={datasets:[{description:"Benchmark dataset used for image classification with images that belong to 100 classes.",id:"cifar100"},{description:"Dataset consisting of images of garments.",id:"fashion_mnist"}],demo:{inputs:[{filename:"image-classification-input.jpeg",type:"img"}],outputs:[{type:"chart",data:[{label:"Egyptian cat",score:.514},{label:"Tabby cat",score:.193},{label:"Tiger cat",score:.068}]}]},metrics:[{description:"",id:"accuracy"},{description:"",id:"recall"},{description:"",id:"precision"},{description:"",id:"f1"}],models:[{description:"A strong image classification model.",id:"google/vit-base-patch16-224"},{description:"A robust image classification model.",id:"facebook/deit-base-distilled-patch16-224"},{description:"A strong image classification model.",id:"facebook/convnext-large-224"}],spaces:[{description:"A leaderboard to evaluate different image classification models.",id:"timm/leaderboard"}],summary:"Image classification is the task of assigning a label or class to an entire image. Images are expected to have only one class for each image. Image classification models take an image as input and return a prediction about which class the image belongs to.",widgetModels:["google/vit-base-patch16-224"],youtubeId:"tjAIM7BOYhw"},ww={datasets:[{description:"ImageNet-1K is a image classification dataset in which images are used to train image-feature-extraction models.",id:"imagenet-1k"}],demo:{inputs:[{filename:"mask-generation-input.png",type:"img"}],outputs:[{table:[["Dimension 1","Dimension 2","Dimension 3"],["0.21236686408519745","1.0919708013534546","0.8512550592422485"],["0.809657871723175","-0.18544459342956543","-0.7851548194885254"],["1.3103108406066895","-0.2479034662246704","-0.9107287526130676"],["1.8536205291748047","-0.36419737339019775","0.09717650711536407"]],type:"tabular"}]},metrics:[],models:[{description:"A powerful image feature extraction model.",id:"timm/vit_large_patch14_dinov2.lvd142m"},{description:"A strong image feature extraction model.",id:"nvidia/MambaVision-T-1K"},{description:"A robust image feature extraction model.",id:"facebook/dino-vitb16"},{description:"Cutting-edge image feature extraction model.",id:"apple/aimv2-large-patch14-336-distilled"},{description:"Strong image feature extraction model that can be used on images and documents.",id:"OpenGVLab/InternViT-6B-448px-V1-2"}],spaces:[{description:"A leaderboard to evaluate different image-feature-extraction models on classification performances",id:"timm/leaderboard"}],summary:"Image feature extraction is the task of extracting features learnt in a computer vision model.",widgetModels:[]},xw={datasets:[{description:"Synthetic dataset, for image relighting",id:"VIDIT"},{description:"Multiple images of celebrities, used for facial expression translation",id:"huggan/CelebA-faces"},{description:"12M image-caption pairs.",id:"Spawning/PD12M"}],demo:{inputs:[{filename:"image-to-image-input.jpeg",type:"img"}],outputs:[{filename:"image-to-image-output.png",type:"img"}]},isPlaceholder:!1,metrics:[{description:"Peak Signal to Noise Ratio (PSNR) is an approximation of the human perception, considering the ratio of the absolute intensity with respect to the variations. Measured in dB, a high value indicates a high fidelity.",id:"PSNR"},{description:"Structural Similarity Index (SSIM) is a perceptual metric which compares the luminance, contrast and structure of two images. The values of SSIM range between -1 and 1, and higher values indicate closer resemblance to the original image.",id:"SSIM"},{description:"Inception Score (IS) is an analysis of the labels predicted by an image classification model when presented with a sample of the generated images.",id:"IS"}],models:[{description:"An image-to-image model to improve image resolution.",id:"fal/AuraSR-v2"},{description:"Powerful image editing model.",id:"black-forest-labs/FLUX.1-Kontext-dev"},{description:"Virtual try-on model.",id:"yisol/IDM-VTON"},{description:"Image re-lighting model.",id:"kontext-community/relighting-kontext-dev-lora-v3"},{description:"Strong model for inpainting and outpainting.",id:"black-forest-labs/FLUX.1-Fill-dev"},{description:"Strong model for image editing using depth maps.",id:"black-forest-labs/FLUX.1-Depth-dev-lora"}],spaces:[{description:"Image editing application.",id:"black-forest-labs/FLUX.1-Kontext-Dev"},{description:"Image relighting application.",id:"lllyasviel/iclight-v2-vary"},{description:"An application for image upscaling.",id:"jasperai/Flux.1-dev-Controlnet-Upscaler"}],summary:"Image-to-image is the task of transforming an input image through a variety of possible manipulations and enhancements, such as super-resolution, image inpainting, colorization, and more.",widgetModels:["Qwen/Qwen-Image"],youtubeId:""},Aw={datasets:[{description:"Dataset from 12M image-text of Reddit",id:"red_caps"},{description:"Dataset from 3.3M images of Google",id:"datasets/conceptual_captions"}],demo:{inputs:[{filename:"savanna.jpg",type:"img"}],outputs:[{label:"Detailed description",content:"a herd of giraffes and zebras grazing in a field",type:"text"}]},metrics:[],models:[{description:"Strong OCR model.",id:"allenai/olmOCR-7B-0725"},{description:"Powerful image captioning model.",id:"fancyfeast/llama-joycaption-beta-one-hf-llava"}],spaces:[{description:"SVG generator app from images.",id:"multimodalart/OmniSVG-3B"},{description:"An application that converts documents to markdown.",id:"numind/NuMarkdown-8B-Thinking"},{description:"An application that can caption images.",id:"fancyfeast/joy-caption-beta-one"}],summary:"Image to text models output a text from a given image. Image captioning or optical character recognition can be considered as the most common applications of image to text.",widgetModels:["Salesforce/blip-image-captioning-large"],youtubeId:""},Ew={datasets:[{description:"Instructions composed of image and text.",id:"liuhaotian/LLaVA-Instruct-150K"},{description:"Collection of image-text pairs on scientific topics.",id:"DAMO-NLP-SG/multimodal_textbook"},{description:"A collection of datasets made for model fine-tuning.",id:"HuggingFaceM4/the_cauldron"},{description:"Screenshots of websites with their HTML/CSS codes.",id:"HuggingFaceM4/WebSight"}],demo:{inputs:[{filename:"image-text-to-text-input.png",type:"img"},{label:"Text Prompt",content:"Describe the position of the bee in detail.",type:"text"}],outputs:[{label:"Answer",content:"The bee is sitting on a pink flower, surrounded by other flowers. The bee is positioned in the center of the flower, with its head and front legs sticking out.",type:"text"}]},metrics:[],models:[{description:"Small and efficient yet powerful vision language model.",id:"HuggingFaceTB/SmolVLM-Instruct"},{description:"Cutting-edge reasoning vision language model.",id:"zai-org/GLM-4.5V"},{description:"Cutting-edge small vision language model to convert documents to text.",id:"rednote-hilab/dots.ocr"},{description:"Small yet powerful model.",id:"Qwen/Qwen2.5-VL-3B-Instruct"},{description:"Image-text-to-text model with agentic capabilities.",id:"microsoft/Magma-8B"}],spaces:[{description:"Leaderboard to evaluate vision language models.",id:"opencompass/open_vlm_leaderboard"},{description:"An application that compares object detection capabilities of different vision language models.",id:"sergiopaniego/vlm_object_understanding"},{description:"An application to compare different OCR models.",id:"prithivMLmods/Multimodal-OCR"}],summary:"Image-text-to-text models take in an image and text prompt and output text. These models are also called vision-language models, or VLMs. The difference from image-to-text models is that these models take an additional text input, not restricting the model to certain use cases like image captioning, and may also be trained to accept a conversation as input.",widgetModels:["zai-org/GLM-4.5V"],youtubeId:"IoGaGfU1CIg"},kw={datasets:[{description:"Scene segmentation dataset.",id:"scene_parse_150"}],demo:{inputs:[{filename:"image-segmentation-input.jpeg",type:"img"}],outputs:[{filename:"image-segmentation-output.png",type:"img"}]},metrics:[{description:"Average Precision (AP) is the Area Under the PR Curve (AUC-PR). It is calculated for each semantic class separately",id:"Average Precision"},{description:"Mean Average Precision (mAP) is the overall average of the AP values",id:"Mean Average Precision"},{description:"Intersection over Union (IoU) is the overlap of segmentation masks. Mean IoU is the average of the IoU of all semantic classes",id:"Mean Intersection over Union"},{description:"APα is the Average Precision at the IoU threshold of a α value, for example, AP50 and AP75",id:"APα"}],models:[{description:"Solid panoptic segmentation model trained on COCO.",id:"tue-mps/coco_panoptic_eomt_large_640"},{description:"Background removal model.",id:"briaai/RMBG-1.4"},{description:"A multipurpose image segmentation model for high resolution images.",id:"ZhengPeng7/BiRefNet"},{description:"Powerful human-centric image segmentation model.",id:"facebook/sapiens-seg-1b"},{description:"Panoptic segmentation model trained on the COCO (common objects) dataset.",id:"facebook/mask2former-swin-large-coco-panoptic"}],spaces:[{description:"A semantic segmentation application that can predict unseen instances out of the box.",id:"facebook/ov-seg"},{description:"One of the strongest segmentation applications.",id:"jbrinkma/segment-anything"},{description:"A human-centric segmentation model.",id:"facebook/sapiens-pose"},{description:"An instance segmentation application to predict neuronal cell types from microscopy images.",id:"rashmi/sartorius-cell-instance-segmentation"},{description:"An application that segments videos.",id:"ArtGAN/Segment-Anything-Video"},{description:"An panoptic segmentation application built for outdoor environments.",id:"segments/panoptic-segment-anything"}],summary:"Image Segmentation divides an image into segments where each pixel in the image is mapped to an object. This task has multiple variants such as instance segmentation, panoptic segmentation and semantic segmentation.",widgetModels:["nvidia/segformer-b0-finetuned-ade-512-512"],youtubeId:"dKE8SIt9C-w"},Tw={datasets:[{description:"A benchmark dataset for reference image controlled video generation.",id:"ali-vilab/VACE-Benchmark"},{description:"A dataset of video generation style preferences.",id:"Rapidata/sora-video-generation-style-likert-scoring"},{description:"A dataset with videos and captions throughout the videos.",id:"BestWishYsh/ChronoMagic"}],demo:{inputs:[{filename:"image-to-video-input.jpg",type:"img"},{label:"Optional Text Prompt",content:"This penguin is dancing",type:"text"}],outputs:[{filename:"image-to-video-output.gif",type:"img"}]},metrics:[{description:"Fréchet Video Distance (FVD) measures the perceptual similarity between the distributions of generated videos and a set of real videos, assessing overall visual quality and temporal coherence of the video generated from an input image.",id:"fvd"},{description:"CLIP Score measures the semantic similarity between a textual prompt (if provided alongside the input image) and the generated video frames. It evaluates how well the video's generated content and motion align with the textual description, conditioned on the initial image.",id:"clip_score"},{description:"First Frame Fidelity, often measured using LPIPS (Learned Perceptual Image Patch Similarity), PSNR, or SSIM, quantifies how closely the first frame of the generated video matches the input conditioning image.",id:"lpips"},{description:"Identity Preservation Score measures the consistency of identity (e.g., a person's face or a specific object's characteristics) between the input image and throughout the generated video frames, often calculated using features from specialized models like face recognition (e.g., ArcFace) or re-identification models.",id:"identity_preservation"},{description:"Motion Score evaluates the quality, realism, and temporal consistency of motion in the video generated from a static image. This can be based on optical flow analysis (e.g., smoothness, magnitude), consistency of object trajectories, or specific motion plausibility assessments.",id:"motion_score"}],models:[{description:"LTX-Video, a 13B parameter model for high quality video generation",id:"Lightricks/LTX-Video-0.9.7-dev"},{description:"A 14B parameter model for reference image controlled video generation",id:"Wan-AI/Wan2.1-VACE-14B"},{description:"An image-to-video generation model using FramePack F1 methodology with Hunyuan-DiT architecture",id:"lllyasviel/FramePack_F1_I2V_HY_20250503"},{description:"A distilled version of the LTX-Video-0.9.7-dev model for faster inference",id:"Lightricks/LTX-Video-0.9.7-distilled"},{description:"An image-to-video generation model by Skywork AI, 14B parameters, producing 720p videos.",id:"Skywork/SkyReels-V2-I2V-14B-720P"},{description:"Image-to-video variant of Tencent's HunyuanVideo.",id:"tencent/HunyuanVideo-I2V"},{description:"A 14B parameter model for 720p image-to-video generation by Wan-AI.",id:"Wan-AI/Wan2.1-I2V-14B-720P"},{description:"A Diffusers version of the Wan2.1-I2V-14B-720P model for 720p image-to-video generation.",id:"Wan-AI/Wan2.1-I2V-14B-720P-Diffusers"}],spaces:[{description:"An application to generate videos fast.",id:"Lightricks/ltx-video-distilled"},{description:"Generate videos with the FramePack-F1",id:"linoyts/FramePack-F1"},{description:"Generate videos with the FramePack",id:"lisonallen/framepack-i2v"},{description:"Wan2.1 with CausVid LoRA",id:"multimodalart/wan2-1-fast"},{description:"A demo for Stable Video Diffusion",id:"multimodalart/stable-video-diffusion"}],summary:"Image-to-video models take a still image as input and generate a video. These models can be guided by text prompts to influence the content and style of the output video.",widgetModels:[],youtubeId:void 0},Iw={datasets:[{description:"Widely used benchmark dataset for multiple Vision tasks.",id:"merve/coco2017"},{description:"Medical Imaging dataset of the Human Brain for segmentation and mask generating tasks",id:"rocky93/BraTS_segmentation"}],demo:{inputs:[{filename:"mask-generation-input.png",type:"img"}],outputs:[{filename:"mask-generation-output.png",type:"img"}]},metrics:[{description:"IoU is used to measure the overlap between predicted mask and the ground truth mask.",id:"Intersection over Union (IoU)"}],models:[{description:"Small yet powerful mask generation model.",id:"Zigeng/SlimSAM-uniform-50"},{description:"Very strong mask generation model.",id:"facebook/sam2-hiera-large"}],spaces:[{description:"An application that combines a mask generation model with a zero-shot object detection model for text-guided image segmentation.",id:"merve/OWLSAM2"},{description:"An application that compares the performance of a large and a small mask generation model.",id:"merve/slimsam"},{description:"An application based on an improved mask generation model.",id:"SkalskiP/segment-anything-model-2"},{description:"An application to remove objects from videos using mask generation models.",id:"SkalskiP/SAM_and_ProPainter"}],summary:"Mask generation is the task of generating masks that identify a specific object or region of interest in a given image. Masks are often used in segmentation tasks, where they provide a precise way to isolate the object of interest for further processing or analysis.",widgetModels:[],youtubeId:""},Sw={datasets:[{description:"Widely used benchmark dataset for multiple vision tasks.",id:"merve/coco2017"},{description:"Multi-task computer vision benchmark.",id:"merve/pascal-voc"}],demo:{inputs:[{filename:"object-detection-input.jpg",type:"img"}],outputs:[{filename:"object-detection-output.jpg",type:"img"}]},metrics:[{description:"The Average Precision (AP) metric is the Area Under the PR Curve (AUC-PR). It is calculated for each class separately",id:"Average Precision"},{description:"The Mean Average Precision (mAP) metric is the overall average of the AP values",id:"Mean Average Precision"},{description:"The APα metric is the Average Precision at the IoU threshold of a α value, for example, AP50 and AP75",id:"APα"}],models:[{description:"Solid object detection model pre-trained on the COCO 2017 dataset.",id:"facebook/detr-resnet-50"},{description:"Accurate object detection model.",id:"IDEA-Research/dab-detr-resnet-50"},{description:"Fast and accurate object detection model.",id:"PekingU/rtdetr_v2_r50vd"},{description:"Object detection model for low-lying objects.",id:"StephanST/WALDO30"}],spaces:[{description:"Real-time object detection demo.",id:"Roboflow/RF-DETR"},{description:"An application that contains various object detection models to try from.",id:"Gradio-Blocks/Object-Detection-With-DETR-and-YOLOS"},{description:"A cutting-edge object detection application.",id:"sunsmarterjieleaf/yolov12"},{description:"An object tracking, segmentation and inpainting application.",id:"VIPLab/Track-Anything"},{description:"Very fast object tracking application based on object detection.",id:"merve/RT-DETR-tracking-coco"}],summary:"Object Detection models allow users to identify objects of certain defined classes. Object detection models receive an image as input and output the images with bounding boxes and labels on detected objects.",widgetModels:["facebook/detr-resnet-50"],youtubeId:"WdAeKSOpxhw"},Cw={datasets:[{description:"NYU Depth V2 Dataset: Video dataset containing both RGB and depth sensor data.",id:"sayakpaul/nyu_depth_v2"},{description:"Monocular depth estimation benchmark based without noise and errors.",id:"depth-anything/DA-2K"}],demo:{inputs:[{filename:"depth-estimation-input.jpg",type:"img"}],outputs:[{filename:"depth-estimation-output.png",type:"img"}]},metrics:[],models:[{description:"Cutting-edge depth estimation model.",id:"depth-anything/Depth-Anything-V2-Large"},{description:"A strong monocular depth estimation model.",id:"jingheya/lotus-depth-g-v1-0"},{description:"A depth estimation model that predicts depth in videos.",id:"tencent/DepthCrafter"},{description:"A robust depth estimation model.",id:"apple/DepthPro-hf"}],spaces:[{description:"An application that predicts the depth of an image and then reconstruct the 3D model as voxels.",id:"radames/dpt-depth-estimation-3d-voxels"},{description:"An application for bleeding-edge depth estimation.",id:"akhaliq/depth-pro"},{description:"An application on cutting-edge depth estimation in videos.",id:"tencent/DepthCrafter"},{description:"A human-centric depth estimation application.",id:"facebook/sapiens-depth"}],summary:"Depth estimation is the task of predicting depth of the objects present in an image.",widgetModels:[""],youtubeId:""},Pw={datasets:[],demo:{inputs:[],outputs:[]},isPlaceholder:!0,metrics:[],models:[],spaces:[],summary:"",widgetModels:[],youtubeId:void 0,canonicalId:void 0},Ow={datasets:[{description:"A curation of widely used datasets for Data Driven Deep Reinforcement Learning (D4RL)",id:"edbeeching/decision_transformer_gym_replay"}],demo:{inputs:[{label:"State",content:"Red traffic light, pedestrians are about to pass.",type:"text"}],outputs:[{label:"Action",content:"Stop the car.",type:"text"},{label:"Next State",content:"Yellow light, pedestrians have crossed.",type:"text"}]},metrics:[{description:"Accumulated reward across all time steps discounted by a factor that ranges between 0 and 1 and determines how much the agent optimizes for future relative to immediate rewards. Measures how good is the policy ultimately found by a given algorithm considering uncertainty over the future.",id:"Discounted Total Reward"},{description:"Average return obtained after running the policy for a certain number of evaluation episodes. As opposed to total reward, mean reward considers how much reward a given algorithm receives while learning.",id:"Mean Reward"},{description:"Measures how good a given algorithm is after a predefined time. Some algorithms may be guaranteed to converge to optimal behavior across many time steps. However, an agent that reaches an acceptable level of optimality after a given time horizon may be preferable to one that ultimately reaches optimality but takes a long time.",id:"Level of Performance After Some Time"}],models:[{description:"A Reinforcement Learning model trained on expert data from the Gym Hopper environment",id:"edbeeching/decision-transformer-gym-hopper-expert"},{description:"A PPO agent playing seals/CartPole-v0 using the stable-baselines3 library and the RL Zoo.",id:"HumanCompatibleAI/ppo-seals-CartPole-v0"}],spaces:[{description:"An application for a cute puppy agent learning to catch a stick.",id:"ThomasSimonini/Huggy"},{description:"An application to play Snowball Fight with a reinforcement learning agent.",id:"ThomasSimonini/SnowballFight"}],summary:"Reinforcement learning is the computational approach of learning from action by interacting with an environment through trial and error and receiving rewards (negative or positive) as feedback",widgetModels:[],youtubeId:"q0BiUn5LiBc"},Dw={datasets:[{description:"A famous question answering dataset based on English articles from Wikipedia.",id:"squad_v2"},{description:"A dataset of aggregated anonymized actual queries issued to the Google search engine.",id:"natural_questions"}],demo:{inputs:[{label:"Question",content:"Which name is also used to describe the Amazon rainforest in English?",type:"text"},{label:"Context",content:"The Amazon rainforest, also known in English as Amazonia or the Amazon Jungle",type:"text"}],outputs:[{label:"Answer",content:"Amazonia",type:"text"}]},metrics:[{description:"Exact Match is a metric based on the strict character match of the predicted answer and the right answer. For answers predicted correctly, the Exact Match will be 1. Even if only one character is different, Exact Match will be 0",id:"exact-match"},{description:" The F1-Score metric is useful if we value both false positives and false negatives equally. The F1-Score is calculated on each word in the predicted sequence against the correct answer",id:"f1"}],models:[{description:"A robust baseline model for most question answering domains.",id:"deepset/roberta-base-squad2"},{description:"Small yet robust model that can answer questions.",id:"distilbert/distilbert-base-cased-distilled-squad"},{description:"A special model that can answer questions from tables.",id:"google/tapas-base-finetuned-wtq"}],spaces:[{description:"An application that can answer a long question from Wikipedia.",id:"deepset/wikipedia-assistant"}],summary:"Question Answering models can retrieve the answer to a question from a given text, which is useful for searching for an answer in a document. Some question answering models can generate answers without context!",widgetModels:["deepset/roberta-base-squad2"],youtubeId:"ajPx5LwJD-I"},Lw={datasets:[{description:"Bing queries with relevant passages from various web sources.",id:"microsoft/ms_marco"}],demo:{inputs:[{label:"Source sentence",content:"Machine learning is so easy.",type:"text"},{label:"Sentences to compare to",content:"Deep learning is so straightforward.",type:"text"},{label:"",content:"This is so difficult, like rocket science.",type:"text"},{label:"",content:"I can't believe how much I struggled with this.",type:"text"}],outputs:[{type:"chart",data:[{label:"Deep learning is so straightforward.",score:.623},{label:"This is so difficult, like rocket science.",score:.413},{label:"I can't believe how much I struggled with this.",score:.256}]}]},metrics:[{description:"Reciprocal Rank is a measure used to rank the relevancy of documents given a set of documents. Reciprocal Rank is the reciprocal of the rank of the document retrieved, meaning, if the rank is 3, the Reciprocal Rank is 0.33. If the rank is 1, the Reciprocal Rank is 1",id:"Mean Reciprocal Rank"},{description:"The similarity of the embeddings is evaluated mainly on cosine similarity. It is calculated as the cosine of the angle between two vectors. It is particularly useful when your texts are not the same length",id:"Cosine Similarity"}],models:[{description:"This model works well for sentences and paragraphs and can be used for clustering/grouping and semantic searches.",id:"sentence-transformers/all-mpnet-base-v2"},{description:"A multilingual robust sentence similarity model.",id:"BAAI/bge-m3"},{description:"A robust sentence similarity model.",id:"HIT-TMG/KaLM-embedding-multilingual-mini-instruct-v1.5"}],spaces:[{description:"An application that leverages sentence similarity to answer questions from YouTube videos.",id:"Gradio-Blocks/Ask_Questions_To_YouTube_Videos"},{description:"An application that retrieves relevant PubMed abstracts for a given online article which can be used as further references.",id:"Gradio-Blocks/pubmed-abstract-retriever"},{description:"An application that leverages sentence similarity to summarize text.",id:"nickmuchi/article-text-summarizer"},{description:"A guide that explains how Sentence Transformers can be used for semantic search.",id:"sentence-transformers/Sentence_Transformers_for_semantic_search"}],summary:"Sentence Similarity is the task of determining how similar two texts are. Sentence similarity models convert input texts into vectors (embeddings) that capture semantic information and calculate how close (similar) they are between them. This task is particularly useful for information retrieval and clustering/grouping.",widgetModels:["sentence-transformers/all-MiniLM-L6-v2"],youtubeId:"VCZq5AkbNEU"},$w={canonicalId:"text-generation",datasets:[{description:"News articles in five different languages along with their summaries. Widely used for benchmarking multilingual summarization models.",id:"mlsum"},{description:"English conversations and their summaries. Useful for benchmarking conversational agents.",id:"samsum"}],demo:{inputs:[{label:"Input",content:"The tower is 324 metres (1,063 ft) tall, about the same height as an 81-storey building, and the tallest structure in Paris. Its base is square, measuring 125 metres (410 ft) on each side. It was the first structure to reach a height of 300 metres. Excluding transmitters, the Eiffel Tower is the second tallest free-standing structure in France after the Millau Viaduct.",type:"text"}],outputs:[{label:"Output",content:"The tower is 324 metres (1,063 ft) tall, about the same height as an 81-storey building. It was the first structure to reach a height of 300 metres.",type:"text"}]},metrics:[{description:"The generated sequence is compared against its summary, and the overlap of tokens are counted. ROUGE-N refers to overlap of N subsequent tokens, ROUGE-1 refers to overlap of single tokens and ROUGE-2 is the overlap of two subsequent tokens.",id:"rouge"}],models:[{description:"A strong summarization model trained on English news articles. Excels at generating factual summaries.",id:"facebook/bart-large-cnn"},{description:"A summarization model trained on medical articles.",id:"Falconsai/medical_summarization"}],spaces:[{description:"An application that can summarize long paragraphs.",id:"pszemraj/summarize-long-text"},{description:"A much needed summarization application for terms and conditions.",id:"ml6team/distilbart-tos-summarizer-tosdr"},{description:"An application that summarizes long documents.",id:"pszemraj/document-summarization"},{description:"An application that can detect errors in abstractive summarization.",id:"ml6team/post-processing-summarization"}],summary:"Summarization is the task of producing a shorter version of a document while preserving its important information. Some models can extract text from the original input, while other models can generate entirely new text.",widgetModels:["facebook/bart-large-cnn"],youtubeId:"yHnr5Dk2zCI"},Nw={datasets:[{description:"The WikiTableQuestions dataset is a large-scale dataset for the task of question answering on semi-structured tables.",id:"wikitablequestions"},{description:"WikiSQL is a dataset of 80654 hand-annotated examples of questions and SQL queries distributed across 24241 tables from Wikipedia.",id:"wikisql"}],demo:{inputs:[{table:[["Rank","Name","No.of reigns","Combined days"],["1","lou Thesz","3","3749"],["2","Ric Flair","8","3103"],["3","Harley Race","7","1799"]],type:"tabular"},{label:"Question",content:"What is the number of reigns for Harley Race?",type:"text"}],outputs:[{label:"Result",content:"7",type:"text"}]},metrics:[{description:"Checks whether the predicted answer(s) is the same as the ground-truth answer(s).",id:"Denotation Accuracy"}],models:[{description:"A table question answering model that is capable of neural SQL execution, i.e., employ TAPEX to execute a SQL query on a given table.",id:"microsoft/tapex-base"},{description:"A robust table question answering model.",id:"google/tapas-base-finetuned-wtq"}],spaces:[{description:"An application that answers questions based on table CSV files.",id:"katanaml/table-query"}],summary:"Table Question Answering (Table QA) is the answering a question about an information on a given table.",widgetModels:["google/tapas-base-finetuned-wtq"]},Rw={datasets:[{description:"A comprehensive curation of datasets covering all benchmarks.",id:"inria-soda/tabular-benchmark"}],demo:{inputs:[{table:[["Glucose","Blood Pressure ","Skin Thickness","Insulin","BMI"],["148","72","35","0","33.6"],["150","50","30","0","35.1"],["141","60","29","1","39.2"]],type:"tabular"}],outputs:[{table:[["Diabetes"],["1"],["1"],["0"]],type:"tabular"}]},metrics:[{description:"",id:"accuracy"},{description:"",id:"recall"},{description:"",id:"precision"},{description:"",id:"f1"}],models:[{description:"Breast cancer prediction model based on decision trees.",id:"scikit-learn/cancer-prediction-trees"}],spaces:[{description:"An application that can predict defective products on a production line.",id:"scikit-learn/tabular-playground"},{description:"An application that compares various tabular classification techniques on different datasets.",id:"scikit-learn/classification"}],summary:"Tabular classification is the task of classifying a target category (a group) based on set of attributes.",widgetModels:["scikit-learn/tabular-playground"],youtubeId:""},Mw={datasets:[{description:"A comprehensive curation of datasets covering all benchmarks.",id:"inria-soda/tabular-benchmark"}],demo:{inputs:[{table:[["Car Name","Horsepower","Weight"],["ford torino","140","3,449"],["amc hornet","97","2,774"],["toyota corolla","65","1,773"]],type:"tabular"}],outputs:[{table:[["MPG (miles per gallon)"],["17"],["18"],["31"]],type:"tabular"}]},metrics:[{description:"",id:"mse"},{description:"Coefficient of determination (or R-squared) is a measure of how well the model fits the data. Higher R-squared is considered a better fit.",id:"r-squared"}],models:[{description:"Fish weight prediction based on length measurements and species.",id:"scikit-learn/Fish-Weight"}],spaces:[{description:"An application that can predict weight of a fish based on set of attributes.",id:"scikit-learn/fish-weight-prediction"}],summary:"Tabular regression is the task of predicting a numerical value given a set of attributes.",widgetModels:["scikit-learn/Fish-Weight"],youtubeId:""},jw={datasets:[{description:"RedCaps is a large-scale dataset of 12M image-text pairs collected from Reddit.",id:"red_caps"},{description:"Conceptual Captions is a dataset consisting of ~3.3M images annotated with captions.",id:"conceptual_captions"},{description:"12M image-caption pairs.",id:"Spawning/PD12M"}],demo:{inputs:[{label:"Input",content:"A city above clouds, pastel colors, Victorian style",type:"text"}],outputs:[{filename:"image.jpeg",type:"img"}]},metrics:[{description:"The Inception Score (IS) measure assesses diversity and meaningfulness. It uses a generated image sample to predict its label. A higher score signifies more diverse and meaningful images.",id:"IS"},{description:"The Fréchet Inception Distance (FID) calculates the distance between distributions between synthetic and real samples. A lower FID score indicates better similarity between the distributions of real and generated images.",id:"FID"},{description:"R-precision assesses how the generated image aligns with the provided text description. It uses the generated images as queries to retrieve relevant text descriptions. The top 'r' relevant descriptions are selected and used to calculate R-precision as r/R, where 'R' is the number of ground truth descriptions associated with the generated images. A higher R-precision value indicates a better model.",id:"R-Precision"}],models:[{description:"One of the most powerful image generation models that can generate realistic outputs.",id:"black-forest-labs/FLUX.1-Krea-dev"},{description:"A powerful image generation model.",id:"Qwen/Qwen-Image"},{description:"Powerful and fast image generation model.",id:"ByteDance/SDXL-Lightning"},{description:"A powerful text-to-image model.",id:"ByteDance/Hyper-SD"}],spaces:[{description:"A powerful text-to-image application.",id:"stabilityai/stable-diffusion-3-medium"},{description:"A text-to-image application to generate comics.",id:"jbilcke-hf/ai-comic-factory"},{description:"An application to match multiple custom image generation models.",id:"multimodalart/flux-lora-lab"},{description:"A powerful yet very fast image generation application.",id:"latent-consistency/lcm-lora-for-sdxl"},{description:"A gallery to explore various text-to-image models.",id:"multimodalart/LoraTheExplorer"},{description:"An application for `text-to-image`, `image-to-image` and image inpainting.",id:"ArtGAN/Stable-Diffusion-ControlNet-WebUI"},{description:"An application to generate realistic images given photos of a person and a prompt.",id:"InstantX/InstantID"}],summary:"Text-to-image is the task of generating images from input text. These pipelines can also be used to modify and edit images based on text prompts.",widgetModels:["black-forest-labs/FLUX.1-dev"],youtubeId:""},Uw={canonicalId:"text-to-audio",datasets:[{description:"10K hours of multi-speaker English dataset.",id:"parler-tts/mls_eng_10k"},{description:"Multi-speaker English dataset.",id:"mythicinfinity/libritts_r"},{description:"Multi-lingual dataset.",id:"facebook/multilingual_librispeech"}],demo:{inputs:[{label:"Input",content:"I love audio models on the Hub!",type:"text"}],outputs:[{filename:"audio.wav",type:"audio"}]},metrics:[{description:"The Mel Cepstral Distortion (MCD) metric is used to calculate the quality of generated speech.",id:"mel cepstral distortion"}],models:[{description:"Small yet powerful TTS model.",id:"KittenML/kitten-tts-nano-0.1"},{description:"Bleeding edge TTS model.",id:"ResembleAI/chatterbox"},{description:"A massively multi-lingual TTS model.",id:"fishaudio/fish-speech-1.5"},{description:"A text-to-dialogue model.",id:"nari-labs/Dia-1.6B-0626"}],spaces:[{description:"An application for generate high quality speech in different languages.",id:"hexgrad/Kokoro-TTS"},{description:"A multilingual text-to-speech application.",id:"fishaudio/fish-speech-1"},{description:"Performant TTS application.",id:"ResembleAI/Chatterbox"},{description:"An application to compare different TTS models.",id:"TTS-AGI/TTS-Arena-V2"},{description:"An application that generates podcast episodes.",id:"ngxson/kokoro-podcast-generator"}],summary:"Text-to-Speech (TTS) is the task of generating natural sounding speech given text input. TTS models can be extended to have a single model that generates speech for multiple speakers and multiple languages.",widgetModels:["suno/bark"],youtubeId:"NW62DpzJ274"},Bw={datasets:[{description:"A widely used dataset useful to benchmark named entity recognition models.",id:"eriktks/conll2003"},{description:"A multilingual dataset of Wikipedia articles annotated for named entity recognition in over 150 different languages.",id:"unimelb-nlp/wikiann"}],demo:{inputs:[{label:"Input",content:"My name is Omar and I live in Zürich.",type:"text"}],outputs:[{text:"My name is Omar and I live in Zürich.",tokens:[{type:"PERSON",start:11,end:15},{type:"GPE",start:30,end:36}],type:"text-with-tokens"}]},metrics:[{description:"",id:"accuracy"},{description:"",id:"recall"},{description:"",id:"precision"},{description:"",id:"f1"}],models:[{description:"A robust performance model to identify people, locations, organizations and names of miscellaneous entities.",id:"dslim/bert-base-NER"},{description:"A strong model to identify people, locations, organizations and names in multiple languages.",id:"FacebookAI/xlm-roberta-large-finetuned-conll03-english"},{description:"A token classification model specialized on medical entity recognition.",id:"blaze999/Medical-NER"},{description:"Flair models are typically the state of the art in named entity recognition tasks.",id:"flair/ner-english"}],spaces:[{description:"An application that can recognizes entities, extracts noun chunks and recognizes various linguistic features of each token.",id:"spacy/gradio_pipeline_visualizer"}],summary:"Token classification is a natural language understanding task in which a label is assigned to some tokens in a text. Some popular token classification subtasks are Named Entity Recognition (NER) and Part-of-Speech (PoS) tagging. NER models could be trained to identify specific entities in a text, such as dates, individuals and places; and PoS tagging would identify, for example, which words in a text are verbs, nouns, and punctuation marks.",widgetModels:["FacebookAI/xlm-roberta-large-finetuned-conll03-english"],youtubeId:"wVHdVlPScxA"},qw={canonicalId:"text-generation",datasets:[{description:"A dataset of copyright-free books translated into 16 different languages.",id:"Helsinki-NLP/opus_books"},{description:"An example of translation between programming languages. This dataset consists of functions in Java and C#.",id:"google/code_x_glue_cc_code_to_code_trans"}],demo:{inputs:[{label:"Input",content:"My name is Omar and I live in Zürich.",type:"text"}],outputs:[{label:"Output",content:"Mein Name ist Omar und ich wohne in Zürich.",type:"text"}]},metrics:[{description:"BLEU score is calculated by counting the number of shared single or subsequent tokens between the generated sequence and the reference. Subsequent n tokens are called “n-grams”. Unigram refers to a single token while bi-gram refers to token pairs and n-grams refer to n subsequent tokens. The score ranges from 0 to 1, where 1 means the translation perfectly matched and 0 did not match at all",id:"bleu"},{description:"",id:"sacrebleu"}],models:[{description:"Very powerful model that can translate many languages between each other, especially low-resource languages.",id:"facebook/nllb-200-1.3B"},{description:"A general-purpose Transformer that can be used to translate from English to German, French, or Romanian.",id:"google-t5/t5-base"}],spaces:[{description:"An application that can translate between 100 languages.",id:"Iker/Translate-100-languages"},{description:"An application that can translate between many languages.",id:"Geonmo/nllb-translation-demo"}],summary:"Translation is the task of converting text from one language to another.",widgetModels:["facebook/mbart-large-50-many-to-many-mmt"],youtubeId:"1JvfrvZgi6c"},Fw={datasets:[{description:"A widely used dataset used to benchmark multiple variants of text classification.",id:"nyu-mll/glue"},{description:"A text classification dataset used to benchmark natural language inference models",id:"stanfordnlp/snli"}],demo:{inputs:[{label:"Input",content:"I love Hugging Face!",type:"text"}],outputs:[{type:"chart",data:[{label:"POSITIVE",score:.9},{label:"NEUTRAL",score:.1},{label:"NEGATIVE",score:0}]}]},metrics:[{description:"",id:"accuracy"},{description:"",id:"recall"},{description:"",id:"precision"},{description:"The F1 metric is the harmonic mean of the precision and recall. It can be calculated as: F1 = 2 * (precision * recall) / (precision + recall)",id:"f1"}],models:[{description:"A robust model trained for sentiment analysis.",id:"distilbert/distilbert-base-uncased-finetuned-sst-2-english"},{description:"A sentiment analysis model specialized in financial sentiment.",id:"ProsusAI/finbert"},{description:"A sentiment analysis model specialized in analyzing tweets.",id:"cardiffnlp/twitter-roberta-base-sentiment-latest"},{description:"A model that can classify languages.",id:"papluca/xlm-roberta-base-language-detection"},{description:"A model that can classify text generation attacks.",id:"meta-llama/Prompt-Guard-86M"}],spaces:[{description:"An application that can classify financial sentiment.",id:"IoannisTr/Tech_Stocks_Trading_Assistant"},{description:"A dashboard that contains various text classification tasks.",id:"miesnerjacob/Multi-task-NLP"},{description:"An application that analyzes user reviews in healthcare.",id:"spacy/healthsea-demo"}],summary:"Text Classification is the task of assigning a label or class to a given text. Some use cases are sentiment analysis, natural language inference, and assessing grammatical correctness.",widgetModels:["distilbert/distilbert-base-uncased-finetuned-sst-2-english"],youtubeId:"leNG9fN9FQU"},Vw={datasets:[{description:"Multilingual dataset used to evaluate text generation models.",id:"CohereForAI/Global-MMLU"},{description:"High quality multilingual data used to train text-generation models.",id:"HuggingFaceFW/fineweb-2"},{description:"Truly open-source, curated and cleaned dialogue dataset.",id:"HuggingFaceH4/ultrachat_200k"},{description:"A reasoning dataset.",id:"open-r1/OpenThoughts-114k-math"},{description:"A multilingual instruction dataset with preference ratings on responses.",id:"allenai/tulu-3-sft-mixture"},{description:"A large synthetic dataset for alignment of text generation models.",id:"HuggingFaceTB/smoltalk"},{description:"A dataset made for training text generation models solving math questions.",id:"HuggingFaceTB/finemath"}],demo:{inputs:[{label:"Input",content:"Once upon a time,",type:"text"}],outputs:[{label:"Output",content:"Once upon a time, we knew that our ancestors were on the verge of extinction. The great explorers and poets of the Old World, from Alexander the Great to Chaucer, are dead and gone. A good many of our ancient explorers and poets have",type:"text"}]},metrics:[{description:"Cross Entropy is a metric that calculates the difference between two probability distributions. Each probability distribution is the distribution of predicted words",id:"Cross Entropy"},{description:"The Perplexity metric is the exponential of the cross-entropy loss. It evaluates the probabilities assigned to the next word by the model. Lower perplexity indicates better performance",id:"Perplexity"}],models:[{description:"A text-generation model trained to follow instructions.",id:"google/gemma-2-2b-it"},{description:"Powerful text generation model for coding.",id:"Qwen/Qwen3-Coder-480B-A35B-Instruct"},{description:"Great text generation model with top-notch tool calling capabilities.",id:"openai/gpt-oss-120b"},{description:"Powerful text generation model.",id:"zai-org/GLM-4.5"},{description:"A powerful small model with reasoning capabilities.",id:"Qwen/Qwen3-4B-Thinking-2507"},{description:"Strong conversational model that supports very long instructions.",id:"Qwen/Qwen2.5-7B-Instruct-1M"},{description:"Text generation model used to write code.",id:"Qwen/Qwen2.5-Coder-32B-Instruct"},{description:"Powerful reasoning based open large language model.",id:"deepseek-ai/DeepSeek-R1"}],spaces:[{description:"An application that writes and executes code from text instructions and supports many models.",id:"akhaliq/anycoder"},{description:"An application that builds websites from natural language prompts.",id:"enzostvs/deepsite"},{description:"A leaderboard for comparing chain-of-thought performance of models.",id:"logikon/open_cot_leaderboard"},{description:"An text generation based application based on a very powerful LLaMA2 model.",id:"ysharma/Explore_llamav2_with_TGI"},{description:"An text generation based application to converse with Zephyr model.",id:"HuggingFaceH4/zephyr-chat"},{description:"A leaderboard that ranks text generation models based on blind votes from people.",id:"lmsys/chatbot-arena-leaderboard"},{description:"An chatbot to converse with a very powerful text generation model.",id:"mlabonne/phixtral-chat"}],summary:"Generating text is the task of generating new text given another text. These models can, for example, fill in incomplete text or paraphrase.",widgetModels:["mistralai/Mistral-Nemo-Instruct-2407"],youtubeId:"e9gNEAlsOvU"},Hw={datasets:[{description:"Bing queries with relevant passages from various web sources.",id:"microsoft/ms_marco"}],demo:{inputs:[{label:"Source sentence",content:"Machine learning is so easy.",type:"text"},{label:"Sentences to compare to",content:"Deep learning is so straightforward.",type:"text"},{label:"",content:"This is so difficult, like rocket science.",type:"text"},{label:"",content:"I can't believe how much I struggled with this.",type:"text"}],outputs:[{type:"chart",data:[{label:"Deep learning is so straightforward.",score:2.2006407},{label:"This is so difficult, like rocket science.",score:-6.2634873},{label:"I can't believe how much I struggled with this.",score:-10.251488}]}]},metrics:[{description:"Discounted Cumulative Gain (DCG) measures the gain, or usefulness, of search results discounted by their position. The normalization is done by dividing the DCG by the ideal DCG, which is the DCG of the perfect ranking.",id:"Normalized Discounted Cumulative Gain"},{description:"Reciprocal Rank is a measure used to rank the relevancy of documents given a set of documents. Reciprocal Rank is the reciprocal of the rank of the document retrieved, meaning, if the rank is 3, the Reciprocal Rank is 0.33. If the rank is 1, the Reciprocal Rank is 1",id:"Mean Reciprocal Rank"},{description:"Mean Average Precision (mAP) is the overall average of the Average Precision (AP) values, where AP is the Area Under the PR Curve (AUC-PR)",id:"Mean Average Precision"}],models:[{description:"An extremely efficient text ranking model trained on a web search dataset.",id:"cross-encoder/ms-marco-MiniLM-L6-v2"},{description:"A strong multilingual text reranker model.",id:"Alibaba-NLP/gte-multilingual-reranker-base"},{description:"An efficient text ranking model that punches above its weight.",id:"Alibaba-NLP/gte-reranker-modernbert-base"}],spaces:[],summary:"Text Ranking is the task of ranking a set of texts based on their relevance to a query. Text ranking models are trained on large datasets of queries and relevant documents to learn how to rank documents based on their relevance to the query. This task is particularly useful for search engines and information retrieval systems.",widgetModels:["cross-encoder/ms-marco-MiniLM-L6-v2"],youtubeId:""},Ww={datasets:[{description:"Microsoft Research Video to Text is a large-scale dataset for open domain video captioning",id:"iejMac/CLIP-MSR-VTT"},{description:"UCF101 Human Actions dataset consists of 13,320 video clips from YouTube, with 101 classes.",id:"quchenyuan/UCF101-ZIP"},{description:"A high-quality dataset for human action recognition in YouTube videos.",id:"nateraw/kinetics"},{description:"A dataset of video clips of humans performing pre-defined basic actions with everyday objects.",id:"HuggingFaceM4/something_something_v2"},{description:"This dataset consists of text-video pairs and contains noisy samples with irrelevant video descriptions",id:"HuggingFaceM4/webvid"},{description:"A dataset of short Flickr videos for the temporal localization of events with descriptions.",id:"iejMac/CLIP-DiDeMo"}],demo:{inputs:[{label:"Input",content:"Darth Vader is surfing on the waves.",type:"text"}],outputs:[{filename:"text-to-video-output.gif",type:"img"}]},metrics:[{description:"Inception Score uses an image classification model that predicts class labels and evaluates how distinct and diverse the images are. A higher score indicates better video generation.",id:"is"},{description:"Frechet Inception Distance uses an image classification model to obtain image embeddings. The metric compares mean and standard deviation of the embeddings of real and generated images. A smaller score indicates better video generation.",id:"fid"},{description:"Frechet Video Distance uses a model that captures coherence for changes in frames and the quality of each frame. A smaller score indicates better video generation.",id:"fvd"},{description:"CLIPSIM measures similarity between video frames and text using an image-text similarity model. A higher score indicates better video generation.",id:"clipsim"}],models:[{description:"A strong model for consistent video generation.",id:"tencent/HunyuanVideo"},{description:"A text-to-video model with high fidelity motion and strong prompt adherence.",id:"Lightricks/LTX-Video"},{description:"A text-to-video model focusing on physics-aware applications like robotics.",id:"nvidia/Cosmos-1.0-Diffusion-7B-Text2World"},{description:"Very fast model for video generation.",id:"Lightricks/LTX-Video-0.9.8-13B-distilled"}],spaces:[{description:"An application that generates video from text.",id:"VideoCrafter/VideoCrafter"},{description:"Consistent video generation application.",id:"Wan-AI/Wan2.1"},{description:"A cutting edge video generation application.",id:"Pyramid-Flow/pyramid-flow"}],summary:"Text-to-video models can be used in any application that requires generating consistent sequence of images from text. ",widgetModels:["Wan-AI/Wan2.2-TI2V-5B"],youtubeId:void 0},Kw={datasets:[{description:"The CIFAR-100 dataset consists of 60000 32x32 colour images in 100 classes, with 600 images per class.",id:"cifar100"},{description:"Multiple images of celebrities, used for facial expression translation.",id:"CelebA"}],demo:{inputs:[{label:"Seed",content:"42",type:"text"},{label:"Number of images to generate:",content:"4",type:"text"}],outputs:[{filename:"unconditional-image-generation-output.jpeg",type:"img"}]},metrics:[{description:"The inception score (IS) evaluates the quality of generated images. It measures the diversity of the generated images (the model predictions are evenly distributed across all possible labels) and their 'distinction' or 'sharpness' (the model confidently predicts a single label for each image).",id:"Inception score (IS)"},{description:"The Fréchet Inception Distance (FID) evaluates the quality of images created by a generative model by calculating the distance between feature vectors for real and generated images.",id:"Frećhet Inception Distance (FID)"}],models:[{description:"High-quality image generation model trained on the CIFAR-10 dataset. It synthesizes images of the ten classes presented in the dataset using diffusion probabilistic models, a class of latent variable models inspired by considerations from nonequilibrium thermodynamics.",id:"google/ddpm-cifar10-32"},{description:"High-quality image generation model trained on the 256x256 CelebA-HQ dataset. It synthesizes images of faces using diffusion probabilistic models, a class of latent variable models inspired by considerations from nonequilibrium thermodynamics.",id:"google/ddpm-celebahq-256"}],spaces:[{description:"An application that can generate realistic faces.",id:"CompVis/celeba-latent-diffusion"}],summary:"Unconditional image generation is the task of generating images with no condition in any context (like a prompt text or another image). Once trained, the model will create images that resemble its training data distribution.",widgetModels:[""],youtubeId:""},zw={datasets:[{description:"Benchmark dataset used for video classification with videos that belong to 400 classes.",id:"kinetics400"}],demo:{inputs:[{filename:"video-classification-input.gif",type:"img"}],outputs:[{type:"chart",data:[{label:"Playing Guitar",score:.514},{label:"Playing Tennis",score:.193},{label:"Cooking",score:.068}]}]},metrics:[{description:"",id:"accuracy"},{description:"",id:"recall"},{description:"",id:"precision"},{description:"",id:"f1"}],models:[{description:"Strong Video Classification model trained on the Kinetics 400 dataset.",id:"google/vivit-b-16x2-kinetics400"},{description:"Strong Video Classification model trained on the Kinetics 400 dataset.",id:"microsoft/xclip-base-patch32"}],spaces:[{description:"An application that classifies video at different timestamps.",id:"nateraw/lavila"},{description:"An application that classifies video.",id:"fcakyon/video-classification"}],summary:"Video classification is the task of assigning a label or class to an entire video. Videos are expected to have only one class for each video. Video classification models take a video as input and return a prediction about which class the video belongs to.",widgetModels:[],youtubeId:""},Xw={datasets:[{description:"A large dataset used to train visual document retrieval models.",id:"vidore/colpali_train_set"}],demo:{inputs:[{filename:"input.png",type:"img"},{label:"Question",content:"Is the model in this paper the fastest for inference?",type:"text"}],outputs:[{type:"chart",data:[{label:"Page 10",score:.7},{label:"Page 11",score:.06},{label:"Page 9",score:.003}]}]},isPlaceholder:!1,metrics:[{description:"NDCG@k scores ranked recommendation lists for top-k results. 0 is the worst, 1 is the best.",id:"Normalized Discounted Cumulative Gain at K"}],models:[{description:"Very accurate visual document retrieval model for multilingual queries and documents.",id:"vidore/colqwen2-v1.0"},{description:"Very fast and efficient visual document retrieval model that can also take in other modalities like audio.",id:"Tevatron/OmniEmbed-v0.1"}],spaces:[{description:"A leaderboard of visual document retrieval models.",id:"vidore/vidore-leaderboard"},{description:"Visual retrieval augmented generation demo based on ColQwen2 model.",id:"vidore/visual-rag-tool"}],summary:"Visual document retrieval is the task of searching for relevant image-based documents, such as PDFs. These models take a text query and multiple documents as input and return the top-most relevant documents and relevancy scores as output.",widgetModels:[""],youtubeId:""},Yw={datasets:[{description:"A widely used dataset containing questions (with answers) about images.",id:"Graphcore/vqa"},{description:"A dataset to benchmark visual reasoning based on text in images.",id:"facebook/textvqa"}],demo:{inputs:[{filename:"elephant.jpeg",type:"img"},{label:"Question",content:"What is in this image?",type:"text"}],outputs:[{type:"chart",data:[{label:"elephant",score:.97},{label:"elephants",score:.06},{label:"animal",score:.003}]}]},isPlaceholder:!1,metrics:[{description:"",id:"accuracy"},{description:"Measures how much a predicted answer differs from the ground truth based on the difference in their semantic meaning.",id:"wu-palmer similarity"}],models:[{description:"A visual question answering model trained to convert charts and plots to text.",id:"google/deplot"},{description:"A visual question answering model trained for mathematical reasoning and chart derendering from images.",id:"google/matcha-base"},{description:"A strong visual question answering that answers questions from book covers.",id:"google/pix2struct-ocrvqa-large"}],spaces:[{description:"An application that compares visual question answering models across different tasks.",id:"merve/pix2struct"},{description:"An application that can answer questions based on images.",id:"nielsr/vilt-vqa"},{description:"An application that can caption images and answer questions about a given image. ",id:"Salesforce/BLIP"},{description:"An application that can caption images and answer questions about a given image. ",id:"vumichien/Img2Prompt"}],summary:"Visual Question Answering is the task of answering open-ended questions based on an image. They output natural language responses to natural language questions.",widgetModels:["dandelin/vilt-b32-finetuned-vqa"],youtubeId:""},Qw={datasets:[{description:"A widely used dataset used to benchmark multiple variants of text classification.",id:"nyu-mll/glue"},{description:"The Multi-Genre Natural Language Inference (MultiNLI) corpus is a crowd-sourced collection of 433k sentence pairs annotated with textual entailment information.",id:"nyu-mll/multi_nli"},{description:"FEVER is a publicly available dataset for fact extraction and verification against textual sources.",id:"fever/fever"}],demo:{inputs:[{label:"Text Input",content:"Dune is the best movie ever.",type:"text"},{label:"Candidate Labels",content:"CINEMA, ART, MUSIC",type:"text"}],outputs:[{type:"chart",data:[{label:"CINEMA",score:.9},{label:"ART",score:.1},{label:"MUSIC",score:0}]}]},metrics:[],models:[{description:"Powerful zero-shot text classification model.",id:"facebook/bart-large-mnli"},{description:"Cutting-edge zero-shot multilingual text classification model.",id:"MoritzLaurer/ModernBERT-large-zeroshot-v2.0"},{description:"Zero-shot text classification model that can be used for topic and sentiment classification.",id:"knowledgator/gliclass-modern-base-v2.0-init"}],spaces:[],summary:"Zero-shot text classification is a task in natural language processing where a model is trained on a set of labeled examples but is then able to classify new examples from previously unseen classes.",widgetModels:["facebook/bart-large-mnli"]},Jw={datasets:[{description:"",id:""}],demo:{inputs:[{filename:"image-classification-input.jpeg",type:"img"},{label:"Classes",content:"cat, dog, bird",type:"text"}],outputs:[{type:"chart",data:[{label:"Cat",score:.664},{label:"Dog",score:.329},{label:"Bird",score:.008}]}]},metrics:[{description:"Computes the number of times the correct label appears in top K labels predicted",id:"top-K accuracy"}],models:[{description:"Multilingual image classification model for 80 languages.",id:"visheratin/mexma-siglip"},{description:"Strong zero-shot image classification model.",id:"google/siglip2-base-patch16-224"},{description:"Robust zero-shot image classification model.",id:"intfloat/mmE5-mllama-11b-instruct"},{description:"Powerful zero-shot image classification model supporting 94 languages.",id:"jinaai/jina-clip-v2"},{description:"Strong image classification model for biomedical domain.",id:"microsoft/BiomedCLIP-PubMedBERT_256-vit_base_patch16_224"}],spaces:[{description:"An application that leverages zero-shot image classification to find best captions to generate an image. ",id:"pharma/CLIP-Interrogator"},{description:"An application to compare different zero-shot image classification models. ",id:"merve/compare_clip_siglip"}],summary:"Zero-shot image classification is the task of classifying previously unseen classes during training of a model.",widgetModels:["google/siglip-so400m-patch14-224"],youtubeId:""},Zw={datasets:[],demo:{inputs:[{filename:"zero-shot-object-detection-input.jpg",type:"img"},{label:"Classes",content:"cat, dog, bird",type:"text"}],outputs:[{filename:"zero-shot-object-detection-output.jpg",type:"img"}]},metrics:[{description:"The Average Precision (AP) metric is the Area Under the PR Curve (AUC-PR). It is calculated for each class separately",id:"Average Precision"},{description:"The Mean Average Precision (mAP) metric is the overall average of the AP values",id:"Mean Average Precision"},{description:"The APα metric is the Average Precision at the IoU threshold of a α value, for example, AP50 and AP75",id:"APα"}],models:[{description:"Solid zero-shot object detection model.",id:"openmmlab-community/mm_grounding_dino_large_all"},{description:"Cutting-edge zero-shot object detection model.",id:"fushh7/LLMDet"}],spaces:[{description:"A demo to compare different zero-shot object detection models per output and latency.",id:"ariG23498/zero-shot-od"},{description:"A demo that combines a zero-shot object detection and mask generation model for zero-shot segmentation.",id:"merve/OWLSAM"}],summary:"Zero-shot object detection is a computer vision task to detect objects and their classes in images, without any prior training or knowledge of the classes. Zero-shot object detection models receive an image as input, as well as a list of candidate classes, and output the bounding boxes and labels where the objects have been detected.",widgetModels:[],youtubeId:""},Gw={datasets:[{description:"A large dataset of over 10 million 3D objects.",id:"allenai/objaverse-xl"},{description:"A dataset of isolated object images for evaluating image-to-3D models.",id:"dylanebert/iso3d"}],demo:{inputs:[{filename:"image-to-3d-image-input.png",type:"img"}],outputs:[{label:"Result",content:"image-to-3d-3d-output-filename.glb",type:"text"}]},metrics:[],models:[{description:"Fast image-to-3D mesh model by Tencent.",id:"TencentARC/InstantMesh"},{description:"3D world generation model.",id:"tencent/HunyuanWorld-1"},{description:"A scaled up image-to-3D mesh model derived from TripoSR.",id:"hwjiang/Real3D"},{description:"Consistent image-to-3d generation model.",id:"stabilityai/stable-point-aware-3d"}],spaces:[{description:"Leaderboard to evaluate image-to-3D models.",id:"dylanebert/3d-arena"},{description:"Image-to-3D demo with mesh outputs.",id:"TencentARC/InstantMesh"},{description:"Image-to-3D demo.",id:"stabilityai/stable-point-aware-3d"},{description:"Image-to-3D demo with mesh outputs.",id:"hwjiang/Real3D"},{description:"Image-to-3D demo with splat outputs.",id:"dylanebert/LGM-mini"}],summary:"Image-to-3D models take in image input and produce 3D output.",widgetModels:[],youtubeId:""},ex={datasets:[{description:"A large dataset of over 10 million 3D objects.",id:"allenai/objaverse-xl"},{description:"Descriptive captions for 3D objects in Objaverse.",id:"tiange/Cap3D"}],demo:{inputs:[{label:"Prompt",content:"a cat statue",type:"text"}],outputs:[{label:"Result",content:"text-to-3d-3d-output-filename.glb",type:"text"}]},metrics:[],models:[{description:"Text-to-3D mesh model by OpenAI",id:"openai/shap-e"},{description:"Generative 3D gaussian splatting model.",id:"ashawkey/LGM"}],spaces:[{description:"Text-to-3D demo with mesh outputs.",id:"hysts/Shap-E"},{description:"Text/image-to-3D demo with splat outputs.",id:"ashawkey/LGM"}],summary:"Text-to-3D models take in text input and produce 3D output.",widgetModels:[],youtubeId:""},tx={datasets:[{description:"A dataset of hand keypoints of over 500k examples.",id:"Vincent-luo/hagrid-mediapipe-hands"}],demo:{inputs:[{filename:"keypoint-detection-input.png",type:"img"}],outputs:[{filename:"keypoint-detection-output.png",type:"img"}]},metrics:[],models:[{description:"A robust keypoint detection model.",id:"magic-leap-community/superpoint"},{description:"A robust keypoint matching model.",id:"magic-leap-community/superglue_outdoor"},{description:"Strong keypoint detection model used to detect human pose.",id:"qualcomm/RTMPose-Body2d"},{description:"Powerful keypoint matching model.",id:"ETH-CVG/lightglue_disk"}],spaces:[{description:"An application that detects hand keypoints in real-time.",id:"datasciencedojo/Hand-Keypoint-Detection-Realtime"},{description:"An application for keypoint detection and matching.",id:"ETH-CVG/LightGlue"}],summary:"Keypoint detection is the task of identifying meaningful distinctive points or features in an image.",widgetModels:[],youtubeId:""},nx={datasets:[{description:"Multiple-choice questions and answers about videos.",id:"lmms-lab/Video-MME"},{description:"A dataset of instructions and question-answer pairs about videos.",id:"lmms-lab/VideoChatGPT"},{description:"Large video understanding dataset.",id:"HuggingFaceFV/finevideo"}],demo:{inputs:[{filename:"video-text-to-text-input.gif",type:"img"},{label:"Text Prompt",content:"What is happening in this video?",type:"text"}],outputs:[{label:"Answer",content:"The video shows a series of images showing a fountain with water jets and a variety of colorful flowers and butterflies in the background.",type:"text"}]},metrics:[],models:[{description:"A robust video-text-to-text model.",id:"Vision-CAIR/LongVU_Qwen2_7B"},{description:"Strong video-text-to-text model with reasoning capabilities.",id:"GoodiesHere/Apollo-LMMs-Apollo-7B-t32"},{description:"Strong video-text-to-text model.",id:"HuggingFaceTB/SmolVLM2-2.2B-Instruct"}],spaces:[{description:"An application to chat with a video-text-to-text model.",id:"llava-hf/video-llava"},{description:"A leaderboard for various video-text-to-text models.",id:"opencompass/openvlm_video_leaderboard"},{description:"An application to generate highlights from a video.",id:"HuggingFaceTB/SmolVLM2-HighlightGenerator"}],summary:"Video-text-to-text models take in a video and a text prompt and output text. These models are also called video-language models.",widgetModels:[""],youtubeId:""},ix={datasets:[{description:"Dataset with detailed annotations for training and benchmarking video instance editing.",id:"suimu/VIRESET"},{description:"Dataset to evaluate models on long video generation and understanding.",id:"zhangsh2001/LongV-EVAL"},{description:"Collection of 104 demo videos from the SeedVR/SeedVR2 series showcasing model outputs.",id:"Iceclear/SeedVR_VideoDemos"}],demo:{inputs:[{filename:"input.gif",type:"img"}],outputs:[{filename:"output.gif",type:"img"}]},metrics:[],models:[{description:"Model for editing outfits, character, and scenery in videos.",id:"decart-ai/Lucy-Edit-Dev"},{description:"Framework that uses 3D mesh proxies for precise, consistent video editing.",id:"LeoLau/Shape-for-Motion"},{description:"Model for generating physics-aware videos from input videos and control conditions.",id:"nvidia/Cosmos-Transfer2.5-2B"},{description:"A model to upscale videos at input, designed for seamless use with ComfyUI.",id:"numz/SeedVR2_comfyUI"}],spaces:[{description:"Interactive demo space for Lucy-Edit-Dev video editing.",id:"decart-ai/lucy-edit-dev"},{description:"Demo space for SeedVR2-3B showcasing video upscaling and restoration.",id:"ByteDance-Seed/SeedVR2-3B"}],summary:"Video-to-video models take one or more videos as input and generate new videos as output. They can enhance quality, interpolate frames, modify styles, or create new motion dynamics, enabling creative applications, video production, and research.",widgetModels:[],youtubeId:""},ox={"audio-classification":["speechbrain","transformers","transformers.js"],"audio-to-audio":["asteroid","fairseq","speechbrain"],"automatic-speech-recognition":["espnet","nemo","speechbrain","transformers","transformers.js"],"audio-text-to-text":["transformers"],"depth-estimation":["transformers","transformers.js"],"document-question-answering":["transformers","transformers.js"],"feature-extraction":["sentence-transformers","transformers","transformers.js"],"fill-mask":["transformers","transformers.js"],"graph-ml":["transformers"],"image-classification":["keras","timm","transformers","transformers.js"],"image-feature-extraction":["timm","transformers"],"image-segmentation":["transformers","transformers.js"],"image-text-to-text":["transformers"],"image-to-image":["diffusers","transformers","transformers.js"],"image-to-text":["transformers","transformers.js"],"image-to-video":["diffusers"],"keypoint-detection":["transformers"],"video-classification":["transformers"],"mask-generation":["transformers"],"multiple-choice":["transformers"],"object-detection":["transformers","transformers.js","ultralytics"],other:[],"question-answering":["adapter-transformers","allennlp","transformers","transformers.js"],robotics:[],"reinforcement-learning":["transformers","stable-baselines3","ml-agents","sample-factory"],"sentence-similarity":["sentence-transformers","spacy","transformers.js"],summarization:["transformers","transformers.js"],"table-question-answering":["transformers"],"table-to-text":["transformers"],"tabular-classification":["sklearn"],"tabular-regression":["sklearn"],"tabular-to-text":["transformers"],"text-classification":["adapter-transformers","setfit","spacy","transformers","transformers.js"],"text-generation":["transformers","transformers.js"],"text-ranking":["sentence-transformers","transformers"],"text-retrieval":[],"text-to-image":["diffusers"],"text-to-speech":["espnet","tensorflowtts","transformers","transformers.js"],"text-to-audio":["transformers","transformers.js"],"text-to-video":["diffusers"],"time-series-forecasting":[],"token-classification":["adapter-transformers","flair","spacy","span-marker","stanza","transformers","transformers.js"],translation:["transformers","transformers.js"],"unconditional-image-generation":["diffusers"],"video-text-to-text":["transformers"],"visual-question-answering":["transformers","transformers.js"],"voice-activity-detection":[],"zero-shot-classification":["transformers","transformers.js"],"zero-shot-image-classification":["transformers","transformers.js"],"zero-shot-object-detection":["transformers","transformers.js"],"text-to-3d":["diffusers"],"image-to-3d":["diffusers"],"any-to-any":["transformers"],"visual-document-retrieval":["transformers"],"video-to-video":["diffusers"]};function V(t,e=Pw){return{...e,id:t,label:ja[t].name,libraries:ox[t]}}V("any-to-any",uw),V("audio-classification",mw),V("audio-to-audio",hw),V("audio-text-to-text",fw),V("automatic-speech-recognition",gw),V("depth-estimation",Cw),V("document-question-answering",bw),V("visual-document-retrieval",Xw),V("feature-extraction",_w),V("fill-mask",yw),V("image-classification",vw),V("image-feature-extraction",ww),V("image-segmentation",kw),V("image-to-image",xw),V("image-text-to-text",Ew),V("image-to-text",Aw),V("image-to-video",Tw),V("keypoint-detection",tx),V("mask-generation",Iw),V("object-detection",Sw),V("video-classification",zw),V("question-answering",Dw),V("reinforcement-learning",Ow),V("sentence-similarity",Lw),V("summarization",$w),V("table-question-answering",Nw),V("tabular-classification",Rw),V("tabular-regression",Mw),V("text-classification",Fw),V("text-generation",Vw),V("text-ranking",Hw),V("text-to-image",jw),V("text-to-speech",Uw),V("text-to-video",Ww),V("token-classification",Bw),V("translation",qw),V("unconditional-image-generation",Kw),V("video-text-to-text",nx),V("video-to-video",ix),V("visual-question-answering",Yw),V("zero-shot-classification",Qw),V("zero-shot-image-classification",Jw),V("zero-shot-object-detection",Zw),V("text-to-3d",ex),V("image-to-3d",Gw);const sx=()=>'"Hi, I recently bought a device from your company but it is not working as advertised and I would like to get reimbursed!"',ax=()=>'"Меня зовут Вольфганг и я живу в Берлине"',rx=()=>'"The tower is 324 metres (1,063 ft) tall, about the same height as an 81-storey building, and the tallest structure in Paris. Its base is square, measuring 125 metres (410 ft) on each side. During its construction, the Eiffel Tower surpassed the Washington Monument to become the tallest man-made structure in the world, a title it held for 41 years until the Chrysler Building in New York City was finished in 1930. It was the first structure to reach a height of 300 metres. Due to the addition of a broadcasting aerial at the top of the tower in 1957, it is now taller than the Chrysler Building by 5.2 metres (17 ft). Excluding transmitters, the Eiffel Tower is the second tallest free-standing structure in France after the Millau Viaduct."',lx=()=>`{
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
}`,cx=()=>`{
        "image": "cat.png",
        "question": "What is in this image?"
    }`,dx=()=>`{
    "question": "What is my name?",
    "context": "My name is Clara and I live in Berkeley."
}`,px=()=>'"I like you. I love you"',ux=()=>'"My name is Sarah Jessica Parker but you can call me Jessica"',dc=t=>t.tags.includes("conversational")?t.pipeline_tag==="text-generation"?[{role:"user",content:"What is the capital of France?"}]:[{role:"user",content:[{type:"text",text:"Describe this image in one sentence."},{type:"image_url",image_url:{url:"https://cdn.britannica.com/61/93061-050-99147DCE/Statue-of-Liberty-Island-New-York-Bay.jpg"}}]}]:'"Can you please let us know more details about your "',mx=t=>`"The answer to the universe is ${t.mask_token}."`,fx=()=>`{
    "source_sentence": "That is a happy person",
    "sentences": [
        "That is a happy dog",
        "That is a very happy person",
        "Today is a sunny day"
    ]
}`,hx=()=>'"Today is a sunny day and I will get some ice cream."',gx=()=>'"cats.jpg"',bx=()=>'"cats.jpg"',_x=()=>`{
    "image": "cat.png",
    "prompt": "Turn the cat into a tiger."
}`,yx=()=>`{
    "image": "cat.png",
    "prompt": "The cat starts to dance"
}`,vx=()=>'"cats.jpg"',wx=()=>'"cats.jpg"',xx=()=>'"sample1.flac"',Ax=()=>'"sample1.flac"',Ex=()=>'"Astronaut riding a horse"',kx=()=>'"A young man walking on the street"',Tx=()=>'"The answer to the universe is 42"',Ix=()=>'"liquid drum and bass, atmospheric synths, airy sounds"',Sx=()=>'"sample1.flac"',pc=()=>`'{"Height":[11.52,12.48],"Length1":[23.2,24.0],"Length2":[25.4,26.3],"Species": ["Bream","Bream"]}'`,Cx=()=>'"cats.jpg"',Px={"audio-to-audio":xx,"audio-classification":Ax,"automatic-speech-recognition":Sx,"document-question-answering":cx,"feature-extraction":hx,"fill-mask":mx,"image-classification":gx,"image-to-text":bx,"image-to-image":_x,"image-to-video":yx,"image-segmentation":vx,"object-detection":wx,"question-answering":dx,"sentence-similarity":fx,summarization:rx,"table-question-answering":lx,"tabular-regression":pc,"tabular-classification":pc,"text-classification":px,"text-generation":dc,"image-text-to-text":dc,"text-to-image":Ex,"text-to-video":kx,"text-to-speech":Tx,"text-to-audio":Ix,"token-classification":ux,translation:ax,"zero-shot-classification":sx,"zero-shot-image-classification":Cx};function Ox(t,e=!1,n=!1){if(t.pipeline_tag){const i=Px[t.pipeline_tag];if(i){let s=i(t);if(typeof s=="string"&&(e&&(s=s.replace(/(?:(?:\r?\n|\r)\t*)|\t+/g," ")),n)){const r=/^"(.+)"$/s,c=s.match(r);s=c?c[1]:s}return s}}return"No input example has been defined for this model task."}function Dx(t,e){let n=JSON.stringify(t,null,"	");return e?.indent&&(n=n.replaceAll(`
`,`
${e.indent}`)),e?.attributeKeyQuotes||(n=n.replace(/"([^"]+)":/g,"$1:")),e?.customContentEscaper&&(n=e.customContentEscaper(n)),n}const Id="custom_code";function Nt(t){const e=t.split("/");return e.length===1?e[0]:e[1]}const Lx=t=>JSON.stringify(t).slice(1,-1),$x=t=>[`from adapters import AutoAdapterModel

model = AutoAdapterModel.from_pretrained("${t.config?.adapter_transformers?.model_name}")
model.load_adapter("${t.id}", set_active=True)`],Nx=t=>[`import allennlp_models
from allennlp.predictors.predictor import Predictor

predictor = Predictor.from_path("hf://${t.id}")`],Rx=t=>[`import allennlp_models
from allennlp.predictors.predictor import Predictor

predictor = Predictor.from_path("hf://${t.id}")
predictor_input = {"passage": "My name is Wolfgang and I live in Berlin", "question": "Where do I live?"}
predictions = predictor.predict_json(predictor_input)`],Mx=t=>t.tags.includes("question-answering")?Rx(t):Nx(t),jx=t=>[`from araclip import AraClip

model = AraClip.from_pretrained("${t.id}")`],Ux=t=>[`from asteroid.models import BaseModel

model = BaseModel.from_pretrained("${t.id}")`],Bx=t=>{const e=`# Watermark Generator
from audioseal import AudioSeal

model = AudioSeal.load_generator("${t.id}")
# pass a tensor (tensor_wav) of shape (batch, channels, samples) and a sample rate
wav, sr = tensor_wav, 16000
	
watermark = model.get_watermark(wav, sr)
watermarked_audio = wav + watermark`,n=`# Watermark Detector
from audioseal import AudioSeal

detector = AudioSeal.load_detector("${t.id}")
	
result, message = detector.detect_watermark(watermarked_audio, sr)`;return[e,n]};function gi(t){return t.cardData?.base_model?.toString()??"fill-in-base-model"}function Ln(t){const e=t.widgetData?.[0]?.text??t.cardData?.instance_prompt;if(e)return Lx(e)}const qx=t=>[`import requests
from PIL import Image
from ben2 import AutoModel

url = "https://huggingface.co/datasets/mishig/sample_images/resolve/main/teapot.jpg"
image = Image.open(requests.get(url, stream=True).raw)

model = AutoModel.from_pretrained("${t.id}")
model.to("cuda").eval()
foreground = model.inference(image)
`],Fx=t=>[`from bertopic import BERTopic

model = BERTopic.load("${t.id}")`],Vx=t=>[`from bm25s.hf import BM25HF

retriever = BM25HF.load_from_hub("${t.id}")`],Hx=()=>[`# pip install chatterbox-tts
import torchaudio as ta
from chatterbox.tts import ChatterboxTTS

model = ChatterboxTTS.from_pretrained(device="cuda")

text = "Ezreal and Jinx teamed up with Ahri, Yasuo, and Teemo to take down the enemy's Nexus in an epic late-game pentakill."
wav = model.generate(text)
ta.save("test-1.wav", wav, model.sr)

# If you want to synthesize with a different voice, specify the audio prompt
AUDIO_PROMPT_PATH="YOUR_FILE.wav"
wav = model.generate(text, audio_prompt_path=AUDIO_PROMPT_PATH)
ta.save("test-2.wav", wav, model.sr)`],Wx=()=>["pip install git+https://github.com/SAP-samples/contexttab",`# Run a classification task
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
print("R² Score:", r2)`],Kx=()=>[`# pip install git+https://github.com/Google-Health/cxr-foundation.git#subdirectory=python

# Load image as grayscale (Stillwaterising, CC0, via Wikimedia Commons)
import requests
from PIL import Image
from io import BytesIO
image_url = "https://upload.wikimedia.org/wikipedia/commons/c/c8/Chest_Xray_PA_3-8-2010.png"
img = Image.open(requests.get(image_url, headers={'User-Agent': 'Demo'}, stream=True).raw).convert('L')

# Run inference
from clientside.clients import make_hugging_face_client
cxr_client = make_hugging_face_client('cxr_model')
print(cxr_client.get_image_embeddings_from_images([img]))`],zx=t=>{let e,n,i;return e="<ENCODER>",n="<NUMBER_OF_FEATURES>",i="<OUT_CHANNELS>",t.id==="depth-anything/Depth-Anything-V2-Small"?(e="vits",n="64",i="[48, 96, 192, 384]"):t.id==="depth-anything/Depth-Anything-V2-Base"?(e="vitb",n="128",i="[96, 192, 384, 768]"):t.id==="depth-anything/Depth-Anything-V2-Large"&&(e="vitl",n="256",i="[256, 512, 1024, 1024"),[`
# Install from https://github.com/DepthAnything/Depth-Anything-V2

# Load the model and infer depth from an image
import cv2
import torch

from depth_anything_v2.dpt import DepthAnythingV2

# instantiate the model
model = DepthAnythingV2(encoder="${e}", features=${n}, out_channels=${i})

# load the weights
filepath = hf_hub_download(repo_id="${t.id}", filename="depth_anything_v2_${e}.pth", repo_type="model")
state_dict = torch.load(filepath, map_location="cpu")
model.load_state_dict(state_dict).eval()

raw_img = cv2.imread("your/image/path")
depth = model.infer_image(raw_img) # HxW raw depth map in numpy
    `]},Xx=t=>[`# Download checkpoint
pip install huggingface-hub
huggingface-cli download --local-dir checkpoints ${t.id}`,`import depth_pro

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
focallength_px = prediction["focallength_px"]`],Yx=()=>[`from huggingface_hub import from_pretrained_keras
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
print(infer(inputs=tf.constant([input_tensor])))`],Qx=t=>[`import soundfile as sf
from dia.model import Dia

model = Dia.from_pretrained("${t.id}")
text = "[S1] Dia is an open weights text to dialogue model. [S2] You get full control over scripts and voices. [S1] Wow. Amazing. (laughs) [S2] Try it now on Git hub or Hugging Face."
output = model.generate(text)

sf.write("simple.mp3", output, 44100)`],Jx=t=>[`# pip install git+https://github.com/NVlabs/describe-anything
from huggingface_hub import snapshot_download
from dam import DescribeAnythingModel

snapshot_download(${t.id}, local_dir="checkpoints")

dam = DescribeAnythingModel(
	model_path="checkpoints",
	conv_mode="v1",
	prompt_mode="focal_prompt",
)`],Zx="pip install -U diffusers transformers",Sd="Astronaut in a jungle, cold color palette, muted colors, detailed, 8k",Cd="Turn this cat into a dog",Ua="A man with short gray hair plays a red electric guitar.",Gx=t=>[`from diffusers import DiffusionPipeline

pipe = DiffusionPipeline.from_pretrained("${t.id}")

prompt = "${Ln(t)??Sd}"
image = pipe(prompt).images[0]`],eA=t=>[`from diffusers import DiffusionPipeline
from diffusers.utils import load_image

pipe = DiffusionPipeline.from_pretrained("${t.id}")

prompt = "${Ln(t)??Cd}"
input_image = load_image("https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/diffusers/cat.png")

image = pipe(image=input_image, prompt=prompt).images[0]`],tA=t=>[`import torch
from diffusers import DiffusionPipeline
from diffusers.utils import load_image, export_to_video

pipe = DiffusionPipeline.from_pretrained("${t.id}", torch_dtype=torch.float16)
pipe.to("cuda")

prompt = "${Ln(t)??Ua}"
image = load_image(
    "https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/diffusers/guitar-man.png"
)

output = pipe(image=image, prompt=prompt).frames[0]
export_to_video(output, "output.mp4")`],nA=t=>[`from diffusers import ControlNetModel, StableDiffusionControlNetPipeline

controlnet = ControlNetModel.from_pretrained("${t.id}")
pipe = StableDiffusionControlNetPipeline.from_pretrained(
	"${gi(t)}", controlnet=controlnet
)`],iA=t=>[`from diffusers import DiffusionPipeline

pipe = DiffusionPipeline.from_pretrained("${gi(t)}")
pipe.load_lora_weights("${t.id}")

prompt = "${Ln(t)??Sd}"
image = pipe(prompt).images[0]`],oA=t=>[`from diffusers import DiffusionPipeline
from diffusers.utils import load_image

pipe = DiffusionPipeline.from_pretrained("${gi(t)}")
pipe.load_lora_weights("${t.id}")

prompt = "${Ln(t)??Cd}"
input_image = load_image("https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/diffusers/cat.png")

image = pipe(image=input_image, prompt=prompt).images[0]`],sA=t=>[`from diffusers import DiffusionPipeline
from diffusers.utils import export_to_video

pipe = DiffusionPipeline.from_pretrained("${gi(t)}")
pipe.load_lora_weights("${t.id}")

prompt = "${Ln(t)??Ua}"

output = pipe(prompt=prompt).frames[0]
export_to_video(output, "output.mp4")`],aA=t=>[`from diffusers import DiffusionPipeline
from diffusers.utils import load_image, export_to_video

pipe = DiffusionPipeline.from_pretrained("${gi(t)}")
pipe.load_lora_weights("${t.id}")

prompt = "${Ln(t)??Ua}"
input_image = load_image("https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/diffusers/guitar-man.png")

image = pipe(image=input_image, prompt=prompt).frames[0]
export_to_video(output, "output.mp4")`],rA=t=>[`from diffusers import DiffusionPipeline

pipe = DiffusionPipeline.from_pretrained("${gi(t)}")
pipe.load_textual_inversion("${t.id}")`],lA=t=>[`import torch
from diffusers import FluxFillPipeline
from diffusers.utils import load_image

image = load_image("https://huggingface.co/datasets/diffusers/diffusers-images-docs/resolve/main/cup.png")
mask = load_image("https://huggingface.co/datasets/diffusers/diffusers-images-docs/resolve/main/cup_mask.png")

pipe = FluxFillPipeline.from_pretrained("${t.id}", torch_dtype=torch.bfloat16).to("cuda")
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
image.save(f"flux-fill-dev.png")`],cA=t=>[`import torch
from diffusers import AutoPipelineForInpainting
from diffusers.utils import load_image

pipe = AutoPipelineForInpainting.from_pretrained("${t.id}", torch_dtype=torch.float16, variant="fp16").to("cuda")

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
).images[0]`],Pd=t=>{let e;return t.tags.includes("StableDiffusionInpaintPipeline")||t.tags.includes("StableDiffusionXLInpaintPipeline")?e=cA(t):t.tags.includes("controlnet")?e=nA(t):t.tags.includes("lora")?t.pipeline_tag==="image-to-image"?e=oA(t):t.pipeline_tag==="image-to-video"?e=aA(t):t.pipeline_tag==="text-to-video"?e=sA(t):e=iA(t):t.tags.includes("textual_inversion")?e=rA(t):t.tags.includes("FluxFillPipeline")?e=lA(t):t.pipeline_tag==="image-to-video"?e=tA(t):t.pipeline_tag==="image-to-image"?e=eA(t):e=Gx(t),[Zx,...e]},dA=t=>{const e=`# Pipeline for Stable Diffusion 3
from diffusionkit.mlx import DiffusionPipeline

pipeline = DiffusionPipeline(
	shift=3.0,
	use_t5=False,
	model_version=${t.id},
	low_memory_mode=True,
	a16=True,
	w16=True,
)`,n=`# Pipeline for Flux
from diffusionkit.mlx import FluxPipeline

pipeline = FluxPipeline(
  shift=1.0,
  model_version=${t.id},
  low_memory_mode=True,
  a16=True,
  w16=True,
)`,i=`# Image Generation
HEIGHT = 512
WIDTH = 512
NUM_STEPS = ${t.tags.includes("flux")?4:50}
CFG_WEIGHT = ${t.tags.includes("flux")?0:5}

image, _ = pipeline.generate_image(
  "a photo of a cat",
  cfg_weight=CFG_WEIGHT,
  num_steps=NUM_STEPS,
  latent_size=(HEIGHT // 8, WIDTH // 8),
)`;return[t.tags.includes("flux")?n:e,i]},pA=t=>[`# pip install --no-binary :all: cartesia-pytorch
from cartesia_pytorch import ReneLMHeadModel
from transformers import AutoTokenizer

model = ReneLMHeadModel.from_pretrained("${t.id}")
tokenizer = AutoTokenizer.from_pretrained("allenai/OLMo-1B-hf")

in_message = ["Rene Descartes was"]
inputs = tokenizer(in_message, return_tensors="pt")

outputs = model.generate(inputs.input_ids, max_length=50, top_k=100, top_p=0.99)
out_message = tokenizer.batch_decode(outputs, skip_special_tokens=True)[0]

print(out_message)
)`],uA=t=>[`import mlx.core as mx
import cartesia_mlx as cmx

model = cmx.from_pretrained("${t.id}")
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
`],mA=t=>{const e=Nt(t.id).replaceAll("-","_");return[`# Load it from the Hub directly
import edsnlp
nlp = edsnlp.load("${t.id}")
`,`# Or install it as a package
!pip install git+https://huggingface.co/${t.id}

# and import it as a module
import ${e}

nlp = ${e}.load()  # or edsnlp.load("${e}")
`]},fA=t=>[`from espnet2.bin.tts_inference import Text2Speech

model = Text2Speech.from_pretrained("${t.id}")

speech, *_ = model("text to generate speech from")`],hA=t=>[`from espnet2.bin.asr_inference import Speech2Text

model = Speech2Text.from_pretrained(
  "${t.id}"
)

speech, rate = soundfile.read("speech.wav")
text, *_ = model(speech)[0]`],gA=()=>["unknown model type (must be text-to-speech or automatic-speech-recognition)"],bA=t=>t.tags.includes("text-to-speech")?fA(t):t.tags.includes("automatic-speech-recognition")?hA(t):gA(),_A=t=>[`from fairseq.checkpoint_utils import load_model_ensemble_and_task_from_hf_hub

models, cfg, task = load_model_ensemble_and_task_from_hf_hub(
    "${t.id}"
)`],yA=t=>[`from flair.models import SequenceTagger

tagger = SequenceTagger.load("${t.id}")`],vA=t=>[`from gliner import GLiNER

model = GLiNER.from_pretrained("${t.id}")`],wA=t=>[`# Download model
from huggingface_hub import snapshot_download

snapshot_download(${t.id}, local_dir="checkpoints")

from indextts.infer import IndexTTS

# Ensure config.yaml is present in the checkpoints directory
tts = IndexTTS(model_dir="checkpoints", cfg_path="checkpoints/config.yaml")

voice = "path/to/your/reference_voice.wav"  # Path to the voice reference audio file
text = "Hello, how are you?"
output_path = "output_index.wav"

tts.infer(voice, text, output_path)`],xA=t=>[`# CLI usage
# see docs: https://ai-riksarkivet.github.io/htrflow/latest/getting_started/quick_start.html
htrflow pipeline <path/to/pipeline.yaml> <path/to/image>`,`# Python usage
from htrflow.pipeline.pipeline import Pipeline
from htrflow.pipeline.steps import Task
from htrflow.models.framework.model import ModelClass

pipeline = Pipeline(
    [
        Task(
            ModelClass, {"model": "${t.id}"}, {}
        ),
    ])`],AA=t=>[`# Available backend options are: "jax", "torch", "tensorflow".
import os
os.environ["KERAS_BACKEND"] = "jax"
	
import keras

model = keras.saving.load_model("hf://${t.id}")
`],EA=t=>`
import keras_hub

# Load CausalLM model (optional: use half precision for inference)
causal_lm = keras_hub.models.CausalLM.from_preset("hf://${t}", dtype="bfloat16")
causal_lm.compile(sampler="greedy")  # (optional) specify a sampler

# Generate text
causal_lm.generate("Keras: deep learning for", max_length=64)
`,kA=t=>`
import keras_hub

# Load TextToImage model (optional: use half precision for inference)
text_to_image = keras_hub.models.TextToImage.from_preset("hf://${t}", dtype="bfloat16")

# Generate images with a TextToImage model.
text_to_image.generate("Astronaut in a jungle")
`,TA=t=>`
import keras_hub

# Load TextClassifier model
text_classifier = keras_hub.models.TextClassifier.from_preset(
    "hf://${t}",
    num_classes=2,
)
# Fine-tune
text_classifier.fit(x=["Thilling adventure!", "Total snoozefest."], y=[1, 0])
# Classify text
text_classifier.predict(["Not my cup of tea."])
`,IA=t=>`
import keras_hub
import keras

# Load ImageClassifier model
image_classifier = keras_hub.models.ImageClassifier.from_preset(
    "hf://${t}",
    num_classes=2,
)
# Fine-tune
image_classifier.fit(
    x=keras.random.randint((32, 64, 64, 3), 0, 256),
    y=keras.random.randint((32, 1), 0, 2),
)
# Classify image
image_classifier.predict(keras.random.randint((1, 64, 64, 3), 0, 256))
`,uc={CausalLM:EA,TextToImage:kA,TextClassifier:TA,ImageClassifier:IA},SA=(t,e)=>`
import keras_hub

# Create a ${t} model
task = keras_hub.models.${t}.from_preset("hf://${e}")
`,CA=t=>`
import keras_hub

# Create a Backbone model unspecialized for any task
backbone = keras_hub.models.Backbone.from_preset("hf://${t}")
`,PA=t=>{const e=t.id,n=t.config?.keras_hub?.tasks??[],i=[];for(const[s,r]of Object.entries(uc))n.includes(s)&&i.push(r(e));for(const s of n)Object.keys(uc).includes(s)||i.push(SA(s,e));return i.push(CA(e)),i},OA=t=>[`# Example usage for KimiAudio
# pip install git+https://github.com/MoonshotAI/Kimi-Audio.git

from kimia_infer.api.kimia import KimiAudio

model = KimiAudio(model_path="${t.id}", load_detokenizer=True)

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
`],DA=t=>[`from kittentts import KittenTTS
m = KittenTTS("${t.id}")

audio = m.generate("This high quality TTS model works without a GPU")

# Save the audio
import soundfile as sf
sf.write('output.wav', audio, 24000)`],LA=t=>t.tags.includes("bi-encoder")?[`#install from https://github.com/webis-de/lightning-ir

from lightning_ir import BiEncoderModule
model = BiEncoderModule("${t.id}")

model.score("query", ["doc1", "doc2", "doc3"])`]:t.tags.includes("cross-encoder")?[`#install from https://github.com/webis-de/lightning-ir

from lightning_ir import CrossEncoderModule
model = CrossEncoderModule("${t.id}")

model.score("query", ["doc1", "doc2", "doc3"])`]:[`#install from https://github.com/webis-de/lightning-ir

from lightning_ir import BiEncoderModule, CrossEncoderModule

# depending on the model type, use either BiEncoderModule or CrossEncoderModule
model = BiEncoderModule("${t.id}") 
# model = CrossEncoderModule("${t.id}")

model.score("query", ["doc1", "doc2", "doc3"])`],$A=t=>{const e=[`# !pip install llama-cpp-python

from llama_cpp import Llama

llm = Llama.from_pretrained(
	repo_id="${t.id}",
	filename="{{GGUF_FILE}}",
)
`];if(t.tags.includes("conversational")){const n=Ox(t);e.push(`llm.create_chat_completion(
	messages = ${Dx(n,{attributeKeyQuotes:!0,indent:"	"})}
)`)}else e.push(`output = llm(
	"Once upon a time,",
	max_tokens=512,
	echo=True
)
print(output)`);return e},NA=t=>{if(t.tags.includes("smolvla")){const e=[`# See https://github.com/huggingface/lerobot?tab=readme-ov-file#installation for more details
git clone https://github.com/huggingface/lerobot.git
cd lerobot
pip install -e .[smolvla]`,`# Launch finetuning on your dataset
python lerobot/scripts/train.py \\
--policy.path=${t.id} \\
--dataset.repo_id=lerobot/svla_so101_pickplace \\ 
--batch_size=64 \\
--steps=20000 \\
--output_dir=outputs/train/my_smolvla \\
--job_name=my_smolvla_training \\
--policy.device=cuda \\
--wandb.enable=true`];return t.id!=="lerobot/smolvla_base"&&e.push(`# Run the policy using the record function	
python -m lerobot.record \\
  --robot.type=so101_follower \\
  --robot.port=/dev/ttyACM0 \\ # <- Use your port
  --robot.id=my_blue_follower_arm \\ # <- Use your robot id
  --robot.cameras="{ front: {type: opencv, index_or_path: 8, width: 640, height: 480, fps: 30}}" \\ # <- Use your cameras
  --dataset.single_task="Grasp a lego block and put it in the bin." \\ # <- Use the same task description you used in your dataset recording
  --dataset.repo_id=HF_USER/dataset_name \\  # <- This will be the dataset name on HF Hub
  --dataset.episode_time_s=50 \\
  --dataset.num_episodes=10 \\
  --policy.path=${t.id}`),e}return[]},RA=t=>[`# Note: 'keras<3.x' or 'tf_keras' must be installed (legacy)
# See https://github.com/keras-team/tf-keras for more details.
from huggingface_hub import from_pretrained_keras

model = from_pretrained_keras("${t.id}")
`],MA=t=>[`from mamba_ssm import MambaLMHeadModel

model = MambaLMHeadModel.from_pretrained("${t.id}")`],jA=t=>[`# Install from https://github.com/Camb-ai/MARS5-TTS

from inference import Mars5TTS
mars5 = Mars5TTS.from_pretrained("${t.id}")`],UA=t=>[`# Install from https://github.com/pq-yang/MatAnyone.git

from matanyone.model.matanyone import MatAnyone
model = MatAnyone.from_pretrained("${t.id}")`,`
from matanyone import InferenceCore
processor = InferenceCore("${t.id}")`],BA=()=>[`# Install from https://github.com/buaacyw/MeshAnything.git

from MeshAnything.models.meshanything import MeshAnything

# refer to https://github.com/buaacyw/MeshAnything/blob/main/main.py#L91 on how to define args
# and https://github.com/buaacyw/MeshAnything/blob/main/app.py regarding usage
model = MeshAnything(args)`],qA=t=>[`import open_clip

model, preprocess_train, preprocess_val = open_clip.create_model_and_transforms('hf-hub:${t.id}')
tokenizer = open_clip.get_tokenizer('hf-hub:${t.id}')`],FA=t=>{if(t.config?.architectures?.[0]){const e=t.config.architectures[0];return[[`from paddlenlp.transformers import AutoTokenizer, ${e}`,"",`tokenizer = AutoTokenizer.from_pretrained("${t.id}", from_hf_hub=True)`,`model = ${e}.from_pretrained("${t.id}", from_hf_hub=True)`].join(`
`)]}else return[["# ⚠️ Type of model unknown","from paddlenlp.transformers import AutoTokenizer, AutoModel","",`tokenizer = AutoTokenizer.from_pretrained("${t.id}", from_hf_hub=True)`,`model = AutoModel.from_pretrained("${t.id}", from_hf_hub=True)`].join(`
`)]},VA=t=>{const e={textline_detection:{className:"TextDetection"},textline_recognition:{className:"TextRecognition"},seal_text_detection:{className:"SealTextDetection"},doc_img_unwarping:{className:"TextImageUnwarping"},doc_img_orientation_classification:{className:"DocImgOrientationClassification"},textline_orientation_classification:{className:"TextLineOrientationClassification"},chart_parsing:{className:"ChartParsing"},formula_recognition:{className:"FormulaRecognition"},layout_detection:{className:"LayoutDetection"},table_cells_detection:{className:"TableCellsDetection"},wired_table_classification:{className:"TableClassification"},table_structure_recognition:{className:"TableStructureRecognition"}};if(t.tags.includes("doc_vlm"))return[`# 1. See https://www.paddlepaddle.org.cn/en/install to install paddlepaddle
# 2. pip install paddleocr

from paddleocr import DocVLM
model = DocVLM(model_name="${Nt(t.id)}")
output = model.predict(
    input={"image": "path/to/image.png", "query": "Parsing this image and output the content in Markdown format."},
    batch_size=1
)
for res in output:
    res.print()
    res.save_to_json(save_path="./output/res.json")`];if(t.tags.includes("document-parse"))return[`# See https://www.paddleocr.ai/latest/version3.x/pipeline_usage/PaddleOCR-VL.html to installation

from paddleocr import PaddleOCRVL
pipeline = PaddleOCRVL()
output = pipeline.predict("path/to/document_image.png")
for res in output:
	res.print()
	res.save_to_json(save_path="output")
	res.save_to_markdown(save_path="output")`];for(const n of t.tags)if(n in e){const{className:i}=e[n];return[`# 1. See https://www.paddlepaddle.org.cn/en/install to install paddlepaddle
# 2. pip install paddleocr

from paddleocr import ${i}
model = ${i}(model_name="${Nt(t.id)}")
output = model.predict(input="path/to/image.png", batch_size=1)
for res in output:
    res.print()
    res.save_to_img(save_path="./output/")
    res.save_to_json(save_path="./output/res.json")`]}return[`# Please refer to the document for information on how to use the model. 
# https://paddlepaddle.github.io/PaddleOCR/latest/en/version3.x/module_usage/module_overview.html`]},HA=t=>{const e=`# Use PE-Core models as CLIP models
import core.vision_encoder.pe as pe

model = pe.CLIP.from_config("${t.id}", pretrained=True)`,n=`# Use any PE model as a vision encoder
import core.vision_encoder.pe as pe

model = pe.VisionTransformer.from_config("${t.id}", pretrained=True)`;return t.id.includes("Core")?[e,n]:[n]},WA=t=>[`from huggingface_hub import snapshot_download
from phantom_wan import WANI2V, configs

checkpoint_dir = snapshot_download("${t.id}")
wan_i2v = WanI2V(
            config=configs.WAN_CONFIGS['i2v-14B'],
            checkpoint_dir=checkpoint_dir,
        )
 video = wan_i2v.generate(text_prompt, image_prompt)`],KA=t=>[`from pyannote.audio import Pipeline
  
pipeline = Pipeline.from_pretrained("${t.id}")

# inference on the whole file
pipeline("file.wav")

# inference on an excerpt
from pyannote.core import Segment
excerpt = Segment(start=2.0, end=5.0)

from pyannote.audio import Audio
waveform, sample_rate = Audio().crop("file.wav", excerpt)
pipeline({"waveform": waveform, "sample_rate": sample_rate})`],zA=t=>[`from pyannote.audio import Model, Inference

model = Model.from_pretrained("${t.id}")
inference = Inference(model)

# inference on the whole file
inference("file.wav")

# inference on an excerpt
from pyannote.core import Segment
excerpt = Segment(start=2.0, end=5.0)
inference.crop("file.wav", excerpt)`],XA=t=>t.tags.includes("pyannote-audio-pipeline")?KA(t):zA(t),YA=t=>[`from relik import Relik
 
relik = Relik.from_pretrained("${t.id}")`],QA=t=>[`# Install from https://github.com/microsoft/renderformer

from renderformer import RenderFormerRenderingPipeline
pipeline = RenderFormerRenderingPipeline.from_pretrained("${t.id}")`],JA=t=>[`from tensorflow_tts.inference import AutoProcessor, TFAutoModel

processor = AutoProcessor.from_pretrained("${t.id}")
model = TFAutoModel.from_pretrained("${t.id}")
`],ZA=t=>[`from tensorflow_tts.inference import TFAutoModel

model = TFAutoModel.from_pretrained("${t.id}")
audios = model.inference(mels)
`],GA=t=>[`from tensorflow_tts.inference import TFAutoModel

model = TFAutoModel.from_pretrained("${t.id}")
`],eE=t=>t.tags.includes("text-to-mel")?JA(t):t.tags.includes("mel-to-wav")?ZA(t):GA(t),tE=t=>[`import timm

model = timm.create_model("hf_hub:${t.id}", pretrained=True)`],nE=()=>[`# pip install sae-lens
from sae_lens import SAE

sae, cfg_dict, sparsity = SAE.from_pretrained(
    release = "RELEASE_ID", # e.g., "gpt2-small-res-jb". See other options in https://github.com/jbloomAus/SAELens/blob/main/sae_lens/pretrained_saes.yaml
    sae_id = "SAE_ID", # e.g., "blocks.8.hook_resid_pre". Won't always be a hook point
)`],iE=()=>[`# seed_story_cfg_path refers to 'https://github.com/TencentARC/SEED-Story/blob/master/configs/clm_models/agent_7b_sft.yaml'
# llm_cfg_path refers to 'https://github.com/TencentARC/SEED-Story/blob/master/configs/clm_models/llama2chat7b_lora.yaml'
from omegaconf import OmegaConf
import hydra

# load Llama2
llm_cfg = OmegaConf.load(llm_cfg_path)
llm = hydra.utils.instantiate(llm_cfg, torch_dtype="fp16")

# initialize seed_story
seed_story_cfg = OmegaConf.load(seed_story_cfg_path)
seed_story = hydra.utils.instantiate(seed_story_cfg, llm=llm) `],oE=(t,e)=>[`import joblib
from skops.hub_utils import download
download("${t.id}", "path_to_folder")
model = joblib.load(
	"${e}"
)
# only load pickle files from sources you trust
# read more about it here https://skops.readthedocs.io/en/stable/persistence.html`],sE=(t,e)=>[`from skops.hub_utils import download
from skops.io import load
download("${t.id}", "path_to_folder")
# make sure model file is in skops format
# if model is a pickle file, make sure it's from a source you trust
model = load("path_to_folder/${e}")`],aE=t=>[`from huggingface_hub import hf_hub_download
import joblib
model = joblib.load(
	hf_hub_download("${t.id}", "sklearn_model.joblib")
)
# only load pickle files from sources you trust
# read more about it here https://skops.readthedocs.io/en/stable/persistence.html`],rE=t=>{if(t.tags.includes("skops")){const e=t.config?.sklearn?.model?.file,n=t.config?.sklearn?.model_format;return e?n==="pickle"?oE(t,e):sE(t,e):["# ⚠️ Model filename not specified in config.json"]}else return aE(t)},lE=t=>[`import torch
import torchaudio
from einops import rearrange
from stable_audio_tools import get_pretrained_model
from stable_audio_tools.inference.generation import generate_diffusion_cond

device = "cuda" if torch.cuda.is_available() else "cpu"

# Download model
model, model_config = get_pretrained_model("${t.id}")
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
torchaudio.save("output.wav", output, sample_rate)`],cE=t=>[`from huggingface_hub import from_pretrained_fastai

learn = from_pretrained_fastai("${t.id}")`],dE=t=>{const e=`# Use SAM2 with images
import torch
from sam2.sam2_image_predictor import SAM2ImagePredictor

predictor = SAM2ImagePredictor.from_pretrained(${t.id})

with torch.inference_mode(), torch.autocast("cuda", dtype=torch.bfloat16):
    predictor.set_image(<your_image>)
    masks, _, _ = predictor.predict(<input_prompts>)`,n=`# Use SAM2 with videos
import torch
from sam2.sam2_video_predictor import SAM2VideoPredictor
	
predictor = SAM2VideoPredictor.from_pretrained(${t.id})

with torch.inference_mode(), torch.autocast("cuda", dtype=torch.bfloat16):
    state = predictor.init_state(<your_video>)

    # add new prompts and instantly get the output on the same frame
    frame_idx, object_ids, masks = predictor.add_new_points(state, <your_prompts>):

    # propagate the prompts to get masklets throughout the video
    for frame_idx, object_ids, masks in predictor.propagate_in_video(state):
        ...`;return[e,n]},pE=t=>[`python -m sample_factory.huggingface.load_from_hub -r ${t.id} -d ./train_dir`];function uE(t){const e=t.widgetData?.[0];if(e?.source_sentence&&e?.sentences?.length)return[e.source_sentence,...e.sentences]}const mE=t=>{const e=t.tags.includes(Id)?", trust_remote_code=True":"";if(t.tags.includes("PyLate"))return[`from pylate import models

queries = [
    "Which planet is known as the Red Planet?",
    "What is the largest planet in our solar system?",
]

documents = [
    ["Mars is the Red Planet.", "Venus is Earth's twin."],
    ["Jupiter is the largest planet.", "Saturn has rings."],
]

model = models.ColBERT(model_name_or_path="${t.id}")

queries_emb = model.encode(queries, is_query=True)
docs_emb = model.encode(documents, is_query=False)`];if(t.tags.includes("cross-encoder")||t.pipeline_tag=="text-ranking")return[`from sentence_transformers import CrossEncoder

model = CrossEncoder("${t.id}"${e})

query = "Which planet is known as the Red Planet?"
passages = [
	"Venus is often called Earth's twin because of its similar size and proximity.",
	"Mars, known for its reddish appearance, is often referred to as the Red Planet.",
	"Jupiter, the largest planet in our solar system, has a prominent red spot.",
	"Saturn, famous for its rings, is sometimes mistaken for the Red Planet."
]

scores = model.predict([(query, passage) for passage in passages])
print(scores)`];const n=uE(t)??["The weather is lovely today.","It's so sunny outside!","He drove to the stadium."];return[`from sentence_transformers import SentenceTransformer

model = SentenceTransformer("${t.id}"${e})

sentences = ${JSON.stringify(n,null,4)}
embeddings = model.encode(sentences)

similarities = model.similarity(embeddings, embeddings)
print(similarities.shape)
# [${n.length}, ${n.length}]`]},fE=t=>[`from setfit import SetFitModel

model = SetFitModel.from_pretrained("${t.id}")`],hE=t=>[`!pip install https://huggingface.co/${t.id}/resolve/main/${Nt(t.id)}-any-py3-none-any.whl

# Using spacy.load().
import spacy
nlp = spacy.load("${Nt(t.id)}")

# Importing as module.
import ${Nt(t.id)}
nlp = ${Nt(t.id)}.load()`],gE=t=>[`from span_marker import SpanMarkerModel

model = SpanMarkerModel.from_pretrained("${t.id}")`],bE=t=>[`import stanza

stanza.download("${Nt(t.id).replace("stanza-","")}")
nlp = stanza.Pipeline("${Nt(t.id).replace("stanza-","")}")`],_E=t=>{switch(t){case"EncoderClassifier":return"classify_file";case"EncoderDecoderASR":case"EncoderASR":return"transcribe_file";case"SpectralMaskEnhancement":return"enhance_file";case"SepformerSeparation":return"separate_file";default:return}},yE=t=>{const e=t.config?.speechbrain?.speechbrain_interface;if(e===void 0)return["# interface not specified in config.json"];const n=_E(e);return n===void 0?["# interface in config.json invalid"]:[`from speechbrain.pretrained import ${e}
model = ${e}.from_hparams(
  "${t.id}"
)
model.${n}("file.wav")`]},vE=t=>[`from terratorch.registry import BACKBONE_REGISTRY

model = BACKBONE_REGISTRY.build("${t.id}")`],wE=t=>t.config?.tokenizer_config?.chat_template!==void 0||t.config?.processor_config?.chat_template!==void 0||t.config?.chat_template_jinja!==void 0,Od=t=>{const e=t.transformersInfo;if(!e)return["# ⚠️ Type of model unknown"];const n=t.tags.includes(Id)?", trust_remote_code=True":"",i=[];if(e.processor){const s=e.processor==="AutoTokenizer"?"tokenizer":e.processor==="AutoFeatureExtractor"?"extractor":"processor";i.push("# Load model directly",`from transformers import ${e.processor}, ${e.auto_model}`,"",`${s} = ${e.processor}.from_pretrained("${t.id}"`+n+")",`model = ${e.auto_model}.from_pretrained("${t.id}"`+n+")"),t.tags.includes("conversational")&&wE(t)&&(t.tags.includes("image-text-to-text")?i.push("messages = [",["    {",'        "role": "user",','        "content": [','            {"type": "image", "url": "https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/p-blog/candy.JPG"},','            {"type": "text", "text": "What animal is on the candy?"}',"        ]","    },"].join(`
`),"]"):i.push("messages = [",'    {"role": "user", "content": "Who are you?"},',"]"),i.push(`inputs = ${s}.apply_chat_template(`,"	messages,","	add_generation_prompt=True,","	tokenize=True,","	return_dict=True,",'	return_tensors="pt",',").to(model.device)","","outputs = model.generate(**inputs, max_new_tokens=40)",`print(${s}.decode(outputs[0][inputs["input_ids"].shape[-1]:]))`))}else i.push("# Load model directly",`from transformers import ${e.auto_model}`,`model = ${e.auto_model}.from_pretrained("${t.id}"`+n+', torch_dtype="auto")');if(t.pipeline_tag&&dw.transformers?.includes(t.pipeline_tag)){const s=["# Use a pipeline as a high-level helper","from transformers import pipeline","",`pipe = pipeline("${t.pipeline_tag}", model="${t.id}"`+n+")"];return t.tags.includes("conversational")?t.tags.includes("image-text-to-text")?(s.push("messages = [",["    {",'        "role": "user",','        "content": [','            {"type": "image", "url": "https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/p-blog/candy.JPG"},','            {"type": "text", "text": "What animal is on the candy?"}',"        ]","    },"].join(`
`),"]"),s.push("pipe(text=messages)")):(s.push("messages = [",'    {"role": "user", "content": "Who are you?"},',"]"),s.push("pipe(messages)")):t.pipeline_tag==="zero-shot-image-classification"?s.push("pipe(",'    "https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/hub/parrots.png",','    candidate_labels=["animals", "humans", "landscape"],',")"):t.pipeline_tag==="image-classification"&&s.push('pipe("https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/hub/parrots.png")'),[s.join(`
`),i.join(`
`)]}return[i.join(`
`)]},xE=t=>{if(!t.pipeline_tag)return["// ⚠️ Unknown pipeline tag"];const e="@huggingface/transformers";return[`// npm i ${e}
import { pipeline } from '${e}';

// Allocate pipeline
const pipe = await pipeline('${t.pipeline_tag}', '${t.id}');`]},AE=t=>{switch(t){case"CAUSAL_LM":return"CausalLM";case"SEQ_2_SEQ_LM":return"Seq2SeqLM";case"TOKEN_CLS":return"TokenClassification";case"SEQ_CLS":return"SequenceClassification";default:return}},EE=t=>{const{base_model_name_or_path:e,task_type:n}=t.config?.peft??{},i=AE(n);return i?e?[`from peft import PeftModel
from transformers import AutoModelFor${i}

base_model = AutoModelFor${i}.from_pretrained("${e}")
model = PeftModel.from_pretrained(base_model, "${t.id}")`]:["Base model is not found."]:["Task type is invalid."]},kE=t=>[`from huggingface_hub import hf_hub_download
import fasttext

model = fasttext.load_model(hf_hub_download("${t.id}", "model.bin"))`],TE=t=>[`from huggingface_sb3 import load_from_hub
checkpoint = load_from_hub(
	repo_id="${t.id}",
	filename="{MODEL FILENAME}.zip",
)`],IE=(t,e)=>{switch(t){case"ASR":return[`import nemo.collections.asr as nemo_asr
asr_model = nemo_asr.models.ASRModel.from_pretrained("${e.id}")

transcriptions = asr_model.transcribe(["file.wav"])`];default:return}},SE=t=>[`mlagents-load-from-hf --repo-id="${t.id}" --local-dir="./download: string[]s"`],CE=()=>[`string modelName = "[Your model name here].sentis";
Model model = ModelLoader.Load(Application.streamingAssetsPath + "/" + modelName);
IWorker engine = WorkerFactory.CreateWorker(BackendType.GPUCompute, model);
// Please see provided C# file for more details
`],PE=t=>[`
# Load the model and infer image from text
import torch
from app.sana_pipeline import SanaPipeline
from torchvision.utils import save_image

sana = SanaPipeline("configs/sana_config/1024ms/Sana_1600M_img1024.yaml")
sana.from_pretrained("hf://${t.id}")

image = sana(
    prompt='a cyberpunk cat with a neon sign that says "Sana"',
    height=1024,
    width=1024,
    guidance_scale=5.0,
    pag_guidance_scale=2.0,
    num_inference_steps=18,
) `],OE=t=>[`import torch, soundfile as sf, librosa, numpy as np
from vibevoice.processor.vibevoice_processor import VibeVoiceProcessor
from vibevoice.modular.modeling_vibevoice_inference import VibeVoiceForConditionalGenerationInference

# Load voice sample (should be 24kHz mono)
voice, sr = sf.read("path/to/voice_sample.wav")
if voice.ndim > 1: voice = voice.mean(axis=1)
if sr != 24000: voice = librosa.resample(voice, sr, 24000)

processor = VibeVoiceProcessor.from_pretrained("${t.id}")
model = VibeVoiceForConditionalGenerationInference.from_pretrained(
    "${t.id}", torch_dtype=torch.bfloat16
).to("cuda").eval()
model.set_ddpm_inference_steps(5)

inputs = processor(text=["Speaker 0: Hello!\\nSpeaker 1: Hi there!"],
                   voice_samples=[[voice]], return_tensors="pt")
audio = model.generate(**inputs, cfg_scale=1.3,
                       tokenizer=processor.tokenizer).speech_outputs[0]
sf.write("output.wav", audio.cpu().numpy().squeeze(), 24000)`],DE=t=>[`# Install from https://github.com/google-deepmind/videoprism
import jax
from videoprism import models as vp

flax_model = vp.get_model("${t.id}")
loaded_state = vp.load_pretrained_weights("${t.id}")

@jax.jit
def forward_fn(inputs, train=False):
  return flax_model.apply(loaded_state, inputs, train=train)`],LE=t=>[`from Trainer_finetune import Model

model = Model.from_pretrained("${t.id}")`],$E=t=>[`from huggingface_hub import hf_hub_download
	 from inference_onnx import LVFaceONNXInferencer

model_path = hf_hub_download("${t.id}", "LVFace-L_Glint360K/LVFace-L_Glint360K.onnx")
inferencer = LVFaceONNXInferencer(model_path, use_gpu=True, timeout=300)
img_path = 'path/to/image1.jpg'
embedding = inferencer.infer_from_image(img_path)`],NE=t=>[`from voicecraft import VoiceCraft

model = VoiceCraft.from_pretrained("${t.id}")`],RE=t=>[`import soundfile as sf
from voxcpm import VoxCPM

model = VoxCPM.from_pretrained("${t.id}")

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
print("saved: output.wav")`],ME=()=>[`# !pip install git+https://github.com/fluxions-ai/vui

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
`],jE=()=>[`import ChatTTS
import torchaudio

chat = ChatTTS.Chat()
chat.load_models(compile=False) # Set to True for better performance

texts = ["PUT YOUR TEXT HERE",]

wavs = chat.infer(texts, )

torchaudio.save("output1.wav", torch.from_numpy(wavs[0]), 24000)`],mc=t=>{const e=t.tags.find(s=>s.match(/^yolov\d+$/)),n=e?`YOLOv${e.slice(4)}`:"YOLOvXX";return[(e?"":`# Couldn't find a valid YOLO version tag.
# Replace XX with the correct version.
`)+`from ultralytics import ${n}

model = ${n}.from_pretrained("${t.id}")
source = 'http://images.cocodataset.org/val2017/000000039769.jpg'
model.predict(source=source, save=True)`]},UE=t=>[`# Option 1: use with transformers

from transformers import AutoModelForImageSegmentation
birefnet = AutoModelForImageSegmentation.from_pretrained("${t.id}", trust_remote_code=True)
`,`# Option 2: use with BiRefNet

# Install from https://github.com/ZhengPeng7/BiRefNet

from models.birefnet import BiRefNet
model = BiRefNet.from_pretrained("${t.id}")`],BE=t=>[`from swarmformer import SwarmFormerModel

model = SwarmFormerModel.from_pretrained("${t.id}")
`],qE=t=>[`# Follow installation instructions at https://github.com/PKU-YuanGroup/UniWorld-V1

from univa.models.qwen2p5vl.modeling_univa_qwen2p5vl import UnivaQwen2p5VLForConditionalGeneration
	model = UnivaQwen2p5VLForConditionalGeneration.from_pretrained(
        "${t.id}",
        torch_dtype=torch.bfloat16,
        attn_implementation="flash_attention_2",
    ).to("cuda")
	processor = AutoProcessor.from_pretrained("${t.id}")
`],FE=t=>[`# Download the model from the Hub
pip install huggingface_hub[hf_xet]

huggingface-cli download --local-dir ${Nt(t.id)} ${t.id}`],VE=t=>[`# Make sure mlx-lm is installed
# pip install --upgrade mlx-lm
# if on a CUDA device, also pip install mlx[cuda]

# Generate text with mlx-lm
from mlx_lm import load, generate

model, tokenizer = load("${t.id}")

prompt = "Once upon a time in"
text = generate(model, tokenizer, prompt=prompt, verbose=True)`],HE=t=>[`# Make sure mlx-lm is installed
# pip install --upgrade mlx-lm

# Generate text with mlx-lm
from mlx_lm import load, generate

model, tokenizer = load("${t.id}")

prompt = "Write a story about Einstein"
messages = [{"role": "user", "content": prompt}]
prompt = tokenizer.apply_chat_template(
    messages, add_generation_prompt=True
)

text = generate(model, tokenizer, prompt=prompt, verbose=True)`],WE=t=>[`# Make sure mlx-vlm is installed
# pip install --upgrade mlx-vlm

from mlx_vlm import load, generate
from mlx_vlm.prompt_utils import apply_chat_template
from mlx_vlm.utils import load_config

# Load the model
model, processor = load("${t.id}")
config = load_config("${t.id}")

# Prepare input
image = ["http://images.cocodataset.org/val2017/000000039769.jpg"]
prompt = "Describe this image."

# Apply chat template
formatted_prompt = apply_chat_template(
    processor, config, prompt, num_images=1
)

# Generate output
output = generate(model, processor, formatted_prompt, image)
print(output)`],KE=t=>[`from mlxim.model import create_model

model = create_model(${t.id})`],zE=t=>t.pipeline_tag==="image-text-to-text"?WE(t):t.pipeline_tag==="text-generation"?t.tags.includes("conversational")?HE(t):VE(t):FE(t),XE=t=>[`from model2vec import StaticModel

model = StaticModel.from_pretrained("${t.id}")`],YE=t=>{let e;t.tags.includes("diffusers")?e=QE(t):t.tags.includes("transformers")?e=JE(t):e=ZE(t);const n=i=>/^from pruna import PrunaModel/m.test(i)?i:`from pruna import PrunaModel
${i}`;return e=e.map(n),t.tags.includes("pruna_pro-ai")?e.map(i=>i.replace(/\bpruna\b/g,"pruna_pro").replace(/\bPrunaModel\b/g,"PrunaProModel")):e},QE=t=>Pd(t).map(n=>n.replace(/\b\w*Pipeline\w*\b/g,"PrunaModel").replace(/from diffusers import ([^,\n]*PrunaModel[^,\n]*)/g,"").replace(/from diffusers import ([^,\n]+),?\s*([^,\n]*PrunaModel[^,\n]*)/g,"from diffusers import $1").replace(/from diffusers import\s*(\n|$)/g,"").replace(/from diffusers import PrunaModel/g,"from pruna import PrunaModel").replace(/from diffusers import ([^,\n]+), PrunaModel/g,"from diffusers import $1").replace(/from diffusers import PrunaModel, ([^,\n]+)/g,"from diffusers import $1").replace(/\n\n+/g,`
`).trim()),JE=t=>{const e=t.transformersInfo;let i=Od(t).map(s=>s.replace(/from transformers import pipeline/g,"from pruna import PrunaModel").replace(/pipeline\([^)]*\)/g,`PrunaModel.from_pretrained("${t.id}")`));return e?.auto_model&&(i=i.map(s=>s.replace(new RegExp(`from transformers import ${e.auto_model}
?`,"g"),"").replace(new RegExp(`${e.auto_model}.from_pretrained`,"g"),"PrunaModel.from_pretrained").replace(new RegExp(`^.*from.*import.*(, *${e.auto_model})+.*$`,"gm"),r=>r.replace(new RegExp(`, *${e.auto_model}`,"g"),"")))),i},ZE=t=>[`from pruna import PrunaModel
model = PrunaModel.from_pretrained("${t.id}")
`],GE=t=>{let e;return t.tags.includes("automatic-speech-recognition")&&(e=IE("ASR",t)),e??["# tag did not correspond to a valid NeMo domain."]},ek=t=>{const e=t.tags??[];return e.includes("gguf")||e.includes("onnx")?[]:[`
  import outetts
  
  enum = outetts.Models("${t.id}".split("/", 1)[1])       # VERSION_1_0_SIZE_1B
  cfg  = outetts.ModelConfig.auto_config(enum, outetts.Backend.HF)
  tts  = outetts.Interface(cfg)
  
  speaker = tts.load_default_speaker("EN-FEMALE-1-NEUTRAL")
  tts.generate(
	  outetts.GenerationConfig(
		  text="Hello there, how are you doing?",
		  speaker=speaker,
	  )
  ).save("output.wav")
  `]},tk=t=>[`from pxia import AutoModel

model = AutoModel.from_pretrained("${t.id}")`],nk=t=>[`from pythae.models import AutoModel

model = AutoModel.load_from_hf_hub("${t.id}")`],ik=t=>[`from audiocraft.models import MusicGen

model = MusicGen.get_pretrained("${t.id}")

descriptions = ['happy rock', 'energetic EDM', 'sad jazz']
wav = model.generate(descriptions)  # generates 3 samples.`],ok=t=>[`from audiocraft.models import MAGNeT
	
model = MAGNeT.get_pretrained("${t.id}")

descriptions = ['disco beat', 'energetic EDM', 'funky groove']
wav = model.generate(descriptions)  # generates 3 samples.`],sk=t=>[`from audiocraft.models import AudioGen
	
model = AudioGen.get_pretrained("${t.id}")
model.set_generation_params(duration=5)  # generate 5 seconds.
descriptions = ['dog barking', 'sirene of an emergency vehicle', 'footsteps in a corridor']
wav = model.generate(descriptions)  # generates 3 samples.`],ak=t=>[`from anemoi.inference.runners.default import DefaultRunner
from anemoi.inference.config.run import RunConfiguration
# Create Configuration
config = RunConfiguration(checkpoint = {"huggingface":"${t.id}"})
# Load Runner
runner = DefaultRunner(config)`],rk=t=>t.tags.includes("musicgen")?ik(t):t.tags.includes("audiogen")?sk(t):t.tags.includes("magnet")?ok(t):["# Type of model unknown."],lk=()=>[`# Install CLI with Homebrew on macOS device
brew install whisperkit-cli

# View all available inference options
whisperkit-cli transcribe --help
	
# Download and run inference using whisper base model
whisperkit-cli transcribe --audio-path /path/to/audio.mp3

# Or use your preferred model variant
whisperkit-cli transcribe --model "large-v3" --model-prefix "distil" --audio-path /path/to/audio.mp3 --verbose`],ck=t=>[`from threedtopia_xl.models import threedtopia_xl

model = threedtopia_xl.from_pretrained("${t.id}")
model.generate(cond="path/to/image.png")`],dk=t=>[`# pip install git+https://github.com/Zyphra/Zonos.git
import torchaudio
from zonos.model import Zonos
from zonos.conditioning import make_cond_dict

model = Zonos.from_pretrained("${t.id}", device="cuda")

wav, sr = torchaudio.load("speaker.wav")           # 5-10s reference clip
speaker = model.make_speaker_embedding(wav, sr)

cond  = make_cond_dict(text="Hello, world!", speaker=speaker, language="en-us")
codes = model.generate(model.prepare_conditioning(cond))

audio = model.autoencoder.decode(codes)[0].cpu()
torchaudio.save("sample.wav", audio, model.autoencoder.sampling_rate)
`],pk={acestep:{prettyLabel:"ACE-Step",repoName:"ACE-Step",repoUrl:"https://github.com/ace-step/ACE-Step",filter:!1,countDownloads:'path:"ace_step_transformer/config.json"'},"adapter-transformers":{prettyLabel:"Adapters",repoName:"adapters",repoUrl:"https://github.com/Adapter-Hub/adapters",docsUrl:"https://huggingface.co/docs/hub/adapters",snippets:$x,filter:!0,countDownloads:'path:"adapter_config.json"'},allennlp:{prettyLabel:"AllenNLP",repoName:"AllenNLP",repoUrl:"https://github.com/allenai/allennlp",docsUrl:"https://huggingface.co/docs/hub/allennlp",snippets:Mx,filter:!0},anemoi:{prettyLabel:"AnemoI",repoName:"AnemoI",repoUrl:"https://github.com/ecmwf/anemoi-inference",docsUrl:"https://anemoi.readthedocs.io/en/latest/",filter:!1,countDownloads:'path_extension:"ckpt"',snippets:ak},araclip:{prettyLabel:"AraClip",repoName:"AraClip",repoUrl:"https://huggingface.co/Arabic-Clip/araclip",filter:!1,snippets:jx},asteroid:{prettyLabel:"Asteroid",repoName:"Asteroid",repoUrl:"https://github.com/asteroid-team/asteroid",docsUrl:"https://huggingface.co/docs/hub/asteroid",snippets:Ux,filter:!0,countDownloads:'path:"pytorch_model.bin"'},audiocraft:{prettyLabel:"Audiocraft",repoName:"audiocraft",repoUrl:"https://github.com/facebookresearch/audiocraft",snippets:rk,filter:!1,countDownloads:'path:"state_dict.bin"'},audioseal:{prettyLabel:"AudioSeal",repoName:"audioseal",repoUrl:"https://github.com/facebookresearch/audioseal",filter:!1,countDownloads:'path_extension:"pth"',snippets:Bx},"bagel-mot":{prettyLabel:"Bagel",repoName:"Bagel",repoUrl:"https://github.com/ByteDance-Seed/Bagel/",filter:!1,countDownloads:'path:"llm_config.json"'},bboxmaskpose:{prettyLabel:"BBoxMaskPose",repoName:"BBoxMaskPose",repoUrl:"https://github.com/MiraPurkrabek/BBoxMaskPose",filter:!1,countDownloads:'path_extension:"pth"'},ben2:{prettyLabel:"BEN2",repoName:"BEN2",repoUrl:"https://github.com/PramaLLC/BEN2",snippets:qx,filter:!1},bertopic:{prettyLabel:"BERTopic",repoName:"BERTopic",repoUrl:"https://github.com/MaartenGr/BERTopic",snippets:Fx,filter:!0},big_vision:{prettyLabel:"Big Vision",repoName:"big_vision",repoUrl:"https://github.com/google-research/big_vision",filter:!1,countDownloads:'path_extension:"npz"'},birder:{prettyLabel:"Birder",repoName:"Birder",repoUrl:"https://gitlab.com/birder/birder",filter:!1,countDownloads:'path_extension:"pt"'},birefnet:{prettyLabel:"BiRefNet",repoName:"BiRefNet",repoUrl:"https://github.com/ZhengPeng7/BiRefNet",snippets:UE,filter:!1},bm25s:{prettyLabel:"BM25S",repoName:"bm25s",repoUrl:"https://github.com/xhluca/bm25s",snippets:Vx,filter:!1,countDownloads:'path:"params.index.json"'},champ:{prettyLabel:"Champ",repoName:"Champ",repoUrl:"https://github.com/fudan-generative-vision/champ",countDownloads:'path:"champ/motion_module.pth"'},chatterbox:{prettyLabel:"Chatterbox",repoName:"Chatterbox",repoUrl:"https://github.com/resemble-ai/chatterbox",snippets:Hx,countDownloads:'path:"tokenizer.json"',filter:!1},chat_tts:{prettyLabel:"ChatTTS",repoName:"ChatTTS",repoUrl:"https://github.com/2noise/ChatTTS.git",snippets:jE,filter:!1,countDownloads:'path:"asset/GPT.pt"'},"cloud-agents":{prettyLabel:"Cloud Agents",repoName:"Cloud Agents",repoUrl:"https://huggingface.co/OpenPeerAI/Cloud-Agents",filter:!1,countDownloads:'path:"setup.py"'},colpali:{prettyLabel:"ColPali",repoName:"ColPali",repoUrl:"https://github.com/ManuelFay/colpali",filter:!1,countDownloads:'path:"adapter_config.json"'},comet:{prettyLabel:"COMET",repoName:"COMET",repoUrl:"https://github.com/Unbabel/COMET/",countDownloads:'path:"hparams.yaml"'},contexttab:{prettyLabel:"ConTextTab",repoName:"ConTextTab",repoUrl:"https://github.com/SAP-samples/contexttab",countDownloads:'path_extension:"pt"',snippets:Wx},cosmos:{prettyLabel:"Cosmos",repoName:"Cosmos",repoUrl:"https://github.com/NVIDIA/Cosmos",countDownloads:'path:"config.json" OR path_extension:"pt"'},"cxr-foundation":{prettyLabel:"CXR Foundation",repoName:"cxr-foundation",repoUrl:"https://github.com/google-health/cxr-foundation",snippets:Kx,filter:!1,countDownloads:'path:"precomputed_embeddings/embeddings.npz" OR path:"pax-elixr-b-text/saved_model.pb"'},deepforest:{prettyLabel:"DeepForest",repoName:"deepforest",docsUrl:"https://deepforest.readthedocs.io/en/latest/",repoUrl:"https://github.com/weecology/DeepForest"},"depth-anything-v2":{prettyLabel:"DepthAnythingV2",repoName:"Depth Anything V2",repoUrl:"https://github.com/DepthAnything/Depth-Anything-V2",snippets:zx,filter:!1,countDownloads:'path_extension:"pth"'},"depth-pro":{prettyLabel:"Depth Pro",repoName:"Depth Pro",repoUrl:"https://github.com/apple/ml-depth-pro",countDownloads:'path_extension:"pt"',snippets:Xx,filter:!1},"derm-foundation":{prettyLabel:"Derm Foundation",repoName:"derm-foundation",repoUrl:"https://github.com/google-health/derm-foundation",snippets:Yx,filter:!1,countDownloads:'path:"scin_dataset_precomputed_embeddings.npz" OR path:"saved_model.pb"'},"describe-anything":{prettyLabel:"Describe Anything",repoName:"Describe Anything",repoUrl:"https://github.com/NVlabs/describe-anything",snippets:Jx,filter:!1},"dia-tts":{prettyLabel:"Dia",repoName:"Dia",repoUrl:"https://github.com/nari-labs/dia",snippets:Qx,filter:!1},"diff-interpretation-tuning":{prettyLabel:"Diff Interpretation Tuning",repoName:"Diff Interpretation Tuning",repoUrl:"https://github.com/Aviously/diff-interpretation-tuning",filter:!1,countDownloads:'path_extension:"pt"'},diffree:{prettyLabel:"Diffree",repoName:"Diffree",repoUrl:"https://github.com/OpenGVLab/Diffree",filter:!1,countDownloads:'path:"diffree-step=000010999.ckpt"'},diffusers:{prettyLabel:"Diffusers",repoName:"🤗/diffusers",repoUrl:"https://github.com/huggingface/diffusers",docsUrl:"https://huggingface.co/docs/hub/diffusers",snippets:Pd,filter:!0},diffusionkit:{prettyLabel:"DiffusionKit",repoName:"DiffusionKit",repoUrl:"https://github.com/argmaxinc/DiffusionKit",snippets:dA},doctr:{prettyLabel:"docTR",repoName:"doctr",repoUrl:"https://github.com/mindee/doctr"},cartesia_pytorch:{prettyLabel:"Cartesia Pytorch",repoName:"Cartesia Pytorch",repoUrl:"https://github.com/cartesia-ai/cartesia_pytorch",snippets:pA},cartesia_mlx:{prettyLabel:"Cartesia MLX",repoName:"Cartesia MLX",repoUrl:"https://github.com/cartesia-ai/cartesia_mlx",snippets:uA},clipscope:{prettyLabel:"clipscope",repoName:"clipscope",repoUrl:"https://github.com/Lewington-pitsos/clipscope",filter:!1,countDownloads:'path_extension:"pt"'},cosyvoice:{prettyLabel:"CosyVoice",repoName:"CosyVoice",repoUrl:"https://github.com/FunAudioLLM/CosyVoice",filter:!1,countDownloads:'path_extension:"onnx" OR path_extension:"pt"'},cotracker:{prettyLabel:"CoTracker",repoName:"CoTracker",repoUrl:"https://github.com/facebookresearch/co-tracker",filter:!1,countDownloads:'path_extension:"pth"'},edsnlp:{prettyLabel:"EDS-NLP",repoName:"edsnlp",repoUrl:"https://github.com/aphp/edsnlp",docsUrl:"https://aphp.github.io/edsnlp/latest/",filter:!1,snippets:mA,countDownloads:'path_filename:"config" AND path_extension:"cfg"'},elm:{prettyLabel:"ELM",repoName:"elm",repoUrl:"https://github.com/slicex-ai/elm",filter:!1,countDownloads:'path_filename:"slicex_elm_config" AND path_extension:"json"'},espnet:{prettyLabel:"ESPnet",repoName:"ESPnet",repoUrl:"https://github.com/espnet/espnet",docsUrl:"https://huggingface.co/docs/hub/espnet",snippets:bA,filter:!0},fairseq:{prettyLabel:"Fairseq",repoName:"fairseq",repoUrl:"https://github.com/pytorch/fairseq",snippets:_A,filter:!0},fastai:{prettyLabel:"fastai",repoName:"fastai",repoUrl:"https://github.com/fastai/fastai",docsUrl:"https://huggingface.co/docs/hub/fastai",snippets:cE,filter:!0},fastprint:{prettyLabel:"Fast Print",repoName:"Fast Print",repoUrl:"https://huggingface.co/OpenPeerAI/FastPrint",countDownloads:'path_extension:"cs"'},fasttext:{prettyLabel:"fastText",repoName:"fastText",repoUrl:"https://fasttext.cc/",snippets:kE,filter:!0,countDownloads:'path_extension:"bin"'},flair:{prettyLabel:"Flair",repoName:"Flair",repoUrl:"https://github.com/flairNLP/flair",docsUrl:"https://huggingface.co/docs/hub/flair",snippets:yA,filter:!0,countDownloads:'path:"pytorch_model.bin"'},fme:{prettyLabel:"Full Model Emulation",repoName:"Full Model Emulation",repoUrl:"https://github.com/ai2cm/ace",docsUrl:"https://ai2-climate-emulator.readthedocs.io/en/latest/",filter:!1,countDownloads:'path_extension:"tar"'},"gemma.cpp":{prettyLabel:"gemma.cpp",repoName:"gemma.cpp",repoUrl:"https://github.com/google/gemma.cpp",filter:!1,countDownloads:'path_extension:"sbs"'},"geometry-crafter":{prettyLabel:"GeometryCrafter",repoName:"GeometryCrafter",repoUrl:"https://github.com/TencentARC/GeometryCrafter",countDownloads:'path:"point_map_vae/diffusion_pytorch_model.safetensors"'},gliner:{prettyLabel:"GLiNER",repoName:"GLiNER",repoUrl:"https://github.com/urchade/GLiNER",snippets:vA,filter:!1,countDownloads:'path:"gliner_config.json"'},"glyph-byt5":{prettyLabel:"Glyph-ByT5",repoName:"Glyph-ByT5",repoUrl:"https://github.com/AIGText/Glyph-ByT5",filter:!1,countDownloads:'path:"checkpoints/byt5_model.pt"'},grok:{prettyLabel:"Grok",repoName:"Grok",repoUrl:"https://github.com/xai-org/grok-1",filter:!1,countDownloads:'path:"ckpt/tensor00000_000" OR path:"ckpt-0/tensor00000_000"'},hallo:{prettyLabel:"Hallo",repoName:"Hallo",repoUrl:"https://github.com/fudan-generative-vision/hallo",countDownloads:'path:"hallo/net.pth"'},hermes:{prettyLabel:"HERMES",repoName:"HERMES",repoUrl:"https://github.com/LMD0311/HERMES",filter:!1,countDownloads:'path:"ckpt/hermes_final.pth"'},hezar:{prettyLabel:"Hezar",repoName:"Hezar",repoUrl:"https://github.com/hezarai/hezar",docsUrl:"https://hezarai.github.io/hezar",countDownloads:'path:"model_config.yaml" OR path:"embedding/embedding_config.yaml"'},htrflow:{prettyLabel:"HTRflow",repoName:"HTRflow",repoUrl:"https://github.com/AI-Riksarkivet/htrflow",docsUrl:"https://ai-riksarkivet.github.io/htrflow",snippets:xA},"hunyuan-dit":{prettyLabel:"HunyuanDiT",repoName:"HunyuanDiT",repoUrl:"https://github.com/Tencent/HunyuanDiT",countDownloads:'path:"pytorch_model_ema.pt" OR path:"pytorch_model_distill.pt"'},"hunyuan3d-2":{prettyLabel:"Hunyuan3D-2",repoName:"Hunyuan3D-2",repoUrl:"https://github.com/Tencent/Hunyuan3D-2",countDownloads:'path_filename:"model_index" OR path_filename:"config"'},"hunyuanworld-voyager":{prettyLabel:"HunyuanWorld-voyager",repoName:"HunyuanWorld-voyager",repoUrl:"https://github.com/Tencent-Hunyuan/HunyuanWorld-Voyager"},imstoucan:{prettyLabel:"IMS Toucan",repoName:"IMS-Toucan",repoUrl:"https://github.com/DigitalPhonetics/IMS-Toucan",countDownloads:'path:"embedding_gan.pt" OR path:"Vocoder.pt" OR path:"ToucanTTS.pt"'},"index-tts":{prettyLabel:"IndexTTS",repoName:"IndexTTS",repoUrl:"https://github.com/index-tts/index-tts",snippets:wA,filter:!1},infinitetalk:{prettyLabel:"InfiniteTalk",repoName:"InfiniteTalk",repoUrl:"https://github.com/MeiGen-AI/InfiniteTalk",filter:!1,countDownloads:'path_extension:"safetensors"'},"infinite-you":{prettyLabel:"InfiniteYou",repoName:"InfiniteYou",repoUrl:"https://github.com/bytedance/InfiniteYou",filter:!1,countDownloads:'path:"infu_flux_v1.0/sim_stage1/image_proj_model.bin" OR path:"infu_flux_v1.0/aes_stage2/image_proj_model.bin"'},keras:{prettyLabel:"Keras",repoName:"Keras",repoUrl:"https://github.com/keras-team/keras",docsUrl:"https://huggingface.co/docs/hub/keras",snippets:AA,filter:!0,countDownloads:'path:"config.json" OR path_extension:"keras"'},"tf-keras":{prettyLabel:"TF-Keras",repoName:"TF-Keras",repoUrl:"https://github.com/keras-team/tf-keras",docsUrl:"https://huggingface.co/docs/hub/tf-keras",snippets:RA,countDownloads:'path:"saved_model.pb"'},"keras-hub":{prettyLabel:"KerasHub",repoName:"KerasHub",repoUrl:"https://github.com/keras-team/keras-hub",docsUrl:"https://keras.io/keras_hub/",snippets:PA,filter:!0},"kimi-audio":{prettyLabel:"KimiAudio",repoName:"KimiAudio",repoUrl:"https://github.com/MoonshotAI/Kimi-Audio",snippets:OA,filter:!1},kittentts:{prettyLabel:"KittenTTS",repoName:"KittenTTS",repoUrl:"https://github.com/KittenML/KittenTTS",snippets:DA},kronos:{prettyLabel:"KRONOS",repoName:"KRONOS",repoUrl:"https://github.com/mahmoodlab/KRONOS",filter:!1,countDownloads:'path_extension:"pt"'},k2:{prettyLabel:"K2",repoName:"k2",repoUrl:"https://github.com/k2-fsa/k2"},"lightning-ir":{prettyLabel:"Lightning IR",repoName:"Lightning IR",repoUrl:"https://github.com/webis-de/lightning-ir",snippets:LA},litert:{prettyLabel:"LiteRT",repoName:"LiteRT",repoUrl:"https://github.com/google-ai-edge/LiteRT",filter:!1,countDownloads:'path_extension:"tflite"'},"litert-lm":{prettyLabel:"LiteRT-LM",repoName:"LiteRT-LM",repoUrl:"https://github.com/google-ai-edge/LiteRT-LM",filter:!1,countDownloads:'path_extension:"litertlm" OR path_extension:"task"'},lerobot:{prettyLabel:"LeRobot",repoName:"LeRobot",repoUrl:"https://github.com/huggingface/lerobot",docsUrl:"https://huggingface.co/docs/lerobot",filter:!1,snippets:NA},liveportrait:{prettyLabel:"LivePortrait",repoName:"LivePortrait",repoUrl:"https://github.com/KwaiVGI/LivePortrait",filter:!1,countDownloads:'path:"liveportrait/landmark.onnx"'},"llama-cpp-python":{prettyLabel:"llama-cpp-python",repoName:"llama-cpp-python",repoUrl:"https://github.com/abetlen/llama-cpp-python",snippets:$A},"mini-omni2":{prettyLabel:"Mini-Omni2",repoName:"Mini-Omni2",repoUrl:"https://github.com/gpt-omni/mini-omni2",countDownloads:'path:"model_config.yaml"'},mindspore:{prettyLabel:"MindSpore",repoName:"mindspore",repoUrl:"https://github.com/mindspore-ai/mindspore"},"magi-1":{prettyLabel:"MAGI-1",repoName:"MAGI-1",repoUrl:"https://github.com/SandAI-org/MAGI-1",countDownloads:'path:"ckpt/vae/config.json"'},"magenta-realtime":{prettyLabel:"Magenta RT",repoName:"Magenta RT",repoUrl:"https://github.com/magenta/magenta-realtime",countDownloads:'path:"checkpoints/llm_base_x4286_c1860k.tar" OR path:"checkpoints/llm_large_x3047_c1860k.tar" OR path:"checkpoints/llm_large_x3047_c1860k/checkpoint"'},"mamba-ssm":{prettyLabel:"MambaSSM",repoName:"MambaSSM",repoUrl:"https://github.com/state-spaces/mamba",filter:!1,snippets:MA},"mars5-tts":{prettyLabel:"MARS5-TTS",repoName:"MARS5-TTS",repoUrl:"https://github.com/Camb-ai/MARS5-TTS",filter:!1,countDownloads:'path:"mars5_ar.safetensors"',snippets:jA},matanyone:{prettyLabel:"MatAnyone",repoName:"MatAnyone",repoUrl:"https://github.com/pq-yang/MatAnyone",snippets:UA,filter:!1},"mesh-anything":{prettyLabel:"MeshAnything",repoName:"MeshAnything",repoUrl:"https://github.com/buaacyw/MeshAnything",filter:!1,countDownloads:'path:"MeshAnything_350m.pth"',snippets:BA},merlin:{prettyLabel:"Merlin",repoName:"Merlin",repoUrl:"https://github.com/StanfordMIMI/Merlin",filter:!1,countDownloads:'path_extension:"pt"'},medvae:{prettyLabel:"MedVAE",repoName:"MedVAE",repoUrl:"https://github.com/StanfordMIMI/MedVAE",filter:!1,countDownloads:'path_extension:"ckpt"'},mitie:{prettyLabel:"MITIE",repoName:"MITIE",repoUrl:"https://github.com/mit-nlp/MITIE",countDownloads:'path_filename:"total_word_feature_extractor"'},"ml-agents":{prettyLabel:"ml-agents",repoName:"ml-agents",repoUrl:"https://github.com/Unity-Technologies/ml-agents",docsUrl:"https://huggingface.co/docs/hub/ml-agents",snippets:SE,filter:!0,countDownloads:'path_extension:"onnx"'},mlx:{prettyLabel:"MLX",repoName:"MLX",repoUrl:"https://github.com/ml-explore/mlx-examples/tree/main",snippets:zE,filter:!0},"mlx-image":{prettyLabel:"mlx-image",repoName:"mlx-image",repoUrl:"https://github.com/riccardomusmeci/mlx-image",docsUrl:"https://huggingface.co/docs/hub/mlx-image",snippets:KE,filter:!1,countDownloads:'path:"model.safetensors"'},"mlc-llm":{prettyLabel:"MLC-LLM",repoName:"MLC-LLM",repoUrl:"https://github.com/mlc-ai/mlc-llm",docsUrl:"https://llm.mlc.ai/docs/",filter:!1,countDownloads:'path:"mlc-chat-config.json"'},model2vec:{prettyLabel:"Model2Vec",repoName:"model2vec",repoUrl:"https://github.com/MinishLab/model2vec",snippets:XE,filter:!1},moshi:{prettyLabel:"Moshi",repoName:"Moshi",repoUrl:"https://github.com/kyutai-labs/moshi",filter:!1,countDownloads:'path:"tokenizer-e351c8d8-checkpoint125.safetensors"'},mtvcraft:{prettyLabel:"MTVCraft",repoName:"MTVCraft",repoUrl:"https://github.com/baaivision/MTVCraft",filter:!1,countDownloads:'path:"vae/3d-vae.pt"'},nemo:{prettyLabel:"NeMo",repoName:"NeMo",repoUrl:"https://github.com/NVIDIA/NeMo",snippets:GE,filter:!0,countDownloads:'path_extension:"nemo" OR path:"model_config.yaml" OR path_extension:"json"'},"open-oasis":{prettyLabel:"open-oasis",repoName:"open-oasis",repoUrl:"https://github.com/etched-ai/open-oasis",countDownloads:'path:"oasis500m.safetensors"'},open_clip:{prettyLabel:"OpenCLIP",repoName:"OpenCLIP",repoUrl:"https://github.com/mlfoundations/open_clip",snippets:qA,filter:!0,countDownloads:`path:"open_clip_model.safetensors"
			OR path:"model.safetensors"
			OR path:"open_clip_pytorch_model.bin"
			OR path:"pytorch_model.bin"`},openpeerllm:{prettyLabel:"OpenPeerLLM",repoName:"OpenPeerLLM",repoUrl:"https://huggingface.co/openpeerai/openpeerllm",docsUrl:"https://huggingface.co/OpenPeerAI/OpenPeerLLM/blob/main/README.md",countDownloads:'path:".meta-huggingface.json"',filter:!1},"open-sora":{prettyLabel:"Open-Sora",repoName:"Open-Sora",repoUrl:"https://github.com/hpcaitech/Open-Sora",filter:!1,countDownloads:'path:"Open_Sora_v2.safetensors"'},outetts:{prettyLabel:"OuteTTS",repoName:"OuteTTS",repoUrl:"https://github.com/edwko/OuteTTS",snippets:ek,filter:!1},paddlenlp:{prettyLabel:"paddlenlp",repoName:"PaddleNLP",repoUrl:"https://github.com/PaddlePaddle/PaddleNLP",docsUrl:"https://huggingface.co/docs/hub/paddlenlp",snippets:FA,filter:!0,countDownloads:'path:"model_config.json"'},PaddleOCR:{prettyLabel:"PaddleOCR",repoName:"PaddleOCR",repoUrl:"https://github.com/PaddlePaddle/PaddleOCR",snippets:VA,filter:!0},peft:{prettyLabel:"PEFT",repoName:"PEFT",repoUrl:"https://github.com/huggingface/peft",snippets:EE,filter:!0,countDownloads:'path:"adapter_config.json"'},"perception-encoder":{prettyLabel:"PerceptionEncoder",repoName:"PerceptionModels",repoUrl:"https://github.com/facebookresearch/perception_models",filter:!1,snippets:HA,countDownloads:'path_extension:"pt"'},"phantom-wan":{prettyLabel:"Phantom",repoName:"Phantom",repoUrl:"https://github.com/Phantom-video/Phantom",snippets:WA,filter:!1,countDownloads:'path_extension:"pth"'},"pruna-ai":{prettyLabel:"Pruna AI",repoName:"Pruna AI",repoUrl:"https://github.com/PrunaAI/pruna",snippets:YE,docsUrl:"https://docs.pruna.ai"},pxia:{prettyLabel:"pxia",repoName:"pxia",repoUrl:"https://github.com/not-lain/pxia",snippets:tk,filter:!1},"pyannote-audio":{prettyLabel:"pyannote.audio",repoName:"pyannote-audio",repoUrl:"https://github.com/pyannote/pyannote-audio",snippets:XA,filter:!0},"py-feat":{prettyLabel:"Py-Feat",repoName:"Py-Feat",repoUrl:"https://github.com/cosanlab/py-feat",docsUrl:"https://py-feat.org/",filter:!1},pythae:{prettyLabel:"pythae",repoName:"pythae",repoUrl:"https://github.com/clementchadebec/benchmark_VAE",snippets:nk,filter:!1},recurrentgemma:{prettyLabel:"RecurrentGemma",repoName:"recurrentgemma",repoUrl:"https://github.com/google-deepmind/recurrentgemma",filter:!1,countDownloads:'path:"tokenizer.model"'},relik:{prettyLabel:"Relik",repoName:"Relik",repoUrl:"https://github.com/SapienzaNLP/relik",snippets:YA,filter:!1},refiners:{prettyLabel:"Refiners",repoName:"Refiners",repoUrl:"https://github.com/finegrain-ai/refiners",docsUrl:"https://refine.rs/",filter:!1,countDownloads:'path:"model.safetensors"'},renderformer:{prettyLabel:"RenderFormer",repoName:"RenderFormer",repoUrl:"https://github.com/microsoft/renderformer",snippets:QA,filter:!1},reverb:{prettyLabel:"Reverb",repoName:"Reverb",repoUrl:"https://github.com/revdotcom/reverb",filter:!1},rkllm:{prettyLabel:"RKLLM",repoName:"RKLLM",repoUrl:"https://github.com/airockchip/rknn-llm",countDownloads:'path_extension:"rkllm"'},saelens:{prettyLabel:"SAELens",repoName:"SAELens",repoUrl:"https://github.com/jbloomAus/SAELens",snippets:nE,filter:!1},sam2:{prettyLabel:"sam2",repoName:"sam2",repoUrl:"https://github.com/facebookresearch/segment-anything-2",filter:!1,snippets:dE,countDownloads:'path_extension:"pt"'},"sample-factory":{prettyLabel:"sample-factory",repoName:"sample-factory",repoUrl:"https://github.com/alex-petrenko/sample-factory",docsUrl:"https://huggingface.co/docs/hub/sample-factory",snippets:pE,filter:!0,countDownloads:'path:"cfg.json"'},sapiens:{prettyLabel:"sapiens",repoName:"sapiens",repoUrl:"https://github.com/facebookresearch/sapiens",filter:!1,countDownloads:'path_extension:"pt2" OR path_extension:"pth" OR path_extension:"onnx"'},seedvr:{prettyLabel:"SeedVR",repoName:"SeedVR",repoUrl:"https://github.com/ByteDance-Seed/SeedVR",filter:!1,countDownloads:'path_extension:"pth"'},"self-forcing":{prettyLabel:"SelfForcing",repoName:"SelfForcing",repoUrl:"https://github.com/guandeh17/Self-Forcing",filter:!1,countDownloads:'path_extension:"pt"'},"sentence-transformers":{prettyLabel:"sentence-transformers",repoName:"sentence-transformers",repoUrl:"https://github.com/UKPLab/sentence-transformers",docsUrl:"https://huggingface.co/docs/hub/sentence-transformers",snippets:mE,filter:!0},setfit:{prettyLabel:"setfit",repoName:"setfit",repoUrl:"https://github.com/huggingface/setfit",docsUrl:"https://huggingface.co/docs/hub/setfit",snippets:fE,filter:!0},sklearn:{prettyLabel:"Scikit-learn",repoName:"Scikit-learn",repoUrl:"https://github.com/scikit-learn/scikit-learn",snippets:rE,filter:!0,countDownloads:'path:"sklearn_model.joblib"'},spacy:{prettyLabel:"spaCy",repoName:"spaCy",repoUrl:"https://github.com/explosion/spaCy",docsUrl:"https://huggingface.co/docs/hub/spacy",snippets:hE,filter:!0,countDownloads:'path_extension:"whl"'},"span-marker":{prettyLabel:"SpanMarker",repoName:"SpanMarkerNER",repoUrl:"https://github.com/tomaarsen/SpanMarkerNER",docsUrl:"https://huggingface.co/docs/hub/span_marker",snippets:gE,filter:!0},speechbrain:{prettyLabel:"speechbrain",repoName:"speechbrain",repoUrl:"https://github.com/speechbrain/speechbrain",docsUrl:"https://huggingface.co/docs/hub/speechbrain",snippets:yE,filter:!0,countDownloads:'path:"hyperparams.yaml"'},"ssr-speech":{prettyLabel:"SSR-Speech",repoName:"SSR-Speech",repoUrl:"https://github.com/WangHelin1997/SSR-Speech",filter:!1,countDownloads:'path_extension:".pth"'},"stable-audio-tools":{prettyLabel:"Stable Audio Tools",repoName:"stable-audio-tools",repoUrl:"https://github.com/Stability-AI/stable-audio-tools.git",filter:!1,countDownloads:'path:"model.safetensors"',snippets:lE},monkeyocr:{prettyLabel:"MonkeyOCR",repoName:"monkeyocr",repoUrl:"https://github.com/Yuliang-Liu/MonkeyOCR",filter:!1,countDownloads:'path:"Recognition/config.json"'},"diffusion-single-file":{prettyLabel:"Diffusion Single File",repoName:"diffusion-single-file",repoUrl:"https://github.com/comfyanonymous/ComfyUI",filter:!1,countDownloads:'path_extension:"safetensors"'},"seed-story":{prettyLabel:"SEED-Story",repoName:"SEED-Story",repoUrl:"https://github.com/TencentARC/SEED-Story",filter:!1,countDownloads:'path:"cvlm_llama2_tokenizer/tokenizer.model"',snippets:iE},soloaudio:{prettyLabel:"SoloAudio",repoName:"SoloAudio",repoUrl:"https://github.com/WangHelin1997/SoloAudio",filter:!1,countDownloads:'path:"soloaudio_v2.pt"'},songbloom:{prettyLabel:"SongBloom",repoName:"SongBloom",repoUrl:"https://github.com/Cypress-Yang/SongBloom",filter:!1,countDownloads:'path_extension:"pt"'},"stable-baselines3":{prettyLabel:"stable-baselines3",repoName:"stable-baselines3",repoUrl:"https://github.com/huggingface/huggingface_sb3",docsUrl:"https://huggingface.co/docs/hub/stable-baselines3",snippets:TE,filter:!0,countDownloads:'path_extension:"zip"'},stanza:{prettyLabel:"Stanza",repoName:"stanza",repoUrl:"https://github.com/stanfordnlp/stanza",docsUrl:"https://huggingface.co/docs/hub/stanza",snippets:bE,filter:!0,countDownloads:'path:"models/default.zip"'},swarmformer:{prettyLabel:"SwarmFormer",repoName:"SwarmFormer",repoUrl:"https://github.com/takara-ai/SwarmFormer",snippets:BE,filter:!1},"f5-tts":{prettyLabel:"F5-TTS",repoName:"F5-TTS",repoUrl:"https://github.com/SWivid/F5-TTS",filter:!1,countDownloads:'path_extension:"safetensors" OR path_extension:"pt"'},genmo:{prettyLabel:"Genmo",repoName:"Genmo",repoUrl:"https://github.com/genmoai/models",filter:!1,countDownloads:'path:"vae_stats.json"'},"tencent-song-generation":{prettyLabel:"SongGeneration",repoName:"SongGeneration",repoUrl:"https://github.com/tencent-ailab/songgeneration",filter:!1,countDownloads:'path:"ckpt/songgeneration_base/model.pt"'},tensorflowtts:{prettyLabel:"TensorFlowTTS",repoName:"TensorFlowTTS",repoUrl:"https://github.com/TensorSpeech/TensorFlowTTS",snippets:eE},tensorrt:{prettyLabel:"TensorRT",repoName:"TensorRT",repoUrl:"https://github.com/NVIDIA/TensorRT",countDownloads:'path_extension:"onnx"'},tabpfn:{prettyLabel:"TabPFN",repoName:"TabPFN",repoUrl:"https://github.com/PriorLabs/TabPFN"},terratorch:{prettyLabel:"TerraTorch",repoName:"TerraTorch",repoUrl:"https://github.com/IBM/terratorch",docsUrl:"https://ibm.github.io/terratorch/",filter:!1,countDownloads:'path_extension:"pt" OR path_extension:"ckpt"',snippets:vE},"tic-clip":{prettyLabel:"TiC-CLIP",repoName:"TiC-CLIP",repoUrl:"https://github.com/apple/ml-tic-clip",filter:!1,countDownloads:'path_extension:"pt" AND path_prefix:"checkpoints/"'},timesfm:{prettyLabel:"TimesFM",repoName:"timesfm",repoUrl:"https://github.com/google-research/timesfm",filter:!1,countDownloads:'path:"checkpoints/checkpoint_1100000/state/checkpoint" OR path:"checkpoints/checkpoint_2150000/state/checkpoint" OR path_extension:"ckpt"'},timm:{prettyLabel:"timm",repoName:"pytorch-image-models",repoUrl:"https://github.com/rwightman/pytorch-image-models",docsUrl:"https://huggingface.co/docs/hub/timm",snippets:tE,filter:!0,countDownloads:'path:"pytorch_model.bin" OR path:"model.safetensors"'},tirex:{prettyLabel:"TiRex",repoName:"TiRex",repoUrl:"https://github.com/NX-AI/tirex",countDownloads:'path_extension:"ckpt"'},torchgeo:{prettyLabel:"TorchGeo",repoName:"TorchGeo",repoUrl:"https://github.com/microsoft/torchgeo",docsUrl:"https://torchgeo.readthedocs.io/",filter:!1,countDownloads:'path_extension:"pt" OR path_extension:"pth"'},transformers:{prettyLabel:"Transformers",repoName:"🤗/transformers",repoUrl:"https://github.com/huggingface/transformers",docsUrl:"https://huggingface.co/docs/hub/transformers",snippets:Od,filter:!0},"transformers.js":{prettyLabel:"Transformers.js",repoName:"transformers.js",repoUrl:"https://github.com/huggingface/transformers.js",docsUrl:"https://huggingface.co/docs/hub/transformers-js",snippets:xE,filter:!0},trellis:{prettyLabel:"Trellis",repoName:"Trellis",repoUrl:"https://github.com/microsoft/TRELLIS",countDownloads:'path_extension:"safetensors"'},ultralytics:{prettyLabel:"ultralytics",repoName:"ultralytics",repoUrl:"https://github.com/ultralytics/ultralytics",docsUrl:"https://github.com/ultralytics/ultralytics",filter:!1,countDownloads:'path_extension:"pt"',snippets:mc},univa:{prettyLabel:"univa",repoName:"univa",repoUrl:"https://github.com/PKU-YuanGroup/UniWorld-V1",snippets:qE,filter:!0,countDownloads:'path:"config.json"'},"uni-3dar":{prettyLabel:"Uni-3DAR",repoName:"Uni-3DAR",repoUrl:"https://github.com/dptech-corp/Uni-3DAR",docsUrl:"https://github.com/dptech-corp/Uni-3DAR",countDownloads:'path_extension:"pt"'},"unity-sentis":{prettyLabel:"unity-sentis",repoName:"unity-sentis",repoUrl:"https://github.com/Unity-Technologies/sentis-samples",snippets:CE,filter:!0,countDownloads:'path_extension:"sentis"'},sana:{prettyLabel:"Sana",repoName:"Sana",repoUrl:"https://github.com/NVlabs/Sana",countDownloads:'path_extension:"pth"',snippets:PE},videoprism:{prettyLabel:"VideoPrism",repoName:"VideoPrism",repoUrl:"https://github.com/google-deepmind/videoprism",countDownloads:'path_extension:"npz"',snippets:DE},"vfi-mamba":{prettyLabel:"VFIMamba",repoName:"VFIMamba",repoUrl:"https://github.com/MCG-NJU/VFIMamba",countDownloads:'path_extension:"pkl"',snippets:LE},lvface:{prettyLabel:"LVFace",repoName:"LVFace",repoUrl:"https://github.com/bytedance/LVFace",countDownloads:'path_extension:"pt" OR path_extension:"onnx"',snippets:$E},voicecraft:{prettyLabel:"VoiceCraft",repoName:"VoiceCraft",repoUrl:"https://github.com/jasonppy/VoiceCraft",docsUrl:"https://github.com/jasonppy/VoiceCraft",snippets:NE},voxcpm:{prettyLabel:"VoxCPM",repoName:"VoxCPM",repoUrl:"https://github.com/OpenBMB/VoxCPM",snippets:RE,filter:!1},vui:{prettyLabel:"Vui",repoName:"Vui",repoUrl:"https://github.com/vui-ai/vui",countDownloads:'path_extension:"pt"',snippets:ME},vibevoice:{prettyLabel:"VibeVoice",repoName:"VibeVoice",repoUrl:"https://github.com/microsoft/VibeVoice",snippets:OE,filter:!1},"wan2.2":{prettyLabel:"Wan2.2",repoName:"Wan2.2",repoUrl:"https://github.com/Wan-Video/Wan2.2",countDownloads:'path_filename:"config" AND path_extension:"json"'},wham:{prettyLabel:"WHAM",repoName:"wham",repoUrl:"https://huggingface.co/microsoft/wham",docsUrl:"https://huggingface.co/microsoft/wham/blob/main/README.md",countDownloads:'path_extension:"ckpt"'},whisperkit:{prettyLabel:"WhisperKit",repoName:"WhisperKit",repoUrl:"https://github.com/argmaxinc/WhisperKit",docsUrl:"https://github.com/argmaxinc/WhisperKit?tab=readme-ov-file#homebrew",snippets:lk,countDownloads:'path_filename:"model" AND path_extension:"mil" AND _exists_:"path_prefix"'},yolov10:{prettyLabel:"YOLOv10",repoName:"YOLOv10",repoUrl:"https://github.com/THU-MIG/yolov10",docsUrl:"https://github.com/THU-MIG/yolov10",countDownloads:'path_extension:"pt" OR path_extension:"safetensors"',snippets:mc},zonos:{prettyLabel:"Zonos",repoName:"Zonos",repoUrl:"https://github.com/Zyphra/Zonos",docsUrl:"https://github.com/Zyphra/Zonos",snippets:dk,filter:!1},"3dtopia-xl":{prettyLabel:"3DTopia-XL",repoName:"3DTopia-XL",repoUrl:"https://github.com/3DTopia/3DTopia-XL",filter:!1,countDownloads:'path:"model_vae_fp16.pt"',snippets:ck}};Object.entries(pk).filter(([t,e])=>e.filter).map(([t])=>t);var B;(function(t){t[t.F32=0]="F32",t[t.F16=1]="F16",t[t.Q4_0=2]="Q4_0",t[t.Q4_1=3]="Q4_1",t[t.Q4_1_SOME_F16=4]="Q4_1_SOME_F16",t[t.Q4_2=5]="Q4_2",t[t.Q4_3=6]="Q4_3",t[t.Q8_0=7]="Q8_0",t[t.Q5_0=8]="Q5_0",t[t.Q5_1=9]="Q5_1",t[t.Q2_K=10]="Q2_K",t[t.Q3_K_S=11]="Q3_K_S",t[t.Q3_K_M=12]="Q3_K_M",t[t.Q3_K_L=13]="Q3_K_L",t[t.Q4_K_S=14]="Q4_K_S",t[t.Q4_K_M=15]="Q4_K_M",t[t.Q5_K_S=16]="Q5_K_S",t[t.Q5_K_M=17]="Q5_K_M",t[t.Q6_K=18]="Q6_K",t[t.IQ2_XXS=19]="IQ2_XXS",t[t.IQ2_XS=20]="IQ2_XS",t[t.Q2_K_S=21]="Q2_K_S",t[t.IQ3_XS=22]="IQ3_XS",t[t.IQ3_XXS=23]="IQ3_XXS",t[t.IQ1_S=24]="IQ1_S",t[t.IQ4_NL=25]="IQ4_NL",t[t.IQ3_S=26]="IQ3_S",t[t.IQ3_M=27]="IQ3_M",t[t.IQ2_S=28]="IQ2_S",t[t.IQ2_M=29]="IQ2_M",t[t.IQ4_XS=30]="IQ4_XS",t[t.IQ1_M=31]="IQ1_M",t[t.BF16=32]="BF16",t[t.Q4_0_4_4=33]="Q4_0_4_4",t[t.Q4_0_4_8=34]="Q4_0_4_8",t[t.Q4_0_8_8=35]="Q4_0_8_8",t[t.TQ1_0=36]="TQ1_0",t[t.TQ2_0=37]="TQ2_0",t[t.MXFP4_MOE=38]="MXFP4_MOE",t[t.Q2_K_XL=1e3]="Q2_K_XL",t[t.Q3_K_XL=1001]="Q3_K_XL",t[t.Q4_K_XL=1002]="Q4_K_XL",t[t.Q5_K_XL=1003]="Q5_K_XL",t[t.Q6_K_XL=1004]="Q6_K_XL",t[t.Q8_K_XL=1005]="Q8_K_XL"})(B||(B={}));const uk=Object.values(B).filter(t=>typeof t=="string");new RegExp(`(?<quant>${uk.join("|")})(_(?<sizeVariation>[A-Z]+))?`);B.F32,B.BF16,B.F16,B.Q8_K_XL,B.Q8_0,B.Q6_K_XL,B.Q6_K,B.Q5_K_XL,B.Q5_K_M,B.Q5_K_S,B.Q5_0,B.Q5_1,B.Q4_K_XL,B.Q4_K_M,B.Q4_K_S,B.IQ4_NL,B.IQ4_XS,B.Q4_0_4_4,B.Q4_0_4_8,B.Q4_0_8_8,B.Q4_1_SOME_F16,B.Q4_0,B.Q4_1,B.Q4_2,B.Q4_3,B.MXFP4_MOE,B.Q3_K_XL,B.Q3_K_L,B.Q3_K_M,B.Q3_K_S,B.IQ3_M,B.IQ3_S,B.IQ3_XS,B.IQ3_XXS,B.Q2_K_XL,B.Q2_K,B.Q2_K_S,B.IQ2_M,B.IQ2_S,B.IQ2_XS,B.IQ2_XXS,B.IQ1_S,B.IQ1_M,B.TQ1_0,B.TQ2_0;var fc;(function(t){t[t.F32=0]="F32",t[t.F16=1]="F16",t[t.Q4_0=2]="Q4_0",t[t.Q4_1=3]="Q4_1",t[t.Q5_0=6]="Q5_0",t[t.Q5_1=7]="Q5_1",t[t.Q8_0=8]="Q8_0",t[t.Q8_1=9]="Q8_1",t[t.Q2_K=10]="Q2_K",t[t.Q3_K=11]="Q3_K",t[t.Q4_K=12]="Q4_K",t[t.Q5_K=13]="Q5_K",t[t.Q6_K=14]="Q6_K",t[t.Q8_K=15]="Q8_K",t[t.IQ2_XXS=16]="IQ2_XXS",t[t.IQ2_XS=17]="IQ2_XS",t[t.IQ3_XXS=18]="IQ3_XXS",t[t.IQ1_S=19]="IQ1_S",t[t.IQ4_NL=20]="IQ4_NL",t[t.IQ3_S=21]="IQ3_S",t[t.IQ2_S=22]="IQ2_S",t[t.IQ4_XS=23]="IQ4_XS",t[t.I8=24]="I8",t[t.I16=25]="I16",t[t.I32=26]="I32",t[t.I64=27]="I64",t[t.F64=28]="F64",t[t.IQ1_M=29]="IQ1_M",t[t.BF16=30]="BF16",t[t.TQ1_0=34]="TQ1_0",t[t.TQ2_0=35]="TQ2_0",t[t.MXFP4=39]="MXFP4"})(fc||(fc={}));const mk={js:{fetch:{basic:`async function query(data) {
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
{% endif %}`}}},Dd=(t,e,n)=>{const i=mk[t]?.[e]?.[n];if(!i)throw new Error(`Template not found: ${t}/${e}/${n}`);return s=>new cw(i).render({...s})};Dd("python","huggingface_hub","importInferenceClient");Dd("python","requests","importRequests");const fk="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",hk=new Ma(fk);let Pe="landing",ve=null,Mi=[];const Wi=document.querySelector("#app");function Ue(){Pe==="landing"&&!ve?bk():Pe==="login"?_k():Pe==="register"?yk():Pe==="dashboard"&&ve?vk():Pe==="pricing"&&ve&&wk()}async function gk(t){if(!t||t.length===0)return console.log("No hay tareas para analizar"),t;console.log("Tareas a analizar:",t);const e=t.map((i,s)=>`${s+1}. ${i.name}`).join(`
`);console.log("Lista de tareas:",e);const n=`Eres un experto en gestión de proyectos. Analiza estas tareas y clasifícalas por dificultad según estos criterios:

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
${e}

**INSTRUCCIONES:**
- Analiza cada tarea considerando: complejidad técnica, tiempo estimado, conocimientos requeridos
- Responde SOLO con números (1, 2 o 3) separados por comas
- Un número por cada tarea en el mismo orden
- NO agregues explicaciones, SOLO números

Ejemplo de respuesta correcta: 1,3,2,1,3`;try{const s=(await hk.chatCompletion({provider:"novita",model:"meta-llama/Llama-3.2-3B-Instruct",messages:[{role:"system",content:"Eres un experto en gestión de proyectos que clasifica tareas por dificultad de forma precisa y consistente."},{role:"user",content:n}],max_tokens:100,temperature:.2})).choices[0].message.content;console.log("Respuesta IA:",s);const r=s.match(/[1-3]/g)||[];return console.log("Números extraídos:",r),r.length<t.length&&console.warn("La IA no devolvió suficientes clasificaciones, usando valores por defecto"),t.forEach((c,p)=>{c.difficulty=parseInt(r[p])||2;const u={1:"🟢 Fácil",2:"🟡 Media",3:"🔴 Difícil"};c.difficultyLabel=u[c.difficulty]}),console.log("Tareas con dificultad:",t),t.sort((c,p)=>(c.difficulty||0)-(p.difficulty||0))}catch(i){throw console.error("Error detallado:",i),i}}function bk(){Wi.innerHTML=`
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
  `,document.getElementById("btnLogin").addEventListener("click",()=>{Pe="login",Ue()}),document.getElementById("btnRegister").addEventListener("click",()=>{Pe="register",Ue()}),document.getElementById("btnEmpezar").addEventListener("click",()=>{Pe="login",Ue()})}function _k(){Wi.innerHTML=`
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
  `,document.getElementById("btnLoginSubmit").addEventListener("click",gc),document.getElementById("loginPassword").addEventListener("keypress",t=>{t.key==="Enter"&&gc()}),document.getElementById("linkRegister").addEventListener("click",t=>{t.preventDefault(),Pe="register",Ue()})}function yk(){Wi.innerHTML=`
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
  `,document.getElementById("btnRegisterSubmit").addEventListener("click",Pk),document.getElementById("linkLogin").addEventListener("click",t=>{t.preventDefault(),Pe="login",Ue()})}function vk(){Wi.innerHTML=`
    <div style="display: flex; min-height: 100vh;">
      <!-- Sidebar -->
      <div id="sidebar" class="bg-dark text-white" style="width: 280px; min-height: 100vh; display: flex; flex-direction: column; position: fixed; left: 0; top: 0; transition: all 0.3s;">
        <div class="p-4">
          <h1 class="h3 fw-bold mb-5">ZeroChaos</h1>
          
          <nav class="nav flex-column gap-2">
            <a href="#" class="nav-link text-white d-flex align-items-center gap-3 py-3 px-3 rounded active" 
               style="background-color: rgba(255,255,255,0.1);" id="navDashboard">
              <i class="bi bi-grid-fill"></i>
              <span>Dashboard</span>
            </a>
            <a href="#" class="nav-link text-white d-flex align-items-center gap-3 py-3 px-3 rounded hover-link" id="navProjects">
              <i class="bi bi-folder-fill"></i>
              <span>Projects</span>
            </a>
            <a href="#" class="nav-link text-white d-flex align-items-center gap-3 py-3 px-3 rounded hover-link" id="navTeams">
              <i class="bi bi-people-fill"></i>
              <span>Teams</span>
            </a>
            <a href="#" class="nav-link text-white d-flex align-items-center gap-3 py-3 px-3 rounded hover-link" id="navCalendar">
              <i class="bi bi-calendar-fill"></i>
              <span>Calendar</span>
            </a>
            <a href="#" class="nav-link text-white d-flex align-items-center gap-3 py-3 px-3 rounded hover-link" id="navSettings">
              <i class="bi bi-gear-fill"></i>
              <span>Settings</span>
            </a>
          </nav>
        </div>

        <!-- Plan en el footer del sidebar -->
        <div style="margin-top: auto;" class="p-4">
          <div class="bg-secondary rounded p-3">
            <p class="mb-1 small fw-semibold">Plan Básico</p>
            <a href="#" class="text-white small text-decoration-none" id="linkPlans">Ver planes →</a>
          </div>
        </div>
      </div>

      <!-- Toggle Sidebar Button -->
      <button id="toggleSidebar" class="btn btn-dark position-fixed" 
              style="left: 280px; top: 20px; z-index: 1000; transition: left 0.3s;">
        <i class="bi bi-chevron-left"></i>
      </button>

      <!-- Main Content -->
      <div style="margin-left: 280px; flex: 1; background-color: #e2e8f0; min-height: 100vh;">
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
                <button class="btn btn-light rounded-circle" id="btnProfile">
                  <i class="bi bi-person-fill"></i>
                </button>
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
              <i class="bi bi-plus-lg me-2"></i>New Project
            </button>
          </div>

          <!-- Projects Grid -->
          <div class="row g-3 mb-5" id="projectsGrid">
            ${No()}
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

    <!-- Modal: New Project -->
    <div class="modal fade" id="newProjectModal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">New Project</h5>
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
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-primary" id="btnCreateProject">Create Project</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal: Project Details -->
    <div class="modal fade" id="projectDetailModal" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="projectDetailTitle">Project Name</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <div class="mb-4">
              <div class="input-group">
                <input type="text" class="form-control" id="newTaskName" placeholder="Add new task...">
                <button class="btn btn-success" id="btnAddTask">
                  <i class="bi bi-plus-lg"></i> Add Task
                </button>
              </div>
            </div>

            <div class="mb-3 d-flex justify-content-between align-items-center">
              <h6 class="mb-0">Tasks</h6>
              <button class="btn btn-sm btn-primary" id="btnAISort">
                🤖 Ordenar con IA
              </button>
            </div>

            <div id="tasksList"></div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" id="btnDeleteProject">Delete Project</button>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  `,Ck()}function wk(){const t=ve?.plan||"basico";Wi.innerHTML=`
    <div class="d-flex" style="min-height: 100vh;">
      ${Tk("pricing")}

      <!-- Main Content -->
      <div class="flex-grow-1" style="background-color: #f7fafc;">
        ${Ik()}

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
                          ${t==="basico"?"disabled":""}>
                    ${t==="basico"?"Plan Actual":"Empezar"}
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
                          ${t==="premium"?"disabled":""}>
                    ${t==="premium"?"Plan Actual":"Comprar ahora"}
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
                          ${t==="professional"?"disabled":""}>
                    ${t==="professional"?"Plan Actual":"Comprar ahora"}
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
  `,Ak()}function xk(){document.getElementById("navDashboard")?.addEventListener("click",t=>{t.preventDefault(),Pe="dashboard",Ue()}),document.getElementById("linkPlans")?.addEventListener("click",t=>{t.preventDefault(),Pe="pricing",Ue()}),document.getElementById("btnProfile")?.addEventListener("click",()=>{confirm("¿Cerrar sesión?")&&$d()})}function Ak(){const t=document.getElementById("billingToggle"),e=document.getElementById("monthlyLabel"),n=document.getElementById("annualLabel");let i=!1;const s={basic:{monthly:0,annual:0},premium:{monthly:9.99,annual:(9.99*12*.85).toFixed(2)},professional:{monthly:19.99,annual:(19.99*12*.85).toFixed(2)}};function r(){const m=i?"annual":"monthly",h=i?"/ año":"/ mes";document.getElementById("basicPrice").textContent=s.basic[m],document.getElementById("basicPeriod").textContent=s.basic[m]>0?h:"",document.getElementById("premiumPrice").textContent=s.premium[m],document.getElementById("premiumPeriod").textContent=h,document.getElementById("professionalPrice").textContent=s.professional[m],document.getElementById("professionalPeriod").textContent=h,i?(e.style.color="#9ca3af",n.style.color="#000"):(e.style.color="#000",n.style.color="#9ca3af")}t.addEventListener("change",()=>{i=t.checked,r()}),r();const c=document.getElementById("btnBasicPlan");c&&!c.disabled&&c.addEventListener("click",()=>{Ek("basico","Básico")});const p=document.getElementById("btnPremiumPlan");p&&!p.disabled&&p.addEventListener("click",()=>{const m=i?`$${s.premium.annual} / año`:`$${s.premium.monthly} / mes`;hc("premium","Premium",m,i)});const u=document.getElementById("btnProfessionalPlan");u&&!u.disabled&&u.addEventListener("click",()=>{const m=i?`$${s.professional.annual} / año`:`$${s.professional.monthly} / mes`;hc("professional","Professional",m,i)}),xk()}function Ek(t,e,n){ve.plan=t,ve.billingCycle="monthly",jt(),ra(`✅ Plan ${e} activado correctamente`,"success"),setTimeout(()=>{Pe="dashboard",Ue()},1500)}let Co=null;function hc(t,e,n,i){Co={planId:t,planName:e,price:n,isAnnual:i},document.getElementById("selectedPlanName").textContent=e,document.getElementById("selectedPlanPrice").textContent=n,new _t(document.getElementById("paymentModal")).show(),document.getElementById("btnConfirmPayment").onclick=()=>{kk()}}function kk(){_t.getInstance(document.getElementById("paymentModal")).hide(),ra("⏳ Procesando pago...","info"),setTimeout(()=>{ve.plan=Co.planId,ve.billingCycle=Co.isAnnual?"annual":"monthly",jt(),ra(`✅ ¡Pago exitoso! Plan ${Co.planName} activado`,"success"),setTimeout(()=>{Pe="dashboard",Ue()},2e3)},2e3)}function ra(t,e="info"){let n=document.getElementById("toastContainer");n||(n=document.createElement("div"),n.id="toastContainer",n.style.cssText="position: fixed; top: 20px; right: 20px; z-index: 9999;",document.body.appendChild(n));const i={success:"#10b981",error:"#ef4444",info:"#3b82f6",warning:"#f59e0b"},s=document.createElement("div");s.style.cssText=`
    background-color: ${i[e]||i.info};
    color: white;
    padding: 16px 24px;
    border-radius: 8px;
    margin-bottom: 10px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    animation: slideIn 0.3s ease-out;
    min-width: 300px;
  `,s.textContent=t,n.appendChild(s),setTimeout(()=>{s.style.animation="slideOut 0.3s ease-in",setTimeout(()=>s.remove(),300)},3e3)}const Ld=document.createElement("style");Ld.textContent=`
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
`;document.head.appendChild(Ld);function Tk(t="dashboard"){const e=ve?.plan==="premium"?"Premium":ve?.plan==="professional"?"Professional":"Básico";return`
    <div id="sidebar" class="bg-dark text-white d-flex flex-column" style="width: 280px; min-height: 100vh; transition: all 0.3s;">
      <div class="p-4">
        <h1 class="h3 fw-bold mb-5">ZeroChaos</h1>
        
        <nav class="nav flex-column gap-2">
          <a href="#" class="nav-link text-white d-flex align-items-center gap-3 py-3 px-3 rounded ${t==="dashboard"?"active":""} hover-link" 
             style="${t==="dashboard"?"background-color: rgba(255,255,255,0.1);":""}" id="navDashboard">
            <i class="bi bi-grid-fill"></i>
            <span>Dashboard</span>
          </a>
          <a href="#" class="nav-link text-white d-flex align-items-center gap-3 py-3 px-3 rounded hover-link" id="navProjects">
            <i class="bi bi-folder-fill"></i>
            <span>Projects</span>
          </a>
          <a href="#" class="nav-link text-white d-flex align-items-center gap-3 py-3 px-3 rounded hover-link" id="navTeams">
            <i class="bi bi-people-fill"></i>
            <span>Teams</span>
          </a>
          <a href="#" class="nav-link text-white d-flex align-items-center gap-3 py-3 px-3 rounded hover-link" id="navCalendar">
            <i class="bi bi-calendar-fill"></i>
            <span>Calendar</span>
          </a>
          <a href="#" class="nav-link text-white d-flex align-items-center gap-3 py-3 px-3 rounded hover-link" id="navSettings">
            <i class="bi bi-gear-fill"></i>
            <span>Settings</span>
          </a>
        </nav>
      </div>

      <div class="mt-auto p-4">
        <div class="bg-secondary rounded p-3">
          <p class="mb-1 small fw-semibold">Plan ${e}</p>
          <a href="#" class="text-white small text-decoration-none" id="linkPlans">Ver planes →</a>
        </div>
      </div>
    </div>

    <button id="toggleSidebar" class="btn btn-dark position-fixed" 
            style="left: 280px; top: 20px; z-index: 1000; transition: left 0.3s;">
      <i class="bi bi-chevron-left"></i>
    </button>
  `}function Ik(){return`
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
            <button class="btn btn-light rounded-circle" id="btnProfile">
              <i class="bi bi-person-fill"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  `}function No(){return!ve.projects||ve.projects.length===0?`
      <div class="col-12">
        <div class="alert alert-info">
          No projects yet. Click "New Project" to create one!
        </div>
      </div>
    `:ve.projects.map(t=>{const e=Sk(t.tasks),n=e>70?"success":e>30?"primary":"warning";return`
      <div class="col-md-4">
        <div class="card h-100 project-card" data-project-id="${t.id}" style="cursor: pointer;">
          <div class="card-body">
            <h5 class="card-title fw-bold mb-3">${t.name}</h5>
            <div class="progress mb-2" style="height: 8px;">
              <div class="progress-bar bg-${n}" style="width: ${e}%"></div>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <small class="text-muted">${t.dueDate||"No due date"}</small>
              <strong>${e}%</strong>
            </div>
          </div>
        </div>
      </div>
    `}).join("")}function Sk(t){if(!t||t.length===0)return 0;const e=t.filter(n=>n.completed).length;return Math.round(e/t.length*100)}function Ck(){document.getElementById("navDashboard")?.addEventListener("click",r=>{r.preventDefault(),Pe="dashboard",Ue()}),document.getElementById("linkPlans")?.addEventListener("click",r=>{r.preventDefault(),Pe="pricing",Ue()});const t=document.getElementById("btnProfile");t&&t.addEventListener("click",()=>{confirm("¿Cerrar sesión?")&&$d()});let e=!0;const n=document.getElementById("toggleSidebar");n&&n.addEventListener("click",()=>{const r=document.getElementById("sidebar");e?(r.style.marginLeft="-280px",n.style.left="0",n.innerHTML='<i class="bi bi-chevron-right"></i>'):(r.style.marginLeft="0",n.style.left="280px",n.innerHTML='<i class="bi bi-chevron-left"></i>'),e=!e});const i=document.getElementById("btnNewProject");i&&i.addEventListener("click",()=>{const r=document.getElementById("newProjectModal");new _t(r).show()});const s=document.getElementById("btnCreateProject");s&&s.addEventListener("click",()=>{const r=document.getElementById("newProjectName").value,c=document.getElementById("newProjectDue").value;if(!r.trim()){alert("Please enter a project name");return}ve.projects||(ve.projects=[]);const p={id:Date.now(),name:r,dueDate:c||"No due date",tasks:[],createdAt:new Date().toLocaleDateString("es-ES")};ve.projects.push(p),jt();const u=document.getElementById("newProjectModal");_t.getInstance(u).hide(),document.getElementById("newProjectName").value="",document.getElementById("newProjectDue").value="",Ue()}),document.querySelectorAll(".project-card").forEach(r=>{r.addEventListener("click",()=>{const c=parseInt(r.dataset.projectId);ca(c)})})}let la=null;function ca(t){const e=document.getElementById("btnAISort");e&&(e.onclick=async()=>{if(!n.tasks||n.tasks.length===0){alert("No hay tareas para ordenar");return}e.disabled=!0,e.innerHTML="⏳ Analizando...";try{const u=await gk([...n.tasks]);n.tasks=u,jt(),Ni(n.tasks),e.disabled=!1,e.innerHTML="🤖 Ordenar con IA",alert("✅ Tareas ordenadas por dificultad")}catch(u){console.error("Error:",u),e.disabled=!1,e.innerHTML="🤖 Ordenar con IA",alert("❌ Error: "+u.message)}}),la=t;const n=ve.projects.find(u=>u.id===t);if(!n){console.error("Project not found:",t);return}const i=document.getElementById("projectDetailTitle");i&&(i.textContent=n.name),n.tasks||(n.tasks=[]),Ni(n.tasks);const s=document.getElementById("projectDetailModal");new _t(s).show();const c=document.getElementById("btnAddTask");c&&(c.onclick=()=>{const u=document.getElementById("newTaskName").value;if(!u.trim()){alert("Please enter a task name");return}n.tasks.push({id:Date.now(),name:u,completed:!1}),document.getElementById("newTaskName").value="",Ni(n.tasks),jt();const m=document.getElementById("projectsGrid");m&&(m.innerHTML=No())});const p=document.getElementById("btnDeleteProject");p&&(p.onclick=()=>{confirm("Are you sure you want to delete this project?")&&(ve.projects=ve.projects.filter(m=>m.id!==t),jt(),_t.getInstance(s).hide(),Ue())})}function Ni(t){const e=document.getElementById("tasksList");if(!t||t.length===0){e.innerHTML='<p class="text-muted">No tasks yet. Add your first task!</p>';return}e.innerHTML=t.map(n=>`
    <div class="d-flex align-items-center gap-3 mb-3 p-3 border rounded">
      <input type="checkbox" class="form-check-input task-checkbox" 
             data-task-id="${n.id}" ${n.completed?"checked":""}>
      <span class="${n.completed?"text-decoration-line-through text-muted":""}" 
            style="flex: 1;">
        ${n.name}
        ${n.difficultyLabel?`<small class="ms-2">${n.difficultyLabel}</small>`:""}
      </span>
      <button class="btn btn-sm btn-outline-danger task-delete" data-task-id="${n.id}">
        <i class="bi bi-trash"></i>
      </button>
    </div>
  `).join(""),document.querySelectorAll(".task-checkbox").forEach(n=>{n.addEventListener("change",i=>{const s=parseInt(i.target.dataset.taskId),r=ve.projects.find(u=>u.id===la),c=r.tasks.find(u=>u.id===s);c.completed=i.target.checked,Ni(r.tasks),jt();const p=document.getElementById("projectsGrid");p&&(p.innerHTML=No(),document.querySelectorAll(".project-card").forEach(u=>{u.addEventListener("click",()=>{const m=parseInt(u.dataset.projectId);ca(m)})}))})}),document.querySelectorAll(".task-delete").forEach(n=>{n.addEventListener("click",i=>{const s=parseInt(i.currentTarget.dataset.taskId),r=ve.projects.find(p=>p.id===la);r.tasks=r.tasks.filter(p=>p.id!==s),Ni(r.tasks),jt();const c=document.getElementById("projectsGrid");c&&(c.innerHTML=No(),document.querySelectorAll(".project-card").forEach(p=>{p.addEventListener("click",()=>{const u=parseInt(p.dataset.projectId);ca(u)})}))})})}function gc(){const t=document.getElementById("loginEmail").value,e=document.getElementById("loginPassword").value,n=document.getElementById("loginError");if(!t.trim()||!e){n.textContent="Email y contraseña son requeridos",n.classList.remove("d-none");return}const i=Mi.find(s=>s.email===t&&s.password===e);if(!i){n.textContent="Email o contraseña incorrectos",n.classList.remove("d-none");return}ve=i,jt(),Pe="dashboard",Ue()}function Pk(){const t=document.getElementById("registerName").value,e=document.getElementById("registerEmail").value,n=document.getElementById("registerPassword").value,i=document.getElementById("registerConfirmPassword").value,s=document.getElementById("registerError");if(!t.trim()||!e.trim()||!n){s.textContent="Todos los campos son obligatorios",s.classList.remove("d-none");return}if(n!==i){s.textContent="Las contraseñas no coinciden",s.classList.remove("d-none");return}if(n.length<6){s.textContent="La contraseña debe tener al menos 6 caracteres",s.classList.remove("d-none");return}if(Mi.some(c=>c.email===e)){s.textContent="El email ya está registrado",s.classList.remove("d-none");return}const r={id:Date.now(),name:t,email:e,password:n,projects:[],plan:"basico",billingCycle:"monthly"};Mi.push(r),jt(),Pe="login",Ue()}function $d(){ve=null,localStorage.removeItem("zerochaos_logged_user"),Pe="landing",Ue()}function jt(){localStorage.setItem("zerochaos_users",JSON.stringify(Mi)),ve&&localStorage.setItem("zerochaos_logged_user",JSON.stringify(ve))}function Ok(){const t=localStorage.getItem("zerochaos_users"),e=localStorage.getItem("zerochaos_logged_user");t&&(Mi=JSON.parse(t)),e&&(ve=JSON.parse(e),Pe="dashboard")}Ok();Ue();
