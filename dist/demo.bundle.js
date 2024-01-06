(()=>{var e={579:(e,t,n)=>{"use strict";function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){var a,i,d,r;a=e,i=t,d=n[t],r=function(e,t){if("object"!=o(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,"string");if("object"!=o(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(i),(i="symbol"==o(r)?r:String(r))in a?Object.defineProperty(a,i,{value:d,enumerable:!0,configurable:!0,writable:!0}):a[i]=d})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var r=n(869).initLabelNode;function l(){return console.log("GraphletJS v0.0.1"),{data:"GraphletJS v0.0.1",msg:"SUCCESS"}}function s(e,t){var n,o;do{n="";for(var a=0;a<t;a++)n+=Math.floor(16*Math.random()).toString(16);o=!e.some((function(e){return e.id===n}))}while(!o);return{data:n,msg:"SUCCESS"}}function c(e,t,n){console.log("keyValExists",e,t,n);var o=p(e,t,n,!0);return console.log("keyValExists res of getNodeBYKeyPair",o.data,Object.keys(o.data).length>0),"SUCCESS"===o.msg&&Object.keys(o.data).length>0}function u(e,t){console.log("getListOfLabels",e,t);var n=[],o="SUCCESS";return e&&e.length>0?"id"===t?n=e.filter((function(e){return"Label"===e.label})).map((function(e){return e.strLabel})):"obj"===t?n=e.filter((function(e){return"Label"===e.label})):(n=[],o="ERROR_RETURN_TYPE_MUST_BE_OBJ_OR_ID"):(o="ERROR_THE_NODES_LIST_IS_EMPTY",n=[]),console.log("getListOfLabels outbound",n,o),{data:n,msg:o}}function f(e){console.log("getListOfKeys");var t=new Set;e.forEach((function(e){Object.keys(e).forEach((function(e){t.add(e)}))}));var n=Array.from(t).sort();return["id","date","label"].reverse().forEach((function(e){var t;n.includes(e)&&(n=[e].concat(function(e){if(Array.isArray(e))return d(e)}(t=n.filter((function(t){return t!==e})))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()))})),{data:n,msg:"SUCCESS"}}window.aboutGraphletJS=l,window.getRandomToken=s,window.getListOfLabels=u,window.getListOfKeys=f;var m=function(){console.log("getDateObjects");var e=new Date,t=e.getFullYear(),n=String(e.getMonth()+1).padStart(2,"0"),o=String(e.getDate()).padStart(2,"0"),a=String(e.getHours()).padStart(2,"0"),i=String(e.getMinutes()).padStart(2,"0");return"".concat(t).concat(n).concat(o).concat(a).concat(i)?{data:"".concat(t).concat(n).concat(o).concat(a).concat(i),msg:"SUCCESS"}:{data:"",msg:"ERROR_FAILED_TO_CREATE_DATESTRING"}};function g(){var e=Object.assign({},r),t="SUCCESS";return(!e||e&&0===Object.keys(e).length)&&(t="ERROR_NODE_DOES_NOT_EXIST"),console.log("initList",e),{data:[e],msg:t}}function b(e,t){var n,o,a=Object.assign({},e.find((function(e){return"Label"===e.label&&e.strLabel===t})));(!a||a&&0===Object.keys(a).length)&&(a=Object.assign({},r)),a.label=a.strLabel,console.log("initNode",t,a);do{n=s(e,12)}while("SUCCESS"!==n.msg);a.id=n.data;do{o=m()}while("SUCCESS"!==o.msg);return a.date=o.data,"Label"!==a.label&&(delete a.strLabel,delete a.strLabelDesc,delete a.strCslType),console.log("initNodeEND",a),{data:a,msg:"SUCCESS"}}function S(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];console.log("getNodeByKeyPairs",t,n),n&&(n=!0);var o=e.filter((function(e){return t.every((function(t){return e[t.key]===t.value}))}));return console.log(o),{data:n?o[0]:o,msg:"I_WOULDNT_TRUST_THIS_IF_I_WERE_YOU"}}function p(e,t,n,o){return console.log("getNodeByKeyPair",e,t,n,o),o?{data:Object.assign({},e.find((function(e){return e[t]===n}))),msg:"SUCCESS"}:{data:[Object.assign({},e.find((function(e){return e[t]===n})))],msg:"SUCCESS"}}function h(e,t){return c(e,"id",t.id)?{data:e,msg:"ERROR_ID_ALREADY_EXISTS_IN_THE_LIST"}:""===t.id?{data:e,msg:"ERROR_ID_CANNOT_BE_AN_EMPTY_STRING"}:"Label"===t.label&&c(e,"strLabel",t.strLabel)?{data:e,msg:"ERROR_STRLABEL_EXISTS"}:(e.push(t),{data:e,msg:"SUCCESS"})}function y(e,t){return e.map((function(e){return e.id===t.id?i(i({},e),t):e}))}function v(e,t){return{data:e=e.filter((function(e){return e!==t})),msg:"SUCCESS"}}function w(e){var t=e.every((function(e){return e&&"object"===o(e)}));return{data:t,msg:t?"Valid list content.":"Invalid list content. List must contain only node objects."}}function C(e){return arguments.length>1&&void 0!==arguments[1]&&arguments[1]?[]:e}window.getDateObjects=m,window.initList=g,window.initNode=b,window.getNodeByKeyPairs=S,window.getNodeByKeyPair=p,window.addNode=h,window.updateNode=y,window.removeNode=v,window.validateListContent=w,window.validateList=C,e.exports={aboutGraphletJS:l,getRandomToken:s,keyValExists:c,getListOfLabels:u,getListOfKeys:f,getDateObjects:m,initList:g,initNode:b,getNodeByKeyPair:p,getNodeByKeyPairs:S,addNode:h,removeNode:v,updateNode:y,validateListContent:w,validateList:C}},869:e=>{var t=[{id:"aaa",label:"Label",date:"202312311822",strLabel:"Label",strLabelDesc:"The basic building block of the database.",strCslType:""},{id:"bbb",label:"Label",date:"202312311828",strLabel:"Topic",strLabelDesc:"A tag, keyword, topic, subject, person, place, etc by which other nodes can be linked.",strCslType:"",strText:""},{id:"ccc",label:"Topic",date:"202312210727",strText:"History"}];window.validNodes=t,e.exports={initLabelNode:{id:"aaa",label:"Label",date:"202312311822",strLabel:"Label",strLabelDesc:"The basic building block of the database.",strCslType:"",relNodes:[]},validNodes:t}}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}(()=>{var e=n(579),t=e.aboutGraphletJS,o=e.initList,a=e.getRandomToken,i=(e.keyValExists,e.getListOfLabels),d=e.getListOfKeys,r=e.getNodeByKeyPair,l=e.getNodeByKeyPairs,s=e.initNode,c=e.addNode,u=e.updateNode,f=e.removeNode,m={nodes:[],randomToken:"",listOfLabels:[],listOfKeys:[],aboutGraphletJS:"",whichNode:{},whichNodeMode:"",searchResults:[]};function g(e){var t=s(m.nodes,e);"SUCCESS"===t.msg&&h(t.data,"create")}function b(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];console.log("demoGetNodeByKeyPair",e,t);var o=r(m.nodes,e,t,n);"SUCCESS"===o.msg&&h(o.data,"update"),w()}function S(e){console.log("demoAddNode",m.nodes,e);var t=c(m.nodes,e);console.log("demoAddNode res",t),"SUCCESS"===t.msg&&(m.nodes=t.data,console.log("yup",i(m.nodes,"id")),"SUCCESS"===(t=i(m.nodes,"id")).msg&&(m.listOfLabels=t.data),console.log("yup2",m.listOfLabels),m.whichNodeMode="update"),w()}function p(e){console.log("demoRemoveNode",m.nodes,e);var t=f(m.nodes,e);"SUCCESS"===t.msg&&(m.nodes=t.data,m.whichNode.id===e.id&&(m.whichNode={})),console.log("res",t,m.nodes),w()}function h(e,t){m.whichNode=e,m.whichNodeMode=t,w()}function y(e){if(e)if(console.log("whichNodeDiv",m.whichNode),e.innerHTML="",m.whichNode&&Object.keys(m.whichNode).length>0){v(e,"h4","",m.whichNode.label||"Node");var t=v(e,"form","node-form");if(function(e,t){console.log("renderWhichNodeProps"),t.forEach((function(t){if(void 0!==m.whichNode[t]){var n=t.match(/^[a-z]+/),o=n?n[0]:null,a=v(e,"div","node-field");v(a,"label","node-label","".concat(t,": "),{for:"input-".concat(t)}),"str"===o?v(a,"input","node-input","",{id:"input-".concat(t),value:m.whichNode[t],name:t}).addEventListener("change",(function(e){m.whichNode[t]=e.target.value})):"obj"===o?v(a,"span","node-object","obj"):"list"===o?v(a,"span","node-object","list"):"rel"===o&&(m.whichNode[t].forEach((function(e){v(a,"span","node-rel-item",e)})),v(a,"span","plus-emoji","➕").onclick=function(){return function(e,t){console.log("relNodes",t)}(0,t)}),"date"===t&&v(e,"hr","node-divider")}}))}(t,["id","date"].concat(Object.keys(m.whichNode).filter((function(e){return!["id","date","label"].includes(e)})))),m.whichNodeMode){var n=document.createElement("button");n.type="button",n.classList.add("save-button"),"update"===m.whichNodeMode?(n.addEventListener("click",(function(){return function(e){console.log("demoUpdateNode",m.nodes,e);var t=u(m.nodes,e);"SUCCESS"===t.msg&&(m.nodes=t.data),w()}(m.whichNode)})),n.textContent="Update Node"):"create"===m.whichNodeMode&&(n.addEventListener("click",(function(){return S(m.whichNode)})),n.textContent="Create Node"),t.appendChild(n)}}else{var o=document.createElement("p");o.textContent="No active node selected",o.classList.add("inside"),e.appendChild(o)}}function v(e,t,n,o){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=document.createElement(t);for(var d in n&&(i.className=n),o&&(i.textContent=o),a)i.setAttribute(d,a[d]);return e.appendChild(i),i}function w(){var e=document.getElementById("aboutGraphletJS"),t=document.getElementById("nodesList"),n=document.getElementById("labelsList"),o=document.getElementById("keysList"),a=document.getElementById("nodeCount"),i=document.getElementById("randomToken"),d=document.getElementById("whichNode");t.innerHTML="",n.innerHTML="",o.innerHTML="",function(e){m.nodes.forEach((function(t){var n=document.createElement("li");n.style.display="flex",n.style.justifyContent="space-between";var o=document.createElement("span");o.textContent=t.label,o.onclick=function(){return h(t,"update")},n.appendChild(o);var a=document.createElement("span");a.textContent=t.id,a.onclick=function(){return h(t,"update")},n.appendChild(a);var i=document.createElement("span");i.textContent=t.date,i.onclick=function(){return h(t,"update")},n.appendChild(i);var d=document.createElement("span");d.textContent="🗑️",d.style.cursor="pointer",d.onclick=function(){return p(t)},n.appendChild(d),e.appendChild(n)}))}(t),a&&(a.textContent="Your list has ".concat(m.nodes.length," items")),e&&(e.textContent="".concat(m.aboutGraphletJS)),i&&(i.textContent="".concat(m.randomToken)),m.listOfLabels.forEach((function(e){var t=document.createElement("li");t.classList.add("labelListItem"),console.log("testingtesting");var o=document.createElement("span");o.textContent=e,t.appendChild(o);var a=document.createElement("span");a.textContent="➕",t.appendChild(a),t.onclick=function(){console.log("clicked",t.textContent),g(o.textContent)},n.appendChild(t)})),m.listOfKeys.forEach((function(e){var t=document.createElement("li");t.classList.add("keyListItem");var n=document.createElement("span");n.textContent=e,t.appendChild(n),t.onclick=function(){console.log("clicked",t.textContent)},o.appendChild(t)})),y(d)}window.demoClearAll=function(){console.log("demoClearAll"),m.nodes=[],m.randomToken="",m.listOfLabels=[],m.listOfKeys=[],m.aboutGraphletJS="",m.whichNode={},m.searchResults=[],w()},window.demoAboutGraphletJS=function(){console.log("demoAboutGraphletJs");var e=t();"SUCCESS"===e.msg&&(m.aboutGraphletJS=e.data),w()},window.demoGetRandomToken=function(e){console.log("demoGetRandomToken",e);var t=a(m.nodes,e);"SUCCESS"===t.msg&&(m.randomToken=t.data),w()},window.demoInitNode=g,window.demoInitList=function(){"SUCCESS"===(e=o()).msg&&(m.nodes=e.data),console.log("demoInitList",m.nodes);var e=i(m.nodes,"id");"SUCCESS"===e.msg&&(m.listOfLabels=e.data),"SUCCESS"===(e=d(m.nodes)).msg&&(m.listOfKeys=e.data),w()},window.demoGetListOfLabels=function(e){console.log("demoGetListOfLabels",e);var t=i(m.nodes,e);"SUCCESS"===t.msg&&(m.listOfLabels=t.data),w()},window.demoGetListOfKeys=function(){console.log("demoGetListOfKeys");var e=d(m.nodes);"SUCCESS"===e.msg&&(m.listOfKeys=e.data),w()},window.demoGetNodeByKeyPair=b,window.demoGetNodeByKeyPairs=function(){var e=l(m.nodes,[{key:"id",value:"123"},{key:"name",value:"Node1"},{key:"id",value:"aaa"}],!1);"SUCCESS"===e.msg&&(m.searchResults=e.data),w()},window.demoGetNodeById=function(e){console.log("demoGetNodeById",e),b("id",e,!0)},window.demoAddNode=S,window.demoAddNode=S,window.demoRemoveNode=p,window.demoSetWhichNode=h,document.addEventListener("DOMContentLoaded",w)})()})();