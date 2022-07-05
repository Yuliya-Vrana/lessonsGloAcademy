(()=>{"use strict";const e=({formId:e,someElem:t=[]})=>{document.querySelectorAll("form").forEach((e=>{}));const o=document.getElementById(e),c=document.createElement("div");try{if(!o)throw new Error("Верните форму на место!");o.addEventListener("submit",(e=>{e.preventDefault(),(()=>{const e=o.querySelectorAll("input"),l=new FormData(o),r={};var n;c.textContent="Загрузка...",o.append(c),l.forEach(((e,t)=>{r[t]=e})),t.forEach((e=>{const t=document.getElementById(e.id);"block"===e.type?r[e.id]=t.textContent:"input"===e.type&&(r[e.id]=t.value)})),(n=r,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(n),headers:{ContentType:"application/json"}}).then((e=>e.json()))).then((e=>console.log(e))).then((t=>{c.textContent="Спасибо! Наш менеджер с вами свяжется.",e.forEach((e=>e.value=""))})).catch((e=>{c.textContent="Ошибка..."}))})()}))}catch(e){console.log(e.massege)}};(()=>{document.querySelector("body");const e=document.querySelector(".menu"),t=document.querySelector("menu");e.addEventListener("click",(e=>t.classList.toggle("active-menu"))),t.addEventListener("click",(e=>{e.preventDefault(),(e.target.matches(".close-btn")||e.target.matches("ul>li>a"))&&t.classList.toggle("active-menu")}))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),o=e.querySelector(".popup-content");t.forEach((t=>{t.addEventListener("click",(()=>{screen.width>768?(e.style.display="block",(({timing:e,draw:t,duration:o})=>{let c=performance.now();requestAnimationFrame((function l(r){let n=(r-c)/o;n>1&&(n=1);let a=e(n);t(a),n<1&&requestAnimationFrame(l)}))})({duration:500,timing:e=>e,draw(e){o.style.opacity=e}})):e.style.display="block"}))})),e.addEventListener("click",(t=>{screen.width,t.target.closest(".popup-content")&&!t.target.classList.contains("popup-close")||(e.style.display="none")}))})(),(()=>{const e=document.querySelectorAll("ul>li>a"),t=document.querySelector("main > a"),o=(e,t)=>{e.preventDefault(),t&&t.scrollIntoView({block:"start",behavior:"smooth"})};e.forEach((e=>{const t=document.querySelector(e.getAttribute("href"));e.addEventListener("click",(()=>o(event,t)))})),t.addEventListener("click",(()=>{const e=document.querySelector(t.getAttribute("href"));o(event,e)}))})(),(()=>{const e=document.querySelectorAll(".calc-block > input"),t=document.querySelectorAll("input[type=email]"),o=document.querySelectorAll("input[type=tel]"),c=document.getElementById("form1").querySelectorAll("input[type=text]"),l=document.getElementById("form2").querySelectorAll("input[type=text]"),r=document.getElementById("form3").querySelectorAll("input[type=text]");e.forEach((e=>{e.addEventListener("input",(t=>e.value=t.target.value.replace(/[^\d]/g,"")))})),c.forEach((e=>{e.addEventListener("input",(t=>e.value=t.target.value.replace(/[^а-яА-Я\s\-]/g,"")))})),l.forEach((e=>{e.addEventListener("input",(t=>e.value=t.target.value.replace(/[^а-яА-Я\s\-]/g,"")))})),r.forEach((e=>{e.addEventListener("input",(t=>e.value=t.target.value.replace(/[^а-яА-Я\s\-]/g,"")))})),o.forEach((e=>{e.addEventListener("blur",(t=>e.value=t.target.value.replace(/[^()-\d]/g,"")))})),t.forEach((e=>{e.addEventListener("input",(t=>e.value=t.target.value.replace(/[^\w@_.!~*'-]/gi,"")))})),t.forEach((e=>{e.addEventListener("input",(t=>e.value=t.target.value.replace(/[^\w@_.!~*'-]/gi,"")))}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const c=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===c?(e.classList.add("active"),o[t].classList.remove("d-none")):(e.classList.remove("active"),o[t].classList.add("d-none"))}))}}))})(),((e=".slide-active",t=".dot-active")=>{if(null!=e&&null!=t){const o=document.querySelector(".portfolio-content"),c=document.querySelectorAll(".portfolio-item"),l=document.querySelector(".portfolio-dots");let r,n,a=2e3,s=0;const u=()=>{for(let e=0;e<c.length;e++)n=document.createElement("li"),n.classList.add("dot"),l.append(n)},d=(e,t,o)=>{e[t].classList.remove(o)},i=(e,t,o)=>{e[t].classList.add(o)},m=()=>{const o=document.querySelectorAll(".dot");d(c,s,e),d(o,s,t),s++,s>=c.length&&(s=0),i(c,s,e),i(o,s,t)},p=(e=1500)=>{r=setInterval((()=>m()),e)},v=()=>{clearInterval(r)};o.addEventListener("click",(o=>{o.preventDefault();const l=document.querySelectorAll(".dot");o.target.matches(".dot, .portfolio-btn")&&(d(c,s,e),d(l,s,t),o.target.matches("#arrow-right")?s++:o.target.matches("#arrow-left")?s--:o.target.classList.contains("dot")&&l.forEach(((e,t)=>{o.target===e&&(s=t)})),s<0&&(s=c.length-1),i(c,s,e),i(l,s,t))})),o.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&v()}),!0),o.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&p(a)}),!0),u(),p(a)}})("portfolio-item-active","dot-active"),((e=100)=>{const t=document.querySelector(".calc-block"),o=document.querySelector(".calc-type"),c=document.querySelector(".calc-square"),l=document.querySelector(".calc-count"),r=document.querySelector(".calc-day"),n=document.getElementById("total");t.addEventListener("input",(t=>{t.target!==o&&t.target!==c&&t.target!==l&&t.target!==r||(()=>{const t=+o.options[o.selectedIndex].value,a=+c.value;let s=0,u=1,d=1;l.value>1&&(u+=+l.value/10),r.value&&r.value<5?d=2:r.value&&r.value<10&&(d=1.5),s=o.value&&c.value?e*t*a*u*d:0;const i=()=>{let e=s/200;n.textContent<s?(n.textContent=Math.ceil(+n.textContent+e),setTimeout(i,1)):n.textContent=s};i()})()}))})(100),e({formId:"form1",someElem:[{type:"block",id:"total"}]}),e({formId:"form2",someElem:[{type:"block",id:"total"},{type:"input",id:"form2-message"}]}),e({formId:"form3",someElem:[{type:"block",id:"total"}]})})();