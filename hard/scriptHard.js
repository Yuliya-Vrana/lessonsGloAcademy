const num = 266219;
const letter = prompt('write');

const multiplication = function(){
        let arrNum = String(num).split('');
        result = arrNum.reduce(function(prod, current){
        return  prod * current;

        } )
}

const myString = function (str){
        if (typeof str !=="string"){
                alert ("no string");
                return;
        }else       
                str = str.trim();  
                return str.length > 30 ? str.slice(0, 30) + '...' : str;         
}

multiplication();

console.log(String(result ** 3).substr(0,2));
console.log(myString(letter));