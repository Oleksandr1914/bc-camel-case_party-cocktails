function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},i={},r=n.parcelRequiree172;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){i[e]=t},n.parcelRequiree172=r),r.register("kyEFX",(function(t,n){var o,i;e(t.exports,"register",(function(){return o}),(function(e){return o=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var r={};o=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)r[t[n]]=e[t[n]]},i=function(e){var t=r[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),r("kyEFX").register(JSON.parse('{"7096b":"cocktails.9f1fbbd6.js","8sfzT":"sprite.5183386b.svg"}'));const l=document.querySelector(".menu__icon"),s=document.querySelector(".menu__content");l.addEventListener("click",(()=>{document.body.classList.toggle("_lock"),l.classList.toggle("_active"),s.classList.toggle("_active")})),window.onscroll=function(){window.pageYOffset>d?c.classList.add("sticky"):c.classList.remove("sticky"),document.body.scrollTop>300||document.documentElement.scrollTop>300?document.getElementById("up").classList.remove("d-none"):document.getElementById("up").classList.add("d-none")};const c=document.querySelector("header"),d=c.offsetTop;const a=document.querySelector("#desktopSwitcher"),u=document.querySelector("#mobileSwitcher"),m=e=>{document.querySelector("body").setAttribute("class",`${e}`),localStorage.setItem("myTheme",e)};null===localStorage.getItem("myTheme")||"light"===localStorage.getItem("myTheme")?(m("light"),u.checked=!1,a.checked=!1):"dark"===localStorage.getItem("myTheme")&&(m("dark"),u.checked=!0,a.checked=!0),u.addEventListener("click",(()=>{m(u.checked?"dark":"light")})),a.addEventListener("click",(()=>{m(a.checked?"dark":"light")}));const g=document.querySelector(".modal__close[ingredients-close]"),_=document.querySelector(".backdrop-ingredients");function f(){document.querySelector(".mob-ing").innerHTML='\n          <div class="modal-ingredients">\n          <button type="button" class="modal__close" ingredients-close>\n          <svg class="modal-icon-close" width="32" Height="32">\n            <use href="/sprite.6e20b4c5.svg#icon-close"></use>\n          </svg>\n        </button></div>';document.querySelector("[data-modal=modal]").classList.add("is-hidden-ing")}function p(e){const t=e.target.innerText.slice(2).toLowerCase();fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${t}`).then((e=>e.json())).then((e=>{const t=e.ingredients[0];let n=t.strType,o=t.strABV,i=t.strDescription;n||(n=""),o||(o=0),i||(i="");const r=JSON.stringify({type:n,alko:o,text:i,ingredient:t.strIngredient}),l=`<div>\n          <div class="modal-ingredients__border">\n            <h1 class="modal-ingredients__title">${t.strIngredient}</h1>\n            <h2 class="modal-ingredients__inst">${n}</h2>\n          </div>\n\n          <p class="modal-ingredients__text">${i}</p>\n        </div>\n\n        <ul class="modal-ingredients__ing-all">\n          <li>\n            <a href="#" class="modal-ingredients__ing-input">\n              <span class="modal-ingredients-star">✶</span> Type:${n}\n            </a>\n          </li>\n          <li>\n            <a href="#" class="modal-ingredients__ing-input">\n              <span class="modal-ingredients-star">✶</span> Alcohol by volume:\n              ${o}%\n            </a>\n          </li>\n        </ul>\n\n        <button type="submit" data-ingredient=${r} class="modal-ingredients__button-add">\n          Add to favorite\n        </button>`;document.querySelector(".modal-ingredients").insertAdjacentHTML("beforeend",l),document.querySelector(".modal__close[ingredients-close]").addEventListener("click",f),document.querySelector(".modal-ingredients__button-add").addEventListener("click",v)}))}function v(e){console.dir(e.target);let{classList:t,dataset:n}=e.target;if(console.log(n),!t.contains("modal-ingredients__button-add"))return;t.toggle("modal-ingredients__button-remove"),e.target.textContent=t.contains("modal-ingredients__button-remove")?"remove":"Add to favorite",console.log(n.ingredient);const o=JSON.parse(localStorage.getItem("Ingredients"))||[],i=JSON.parse(n.ingredient);t.contains("modal-ingredients__button-remove")?localStorage.setItem("Ingredients",JSON.stringify([...o,i])):localStorage.setItem("Ingredients",JSON.stringify(o.filter((e=>e.id!==i.id))))}g.addEventListener("click",f),_.addEventListener("click",(function(e){e.currentTarget===e.target&&f()}));var h;function y(e){if("Learn more"==e.target.textContent){document.querySelector(".backdrop").classList.remove("is-hidden"),document.body.classList.toggle("_lock");const t=e.path[2].childNodes[3].attributes[1].ownerElement.innerText;fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${t}`).then((e=>e.json())).then((e=>{const t=Object.keys(e.drinks[0]).filter((t=>t.includes("strIngredient")&&e.drinks[0][t])).map((t=>`<li>\n                <a href="#" class="modal__ing-input">\n                  <span class="modal-star">✶</span> ${e.drinks[0][t]}\n                </a>\n              </li>`)).join("");document.querySelector(".modal-flex").innerHTML=`\n          <h1 class="modal__title">${e.drinks[0].strDrink}</h1>\n\n          <div class="modal-order">\n            <h2 class="modal__inst">INSTRACTIONS:</h2>\n            <p class="modal__text">${e.drinks[0].strInstructions}</p>\n          </div>\n          <div>\n            <img src=${e.drinks[0].strDrinkThumb} class="modal__img" />\n          </div>\n\n          <div class="modal__block-ing">\n            <h1 class="modal__title-tablet">${e.drinks[0].strDrink}</h1>\n            <h2 class="modal__ing">INGREDIENTS</h2>\n            <p class="modal__per-cocktail">Per cocktail</p>\n\n            <ul class="modal__ing-all">\n              ${t}\n            </ul>\n          </div>\n        </div>\n        `,document.querySelector(".modal__ing-all").addEventListener("click",q),document.querySelector(".modal-icon-close").addEventListener("click",b,{once:!0}),document.querySelector(".btn-remove-fav").addEventListener("click",k)})),S.hidden.addEventListener("click",L)}}function k(e){const t="favorite-cocktail",n=JSON.parse(localStorage.getItem(t))||[],o=e.path[1].querySelector(".modal-flex").querySelector("h1").textContent.replaceAll(" ","_");localStorage.setItem(t,JSON.stringify(n.filter((e=>e.text!==o)))),w()}h=new URL(r("kyEFX").resolve("8sfzT"),import.meta.url).toString(),console.dir(t(h));const S={buttonCloseCocktails:document.querySelector(".modal__close"),hidden:document.querySelector(".backdrop"),callModalIng:document.querySelector(".modal__ing-all")};function b(e){document.querySelector("[data-modal=modal-cocktails]").classList.add("is-hidden"),document.body.classList.remove("_lock")}function L(e){e.currentTarget===e.target&&(b(),document.body.classList.remove("_lock"))}function q(e){document.querySelector("[data-modal=modal]").classList.remove("is-hidden-ing"),p(e)}function w(){const e=JSON.parse(localStorage.getItem("favorite-cocktail"))||[];document.querySelector(".coctails__list").innerHTML=e.map((e=>`<div class="cocktails__card">\n                <div>\n                    <img width="280" class="cocktails__img" src=${e.src} alt= ${e.alt.replaceAll("_"," ")} />\n                    </div>\n                    <p class="cocktail-info" data-cocktailID=${e.id}>\n                        ${e.text.replaceAll("_"," ")}</p>\n                    <div class="button-wrapper">\n                    <button class="btn-lm" type="button">Learn more</button>\n                    <button class="btn-remove" type="button">remove</button>\n                  </div>\n                </div>`)).join(""),document.querySelector(".coctails__list").addEventListener("click",(e=>{"Learn more"===e.target.textContent?y(e):"remove"===e.target.textContent&&function(e){const t="favorite-cocktail",n=JSON.parse(localStorage.getItem(t))||[],o=e.path[2].childNodes[3].innerText.replaceAll(" ","_");localStorage.setItem(t,JSON.stringify(n.filter((e=>e.text!==o)))),w()}(e)})),document.querySelector(".favorite__text").classList.contains("is-hidden-title")||document.querySelector(".favorite__text").classList.add("is-hidden-title")}w();
//# sourceMappingURL=cocktails.9f1fbbd6.js.map
