!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=4)}([function(e,n,t){var o=t(1);"string"==typeof o&&(o=[[e.i,o,""]]);var r={insert:"head",singleton:!1};t(3)(o,r);o.locals&&(e.exports=o.locals)},function(e,n,t){(n=e.exports=t(2)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css?family=Caesar+Dressing&display=swap);",""]),n.push([e.i,"* {\n    margin: 0;\n    box-sizing: border-box;\n    color: white;\n    font-family: Helvetica, sans-serif;\n}\n\n#content {\n    /* background-image: url('../images/IMG_5414.jpg'); */\n    background-size: cover;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    height: 100vh;\n    min-width: 600px;\n}\n\nnav {\n    flex: 1;\n    width: 100vw;\n    min-width: 600px;\n}\n\nnav li:hover {\n    border-bottom: 3px solid white;\n    cursor: pointer;\n}\n\nsection {\n    flex: 4;\n    display: flex;\n    width: 80%;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    border: 10px double rgba(255, 255, 255, 0.5);\n    padding: 10px;\n    margin-top: 50px;\n    background: rgba(255, 255, 255, 0.76)\n}\n\nfooter {\n    flex: 1;\n    align-self: flex-end;\n    display: flex;\n    align-items: flex-end;\n    width: 100vw;\n    max-height: 50px;\n    min-width: 600px;\n    margin-top: 50px;\n    justify-content: center;\n    background:  rgba(24, 124, 58, 0.7);\n}\n\nfooter ul {\n    font-size: 0.75em;\n    text-transform: uppercase;\n    font-style: italic;\n    background: none;\n    \n}\n\nh1 {\n    padding: 20px;\n    font-size: 4em;\n    font-weight: 100;\n    color: rgba(24, 124, 58);\n    text-shadow: 2px 2px 10px black;\n    font-family: 'Caesar Dressing', cursive;\n    text-align: center;\n}\n\nh3 {\n    color: rgba(24, 124, 58);\n    text-decoration: underline;\n    font-size: 1.5em;\n    padding-bottom: 5px;\n    font-family: 'Caesar Dressing', cursive;\n}\n\np {\n    font-size: 1.5em;\n    color: black;\n    margin-bottom: 10px;\n}\n\nbutton {\n    border: 1px solid white;\n    border-radius: 10px;\n    font-size: 1em;\n    padding: 10px;\n    margin: 5px;\n    background: rgba(24, 124, 58, 0.7);\n    width: 150px;\n    align-self: center;\n}\n\nbutton:focus {\n    outline: 0;\n}\n\nbutton:hover {\n    background: rgba(219, 14, 14, 0.7);\n}\n\nul {\n    list-style-type: none;\n    display: flex;\n    justify-content: center;\n    align-items: baseline;\n    font-size: 1.5em;\n    padding: 10px 20px;\n    background: rgba(24, 124, 58, 0.7);\n}\n\nli {\n    display: inline-block;\n    flex: 1;\n    text-align: center;\n    color: white;\n}\n\n#logo {\n    flex: 4;\n    text-align: left;\n    align-items: flex-start;\n    font-family: 'Caesar Dressing', cursive;\n    font-size: 1.5em;\n}\n\n#logo:hover {\n    border-bottom: none;\n}\n\n.form {\n    width: 100%;\n    margin: 0 auto;\n    background: white;\n    text-align: center;\n    color: black;\n    padding: 10px;\n    border: 1px solid  rgba(24, 124, 58, 0.7);\n\n}\n\n.form input, textarea {\n    display: block;\n    padding: 5px;\n    width: 70%;\n    margin: 10px auto;\n}\n\n.form textarea {\n    height: 150px;\n}\n\n.about {\n    width: 90%;\n    display: flex;\n    flex-direction: column;\n}\n\n.center {\n    text-align: center;\n}\n\n.menu {\n    max-height: 200px;\n    font-size: 1em;\n    overflow: scroll;\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n}\n\n.menu p {\n    font-style: italic;\n    margin: 10px;\n}\n\n.menu h3 {\n    margin: 10px;\n    font-size: 1.5em;\n}\n\n.contact {\n    padding: 10px;\n    margin: 10px;\n    height: 300px;\n}\n\n\n.contact p {\n    font-size: 1em;\n    line-height: 1.5em;\n    display: flex;\n    flex-direction: column;\n}",""])},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",o=e[3];if(!o)return t;if(n&&"function"==typeof btoa){var r=(a=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(l," */")),i=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot).concat(e," */")}));return[t].concat(i).concat([r]).join("\n")}var a,c,l;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2],"{").concat(t,"}"):t})).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];null!=i&&(o[i]=!0)}for(var a=0;a<e.length;a++){var c=e[a];null!=c[0]&&o[c[0]]||(t&&!c[2]?c[2]=t:t&&(c[2]="(".concat(c[2],") and (").concat(t,")")),n.push(c))}},n}},function(e,n,t){"use strict";var o,r={},i=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},a=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}();function c(e,n){for(var t=[],o={},r=0;r<e.length;r++){var i=e[r],a=n.base?i[0]+n.base:i[0],c={css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(c):t.push(o[a]={id:a,parts:[c]})}return t}function l(e,n){for(var t=0;t<e.length;t++){var o=e[t],i=r[o.id],a=0;if(i){for(i.refs++;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(g(o.parts[a],n))}else{for(var c=[];a<o.parts.length;a++)c.push(g(o.parts[a],n));r[o.id]={id:o.id,refs:1,parts:c}}}}function s(e){var n=document.createElement("style");if(void 0===e.attributes.nonce){var o=t.nc;o&&(e.attributes.nonce=o)}if(Object.keys(e.attributes).forEach((function(t){n.setAttribute(t,e.attributes[t])})),"function"==typeof e.insert)e.insert(n);else{var r=a(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}return n}var u,d=(u=[],function(e,n){return u[e]=n,u.filter(Boolean).join("\n")});function p(e,n,t,o){var r=t?"":o.css;if(e.styleSheet)e.styleSheet.cssText=d(n,r);else{var i=document.createTextNode(r),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function f(e,n,t){var o=t.css,r=t.media,i=t.sourceMap;if(r&&e.setAttribute("media",r),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var m=null,h=0;function g(e,n){var t,o,r;if(n.singleton){var i=h++;t=m||(m=s(n)),o=p.bind(null,t,i,!1),r=p.bind(null,t,i,!0)}else t=s(n),o=f.bind(null,t,n),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else r()}}e.exports=function(e,n){(n=n||{}).attributes="object"==typeof n.attributes?n.attributes:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=i());var t=c(e,n);return l(t,n),function(e){for(var o=[],i=0;i<t.length;i++){var a=t[i],s=r[a.id];s&&(s.refs--,o.push(s))}e&&l(c(e,n),n);for(var u=0;u<o.length;u++){var d=o[u];if(0===d.refs){for(var p=0;p<d.parts.length;p++)d.parts[p]();delete r[d.id]}}}}},function(e,n,t){"use strict";function o(e,n,t){for(let e=0;e<t.length;e+=1){const o=document.createElement("li");o.textContent=t[e],"Fig Tree"===t[e]?o.setAttribute("id","logo"):o.setAttribute("id",`${t[e]}`),n.appendChild(o)}e.appendChild(n)}function r(e,n){n&&(n.innerHTML=e)}t.r(n);t(0);!function(){const e=document.querySelector("#content"),n=(e.style.backgroundImage="url('https://foodrevolution.org/wp-content/uploads/blog-featured_healthy_foods-20180306.jpg')",document.createElement("nav")),t=document.createElement("section"),i=document.createElement("footer");e.appendChild(n),e.appendChild(t),e.appendChild(i);const a=document.createElement("div");a.setAttribute("class","about"),r("<h1>Welcome to Fig Tree</h1><p>Discover bold new flavors with our delicious & healthy foods made from wholesome, organic ingredients. Straight from the farm to your table.</p><button>Book A Table</button>",a),t.appendChild(a);const c=document.createElement("ul"),l=document.createElement("ul");o(n,c,["Fig Tree","About","Menu","Contact"]),o(i,l,["55 Main St, Nowhere 11111","555-555-5555","Social Media"])}(),document.querySelector("#Contact").addEventListener("click",()=>{!function(){let e=document.querySelector("section");e.textContent="";let n=document.createElement("div");n.setAttribute("class","contact"),r("<h3>Address:</h3><p>55 Main Street</br>Nowhere, NW 11111</p><h3>Phone:</h3><p>555-555-5555</p>",n);let t=document.createElement("div");t.setAttribute("class","form");let o=document.createElement("form"),i=document.createElement("h3");i.textContent="Send us a message!";let a=document.createElement("input");a.placeholder="Your e-mail";let c=document.createElement("textarea");c.placeholder="Your message!";let l=document.createElement("button");l.textContent="Send",o.appendChild(i),o.appendChild(a),o.appendChild(c),o.appendChild(l),t.appendChild(o),e.appendChild(n),e.appendChild(t)}()}),document.querySelector("#logo").addEventListener("click",()=>{!function(){let e=document.querySelector("section");e.textContent="";let n=document.createElement("div");n.setAttribute("class","about"),r("<h1>Welcome to Fig Tree</h1><p>Discover bold new flavors with our delicious & healthy foods made from wholesome, organic ingredients. Straight from the farm to your table.</p><button>Book A Table</button>",n),e.appendChild(n),e.appendChild(div)}()}),document.querySelector("#About").addEventListener("click",()=>{!function(){const e=document.querySelector("section");e.textContent="";const n=document.createElement("div");n.setAttribute("class","about"),r("<h1>About Us</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>",n),e.appendChild(n)}()}),document.querySelector("#Menu").addEventListener("click",()=>{!function(){const e=document.querySelector("section");e.textContent="";const n=document.createElement("div"),t=document.createElement("h1");t.textContent="Fig Tree Menu";const o=document.createElement("div");o.setAttribute("class","menu"),e.appendChild(t),e.appendChild(o),r('<h3>Appetizers</h3><p>Spinach Artichoke Zucchini Bites</p><p>Loaded Greek Hummus</p><p>Brussels Sprouts Sliders</p><h3>Soups & Salads</h3><p>Roasted Butternut Squash</p><p>Spinach and White Bean</p><p>Thai Curry Lentil"</p><h3>Entrees</h3><p>Buddha Bowl</p><p>Pan-Seared Salmon with Kale and Apple Salad</p><p>Orecchiette with Broccoli Rabe Pesto</p><h3>Desserts</h3><p>Mango Tart</p><p>Mochi Ice Cream</p><p>Cookie Dough Cheesecake</p>',o),n.appendChild(t),n.appendChild(o),e.appendChild(n)}()})}]);