function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},s={},o=n.parcelRequiree172;null==o&&((o=function(e){if(e in i)return i[e].exports;if(e in s){var t=s[e];delete s[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){s[e]=t},n.parcelRequiree172=o),o.register("kyEFX",(function(t,n){var i,s;e(t.exports,"register",(function(){return i}),(function(e){return i=e})),e(t.exports,"resolve",(function(){return s}),(function(e){return s=e}));var o={};i=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},s=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o.register("7K24o",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),o("kyEFX").register(JSON.parse('{"5ZPII":"cocktails.c57c7c8c.js","5vMO8":"group-desktop-min.6395c5f2.png"}'));const l=document.querySelector(".menu__icon"),c=document.querySelector(".menu__content");l.addEventListener("click",(()=>{document.body.classList.toggle("_lock"),l.classList.toggle("_active"),c.classList.toggle("_active")})),window.onscroll=function(){window.pageYOffset>r?a.classList.add("sticky"):a.classList.remove("sticky")};const a=document.querySelector("header"),r=a.offsetTop;var d={};Object.defineProperty(d,"__esModule",{value:!0}),d.default=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n};var u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e,t){m.default(e,t),t.add(e)};var h,m=(h=o("7K24o"))&&h.__esModule?h:{default:h};var v=new WeakSet,p=new WeakSet;function _(){const{placeholder:e,data:t}=this.options;this.$el.classList.add("select"),this.$el.innerHTML=((e=[],t,n)=>{let i=null!=t?t:"Placeholder по умолчанию";const s=e.map((e=>{let t="";return e.id===n&&(i=e.value,t="selected"),`\n      <li class="select__item ${t}" data-type="item" data-id="${e.id}">${e.value}</li>\n    `}));return`\n    <div class="select__backdrop" data-type="backdrop"></div>\n    <div class="select__input" data-type="input">\n      <span data-type="value">${i}</span>\n      <i class="fa fa-chevron-down" data-type="arrow"></i>\n    </div>\n    <div class="select__dropdown">\n      <ul class="select__list">\n        ${s.join("")}\n      </ul>\n    </div>\n  `})(t,e,this.selectedId)}function f(){this.clickHandler=this.clickHandler.bind(this),this.$el.addEventListener("click",this.clickHandler),this.$arrow=this.$el.querySelector('[data-type="arrow"]'),this.$value=this.$el.querySelector('[data-type="value"]')}var g;g=new URL(o("kyEFX").resolve("5vMO8"),import.meta.url).toString();const y=document.querySelector(".modal__close[ingredients-close]"),k=document.querySelector(".backdrop-ingredients");function b(){document.querySelector(".mob-ing").innerHTML='\n          <div class="modal-ingredients">\n          <button type="button" class="modal__close" ingredients-close>\n          <svg class="modal-icon-close" width="32" Height="32">\n            <use href="/sprite.6e20b4c5.svg#icon-close"></use>\n          </svg>\n        </button></div>';document.querySelector("[data-modal=modal]").classList.add("is-hidden-ing")}function L(e){const t=e.target.innerText.slice(2).toLowerCase();fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${t}`).then((e=>e.json())).then((e=>{const t=e.ingredients[0];let n=t.strType;n||(n="");let i=t.strABV;i||(i=0);const s=`<div>\n          <div class="modal-ingredients__border">\n            <h1 class="modal-ingredients__title">${t.strIngredient}</h1>\n            <h2 class="modal-ingredients__inst">${n}</h2>\n          </div>\n\n          <p class="modal-ingredients__text">${t.strDescription}</p>\n        </div>\n\n        <ul class="modal-ingredients__ing-all">\n          <li>\n            <a href="#" class="modal-ingredients__ing-input">\n              <span class="modal-ingredients-star">✶</span> Type:${n}\n            </a>\n          </li>\n          <li>\n            <a href="#" class="modal-ingredients__ing-input">\n              <span class="modal-ingredients-star">✶</span> Alcohol by volume:\n              ${i}%\n            </a>\n          </li>\n        </ul>\n\n        <button type="submit" class="modal-ingredients__button-add">\n          Add to favorite\n        </button>`;document.querySelector(".modal-ingredients").insertAdjacentHTML("beforeend",s),document.querySelector(".modal__close[ingredients-close]").addEventListener("click",b)}))}y.addEventListener("click",b),k.addEventListener("click",(function(e){e.currentTarget===e.target&&b()}));const w=document.querySelector("#submit"),S=document.querySelector("#search"),$=(document.querySelector("#random"),document.querySelector("#cocktails"));document.querySelector("#result-heading"),document.querySelector(".btn-lm");w.addEventListener("submit",(e=>{e.preventDefault(),$.innerHTML="";const n=S.value;n.trim()&&(fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${n}`).then((e=>e.json())).then((e=>{null===e.drinks?(document.querySelector(".gallery-title").classList.add("hidden-title"),$.innerHTML=`  <div class="hero__contein container">\n    <p class="hero__contain-text">Sorry, we didn't find any cocktail for you</p>\n\n      <img\n        src=${t(g)}\n        alt="dinner"\n        class="hero__contein-img"\n      />\n  </div>`):(document.querySelector(".gallery-title").classList.remove("hidden-title"),x(e.drinks))})).catch((e=>console.log(e))),S.value="")}));function q(){const e="abcdefghijklmnopqrstvwyz".split("");return e[Math.floor(Math.random()*e.length)]}function T(e){if("Learn more"==e.target.textContent){document.querySelector(".backdrop").classList.remove("is-hidden");const t=e.path[2].childNodes[3].attributes[1].ownerElement.innerText;console.dir(e),fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${t}`).then((e=>e.json())).then((e=>{const t=Object.keys(e.drinks[0]).filter((t=>t.includes("strIngredient")&&e.drinks[0][t])).map((t=>`<li>\n                <a href="#" class="modal__ing-input">\n                  <span class="modal-star">✶</span> ${e.drinks[0][t]}\n                </a>\n              </li>`)).join(""),n=`\n        <div class="modal-flex">\n          <h1 class="modal__title">${e.drinks[0].strDrink}</h1>\n\n          <div class="modal-order">\n            <h2 class="modal__inst">INSTRACTIONS:</h2>\n            <p class="modal__text">${e.drinks[0].strInstructions}</p>\n          </div>\n          <div>\n            <img src=${e.drinks[0].strDrinkThumb} class="modal__img" />\n          </div>\n\n          <div class="modal__block-ing">\n            <h1 class="modal__title-tablet">${e.drinks[0].strDrink}</h1>\n            <h2 class="modal__ing">INGREDIENTS</h2>\n            <p class="modal__per-cocktail">Per cocktail</p>\n\n            <ul class="modal__ing-all">\n              ${t}\n            </ul>\n          </div>\n        </div>\n        <button type="submit" class="modal__button-add">Add to favorite</button>\n      </div>`;document.querySelector(".modal").insertAdjacentHTML("beforeend",n),document.querySelector(".modal__ing-all").addEventListener("click",M),document.querySelector(".modal-icon-close").addEventListener("click",j)})),E.hidden.addEventListener("click",H)}}$.addEventListener("click",(e=>{const t=e.path.find((e=>!!e.classList&&e.classList.contains("cocktail-info")));if(t){const e=t.getAttribute("data-cocktailID");getCocktailById(e)}})),document.querySelector(".hero__box-lists").addEventListener("click",(e=>{const n=[...document.querySelectorAll(".hero__box-letter")].find((e=>e.classList.contains("let"))),i=[...document.querySelectorAll(".hero__box-numb")].find((e=>e.classList.contains("let")));n?n.classList.remove("let"):i&&i.classList.remove("let");const s=e.target;s.classList.add("let");const o=s.textContent;var l;l=o.toLowerCase(),fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${l}`).then((e=>e.json())).then((e=>{null===e.drinks?(document.querySelector(".gallery-title").classList.add("hidden-title"),$.innerHTML=`  <div class="hero__contein container">\n    <p class="hero__contain-text">Sorry, we didn't find any cocktail for you</p>\n\n      <img\n        src=${t(g)}\n        alt="dinner"\n        class="hero__contein-img"\n      />\n  </div>`):(document.querySelector(".gallery-title").classList.remove("hidden-title"),x(e.drinks),document.querySelector(".btn-lm").addEventListener("click",T))})).catch((e=>console.log(e)))})),function(){for(let e=0;e<9;e+=1)fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${q()}`).then((e=>e.json())).then((e=>{const t=`<div class="cocktails__card">\n                <div>\n                    <img width="280" class="cocktails__img" src=${e.drinks[0].strDrinkThumb} alt= ${e.drinks[0].strDrink} />\n                    </div>\n                    <p class="cocktail-info" data-cocktailID=${e.drinks[0].idDrink}>\n                        ${e.drinks[0].strDrink}</p>\n                    <div class="button-wrapper">\n                    <button class="btn-lm" type="button">Learn more</button>\n                    <button class="btn-add" type="button">Add to</button>\n                  </div>\n                </div>`;$.insertAdjacentHTML("beforeend",t),$.addEventListener("click",T)})).catch((e=>console.log(e)))}();const E={buttonCloseCocktails:document.querySelector(".modal__close"),hidden:document.querySelector(".backdrop"),callModalIng:document.querySelector(".modal__ing-all")};function j(e){console.log("mod",document.querySelector(".mod")),document.querySelector(".mod").innerHTML='<div class="modal">\n          <button type="button" class="modal__close" cocktails-close>\n            <svg class="modal-icon-close" width="32" Height="32">\n              <use href="/sprite.6e20b4c5.svg#icon-close"></use>\n            </svg>\n          </button></div>',document.querySelector("[data-modal=modal-cocktails]").classList.add("is-hidden")}function H(e){e.currentTarget===e.target&&j()}function M(e){document.querySelector("[data-modal=modal]").classList.remove("is-hidden-ing"),L(e)}function x(e){const t=document.querySelectorAll(".pagin__item");for(const s of t)i(e),s.addEventListener("click",n);function n(){const t=3*(+this.innerHTML-1),n=t+3,i=e.slice(t,n);$.innerHTML=i.map((e=>`\n                <div class="cocktails__card">\n                <div>\n                    <img width="280" class="cocktails__img" src=${e.strDrinkThumb} alt= ${e.strDrink} />\n                    </div>\n                    <p class="cocktail-info" data-cocktailID=${e.idDrink}>\n                        ${e.strDrink}</p>\n                   \n                    <div class="button-wrapper">\n                    <button class="btn-lm" type="button">Learn more</button>\n                    <button class="btn-add" type="button">Add to</button>\n                  </div>\n                </div>\n                `)).join("")}function i(e){this.innerHTML;const t=e.slice(0,3);$.innerHTML=t.map((e=>`\n                <div class="cocktails__card">\n                <div>\n                    <img width="280" class="cocktails__img" src=${e.strDrinkThumb} alt= ${e.strDrink} />\n                    </div>\n                    <p class="cocktail-info" data-cocktailID=${e.idDrink}>\n                        ${e.strDrink}</p>\n                   \n                    <div class="button-wrapper">\n                    <button class="btn-lm" type="button">Learn more</button>\n                    <button class="btn-add" type="button">Add to</button>\n                  </div>\n                </div>\n                `)).join("")}}new class{clickHandler(e){const{type:t}=e.target.dataset;if("input"===t)this.toggle();else if("item"===t){const t=e.target.dataset.id;this.select(t)}else"backdrop"===t&&this.close()}get isOpen(){return this.$el.classList.contains("open")}get current(){return this.options.data.find((e=>e.id===this.selectedId))}select(e){this.selectedId=e,this.$value.textContent=this.current.value,this.$el.querySelectorAll('[data-type="item"]').forEach((e=>{e.classList.remove("selected")})),this.$el.querySelector(`[data-id="${e}"]`).classList.add("selected"),this.options.onSelect&&this.options.onSelect(this.current),this.close()}toggle(){this.isOpen?this.close():this.open()}open(){this.$el.classList.add("open"),document.querySelector(".hero__blok").style.marginBottom="124px",this.$arrow.classList.remove("fa-chevron-down"),this.$arrow.classList.add("fa-chevron-up")}close(){this.$el.classList.remove("open"),document.querySelector(".hero__blok").style.marginBottom="40px",this.$arrow.classList.add("fa-chevron-down"),this.$arrow.classList.remove("fa-chevron-up")}destroy(){this.$el.removeEventListener("click",this.clickHandler),this.$el.innerHTML=""}constructor(e,n){t(u)(this,v),t(u)(this,p),this.$el=document.querySelector(e),this.options=n,this.selectedId=n.selectedId,t(d)(this,v,_).call(this),t(d)(this,p,f).call(this)}}("#select",{placeholder:"A",data:[{id:"1",value:"A"},{id:"2",value:"B"},{id:"3",value:"C"},{id:"5",value:"D"},{id:"6",value:"E"},{id:"7",value:"F"},{id:"8",value:"G"},{id:"9",value:"H"},{id:"10",value:"I"},{id:"11",value:"J"},{id:"12",value:"K"},{id:"13",value:"L"},{id:"14",value:"M"},{id:"15",value:"N"},{id:"16",value:"O"},{id:"17",value:"P"},{id:"18",value:"Q"},{id:"19",value:"R"},{id:"20",value:"S"},{id:"21",value:"T"},{id:"22",value:"U"},{id:"23",value:"V"},{id:"24",value:"W"},{id:"25",value:"X"},{id:"26",value:"Y"},{id:"27",value:"Z"},{id:"28",value:"1"},{id:"29",value:"2"},{id:"30",value:"3"},{id:"31",value:"4"},{id:"32",value:"5"},{id:"33",value:"6"},{id:"34",value:"7"},{id:"35",value:"8"},{id:"36",value:"9"},{id:"37",value:"0"}],onSelect(e){const n=e.value;var i;i=n.toLowerCase(),fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${i}`).then((e=>e.json())).then((e=>{null===e.drinks?(document.querySelector(".gallery-title").classList.add("hidden-title"),$.innerHTML=`  <div class="hero__contein container">\n    <p class="hero__contain-text">Sorry, we didn't find any cocktail for you</p>\n\n      <img\n        src=${t(g)}\n        alt="dinner"\n        class="hero__contein-img"\n      />\n  </div>`):(console.log(e),document.querySelector(".gallery-title").classList.remove("hidden-title"),x(e.drinks)),document.querySelector(".btn-lm").addEventListener("click",T)})).catch((e=>console.log(e)))}});
//# sourceMappingURL=cocktails.c57c7c8c.js.map
