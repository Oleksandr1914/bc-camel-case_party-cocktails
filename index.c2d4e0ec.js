!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},a={},l=t.parcelRequiree172;null==l&&((l=function(e){if(e in i)return i[e].exports;if(e in a){var t=a[e];delete a[e];var l={id:e,exports:{}};return i[e]=l,t.call(l.exports,l,l.exports),l.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){a[e]=t},t.parcelRequiree172=l),l.register("5k7tO",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}}));var n=document.querySelector(".menu__icon"),s=document.querySelector(".menu__content");n.addEventListener("click",(function(){document.body.classList.toggle("_lock"),n.classList.toggle("_active"),s.classList.toggle("_active")})),window.onscroll=function(){window.pageYOffset>r?o.classList.add("sticky"):o.classList.remove("sticky")};var o=document.querySelector("header"),r=o.offsetTop;var c={};Object.defineProperty(c,"__esModule",{value:!0}),c.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var d={};Object.defineProperty(d,"__esModule",{value:!0}),d.default=function(e,t,i){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return i};var u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e,t){f.default(e,t),t.add(e)};var v,f=(v=l("5k7tO"))&&v.__esModule?v:{default:v};var h={};function p(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}Object.defineProperty(h,"__esModule",{value:!0}),h.default=function(e,t,i){t&&p(e.prototype,t);i&&p(e,i);return e};var y=new WeakSet,_=new WeakSet;function w(){var e=this.options,t=e.placeholder,i=e.data;this.$el.classList.add("select"),this.$el.innerHTML=function(){var e=arguments.length>1?arguments[1]:void 0,t=arguments.length>2?arguments[2]:void 0,i=null!=e?e:"Placeholder по умолчанию",a=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).map((function(e){var a="";return e.id===t&&(i=e.value,a="selected"),'\n      <li class="select__item '.concat(a,'" data-type="item" data-id="').concat(e.id,'">').concat(e.value,"</li>\n    ")}));return'\n    <div class="select__backdrop" data-type="backdrop"></div>\n    <div class="select__input" data-type="input">\n      <span data-type="value">'.concat(i,'</span>\n      <i class="fa fa-chevron-down" data-type="arrow"></i>\n    </div>\n    <div class="select__dropdown">\n      <ul class="select__list">\n        ').concat(a.join(""),"\n      </ul>\n    </div>\n  ")}(i,t,this.selectedId)}function g(){this.clickHandler=this.clickHandler.bind(this),this.$el.addEventListener("click",this.clickHandler),this.$arrow=this.$el.querySelector('[data-type="arrow"]'),this.$value=this.$el.querySelector('[data-type="value"]')}new(function(){"use strict";function t(i,a){e(c)(this,t),e(u)(this,y),e(u)(this,_),this.$el=document.querySelector(i),this.options=a,this.selectedId=a.selectedId,e(d)(this,y,w).call(this),e(d)(this,_,g).call(this)}return e(h)(t,[{key:"clickHandler",value:function(e){var t=e.target.dataset.type;if("input"===t)this.toggle();else if("item"===t){var i=e.target.dataset.id;this.select(i)}else"backdrop"===t&&this.close()}},{key:"isOpen",get:function(){return this.$el.classList.contains("open")}},{key:"current",get:function(){var e=this;return this.options.data.find((function(t){return t.id===e.selectedId}))}},{key:"select",value:function(e){this.selectedId=e,this.$value.textContent=this.current.value,this.$el.querySelectorAll('[data-type="item"]').forEach((function(e){e.classList.remove("selected")})),this.$el.querySelector('[data-id="'.concat(e,'"]')).classList.add("selected"),this.options.onSelect&&this.options.onSelect(this.current),this.close()}},{key:"toggle",value:function(){this.isOpen?this.close():this.open()}},{key:"open",value:function(){this.$el.classList.add("open"),this.$arrow.classList.remove("fa-chevron-down"),this.$arrow.classList.add("fa-chevron-up")}},{key:"close",value:function(){this.$el.classList.remove("open"),this.$arrow.classList.add("fa-chevron-down"),this.$arrow.classList.remove("fa-chevron-up")}},{key:"destroy",value:function(){this.$el.removeEventListener("click",this.clickHandler),this.$el.innerHTML=""}}]),t}())("#select",{placeholder:"A",data:[{id:"1",value:"A"},{id:"2",value:"B"},{id:"3",value:"C"},{id:"5",value:"D"},{id:"6",value:"E"},{id:"7",value:"F"},{id:"8",value:"G"},{id:"9",value:"H"},{id:"10",value:"I"},{id:"11",value:"J"},{id:"12",value:"K"},{id:"13",value:"L"},{id:"14",value:"M"},{id:"15",value:"N"},{id:"16",value:"O"},{id:"17",value:"P"},{id:"18",value:"Q"},{id:"19",value:"R"},{id:"20",value:"S"},{id:"21",value:"T"},{id:"22",value:"U"},{id:"23",value:"V"},{id:"24",value:"W"},{id:"25",value:"X"},{id:"26",value:"Y"},{id:"27",value:"Z"},{id:"28",value:"1"},{id:"29",value:"2"},{id:"30",value:"3"},{id:"31",value:"4"},{id:"32",value:"5"},{id:"33",value:"6"},{id:"34",value:"7"},{id:"35",value:"8"},{id:"36",value:"9"},{id:"37",value:"0"}],onSelect:function(e){console.log("Selected Item",e)}})}();
//# sourceMappingURL=index.c2d4e0ec.js.map
