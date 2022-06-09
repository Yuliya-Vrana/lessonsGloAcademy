// const day = document.querySelector('.day')
// const month = document.querySelector('.month')
// const year = document.querySelector('.year')
const clockTwo = document.querySelector('.clock-two')
const dayBlock = document.querySelector('.day')
const monthBlock = document.querySelector('.month')
const yearBlock = document.querySelector('.year')
const hoursBlock = document.querySelector('.hours')
const minutesBlock = document.querySelector('.minutes')
const secondsBlock = document.querySelector('.seconds')
const weekDay = document.querySelector('.week-day')

const date = new Date()
let interval

const getWeekDate = () => {
	let week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье' ]

	weekDay.textContent = week[date.getDay() - 1]
}
const today = () => {
    let months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']

    dayBlock.textContent = date.getDate()
    monthBlock.textContent = months[date.getMonth()]
    yearBlock.textContent = date.getFullYear()
} 

const numWord = (value, words) => {
	value = Math.abs(value) % 100
	const lastName = value % 10

	if (value > 10 & value < 20) return words[2]
	if (lastName > 1 && lastName < 5 ) return words[1]
	if (lastName === 1) return words[0]

	return words[2]
}
const formatTime = (value) =>{
	let format = value < 10 ? "0" + value : value
	return format
}
const updateTime = () => {
	const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

	const fHours = formatTime(hours)
	const fMinutes = formatTime(minutes)
	const fSeconds = formatTime(seconds)

	hoursBlock.textContent = fHours
	minutesBlock.textContent = fMinutes
	secondsBlock.textContent = fSeconds

    hoursBlock.nextElementSibling.textContent = numWord(hours, ['час', 'часа', 'часов'])
    minutesBlock.nextElementSibling.textContent = numWord(minutes, ['минута', 'минуты', 'минут'])
    secondsBlock.nextElementSibling.textContent = numWord(seconds, ['секунда', 'секунды', 'секунд'])
}
const clockNumber = () => {
	const day = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()
	const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

	const fHours = formatTime(hours)
	const fMinutes = formatTime(minutes)
	const fSeconds = formatTime(seconds)

	const fDay = formatTime(day)
	const fMonth = formatTime(month)
	const fYear = formatTime(year)
	
	clockTwo.textContent = fDay + '.' + fMonth + '.' + fYear + ' - ' + fHours + ':' + fMinutes + ':' + fSeconds
}
getWeekDate();
today();
updateTime();
interval = setInterval(updateTime, 700);
clockNumber()
//
//console.log(today)

//const today = new Date()



// let num = 266219;
// let arrNum = String(num).split('');
// let askingLanguage = prompt('Выбери язык', 'ru')
// let lang_array = [];
// let namePerson = prompt ("Имя", "Александр");

// const multiplication = function(){
//        result = arrNum.reduce(function(prod, current){
//        return  prod * current;
//        } )
// }

// const languageIf = function(lang){
//         if (lang == 'en'){
//                 return("Английский дни недели")
//         }else 
//                 return("Русские дни недели")
// }

// const languageSwitch = function(lang){
//         switch (lang) {
//         case 'en':
//                 return("Английский дни недели");
                       
//         case 'ru':   
//                 return("Русские дни недели");
                        
//                 default:
//                 return("Русские дни недели");
//         } 
// }

// const getStatus = function(){
//       namePerson == "Артём" ? console.log ("Директор") : namePerson == "Александр" ? console.log ("Преподаватель") : console.log ("Студент");
// }

// const getWeek = function (){
//         const week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье']

//         let today = new Date() 
//         //let todayDay = +today.getDay()-1

//         for (let i = 0; i < week.length; i++) {

//                 if (i === +today.getDay()-1){
//                         document.write ('<b>' + week[i] + '</b><br>')           
//                 }else if(week[i] == 'суббота' || week[i] == 'воскресенье'){
//                         document.write ('<i>' + week[i]+ '</i><br>')    
//                 }else 
//                 document.write (week[i] +'<br>')
//         }
// }

// lang_array ['ru'] = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// lang_array ['en'] = ['Mo', 'Te', 'We', 'Th', 'Fr', 'Sa', 'Su']; 

// multiplication();
// getWeek()
// getStatus()

// console.log(String(result ** 3).substr(0,2));
// console.log(languageIf(askingLanguage));
// console.log(languageSwitch(askingLanguage));
// console.log(lang_array[askingLanguage]);