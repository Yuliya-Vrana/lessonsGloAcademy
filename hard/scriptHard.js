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


