!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){n(1),n(2),n(3),n(4),n(5),n(6),n(7);var r=Array.prototype.slice.call(document.getElementsByClassName("slider")[0].querySelectorAll(".slider__item"));if(r.length>1){var o=0,i="state_invisible";window.setInterval(function(){var e=o+1;e>=r.length&&(e=0),r.forEach(function(t,n){e===n?t.classList.remove(i):t.classList.add(i)}),o=e},5e3)}},function(e,t,n){e.exports=n.p+"index.html"},function(e,t,n){e.exports=n.p+"documentation/index.html"},function(e,t,n){e.exports=n.p+"projects/index.html"},function(e,t,n){e.exports=n.p+"community/index.html"},function(e,t,n){e.exports=n.p+"guidelines/index.html"},function(e,t,n){e.exports=n.p+"releases/index.html"},function(e,t,n){e.exports=n.p+"ga_disclaimer/index.html"}]);
//# sourceMappingURL=core.js.map