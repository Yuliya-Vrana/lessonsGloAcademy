<<<<<<< HEAD
// let num = 266219;
// let arrNum = String(num).split('');

// function multiplication(){
//        result = arrNum.reduce(function(prod, current){
//        return  prod * current;
//        } )
// }
// multiplication();
// console.log(String(result ** 3).substr(0,2));

const lang = 'ru';

if (lang == 'en'){
    console.log("Английский дни недели");
}else 
    console.log("Русские дни недели");


switch (lang) {
    case 'en':
        console.log("Английский дни недели");
        break;
      
    case 'ru':   
        console.log("Русские дни недели");
        break;
      
        default:
            console.log("Русские дни недели");
      }    

const lang_array = [];
lang_array ['ru'] = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
lang_array ['en'] = ['Mo', 'Te', 'We', 'Th', 'Fr', 'Sa', 'Su'];

console.log(lang_array[lang]);


const namePerson = "Александр";

namePerson == "Артём" ? console.log ("Директор") : namePerson == "Александр" ? console.log ("Преподаватель") : console.log ("Студент");
=======
let num = 266219;
let arrNum = String(num).split('');

let arrNumbers= ['24569', '458963', '5896314', '4578930', '352487', '24578963', '2578960'];

const multiplication = function (num){
        result = arrNum.reduce(function(prod, current){
        return  prod * current;
        } )
}

const getNumber = function (arr){
        let newArr = []
        arr.forEach((item) => {if (item.startsWith ('2') || item.startsWith ('4')) newArr.push(item)}); 
        return (newArr)
}
 const showSimpleNumber  = function (n){
        if(n>1){
        nextStep:
            for (let i = 2; i <= n; i++) {
             for (let j = 2; j < i; j++) {
                if(i % j == 0){
                   continue nextStep
                }
             }
             console.log ( i + '- это простое число. Делители этого числа: 1 и ' + i )
            } 
        }
}
multiplication();
showSimpleNumber(100);

console.log(getNumber(arrNumbers));
console.log(String(result ** 3).substr(0,2));
>>>>>>> lesson05Two
