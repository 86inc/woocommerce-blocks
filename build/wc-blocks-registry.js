this.wc=this.wc||{},this.wc.wcBlocksRegistry=function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=158)}({0:function(e,t){e.exports=window.wp.element},10:function(e,t,o){var n=o(36);e.exports=function(e,t,o){return(t=n(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},e.exports.__esModule=!0,e.exports.default=e.exports},158:function(e,t,o){"use strict";o.r(t),o.d(t,"registerPaymentMethod",(function(){return w})),o.d(t,"registerExpressPaymentMethod",(function(){return k})),o.d(t,"registerPaymentMethodExtensionCallbacks",(function(){return M})),o.d(t,"__experimentalDeRegisterPaymentMethod",(function(){return x})),o.d(t,"__experimentalDeRegisterExpressPaymentMethod",(function(){return P})),o.d(t,"getPaymentMethods",(function(){return E})),o.d(t,"getExpressPaymentMethods",(function(){return T})),o.d(t,"getRegisteredBlockComponents",(function(){return O})),o.d(t,"getRegisteredInnerBlocks",(function(){return S})),o.d(t,"registerBlockComponent",(function(){return _})),o.d(t,"registerInnerBlock",(function(){return R}));var n=o(6),r=o.n(n),i=o(2),a=o(10),s=o.n(a),u=o(0);const c={},l=c,p=(e,t,o)=>{const n=((e,t)=>o=>((null==o?void 0:o.paymentRequirements)||[]).every(e=>t.includes(e))&&e(o))(e,t);return Object.values(l).some(e=>o in e)?((e,t,o)=>n=>{let r=e(n);if(r){const e={};Object.entries(t).forEach(t=>{let[n,r]=t;o in r&&"function"==typeof r[o]&&(e[n]=r[o])}),r=Object.keys(e).every(t=>{try{return e[t](n)}catch(e){return console.error(`Error when executing callback for ${o} in ${t}`,e),!0}})}return r})(n,l,o):n},d=(e,t)=>{if(null!==e&&!Object(u.isValidElement)(e))throw new TypeError(`The ${t} property for the payment method must be a React element or null.`)},m=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const o=t.reduce((t,o)=>(e.hasOwnProperty(o)||t.push(o),t),[]);if(o.length>0)throw new TypeError("The payment method configuration object is missing the following properties:"+o.join(", "))},h=()=>null;class f{constructor(e){var t,o,n,r;s()(this,"name",void 0),s()(this,"content",void 0),s()(this,"edit",void 0),s()(this,"paymentMethodId",void 0),s()(this,"supports",void 0),s()(this,"icons",void 0),s()(this,"label",void 0),s()(this,"ariaLabel",void 0),s()(this,"placeOrderButtonLabel",void 0),s()(this,"savedTokenComponent",void 0),s()(this,"canMakePaymentFromConfig",void 0),f.assertValidConfig(e),this.name=e.name,this.label=e.label,this.placeOrderButtonLabel=e.placeOrderButtonLabel,this.ariaLabel=e.ariaLabel,this.content=e.content,this.savedTokenComponent=e.savedTokenComponent,this.icons=e.icons||null,this.edit=e.edit,this.paymentMethodId=e.paymentMethodId||this.name,this.supports={showSavedCards:(null==e||null===(t=e.supports)||void 0===t?void 0:t.showSavedCards)||(null==e||null===(o=e.supports)||void 0===o?void 0:o.savePaymentInfo)||!1,showSaveOption:(null==e||null===(n=e.supports)||void 0===n?void 0:n.showSaveOption)||!1,features:(null==e||null===(r=e.supports)||void 0===r?void 0:r.features)||["products"]},this.canMakePaymentFromConfig=e.canMakePayment}get canMakePayment(){return p(this.canMakePaymentFromConfig,this.supports.features,this.name)}}s()(f,"assertValidConfig",e=>{var t,o,n,i,a,s,c;if(e.savedTokenComponent=e.savedTokenComponent||Object(u.createElement)(h,null),m(e,["name","label","ariaLabel","content","edit","canMakePayment"]),"string"!=typeof e.name)throw new Error("The name property for the payment method must be a string");if(void 0!==e.icons&&!Array.isArray(e.icons)&&null!==e.icons)throw new Error("The icons property for the payment method must be an array or null.");if("string"!=typeof e.paymentMethodId&&void 0!==e.paymentMethodId)throw new Error("The paymentMethodId property for the payment method must be a string or undefined (in which case it will be the value of the name property).");if("string"!=typeof e.placeOrderButtonLabel&&void 0!==e.placeOrderButtonLabel)throw new TypeError("The placeOrderButtonLabel property for the payment method must be a string");if(((e,t)=>{if(null!==e&&!Object(u.isValidElement)(e)&&"string"!=typeof e)throw new TypeError("The label property for the payment method must be a React element, a string, or null.")})(e.label),d(e.content,"content"),d(e.edit,"edit"),d(e.savedTokenComponent,"savedTokenComponent"),"string"!=typeof e.ariaLabel)throw new TypeError("The ariaLabel property for the payment method must be a string");if("function"!=typeof e.canMakePayment)throw new TypeError("The canMakePayment property for the payment method must be a function.");if(void 0!==(null===(t=e.supports)||void 0===t?void 0:t.showSavedCards)&&"boolean"!=typeof(null===(o=e.supports)||void 0===o?void 0:o.showSavedCards))throw new TypeError("If the payment method includes the `supports.showSavedCards` property, it must be a boolean");if(void 0!==(null===(n=e.supports)||void 0===n?void 0:n.savePaymentInfo)&&r()("Passing savePaymentInfo when registering a payment method.",{alternative:"Pass showSavedCards and showSaveOption",plugin:"woocommerce-gutenberg-products-block",link:"https://github.com/woocommerce/woocommerce-gutenberg-products-block/pull/3686"}),void 0!==(null===(i=e.supports)||void 0===i?void 0:i.features)&&!Array.isArray(null===(a=e.supports)||void 0===a?void 0:a.features))throw new Error("The features property for the payment method must be an array or undefined.");if(void 0!==(null===(s=e.supports)||void 0===s?void 0:s.showSaveOption)&&"boolean"!=typeof(null===(c=e.supports)||void 0===c?void 0:c.showSaveOption))throw new TypeError("If the payment method includes the `supports.showSaveOption` property, it must be a boolean")});class y{constructor(e){var t;s()(this,"name",void 0),s()(this,"content",void 0),s()(this,"edit",void 0),s()(this,"paymentMethodId",void 0),s()(this,"supports",void 0),s()(this,"canMakePaymentFromConfig",void 0),y.assertValidConfig(e),this.name=e.name,this.content=e.content,this.edit=e.edit,this.paymentMethodId=e.paymentMethodId||this.name,this.supports={features:(null==e||null===(t=e.supports)||void 0===t?void 0:t.features)||["products"]},this.canMakePaymentFromConfig=e.canMakePayment}get canMakePayment(){return p(this.canMakePaymentFromConfig,this.supports.features,this.name)}}s()(y,"assertValidConfig",e=>{var t,o;if(m(e,["name","content","edit"]),"string"!=typeof e.name)throw new TypeError("The name property for the express payment method must be a string");if("string"!=typeof e.paymentMethodId&&void 0!==e.paymentMethodId)throw new Error("The paymentMethodId property for the payment method must be a string or undefined (in which case it will be the value of the name property).");if(void 0!==(null===(t=e.supports)||void 0===t?void 0:t.features)&&!Array.isArray(null===(o=e.supports)||void 0===o?void 0:o.features))throw new Error("The features property for the payment method must be an array or undefined.");if(d(e.content,"content"),d(e.edit,"edit"),"function"!=typeof e.canMakePayment)throw new TypeError("The canMakePayment property for the express payment method must be a function.")});var v=o(5);const b={},g={},w=e=>{let t;"function"==typeof e?(t=e(f),r()("Passing a callback to registerPaymentMethod()",{alternative:"a config options object",plugin:"woocommerce-gutenberg-products-block",link:"https://github.com/woocommerce/woocommerce-gutenberg-products-block/pull/3404"})):t=new f(e),t instanceof f&&(b[t.name]=t)},k=e=>{let t;"function"==typeof e?(t=e(y),r()("Passing a callback to registerExpressPaymentMethod()",{alternative:"a config options object",plugin:"woocommerce-gutenberg-products-block",link:"https://github.com/woocommerce/woocommerce-gutenberg-products-block/pull/3404"})):t=new y(e),t instanceof y&&(g[t.name]=t)},M=(e,t)=>{c[e]?console.error(`The namespace provided to registerPaymentMethodExtensionCallbacks must be unique. Callbacks have already been registered for the ${e} namespace.`):(c[e]={},Object.entries(t).forEach(t=>{let[o,n]=t;"function"==typeof n?c[e][o]=n:console.error(`All callbacks provided to registerPaymentMethodExtensionCallbacks must be functions. The callback for the ${o} payment method in the ${e} namespace was not a function.`)}))},x=e=>{delete b[e];const{__internalRemoveAvailablePaymentMethod:t}=Object(i.dispatch)(v.b);t(e)},P=e=>{delete g[e];const{__internalRemoveAvailableExpressPaymentMethod:t}=Object(i.dispatch)(v.b);t(e)},E=()=>b,T=()=>g,C={};function O(e){return{..."object"==typeof C[e]&&Object.keys(C[e]).length>0?C[e]:{},...C.any}}function S(e){return r()("getRegisteredInnerBlocks",{version:"2.8.0",alternative:"getRegisteredBlockComponents",plugin:"WooCommerce Blocks"}),O(e)}function _(e){e.context||(e.context="any"),j(e,"context","string"),j(e,"blockName","string"),I(e,"component");const{context:t,blockName:o,component:n}=e;C[t]||(C[t]={}),C[t][o]=n}const I=(e,t)=>{if(e[t]){if("function"==typeof e[t])return;if(e[t].$$typeof&&e[t].$$typeof===Symbol.for("react.lazy"))return}throw new Error(`Incorrect value for the ${t} argument when registering a block component. Component must be a valid React Element or Lazy callback.`)},j=(e,t,o)=>{const n=typeof e[t];if(n!==o)throw new Error(`Incorrect value for the ${t} argument when registering a block component. It was a ${n}, but must be a ${o}.`)};function R(e){r()("registerInnerBlock",{version:"2.8.0",alternative:"registerBlockComponent",plugin:"WooCommerce Blocks",hint:'"main" has been replaced with "context" and is now optional.'}),j(e,"main","string"),_({...e,context:e.main})}},2:function(e,t){e.exports=window.wp.data},28:function(e,t){function o(t){return e.exports=o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,o(t)}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports},36:function(e,t,o){var n=o(28).default,r=o(37);e.exports=function(e){var t=r(e,"string");return"symbol"===n(t)?t:String(t)},e.exports.__esModule=!0,e.exports.default=e.exports},37:function(e,t,o){var n=o(28).default;e.exports=function(e,t){if("object"!==n(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var r=o.call(e,t||"default");if("object"!==n(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},5:function(e,t,o){"use strict";o.d(t,"b",(function(){return n})),o.d(t,"a",(function(){return r}));const n="wc/store/payment";let r;!function(e){e.IDLE="idle",e.EXPRESS_STARTED="express_started",e.PROCESSING="processing",e.READY="ready",e.ERROR="has_error"}(r||(r={}))},6:function(e,t){e.exports=window.wp.deprecated}});