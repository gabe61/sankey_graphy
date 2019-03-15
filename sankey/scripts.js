/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.1",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;while(s--)h[s]="#"+c+" "+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElement("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});

;/*! pace 1.0.2 */
(function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X=[].slice,Y={}.hasOwnProperty,Z=function(a,b){function c(){this.constructor=a}for(var d in b)Y.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},$=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};for(u={catchupTime:100,initialRate:.03,minTime:250,ghostTime:100,maxProgressPerFrame:20,easeFactor:1.25,startOnPageLoad:!0,restartOnPushState:!0,restartOnRequestAfter:500,target:"body",elements:{checkInterval:100,selectors:["body"]},eventLag:{minSamples:10,sampleCount:3,lagThreshold:3},ajax:{trackMethods:["GET"],trackWebSockets:!0,ignoreURLs:[]}},C=function(){var a;return null!=(a="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance.now():void 0)?a:+new Date},E=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,t=window.cancelAnimationFrame||window.mozCancelAnimationFrame,null==E&&(E=function(a){return setTimeout(a,50)},t=function(a){return clearTimeout(a)}),G=function(a){var b,c;return b=C(),(c=function(){var d;return d=C()-b,d>=33?(b=C(),a(d,function(){return E(c)})):setTimeout(c,33-d)})()},F=function(){var a,b,c;return c=arguments[0],b=arguments[1],a=3<=arguments.length?X.call(arguments,2):[],"function"==typeof c[b]?c[b].apply(c,a):c[b]},v=function(){var a,b,c,d,e,f,g;for(b=arguments[0],d=2<=arguments.length?X.call(arguments,1):[],f=0,g=d.length;g>f;f++)if(c=d[f])for(a in c)Y.call(c,a)&&(e=c[a],null!=b[a]&&"object"==typeof b[a]&&null!=e&&"object"==typeof e?v(b[a],e):b[a]=e);return b},q=function(a){var b,c,d,e,f;for(c=b=0,e=0,f=a.length;f>e;e++)d=a[e],c+=Math.abs(d),b++;return c/b},x=function(a,b){var c,d,e;if(null==a&&(a="options"),null==b&&(b=!0),e=document.querySelector("[data-pace-"+a+"]")){if(c=e.getAttribute("data-pace-"+a),!b)return c;try{return JSON.parse(c)}catch(f){return d=f,"undefined"!=typeof console&&null!==console?console.error("Error parsing inline pace options",d):void 0}}},g=function(){function a(){}return a.prototype.on=function(a,b,c,d){var e;return null==d&&(d=!1),null==this.bindings&&(this.bindings={}),null==(e=this.bindings)[a]&&(e[a]=[]),this.bindings[a].push({handler:b,ctx:c,once:d})},a.prototype.once=function(a,b,c){return this.on(a,b,c,!0)},a.prototype.off=function(a,b){var c,d,e;if(null!=(null!=(d=this.bindings)?d[a]:void 0)){if(null==b)return delete this.bindings[a];for(c=0,e=[];c<this.bindings[a].length;)e.push(this.bindings[a][c].handler===b?this.bindings[a].splice(c,1):c++);return e}},a.prototype.trigger=function(){var a,b,c,d,e,f,g,h,i;if(c=arguments[0],a=2<=arguments.length?X.call(arguments,1):[],null!=(g=this.bindings)?g[c]:void 0){for(e=0,i=[];e<this.bindings[c].length;)h=this.bindings[c][e],d=h.handler,b=h.ctx,f=h.once,d.apply(null!=b?b:this,a),i.push(f?this.bindings[c].splice(e,1):e++);return i}},a}(),j=window.Pace||{},window.Pace=j,v(j,g.prototype),D=j.options=v({},u,window.paceOptions,x()),U=["ajax","document","eventLag","elements"],Q=0,S=U.length;S>Q;Q++)K=U[Q],D[K]===!0&&(D[K]=u[K]);i=function(a){function b(){return V=b.__super__.constructor.apply(this,arguments)}return Z(b,a),b}(Error),b=function(){function a(){this.progress=0}return a.prototype.getElement=function(){var a;if(null==this.el){if(a=document.querySelector(D.target),!a)throw new i;this.el=document.createElement("div"),this.el.className="pace pace-active",document.body.className=document.body.className.replace(/pace-done/g,""),document.body.className+=" pace-running",this.el.innerHTML='<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>',null!=a.firstChild?a.insertBefore(this.el,a.firstChild):a.appendChild(this.el)}return this.el},a.prototype.finish=function(){var a;return a=this.getElement(),a.className=a.className.replace("pace-active",""),a.className+=" pace-inactive",document.body.className=document.body.className.replace("pace-running",""),document.body.className+=" pace-done"},a.prototype.update=function(a){return this.progress=a,this.render()},a.prototype.destroy=function(){try{this.getElement().parentNode.removeChild(this.getElement())}catch(a){i=a}return this.el=void 0},a.prototype.render=function(){var a,b,c,d,e,f,g;if(null==document.querySelector(D.target))return!1;for(a=this.getElement(),d="translate3d("+this.progress+"%, 0, 0)",g=["webkitTransform","msTransform","transform"],e=0,f=g.length;f>e;e++)b=g[e],a.children[0].style[b]=d;return(!this.lastRenderedProgress||this.lastRenderedProgress|0!==this.progress|0)&&(a.children[0].setAttribute("data-progress-text",""+(0|this.progress)+"%"),this.progress>=100?c="99":(c=this.progress<10?"0":"",c+=0|this.progress),a.children[0].setAttribute("data-progress",""+c)),this.lastRenderedProgress=this.progress},a.prototype.done=function(){return this.progress>=100},a}(),h=function(){function a(){this.bindings={}}return a.prototype.trigger=function(a,b){var c,d,e,f,g;if(null!=this.bindings[a]){for(f=this.bindings[a],g=[],d=0,e=f.length;e>d;d++)c=f[d],g.push(c.call(this,b));return g}},a.prototype.on=function(a,b){var c;return null==(c=this.bindings)[a]&&(c[a]=[]),this.bindings[a].push(b)},a}(),P=window.XMLHttpRequest,O=window.XDomainRequest,N=window.WebSocket,w=function(a,b){var c,d,e;e=[];for(d in b.prototype)try{e.push(null==a[d]&&"function"!=typeof b[d]?"function"==typeof Object.defineProperty?Object.defineProperty(a,d,{get:function(){return b.prototype[d]},configurable:!0,enumerable:!0}):a[d]=b.prototype[d]:void 0)}catch(f){c=f}return e},A=[],j.ignore=function(){var a,b,c;return b=arguments[0],a=2<=arguments.length?X.call(arguments,1):[],A.unshift("ignore"),c=b.apply(null,a),A.shift(),c},j.track=function(){var a,b,c;return b=arguments[0],a=2<=arguments.length?X.call(arguments,1):[],A.unshift("track"),c=b.apply(null,a),A.shift(),c},J=function(a){var b;if(null==a&&(a="GET"),"track"===A[0])return"force";if(!A.length&&D.ajax){if("socket"===a&&D.ajax.trackWebSockets)return!0;if(b=a.toUpperCase(),$.call(D.ajax.trackMethods,b)>=0)return!0}return!1},k=function(a){function b(){var a,c=this;b.__super__.constructor.apply(this,arguments),a=function(a){var b;return b=a.open,a.open=function(d,e){return J(d)&&c.trigger("request",{type:d,url:e,request:a}),b.apply(a,arguments)}},window.XMLHttpRequest=function(b){var c;return c=new P(b),a(c),c};try{w(window.XMLHttpRequest,P)}catch(d){}if(null!=O){window.XDomainRequest=function(){var b;return b=new O,a(b),b};try{w(window.XDomainRequest,O)}catch(d){}}if(null!=N&&D.ajax.trackWebSockets){window.WebSocket=function(a,b){var d;return d=null!=b?new N(a,b):new N(a),J("socket")&&c.trigger("request",{type:"socket",url:a,protocols:b,request:d}),d};try{w(window.WebSocket,N)}catch(d){}}}return Z(b,a),b}(h),R=null,y=function(){return null==R&&(R=new k),R},I=function(a){var b,c,d,e;for(e=D.ajax.ignoreURLs,c=0,d=e.length;d>c;c++)if(b=e[c],"string"==typeof b){if(-1!==a.indexOf(b))return!0}else if(b.test(a))return!0;return!1},y().on("request",function(b){var c,d,e,f,g;return f=b.type,e=b.request,g=b.url,I(g)?void 0:j.running||D.restartOnRequestAfter===!1&&"force"!==J(f)?void 0:(d=arguments,c=D.restartOnRequestAfter||0,"boolean"==typeof c&&(c=0),setTimeout(function(){var b,c,g,h,i,k;if(b="socket"===f?e.readyState<2:0<(h=e.readyState)&&4>h){for(j.restart(),i=j.sources,k=[],c=0,g=i.length;g>c;c++){if(K=i[c],K instanceof a){K.watch.apply(K,d);break}k.push(void 0)}return k}},c))}),a=function(){function a(){var a=this;this.elements=[],y().on("request",function(){return a.watch.apply(a,arguments)})}return a.prototype.watch=function(a){var b,c,d,e;return d=a.type,b=a.request,e=a.url,I(e)?void 0:(c="socket"===d?new n(b):new o(b),this.elements.push(c))},a}(),o=function(){function a(a){var b,c,d,e,f,g,h=this;if(this.progress=0,null!=window.ProgressEvent)for(c=null,a.addEventListener("progress",function(a){return h.progress=a.lengthComputable?100*a.loaded/a.total:h.progress+(100-h.progress)/2},!1),g=["load","abort","timeout","error"],d=0,e=g.length;e>d;d++)b=g[d],a.addEventListener(b,function(){return h.progress=100},!1);else f=a.onreadystatechange,a.onreadystatechange=function(){var b;return 0===(b=a.readyState)||4===b?h.progress=100:3===a.readyState&&(h.progress=50),"function"==typeof f?f.apply(null,arguments):void 0}}return a}(),n=function(){function a(a){var b,c,d,e,f=this;for(this.progress=0,e=["error","open"],c=0,d=e.length;d>c;c++)b=e[c],a.addEventListener(b,function(){return f.progress=100},!1)}return a}(),d=function(){function a(a){var b,c,d,f;for(null==a&&(a={}),this.elements=[],null==a.selectors&&(a.selectors=[]),f=a.selectors,c=0,d=f.length;d>c;c++)b=f[c],this.elements.push(new e(b))}return a}(),e=function(){function a(a){this.selector=a,this.progress=0,this.check()}return a.prototype.check=function(){var a=this;return document.querySelector(this.selector)?this.done():setTimeout(function(){return a.check()},D.elements.checkInterval)},a.prototype.done=function(){return this.progress=100},a}(),c=function(){function a(){var a,b,c=this;this.progress=null!=(b=this.states[document.readyState])?b:100,a=document.onreadystatechange,document.onreadystatechange=function(){return null!=c.states[document.readyState]&&(c.progress=c.states[document.readyState]),"function"==typeof a?a.apply(null,arguments):void 0}}return a.prototype.states={loading:0,interactive:50,complete:100},a}(),f=function(){function a(){var a,b,c,d,e,f=this;this.progress=0,a=0,e=[],d=0,c=C(),b=setInterval(function(){var g;return g=C()-c-50,c=C(),e.push(g),e.length>D.eventLag.sampleCount&&e.shift(),a=q(e),++d>=D.eventLag.minSamples&&a<D.eventLag.lagThreshold?(f.progress=100,clearInterval(b)):f.progress=100*(3/(a+3))},50)}return a}(),m=function(){function a(a){this.source=a,this.last=this.sinceLastUpdate=0,this.rate=D.initialRate,this.catchup=0,this.progress=this.lastProgress=0,null!=this.source&&(this.progress=F(this.source,"progress"))}return a.prototype.tick=function(a,b){var c;return null==b&&(b=F(this.source,"progress")),b>=100&&(this.done=!0),b===this.last?this.sinceLastUpdate+=a:(this.sinceLastUpdate&&(this.rate=(b-this.last)/this.sinceLastUpdate),this.catchup=(b-this.progress)/D.catchupTime,this.sinceLastUpdate=0,this.last=b),b>this.progress&&(this.progress+=this.catchup*a),c=1-Math.pow(this.progress/100,D.easeFactor),this.progress+=c*this.rate*a,this.progress=Math.min(this.lastProgress+D.maxProgressPerFrame,this.progress),this.progress=Math.max(0,this.progress),this.progress=Math.min(100,this.progress),this.lastProgress=this.progress,this.progress},a}(),L=null,H=null,r=null,M=null,p=null,s=null,j.running=!1,z=function(){return D.restartOnPushState?j.restart():void 0},null!=window.history.pushState&&(T=window.history.pushState,window.history.pushState=function(){return z(),T.apply(window.history,arguments)}),null!=window.history.replaceState&&(W=window.history.replaceState,window.history.replaceState=function(){return z(),W.apply(window.history,arguments)}),l={ajax:a,elements:d,document:c,eventLag:f},(B=function(){var a,c,d,e,f,g,h,i;for(j.sources=L=[],g=["ajax","elements","document","eventLag"],c=0,e=g.length;e>c;c++)a=g[c],D[a]!==!1&&L.push(new l[a](D[a]));for(i=null!=(h=D.extraSources)?h:[],d=0,f=i.length;f>d;d++)K=i[d],L.push(new K(D));return j.bar=r=new b,H=[],M=new m})(),j.stop=function(){return j.trigger("stop"),j.running=!1,r.destroy(),s=!0,null!=p&&("function"==typeof t&&t(p),p=null),B()},j.restart=function(){return j.trigger("restart"),j.stop(),j.start()},j.go=function(){var a;return j.running=!0,r.render(),a=C(),s=!1,p=G(function(b,c){var d,e,f,g,h,i,k,l,n,o,p,q,t,u,v,w;for(l=100-r.progress,e=p=0,f=!0,i=q=0,u=L.length;u>q;i=++q)for(K=L[i],o=null!=H[i]?H[i]:H[i]=[],h=null!=(w=K.elements)?w:[K],k=t=0,v=h.length;v>t;k=++t)g=h[k],n=null!=o[k]?o[k]:o[k]=new m(g),f&=n.done,n.done||(e++,p+=n.tick(b));return d=p/e,r.update(M.tick(b,d)),r.done()||f||s?(r.update(100),j.trigger("done"),setTimeout(function(){return r.finish(),j.running=!1,j.trigger("hide")},Math.max(D.ghostTime,Math.max(D.minTime-(C()-a),0)))):c()})},j.start=function(a){v(D,a),j.running=!0;try{r.render()}catch(b){i=b}return document.querySelector(".pace")?(j.trigger("start"),j.go()):setTimeout(j.start,50)},"function"==typeof define&&define.amd?define(["pace"],function(){return j}):"object"==typeof exports?module.exports=j:D.startOnPageLoad&&j.start()}).call(this);
;/* perfect-scrollbar v0.6.11 */
!function t(e,n,r){function o(l,a){if(!n[l]){if(!e[l]){var s="function"==typeof require&&require;if(!a&&s)return s(l,!0);if(i)return i(l,!0);var c=new Error("Cannot find module '"+l+"'");throw c.code="MODULE_NOT_FOUND",c}var u=n[l]={exports:{}};e[l][0].call(u.exports,function(t){var n=e[l][1][t];return o(n?n:t)},u,u.exports,t,e,n,r)}return n[l].exports}for(var i="function"==typeof require&&require,l=0;l<r.length;l++)o(r[l]);return o}({1:[function(t,e,n){"use strict";function r(t){t.fn.perfectScrollbar=function(t){return this.each(function(){if("object"==typeof t||"undefined"==typeof t){var e=t;i.get(this)||o.initialize(this,e)}else{var n=t;"update"===n?o.update(this):"destroy"===n&&o.destroy(this)}})}}var o=t("../main"),i=t("../plugin/instances");if("function"==typeof define&&define.amd)define(["jquery"],r);else{var l=window.jQuery?window.jQuery:window.$;"undefined"!=typeof l&&r(l)}e.exports=r},{"../main":7,"../plugin/instances":18}],2:[function(t,e,n){"use strict";function r(t,e){var n=t.className.split(" ");n.indexOf(e)<0&&n.push(e),t.className=n.join(" ")}function o(t,e){var n=t.className.split(" "),r=n.indexOf(e);r>=0&&n.splice(r,1),t.className=n.join(" ")}n.add=function(t,e){t.classList?t.classList.add(e):r(t,e)},n.remove=function(t,e){t.classList?t.classList.remove(e):o(t,e)},n.list=function(t){return t.classList?Array.prototype.slice.apply(t.classList):t.className.split(" ")}},{}],3:[function(t,e,n){"use strict";function r(t,e){return window.getComputedStyle(t)[e]}function o(t,e,n){return"number"==typeof n&&(n=n.toString()+"px"),t.style[e]=n,t}function i(t,e){for(var n in e){var r=e[n];"number"==typeof r&&(r=r.toString()+"px"),t.style[n]=r}return t}var l={};l.e=function(t,e){var n=document.createElement(t);return n.className=e,n},l.appendTo=function(t,e){return e.appendChild(t),t},l.css=function(t,e,n){return"object"==typeof e?i(t,e):"undefined"==typeof n?r(t,e):o(t,e,n)},l.matches=function(t,e){return"undefined"!=typeof t.matches?t.matches(e):"undefined"!=typeof t.matchesSelector?t.matchesSelector(e):"undefined"!=typeof t.webkitMatchesSelector?t.webkitMatchesSelector(e):"undefined"!=typeof t.mozMatchesSelector?t.mozMatchesSelector(e):"undefined"!=typeof t.msMatchesSelector?t.msMatchesSelector(e):void 0},l.remove=function(t){"undefined"!=typeof t.remove?t.remove():t.parentNode&&t.parentNode.removeChild(t)},l.queryChildren=function(t,e){return Array.prototype.filter.call(t.childNodes,function(t){return l.matches(t,e)})},e.exports=l},{}],4:[function(t,e,n){"use strict";var r=function(t){this.element=t,this.events={}};r.prototype.bind=function(t,e){"undefined"==typeof this.events[t]&&(this.events[t]=[]),this.events[t].push(e),this.element.addEventListener(t,e,!1)},r.prototype.unbind=function(t,e){var n="undefined"!=typeof e;this.events[t]=this.events[t].filter(function(r){return n&&r!==e?!0:(this.element.removeEventListener(t,r,!1),!1)},this)},r.prototype.unbindAll=function(){for(var t in this.events)this.unbind(t)};var o=function(){this.eventElements=[]};o.prototype.eventElement=function(t){var e=this.eventElements.filter(function(e){return e.element===t})[0];return"undefined"==typeof e&&(e=new r(t),this.eventElements.push(e)),e},o.prototype.bind=function(t,e,n){this.eventElement(t).bind(e,n)},o.prototype.unbind=function(t,e,n){this.eventElement(t).unbind(e,n)},o.prototype.unbindAll=function(){for(var t=0;t<this.eventElements.length;t++)this.eventElements[t].unbindAll()},o.prototype.once=function(t,e,n){var r=this.eventElement(t),o=function(t){r.unbind(e,o),n(t)};r.bind(e,o)},e.exports=o},{}],5:[function(t,e,n){"use strict";e.exports=function(){function t(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return function(){return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()}}()},{}],6:[function(t,e,n){"use strict";var r=t("./class"),o=t("./dom"),i=n.toInt=function(t){return parseInt(t,10)||0},l=n.clone=function(t){if(null===t)return null;if(t.constructor===Array)return t.map(l);if("object"==typeof t){var e={};for(var n in t)e[n]=l(t[n]);return e}return t};n.extend=function(t,e){var n=l(t);for(var r in e)n[r]=l(e[r]);return n},n.isEditable=function(t){return o.matches(t,"input,[contenteditable]")||o.matches(t,"select,[contenteditable]")||o.matches(t,"textarea,[contenteditable]")||o.matches(t,"button,[contenteditable]")},n.removePsClasses=function(t){for(var e=r.list(t),n=0;n<e.length;n++){var o=e[n];0===o.indexOf("ps-")&&r.remove(t,o)}},n.outerWidth=function(t){return i(o.css(t,"width"))+i(o.css(t,"paddingLeft"))+i(o.css(t,"paddingRight"))+i(o.css(t,"borderLeftWidth"))+i(o.css(t,"borderRightWidth"))},n.startScrolling=function(t,e){r.add(t,"ps-in-scrolling"),"undefined"!=typeof e?r.add(t,"ps-"+e):(r.add(t,"ps-x"),r.add(t,"ps-y"))},n.stopScrolling=function(t,e){r.remove(t,"ps-in-scrolling"),"undefined"!=typeof e?r.remove(t,"ps-"+e):(r.remove(t,"ps-x"),r.remove(t,"ps-y"))},n.env={isWebKit:"WebkitAppearance"in document.documentElement.style,supportsTouch:"ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch,supportsIePointer:null!==window.navigator.msMaxTouchPoints}},{"./class":2,"./dom":3}],7:[function(t,e,n){"use strict";var r=t("./plugin/destroy"),o=t("./plugin/initialize"),i=t("./plugin/update");e.exports={initialize:o,update:i,destroy:r}},{"./plugin/destroy":9,"./plugin/initialize":17,"./plugin/update":21}],8:[function(t,e,n){"use strict";e.exports={handlers:["click-rail","drag-scrollbar","keyboard","wheel","touch"],maxScrollbarLength:null,minScrollbarLength:null,scrollXMarginOffset:0,scrollYMarginOffset:0,stopPropagationOnClick:!0,suppressScrollX:!1,suppressScrollY:!1,swipePropagation:!0,useBothWheelAxes:!1,wheelPropagation:!1,wheelSpeed:1,theme:"default"}},{}],9:[function(t,e,n){"use strict";var r=t("../lib/helper"),o=t("../lib/dom"),i=t("./instances");e.exports=function(t){var e=i.get(t);e&&(e.event.unbindAll(),o.remove(e.scrollbarX),o.remove(e.scrollbarY),o.remove(e.scrollbarXRail),o.remove(e.scrollbarYRail),r.removePsClasses(t),i.remove(t))}},{"../lib/dom":3,"../lib/helper":6,"./instances":18}],10:[function(t,e,n){"use strict";function r(t,e){function n(t){return t.getBoundingClientRect()}var r=function(t){t.stopPropagation()};e.settings.stopPropagationOnClick&&e.event.bind(e.scrollbarY,"click",r),e.event.bind(e.scrollbarYRail,"click",function(r){var i=o.toInt(e.scrollbarYHeight/2),s=e.railYRatio*(r.pageY-window.pageYOffset-n(e.scrollbarYRail).top-i),c=e.railYRatio*(e.railYHeight-e.scrollbarYHeight),u=s/c;0>u?u=0:u>1&&(u=1),a(t,"top",(e.contentHeight-e.containerHeight)*u),l(t),r.stopPropagation()}),e.settings.stopPropagationOnClick&&e.event.bind(e.scrollbarX,"click",r),e.event.bind(e.scrollbarXRail,"click",function(r){var i=o.toInt(e.scrollbarXWidth/2),s=e.railXRatio*(r.pageX-window.pageXOffset-n(e.scrollbarXRail).left-i),c=e.railXRatio*(e.railXWidth-e.scrollbarXWidth),u=s/c;0>u?u=0:u>1&&(u=1),a(t,"left",(e.contentWidth-e.containerWidth)*u-e.negativeScrollAdjustment),l(t),r.stopPropagation()})}var o=t("../../lib/helper"),i=t("../instances"),l=t("../update-geometry"),a=t("../update-scroll");e.exports=function(t){var e=i.get(t);r(t,e)}},{"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],11:[function(t,e,n){"use strict";function r(t,e){function n(n){var o=r+n*e.railXRatio,l=Math.max(0,e.scrollbarXRail.getBoundingClientRect().left)+e.railXRatio*(e.railXWidth-e.scrollbarXWidth);0>o?e.scrollbarXLeft=0:o>l?e.scrollbarXLeft=l:e.scrollbarXLeft=o;var a=i.toInt(e.scrollbarXLeft*(e.contentWidth-e.containerWidth)/(e.containerWidth-e.railXRatio*e.scrollbarXWidth))-e.negativeScrollAdjustment;c(t,"left",a)}var r=null,o=null,a=function(e){n(e.pageX-o),s(t),e.stopPropagation(),e.preventDefault()},u=function(){i.stopScrolling(t,"x"),e.event.unbind(e.ownerDocument,"mousemove",a)};e.event.bind(e.scrollbarX,"mousedown",function(n){o=n.pageX,r=i.toInt(l.css(e.scrollbarX,"left"))*e.railXRatio,i.startScrolling(t,"x"),e.event.bind(e.ownerDocument,"mousemove",a),e.event.once(e.ownerDocument,"mouseup",u),n.stopPropagation(),n.preventDefault()})}function o(t,e){function n(n){var o=r+n*e.railYRatio,l=Math.max(0,e.scrollbarYRail.getBoundingClientRect().top)+e.railYRatio*(e.railYHeight-e.scrollbarYHeight);0>o?e.scrollbarYTop=0:o>l?e.scrollbarYTop=l:e.scrollbarYTop=o;var a=i.toInt(e.scrollbarYTop*(e.contentHeight-e.containerHeight)/(e.containerHeight-e.railYRatio*e.scrollbarYHeight));c(t,"top",a)}var r=null,o=null,a=function(e){n(e.pageY-o),s(t),e.stopPropagation(),e.preventDefault()},u=function(){i.stopScrolling(t,"y"),e.event.unbind(e.ownerDocument,"mousemove",a)};e.event.bind(e.scrollbarY,"mousedown",function(n){o=n.pageY,r=i.toInt(l.css(e.scrollbarY,"top"))*e.railYRatio,i.startScrolling(t,"y"),e.event.bind(e.ownerDocument,"mousemove",a),e.event.once(e.ownerDocument,"mouseup",u),n.stopPropagation(),n.preventDefault()})}var i=t("../../lib/helper"),l=t("../../lib/dom"),a=t("../instances"),s=t("../update-geometry"),c=t("../update-scroll");e.exports=function(t){var e=a.get(t);r(t,e),o(t,e)}},{"../../lib/dom":3,"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],12:[function(t,e,n){"use strict";function r(t,e){function n(n,r){var o=t.scrollTop;if(0===n){if(!e.scrollbarYActive)return!1;if(0===o&&r>0||o>=e.contentHeight-e.containerHeight&&0>r)return!e.settings.wheelPropagation}var i=t.scrollLeft;if(0===r){if(!e.scrollbarXActive)return!1;if(0===i&&0>n||i>=e.contentWidth-e.containerWidth&&n>0)return!e.settings.wheelPropagation}return!0}var r=!1;e.event.bind(t,"mouseenter",function(){r=!0}),e.event.bind(t,"mouseleave",function(){r=!1});var l=!1;e.event.bind(e.ownerDocument,"keydown",function(c){if(!c.isDefaultPrevented||!c.isDefaultPrevented()){var u=i.matches(e.scrollbarX,":focus")||i.matches(e.scrollbarY,":focus");if(r||u){var d=document.activeElement?document.activeElement:e.ownerDocument.activeElement;if(d){if("IFRAME"===d.tagName)d=d.contentDocument.activeElement;else for(;d.shadowRoot;)d=d.shadowRoot.activeElement;if(o.isEditable(d))return}var p=0,f=0;switch(c.which){case 37:p=-30;break;case 38:f=30;break;case 39:p=30;break;case 40:f=-30;break;case 33:f=90;break;case 32:f=c.shiftKey?90:-90;break;case 34:f=-90;break;case 35:f=c.ctrlKey?-e.contentHeight:-e.containerHeight;break;case 36:f=c.ctrlKey?t.scrollTop:e.containerHeight;break;default:return}s(t,"top",t.scrollTop-f),s(t,"left",t.scrollLeft+p),a(t),l=n(p,f),l&&c.preventDefault()}}})}var o=t("../../lib/helper"),i=t("../../lib/dom"),l=t("../instances"),a=t("../update-geometry"),s=t("../update-scroll");e.exports=function(t){var e=l.get(t);r(t,e)}},{"../../lib/dom":3,"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],13:[function(t,e,n){"use strict";function r(t,e){function n(n,r){var o=t.scrollTop;if(0===n){if(!e.scrollbarYActive)return!1;if(0===o&&r>0||o>=e.contentHeight-e.containerHeight&&0>r)return!e.settings.wheelPropagation}var i=t.scrollLeft;if(0===r){if(!e.scrollbarXActive)return!1;if(0===i&&0>n||i>=e.contentWidth-e.containerWidth&&n>0)return!e.settings.wheelPropagation}return!0}function r(t){var e=t.deltaX,n=-1*t.deltaY;return"undefined"!=typeof e&&"undefined"!=typeof n||(e=-1*t.wheelDeltaX/6,n=t.wheelDeltaY/6),t.deltaMode&&1===t.deltaMode&&(e*=10,n*=10),e!==e&&n!==n&&(e=0,n=t.wheelDelta),[e,n]}function o(e,n){var r=t.querySelector("textarea:hover, .ps-child:hover");if(r){if("TEXTAREA"!==r.tagName&&!window.getComputedStyle(r).overflow.match(/(scroll|auto)/))return!1;var o=r.scrollHeight-r.clientHeight;if(o>0&&!(0===r.scrollTop&&n>0||r.scrollTop===o&&0>n))return!0;var i=r.scrollLeft-r.clientWidth;if(i>0&&!(0===r.scrollLeft&&0>e||r.scrollLeft===i&&e>0))return!0}return!1}function a(a){var c=r(a),u=c[0],d=c[1];o(u,d)||(s=!1,e.settings.useBothWheelAxes?e.scrollbarYActive&&!e.scrollbarXActive?(d?l(t,"top",t.scrollTop-d*e.settings.wheelSpeed):l(t,"top",t.scrollTop+u*e.settings.wheelSpeed),s=!0):e.scrollbarXActive&&!e.scrollbarYActive&&(u?l(t,"left",t.scrollLeft+u*e.settings.wheelSpeed):l(t,"left",t.scrollLeft-d*e.settings.wheelSpeed),s=!0):(l(t,"top",t.scrollTop-d*e.settings.wheelSpeed),l(t,"left",t.scrollLeft+u*e.settings.wheelSpeed)),i(t),s=s||n(u,d),s&&(a.stopPropagation(),a.preventDefault()))}var s=!1;"undefined"!=typeof window.onwheel?e.event.bind(t,"wheel",a):"undefined"!=typeof window.onmousewheel&&e.event.bind(t,"mousewheel",a)}var o=t("../instances"),i=t("../update-geometry"),l=t("../update-scroll");e.exports=function(t){var e=o.get(t);r(t,e)}},{"../instances":18,"../update-geometry":19,"../update-scroll":20}],14:[function(t,e,n){"use strict";function r(t,e){e.event.bind(t,"scroll",function(){i(t)})}var o=t("../instances"),i=t("../update-geometry");e.exports=function(t){var e=o.get(t);r(t,e)}},{"../instances":18,"../update-geometry":19}],15:[function(t,e,n){"use strict";function r(t,e){function n(){var t=window.getSelection?window.getSelection():document.getSelection?document.getSelection():"";return 0===t.toString().length?null:t.getRangeAt(0).commonAncestorContainer}function r(){c||(c=setInterval(function(){return i.get(t)?(a(t,"top",t.scrollTop+u.top),a(t,"left",t.scrollLeft+u.left),void l(t)):void clearInterval(c)},50))}function s(){c&&(clearInterval(c),c=null),o.stopScrolling(t)}var c=null,u={top:0,left:0},d=!1;e.event.bind(e.ownerDocument,"selectionchange",function(){t.contains(n())?d=!0:(d=!1,s())}),e.event.bind(window,"mouseup",function(){d&&(d=!1,s())}),e.event.bind(window,"mousemove",function(e){if(d){var n={x:e.pageX,y:e.pageY},i={left:t.offsetLeft,right:t.offsetLeft+t.offsetWidth,top:t.offsetTop,bottom:t.offsetTop+t.offsetHeight};n.x<i.left+3?(u.left=-5,o.startScrolling(t,"x")):n.x>i.right-3?(u.left=5,o.startScrolling(t,"x")):u.left=0,n.y<i.top+3?(i.top+3-n.y<5?u.top=-5:u.top=-20,o.startScrolling(t,"y")):n.y>i.bottom-3?(n.y-i.bottom+3<5?u.top=5:u.top=20,o.startScrolling(t,"y")):u.top=0,0===u.top&&0===u.left?s():r()}})}var o=t("../../lib/helper"),i=t("../instances"),l=t("../update-geometry"),a=t("../update-scroll");e.exports=function(t){var e=i.get(t);r(t,e)}},{"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],16:[function(t,e,n){"use strict";function r(t,e,n,r){function o(n,r){var o=t.scrollTop,i=t.scrollLeft,l=Math.abs(n),a=Math.abs(r);if(a>l){if(0>r&&o===e.contentHeight-e.containerHeight||r>0&&0===o)return!e.settings.swipePropagation}else if(l>a&&(0>n&&i===e.contentWidth-e.containerWidth||n>0&&0===i))return!e.settings.swipePropagation;return!0}function s(e,n){a(t,"top",t.scrollTop-n),a(t,"left",t.scrollLeft-e),l(t)}function c(){Y=!0}function u(){Y=!1}function d(t){return t.targetTouches?t.targetTouches[0]:t}function p(t){return t.targetTouches&&1===t.targetTouches.length?!0:!(!t.pointerType||"mouse"===t.pointerType||t.pointerType===t.MSPOINTER_TYPE_MOUSE)}function f(t){if(p(t)){w=!0;var e=d(t);v.pageX=e.pageX,v.pageY=e.pageY,g=(new Date).getTime(),null!==y&&clearInterval(y),t.stopPropagation()}}function h(t){if(!w&&e.settings.swipePropagation&&f(t),!Y&&w&&p(t)){var n=d(t),r={pageX:n.pageX,pageY:n.pageY},i=r.pageX-v.pageX,l=r.pageY-v.pageY;s(i,l),v=r;var a=(new Date).getTime(),c=a-g;c>0&&(m.x=i/c,m.y=l/c,g=a),o(i,l)&&(t.stopPropagation(),t.preventDefault())}}function b(){!Y&&w&&(w=!1,clearInterval(y),y=setInterval(function(){return i.get(t)?Math.abs(m.x)<.01&&Math.abs(m.y)<.01?void clearInterval(y):(s(30*m.x,30*m.y),m.x*=.8,void(m.y*=.8)):void clearInterval(y)},10))}var v={},g=0,m={},y=null,Y=!1,w=!1;n&&(e.event.bind(window,"touchstart",c),e.event.bind(window,"touchend",u),e.event.bind(t,"touchstart",f),e.event.bind(t,"touchmove",h),e.event.bind(t,"touchend",b)),r&&(window.PointerEvent?(e.event.bind(window,"pointerdown",c),e.event.bind(window,"pointerup",u),e.event.bind(t,"pointerdown",f),e.event.bind(t,"pointermove",h),e.event.bind(t,"pointerup",b)):window.MSPointerEvent&&(e.event.bind(window,"MSPointerDown",c),e.event.bind(window,"MSPointerUp",u),e.event.bind(t,"MSPointerDown",f),e.event.bind(t,"MSPointerMove",h),e.event.bind(t,"MSPointerUp",b)))}var o=t("../../lib/helper"),i=t("../instances"),l=t("../update-geometry"),a=t("../update-scroll");e.exports=function(t){if(o.env.supportsTouch||o.env.supportsIePointer){var e=i.get(t);r(t,e,o.env.supportsTouch,o.env.supportsIePointer)}}},{"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],17:[function(t,e,n){"use strict";var r=t("../lib/helper"),o=t("../lib/class"),i=t("./instances"),l=t("./update-geometry"),a={"click-rail":t("./handler/click-rail"),"drag-scrollbar":t("./handler/drag-scrollbar"),keyboard:t("./handler/keyboard"),wheel:t("./handler/mouse-wheel"),touch:t("./handler/touch"),selection:t("./handler/selection")},s=t("./handler/native-scroll");e.exports=function(t,e){e="object"==typeof e?e:{},o.add(t,"ps-container");var n=i.add(t);n.settings=r.extend(n.settings,e),o.add(t,"ps-theme-"+n.settings.theme),n.settings.handlers.forEach(function(e){a[e](t)}),s(t),l(t)}},{"../lib/class":2,"../lib/helper":6,"./handler/click-rail":10,"./handler/drag-scrollbar":11,"./handler/keyboard":12,"./handler/mouse-wheel":13,"./handler/native-scroll":14,"./handler/selection":15,"./handler/touch":16,"./instances":18,"./update-geometry":19}],18:[function(t,e,n){"use strict";function r(t){function e(){s.add(t,"ps-focus")}function n(){s.remove(t,"ps-focus")}var r=this;r.settings=a.clone(c),r.containerWidth=null,r.containerHeight=null,r.contentWidth=null,r.contentHeight=null,r.isRtl="rtl"===u.css(t,"direction"),r.isNegativeScroll=function(){var e=t.scrollLeft,n=null;return t.scrollLeft=-1,n=t.scrollLeft<0,t.scrollLeft=e,n}(),r.negativeScrollAdjustment=r.isNegativeScroll?t.scrollWidth-t.clientWidth:0,r.event=new d,r.ownerDocument=t.ownerDocument||document,r.scrollbarXRail=u.appendTo(u.e("div","ps-scrollbar-x-rail"),t),r.scrollbarX=u.appendTo(u.e("div","ps-scrollbar-x"),r.scrollbarXRail),r.scrollbarX.setAttribute("tabindex",0),r.event.bind(r.scrollbarX,"focus",e),r.event.bind(r.scrollbarX,"blur",n),r.scrollbarXActive=null,r.scrollbarXWidth=null,r.scrollbarXLeft=null,r.scrollbarXBottom=a.toInt(u.css(r.scrollbarXRail,"bottom")),r.isScrollbarXUsingBottom=r.scrollbarXBottom===r.scrollbarXBottom,r.scrollbarXTop=r.isScrollbarXUsingBottom?null:a.toInt(u.css(r.scrollbarXRail,"top")),r.railBorderXWidth=a.toInt(u.css(r.scrollbarXRail,"borderLeftWidth"))+a.toInt(u.css(r.scrollbarXRail,"borderRightWidth")),u.css(r.scrollbarXRail,"display","block"),r.railXMarginWidth=a.toInt(u.css(r.scrollbarXRail,"marginLeft"))+a.toInt(u.css(r.scrollbarXRail,"marginRight")),u.css(r.scrollbarXRail,"display",""),r.railXWidth=null,r.railXRatio=null,r.scrollbarYRail=u.appendTo(u.e("div","ps-scrollbar-y-rail"),t),r.scrollbarY=u.appendTo(u.e("div","ps-scrollbar-y"),r.scrollbarYRail),r.scrollbarY.setAttribute("tabindex",0),r.event.bind(r.scrollbarY,"focus",e),r.event.bind(r.scrollbarY,"blur",n),r.scrollbarYActive=null,r.scrollbarYHeight=null,r.scrollbarYTop=null,r.scrollbarYRight=a.toInt(u.css(r.scrollbarYRail,"right")),r.isScrollbarYUsingRight=r.scrollbarYRight===r.scrollbarYRight,r.scrollbarYLeft=r.isScrollbarYUsingRight?null:a.toInt(u.css(r.scrollbarYRail,"left")),r.scrollbarYOuterWidth=r.isRtl?a.outerWidth(r.scrollbarY):null,r.railBorderYWidth=a.toInt(u.css(r.scrollbarYRail,"borderTopWidth"))+a.toInt(u.css(r.scrollbarYRail,"borderBottomWidth")),u.css(r.scrollbarYRail,"display","block"),r.railYMarginHeight=a.toInt(u.css(r.scrollbarYRail,"marginTop"))+a.toInt(u.css(r.scrollbarYRail,"marginBottom")),u.css(r.scrollbarYRail,"display",""),r.railYHeight=null,r.railYRatio=null}function o(t){return t.getAttribute("data-ps-id")}function i(t,e){t.setAttribute("data-ps-id",e)}function l(t){t.removeAttribute("data-ps-id")}var a=t("../lib/helper"),s=t("../lib/class"),c=t("./default-setting"),u=t("../lib/dom"),d=t("../lib/event-manager"),p=t("../lib/guid"),f={};n.add=function(t){var e=p();return i(t,e),f[e]=new r(t),f[e]},n.remove=function(t){delete f[o(t)],l(t)},n.get=function(t){return f[o(t)]}},{"../lib/class":2,"../lib/dom":3,"../lib/event-manager":4,"../lib/guid":5,"../lib/helper":6,"./default-setting":8}],19:[function(t,e,n){"use strict";function r(t,e){return t.settings.minScrollbarLength&&(e=Math.max(e,t.settings.minScrollbarLength)),t.settings.maxScrollbarLength&&(e=Math.min(e,t.settings.maxScrollbarLength)),e}function o(t,e){var n={width:e.railXWidth};e.isRtl?n.left=e.negativeScrollAdjustment+t.scrollLeft+e.containerWidth-e.contentWidth:n.left=t.scrollLeft,e.isScrollbarXUsingBottom?n.bottom=e.scrollbarXBottom-t.scrollTop:n.top=e.scrollbarXTop+t.scrollTop,a.css(e.scrollbarXRail,n);var r={top:t.scrollTop,height:e.railYHeight};e.isScrollbarYUsingRight?e.isRtl?r.right=e.contentWidth-(e.negativeScrollAdjustment+t.scrollLeft)-e.scrollbarYRight-e.scrollbarYOuterWidth:r.right=e.scrollbarYRight-t.scrollLeft:e.isRtl?r.left=e.negativeScrollAdjustment+t.scrollLeft+2*e.containerWidth-e.contentWidth-e.scrollbarYLeft-e.scrollbarYOuterWidth:r.left=e.scrollbarYLeft+t.scrollLeft,a.css(e.scrollbarYRail,r),a.css(e.scrollbarX,{left:e.scrollbarXLeft,width:e.scrollbarXWidth-e.railBorderXWidth}),a.css(e.scrollbarY,{top:e.scrollbarYTop,height:e.scrollbarYHeight-e.railBorderYWidth})}var i=t("../lib/helper"),l=t("../lib/class"),a=t("../lib/dom"),s=t("./instances"),c=t("./update-scroll");e.exports=function(t){var e=s.get(t);e.containerWidth=t.clientWidth,e.containerHeight=t.clientHeight,e.contentWidth=t.scrollWidth,e.contentHeight=t.scrollHeight;var n;t.contains(e.scrollbarXRail)||(n=a.queryChildren(t,".ps-scrollbar-x-rail"),n.length>0&&n.forEach(function(t){a.remove(t)}),a.appendTo(e.scrollbarXRail,t)),t.contains(e.scrollbarYRail)||(n=a.queryChildren(t,".ps-scrollbar-y-rail"),n.length>0&&n.forEach(function(t){a.remove(t)}),a.appendTo(e.scrollbarYRail,t)),!e.settings.suppressScrollX&&e.containerWidth+e.settings.scrollXMarginOffset<e.contentWidth?(e.scrollbarXActive=!0,e.railXWidth=e.containerWidth-e.railXMarginWidth,e.railXRatio=e.containerWidth/e.railXWidth,e.scrollbarXWidth=r(e,i.toInt(e.railXWidth*e.containerWidth/e.contentWidth)),e.scrollbarXLeft=i.toInt((e.negativeScrollAdjustment+t.scrollLeft)*(e.railXWidth-e.scrollbarXWidth)/(e.contentWidth-e.containerWidth))):e.scrollbarXActive=!1,!e.settings.suppressScrollY&&e.containerHeight+e.settings.scrollYMarginOffset<e.contentHeight?(e.scrollbarYActive=!0,e.railYHeight=e.containerHeight-e.railYMarginHeight,e.railYRatio=e.containerHeight/e.railYHeight,e.scrollbarYHeight=r(e,i.toInt(e.railYHeight*e.containerHeight/e.contentHeight)),e.scrollbarYTop=i.toInt(t.scrollTop*(e.railYHeight-e.scrollbarYHeight)/(e.contentHeight-e.containerHeight))):e.scrollbarYActive=!1,e.scrollbarXLeft>=e.railXWidth-e.scrollbarXWidth&&(e.scrollbarXLeft=e.railXWidth-e.scrollbarXWidth),e.scrollbarYTop>=e.railYHeight-e.scrollbarYHeight&&(e.scrollbarYTop=e.railYHeight-e.scrollbarYHeight),o(t,e),e.scrollbarXActive?l.add(t,"ps-active-x"):(l.remove(t,"ps-active-x"),e.scrollbarXWidth=0,e.scrollbarXLeft=0,c(t,"left",0)),e.scrollbarYActive?l.add(t,"ps-active-y"):(l.remove(t,"ps-active-y"),e.scrollbarYHeight=0,e.scrollbarYTop=0,c(t,"top",0))}},{"../lib/class":2,"../lib/dom":3,"../lib/helper":6,"./instances":18,"./update-scroll":20}],20:[function(t,e,n){"use strict";var r,o,i=t("./instances"),l=document.createEvent("Event"),a=document.createEvent("Event"),s=document.createEvent("Event"),c=document.createEvent("Event"),u=document.createEvent("Event"),d=document.createEvent("Event"),p=document.createEvent("Event"),f=document.createEvent("Event"),h=document.createEvent("Event"),b=document.createEvent("Event");l.initEvent("ps-scroll-up",!0,!0),a.initEvent("ps-scroll-down",!0,!0),s.initEvent("ps-scroll-left",!0,!0),c.initEvent("ps-scroll-right",!0,!0),u.initEvent("ps-scroll-y",!0,!0),d.initEvent("ps-scroll-x",!0,!0),p.initEvent("ps-x-reach-start",!0,!0),f.initEvent("ps-x-reach-end",!0,!0),h.initEvent("ps-y-reach-start",!0,!0),b.initEvent("ps-y-reach-end",!0,!0),e.exports=function(t,e,n){if("undefined"==typeof t)throw"You must provide an element to the update-scroll function";if("undefined"==typeof e)throw"You must provide an axis to the update-scroll function";if("undefined"==typeof n)throw"You must provide a value to the update-scroll function";"top"===e&&0>=n&&(t.scrollTop=n=0,t.dispatchEvent(h)),"left"===e&&0>=n&&(t.scrollLeft=n=0,t.dispatchEvent(p));var v=i.get(t);"top"===e&&n>=v.contentHeight-v.containerHeight&&(n=v.contentHeight-v.containerHeight,n-t.scrollTop<=1?n=t.scrollTop:t.scrollTop=n,t.dispatchEvent(b)),"left"===e&&n>=v.contentWidth-v.containerWidth&&(n=v.contentWidth-v.containerWidth,n-t.scrollLeft<=1?n=t.scrollLeft:t.scrollLeft=n,t.dispatchEvent(f)),r||(r=t.scrollTop),o||(o=t.scrollLeft),"top"===e&&r>n&&t.dispatchEvent(l),"top"===e&&n>r&&t.dispatchEvent(a),"left"===e&&o>n&&t.dispatchEvent(s),"left"===e&&n>o&&t.dispatchEvent(c),"top"===e&&(t.scrollTop=r=n,t.dispatchEvent(u)),"left"===e&&(t.scrollLeft=o=n,t.dispatchEvent(d))}},{"./instances":18}],21:[function(t,e,n){"use strict";var r=t("../lib/helper"),o=t("../lib/dom"),i=t("./instances"),l=t("./update-geometry"),a=t("./update-scroll");e.exports=function(t){var e=i.get(t);e&&(e.negativeScrollAdjustment=e.isNegativeScroll?t.scrollWidth-t.clientWidth:0,o.css(e.scrollbarXRail,"display","block"),o.css(e.scrollbarYRail,"display","block"),e.railXMarginWidth=r.toInt(o.css(e.scrollbarXRail,"marginLeft"))+r.toInt(o.css(e.scrollbarXRail,"marginRight")),e.railYMarginHeight=r.toInt(o.css(e.scrollbarYRail,"marginTop"))+r.toInt(o.css(e.scrollbarYRail,"marginBottom")),o.css(e.scrollbarXRail,"display","none"),o.css(e.scrollbarYRail,"display","none"),l(t),a(t,"top",t.scrollTop),a(t,"left",t.scrollLeft),o.css(e.scrollbarXRail,"display",""),o.css(e.scrollbarYRail,"display",""))}},{"../lib/dom":3,"../lib/helper":6,"./instances":18,"./update-geometry":19,"./update-scroll":20}]},{},[1]);
;'use strict';

// Declare app level module which depends on views, and components
angular.module('email', [
    'ngRoute',
    'email.builder'
]).config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.otherwise({redirectTo: '/'});
}]);
;'use strict';

/**
 * Email builder module
 * Include this module in your project like another Angular module ['email.builder'] or you can rename it.
 */
angular.module('email.builder', [
    'ngRoute',
    angularDragula(angular),
    'pascalprecht.translate',
    'ui.tinymce',
    'ngSanitize',
    '720kb.tooltips',
    'ngAlertify'
])
    /**
     * You can upload custom images
     * This is a demo url, you can change with your own
     * At this url, will be send a POST request with 'upload' param, whem 'upload' is what you need to upload
     * You must return a status_code = 200 and put all information in 'data' like 'data.img_url', otherwise return status_txt with your error
     */
    .constant('variables', {
        urlToUploadImage: '//uploads.im/api',
        trackEvents: true, // You need to add google analytics in index.html
        includeMailchimp: {
            enable: true,
            mergeTagsInTinymce: true,
            mergeTagsInHead: true,
            includeStandardHeaderAndFooter: true
        }
    })

    /**
     * Basic TinyMCE configs
     * Change this if you really know what you do
     */
    .value('uiTinymceConfig', {
        baseUrl: 'bower_components/tinymce',
        format: 'raw'
    })

    /**
     * Custom directive to emulate Material Design for inputs
     * @example: <input type="text" md-input />
     */
    .directive('mdInput', [
        '$timeout',
        function($timeout) {
            return {
                restrict: 'A',
                scope: {
                    ngModel: '='
                },
                controller: function($scope, $element) {
                    var $elem = $($element);
                    $scope.updateInput = function() {
                        // clear wrapper classes
                        $elem.closest('.md-input-wrapper').removeClass('md-input-wrapper-danger md-input-wrapper-success md-input-wrapper-disabled');

                        if ($elem.hasClass('md-input-danger')) {
                            $elem.closest('.md-input-wrapper').addClass('md-input-wrapper-danger')
                        }
                        if ($elem.hasClass('md-input-success')) {
                            $elem.closest('.md-input-wrapper').addClass('md-input-wrapper-success')
                        }
                        if ($elem.prop('disabled')) {
                            $elem.closest('.md-input-wrapper').addClass('md-input-wrapper-disabled')
                        }
                        if ($elem.hasClass('label-fixed')) {
                            $elem.closest('.md-input-wrapper').addClass('md-input-filled')
                        }
                        if ($elem.val() != '') {
                            $elem.closest('.md-input-wrapper').addClass('md-input-filled')
                        }
                    };
                },
                link: function(scope, elem, attrs) {

                    var $elem = $(elem);

                    $timeout(function() {
                        if (!$elem.hasClass('md-input-processed')) {

                            if ($elem.prev('label').length) {
                                $elem.prev('label').addBack().wrapAll('<div class="md-input-wrapper"/>');
                            } else {
                                $elem.wrap('<div class="md-input-wrapper"/>');
                            }
                            $elem
                                .addClass('md-input-processed')
                                .closest('.md-input-wrapper')
                                .append('<span class="md-input-bar"/>');
                        }

                        scope.updateInput();

                    });

                    scope.$watch(function() {
                            return $elem.attr('class');
                        },
                        function(newValue, oldValue) {
                            if (newValue != oldValue) {
                                scope.updateInput();
                            }
                        }
                    );

                    scope.$watch(function() {
                            return $elem.val();
                        },
                        function(newValue, oldValue) {
                            if (!$elem.is(':focus') && (newValue != oldValue)) {
                                scope.updateInput();
                            }
                        }
                    );

                    $elem
                        .on('focus', function() {
                            $elem.closest('.md-input-wrapper').addClass('md-input-focus')
                        })
                        .on('blur', function() {
                            $timeout(function() {
                                $elem.closest('.md-input-wrapper').removeClass('md-input-focus');
                                if ($elem.val() == '') {
                                    $elem.closest('.md-input-wrapper').removeClass('md-input-filled')
                                } else {
                                    $elem.closest('.md-input-wrapper').addClass('md-input-filled')
                                }
                            }, 100)
                        });
                }
            }
        }
    ])
    /**
     * Custom directive to upload images
     * @example: <input type="file" input-file-upload />
     */
    .directive('inputFileUpload', [
        'utils',
        'variables',
        '$timeout',
        function(utils, variables, $timeout) {
            return {
                restrict: 'A',
                require: 'ngModel',
                link: function(scope, elem, attrs, ngModelCtrl) {
                    var wrapper, inputText;

                    $timeout(function() {
                        wrapper = $(elem).closest('.md-input-wrapper');
                        inputText = wrapper.children('input:text');

                        inputText.css('paddingRight', '35px');
                        wrapper.append('<button type="button" class="md-icon upload-icon">\n    <i class="material-icons">file_upload</i>\n    <input type="file" style=\'width:200px\'  onchange="angular.element(this).scope().inputFileChange(event)" name="file">\n</button>');
                    }, 100);

                    scope.inputFileChange = function(event) {

                        if (!variables.urlToUploadImage)
                            throw Error('You don\'t set the \'urlToUploadImage\' in variables.');

                        var inputFile = $(event.target),
                            icon = inputFile.prev('i.material-icons'),
                            oldIconText = icon.text();
                        icon.text('hdr_strong').addClass('icon-spin').css('opacity', '.7');
                        inputFile.prop('disabled', true);
                        var formData = new FormData();
                        formData.append('upload', event.target.files[0]);
                        return $.ajax({
                            url: variables.urlToUploadImage,
                            data: formData,
                            processData: false,
                            contentType: false,
                            type: 'POST',
                            success: function(res) {
                                if (res.status_code == 200) {
                                    event.target.value = null;
                                    ngModelCtrl.$setViewValue(res.data.img_url);
                                    inputText.val(res.data.img_url);
                                    utils.notify(utils.translate('your_image_has_been_uploaded')).log()
                                } else {
                                    utils.notify(res.status_txt).error()
                                }
                            },
                            error: function(err) {
                                utils.notify(err.statusText).error()
                            },
                            complete: function() {
                                inputFile.prop('disabled', false);
                                icon.text(oldIconText).removeClass('icon-spin').removeAttr('style');
                            }
                        });
                    }
                }
            }
        }
    ])

    /**
     * This is all filters what you need for this builder
     * You can change them, but be careful
     */
    .filter('arrToPadding', function() {
        return function(val) {
            var str = 0;
            val.forEach(function(p) {
                if (p) {
                    str += p + " ";
                } else {
                    str += 0 + " ";
                }
            });
            return str;
        };
    })
    .filter('hexToRgb', function() {
        return function(hex, opacity) {
            var h = hex.replace('#', '');
            h = h.match(new RegExp('(.{' + h.length / 3 + '})', 'g'));

            for (var i = 0; i < h.length; i++)
                h[i] = parseInt(h[i].length == 1 ? h[i] + h[i] : h[i], 16);

            if (typeof opacity != 'undefined') {
                opacity = opacity / 100;
                h.push(opacity);
            }
            return 'rgba(' + h.join(',') + ')';
        }
    })
    .filter('translateCamelCase', ['utils', function(utils) {
        return function(key_to_translate, additional_data) {
            if (typeof key_to_translate !== 'string') return key_to_translate;
            var snake_key = utils.camelToSnake(key_to_translate);
            var translated = utils.translate(snake_key, additional_data);
            return translated === snake_key ? key_to_translate : translated;
        }
    }])
    .filter('rawHtml', ['$sce', function($sce) {
        var div = document.createElement('div');
        return function(html, decode) {
            if (decode) {
                div.innerHTML = html;
                return $sce.trustAsHtml(div.textContent)
            }
            return $sce.trustAsHtml(html)
        };
    }])

    /**
     * All utils functions
     */
    .factory('utils', ['$filter', 'alertify', 'variables', function($filter, alertify, variables) {
        var self = this;
        self.utils = {
            /**
             * Translate key direct in module
             * @example: utils.translate(key_to_translate, additional_data)
             * @param key_to_translate
             * @param additional_data
             * @returns {*}
             */
            translate: function(key_to_translate, additional_data) {
                return $filter('translate')(key_to_translate, additional_data)
            },
            /**
             * Convert string from snake to camel
             * @param str
             * @returns {*}
             */
            snakeToCamel: function(str) {
                if (typeof str !== 'string')  return str;
                return str.replace(/_([a-z])/gi, function(m, w) {
                    return "" + w.toUpperCase();
                });
            },
            /**
             * Convert camel to snake
             * @param str
             * @returns {*}
             */
            camelToSnake: function(str) {
                if (typeof str !== 'string') return str;
                return str.replace(/([A-Z])/g, function(m, w) {
                    return "_" + w.toLowerCase();
                });
            },
            /**
             * Generate random id
             * @param prefix
             * @returns {string}
             */
            uid: function(prefix) {
                return (prefix || 'id') + (new Date().getTime()) + "RAND" + (Math.ceil(Math.random() * 100000));
            },
            /**
             * https://gist.github.com/aaronmccall/9751450
             * @param list
             * @param props
             * @returns {*}
             */
            findWhere: function(list, props) {
                var idx = 0;
                var len = list.length;
                var match = false;
                var item, item_k, item_v, prop_k, prop_val;
                for (; idx < len; idx++) {
                    item = list[idx];
                    for (prop_k in props) {
                        // If props doesn't own the property, skip it.
                        if (!props.hasOwnProperty(prop_k)) continue;
                        // If item doesn't have the property, no match;
                        if (!item.hasOwnProperty(prop_k)) {
                            match = false;
                            break;
                        }
                        if (props[prop_k] === item[prop_k]) {
                            // We have a match…so far.
                            match = true;
                        } else {
                            // No match.
                            match = false;
                            // Don't compare more properties.
                            break;
                        }
                    }
                    // We've iterated all of props' properties, and we still match!
                    // Return that item!
                    if (match) return item;
                }
                // No matches
                return null;
            },
            /**
             * Strip email html for unnecessary attributes, classes ...
             * @param html
             * @param email
             * @returns {string|*|Object|string|string}
             */
            stripTags: function(html, email) {
                email = email || {}; // I know, is ugly, but is supported in es5
                var el = document.createElement("html");

                $(el).html(self.utils.removeLineBreaks(html));

                $(el).find('body').css({
                    'background': email.emailSettings.options.backgroundColor,
                    'padding': email.emailSettings.options.paddingTop + ' 0 ' + email.emailSettings.options.paddingBottom
                });

                if (!$(el).find('head meta[http-equiv="Content-Type"]').length) {
                    $(el).find('head').append($('<meta/>', {
                        'http-equiv': 'Content-Type',
                        'content': 'text/html; charset=UTF-8'
                    }));
                    $(el).find('head').append("<meta name=\"viewport\" content=\"width=device-width\"><link href='https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700' rel='stylesheet' type='text/css'><style>@import url(https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700); html{width: 100%;}body{width: 100%; background-color: white; margin:0; padding:0;-webkit-font-smoothing: antialiased; mso-margin-top-alt:0px; mso-margin-bottom-alt:0px; mso-padding-alt: 0px 0px 0px 0px;}p,h1,h2,h3,h4{margin-top:0; margin-bottom:0; padding-top:0; padding-bottom:0;}table{font-size: 14px;border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;}span.preheader{display: none;font-size: 1px; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;}@media only screen and (max-width: 600px){body{min-width:100% !important;}.container{width:450px !important; min-width:450px !important;}.container_2{width:450px !important; min-width:450px !important;}.container_3{height:180px !important;}.center{margin:0 auto 0 auto !important; padding-top: 20px;}.center_menu{margin:0 auto 0 auto !important; text-align:center !important;}.container_wrap{display:inline-block !important; width:450px !important; height:auto !important;}.container_wrap_2{display:block !important; width:450px !important; text-align:center !important; height:auto !important;}.container_wrap_margin{display:block !important; width:100% !important; height:10px !important;}.text{width:380px !important; text-align:center !important;}.title{width:450px !important;text-align:center !important;}.title_2{width:450px !important;border:none !important; text-align:center !important; padding-left:none !important;}.image_container_main a img{width:450px !important; height:auto !important}.image_container{width: 100% !important; height: auto !important;}.disable{display: none !important;}.enable{display: inline !important;}.bgnd{background-size:cover !important;}.padding_top{padding-top: 20px;}.padding_bottom{padding-bottom: 20px;}.height{height:400px !important;}}@media only screen and (max-width: 481px){body{min-width:100% !important;}.container{width:300px !important; min-width:300px !important;}.container_2{width:300px !important; min-width:300px !important;}.container_3{height:180px !important;}.center{margin:0 auto 0 auto !important;}.center_menu{margin:0 auto 0 auto !important;}.container_wrap{display:inline-block !important; width:300px !important; height:auto !important; border-radius:0 !important;}.container_wrap_2{display:block !important; width:300px !important; height:auto !important;}.container_wrap_margin{display:block !important; width:100% !important; height:10px !important;}.text{width:270px !important; text-align:center !important;}.title{text-align:center !important;width:300px !important;}.title_2{width:450px !important;border:none !important; text-align:center !important; padding-left:none !important;}.image_container_main a img{width:300px !important; height:auto !important;}.image_container{width: 100% !important; height: auto !important;}.disable{display: none !important;}.enable{display: inline !important;}.bgnd{background-size:cover !important;}.padding_top{padding-top: 20px;}.padding_bottom{padding-bottom: 20px;}.height{height:300px !important;}}</style>");
                }

                if (!$(el).find('head title').length) {
                    $(el).prepend('<title>' + email.name + '</title>')
                } else {
                    $(el).find('head title').text(email.name)
                }

                if (email.mailchimpHead && variables.includeMailchimp.enable && variables.includeMailchimp.mergeTagsInHead) {
                    if (!$(el).find('head meta[property="og:title"]').length) {
                        $(el).find('head').append($('<meta/>', {
                            'property': 'og:title',
                            'content': '*|MC:SUBJECT|*'
                        }));
                    }
                } else if (!email.mailchimpHead || !variables.includeMailchimp.enable || !variables.includeMailchimp.mergeTagsInHead) {
                    $(el).find('head meta[property="og:title"]').remove();
                }

                if (email.mailchimpHeaderFooter && variables.includeMailchimp.enable && variables.includeMailchimp.includeStandardHeaderAndFooter) {
                    $(el).find('table[data-type]:first').prepend("<tr id=\"templatePreheader\">\n    <td valign=\"top\" class=\"preheaderContent\">\n\n        <!-- // Begin Module: Standard Preheader \\\\ -->\n        <table border=\"0\" cellpadding=\"10\" cellspacing=\"0\" width=\"100%\">\n            <tr>\n                <td valign=\"top\">\n                    <div mc:edit=\"std_preheader_content\">\n                        Use one or two sentences in this area to offer a teaser of your email\'s content. Text here will show in a preview area in some email clients.\n                    </div>\n                </td>\n                <td valign=\"top\" width=\"180\">\n                    <div mc:edit=\"std_preheader_links\">\n                        <!-- *|IFNOT:ARCHIVE_PAGE|* -->Is this email not displaying correctly?<br><a href=\"*|ARCHIVE|*\" target=\"_blank\">View it in your browser</a>.<!-- *|END:IF|* -->\n                    </div>\n                </td>\n            </tr>\n        </table>\n        <!-- // End Module: Standard Preheader \\\\ -->\n\n    </td>\n</tr>")
                    $(el).find('table[data-type]:last').append("<tr id=\"templateFooter\">\n    <td valign=\"top\" class=\"footerContent\">\n\n        <!-- // Begin Module: Standard Footer \\\\ -->\n        <table border=\"0\" cellpadding=\"10\" cellspacing=\"0\" width=\"100%\">\n            <tr>\n                <td colspan=\"2\" valign=\"middle\" id=\"social\">\n                    <div mc:edit=\"std_social\">\n                        &nbsp;<a href=\"*|TWITTER:PROFILEURL|*\">follow on Twitter</a> | <a href=\"*|FACEBOOK:PROFILEURL|*\">friend on Facebook</a> | <a href=\"*|FORWARD|*\">forward to a friend</a>&nbsp;\n                    </div>\n                </td>\n            </tr>\n            <tr>\n                <td valign=\"top\" width=\"370\">\n                    <br>\n                    <div mc:edit=\"std_footer\">\n                        *|IF:LIST|*\n                        <em>Copyright &copy; *|CURRENT_YEAR|* *|LIST:COMPANY|*, All rights reserved.</em>\n                        <br>\n                        <!-- *|IFNOT:ARCHIVE_PAGE|* -->\n                        *|LIST:DESCRIPTION|*\n                        <br>\n                        <strong>Our mailing address is:</strong>\n                        <br>\n                        *|HTML:LIST_ADDRESS_HTML|*\n                        <br>\n                        <!-- *|END:IF|* -->\n                        *|ELSE:|*\n                        <!-- *|IFNOT:ARCHIVE_PAGE|* -->\n                        <em>Copyright &copy; *|CURRENT_YEAR|* *|USER:COMPANY|*, All rights reserved.</em>\n                        <br>\n                        <strong>Our mailing address is:</strong>\n                        <br>\n                        *|USER:ADDRESS_HTML|*\n                        <!-- *|END:IF|* -->\n                        *|END:IF|*\n                    </div>\n                    <br>\n                </td>\n                <td valign=\"top\" width=\"170\" id=\"monkeyRewards\">\n                    <br>\n                    <div mc:edit=\"monkeyrewards\">\n                        *|IF:REWARDS|* *|HTML:REWARDS|* *|END:IF|*\n                    </div>\n                    <br>\n                </td>\n            </tr>\n            <tr>\n                <td colspan=\"2\" valign=\"middle\" id=\"utility\">\n                    <div mc:edit=\"std_utility\">\n                        &nbsp;<a href=\"*|UNSUB|*\">unsubscribe from this list</a> | <a href=\"*|UPDATE_PROFILE|*\">update subscription preferences</a><!-- *|IFNOT:ARCHIVE_PAGE|* --> | <a href=\"*|ARCHIVE|*\">view email in browser</a><!-- *|END:IF|* -->&nbsp;\n                    </div>\n                </td>\n            </tr>\n        </table>\n        <!-- // End Module: Standard Footer \\\\ -->\n\n    </td>\n</tr>")
                } else if (!email.mailchimpHeaderFooter || !variables.includeMailchimp.enable || !variables.includeMailchimp.includeStandardHeaderAndFooter) {
                    $(el).find('table').find('#templateFooter, #templatePreheader').remove()
                }

                $(el).find('i.actions').each(function() {
                    $(this).remove();
                });
                $(el).find('ng-include, div.builder-element, [ng-bind-html]').each(function() {
                    $(this).replaceWith($(this).contents());
                });
                $(el).contents().contents().addBack().filter(function() {
                    return this.nodeType == Node.COMMENT_NODE;
                }).remove();
                return $(el)[0].outerHTML;
            },
            /**
             * Notify
             * @param msg
             * @param callback
             * @returns {{log: utils.log, success: utils.success, error: utils.error}}
             */
            notify: function(msg, callback) {
                return {
                    log: function() {
                        return alertify.log(msg, callback)
                    },
                    success: function() {
                        alertify.success(msg, callback)
                    },
                    error: function() {
                        alertify.error(msg, callback)
                    }
                }
            },
            /**
             * Confirm dialog
             * @param msg
             * @param succesFn
             * @param cancelFn
             * @param okBtn
             * @param cancelBtn
             * @returns {IAlertify}
             */
            confirm: function(msg, succesFn, cancelFn, okBtn, cancelBtn) {
                return alertify
                    .okBtn(okBtn)
                    .cancelBtn(cancelBtn)
                    .confirm(msg, succesFn, cancelFn)
            },
            /**
             * Alert dialog
             * @param msg
             * @returns {IAlertify}
             */
            alert: function(msg) {
                return alertify
                    .okBtn("Accept")
                    .alert(msg)
            },
            /**
             * Prompt dialog
             * @param defaultvalue
             * @param promptMessage
             * @param successFn
             * @param cancelFn
             * @returns {IAlertify}
             */
            prompt: function(defaultvalue, promptMessage, successFn, cancelFn) {
                return alertify
                    .defaultValue(defaultvalue)
                    .prompt(promptMessage, successFn, cancelFn)
            },
            /**
             * Validate email before save and import
             * @param emailToValidate
             * @returns {boolean}
             */
            validateEmail: function(emailToValidate) {
                return angular.isObject(emailToValidate) &&
                    emailToValidate.hasOwnProperty('name') &&
                    angular.isArray(emailToValidate.elements) &&
                    angular.isString(emailToValidate.html) &&
                    angular.isObject(emailToValidate.emailSettings) &&
                    emailToValidate.emailSettings.type == 'emailSettings' &&
                    angular.isObject(emailToValidate.emailSettings.options)
            },
            /**
             * Track events with Google Analytics
             * @param category
             * @param event
             * @param name
             * @returns {*}
             */
            trackEvent: function(category, event, name) {
                if (variables.trackEvents) {
                    if (!window.ga)
                        return console.error('To track events, include Google analytics code in index.html');
                    return ga('send', 'event', category, event, name);
                }
            },
            removeLineBreaks: function(html) {
                return html.replace(/\n\s*\n/gi, '\n');
            }
        };
        return self.utils;
    }])
    /**
     * Storage
     */
    .factory('storage', ['utils', function(utils) {
        'use strict';

        var STORAGE_ID = 'Email';

        return {
            /**
             * Get Email from localStorage
             */
            get: function() {
                return new Promise(function(resolve, reject) {
                    try {
                        var email = JSON.parse(localStorage.getItem(STORAGE_ID)) || {
                            name: 'New Email',
                            elements: [],
                            html: '',
                            emailSettings: {
                                options: {
                                    paddingTop: "50px",
                                    paddingBottom: "50px",
                                    backgroundColor: "#cccccc"
                                },
                                type: 'emailSettings'
                            }
                        };
                        resolve(email)
                    } catch (e) {
                        utils.notify(e).error();
                        reject(e)
                    }
                });
            },

            /**
             * Put changed data in Email
             * Emulate server storage with Promise
             * @param email
             * @returns {Promise}
             */
            put: function(email) {
                return new Promise(function(resolve, reject) {
                    try {
                        // Remove multine breaks
                        email.html = utils.removeLineBreaks(email.html);
                        localStorage.setItem(STORAGE_ID, JSON.stringify(email));
                        resolve()
                    } catch (e) {
                        utils.notify(e).error();
                        reject(e)
                    }
                })
            }
        };
    }])

    /**
     * Module configurations
     */
    .config(['$routeProvider', '$translateProvider', '$translatePartialLoaderProvider', '$sceDelegateProvider', 'tooltipsConfProvider', function($routeProvider, $translateProvider, $translatePartialLoaderProvider, $sceDelegateProvider, tooltipsConfProvider) {
        $sceDelegateProvider.resourceUrlWhitelist([
            'self'
        ]);

        /**
         * Change '/' with your email builder route
         * Be careful at 'templateUrl' location
         */
        $routeProvider.when('/', {
            templateUrl: 'builder/builder.html',
            controller: 'emailCtrl'
        });

        /**
         * Tanslate configurations
         * Change 'urlTemplate' if you have another location for translations
         */
        $translatePartialLoaderProvider.addPart('builder');
        $translateProvider.useLoader('$translatePartialLoader', {
            urlTemplate: '/i18n/{part}/{lang}.json'
        });
        $translateProvider.preferredLanguage('en');
        $translateProvider.useSanitizeValueStrategy('sanitize');
        $translateProvider.fallbackLanguage('en');
        $translateProvider.useSanitizeValueStrategy('escape');

        /**
         * Tooltip configurations
         */
        tooltipsConfProvider.configure({
            smart: true,
            size: 'small'
        });
    }])

    /**
     * Cache all email blocks template, to load very fast
     * Be very careful if you want to change them
     */
    .run(['$templateCache', function($templateCache) {
        $templateCache.put('titleTemplate', '<table mc:repeatable="layout" mc:hideable="" mc:variant="section_3" width="100%" align="center" cellpadding="0" cellspacing="0" border="0"  data-bgcolor="s3_bg" style=" display: table;max-width:800px; background-color: {{element.options.backgroundColor}}" data-type="title">\n    <tbody>\n    <tr>\n        <td align="{{ element.options.align }}" class="title" style="padding:{{ element.options.padding | arrToPadding  }}; color: #757575;" data-block-id="background">\n            <h1 style="width:auto; font-family: Arial, sans-serif; padding-top: 30px; font-weight: 500; color: {{element.options.color}}; line-height: 42px; font-size: 36px;" data-block-id="main-title">{{ element.options.title }}</h1>\n            <h4 style="font-family: Arial, sans-serif; font-weight: 500; color: {{element.options.color}}; line-height: 22px; font-size: 16px;" data-block-id="sub-title">{{ element.options.subTitle }}</h4>\n        </td>\n    </tr>\n    </tbody>\n</table>');
        $templateCache.put('buttonTemplate', '<table  mc:repeatable="layout" mc:hideable="" mc:variant="section_3" width="100%" align="center" cellpadding="0" cellspacing="0" border="0"  data-bgcolor="s3_bg" style="table-layout:fixed;margin:0 auto; border-collapse:collapse; border: 0px; max-width:800px;background-color:{{element.options.backgroundColor}}"  data-type="button">\n    <tbody>\n    <tr>\n        <td style="padding: {{ element.options.padding | arrToPadding  }};" class="buttons-full-width">\n            <table width="" cellspacing="0" cellpadding="0" border="0" align="{{ element.options.align }}" class="button">\n                <tbody>\n                <tr>\n                    <td style="margin: 10px 10px 10px 10px;" class="button">\n                        <a style="background-color: {{element.options.buttonBackgroundColor}};color: #FFFFFF;font-family: Arial;font-size: 15px;line-height:21px;display: inline-block;border-radius: 6px;text-align: center;text-decoration: none;font-weight: bold;display: block;margin: 0px 0px; padding: 12px 20px;" class="button-1" href="{{ element.options.url }}" data-default="1">{{ element.options.buttonText }}</a>                   <!--[if mso]>             </center>           </v:roundrect>         <![endif]-->\n                    </td>\n                </tr>\n                </tbody>\n            </table>\n        </td>\n    </tr>\n    </tbody>\n</table>');
        $templateCache.put('textTemplate', '<table mc:repeatable="layout" mc:hideable="" mc:variant="section_3" width="100%" align="center" cellpadding="0" cellspacing="0" border="0"  data-bgcolor="s3_bg" style="max-width:800px;display: table; background-color:  {{element.options.backgroundColor}}" align="center" data-type="text-block">\n    <tbody>\n    <tr>\n        <td data-block-id="background" data-clonable="true" align="left" style="padding:{{ element.options.padding | arrToPadding  }}; text-decoration: none; font-family: \'Raleway\', Open Sans, sans-serif; font-size: 14px; line-height:21px; color:#696969; text-align: center; font-weight:400;"\n            data-ng-bind-html="element.options.text | rawHtml">\n        </td>\n    </tr>\n    </tbody>\n</table>');
        $templateCache.put('unsubscribeTemplate', '<table mc:repeatable="layout" mc:hideable="" mc:variant="section_3" width="100%" align="center" cellpadding="0" cellspacing="0" border="0"  data-bgcolor="s3_bg" style="max-width:800px;display: table; background-color: {{element.options.backgroundColor}};" align="center" data-type="text-block">\n    <tbody>\n    <tr>\n        <td class="block-text selected-item" data-block-id="background" data-clonable="true" align="left" style="padding:{{ element.options.padding | arrToPadding  }};text-decoration: none; font-family: \'Raleway\', Open Sans, sans-serif; font-size: 14px; line-height:21px; color:#696969; text-align: center; font-weight:400; line-height: 22px;"\n            data-ng-bind-html="element.options.text | rawHtml">\n        </td>\n    </tr>\n    </tbody>\n</table>');
        $templateCache.put('dividerTemplate', '<table class="main" mc:repeatable="layout" mc:hideable="" mc:variant="section_3" width="100%" align="center" cellpadding="0" cellspacing="0" border="0"  data-bgcolor="s3_bg" style="max-width:800px;border: 0; display: table; background-color: {{element.options.backgroundColor}};" cellspacing="0" cellpadding="0" border="0" align="center" data-type="divider">\n    <tbody>\n    <tr>\n        <td class="divider-simple" style="padding: {{ element.options.padding | arrToPadding  }};">\n            <table width="100%" cellspacing="0" cellpadding="0" border="0" style="border-top: 1px solid #DADFE1;">\n                <tbody>\n                <tr>\n                    <td width="100%" height="15px"></td>\n                </tr>\n                </tbody>\n            </table>\n        </td>\n    </tr>\n    </tbody>\n</table>');
        $templateCache.put('imageTemplate', '<table mc:repeatable="layout" mc:hideable="" mc:variant="section_3" width="100%" align="center" cellpadding="0" cellspacing="0" border="0"  data-bgcolor="s3_bg" style="max-width:800px;display: table; background-color: {{element.options.backgroundColor}};" data-type="image">\n    <tbody>\n    <tr>\n        <td align="{{ element.options.align }}" style="padding: {{ element.options.padding | arrToPadding  }};" class="image">\n            <img class="resizable" border="0" align="one_image" style="display:block;max-width:100%;" width="{{element.options.width}}" alt="" src="{{ element.options.image }}" tabindex="0">\n        </td>\n    </tr>\n    </tbody>\n</table>');
        $templateCache.put('imageTextInsideTemplate', '<table width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#FFFFFF" align="center"\n       style="max-width:800px;display: table; background-color: {{element.options.backgroundColor}};" data-type="imageTextInside">\n    <tbody>\n    <tr>\n        <td class="image-text" align="left"\n            style="padding: {{ element.options.padding | arrToPadding  }}; font-family: Arial; font-size: 13px; color: #000000; line-height: 22px;">\n            <table class="image-in-table" width="190" align="left" style="padding:5px 5px 5px 0; margin: 11px 0;">\n                <tbody>\n                <tr>\n                    <td max-width="160">\n                        <img border="0" class="resizable" align="left"\n                             src="{{ element.options.image }}"\n                             width="{{ element.options.width }}"\n                             style="display: block;margin: 0px;max-width: 540px;padding:0 10px 10px 0;">\n                    </td>\n                </tr>\n                <tr>\n                </tr>\n                </tbody>\n            </table>\n            <ng-bind-html ng-bind-html="element.options.text | rawHtml"></ng-bind-html>\n        </td>\n    </tr>\n    </tbody>\n</table>');
        //$templateCache.put('imageTextRightTemplate', '<table width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#FFFFFF" align="center"\n       style="max-width:800px;display: table; background-color: {{element.options.backgroundColor}};" data-type="imageTextRight">\n    <tbody>\n    <tr>\n        <td class="image-text" align="left"\n            style="padding: {{ element.options.padding | arrToPadding  }}; font-family: Arial; font-size: 13px; color: #000000; line-height: 22px;">\n            <table class="image-in-table" width="190" align="left" style="margin: 11px 0;">\n                <tbody>\n                <tr>\n                    <td class="gap" width="30"></td>\n                    <td width="160">\n                        <img border="0" align="left"\n                             src="{{ element.options.image }}"\n                             width="{{ element.options.width }}"\n                             style="display: block;margin: 0px;max-width: 340px;padding:5px 5px 0 0;">\n                    </td>\n                </tr>\n                </tbody>\n            </table>\n\n            <table width="190">\n                <tbody>\n                <tr>\n                    <td class="text-block" data-ng-bind-html="element.options.text | rawHtml">\n                    </td>\n                </tr>\n                </tbody>\n            </table>\n        </td>\n    </tr>\n    </tbody>\n</table>');
        $templateCache.put('imageTextRightTemplate', '<table mc:repeatable="layout" mc:hideable="" mc:variant="section_4" width="100%" align="center" cellpadding="0" cellspacing="0" border="0" bgcolor="#eeeeee" data-bgcolor="s4_bg" style="max-width:800px;table-layout:fixed;margin:0 auto; border-collapse:collapse; border: 0px; max-width:800px;background-color:{{element.options.backgroundColor}}" data-module="section_4" data-thumb="thumbnails/s4.png"> <tbody> <tr> <td align="center" style="padding: {{ element.options.padding | arrToPadding  }};min-width:100%;margin:0 auto; background: url(img/s4_bg.jpg) center center / cover no-repeat;" data-bg="s4_bg_img"> <table width="600" align="center" class="container" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="table-layout:fixed; margin:0 auto; border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center" class="container"> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td class="container"> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center"> <table width="100%" align="center" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td> <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <th align="left" class="container_wrap" style="display:inline;"> <table align="left" width="280" class="container" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;"> <tbody> <tr> <td> <table width="280" align="left" class="container_wrap" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;"> <tbody> <tr> <td class="image_container_main"> <img mc:edit="" class="resizable" src="{{element.options.image}}" width="{{element.options.width}}" height="156" alt="img">  </td></tr></tbody> </table> </td></tr></tbody> </table> </th> <th align="left" class="container_wrap" style="display:inline;" data-ng-bind-html="element.options.text | rawHtml"> </th> </tr></tbody> </table> </td></tr></tbody> </table> </td></tr><tr> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody></table>');
        $templateCache.put('imageTextLeftTemplate', '<table mc:repeatable="layout" mc:hideable="" mc:variant="section_4" width="100%" align="center" cellpadding="0" cellspacing="0" border="0" bgcolor="#eeeeee" data-bgcolor="s4_bg" style="max-width:800px;table-layout:fixed;margin:0 auto; border-collapse:collapse; border: 0px; max-width:800px;background-color:{{element.options.backgroundColor}}" data-module="section_4" data-thumb="thumbnails/s4.png"> <tbody> <tr> <td align="center" style="padding: {{ element.options.padding | arrToPadding  }};min-width:100%;margin:0 auto; background: url(img/s4_bg.jpg) center center / cover no-repeat;" data-bg="s4_bg_img"> <table width="600" align="center" class="container" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="table-layout:fixed; margin:0 auto; border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center" class="container"> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td class="container"> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center"> <table width="100%" align="center" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td> <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <th align="right" class="container_wrap" style="display:inline;"> <table align="right" width="280" class="container" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;"> <tbody> <tr> <td> <table width="280" align="left" class="container_wrap" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;"> <tbody> <tr> <td class="image_container_main"> <img mc:edit="" class="resizable" src="{{element.options.image}}" width="{{element.options.width}}" height="156" alt="img">  </td></tr></tbody> </table> </td></tr></tbody> </table> </th> <th align="left" class="container_wrap" style="display:inline;" data-ng-bind-html="element.options.text | rawHtml"> </th> </tr></tbody> </table> </td></tr></tbody> </table> </td></tr><tr> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody></table>');
        $templateCache.put('imageText2x2Template', '<table mc:repeatable="layout" mc:hideable="" mc:variant="section_3" width="100%" align="center" cellpadding="0" cellspacing="0" border="0"  data-bgcolor="s3_bg" style="max-width:800px;table-layout:fixed;margin:0 auto; border-collapse:collapse; border: 0px; max-width:800px;background-color:{{element.options.backgroundColor}}" data-module="section_3" data-thumb="thumbnails/s3.png"> <tbody> <tr> <td align="center" style="padding: {{ element.options.padding | arrToPadding  }};min-width:100%;margin:0 auto; background-color:{{element.options.backgroundColor}}) center center / cover no-repeat;" data-bg="s3_bg_img"> <table width="600" align="center" class="container" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td height="60" width="1" style="font-size: 1px; line-height: 60px; height:60px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="table-layout:fixed; margin:0 auto; border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center" class="container"> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td class="container"> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center"> <table width="100%" align="center" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td> <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <th align="left" width="180" class="container_wrap" valign="top" style="margin:0; padding:0;vertical-align:top;"> <table class="container" width="180" align="left" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center"> <img mc:edit="" class="resizable" src="{{element.options.image1}}" border="0" alt="img" width="{{element.options.width1}}" style="display: block;"> </td></tr><tr> <td height="20" width="1" style="font-size: 1px; line-height: 20px; height:20px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td valign="top" class="image-caption-content text " data-ng-bind-html="element.options.text1 | rawHtml" align="center">  </td></tr></tbody> </table> </th> <th align="center" width="180" class="container_wrap" valign="top" style="margin:0; padding:0;vertical-align:top;"> <table class="container" width="180" align="center" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center"> <img mc:edit="" class="resizable" src="{{element.options.image2}}" border="0" alt="img" width="{{element.options.width2}}" style="display: block;"> </td></tr><tr> <td height="20" width="1" style="font-size: 1px; line-height: 20px; height:20px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td valign="top" class="image-caption-content text " data-ng-bind-html="element.options.text2 | rawHtml" align="center">  </td></tr></tbody> </table> </th> </tr></tbody> </table> </td></tr></tbody> </table> </td></tr><tr> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody></table>');
       // $templateCache.put('imageText3x2Template', '<table width="640" cellspacing="0" cellpadding="0" border="0" bgcolor="#FFFFFF" align="center"\n       style="max-width:800px;display: table; background-color: {{element.options.backgroundColor}};" data-type="imageText3x2">\n    <tbody>\n    <tr>\n        <td class="image-caption" style="padding: {{ element.options.padding | arrToPadding  }};">\n            <table class="image-caption-container" align="left" border="0" cellpadding="0" cellspacing="0"\n                   width="350">\n                <tbody>\n                <tr>\n                    <td>\n                        <table class="image-caption-column" align="left" border="0" cellpadding="0"\n                               cellspacing="0" width="160">\n                            <tbody>\n                            <tr>\n                                <td height="15" width="100%"></td>\n                            </tr>\n                            <tr>\n                                <td class="image-caption-content image"\n                                    style="font-family: Arial; font-size: 13px; color: #000000;">\n                                    <img src="{{ element.options.image1 }}"\n                                         width="{{ element.options.width1 }}"\n                                         alt="" style="display: block;" align="2" border="0">\n                                </td>\n                            </tr>\n                            <tr>\n                                <td height="15" width="100%"></td>\n                            </tr>\n                            <tr>\n                                <td class="image-caption-content text"\n                                    style="font-family: Arial; font-size: 13px; color: #000000; line-height: 22px;"\n                                    align="left"\n                                    data-ng-bind-html="element.options.text1 | rawHtml">\n                                </td>\n                            </tr>\n                            <tr>\n                                <td class="image-caption-bottom-gap" height="5" width="100%"></td>\n                            </tr>\n                            </tbody>\n                        </table>\n                        <table class="image-caption-column" align="right" border="0" cellpadding="0"\n                               cellspacing="0" width="160">\n                            <tbody>\n                            <tr>\n                                <td class="image-caption-top-gap" height="15" width="100%"></td>\n                            </tr>\n                            <tr>\n                                <td class="image-caption-content image"\n                                    style="font-family: Arial; font-size: 13px; color: #000000;">\n                                    <img src="{{ element.options.image2 }}"\n                                         width="{{ element.options.width2 }}"\n                                         alt="" style="display: block;" align="2" border="0">\n                                </td>\n                            </tr>\n                            <tr>\n                                <td height="15" width="100%"></td>\n                            </tr>\n                            <tr>\n                                <td class="image-caption-content text"\n                                    style="font-family: Arial; font-size: 13px; color: #000000; line-height: 22px;"\n                                    align="left"\n                                    data-ng-bind-html="element.options.text2 | rawHtml">\n                                </td>\n                            </tr>\n                            <tr>\n                                <td class="image-caption-bottom-gap" height="5" width="100%"></td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </td>\n                </tr>\n                </tbody>\n            </table>\n            <table class="image-caption-column" align="right" border="0" cellpadding="0" cellspacing="0"\n                   width="160">\n                <tbody>\n                <tr>\n                    <td class="image-caption-top-gap" height="15" width="100%"></td>\n                </tr>\n                <tr>\n                    <td class="image-caption-content image"\n                        style="font-family: Arial; font-size: 13px; color: #000000;">\n                        <img src="{{ element.options.image3 }}"\n                             width="{{ element.options.width3 }}"\n                             alt="" style="display: block;" align="2" border="0">\n                    </td>\n                </tr>\n                <tr>\n                    <td height="15" width="100%"></td>\n                </tr>\n                <tr>\n                    <td class="image-caption-content text"\n                        style="font-family: Arial; font-size: 13px; color: #000000; line-height: 22px;"\n                        align="left"\n                        data-ng-bind-html="element.options.text3 | rawHtml">\n                    </td>\n                </tr>\n                <tr>\n                    <td height="5" width="100%"></td>\n                </tr>\n                </tbody>\n            </table>\n        </td>\n    </tr>\n    </tbody>\n</table>');
        $templateCache.put('imageText3x2Template','<table mc:repeatable="layout" mc:hideable="" mc:variant="section_3" width="100%" align="center" cellpadding="0" cellspacing="0" border="0"  data-bgcolor="s3_bg" style="max-width:800px;table-layout:fixed;margin:0 auto; border-collapse:collapse; border: 0px; max-width:800px;background-color:{{element.options.backgroundColor}}" data-module="section_3" data-thumb="thumbnails/s3.png"> <tbody> <tr> <td align="center" style="padding: {{ element.options.padding | arrToPadding  }};min-width:100%;margin:0 auto; background-color:{{element.options.backgroundColor}}) center center / cover no-repeat;" data-bg="s3_bg_img"> <table width="600" align="center" class="container" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td height="60" width="1" style="font-size: 1px; line-height: 60px; height:60px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="table-layout:fixed; margin:0 auto; border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center" class="container"> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td class="container"> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center"> <table width="100%" align="center" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td> <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <th align="left" width="180" class="container_wrap" valign="top" style="margin:0; padding:0;vertical-align:top;"> <table class="container" width="180" align="left" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center"> <img mc:edit="" class="resizable" src="{{element.options.image1}}" border="0" alt="img" width="{{element.options.width1}}" style="display: block;"> </td></tr><tr> <td height="20" width="1" style="font-size: 1px; line-height: 20px; height:20px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td valign="top" class="image-caption-content text " data-ng-bind-html="element.options.text1 | rawHtml" align="center">  </td></tr></tbody> </table> </th> <th align="center" width="180" class="container_wrap" valign="top" style="margin:0; padding:0;vertical-align:top;"> <table class="container" width="180" align="center" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center"> <img mc:edit="" class="resizable" src="{{element.options.image2}}" border="0" alt="img" width="{{element.options.width2}}" style="display: block;"> </td></tr><tr> <td height="20" width="1" style="font-size: 1px; line-height: 20px; height:20px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td valign="top" class="image-caption-content text " data-ng-bind-html="element.options.text2 | rawHtml" align="center">  </td></tr></tbody> </table> </th> <th align="right" width="180" class="container_wrap" valign="top" style="margin:0; padding:0;vertical-align:top;"> <table class="container" width="180" align="right" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center"> <img mc:edit=""     class="resizable" src="{{element.options.image3}}" border="0" alt="img" width="{{element.options.width3}}" style="display: block;"> </td></tr><tr> <td height="20" width="1" style="font-size: 1px; line-height: 20px; height:20px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td valign="top" class="image-caption-content text " data-ng-bind-html="element.options.text3 | rawHtml" align="center"> </td></tr></tbody> </table> </th> </tr></tbody> </table> </td></tr></tbody> </table> </td></tr><tr> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody></table>');

        }])

    .controller('emailCtrl', ['$scope', 'utils', 'storage', 'dragulaService', '$interpolate', '$translate', '$templateCache', 'variables',
        function($scope, utils, storage, dragulaService, $interpolate, $translate, $templateCache, variables) {
            /**
             * Sync with store
             */
            storage.get().then(function(email) {
                if(localStorage.getItem("filename")){
                    //console.log("File Path"+localStorage.getItem("filename"));
                    var filepath=localStorage.getItem("filename");
                    localStorage.removeItem("filename");
                    $.ajax({type:"POST", url: "backend/templates.php", data:{"operation":"viewtemplatedata","args":{"filepath":filepath}} ,
                        success: function(response)
                        {
                         $scope.Email=JSON.parse(response.replace("'", "\'"));
                         //console.log(JSON.stringify($scope.Email));
                         $scope.$digest();
                        }
                      });
               }
               else{
                   $scope.Email=email;
               }
                //$scope.Email = email;
                //$scope.Email=JSON.parse(JSON.stringify({"name":"New Email","elements":[{"type":"imageTextLeft","options":{"padding":["15px","50px","15px","50px"],"image":"assets/340x145.jpg","width":"320","backgroundColor":"#c0c0c0","text":"<table align=\"left\" width=\"280\" class=\"container\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;\"> <tbody> <tr> <td> <table width=\"280\" align=\"left\" class=\"container_wrap\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;\"> <tbody> <tr> <th align=\"right\" width=\"280\" class=\"container_wrap\"> <table align=\"right\" class=\"container\" width=\"280\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;\"> <tbody> <tr> <td height=\"20\" width=\"20\" style=\"font-size: 1px; line-height: 20px; height:15px;\">&nbsp;<img src=\"https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png\" alt=\"spacer\" width=\"1\" height=\"1\"></td></tr><tr> <td class=\"text\" align=\"left\" style=\"font-family: \'Raleway\', sans-serif; font-weight:700; font-size:24px; line-height:20px; color:#414141; text-align:left;padding:{{element.options.padding | arrToPadding}}\" data-size=\"s4_title_size\" data-min=\"12\" data-max=\"36\" data-color=\"s4_title_color\" mc:edit=\"s4_title_1\" >What We Are </td></tr><tr> <td height=\"10\" width=\"1\" style=\"font-size: 1px; line-height: 10px; height:10px;\">&nbsp;<img src=\"https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png\" alt=\"spacer\" width=\"1\" height=\"1\"></td></tr><tr> <td class=\"text\" align=\"left\" style=\"font-family: \'Open Sans\', sans-serif; font-weight:400; font-size:14px; line-height:24px; color:#696969; text-align:left;\" data-size=\"s4_text_size\" data-min=\"12\" data-max=\"36\" data-color=\"s4_text_color\" mc:edit=\"s4_text_1\">Sed ut perspiciatis unde omnis iste natt&shy;usistis error sit voluptatem accusantium doloremque laudantium, totam rem. </td></tr><tr> <td height=\"40\" width=\"1\" style=\"font-size: 1px; line-height: 40px; height:40px;\">&nbsp;<img src=\"https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png\" alt=\"spacer\" width=\"1\" height=\"1\"></td></tr></tbody> </table> </th> </tr></tbody> </table> </td></tr></tbody> </table>"},"id":"id1486808029170RAND45678"},{"type":"imageText3x2","options":{"padding":["15px","50px","15px","50px"],"image1":"http://localhost:8000/assets/154x160.jpg","image2":"http://localhost:8000/assets/154x160.jpg","image3":"http://localhost:8000/assets/154x160.jpg","width1":"154","width2":"154","width3":"154","backgroundColor":"#ffffff","text1":"<table width=\"180\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" class=\"text\" style=\"border-collapse:collapse; border:0;\"> <tbody> <tr> <td class=\"title\" style=\"color: #414141; font-family: \'Raleway\', Open Sans, sans-serif; font-weight:600; font-size: 18px; text-align:center\" data-size=\"s3_title_size\" data-min=\"12\" data-max=\"36\" data-color=\"s3_title_color\" mc:edit=\"s3_tt1\">Creative </td></tr><tr> <td height=\"10\" width=\"1\" style=\"font-size: 1px; line-height: 10px; height:10px;\">&nbsp;<img src=\"https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png\" alt=\"spacer\" width=\"1\" height=\"1\"></td></tr><tr> <td class=\"text\" style=\"color: #696969; font-family: \'Raleway\', sans-serif; font-weight:400; font-size: 14px; line-height:21px; text-align: center;\" data-size=\"s3_text_size\" data-min=\"12\" data-max=\"36\" data-color=\"s3_text_color\" mc:edit=\"s3_t1\">Lorem ipsum dolor sit amet, consecteturis adipi&shy;scing elit sed do eius. </td></tr><tr> <td height=\"40\" width=\"1\" style=\"font-size: 1px; line-height: 40px; height:40px;\">&nbsp;<img src=\"https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png\" alt=\"spacer\" width=\"1\" height=\"1\"></td></tr></tbody> </table>","text2":"<table width=\"180\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" class=\"text\" style=\"border-collapse:collapse; border:0;\"> <tbody> <tr> <td class=\"title\" style=\"color: #414141; font-family: \'Raleway\', Open Sans, sans-serif; font-weight:600; font-size: 18px; text-align:center\" data-size=\"s3_title_size\" data-min=\"12\" data-max=\"36\" data-color=\"s3_title_color\" mc:edit=\"s3_tt2\">Layared Psd </td></tr><tr> <td height=\"10\" width=\"1\" style=\"font-size: 1px; line-height: 10px; height:10px;\">&nbsp;<img src=\"https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png\" alt=\"spacer\" width=\"1\" height=\"1\"></td></tr><tr> <td class=\"text\" style=\"color: #696969; font-family: \'Raleway\', sans-serif; font-weight:400; font-size: 14px; line-height:21px; text-align: center;\" data-size=\"s3_text_size\" data-min=\"12\" data-max=\"36\" data-color=\"s3_text_color\" mc:edit=\"s3_t2\">Lorem ipsum dolor sit amet, consecteturis adipi&shy;scing elit sed do eius. </td></tr><tr> <td height=\"40\" width=\"1\" style=\"font-size: 1px; line-height: 40px; height:40px;\">&nbsp;<img src=\"https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png\" alt=\"spacer\" width=\"1\" height=\"1\"></td></tr></tbody> </table>","text3":"<table width=\"180\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" class=\"text\" style=\"border-collapse:collapse; border:0;\"> <tbody> <tr> <td class=\"title\" style=\"color: #414141; font-family: \'Raleway\', Open Sans, sans-serif; font-weight:600; font-size: 18px; text-align:center\" data-size=\"s3_title_size\" data-min=\"12\" data-max=\"36\" data-color=\"s3_title_color\" mc:edit=\"s3_tt3\">Easy To Use </td></tr><tr> <td height=\"10\" width=\"1\" style=\"font-size: 1px; line-height: 10px; height:10px;\">&nbsp;<img src=\"https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png\" alt=\"spacer\" width=\"1\" height=\"1\"></td></tr><tr> <td class=\"text\" style=\"color: #696969; font-family: \'Raleway\', sans-serif; font-weight:400; font-size: 14px; line-height:21px; text-align: center;\" data-size=\"s3_text_size\" data-min=\"12\" data-max=\"36\" data-color=\"s3_text_color\" mc:edit=\"s3_t3\">Lorem ipsum dolor sit amet, consecteturis adipi&shy;scing elit sed do eius. </td></tr><tr> <td height=\"40\" width=\"1\" style=\"font-size: 1px; line-height: 40px; height:40px;\">&nbsp;<img src=\"https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png\" alt=\"spacer\" width=\"1\" height=\"1\"></td></tr></tbody> </table> "},"id":"id1486809647439RAND99637"},{"type":"text","options":{"padding":["10px","50px","10px","50px"],"backgroundColor":"#c0c0c0","text":"<p style=\"margin:0 0 10px 0;line-height:22px;font-size:13px;\" data-block-id=\"text-area\">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>"},"id":"id1486808417068RAND23761"},{"type":"text","options":{"padding":["10px","50px","10px","50px"],"backgroundColor":"#c0c0c0","text":"<p style=\"margin:0 0 10px 0;line-height:22px;font-size:13px;\" data-block-id=\"text-area\">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>"},"id":"id1486808805437RAND40817"},{"type":"image","options":{"align":"center","padding":["15px","50px","15px","50px"],"image":"http://localhost:8000/assets/350x150.jpg","backgroundColor":"#ffffff"},"id":"id1486808516156RAND96351"},{"type":"text","options":{"padding":["10px","50px","10px","50px"],"backgroundColor":"#ffffff","text":"<p style=\"margin:0 0 10px 0;line-height:22px;font-size:13px;\" data-block-id=\"text-area\">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>"},"id":"id1486808333265RAND35783"},{"type":"title","options":{"align":"center","title":"New Title","subTitle":"New Title","padding":["5px","50px","5px","50px"],"backgroundColor":"#fff","color":"#444444"},"id":"id1486808039415RAND85477"},{"type":"text","options":{"padding":["10px","50px","10px","50px"],"backgroundColor":"#ffffff","text":"<p style=\"margin:0 0 10px 0;line-height:22px;font-size:13px;\" data-block-id=\"text-area\">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>"},"id":"id1486808037214RAND95798"},{"type":"divider","options":{"padding":["15px","50px","0px","50px"],"backgroundColor":"#ffffff"},"id":"id1486808004418RAND50386"}],"html":"<html><title>New Email</title><head><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><link href=\"https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700\" rel=\"stylesheet\" type=\"text/css\"><style>@import url(https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700); html{width: 100%;}body{width: 100%; background-color: white; margin:0; padding:0;-webkit-font-smoothing: antialiased; mso-margin-top-alt:0px; mso-margin-bottom-alt:0px; mso-padding-alt: 0px 0px 0px 0px;}p,h1,h2,h3,h4{margin-top:0; margin-bottom:0; padding-top:0; padding-bottom:0;}table{font-size: 14px;border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;}span.preheader{display: none;font-size: 1px; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;}@media only screen and (max-width: 600px){body{min-width:100% !important;}.container{width:450px !important; min-width:450px !important;}.container_2{width:450px !important; min-width:450px !important;}.container_3{height:180px !important;}.center{margin:0 auto 0 auto !important; padding-top: 20px;}.center_menu{margin:0 auto 0 auto !important; text-align:center !important;}.container_wrap{display:inline-block !important; width:450px !important; height:auto !important;}.container_wrap_2{display:block !important; width:450px !important; text-align:center !important; height:auto !important;}.container_wrap_margin{display:block !important; width:100% !important; height:10px !important;}.text{width:380px !important; text-align:center !important;}.title{width:450px !important;text-align:center !important;}.title_2{width:450px !important;border:none !important; text-align:center !important; padding-left:none !important;}.image_container_main a img{width:450px !important; height:auto !important}.image_container{width: 100% !important; height: auto !important;}.disable{display: none !important;}.enable{display: inline !important;}.bgnd{background-size:cover !important;}.padding_top{padding-top: 20px;}.padding_bottom{padding-bottom: 20px;}.height{height:400px !important;}}@media only screen and (max-width: 481px){body{min-width:100% !important;}.container{width:300px !important; min-width:300px !important;}.container_2{width:300px !important; min-width:300px !important;}.container_3{height:180px !important;}.center{margin:0 auto 0 auto !important;}.center_menu{margin:0 auto 0 auto !important;}.container_wrap{display:inline-block !important; width:300px !important; height:auto !important; border-radius:0 !important;}.container_wrap_2{display:block !important; width:300px !important; height:auto !important;}.container_wrap_margin{display:block !important; width:100% !important; height:10px !important;}.text{width:270px !important; text-align:center !important;}.title{text-align:center !important;width:300px !important;}.title_2{width:450px !important;border:none !important; text-align:center !important; padding-left:none !important;}.image_container_main a img{width:300px !important; height:auto !important;}.image_container{width: 100% !important; height: auto !important;}.disable{display: none !important;}.enable{display: inline !important;}.bgnd{background-size:cover !important;}.padding_top{padding-top: 20px;}.padding_bottom{padding-bottom: 20px;}.height{height:300px !important;}}</style></head><body style=\"background: rgb(204, 204, 204); padding: 50px 0px;\">\n                        <table mc:repeatable=\"layout\" mc:hideable=\"\" mc:variant=\"section_3\" width=\"100%\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" data-bgcolor=\"s3_bg\" style=\"max-width:800px;display: table; background-color:  #ffffff\" data-type=\"text-block\" class=\"ng-scope\">\n    <tbody>\n    <tr>\n        <td data-block-id=\"background\" data-clonable=\"true\" align=\"left\" style=\"padding:010px 50px 10px 50px ; text-decoration: none; font-family: \'Raleway\', Open Sans, sans-serif; font-size: 14px; line-height:21px; color:#696969; text-align: center; font-weight:400;\" data-ng-bind-html=\"element.options.text | rawHtml\" class=\"ng-binding\"><p style=\"margin:0 0 10px 0;line-height:22px;font-size:13px;\" data-block-id=\"text-area\">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p></td>\n    </tr>\n    </tbody>\n</table>\n                        <table mc:repeatable=\"layout\" mc:hideable=\"\" mc:variant=\"section_3\" width=\"100%\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" data-bgcolor=\"s3_bg\" style=\"max-width:800px;display: table; background-color:  #ffffff\" data-type=\"text-block\" class=\"ng-scope\">\n    <tbody>\n    <tr>\n        <td data-block-id=\"background\" data-clonable=\"true\" align=\"left\" style=\"padding:010px 50px 10px 50px ; text-decoration: none; font-family: \'Raleway\', Open Sans, sans-serif; font-size: 14px; line-height:21px; color:#696969; text-align: center; font-weight:400;\" data-ng-bind-html=\"element.options.text | rawHtml\" class=\"ng-binding\"><p style=\"margin:0 0 10px 0;line-height:22px;font-size:13px;\" data-block-id=\"text-area\">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p></td>\n    </tr>\n    </tbody>\n</table>\n                        <table mc:repeatable=\"layout\" mc:hideable=\"\" mc:variant=\"section_3\" width=\"100%\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" data-bgcolor=\"s3_bg\" style=\"max-width:800px;display: table; background-color: #ffffff;\" data-type=\"image\" class=\"ng-scope\">\n    <tbody>\n    <tr>\n        <td align=\"center\" style=\"padding: 015px 50px 15px 50px ;\" class=\"image\">\n            <img class=\"\" border=\"0\" align=\"one_image\" style=\"display:block;max-width:100%;\" alt=\"\" src=\"http://localhost:8000/assets/350x150.jpg\" tabindex=\"0\">\n        </td>\n    </tr>\n    </tbody>\n</table>\n                        <table mc:repeatable=\"layout\" mc:hideable=\"\" mc:variant=\"section_4\" width=\"100%\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" bgcolor=\"#eeeeee\" data-bgcolor=\"s4_bg\" style=\"max-width:800px;table-layout:fixed;margin:0 auto; border-collapse:collapse; border: 0px; max-width:800px;background-color:#ffffff\" data-module=\"section_4\" data-thumb=\"thumbnails/s4.png\" class=\"ng-scope\"> <tbody> <tr> <td align=\"center\" style=\"min-width:100%;margin:0 auto; background: url(img/s4_bg.jpg) center center / cover no-repeat;\" data-bg=\"s4_bg_img\"> <table width=\"600\" align=\"center\" class=\"container\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"border-collapse:collapse; border: 0px;\"> <tbody> <tr> <td height=\"40\" width=\"1\" style=\"font-size: 1px; line-height: 40px; height:40px;\">&nbsp;<img src=\"https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png\" alt=\"spacer\" width=\"1\" height=\"1\"></td></tr></tbody> </table> <table width=\"600\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" class=\"container\" style=\"table-layout:fixed; margin:0 auto; border-collapse:collapse; border: 0px;\"> <tbody> <tr> <td align=\"center\" class=\"container\"> <table width=\"600\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" class=\"container\" style=\"border-collapse:collapse; border: 0px;\"> <tbody> <tr> <td class=\"container\"> <table width=\"600\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" class=\"container\" style=\"border-collapse:collapse; border: 0px;\"> <tbody> <tr> <td align=\"center\"> <table width=\"100%\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"border-collapse:collapse; border: 0px;\"> <tbody> <tr> <td> <table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"border-collapse:collapse; border: 0px;\"> <tbody> <tr> <th align=\"right\" class=\"container_wrap\" style=\"display:inline;\"> <table align=\"right\" width=\"280\" class=\"container\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;\"> <tbody> <tr> <td> <table width=\"280\" align=\"left\" class=\"container_wrap\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;\"> <tbody> <tr> <td class=\"image_container_main\"> <a href=\"#\"> <img mc:edit=\"\" src=\"http://localhost:8000/assets/340x145.jpg\" width=\"320\" height=\"156\" alt=\"img\"> </a> </td></tr></tbody> </table> </td></tr></tbody> </table> </th> <th align=\"left\" class=\"container_wrap ng-binding\" style=\"display:inline;\" data-ng-bind-html=\"element.options.text | rawHtml\"><table align=\"left\" width=\"280\" class=\"container\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;\"> <tbody> <tr> <td> <table width=\"280\" align=\"left\" class=\"container_wrap\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;\"> <tbody> <tr> <th align=\"right\" width=\"280\" class=\"container_wrap\"> <table align=\"right\" class=\"container\" width=\"280\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;\"> <tbody> <tr> <td height=\"20\" width=\"20\" style=\"font-size: 1px; line-height: 20px; height:15px;\">&nbsp;<img src=\"https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png\" alt=\"spacer\" width=\"1\" height=\"1\"></td></tr><tr> <td class=\"text\" align=\"left\" style=\"font-family: \'Raleway\', sans-serif; font-weight:700; font-size:24px; line-height:20px; color:#414141; text-align:left;padding:{{element.options.padding | arrToPadding}}\" data-size=\"s4_title_size\" data-min=\"12\" data-max=\"36\" data-color=\"s4_title_color\" mc:edit=\"s4_title_1\">What We Are </td></tr><tr> <td height=\"10\" width=\"1\" style=\"font-size: 1px; line-height: 10px; height:10px;\">&nbsp;<img src=\"https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png\" alt=\"spacer\" width=\"1\" height=\"1\"></td></tr><tr> <td class=\"text\" align=\"left\" style=\"font-family: \'Open Sans\', sans-serif; font-weight:400; font-size:14px; line-height:24px; color:#696969; text-align:left;\" data-size=\"s4_text_size\" data-min=\"12\" data-max=\"36\" data-color=\"s4_text_color\" mc:edit=\"s4_text_1\">Sed ut perspiciatis unde omnis iste natt­usistis error sit voluptatem accusantium doloremque laudantium, totam rem. </td></tr><tr> <td height=\"40\" width=\"1\" style=\"font-size: 1px; line-height: 40px; height:40px;\">&nbsp;<img src=\"https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png\" alt=\"spacer\" width=\"1\" height=\"1\"></td></tr></tbody> </table> </th> </tr></tbody> </table> </td></tr></tbody> </table></th> </tr></tbody> </table> </td></tr></tbody> </table> </td></tr><tr> <td height=\"40\" width=\"1\" style=\"font-size: 1px; line-height: 40px; height:40px;\">&nbsp;<img src=\"https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png\" alt=\"spacer\" width=\"1\" height=\"1\"></td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody></table>\n                        <table mc:repeatable=\"layout\" mc:hideable=\"\" mc:variant=\"section_3\" width=\"100%\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" data-bgcolor=\"s3_bg\" style=\"max-width:800px;display: table; background-color:  #ffffff\" data-type=\"text-block\" class=\"ng-scope\">\n    <tbody>\n    <tr>\n        <td data-block-id=\"background\" data-clonable=\"true\" align=\"left\" style=\"padding:010px 50px 10px 50px ; text-decoration: none; font-family: \'Raleway\', Open Sans, sans-serif; font-size: 14px; line-height:21px; color:#696969; text-align: center; font-weight:400;\" data-ng-bind-html=\"element.options.text | rawHtml\" class=\"ng-binding\"><p style=\"margin:0 0 10px 0;line-height:22px;font-size:13px;\" data-block-id=\"text-area\">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p></td>\n    </tr>\n    </tbody>\n</table>\n                        <table mc:repeatable=\"layout\" mc:hideable=\"\" mc:variant=\"section_3\" width=\"100%\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" data-bgcolor=\"s3_bg\" style=\" display: table;max-width:800px; background-color: #fff\" data-type=\"title\" class=\"ng-scope\">\n    <tbody>\n    <tr>\n        <td align=\"center\" class=\"title\" style=\"padding:05px 50px 5px 50px ; color: #757575;\" data-block-id=\"background\">\n            <h1 style=\"width:auto; font-family: Arial, sans-serif; padding-top: 30px; font-weight: 500; color: #444444; line-height: 42px; font-size: 36px;\" data-block-id=\"main-title\" class=\"ng-binding\">New Title</h1>\n            <h4 style=\"font-family: Arial, sans-serif; font-weight: 500; color: #444444; line-height: 22px; font-size: 16px;\" data-block-id=\"sub-title\" class=\"ng-binding\">New Title</h4>\n        </td>\n    </tr>\n    </tbody>\n</table>\n                        <table mc:repeatable=\"layout\" mc:hideable=\"\" mc:variant=\"section_3\" width=\"100%\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" data-bgcolor=\"s3_bg\" style=\"max-width:800px;display: table; background-color:  #ffffff\" data-type=\"text-block\" class=\"ng-scope\">\n    <tbody>\n    <tr>\n        <td data-block-id=\"background\" data-clonable=\"true\" align=\"left\" style=\"padding:010px 50px 10px 50px ; text-decoration: none; font-family: \'Raleway\', Open Sans, sans-serif; font-size: 14px; line-height:21px; color:#696969; text-align: center; font-weight:400;\" data-ng-bind-html=\"element.options.text | rawHtml\" class=\"ng-binding\"><p style=\"margin:0 0 10px 0;line-height:22px;font-size:13px;\" data-block-id=\"text-area\">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p></td>\n    </tr>\n    </tbody>\n</table>\n                        <table class=\"main ng-scope\" mc:repeatable=\"layout\" mc:hideable=\"\" mc:variant=\"section_3\" width=\"100%\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" data-bgcolor=\"s3_bg\" style=\"max-width:800px;border: 0; display: table; background-color: #ffffff;\" data-type=\"divider\">\n    <tbody>\n    <tr>\n        <td class=\"divider-simple\" style=\"padding: 015px 50px 0px 50px ;\">\n            <table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" style=\"border-top: 1px solid #DADFE1;\">\n                <tbody>\n                <tr>\n                    <td width=\"100%\" height=\"15px\"></td>\n                </tr>\n                </tbody>\n            </table>\n        </td>\n    </tr>\n    </tbody>\n</table>\n                </body></html>","emailSettings":{"options":{"paddingTop":"50px","paddingBottom":"50px","backgroundColor":"#cccccc"},"type":"emailSettings"}}));
                //$scope.Email=JSON.parse('{"name":"New Email","elements":[{"type":"button","options":{"align":"center","padding":["15px","50px","15px","50px"],"buttonText":"New Button","url":"#","buttonBackgroundColor":"#3498DB","backgroundColor":"#ffffff"},"id":"id1486806682139RAND96091"}],"html":"","emailSettings":{"options":{"paddingTop":"50px","paddingBottom":"50px","backgroundColor":"#cccccc"},"type":"emailSettings"},"mailchimpHeaderFooter":true,"mailchimpHead":true}');
                $scope.cloneEmail = JSON.parse(JSON.stringify(email));
            });
            /**
             * Default Mailchimp options
             */
            if (variables.includeMailchimp.enable) {
                $scope.mailchimpOptions = angular.extend({}, variables.includeMailchimp);
            }
            /**
             * All default blocks options
             * @type {{title: {type: string, options: {align: string, title: *, subTitle: *, padding: string[], backgroundColor: string, color: string}}, divider: {type: string, options: {padding: string[], backgroundColor: string}}, text: {type: string, options: {padding: string[], backgroundColor: string, text: string}}, button: {type: string, options: {align: string, padding: string[], buttonText: *, url: string, buttonBackgroundColor: string, backgroundColor: string}}, image: {type: string, options: {align: string, padding: string[], image: string, backgroundColor: string}}, imageTextInside: {type: string, options: {padding: string[], image: string, width: string, backgroundColor: string, text: string}}, imageTextRight: {type: string, options: {padding: string[], image: string, width: string, backgroundColor: string, text: string}}, imageTextLeft: {type: string, options: {padding: string[], image: string, width: string, backgroundColor: string, text: string}}, imageText2x2: {type: string, options: {padding: string[], image1: string, image2: string, width1: string, width2: string, backgroundColor: string, text1: string, text2: string}}, imageText3x2: {type: string, options: {padding: string[], image1: string, image2: string, image3: string, width1: string, width2: string, width3: string, backgroundColor: string, text1: string, text2: string, text3: string}}, unsubscribe: {type: string, options: {padding: string[], backgroundColor: string, text: string}}}}
             */
            var defaultOptions = {
                'title': {
                    type: 'title',
                    options: {
                        align: 'center',
                        title: utils.translate('New Title'), // Enter your title here
                        subTitle: utils.translate('New Title'), // Subtitle
                        padding: ["5px", "20px", "5px", "20px"],
                        backgroundColor: '#fff',
                        color: '#444444'
                    }
                },
                'divider': {
                    type: 'divider',
                    options: {
                        padding: ['15px', '20px', '0px', '20px'],
                        backgroundColor: '#ffffff'
                    }
                },
                'text': {
                    type: 'text',
                    options: {
                        padding: ['10px', '20px', '10px', '20px'],
                        backgroundColor: '#ffffff',
                        text: '<p style="margin:0 0 10px 0;line-height:22px;font-size:13px;" data-block-id="text-area">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>'
                    }
                },
                'button': {
                    type: 'button',
                    options: {
                        align: 'center',
                        padding: ['15px', '20px', '15px', '20px'],
                        buttonText: utils.translate('New Button'),
                        url: '#',
                        buttonBackgroundColor: '#3498DB',
                        backgroundColor: '#ffffff'
                    }
                },
                'image': {
                    type: 'image',
                    options: {
                        align: 'center',
                        padding: ["15px", "20px", "15px", "20px"],
                        width: '285',
                        image: 'assets/350x150.jpg',
                        backgroundColor: '#ffffff',
                        
                    }
                },
                'imageTextInside': {
                    type: 'imageTextInside',
                    options: {
                        padding: ["15px", "20px", "15px", "20px"],
                        image: 'assets/370x160.jpg',
                        width: '285',
                        backgroundColor: '#ffffff',
                        text: '<p style="line-height: 22px;font-family: \'Open Sans\', sans-serif; font-weight:400; font-size:14px; line-height:24px; color:#696969; text-align:left;">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>'
                    }
                },
                'imageTextRight': {
                    type: 'imageTextRight',
                    options: {
                        padding: ["15px", "20px", "15px", "20px"],
                        image: 'assets/340x145.jpg',
                        width: '285',
                        backgroundColor: '#ffffff',
                        text: '<table align="right" class="container" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;"> <tbody> <tr> <td> <table width="280" align="left" class="container_wrap" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;"> <tbody> <tr> <th align="right" width="280" class="container_wrap"> <table align="right" class="container" width="280" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;"> <tbody> <tr> <td height="20" width="20" style="font-size: 1px; line-height: 20px; height:15px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td class="text" align="left" style="font-family: \'Raleway\', sans-serif; font-weight:700; font-size:24px; line-height:20px; color:#414141; text-align:left;padding:{{element.options.padding | arrToPadding}}" data-size="s4_title_size" data-min="12" data-max="36" data-color="s4_title_color" mc:edit="s4_title_1" >What We Are </td></tr><tr> <td height="10" width="1" style="font-size: 1px; line-height: 10px; height:10px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td class="text" align="left" style="font-family: \'Open Sans\', sans-serif; font-weight:400; font-size:14px; line-height:24px; color:#696969; text-align:left;" data-size="s4_text_size" data-min="12" data-max="36" data-color="s4_text_color" mc:edit="s4_text_1">Sed ut perspiciatis unde omnis iste natt&shy;usistis error sit voluptatem accusantium doloremque laudantium, totam rem. </td></tr><tr> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> </th> </tr></tbody> </table> </td></tr></tbody> </table>'
                    }
                },
                'imageTextLeft': {
                    type: 'imageTextLeft',
                    options: {
                        padding: ["15px", "20px", "15px", "20px"],
                        image: 'assets/340x145.jpg',
                        width: '320',
                        backgroundColor: '#ffffff',
                        text: '<table align="left" width="280" class="container" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;"> <tbody> <tr> <td> <table width="280" align="left" class="container_wrap" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;"> <tbody> <tr> <th align="right" width="280" class="container_wrap"> <table align="right" class="container" width="280" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;"> <tbody> <tr> <td height="20" width="20" style="font-size: 1px; line-height: 20px; height:15px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td class="text" align="left" style="font-family: \'Raleway\', sans-serif; font-weight:700; font-size:24px; line-height:20px; color:#414141; text-align:left;padding:{{element.options.padding | arrToPadding}}" data-size="s4_title_size" data-min="12" data-max="36" data-color="s4_title_color" mc:edit="s4_title_1" >What We Are </td></tr><tr> <td height="10" width="1" style="font-size: 1px; line-height: 10px; height:10px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td class="text" align="left" style="font-family: \'Open Sans\', sans-serif; font-weight:400; font-size:14px; line-height:24px; color:#696969; text-align:left;" data-size="s4_text_size" data-min="12" data-max="36" data-color="s4_text_color" mc:edit="s4_text_1">Sed ut perspiciatis unde omnis iste natt&shy;usistis error sit voluptatem accusantium doloremque laudantium, totam rem. </td></tr><tr> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> </th> </tr></tbody> </table> </td></tr></tbody> </table>'
                    }
                },
                'imageText2x2': {
                    type: 'imageText2x2',
                    options: {
                        padding: ["15px", "20px", "15px", "20px"],
                        image1: 'assets/255x154.jpg',
                        image2: 'assets/255x154.jpg',
                        width1: '255',
                        width2: '255',
                        backgroundColor: '#ffffff',
                        text1: '<table width="180" align="center" cellpadding="0" cellspacing="0" border="0" class="text" style="border-collapse:collapse; border:0;"> <tbody> <tr> <td class="title" style="color: #414141; font-family: \'Raleway\', Open Sans, sans-serif; font-weight:600; font-size: 18px; text-align:center" data-size="s3_title_size" data-min="12" data-max="36" data-color="s3_title_color" mc:edit="s3_tt1">Creative </td></tr><tr> <td height="10" width="1" style="font-size: 1px; line-height: 10px; height:10px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td class="text" style="color: #696969; font-family: \'Raleway\', sans-serif; font-weight:400; font-size: 14px; line-height:21px; text-align: center;" data-size="s3_text_size" data-min="12" data-max="36" data-color="s3_text_color" mc:edit="s3_t1">Lorem ipsum dolor sit amet, consecteturis adipi&shy;scing elit sed do eius. </td></tr><tr> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table>',
                        text2: '<table width="180" align="center" cellpadding="0" cellspacing="0" border="0" class="text" style="border-collapse:collapse; border:0;"> <tbody> <tr> <td class="title" style="color: #414141; font-family: \'Raleway\', Open Sans, sans-serif; font-weight:600; font-size: 18px; text-align:center" data-size="s3_title_size" data-min="12" data-max="36" data-color="s3_title_color" mc:edit="s3_tt2">Layared Psd </td></tr><tr> <td height="10" width="1" style="font-size: 1px; line-height: 10px; height:10px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td class="text" style="color: #696969; font-family: \'Raleway\', sans-serif; font-weight:400; font-size: 14px; line-height:21px; text-align: center;" data-size="s3_text_size" data-min="12" data-max="36" data-color="s3_text_color" mc:edit="s3_t2">Lorem ipsum dolor sit amet, consecteturis adipi&shy;scing elit sed do eius. </td></tr><tr> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table>'
                    }
                },
                'imageText3x2': {
                    type: 'imageText3x2',
                    options: {
                        padding: ["15px", "20px", "15px", "20px"],
                        image1: 'assets/154x160.jpg',
                        image2: 'assets/154x160.jpg',
                        image3: 'assets/154x160.jpg',
                        width1: '154',
                        width2: '154',
                        width3: '154',
                        backgroundColor: '#ffffff',
                        text1: '<table width="180" align="center" cellpadding="0" cellspacing="0" border="0" class="text" style="border-collapse:collapse; border:0;"> <tbody> <tr> <td class="title" style="color: #414141; font-family: \'Raleway\', Open Sans, sans-serif; font-weight:600; font-size: 18px; text-align:center" data-size="s3_title_size" data-min="12" data-max="36" data-color="s3_title_color" mc:edit="s3_tt1">Creative </td></tr><tr> <td height="10" width="1" style="font-size: 1px; line-height: 10px; height:10px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td class="text" style="color: #696969; font-family: \'Raleway\', sans-serif; font-weight:400; font-size: 14px; line-height:21px; text-align: center;" data-size="s3_text_size" data-min="12" data-max="36" data-color="s3_text_color" mc:edit="s3_t1">Lorem ipsum dolor sit amet, consecteturis adipi&shy;scing elit sed do eius. </td></tr><tr> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table>',
                        text2: '<table width="180" align="center" cellpadding="0" cellspacing="0" border="0" class="text" style="border-collapse:collapse; border:0;"> <tbody> <tr> <td class="title" style="color: #414141; font-family: \'Raleway\', Open Sans, sans-serif; font-weight:600; font-size: 18px; text-align:center" data-size="s3_title_size" data-min="12" data-max="36" data-color="s3_title_color" mc:edit="s3_tt2">Layared Psd </td></tr><tr> <td height="10" width="1" style="font-size: 1px; line-height: 10px; height:10px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td class="text" style="color: #696969; font-family: \'Raleway\', sans-serif; font-weight:400; font-size: 14px; line-height:21px; text-align: center;" data-size="s3_text_size" data-min="12" data-max="36" data-color="s3_text_color" mc:edit="s3_t2">Lorem ipsum dolor sit amet, consecteturis adipi&shy;scing elit sed do eius. </td></tr><tr> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table>',
                        text3: '<table width="180" align="center" cellpadding="0" cellspacing="0" border="0" class="text" style="border-collapse:collapse; border:0;"> <tbody> <tr> <td class="title" style="color: #414141; font-family: \'Raleway\', Open Sans, sans-serif; font-weight:600; font-size: 18px; text-align:center" data-size="s3_title_size" data-min="12" data-max="36" data-color="s3_title_color" mc:edit="s3_tt3">Easy To Use </td></tr><tr> <td height="10" width="1" style="font-size: 1px; line-height: 10px; height:10px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td class="text" style="color: #696969; font-family: \'Raleway\', sans-serif; font-weight:400; font-size: 14px; line-height:21px; text-align: center;" data-size="s3_text_size" data-min="12" data-max="36" data-color="s3_text_color" mc:edit="s3_t3">Lorem ipsum dolor sit amet, consecteturis adipi&shy;scing elit sed do eius. </td></tr><tr> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> '
                    }
                },
                'unsubscribe': {
                    type: 'unsubscribe',
                    options: {
                        padding: ['10px', '20px', '10px', '50px'],
                        backgroundColor: '#eeeeee',
                        text: '<p style="text-align: center; margin: 0px 0px 10px 0px; line-height: 22px; font-size: 13px;" data-block-id="text-area"><span style="font-size: 8pt; color: #333333;">' + utils.translate('_unsub_placeholder_default_text_') + '<span style="color: #0000ff;"> <a style="color: #0000ff;" href="*|UNSUB|*">' + utils.translate('_unsub_placeholder_click_text') + '</a></span>.</span></p>'
                    }
                }
            };
            /**
             * All elements to drag and drop
             * @type {*[]}
             */
            $scope.elements = [
                {
                    type: 'title',
                    icon: 'title',
                    primary_head: 'New Title',
                    second_head: 'assets/title.PNG'
                },
                {
                    type: 'divider',
                    icon: '&#xE8E9;',
                    primary_head: 'Devider',
                    second_head: 'assets/devider.PNG'
                },
                {
                    type: 'text',
                    icon: '&#xE8EE;',
                    primary_head: 'Text',
                    second_head: 'assets/text.PNG'
                },
                {
                    type: 'image',
                    icon: '&#xE40B;',
                    primary_head: 'Image',
                    second_head: 'assets/image.PNG'
                },
                {
                    type: 'button',
                    icon: 'radio_button_checked',
                    primary_head: 'Button',
                    second_head: 'assets/button.PNG'
                },
                {
                    type: 'imageTextInside',
                    icon: '&#xE850;',
                    primary_head: 'Image Inside Text',
                    second_head: 'assets/imageinsidetext.PNG'
                },
                {
                    type: 'imageTextLeft',
                    icon: 'burst_mode',
                    primary_head: 'Image placed right to text',
                    second_head: "assets/lefttext.PNG"
                },
                { //&#xE060;
                    type: 'imageTextRight',
                    icon: '&#xE060',
                    primary_head: 'Image placed left to text',
                    second_head: 'assets/righttext.PNG'
                },
                {
                    type: 'imageText2x2',
                    icon: 'pause',
                    primary_head: '2 columns with 2 Images and Text',
                    second_head: 'assets/2images.PNG'
                },
                {
                    type: 'imageText3x2',
                    icon: '&#xE8EC;',
                    primary_head: '3 columns with 3 Images and Text',
                    second_head: 'assets/3images.PNG'
                },
                {
                    type: 'unsubscribe',
                    icon: '&#xE157;',
                    primary_head: 'Link with Label',
                    second_head: 'assets/link.PNG'
                }
            ];
            /**
             * Default language
             * @type {string}
             */
            $scope.currentLanguage = 'en';
            /**
             * Tinymce options
             * @type {{inline: boolean, skin: string, theme: string, plugins: string[], toolbar: string, fontsize_formats: string}}
             */
            $scope.tinymceOptions = {
                inline: false,
                skin: 'lightgray',
                theme: 'modern',
                plugins: ["advlist autolink lists link image charmap", "searchreplace visualblocks code", "insertdatetime media table contextmenu paste", 'textcolor'],
                toolbar: "undo redo | styleselect mailchimpMergeTags | bold italic fontsizeselect forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
                fontsize_formats: '8pt 9pt 10pt 11pt 12pt 13pt 14pt 15pt 16pt 18pt 24pt 36pt'
            };

            /**
             * Include Mailchimo Merge tags in Tinymce if is enabled
             */
            if (variables.includeMailchimp.enable && variables.includeMailchimp.mergeTagsInTinymce) {
                $scope.tinymceOptions = angular.extend($scope.tinymceOptions, {
                    setup: function(editor) {
                        editor.addButton('mailchimpMergeTags', {
                            type: 'menubutton',
                            text: 'Merge Tags',
                            icon: false,
                            menu: ['*|FNAME|*', '*|LNAME|*', '*|EMAIL|*', '*|LIST:NAME|*', '*|LIST:COMPANY|*', '*|LIST:SUBSCRIBERS|*', '*|USER:COMPANY|*', '*|USER:ADDRESS|*', '*|USER:PHONE|*', '*|MC:DATE|*', '*|CURRENT_YEAR|*', '*|UNSUB|*', '*|UPDATE_PROFILE|*'].map(function(tag) {
                                return {
                                    text: tag,
                                    onclick: function() {
                                        editor.insertContent(tag);
                                    }
                                }
                            })
                        });
                    }
                });
            }

            /**
             * Get template by type
             *
             * @param type
             * @returns {string}
             */
            $scope.getTemplate = function(type) {
                return type ? type + 'Template' : 'textTemplate';
            };
            /**
             * Remove block element by id
             * @param id
             */
            $scope.removeElement = function(id) {
                var el = utils.findWhere($scope.Email.elements, {id: id});
                $scope.Email.elements.splice($scope.Email.elements.indexOf(el), 1);
                utils.trackEvent('Elements', 'remove', el.type);
                $scope.currentElement = undefined;
            };
            /**
             * Clone block element by id
             * @param id
             */
            $scope.cloneElement = function(id) {
                var el = utils.findWhere($scope.Email.elements, {id: id});
                var newEl = JSON.parse(JSON.stringify(el));
                newEl.id = utils.uid();
                utils.trackEvent('Elements', 'clone', newEl.type);
                $scope.Email.elements.splice($scope.Email.elements.indexOf(el) + 1, 0, newEl);
                $scope.changeHtml();
                setTimeout(function () {
                    $( ".resizable" ).resizable();
                },100);
            };
            /**
             * Edit block element by id
             * @param id
             */
            $scope.editElement = function(id) {
                if ($scope.preview) return;
                $scope.currentElement = id != 'emailSettings' ? utils.findWhere($scope.Email.elements, {id: id}) : $scope.Email[id];
                $scope.currentElement && utils.trackEvent('Email', 'edit', $scope.currentElement.type);
            };
            /**
             * Change languge
             * @param key
             * @returns {Server|Object|string}
             */
            $scope.changeLanguage = function(key) {
                $scope.currentLanguage = key;
                return $translate.use(key);
            };
            /**
             * Check if email has changed, to enable or disable save button
             * @returns {boolean}
             */
            $scope.hasChanges = function() {
                return !angular.equals($scope.Email, $scope.cloneEmail)
            };
            /**
             * Save email example
             */
            
            //$scope.Email='{"name":"New Email","elements":[{"type":"button","options":{"align":"center","padding":["15px","50px","15px","50px"],"buttonText":"New Button","url":"#","buttonBackgroundColor":"#3498DB","backgroundColor":"#ffffff"},"id":"id1486806682139RAND96091"}],"html":"","emailSettings":{"options":{"paddingTop":"50px","paddingBottom":"50px","backgroundColor":"#cccccc"},"type":"emailSettings"},"mailchimpHeaderFooter":true,"mailchimpHead":true}';
            $scope.saveEmailTemplate = function() {
                // Striping not necessary tags
                
                $scope.Email.html = utils.stripTags($('.builder .email-container').html(), $scope.Email);
                //console.log("JSON"+JSON.stringify($scope.Email));
                // $scope.Email = is what you need to save
                storage.put($scope.Email).then(function() {
                    utils.notify(utils.translate('email_saved')).success();
                    utils.trackEvent('Email', 'saved');
                    $scope.cloneEmail = JSON.parse(JSON.stringify($scope.Email));
                    $scope.$evalAsync(function() {
                        $scope.currentElement = undefined;
                    })
                });
            };

            /**
             * Open export container
             * @returns {*}
             */
            $scope.openExportContainer = function() {
                if (!$scope.Email.elements.length)
                    return utils.notify(utils.translate('nothing_to_export')).log();
                $scope.exportAsHtml = false;
                $scope.currentElement = 'export';
                $scope.changeHtml();
            };
            /**
             * Export email as JSON
             * @returns {*|{trigger, _default}}
             */
            $scope.exportEmailAsJson = function() {
                var a = document.createElement('a');
                a.target = '_blank';
                utils.trackEvent('Email', 'export', 'JSON');
                a.href = 'data:attachment/json,' + encodeURI(JSON.stringify($scope.Email));
                a.download = utils.uid('export') + '.json';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            };
            $scope.mobilepreview=function(){
                var w = window.open("", "", "width=360, height=640");
                w.document.write(utils.removeLineBreaks(utils.stripTags($('.builder .email-container').html(), $scope.Email)));
            }
            $scope.desktoppreview=function(){
                var w = window.open("", "", "width=850, height=660");
                w.document.write(utils.removeLineBreaks(utils.stripTags($('.builder .email-container').html(), $scope.Email)));
            }
            $scope.sendEmail=function(email){
                //console.log("Email"+email);
                //console.log(JSON.stringify($scope.Email.html));
                $.ajax({ url: "backend/templates.php", data:{"operation":"sendemail","html":JSON.stringify(utils.removeLineBreaks(utils.stripTags($('.builder .email-container').html(), $scope.Email))),"email":email,"subject":$scope.Email.name} ,
                    success: function(response)
                    {
                            utils.notify(utils.translate(response)).log();

                    },
                    error: function(jqXHR, textStatus, errorThrown)
                    {
                        console.log(jqXHR);
                    },
                    type: 'POST'
                });
            }
            $scope.saveAsTemplate = function() {
                var templateobj={
                    "title":$scope.templatetitle,
                    "description":$scope.templatedescription,
                    "createdate":xdate(),
                    "createtime":xtime(),
                    "filename":utils.uid('export'),
                    "html":JSON.stringify($scope.Email)
                };
                submitwithfile(templateobj, "backend/templates.php", "saveastemplate","templatescreenshot");
                /*
                $.ajax({ url: "backend/templates.php", data:{"operation":"saveastemplate","fd":formData,"title":$scope.templatetitle,"description":$scope.templatedescription,"createdate":xdate(),"createtime":xtime(),"filename":utils.uid('export'),"args":JSON.stringify($scope.Email)} ,
                  success: function(response)
                  {
                      console.log(response);
                      response = JSON.parse(response);
                      console.log(response);
                      if(response.errors.length>0)
                       {
                          $.each(response.errors, function(ind,e){
                            console.log(" --" +e.message);
                              $scope.insertmessage='Error:' + e.message;
                            });
                       }
                        else
                       {
                           $scope.insertmessage="Template Saved Successfully";
                           $(".addtemplatemsg").slideDown("slow");
                           console.log("Successfull");
                           setTimeout(function () {

                               $(".modal").fadeOut("slow");
                               $(".addtemplatemsg").hide();
                           },2500);
                       }
                
                  },
                  error: function(jqXHR, textStatus, errorThrown)
                  {
                        console.log(jqXHR);
                  },
                  type: 'POST' 
                }); */
            };

            /**
             * Download Email as HTML
             */
            $scope.downloadHtml = function() {
                var a = document.createElement('a');
                a.target = '_blank';
                utils.trackEvent('Email', 'export', 'HTML');
                a.href = 'data:attachment/html,' + encodeURI($scope.emailHtml);
                a.download = utils.uid('export') + '.html';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            };

            /**
             * Change exported HTML
             */
            $scope.changeHtml = function() {
                $scope.emailHtml = utils.removeLineBreaks(utils.stripTags($('.builder .email-container').html(), $scope.Email));
            };

            /**
             * Import email
             * @returns {*}
             */
            $scope.importEmail = function() {
                var file = $('<input />', {
                    type: 'file',
                    name: 'import-file'
                }).on('change', function() {
                    var importedFile = new FileReader();
                    importedFile.onload = function() {
                       // var importedData = JSON.parse(importedFile.result);
                        if (utils.validateEmail(importedData)) {
                            storage.put(importedData).then(function() {
                                utils.trackEvent('Email', 'import');
                                $scope.$evalAsync(function() {
                                    $scope.currentElement = undefined;
                                    angular.extend($scope.Email, importedData);
                                    angular.extend($scope.cloneEmail, importedData);
                                });
                                utils.notify(utils.translate('email_has_been_imported', {
                                    lastModified: new Date(fileToImport.lastModified).toLocaleString()
                                })).success()
                            });
                        } else {
                            utils.notify(utils.translate('imported_data_isnt_valid')).error()
                        }
                    };
                    var fileToImport = this.files[0];
                    if (fileToImport.type !== 'application/json') {
                        return utils.notify(utils.translate('invalid_format_file')).log()
                    }
                    importedFile.readAsText(fileToImport)
                });

                if (!$scope.Email.elements.length)
                    return file.click();

                return utils.confirm(utils.translate('before_import'), function() {
                    return file.click()
                }, function() {
                    return utils.notify(utils.translate('import_canceled')).log()
                }, utils.translate('accept'), utils.translate('deny'))
            };

            /**
             * Activate preview Email
             * @returns {*}
             */
            $scope.previewEmail = function() {

                if (!$scope.Email.elements.length)
                    return utils.notify(utils.translate('nothing_to_preview')).log();

                utils.trackEvent('Email', 'preview');
                $scope.preview = true;
                $scope.currentElement = undefined;


            };

            /**
             * Dragula configuration for builder elements
             */
            dragulaService.options($scope, 'element', {
                isContainer: function(el) {
                    return el.classList.contains('email-container');
                },
                copy: true,
                copySortSource: false,
                removeOnSpill: true,
                moves: function(el, source, handle, sibling) {
                    return !$(source).hasClass('email-container');
                },
                invalid: function(el, handle) {
                    return false; // don't prevent any drags from initiating by default
                }
            });
            /**
             * Dragula configuration for builder
             */
            dragulaService.options($scope, 'element-html', {
                copy: false,
                copySortSource: false,
                moves: function(el, source, handle, sibling) {
                    return $(handle).hasClass('move');
                },
                invalid: function(el, handle) {
                    return false; // don't prevent any drags from initiating by default
                }
            });
            /**
             * Drag and drop events for elements
             */
            $scope.$on('element.drop', function(event, el, target, source, sibling) {
                var elementType = $(el).data('type');
                var element = $.extend(true, {}, defaultOptions[elementType]);
                element.id = utils.uid();
                var index = $(sibling).index();
                $('.email-container li').remove();
                index == -1 ? $scope.Email.elements.push(element) : $scope.Email.elements.splice(index - 1, 0, element);
                utils.trackEvent('Elements', 'drop', element.type);
                $scope.currentElement = undefined;
                $scope.$apply();
                setTimeout(function () {
                    $( ".resizable" ).resizable();
                },100);
            });
            $scope.$on('element.cloned', function(event, clone, original, type) {
                var elementType = $(clone).data('type');
                var element = $.extend(true, {}, defaultOptions[elementType]);
                var html = $interpolate($templateCache.get(elementType + 'Template'))({element: element});
                return $(clone).css('list-style', 'none').html(html);
            });
            /**
             * Drag and drop events for elements inside the builder
             */
            
           
            $scope.$on('element-html.drop', function(event, el, target, source, sibling) {
                var id = $(el).attr('id');
                var index = $(sibling).index();
                if (index == -1) {
                    index = $scope.Email.elements.length - 1;
                } else {
                    index--;
                }
                var element = utils.findWhere($scope.Email.elements, {id: id});
                var oldIndex = $scope.Email.elements.indexOf(element);
                if (index >= $scope.Email.elements.length) {
                    var k = index - $scope.Email.elements.length;
                    while ((k--) + 1) {
                        $scope.Email.elements.push(undefined);
                    }
                }
                $scope.Email.elements.splice(index, 0, $scope.Email.elements.splice(oldIndex, 1)[0]);
                $scope.$apply();
                $scope.currentElement = undefined;
                return false;
            });
            
        }]);

    
  /*  
    $(document).ready(function(){

	
var element = $("#html-content-holder"); // global variable
var getCanvas; // global variable
 
    $("#btn-Preview-Image").on('click', function () {
         html2canvas(element, {
         onrendered: function (canvas) {
                $("#previewImage").append(canvas);
                getCanvas = canvas;
             }
         });
    });

	$("#btn-Convert-Html2Image").on('click', function () {
    var imgageData = getCanvas.toDataURL("image/png");
    // Now browser starts downloading it instead of just showing it
    var newData = imgageData.replace(/^data:image\/png/, "data:application/octet-stream");
    $("#btn-Convert-Html2Image").attr("download", "your_pic_name.png").attr("href", newData);
	});

});
*/
;var app = angular.module('email',[]);
app.controller("dashboardCTRL",function($scope){


   $scope.deletetemplate=function (template) {
       $.ajax({type:"POST", url: "backend/templates.php", data:{"operation":"deletetemplate","args":JSON.stringify(template)} ,
           success: function(response)
           {
               console.log(response);

              $("#templateview"+template.id).fadeOut("slow");
           }
       });
   }
   var viewalltemplates=function(){
        $.ajax({type:"POST", url: "backend/templates.php", data:{"operation":"viewalltemplates"} ,
          success: function(response)
          {

           $scope.templatesfiles=JSON.parse(JSON.parse(response)["data"]);
            console.log("temp"+$scope.templatesfiles.image);
            $scope.$digest();
            }
        });
    }
    $scope.opentemplate=function(filepath){
        localStorage.setItem("filename", filepath);
        window.location="builder.html";
    }
viewalltemplates(); 
});



;
//# sourceMappingURL=scripts.js.map