!function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=1)}([function(n,e,t){"use strict";var r=Object.prototype.hasOwnProperty;function o(n,e){return Array.isArray(n)?function(n,e){for(var t,r="",i="",a=Array.isArray(e),s=0;s<n.length;s++)(t=o(n[s]))&&(a&&e[s]&&(t=c(t)),r=r+i+t,i=" ");return r}(n,e):n&&"object"==typeof n?function(n){var e="",t="";for(var o in n)o&&n[o]&&r.call(n,o)&&(e=e+t+o,t=" ");return e}(n):n||""}function i(n){if(!n)return"";if("object"==typeof n){var e="";for(var t in n)r.call(n,t)&&(e=e+t+":"+n[t]+";");return e}return n+""}function a(n,e,t,r){return!1!==e&&null!=e&&(e||"class"!==n&&"style"!==n)?!0===e?" "+(r?n:n+'="'+n+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),t||-1===e.indexOf('"'))?(t&&(e=c(e))," "+n+'="'+e+'"'):" "+n+"='"+e.replace(/'/g,"&#39;")+"'"):""}e.merge=function n(e,t){if(1===arguments.length){for(var r=e[0],o=1;o<e.length;o++)r=n(r,e[o]);return r}for(var a in t)if("class"===a){var s=e[a]||[];e[a]=(Array.isArray(s)?s:[s]).concat(t[a]||[])}else if("style"===a){var s=i(e[a]);s=s&&";"!==s[s.length-1]?s+";":s;var c=i(t[a]);c=c&&";"!==c[c.length-1]?c+";":c,e[a]=s+c}else e[a]=t[a];return e},e.classes=o,e.style=i,e.attr=a,e.attrs=function(n,e){var t="";for(var s in n)if(r.call(n,s)){var c=n[s];if("class"===s){c=o(c),t=a(s,c,!1,e)+t;continue}"style"===s&&(c=i(c)),t+=a(s,c,!1,e)}return t};var s=/["&<>]/;function c(n){var e=""+n,t=s.exec(e);if(!t)return n;var r,o,i,a="";for(r=t.index,o=0;r<e.length;r++){switch(e.charCodeAt(r)){case 34:i="&quot;";break;case 38:i="&amp;";break;case 60:i="&lt;";break;case 62:i="&gt;";break;default:continue}o!==r&&(a+=e.substring(o,r)),o=r+1,a+=i}return o!==r?a+e.substring(o,r):a}e.escape=c,e.rethrow=function n(e,r,o,i){if(!(e instanceof Error))throw e;if(!("undefined"==typeof window&&r||i))throw e.message+=" on line "+o,e;try{i=i||t(9).readFileSync(r,"utf8")}catch(t){n(e,null,o)}var a=3,s=i.split("\n"),c=Math.max(o-a,0),l=Math.min(s.length,o+a);var a=s.slice(c,l).map(function(n,e){var t=e+c+1;return(t==o?"  > ":"    ")+t+"| "+n}).join("\n");e.path=r;e.message=(r||"Pug")+":"+o+"\n"+a+"\n\n"+e.message;throw e}},function(n,e,t){"use strict";t(3),t(8)},,function(n,e,t){var r=t(4);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(6)(r,o);r.locals&&(n.exports=r.locals)},function(n,e,t){(n.exports=t(5)(!1)).push([n.i,':root {\n  --first-color: #007BDF;\n  --second-color: #2C2939;\n  --third-color: #ECECEC;\n  --html-color: #DD4B25;\n  --css-color: #146EB0;\n  --js-color: #ED7E30;\n  --mongodb-color: #7FC857;\n  --mysql-color: #005E86;\n  --nodejs-color: #6FA660;\n  --size-progresive: 12rem; }\n\n.Title-sections {\n  text-align: center;\n  color: #444;\n  margin: 0;\n  padding: .5em 0; }\n\n.Main {\n  background-color: #ECECEC;\n  text-align: center;\n  color: #555; }\n\n.Social {\n  margin-bottom: 2rem; }\n  .Social__list {\n    display: flex;\n    justify-content: center; }\n  .Social__item {\n    border: 1px solid #FFF;\n    border-radius: 50%;\n    width: 40px;\n    height: 40px;\n    line-height: 40px;\n    margin-right: .5em;\n    transition: all .3s; }\n    .Social__item:hover {\n      background: rgba(44, 41, 57, 0.8); }\n    @media screen and (max-width: 639px) {\n      .Social__item {\n        width: 35px;\n        height: 35px;\n        line-height: 35px; } }\n  .Social__link {\n    color: #FFF;\n    cursor: pointer;\n    display: block; }\n\n.container {\n  max-width: 1200px;\n  margin-left: auto;\n  margin-right: auto; }\n\n.Animated {\n  transform: translate3d(0, -100%, 0);\n  animation: fadeInDown 1s forwards; }\n\n@keyframes fadeInDown {\n  to {\n    transform: translate3d(0, 0, 0);\n    top: 50%;\n    transform: translateY(-50%); } }\n\nhtml {\n  box-sizing: border-box; }\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit; }\n\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n  padding: 0;\n  margin: 0;\n  font-size: 19.2px;\n  line-height: 1.5; }\n\nul {\n  list-style: none;\n  padding-left: 0;\n  margin-top: 0;\n  margin-bottom: 0; }\n\na {\n  text-decoration: none; }\n\nimg {\n  max-width: 100%;\n  height: auto; }\n\n.Button {\n  border-radius: 3px;\n  background: transparent;\n  color: #FFF;\n  border: 1px solid #FFF; }\n\n.Banner {\n  background: url("https://res.cloudinary.com/alexchip/image/upload/v1551813750/4909b967009975844b5f0cfd7a6e712c.jpg") center center/cover no-repeat;\n  height: 100vh;\n  position: relative;\n  background-attachment: fixed; }\n  .Banner::before {\n    content: "";\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    left: 0;\n    top: 0;\n    background: linear-gradient(to left, var(--first-color), var(--second-color));\n    opacity: .4; }\n  .Banner__copy {\n    text-align: center;\n    color: #FFF;\n    position: absolute;\n    width: 100%; }\n  .Banner__avatar {\n    border-radius: 50%;\n    border: 4px solid #fff;\n    width: 30%; }\n    @media screen and (min-width: 640px) {\n      .Banner__avatar {\n        width: 15%; } }\n  .Banner__title {\n    font-size: 2.2em;\n    margin: 0; }\n    @media screen and (max-width: 639px) {\n      .Banner__title {\n        font-size: 1.6em; } }\n  .Banner__description {\n    margin: 0;\n    margin-bottom: 1em; }\n    @media screen and (max-width: 639px) {\n      .Banner__description {\n        font-size: .75em; } }\n  .Banner__container--buttons {\n    display: flex;\n    justify-content: center; }\n  .Banner__button {\n    transition: all .3s;\n    padding: .4em 1.1em; }\n    .Banner__button:first-child {\n      margin-right: 2rem; }\n    .Banner__button:hover {\n      background: var(--first-color);\n      border: 1px var(--first-color); }\n    @media screen and (max-width: 639px) {\n      .Banner__button {\n        padding: .2em .8em;\n        font-size: .9em; }\n        .Banner__button:first-child {\n          margin-right: 1rem; } }\n\n.About {\n  padding-top: 2rem;\n  margin-bottom: 2rem; }\n  .About__title {\n    padding: .5em 0; }\n  .About__description {\n    margin: 0 auto; }\n    @media screen and (min-width: 640px) {\n      .About__description {\n        width: 75%; } }\n\n.Skills {\n  padding-bottom: 2rem;\n  margin-bottom: 2rem; }\n  .Skills__title {\n    margin: 0;\n    padding: 0; }\n  .Skills__description {\n    margin-top: 0;\n    margin-bottom: 2rem; }\n  .Skills__container {\n    display: grid;\n    grid-template-columns: repeat(1, 1fr);\n    overflow: hidden; }\n    @media screen and (min-width: 640px) {\n      .Skills__container {\n        grid-template-columns: repeat(3, 1fr); } }\n\n.circular-progress {\n  margin: auto;\n  position: relative; }\n  .circular-progress, .circular-progress::before, .circular-progress:after {\n    width: 12rem;\n    height: 12rem;\n    border-radius: 50%; }\n  .circular-progress:before, .circular-progress:after {\n    top: 0;\n    left: 0;\n    position: absolute; }\n  .circular-progress:before {\n    padding: .5em;\n    box-sizing: border-box;\n    font-size: 2rem;\n    line-height: 6rem; }\n  .circular-progress:after {\n    text-transform: uppercase;\n    line-height: 12rem; }\n\n.html {\n  transform: rotate(153deg);\n  background: linear-gradient(0deg, #DD4B25 50%, rgba(221, 75, 37, 0.2) 50%); }\n  .html:before, .html:after {\n    color: #DD4B25; }\n  .html:before {\n    content: "85%";\n    background: #ECECEC content-box;\n    transform: rotate(-153deg); }\n  .html:after {\n    content: "html";\n    background: linear-gradient(transparent 50%, #ECECEC 50%);\n    transform: scale(1.1) rotate(-153deg); }\n\n.css {\n  transform: rotate(126deg);\n  background: linear-gradient(0deg, #146EB0 50%, rgba(20, 110, 176, 0.2) 50%); }\n  .css:before, .css:after {\n    color: #146EB0; }\n  .css:before {\n    content: "70%";\n    background: #ECECEC content-box;\n    transform: rotate(-126deg); }\n  .css:after {\n    content: "css";\n    background: linear-gradient(transparent 50%, #ECECEC 50%);\n    transform: scale(1.1) rotate(-126deg); }\n\n.js {\n  transform: rotate(90deg);\n  background: linear-gradient(0deg, #ED7E30 50%, rgba(237, 126, 48, 0.2) 50%); }\n  .js:before, .js:after {\n    color: #ED7E30; }\n  .js:before {\n    content: "50%";\n    background: #ECECEC content-box;\n    transform: rotate(-90deg); }\n  .js:after {\n    content: "javascript";\n    background: linear-gradient(transparent 50%, #ECECEC 50%);\n    transform: scale(1.1) rotate(-90deg); }\n\n.mongodb {\n  transform: rotate(108deg);\n  background: linear-gradient(0deg, #7FC857 50%, rgba(127, 200, 87, 0.2) 50%); }\n  .mongodb:before, .mongodb:after {\n    color: #7FC857; }\n  .mongodb:before {\n    content: "60%";\n    background: #ECECEC content-box;\n    transform: rotate(-108deg); }\n  .mongodb:after {\n    content: "mongodb";\n    background: linear-gradient(transparent 50%, #ECECEC 50%);\n    transform: scale(1.1) rotate(-108deg); }\n\n.mysql {\n  transform: rotate(126deg);\n  background: linear-gradient(0deg, #005E86 50%, rgba(0, 94, 134, 0.2) 50%); }\n  .mysql:before, .mysql:after {\n    color: #005E86; }\n  .mysql:before {\n    content: "70%";\n    background: #ECECEC content-box;\n    transform: rotate(-126deg); }\n  .mysql:after {\n    content: "mysql";\n    background: linear-gradient(transparent 50%, #ECECEC 50%);\n    transform: scale(1.1) rotate(-126deg); }\n\n.nodejs {\n  transform: rotate(108deg);\n  background: linear-gradient(0deg, #6FA660 50%, rgba(111, 166, 96, 0.2) 50%); }\n  .nodejs:before, .nodejs:after {\n    color: #6FA660; }\n  .nodejs:before {\n    content: "60%";\n    background: #ECECEC content-box;\n    transform: rotate(-108deg); }\n  .nodejs:after {\n    content: "nodejs";\n    background: linear-gradient(transparent 50%, #ECECEC 50%);\n    transform: scale(1.1) rotate(-108deg); }\n\n.Work {\n  margin-bottom: 4rem;\n  color: #2C2939; }\n  .Work__container-gallery {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-gap: 2rem;\n    padding: 0 1rem; }\n    @media screen and (min-width: 1024px) {\n      .Work__container-gallery {\n        grid-template-columns: repeat(4, 1fr); } }\n  .Work__card {\n    border-radius: .25em;\n    box-shadow: 3px 3px 10px rgba(44, 41, 57, 0.5); }\n    .Work__card--image {\n      border-radius: .25em .25em 0 0;\n      position: relative; }\n      .Work__card--image > img {\n        display: block; }\n    .Work__card--link {\n      position: absolute;\n      background: #007BDF;\n      color: #fff;\n      font-size: 16px;\n      border-radius: 50%;\n      height: 45px;\n      width: 45px;\n      text-align: center;\n      line-height: 45px;\n      right: 5%;\n      bottom: -25px;\n      transition: all .3s;\n      box-shadow: 3px 3px 10px rgba(0, 123, 223, 0.5); }\n      .Work__card--link:hover {\n        background: #005fac; }\n  .Work__content {\n    background: whitesmoke;\n    padding: 1em;\n    font-weight: 200; }\n    .Work__content--title {\n      font-size: 24px; }\n    .Work__content--description {\n      margin: 0;\n      font-size: 16px; }\n\n.Footer {\n  padding: 2rem;\n  text-align: center;\n  background: var(--second-color); }\n  .Footer__container--phone {\n    border-bottom: 2px solid rgba(255, 255, 255, 0.2);\n    padding-bottom: 1rem; }\n    @media screen and (min-width: 640px) {\n      .Footer__container--phone {\n        border-bottom: none;\n        border-right: 2px solid rgba(255, 255, 255, 0.2);\n        width: 50%;\n        padding-bottom: 0; } }\n  .Footer__container--address {\n    padding-top: 1rem; }\n    @media screen and (min-width: 640px) {\n      .Footer__container--address {\n        padding-top: 0;\n        width: 50%; } }\n  .Footer__container p {\n    color: rgba(255, 255, 255, 0.6);\n    font-size: .9em;\n    margin: 0; }\n    .Footer__container p::before {\n      margin-right: .5em; }\n    .Footer__container p > span {\n      font-weight: bold; }\n  @media screen and (min-width: 640px) {\n    .Footer__container {\n      display: flex;\n      justify-content: space-around; } }\n  .Footer__info {\n    color: rgba(0, 0, 0, 0.2); }\n',""])},function(n,e){n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var t=function(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(n){return"/*# sourceURL="+r.sourceRoot+n+" */"});return[t].concat(i).concat([o]).join("\n")}var a;return[t].join("\n")}(e,n);return e[2]?"@media "+e[2]+"{"+t+"}":t}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<n.length;o++){var a=n[o];"number"==typeof a[0]&&r[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),e.push(a))}},e}},function(n,e,t){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(n){var e={};return function(n,t){if("function"==typeof n)return n();if(void 0===e[n]){var r=function(n,e){return e?e.querySelector(n):document.querySelector(n)}.call(this,n,t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}}(),c=null,l=0,d=[],p=t(7);function f(n,e){for(var t=0;t<n.length;t++){var r=n[t],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(b(r.parts[a],e))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(b(r.parts[a],e));i[r.id]={id:r.id,refs:1,parts:s}}}}function u(n,e){for(var t=[],r={},o=0;o<n.length;o++){var i=n[o],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):t.push(r[a]={id:a,parts:[s]})}return t}function g(n,e){var t=s(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=d[d.length-1];if("top"===n.insertAt)r?r.nextSibling?t.insertBefore(e,r.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),d.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(n.insertAt.before,t);t.insertBefore(e,o)}}function m(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=d.indexOf(n);e>=0&&d.splice(e,1)}function _(n){var e=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var r=function(){0;return t.nc}();r&&(n.attrs.nonce=r)}return h(e,n.attrs),g(n,e),e}function h(n,e){Object.keys(e).forEach(function(t){n.setAttribute(t,e[t])})}function b(n,e){var t,r,o,i;if(e.transform&&n.css){if(!(i="function"==typeof e.transform?e.transform(n.css):e.transform.default(n.css)))return function(){};n.css=i}if(e.singleton){var a=l++;t=c||(c=_(e)),r=x.bind(null,t,a,!1),o=x.bind(null,t,a,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(n){var e=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",h(e,n.attrs),g(n,e),e}(e),r=function(n,e,t){var r=t.css,o=t.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=p(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,t,e),o=function(){m(t),t.href&&URL.revokeObjectURL(t.href)}):(t=_(e),r=function(n,e){var t=e.css,r=e.media;r&&n.setAttribute("media",r);if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}.bind(null,t),o=function(){m(t)});return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=u(n,e);return f(t,e),function(n){for(var r=[],o=0;o<t.length;o++){var a=t[o];(s=i[a.id]).refs--,r.push(s)}n&&f(u(n,e),e);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete i[s.id]}}}};var v,k=(v=[],function(n,e){return v[n]=e,v.filter(Boolean).join("\n")});function x(n,e,t,r){var o=t?"":r.css;if(n.styleSheet)n.styleSheet.cssText=k(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}},function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=e.protocol+"//"+e.host,r=t+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var o,i=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?n:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?t+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(n,e,t){t(0);n.exports=function(n){var e,r="";return r=r+'<!DOCTYPE html><!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"><link href="https://file.myfontastic.com/mdofrjCmKsF94AYNkVr3u7/icons.css" rel="stylesheet"><title>Alex Chip</title></head><body><section class="Banner">'+(null==(e=t(10).call(this,n))?"":e)+'</section><main class="Main"><div class="container">'+(null==(e=t(12).call(this,n))?"":e)+(null==(e=t(13).call(this,n))?"":e)+"</div></main>"+(null==(e=t(14).call(this,n))?"":e)+(null==(e=t(15).call(this,n))?"":e)+"</body></html>"}},function(n,e){},function(n,e,t){t(0);n.exports=function(n){var e,r="";return r=r+'<div class="Banner__copy Animated"><img class="Banner__avatar" src="dist/assets/img/8da91ee5cba16c7af3b9501cf4ee947b.jpg" alt="" srcset=""><h1 class="Banner__title">Alexander Chip</h1><p class="Banner__description">Creative Designer / Frontend</p>'+(null==(e=t(11).call(this,n))?"":e)+'<div class="Banner__container--buttons"><a class="Button Banner__button" href="#profile">Here Me</a><a class="Button Banner__button" href="#work">My Work</a></div></div>'}},function(n,e,t){t(0);n.exports=function(n){var e="";return e+='<div class="Social"><ul class="Social__list"><li class="Social__item"><a class="Social__link icon-facebook" href="https://www.facebook.com/alex.chip2"></a></li><li class="Social__item"><a class="Social__link icon-twitter" href="https://twitter.com/alex_chip42"></a></li><li class="Social__item"><a class="Social__link icon-linkedin" href="https://www.linkedin.com/in/alexander-chip-512726159/"></a></li><li class="Social__item"><a class="Social__link icon-github" href="https://github.com/alex-chip"></a></li><li class="Social__item"><a class="Social__link icon-gitlab" href="https://gitlab.com/alex-chip"></a></li></ul></div>'}},function(n,e,t){t(0);n.exports=function(n){var e="";return e+='<section class="About" id="profile"><h2 class="About__title Title-sections">About Me</h2><p class="About__description">Soy una persona apasionado por la tecnologia, sobre todo el Desarrollo Web.</p></section>'}},function(n,e,t){t(0);n.exports=function(n){var e="";return e+='<section class="Skills"><h2 class="Skills__title Title-sections">My Awesome Skills</h2><p class="Skills__description">Tecnologias que manejo.\t</p><div class="Skills__container"><div class="circular-progress html"></div><div class="circular-progress css"></div><div class="circular-progress js"></div><div class="circular-progress mongodb"></div><div class="circular-progress nodejs"></div><div class="circular-progress mysql"></div></div></section>'}},function(n,e,t){t(0);n.exports=function(n){var e="";return e+='<section class="Work" id="work"><h2 class="Work__title Title-sections">My Recent Work</h2><div class="container"><div class="Work__container-gallery"><div class="Work__card"><div class="Work__card--image"><img class="Work__img" src="dist/assets/img/6ae197a49b01cf8c4fae425926f7848f.png" alt="Helados Mariela"><a class="Work__card--link icon-sign-in" href="https://alex-chip.github.io/page-helados/" target="_blank"></a></div><div class="Work__content"><span class="Work__content--title">Helados Mariela</span><p class="Work__content--description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div></div><div class="Work__card"><div class="Work__card--image"><img class="Work__img" src="dist/assets/img/88c349d8499659747cbdd0c509b1d93a.png" alt="The song"><a class="Work__card--link icon-sign-in" href="https://alex-chip.github.io/the-song/" target="_blank"></a></div><div class="Work__content"><span class="Work__content--title">The Song</span><p class="Work__content--description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div></div><div class="Work__card"><div class="Work__card--image"><img class="Work__img" src="dist/assets/img/49dcee6773da9932ef771b0894a1d3b9.png" alt="Anema"><a class="Work__card--link icon-sign-in" href="https://alex-chip.github.io/anema/" target="_blank"></a></div><div class="Work__content"><span class="Work__content--title">Anema</span><p class="Work__content--description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div></div><div class="Work__card"><div class="Work__card--image"><img class="Work__img" src="dist/assets/img/03f0fed38ee4db5ffe2577ba5cfb8601.png" alt="Hotel Yepocapa"><a class="Work__card--link icon-sign-in" href="https://alex-chip.github.io/hotel-yepocapa/" target="_blank"></a></div><div class="Work__content"><span class="Work__content--title">Hotel</span><p class="Work__content--description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div></div><div class="Work__card"><div class="Work__card--image"><img class="Work__img" src="dist/assets/img/2dddea57b2ddcb638c281e4eca2b0a86.png" alt="Abogados"><a class="Work__card--link icon-sign-in" href="https://alex-chip.github.io/abogados-group/" target="_blank"></a></div><div class="Work__content"><span class="Work__content--title">Abogados</span><p class="Work__content--description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div></div><div class="Work__card"><div class="Work__card--image"><img class="Work__img" src="dist/assets/img/f061caaf1a5d3c9f2c9d743b0c3292b9.png" alt="The Movies"><a class="Work__card--link icon-sign-in" href="https://movies-new.herokuapp.com/" target="_blank"></a></div><div class="Work__content"><span class="Work__content--title">The Movies</span><p class="Work__content--description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div></div><div class="Work__card"><div class="Work__card--image"><img class="Work__img" src="dist/assets/img/fb3bba1dc4f8960fe99fe2a16e31b317.png" alt="Grand Hotel"><a class="Work__card--link icon-sign-in" href="https://alex-chip.github.io/page-grand-hotel/" target="_blank"></a></div><div class="Work__content"><span class="Work__content--title">Grand Hotel</span><p class="Work__content--description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div></div><div class="Work__card"><div class="Work__card--image"><img class="Work__img" src="dist/assets/img/df7fafde1a19b5ab4a934592477277cb.png" alt="Photo Instant"><a class="Work__card--link icon-sign-in" href="https://alex-chip.github.io/photo-instant/" target="_blank"></a></div><div class="Work__content"><span class="Work__content--title">Photo Instant</span><p class="Work__content--description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div></div></div></div></section>'}},function(n,e,t){t(0);n.exports=function(n){var e="";return e+='<footer class="Footer"><div class="container"><div class="Footer__container"><div class="Footer__container--phone"><p class="Footer__info--phone icon-phone"><span>Cel:</span> +(502) 4744 - 3173</p><p class="Footer__info--phone icon-phone"><span>Cel:</span> +(502) 4098 - 4950</p></div><div class="Footer__container--address"><p class="Footer__info--email icon-mail"><span>Email:</span> alexchip32@gmail.com</p><p class="Footer__info--address icon-home"><span>Dirección:</span> 2da. Av. 35-88 Colonia Toledo Zona 11 Guatemala</p></div></div></div></footer>'}}]);