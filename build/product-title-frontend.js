(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[84,76],{21:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return c}));var o=n(38);const r=t=>!Object(o.a)(t)&&t instanceof Object&&t.constructor===Object;function c(t,e){return r(t)&&e in t}},284:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var o=function(){return(o=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};Object.create,Object.create},285:function(t,e,n){"use strict";function o(t){return t.toLowerCase()}n.d(e,"a",(function(){return l}));var r=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],c=/[^A-Z0-9]+/gi;function l(t,e){void 0===e&&(e={});for(var n=e.splitRegexp,l=void 0===n?r:n,i=e.stripRegexp,s=void 0===i?c:i,u=e.transform,d=void 0===u?o:u,f=e.delimiter,b=void 0===f?" ":f,p=a(a(t,l,"$1\0$2"),s,"\0"),v=0,m=p.length;"\0"===p.charAt(v);)v++;for(;"\0"===p.charAt(m-1);)m--;return p.slice(v,m).split("\0").map(d).join(b)}function a(t,e,n){return e instanceof RegExp?t.replace(e,n):e.reduce((function(t,e){return t.replace(e,n)}),t)}},288:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var o=n(284),r=n(285);function c(t,e){return void 0===e&&(e={}),function(t,e){return void 0===e&&(e={}),Object(r.a)(t,Object(o.a)({delimiter:"."},e))}(t,Object(o.a)({delimiter:"-"},e))}},289:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var o=n(5),r=n.n(o),c=n(21),l=n(29),a=n(288),i=n(132);function s(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const e={};return Object(i.getCSSRules)(t,{selector:""}).forEach(t=>{e[t.key]=t.value}),e}function u(t,e){return t&&e?`has-${Object(a.a)(e)}-${t}`:""}const d=t=>{const e=(t=>{const e=Object(c.a)(t)?t:{style:{}};let n=e.style;return Object(l.a)(n)&&(n=JSON.parse(n)||{}),Object(c.a)(n)||(n={}),{...e,style:n}})(t),n=function(t){var e,n,o,l,a,i,d;const{backgroundColor:f,textColor:b,gradient:p,style:v}=t,m=u("background-color",f),g=u("color",b),y=function(t){if(t)return`has-${t}-gradient-background`}(p),O=y||(null==v||null===(e=v.color)||void 0===e?void 0:e.gradient);return{className:r()(g,y,{[m]:!O&&!!m,"has-text-color":b||(null==v||null===(n=v.color)||void 0===n?void 0:n.text),"has-background":f||(null==v||null===(o=v.color)||void 0===o?void 0:o.background)||p||(null==v||null===(l=v.color)||void 0===l?void 0:l.gradient),"has-link-color":Object(c.a)(null==v||null===(a=v.elements)||void 0===a?void 0:a.link)?null==v||null===(i=v.elements)||void 0===i||null===(d=i.link)||void 0===d?void 0:d.color:void 0}),style:s({color:(null==v?void 0:v.color)||{}})}}(e),o=function(t){var e;const n=(null===(e=t.style)||void 0===e?void 0:e.border)||{};return{className:function(t){var e;const{borderColor:n,style:o}=t,c=n?u("border-color",n):"";return r()({"has-border-color":n||(null==o||null===(e=o.border)||void 0===e?void 0:e.color),borderColorClass:c})}(t),style:s({border:n})}}(e),a=function(t){var e;return{className:void 0,style:s({spacing:(null===(e=t.style)||void 0===e?void 0:e.spacing)||{}})}}(e),i=(t=>{const e=Object(c.a)(t.style.typography)?t.style.typography:{},n=Object(l.a)(e.fontFamily)?e.fontFamily:"";return{className:t.fontFamily?`has-${t.fontFamily}-font-family`:n,style:{fontSize:t.fontSize?`var(--wp--preset--font-size--${t.fontSize})`:e.fontSize,fontStyle:e.fontStyle,fontWeight:e.fontWeight,letterSpacing:e.letterSpacing,lineHeight:e.lineHeight,textDecoration:e.textDecoration,textTransform:e.textTransform}}})(e);return{className:r()(i.className,n.className,o.className,a.className),style:{...i.style,...n.style,...o.style,...a.style}}}},29:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));const o=t=>"string"==typeof t},309:function(t,e,n){"use strict";var o=n(14),r=n.n(o),c=n(0),l=n(24),a=n(5),i=n.n(a);n(310),e.a=t=>{let{className:e="",disabled:n=!1,name:o,permalink:a="",target:s,rel:u,style:d,onClick:f,...b}=t;const p=i()("wc-block-components-product-name",e);if(n){const t=b;return Object(c.createElement)("span",r()({className:p},t,{dangerouslySetInnerHTML:{__html:Object(l.decodeEntities)(o)}}))}return Object(c.createElement)("a",r()({className:p,href:a,target:s},b,{dangerouslySetInnerHTML:{__html:Object(l.decodeEntities)(o)},style:d}))}},310:function(t,e){},368:function(t,e,n){"use strict";n.d(e,"a",(function(){return b}));var o=n(0),r=n(5),c=n.n(r),l=n(60),a=n(426),i=n(146),s=n(309),u=n(74),d=n(289);n(369);const f=t=>{let{children:e,headingLevel:n,elementType:r="h"+n,...c}=t;return Object(o.createElement)(r,c,e)},b=t=>{const{className:e,headingLevel:n=2,showProductLink:r=!0,linkTarget:i,align:b}=t,p=Object(d.a)(t),{parentClassName:v}=Object(l.useInnerBlockLayoutContext)(),{product:m}=Object(l.useProductDataContext)(),{dispatchStoreEvent:g}=Object(u.a)();return m.id?Object(o.createElement)(f,{headingLevel:n,className:c()(e,p.className,"wc-block-components-product-title",{[v+"__product-title"]:v,["wc-block-components-product-title--align-"+b]:b&&Object(a.a)()}),style:Object(a.a)()?p.style:{}},Object(o.createElement)(s.a,{disabled:!r,name:m.name,permalink:m.permalink,target:i,onClick:()=>{g("product-view-link",{product:m})}})):Object(o.createElement)(f,{headingLevel:n,className:c()(e,p.className,"wc-block-components-product-title",{[v+"__product-title"]:v,["wc-block-components-product-title--align-"+b]:b&&Object(a.a)()}),style:Object(a.a)()?p.style:{}})};e.b=Object(i.withProductDataContext)(b)},369:function(t,e){},38:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));const o=t=>null===t},426:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n(235);var o=n(30);const r=()=>o.o>1},537:function(t,e,n){"use strict";n.r(e);var o=n(146),r=n(368),c=n(426);let l={headingLevel:{type:"number",default:2},showProductLink:{type:"boolean",default:!0},linkTarget:{type:"string"},productId:{type:"number",default:0}};Object(c.a)()&&(l={...l,align:{type:"string"}});var a=l;e.default=Object(o.withFilteredAttributes)(a)(r.b)}}]);