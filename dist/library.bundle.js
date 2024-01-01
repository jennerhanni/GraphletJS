(()=>{var t={579:(t,e,n)=>{"use strict";function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){var o,i,a,l;o=t,i=e,a=n[e],l=function(t,e){if("object"!=r(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!=r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i),(i="symbol"==r(l)?l:String(l))in o?Object.defineProperty(o,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):o[i]=a})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var a=n(869).initLabelNode;function l(){return console.log("GraphletJS v0.0.1"),"GraphletJS v0.0.1"}function c(t,e){var n,r;do{n="";for(var o=0;o<e;o++)n+=Math.floor(16*Math.random()).toString(16);r=!t.some((function(t){return t.id===n}))}while(!r);return console.log("getRandomToken",e,n),n}function u(t,e){return console.log("getListOfLabels",t,e),t&&t.length>0?"id"===e?t.filter((function(t){return"Label"===t.label})).map((function(t){return t.label})):"obj"===e?t.filter((function(t){return"Label"===t.label})):[]:[]}window.aboutGraphletJS=l,window.getRandomToken=c,window.getListOfLabels=u;var s=function(){console.log("getDateObjects");var t=new Date,e=t.getFullYear(),n=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0"),o=String(t.getHours()).padStart(2,"0"),i=String(t.getMinutes()).padStart(2,"0");return"".concat(e).concat(n).concat(r).concat(o).concat(i)};function b(){return[a]}function d(t,e){var n=Object.assign({},t.find((function(t){return"Label"===t.label&&t.strLabel===e})));return n||((n=a()).id=c(t,12),n.label="Label",n.date=s()),console.log("initNode",n),n}function f(t,e,n,r){return r?[Object.assign({},t.find((function(t){return t[e]===n})))]:[Object.assign({},t.filter((function(t){return t[e]===n})))]}window.initList=b,window.initNode=d,window.getNodeByKeyPairs=function(t,e,n){console.log("getNodeByKeyPairs",e,n);var r=t.filter((function(t){return e.every((function(e){return t[e.key]===e.value}))}));return console.log(r),n?r[0]:r},window.getNodeByKeyPair=f,t.exports={aboutGraphletJS:l,getRandomToken:c,getListOfLabels:u,getDateObjects:s,initList:b,initNode:d,getNodeByKeyPair:f,addNode:function(t,e){var n=f(t,"id",e.id,!0)[0];return console.log("id exists",n),n&&Object.keys(n).length>0?{data:t,msg:"ID_EXISTS"}:""===e.id?{data:t,msg:"ID_CANNOT_BE_AN_EMPTY_STRING"}:(t.push(e),console.log("nodes with added",t),{data:t,msg:"SUCCESS"})},removeNode:function(t,e){return{data:t=t.filter((function(t){return t!==e})),msg:"SUCCESS"}},updateNode:function(t,e){return t.map((function(t){return t===e?i(i({},t),e):t}))},validateListContent:function(t){var e=t.every((function(t){return t&&"object"===r(t)}));return{data:e,msg:e?"Valid list content.":"Invalid list content. List must contain only node objects."}},validateList:function(t){return arguments.length>1&&void 0!==arguments[1]&&arguments[1]?fixedNodes:t}}},869:t=>{var e=[{id:"aaa",label:"Label",date:"202312311822",strLabel:"Label",strLabelDesc:"The basic building block of the database."},{id:"bbb",label:"Label",date:"202312311828",strLabel:"Topic",strLabelDesc:"A tag, keyword, topic, subject, person, place, etc by which other nodes can be linked.",strText:""},{id:"ccc",label:"Topic",date:"202312210727",strText:"History"}];window.validNodes=e,t.exports={initLabelNode:{id:"aaa",label:"Label",date:"202312311822",strLabel:"Label",strLabelDesc:"The basic building block of the database."},validNodes:e}}},e={};!function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}(579)})();