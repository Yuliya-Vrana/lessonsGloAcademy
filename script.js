'use strict';
let attempt = 5;

function one (n){
    const hiddenNumber = Math.ceil(Math.random() * 100)
       
        function two (){
            const userNumber = prompt('Я загадал число от 1 до 100. Попробуй, угадай какое. Введи число!')
            n--
          
            if (n > 0){

                if(userNumber == ''){
                    alert ('Всё-таки число нужно ввести')
                    two()
                }else if (isNaN(userNumber) && !isFinite(userNumber)){
                    alert ('Число нужно ввести')
                     two()
                }else if (userNumber == null){
                    alert ('Игра окончена. До встречи!')
                }
               
                if (parseInt(userNumber) < hiddenNumber) {
                    alert ('Моё число больше. Осталось ' + n + ' попыток')
                    two()
                }else if(parseInt(userNumber)  > hiddenNumber){
                    alert ('Моё число меньше. Осталось ' + n + ' попыток')
                    two()
                }else if(parseInt(userNumber)  == hiddenNumber){
                    alert ('Ура! Ты угадал(-а)!')
                }
            }else if (n == 0){
                let newGame = confirm ('Попытки закончились. Сыграем ещё раз?')

                    if (newGame == true){
                        one(attempt)
                    }else 
                        alert ('До встречи!')
            }
        }
    two() 
}

one(attempt)


