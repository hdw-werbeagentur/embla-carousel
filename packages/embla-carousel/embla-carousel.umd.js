!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).EmblaCarousel=t()}(this,(function(){"use strict";function n(n){return"number"==typeof n}function t(n){return"string"==typeof n}function e(n){return"[object Object]"===Object.prototype.toString.call(n)}function r(n){return e(n)||function(n){return Array.isArray(n)}(n)}function o(n){return Math.abs(n)}function i(n){return n?n/o(n):0}function u(n,t){return o(n-t)}function c(n){return f(n).map(Number)}function a(n){return n[s(n)]}function s(n){return Math.max(0,n.length-1)}function f(n){return Object.keys(n)}function d(n,t){return[n,t].reduce((function(n,t){return f(t).forEach((function(r){var o=n[r],i=t[r],u=e(o)&&e(i);n[r]=u?d(o,i):i})),n}),{})}function l(n,t){var e=f(n),o=f(t);return e.length===o.length&&e.every((function(e){var o=n[e],i=t[e];return"function"==typeof o?"".concat(o)==="".concat(i):r(o)&&r(i)?l(o,i):o===i}))}function p(t,e){var r={start:function(){return 0},center:function(n){return o(n)/2},end:o};function o(n){return e-n}return{measure:function(o){return n(t)?e*Number(t):r[t](o)}}}function v(n,t){var e=o(n-t);function r(t){return t<n}function i(n){return n>t}function u(n){return r(n)||i(n)}return{length:e,max:t,min:n,constrain:function(e){return u(e)?r(e)?n:t:e},reachedAny:u,reachedMax:i,reachedMin:r,removeOffset:function(n){return e?n-e*Math.ceil((n-t)/e):n}}}function m(n,t,e){var r=v(0,n),i=r.min,u=r.constrain,c=n+1,a=s(t);function s(n){return e?o((c+n)%c):u(n)}function f(){return a}function d(n){return a=s(n),l}var l={add:function(n){return d(f()+n)},clone:function(){return m(n,f(),e)},get:f,set:d,min:i,max:n};return l}function g(){var n=[];var t={add:function(e,r,o,i){return void 0===i&&(i={passive:!0}),e.addEventListener(r,o,i),n.push((function(){return e.removeEventListener(r,o,i)})),t},removeAll:function(){return n=n.filter((function(n){return n()})),t}};return t}function x(t){var e=t;function r(n){return e/=n,i}function o(t){return n(t)?t:t.get()}var i={add:function(n){return e+=o(n),i},divide:r,get:function(){return e},multiply:function(n){return e*=n,i},normalize:function(){return 0!==e&&r(e),i},set:function(n){return e=o(n),i},subtract:function(n){return e-=o(n),i}};return i}function h(n,t,e,r,c,a,s,f,d,l,p,v,m,h,y,S){var b=n.cross,E=["INPUT","SELECT","TEXTAREA"],A={passive:!1},w=x(0),M=g(),T=g(),O=m.measure(20),P={mouse:300,touch:400},B={mouse:500,touch:600},k=y?5:16,I=1,z=0,D=0,L=!1,N=!1,C=!1,V=!1;function H(n){if(!((V=!c.isTouchEvent(n))&&0!==n.button||(t=n.target,o=t.nodeName||"",E.indexOf(o)>-1))){var t,o,i=u(r.get(),a.get())>=2,s=V||!i;L=!0,c.pointerDown(n),w.set(r),r.set(a),d.useBaseMass().useSpeed(80),function(){var n=V?document:e;T.add(n,"touchmove",R,A).add(n,"touchend",j).add(n,"mousemove",R,A).add(n,"mouseup",j)}(),z=c.readPoint(n),D=c.readPoint(n,b),v.emit("pointerDown"),s&&(C=!1)}}function R(n){if(!N&&!V){if(!n.cancelable)return j(n);var e=c.readPoint(n),o=c.readPoint(n,b),i=u(e,z),a=u(o,D);if(!(N=i>a)&&!C)return j(n)}var f=c.pointerMove(n);!C&&f&&(C=!0),s.start(),r.add(t.apply(f)),n.preventDefault()}function j(n){var e=l.byDistance(0,!1).index!==p.get(),a=c.pointerUp(n)*(y?B:P)[V?"mouse":"touch"],s=function(n,t){var e=p.clone().add(-1*i(n)),r=e.get()===p.min||e.get()===p.max,u=l.byDistance(n,!y).distance;return y||o(n)<O?u:!h&&r?.4*u:S&&t?.5*u:l.byIndex(e.get(),0).distance}(t.apply(a),e),m=function(n,t){if(0===n||0===t)return 0;if(o(n)<=o(t))return 0;var e=u(o(n),o(t));return o(e/n)}(a,s),g=u(r.get(),w.get())>=.5,x=e&&m>.75,b=o(a)<O,E=x?10:k,A=x?I+2.5*m:I;g&&!V&&(C=!0),N=!1,L=!1,T.removeAll(),d.useSpeed(b?9:E).useMass(A),f.distance(s,!y),V=!1,v.emit("pointerUp")}function q(n){C&&(n.stopPropagation(),n.preventDefault())}return{addActivationEvents:function(){var n=e;M.add(n,"dragstart",(function(n){return n.preventDefault()}),A).add(n,"touchmove",(function(){}),A).add(n,"touchend",(function(){})).add(n,"touchstart",H).add(n,"mousedown",H).add(n,"touchcancel",j).add(n,"contextmenu",j).add(n,"click",q,!0)},clickAllowed:function(){return!C},pointerDown:function(){return L},removeAllEvents:function(){M.removeAll(),T.removeAll()}}}function y(n,t,e){var r,o,u=(r=2,o=Math.pow(10,r),function(n){return Math.round(n*o)/o}),c=x(0),a=x(0),s=x(0),f=0,d=t,l=e;function p(n){return d=n,m}function v(n){return l=n,m}var m={direction:function(){return f},seek:function(t){s.set(t).subtract(n);var e,r,o,u,p=(e=s.get(),(o=0)+(e-(r=0))/(100-r)*(d-o));return f=i(s.get()),s.normalize().multiply(p).subtract(c),(u=s).divide(l),a.add(u),m},settle:function(t){var e=t.get()-n.get(),r=!u(e);return r&&n.set(t),r},update:function(){c.add(a),n.add(c),a.multiply(0)},useBaseMass:function(){return v(e)},useBaseSpeed:function(){return p(t)},useMass:v,useSpeed:p};return m}function S(n,t,e,r,i){var u=i.measure(10),c=i.measure(50),a=!1;return{constrain:function(i){if(!a&&n.reachedAny(e.get())&&n.reachedAny(t.get())){var s=n.reachedMin(t.get())?"min":"max",f=o(n[s]-t.get()),d=e.get()-t.get(),l=Math.min(f/c,.85);e.subtract(d*l),!i&&o(d)<u&&(e.set(n.constrain(e.get())),r.useSpeed(10).useMass(3))}},toggleActive:function(n){a=!n}}}function b(n,t,e,r){var o=v(-t+n,e[0]),i=e.map(o.constrain);return{snapsContained:function(){if(t<=n)return[o.max];if("keepSnaps"===r)return i;var e=function(){var n=i[0],t=a(i),e=i.lastIndexOf(n),r=i.indexOf(t)+1;return v(e,r)}(),u=e.min,c=e.max;return i.slice(u,c)}()}}function E(n,t,e,r){var o=v(t.min+.1,t.max+.1),i=o.reachedMin,u=o.reachedMax;return{loop:function(t){if(function(n){return 1===n?u(e.get()):-1===n&&i(e.get())}(t)){var o=n*(-1*t);r.forEach((function(n){return n.add(o)}))}}}}function A(n){var t=n.max,e=n.length;return{get:function(n){return(n-t)/-e}}}function w(n,t,e,r,u){var c=r.reachedAny,a=r.removeOffset,s=r.constrain;function f(n){return n.concat().sort((function(n,t){return o(n)-o(t)}))[0]}function d(t,r){var o=[t,t+e,t-e];return n?f(r?o.filter((function(n){return i(n)===r})):o):o[0]}return{byDistance:function(e,r){var i=u.get()+e,f=function(e){var r=n?a(e):s(e);return{index:t.map((function(n){return n-r})).map((function(n){return d(n,0)})).map((function(n,t){return{diff:n,index:t}})).sort((function(n,t){return o(n.diff)-o(t.diff)}))[0].index,distance:r}}(i),l=f.index,p=f.distance,v=!n&&c(i);return!r||v?{index:l,distance:e}:{index:l,distance:e+d(t[l]-p,0)}},byIndex:function(n,e){return{index:n,distance:d(t[n]-u.get(),e)}},shortcut:d}}function M(n,t,e){var r="x"===n.scroll?function(n){return"translate3d(".concat(n,"px,0px,0px)")}:function(n){return"translate3d(0px,".concat(n,"px,0px)")},o=e.style,i=!1;return{clear:function(){i||(o.transform="",e.getAttribute("style")||e.removeAttribute("style"))},to:function(n){i||(o.transform=r(t.apply(n.get())))},toggleActive:function(n){i=!n}}}function T(n,t,e,r,o,i,u,a,s){var f,d=c(o),l=c(o).reverse(),p=(f=i[0]-1,g(m(l,f),"end")).concat(function(){var n=e-i[0]-1,t=m(d,n);return g(t,"start")}());function v(n,t){return n.reduce((function(n,t){return n-o[t]}),t)}function m(n,t){return n.reduce((function(n,e){return v(n,t)>0?n.concat([e]):n}),[])}function g(e,o){var i="start"===o,c=i?-r:r,f=u.findSlideBounds([c]);return e.map((function(e){var o=i?0:-r,u=i?r:0,c=f.filter((function(n){return n.index===e}))[0][i?"end":"start"],d=x(-1),l=x(-1),p=M(n,t,s[e]);return{index:e,location:l,translate:p,target:function(){return d.set(a.get()>c?o:u)}}}))}return{canLoop:function(){return p.every((function(n){var t=n.index;return v(d.filter((function(n){return n!==t})),e)<=.1}))},clear:function(){p.forEach((function(n){return n.translate.clear()}))},loop:function(){p.forEach((function(n){var t=n.target,e=n.translate,r=n.location,o=t();o.get()!==r.get()&&(0===o.get()?e.clear():e.to(o),r.set(o))}))},loopPoints:p}}function O(n,t,e,r,o,i,u){var c=o.removeOffset,a=o.constrain,s=.5,f=i?[0,t,-t]:[0],d=l(f,u);function l(t,o){var i=t||f,u=function(n){var t=n||0;return e.map((function(n){return v(s,n-s).constrain(n*t)}))}(o);return i.reduce((function(t,o){var i=r.map((function(t,r){return{start:t-e[r]+u[r]+o,end:t+n-u[r]+o,index:r}}));return t.concat(i)}),[])}return{check:function(n,t){var e=i?c(n):a(n);return(t||d).reduce((function(n,t){var r=t.index,o=t.start,i=t.end;return!(-1!==n.indexOf(r))&&(o<e&&i>e)?n.concat([r]):n}),[])},findSlideBounds:l}}function P(t,e,r){var o=n(r);return{groupSlides:function(n){return o?function(n,t){return c(n).filter((function(n){return n%t==0})).map((function(e){return n.slice(e,e+t)}))}(n,r):function(n){return c(n).reduce((function(n,r){var o=e.slice(a(n),r+1).reduce((function(n,t){return n+t}),0);return!r||o>t?n.concat(r):n}),[]).map((function(t,e,r){return n.slice(t,r[e+1])}))}(n)}}}function B(n,t,e,r,i){var u=r.align,f=r.axis,d=r.direction,l=r.startIndex,B=r.inViewThreshold,k=r.loop,I=r.speed,z=r.dragFree,D=r.slidesToScroll,L=r.skipSnaps,N=r.containScroll,C=t.getBoundingClientRect(),V=e.map((function(n){return n.getBoundingClientRect()})),H=function(n){var t="rtl"===n?-1:1;return{apply:function(n){return n*t}}}(d),R=function(n,t){var e="y"===n?"y":"x";return{scroll:e,cross:"y"===n?"x":"y",startEdge:"y"===e?"top":"rtl"===t?"right":"left",endEdge:"y"===e?"bottom":"rtl"===t?"left":"right",measureSize:function(n){var t=n.width,r=n.height;return"x"===e?t:r}}}(f,d),j=R.measureSize(C),q=function(n){return{measure:function(t){return n*(t/100)}}}(j),F=p(u,j),U=!k&&""!==N,G=function(n,t,e,r,i){var u=n.measureSize,c=n.startEdge,f=n.endEdge,d=e[0]&&i,l=function(){if(!d)return 0;var n=e[0];return o(t[c]-n[c])}(),p=function(){if(!d)return 0;var n=window.getComputedStyle(a(r));return parseFloat(n.getPropertyValue("margin-".concat(f)))}(),v=e.map(u),m=e.map((function(n,t,e){var r=!t,o=t===s(e);return r?v[t]+l:o?v[t]+p:e[t+1][c]-n[c]})).map(o);return{slideSizes:v,slideSizesWithGaps:m}}(R,C,V,e,k||""!==N),J=G.slideSizes,W=G.slideSizesWithGaps,X=P(j,W,D),Y=function(n,t,e,r,i,u,c){var f,d=n.startEdge,l=n.endEdge,p=u.groupSlides,v=p(r).map((function(n){return a(n)[l]-n[0][d]})).map(o).map(t.measure),m=r.map((function(n){return e[d]-n[d]})).map((function(n){return-o(n)})),g=(f=a(m)-a(i),p(m).map((function(n){return n[0]})).map((function(n,t,e){var r=!t,o=t===s(e);return c&&r?0:c&&o?f:n+v[t]})));return{snaps:m,snapsAligned:g}}(R,F,C,V,W,X,U),K=Y.snaps,Q=Y.snapsAligned,Z=-a(K)+a(W),$=b(j,Z,Q,N).snapsContained,_=U?$:Q,nn=function(n,t,e){var r,o;return{limit:(r=t[0],o=a(t),v(e?r-n:o,r))}}(Z,_,k).limit,tn=m(s(_),l,k),en=tn.clone(),rn=c(e),on=function(n){var t=0;function e(n,e){return function(){n===!!t&&e()}}function r(){t=window.requestAnimationFrame(n)}return{proceed:e(!0,r),start:e(!1,r),stop:e(!0,(function(){window.cancelAnimationFrame(t),t=0}))}}((function(){k||vn.scrollBounds.constrain(vn.dragHandler.pointerDown()),vn.scrollBody.seek(an).update();var n=vn.scrollBody.settle(an);n&&!vn.dragHandler.pointerDown()&&(vn.animation.stop(),i.emit("settle")),n||i.emit("scroll"),k&&(vn.scrollLooper.loop(vn.scrollBody.direction()),vn.slideLooper.loop()),vn.translate.to(cn),vn.animation.proceed()})),un=_[tn.get()],cn=x(un),an=x(un),sn=y(cn,I,1),fn=w(k,_,Z,nn,an),dn=function(n,t,e,r,o,i){function u(r){var u=r.distance,c=r.index!==t.get();u&&(n.start(),o.add(u)),c&&(e.set(t.get()),t.set(r.index),i.emit("select"))}return{distance:function(n,t){u(r.byDistance(n,t))},index:function(n,e){var o=t.clone().set(n);u(r.byIndex(o.get(),e))}}}(on,tn,en,fn,an,i),ln=O(j,Z,J,K,nn,k,B),pn=h(R,H,n,an,function(n){var t,e;function r(n){return"undefined"!=typeof TouchEvent&&n instanceof TouchEvent}function i(n){return n.timeStamp}function u(t,e){var o=e||n.scroll,i="client".concat("x"===o?"X":"Y");return(r(t)?t.touches[0]:t)[i]}return{isTouchEvent:r,pointerDown:function(n){return t=n,e=n,u(n)},pointerMove:function(n){var r=u(n)-u(e),o=i(n)-i(t)>170;return e=n,o&&(t=n),r},pointerUp:function(n){if(!t||!e)return 0;var r=u(e)-u(t),c=i(n)-i(t),a=i(n)-i(e)>170,s=r/c;return c&&!a&&o(s)>.1?s:0},readPoint:u}}(R),cn,on,dn,sn,fn,tn,i,q,k,z,L),vn={containerRect:C,slideRects:V,animation:on,axis:R,direction:H,dragHandler:pn,eventStore:g(),percentOfView:q,index:tn,indexPrevious:en,limit:nn,location:cn,options:r,scrollBody:sn,scrollBounds:S(nn,cn,an,sn,q),scrollLooper:E(Z,nn,cn,[cn,an]),scrollProgress:A(nn),scrollSnaps:_,scrollTarget:fn,scrollTo:dn,slideLooper:T(R,H,j,Z,W,_,ln,cn,e),slidesToScroll:X,slidesInView:ln,slideIndexes:rn,target:an,translate:M(R,H,t)};return vn}var k={align:"center",axis:"x",container:null,slides:null,containScroll:"",direction:"ltr",slidesToScroll:1,breakpoints:{},dragFree:!1,draggable:!0,inViewThreshold:0,loop:!1,skipSnaps:!1,speed:10,startIndex:0,active:!0};function I(){function n(n,t){return d(n,t||{})}return{merge:n,areEqual:function(n,t){return JSON.stringify(f(n.breakpoints||{}))===JSON.stringify(f(t.breakpoints||{}))&&l(n,t)},atMedia:function(t){var e=t.breakpoints||{},r=f(e).filter((function(n){return window.matchMedia(n).matches})).map((function(n){return e[n]})).reduce((function(t,e){return n(t,e)}),{});return n(t,r)}}}function z(n,e,r){var o,i,u,c,a=g(),s=I(),f=function(){var n=I(),t=n.atMedia,e=n.areEqual,r=[],o=[];function i(n){var r=t(n.options);return function(){return!e(r,t(n.options))}}var u={init:function(n,e){return o=n.map(i),(r=n.filter((function(n){return t(n.options).active}))).forEach((function(n){return n.init(e)})),n.reduce((function(n,t){var e;return Object.assign(n,((e={})[t.name]=t,e))}),{})},destroy:function(){r=r.filter((function(n){return n.destroy()}))},haveChanged:function(){return o.some((function(n){return n()}))}};return u}(),d=function(){var n={};function t(t){return n[t]||[]}var e={emit:function(n){return t(n).forEach((function(t){return t(n)})),e},off:function(r,o){return n[r]=t(r).filter((function(n){return n!==o})),e},on:function(r,o){return n[r]=t(r).concat([o]),e}};return e}(),l=d.on,p=d.off,v=E,m=!1,x=s.merge(k,z.globalOptions),h=s.merge(x),y=[],S=0;function b(e,r){if(!m){if(x=s.merge(x,e),h=s.atMedia(x),function(){var e=h.container,r=h.slides,o=t(e)?n.querySelector(e):e;u=o||n.children[0];var i=t(r)?u.querySelectorAll(r):r;c=[].slice.call(i||u.children)}(),o=B(n,u,c,h,d),S=o.axis.measureSize(n.getBoundingClientRect()),!h.active)return A();if(o.translate.to(o.location),y=r||y,i=f.init(y,O),h.loop){if(!o.slideLooper.canLoop())return A(),b({loop:!1},r),void(x=s.merge(x,{loop:!0}));o.slideLooper.loop()}h.draggable&&u.offsetParent&&c.length&&o.dragHandler.addActivationEvents()}}function E(n,t){var e=T();A(),b(s.merge({startIndex:e},n),t),d.emit("reInit")}function A(){o.dragHandler.removeAllEvents(),o.animation.stop(),o.eventStore.removeAll(),o.translate.clear(),o.slideLooper.clear(),f.destroy()}function w(n){var t=o[n?"target":"location"].get(),e=h.loop?"removeOffset":"constrain";return o.slidesInView.check(o.limit[e](t))}function M(n,t,e){h.active&&!m&&(o.scrollBody.useBaseMass().useSpeed(t?100:h.speed),o.scrollTo.index(n,e||0))}function T(){return o.index.get()}var O={canScrollNext:function(){return o.index.clone().add(1).get()!==T()},canScrollPrev:function(){return o.index.clone().add(-1).get()!==T()},clickAllowed:function(){return o.dragHandler.clickAllowed()},containerNode:function(){return u},internalEngine:function(){return o},destroy:function(){m||(m=!0,a.removeAll(),A(),d.emit("destroy"))},off:p,on:l,plugins:function(){return i},previousScrollSnap:function(){return o.indexPrevious.get()},reInit:v,rootNode:function(){return n},scrollNext:function(n){M(o.index.clone().add(1).get(),!0===n,-1)},scrollPrev:function(n){M(o.index.clone().add(-1).get(),!0===n,1)},scrollProgress:function(){return o.scrollProgress.get(o.location.get())},scrollSnapList:function(){return o.scrollSnaps.map(o.scrollProgress.get)},scrollTo:M,selectedScrollSnap:T,slideNodes:function(){return c},slidesInView:w,slidesNotInView:function(n){var t=w(n);return o.slideIndexes.filter((function(n){return-1===t.indexOf(n)}))}};return b(e,r),a.add(window,"resize",(function(){var t=s.atMedia(x),e=!s.areEqual(t,h),r=o.axis.measureSize(n.getBoundingClientRect()),i=S!==r,u=f.haveChanged();(i||e||u)&&E(),d.emit("resize")})),setTimeout((function(){return d.emit("init")}),0),O}return z.globalOptions=void 0,z.optionsHandler=I,z}));
