let num = 266219;

let arrNum = String(num).split(''); // перевод числа в строку и разбиение его на части

function multiplication(){
 
        result = arrNum.reduce(function(prod, current){       //перебирающий метод, который сохраняет промежуточный результат
        return  prod * current;                                 

        } )
}
multiplication();                       // исполняем функцию - со скобочками!!!

console.log(String(result ** 3).substr(0,2));  //преобразуем в строку результат возведения в степень 3 и отрезаем от него первые два символа
