'use strict';

function one (x){
    const hiddenNumber = Math.ceil(Math.random() * 100)
    console.log (hiddenNumber)


    function two (){
        const userNumber = prompt('Я загадал число от 1 до 100. Попробуй, угадай какое. Введи число!')
        x--
        console.log(typeof userNumber, userNumber)
        if(userNumber == ''){
            alert ('Всё-таки число нужно ввести')
            two()
        }else(userNumber === null)
            alert ('Игра окончена. До встречи!')
        

        if (parseInt(userNumber) < hiddenNumber) {
            alert ('Моё число больше')
            two()
        }else if(parseInt(userNumber)  > hiddenNumber){
            alert ('Моё число меньше')
            two()
        }else if(parseInt(userNumber)  == hiddenNumber){
            alert ('Ура! Ты угадал(-а)!')
        }
     }
    two()
}

one(10)


