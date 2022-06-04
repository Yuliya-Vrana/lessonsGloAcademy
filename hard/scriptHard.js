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