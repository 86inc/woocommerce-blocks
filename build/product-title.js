(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[47],{121:function(e,t,n){"use strict";var c=n(7),a=n.n(c),r=n(0),o=n(11),l=n(4),s=n.n(l);n(183),t.a=e=>{let{className:t="",disabled:n=!1,name:c,permalink:l="",target:i,rel:u,style:d,onClick:b,...p}=e;const m=s()("wc-block-components-product-name",t);if(n){const e=p;return Object(r.createElement)("span",a()({className:m},e,{dangerouslySetInnerHTML:{__html:Object(o.decodeEntities)(c)}}))}return Object(r.createElement)("a",a()({className:m,href:l,target:i},p,{dangerouslySetInnerHTML:{__html:Object(o.decodeEntities)(c)},style:d}))}},183:function(e,t){},217:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var c=n(0),a=n(4),r=n.n(a),o=n(25),l=n(86),s=n(48),i=n(121),u=n(97),d=n(85);n(277);const b=e=>{let{children:t,headingLevel:n,elementType:a="h"+n,...r}=e;return Object(c.createElement)(a,r,t)},p=e=>{const{className:t,headingLevel:n=2,showProductLink:a=!0,linkTarget:s,align:p}=e,m=Object(d.a)(e),{parentClassName:k}=Object(o.useInnerBlockLayoutContext)(),{product:j}=Object(o.useProductDataContext)(),{dispatchStoreEvent:O}=Object(u.a)();return j.id?Object(c.createElement)(b,{headingLevel:n,className:r()(t,m.className,"wc-block-components-product-title",{[k+"__product-title"]:k,["wc-block-components-product-title--align-"+p]:p&&Object(l.b)()}),style:Object(l.b)()?m.style:{}},Object(c.createElement)(i.a,{disabled:!a,name:j.name,permalink:j.permalink,target:s,onClick:()=>{O("product-view-link",{product:j})}})):Object(c.createElement)(b,{headingLevel:n,className:r()(t,m.className,"wc-block-components-product-title",{[k+"__product-title"]:k,["wc-block-components-product-title--align-"+p]:p&&Object(l.b)()}),style:Object(l.b)()?m.style:{}})};t.b=Object(s.withProductDataContext)(p)},277:function(e,t){},345:function(e,t,n){"use strict";var c=n(86);let a={headingLevel:{type:"number",default:2},showProductLink:{type:"boolean",default:!0},linkTarget:{type:"string"},productId:{type:"number",default:0}};Object(c.b)()&&(a={...a,align:{type:"string"}}),t.a=a},653:function(e,t,n){"use strict";n.r(t);var c=n(48),a=n(217),r=n(345);t.default=Object(c.withFilteredAttributes)(r.a)(a.b)},86:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return l}));var c=n(8),a=n(18);const r=(e,t)=>{if(a.o>2)return Object(c.registerBlockType)(e,t)},o=()=>a.o>2,l=()=>a.o>1}}]);