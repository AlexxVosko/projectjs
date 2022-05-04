//console.log(5);
'use strict';

function factorial(num) {
    if(typeof(num)!=='number' || !Number.isInteger(num)){
        return 'Ошибка, введите целое число';
    }
    if(num<=0){
        return 1;
    }else{
        return num*(factorial(num-1));
    }    
}
console.log(factorial('dd'));
console.log(factorial(5.3));
console.log(factorial(-5));
console.log(factorial(3));