/* global NexT, CONFIG, Velocity */
NexT.boot={},NexT.boot.registerEvents=function(){NexT.utils.registerScrollPercent(),NexT.utils.registerCanIUseTag(),
// Mobile top menu bar.
document.querySelector(".site-nav-toggle .toggle").addEventListener("click",(()=>{event.currentTarget.classList.toggle("toggle-close");var e=document.querySelector(".site-nav"),t=e.classList.contains("site-nav-on")?"slideUp":"slideDown";"function"==typeof Velocity?Velocity(e,t,{duration:200,complete:function(){e.classList.toggle("site-nav-on")}}):e.classList.toggle("site-nav-on")}));document.querySelectorAll(".sidebar-nav li").forEach(((e,t)=>{e.addEventListener("click",(e=>{var i=e.currentTarget,o="sidebar-nav-active",a="sidebar-panel-active";if(!i.classList.contains(o)){var s=document.querySelectorAll(".sidebar-panel"),n=s[t],r=s[1-t];window.anime({targets:r,duration:200,easing:"linear",opacity:0,complete:()=>{
// Prevent adding TOC to Overview if Overview was selected when close & open sidebar.
r.classList.remove(a),n.style.opacity=0,n.classList.add(a),window.anime({targets:n,duration:200,easing:"linear",opacity:1})}}),[...i.parentNode.children].forEach((e=>{e.classList.remove(o)})),i.classList.add(o)}}))})),window.addEventListener("resize",NexT.utils.initSidebarDimension),window.addEventListener("hashchange",(()=>{var e=location.hash;if(""!==e&&!e.match(/%\S{2}/)){var t=document.querySelector(`.tabs ul.nav-tabs li a[href="${e}"]`);t&&t.click()}}))},NexT.boot.refresh=function(){
/**
   * Register JS handlers by condition option.
   * Need to add config option in Front-End at 'layout/_partials/head.swig' file.
   */
CONFIG.fancybox&&NexT.utils.wrapImageWithFancyBox(),CONFIG.mediumzoom&&window.mediumZoom(".post-body :not(a) > img, .post-body > img"),CONFIG.lazyload&&window.lozad(".post-body img").observe(),CONFIG.pangu&&window.pangu.spacingPage(),CONFIG.exturl&&NexT.utils.registerExtURL(),CONFIG.copycode.enable&&NexT.utils.registerCopyCode(),NexT.utils.registerTabsTag(),NexT.utils.registerActiveMenuItem(),NexT.utils.registerLangSelect(),NexT.utils.registerSidebarTOC(),NexT.utils.wrapTableWithBox(),NexT.utils.registerVideoIframe()},NexT.boot.motion=function(){
// Define Motion Sequence & Bootstrap Motion.
CONFIG.motion.enable&&NexT.motion.integrator.add(NexT.motion.middleWares.logo).add(NexT.motion.middleWares.menu).add(NexT.motion.middleWares.postList).add(NexT.motion.middleWares.sidebar).bootstrap(),NexT.utils.updateSidebarPosition()},document.addEventListener("DOMContentLoaded",(()=>{NexT.boot.registerEvents(),NexT.boot.refresh(),NexT.boot.motion()}));