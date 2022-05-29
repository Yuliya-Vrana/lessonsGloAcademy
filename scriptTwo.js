let num = 266219;

let arrNum = String(num).split('');

function multiplication(){
        result = arrNum.reduce(function(prod, current){
        return  prod * current;
        } )
}
multiplication();

console.log(String(result ** 3).substr(0,2));



 
