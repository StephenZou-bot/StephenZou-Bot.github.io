/* !
 * mdui v0.4.3 (https://mdui.org)
 * Copyright 2016-2019 zdhxiong
 * Licensed under MIT
 */
/* jshint ignore:start */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.mdui=e()}(this,(()=>{
/* jshint ignore:end */
const t={};
/**
   * =============================================================================
   * ************   浏览器兼容性问题修复   ************
   * =============================================================================
   */
/**
   * requestAnimationFrame
   * cancelAnimationFrame
   */!function(){let t=0;window.requestAnimationFrame||(window.requestAnimationFrame=window.webkitRequestAnimationFrame,window.cancelAnimationFrame=window.webkitCancelAnimationFrame),window.requestAnimationFrame||(window.requestAnimationFrame=function(e,n){const o=(new Date).getTime(),i=Math.max(0,16.7-(o-t)),s=window.setTimeout((()=>{e(o+i)}),i);return t=o+i,s}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}();
/**
   * JQ 1.0.0 (https://github.com/zdhxiong/mdui.JQ#readme)
   * Copyright 2018-2018 zdhxiong
   * Licensed under MIT
   */
const e=function(){const t=function(t){const e=this;for(let n=0;n<t.length;n+=1)e[n]=t[n];return e.length=t.length,this};function e(n){const o=[];if(!n)return new t(o);if(n instanceof t)return n;if("string"==typeof n){const t=n.trim();if("<"===t[0]&&">"===t[t.length-1]){
// 创建 HTML 字符串
let e="div";0===t.indexOf("<li")&&(e="ul"),0===t.indexOf("<tr")&&(e="tbody"),0!==t.indexOf("<td")&&0!==t.indexOf("<th")||(e="tr"),0===t.indexOf("<tbody")&&(e="table"),0===t.indexOf("<option")&&(e="select");const n=document.createElement(e);n.innerHTML=t;for(let t=0;t<n.childNodes.length;t+=1)o.push(n.childNodes[t])}else{
// 选择器
const t="#"!==n[0]||n.match(/[ .<>:~]/)?document.querySelectorAll(n):[document.getElementById(n.slice(1))];for(let e=0;e<t.length;e+=1)t[e]&&o.push(t[e])}}else{if("function"==typeof n)
// function
return e(document).ready(n);if(n.nodeType||n===window||n===document)
// Node
o.push(n);else if(n.length>0&&n[0].nodeType)
// NodeList
for(let t=0;t<n.length;t+=1)o.push(n[t])}return new t(o)}function n(){const t=this,e=[];let n=arguments.length;for(;n--;)e[n]=arguments[n];if(!e.length)return this;
// $.extend(obj)
if(1===e.length)return Object.keys(e[0]).forEach((n=>{t[n]=e[0][n]})),this;
// $.extend({}, defaults[, obj])
const o=e.shift(),i=function(t){Object.keys(e[t]).forEach((n=>{o[n]=e[t][n]}))};for(let t=0;t<e.length;t+=1)i(t);return o}
/**
     * 除去 null 后的 object 类型
     * @param obj
     * @returns {*|boolean}
     */
function o(t){return"object"==typeof t&&null!==t}function i(t){return"function"==typeof t}function s(t){return"string"==typeof t}function a(t){return"number"==typeof t.length}
/**
     * 循环数组或对象
     * @param obj
     * @param callback
     * @returns {*}
     */function c(t,e){if(a(t)){for(let n=0;n<t.length;n+=1)if(!1===e.call(t[n],n,t[n]))return t}else{const n=Object.keys(t);for(let o=0;o<n.length;o+=1)if(!1===e.call(t[n[o]],n[o],t[n[o]]))return t}return t}
/**
     * 遍历数组或对象，通过函数返回一个新的数组或对象，null 和 undefined 将被过滤掉。
     * @param elems
     * @param callback
     * @returns {Array}
     */function l(t,e){let n,o;const i=[];return c(t,((t,n)=>{o=e(n,t),null!=o&&i.push(o)})),(n=[]).concat.apply(n,i)}
/**
     * 把对象合并到第一个参数中，并返回第一个参数
     * @param first
     * @param second
     * @returns {*}
     */function d(t,e){return c(e,((e,n)=>{t.push(n)})),t}
/**
     * 删除数组中重复元素
     * @param arr {Array}
     * @returns {Array}
     */function r(t){const e=[];for(let n=0;n<t.length;n+=1)-1===e.indexOf(t[n])&&e.push(t[n]);return e}e.fn=t.prototype,e.fn.extend=n,e.extend=n;const u={};
/**
     * 获取元素的默认 display 样式值，用于 .show() 方法
     * @param nodeName
     * @returns {*}
     */function p(n,o,i,s){const a=[];let c;return n.each(((t,n)=>{for(c=n[s];c;){if(2===i){
// prevUntil
if(!o||o&&e(c).is(o))break;a.push(c)}else{if(0===i){
// prev
(!o||o&&e(c).is(o))&&a.push(c);break}(!o||o&&e(c).is(o))&&
// prevAll
a.push(c)}c=c[s]}})),new t(r(a))}
/**
     * prev - 取得前一个匹配的元素
     * @param selector {String=}
     * @return {JQ}
     */
/**
     * prevAll - 取得前面所有匹配的元素
     * @param selector {String=}
     * @return {JQ}
     */
/**
     * prevUntil - 取得前面的所有元素，直到遇到匹配的元素，不包含匹配的元素
     * @param selector {String=}
     * @return {JQ}
     */e.extend({each:c,merge:d,unique:r,map:l,
/**
       * 一个 DOM 节点是否包含另一个 DOM 节点
       * @param parent {Node} 父节点
       * @param node {Node} 子节点
       * @returns {Boolean}
       */
contains:function(t,e){return t&&!e?document.documentElement.contains(t):t!==e&&t.contains(e)},
/**
       * 将数组或对象序列化
       * @param obj
       * @returns {String}
       */
param:function(t){if(!o(t))return"";const e=[];function n(t,i){let s;o(i)?c(i,((e,a)=>{s=Array.isArray(i)&&!o(a)?"":e,n(t+"["+s+"]",a)})):(s=null!==i&&""!==i?"="+encodeURIComponent(i):"",e.push(encodeURIComponent(t)+s))}return c(t,((t,e)=>{n(t,e)})),e.join("&")}}),e.fn.extend({
/**
       * 遍历对象
       * @param callback {Function}
       * @return {JQ}
       */
each:function(t){return c(this,t)},
/**
       * 通过遍历集合中的节点对象，通过函数返回一个新的对象，null 或 undefined 将被过滤掉。
       * @param callback {Function}
       * @returns {JQ}
       */
map:function(e){return new t(l(this,((t,n)=>e.call(t,n,t))))},
/**
       * 获取指定 DOM 元素，没有 index 参数时，获取所有 DOM 的数组
       * @param index {Number=}
       * @returns {Node|Array}
       */
get:function(t){return void 0===t?[].slice.call(this):this[t>=0?t:t+this.length]},
/**
       * array中提取的方法。从start开始，如果end 指出。提取不包含end位置的元素。
       * @param args {start, end}
       * @returns {JQ}
       */
slice:function(){const e=[];let n=arguments.length;for(;n--;)e[n]=arguments[n];return new t([].slice.apply(this,e))},
/**
       * 筛选元素集合
       * @param selector {String|JQ|Node|Function}
       * @returns {JQ}
       */
filter:function(t){if(i(t))return this.map(((e,n)=>t.call(n,e,n)?n:void 0));const n=e(t);return this.map(((t,e)=>n.index(e)>-1?e:void 0))},
/**
       * 从元素集合中删除指定的元素
       * @param selector {String|Node|JQ|Function}
       * @return {JQ}
       */
not:function(t){const e=this.filter(t);return this.map(((t,n)=>e.index(n)>-1?void 0:n))},
/**
       * 获取元素相对于 document 的偏移
       * @returns {Object}
       */
offset:function(){if(this[0]){const t=this[0].getBoundingClientRect();return{left:t.left+window.pageXOffset,top:t.top+window.pageYOffset,width:t.width,height:t.height}}return null},
/**
       * 返回最近的用于定位的父元素
       * @returns {*|JQ}
       */
offsetParent:function(){return this.map((function(){let t=this.offsetParent;for(;t&&"static"===e(t).css("position");)t=t.offsetParent;return t||document.documentElement}))},
/**
       * 获取元素相对于父元素的偏移
       * @return {Object}
       */
position:function(){const t=this;if(!t[0])return null;let e,n,o={top:0,left:0};
/**
     * 判断一个节点名
     * @param ele
     * @param name
     * @returns {boolean}
     */
var i,s;return"fixed"===t.css("position")?n=t[0].getBoundingClientRect():(e=t.offsetParent(),n=t.offset(),i=e[0],s="html",i.nodeName&&i.nodeName.toLowerCase()===s.toLowerCase()||(o=e.offset()),o={top:o.top+e.css("borderTopWidth"),left:o.left+e.css("borderLeftWidth")}),{top:n.top-o.top-t.css("marginTop"),left:n.left-o.left-t.css("marginLeft"),width:n.width,height:n.height}},
/**
       * 显示指定元素
       * @returns {JQ}
       */
show:function(){return this.each((function(){"none"===this.style.display&&(this.style.display=""),"none"===window.getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=function(t){let e,n;return u[t]||(e=document.createElement(t),document.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"===n&&(n="block"),u[t]=n),u[t]}(this.nodeName))}))},
/**
       * 隐藏指定元素
       * @returns {JQ}
       */
hide:function(){return this.each((function(){this.style.display="none"}))},
/**
       * 切换元素的显示状态
       * @returns {JQ}
       */
toggle:function(){return this.each((function(){this.style.display="none"===this.style.display?"":"none"}))},
/**
       * 是否含有指定的 CSS 类
       * @param className {String}
       * @returns {boolean}
       */
hasClass:function(t){return!(!this[0]||!t)&&this[0].classList.contains(t)},
/**
       * 移除指定属性
       * @param attr {String}
       * @returns {JQ}
       */
removeAttr:function(t){return this.each((function(){this.removeAttribute(t)}))},
/**
       * 删除属性值
       * @param name {String}
       * @returns {JQ}
       */
removeProp:function(t){return this.each((function(){try{delete this[t]}catch(t){
// empty
}}))},
/**
       * 获取当前对象中第n个元素
       * @param index {Number}
       * @returns {JQ}
       */
eq:function(e){const n=-1===e?this.slice(e):this.slice(e,+e+1);return new t(n)},
/**
       * 获取对象中第一个元素
       * @returns {JQ}
       */
first:function(){return this.eq(0)},
/**
       * 获取对象中最后一个元素
       * @returns {JQ}
       */
last:function(){return this.eq(-1)},
/**
       * 获取一个元素的位置。
       * 当 elem 参数没有给出时，返回当前元素在兄弟节点中的位置。
       * 有给出了 elem 参数时，返回 elem 元素在当前对象中的位置
       * @param elem {Selector|Node=}
       * @returns {Number}
       */
index:function(t){return t?s(t)?e(t).eq(0).parent().children().get().indexOf(this[0]):this.get().indexOf(t):this.eq(0).parent().children().get().indexOf(this[0])},
/**
       * 根据选择器、DOM元素或 JQ 对象来检测匹配元素集合，
       * 如果其中至少有一个元素符合这个给定的表达式就返回true
       * @param selector {String|Node|NodeList|Array|JQ|Window}
       * @returns boolean
       */
is:function(t){const e=this[0];if(!e||null==t)return!1;if(s(t)){if(e===document||e===window)return!1;return(e.matches||e.matchesSelector||e.webkitMatchesSelector||e.mozMatchesSelector||e.oMatchesSelector||e.msMatchesSelector).call(e,t)}if(t===document||t===window)return e===t;if(t.nodeType||a(t)){const n=t.nodeType?[t]:t;for(let t=0;t<n.length;t+=1)if(n[t]===e)return!0;return!1}return!1},
/**
       * 根据 CSS 选择器找到后代节点的集合
       * @param selector {String}
       * @returns {JQ}
       */
find:function(e){const n=[];return this.each(((t,o)=>{const i=o.nodeType;1!==i&&9!==i||d(n,o.querySelectorAll(e))})),new t(n)},
/**
       * 找到直接子元素的元素集合
       * @param selector {String=}
       * @returns {JQ}
       */
children:function(n){const o=[];return this.each(((t,i)=>{c(i.childNodes,((t,i)=>{1===i.nodeType&&(!n||n&&e(i).is(n))&&o.push(i)}))})),new t(r(o))},
/**
       * 保留含有指定子元素的元素，去掉不含有指定子元素的元素
       * @param selector {String|Node|JQ|NodeList|Array}
       * @return {JQ}
       */
has:function(t){const n=s(t)?this.find(t):e(t),o=n.length;return this.filter((function(){for(let t=0;t<o;t+=1)if(e.contains(this,n[t]))return!0;return!1}))},
/**
       * 取得同辈元素的集合
       * @param selector {String=}
       * @returns {JQ}
       */
siblings:function(t){return this.prevAll(t).add(this.nextAll(t))},
/**
       * 返回首先匹配到的父节点，包含父节点
       * @param selector {String}
       * @returns {JQ}
       */
closest:function(t){let e=this;return e.is(t)||(e=e.parents(t).eq(0)),e},
/**
       * 删除所有匹配的元素
       * @returns {JQ}
       */
remove:function(){return this.each(((t,e)=>{e.parentNode&&e.parentNode.removeChild(e)}))},
/**
       * 添加匹配的元素到当前对象中
       * @param selector {String|JQ}
       * @returns {JQ}
       */
add:function(n){return new t(r(d(this.get(),e(n))))},
/**
       * 删除子节点
       * @returns {JQ}
       */
empty:function(){return this.each((function(){this.innerHTML=""}))},
/**
       * 通过深度克隆来复制集合中的所有元素。
       * (通过原生 cloneNode 方法深度克隆来复制集合中的所有元素。此方法不会有数据和事件处理程序复制到新的元素。这点和jquery中利用一个参数来确定是否复制数据和事件处理不相同。)
       * @returns {JQ}
       */
clone:function(){return this.map((function(){return this.cloneNode(!0)}))},
/**
       * 用新元素替换当前元素
       * @param newContent {String|Node|NodeList|JQ}
       * @returns {JQ}
       */
replaceWith:function(t){return this.before(t).remove()},
/**
       * 将表单元素的值组合成键值对数组
       * @returns {Array}
       */
serializeArray:function(){const t=[],n=this[0];return n&&n.elements?(e([].slice.call(n.elements)).each((function(){const n=e(this),o=n.attr("type");"fieldset"===this.nodeName.toLowerCase()||this.disabled||-1!==["submit","reset","button"].indexOf(o)||-1!==["radio","checkbox"].indexOf(o)&&!this.checked||t.push({name:n.attr("name"),value:n.val()})})),t):t},
/**
       * 将表单元素或对象序列化
       * @returns {String}
       */
serialize:function(){const t=[];return c(this.serializeArray(),((e,n)=>{t.push(encodeURIComponent(n.name)+"="+encodeURIComponent(n.value))})),t.join("&")}}),
/**
     * val - 获取或设置元素的值
     * @param value {String=}
     * @return {*|JQ}
     */
/**
     * html - 获取或设置元素的 HTML
     * @param value {String=}
     * @return {*|JQ}
     */
/**
     * text - 获取或设置元素的内容
     * @param value {String=}
     * @return {*|JQ}
     */
c(["val","html","text"],((t,n)=>{const o={0:"value",1:"innerHTML",2:"textContent"},i={0:void 0,1:void 0,2:null};e.fn[n]=function(e){return void 0===e?this[0]?this[0][o[t]]:i[t]:this.each(((n,i)=>{i[o[t]]=e}));
// 设置值
}})),
/**
     * attr - 获取或设置元素的属性值
     * @param {name|props|key,value=}
     * @return {String|JQ}
     */
/**
     * prop - 获取或设置元素的属性值
     * @param {name|props|key,value=}
     * @return {String|JQ}
     */
/**
     * css - 获取或设置元素的样式
     * @param {name|props|key,value=}
     * @return {String|JQ}
     */
c(["attr","prop","css"],((t,n)=>{function o(e,n,o){0===t?e.setAttribute(n,o):1===t?e[n]=o:e.style[n]=o}e.fn[n]=function(e,n){const i=arguments.length;return 1===i&&s(e)?function(e,n){if(e)return 0===t?e.getAttribute(n):1===t?e[n]:window.getComputedStyle(e,null).getPropertyValue(n)}(this[0],e):this.each(((t,s)=>{2===i?o(s,e,n):c(e,((t,e)=>{o(s,t,e)}))}));
// 设置值
}})),
/**
     * addClass - 添加 CSS 类，多个类名用空格分割
     * @param className {String}
     * @return {JQ}
     */
/**
     * removeClass - 移除 CSS 类，多个类名用空格分割
     * @param className {String}
     * @return {JQ}
     */
/**
     * toggleClass - 切换 CSS 类名，多个类名用空格分割
     * @param className {String}
     * @return {JQ}
     */
c(["add","remove","toggle"],((t,n)=>{e.fn[n+"Class"]=function(t){if(!t)return this;const e=t.split(" ");return this.each(((t,o)=>{c(e,((t,e)=>{o.classList[n](e)}))}))}})),
/**
     * width - 获取元素的宽度
     * @return {Number}
     */
/**
     * height - 获取元素的高度
     * @return {Number}
     */
c({Width:"width",Height:"height"},((t,n)=>{e.fn[n]=function(o){if(void 0===o){
// 获取
const o=this[0];if((s=o)&&s===s.window)return o["inner"+t];if((i=o)&&i.nodeType===i.DOCUMENT_NODE)return o.documentElement["scroll"+t];const a=e(o);
// IE10、IE11 在 box-sizing:border-box 时，不会包含 padding 和 border，这里进行修复
let c=0;const l="width"===n;return"ActiveXObject"in window&&"border-box"===a.css("box-sizing")&&(c=parseFloat(a.css("padding-"+(l?"left":"top")))+parseFloat(a.css("padding-"+(l?"right":"bottom")))+parseFloat(a.css("border-"+(l?"left":"top")+"-width"))+parseFloat(a.css("border-"+(l?"right":"bottom")+"-width"))),parseFloat(e(o).css(n))+c}
// 设置
/* eslint no-restricted-globals: 0 */var i,s;return isNaN(Number(o))||""===o||(o+="px"),this.css(n,o)}})),
/**
     * innerWidth - 获取元素的宽度，包含内边距
     * @return {Number}
     */
/**
     * innerHeight - 获取元素的高度，包含内边距
     * @return {Number}
     */
c({Width:"width",Height:"height"},((t,n)=>{e.fn["inner"+t]=function(){let t=this[n]();const o=e(this[0]);return"border-box"!==o.css("box-sizing")&&(t+=parseFloat(o.css("padding-"+("width"===n?"left":"top"))),t+=parseFloat(o.css("padding-"+("width"===n?"right":"bottom")))),t}})),c(["","All","Until"],((t,n)=>{e.fn["prev"+n]=function(n){return p(0===t?this:e(this.get().reverse()),n,t,"previousElementSibling")}})),
/**
     * next - 取得后一个匹配的元素
     * @param selector {String=}
     * @return {JQ}
     */
/**
     * nextAll - 取得后面所有匹配的元素
     * @param selector {String=}
     * @return {JQ}
     */
/**
     * nextUntil - 取得后面所有匹配的元素，直到遇到匹配的元素，不包含匹配的元素
     * @param selector {String=}
     * @return {JQ}
     */
c(["","All","Until"],((t,n)=>{e.fn["next"+n]=function(e){return p(this,e,t,"nextElementSibling")}})),
/**
     * parent - 取得匹配的直接父元素
     * @param selector {String=}
     * @return {JQ}
     */
/**
     * parents - 取得所有匹配的父元素
     * @param selector {String=}
     * @return {JQ}
     */
/**
     * parentUntil - 取得所有的父元素，直到遇到匹配的元素，不包含匹配的元素
     * @param selector {String=}
     * @return {JQ}
     */
c(["","s","sUntil"],((t,n)=>{e.fn["parent"+n]=function(n){return p(0===t?this:e(this.get().reverse()),n,t,"parentNode")}})),
/**
     * append - 在元素内部追加内容
     * @param newChild {String|Node|NodeList|JQ}
     * @return {JQ}
     */
/**
     * prepend - 在元素内部前置内容
     * @param newChild {String|Node|NodeList|JQ}
     * @return {JQ}
     */
c(["append","prepend"],((t,n)=>{e.fn[n]=function(n){let o;const i=this.length>1;if(!s(n)||"<"===n[0]&&">"===n[n.length-1])o=e(n).get();else{const t=document.createElement("div");t.innerHTML=n,o=[].slice.call(t.childNodes)}return 1===t&&
// prepend
o.reverse(),this.each(((e,n)=>{c(o,((o,s)=>{
// 一个元素要同时追加到多个元素中，需要先复制一份，然后追加
i&&e>0&&(s=s.cloneNode(!0)),0===t?
// append
n.appendChild(s):
// prepend
n.insertBefore(s,n.childNodes[0])}))}))}})),
/**
     * insertBefore - 插入到指定元素的前面
     * @param selector {String|Node|NodeList|JQ}
     * @return {JQ}
     */
/**
     * insertAfter - 插入到指定元素的后面
     * @param selector {String|Node|NodeList|JQ}
     * @return {JQ}
     */
c(["insertBefore","insertAfter"],((t,n)=>{e.fn[n]=function(n){const o=e(n);return this.each(((e,n)=>{o.each(((e,i)=>{i.parentNode.insertBefore(1===o.length?n:n.cloneNode(!0),0===t?i:i.nextSibling)}))}))}})),
/**
     * appendTo - 追加到指定元素内容
     * @param selector {String|Node|NodeList|JQ}
     * @return {JQ}
     */
/**
     * prependTo - 前置到指定元素内部
     * @param selector {String|Node|NodeList|JQ}
     * @return {JQ}
     */
/**
     * before - 插入到指定元素前面
     * @param selector {String|Node|NodeList|JQ}
     * @return {JQ}
     */
/**
     * after - 插入到指定元素后面
     * @param selector {String|Node|NodeList|JQ}
     * @return {JQ}
     */
/**
     * replaceAll - 替换掉指定元素
     * @param selector {String|Node|NodeList|JQ}
     * @return {JQ}
     */
c({appendTo:"append",prependTo:"prepend",before:"insertBefore",after:"insertAfter",replaceAll:"replaceWith"},((t,n)=>{e.fn[t]=function(t){return e(t)[n](this),this}}));const h="mduiElementDataStorage";e.extend({
/**
       * 在指定元素上存储数据，或从指定元素上读取数据
       * @param elem 必须， DOM 元素
       * @param key 必须，键名
       * @param value 可选，值
       */
data:function(t,e,n){let i={};if(void 0!==n)
// 根据 key、value 设置值
i[e]=n;else{if(!o(e)){if(void 0===e){
// 获取所有值
const e={};return c(t.attributes,((t,n)=>{const o=n.name;if(0===o.indexOf("data-")){const t=o.slice(5).replace(/-./g,(t=>t.charAt(1).toUpperCase()));e[t]=n.value}})),t[h]&&c(t[h],((t,n)=>{e[t]=n})),e}
// 设置值
if(t[h]&&e in t[h])
// 获取指定值
return t[h][e];{
// 从 data- 中获取指定值
const n=t.getAttribute("data-"+e);return n||void 0}}
// 根据键值对设置值
i=e}t[h]||(t[h]={}),c(i,((e,n)=>{t[h][e]=n}))},
/**
       * 移除指定元素上存放的数据
       * @param elem 必须，DOM 元素
       * @param key 必须，键名
       */
removeData:function(t,e){t[h]&&t[h][e]&&(t[h][e]=null,delete t[h][e])}}),e.fn.extend({
/**
       * 在元素上读取或设置数据
       * @param key 必须
       * @param value
       * @returns {*}
       */
data:function(t,n){return void 0===n?o(t)?this.each(((n,o)=>{e.data(o,t)})):this[0]?e.data(this[0],t):void 0:this.each(((o,i)=>{e.data(i,t,n)}));
// 设置值
},
/**
       * 移除元素上存储的数据
       * @param key 必须
       * @returns {*}
       */
removeData:function(t){return this.each(((n,o)=>{e.removeData(o,t)}))}}),function(){try{return new t("test")}catch(t){}var t=function(t,e){e=e||{bubbles:!1,cancelable:!1};const n=document.createEvent("MouseEvent");return n.initMouseEvent(t,e.bubbles,e.cancelable,window,0,0,0,0,0,!1,!1,!1,!1,0,null),n};t.prototype=Event.prototype,window.MouseEvent=t}(),function(){function t(t,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),n}"function"!=typeof window.CustomEvent&&(t.prototype=window.Event.prototype,window.CustomEvent=t)}();
// 存储事件
const m={};
// 元素ID
let f=1;function g(){return!1}
/**
     * 为元素赋予一个唯一的ID
     * @param element
     * @returns {number|*}
     */function v(t){return t.mduiElementId||(f+=1,t.mduiElementId=f),t.mduiElementId}
/**
     * 获取匹配的事件
     * @param element
     * @param eventName
     * @param func
     * @param selector
     * @returns {Array}
     */
/**
     * 移除事件监听
     * @param element
     * @param eventName
     * @param func
     * @param selector
     */
function b(t,e,n,o){(e||"").split(" ").forEach((e=>{(function(t,e,n,o){return(m[v(t)]||[]).filter((t=>t&&(!e||t.e===e)&&(!n||t.fn.toString()===n.toString())&&(!o||t.sel===o)))}
/**
     * 添加事件监听
     * @param element
     * @param eventName
     * @param func
     * @param data
     * @param selector
     */)(t,e,n,o).forEach((e=>{delete m[v(t)][e.i],t.removeEventListener(e.e,e.proxy,!1)}))}))}e.fn.extend({
/**
       * DOM 加载完毕后调用的函数
       * @param callback
       * @returns {ready}
       */
ready:function(t){return/complete|loaded|interactive/.test(document.readyState)&&document.body?t(e):document.addEventListener("DOMContentLoaded",(()=>{t(e)}),!1),this},
/**
       * 绑定事件
       *
       * $().on({eventName: fn}, selector, data);
       * $().on({eventName: fn}, selector)
       * $().on({eventName: fn})
       * $().on(eventName, selector, data, fn);
       * $().on(eventName, selector, fn);
       * $().on(eventName, data, fn);
       * $().on(eventName, fn);
       * $().on(eventName, false);
       *
       * @param eventName
       * @param selector
       * @param data
       * @param callback
       * @param one 是否是 one 方法，只在 JQ 内部使用
       * @returns
       */
on:function(t,n,a,l,d){const r=this;
// 默认
// $().on(event, selector, data, callback)
// event 使用 事件:函数 键值对
// event = {
//   'event1': callback1,
//   'event2': callback2
// }

// $().on(event, selector, data)
if(t&&!s(t))return c(t,((t,e)=>{r.on(t,n,a,e)})),r;
// selector 不存在
// $().on(event, data, callback)
if(s(n)||i(l)||!1===l||(l=a,a=n,n=void 0),
// data 不存在
// $().on(event, callback)
(i(a)||!1===a)&&(l=a,a=void 0),
// callback 为 false
// $().on(event, false)
!1===l&&(l=g),1===d){const e=l;l=function(){
/* eslint prefer-rest-params: 0 */
return r.off(t,n,l),e.apply(this,arguments)}}return this.each((function(){!function(t,n,i,s,a){const c=v(t);m[c]||(m[c]=[]);
// 传入 data.useCapture 来设置 useCapture: true
let l=!1;o(s)&&s.useCapture&&(l=!0),n.split(" ").forEach((n=>{const o={e:n,fn:i,sel:a,i:m[c].length};function d(t,e){!1===i.apply(e,void 0===t._detail?[t]:[t].concat(t._detail))&&(t.preventDefault(),t.stopPropagation())}function r(n){n._data=s,a?
// 事件代理
e(t).find(a).get().reverse().forEach((t=>{(t===n.target||e.contains(t,n.target))&&d(n,t)})):
// 不使用事件代理
d(n,t)}o.proxy=r,m[c].push(o),t.addEventListener(o.e,r,l)}))}(this,t,l,a,n)}))},
/**
       * 绑定事件，只触发一次
       * @param eventName
       * @param selector
       * @param data
       * @param callback
       */
one:function(t,e,n,o){const i=this;return s(t)?t.split(" ").forEach((t=>{i.on(t,e,n,o,1)})):c(t,((t,o)=>{t.split(" ").forEach((t=>{i.on(t,e,n,o,1)}))})),this},
/**
       * 取消绑定事件
       *
       * $().off(eventName, selector);
       * $().off(eventName, callback);
       * $().off(eventName, false);
       *
       */
off:function(t,e,n){const o=this;
// event 使用 事件:函数 键值对
// event = {
//   'event1': callback1,
//   'event2': callback2
// }

// $().off(event, selector)
return t&&!s(t)?(c(t,((t,n)=>{o.off(t,e,n)})),o):(
// selector 不存在
// $().off(event, callback)
s(e)||i(n)||!1===n||(n=e,e=void 0),
// callback 为 false
// $().off(event, false)
!1===n&&(n=g),o.each((function(){b(this,t,n,e)})))},
/**
       * 触发一个事件
       * @param eventName
       * @param data
       * @returns {*|JQ}
       */
trigger:function(t,e){const n=["click","mousedown","mouseup","mousemove"].indexOf(t)>-1;let o;
// Note: MouseEvent 无法传入 detail 参数
return o=n?new MouseEvent(t,{bubbles:!0,cancelable:!0}):new CustomEvent(t,{detail:e,bubbles:!0,cancelable:!0}),o._detail=e,this.each((function(){this.dispatchEvent(o)}))}});const x={};let y=0;
// 全局事件名
const w={ajaxStart:"start.mdui.ajax",ajaxSuccess:"success.mdui.ajax",ajaxError:"error.mdui.ajax",ajaxComplete:"complete.mdui.ajax"};
/**
     * 判断此请求方法是否通过查询字符串提交参数
     * @param method 请求方法，大写
     * @returns {boolean}
     */function $(t){return["GET","HEAD"].indexOf(t)>=0}
/**
     * 添加参数到 URL 上，且 URL 中不存在 ? 时，自动把第一个 & 替换为 ?
     * @param url
     * @param query 参数 key=value
     * @returns {string}
     */function C(t,e){return(t+"&"+e).replace(/[&?]{1,2}/,"?")}return e.extend({
/**
       * 为 ajax 请求设置全局配置参数
       * @param options
       */
ajaxSetup:function(t){e.extend(x,t||{})},
/**
       * 发送 ajax 请求
       * @param options
       */
ajax:function(t){
// 配置参数
const n={
// 请求方式
method:"GET",
// 请求的数据，查询字符串或对象
data:!1,
// 是否把数据转换为查询字符串发送，为 false 时不进行自动转换。
processData:!0,
// 是否为异步请求
async:!0,
// 是否从缓存中读取，只对 GET/HEAD 请求有效，dataType 为 jsonp 时为 false
cache:!0,
// HTTP 访问认证的用户名
username:"",
// HTTP 访问认证的密码
password:"",
// 一个键值对，随着请求一起发送
headers:{},
// 设置 XHR 对象
xhrFields:{},
// 一个 HTTP 代码和函数的对象
statusCode:{},
// 预期服务器返回的数据类型 text、json、jsonp
dataType:"text",
// jsonp 请求的回调函数名称
jsonp:"callback",
// （string 或 Function）使用指定的回调函数名代替自动生成的回调函数名
jsonpCallback:function(){return y+=1,"mduijsonp_"+Date.now()+"_"+y},
// 发送信息至服务器时内容编码类型
contentType:"application/x-www-form-urlencoded",
// 设置请求超时时间（毫秒）
timeout:0,
// 是否在 document 上触发全局 ajax 事件
global:!0},o=["beforeSend","success","error","statusCode","complete"];
// 回调函数
// 是否已取消请求
let a=!1;
// 保存全局配置
const l=x,d={};
// 事件参数
/**
         * 触发全局事件
         * @param event string 事件名
         * @param xhr XMLHttpRequest 事件参数
         */
function r(n,o){t.global&&e(document).trigger(n,o)}
/**
         * 触发 XHR 回调和事件
         * @param callback string 回调函数名称
         * @param args
         */function u(e){const n=[];let o,i,s=arguments.length-1;for(;s-- >0;)n[s]=arguments[s+1];e&&(
// 全局回调
e in l&&(o=l[e].apply(l,n)),
// 自定义回调
t[e]&&(i=t[e].apply(t,n)),
// beforeSend 回调返回 false 时取消 ajax 请求
"beforeSend"!==e||!1!==o&&!1!==i||(a=!0))}
// 请求方式转为大写
// 合并全局参数到默认参数，全局回调函数不覆盖
c(l,((t,e)=>{o.indexOf(t)<0&&(n[t]=e)}));const p=(
// 参数合并
t=e.extend({},n,t)).method.toUpperCase();
// 默认使用当前页面 URL
// 需要发送的数据
// GET/HEAD 请求和 processData 为 true 时，转换为查询字符串格式，特殊格式不转换
let h;
// JSONP
if(t.url||(t.url=window.location.toString()),h=($(p)||t.processData)&&t.data&&[ArrayBuffer,Blob,Document,FormData].indexOf(t.data.constructor)<0?s(t.data)?t.data:e.param(t.data):t.data,
// 对于 GET、HEAD 类型的请求，把 data 数据添加到 URL 中
$(p)&&h&&(
// 查询字符串拼接到 URL 中
t.url=C(t.url,h),h=null),"jsonp"===t.dataType){
// URL 中添加自动生成的回调函数名
const n=i(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,o=C(t.url,t.jsonp+"="+n);if(d.options=t,r(w.ajaxStart,d),u("beforeSend",null),a)return;let s,c=document.createElement("script");
// 创建 script
return c.type="text/javascript",
// 创建 script 失败
c.onerror=function(){s&&clearTimeout(s),r(w.ajaxError,d),u("error",null,"scripterror"),r(w.ajaxComplete,d),u("complete",null,"scripterror")},c.src=o,
// 处理
window[n]=function(t){s&&clearTimeout(s),d.data=t,r(w.ajaxSuccess,d),u("success",t,"success",null),e(c).remove(),c=null,delete window[n]},e("head").append(c),void(t.timeout>0&&(s=setTimeout((()=>{e(c).remove(),c=null,r(w.ajaxError,d),u("error",null,"timeout")}),t.timeout)))}
// GET/HEAD 请求的缓存处理
$(p)&&!t.cache&&(t.url=C(t.url,"_="+Date.now()));
// 创建 XHR
const m=new XMLHttpRequest;let f;return m.open(p,t.url,t.async,t.username,t.password),(t.contentType||h&&!$(p)&&!1!==t.contentType)&&m.setRequestHeader("Content-Type",t.contentType),
// 设置 Accept
"json"===t.dataType&&m.setRequestHeader("Accept","application/json, text/javascript"),
// 添加 headers
t.headers&&c(t.headers,((t,e)=>{m.setRequestHeader(t,e)})),
// 检查是否是跨域请求
void 0===t.crossDomain&&(t.crossDomain=/^([\w-]+:)?\/\/([^/]+)/.test(t.url)&&RegExp.$2!==window.location.host),t.crossDomain||m.setRequestHeader("X-Requested-With","XMLHttpRequest"),t.xhrFields&&c(t.xhrFields,((t,e)=>{m[t]=e})),d.xhr=m,d.options=t,m.onload=function(){f&&clearTimeout(f);
// 包含成功或错误代码的字符串
let e,n,
// AJAX 返回的 HTTP 响应码是否表示成功
o=m.status>=200&&m.status<300||0===m.status;if(o)if(e=204===m.status||"HEAD"===p?"nocontent":304===m.status?"notmodified":"success","json"===t.dataType){try{n=JSON.parse(m.responseText),d.data=n}catch(t){e="parsererror",r(w.ajaxError,d),u("error",m,e)}"parsererror"!==e&&(r(w.ajaxSuccess,d),u("success",n,e,m))}else n="text"===m.responseType||""===m.responseType?m.responseText:m.response,d.data=n,r(w.ajaxSuccess,d),u("success",n,e,m);else e="error",r(w.ajaxError,d),u("error",m,e);
// statusCode
c([l.statusCode,t.statusCode],((t,i)=>{i&&i[m.status]&&(o?i[m.status](n,e,m):i[m.status](m,e))})),r(w.ajaxComplete,d),u("complete",m,e)},m.onerror=function(){f&&clearTimeout(f),r(w.ajaxError,d),u("error",m,m.statusText),r(w.ajaxComplete,d),u("complete",m,"error")},m.onabort=function(){let t="abort";f&&(t="timeout",clearTimeout(f)),r(w.ajaxError,d),u("error",m,t),r(w.ajaxComplete,d),u("complete",m,t)},
// ajax start 回调
r(w.ajaxStart,d),u("beforeSend",m),a||(
// Timeout
t.timeout>0&&(f=setTimeout((()=>{m.abort()}),t.timeout)),
// 发送 XHR
m.send(h)),m}}),
// 监听全局事件
// 通过 $(document).on('success.mdui.ajax', function (event, params) {}) 调用时，包含两个参数
// event: 事件对象
// params: {
//   xhr: XMLHttpRequest 对象
//   options: ajax 请求的配置参数
//   data: ajax 请求返回的数据
// }
// 全局 Ajax 事件快捷方法
// $(document).ajaxStart(function (event, xhr, options) {})
// $(document).ajaxSuccess(function (event, xhr, options, data) {})
// $(document).ajaxError(function (event, xhr, options) {})
// $(document).ajaxComplete(function (event, xhr, options) {})
c(w,((t,n)=>{e.fn[t]=function(t){return this.on(n,((e,n)=>{t(e,n.xhr,n.options,n.data)}))}})),e}(),n=e(document),o=e(window),i={};
/**
   * =============================================================================
   * ************   定义全局变量   ************
   * =============================================================================
   */!function(){const t=[];
/**
     * 写入队列
     * @param queueName 对列名
     * @param func 函数名，该参数为空时，返回所有队列
     */i.queue=function(e,n){if(void 0===t[e]&&(t[e]=[]),void 0===n)return t[e];t[e].push(n)},
/**
     * 从队列中移除第一个函数，并执行该函数
     * @param queueName
     */
i.dequeue=function(e){void 0!==t[e]&&t[e].length&&t[e].shift()()}}();
/**
   * touch 事件后的 500ms 内禁用 mousedown 事件
   *
   * 不支持触控的屏幕上事件顺序为 mousedown -> mouseup -> click
   * 支持触控的屏幕上事件顺序为 touchstart -> touchend -> mousedown -> mouseup -> click
   */
var s={touches:0,
/**
     * 该事件是否被允许
     * 在执行事件前调用该方法判断事件是否可以执行
     * @param e
     * @returns {boolean}
     */
isAllow:function(t){let e=!0;return s.touches&&["mousedown","mouseup","mousemove","click","mouseover","mouseout","mouseenter","mouseleave"].indexOf(t.type)>-1&&(
// 触发了 touch 事件后阻止鼠标事件
e=!1),e},
/**
     * 在 touchstart 和 touchmove、touchend、touchcancel 事件中调用该方法注册事件
     * @param e
     */
register:function(t){"touchstart"===t.type?
// 触发了 touch 事件
s.touches+=1:["touchmove","touchend","touchcancel"].indexOf(t.type)>-1&&
// touch 事件结束 500ms 后解除对鼠标事件的阻止
setTimeout((()=>{s.touches&&(s.touches-=1)}),500)},start:"touchstart mousedown",move:"touchmove mousemove",end:"touchend mouseup",cancel:"touchcancel mouseleave",unlock:"touchend touchmove touchcancel"};
// 测试事件
// 在每一个事件中都使用 TouchHandler.isAllow(e) 判断事件是否可执行
// 在 touchstart 和 touchmove、touchend、touchcancel
// (function () {

//   $document
//     .on(TouchHandler.start, function (e) {
//       if (!TouchHandler.isAllow(e)) {
//         return;
//       }
//       TouchHandler.register(e);
//       console.log(e.type);
//     })
//     .on(TouchHandler.move, function (e) {
//       if (!TouchHandler.isAllow(e)) {
//         return;
//       }
//       console.log(e.type);
//     })
//     .on(TouchHandler.end, function (e) {
//       if (!TouchHandler.isAllow(e)) {
//         return;
//       }
//       console.log(e.type);
//     })
//     .on(TouchHandler.unlock, TouchHandler.register);
// })();
e((()=>{
// 避免页面加载完后直接执行css动画
// https://css-tricks.com/transitions-only-after-page-load/
setTimeout((()=>{e("body").addClass("mdui-loaded")}),0)}));
/**
   * =============================================================================
   * ************   MDUI 内部使用的函数   ************
   * =============================================================================
   */
/**
   * 解析 DATA API 的参数
   * @param str
   * @returns {*}
   */
const a=function(t){let e={};if(null===t||!t)return e;if("object"==typeof t)return t;
/* jshint ignore:start */const n=t.indexOf("{");try{e=new Function("","var json = "+t.substr(n)+"; return JSON.parse(JSON.stringify(json));")()}catch(t){}
/* jshint ignore:end */return e},c=function(t,n,o,i,s){s||(s={}),s.inst=o;const a=t+".mdui."+n;
// jQuery 事件
"undefined"!=typeof jQuery&&jQuery(i).trigger(a,s),
// JQ 事件
e(i).trigger(a,s)};
/**
   * 绑定组件的事件
   * @param eventName 事件名
   * @param pluginName 插件名
   * @param inst 插件实例
   * @param trigger 在该元素上触发
   * @param obj 事件参数
   */
/**
   * =============================================================================
   * ************   开放的常用方法   ************
   * =============================================================================
   */
e.fn.extend({
/**
     * 执行强制重绘
     */
reflow:function(){return this.each((function(){return this.clientLeft}))},
/**
     * 设置 transition 时间
     * @param duration
     */
transition:function(t){return"string"!=typeof t&&(t+="ms"),this.each((function(){this.style.webkitTransitionDuration=t,this.style.transitionDuration=t}))},
/**
     * transition 动画结束回调
     * @param callback
     * @returns {transitionEnd}
     */
transitionEnd:function(t){const e=["webkitTransitionEnd","transitionend"];let n;const o=this;function i(s){if(s.target===this)for(t.call(this,s),n=0;n<e.length;n++)o.off(e[n],i)}if(t)for(n=0;n<e.length;n++)o.on(e[n],i);return this},
/**
     * 设置 transform-origin 属性
     * @param transformOrigin
     */
transformOrigin:function(t){return this.each((function(){this.style.webkitTransformOrigin=t,this.style.transformOrigin=t}))},
/**
     * 设置 transform 属性
     * @param transform
     */
transform:function(t){return this.each((function(){this.style.webkitTransform=t,this.style.transform=t}))}}),e.extend({
/**
     * 创建并显示遮罩
     * @param zIndex 遮罩层的 z-index
     */
showOverlay:function(t){let n=e(".mdui-overlay");n.length?(n.data("isDeleted",0),void 0!==t&&n.css("z-index",t)):(void 0===t&&(t=2e3),n=e('<div class="mdui-overlay">').appendTo(document.body).reflow().css("z-index",t));let o=n.data("overlay-level")||0;return n.data("overlay-level",++o).addClass("mdui-overlay-show")},
/**
     * 隐藏遮罩层
     * @param force 是否强制隐藏遮罩
     */
hideOverlay:function(t){const n=e(".mdui-overlay");if(!n.length)return;let o=t?1:n.data("overlay-level");o>1?n.data("overlay-level",--o):n.data("overlay-level",0).removeClass("mdui-overlay-show").data("isDeleted",1).transitionEnd((()=>{n.data("isDeleted")&&n.remove()}))},
/**
     * 锁定屏幕
     */
lockScreen:function(){const t=e("body"),n=t.width();
// 不直接把 body 设为 box-sizing: border-box，避免污染全局样式
t.addClass("mdui-locked").width(n);let o=t.data("lockscreen-level")||0;t.data("lockscreen-level",++o)},
/**
     * 解除屏幕锁定
     * @param force 是否强制解锁屏幕
     */
unlockScreen:function(t){const n=e("body");let o=t?1:n.data("lockscreen-level");o>1?n.data("lockscreen-level",--o):n.data("lockscreen-level",0).removeClass("mdui-locked").width("")},
/**
     * 函数节流
     * @param fn
     * @param delay
     * @returns {Function}
     */
throttle:function(t,e){let n=null;return(!e||e<16)&&(e=16),function(){const o=this,i=arguments;null===n&&(n=setTimeout((()=>{t.apply(o,i),n=null}),e))}}}),
/**
   * 生成唯一 id
   * @param string name id的名称，若该名称对于的guid不存在，则生成新的guid并返回；若已存在，则返回原有guid
   * @returns {string}
   */
function(){const t={};e.extend({guid:function(e){if(void 0!==e&&void 0!==t[e])return t[e];function n(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}const o=n()+n()+"-"+n()+"-"+n()+"-"+n()+"-"+n()+n()+n();return void 0!==e&&(t[e]=o),o}})}(),
/**
   * =============================================================================
   * ************   Mutation   ************
   * =============================================================================
   */
function(){
/**
     * API 初始化代理, 当 DOM 突变再次执行代理的初始化函数. 使用方法:
     *
     * 1. 代理组件 API 执行初始化函数, selector 必须为字符串.
     *    mdui.mutation(selector, apiInit);
     *    mutation 会执行 $(selector).each(apiInit)
     *
     * 2. 突变时, 再次执行代理的初始化函数
     *    mdui.mutation()        等价 $(document).mutation()
     *    $(selector).mutation() 在 selector 节点内进行 API 初始化
     *
     * 原理:
     *
     *    mutation 执行了 $().data('mdui.mutation', [selector]).
     *    当元素被重构时, 该数据会丢失, 由此判断是否突变.
     *
     * 提示:
     *
     *    类似 Drawer 可以使用委托事件完成.
     *    类似 Collapse 需要知道 DOM 发生突变, 并再次进行初始化.
     */
const n={};function o(t,n,o,i,s){const a=e(o);let c=a.data("mdui.mutation");c||(c=[],a.data("mdui.mutation",c)),-1===c.indexOf(t)&&(c.push(t),n.call(o,i,s))}e.fn.extend({mutation:function(){return this.each((function(t,i){const s=e(this);e.each(n,((e,n)=>{s.is(e)&&o(e,n,s[0],t,i),s.find(e).each((function(t,i){o(e,n,this,t,i)}))}))}))}}),t.mutation=function(t,i){"string"==typeof t&&"function"==typeof i?(n[t]=i,e(t).each((function(e,n){o(t,i,this,e,n)}))):e(document).mutation()}}(),
/**
   * =============================================================================
   * ************   Headroom.js   ************
   * =============================================================================
   */
t.Headroom=function(){
/**
     * 默认参数
     * @type {{}}
     */
const t={tolerance:5,// 滚动条滚动多少距离开始隐藏或显示元素，{down: num, up: num}，或数字
offset:0,// 在页面顶部多少距离内滚动不会隐藏元素
initialClass:"mdui-headroom",// 初始化时添加的类
pinnedClass:"mdui-headroom-pinned-top",// 元素固定时添加的类
unpinnedClass:"mdui-headroom-unpinned-top"};
/**
     * Headroom
     * @param selector
     * @param opts
     * @constructor
     */function n(n,o){const i=this;if(i.$headroom=e(n).eq(0),!i.$headroom.length)return;
// 已通过自定义属性实例化过，不再重复实例化
const s=i.$headroom.data("mdui.headroom");if(s)return s;i.options=e.extend({},t,o||{});
// 数值转为 {down: bum, up: num}
const a=i.options.tolerance;a!==Object(a)&&(i.options.tolerance={down:a,up:a}),i._init()}
/**
     * 初始化
     * @private
     */n.prototype._init=function(){const t=this;t.state="pinned",t.$headroom.addClass(t.options.initialClass).removeClass(t.options.pinnedClass+" "+t.options.unpinnedClass),t.inited=!1,t.lastScrollY=0,t._attachEvent()},
/**
     * 监听滚动事件
     * @private
     */
n.prototype._attachEvent=function(){const t=this;t.inited||(t.lastScrollY=window.pageYOffset,t.inited=!0,o.on("scroll",(()=>{t._scroll()})))},
/**
     * 滚动时的处理
     * @private
     */
n.prototype._scroll=function(){const t=this;t.rafId=window.requestAnimationFrame((()=>{const e=window.pageYOffset,n=e>t.lastScrollY?"down":"up",o=Math.abs(e-t.lastScrollY)>=t.options.tolerance[n];e>t.lastScrollY&&e>=t.options.offset&&o?t.unpin():(e<t.lastScrollY&&o||e<=t.options.offset)&&t.pin(),t.lastScrollY=e}))};
/**
     * 动画结束回调
     * @param inst
     */
const i=function(t){"pinning"===t.state&&(t.state="pinned",c("pinned","headroom",t,t.$headroom)),"unpinning"===t.state&&(t.state="unpinned",c("unpinned","headroom",t,t.$headroom))};
/**
     * 固定住
     */return n.prototype.pin=function(){const t=this;"pinning"!==t.state&&"pinned"!==t.state&&t.$headroom.hasClass(t.options.initialClass)&&(c("pin","headroom",t,t.$headroom),t.state="pinning",t.$headroom.removeClass(t.options.unpinnedClass).addClass(t.options.pinnedClass).transitionEnd((()=>{i(t)})))},
/**
     * 不固定住
     */
n.prototype.unpin=function(){const t=this;"unpinning"!==t.state&&"unpinned"!==t.state&&t.$headroom.hasClass(t.options.initialClass)&&(c("unpin","headroom",t,t.$headroom),t.state="unpinning",t.$headroom.removeClass(t.options.pinnedClass).addClass(t.options.unpinnedClass).transitionEnd((()=>{i(t)})))},
/**
     * 启用
     */
n.prototype.enable=function(){const t=this;t.inited||t._init()},
/**
     * 禁用
     */
n.prototype.disable=function(){const t=this;t.inited&&(t.inited=!1,t.$headroom.removeClass([t.options.initialClass,t.options.pinnedClass,t.options.unpinnedClass].join(" ")),o.off("scroll",(()=>{t._scroll()})),window.cancelAnimationFrame(t.rafId))},
/**
     * 获取当前状态 pinning | pinned | unpinning | unpinned
     */
n.prototype.getState=function(){return this.state},n}(),
/**
   * =============================================================================
   * ************   Headroom 自定义属性 API   ************
   * =============================================================================
   */
e((()=>{t.mutation("[mdui-headroom]",(function(){const n=e(this),o=a(n.attr("mdui-headroom"));let i=n.data("mdui.headroom");i||(i=new t.Headroom(n,o),n.data("mdui.headroom",i))}))}));
/**
   * =============================================================================
   * ************   供 Collapse、 Panel 调用的折叠内容块插件   ************
   * =============================================================================
   */
const l=function(){
/**
     * 默认参数
     */
const t={accordion:!1};
/**
     * 折叠内容块
     * @param selector
     * @param opts
     * @param namespace
     * @constructor
     */function n(n,o,i){const s=this;
// 命名空间
s.ns=i;
// 类名
const a="mdui-"+s.ns+"-item";if(s.class_item=a,s.class_item_open=a+"-open",s.class_header=a+"-header",s.class_body=a+"-body",
// 折叠面板元素
s.$collapse=e(n).eq(0),!s.$collapse.length)return;
// 已通过自定义属性实例化过，不再重复实例化
const c=s.$collapse.data("mdui."+s.ns);if(c)return c;s.options=e.extend({},t,o||{}),s.$collapse.on("click","."+s.class_header,(function(){const t=e(this).parent("."+s.class_item);s.$collapse.children(t).length&&s.toggle(t)})),
// 绑定关闭按钮
s.$collapse.on("click","[mdui-"+s.ns+"-item-close]",(function(){const t=e(this).parents("."+s.class_item).eq(0);s._isOpen(t)&&s.close(t)}))}
/**
     * 指定 item 是否处于打开状态
     * @param $item
     * @returns {boolean}
     * @private
     */n.prototype._isOpen=function(t){return t.hasClass(this.class_item_open)},
/**
     * 获取指定 item
     * @param item
     * @returns {*}
     * @private
     */
n.prototype._getItem=function(t){const n=this;return parseInt(t)===t?n.$collapse.children("."+n.class_item).eq(t):e(t).eq(0)};
/**
     * 动画结束回调
     * @param inst
     * @param $content
     * @param $item
     */
const o=function(t,e,n){t._isOpen(n)?(e.transition(0).height("auto").reflow().transition(""),c("opened",t.ns,t,n[0])):(e.height(""),c("closed",t.ns,t,n[0]))};
/**
     * 打开指定面板项
     * @param item 面板项的索引号或 DOM 元素或 CSS 选择器
     */return n.prototype.open=function(t){const n=this,i=n._getItem(t);if(n._isOpen(i))return;
// 关闭其他项
n.options.accordion&&n.$collapse.children("."+n.class_item_open).each((function(){const t=e(this);t!==i&&n.close(t)}));const s=i.children("."+n.class_body);s.height(s[0].scrollHeight).transitionEnd((()=>{o(n,s,i)})),c("open",n.ns,n,i[0]),i.addClass(n.class_item_open)},
/**
     * 关闭指定项
     * @param item 面板项的索引号或 DOM 元素或 CSS 选择器
     */
n.prototype.close=function(t){const e=this,n=e._getItem(t);if(!e._isOpen(n))return;const i=n.children("."+e.class_body);c("close",e.ns,e,n[0]),n.removeClass(e.class_item_open),i.transition(0).height(i[0].scrollHeight).reflow().transition("").height("").transitionEnd((()=>{o(e,i,n)}))},
/**
     * 切换指定项的状态
     * @param item 面板项的索引号或 DOM 元素或 CSS 选择器或 JQ 对象
     */
n.prototype.toggle=function(t){const e=this,n=e._getItem(t);e._isOpen(n)?e.close(n):e.open(n)},
/**
     * 打开所有项
     */
n.prototype.openAll=function(){const t=this;t.$collapse.children("."+t.class_item).each((function(){const n=e(this);t._isOpen(n)||t.open(n)}))},
/**
     * 关闭所有项
     */
n.prototype.closeAll=function(){const t=this;t.$collapse.children("."+t.class_item).each((function(){const n=e(this);t._isOpen(n)&&t.close(n)}))},n}();
/**
   * =============================================================================
   * ************   Collapse 折叠内容块插件   ************
   * =============================================================================
   */
/**
   * =============================================================================
   * ************   涟漪   ************
   * =============================================================================
   *
   * Inspired by https://github.com/nolimits4web/Framework7/blob/master/src/js/fast-clicks.js
   * https://github.com/nolimits4web/Framework7/blob/master/LICENSE
   *
   * Inspired by https://github.com/fians/Waves
   */var d;return t.Collapse=function(t,e){return new l(t,e,"collapse")},
/**
   * =============================================================================
   * ************   Collapse 自定义属性   ************
   * =============================================================================
   */
e((()=>{t.mutation("[mdui-collapse]",(function(){const n=e(this);let o=n.data("mdui.collapse");if(!o){const e=a(n.attr("mdui-collapse"));o=new t.Collapse(n,e),n.data("mdui.collapse",o)}}))})),
/**
   * =============================================================================
   * ************   Table 表格   ************
   * =============================================================================
   */
function(){
/**
     * 生成 checkbox 的 HTML 结构
     * @param tag
     * @returns {string}
     */
const n=function(t){return"<"+t+' class="mdui-table-cell-checkbox"><label class="mdui-checkbox"><input type="checkbox"/><i class="mdui-checkbox-icon"></i></label></'+t+">"};
/**
     * Table 表格
     * @param selector
     * @constructor
     */function o(t){const n=this;n.$table=e(t).eq(0),n.$table.length&&n.init()}
/**
     * 初始化
     */o.prototype.init=function(){const t=this;t.$thRow=t.$table.find("thead tr"),t.$tdRows=t.$table.find("tbody tr"),t.$tdCheckboxs=e(),t.selectable=t.$table.hasClass("mdui-table-selectable"),t.selectedRow=0,t._updateThCheckbox(),t._updateTdCheckbox(),t._updateNumericCol()},
/**
     * 更新表头 checkbox 的状态
     */
o.prototype._updateThCheckboxStatus=function(){const t=this,e=t.$thCheckbox[0];e.checked=t.selectedRow===t.$tdRows.length,e.indeterminate=t.selectedRow&&t.selectedRow!==t.$tdRows.length},
/**
     * 更新表格行的 checkbox
     */
o.prototype._updateTdCheckbox=function(){const t=this;t.$tdRows.each((function(){const o=e(this);
// 移除旧的 checkbox
if(o.find(".mdui-table-cell-checkbox").remove(),!t.selectable)return;
// 创建 DOM
const i=e(n("td")).prependTo(o).find('input[type="checkbox"]');
// 默认选中的行
o.hasClass("mdui-table-row-selected")&&(i[0].checked=!0,t.selectedRow++),t._updateThCheckboxStatus(),
// 绑定事件
i.on("change",(()=>{i[0].checked?(o.addClass("mdui-table-row-selected"),t.selectedRow++):(o.removeClass("mdui-table-row-selected"),t.selectedRow--),t._updateThCheckboxStatus()})),t.$tdCheckboxs=t.$tdCheckboxs.add(i)}))},
/**
     * 更新表头的 checkbox
     */
o.prototype._updateThCheckbox=function(){const t=this;
// 移除旧的 checkbox
t.$thRow.find(".mdui-table-cell-checkbox").remove(),t.selectable&&(t.$thCheckbox=e(n("th")).prependTo(t.$thRow).find('input[type="checkbox"]').on("change",(()=>{const n=t.$thCheckbox[0].checked;t.selectedRow=n?t.$tdRows.length:0,t.$tdCheckboxs.each(((t,e)=>{e.checked=n})),t.$tdRows.each(((t,o)=>{e(o)[n?"addClass":"removeClass"]("mdui-table-row-selected")}))})))},
/**
     * 更新数值列
     */
o.prototype._updateNumericCol=function(){const t=this;let n,o;t.$thRow.find("th").each(((i,s)=>{n=e(s),t.$tdRows.each((function(){o=e(this);const t=n.hasClass("mdui-table-col-numeric")?"addClass":"removeClass";o.find("td").eq(i)[t]("mdui-table-col-numeric")}))}))},
/**
     * 初始化表格
     */
t.mutation(".mdui-table",(function(){const t=e(this);t.data("mdui.table")||t.data("mdui.table",new o(t))})),
/**
     * 更新表格
     */
t.updateTables=function(){e(arguments.length?arguments[0]:".mdui-table").each((function(){const t=e(this),n=t.data("mdui.table");n?n.init():t.data("mdui.table",new o(t))}))}}(),d={
/**
       * 延时，避免手指滑动时也触发涟漪（单位：毫秒）
       */
delay:200,
/**
       * 显示涟漪动画
       * @param e
       * @param $ripple
       */
show:function(t,n){
// 鼠标右键不产生涟漪
if(2===t.button)return;
// 点击位置坐标
let o;o="touches"in t&&t.touches.length?t.touches[0]:t;const i=o.pageX,s=o.pageY,a=n.offset(),c=i-a.left,l=s-a.top,d=n.innerHeight(),r=n.innerWidth(),u=Math.max(Math.pow(Math.pow(d,2)+Math.pow(r,2),.5),48),p="translate3d("+(r/2-c)+"px, "+(d/2-l)+"px, 0) scale(1)";
// 涟漪的 DOM 结构
e('<div class="mdui-ripple-wave" style="width: '+u+"px; height: "+u+"px; margin-top:-"+u/2+"px; margin-left:-"+u/2+"px; left:"+c+"px; top:"+l+'px;"></div>').data("translate",p).prependTo(n).reflow().transform(p)},
/**
       * 隐藏涟漪动画
       */
hide:function(t,n){const o=e(n||this);o.children(".mdui-ripple-wave").each((function(){!
/**
     * 隐藏并移除涟漪
     * @param $wave
     */
function(t){if(!t.length||t.data("isRemoved"))return;t.data("isRemoved",!0);let e=setTimeout((()=>{t.remove()}),400);const n=t.data("translate");t.addClass("mdui-ripple-wave-fill").transform(n.replace("scale(1)","scale(1.01)")).transitionEnd((()=>{clearTimeout(e),t.addClass("mdui-ripple-wave-out").transform(n.replace("scale(1)","scale(1.01)")),e=setTimeout((()=>{t.remove()}),700),setTimeout((()=>{t.transitionEnd((()=>{clearTimeout(e),t.remove()}))}),0)}))}
/**
     * 显示涟漪，并绑定 touchend 等事件
     * @param e
     */(e(this))})),o.off("touchmove touchend touchcancel mousemove mouseup mouseleave",d.hide)}},
// 初始化绑定的事件
n.on(s.start,(function(t){if(!s.isAllow(t))return;
// Chrome 59 点击滚动条时，会在 document 上触发事件
if(s.register(t),t.target===document)return;let n;const o=e(t.target);
// 获取含 .mdui-ripple 类的元素
if(n=o.hasClass("mdui-ripple")?o:o.parents(".mdui-ripple").eq(0),n.length){
// 禁用状态的元素上不产生涟漪效果
if(n[0].disabled||null!==n.attr("disabled"))return;if("touchstart"===t.type){let e=!1;
// toucstart 触发指定时间后开始涟漪动画
var i=setTimeout((()=>{i=null,d.show(t,n)}),d.delay);const o=function(o){
// 如果手指没有移动，且涟漪动画还没有开始，则开始涟漪动画
i&&(clearTimeout(i),i=null,d.show(t,n)),e||(e=!0,d.hide(o,n))},s=function(t){i&&(clearTimeout(i),i=null),o(t)};
// 手指移动后，移除涟漪动画
n.on("touchmove",s).on("touchend touchcancel",o)}else d.show(t,n),n.on("touchmove touchend touchcancel mousemove mouseup mouseleave",d.hide)}})).on(s.unlock,s.register),
// 绑定事件
n.on("input focus blur",".mdui-textfield-input",{useCapture:!0},(function(t){const n=t.target,o=e(n),i=t.type,s=o.val(),a=void t.detail,c=void t.detail,l=o.attr("type")||"";if(["checkbox","button","submit","range","radio","image"].indexOf(l)>=0)return;const d=o.parent(".mdui-textfield");
// 输入框是否聚焦
// textarea 高度自动调整
if("focus"===i&&d.addClass("mdui-textfield-focus"),"blur"===i&&d.removeClass("mdui-textfield-focus"),
// 输入框是否为空
"blur"!==i&&"input"!==i||d[s&&""!==s?"addClass":"removeClass"]("mdui-textfield-not-empty"),
// 输入框是否禁用
d[n.disabled?"addClass":"removeClass"]("mdui-textfield-disabled"),
// 表单验证
"input"!==i&&"blur"!==i||c||!n.validity||d[n.validity.valid?"removeClass":"addClass"]("mdui-textfield-invalid-html5"),"textarea"===t.target.nodeName.toLowerCase()){
// IE bug：textarea 的值仅为多个换行，不含其他内容时，textarea 的高度不准确
//         此时，在计算高度前，在值的开头加入一个空格，计算完后，移除空格
const t=o.val();let e=!1;""===t.replace(/[\r\n]/g,"")&&(o.val(" "+t),e=!0),
// 设置 textarea 高度
o.height("");const i=o.height(),s=n.scrollHeight;s>i&&o.height(s),
// 计算完，还原 textarea 的值
e&&o.val(t)}
// 实时字数统计
a&&d.find(".mdui-textfield-counter").remove();const r=o.attr("maxlength");r&&((a||c)&&e('<div class="mdui-textfield-counter"><span class="mdui-textfield-counter-inputed"></span> / '+r+"</div>").appendTo(d),d.find(".mdui-textfield-counter-inputed").text(s.length.toString())),
// 含 帮助文本、错误提示、字数统计 时，增加文本框底部内边距
(d.find(".mdui-textfield-helper").length||d.find(".mdui-textfield-error").length||r)&&d.addClass("mdui-textfield-has-bottom")})),
// 可展开文本框展开
n.on("click",".mdui-textfield-expandable .mdui-textfield-icon",(function(){e(this).parents(".mdui-textfield").addClass("mdui-textfield-expanded").find(".mdui-textfield-input")[0].focus()})),
// 可展开文本框关闭
n.on("click",".mdui-textfield-expanded .mdui-textfield-close",(function(){e(this).parents(".mdui-textfield").removeClass("mdui-textfield-expanded").find(".mdui-textfield-input").val("")})),
/**
     * 通过 JS 更新了表单内容，需要重新进行表单处理
     * @param- 如果传入了 .mdui-textfield 所在的 DOM 元素，则更新该文本框；否则，更新所有文本框
     */
t.updateTextFields=function(){e(arguments.length?arguments[0]:".mdui-textfield").each((function(){e(this).find(".mdui-textfield-input").trigger("input",{reInit:!0})}))},e((()=>{
/**
     * 初始化文本框
     */
t.mutation(".mdui-textfield",(function(){e(this).find(".mdui-textfield-input").trigger("input",{domLoadedEvent:!0})}))})),
/**
   * =============================================================================
   * ************   Slider 滑块   ************
   * =============================================================================
   */
function(){
/**
     * 滑块的值变更后修改滑块样式
     * @param $slider
     */
const o=function(t){const e=t.data(),n=e.$track,o=e.$fill,i=e.$thumb,s=e.$input,a=e.min,c=e.max,l=e.disabled,d=e.discrete,r=e.$thumbText,u=s.val(),p=(u-a)/(c-a)*100;o.width(p+"%"),n.width(100-p+"%"),l&&(o.css("padding-right","6px"),n.css("padding-left","6px")),i.css("left",p+"%"),d&&r.text(u),t[0===parseFloat(p)?"addClass":"removeClass"]("mdui-slider-zero")},i=function(t){const n=e('<div class="mdui-slider-track"></div>'),i=e('<div class="mdui-slider-fill"></div>'),s=e('<div class="mdui-slider-thumb"></div>'),a=t.find('input[type="range"]'),c=a[0].disabled;t[c?"addClass":"removeClass"]("mdui-slider-disabled"),
// 重新填充 HTML
t.find(".mdui-slider-track").remove(),t.find(".mdui-slider-fill").remove(),t.find(".mdui-slider-thumb").remove(),t.append(n).append(i).append(s);
// 间续型滑块
const l=t.hasClass("mdui-slider-discrete");let d;l&&(d=e("<span></span>"),s.empty().append(d)),t.data({$track:n,$fill:i,$thumb:s,$input:a,min:a.attr("min"),// 滑块最小值
max:a.attr("max"),// 滑块最大值
disabled:c,// 是否禁用状态
discrete:l,// 是否是间续型滑块
$thumbText:d}),
// 设置默认值
o(t)},a='.mdui-slider input[type="range"]';
/**
     * 重新初始化
     * @param $slider
     */n.on("input change",a,(function(){const t=e(this).parent();o(t)})).on(s.start,a,(function(t){if(s.isAllow(t)&&(s.register(t),!this.disabled)){e(this).parent().addClass("mdui-slider-focus")}})).on(s.end,a,(function(t){if(s.isAllow(t)&&!this.disabled){e(this).parent().removeClass("mdui-slider-focus")}})).on(s.unlock,a,s.register),
/**
     * 重新初始化滑块（强制重新初始化）
     */
t.updateSliders=function(){e(arguments.length?arguments[0]:".mdui-slider").each((function(){i(e(this))}))},e((()=>{
/**
       * 页面加载完后自动初始化（未初始化时，可以调用该方法初始化）
       */
t.mutation(".mdui-slider",(function(){i(e(this))}))}))}(),
/**
   * =============================================================================
   * ************   Fab 浮动操作按钮   ************
   * =============================================================================
   */
t.Fab=function(){
/**
     * 默认参数
     * @type {{}}
     */
const t={trigger:"hover"};
/**
     * 浮动操作按钮实例
     * @param selector 选择器或 HTML 字符串或 DOM 元素或 JQ 对象
     * @param opts
     * @constructor
     */function o(o,i){const a=this;if(a.$fab=e(o).eq(0),!a.$fab.length)return;
// 已通过 data 属性实例化过，不再重复实例化
const c=a.$fab.data("mdui.fab");if(c)return c;a.options=e.extend({},t,i||{}),a.state="closed",a.$btn=a.$fab.find(".mdui-fab"),a.$dial=a.$fab.find(".mdui-fab-dial"),a.$dialBtns=a.$dial.find(".mdui-fab"),"hover"===a.options.trigger&&(a.$btn.on("touchstart mouseenter",(()=>{a.open()})),a.$fab.on("mouseleave",(()=>{a.close()}))),"click"===a.options.trigger&&a.$btn.on(s.start,(()=>{a.open()})),
// 触摸屏幕其他地方关闭快速拨号
n.on(s.start,(t=>{e(t.target).parents(".mdui-fab-wrapper").length||a.close()}))}
/**
     * 打开菜单
     */return o.prototype.open=function(){const t=this;"opening"!==t.state&&"opened"!==t.state&&(
// 为菜单中的按钮添加不同的 transition-delay
t.$dialBtns.each(((e,n)=>{n.style["transition-delay"]=n.style["-webkit-transition-delay"]=15*(t.$dialBtns.length-e)+"ms"})),t.$dial.css("height","auto").addClass("mdui-fab-dial-show"),
// 如果按钮中存在 .mdui-fab-opened 的图标，则进行图标切换
t.$btn.find(".mdui-fab-opened").length&&t.$btn.addClass("mdui-fab-opened"),t.state="opening",c("open","fab",t,t.$fab),
// 打开顺序为从下到上逐个打开，最上面的打开后才表示动画完成
t.$dialBtns.eq(0).transitionEnd((()=>{t.$btn.hasClass("mdui-fab-opened")&&(t.state="opened",c("opened","fab",t,t.$fab))})))},
/**
     * 关闭菜单
     */
o.prototype.close=function(){const t=this;"closing"!==t.state&&"closed"!==t.state&&(
// 为菜单中的按钮添加不同的 transition-delay
t.$dialBtns.each(((t,e)=>{e.style["transition-delay"]=e.style["-webkit-transition-delay"]=15*t+"ms"})),t.$dial.removeClass("mdui-fab-dial-show"),t.$btn.removeClass("mdui-fab-opened"),t.state="closing",c("close","fab",t,t.$fab),
// 从上往下依次关闭，最后一个关闭后才表示动画完成
t.$dialBtns.eq(-1).transitionEnd((()=>{t.$btn.hasClass("mdui-fab-opened")||(t.state="closed",c("closed","fab",t,t.$fab),t.$dial.css("height",0))})))},
/**
     * 切换菜单的打开状态
     */
o.prototype.toggle=function(){const t=this;"opening"===t.state||"opened"===t.state?t.close():"closing"!==t.state&&"closed"!==t.state||t.open()},
/**
     * 获取当前菜单状态
     * @returns {'opening'|'opened'|'closing'|'closed'}
     */
o.prototype.getState=function(){return this.state},
/**
     * 以动画的形式显示浮动操作按钮
     */
o.prototype.show=function(){this.$fab.removeClass("mdui-fab-hide")},
/**
     * 以动画的形式隐藏浮动操作按钮
     */
o.prototype.hide=function(){this.$fab.addClass("mdui-fab-hide")},o}(),
/**
   * =============================================================================
   * ************   Fab DATA API   ************
   * =============================================================================
   */
e((()=>{
// mouseenter 不冒泡，无法进行事件委托，这里用 mouseover 代替。
// 不管是 click 、 mouseover 还是 touchstart ，都先初始化。
n.on("touchstart mousedown mouseover","[mdui-fab]",(function(n){const o=e(this);let i=o.data("mdui.fab");if(!i){const e=a(o.attr("mdui-fab"));i=new t.Fab(o,e),o.data("mdui.fab",i)}}))})),
/**
   * =============================================================================
   * ************   Select 下拉选择   ************
   * =============================================================================
   */
t.Select=function(){
/**
     * 默认参数
     */
const t={position:"auto",// 下拉框位置，auto、bottom、top
gutter:16};
/**
     * 调整菜单位置
     * @param _this Select 实例
     */
/**
     * 下拉选择
     * @param selector
     * @param opts
     * @constructor
     */
function i(o,i){const s=this,a=s.$selectNative=e(o).eq(0);if(!a.length)return;
// 已通过自定义属性实例化过，不再重复实例化
const c=a.data("mdui.select");if(c)return c;a.hide(),s.options=e.extend({},t,i||{}),
// 为当前 select 生成唯一 ID
s.uniqueID=e.guid(),s.state="closed",
// 生成 select
s.handleUpdate(),
// 点击 select 外面区域关闭
n.on("click touchstart",(t=>{const n=e(t.target);"opening"!==s.state&&"opened"!==s.state||n.is(s.$select)||e.contains(s.$select[0],n[0])||s.close()}))}
/**
     * 对原生 select 组件进行了修改后，需要调用该方法
     */i.prototype.handleUpdate=function(){const t=this;"opening"!==t.state&&"opened"!==t.state||t.close();const n=t.$selectNative;
// 当前的值和文本
t.value=n.val(),t.text="",
// 生成 HTML
// 菜单项
t.$items=e(),n.find("option").each(((n,o)=>{const i={value:o.value,text:o.textContent,disabled:o.disabled,selected:t.value===o.value,index:n};t.value===i.value&&(t.text=i.text,t.selectedIndex=n),t.$items=t.$items.add(e('<div class="mdui-select-menu-item mdui-ripple"'+(i.disabled?" disabled":"")+(i.selected?" selected":"")+">"+i.text+"</div>").data(i))})),
// selected
t.$selected=e('<span class="mdui-select-selected">'+t.text+"</span>"),
// select
t.$select=e('<div class="mdui-select mdui-select-position-'+t.options.position+'" style="'+t.$selectNative.attr("style")+'" id="'+t.uniqueID+'"></div>').show().append(t.$selected),
// menu
t.$menu=e('<div class="mdui-select-menu"></div>').appendTo(t.$select).append(t.$items),e("#"+t.uniqueID).remove(),n.after(t.$select),
// 根据 select 的 size 属性设置高度，默认为 6
t.size=parseInt(t.$selectNative.attr("size")),(!t.size||t.size<0)&&(t.size=t.$items.length,t.size>8&&(t.size=8)),
// 点击选项时关闭下拉菜单
t.$items.on("click",(function(){if("closing"===t.state)return;const o=e(this);if(o.data("disabled"))return;const i=o.data();t.$selected.text(i.text),n.val(i.value),t.$items.removeAttr("selected"),o.attr("selected",""),t.selectedIndex=i.index,t.value=i.value,t.text=i.text,n.trigger("change"),t.close()})),
// 点击 select 时打开下拉菜单
t.$select.on("click",(n=>{const o=e(n.target);
// 在菜单上点击时不打开
o.is(".mdui-select-menu")||o.is(".mdui-select-menu-item")||t.toggle()}))};
/**
     * 动画结束回调
     * @param inst
     */
const s=function(t){t.$select.removeClass("mdui-select-closing"),"opening"===t.state&&(t.state="opened",c("opened","select",t,t.$selectNative),t.$menu.css("overflow-y","auto")),"closing"===t.state&&(t.state="closed",c("closed","select",t,t.$selectNative),
// 恢复样式
t.$select.width(""),t.$menu.css({"margin-top":"",height:"",width:""}))};
/**
     * 打开 Select
     */return i.prototype.open=function(){const t=this;"opening"!==t.state&&"opened"!==t.state&&(t.state="opening",c("open","select",t,t.$selectNative),function(t){
// 窗口高度
const e=o.height(),n=t.options.gutter,i=t.options.position,s=parseInt(t.$select.height()),a=t.$items.eq(0),c=parseInt(a.height()),l=parseInt(a.css("margin-top")),d=parseFloat(t.$select.width()+.01);
// 配置参数
// 必须比真实宽度多一点，不然会出现省略号
let r=c*t.size+2*l;
// var menuRealHeight = menuItemHeight * _this.$items.length + menuItemMargin * 2;
// 菜单是否出现了滚动条
// var isMenuScrollable = menuRealHeight > menuHeight;
// select 在窗口中的位置
const u=t.$select[0].getBoundingClientRect().top;let p,h;
// position 为 auto 时
if("auto"===i){
// 菜单高度不能超过窗口高度
const o=e-2*n;r>o&&(r=o),
// 菜单的 margin-top
h=-(l+t.selectedIndex*c+(c-s)/2);const i=-(l+(t.size-1)*c+(c-s)/2);h<i&&(h=i);
// 菜单不能超出窗口
const a=u+h;a<n?
// 不能超出窗口上方
h=-(u-n):a+r+n>e&&(
// 不能超出窗口下方
h=-(u+r+n-e)),
// transform 的 Y 轴坐标
p=t.selectedIndex*c+c/2+l+"px"}else"bottom"===i?(h=s,p="0px"):"top"===i&&(h=-r-1,p="100%");
// 设置样式
t.$select.width(d),t.$menu.width(d).height(r).css({"margin-top":h+"px","transform-origin":"center "+p+" 0"})}(t),t.$select.addClass("mdui-select-open"),t.$menu.transitionEnd((()=>{s(t)})))},
/**
     * 关闭 Select
     */
i.prototype.close=function(){const t=this;"closing"!==t.state&&"closed"!==t.state&&(t.state="closing",c("close","select",t,t.$selectNative),t.$menu.css("overflow-y",""),t.$select.removeClass("mdui-select-open").addClass("mdui-select-closing"),t.$menu.transitionEnd((()=>{s(t)})))},
/**
     * 切换 Select 显示状态
     */
i.prototype.toggle=function(){const t=this;"opening"===t.state||"opened"===t.state?t.close():"closing"!==t.state&&"closed"!==t.state||t.open()},i}(),
/**
   * =============================================================================
   * ************   Select 下拉选择   ************
   * =============================================================================
   */
e((()=>{t.mutation("[mdui-select]",(function(){const n=e(this);let o=n.data("mdui.select");o||(o=new t.Select(n,a(n.attr("mdui-select"))),n.data("mdui.select",o))}))})),
/**
   * =============================================================================
   * ************   Appbar   ************
   * =============================================================================
   * 滚动时自动隐藏应用栏
   * mdui-appbar-scroll-hide
   * mdui-appbar-scroll-toolbar-hide
   */
e((()=>{
// 滚动时隐藏应用栏
t.mutation(".mdui-appbar-scroll-hide",(function(){const n=e(this);n.data("mdui.headroom",new t.Headroom(n))})),
// 滚动时只隐藏应用栏中的工具栏
t.mutation(".mdui-appbar-scroll-toolbar-hide",(function(){const n=e(this),o=new t.Headroom(n,{pinnedClass:"mdui-headroom-pinned-toolbar",unpinnedClass:"mdui-headroom-unpinned-toolbar"});n.data("mdui.headroom",o)}))})),
/**
   * =============================================================================
   * ************   Tab   ************
   * =============================================================================
   */
t.Tab=function(){const t={trigger:"click",// 触发方式 click: 鼠标点击切换 hover: 鼠标悬浮切换
// animation: false,       // 切换时是否显示动画
loop:!1},n=function(t){return t[0].disabled||null!==t.attr("disabled")};
// 元素是否已禁用
/**
     * 选项卡
     * @param selector
     * @param opts
     * @returns {*}
     * @constructor
     */
function i(n,i){const s=this;if(s.$tab=e(n).eq(0),!s.$tab.length)return;
// 已通过自定义属性实例化过，不再重复实例化
const a=s.$tab.data("mdui.tab");if(a)return a;s.options=e.extend({},t,i||{}),s.$tabs=s.$tab.children("a"),s.$indicator=e('<div class="mdui-tab-indicator"></div>').appendTo(s.$tab),s.activeIndex=!1;// 为 false 时表示没有激活的选项卡，或不存在选项卡
// 根据 url hash 获取默认激活的选项卡
const c=location.hash;c&&s.$tabs.each(((t,n)=>{if(e(n).attr("href")===c)return s.activeIndex=t,!1})),
// 含 mdui-tab-active 的元素默认激活
!1===s.activeIndex&&s.$tabs.each(((t,n)=>{if(e(n).hasClass("mdui-tab-active"))return s.activeIndex=t,!1})),
// 存在选项卡时，默认激活第一个选项卡
s.$tabs.length&&!1===s.activeIndex&&(s.activeIndex=0),
// 设置激活状态选项卡
s._setActive(),
// 监听窗口大小变化事件，调整指示器位置
o.on("resize",e.throttle((()=>{s._setIndicatorPosition()}),100)),
// 监听点击选项卡事件
s.$tabs.each(((t,e)=>{s._bindTabEvent(e)}))}
/**
     * 绑定在 Tab 上点击或悬浮的事件
     * @private
     */return i.prototype._bindTabEvent=function(t){const o=this,i=e(t),s=function(e){
// 禁用状态的选项无法选中
n(i)?e.preventDefault():(o.activeIndex=o.$tabs.index(t),o._setActive())};
// 无论 trigger 是 click 还是 hover，都会响应 click 事件
i.on("click",s),
// trigger 为 hover 时，额外响应 mouseenter 事件
"hover"===o.options.trigger&&i.on("mouseenter",s),i.on("click",(t=>{
// 阻止链接的默认点击动作
0===i.attr("href").indexOf("#")&&t.preventDefault()}))},
/**
     * 设置激活状态的选项卡
     * @private
     */
i.prototype._setActive=function(){const t=this;t.$tabs.each(((o,i)=>{const s=e(i),a=s.attr("href");
// 设置选项卡激活状态
o!==t.activeIndex||n(s)?(s.removeClass("mdui-tab-active"),e(a).hide()):(s.hasClass("mdui-tab-active")||(c("change","tab",t,t.$tab,{index:t.activeIndex,id:a.substr(1)}),c("show","tab",t,s),s.addClass("mdui-tab-active")),e(a).show(),t._setIndicatorPosition())}))},
/**
     * 设置选项卡指示器的位置
     */
i.prototype._setIndicatorPosition=function(){const t=this;let e,o;
// 选项卡数量为 0 时，不显示指示器
!1!==t.activeIndex?(e=t.$tabs.eq(t.activeIndex),n(e)||(o=e.offset(),t.$indicator.css({left:o.left+t.$tab[0].scrollLeft-t.$tab[0].getBoundingClientRect().left+"px",width:e.width()+"px"}))):t.$indicator.css({left:0,width:0})},
/**
     * 切换到下一个选项卡
     */
i.prototype.next=function(){const t=this;!1!==t.activeIndex&&(t.$tabs.length>t.activeIndex+1?t.activeIndex++:t.options.loop&&(t.activeIndex=0),t._setActive())},
/**
     * 切换到上一个选项卡
     */
i.prototype.prev=function(){const t=this;!1!==t.activeIndex&&(t.activeIndex>0?t.activeIndex--:t.options.loop&&(t.activeIndex=t.$tabs.length-1),t._setActive())},
/**
     * 显示指定序号或指定id的选项卡
     * @param index 从0开始的序号，或以#开头的id
     */
i.prototype.show=function(t){const e=this;!1!==e.activeIndex&&(parseInt(t)===t?e.activeIndex=t:e.$tabs.each(((n,o)=>{if(o.id===t)return e.activeIndex=n,!1})),e._setActive())},
/**
     * 在父元素的宽度变化时，需要调用该方法重新调整指示器位置
     * 在添加或删除选项卡时，需要调用该方法
     */
i.prototype.handleUpdate=function(){const t=this,e=t.$tabs,n=t.$tab.children("a"),o=e.get(),i=n.get();// 新的 tabs 元素数组
if(!n.length)return t.activeIndex=!1,t.$tabs=n,void t._setIndicatorPosition();
// 重新遍历选项卡，找出新增的选项卡
n.each(((e,n)=>{
// 有新增的选项卡
o.indexOf(n)<0&&(t._bindTabEvent(n),!1===t.activeIndex?t.activeIndex=0:e<=t.activeIndex&&t.activeIndex++)})),
// 找出被移除的选项卡
e.each(((e,n)=>{
// 有被移除的选项卡
i.indexOf(n)<0&&(e<t.activeIndex?t.activeIndex--:e===t.activeIndex&&(t.activeIndex=0))})),t.$tabs=n,t._setActive()},i}(),
/**
   * =============================================================================
   * ************   Tab 自定义属性 API   ************
   * =============================================================================
   */
e((()=>{t.mutation("[mdui-tab]",(function(){const n=e(this);let o=n.data("mdui.tab");o||(o=new t.Tab(n,a(n.attr("mdui-tab"))),n.data("mdui.tab",o))}))})),
/**
   * =============================================================================
   * ************   Drawer 抽屉栏   ************
   * =============================================================================
   *
   * 在桌面设备上默认显示抽屉栏，不显示遮罩层
   * 在手机和平板设备上默认不显示抽屉栏，始终显示遮罩层，且覆盖导航栏
   */
t.Drawer=function(){
/**
     * 默认参数
     * @type {{}}
     */
const t={
// 在桌面设备上是否显示遮罩层。手机和平板不受这个参数影响，始终会显示遮罩层
overlay:!1,
// 是否开启手势
swipe:!1},n=function(){return o.width()>=1024};
/**
     * 抽屉栏实例
     * @param selector 选择器或 HTML 字符串或 DOM 元素
     * @param opts
     * @constructor
     */
function i(i,a){const c=this;if(c.$drawer=e(i).eq(0),!c.$drawer.length)return;const l=c.$drawer.data("mdui.drawer");if(l)return l;c.options=e.extend({},t,a||{}),c.overlay=!1,// 是否显示着遮罩层
c.position=c.$drawer.hasClass("mdui-drawer-right")?"right":"left",c.$drawer.hasClass("mdui-drawer-close")?c.state="closed":c.$drawer.hasClass("mdui-drawer-open")||n()?c.state="opened":c.state="closed",
// 浏览器窗口大小调整时
o.on("resize",e.throttle((()=>{
// 由手机平板切换到桌面时
n()?(
// 如果显示着遮罩，则隐藏遮罩
c.overlay&&!c.options.overlay&&(e.hideOverlay(),c.overlay=!1,e.unlockScreen()),
// 没有强制关闭，则状态为打开状态
c.$drawer.hasClass("mdui-drawer-close")?
// 宽屏下应显示侧边栏
c.$drawer.removeClass("mdui-drawer-close"):c.state="opened"):c.overlay||"opened"!==c.state||(
// 抽屉栏处于强制打开状态，添加遮罩
c.$drawer.hasClass("mdui-drawer-open")?(e.showOverlay(),c.overlay=!0,e.lockScreen(),e(".mdui-overlay").one("click",(()=>{c.close()}))):c.state="closed")}),100)),
// 绑定关闭按钮事件
c.$drawer.find("[mdui-drawer-close]").each((function(){e(this).on("click",(()=>{c.close()}))})),s(c)}
/**
     * 滑动手势支持
     * @param _this
     */var s=function(t){
// 抽屉栏滑动手势控制
let n,o,i,s,a=!1,c=!1;const l=e("body"),d=24;
// 手势触发的范围
function r(e,n){const o="translate("+-1*("right"===t.position?-1:1)*e+"px, 0) !important;";t.$drawer.css("cssText","transform:"+o+(n?"transition: initial !important;":""))}function u(){t.$drawer.css({transform:"",transition:""})}function p(){return t.$drawer.width()+10}function h(t){return Math.min(Math.max("closing"===a?s-t:p()+s-t,0),p())}function m(e){o=e.touches[0].pageX,"right"===t.position&&(o=l.width()-o),i=e.touches[0].pageY,"opened"!==t.state&&(o>d||n!==m)||(c=!0,l.on({touchmove:f,touchend:g,touchcancel:f}))}function f(n){let d=n.touches[0].pageX;"right"===t.position&&(d=l.width()-d);const u=n.touches[0].pageY;if(a)r(h(d),!0);else if(c){const n=Math.abs(d-o),c=Math.abs(u-i),l=8;n>l&&c<=l?(s=d,a="opened"===t.state?"closing":"opening",e.lockScreen(),r(h(d),!0)):n<=l&&c>l&&g()}}function g(n){if(a){let o=n.changedTouches[0].pageX;"right"===t.position&&(o=l.width()-o);const i=h(o)/p();c=!1;const s=a;a=null,"opening"===s?i<.92?(u(),t.open()):u():i>.08?(u(),t.close()):u(),e.unlockScreen()}else c=!1;l.off({touchmove:f,touchend:g,touchcancel:f})}t.options.swipe&&(n||(l.on("touchstart",m),n=m))};
/**
     * 动画结束回调
     * @param inst
     */const a=function(t){t.$drawer.hasClass("mdui-drawer-open")?(t.state="opened",c("opened","drawer",t,t.$drawer)):(t.state="closed",c("closed","drawer",t,t.$drawer))};
/**
     * 打开抽屉栏
     */return i.prototype.open=function(){const t=this;"opening"!==t.state&&"opened"!==t.state&&(t.state="opening",c("open","drawer",t,t.$drawer),
// if (!_this.options.overlay) {
//   $('body').addClass('mdui-drawer-body-' + _this.position);
// }
t.$drawer.removeClass("mdui-drawer-close").addClass("mdui-drawer-open").transitionEnd((()=>{a(t)})),n()&&!t.options.overlay||(t.overlay=!0,e.showOverlay().one("click",(()=>{t.close()})),e.lockScreen()))},
/**
     * 关闭抽屉栏
     */
i.prototype.close=function(){const t=this;"closing"!==t.state&&"closed"!==t.state&&(t.state="closing",c("close","drawer",t,t.$drawer),
// if (!_this.options.overlay) {
//   $('body').removeClass('mdui-drawer-body-' + _this.position);
// }
t.$drawer.addClass("mdui-drawer-close").removeClass("mdui-drawer-open").transitionEnd((()=>{a(t)})),t.overlay&&(e.hideOverlay(),t.overlay=!1,e.unlockScreen()))},
/**
     * 切换抽屉栏打开/关闭状态
     */
i.prototype.toggle=function(){const t=this;"opening"===t.state||"opened"===t.state?t.close():"closing"!==t.state&&"closed"!==t.state||t.open()},
/**
     * 获取抽屉栏状态
     * @returns {'opening'|'opened'|'closing'|'closed'}
     */
i.prototype.getState=function(){return this.state},i}(),
/**
   * =============================================================================
   * ************   Drawer 自定义属性 API   ************
   * =============================================================================
   */
e((()=>{t.mutation("[mdui-drawer]",(function(){const n=e(this),o=a(n.attr("mdui-drawer")),i=o.target;delete o.target;const s=e(i).eq(0);let c=s.data("mdui.drawer");c||(c=new t.Drawer(s,o),s.data("mdui.drawer",c)),n.on("click",(()=>{c.toggle()}))}))})),
/**
   * =============================================================================
   * ************   Dialog 对话框   ************
   * =============================================================================
   */
t.Dialog=function(){
/**
     * 默认参数
     */
const t={history:!0,// 监听 hashchange 事件
overlay:!0,// 打开对话框时是否显示遮罩
modal:!1,// 是否模态化对话框，为 false 时点击对话框外面区域关闭对话框，为 true 时不关闭
closeOnEsc:!0,// 按下 esc 关闭对话框
closeOnCancel:!0,// 按下取消按钮时关闭对话框
closeOnConfirm:!0,// 按下确认按钮时关闭对话框
destroyOnClosed:!1};
/**
     * 遮罩层元素
     */let s,
/**
     * 窗口是否已锁定
     */
a,
/**
     * 当前对话框实例
     */
l;
/**
     * 队列名
     */const d="__md_dialog",r=function(){if(!l)return;const t=l.$dialog,e=t.children(".mdui-dialog-title"),n=t.children(".mdui-dialog-content"),i=t.children(".mdui-dialog-actions");
// 调整 dialog 的 top 和 height 值
t.height(""),n.height("");const s=t.height();t.css({top:(o.height()-s)/2+"px",height:s+"px"}),
// 调整 mdui-dialog-content 的高度
n.height(s-(e.height()||0)-(i.height()||0))},u=function(){location.hash.substring(1).indexOf("mdui-dialog")<0&&l.close(!0)},p=function(t){e(t.target).hasClass("mdui-overlay")&&l&&l.close()};
/**
     * 窗口宽度变化，或对话框内容变化时，调整对话框位置和对话框内的滚动条
     */
/**
     * 对话框实例
     * @param selector 选择器或 HTML 字符串或 DOM 元素
     * @param opts
     * @constructor
     */
function h(n,o){const i=this;
// 对话框元素
if(i.$dialog=e(n).eq(0),!i.$dialog.length)return;
// 已通过 data 属性实例化过，不再重复实例化
const s=i.$dialog.data("mdui.dialog");if(s)return s;
// 如果对话框元素没有在当前文档中，则需要添加
e.contains(document.body,i.$dialog[0])||(i.append=!0,e("body").append(i.$dialog)),i.options=e.extend({},t,o||{}),i.state="closed",
// 绑定取消按钮事件
i.$dialog.find("[mdui-dialog-cancel]").each((function(){e(this).on("click",(()=>{c("cancel","dialog",i,i.$dialog),i.options.closeOnCancel&&i.close()}))})),
// 绑定确认按钮事件
i.$dialog.find("[mdui-dialog-confirm]").each((function(){e(this).on("click",(()=>{c("confirm","dialog",i,i.$dialog),i.options.closeOnConfirm&&i.close()}))})),
// 绑定关闭按钮事件
i.$dialog.find("[mdui-dialog-close]").each((function(){e(this).on("click",(()=>{i.close()}))}))}
/**
     * 动画结束回调
     * @param inst
     */const m=function(t){t.$dialog.hasClass("mdui-dialog-open")?(t.state="opened",c("opened","dialog",t,t.$dialog)):(t.state="closed",c("closed","dialog",t,t.$dialog),t.$dialog.hide(),
// 所有对话框都关闭，且当前没有打开的对话框时，解锁屏幕
0===i.queue(d).length&&!l&&a&&(e.unlockScreen(),a=!1),o.off("resize",e.throttle((()=>{r()}),100)),t.options.destroyOnClosed&&t.destroy())};
/**
     * 打开指定对话框
     * @private
     */return h.prototype._doOpen=function(){const t=this;if(l=t,a||(e.lockScreen(),a=!0),t.$dialog.show(),r(),o.on("resize",e.throttle((()=>{r()}),100)),
// 打开消息框
t.state="opening",c("open","dialog",t,t.$dialog),t.$dialog.addClass("mdui-dialog-open").transitionEnd((()=>{m(t)})),
// 不存在遮罩层元素时，添加遮罩层
s||(s=e.showOverlay(5100)),s[t.options.modal?"off":"on"]("click",p).css("opacity",t.options.overlay?"":0),t.options.history){
// 如果 hash 中原来就有 mdui-dialog，先删除，避免后退历史纪录后仍然有 mdui-dialog 导致无法关闭
// 包括 mdui-dialog 和 &mdui-dialog 和 ?mdui-dialog
let t=location.hash.substring(1);t.indexOf("mdui-dialog")>-1&&(t=t.replace(/[&?]?mdui-dialog/g,"")),
// 后退按钮关闭对话框
location.hash=t?t+(t.indexOf("?")>-1?"&":"?")+"mdui-dialog":"mdui-dialog",o.on("hashchange",u)}},
/**
     * 打开对话框
     */
h.prototype.open=function(){const t=this;"opening"!==t.state&&"opened"!==t.state&&(
// 如果当前有正在打开或已经打开的对话框,或队列不为空，则先加入队列，等旧对话框开始关闭时再打开
l&&("opening"===l.state||"opened"===l.state)||i.queue(d).length?i.queue(d,(()=>{t._doOpen()})):t._doOpen())},
/**
     * 关闭对话框
     */
h.prototype.close=function(){const t=this,n=arguments;
// setTimeout 的作用是：
// 当同时关闭一个对话框，并打开另一个对话框时，使打开对话框的操作先执行，以使需要打开的对话框先加入队列
setTimeout((()=>{"closing"!==t.state&&"closed"!==t.state&&(l=null,t.state="closing",c("close","dialog",t,t.$dialog),
// 所有对话框都关闭，且当前没有打开的对话框时，隐藏遮罩
0===i.queue(d).length&&s&&(e.hideOverlay(),s=null),t.$dialog.removeClass("mdui-dialog-open").transitionEnd((()=>{m(t)})),t.options.history&&0===i.queue(d).length&&(
// 是否需要后退历史纪录，默认为 false。
// 为 false 时是通过 js 关闭，需要后退一个历史记录
// 为 true 时是通过后退按钮关闭，不需要后退历史记录
n[0]||window.history.back(),o.off("hashchange",u)),
// 关闭旧对话框，打开新对话框。
// 加一点延迟，仅仅为了视觉效果更好。不加延时也不影响功能
setTimeout((()=>{i.dequeue(d)}),100))}),0)},
/**
     * 切换对话框打开/关闭状态
     */
h.prototype.toggle=function(){const t=this;"opening"===t.state||"opened"===t.state?t.close():"closing"!==t.state&&"closed"!==t.state||t.open()},
/**
     * 获取对话框状态
     * @returns {'opening'|'opened'|'closing'|'closed'}
     */
h.prototype.getState=function(){return this.state},
/**
     * 销毁对话框
     */
h.prototype.destroy=function(){const t=this;t.append&&t.$dialog.remove(),t.$dialog.removeData("mdui.dialog"),0!==i.queue(d).length||l||(s&&(e.hideOverlay(),s=null),a&&(e.unlockScreen(),a=!1))},
/**
     * 对话框内容变化时，需要调用该方法来调整对话框位置和滚动条高度
     */
h.prototype.handleUpdate=function(){r()},
// esc 按下时关闭对话框
n.on("keydown",(t=>{l&&l.options.closeOnEsc&&"opened"===l.state&&27===t.keyCode&&l.close()})),h}(),
/**
   * =============================================================================
   * ************   Dialog DATA API   ************
   * =============================================================================
   */
e((()=>{n.on("click","[mdui-dialog]",(function(){const n=e(this),o=a(n.attr("mdui-dialog")),i=o.target;delete o.target;const s=e(i).eq(0);let c=s.data("mdui.dialog");c||(c=new t.Dialog(s,o),s.data("mdui.dialog",c)),c.open()}))})),
/**
   * =============================================================================
   * ************   mdui.dialog(options)   ************
   * =============================================================================
   */
t.dialog=function(n){
/**
     * 默认参数
     */
const o={text:"",// 按钮文本
bold:!1,// 按钮文本是否加粗
close:!0,// 点击按钮后关闭对话框
onClick:function(t){// 点击按钮的回调
}};
/**
     * 按钮的默认参数
     */
// 合并参数
n=e.extend({},{title:"",// 标题
content:"",// 文本
buttons:[],// 按钮
stackedButtons:!1,// 垂直排列按钮
cssClass:"",// 在 Dialog 上添加的 CSS 类
history:!0,// 监听 hashchange 事件
overlay:!0,// 是否显示遮罩
modal:!1,// 是否模态化对话框
closeOnEsc:!0,// 按下 esc 时关闭对话框
destroyOnClosed:!0,// 关闭后销毁
onOpen:function(){// 打开动画开始时的回调
},onOpened:function(){// 打开动画结束后的回调
},onClose:function(){// 关闭动画开始时的回调
},onClosed:function(){// 关闭动画结束时的回调
}},n||{}),e.each(n.buttons,((t,i)=>{n.buttons[t]=e.extend({},o,i)}));
// 按钮的 HTML
let i="";n.buttons.length&&(i='<div class="mdui-dialog-actions '+(n.stackedButtons?"mdui-dialog-actions-stacked":"")+'">',e.each(n.buttons,((t,e)=>{i+='<a href="javascript:void(0)" class="mdui-btn mdui-ripple mdui-text-color-primary '+(e.bold?"mdui-btn-bold":"")+'">'+e.text+"</a>"})),i+="</div>");
// Dialog 的 HTML
const s='<div class="mdui-dialog '+n.cssClass+'">'+(n.title?'<div class="mdui-dialog-title">'+n.title+"</div>":"")+(n.content?'<div class="mdui-dialog-content">'+n.content+"</div>":"")+i+"</div>",a=new t.Dialog(s,{history:n.history,overlay:n.overlay,modal:n.modal,closeOnEsc:n.closeOnEsc,destroyOnClosed:n.destroyOnClosed});
// 实例化 Dialog
// 绑定按钮事件
return n.buttons.length&&a.$dialog.find(".mdui-dialog-actions .mdui-btn").each(((t,o)=>{e(o).on("click",(()=>{"function"==typeof n.buttons[t].onClick&&n.buttons[t].onClick(a),n.buttons[t].close&&a.close()}))})),
// 绑定打开关闭事件
"function"==typeof n.onOpen&&a.$dialog.on("open.mdui.dialog",(()=>{n.onOpen(a)})).on("opened.mdui.dialog",(()=>{n.onOpened(a)})).on("close.mdui.dialog",(()=>{n.onClose(a)})).on("closed.mdui.dialog",(()=>{n.onClosed(a)})),a.open(),a},
/**
   * =============================================================================
   * ************   mdui.alert(text, title, onConfirm, options)   ************
   * ************   mdui.alert(text, onConfirm, options)   ************
   * =============================================================================
   */
t.alert=function(n,o,i,s){
// title 参数可选
"function"==typeof o&&(o="",i=arguments[1],s=arguments[2]),void 0===i&&(i=function(){}),void 0===s&&(s={})
/**
     * 默认参数
     */;return s=e.extend({},{confirmText:"ok",// 按钮上的文本
history:!0,// 监听 hashchange 事件
modal:!1,// 是否模态化对话框，为 false 时点击对话框外面区域关闭对话框，为 true 时不关闭
closeOnEsc:!0},s),t.dialog({title:o,content:n,buttons:[{text:s.confirmText,bold:!1,close:!0,onClick:i}],cssClass:"mdui-dialog-alert",history:s.history,modal:s.modal,closeOnEsc:s.closeOnEsc})},
/**
   * =============================================================================
   * ************   mdui.confirm(text, title, onConfirm, onCancel, options)   ************
   * ************   mdui.confirm(text, onConfirm, onCancel, options)          ************
   * =============================================================================
   */
t.confirm=function(n,o,i,s,a){
// title 参数可选
"function"==typeof o&&(o="",i=arguments[1],s=arguments[2],a=arguments[3]),void 0===i&&(i=function(){}),void 0===s&&(s=function(){}),void 0===a&&(a={})
/**
     * 默认参数
     */;return a=e.extend({},{confirmText:"ok",// 确认按钮的文本
cancelText:"cancel",// 取消按钮的文本
history:!0,// 监听 hashchange 事件
modal:!1,// 是否模态化对话框，为 false 时点击对话框外面区域关闭对话框，为 true 时不关闭
closeOnEsc:!0},a),t.dialog({title:o,content:n,buttons:[{text:a.cancelText,bold:!1,close:!0,onClick:s},{text:a.confirmText,bold:!1,close:!0,onClick:i}],cssClass:"mdui-dialog-confirm",history:a.history,modal:a.modal,closeOnEsc:a.closeOnEsc})},
/**
   * =============================================================================
   * ************   mdui.prompt(label, title, onConfirm, onCancel, options)   ************
   * ************   mdui.prompt(label, onConfirm, onCancel, options)          ************
   * =============================================================================
   */
t.prompt=function(n,o,i,s,a){
// title 参数可选
"function"==typeof o&&(o="",i=arguments[1],s=arguments[2],a=arguments[3]),void 0===i&&(i=function(){}),void 0===s&&(s=function(){}),void 0===a&&(a={})
/**
     * 默认参数
     */;const c='<div class="mdui-textfield">'+(n?'<label class="mdui-textfield-label">'+n+"</label>":"")+("text"===(a=e.extend({},{confirmText:"ok",// 确认按钮的文本
cancelText:"cancel",// 取消按钮的文本
history:!0,// 监听 hashchange 事件
modal:!1,// 是否模态化对话框，为 false 时点击对话框外面区域关闭对话框，为 true 时不关闭
closeOnEsc:!0,// 按下 esc 关闭对话框
type:"text",// 输入框类型，text: 单行文本框 textarea: 多行文本框
maxlength:"",// 最大输入字符数
defaultValue:"",// 输入框中的默认文本
confirmOnEnter:!1},a)).type?'<input class="mdui-textfield-input" type="text" value="'+a.defaultValue+'" '+(a.maxlength?'maxlength="'+a.maxlength+'"':"")+"/>":"")+("textarea"===a.type?'<textarea class="mdui-textfield-input" '+(a.maxlength?'maxlength="'+a.maxlength+'"':"")+">"+a.defaultValue+"</textarea>":"")+"</div>";let l=s;"function"==typeof s&&(l=function(t){const e=t.$dialog.find(".mdui-textfield-input").val();s(e,t)});let d=i;return"function"==typeof i&&(d=function(t){const e=t.$dialog.find(".mdui-textfield-input").val();i(e,t)}),t.dialog({title:o,content:c,buttons:[{text:a.cancelText,bold:!1,close:!0,onClick:l},{text:a.confirmText,bold:!1,close:!0,onClick:d}],cssClass:"mdui-dialog-prompt",history:a.history,modal:a.modal,closeOnEsc:a.closeOnEsc,onOpen:function(e){
// 初始化输入框
const n=e.$dialog.find(".mdui-textfield-input");t.updateTextFields(n),
// 聚焦到输入框
n[0].focus(),
// 捕捉文本框回车键，在单行文本框的情况下触发回调
"text"===a.type&&!0===a.confirmOnEnter&&n.on("keydown",(t=>{if(13===t.keyCode){const t=e.$dialog.find(".mdui-textfield-input").val();i(t,e),e.close()}})),
// 如果是多行输入框，监听输入框的 input 事件，更新对话框高度
"textarea"===a.type&&n.on("input",(()=>{e.handleUpdate()})),
// 有字符数限制时，加载完文本框后 DOM 会变化，需要更新对话框高度
a.maxlength&&e.handleUpdate()}})},
/**
   * =============================================================================
   * ************   ToolTip 工具提示   ************
   * =============================================================================
   */
t.Tooltip=function(){
/**
     * 默认参数
     */
const t={position:"auto",// 提示所在位置
delay:0,// 延迟，单位毫秒
content:""};
/**
     * 是否是桌面设备
     * @returns {boolean}
     */
/**
     * 设置 Tooltip 的位置
     * @param inst
     */
function n(t){let e,n,i;
// 触发的元素
const s=t.$target[0].getBoundingClientRect(),a=o.width()>1024?14:24,c=t.$tooltip[0].offsetWidth,l=t.$tooltip[0].offsetHeight;
// 触发的元素和 Tooltip 之间的距离
// 设置位置
switch(
// Tooltip 的方向
i=t.options.position,
// 自动判断位置，加 2px，使 Tooltip 距离窗口边框至少有 2px 的间距
-1===["bottom","top","left","right"].indexOf(i)&&(i=s.top+s.height+a+l+2<o.height()?"bottom":a+l+2<s.top?"top":a+c+2<s.left?"left":s.width+a+c+2<o.width()-s.left?"right":"bottom"),i){case"bottom":e=c/2*-1,n=s.height/2+a,t.$tooltip.transformOrigin("top center");break;case"top":e=c/2*-1,n=-1*(l+s.height/2+a),t.$tooltip.transformOrigin("bottom center");break;case"left":e=-1*(c+s.width/2+a),n=l/2*-1,t.$tooltip.transformOrigin("center right");break;case"right":e=s.width/2+a,n=l/2*-1,t.$tooltip.transformOrigin("center left")}const d=t.$target.offset();t.$tooltip.css({top:d.top+s.height/2+"px",left:d.left+s.width/2+"px","margin-left":e+"px","margin-top":n+"px"})}
/**
     * Tooltip 实例
     * @param selector
     * @param opts
     * @constructor
     */function i(n,o){const i=this;if(i.$target=e(n).eq(0),!i.$target.length)return;
// 已通过 data 属性实例化过，不再重复实例化
const a=i.$target.data("mdui.tooltip");if(a)return a;i.options=e.extend({},t,o||{}),i.state="closed",
// 创建 Tooltip HTML
i.$tooltip=e('<div class="mdui-tooltip" id="'+e.guid()+'">'+i.options.content+"</div>").appendTo(document.body),
// 绑定事件。元素处于 disabled 状态时无法触发鼠标事件，为了统一，把 touch 事件也禁用
i.$target.on("touchstart mouseenter",(function(t){this.disabled||s.isAllow(t)&&(s.register(t),i.open())})).on("touchend mouseleave",(function(t){this.disabled||s.isAllow(t)&&i.close()})).on(s.unlock,(function(t){this.disabled||s.register(t)}))}
/**
     * 动画结束回调
     * @private
     */const l=function(t){t.$tooltip.hasClass("mdui-tooltip-open")?(t.state="opened",c("opened","tooltip",t,t.$target)):(t.state="closed",c("closed","tooltip",t,t.$target))};
/**
     * 执行打开 Tooltip
     * @private
     */
/**
     * 销毁 Tooltip
     */
/* Tooltip.prototype.destroy = function () {
      var _this = this;
      clearTimeout(_this.timeoutId);
      $.data(_this.target, 'mdui.tooltip', null);
      $.remove(_this.tooltip);
    };*/
return i.prototype._doOpen=function(){const t=this;t.state="opening",c("open","tooltip",t,t.$target),t.$tooltip.addClass("mdui-tooltip-open").transitionEnd((()=>{l(t)}))},
/**
     * 打开 Tooltip
     * @param opts 允许每次打开时设置不同的参数
     */
i.prototype.open=function(t){const o=this;if("opening"===o.state||"opened"===o.state)return;const i=e.extend({},o.options);
// 合并 data 属性参数
e.extend(o.options,a(o.$target.attr("mdui-tooltip"))),t&&e.extend(o.options,t),
// tooltip 的内容有更新
i.content!==o.options.content&&o.$tooltip.html(o.options.content),n(o),o.options.delay?o.timeoutId=setTimeout((()=>{o._doOpen()}),o.options.delay):(o.timeoutId=!1,o._doOpen())},
/**
     * 关闭 Tooltip
     */
i.prototype.close=function(){const t=this;t.timeoutId&&(clearTimeout(t.timeoutId),t.timeoutId=!1),"closing"!==t.state&&"closed"!==t.state&&(t.state="closing",c("close","tooltip",t,t.$target),t.$tooltip.removeClass("mdui-tooltip-open").transitionEnd((()=>{l(t)})))},
/**
     * 切换 Tooltip 状态
     */
i.prototype.toggle=function(){const t=this;"opening"===t.state||"opened"===t.state?t.close():"closing"!==t.state&&"closed"!==t.state||t.open()},
/**
     * 获取 Tooltip 状态
     * @returns {'opening'|'opened'|'closing'|'closed'}
     */
i.prototype.getState=function(){return this.state},i}(),
/**
   * =============================================================================
   * ************   Tooltip DATA API   ************
   * =============================================================================
   */
e((()=>{
// mouseenter 不能冒泡，所以这里用 mouseover 代替
n.on("touchstart mouseover","[mdui-tooltip]",(function(){const n=e(this);let o=n.data("mdui.tooltip");if(!o){const e=a(n.attr("mdui-tooltip"));o=new t.Tooltip(n,e),n.data("mdui.tooltip",o)}}))})),
/**
   * =============================================================================
   * ************   Snackbar   ************
   * =============================================================================
   */
function(){
/**
     * 当前打开着的 Snackbar
     */
let o;
/**
     * 对列名
     * @type {string}
     */const a="__md_snackbar",c={timeout:4e3,// 在用户没有操作时多长时间自动隐藏
buttonText:"",// 按钮的文本
buttonColor:"",// 按钮的颜色，支持 blue #90caf9 rgba(...)
position:"bottom",// 位置 bottom、top、left-top、left-bottom、right-top、right-bottom
closeOnButtonClick:!0,// 点击按钮时关闭
closeOnOutsideClick:!0,// 触摸或点击屏幕其他地方时关闭
onClick:function(){// 在 Snackbar 上点击的回调
},onButtonClick:function(){// 点击按钮的回调
},onOpen:function(){// 打开动画开始时的回调
},onOpened:function(){// 打开动画结束时的回调
},onClose:function(){// 关闭动画开始时的回调
},onClosed:function(){// 打开动画结束时的回调
}},l=function(t){const n=e(t.target);n.hasClass("mdui-snackbar")||n.parents(".mdui-snackbar").length||o.close()};
/**
     * Snackbar 实例
     * @param message
     * @param opts
     * @constructor
     */
function d(t,n){const o=this;
// message 参数必须
if(o.message=t,o.options=e.extend({},c,n||{}),!o.message)return;o.state="closed",o.timeoutId=!1;
// 按钮颜色
let i="",s="";0===o.options.buttonColor.indexOf("#")||0===o.options.buttonColor.indexOf("rgb")?i='style="color:'+o.options.buttonColor+'"':""!==o.options.buttonColor&&(s="mdui-text-color-"+o.options.buttonColor),
// 添加 HTML
o.$snackbar=e('<div class="mdui-snackbar"><div class="mdui-snackbar-text">'+o.message+"</div>"+(o.options.buttonText?'<a href="javascript:void(0)" class="mdui-snackbar-action mdui-btn mdui-ripple mdui-ripple-white '+s+'" '+i+">"+o.options.buttonText+"</a>":"")+"</div>").appendTo(document.body),
// 设置位置
o._setPosition("close"),o.$snackbar.reflow().addClass("mdui-snackbar-"+o.options.position)}
/**
     * 设置 Snackbar 的位置
     * @param state
     * @private
     */d.prototype._setPosition=function(t){const e=this,n=e.$snackbar[0].clientHeight,o=e.options.position;let i,s;
// translateX
i="bottom"===o||"top"===o?"-50%":"0",
// translateY
"open"===t?s="0":("bottom"===o&&(s=n),"top"===o&&(s=-n),"left-top"!==o&&"right-top"!==o||(s=-n-24),"left-bottom"!==o&&"right-bottom"!==o||(s=n+24)),e.$snackbar.transform("translate("+i+","+s+"px)")},
/**
     * 打开 Snackbar
     */
d.prototype.open=function(){const t=this;t.message&&"opening"!==t.state&&"opened"!==t.state&&(
// 如果当前有正在显示的 Snackbar，则先加入队列，等旧 Snackbar 关闭后再打开
o?i.queue(a,(()=>{t.open()})):(o=t,
// 开始打开
t.state="opening",t.options.onOpen(),t._setPosition("open"),t.$snackbar.transitionEnd((()=>{"opening"===t.state&&(t.state="opened",t.options.onOpened(),
// 有按钮时绑定事件
t.options.buttonText&&t.$snackbar.find(".mdui-snackbar-action").on("click",(()=>{t.options.onButtonClick(),t.options.closeOnButtonClick&&t.close()})),
// 点击 snackbar 的事件
t.$snackbar.on("click",(n=>{e(n.target).hasClass("mdui-snackbar-action")||t.options.onClick()})),
// 点击 Snackbar 外面的区域关闭
t.options.closeOnOutsideClick&&n.on(s.start,l),
// 超时后自动关闭
t.options.timeout&&(t.timeoutId=setTimeout((()=>{t.close()}),t.options.timeout)))}))))},
/**
     * 关闭 Snackbar
     */
d.prototype.close=function(){const t=this;t.message&&"closing"!==t.state&&"closed"!==t.state&&(t.timeoutId&&clearTimeout(t.timeoutId),t.options.closeOnOutsideClick&&n.off(s.start,l),t.state="closing",t.options.onClose(),t._setPosition("close"),t.$snackbar.transitionEnd((()=>{"closing"===t.state&&(o=null,t.state="closed",t.options.onClosed(),t.$snackbar.remove(),i.dequeue(a))})))},
/**
     * 打开 Snackbar
     * @param message
     * @param opts
     */
t.snackbar=function(t,e){"string"!=typeof t&&(t=(e=t).message);const n=new d(t,e);return n.open(),n}}(),
// 切换导航项
n.on("click",".mdui-bottom-nav>a",(function(){const t=e(this),n=t.parent();let o;n.children("a").each(((i,s)=>{o=t.is(s),o&&c("change","bottomNav",null,n,{index:i}),e(s)[o?"addClass":"removeClass"]("mdui-bottom-nav-active")}))})),
// 滚动时隐藏 mdui-bottom-nav-scroll-hide
t.mutation(".mdui-bottom-nav-scroll-hide",(function(){const n=e(this),o=new t.Headroom(n,{pinnedClass:"mdui-headroom-pinned-down",unpinnedClass:"mdui-headroom-unpinned-down"});n.data("mdui.headroom",o)})),
/**
   * =============================================================================
   * ************   Spinner 圆形进度条   ************
   * =============================================================================
   */
function(){
/**
     * layer 的 HTML 结构
     */
const n=function(){const t=!!arguments.length&&arguments[0];return'<div class="mdui-spinner-layer '+(t?"mdui-spinner-layer-"+t:"")+'"><div class="mdui-spinner-circle-clipper mdui-spinner-left"><div class="mdui-spinner-circle"></div></div><div class="mdui-spinner-gap-patch"><div class="mdui-spinner-circle"></div></div><div class="mdui-spinner-circle-clipper mdui-spinner-right"><div class="mdui-spinner-circle"></div></div></div>'},o=function(t){const o=e(t);let i;i=o.hasClass("mdui-spinner-colorful")?n("1")+n("2")+n("3")+n("4"):n(),o.html(i)};
/**
     * 填充 HTML
     * @param spinner
     */
/**
     * 页面加载完后自动填充 HTML 结构
     */
e((()=>{t.mutation(".mdui-spinner",(function(){o(this)}))})),
/**
     * 更新圆形进度条
     */
t.updateSpinners=function(){e(arguments.length?arguments[0]:".mdui-spinner").each((function(){o(this)}))}}(),
/**
   * =============================================================================
   * ************   Expansion panel 可扩展面板   ************
   * =============================================================================
   */
t.Panel=function(t,e){return new l(t,e,"panel")},
/**
   * =============================================================================
   * ************   Expansion panel 自定义属性   ************
   * =============================================================================
   */
e((()=>{t.mutation("[mdui-panel]",(function(){const n=e(this);let o=n.data("mdui.panel");if(!o){const e=a(n.attr("mdui-panel"));o=new t.Panel(n,e),n.data("mdui.panel",o)}}))})),
/**
   * =============================================================================
   * ************   Menu 菜单   ************
   * =============================================================================
   */
t.Menu=function(){
/**
     * 默认参数
     */
const t={position:"auto",// 菜单位置 top、bottom、center、auto
align:"auto",// 菜单和触发它的元素的对齐方式 left、right、center、auto
gutter:16,// 菜单距离窗口边缘的最小距离，单位 px
fixed:!1,// 是否使菜单固定在窗口，不随滚动条滚动
covered:"auto",// 菜单是否覆盖在触发它的元素上，true、false。auto 时简单菜单覆盖，级联菜单不覆盖
subMenuTrigger:"hover",// 子菜单的触发方式 hover、click
subMenuDelay:200},i=function(t){let e,n,
// 菜单位置和方向
i,s;
// window 窗口的宽度和高度
const a=o.height(),c=o.width(),l=t.options.gutter,d=t.isCovered,r=t.options.fixed;
// 动画方向参数
let u,p;
// 菜单的原始宽度和高度
const h=t.$menu.width(),m=t.$menu.height(),f=t.$anchor,g=f[0].getBoundingClientRect(),v=g.top,b=g.left,x=g.height,y=g.width,w=a-v-x,$=c-b-y,C=f[0].offsetTop,k=f[0].offsetLeft;
// ===============================
// ==================== 设置菜单位置
// ===============================
if(
// ===============================
// ================= 自动判断菜单位置
// ===============================
i="auto"===t.options.position?
// 判断下方是否放得下菜单
w+(d?x:0)>m+l?"bottom":v+(d?x:0)>m+l?"top":"center":t.options.position,
// ===============================
// ============== 自动判断菜单对齐方式
// ===============================
s="auto"===t.options.align?
// 判断右侧是否放得下菜单
$+y>h+l?"left":b+y>h+l?"right":"center":t.options.align,"bottom"===i)p="0",n=(d?0:x)+(r?v:C);else if("top"===i)p="100%",n=(d?x:0)+(r?v-m:C-m);else{p="50%";
// =====================在窗口中居中
// 显示的菜单的高度，简单菜单高度不超过窗口高度，若超过了则在菜单内部显示滚动条
// 级联菜单内部不允许出现滚动条
let e=m;
// 简单菜单比窗口高时，限制菜单高度
t.isCascade||m+2*l>a&&(e=a-2*l,t.$menu.height(e)),n=(a-e)/2+(r?0:C-v)}
// ===============================
// ================= 设置菜单对齐方式
// ===============================
if(t.$menu.css("top",n+"px"),"left"===s)u="0",e=r?b:k;else if("right"===s)u="100%",e=r?b+y-h:k+y-h;else{u="50%";
// =======================在窗口中居中
// 显示的菜单的宽度，菜单宽度不能超过窗口宽度
let n=h;
// 菜单比窗口宽，限制菜单宽度
h+2*l>c&&(n=c-2*l,t.$menu.width(n)),e=(c-n)/2+(r?0:k-b)}t.$menu.css("left",e+"px"),
// 设置菜单动画方向
t.$menu.transformOrigin(u+" "+p)},s=function(t){!function(t){const e=t.parent(".mdui-menu-item");let n,i,
// 子菜单位置和方向
s,// top、bottom
a;// left、right
// window 窗口的宽度和高度
const c=o.height(),l=o.width();
// 动画方向参数
let d,r;
// 子菜单的原始宽度和高度
const u=t.width(),p=t.height(),h=e[0].getBoundingClientRect(),m=h.width,f=h.height,g=h.left,v=h.top;
// ===================================
// ===================== 判断菜单上下位置
// ===================================
// 判断下方是否放得下菜单
s=c-v>p?"bottom":v+f>p?"top":"bottom",
// ====================================
// ====================== 判断菜单左右位置
// ====================================
// 判断右侧是否放得下菜单
a=l-g-m>u?"left":g>u?"right":"left",
// ===================================
// ======================== 设置菜单位置
// ===================================
"bottom"===s?(r="0",n="0"):"top"===s&&(r="100%",n=-p+f),t.css("top",n+"px"),
// ===================================
// ===================== 设置菜单对齐方式
// ===================================
"left"===a?(d="0",i=m):"right"===a&&(d="100%",i=-u),t.css("left",i+"px"),
// 设置菜单动画方向
t.transformOrigin(d+" "+r)}(t),t.addClass("mdui-menu-open").parent(".mdui-menu-item").addClass("mdui-menu-item-active")},a=function(t){
// 关闭子菜单
t.removeClass("mdui-menu-open").addClass("mdui-menu-closing").transitionEnd((()=>{t.removeClass("mdui-menu-closing")})).parent(".mdui-menu-item").removeClass("mdui-menu-item-active"),
// 循环关闭嵌套的子菜单
t.find(".mdui-menu").each((function(){const t=e(this);t.removeClass("mdui-menu-open").addClass("mdui-menu-closing").transitionEnd((()=>{t.removeClass("mdui-menu-closing")})).parent(".mdui-menu-item").removeClass("mdui-menu-item-active")}))},l=function(t){if(
// 点击打开子菜单
t.$menu.on("click",".mdui-menu-item",(function(t){const n=e(this),o=e(t.target);
// 禁用状态菜单不操作
if(null!==n.attr("disabled"))return;
// 没有点击在子菜单的菜单项上时，不操作（点在了子菜单的空白区域、或分隔线上）
if(o.is(".mdui-menu")||o.is(".mdui-divider"))return;
// 阻止冒泡，点击菜单项时只在最后一级的 mdui-menu-item 上生效，不向上冒泡
if(!o.parents(".mdui-menu-item").eq(0).is(n))return;
// 当前菜单的子菜单
const i=n.children(".mdui-menu");
// 先关闭除当前子菜单外的所有同级子菜单
n.parent(".mdui-menu").children(".mdui-menu-item").each((function(){const t=e(this).children(".mdui-menu");!t.length||i.length&&t.is(i)||a(t)})),
// 切换当前子菜单
i.length&&function(t){t.hasClass("mdui-menu-open")?a(t):s(t)}(i)})),"hover"===t.options.subMenuTrigger){
// 临时存储 setTimeout 对象
let n,o,i;t.$menu.on("mouseover mouseout",".mdui-menu-item",(function(c){const l=e(this),d=c.type,r=e(c.relatedTarget);
// 禁用状态的菜单不操作
if(null!==l.attr("disabled"))return;
// 用 mouseover 模拟 mouseenter
if("mouseover"===d){if(!l.is(r)&&e.contains(l[0],r[0]))return}else if("mouseout"===d&&(l.is(r)||e.contains(l[0],r[0])))return;
// 当前菜单项下的子菜单，未必存在
const u=l.children(".mdui-menu");
// 鼠标移入菜单项时，显示菜单项下的子菜单
if("mouseover"===d){if(u.length){
// 当前子菜单准备打开时，如果当前子菜单正准备着关闭，不用再关闭了
const e=u.data("timeoutClose.mdui.menu");
// 如果当前子菜单已经打开，不操作
if(e&&clearTimeout(e),u.hasClass("mdui-menu-open"))return;
// 当前子菜单准备打开时，其他准备打开的子菜单不用再打开了
clearTimeout(o),
// 准备打开当前子菜单
n=o=setTimeout((()=>{s(u)}),t.options.subMenuDelay),u.data("timeoutOpen.mdui.menu",n)}}else if("mouseout"===d&&u.length){
// 鼠标移出菜单项时，如果当前菜单项下的子菜单正准备打开，不用再打开了
const e=u.data("timeoutOpen.mdui.menu");e&&clearTimeout(e),
// 准备关闭当前子菜单
n=i=setTimeout((()=>{a(u)}),t.options.subMenuDelay),u.data("timeoutClose.mdui.menu",n)}}))}};
/**
     * 调整主菜单位置
     * @param _this 实例
     */
/**
     * 菜单
     * @param anchorSelector 点击该元素触发菜单
     * @param menuSelector 菜单
     * @param opts 配置项
     * @constructor
     */
function d(s,a,c){const d=this;
// 触发菜单的元素
if(d.$anchor=e(s).eq(0),!d.$anchor.length)return;
// 已通过自定义属性实例化过，不再重复实例化
const r=d.$anchor.data("mdui.menu");if(r)return r;d.$menu=e(a).eq(0),
// 触发菜单的元素 和 菜单必须是同级的元素，否则菜单可能不能定位
d.$anchor.siblings(d.$menu).length&&(d.options=e.extend({},t,c||{}),d.state="closed",
// 是否是级联菜单
d.isCascade=d.$menu.hasClass("mdui-menu-cascade"),
// covered 参数处理
"auto"===d.options.covered?d.isCovered=!d.isCascade:d.isCovered=d.options.covered,
// 点击触发菜单切换
d.$anchor.on("click",(()=>{d.toggle()})),
// 点击菜单外面区域关闭菜单
n.on("click touchstart",(t=>{const n=e(t.target);"opening"!==d.state&&"opened"!==d.state||n.is(d.$menu)||e.contains(d.$menu[0],n[0])||n.is(d.$anchor)||e.contains(d.$anchor[0],n[0])||d.close()})),
// 点击不含子菜单的菜单条目关闭菜单
n.on("click",".mdui-menu-item",(function(t){const n=e(this);n.find(".mdui-menu").length||null!==n.attr("disabled")||d.close()})),
// 绑定点击或鼠标移入含子菜单的条目的事件
l(d),
// 窗口大小变化时，重新调整菜单位置
o.on("resize",e.throttle((()=>{i(d)}),100)))}
/**
     * 切换菜单状态
     */d.prototype.toggle=function(){const t=this;"opening"===t.state||"opened"===t.state?t.close():"closing"!==t.state&&"closed"!==t.state||t.open()};
/**
     * 动画结束回调
     * @param inst
     */
const r=function(t){t.$menu.removeClass("mdui-menu-closing"),"opening"===t.state&&(t.state="opened",c("opened","menu",t,t.$menu)),"closing"===t.state&&(t.state="closed",c("closed","menu",t,t.$menu),
// 关闭后，恢复菜单样式到默认状态，并恢复 fixed 定位
t.$menu.css({top:"",left:"",width:"",position:"fixed"}))};
/**
     * 打开菜单
     */return d.prototype.open=function(){const t=this;"opening"!==t.state&&"opened"!==t.state&&(t.state="opening",c("open","menu",t,t.$menu),
// 调整菜单位置
i(t),t.$menu.css("position",t.options.fixed?"fixed":"absolute").addClass("mdui-menu-open").transitionEnd((()=>{r(t)})))},
/**
     * 关闭菜单
     */
d.prototype.close=function(){const t=this;"closing"!==t.state&&"closed"!==t.state&&(t.state="closing",c("close","menu",t,t.$menu),
// 菜单开始关闭时，关闭所有子菜单
t.$menu.find(".mdui-menu").each((function(){a(e(this))})),t.$menu.removeClass("mdui-menu-open").addClass("mdui-menu-closing").transitionEnd((()=>{r(t)})))},d}(),
/**
   * =============================================================================
   * ************   Menu 自定义属性 API   ************
   * =============================================================================
   */
e((()=>{n.on("click","[mdui-menu]",(function(){const n=e(this);let o=n.data("mdui.menu");if(!o){const e=a(n.attr("mdui-menu")),i=e.target;delete e.target,o=new t.Menu(n,i,e),n.data("mdui.menu",o),o.toggle()}}))})),
/* jshint ignore:start */
t.JQ=e,t}));
/* jshint ignore:end */