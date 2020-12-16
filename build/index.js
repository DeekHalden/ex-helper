/*!
 * 
 *   ex-helper v1.0.0
 *   https://github.com/DeekHalden/ex-helper
 *
 *   Copyright (c) Dmytro Kulikov (https://github.com/DeekHalden)
 *
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 *
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.exHelper=t():e.exHelper=t()}(self,(function(){return(()=>{var e={33:()=>{window.ex||(window.ex={},window.ex.customer={}),window.ex.customer.waitForExist=function(e,t){var o=setInterval((function(){e.every((function(e){return"string"==typeof e?document.querySelector(e):"function"==typeof e?e():void 0}))&&(t(),clearInterval(o),o=null)}),50);setTimeout((function(){if(o)throw clearInterval(o),"Some of required elements do not exist"}),15e3)}},338:(e,t,o)=>{"use strict";o.r(t);o(33);window.appendTo=function(e,t){if(!e)throw"Container not found - ".concat(e);if(!t)throw"Child node not found - ".concat(t);var o="string"==typeof e?document.querySelector(e):e;return o.appendChild(t),o},window.$$=function(e,t){return t?document.querySelector(e).cloneNode(t):document.querySelector(e)},window.createElement=function(e,t){var o=document.createElement(e);return t.forEach((function(e){o.appendChild(e)})),o},window.addClass=function(e,t){return t.forEach((function(t){return e.classList.add(t)})),e},window.arrayFrom=function(e){return[].slice.call(e)}}},t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={exports:{}};return e[n](r,r.exports,o),r.exports}return o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o(338)})()}));
//# sourceMappingURL=index.js.map