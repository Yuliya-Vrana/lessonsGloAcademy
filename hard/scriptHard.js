let num = 266219;
let arrNum = String(num).split('');
let askingLanguage = prompt('Выбери язык', 'ru')
let lang_array = [];
let namePerson = prompt ("Имя", "Александр");

const multiplication = function(){
       result = arrNum.reduce(function(prod, current){
       return  prod * current;
       } )
}

const languageIf = function(lang){
        if (lang == 'en'){
                return("Английский дни недели")
        }else 
                return("Русские дни недели")
}

const languageSwitch = function(lang){
        switch (lang) {
        case 'en':
                return("Английский дни недели");
                       
        case 'ru':   
                return("Русские дни недели");
                        
                default:
                return("Русские дни недели");
        } 
}

const getStatus = function(){
      namePerson == "Артём" ? console.log ("Директор") : namePerson == "Александр" ? console.log ("Преподаватель") : console.log ("Студент");
}

const getWeek = function (){
        const week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье']

        let today = new Date() 
        let todayDay = +today.getDay()-1

        for (let i = 0; i < week.length; i++) {

                if (i === today.getDay()){
                        document.write ('<b>' + week[i] + '</b><br>')           
                }else if(week[i] == 'суббота' || week[i] == 'воскресенье'){
                        document.write ('<i>' + week[i]+ '</i><br>')    
                }else 
                document.write (week[i] +'<br>')
        }
}

lang_array ['ru'] = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
lang_array ['en'] = ['Mo', 'Te', 'We', 'Th', 'Fr', 'Sa', 'Su']; 

multiplication();
getWeek()
getStatus()

console.log(String(result ** 3).substr(0,2));
console.log(languageIf(askingLanguage));
console.log(languageSwitch(askingLanguage));
console.log(lang_array[askingLanguage]);
