(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[77,76],{121:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));const r=t=>"number"==typeof t},21:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c}));var r=n(38);const o=t=>!Object(r.a)(t)&&t instanceof Object&&t.constructor===Object;function c(t,e){return o(t)&&e in t}},284:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};Object.create,Object.create},285:function(t,e,n){"use strict";function r(t){return t.toLowerCase()}n.d(e,"a",(function(){return s}));var o=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],c=/[^A-Z0-9]+/gi;function s(t,e){void 0===e&&(e={});for(var n=e.splitRegexp,s=void 0===n?o:n,i=e.stripRegexp,l=void 0===i?c:i,u=e.transform,d=void 0===u?r:u,b=e.delimiter,f=void 0===b?" ":b,p=a(a(t,s,"$1\0$2"),l,"\0"),g=0,v=p.length;"\0"===p.charAt(g);)g++;for(;"\0"===p.charAt(v-1);)v--;return p.slice(g,v).split("\0").map(d).join(f)}function a(t,e,n){return e instanceof RegExp?t.replace(e,n):e.reduce((function(t,e){return t.replace(e,n)}),t)}},288:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(284),o=n(285);function c(t,e){return void 0===e&&(e={}),function(t,e){return void 0===e&&(e={}),Object(o.a)(t,Object(r.a)({delimiter:"."},e))}(t,Object(r.a)({delimiter:"-"},e))}},289:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r=n(5),o=n.n(r),c=n(21),s=n(29),a=n(288),i=n(132);function l(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const e={};return Object(i.getCSSRules)(t,{selector:""}).forEach(t=>{e[t.key]=t.value}),e}function u(t,e){return t&&e?`has-${Object(a.a)(e)}-${t}`:""}const d=t=>{const e=(t=>{const e=Object(c.a)(t)?t:{style:{}};let n=e.style;return Object(s.a)(n)&&(n=JSON.parse(n)||{}),Object(c.a)(n)||(n={}),{...e,style:n}})(t),n=function(t){var e,n,r,s,a,i,d;const{backgroundColor:b,textColor:f,gradient:p,style:g}=t,v=u("background-color",b),m=u("color",f),O=function(t){if(t)return`has-${t}-gradient-background`}(p),j=O||(null==g||null===(e=g.color)||void 0===e?void 0:e.gradient);return{className:o()(m,O,{[v]:!j&&!!v,"has-text-color":f||(null==g||null===(n=g.color)||void 0===n?void 0:n.text),"has-background":b||(null==g||null===(r=g.color)||void 0===r?void 0:r.background)||p||(null==g||null===(s=g.color)||void 0===s?void 0:s.gradient),"has-link-color":Object(c.a)(null==g||null===(a=g.elements)||void 0===a?void 0:a.link)?null==g||null===(i=g.elements)||void 0===i||null===(d=i.link)||void 0===d?void 0:d.color:void 0}),style:l({color:(null==g?void 0:g.color)||{}})}}(e),r=function(t){var e;const n=(null===(e=t.style)||void 0===e?void 0:e.border)||{};return{className:function(t){var e;const{borderColor:n,style:r}=t,c=n?u("border-color",n):"";return o()({"has-border-color":n||(null==r||null===(e=r.border)||void 0===e?void 0:e.color),borderColorClass:c})}(t),style:l({border:n})}}(e),a=function(t){var e;return{className:void 0,style:l({spacing:(null===(e=t.style)||void 0===e?void 0:e.spacing)||{}})}}(e),i=(t=>{const e=Object(c.a)(t.style.typography)?t.style.typography:{},n=Object(s.a)(e.fontFamily)?e.fontFamily:"";return{className:t.fontFamily?`has-${t.fontFamily}-font-family`:n,style:{fontSize:t.fontSize?`var(--wp--preset--font-size--${t.fontSize})`:e.fontSize,fontStyle:e.fontStyle,fontWeight:e.fontWeight,letterSpacing:e.letterSpacing,lineHeight:e.lineHeight,textDecoration:e.textDecoration,textTransform:e.textTransform}}})(e);return{className:o()(i.className,n.className,r.className,a.className),style:{...i.style,...n.style,...r.style,...a.style}}}},29:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));const r=t=>"string"==typeof t},370:function(t,e){},38:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));const r=t=>null===t},395:function(t,e,n){"use strict";n.r(e),n.d(e,"Block",(function(){return g}));var r=n(0),o=n(1),c=n(5),s=n.n(c),a=n(60),i=n(289),l=n(146),u=n(121);n(370);const d=t=>({width:t/5*100+"%"}),b=t=>{let{parentClassName:e}=t;const n=d(0);return Object(r.createElement)("div",{className:s()("wc-block-components-product-rating__norating-container",e+"-product-rating__norating-container")},Object(r.createElement)("div",{className:"wc-block-components-product-rating__norating",role:"img"},Object(r.createElement)("span",{style:n})),Object(r.createElement)("span",null,Object(o.__)("No Reviews","woo-gutenberg-products-block")))},f=t=>{const{rating:e,reviews:n,parentClassName:c}=t,a=d(e),i=Object(o.sprintf)(
/* translators: %f is referring to the average rating value */
Object(o.__)("Rated %f out of 5","woo-gutenberg-products-block"),e),l={__html:Object(o.sprintf)(
/* translators: %1$s is referring to the average rating value, %2$s is referring to the number of ratings */
Object(o._n)("Rated %1$s out of 5 based on %2$s customer rating","Rated %1$s out of 5 based on %2$s customer ratings",n,"woo-gutenberg-products-block"),Object(o.sprintf)('<strong class="rating">%f</strong>',e),Object(o.sprintf)('<span class="rating">%d</span>',n))};return Object(r.createElement)("div",{className:s()("wc-block-components-product-rating__stars",c+"__product-rating__stars"),role:"img","aria-label":i},Object(r.createElement)("span",{style:a,dangerouslySetInnerHTML:l}))},p=t=>{const{reviews:e}=t,n=Object(o.sprintf)(
/* translators: %s is referring to the total of reviews for a product */
Object(o._n)("(%s customer review)","(%s customer reviews)",e,"woo-gutenberg-products-block"),e);return Object(r.createElement)("span",{className:"wc-block-components-product-rating__reviews_count"},n)},g=t=>{const{textAlign:e,isDescendentOfSingleProductBlock:n,shouldDisplayMockedReviewsWhenProductHasNoReviews:o}=t,c=Object(i.a)(t),{parentClassName:l}=Object(a.useInnerBlockLayoutContext)(),{product:d}=Object(a.useProductDataContext)(),g=(t=>{const e=parseFloat(t.average_rating);return Number.isFinite(e)&&e>0?e:0})(d),v=(t=>{const e=Object(u.a)(t.review_count)?t.review_count:parseInt(t.review_count,10);return Number.isFinite(e)&&e>0?e:0})(d),m=s()(c.className,"wc-block-components-product-rating",{[l+"__product-rating"]:l,["has-text-align-"+e]:e}),O=o?Object(r.createElement)(b,{parentClassName:l}):null,j=v?Object(r.createElement)(f,{rating:g,reviews:v,parentClassName:l}):O;if(v||o)return Object(r.createElement)("div",{className:m,style:c.style},Object(r.createElement)("div",{className:"wc-block-components-product-rating__container"},j,v&&n?Object(r.createElement)(p,{reviews:v}):null))};e.default=Object(l.withProductDataContext)(g)}}]);