//console.log(5);
'use strict';

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str='';
    if(arr.length<1){
        str+=`Нет доступных валют`;
    }else{
        str+=`Доступные валюты:\n`
        //str+=`Доступные валюты:\n${arr.join('\n')}`;
        for (let value of arr){
            if(value!==missingCurr){
                str+=`${value}\n`;
            }
        }
    }
return str;
}


console.log(availableCurr([...baseCurrencies,...additionalCurrencies],'CNY'));