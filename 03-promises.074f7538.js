var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},n=e.parcelRequire7bc7;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return o[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){t[e]=o},e.parcelRequire7bc7=n);var i=n("iQIUW");const r=document.querySelector(".form");function l(e,o){return new Promise(((t,n)=>{setTimeout((()=>{Math.random()>.3&&t({position:e,delay:o}),n({position:e,delay:o})}),o)}))}r.addEventListener("submit",(function(e){e.preventDefault();const o=new FormData(r),t={};for(const[e,n]of o.entries())t[e]=Number(n);for(let e=1;e<=t.amount;e+=1)l(e,t.delay).then((({position:e,delay:o})=>{i.Notify.success(`Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{i.Notify.failure(`Rejected promise ${e} in ${o}ms`)})),t.delay+=t.step;r.reset()}));
//# sourceMappingURL=03-promises.074f7538.js.map