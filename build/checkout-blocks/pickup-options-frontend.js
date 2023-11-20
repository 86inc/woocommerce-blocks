(self.webpackChunkwebpackWcBlocksJsonp=self.webpackChunkwebpackWcBlocksJsonp||[]).push([[724],{4427:(e,t,n)=>{"use strict";n.d(t,{Z:()=>k});var r=n(9196),o=n(4184),a=n.n(o),i=n(5736),c=n(2629),l=n(711),s=n(9307),u=n(5027),p=n(7856),m=n.n(p);const d=["a","b","em","i","strong","p","br"],f=["target","href","rel","name","download"],g=(e,t)=>{const n=(null==t?void 0:t.tags)||d,r=(null==t?void 0:t.attr)||f;return m().sanitize(e,{ALLOWED_TAGS:n,ALLOWED_ATTR:r})};var h=n(9097),y=n(4293),b=n(4617);const v=e=>{const t=(0,b.getSetting)("displayCartPricesIncludingTax",!1)?parseInt(e.price,10)+parseInt(e.taxes,10):parseInt(e.price,10);return{label:(0,c.decodeEntities)(e.name),value:e.rate_id,description:(0,r.createElement)(r.Fragment,null,Number.isFinite(t)&&(0,r.createElement)(l.FormattedMonetaryAmount,{currency:(0,y.getCurrencyFromPriceResponse)(e),value:t}),Number.isFinite(t)&&e.delivery_time?" — ":null,(0,c.decodeEntities)(e.delivery_time))}},E=({className:e="",noResultsMessage:t,onSelectRate:n,rates:o,renderOption:a=v,selectedRate:i,disabled:c=!1})=>{const u=(null==i?void 0:i.rate_id)||"",p=(0,h.D)(u),[m,d]=(0,s.useState)((()=>{var e;return u||(null===(e=o[0])||void 0===e?void 0:e.rate_id)}));if((0,s.useEffect)((()=>{u&&u!==p&&u!==m&&d(u)}),[u,m,p]),(0,s.useEffect)((()=>{m&&n(m)}),[n,m]),0===o.length)return t;if(o.length>1)return(0,r.createElement)(l.RadioControl,{className:e,onChange:e=>{d(e),n(e)},disabled:c,selected:m,options:o.map(a)});const{label:f,secondaryLabel:g,description:y,secondaryDescription:b}=a(o[0]);return(0,r.createElement)(l.RadioControlOptionLayout,{label:f,secondaryLabel:g,description:y,secondaryDescription:b})};n(6125);const k=({packageId:e,className:t="",noResultsMessage:n,renderOption:o,packageData:p,collapsible:m,showItems:d})=>{const{selectShippingRate:f,isSelectingRate:h}=(0,u.V)(),y=document.querySelectorAll(".wc-block-components-shipping-rates-control__package").length>1,b=null!=d?d:y,v=null!=m?m:y,k=(0,r.createElement)(r.Fragment,null,(v||b)&&(0,r.createElement)("div",{className:"wc-block-components-shipping-rates-control__package-title",dangerouslySetInnerHTML:{__html:g(p.name)}}),b&&(0,r.createElement)("ul",{className:"wc-block-components-shipping-rates-control__package-items"},Object.values(p.items).map((e=>{const t=(0,c.decodeEntities)(e.name),n=e.quantity;return(0,r.createElement)("li",{key:e.key,className:"wc-block-components-shipping-rates-control__package-item"},(0,r.createElement)(l.Label,{label:n>1?`${t} × ${n}`:`${t}`,screenReaderLabel:(0,i.sprintf)(/* translators: %1$s name of the product (ie: Sunglasses), %2$d number of units in the current cart package */
(0,i._n)("%1$s (%2$d unit)","%1$s (%2$d units)",n,"woo-gutenberg-products-block"),t,n)}))})))),_=(0,s.useCallback)((t=>{f(t,e)}),[e,f]),N={className:t,noResultsMessage:n,rates:p.shipping_rates,onSelectRate:_,selectedRate:p.shipping_rates.find((e=>e.selected)),renderOption:o,disabled:h};return v?(0,r.createElement)(l.Panel,{className:a()("wc-block-components-shipping-rates-control__package",t,{"wc-block-components-shipping-rates-control__package--disabled":h}),initialOpen:!1,title:k},(0,r.createElement)(E,{...N})):(0,r.createElement)("div",{className:a()("wc-block-components-shipping-rates-control__package",t,{"wc-block-components-shipping-rates-control__package--disabled":h})},k,(0,r.createElement)(E,{...N}))}},9490:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(5736);const o=({defaultTitle:e=(0,r.__)("Step","woo-gutenberg-products-block"),defaultDescription:t=(0,r.__)("Step description text.","woo-gutenberg-products-block"),defaultShowStepNumber:n=!0})=>({title:{type:"string",default:e},description:{type:"string",default:t},showStepNumber:{type:"boolean",default:n}})},4711:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>C});var r=n(9196),o=n(4184),a=n.n(o),i=n(721),c=n(711),l=n(9818),s=n(4801),u=n(5271),p=n(5736),m=n(9307),d=n(5027),f=n(4055),g=n(4293),h=n(2629),y=n(4617),b=n(1984),v=n(444);const E=(0,m.createElement)(v.SVG,{xmlns:"https://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,m.createElement)(v.Path,{d:"M12 9c-.8 0-1.5.7-1.5 1.5S11.2 12 12 12s1.5-.7 1.5-1.5S12.8 9 12 9zm0-5c-3.6 0-6.5 2.8-6.5 6.2 0 .8.3 1.8.9 3.1.5 1.1 1.2 2.3 2 3.6.7 1 3 3.8 3.2 3.9l.4.5.4-.5c.2-.2 2.6-2.9 3.2-3.9.8-1.2 1.5-2.5 2-3.6.6-1.3.9-2.3.9-3.1C18.5 6.8 15.6 4 12 4zm4.3 8.7c-.5 1-1.1 2.2-1.9 3.4-.5.7-1.7 2.2-2.4 3-.7-.8-1.9-2.3-2.4-3-.8-1.2-1.4-2.3-1.9-3.3-.6-1.4-.7-2.2-.7-2.5 0-2.6 2.2-4.7 5-4.7s5 2.1 5 4.7c0 .2-.1 1-.7 2.4z"}));var k=n(602),_=n(3554);const N=({title:e,setSelectedOption:t,selectedOption:n,pickupLocations:o,onSelectRate:a,renderPickupLocation:i,packageCount:l})=>{const s=document.querySelectorAll(".wc-block-components-local-pickup-select .wc-block-components-radio-control").length>1;return(0,r.createElement)("div",{className:"wc-block-components-local-pickup-select"},!(!s||!e)&&(0,r.createElement)("div",null,e),(0,r.createElement)(c.RadioControl,{onChange:e=>{t(e),a(e)},selected:n,options:o.map((e=>i(e,l)))}))};var T=n(4427);const w=(e,t)=>{const n=(0,y.getSetting)("displayCartPricesIncludingTax",!1)?parseInt(e.price,10)+parseInt(e.taxes,10):e.price,o=(e=>{if(null!=e&&e.meta_data){const t=e.meta_data.find((e=>"pickup_location"===e.key));return t?t.value:""}return""})(e),a=(e=>{if(null!=e&&e.meta_data){const t=e.meta_data.find((e=>"pickup_address"===e.key));return t?t.value:""}return""})(e),i=(e=>{if(null!=e&&e.meta_data){const t=e.meta_data.find((e=>"pickup_details"===e.key));return t?t.value:""}return""})(e);let l=(0,r.createElement)("em",null,(0,p.__)("free","woo-gutenberg-products-block"));return parseInt(n,10)>0&&(l=1===t?(0,r.createElement)(c.FormattedMonetaryAmount,{currency:(0,g.getCurrencyFromPriceResponse)(e),value:n}):(0,m.createInterpolateElement)(/* translators: <price/> is the price of the package, <packageCount/> is the number of packages. These must appear in the translated string. */
(0,p._n)("<price/> x <packageCount/> package","<price/> x <packageCount/> packages",t,"woo-gutenberg-products-block"),{price:(0,r.createElement)(c.FormattedMonetaryAmount,{currency:(0,g.getCurrencyFromPriceResponse)(e),value:n}),packageCount:(0,r.createElement)(r.Fragment,null,t)})),{value:e.rate_id,label:o?(0,h.decodeEntities)(o):(0,h.decodeEntities)(e.name),secondaryLabel:l,description:(0,h.decodeEntities)(i),secondaryDescription:a?(0,r.createElement)(r.Fragment,null,(0,r.createElement)(b.Z,{icon:E,className:"wc-block-editor-components-block-icon"}),(0,h.decodeEntities)(a)):void 0}},S=()=>{var e;const{shippingRates:t,selectShippingRate:n}=(0,d.V)(),o=((null===(e=t[0])||void 0===e?void 0:e.shipping_rates)||[]).filter(k.J3),[a,i]=(0,m.useState)((()=>{var e;return(null===(e=o.find((e=>e.selected)))||void 0===e?void 0:e.rate_id)||""})),c=(0,m.useCallback)((e=>{n(e)}),[n]),{extensions:l,receiveCart:s,...u}=(0,f.b)(),p={extensions:l,cart:u,components:{ShippingRatesControlPackage:T.Z,LocalPickupSelect:N},renderPickupLocation:w},g=(0,k.wH)(t);return(0,r.createElement)(r.Fragment,null,(0,r.createElement)(_.ExperimentalOrderLocalPickupPackages.Slot,{...p}),(0,r.createElement)(_.ExperimentalOrderLocalPickupPackages,null,(0,r.createElement)(N,{title:t[0].name,setSelectedOption:i,onSelectRate:c,selectedOption:a,renderPickupLocation:w,pickupLocations:o,packageCount:g})))},A={...(0,n(9490).Z)({defaultTitle:(0,p.__)("Pickup options","woo-gutenberg-products-block"),defaultDescription:""}),className:{type:"string",default:""},lock:{type:"object",default:{move:!0,remove:!0}}},C=(0,i.withFilteredAttributes)(A)((({title:e,description:t,showStepNumber:n,children:o,className:i})=>{const{checkoutIsProcessing:p,prefersCollection:m}=(0,l.useSelect)((e=>{const t=e(s.CHECKOUT_STORE_KEY);return{checkoutIsProcessing:t.isProcessing(),prefersCollection:t.prefersCollection()}}));return m&&u.oC?(0,r.createElement)(c.FormStep,{id:"pickup-options",disabled:p,className:a()("wc-block-checkout__pickup-options",i),title:e,description:t,showStepNumber:n},(0,r.createElement)(S,null),o):null}))},7856:function(e){e.exports=function(){"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,n){return t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},t(e,n)}function n(e,r,o){return n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()?Reflect.construct:function(e,n,r){var o=[null];o.push.apply(o,n);var a=new(Function.bind.apply(e,o));return r&&t(a,r.prototype),a},n.apply(null,arguments)}function r(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var a=Object.hasOwnProperty,i=Object.setPrototypeOf,c=Object.isFrozen,l=Object.getPrototypeOf,s=Object.getOwnPropertyDescriptor,u=Object.freeze,p=Object.seal,m=Object.create,d="undefined"!=typeof Reflect&&Reflect,f=d.apply,g=d.construct;f||(f=function(e,t,n){return e.apply(t,n)}),u||(u=function(e){return e}),p||(p=function(e){return e}),g||(g=function(e,t){return n(e,r(t))});var h,y=C(Array.prototype.forEach),b=C(Array.prototype.pop),v=C(Array.prototype.push),E=C(String.prototype.toLowerCase),k=C(String.prototype.toString),_=C(String.prototype.match),N=C(String.prototype.replace),T=C(String.prototype.indexOf),w=C(String.prototype.trim),S=C(RegExp.prototype.test),A=(h=TypeError,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return g(h,t)});function C(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return f(e,t,r)}}function x(e,t,n){var r;n=null!==(r=n)&&void 0!==r?r:E,i&&i(e,null);for(var o=t.length;o--;){var a=t[o];if("string"==typeof a){var l=n(a);l!==a&&(c(t)||(t[o]=l),a=l)}e[a]=!0}return e}function L(e){var t,n=m(null);for(t in e)!0===f(a,e,[t])&&(n[t]=e[t]);return n}function R(e,t){for(;null!==e;){var n=s(e,t);if(n){if(n.get)return C(n.get);if("function"==typeof n.value)return C(n.value)}e=l(e)}return function(e){return console.warn("fallback value for",e),null}}var O=u(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),D=u(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),M=u(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),I=u(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),F=u(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),P=u(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),H=u(["#text"]),U=u(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),z=u(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),B=u(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),j=u(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),W=p(/\{\{[\w\W]*|[\w\W]*\}\}/gm),G=p(/<%[\w\W]*|[\w\W]*%>/gm),$=p(/\${[\w\W]*}/gm),q=p(/^data-[\-\w.\u00B7-\uFFFF]/),V=p(/^aria-[\-\w]+$/),Y=p(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Z=p(/^(?:\w+script|data):/i),K=p(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),J=p(/^html$/i),X=function(){return"undefined"==typeof window?null:window};return function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X(),o=function(e){return t(e)};if(o.version="2.4.7",o.removed=[],!n||!n.document||9!==n.document.nodeType)return o.isSupported=!1,o;var a=n.document,i=n.document,c=n.DocumentFragment,l=n.HTMLTemplateElement,s=n.Node,p=n.Element,m=n.NodeFilter,d=n.NamedNodeMap,f=void 0===d?n.NamedNodeMap||n.MozNamedAttrMap:d,g=n.HTMLFormElement,h=n.DOMParser,C=n.trustedTypes,Q=p.prototype,ee=R(Q,"cloneNode"),te=R(Q,"nextSibling"),ne=R(Q,"childNodes"),re=R(Q,"parentNode");if("function"==typeof l){var oe=i.createElement("template");oe.content&&oe.content.ownerDocument&&(i=oe.content.ownerDocument)}var ae=function(t,n){if("object"!==e(t)||"function"!=typeof t.createPolicy)return null;var r=null,o="data-tt-policy-suffix";n.currentScript&&n.currentScript.hasAttribute(o)&&(r=n.currentScript.getAttribute(o));var a="dompurify"+(r?"#"+r:"");try{return t.createPolicy(a,{createHTML:function(e){return e},createScriptURL:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+a+" could not be created."),null}}(C,a),ie=ae?ae.createHTML(""):"",ce=i,le=ce.implementation,se=ce.createNodeIterator,ue=ce.createDocumentFragment,pe=ce.getElementsByTagName,me=a.importNode,de={};try{de=L(i).documentMode?i.documentMode:{}}catch(e){}var fe={};o.isSupported="function"==typeof re&&le&&void 0!==le.createHTMLDocument&&9!==de;var ge,he,ye=W,be=G,ve=$,Ee=q,ke=V,_e=Z,Ne=K,Te=Y,we=null,Se=x({},[].concat(r(O),r(D),r(M),r(F),r(H))),Ae=null,Ce=x({},[].concat(r(U),r(z),r(B),r(j))),xe=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Le=null,Re=null,Oe=!0,De=!0,Me=!1,Ie=!0,Fe=!1,Pe=!1,He=!1,Ue=!1,ze=!1,Be=!1,je=!1,We=!0,Ge=!1,$e=!0,qe=!1,Ve={},Ye=null,Ze=x({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Ke=null,Je=x({},["audio","video","img","source","image","track"]),Xe=null,Qe=x({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),et="http://www.w3.org/1998/Math/MathML",tt="http://www.w3.org/2000/svg",nt="http://www.w3.org/1999/xhtml",rt=nt,ot=!1,at=null,it=x({},[et,tt,nt],k),ct=["application/xhtml+xml","text/html"],lt=null,st=i.createElement("form"),ut=function(e){return e instanceof RegExp||e instanceof Function},pt=function(t){lt&&lt===t||(t&&"object"===e(t)||(t={}),t=L(t),ge=ge=-1===ct.indexOf(t.PARSER_MEDIA_TYPE)?"text/html":t.PARSER_MEDIA_TYPE,he="application/xhtml+xml"===ge?k:E,we="ALLOWED_TAGS"in t?x({},t.ALLOWED_TAGS,he):Se,Ae="ALLOWED_ATTR"in t?x({},t.ALLOWED_ATTR,he):Ce,at="ALLOWED_NAMESPACES"in t?x({},t.ALLOWED_NAMESPACES,k):it,Xe="ADD_URI_SAFE_ATTR"in t?x(L(Qe),t.ADD_URI_SAFE_ATTR,he):Qe,Ke="ADD_DATA_URI_TAGS"in t?x(L(Je),t.ADD_DATA_URI_TAGS,he):Je,Ye="FORBID_CONTENTS"in t?x({},t.FORBID_CONTENTS,he):Ze,Le="FORBID_TAGS"in t?x({},t.FORBID_TAGS,he):{},Re="FORBID_ATTR"in t?x({},t.FORBID_ATTR,he):{},Ve="USE_PROFILES"in t&&t.USE_PROFILES,Oe=!1!==t.ALLOW_ARIA_ATTR,De=!1!==t.ALLOW_DATA_ATTR,Me=t.ALLOW_UNKNOWN_PROTOCOLS||!1,Ie=!1!==t.ALLOW_SELF_CLOSE_IN_ATTR,Fe=t.SAFE_FOR_TEMPLATES||!1,Pe=t.WHOLE_DOCUMENT||!1,ze=t.RETURN_DOM||!1,Be=t.RETURN_DOM_FRAGMENT||!1,je=t.RETURN_TRUSTED_TYPE||!1,Ue=t.FORCE_BODY||!1,We=!1!==t.SANITIZE_DOM,Ge=t.SANITIZE_NAMED_PROPS||!1,$e=!1!==t.KEEP_CONTENT,qe=t.IN_PLACE||!1,Te=t.ALLOWED_URI_REGEXP||Te,rt=t.NAMESPACE||nt,xe=t.CUSTOM_ELEMENT_HANDLING||{},t.CUSTOM_ELEMENT_HANDLING&&ut(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(xe.tagNameCheck=t.CUSTOM_ELEMENT_HANDLING.tagNameCheck),t.CUSTOM_ELEMENT_HANDLING&&ut(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(xe.attributeNameCheck=t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),t.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(xe.allowCustomizedBuiltInElements=t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Fe&&(De=!1),Be&&(ze=!0),Ve&&(we=x({},r(H)),Ae=[],!0===Ve.html&&(x(we,O),x(Ae,U)),!0===Ve.svg&&(x(we,D),x(Ae,z),x(Ae,j)),!0===Ve.svgFilters&&(x(we,M),x(Ae,z),x(Ae,j)),!0===Ve.mathMl&&(x(we,F),x(Ae,B),x(Ae,j))),t.ADD_TAGS&&(we===Se&&(we=L(we)),x(we,t.ADD_TAGS,he)),t.ADD_ATTR&&(Ae===Ce&&(Ae=L(Ae)),x(Ae,t.ADD_ATTR,he)),t.ADD_URI_SAFE_ATTR&&x(Xe,t.ADD_URI_SAFE_ATTR,he),t.FORBID_CONTENTS&&(Ye===Ze&&(Ye=L(Ye)),x(Ye,t.FORBID_CONTENTS,he)),$e&&(we["#text"]=!0),Pe&&x(we,["html","head","body"]),we.table&&(x(we,["tbody"]),delete Le.tbody),u&&u(t),lt=t)},mt=x({},["mi","mo","mn","ms","mtext"]),dt=x({},["foreignobject","desc","title","annotation-xml"]),ft=x({},["title","style","font","a","script"]),gt=x({},D);x(gt,M),x(gt,I);var ht=x({},F);x(ht,P);var yt=function(e){v(o.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){try{e.outerHTML=ie}catch(t){e.remove()}}},bt=function(e,t){try{v(o.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){v(o.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!Ae[e])if(ze||Be)try{yt(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},vt=function(e){var t,n;if(Ue)e="<remove></remove>"+e;else{var r=_(e,/^[\r\n\t ]+/);n=r&&r[0]}"application/xhtml+xml"===ge&&rt===nt&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var o=ae?ae.createHTML(e):e;if(rt===nt)try{t=(new h).parseFromString(o,ge)}catch(e){}if(!t||!t.documentElement){t=le.createDocument(rt,"template",null);try{t.documentElement.innerHTML=ot?ie:o}catch(e){}}var a=t.body||t.documentElement;return e&&n&&a.insertBefore(i.createTextNode(n),a.childNodes[0]||null),rt===nt?pe.call(t,Pe?"html":"body")[0]:Pe?t.documentElement:a},Et=function(e){return se.call(e.ownerDocument||e,e,m.SHOW_ELEMENT|m.SHOW_COMMENT|m.SHOW_TEXT,null,!1)},kt=function(t){return"object"===e(s)?t instanceof s:t&&"object"===e(t)&&"number"==typeof t.nodeType&&"string"==typeof t.nodeName},_t=function(e,t,n){fe[e]&&y(fe[e],(function(e){e.call(o,t,n,lt)}))},Nt=function(e){var t,n;if(_t("beforeSanitizeElements",e,null),(n=e)instanceof g&&("string"!=typeof n.nodeName||"string"!=typeof n.textContent||"function"!=typeof n.removeChild||!(n.attributes instanceof f)||"function"!=typeof n.removeAttribute||"function"!=typeof n.setAttribute||"string"!=typeof n.namespaceURI||"function"!=typeof n.insertBefore||"function"!=typeof n.hasChildNodes))return yt(e),!0;if(S(/[\u0080-\uFFFF]/,e.nodeName))return yt(e),!0;var r=he(e.nodeName);if(_t("uponSanitizeElement",e,{tagName:r,allowedTags:we}),e.hasChildNodes()&&!kt(e.firstElementChild)&&(!kt(e.content)||!kt(e.content.firstElementChild))&&S(/<[/\w]/g,e.innerHTML)&&S(/<[/\w]/g,e.textContent))return yt(e),!0;if("select"===r&&S(/<template/i,e.innerHTML))return yt(e),!0;if(!we[r]||Le[r]){if(!Le[r]&&wt(r)){if(xe.tagNameCheck instanceof RegExp&&S(xe.tagNameCheck,r))return!1;if(xe.tagNameCheck instanceof Function&&xe.tagNameCheck(r))return!1}if($e&&!Ye[r]){var a=re(e)||e.parentNode,i=ne(e)||e.childNodes;if(i&&a)for(var c=i.length-1;c>=0;--c)a.insertBefore(ee(i[c],!0),te(e))}return yt(e),!0}return e instanceof p&&!function(e){var t=re(e);t&&t.tagName||(t={namespaceURI:rt,tagName:"template"});var n=E(e.tagName),r=E(t.tagName);return!!at[e.namespaceURI]&&(e.namespaceURI===tt?t.namespaceURI===nt?"svg"===n:t.namespaceURI===et?"svg"===n&&("annotation-xml"===r||mt[r]):Boolean(gt[n]):e.namespaceURI===et?t.namespaceURI===nt?"math"===n:t.namespaceURI===tt?"math"===n&&dt[r]:Boolean(ht[n]):e.namespaceURI===nt?!(t.namespaceURI===tt&&!dt[r])&&!(t.namespaceURI===et&&!mt[r])&&!ht[n]&&(ft[n]||!gt[n]):!("application/xhtml+xml"!==ge||!at[e.namespaceURI]))}(e)?(yt(e),!0):"noscript"!==r&&"noembed"!==r&&"noframes"!==r||!S(/<\/no(script|embed|frames)/i,e.innerHTML)?(Fe&&3===e.nodeType&&(t=e.textContent,t=N(t,ye," "),t=N(t,be," "),t=N(t,ve," "),e.textContent!==t&&(v(o.removed,{element:e.cloneNode()}),e.textContent=t)),_t("afterSanitizeElements",e,null),!1):(yt(e),!0)},Tt=function(e,t,n){if(We&&("id"===t||"name"===t)&&(n in i||n in st))return!1;if(De&&!Re[t]&&S(Ee,t));else if(Oe&&S(ke,t));else if(!Ae[t]||Re[t]){if(!(wt(e)&&(xe.tagNameCheck instanceof RegExp&&S(xe.tagNameCheck,e)||xe.tagNameCheck instanceof Function&&xe.tagNameCheck(e))&&(xe.attributeNameCheck instanceof RegExp&&S(xe.attributeNameCheck,t)||xe.attributeNameCheck instanceof Function&&xe.attributeNameCheck(t))||"is"===t&&xe.allowCustomizedBuiltInElements&&(xe.tagNameCheck instanceof RegExp&&S(xe.tagNameCheck,n)||xe.tagNameCheck instanceof Function&&xe.tagNameCheck(n))))return!1}else if(Xe[t]);else if(S(Te,N(n,Ne,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==T(n,"data:")||!Ke[e])if(Me&&!S(_e,N(n,Ne,"")));else if(n)return!1;return!0},wt=function(e){return e.indexOf("-")>0},St=function(t){var n,r,a,i;_t("beforeSanitizeAttributes",t,null);var c=t.attributes;if(c){var l={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Ae};for(i=c.length;i--;){var s=n=c[i],u=s.name,p=s.namespaceURI;if(r="value"===u?n.value:w(n.value),a=he(u),l.attrName=a,l.attrValue=r,l.keepAttr=!0,l.forceKeepAttr=void 0,_t("uponSanitizeAttribute",t,l),r=l.attrValue,!l.forceKeepAttr&&(bt(u,t),l.keepAttr))if(Ie||!S(/\/>/i,r)){Fe&&(r=N(r,ye," "),r=N(r,be," "),r=N(r,ve," "));var m=he(t.nodeName);if(Tt(m,a,r)){if(!Ge||"id"!==a&&"name"!==a||(bt(u,t),r="user-content-"+r),ae&&"object"===e(C)&&"function"==typeof C.getAttributeType)if(p);else switch(C.getAttributeType(m,a)){case"TrustedHTML":r=ae.createHTML(r);break;case"TrustedScriptURL":r=ae.createScriptURL(r)}try{p?t.setAttributeNS(p,u,r):t.setAttribute(u,r),b(o.removed)}catch(e){}}}else bt(u,t)}_t("afterSanitizeAttributes",t,null)}},At=function e(t){var n,r=Et(t);for(_t("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)_t("uponSanitizeShadowNode",n,null),Nt(n)||(n.content instanceof c&&e(n.content),St(n));_t("afterSanitizeShadowDOM",t,null)};return o.sanitize=function(t){var r,i,l,u,p,m=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if((ot=!t)&&(t="\x3c!--\x3e"),"string"!=typeof t&&!kt(t)){if("function"!=typeof t.toString)throw A("toString is not a function");if("string"!=typeof(t=t.toString()))throw A("dirty is not a string, aborting")}if(!o.isSupported){if("object"===e(n.toStaticHTML)||"function"==typeof n.toStaticHTML){if("string"==typeof t)return n.toStaticHTML(t);if(kt(t))return n.toStaticHTML(t.outerHTML)}return t}if(He||pt(m),o.removed=[],"string"==typeof t&&(qe=!1),qe){if(t.nodeName){var d=he(t.nodeName);if(!we[d]||Le[d])throw A("root node is forbidden and cannot be sanitized in-place")}}else if(t instanceof s)1===(i=(r=vt("\x3c!----\x3e")).ownerDocument.importNode(t,!0)).nodeType&&"BODY"===i.nodeName||"HTML"===i.nodeName?r=i:r.appendChild(i);else{if(!ze&&!Fe&&!Pe&&-1===t.indexOf("<"))return ae&&je?ae.createHTML(t):t;if(!(r=vt(t)))return ze?null:je?ie:""}r&&Ue&&yt(r.firstChild);for(var f=Et(qe?t:r);l=f.nextNode();)3===l.nodeType&&l===u||Nt(l)||(l.content instanceof c&&At(l.content),St(l),u=l);if(u=null,qe)return t;if(ze){if(Be)for(p=ue.call(r.ownerDocument);r.firstChild;)p.appendChild(r.firstChild);else p=r;return(Ae.shadowroot||Ae.shadowrootmod)&&(p=me.call(a,p,!0)),p}var g=Pe?r.outerHTML:r.innerHTML;return Pe&&we["!doctype"]&&r.ownerDocument&&r.ownerDocument.doctype&&r.ownerDocument.doctype.name&&S(J,r.ownerDocument.doctype.name)&&(g="<!DOCTYPE "+r.ownerDocument.doctype.name+">\n"+g),Fe&&(g=N(g,ye," "),g=N(g,be," "),g=N(g,ve," ")),ae&&je?ae.createHTML(g):g},o.setConfig=function(e){pt(e),He=!0},o.clearConfig=function(){lt=null,He=!1},o.isValidAttribute=function(e,t,n){lt||pt({});var r=he(e),o=he(t);return Tt(r,o,n)},o.addHook=function(e,t){"function"==typeof t&&(fe[e]=fe[e]||[],v(fe[e],t))},o.removeHook=function(e){if(fe[e])return b(fe[e])},o.removeHooks=function(e){fe[e]&&(fe[e]=[])},o.removeAllHooks=function(){fe={}},o}()}()},6125:()=>{}}]);