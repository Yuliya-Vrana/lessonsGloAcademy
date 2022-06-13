'use strict';
const title = document.getElementsByTagName ('h1')[0]
const screenBtn = document.querySelector('.screen-btn')
const otherItesPercent = document.querySelectorAll('.other-items.percent')
const otherItesNumber = document.querySelectorAll('.other-items.number')

const rangeInput = document.querySelector('.rollback input')
const rangeValue = document.querySelector('.rollback > .main-controls__range > .range-value')

const startBtn = document.getElementsByClassName('handler_btn')[0]
const resetBtn = document.getElementsByClassName('handler_btn')[1]

const total = document.getElementsByClassName('total-input')[0]
const totalCount = document.getElementsByClassName('total-input')[1]
const totalCountOther = document.getElementsByClassName('total-input')[2]
const fullTotalCounter = document.getElementsByClassName('total-input')[3]
const totalControllBack = document.getElementsByClassName('total-input')[4]

let screens = document.querySelectorAll('.screen')

const appData = {
    title: '',
    screens: [],
    count: [],
    screenCounter: 0,
    screenPrice: 0,
    adaptive: true,
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    fullPrice: 0,
    rollback: 0,
    servicesPercent: {},
    servicesNumber: {},
    servicePrice: 0,
    init: function(){ 
        appData.addTitle()
        screenBtn.addEventListener('click', appData.addScreenBlock)
        startBtn.addEventListener('click', appData.start)
        rangeInput.addEventListener('change', appData.addPollback)

    },
    start: function(){
        // if(screens != []) {
            appData.addScreens()
            appData.addServices()
            appData.addPrices()
            appData.showResult()

            console.log(screens)
        //}
        
    },
    addTitle: function() {
        document.title = title.textContent
    },
    addScreenBlock: function(){
        const cloneScreen = screens[0].cloneNode(true)
        screens[screens.length - 1].after(cloneScreen)
    },
    addScreens: function() {
        screens = document.querySelectorAll('.screen')

        screens.forEach(function(screen, index){
            const select = screen.querySelector('select')
            const input = screen.querySelector('input')
            const selectName = select.options[select.selectedIndex].textContent
  
            appData.screens.push({
                id: index,
                name: selectName,
                price: +select.value * +input.value
            })

            appData.count.push(+input.value)           
        })   
    }, 

    addServices: function() {
        otherItesPercent.forEach(function(item){
            const check = item.querySelector('input[type=checkbox]') 
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')   

            if(check.checked){
                appData.servicesPercent[label.textContent] = +input.value
            }           
        })

        otherItesNumber.forEach(function(item){
            const check = item.querySelector('input[type=checkbox]') 
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')   

            if(check.checked){
                appData.servicesNumber[label.textContent] = +input.value
            }           
        })
    },
    addPollback: function(event){
        rangeValue.textContent = event.target.value
        appData.rollback = rangeValue.textContent
    },
    addPrices: function(){
        appData.screenPrice = appData.screens.reduce((sum, current) => sum + current.price, 0)
        appData.servicePricesNumber = Object.values(appData.servicesNumber).reduce((sum, current) => sum + current, 0)  

        for(let key in appData.servicesPercent){
            appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key]/100)
        }
        
        appData.fullPrice =  parseFloat(appData.screenPrice) + appData.servicePricesPercent + appData.servicePricesNumber
        appData.servicePercentPrice =  appData.fullPrice - (appData.fullPrice * (appData.rollback/100))
        appData.screenCounter = appData.count.reduce((sum, current) => sum + current, 0)
    },
    showResult: function(){
        total.value = appData.screenPrice
        totalCount.value = appData.screenCounter
        totalCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber
        fullTotalCounter.value = appData.fullPrice 
        totalControllBack.value = appData.servicePercentPrice
    },

    logger: function(){
        console.log(appData.title);
        console.log(appData.screens);
        console.log(appData.servises);
        console.log(appData.allServicePrices);
        console.log(appData.fullPrice);
        console.log(appData.servicePercentPrice);
     
    },


}
 
appData.init()