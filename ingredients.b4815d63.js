!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=e.parcelRequiree172;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,o.call(n.exports,n,n.exports),n.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){r[e]=t},e.parcelRequiree172=o),o.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return n.default(e)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}}));var n=document.querySelector(".menu__icon"),c=document.querySelector(".menu__content");n.addEventListener("click",(function(){document.body.classList.toggle("_lock"),n.classList.toggle("_active"),c.classList.toggle("_active")})),window.onscroll=function(){window.pageYOffset>i?l.classList.add("sticky"):l.classList.remove("sticky"),document.body.scrollTop>300||document.documentElement.scrollTop>300?document.getElementById("up").classList.remove("d-none"):document.getElementById("up").classList.add("d-none")};var l=document.querySelector("header"),i=l.offsetTop;var u=document.querySelector("#desktopSwitcher"),d=document.querySelector("#mobileSwitcher"),s=function(e){document.querySelector("body").setAttribute("class","".concat(e)),localStorage.setItem("myTheme",e)};null===localStorage.getItem("myTheme")||"light"===localStorage.getItem("myTheme")?(s("light"),d.checked=!1,u.checked=!1):"dark"===localStorage.getItem("myTheme")&&(s("dark"),d.checked=!0,u.checked=!0),d.addEventListener("click",(function(){s(d.checked?"dark":"light")})),u.addEventListener("click",(function(){s(u.checked?"dark":"light")}));var a={};Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return f.default(e)||m.default(e)||p.default(e)||g.default()};var f=y(o("kMC0W")),m=y(o("7AJDX")),g=y(o("8CtQK")),p=y(o("auk6i"));function y(e){return e&&e.__esModule?e:{default:e}}var v=document.querySelector(".modal__close[ingredients-close]"),_=document.querySelector(".backdrop-ingredients");function b(){document.querySelector(".mob-ing").innerHTML='\n          <div class="modal-ingredients">\n          <button type="button" class="modal__close" ingredients-close>\n          <svg class="modal-icon-close" width="32" Height="32">\n            <use href="/sprite.6e20b4c5.svg#icon-close"></use>\n          </svg>\n        </button></div>',document.querySelector("[data-modal=modal]").classList.add("is-hidden-ing")}v.addEventListener("click",b),_.addEventListener("click",(function(e){e.currentTarget===e.target&&b()}))}();
//# sourceMappingURL=ingredients.b4815d63.js.map
