(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[61],{945:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),s=c(4),r=c.n(s),o=c(13),l=c(946),d=c(12),i=c(8),b=c(10),u=c(372);t.default=Object(d.withInstanceId)(e=>{let{text:t,checkbox:c,instanceId:s,className:d}=e;const[m,O]=Object(n.useState)(!1),{isDisabled:h}=Object(l.a)(),E="terms-and-conditions-"+s,{setValidationErrors:_,clearValidationError:j}=Object(i.useDispatch)(b.VALIDATION_STORE_KEY),k=Object(i.useSelect)(e=>e(b.VALIDATION_STORE_KEY).getValidationError(E)),p=!(null==k||!k.message||null!=k&&k.hidden);return Object(n.useEffect)(()=>{if(c)return m?j(E):_({[E]:{message:Object(a.__)("Please read and accept the terms and conditions.","woo-gutenberg-products-block"),hidden:!0}}),()=>{j(E)}},[c,m,E,j,_]),Object(n.createElement)("div",{className:r()("wc-block-checkout__terms",{"wc-block-checkout__terms--disabled":h},d)},c?Object(n.createElement)(n.Fragment,null,Object(n.createElement)(o.CheckboxControl,{id:"terms-and-conditions",checked:m,onChange:()=>O(e=>!e),hasError:p,disabled:h},Object(n.createElement)("span",{dangerouslySetInnerHTML:{__html:t||u.a}}))):Object(n.createElement)("span",{dangerouslySetInnerHTML:{__html:t||u.b}}))})}}]);