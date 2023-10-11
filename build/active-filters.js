(()=>{var e,t={9126:(e,t,r)=>{"use strict";r.r(t);var l=r(9307);const n=window.wp.blocks;var a=r(444);const o=(0,l.createElement)(a.SVG,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24"},(0,l.createElement)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,l.createElement)("path",{d:"M17 6H7c-3.31 0-6 2.69-6 6s2.69 6 6 6h10c3.31 0 6-2.69 6-6s-2.69-6-6-6zm0 10H7c-2.21 0-4-1.79-4-4s1.79-4 4-4h10c2.21 0 4 1.79 4 4s-1.79 4-4 4zm0-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}));var s=r(1984),c=r(4184),i=r.n(c);const u=window.wp.blockEditor;var p=r(5736),m=r(4333);r(7118);const d=(0,m.withInstanceId)((({className:e,headingLevel:t,onChange:r,heading:n,instanceId:a})=>{const o=`h${t}`;return(0,l.createElement)(o,{className:e},(0,l.createElement)("label",{className:"screen-reader-text",htmlFor:`block-title-${a}`},(0,p.__)("Block title","woo-gutenberg-products-block")),(0,l.createElement)(u.PlainText,{id:`block-title-${a}`,className:"wc-block-editor-components-title",value:n,onChange:r,style:{backgroundColor:"transparent"}}))})),b=window.wp.components,g=window.wc.wcBlocksData,y=window.wp.data;var f=r(9127),w=r.n(f);const _=(0,l.createContext)("page"),h=(_.Provider,(e,t,r)=>{const n=(0,l.useContext)(_);r=r||n;const a=(0,y.useSelect)((l=>l(g.QUERY_STATE_STORE_KEY).getValueForQueryKey(r,e,t)),[r,e]),{setQueryValue:o}=(0,y.useDispatch)(g.QUERY_STATE_STORE_KEY);return[a,(0,l.useCallback)((t=>{o(r,e,t)}),[r,e,o])]}),k=window.wc.wcSettings,v=({label:e,screenReaderLabel:t,wrapperElement:r,wrapperProps:n={}})=>{let a;const o=null!=e,s=null!=t;return!o&&s?(a=r||"span",n={...n,className:i()(n.className,"screen-reader-text")},(0,l.createElement)(a,{...n},t)):(a=r||l.Fragment,o&&s&&e!==t?(0,l.createElement)(a,{...n},(0,l.createElement)("span",{"aria-hidden":"true"},e),(0,l.createElement)("span",{className:"screen-reader-text"},t)):(0,l.createElement)(a,{...n},e))},E=e=>"boolean"==typeof e,S=e=>!(e=>null===e)(e)&&e instanceof Object&&e.constructor===Object;function N(e,t){return S(e)&&t in e}const C=e=>N(e,"count")&&N(e,"description")&&N(e,"id")&&N(e,"name")&&N(e,"parent")&&N(e,"slug")&&"number"==typeof e.count&&"string"==typeof e.description&&"number"==typeof e.id&&"string"==typeof e.name&&"number"==typeof e.parent&&"string"==typeof e.slug,x=e=>N(e,"attribute")&&N(e,"operator")&&N(e,"slug")&&"string"==typeof e.attribute&&"string"==typeof e.operator&&Array.isArray(e.slug)&&e.slug.every((e=>"string"==typeof e)),O=e=>Array.isArray(e)&&e.every(x),A=window.wp.url,L=(0,k.getSettingWithCoercion)("isRenderingPhpTemplate",!1,E);function j(e){L?((e=e.replace(/(?:query-(?:\d+-)?page=(\d+))|(?:page\/(\d+))/g,"")).endsWith("?")&&(e=e.slice(0,-1)),window.location.href=e):window.history.replaceState({},"",e)}r(7732);const T=({children:e})=>(0,l.createElement)("div",{className:"wc-block-filter-title-placeholder"},e);r(4624);const R=(0,k.getSetting)("attributes",[]).reduce(((e,t)=>{const r=(l=t)&&l.attribute_name?{id:parseInt(l.attribute_id,10),name:l.attribute_name,taxonomy:"pa_"+l.attribute_name,label:l.attribute_label}:null;var l;return r&&r.id&&e.push(r),e}),[]),B=window.wc.priceFormat;r(6232);const F=({text:e,screenReaderText:t="",element:r="li",className:n="",radius:a="small",children:o=null,...s})=>{const c=r,u=i()(n,"wc-block-components-chip","wc-block-components-chip--radius-"+a),p=Boolean(t&&t!==e);return(0,l.createElement)(c,{className:u,...s},(0,l.createElement)("span",{"aria-hidden":p,className:"wc-block-components-chip__text"},e),p&&(0,l.createElement)("span",{className:"screen-reader-text"},t),o)};var P=r(7231);const Q=({ariaLabel:e="",className:t="",disabled:r=!1,onRemove:n=(()=>{}),removeOnAnyClick:a=!1,text:o,screenReaderText:c="",...u})=>{const m=a?"span":"button";if(!e){const t=c&&"string"==typeof c?c:o;e="string"!=typeof t?/* translators: Remove chip. */
(0,p.__)("Remove","woo-gutenberg-products-block"):(0,p.sprintf)(/* translators: %s text of the chip to remove. */
(0,p.__)('Remove "%s"',"woo-gutenberg-products-block"),t)}const d={"aria-label":e,disabled:r,onClick:n,onKeyDown:e=>{"Backspace"!==e.key&&"Delete"!==e.key||n()}},b=a?d:{},g=a?{"aria-hidden":!0}:d;return(0,l.createElement)(F,{...u,...b,className:i()(t,"is-removable"),element:a?"button":u.element,screenReaderText:c,text:o},(0,l.createElement)(m,{className:"wc-block-components-chip__remove",...g},(0,l.createElement)(s.Z,{className:"wc-block-components-chip__remove-icon",icon:P.Z,size:16})))},$=(e,t)=>Number.isFinite(e)&&Number.isFinite(t)?(0,p.sprintf)(/* translators: %1$s min price, %2$s max price */
(0,p.__)("Between %1$s and %2$s","woo-gutenberg-products-block"),(0,B.formatPrice)(e),(0,B.formatPrice)(t)):Number.isFinite(e)?(0,p.sprintf)(/* translators: %s min price */
(0,p.__)("From %s","woo-gutenberg-products-block"),(0,B.formatPrice)(e)):(0,p.sprintf)(/* translators: %s max price */
(0,p.__)("Up to %s","woo-gutenberg-products-block"),(0,B.formatPrice)(t)),D=({type:e,name:t,prefix:r="",removeCallback:n=(()=>null),showLabel:a=!0,displayStyle:o})=>{const c=r?(0,l.createElement)(l.Fragment,null,r," ",t):t,i=(0,p.sprintf)(/* translators: %s attribute value used in the filter. For example: yellow, green, small, large. */
(0,p.__)("Remove %s filter","woo-gutenberg-products-block"),t);return(0,l.createElement)("li",{className:"wc-block-active-filters__list-item",key:e+":"+t},a&&(0,l.createElement)("span",{className:"wc-block-active-filters__list-item-type"},e+": "),"chips"===o?(0,l.createElement)(Q,{element:"span",text:c,onRemove:n,radius:"large",ariaLabel:i}):(0,l.createElement)("span",{className:"wc-block-active-filters__list-item-name"},(0,l.createElement)("button",{className:"wc-block-active-filters__list-item-remove",onClick:n},(0,l.createElement)(s.Z,{className:"wc-block-components-chip__remove-icon",icon:P.Z,size:16}),(0,l.createElement)(v,{screenReaderLabel:i})),c))},M=(...e)=>{if(!window)return;const t=window.location.href,r=(0,A.getQueryArgs)(t),l=(0,A.removeQueryArgs)(t,...Object.keys(r));e.forEach((e=>{if("string"==typeof e)return delete r[e];if("object"==typeof e){const t=Object.keys(e)[0],l=r[t].toString().split(",");r[t]=l.filter((r=>r!==e[t])).join(",")}}));const n=Object.fromEntries(Object.entries(r).filter((([,e])=>e)));j((0,A.addQueryArgs)(l,n))},W=["min_price","max_price","rating_filter","filter_","query_type_"],I=e=>{let t=!1;for(let r=0;W.length>r;r++){const l=W[r];if(l===e.substring(0,l.length)){t=!0;break}}return t};function z(e){const t=(0,l.useRef)(e);return w()(e,t.current)||(t.current=e),t.current}const V=window.wp.htmlEntities;var Y=r(172);const q=({attributeObject:e,slugs:t=[],operator:r="in",displayStyle:n,isLoadingCallback:a})=>{const{results:o,isLoading:s}=(e=>{const{namespace:t,resourceName:r,resourceValues:n=[],query:a={},shouldSelect:o=!0}=e;if(!t||!r)throw new Error("The options object must have valid values for the namespace and the resource properties.");const s=(0,l.useRef)({results:[],isLoading:!0}),c=z(a),i=z(n),u=(()=>{const[,e]=(0,l.useState)();return(0,l.useCallback)((t=>{e((()=>{throw t}))}),[])})(),p=(0,y.useSelect)((e=>{if(!o)return null;const l=e(g.COLLECTIONS_STORE_KEY),n=[t,r,c,i],a=l.getCollectionError(...n);if(a){if(!(a instanceof Error))throw new Error("TypeError: `error` object is not an instance of Error constructor");u(a)}return{results:l.getCollection(...n),isLoading:!l.hasFinishedResolution("getCollection",n)}}),[t,r,i,c,o]);return null!==p&&(s.current=p),s.current})({namespace:"/wc/store/v1",resourceName:"products/attributes/terms",resourceValues:[e.id]}),[c,i]=h("attributes",[]);if((0,l.useEffect)((()=>{a(s)}),[s,a]),!(Array.isArray(o)&&(u=o,Array.isArray(u)&&u.every(C))&&O(c)))return null;var u;const m=e.label,d=(0,k.getSettingWithCoercion)("isRenderingPhpTemplate",!1,E);return(0,l.createElement)("li",null,(0,l.createElement)("span",{className:"wc-block-active-filters__list-item-type"},m,":"),(0,l.createElement)("ul",null,t.map(((t,a)=>{const u=o.find((e=>e.slug===t));if(!u)return null;let b="";return a>0&&"and"===r&&(b=(0,l.createElement)("span",{className:"wc-block-active-filters__list-item-operator"},(0,p.__)("All","woo-gutenberg-products-block"))),D({type:m,name:(0,V.decodeEntities)(u.name||t),prefix:b,isLoading:s,removeCallback:()=>{const r=c.find((({attribute:t})=>t===`pa_${e.name}`));1===(null==r?void 0:r.slug.length)?M(`query_type_${e.name}`,`filter_${e.name}`):M({[`filter_${e.name}`]:t}),d||((e=[],t,r,l="")=>{const n=e.filter((e=>e.attribute===r.taxonomy)),a=n.length?n[0]:null;if(!(a&&a.slug&&Array.isArray(a.slug)&&a.slug.includes(l)))return;const o=a.slug.filter((e=>e!==l)),s=e.filter((e=>e.attribute!==r.taxonomy));o.length>0&&(a.slug=o.sort(),s.push(a)),t((0,Y.DY)(s).asc("attribute"))})(c,i,e,t)},showLabel:!1,displayStyle:n})}))))},G=({displayStyle:e,isLoading:t})=>t?(0,l.createElement)(l.Fragment,null,[...Array("list"===e?2:3)].map(((t,r)=>(0,l.createElement)("li",{className:"list"===e?"show-loading-state-list":"show-loading-state-chips",key:r},(0,l.createElement)("span",{className:"show-loading-state__inner"}))))):null,K=(0,l.createContext)({}),U=({attributes:e,isEditor:t=!1})=>{const r=(()=>{const{wrapper:e}=(0,l.useContext)(K);return t=>{e&&e.current&&(e.current.hidden=!t)}})(),n=function(){const e=(0,l.useRef)(!1);return(0,l.useEffect)((()=>(e.current=!0,()=>{e.current=!1})),[]),(0,l.useCallback)((()=>e.current),[])}()(),a=(0,k.getSettingWithCoercion)("isRenderingPhpTemplate",!1,E),[o,s]=(0,l.useState)(!0),c=(()=>{if(!window)return!1;const e=window.location.href,t=(0,A.getQueryArgs)(e),r=Object.keys(t);let l=!1;for(let e=0;r.length>e;e++){const t=r[e];if(I(t)){l=!0;break}}return l})()&&!t&&o,[u,m]=h("attributes",[]),[d,b]=h("stock_status",[]),[g,y]=h("min_price"),[f,w]=h("max_price"),[_,N]=h("rating"),C=(0,k.getSetting)("stockStatusOptions",[]),x=(0,k.getSetting)("attributes",[]),L=(0,l.useMemo)((()=>{if(c||0===d.length||(t=d,!Array.isArray(t)||!t.every((e=>["instock","outofstock","onbackorder"].includes(e))))||!(e=>S(e)&&Object.keys(e).every((e=>["instock","outofstock","onbackorder"].includes(e))))(C))return null;var t;const r=(0,p.__)("Stock Status","woo-gutenberg-products-block");return(0,l.createElement)("li",null,(0,l.createElement)("span",{className:"wc-block-active-filters__list-item-type"},r,":"),(0,l.createElement)("ul",null,d.map((t=>D({type:r,name:C[t],removeCallback:()=>{if(M({filter_stock_status:t}),!a){const e=d.filter((e=>e!==t));b(e)}},showLabel:!1,displayStyle:e.displayStyle})))))}),[c,C,d,b,e.displayStyle,a]),B=(0,l.useMemo)((()=>c||!Number.isFinite(g)&&!Number.isFinite(f)?null:D({type:(0,p.__)("Price","woo-gutenberg-products-block"),name:$(g,f),removeCallback:()=>{M("max_price","min_price"),a||(y(void 0),w(void 0))},displayStyle:e.displayStyle})),[c,g,f,e.displayStyle,y,w,a]),F=(0,l.useMemo)((()=>!O(u)&&n||!u.length&&!(e=>{if(!window)return!1;const t=e.map((e=>`filter_${e.attribute_name}`)),r=window.location.href,l=(0,A.getQueryArgs)(r),n=Object.keys(l);let a=!1;for(let e=0;n.length>e;e++){const r=n[e];if(t.includes(r)){a=!0;break}}return a})(x)?(o&&s(!1),null):u.map((t=>{const r=(e=>{if(e)return R.find((t=>t.taxonomy===e))})(t.attribute);return r?(0,l.createElement)(q,{attributeObject:r,displayStyle:e.displayStyle,slugs:t.slug,key:t.attribute,operator:t.operator,isLoadingCallback:s}):(o&&s(!1),null)}))),[u,n,x,o,e.displayStyle]);(0,l.useEffect)((()=>{var e;if(!a)return;if(_.length&&_.length>0)return;const t=null===("rating_filter",e=window?(0,A.getQueryArg)(window.location.href,"rating_filter"):null)||void 0===e?void 0:e.toString();t&&N(t.split(","))}),[a,_,N]);const P=(0,l.useMemo)((()=>{if(c||0===_.length||(t=_,!Array.isArray(t)||!t.every((e=>["1","2","3","4","5"].includes(e)))))return null;var t;const r=(0,p.__)("Rating","woo-gutenberg-products-block");return(0,l.createElement)("li",null,(0,l.createElement)("span",{className:"wc-block-active-filters__list-item-type"},r,":"),(0,l.createElement)("ul",null,_.map((t=>D({type:r,name:(0,p.sprintf)(/* translators: %s is referring to the average rating value */
(0,p.__)("Rated %s out of 5","woo-gutenberg-products-block"),t),removeCallback:()=>{if(M({rating_filter:t}),!a){const e=_.filter((e=>e!==t));N(e)}},showLabel:!1,displayStyle:e.displayStyle})))))}),[c,_,N,e.displayStyle,a]);if(!c&&!(u.length>0||d.length>0||_.length>0||Number.isFinite(g)||Number.isFinite(f))&&!t)return r(!1),null;const Q=`h${e.headingLevel}`,W=(0,l.createElement)(Q,{className:"wc-block-active-filters__title"},e.heading),z=c?(0,l.createElement)(T,null,W):W;if(!(0,k.getSettingWithCoercion)("hasFilterableProducts",!1,E))return r(!1),null;r(!0);const V=i()("wc-block-active-filters__list",{"wc-block-active-filters__list--chips":"chips"===e.displayStyle,"wc-block-active-filters--loading":c});return(0,l.createElement)(l.Fragment,null,!t&&e.heading&&z,(0,l.createElement)("div",{className:"wc-block-active-filters"},(0,l.createElement)("ul",{className:V},t?(0,l.createElement)(l.Fragment,null,D({type:(0,p.__)("Size","woo-gutenberg-products-block"),name:(0,p.__)("Small","woo-gutenberg-products-block"),displayStyle:e.displayStyle}),D({type:(0,p.__)("Color","woo-gutenberg-products-block"),name:(0,p.__)("Blue","woo-gutenberg-products-block"),displayStyle:e.displayStyle})):(0,l.createElement)(l.Fragment,null,(0,l.createElement)(G,{isLoading:c,displayStyle:e.displayStyle}),B,L,F,P)),c?(0,l.createElement)("span",{className:"wc-block-active-filters__clear-all-placeholder"}):(0,l.createElement)("button",{className:"wc-block-active-filters__clear-all",onClick:()=>{(()=>{if(!window)return;const e=window.location.href,t=(0,A.getQueryArgs)(e),r=(0,A.removeQueryArgs)(e,...Object.keys(t)),l=Object.fromEntries(Object.keys(t).filter((e=>!I(e))).map((e=>[e,t[e]])));j((0,A.addQueryArgs)(r,l))})(),a||(y(void 0),w(void 0),m([]),b([]),N([]))}},(0,l.createElement)(v,{label:(0,p.__)("Clear All","woo-gutenberg-products-block"),screenReaderLabel:(0,p.__)("Clear All Filters","woo-gutenberg-products-block")}))))};r(5449);const Z=({clientId:e,setAttributes:t,filterType:r,attributes:a})=>{const{replaceBlock:o}=(0,y.useDispatch)("core/block-editor"),{heading:s,headingLevel:c}=a;if((0,y.useSelect)((t=>{const{getBlockParentsByBlockName:r}=t("core/block-editor");return r(e,"woocommerce/filter-wrapper").length>0}),[e])||!r)return null;const i=[(0,l.createElement)(b.Button,{key:"convert",onClick:()=>{const l=[(0,n.createBlock)(`woocommerce/${r}`,{...a,heading:""})];s&&""!==s&&l.unshift((0,n.createBlock)("core/heading",{content:s,level:null!=c?c:2})),o(e,(0,n.createBlock)("woocommerce/filter-wrapper",{heading:s,filterType:r},[...l])),t({heading:"",lock:{remove:!0}})},variant:"primary"},(0,p.__)("Upgrade block","woo-gutenberg-products-block"))];return(0,l.createElement)(u.Warning,{actions:i},(0,p.__)("Filter block: We have improved this block to make styling easier. Upgrade it using the button below.","woo-gutenberg-products-block"))},H=(0,b.withSpokenMessages)((({attributes:e,setAttributes:t,clientId:r})=>{const{className:n,displayStyle:a,heading:o,headingLevel:s}=e,c=(0,u.useBlockProps)({className:n});return(0,l.createElement)("div",{...c},(0,l.createElement)(u.InspectorControls,{key:"inspector"},(0,l.createElement)(b.PanelBody,{title:(0,p.__)("Display Settings","woo-gutenberg-products-block")},(0,l.createElement)(b.__experimentalToggleGroupControl,{label:(0,p.__)("Display Style","woo-gutenberg-products-block"),value:a,onChange:e=>t({displayStyle:e}),className:"wc-block-active-filter__style-toggle"},(0,l.createElement)(b.__experimentalToggleGroupControlOption,{value:"list",label:(0,p.__)("List","woo-gutenberg-products-block")}),(0,l.createElement)(b.__experimentalToggleGroupControlOption,{value:"chips",label:(0,p.__)("Chips","woo-gutenberg-products-block")})))),(0,l.createElement)(Z,{attributes:e,clientId:r,setAttributes:t,filterType:"active-filters"}),o&&(0,l.createElement)(d,{className:"wc-block-active-filters__title",headingLevel:s,heading:o,onChange:e=>t({heading:e})}),(0,l.createElement)(b.Disabled,null,(0,l.createElement)(U,{attributes:e,isEditor:!0})))})),J=JSON.parse('{"name":"woocommerce/active-filters","version":"1.0.0","title":"Active Filters Controls","description":"Display the currently active filters.","category":"woocommerce","keywords":["WooCommerce"],"supports":{"html":false,"multiple":false,"inserter":false,"color":{"text":true,"background":false},"lock":false},"attributes":{"displayStyle":{"type":"string","default":"list"},"headingLevel":{"type":"number","default":3}},"textdomain":"woo-gutenberg-products-block","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}'),X={heading:{type:"string",default:(0,p.__)("Active filters","woo-gutenberg-products-block")}},ee=[{attributes:{...J.attributes,...X},save:({attributes:e})=>{const{className:t,displayStyle:r,heading:n,headingLevel:a}=e,o={"data-display-style":r,"data-heading":n,"data-heading-level":a};return(0,l.createElement)("div",{...u.useBlockProps.save({className:i()("is-loading",t)}),...o},(0,l.createElement)("span",{"aria-hidden":!0,className:"wc-block-active-filters__placeholder"}))}}];(0,n.registerBlockType)(J,{icon:{src:(0,l.createElement)(s.Z,{icon:o,className:"wc-block-editor-components-block-icon"})},attributes:{...J.attributes,...X},edit:H,save({attributes:e}){const{className:t}=e;return(0,l.createElement)("div",{...u.useBlockProps.save({className:i()("is-loading",t)})},(0,l.createElement)("span",{"aria-hidden":!0,className:"wc-block-active-filters__placeholder"}))},deprecated:ee})},6232:()=>{},7732:()=>{},5449:()=>{},4624:()=>{},7118:()=>{},4333:e=>{"use strict";e.exports=window.wp.compose},9307:e=>{"use strict";e.exports=window.wp.element},5736:e=>{"use strict";e.exports=window.wp.i18n},9127:e=>{"use strict";e.exports=window.wp.isShallowEqual},444:e=>{"use strict";e.exports=window.wp.primitives}},r={};function l(e){var n=r[e];if(void 0!==n)return n.exports;var a=r[e]={exports:{}};return t[e].call(a.exports,a,a.exports,l),a.exports}l.m=t,e=[],l.O=(t,r,n,a)=>{if(!r){var o=1/0;for(u=0;u<e.length;u++){for(var[r,n,a]=e[u],s=!0,c=0;c<r.length;c++)(!1&a||o>=a)&&Object.keys(l.O).every((e=>l.O[e](r[c])))?r.splice(c--,1):(s=!1,a<o&&(o=a));if(s){e.splice(u--,1);var i=n();void 0!==i&&(t=i)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[r,n,a]},l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var r in t)l.o(t,r)&&!l.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.j=8918,(()=>{var e={8918:0};l.O.j=t=>0===e[t];var t=(t,r)=>{var n,a,[o,s,c]=r,i=0;if(o.some((t=>0!==e[t]))){for(n in s)l.o(s,n)&&(l.m[n]=s[n]);if(c)var u=c(l)}for(t&&t(r);i<o.length;i++)a=o[i],l.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return l.O(u)},r=self.webpackChunkwebpackWcBlocksJsonp=self.webpackChunkwebpackWcBlocksJsonp||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var n=l.O(void 0,[2869],(()=>l(9126)));n=l.O(n),((this.wc=this.wc||{}).blocks=this.wc.blocks||{})["active-filters"]=n})();