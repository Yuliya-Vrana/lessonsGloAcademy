(()=>{"use strict";(e=>{const t=document.getElementById("new-year"),n=document.getElementById("day-new-year"),o=()=>{let e=(()=>{let e=(new Date("01 january 2023").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,days:Math.floor(e/60/60/24)}})();n.textContent=e.days,e.timeRemaining>0?setInterval(o,1e3):t.textContent="С новым годом!"};o()})(),(()=>{const e=document.getElementById("day-time-now");(()=>{let t=(new Date).toLocaleString("en-US",{hour:"numeric",minute:"numeric",second:"numeric",hour12:!0});e.textContent=t})()})(),(()=>{const e=document.getElementById("today-data");(()=>{let t=new Date;["понедельник","вторник","среда","четверг","пятница","суббота","воскресенье"].forEach(((n,o)=>{o==+t.getDay()-1&&(e.textContent=n)}))})()})(),(()=>{const e=document.getElementById("hello");(()=>{let t=(new Date).getHours();+t>=5&&+t<12?e.textContent="Доброе утро!":+t>=12&&+t<17?e.textContent="Добрый день!":+t>=17&&+t<23?e.textContent="Добрый вечер!":+t>=23&&+t<5&&(e.textContent="Доброй ночи")})(),console.log("hello")})()})();