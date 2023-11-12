(()=>{var e,t,r={1984:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var o=r(9307);const n=function(e){let{icon:t,size:r=24,...n}=e;return(0,o.cloneElement)(t,{width:r,height:r,...n})}},5918:(e,t,r)=>{"use strict";r.d(t,{n:()=>a});var o=r(2694),n=r(9818),c=r(9307);const a=()=>({dispatchStoreEvent:(0,c.useCallback)(((e,t={})=>{try{(0,o.doAction)(`experimental__woocommerce_blocks-${e}`,t)}catch(e){console.error(e)}}),[]),dispatchCheckoutEvent:(0,c.useCallback)(((e,t={})=>{try{(0,o.doAction)(`experimental__woocommerce_blocks-checkout-${e}`,{...t,storeCart:(0,n.select)("wc/store/cart").getCartData()})}catch(e){console.error(e)}}),[])})},9075:(e,t,r)=>{"use strict";r.d(t,{s:()=>a});var o=r(9307),n=r(9127),c=r.n(n);function a(e){const t=(0,o.useRef)(e);return c()(e,t.current)||(t.current=e),t.current}},7530:(e,t,r)=>{"use strict";r.d(t,{Cm:()=>g,Lo:()=>w,VF:()=>h,fh:()=>b,td:()=>E,vr:()=>k});var o,n,c,a,l,s,i,u,p,d,m=r(4617);const g=(0,m.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),E=g.pluginUrl+"images/",h=g.pluginUrl+"build/",w=g.buildPhase,b=(null===(o=m.STORE_PAGES.shop)||void 0===o||o.permalink,null===(n=m.STORE_PAGES.checkout)||void 0===n||n.id,null===(c=m.STORE_PAGES.checkout)||void 0===c||c.permalink,null===(a=m.STORE_PAGES.privacy)||void 0===a||a.permalink,null===(l=m.STORE_PAGES.privacy)||void 0===l||l.title,null===(s=m.STORE_PAGES.terms)||void 0===s||s.permalink,null===(i=m.STORE_PAGES.terms)||void 0===i||i.title,null===(u=m.STORE_PAGES.cart)||void 0===u||u.id,null===(p=m.STORE_PAGES.cart)||void 0===p?void 0:p.permalink),f=(null!==(d=m.STORE_PAGES.myaccount)&&void 0!==d&&d.permalink?m.STORE_PAGES.myaccount.permalink:(0,m.getSetting)("wpLoginUrl","/wp-login.php"),(0,m.getSetting)("localPickupEnabled",!1),(0,m.getSetting)("countries",{})),y=(0,m.getSetting)("countryData",{}),k=(Object.fromEntries(Object.keys(y).filter((e=>!0===y[e].allowBilling)).map((e=>[e,f[e]||""]))),Object.fromEntries(Object.keys(y).filter((e=>!0===y[e].allowBilling)).map((e=>[e,y[e].states||[]]))),Object.fromEntries(Object.keys(y).filter((e=>!0===y[e].allowShipping)).map((e=>[e,f[e]||""]))),Object.fromEntries(Object.keys(y).filter((e=>!0===y[e].allowShipping)).map((e=>[e,y[e].states||[]]))),Object.fromEntries(Object.keys(y).map((e=>[e,y[e].locale||[]]))))},9300:(e,t,r)=>{"use strict";r.d(t,{uq:()=>n}),window.wp.blocks;var o=r(7530);const n=()=>o.Lo>1},5271:(e,t,r)=>{"use strict";r.d(t,{Cm:()=>o.Cm,VF:()=>o.VF,fh:()=>o.fh,td:()=>o.td,uq:()=>n.uq,vr:()=>o.vr});var o=r(7530),n=r(9300)},4184:(e,t)=>{var r;!function(){"use strict";var o={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var c=typeof r;if("string"===c||"number"===c)e.push(r);else if(Array.isArray(r)){if(r.length){var a=n.apply(null,r);a&&e.push(a)}}else if("object"===c)if(r.toString===Object.prototype.toString)for(var l in r)o.call(r,l)&&r[l]&&e.push(l);else e.push(r.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},2991:e=>{"use strict";e.exports=function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){if(t.constructor!==r.constructor)return!1;var o,n,c;if(Array.isArray(t)){if((o=t.length)!=r.length)return!1;for(n=o;0!=n--;)if(!e(t[n],r[n]))return!1;return!0}if(t instanceof Map&&r instanceof Map){if(t.size!==r.size)return!1;for(n of t.entries())if(!r.has(n[0]))return!1;for(n of t.entries())if(!e(n[1],r.get(n[0])))return!1;return!0}if(t instanceof Set&&r instanceof Set){if(t.size!==r.size)return!1;for(n of t.entries())if(!r.has(n[0]))return!1;return!0}if(ArrayBuffer.isView(t)&&ArrayBuffer.isView(r)){if((o=t.length)!=r.length)return!1;for(n=o;0!=n--;)if(t[n]!==r[n])return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if((o=(c=Object.keys(t)).length)!==Object.keys(r).length)return!1;for(n=o;0!=n--;)if(!Object.prototype.hasOwnProperty.call(r,c[n]))return!1;for(n=o;0!=n--;){var a=c[n];if(!e(t[a],r[a]))return!1}return!0}return t!=t&&r!=r}},4578:()=>{},7036:()=>{},9991:()=>{},5945:()=>{},1553:()=>{},9196:e=>{"use strict";e.exports=window.React},2819:e=>{"use strict";e.exports=window.lodash},3554:e=>{"use strict";e.exports=window.wc.blocksCheckout},711:e=>{"use strict";e.exports=window.wc.blocksComponents},4293:e=>{"use strict";e.exports=window.wc.priceFormat},4801:e=>{"use strict";e.exports=window.wc.wcBlocksData},2864:e=>{"use strict";e.exports=window.wc.wcBlocksSharedContext},721:e=>{"use strict";e.exports=window.wc.wcBlocksSharedHocs},4617:e=>{"use strict";e.exports=window.wc.wcSettings},6989:e=>{"use strict";e.exports=window.wp.apiFetch},987:e=>{"use strict";e.exports=window.wp.autop},5609:e=>{"use strict";e.exports=window.wp.components},4333:e=>{"use strict";e.exports=window.wp.compose},9818:e=>{"use strict";e.exports=window.wp.data},7180:e=>{"use strict";e.exports=window.wp.deprecated},5904:e=>{"use strict";e.exports=window.wp.dom},9307:e=>{"use strict";e.exports=window.wp.element},2694:e=>{"use strict";e.exports=window.wp.hooks},2629:e=>{"use strict";e.exports=window.wp.htmlEntities},5736:e=>{"use strict";e.exports=window.wp.i18n},9127:e=>{"use strict";e.exports=window.wp.isShallowEqual},444:e=>{"use strict";e.exports=window.wp.primitives},2289:e=>{"use strict";e.exports=window.wp.styleEngine},6483:e=>{"use strict";e.exports=window.wp.url},2560:e=>{"use strict";e.exports=window.wp.warning},5266:e=>{"use strict";e.exports=window.wp.wordcount}},o={};function n(e){var t=o[e];if(void 0!==t)return t.exports;var c=o[e]={exports:{}};return r[e](c,c.exports,n),c.exports}n.m=r,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>(({118:"product-rating-stars",2918:"product-rating-counter",3037:"product-average-rating",3706:"product-image",5432:"product-sale-badge",5445:"product-stock-indicator",5579:"product-price",5800:"product-add-to-cart",6925:"product-title",7385:"product-rating",8185:"product-summary",8771:"product-button",9870:"product-sku"}[e]||e)+"-frontend.js?ver="+{118:"7261446eb990288ffefd",2918:"e5d45ae8eb49e5454c17",3037:"aab1b4959462f5045d13",3706:"1cf365bc1ab44c6552d3",4124:"7357676e8e1958698e67",5432:"6adb0dd5cdc7653cf74f",5445:"8002028a1297379d4595",5579:"ed464b8ebde371d49a25",5800:"45046e88f8c7dfcf8661",6925:"de635f265c9ded4c1bc8",7385:"2e86845144541fc221da",8185:"329bf778168b75c17b95",8280:"2bf9fcddb16d5c9be251",8771:"289de8e2ae0d5cf0d25a",9870:"9588044e24b3967874d1"}[e]),n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="webpackWcBlocksJsonp:",n.l=(r,o,c,a)=>{if(e[r])e[r].push(o);else{var l,s;if(void 0!==c)for(var i=document.getElementsByTagName("script"),u=0;u<i.length;u++){var p=i[u];if(p.getAttribute("src")==r||p.getAttribute("data-webpack")==t+c){l=p;break}}l||(s=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+c),l.src=r),e[r]=[o];var d=(t,o)=>{l.onerror=l.onload=null,clearTimeout(m);var n=e[r];if(delete e[r],l.parentNode&&l.parentNode.removeChild(l),n&&n.forEach((e=>e(o))),t)return t(o)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=d.bind(null,l.onerror),l.onload=d.bind(null,l.onload),s&&document.head.appendChild(l)}},n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e={86:0};n.f.j=(t,r)=>{var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var c=new Promise(((r,n)=>o=e[t]=[r,n]));r.push(o[2]=c);var a=n.p+n.u(t),l=new Error;n.l(a,(r=>{if(n.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var c=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+c+": "+a+")",l.name="ChunkLoadError",l.type=c,l.request=a,o[1](l)}}),"chunk-"+t,t)}};var t=(t,r)=>{var o,c,[a,l,s]=r,i=0;if(a.some((t=>0!==e[t]))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);s&&s(n)}for(t&&t(r);i<a.length;i++)c=a[i],n.o(e,c)&&e[c]&&e[c][0](),e[c]=0},r=self.webpackChunkwebpackWcBlocksJsonp=self.webpackChunkwebpackWcBlocksJsonp||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),(()=>{"use strict";var e=n(9196),t=n(9307);function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}var o=n(5736),c=n(5271);const a=({imageUrl:t=`${c.td}/block-error.svg`,header:r=(0,o.__)("Oops!","woo-gutenberg-products-block"),text:n=(0,o.__)("There was an error loading the content.","woo-gutenberg-products-block"),errorMessage:a,errorMessagePrefix:l=(0,o.__)("Error:","woo-gutenberg-products-block"),button:s,showErrorBlock:i=!0})=>i?(0,e.createElement)("div",{className:"wc-block-error wc-block-components-error"},t&&(0,e.createElement)("img",{className:"wc-block-error__image wc-block-components-error__image",src:t,alt:""}),(0,e.createElement)("div",{className:"wc-block-error__content wc-block-components-error__content"},r&&(0,e.createElement)("p",{className:"wc-block-error__header wc-block-components-error__header"},r),n&&(0,e.createElement)("p",{className:"wc-block-error__text wc-block-components-error__text"},n),a&&(0,e.createElement)("p",{className:"wc-block-error__message wc-block-components-error__message"},l?l+" ":"",a),s&&(0,e.createElement)("p",{className:"wc-block-error__button wc-block-components-error__button"},s))):null;n(4578);class l extends t.Component{constructor(...e){var t,o,n;super(...e),t=this,n={errorMessage:"",hasError:!1},(o=function(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var n=o.call(e,"string");if("object"!==r(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===r(t)?t:String(t)}(o="state"))in t?Object.defineProperty(t,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[o]=n}static getDerivedStateFromError(t){return void 0!==t.statusText&&void 0!==t.status?{errorMessage:(0,e.createElement)(e.Fragment,null,(0,e.createElement)("strong",null,t.status),": ",t.statusText),hasError:!0}:{errorMessage:t.message,hasError:!0}}render(){const{header:t,imageUrl:r,showErrorMessage:o=!0,showErrorBlock:n=!0,text:c,errorMessagePrefix:l,renderError:s,button:i}=this.props,{errorMessage:u,hasError:p}=this.state;return p?"function"==typeof s?s({errorMessage:u}):(0,e.createElement)(a,{showErrorBlock:n,errorMessage:o?u:null,header:t,imageUrl:r,text:c,errorMessagePrefix:l,button:i}):this.props.children}}const s=l,i=[".wp-block-woocommerce-cart"],u=({Block:r,containers:o,getProps:n=(()=>({})),getErrorBoundaryProps:c=(()=>({}))})=>{0!==o.length&&Array.prototype.forEach.call(o,((o,a)=>{const l=n(o,a),i=c(o,a),u={...o.dataset,...l.attributes||{}};(({Block:r,container:o,attributes:n={},props:c={},errorBoundaryProps:a={}})=>{(0,t.render)((0,e.createElement)(s,{...a},(0,e.createElement)(t.Suspense,{fallback:(0,e.createElement)("div",{className:"wc-block-placeholder"})},r&&(0,e.createElement)(r,{...c,attributes:n}))),o,(()=>{o.classList&&o.classList.remove("is-loading")}))})({Block:r,container:o,props:l,attributes:u,errorBoundaryProps:i})}))};var p=n(2991),d=n.n(p),m=n(4184),g=n.n(m),E=n(711);n(7036);const h=({currentPage:t,displayFirstAndLastPages:r=!0,displayNextAndPreviousArrows:n=!0,pagesToDisplay:c=3,onPageChange:a,totalPages:l})=>{let{minIndex:s,maxIndex:i}=((e,t,r)=>{if(r<=2)return{minIndex:null,maxIndex:null};const o=e-1,n=Math.max(Math.floor(t-o/2),2),c=Math.min(Math.ceil(t+(o-(t-n))),r-1);return{minIndex:Math.max(Math.floor(t-(o-(c-t))),2),maxIndex:c}})(c,t,l);const u=r&&Boolean(1!==s),p=r&&Boolean(i!==l),d=r&&Boolean(s&&s>3),m=r&&Boolean(i&&i<l-2);u&&3===s&&(s-=1),p&&i===l-2&&(i+=1);const h=[];if(s&&i)for(let e=s;e<=i;e++)h.push(e);return(0,e.createElement)("div",{className:"wc-block-pagination wc-block-components-pagination"},(0,e.createElement)(E.Label,{screenReaderLabel:(0,o.__)("Navigate to another page","woo-gutenberg-products-block")}),n&&(0,e.createElement)("button",{className:"wc-block-pagination-page wc-block-components-pagination__page wc-block-components-pagination-page--arrow",onClick:()=>a(t-1),title:(0,o.__)("Previous page","woo-gutenberg-products-block"),disabled:t<=1},(0,e.createElement)(E.Label,{label:"←",screenReaderLabel:(0,o.__)("Previous page","woo-gutenberg-products-block")})),u&&(0,e.createElement)("button",{className:g()("wc-block-pagination-page","wc-block-components-pagination__page",{"wc-block-pagination-page--active":1===t,"wc-block-components-pagination__page--active":1===t}),onClick:()=>a(1),disabled:1===t},(0,e.createElement)(E.Label,{label:"1",screenReaderLabel:(0,o.sprintf)(/* translators: %d is the page number (1, 2, 3...). */
(0,o.__)("Page %d","woo-gutenberg-products-block"),1)})),d&&(0,e.createElement)("span",{className:"wc-block-pagination-ellipsis wc-block-components-pagination__ellipsis","aria-hidden":"true"},(0,o.__)("…","woo-gutenberg-products-block")),h.map((r=>(0,e.createElement)("button",{key:r,className:g()("wc-block-pagination-page","wc-block-components-pagination__page",{"wc-block-pagination-page--active":t===r,"wc-block-components-pagination__page--active":t===r}),onClick:t===r?void 0:()=>a(r),disabled:t===r},(0,e.createElement)(E.Label,{label:r.toString(),screenReaderLabel:(0,o.sprintf)(/* translators: %d is the page number (1, 2, 3...). */
(0,o.__)("Page %d","woo-gutenberg-products-block"),r)})))),m&&(0,e.createElement)("span",{className:"wc-block-pagination-ellipsis wc-block-components-pagination__ellipsis","aria-hidden":"true"},(0,o.__)("…","woo-gutenberg-products-block")),p&&(0,e.createElement)("button",{className:g()("wc-block-pagination-page","wc-block-components-pagination__page",{"wc-block-pagination-page--active":t===l,"wc-block-components-pagination__page--active":t===l}),onClick:()=>a(l),disabled:t===l},(0,e.createElement)(E.Label,{label:l.toString(),screenReaderLabel:(0,o.sprintf)(/* translators: %d is the page number (1, 2, 3...). */
(0,o.__)("Page %d","woo-gutenberg-products-block"),l)})),n&&(0,e.createElement)("button",{className:"wc-block-pagination-page wc-block-components-pagination__page wc-block-components-pagination-page--arrow",onClick:()=>a(t+1),title:(0,o.__)("Next page","woo-gutenberg-products-block"),disabled:t>=l},(0,e.createElement)(E.Label,{label:"→",screenReaderLabel:(0,o.__)("Next page","woo-gutenberg-products-block")})))};function w(e,r){const o=(0,t.useRef)();return(0,t.useEffect)((()=>{o.current===e||r&&!r(e,o.current)||(o.current=e)}),[e,r]),o.current}var b=n(4801),f=n(9818),y=n(9127),k=n.n(y),x=n(9075);const _=(0,t.createContext)("page"),v=()=>(0,t.useContext)(_),S=(_.Provider,(e,r,o)=>{const n=v();o=o||n;const c=(0,f.useSelect)((t=>t(b.QUERY_STATE_STORE_KEY).getValueForQueryKey(o,e,r)),[o,e]),{setQueryValue:a}=(0,f.useDispatch)(b.QUERY_STATE_STORE_KEY);return[c,(0,t.useCallback)((t=>{a(o,e,t)}),[o,e,a])]}),C=e=>{const r={namespace:"/wc/store/v1",resourceName:"products"},{results:o,isLoading:n}=(e=>{const{namespace:r,resourceName:o,resourceValues:n=[],query:c={},shouldSelect:a=!0}=e;if(!r||!o)throw new Error("The options object must have valid values for the namespace and the resource properties.");const l=(0,t.useRef)({results:[],isLoading:!0}),s=(0,x.s)(c),i=(0,x.s)(n),u=(()=>{const[,e]=(0,t.useState)();return(0,t.useCallback)((t=>{e((()=>{throw t}))}),[])})(),p=(0,f.useSelect)((e=>{if(!a)return null;const t=e(b.COLLECTIONS_STORE_KEY),n=[r,o,s,i],c=t.getCollectionError(...n);if(c){if(!(c instanceof Error))throw new Error("TypeError: `error` object is not an instance of Error constructor");u(c)}return{results:t.getCollection(...n),isLoading:!t.hasFinishedResolution("getCollection",n)}}),[r,o,i,s,a]);return null!==p&&(l.current=p),l.current})({...r,query:e}),{value:c}=((e,t)=>{const{namespace:r,resourceName:o,resourceValues:n=[],query:c={}}=t;if(!r||!o)throw new Error("The options object must have valid values for the namespace and the resource name properties.");const a=(0,x.s)(c),l=(0,x.s)(n),{value:s,isLoading:i=!0}=(0,f.useSelect)((t=>{const n=t(b.COLLECTIONS_STORE_KEY),c=[e,r,o,a,l];return{value:n.getCollectionHeader(...c),isLoading:n.hasFinishedResolution("getCollectionHeader",c)}}),[e,r,o,l,a]);return{value:s,isLoading:i}})("x-wp-total",{...r,query:e});return{products:o,totalProducts:parseInt(c,10),productsLoading:n}};var P=n(5918);n(1553);const N=e=>{if(!e)return;const t=e.getBoundingClientRect().bottom;t>=0&&t<=window.innerHeight||e.scrollIntoView()};var B=n(2864);const O=window.wp.a11y;var T=n(1984),A=n(444);const R=(0,t.createElement)(A.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},(0,t.createElement)(A.Path,{d:"M10 2c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8zm1.13 9.38l.35-6.46H8.52l.35 6.46h2.26zm-.09 3.36c.24-.23.37-.55.37-.96 0-.42-.12-.74-.36-.97s-.59-.35-1.06-.35-.82.12-1.07.35-.37.55-.37.97c0 .41.13.73.38.96.26.23.61.34 1.06.34s.8-.11 1.05-.34z"})),L=()=>{const{parentClassName:t}=(0,B.useInnerBlockLayoutContext)();return(0,e.createElement)("div",{className:`${t}__no-products`},(0,e.createElement)(T.Z,{className:`${t}__no-products-image`,icon:R,size:100}),(0,e.createElement)("strong",{className:`${t}__no-products-title`},(0,o.__)("No products","woo-gutenberg-products-block")),(0,e.createElement)("p",{className:`${t}__no-products-description`},(0,o.__)("There are currently no products available to display.","woo-gutenberg-products-block")))},j=(0,t.createElement)(A.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(A.Path,{d:"M13.5 6C10.5 6 8 8.5 8 11.5c0 1.1.3 2.1.9 3l-3.4 3 1 1.1 3.4-2.9c1 .9 2.2 1.4 3.6 1.4 3 0 5.5-2.5 5.5-5.5C19 8.5 16.5 6 13.5 6zm0 9.5c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"})),M=({resetCallback:t=(()=>{})})=>{const{parentClassName:r}=(0,B.useInnerBlockLayoutContext)();return(0,e.createElement)("div",{className:`${r}__no-products`},(0,e.createElement)(T.Z,{className:`${r}__no-products-image`,icon:j,size:100}),(0,e.createElement)("strong",{className:`${r}__no-products-title`},(0,o.__)("No products found","woo-gutenberg-products-block")),(0,e.createElement)("p",{className:`${r}__no-products-description`},(0,o.__)("We were unable to find any results based on your search.","woo-gutenberg-products-block")),(0,e.createElement)("button",{onClick:t},(0,o.__)("Reset Search","woo-gutenberg-products-block")))};n(9991);const z=({onChange:t,value:r})=>(0,e.createElement)(E.SortSelect,{className:"wc-block-product-sort-select wc-block-components-product-sort-select",onChange:t,options:[{key:"menu_order",label:(0,o.__)("Default sorting","woo-gutenberg-products-block")},{key:"popularity",label:(0,o.__)("Popularity","woo-gutenberg-products-block")},{key:"rating",label:(0,o.__)("Average rating","woo-gutenberg-products-block")},{key:"date",label:(0,o.__)("Latest","woo-gutenberg-products-block")},{key:"price",label:(0,o.__)("Price: low to high","woo-gutenberg-products-block")},{key:"price-desc",label:(0,o.__)("Price: high to low","woo-gutenberg-products-block")}],screenReaderLabel:(0,o.__)("Order products by","woo-gutenberg-products-block"),value:r});var F=n(4333);const V=window.wc.wcBlocksRegistry;n.p=c.VF,(0,V.registerBlockComponent)({blockName:"woocommerce/product-price",component:(0,t.lazy)((()=>n.e(5579).then(n.bind(n,6669))))}),(0,V.registerBlockComponent)({blockName:"woocommerce/product-image",component:(0,t.lazy)((()=>n.e(3706).then(n.bind(n,4304))))}),(0,V.registerBlockComponent)({blockName:"woocommerce/product-title",component:(0,t.lazy)((()=>n.e(6925).then(n.bind(n,3719))))}),(0,V.registerBlockComponent)({blockName:"woocommerce/product-rating",component:(0,t.lazy)((()=>n.e(7385).then(n.bind(n,1382))))}),(0,V.registerBlockComponent)({blockName:"woocommerce/product-rating-stars",component:(0,t.lazy)((()=>n.e(118).then(n.bind(n,89))))}),(0,V.registerBlockComponent)({blockName:"woocommerce/product-rating-counter",component:(0,t.lazy)((()=>n.e(2918).then(n.bind(n,5042))))}),(0,V.registerBlockComponent)({blockName:"woocommerce/product-average-rating",component:(0,t.lazy)((()=>n.e(3037).then(n.bind(n,2043))))}),(0,V.registerBlockComponent)({blockName:"woocommerce/product-button",component:(0,t.lazy)((()=>n.e(8771).then(n.bind(n,8462))))}),(0,V.registerBlockComponent)({blockName:"woocommerce/product-summary",component:(0,t.lazy)((()=>n.e(8185).then(n.bind(n,8281))))}),(0,V.registerBlockComponent)({blockName:"woocommerce/product-sale-badge",component:(0,t.lazy)((()=>n.e(5432).then(n.bind(n,4498))))}),(0,V.registerBlockComponent)({blockName:"woocommerce/product-sku",component:(0,t.lazy)((()=>n.e(9870).then(n.bind(n,8130))))}),(0,V.registerBlockComponent)({blockName:"woocommerce/product-stock-indicator",component:(0,t.lazy)((()=>n.e(5445).then(n.bind(n,789))))}),(0,V.registerBlockComponent)({blockName:"woocommerce/product-add-to-cart",component:(0,t.lazy)((()=>Promise.all([n.e(4124),n.e(8280),n.e(5800)]).then(n.bind(n,2624))))});const I=(r,o,n,c)=>{if(!n)return;const a=(e=>(0,V.getRegisteredBlockComponents)(e))(r);return n.map((([n,l={}],s)=>{let i=[];l.children&&l.children.length>0&&(i=I(r,o,l.children,c));const u=a[n];if(!u)return null;const p=o.id||0,d=["layout",n,s,c,p];return(0,e.createElement)(t.Suspense,{key:d.join("_"),fallback:(0,e.createElement)("div",{className:"wc-block-placeholder"})},(0,e.createElement)(u,{...l,children:i,product:o}))}))},$=(0,F.withInstanceId)((({product:t={},attributes:r,instanceId:o})=>{const{layoutConfig:n}=r,{parentClassName:c,parentName:a}=(0,B.useInnerBlockLayoutContext)(),l=0===Object.keys(t).length,s=g()(`${c}__product`,"wc-block-layout",{"is-loading":l});return(0,e.createElement)("li",{className:s,"aria-hidden":l},I(a,t,n,o))}));n(5945);const Q=e=>{switch(e){case"menu_order":case"popularity":case"rating":case"price":return{orderby:e,order:"asc"};case"price-desc":return{orderby:"price",order:"desc"};case"date":return{orderby:"date",order:"desc"}}},G=({totalQuery:e,totalProducts:t},{totalQuery:r}={})=>!d()(e,r)&&Number.isFinite(t),q=(D=({attributes:r,currentPage:n,onPageChange:c,onSortChange:a,sortValue:l,scrollToTop:s})=>{const[i,u]=S("attributes",[]),[p,m]=S("stock_status",[]),[E,y]=S("rating",[]),[_,N]=S("min_price"),[T,A]=S("max_price"),[R]=((e,r)=>{const o=v();r=r||o;const[n,c]=(e=>{const r=v();e=e||r;const o=(0,f.useSelect)((t=>t(b.QUERY_STATE_STORE_KEY).getValueForQueryContext(e,void 0)),[e]),{setValueForQueryContext:n}=(0,f.useDispatch)(b.QUERY_STATE_STORE_KEY);return[o,(0,t.useCallback)((t=>{n(e,t)}),[e,n])]})(r),a=(0,x.s)(n),l=(0,x.s)(e),s=w(l),i=(0,t.useRef)(!1);return(0,t.useEffect)((()=>{k()(s,l)||(c(Object.assign({},a,l)),i.current=!0)}),[a,l,s,c]),i.current?[n,c]:[e,c]})((({sortValue:e,currentPage:t,attributes:r})=>{const{columns:o,rows:n}=r;return{...Q(e),catalog_visibility:"catalog",per_page:o*n,page:t}})({attributes:r,sortValue:l,currentPage:n})),{products:j,totalProducts:F,productsLoading:V}=C(R),{parentClassName:I,parentName:q}=(0,B.useInnerBlockLayoutContext)(),U=(e=>{const{order:t,orderby:r,page:o,per_page:n,...c}=e;return c||{}})(R),{dispatchStoreEvent:Y}=(0,P.n)(),D=w({totalQuery:U,totalProducts:F},G);(0,t.useEffect)((()=>{Y("product-list-render",{products:j,listName:q})}),[j,q,Y]),(0,t.useEffect)((()=>{d()(U,null==D?void 0:D.totalQuery)||(c(1),null!=D&&D.totalQuery&&(e=>{Number.isFinite(e)&&(0===e?(0,O.speak)((0,o.__)("No products found","woo-gutenberg-products-block")):(0,O.speak)((0,o.sprintf)(/* translators: %s is an integer higher than 0 (1, 2, 3...) */
(0,o._n)("%d product found","%d products found",e,"woo-gutenberg-products-block"),e)))})(F))}),[null==D?void 0:D.totalQuery,F,c,U]);const{contentVisibility:K}=r,H=r.columns*r.rows,J=!Number.isFinite(F)&&Number.isFinite(null==D?void 0:D.totalProducts)&&d()(U,null==D?void 0:D.totalQuery)?Math.ceil(((null==D?void 0:D.totalProducts)||0)/H):Math.ceil(F/H),W=j.length?j:Array.from({length:H}),Z=0!==j.length||V,X=i.length>0||p.length>0||E.length>0||Number.isFinite(_)||Number.isFinite(T);return(0,e.createElement)("div",{className:(()=>{const{columns:e,rows:t,alignButtons:o,align:n}=r,c=void 0!==n?"align"+n:"";return g()(I,c,"has-"+e+"-columns",{"has-multiple-rows":t>1,"has-aligned-buttons":o})})()},(null==K?void 0:K.orderBy)&&Z&&(0,e.createElement)(z,{onChange:a,value:l}),!Z&&X&&(0,e.createElement)(M,{resetCallback:()=>{u([]),m([]),y([]),N(null),A(null)}}),!Z&&!X&&(0,e.createElement)(L,null),Z&&(0,e.createElement)("ul",{className:g()(`${I}__products`,{"is-loading-products":V})},W.map(((t={},o)=>(0,e.createElement)($,{key:t.id||o,attributes:r,product:t})))),J>1&&(0,e.createElement)(h,{currentPage:n,onPageChange:e=>{s({focusableSelector:"a, button"}),c(e)},totalPages:J}))},r=>{const o=(0,t.useRef)(null);return(0,e.createElement)(e.Fragment,null,(0,e.createElement)("div",{className:"with-scroll-to-top__scroll-point",ref:o,"aria-hidden":!0}),(0,e.createElement)(D,{...r,scrollToTop:e=>{null!==o.current&&((e,t)=>{const{focusableSelector:r}=t||{};window&&Number.isFinite(window.innerHeight)&&(r?((e,t)=>{var r;const o=(null===(r=e.parentElement)||void 0===r?void 0:r.querySelectorAll(t))||[];if(o.length){const e=o[0];N(e),null==e||e.focus()}else N(e)})(e,r):N(e))})(o.current,e)}}))}),U=({attributes:r})=>{const[o,n]=(0,t.useState)(1),[c,a]=(0,t.useState)(r.orderby);return(0,t.useEffect)((()=>{a(r.orderby)}),[r.orderby]),(0,e.createElement)(q,{attributes:r,currentPage:o,onPageChange:e=>{n(e)},onSortChange:e=>{var t;const r=null==e||null===(t=e.target)||void 0===t?void 0:t.value;a(r),n(1)},sortValue:c})},Y=(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 230 250",style:{width:"100%"}},(0,e.createElement)("title",null,"Grid Block Preview"),(0,e.createElement)("rect",{width:"65.374",height:"65.374",x:".162",y:".779",fill:"#E1E3E6",rx:"3"}),(0,e.createElement)("rect",{width:"47.266",height:"5.148",x:"9.216",y:"76.153",fill:"#E1E3E6",rx:"2.574"}),(0,e.createElement)("rect",{width:"62.8",height:"15",x:"1.565",y:"101.448",fill:"#E1E3E6",rx:"5"}),(0,e.createElement)("rect",{width:"65.374",height:"65.374",x:".162",y:"136.277",fill:"#E1E3E6",rx:"3"}),(0,e.createElement)("rect",{width:"47.266",height:"5.148",x:"9.216",y:"211.651",fill:"#E1E3E6",rx:"2.574"}),(0,e.createElement)("rect",{width:"62.8",height:"15",x:"1.565",y:"236.946",fill:"#E1E3E6",rx:"5"}),(0,e.createElement)("rect",{width:"65.374",height:"65.374",x:"82.478",y:".779",fill:"#E1E3E6",rx:"3"}),(0,e.createElement)("rect",{width:"47.266",height:"5.148",x:"91.532",y:"76.153",fill:"#E1E3E6",rx:"2.574"}),(0,e.createElement)("rect",{width:"62.8",height:"15",x:"83.882",y:"101.448",fill:"#E1E3E6",rx:"5"}),(0,e.createElement)("rect",{width:"65.374",height:"65.374",x:"82.478",y:"136.277",fill:"#E1E3E6",rx:"3"}),(0,e.createElement)("rect",{width:"47.266",height:"5.148",x:"91.532",y:"211.651",fill:"#E1E3E6",rx:"2.574"}),(0,e.createElement)("rect",{width:"62.8",height:"15",x:"83.882",y:"236.946",fill:"#E1E3E6",rx:"5"}),(0,e.createElement)("rect",{width:"65.374",height:"65.374",x:"164.788",y:".779",fill:"#E1E3E6",rx:"3"}),(0,e.createElement)("rect",{width:"47.266",height:"5.148",x:"173.843",y:"76.153",fill:"#E1E3E6",rx:"2.574"}),(0,e.createElement)("rect",{width:"62.8",height:"15",x:"166.192",y:"101.448",fill:"#E1E3E6",rx:"5"}),(0,e.createElement)("rect",{width:"65.374",height:"65.374",x:"164.788",y:"136.277",fill:"#E1E3E6",rx:"3"}),(0,e.createElement)("rect",{width:"47.266",height:"5.148",x:"173.843",y:"211.651",fill:"#E1E3E6",rx:"2.574"}),(0,e.createElement)("rect",{width:"62.8",height:"15",x:"166.192",y:"236.946",fill:"#E1E3E6",rx:"5"}),(0,e.createElement)("rect",{width:"6.177",height:"6.177",x:"13.283",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,e.createElement)("rect",{width:"6.177",height:"6.177",x:"21.498",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,e.createElement)("rect",{width:"6.177",height:"6.177",x:"29.713",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,e.createElement)("rect",{width:"6.177",height:"6.177",x:"37.927",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,e.createElement)("rect",{width:"6.177",height:"6.177",x:"46.238",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,e.createElement)("rect",{width:"6.177",height:"6.177",x:"95.599",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,e.createElement)("rect",{width:"6.177",height:"6.177",x:"103.814",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,e.createElement)("rect",{width:"6.177",height:"6.177",x:"112.029",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,e.createElement)("rect",{width:"6.177",height:"6.177",x:"120.243",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,e.createElement)("rect",{width:"6.177",height:"6.177",x:"128.554",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,e.createElement)("rect",{width:"6.177",height:"6.177",x:"177.909",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,e.createElement)("rect",{width:"6.177",height:"6.177",x:"186.124",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,e.createElement)("rect",{width:"6.177",height:"6.177",x:"194.339",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,e.createElement)("rect",{width:"6.177",height:"6.177",x:"202.553",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,e.createElement)("rect",{width:"6.177",height:"6.177",x:"210.864",y:"86.301",fill:"#E1E3E6",rx:"3"}),(0,e.createElement)("rect",{width:"6.177",height:"6.177",x:"13.283",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,e.createElement)("rect",{width:"6.177",height:"6.177",x:"21.498",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,e.createElement)("rect",{width:"6.177",height:"6.177",x:"29.713",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,e.createElement)("rect",{width:"6.177",height:"6.177",x:"37.927",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,e.createElement)("rect",{width:"6.177",height:"6.177",x:"46.238",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,e.createElement)("rect",{width:"6.177",height:"6.177",x:"95.599",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,e.createElement)("rect",{width:"6.177",height:"6.177",x:"103.814",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,e.createElement)("rect",{width:"6.177",height:"6.177",x:"112.029",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,e.createElement)("rect",{width:"6.177",height:"6.177",x:"120.243",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,e.createElement)("rect",{width:"6.177",height:"6.177",x:"128.554",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,e.createElement)("rect",{width:"6.177",height:"6.177",x:"177.909",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,e.createElement)("rect",{width:"6.177",height:"6.177",x:"186.124",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,e.createElement)("rect",{width:"6.177",height:"6.177",x:"194.339",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,e.createElement)("rect",{width:"6.177",height:"6.177",x:"202.553",y:"221.798",fill:"#E1E3E6",rx:"3"}),(0,e.createElement)("rect",{width:"6.177",height:"6.177",x:"210.864",y:"221.798",fill:"#E1E3E6",rx:"3"}));var D,K=n(3554);class H extends t.Component{render(){const{attributes:t,urlParameterSuffix:r}=this.props;return t.isPreview?Y:(0,e.createElement)(B.InnerBlockLayoutContextProvider,{parentName:"woocommerce/all-products",parentClassName:"wc-block-grid"},(0,e.createElement)(K.StoreNoticesContainer,{context:"wc/all-products"}),(0,e.createElement)(U,{attributes:t,urlParameterSuffix:r}))}}const J=H;(e=>{const t=document.body.querySelectorAll(i.join(",")),{Block:r,getProps:o,getErrorBoundaryProps:n,selector:c}=e;(({Block:e,getProps:t,getErrorBoundaryProps:r,selector:o,wrappers:n})=>{const c=document.body.querySelectorAll(o);n&&n.length>0&&Array.prototype.filter.call(c,(e=>!((e,t)=>Array.prototype.some.call(t,(t=>t.contains(e)&&!t.isSameNode(e))))(e,n))),u({Block:e,containers:c,getProps:t,getErrorBoundaryProps:r})})({Block:r,getProps:o,getErrorBoundaryProps:n,selector:c,wrappers:t}),Array.prototype.forEach.call(t,(t=>{t.addEventListener("wc-blocks_render_blocks_frontend",(()=>{(({Block:e,getProps:t,getErrorBoundaryProps:r,selector:o,wrapper:n})=>{const c=n.querySelectorAll(o);u({Block:e,containers:c,getProps:t,getErrorBoundaryProps:r})})({...e,wrapper:t})}))}))})({selector:".wp-block-woocommerce-all-products",Block:t=>(0,e.createElement)(J,{...t}),getProps:e=>({attributes:JSON.parse(e.dataset.attributes)})})})()})();