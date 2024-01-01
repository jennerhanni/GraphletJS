(()=>{var e={579:(e,t,n)=>{"use strict";function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){var i,r,a,l;i=e,r=t,a=n[t],l=function(e,t){if("object"!=o(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,"string");if("object"!=o(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r),(r="symbol"==o(l)?l:String(l))in i?Object.defineProperty(i,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):i[r]=a})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var a=n(869).initLabelNode;function l(){return console.log("GraphletJS v0.0.1"),"GraphletJS v0.0.1"}function d(e,t){var n,o;do{n="";for(var i=0;i<t;i++)n+=Math.floor(16*Math.random()).toString(16);o=!e.some((function(e){return e.id===n}))}while(!o);return console.log("getRandomToken",t,n),n}function c(e,t){return console.log("getListOfLabels",e,t),e&&e.length>0?"id"===t?e.filter((function(e){return"Label"===e.label})).map((function(e){return e.label})):"obj"===t?e.filter((function(e){return"Label"===e.label})):[]:[]}window.aboutGraphletJS=l,window.getRandomToken=d,window.getListOfLabels=c;var s=function(){console.log("getDateObjects");var e=new Date,t=e.getFullYear(),n=String(e.getMonth()+1).padStart(2,"0"),o=String(e.getDate()).padStart(2,"0"),i=String(e.getHours()).padStart(2,"0"),r=String(e.getMinutes()).padStart(2,"0");return"".concat(t).concat(n).concat(o).concat(i).concat(r)};function u(){return[a]}function b(e,t){var n=e.find((function(e){return"Label"===e.label&&e.strLabel===t}));return n||((n=a()).id=d(e,12),n.label="Label",n.date=s()),console.log("initNode",n),n}function f(e,t,n,o){return o?[e.find((function(e){return e[t]===n}))]:[e.filter((function(e){return e[t]===n}))]}window.initList=u,window.initNode=b,window.getNodeByKeypair=f,e.exports={aboutGraphletJS:l,getRandomToken:d,getListOfLabels:c,getDateObjects:s,initList:u,initNode:b,getNodeByKeypair:f,addNode:function(e,t){return e.push(t),e},removeNode:function(e,t){return e.filter((function(e){return e!==t}))},updateNode:function(e,t){return e.map((function(e){return e===t?r(r({},e),t):e}))},validateListContent:function(e){var t=e.every((function(e){return e&&"object"===o(e)}));return{data:t,msg:t?"Valid list content.":"Invalid list content. List must contain only node objects."}},validateList:function(e){return arguments.length>1&&void 0!==arguments[1]&&arguments[1]?fixedNodes:e}}},869:e=>{var t=[{id:"aaa",label:"Label",date:"202312311822",strLabel:"Label",strLabelDesc:"The basic building block of the database."},{id:"bbb",label:"Label",date:"202312311828",strLabel:"Topic",strLabelDesc:"A tag, keyword, topic, subject, person, place, etc by which other nodes can be linked.",strText:""},{id:"ccc",label:"Topic",date:"202312210727",strText:"History"}];window.validNodes=t,e.exports={initLabelNode:{id:"aaa",label:"Label",date:"202312311822",strLabel:"Label",strLabelDesc:"The basic building block of the database."},validNodes:t}}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}(()=>{var e=n(579),t=e.aboutGraphletJS,o=e.initList,i=e.getRandomToken,r=e.getListOfLabels,a=(e.getNodeByKeypair,e.initNode),l={nodes:[],randomToken:"",listOfLabels:[],aboutGraphletJS:"",whichNode:{}};function d(e){console.log("demoInitNode",e);var t=a(l.nodes,e);console.log("demoInitNode",e,t),l.whichNode=t,c()}function c(){var e=document.getElementById("aboutGraphletJS"),t=document.getElementById("nodesList"),n=document.getElementById("labelsList"),o=document.getElementById("nodeCount"),i=document.getElementById("randomToken"),r=document.getElementById("whichNode");function a(e,t,n,o){var i=document.createElement(t);return n&&(i.className=n),o&&(i.textContent=o),e.appendChild(i),i}t.innerHTML="",n.innerHTML="",l.nodes.forEach((function(e){var n=document.createElement("li");n.textContent=e.id,t.appendChild(n)})),o&&(o.textContent="Your list has ".concat(l.nodes.length," items")),e&&(e.textContent="".concat(l.aboutGraphletJS)),randomToken&&(i.textContent="".concat(l.randomToken)),l.listOfLabels.forEach((function(e){var t=document.createElement("li");t.classList.add("labelListItem");var o=document.createElement("span");o.textContent=e,t.appendChild(o);var i=document.createElement("span");i.textContent="➕",t.appendChild(i),t.onclick=function(){console.log("clicked",t.textContent),d(o.textContent)},n.appendChild(t)})),r&&(console.log("whichNodeDiv",l.whichNode),r.innerHTML="",l.whichNode&&Object.keys(l.whichNode).length>0?(a(r,"h4","",l.whichNode.label||"Node"),["id","date"].concat(Object.keys(l.whichNode).filter((function(e){return!["id","date","label"].includes(e)}))).forEach((function(e){if(void 0!==l.whichNode[e]){var t=a(r,"div","node-field");a(t,"span","node-label","".concat(e," ")),a(t,"span","node-value",l.whichNode[e]),"date"===e&&a(r,"hr","node-divider")}}))):(r.textContent="No active node selected",r.classList.add("inside")))}window.demoAboutGraphletJS=function(){console.log("demoAboutGraphletJs"),l.aboutGraphletJS=t(),c()},window.demoGetRandomToken=function(e){l.randomToken=i(l.nodes,e),console.log(l.randomToken),c()},window.demoInitList=function(){l.nodes=o(),console.log("demoInitList",l.nodes),l.listOfLabels=r(l.nodes,"id"),c()},window.demoGetListOfLabels=function(e){console.log("demoGetListOfLabels",e),l.listOfLabels=r(l.nodes,e),c()},window.demoInitNode=d,window.demoGetNodeByKeypair=function e(t,n){console.log("demoGetNodeByKeypair",t,n),l.which_node=e(l.nodes,t),console.log(l.which_node),c()}})()})();