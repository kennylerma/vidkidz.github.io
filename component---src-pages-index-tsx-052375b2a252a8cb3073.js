(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"5irr":function(e,t,n){n("Sc3u")("Float32",4,(function(e){return function(t,n,r){return e(this,t,n,r)}}))},"88iX":function(e,t,n){n("Sc3u")("Int8",1,(function(e){return function(t,n,r){return e(this,t,n,r)}}))},"8oxB":function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function l(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var s,c=[],u=!1,f=-1;function d(){u&&s&&(u=!1,s.length?c=s.concat(c):f=-1,c.length&&p())}function p(){if(!u){var e=l(d);u=!0;for(var t=c.length;t;){for(s=c,c=[];++f<t;)s&&s[f].run();f=-1,t=c.length}s=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new m(e,t)),1!==c.length||u||l(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},AItV:function(e,t,n){n("Sc3u")("Int16",2,(function(e){return function(t,n,r){return e(this,t,n,r)}}))},CS7O:function(e,t,n){"use strict";var r=n("q1tI"),o=(n("pJf4"),n("CtJk"),n("JmBL")),i=function(e,t){console.log("Waflash> load from =>",t);e.ccall("reopenBuffer","int",["string","number","number"],[t,0,0])},a=function(e,t){if(t.size<104857600){var n=new FileReader;n.onload=function(n){console.log("Waflash> file loaded!");var r=n.target.result;if(r){console.log("Waflash> content length: "+r.byteLength);var o=new Uint8Array(r),i=e._malloc(o.length);e.HEAP8.set(o,i);var a=e.ccall("reopenBuffer","int",["string","number","number"],[t.name,i,o.length]);e._free(i),0==a&&console.warn("Waflash> load failed!")}else console.warn("Waflash> load result empty!")},n.readAsArrayBuffer(t)}else console.warn("Waflash> ignoring dropped file because it is too big")},l=function(e){var t=e.canvas;t.addEventListener("dragenter",(function(e){e.stopPropagation(),e.preventDefault()}),!1),t.addEventListener("dragleave",(function(e){e.stopPropagation(),e.preventDefault()}),!1),t.addEventListener("dragover",(function(e){e.stopPropagation(),e.preventDefault()}),!1),t.addEventListener("drop",(function(t){t.stopPropagation(),t.preventDefault(),function(e,t){var n=t.dataTransfer.getData("text");n&&/^https?:\/\/.*\.swf$/.test(n)?i(e,n):t.dataTransfer.files.length>0&&a(e,t.dataTransfer.files[0])}(e,t)}),!1)},s=o.a,c=n("qKvR");t.a=function(e){Object(r.useEffect)((function(){var t,n,r=e.src&&e.src.publicURL?window.location.origin+e.src.publicURL:"",o={arguments:[r],postRun:[],locateFile:function(e,t){return"/wasm/"+e},print:function(e){arguments.length>1&&(e=Array.prototype.slice.call(arguments).join(" ")),console.log(e)},printErr:function(e){arguments.length>1&&(e=Array.prototype.slice.call(arguments).join(" ")),console.error(e)},canvas:(n=document.getElementById("canvas"),n.addEventListener("webglcontextlost",(function(e){alert("WebGL context lost. You will need to reload the page."),e.preventDefault()}),!1),n)};return s(o).then((function(e){console.log("Waflash module created!"),t=e,r||l(t)})),function(){console.log("Waflash component will unmount!"),t=null}}));var t={paddingRight:0,marginLeft:"auto",marginRight:"auto",display:"block",border:"0px none",backgroundColor:"black",width:e.width||"100%",height:e.height||"480px"};return Object(c.b)("div",{style:{position:"relative",border:"1px solid black"}},Object(c.b)("canvas",{id:"canvas",style:t,onContextMenu:function(e){return e.preventDefault()},tabIndex:-1}))}},Kb1d:function(e,t,n){var r=n("P8UN");r(r.P,"Array",{copyWithin:n("cRJv")}),n("Dq1/")("copyWithin")},QeBL:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return P}));n("pJf4"),n("R48M"),n("+ar0"),n("xtjI"),n("JHok"),n("OeI1"),n("4DPX"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi");var r=n("lSNA"),o=n.n(r),i=n("q1tI"),a=n("4qRI"),l=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,s=Object(a.a)((function(e){return l.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),c=n("qKvR"),u=n("SIPS"),f=n("MiSq"),d=s,p=function(e){return"theme"!==e&&"innerRef"!==e},m=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?d:p};function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(n,!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v=function e(t,n){var r,o,a;void 0!==n&&(r=n.label,a=n.target,o=t.__emotion_forwardProp&&n.shouldForwardProp?function(e){return t.__emotion_forwardProp(e)&&n.shouldForwardProp(e)}:n.shouldForwardProp);var l=t.__emotion_real===t,s=l&&t.__emotion_base||t;"function"!=typeof o&&l&&(o=t.__emotion_forwardProp);var d=o||m(s),p=!d("as");return function(){var h=arguments,v=l&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==r&&v.push("label:"+r+";"),null==h[0]||void 0===h[0].raw)v.push.apply(v,h);else{0,v.push(h[0][0]);for(var y=h.length,b=1;b<y;b++)v.push(h[b],h[0][b])}var w=Object(c.c)((function(e,t,n){return Object(i.createElement)(c.a.Consumer,null,(function(r){var l=p&&e.as||s,c="",h=[],g=e;if(null==e.theme){for(var y in g={},e)g[y]=e[y];g.theme=r}"string"==typeof e.className?c=Object(u.a)(t.registered,h,e.className):null!=e.className&&(c=e.className+" ");var b=Object(f.a)(v.concat(h),t.registered,g);Object(u.b)(t,b,"string"==typeof l);c+=t.key+"-"+b.name,void 0!==a&&(c+=" "+a);var w=p&&void 0===o?m(l):d,k={};for(var x in e)p&&"as"===x||w(x)&&(k[x]=e[x]);return k.className=c,k.ref=n||e.innerRef,Object(i.createElement)(l,k)}))}));return w.displayName=void 0!==r?r:"Styled("+("string"==typeof s?s:s.displayName||s.name||"Component")+")",w.defaultProps=t.defaultProps,w.__emotion_real=w,w.__emotion_base=s,w.__emotion_styles=v,w.__emotion_forwardProp=o,Object.defineProperty(w,"toString",{value:function(){return"."+a}}),w.withComponent=function(t,r){return e(t,void 0!==r?g({},n||{},{},r):n).apply(void 0,v)},w}},y=n("Bl7J"),b=n("vrFN"),w=n("CS7O"),k=v("article",{target:"e1cb4vy60"})({name:"16amh36",styles:"position:relative;display:grid;background-color:white;border-radius:9px;border:1px solid #d3d6e7;box-shadow:0 0 30px #d5d5d5;overflow:hidden;line-height:1.5;&:hover{color:#381696;}"}),x=v("div",{target:"e1cb4vy61"})({name:"zs4upj",styles:"font-size:0.9rem;margin-bottom:0.3rem;margin-block-end:0.3em;margin-inline-start:0px;margin-inline-end:0px;font-weight:bold;"}),O=v("div",{target:"e1cb4vy62"})({name:"nnpyvi",styles:"font-size:.6rem;font-weight:100;margin-botton:0;margin-block-end:0.3em;"}),T=v("div",{target:"e1cb4vy63"})({name:"rc9vp3",styles:"position:absolute;top:125px;right:7px;font-size:0.8rem;padding:1px 4px;background-color:black;color:white;"}),S=function(e){var t=e.post,n=t.frontmatter.title||t.fields.slug,r=t.frontmatter;return Object(c.b)(k,null,Object(c.b)("a",{style:{boxShadow:"none"},href:t.fields.slug},Object(c.b)("img",{style:{marginBottom:0},src:r.thumbnail.publicURL,width:320,height:150})),Object(c.b)(T,null,Object(c.b)("span",null,"100")),Object(c.b)("div",{style:{paddingLeft:"8px",marginTop:"0"}},Object(c.b)(x,null,Object(c.b)("a",{style:{boxShadow:"none"},href:t.fields.slug},n)),Object(c.b)(O,null,"by ",r.author,", from ",r.from)))},P=(t.default=function(e){var t=e.data,n=e.location,r=t.site.siteMetadata.title,o=t.allMarkdownRemark.edges.map((function(e){var t=e.node;return Object(c.b)(S,{key:t.fields.slug,post:t})}));return Object(c.b)(y.a,{location:n,title:r},Object(c.b)(b.a,{title:"WebAssembly Flash"}),Object(c.b)("h3",{style:{textAlign:"center",lineHeight:"1.5"}},"Waflash is a WebAssembly AS2/AS3 Flash compatible player",Object(c.b)("br",null),"without plugin."),Object(c.b)(w.a,{width:"100%",height:"480px"}),Object(c.b)("h2",null,"Featured Demo"),Object(c.b)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gridGap:"12px",marginTop:"12px"}},o))},"1213553651")},SIeT:function(e,t,n){n("Sc3u")("Uint32",4,(function(e){return function(t,n,r){return e(this,t,n,r)}}))},URgk:function(e,t,n){(function(e){var r=void 0!==e&&e||"undefined"!=typeof self&&self||window,o=Function.prototype.apply;function i(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new i(o.call(setTimeout,r,arguments),clearTimeout)},t.setInterval=function(){return new i(o.call(setInterval,r,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(r,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},n("YBdB"),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n("yLpj"))},YBdB:function(e,t,n){(function(e,t){n("8npG"),n("sc67"),function(e,n){"use strict";if(!e.setImmediate){var r,o,i,a,l,s=1,c={},u=!1,f=e.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(e);d=d&&d.setTimeout?d:e,"[object process]"==={}.toString.call(e.process)?r=function(e){t.nextTick((function(){m(e)}))}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?e.MessageChannel?((i=new MessageChannel).port1.onmessage=function(e){m(e.data)},r=function(e){i.port2.postMessage(e)}):f&&"onreadystatechange"in f.createElement("script")?(o=f.documentElement,r=function(e){var t=f.createElement("script");t.onreadystatechange=function(){m(e),t.onreadystatechange=null,o.removeChild(t),t=null},o.appendChild(t)}):r=function(e){setTimeout(m,0,e)}:(a="setImmediate$"+Math.random()+"$",l=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(a)&&m(+t.data.slice(a.length))},e.addEventListener?e.addEventListener("message",l,!1):e.attachEvent("onmessage",l),r=function(t){e.postMessage(a+t,"*")}),d.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var o={callback:e,args:t};return c[s]=o,r(s),s++},d.clearImmediate=p}function p(e){delete c[e]}function m(e){if(u)setTimeout(m,0,e);else{var t=c[e];if(t){u=!0;try{!function(e){var t=e.callback,n=e.args;switch(n.length){case 0:t();break;case 1:t(n[0]);break;case 2:t(n[0],n[1]);break;case 3:t(n[0],n[1],n[2]);break;default:t.apply(void 0,n)}}(t)}finally{p(e),u=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n("yLpj"),n("8oxB"))},ZiRl:function(e,t,n){var r=n("P8UN");r(r.P,"String",{repeat:n("gd4K")})},gDik:function(e,t){e.exports=Math.sign||function(e){return 0==(e=+e)||e!=e?e:e<0?-1:1}},h3Sa:function(e,t,n){n("Sc3u")("Uint16",2,(function(e){return function(t,n,r){return e(this,t,n,r)}}))},iHDd:function(e,t,n){var r=n("P8UN");r(r.S,"Math",{clz32:function(e){return(e>>>=0)?31-Math.floor(Math.log(e+.5)*Math.LOG2E):32}})},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},n0hJ:function(e,t,n){var r=n("P8UN");r(r.P,"Array",{fill:n("Y++M")}),n("Dq1/")("fill")},uSBc:function(e,t,n){var r=n("chL8"),o=n("lHo0"),i=n("1a8y"),a=n("emib").Reflect;e.exports=a&&a.ownKeys||function(e){var t=r.f(i(e)),n=o.f;return n?t.concat(n(e)):t}},vJvp:function(e,t,n){var r=n("P8UN");r(r.S,"Math",{fround:n("vRRU")})},vRRU:function(e,t,n){var r=n("gDik"),o=Math.pow,i=o(2,-52),a=o(2,-23),l=o(2,127)*(2-a),s=o(2,-126);e.exports=Math.fround||function(e){var t,n,o=Math.abs(e),c=r(e);return o<s?c*(o/s/a+1/i-1/i)*s*a:(n=(t=(1+a/i)*o)-(t-o))>l||n!=n?c*(1/0):c*n}},xtjI:function(e,t,n){var r=n("P8UN"),o=n("uSBc"),i=n("5SQf"),a=n("Drra"),l=n("Fgx0");r(r.S,"Object",{getOwnPropertyDescriptors:function(e){for(var t,n,r=i(e),s=a.f,c=o(r),u={},f=0;c.length>f;)void 0!==(n=s(r,t=c[f++]))&&l(u,t,n);return u}})},y7hu:function(e,t,n){"use strict";n("t+fG")("link",(function(e){return function(t){return e(this,"a","href",t)}}))},zZTu:function(e,t,n){n("Sc3u")("Float64",8,(function(e){return function(t,n,r){return e(this,t,n,r)}}))}}]);
//# sourceMappingURL=component---src-pages-index-tsx-052375b2a252a8cb3073.js.map