'use strict';

const appData = {
    title: '',
    screens: '',
    screenPrice: 0,
    adaptive: true,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    rollback: 10,
    servise1: '',
    servise2: '',
    servisePrice: 0,

    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num) && num != null
    },

    asking: function () {
        appData.title = prompt('Как называется Ваш проэкт?','калькулятор верстки')
        appData.screens = prompt ('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные')
    
        do{
            appData.screenPrice = prompt ('Сколько будет стоить данная работа?','15000')     
        }
        while(!appData.isNumber(appData.screenPrice))
           
        appData.adaptive = prompt ('Нужен ли адаптив на сайте?','да')


    },

    getAllServicePrices: function (){
        let sum = 0
        for(let i=0; i < 2; i++){
            if(i === 0){
                appData.servise1 = prompt('Какой дополнительный тип услуги нужен?','forms')
                }else if (i === 1){
                    appData.servise2 = prompt('Какой ещё дополнительный тип услуги нужен?','calc')
                }     
            do{
                appData.servisePrice = prompt('Сколько это будет стоить?','1000')     
            }
            while(!appData.isNumber(appData.servisePrice))

            sum += parseFloat(appData.servisePrice)
        }
        return sum
    },

    getFullPrice: function (){   
        return parseFloat(appData.screenPrice) + appData.allServicePrices
    },

    getServicePercentPrice: function (){
        return appData.fullPrice - (appData.fullPrice * (appData.rollback/100))
    },

    getTitle: function(){
        return appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase(); 
    },
    
    getRollbackMessage: function (price){
    if (price >= 30000){
        return 'Даём скидку в 10%';
    }else if (price >= 15000 && price < 30000){
            return 'Даём скидку в 5%';
        }else if (price >= 0 && price < 15000){
               return 'Скидка не предусмотрена';
                }else
                    return 'Что то пошло не так';
    },

    logger: function(){
        console.log(appData.title);
        console.log(appData.allServicePrices);
        console.log(appData.fullPrice);
        console.log(appData.servicePercentPrice);
        console.log(appData.getRollbackMessage(appData.fullPrice));
        for (let key in appData)
            console.log (key)
         
    },

    start: function(){
        appData.asking()
        appData.title = appData.getTitle()
        appData.allServicePrices = appData.getAllServicePrices()
        appData.fullPrice = appData.getFullPrice()
        appData.servicePercentPrice = appData.getServicePercentPrice()
        appData.logger()      
    }
}
 
appData.start()

