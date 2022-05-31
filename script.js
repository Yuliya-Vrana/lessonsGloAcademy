'use strict';

const title = prompt('Как называется Ваш проэкт?');
const screens = prompt ('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
const screenPrice = +prompt ('Сколько будет стоить данная работа?');
const rollback = "10";
const adaptive = prompt ('Нужен ли адаптив на сайте?');
const servise1 = prompt('Какой дополнительный тип услуги нужен?');
const servisePrice1= + prompt('Сколько это будет стоить?');
const servise2 = prompt('Какой дополнительный тип услуги нужен?');
const servisePrice2 = + prompt('Сколько это будет стоить?');

const showTipeOf = function (variable){
    console.log (variable, typeof variable);
}
const fullPrice = function getFullPrice(){
    return parseFloat(screenPrice) + allServicePrices()
}

const allServicePrices = function getAllServicePrices (){
    return parseFloat(servisePrice1) + parseFloat(servisePrice2)
}

const getRollbackMessage = function (price){
    if (price >= 30000){
        return 'Даём скидку в 10%';
    }else if (price >= 15000 && price < 30000){
            return 'Даём скидку в 5%';
    }else if (price >= 0 && price < 15000){
                return 'Скидка не предусмотрена';
        }else
            return 'Что то пошло не так';
}

const getTitle = function(str){
    let newStr = str.replace(/^ /,"");
    return newStr[0].toUpperCase() + newStr.slice(1); 
}

const servicePercentPrice = function getServicePercentPrices(price){
    return price * (rollback/100)
}
showTipeOf(title, screenPrice, adaptive);

console.log(fullPrice());
console.log(allServicePrices());
console.log(getTitle(title));
console.log(getRollbackMessage(fullPrice()));
console.log(servicePercentPrice(fullPrice()));

