!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequiree172;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){n[e]=t},e.parcelRequiree172=r),r.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return o.default(e)};var n,o=(n=r("8NIkP"))&&n.__esModule?n:{default:n}})),r.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}})),r.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),r.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),r.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return o.default(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o.default(e,t)};var n,o=(n=r("8NIkP"))&&n.__esModule?n:{default:n}}));var o=document.querySelector(".menu__icon"),c=document.querySelector(".menu__content");o.addEventListener("click",(function(){document.body.classList.toggle("_lock"),o.classList.toggle("_active"),c.classList.toggle("_active")})),window.onscroll=function(){window.pageYOffset>l?i.classList.add("sticky"):i.classList.remove("sticky"),document.body.scrollTop>300||document.documentElement.scrollTop>300?document.getElementById("up").classList.remove("d-none"):document.getElementById("up").classList.add("d-none")};var i=document.querySelector("header"),l=i.offsetTop;var s=document.querySelector("#desktopSwitcher"),a=document.querySelector("#mobileSwitcher"),d=function(e){document.querySelector("body").setAttribute("class","".concat(e)),localStorage.setItem("myTheme",e)};null===localStorage.getItem("myTheme")||"light"===localStorage.getItem("myTheme")?(d("light"),a.checked=!1,s.checked=!1):"dark"===localStorage.getItem("myTheme")&&(d("dark"),a.checked=!0,s.checked=!0),a.addEventListener("click",(function(){d(a.checked?"dark":"light")})),s.addEventListener("click",(function(){d(s.checked?"dark":"light")}));var u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e){return f.default(e)||m.default(e)||p.default(e)||g.default()};var f=y(r("kMC0W")),m=y(r("7AJDX")),g=y(r("8CtQK")),p=y(r("auk6i"));function y(e){return e&&e.__esModule?e:{default:e}}var _=document.querySelector(".modal__close[ingredients-close]"),v=document.querySelector(".backdrop-ingredients");function b(){document.querySelector(".mob-ing").innerHTML='\n          <div class="modal-ingredients">\n          <button type="button" class="modal__close" ingredients-close>\n          <svg class="modal-icon-close" width="32" Height="32">\n            <use href="/sprite.6e20b4c5.svg#icon-close"></use>\n          </svg>\n        </button></div>',document.querySelector("[data-modal=modal]").classList.add("is-hidden-ing")}_.addEventListener("click",b),v.addEventListener("click",(function(e){e.currentTarget===e.target&&b()}));var h;function k(e){e.target.textContent}h=JSON.parse(localStorage.getItem("Ingredients"))||[],console.log(h),document.querySelector(".ingredient__card-list").innerHTML=h.map((function(e){return'<li class="ingredient__card">\n        <div>\n          <h2 class="ingredient__card-title">'.concat(e.name,'</h2>\n          <p class="ingredient__card-text">').concat(e.nameTwo,'</p>\n          <div class="btn__list">\n            <button type="button" class="btn__learn-more">Learn more</button>\n            <button type="button" class="btn__remove">\n              Remove\n              <svg class="btn__icon" width="21" height="19">\n                <use href="/sprite.6e20b4c5.svg#icon-heart"></use>\n              </svg>\n            </button>\n          </div>\n        </div>\n      </li>')})).join(""),document.querySelector(".ingredient__card-list").addEventListener("click",k)}();
//# sourceMappingURL=ingredients.ddfd8d3f.js.map
