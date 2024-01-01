(()=>{var e={579:(e,t,n)=>{"use strict";function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){var r,i,a,l;r=e,i=t,a=n[t],l=function(e,t){if("object"!=o(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(i),(i="symbol"==o(l)?l:String(l))in r?Object.defineProperty(r,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[i]=a})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var a=n(869).validMinimumList;function l(){console.log("GraphletJS v0.0.1")}function c(e,t){var n,o;do{n="";for(var r=0;r<t;r++)n+=Math.floor(16*Math.random()).toString(16);o=!e.some((function(e){return e.id===n}))}while(!o);return console.log("getRandomToken",t,n),n}function u(){return a}window.aboutGraphlet=l,window.getRandomToken=c,window.initList=u,e.exports={aboutGraphlet:l,getRandomToken:c,validateListContent:function(e){var t=e.every((function(e){return e&&"object"===o(e)}));return{data:t,msg:t?"Valid list content.":"Invalid list content. List must contain only node objects."}},initList:u,initNode:function(e,t){var n=e.find((function(e){return"Label"===e.label&&e.properties.label===t}));return n||(n={label:"Label",properties:{label:t}},e.push(n)),[i({},n.properties)]},getListOfAllLabels:function(e){return e.filter((function(e){return"Label"===e.label})).map((function(e){return e.properties.label}))},validateList:function(e){return arguments.length>1&&void 0!==arguments[1]&&arguments[1]?fixedNodes:e},addNode:function(e,t){return e.push(t),e},removeNode:function(e,t){return e.filter((function(e){return e!==t}))},updateNode:function(e,t){return e.map((function(e){return e===t?i(i({},e),t):e}))}}},869:e=>{var t=[{id:"aaa",label:"Label",date:"202312311822",strLabel:"Label",strLabelDescription:"The basic building block of the database."},{id:"bbb",label:"Label",date:"202312311828",strLabel:"Topic",strLabelDescription:"A tag, keyword, topic, subject, person, place, etc by which other nodes can be linked.",strText:""},{id:"ccc",label:"Topic",date:"202312210727",strText:"History"}];window.validNodes=t,e.exports={validMinimumList:[{id:"aaa",label:"Label",date:"202312311822",strLabel:"Label",strLabelDescription:"The basic building block of the database."}],validNodes:t}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}(()=>{var e=n(579),t=(e.aboutGraphlet,e.initList),o=e.getRandomToken,r={nodes:[],randomToken:""};function i(){var e=document.getElementById("nodesList"),t=document.getElementById("nodeCount"),n=document.getElementById("randomToken");e.innerHTML="",r.nodes.forEach((function(t){var n=document.createElement("li");n.textContent=t.id,e.appendChild(n)})),t&&(t.textContent="Your list has ".concat(r.nodes.length," items")),randomToken&&(n.textContent="Random token: ".concat(r.randomToken))}window.demoInitList=function(){r.nodes=t(),console.log(r.nodes),i()},window.demoGetRandomToken=function(e){r.randomToken=o(r.nodes,e),console.log(r.randomToken),i()}})()})();