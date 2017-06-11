
Date.now||(Date.now=function(){return(new Date).getTime()}),function(t,e){"use strict";function n(){if(!o){o=!0;for(var t=0;t<s.length;t++)s[t].fn.call(window,s[t].ctx);s=[]}}function i(){"complete"===document.readyState&&n()}t=t||"docReady";var s=[],o=!1,a=!1;(e=e||window)[t]=function(t,e){if("function"!=typeof t)throw new TypeError("callback for docReady(fn) must be a function");return o?void setTimeout(function(){t(e)},1):(s.push({fn:t,ctx:e}),void("complete"===document.readyState||!document.attachEvent&&"interactive"===document.readyState?setTimeout(n,1):a||(document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):(document.attachEvent("onreadystatechange",i),window.attachEvent("onload",n)),a=!0)))}}("__sharethis__docReady",window),document.querySelectorAll||(document.querySelectorAll=function(t){var e,n=document.createElement("style"),i=[];for(document.documentElement.firstChild.appendChild(n),document._qsa=[],n.styleSheet.cssText=t+"{x-qsa:expression(document._qsa && document._qsa.push(this))}",window.scrollBy(0,0),n.parentNode.removeChild(n);document._qsa.length;)(e=document._qsa.shift()).style.removeAttribute("x-qsa"),i.push(e);return document._qsa=null,i}),document.querySelector||(document.querySelector=function(t){var e=document.querySelectorAll(t);return e.length?e[0]:null}),Array.prototype.indexOf||(Array.prototype.indexOf=function(t,e){var n;if(null==this)throw new TypeError('"this" is null or not defined');var i=Object(this),s=i.length>>>0;if(0===s)return-1;if(n=+e||0,1/0===Math.abs(n)&&(n=0),n>=s)return-1;for(n=Math.max(0<=n?n:s-Math.abs(n),0);n<s;){if(n in i&&i[n]===t)return n;n++}return-1}),function(){var t,e=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++)if(e in this&&this[e]===t)return e;return-1};null==window.__sharethis__&&(window.__sharethis__={}),(t=window.__sharethis__).protocol="https:"===document.location.protocol?"https":"http",t.METRICS=t.protocol+"://platform-metrics-api.sharethis.com",t.API=t.protocol+"://platform-api.sharethis.com",t.SECOND=1e3,t.MINUTE=60*t.SECOND,t.HOUR=60*t.MINUTE,t.DAY=24*t.HOUR,t.WEEK=7*t.DAY,t.BORDER_BOX="-moz-box-sizing: border-box;\n-webkit-box-sizing: border-box;\nbox-sizing: border-box;",t.BORDER_RADIUS=function(e){return"-moz-border-radius: "+t.px(e)+";\n-webkit-border-radius: "+t.px(e)+";\nborder-radius: "+t.px(e)+";"},t.BOX_SHADOW=function(t){return"-moz-box-shadow: "+t+";\n-webkit-box-shadow: "+t+";\nbox-shadow: "+t+";"},t.FLEX="-moz-flex: 1;\n-ms-flex: 1;\n-webkit-flex: 1;\nflex: 1;",t.FONT_FAMILY='font-family: "Helvetica Neue", Verdana, Helvetica, Arial, sans-serif;',t.TRANSFORM=function(t){return"-ms-transform: "+t+";\n-webkit-transform: "+t+";\ntransform: "+t+";"},t.TRANSITION=function(t,e){var n,i,s,o;for(null==t&&(t=["all"]),null==e&&(e="0.2s"),o=[],n=0,i=t.length;n<i;n++)s=t[n],o.push(s+" "+e+" ease-in");return"-moz-transition: "+(o=o.join(", "))+"; -ms-transition: "+o+"; -o-transition: "+o+"; -webkit-transition: "+o+"; transition: "+o+";"},t._uid=0,t.uid=function(){return++t._uid},t.cache={},t.get=function(e){return t.cache[e]},t.set=function(e,n){return t.cache[e]=n},t.has=function(e){return null!=t.cache[e]},t.addClass=function(t,n){var i,s,o,a;for(i=(t.className||"").split(" "),"string"==typeof n&&(n=[n]),s=0,o=n.length;s<o;s++)null!=(a=n[s])&&e.call(i,a)<0&&i.push(a);return t.className=i.join(" ")},t.addEventListener=function(t,e,n){if(t&&e&&n)return t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent?t.attachEvent("on"+e,n):t["on"+e]=n},t.capitalize=function(t){return""+t.charAt(0).toUpperCase()+t.substring(1).toLowerCase()},t.close=function(e){if(t.removeClass(document.body,"st-body-no-scroll"),e)return t.addClass(e,"st-hidden"),setTimeout(function(){return t.remove(e)},200)},t.css=function(t){var e,n;return e=document.getElementsByTagName("head")[0],(n=document.createElement("style")).setAttribute("type","text/css"),n.styleSheet?n.styleSheet.cssText=t:n.appendChild(document.createTextNode(t)),e.appendChild(n)},t.formatNumber=function(t){return t>1e6?Math.round(t/1e6*10)/10+"m":t>1e3?Math.round(t/1e3*10)/10+"k":""+t},t.getCookie=function(t){var e,n;return n="; "+document.cookie,e=n.split("; "+t+"="),2===e.length?e.pop().split(";").shift():null},t.getDescription=function(){var t,e,n,i,s,o,a,r,l;for(n=0,s=(a=["property","name"]).length;n<s;n++)for(e=a[n],r=["og:description","twitter:description","description","Description"],i=0,o=r.length;i<o;i++)if(l=r[i],t=document.querySelector("meta["+e+"='"+l+"']"))return t.content;return""},t.getImage=function(){var t,e,n,i,s,o,a,r,l;for(n=0,s=(a=["property","name"]).length;n<s;n++)for(e=a[n],r=["og:image","twitter:image"],i=0,o=r.length;i<o;i++)if(l=r[i],t=document.querySelector("meta["+e+"='"+l+"']"))return t.content;return""},t.getScrollbarWidth=function(){var t,e,n;return e=document.createElement("div"),e.style.visibility="hidden",e.style.width="100px",e.style.msOverflowStyle="scrollbar",e.style.overflow="scroll",document.body.appendChild(e),t=document.createElement("div"),t.style.width="100%",e.appendChild(t),n=e.offsetWidth-t.offsetWidth,e.parentNode.removeChild(e),n},t.getScrollDepth=function(){var e,n,i,s,o;return i=document.documentElement,e=document.body,n=Math.max.apply(Math,[e.scrollHeight||0,e.offsetHeight||0,i.clientHeight||0,i.scrollHeight||0,i.offsetHeight||0]),o=t.getWindowSize().height,s=window.pageYOffset||(i||e.parentNode||e).scrollTop,Math.floor(100*(o+s)/n)},t.getShareLabel=function(e,n){var i;switch(null==n&&(n="en"),i="",e){case"email":i=t.i18n.email[n];break;case"pinterest":i=t.i18n.pin[n];break;case"print":i=t.i18n.print[n];break;case"twitter":i=t.i18n.tweet[n];break;default:i=t.i18n.share[n]}return t.capitalize(i)},t.getTitle=function(){var t,e,n,i,s,o,a,r,l;for(n=0,s=(a=["property","name"]).length;n<s;n++)for(e=a[n],r=["og:title","twitter:title"],i=0,o=r.length;i<o;i++)if(l=r[i],t=document.querySelector("meta["+e+"='"+l+"']"))return t.content;return document.title},t.getWindowSize=function(){var t,e,n,i;return t=document.body,e=document.documentElement,n=window.innerHeight,i=window.innerWidth,{height:n||e.clientHeight||t.clientHeight,width:i||e.clientWidth||t.clientWidth}},t.hasClass=function(t,e){return new RegExp(e).test(t.className)},t.hasCookies=function(){var t;return t="__sharethis_cookie_test__",document.cookie=t,document.cookie.indexOf(t)>-1}(),t.hasLocalStorage=function(){var t;t="__sharethis_local_storage_test__";try{return localStorage.setItem(t,"hello world"),localStorage.removeItem(t),!0}catch(t){return!1}}(),t.hostname=function(e){var n;return null==e&&(e=t.href),(n=document.createElement("a")).setAttribute("href",e),n.hostname},t.img=function(t){if(t)return'<img src="'+t+'" />'},t.inc=function(e){var n;return n=t.parseNumber(e.innerText),e.innerText=t.formatNumber(n+1),t.addClass(e,"st-grow"),setTimeout(function(){return t.removeClass(e,"st-grow")},400)},t.isEnter=function(t){return 13===t.which||13===t.keyCode},t.isEsc=function(t){var e;return"Escape"===(e=t.key)||"Esc"===e||27===t.keyCode},t.isValidEmail=function(t){return/[^\.\s@][^\s@]*(?!\.)@[^\.\s@]+(?:\.[^\.\s@]+)* /.test(t)},t.js=function(t){var e,n;return e=document.createElement("script"),e.async=1,e.src=t,(n=document.getElementsByTagName("script")[0]).parentNode.insertBefore(e,n)},t.loader={},t.load=function(e,n){var i;return"function"==typeof(i=t.loader)[e]?i[e](n):void 0},t.load_counts_cache={},t.loadCounts=function(e,n){var i,s,o,a,r,l;return n||(a=[{},e],e=a[0],n=a[1]),null==e.facebook&&(e.facebook=!1),null==e.type&&(e.type="shares"),null==e.url&&(e.url=t.href),o="count:"+JSON.stringify(e),null==(i=t.load_counts_cache)[o]&&(i[o]={callbacks:[n],response:null,status:"init"}),"complete"===(null!=(r=t.load_counts_cache[o])?r.status:void 0)?n(t.load_counts_cache[o].response):"in-progress"===(null!=(l=t.load_counts_cache[o])?l.status:void 0)?t.load_counts_cache[o].callbacks.push(n):(s="cb"+t.uid(),t[s]=function(n){var i,s,a,r,l,c,d,u,p,h,m,f,g,b;if(null==n&&(n={}),s={},"reactions"===e.type)for(u in t.REACTIONS)b=(null!=(p=n.reactions)?p[u]:void 0)||0,s[u]={value:b,label:t.formatNumber(b)};if("shares"===e.type){for(a=0,l=(h=t.networks).length;a<l;a++)d=h[a],b=((null!=(m=n.clicks)?m[d]:void 0)||0)+((null!=(f=n.shares)?f[d]:void 0)||0),s[d]={value:b,label:t.formatNumber(b)};s.total={value:n.total,label:t.formatNumber(n.total)}}if(e.facebook)return null==s.facebook&&(s.facebook={value:0}),null==(i=s.facebook).value&&(i.value=0),t.loadFacebookShareCount(e.url,function(e){var n,i,a,r;for(b=Math.max(e,s.facebook.value),r=s.total.value-s.facebook.value+b,s.facebook={value:b,label:t.formatNumber(b)},s.total={value:r,label:t.formatNumber(r)},t.load_counts_cache[o].response=s,t.load_counts_cache[o].status="complete",n=0,i=(a=t.load_counts_cache[o].callbacks).length;n<i;n++)(0,a[n])(s);return t.load_counts_cache[o].callbacks=[]});for(t.load_counts_cache[o].response=s,t.load_counts_cache[o].status="complete",r=0,c=(g=t.load_counts_cache[o].callbacks).length;r<c;r++)(0,g[r])(s);return t.load_counts_cache[o].callbacks=[]},t.load_counts_cache[o].status="in-progress",t.js(t.protocol+":