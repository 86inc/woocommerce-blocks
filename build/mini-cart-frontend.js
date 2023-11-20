(()=>{"use strict";const e=({handle:e,src:t,version:n})=>{const o=t.split("?");(null==o?void 0:o.length)>1&&(t=o[0]);const r=`#${e}-js, #${e}-js-prefetch, script[src*="${t}"]`;if(0===document.querySelectorAll(r).length){const o=document.createElement("link");o.href=n?`${t}?ver=${n}`:t,o.rel="preload",o.as="script",o.id=`${e}-js-prefetch`,document.head.appendChild(o)}},t=e=>"string"==typeof e,n=(e,t="")=>{var n,o;if("wc-blocks-registry-js"===e&&"object"==typeof(null===(n=window)||void 0===n||null===(o=n.wc)||void 0===o?void 0:o.wcBlocksRegistry))return!0;const r=t.split("?");(null==r?void 0:r.length)>1&&(t=r[0]);const c=t?`script#${e}, script[src*="${t}"]`:`script#${e}`;return document.querySelectorAll(c).length>0},o=e=>{if(!t(e.id)||n(e.id,null==e?void 0:e.src))return;const o=document.createElement("script");for(const n in e){if(!e.hasOwnProperty(n))continue;const r=n;if("onload"===r||"onerror"===r)continue;const c=e[r];t(c)&&(o[r]=c)}"function"==typeof e.onload&&(o.onload=e.onload),"function"==typeof e.onerror&&(o.onerror=e.onerror),document.body.appendChild(o)},r=({handle:e,src:t,version:r,after:c,before:i,translations:a})=>new Promise(((d,s)=>{n(`${e}-js`,t)&&d(),a&&o({id:`${e}-js-translations`,innerHTML:a}),i&&o({id:`${e}-js-before`,innerHTML:i}),o({id:`${e}-js`,onerror:s,onload:()=>{c&&o({id:`${e}-js-after`,innerHTML:c}),d()},src:r?`${t}?ver=${r}`:t})})),c=window.CustomEvent||null,i=(e,t,n=!1,o=!1)=>{if("function"!=typeof jQuery)return()=>{};const r=()=>{((e,{bubbles:t=!1,cancelable:n=!1,element:o,detail:r={}})=>{if(!c)return;o||(o=document.body);const i=new c(e,{bubbles:t,cancelable:n,detail:r});o.dispatchEvent(i)})(t,{bubbles:n,cancelable:o})};return jQuery(document).on(e,r),()=>jQuery(document).off(e,r)},a=window.wp.i18n,d=window.wc.priceFormat,s=e=>"boolean"==typeof e,l=window.wc.wcSettings;function u(e,t){if(!e)return null;const n=window.getComputedStyle(e)[t];return"rgba(0, 0, 0, 0)"!==n&&"transparent"!==n?n:u(e.parentElement,t)}window.wp.apiFetch;(e=>{if(!e)return;const[t,n]=e,o=(0,l.getSettingWithCoercion)("displayCartPricesIncludingTax",!1,s),r=((e,t)=>{const n=(0,d.getCurrencyFromPriceResponse)(e),o=t?parseInt(e.total_items,10)+parseInt(e.total_items_tax,10):parseInt(e.total_items,10);return(0,d.formatPrice)(o,n)})(t,o),c=document.querySelectorAll(".wc-block-mini-cart"),i=document.querySelectorAll(".wc-block-mini-cart__badge"),u=document.querySelectorAll(".wc-block-mini-cart__amount");c.forEach((e=>{if(!(e instanceof HTMLElement))return;const o=e.querySelector(".wc-block-mini-cart__button");null==o||o.setAttribute("aria-label",e.dataset.hasHiddenPrice?(0,a.sprintf)(/* translators: %s number of products in cart. */
(0,a._n)("%1$d item in cart","%1$d items in cart",n,"woo-gutenberg-products-block"),n):(0,a.sprintf)(/* translators: %1$d is the number of products in the cart. %2$s is the cart total */
(0,a._n)("%1$d item in cart, total price of %2$s","%1$d items in cart, total price of %2$s",n,"woo-gutenberg-products-block"),n,r)),e.dataset.cartTotals=JSON.stringify(t),e.dataset.cartItemsCount=n.toString()})),i.forEach((e=>{(n>0||""!==e.textContent)&&(e.textContent=n.toString())})),u.forEach((e=>{e.textContent=r})),n>0&&document.querySelectorAll(".wc-block-mini-cart__tax-label").forEach((e=>{e.removeAttribute("hidden")}))})((()=>{const e=localStorage.getItem("wc-blocks_mini_cart_totals");if(!e)return;const t=JSON.parse(e);return[t.totals,t.itemsCount]})()),function(){const e=document.createElement("style"),t=getComputedStyle(document.body).backgroundColor,n=document.querySelector(".wc-block-mini-cart__button"),o=u(n,"backgroundColor")||"#fff",r=u(n,"color")||"#000";e.appendChild(document.createTextNode(`:where(.wp-block-woocommerce-mini-cart-contents) {\n\t\t\t\tbackground-color: ${t};\n\t\t\t}\n\t\t\t:where(.wc-block-mini-cart__badge) {\n\t\t\t\tbackground-color: ${r};\n\t\t\t\tcolor: ${o};\n\t\t\t}`)),document.head.appendChild(e)}(),window.addEventListener("load",(()=>{const t=document.querySelectorAll(".wc-block-mini-cart");let n=!1;if(0===t.length)return;const o=window.wcBlocksMiniCartFrontendDependencies;for(const t in o){const n=o[t];e({handle:t,...n})}const c=i("adding_to_cart","wc-blocks_adding_to_cart"),a=i("added_to_cart","wc-blocks_added_to_cart"),d=i("removed_from_cart","wc-blocks_removed_from_cart"),s=async()=>{if(!n){n=!0,document.body.removeEventListener("wc-blocks_adding_to_cart",s),c();for(const e in o){const t=o[e];await r({handle:e,...t})}}};document.body.addEventListener("wc-blocks_adding_to_cart",s),window.addEventListener("pageshow",(e=>{(null!=e&&e.persisted||"back_forward"===(window.performance&&window.performance.getEntriesByType("navigation").length?window.performance.getEntriesByType("navigation")[0].type:""))&&s()})),t.forEach(((e,t)=>{if(!(e instanceof HTMLElement))return;const o=e.querySelector(".wc-block-mini-cart__button"),r=e.querySelector(".wc-block-components-drawer__screen-overlay");if(!o||!r)return;const c=()=>{n||s(),document.body.removeEventListener("wc-blocks_added_to_cart",u),document.body.removeEventListener("wc-blocks_removed_from_cart",l),a(),d()},i=()=>{e.dataset.isInitiallyOpen="true",r.classList.add("wc-block-components-drawer__screen-overlay--with-slide-in"),r.classList.remove("wc-block-components-drawer__screen-overlay--is-hidden"),c()},l=()=>{e.dataset.isInitiallyOpen="false",c()};o.addEventListener("mouseover",s),o.addEventListener("focus",s),o.addEventListener("click",i),s();const u="open_drawer"===e.dataset.addToCartBehaviour?()=>{i()}:l;0===t&&(document.body.addEventListener("wc-blocks_added_to_cart",u),document.body.addEventListener("wc-blocks_removed_from_cart",l))}))}))})();