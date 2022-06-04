'use strict';

let title
let screens
let screenPrice
let adaptive
let allServicePrices
let fullPrice
let servicePercentPrice
let servise1
let servise2
let servisePrice
let sum 
let s

let rollback = "10"

console.log( 0 !== null)


const isNumber = function (num) {
    
        return !isNaN(parseFloat(num)) && isFinite(num) && num != null
    
}

const asking = function () {
    title = prompt('Как называется Ваш проэкт?','калькулятор верстки')
    screens = prompt ('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные')

    do{
        screenPrice = prompt ('Сколько будет стоить данная работа?','15000')     
    }
    while(!isNumber(screenPrice))
       
    adaptive = prompt ('Нужен ли адаптив на сайте?','да')

    return title
}
 
const getAllServicePrices = function (){
    sum = 0
    for(let i=0; i < 2; i++){
        if(i === 0){
            servise1 = prompt('Какой дополнительный тип услуги нужен?','forms')
            }else if (i === 1){
                servise2 = prompt('Какой ещё дополнительный тип услуги нужен?','calc')
            }     
        do{
            servisePrice = prompt('Сколько это будет стоить?','1000')     
        }
        while(!isNumber(servisePrice))

        sum += parseFloat(servisePrice)
    }
    return sum
}

// const showTipeOf = function (variable){
//     console.log (variable, typeof variable);
// }

const getFullPrice = function (){   
    return parseFloat(screenPrice) + allServicePrices
}

const getServicePercentPrice = function (){
    return fullPrice - (fullPrice * (rollback/100))
}

const getTitle = function(){
    return title.trim()[0].toUpperCase() + title.trim().substr(1).toLowerCase(); 
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

asking();
title = getTitle()
allServicePrices = getAllServicePrices()
fullPrice = getFullPrice()
servicePercentPrice = getServicePercentPrice()

// showTipeOf(title)
// showTipeOf(screenPrice)
// showTipeOf(adaptive)

console.log(title);
console.log(allServicePrices);
console.log(fullPrice);
console.log(servicePercentPrice);
console.log(getRollbackMessage(fullPrice));
// 


//  showTipeOf(title, screenPrice, adaptive);
//  console.log(screens.length);
//  console.log(servicePercentPrice);
//  console.log("Стоимость вёрстки экранов " + screenPrice + "рублей. Стоимость разработки сайта " + fullPrice + "рублей.");
//  console.log(getScreenPrice());
//  console.log(typeof title);
//  console.log(typeof screenPrice);
//  console.log(typeof adaptive);
