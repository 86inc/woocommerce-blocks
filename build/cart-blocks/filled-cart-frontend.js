(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[25],{229:function(e,t){},274:function(e,t,s){"use strict";s.d(t,"b",(function(){return l})),s.d(t,"a",(function(){return o}));var a=s(0),c=s(11),n=s(5),i=s.n(n);const r=Object(a.createContext)({hasContainerWidth:!1,containerClassName:"",isMobile:!1,isSmall:!1,isMedium:!1,isLarge:!1}),l=()=>Object(a.useContext)(r),o=e=>{let{children:t,className:s=""}=e;const[n,l]=(()=>{const[e,{width:t}]=Object(c.useResizeObserver)();let s="";return t>700?s="is-large":t>520?s="is-medium":t>400?s="is-small":t&&(s="is-mobile"),[e,s]})(),o={hasContainerWidth:""!==l,containerClassName:l,isMobile:"is-mobile"===l,isSmall:"is-small"===l,isMedium:"is-medium"===l,isLarge:"is-large"===l};return Object(a.createElement)(r.Provider,{value:o},Object(a.createElement)("div",{className:i()(s,l)},n,t))}},279:function(e,t,s){"use strict";var a=s(0),c=s(5),n=s.n(c),i=s(274);s(229),t.a=e=>{let{children:t,className:s}=e;return Object(a.createElement)(i.a,{className:n()("wc-block-components-sidebar-layout",s)},t)}},475:function(e,t,s){"use strict";s.r(t);var a=s(0),c=s(5),n=s.n(c),i=s(279),r=s(72),l=s(169);t.default=e=>{let{children:t,className:s}=e;const{cartItems:c,cartIsLoading:o}=Object(r.a)(),{hasDarkControls:m}=Object(l.b)();return o||c.length>=1?Object(a.createElement)(i.a,{className:n()("wc-block-cart",s,{"has-dark-controls":m})},t):null}}}]);