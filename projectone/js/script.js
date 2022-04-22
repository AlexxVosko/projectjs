//console.log(5);
'use strict';


function fib(num) {
    if(typeof(num)!=="number" || num<0 || !Number.isInteger(num) ){
        return ``;
    }

    let str = '';
    let first=0;
    let second=1;
    let other;
    for(let i=0; i<num;i++){
        if(i===num){
            str+=`${first}`;
        }else{
            str+=`${first} `;
        }
        other=first+second;
        first = second;
        second =  other;
    }
    return str;
}

console.log(fib(8));