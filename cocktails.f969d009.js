!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},c=n.parcelRequiree172;null==c&&((c=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){o[e]=t},n.parcelRequiree172=c),c.register("iE7OH",(function(t,n){var r,o;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var c={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)c[t[n]]=e[t[n]]},o=function(e){var t=c[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),c.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return r.default(e)};var n,r=(n=c("8NIkP"))&&n.__esModule?n:{default:n}})),c.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}})),c.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),c.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),c.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return r.default(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r.default(e,t)};var n,r=(n=c("8NIkP"))&&n.__esModule?n:{default:n}})),c.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var o={};function c(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=o[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return c(e[2])}return"/"}(),o[e]=t),t}})),c("iE7OH").register(JSON.parse('{"ctFO8":"cocktails.f969d009.js","gwbLm":"sprite.5183386b.svg"}'));var i=document.querySelector(".menu__icon"),a=document.querySelector(".menu__content");i.addEventListener("click",(function(){document.body.classList.toggle("_lock"),i.classList.toggle("_active"),a.classList.toggle("_active")})),window.onscroll=function(){window.pageYOffset>s?l.classList.add("sticky"):l.classList.remove("sticky"),document.body.scrollTop>300||document.documentElement.scrollTop>300?document.getElementById("up").classList.remove("d-none"):document.getElementById("up").classList.add("d-none")};var l=document.querySelector("header"),s=l.offsetTop;var d=document.querySelector("#desktopSwitcher"),u=document.querySelector("#mobileSwitcher"),m=function(e){document.querySelector("body").setAttribute("class","".concat(e)),localStorage.setItem("myTheme",e)};null===localStorage.getItem("myTheme")||"light"===localStorage.getItem("myTheme")?(m("light"),u.checked=!1,d.checked=!1):"dark"===localStorage.getItem("myTheme")&&(m("dark"),u.checked=!0,d.checked=!0),u.addEventListener("click",(function(){m(u.checked?"dark":"light")})),d.addEventListener("click",(function(){m(d.checked?"dark":"light")}));var f={};Object.defineProperty(f,"__esModule",{value:!0}),f.default=function(e){return g.default(e)||_.default(e)||v.default(e)||p.default()};var g=h(c("kMC0W")),_=h(c("7AJDX")),p=h(c("8CtQK")),v=h(c("auk6i"));function h(e){return e&&e.__esModule?e:{default:e}}var y=document.querySelector(".modal__close[ingredients-close]"),b=document.querySelector(".backdrop-ingredients"),k="Ingredients";function S(){document.querySelector(".mob-ing").innerHTML='\n          <div class="modal-ingredients">\n          <button type="button" class="modal__close" ingredients-close>\n          <svg class="modal-icon-close" width="32" Height="32">\n            <use href="/sprite.6e20b4c5.svg#icon-close"></use>\n          </svg>\n        </button></div>',document.querySelector("[data-modal=modal]").classList.add("is-hidden-ing")}function L(e){var t=e.target.innerText.slice(2).toLowerCase();fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?i=".concat(t)).then((function(e){return e.json()})).then((function(e){var t=e.ingredients[0],n=t.strType,r=t.strABV,o=t.strDescription;n||(n=""),r||(r=0),o||(o="");var c=JSON.stringify({type:n,alko:r,text:o,ingredient:t.strIngredient}),i='<div>\n          <div class="modal-ingredients__border">\n            <h1 class="modal-ingredients__title">'.concat(t.strIngredient,'</h1>\n            <h2 class="modal-ingredients__inst">').concat(n,'</h2>\n          </div>\n\n          <p class="modal-ingredients__text">').concat(o,'</p>\n        </div>\n\n        <ul class="modal-ingredients__ing-all">\n          <li>\n            <a href="#" class="modal-ingredients__ing-input">\n              <span class="modal-ingredients-star">✶</span> Type:').concat(n,'\n            </a>\n          </li>\n          <li>\n            <a href="#" class="modal-ingredients__ing-input">\n              <span class="modal-ingredients-star">✶</span> Alcohol by volume:\n              ').concat(r,'%\n            </a>\n          </li>\n        </ul>\n\n        <button type="submit" data-ingredient=').concat(c,' class="modal-ingredients__button-add">\n          Add to favorite\n        </button>');document.querySelector(".modal-ingredients").insertAdjacentHTML("beforeend",i),document.querySelector(".modal__close[ingredients-close]").addEventListener("click",S),document.querySelector(".modal-ingredients__button-add").addEventListener("click",x)}))}function x(e){console.dir(e.target);var n=e.target,r=n.classList,o=n.dataset;if(console.log(o),r.contains("modal-ingredients__button-add")){r.toggle("modal-ingredients__button-remove"),e.target.textContent=r.contains("modal-ingredients__button-remove")?"remove":"Add to favorite",console.log(o.ingredient);var c=JSON.parse(localStorage.getItem(k))||[],i=JSON.parse(o.ingredient);r.contains("modal-ingredients__button-remove")?localStorage.setItem(k,JSON.stringify(t(f)(c).concat([i]))):localStorage.setItem(k,JSON.stringify(c.filter((function(e){return e.id!==i.id}))))}}y.addEventListener("click",S),b.addEventListener("click",(function(e){e.currentTarget===e.target&&S()}));var w;function O(e){if("Learn more"==e.target.textContent){document.querySelector(".backdrop").classList.remove("is-hidden"),document.body.classList.toggle("_lock");var t=e.path[2].childNodes[3].attributes[1].ownerElement.innerText;fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=".concat(t)).then((function(e){return e.json()})).then((function(e){var t=Object.keys(e.drinks[0]).filter((function(t){return t.includes("strIngredient")&&e.drinks[0][t]})).map((function(t){return'<li>\n                <a href="#" class="modal__ing-input">\n                  <span class="modal-star">✶</span> '.concat(e.drinks[0][t],"\n                </a>\n              </li>")})).join("");document.querySelector(".modal-flex").innerHTML='\n          <h1 class="modal__title">'.concat(e.drinks[0].strDrink,'</h1>\n\n          <div class="modal-order">\n            <h2 class="modal__inst">INSTRACTIONS:</h2>\n            <p class="modal__text">').concat(e.drinks[0].strInstructions,"</p>\n          </div>\n          <div>\n            <img src=").concat(e.drinks[0].strDrinkThumb,' class="modal__img" />\n          </div>\n\n          <div class="modal__block-ing">\n            <h1 class="modal__title-tablet">').concat(e.drinks[0].strDrink,'</h1>\n            <h2 class="modal__ing">INGREDIENTS</h2>\n            <p class="modal__per-cocktail">Per cocktail</p>\n\n            <ul class="modal__ing-all">\n              ').concat(t,"\n            </ul>\n          </div>\n        </div>\n        "),document.querySelector(".modal__ing-all").addEventListener("click",N),document.querySelector(".modal-icon-close").addEventListener("click",E,{once:!0}),document.querySelector(".btn-remove-fav").addEventListener("click",q)})),I.hidden.addEventListener("click",T)}}function q(e){var t="favorite-cocktail",n=JSON.parse(localStorage.getItem(t))||[],r=e.path[1].querySelector(".modal-flex").querySelector("h1").textContent.replaceAll(" ","_");localStorage.setItem(t,JSON.stringify(n.filter((function(e){return e.text!==r})))),A()}w=c("aNJCr").getBundleURL("ctFO8")+c("iE7OH").resolve("gwbLm"),console.dir(t(w));var I={buttonCloseCocktails:document.querySelector(".modal__close"),hidden:document.querySelector(".backdrop"),callModalIng:document.querySelector(".modal__ing-all")};function E(e){document.querySelector("[data-modal=modal-cocktails]").classList.add("is-hidden"),document.body.classList.remove("_lock")}function T(e){e.currentTarget===e.target&&(E(),document.body.classList.remove("_lock"))}function N(e){document.querySelector("[data-modal=modal]").classList.remove("is-hidden-ing"),L(e)}function A(){var e=JSON.parse(localStorage.getItem("favorite-cocktail"))||[];document.querySelector(".coctails__list").innerHTML=e.map((function(e){return'<div class="cocktails__card">\n                <div>\n                    <img width="280" class="cocktails__img" src='.concat(e.src," alt= ").concat(e.alt.replaceAll("_"," "),' />\n                    </div>\n                    <p class="cocktail-info" data-cocktailID=').concat(e.id,">\n                        ").concat(e.text.replaceAll("_"," "),'</p>\n                    <div class="button-wrapper">\n                    <button class="btn-lm" type="button">Learn more</button>\n                    <button class="btn-remove" type="button">remove</button>\n                  </div>\n                </div>')})).join(""),document.querySelector(".coctails__list").addEventListener("click",(function(e){"Learn more"===e.target.textContent?O(e):"remove"===e.target.textContent&&function(e){var t="favorite-cocktail",n=JSON.parse(localStorage.getItem(t))||[],r=e.path[2].childNodes[3].innerText.replaceAll(" ","_");localStorage.setItem(t,JSON.stringify(n.filter((function(e){return e.text!==r})))),A()}(e)})),document.querySelector(".favorite__text").classList.contains("is-hidden-title")||document.querySelector(".favorite__text").classList.add("is-hidden-title")}A()}();
//# sourceMappingURL=cocktails.f969d009.js.map
