'use strict';

function one (x){
    function two (){
        const answer = +prompt('Введите число')
        x--

        console.log(answer);
        console.log(x);

        // if (answer > x) {
        //     alert ('Моё число меньше')
        //     two()
        // }else if(answer < x){
        //     alert ('Моё число меньше')
        //     two()
        // }else
        //     alert ("вы угадали!")
    }
}

one (10)