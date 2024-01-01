(()=>{var e={579:(e,t,n)=>{"use strict";function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){var r,i,a,l;r=e,i=t,a=n[t],l=function(e,t){if("object"!=o(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(i),(i="symbol"==o(l)?l:String(l))in r?Object.defineProperty(r,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[i]=a})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var a=n(869).validMinimumList;function l(){return console.log("GraphletJS v0.0.1"),"GraphletJS v0.0.1"}function c(e,t){var n,o;do{n="";for(var r=0;r<t;r++)n+=Math.floor(16*Math.random()).toString(16);o=!e.some((function(e){return e.id===n}))}while(!o);return console.log("getRandomToken",t,n),n}function d(e,t){return console.log("getListOfLabels",e,t),e&&e.length>0?"id"===t?e.filter((function(e){return"Label"===e.label})).map((function(e){return e.label})):"obj"===t?e.filter((function(e){return"Label"===e.label})):[]:[]}function s(){return a}function u(e,t){var n=e.find((function(e){return"Label"===e.label&&e.properties.label===label}));return n||(n={label:"Label",properties:{label}},e.push(n)),[i({},n.properties)]}function b(e,t,n,o){return o?[e.find((function(e){return e[t]===n}))]:[e.filter((function(e){return e[t]===n}))]}window.aboutGraphletJS=l,window.getRandomToken=c,window.getListOfLabels=d,window.initList=s,window.initNode=u,window.getNodeByKeypair=b,e.exports={aboutGraphletJS:l,getRandomToken:c,getListOfLabels:d,initList:s,initNode:u,getNodeByKeypair:b,addNode:function(e,t){return e.push(t),e},removeNode:function(e,t){return e.filter((function(e){return e!==t}))},updateNode:function(e,t){return e.map((function(e){return e===t?i(i({},e),t):e}))},validateListContent:function(e){var t=e.every((function(e){return e&&"object"===o(e)}));return{data:t,msg:t?"Valid list content.":"Invalid list content. List must contain only node objects."}},validateList:function(e){return arguments.length>1&&void 0!==arguments[1]&&arguments[1]?fixedNodes:e}}},869:e=>{var t=[{id:"aaa",label:"Label",date:"202312311822",strLabel:"Label",strLabelDescription:"The basic building block of the database."},{id:"bbb",label:"Label",date:"202312311828",strLabel:"Topic",strLabelDescription:"A tag, keyword, topic, subject, person, place, etc by which other nodes can be linked.",strText:""},{id:"ccc",label:"Topic",date:"202312210727",strText:"History"}];window.validNodes=t,e.exports={validMinimumList:[{id:"aaa",label:"Label",date:"202312311822",strLabel:"Label",strLabelDescription:"The basic building block of the database."}],validNodes:t}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}(()=>{var e=n(579),t=e.aboutGraphletJS,o=e.initList,r=e.getRandomToken,i=e.getListOfLabels,a=(e.getNodeByKeypair,e.initNode,{nodes:[],randomToken:"",listOfLabels:[],aboutGraphletJS:""});function l(){var e=document.getElementById("aboutGraphletJS"),t=document.getElementById("nodesList"),n=document.getElementById("labelsList"),o=document.getElementById("nodeCount"),r=document.getElementById("randomToken");t.innerHTML="",n.innerHTML="",a.nodes.forEach((function(e){var n=document.createElement("li");n.textContent=e.id,t.appendChild(n)})),o&&(o.textContent="Your list has ".concat(a.nodes.length," items")),e&&(e.textContent="".concat(a.aboutGraphletJS)),randomToken&&(r.textContent="".concat(a.randomToken)),a.listOfLabels.forEach((function(e){var t=document.createElement("li");t.classList.add("labelListItem");var o=document.createElement("span");o.textContent=e,t.appendChild(o);var r=document.createElement("span");r.textContent="➕",t.appendChild(r),t.onclick=function(){!function(e){console.log("demoInitNode",e)}(t.textContent)},n.appendChild(t)}))}window.demoAboutGraphletJS=function(){console.log("demoAboutGraphletJs"),a.aboutGraphletJS=t(),l()},window.demoInitList=function(){a.nodes=o(),console.log("demoInitList",a.nodes),a.listOfLabels=i(a.nodes,"id"),l()},window.demoGetRandomToken=function(e){a.randomToken=r(a.nodes,e),console.log(a.randomToken),l()},window.demoGetListOfLabels=function(e){console.log("demoGetListOfLabels",e),a.listOfLabels=i(a.nodes,e),l()}})()})();