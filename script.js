'use strict';
const main = document.querySelector('.main')

const DomElement =  function(selector, height, width, bg, fontSize){
    this.selector = selector
    this.height = height
    this.width = width
    this.bg = bg
    this.fontSize = fontSize   
    this.nameTag = selector.substring(1)
    
    this.createElem = function(){
        if(selector[0] == '.') {
            const divClass = document.createElement('div')
            divClass.classList.add = this.nameTag
            divClass.style.cssText = 'height:' + height + 'px; width: ' + width + 'px; background-color: ' + bg + '; font-size: ' + fontSize + 'px;'+
                                     'border:1px solid #000; padding: 5px;'
            divClass.innerHTML = '<p>I\'m class div</p>'
            main.append(divClass)
        }else if(selector[0] == '#'){
            const divClass = document.createElement('div')
            divClass.id = this.nameTag
            divClass.style.cssText = 'height:' + height + 'px; width: ' + width + 'px; background-color: ' + bg + '; font-size: ' + fontSize + 'px;'+
                                     'border:1px solid #000; padding: 5px;'
            divClass.innerHTML = '<p>I\'m id div</p>'
            main.append(divClass)
        }

  }
}

const blockClass = new DomElement ('.block', 150, 150, 'green', 16)
blockClass.createElem()

const blockId = new DomElement ('#block', 100, 100, 'blue', 14)
blockId.createElem()

console.log(blockId)
//     // if(selector[0] == '.') {
//     //    const divClass = document.createElement ('div')
//     //    divClass.classList.add = this.nameClassTag
//     //    divClass.style.cssText = 'height:' + height + 'px; width: ' + width + 'px; background ' + bg + 'font-size: ' + fontSize + 'px' 
//     // }else if (selector[0] == '#') {
//     //    const divId = document.createElement ('div')
//     //    divId.classList.add = this.nameClassTag 
//     //    divId.style.cssText = 'height:' + height + 'px; width: ' + width + 'px; background ' + bg + 'font-size: ' + fontSize + 'px'  
//     // }
// }

// const blockClass = new DomElement ('.block', 20, 20, 'green', 25)

// //const blockId = new DomElement ('#block', 50, 50, 'blue', 25)


// //
// //blockClass.style.cssText = 'border: 1px solid red'
// blockClass.innerHTML = '<p>hi</p>'
// //const blockId = document.createElement('div')

// //main.append(blockId)


// console.log(main)
// console.log(blockClass)

// Внутрь созданного блока записывать любой текст. Метод записи может быть любым.

// 2) Создать новый объект на основе класса DomElement

// 3) Вызвать его метод чтобы создать элемент на странице

// Проверить, чтобы все работало и не было ошибок в консоли

// Сохранить проект в отдельном репозитории на GitHub

// УСЛОЖНЕННОЕ  ЗАДАНИЕ: 


// 1) Используя функцию-конструктор DomElement из основного задания №1, создать квадрат 100 на 100 пикселей. Ему необходимо задать фон(background) любого цвета и свойство position: absolute.


// 2) Поместить его на страницу только после выполнения события DOMContentLoaded. Внутри тега body должно быть только подключение скрипта. (В случае подключения файла скрипта к странице перед закрывающим тэгом body)


// 3) Написать обработчик события для keydown, который будет принимать callback-функцию. Данная функция будет отлавливать нажатие на стрелки клавиатуры. В зависимости от нажатой кнопки(Вверх - стрелка вверх, Влево - стрелка влево, Вправо - стрелка вправо, Вниз - стрелка вниз) наш квадрат будет перемещаться на 10 пикселей при каждом нажатии.


//  Добавить папку с уроком на свой GitHub

// Юлия Целикова
// Ссылка на GitHub - * обязательное поле
// Ссылка на GitHub


