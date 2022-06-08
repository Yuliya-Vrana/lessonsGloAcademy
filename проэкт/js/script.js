'use strict';
const title = document.getElementsByTagName ('h1')
const handlerBtn = document.getElementsByClassName('handler_btn')
const screenBtn = document.querySelector('.screen-btn')
const otherItesPercent = document.querySelectorAll('.other-items.percent')
const otherItesNumber = document.querySelectorAll('.other-items.number')
const rangeInput = document.querySelector('[type=range]')
const rangeValue = document.querySelector('.rollback > .main-controls__range > .range-value')
const totalInputs = document.getElementsByClassName('total-input')
let screen = document.querySelectorAll('.screen')

for (let i = 0; i < totalInputs.length; i++) {  
    console.log(totalInputs[i])
}

console.log(title[0])
console.log(handlerBtn)
console.log(screenBtn)
console.log(otherItesPercent)
console.log(otherItesNumber)
console.log(rangeInput)
console.log(rangeValue)

console.log(screen)
// const appData = {
//     title: '',
//     screens: [],
//     screenPrice: 0,
//     adaptive: true,
//     allServicePrices: 0,
//     fullPrice: 0,
//     servicePercentPrice: 0,
//     rollback: 10,
//     servises: {},
//     servisePrice: 0,

//     isNumber: function (num) {
//         return !isNaN(parseFloat(num)) && isFinite(num) && num != null
//     },

//     isString: function(str){
//         return str != null && str !== '' && !isFinite(str)
//     },
//     asking: function () {
//         do{
//             appData.title = prompt('Как называется Ваш проэкт?','калькулятор верстки')     
//         }while(!appData.isString(appData.title))
        
//         for(let i=0; i < 2; i++){ 
//             let price = 0  
//             let name 

//             do{
//                 name = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные')  
//             }while(!appData.isString(name))
        
//             do{
//                 price = prompt ('Сколько будет стоить данная работа?','15000')     
//             }while(!appData.isNumber(price))

//             appData.screens.push ({id: i, name:name, price:price})
//         } 
           
//         appData.adaptive = prompt ('Нужен ли адаптив на сайте?','да')

//         for(let i=0; i < 2; i++){
//             let price = 0
//             let name

//             do{
//                 name = prompt('Какой дополнительный тип услуги нужен?','forms')   
//             }while(!appData.isString(name))
   
//             do{
//                 price = prompt('Сколько это будет стоить?','1000')     
//             }while(!appData.isNumber(price))

//             appData.servises[name] = +price      
//         }
//     },

//     addPrices: function(){

//         appData.screenPrice = appData.screens.reduce((sum, current) => sum + current.price, 0)

//         appData.allServicePrices = Object.values(appData.servises).reduce((sum, current) => sum + current, 0)
       
//     },
  
//     getFullPrice: function (){   
//         appData.fullPrice =  parseFloat(appData.screenPrice) + appData.allServicePrices
//     },

//     getServicePercentPrice: function (){
//         appData.servicePercentPrice =  appData.fullPrice - (appData.fullPrice * (appData.rollback/100))
//     },

//     getTitle: function(){
//         appData.title =  appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase(); 
//     },
    
//     getRollbackMessage: function (price){
//     if (price >= 30000){
//         return 'Даём скидку в 10%';
//     }else if (price >= 15000 && price < 30000){
//             return 'Даём скидку в 5%';
//         }else if (price >= 0 && price < 15000){
//                return 'Скидка не предусмотрена';
//                 }else
//                     return 'Что то пошло не так';
//     },

//     logger: function(){
//         console.log(appData.title);
//         console.log(appData.screens);
//         console.log(appData.servises);
//         console.log(appData.allServicePrices);
//         console.log(appData.fullPrice);
//         console.log(appData.servicePercentPrice);
//         console.log(appData.getRollbackMessage(appData.fullPrice));
//         // for (let key in appData)
//         //     console.log (key)      
//     },

//     start: function(){
//         appData.asking()
//         appData.getTitle()
//         appData.addPrices()

//         appData.getFullPrice()
//         appData.getServicePercentPrice()

//         appData.logger()      
//     }
// }
 
// appData.start()