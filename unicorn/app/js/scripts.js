history.scrollRestoration="manual",document.addEventListener("DOMContentLoaded",(function(){let e=new IntersectionObserver((function(e,t){e.forEach(e=>{console.log(e),e.isIntersecting&&e.target.classList.add("in-view")})}),{threshold:.3});a(".animated").forEach(t=>{e?e.observe(t):t.classList.remove("animated")}),s(".header__hamb").onclick=()=>{s(".header__nav").classList.add("active")},s(".header__nav-close").onclick=()=>{s(".header__nav").classList.remove("active")},a(".question").forEach(e=>{e.onclick=t=>{let n=e.nextElementSibling;e.classList.contains("active")?(e.classList.remove("active"),n.style.height="0px"):(e.classList.add("active"),window.innerWidth>767?n.style.height=n.scrollHeight+60+"px":n.style.height=n.scrollHeight+30+"px")}});var t=new Date("2021-09-10T18:00:00-07:00").getTime();o();var n=setInterval((function(){o()}),1e3);function i(e,t){for(var n=e+"";n.length<t;)n="0"+n;return n}function o(){let e=(new Date).getTime(),o=t-e,r=Math.floor(o/864e5),a=Math.floor(o%864e5/36e5),l=Math.floor(o%36e5/6e4),c=Math.floor(o%6e4/1e3);s(".timer-days").innerHTML=i(r,2),s(".timer-hours").innerHTML=i(a,2),s(".timer-minutes").innerHTML=i(l,2),s(".timer-seconds").innerHTML=i(c,2),o<0&&(clearInterval(n),s(".timer-days").innerHTML="",s(".timer-hours").innerHTML="",s(".timer-minutes").innerHTML="",s(".timer-seconds").innerHTML="")}a("a[data-scroll]").forEach(e=>{e.onclick=t=>{t.preventDefault(),window.innerWidth<768&&s(".header__nav").classList.remove("active"),function(e){const t=window.scrollY||window.pageYOffset,n=Date.now(),i=Math.abs(t-e)/2;!function o(){var s,a=Math.min(1,(Date.now()-n)/i),l=t+(e-t)*((s=a)<.5?4*s*s*s:1-Math.pow(-2*s+2,3)/2);window.scrollTo(0,l),a<1&&r(o)}()}(function(e){var t=e.getBoundingClientRect(),n=window.pageYOffset||document.documentElement.scrollTop;return t.top+n}(s(e.dataset.scroll)))}});const r=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame;function s(e,t){return t?t.querySelector(e):document.querySelector(e)}function a(e,t){return t?t.querySelectorAll(e):document.querySelectorAll(e)}!function(){var e=["#fff"],t=window.innerWidth,n=(window.innerHeight,{x:t/2,y:t/2}),i=[];function o(e){t=window.innerWidth,window.innerHeight}function s(t){if(t.touches.length>0)for(var n=0;n<t.touches.length;n++)l(t.touches[n].clientX,t.touches[n].clientY,e[Math.floor(Math.random()*e.length)])}function a(t){n.x=t.clientX,n.y=t.clientY,l(n.x,n.y,e[Math.floor(Math.random()*e.length)])}function l(e,t,n){var o=new h;o.init(e,t,n),i.push(o)}function c(){r(c),function(){for(var e=0;e<i.length;e++)i[e].update();for(e=i.length-1;e>=0;e--)i[e].lifeSpan<0&&(i[e].die(),i.splice(e,1))}()}function h(){this.lifeSpan=120,this.initialStyles={position:"absolute",display:"block",width:"45px",height:"45px",background:"url('../img/stars.svg') no-repeat center center/contain",pointerEvents:"none","z-index":"10000000","will-change":"transform"},this.init=function(e,t,n){this.velocity={x:(Math.random()<.5?-1:1)*(Math.random()/2),y:1},this.position={x:e-10,y:t-20},this.initialStyles.color=n,this.element=document.createElement("span"),function(e,t){for(var n in t)e.style[n]=t[n]}(this.element,this.initialStyles),this.update(),document.querySelector(".container").appendChild(this.element)},this.update=function(){this.position.x+=this.velocity.x,this.position.y+=this.velocity.y,this.lifeSpan--,this.element.style.transform="translate3d("+this.position.x+"px,"+this.position.y+"px, 0) scale("+this.lifeSpan/120+")"},this.die=function(){this.element.parentNode.removeChild(this.element)}}document.addEventListener("mousemove",a),document.addEventListener("touchmove",s),document.addEventListener("touchstart",s),window.addEventListener("resize",o),c()}()}));