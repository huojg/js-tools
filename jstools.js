!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.jstools=t():e.jstools=t()}(window,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t),r.d(t,"checktwoDian",function(){return n}),r.d(t,"checkUUID",function(){return o}),r.d(t,"isEmail",function(){return a}),r.d(t,"isMobile",function(){return c}),r.d(t,"isPhone",function(){return s}),r.d(t,"isURL",function(){return i}),r.d(t,"isString",function(){return u}),r.d(t,"isNumber",function(){return d}),r.d(t,"isBoolean",function(){return l}),r.d(t,"isFunction",function(){return f}),r.d(t,"isNull",function(){return p}),r.d(t,"isUndefined",function(){return b}),r.d(t,"isObj",function(){return g}),r.d(t,"isArray",function(){return m}),r.d(t,"isDate",function(){return h}),r.d(t,"isRegExp",function(){return w}),r.d(t,"isError",function(){return y}),r.d(t,"isSymbol",function(){return v}),r.d(t,"isPromise",function(){return O}),r.d(t,"isSet",function(){return A}),r.d(t,"isWeiXin",function(){return x}),r.d(t,"isDeviceMobile",function(){return k}),r.d(t,"isQQBrowser",function(){return j}),r.d(t,"isSpider",function(){return S}),r.d(t,"isIos",function(){return C}),r.d(t,"isPC",function(){return P}),r.d(t,"removeHtmltag",function(){return E}),r.d(t,"getQueryString",function(){return T}),r.d(t,"injectScript",function(){return M}),r.d(t,"download",function(){return N}),r.d(t,"hasClass",function(){return _}),r.d(t,"addClass",function(){return L}),r.d(t,"removeClass",function(){return q}),r.d(t,"getScrollPosition",function(){return F}),r.d(t,"scrollToTop",function(){return z}),r.d(t,"elementIsVisibleInViewport",function(){return R}),r.d(t,"shuffle",function(){return U}),r.d(t,"copyTextToClipboard",function(){return I}),r.d(t,"checkStr",function(){return B}),r.d(t,"isCardID",function(){return D}),r.d(t,"random",function(){return Z}),r.d(t,"numberToChinese",function(){return Q}),r.d(t,"changeToChinese",function(){return X}),r.d(t,"contains",function(){return W}),r.d(t,"sort",function(){return H}),r.d(t,"unique",function(){return Y}),r.d(t,"union",function(){return V}),r.d(t,"intersect",function(){return G}),r.d(t,"remove",function(){return J}),r.d(t,"formArray",function(){return K}),r.d(t,"max",function(){return ee}),r.d(t,"min",function(){return te}),r.d(t,"sum",function(){return re}),r.d(t,"average",function(){return ne}),r.d(t,"trim",function(){return oe}),r.d(t,"changeCase",function(){return ae}),r.d(t,"checkPwd",function(){return ce}),r.d(t,"debouncer",function(){return se}),r.d(t,"insertStr",function(){return ie}),r.d(t,"isObjectEqual",function(){return ue}),r.d(t,"colorToRGB",function(){return de}),r.d(t,"appendQuery",function(){return le}),r.d(t,"getBrowserType",function(){return fe});const n=e=>/^([1-9]\d*(\.\d*[1-9])?)|(0\.\d{1,2})$/.test(e),o=e=>/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(e),a=e=>/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(e),c=e=>/^1[0-9]{10}$/.test(e),s=e=>/^([0-9]{3,4}-)?[0-9]{7,8}$/.test(e),i=e=>/^http[s]?:\/\/.*/.test(e),u=e=>"String"===Object.prototype.toString.call(e).slice(8,-1),d=e=>"Number"===Object.prototype.toString.call(e).slice(8,-1),l=e=>"Boolean"===Object.prototype.toString.call(e).slice(8,-1),f=e=>"Function"===Object.prototype.toString.call(e).slice(8,-1),p=e=>"Null"===Object.prototype.toString.call(e).slice(8,-1),b=e=>"Undefined"===Object.prototype.toString.call(e).slice(8,-1),g=e=>"Object"===Object.prototype.toString.call(e).slice(8,-1),m=e=>"Array"===Object.prototype.toString.call(e).slice(8,-1),h=e=>"Date"===Object.prototype.toString.call(e).slice(8,-1),w=e=>"RegExp"===Object.prototype.toString.call(e).slice(8,-1),y=e=>"Error"===Object.prototype.toString.call(e).slice(8,-1),v=e=>"Symbol"===Object.prototype.toString.call(e).slice(8,-1),O=e=>"Promise"===Object.prototype.toString.call(e).slice(8,-1),A=e=>"Set"===Object.prototype.toString.call(e).slice(8,-1),x=()=>"micromessenger"==ua.match(/microMessenger/i),k=()=>/android|webos|iphone|ipod|balckberry/i.test(ua),j=()=>!!ua.match(/mqqbrowser|qzone|qqbrowser|qbwebviewtype/i),S=()=>/adsbot|googlebot|bingbot|msnbot|yandexbot|baidubot|robot|careerbot|seznambot|bot|baiduspider|jikespider|symantecspider|scannerlwebcrawler|crawler|360spider|sosospider|sogou web sprider|sogou orion spider/.test(ua),C=()=>{var e=navigator.userAgent;return!(e.indexOf("Android")>-1||e.indexOf("Linux")>-1)&&(e.indexOf("iPhone")>-1||!(e.indexOf("iPad")>-1)&&(e.indexOf("Windows Phone"),!1))},P=()=>{for(var e=navigator.userAgent,t=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],r=!0,n=0;n<t.length;n++)if(e.indexOf(t[n])>0){r=!1;break}return r},E=e=>e.replace(/<[^>]+>/g,""),T=e=>{const t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i");return((window.location.search.split("?")[1]||"").match(t)||[])[2]},M=e=>{const t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src=e;const r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(t,r)},N=e=>{var t=navigator.userAgent.toLowerCase().indexOf("chrome")>-1,r=navigator.userAgent.toLowerCase().indexOf("safari")>-1;if(t||r){var n=document.createElement("a");if(n.href=e,void 0!==n.download){var o=e.substring(e.lastIndexOf("/")+1,e.length);n.download=o}if(document.createEvent){var a=document.createEvent("MouseEvents");return a.initEvent("click",!0,!0),n.dispatchEvent(a),!0}}return-1===e.indexOf("?")&&(e+="?download"),window.open(e,"_self"),!0},_=(e,t)=>{return new RegExp("(^|\\s)"+t+"(\\s|$)").test(e.className)},L=(e,t)=>{if(_(e,t))return;let r=e.className.split(" ");r.push(t),e.className=r.join(" ")},q=(e,t)=>{if(!_(e,t))return;let r=new RegExp("(^|\\s)"+t+"(\\s|$)","g");e.className=e.className.replace(r," ")},F=(e=window)=>({x:void 0!==e.pageXOffset?e.pageXOffset:e.scrollLeft,y:void 0!==e.pageYOffset?e.pageYOffset:e.scrollTop}),z=()=>{const e=document.documentElement.scrollTop||document.body.scrollTop;e>0&&(window.requestAnimationFrame(z),window.scrollTo(0,e-e/8))},R=(e,t=!1)=>{const{top:r,left:n,bottom:o,right:a}=e.getBoundingClientRect(),{innerHeight:c,innerWidth:s}=window;return t?(r>0&&r<c||o>0&&o<c)&&(n>0&&n<s||a>0&&a<s):r>=0&&n>=0&&o<=c&&a<=s},U=e=>{for(var t,r=[];e.length>0;)t=Math.floor(Math.random()*e.length),r.push(e[t]),e.splice(t,1);return r},I=e=>{var t=document.createElement("textarea");t.style.background="transparent",t.value=e,document.body.appendChild(t),t.select();try{document.execCommand("copy")}catch(e){console.log("Oops, unable to copy")}document.body.removeChild(t)},B=(e,t)=>{switch(t){case"phone":return/^1[3|4|5|6|7|8|9][0-9]{9}$/.test(e);case"tel":return/^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(e);case"card":return/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(e);case"pwd":return/^[a-zA-Z]\w{5,17}$/.test(e);case"postal":return/[1-9]\d{5}(?!\d)/.test(e);case"QQ":return/^[1-9][0-9]{4,9}$/.test(e);case"email":return/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(e);case"money":return/^\d*(?:\.\d{0,2})?$/.test(e);case"URL":return/(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(e);case"IP":return/((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(e);case"date":return/^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/.test(e)||/^(\d{4})\-(\d{2})\-(\d{2})$/.test(e);case"number":return/^[0-9]$/.test(e);case"english":return/^[a-zA-Z]+$/.test(e);case"chinese":return/^[\\u4E00-\\u9FA5]+$/.test(e);case"lower":return/^[a-z]+$/.test(e);case"upper":return/^[A-Z]+$/.test(e);case"HTML":return/<("[^"]*"|'[^']*'|[^'">])*>/.test(e);default:return!0}},D=e=>{if(!/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(e))return console.log("你输入的身份证长度或格式错误"),!1;if(!{11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"}[parseInt(e.substr(0,2))])return console.log("你的身份证地区非法"),!1;var t=(e.substr(6,4)+"-"+Number(e.substr(10,2))+"-"+Number(e.substr(12,2))).replace(/-/g,"/"),r=new Date(t);if(t!=r.getFullYear()+"/"+(r.getMonth()+1)+"/"+r.getDate())return console.log("身份证上的出生日期非法"),!1;for(var n=0,o=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],a=0;a<e.length-1;a++)n+=e[a]*o[a];var c="10X98765432"[n%11];return e[e.length-1]==c||(console.log("你输入的身份证号非法"),!1)},Z=(e,t)=>2===arguments.length?Math.floor(e+Math.random()*(t+1-e)):null,Q=e=>{for(var t=new Array("零","一","二","三","四","五","六","七","八","九","十"),r=new Array("","十","百","仟","萬","億","点",""),n=(""+e).replace(/(^0*)/g,"").split("."),o=0,a="",c=n[0].length-1;c>=0;c--){switch(o){case 0:a=r[7]+a;break;case 4:new RegExp("0{4}//d{"+(n[0].length-c-1)+"}$").test(n[0])||(a=r[4]+a);break;case 8:a=r[5]+a,r[7]=r[5],o=0}o%4==2&&0!=n[0].charAt(c+2)&&0==n[0].charAt(c+1)&&(a=t[0]+a),0!=n[0].charAt(c)&&(a=t[n[0].charAt(c)]+r[o%4]+a),o++}if(n.length>1){a+=r[6];for(c=0;c<n[1].length;c++)a+=t[n[1].charAt(c)]}return"一十"==a&&(a="十"),a.match(/^一/)&&3==a.length&&(a=a.replace("一","")),a},X=e=>{if("number"==typeof e&&(e=new String(e)),e=(e=(e=e.replace(/,/g,"")).replace(/ /g,"")).replace(/￥/g,""),isNaN(e))return"";for(var t=String(e).split("."),r="",n=t[0].length-1;n>=0;n--){if(t[0].length>10)return"";var o="",a=t[0].charAt(n);switch(a){case"0":o="零"+o;break;case"1":o="壹"+o;break;case"2":o="贰"+o;break;case"3":o="叁"+o;break;case"4":o="肆"+o;break;case"5":o="伍"+o;break;case"6":o="陆"+o;break;case"7":o="柒"+o;break;case"8":o="捌"+o;break;case"9":o="玖"+o}switch(t[0].length-n-1){case 0:o+="元";break;case 1:0!=a&&(o+="拾");break;case 2:0!=a&&(o+="佰");break;case 3:0!=a&&(o+="仟");break;case 4:o+="万";break;case 5:0!=a&&(o+="拾");break;case 6:0!=a&&(o+="佰");break;case 7:0!=a&&(o+="仟");break;case 8:o+="亿";break;case 9:o+="拾"}r=o+r}if(-1!=e.indexOf("."))for(t[1].length>2&&(t[1]=t[1].substr(0,2)),n=0;n<t[1].length;n++){switch(o="",a=t[1].charAt(n)){case"0":o="零"+o;break;case"1":o="壹"+o;break;case"2":o="贰"+o;break;case"3":o="叁"+o;break;case"4":o="肆"+o;break;case"5":o="伍"+o;break;case"6":o="陆"+o;break;case"7":o="柒"+o;break;case"8":o="捌"+o;break;case"9":o="玖"+o}0==n&&(o+="角"),1==n&&(o+="分"),r+=o}for(;-1!=r.search("零零");)r=r.replace("零零","零");return"元"==(r=(r=(r=(r=(r=(r=r.replace("零亿","亿")).replace("亿万","亿")).replace("零万","万")).replace("零元","元")).replace("零角","")).replace("零分","")).charAt(r.length-1)&&(r+="整"),r},W=(e,t)=>-1!=e.indexOf(t),H=(e,t=1)=>e.sort((r,n)=>{switch(t){case 1:return r-n;case 2:return n-r;case 3:return Math.random()-.5;default:return e}}),Y=e=>{if(Array.hasOwnProperty("from"))return Array.from(new Set(e));for(var t={},r=[],n=0;n<e.length;n++)t[e[n]]||(t[e[n]]=!0,r.push(e[n]));return r},V=(e,t)=>{var r=e.concat(t);return(void 0).unique(r)},G=(e,t)=>{var r=void 0;return e=(void 0).unique(e),(void 0).map(e,function(e){return r.contains(t,e)?e:null})},J=(e,t)=>{var r=e.indexOf(t);return r>-1&&e.splice(r,1),e},K=e=>{return Array.isArray(e)?e:Array.prototype.slice.call(e)},ee=e=>Math.max.apply(null,e),te=e=>Math.min.apply(null,e),re=e=>e.reduce((e,t)=>e+t),ne=e=>(void 0).sum(e)/e.length,oe=(e,t)=>{switch(t=t||1){case 1:return e.replace(/\s+/g,"");case 2:return e.replace(/(^\s*)|(\s*$)/g,"");case 3:return e.replace(/(^\s*)/g,"");case 4:return e.replace(/(\s*$)/g,"");default:return e}},ae=(e,t)=>{switch(t=t||4){case 1:return e.replace(/\b\w+\b/g,function(e){return e.substring(0,1).toUpperCase()+e.substring(1).toLowerCase()});case 2:return e.replace(/\b\w+\b/g,function(e){return e.substring(0,1).toLowerCase()+e.substring(1).toUpperCase()});case 3:return e.split("").map(function(e){return/[a-z]/.test(e)?e.toUpperCase():e.toLowerCase()}).join("");case 4:return e.toUpperCase();case 5:return e.toLowerCase();default:return e}},ce=e=>{var t=0;return e.length<6?t:(/[0-9]/.test(e)&&t++,/[a-z]/.test(e)&&t++,/[A-Z]/.test(e)&&t++,/[\.|-|_]/.test(e)&&t++,t)},se=(e,t,r=200)=>{t-(window.debounceTimestamp||0)>r&&(e&&e(),window.debounceTimestamp=t)},ie=(e,t,r)=>{return e.slice(0,t)+r+e.slice(t)},ue=(e,t)=>{var r=Object.getOwnPropertyNames(e),n=Object.getOwnPropertyNames(t);if(r.length!==n.length)return!1;for(var o=0;o<r.length;o++){var a=r[o];if(e[a]!==t[a])return!1}return!0},de=(e,t)=>{var r="number"==typeof t;if(!/^(#?)[a-fA-F0-9]{6}$/.test(e))return"";for(var n=e.replace(/#/,""),o=[],a=0;a<3;a++){var c=n.substring(2*a,2*a+2),s=parseInt(c,16);o.push(s)}return"rgb"+(r?"a":"")+"("+o.join()+(r?","+t:"")+")"},le=(e,t,r)=>{var n=t;return"string"==typeof n&&((n={})[t]=r),n=$.param(n),e.includes("?")?e+="&"+n:e+="?"+n,e},fe=()=>navigator.userAgent.toLowerCase()}])});