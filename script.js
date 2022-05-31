<<<<<<< HEAD
const title = "LearnWithGloAcademy";
const screens = "Простые, Сложные, Интерактивные";
const screenPrice = "999";
const rollback = "99";
const fullPrice = "10000";
const adaptive = true;

console.log(title + ', ' + fullPrice + ', ' + adaptive);
console.log(screens.length);
console.log("Стоимость вёрстки экранов " + screenPrice + " рублей");
console.log("Стоимость разработки сайта " + fullPrice + " рублей");

newScreens = screens.toLowerCase();
console.log(newScreens.split(", "));

console.log(fullPrice * (rollback/100));
=======
'use strict';

const title = prompt('Как называется Ваш проэкт?');
const screens = prompt ('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
const screenPrice = prompt ('Сколько будет стоить данная работа?');
const rollback = "99";
const adaptive = confirm ('Нужен ли адаптив на сайте?');

console.log(title);
console.log(screens);
console.log(parseInt(screenPrice));
console.log(adaptive);

const servise1 = prompt('Какой дополнительный тип услуги нужен?');
const servisePrice1= prompt('Сколько это будет стоить?');
const servise2 = prompt('Какой дополнительный тип услуги нужен?');
const servisePrice2 = prompt('Сколько это будет стоить?');

const fullPrice = parseFloat(screenPrice) +  parseFloat(servisePrice1) + parseFloat(servisePrice2);

console.log(fullPrice);

const servicePercentPrice = fullPrice * (rollback/100);

console.log(Math.ceil (servicePercentPrice));

if (fullPrice >= 30000){
    alert ('Даём скидку в 10%');
}else if (15000 <= fullPrice){
        alert ('Даём скидку в 5%');
   }else if (0 <= fullPrice){
        alert('Скидка не предусмотрена');
     }else
        alert('Что то пошло не так');

// console.log(title + ', ' + fullPrice + ', ' + adaptive);
// console.log(screens.length);
// console.log("Стоимость вёрстки экранов " + screenPrice + " рублей");
// console.log("Стоимость разработки сайта " + fullPrice + " рублей");

// newScreens = screens.toLowerCase();
// console.log(newScreens.split(", "));

// console.log(fullPrice * (rollback/100));
>>>>>>> lesson03
