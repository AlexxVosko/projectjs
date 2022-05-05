
// Оператор нулевого слияния (??) - реакция не на все false как у опреатора или (||), а только на null и undefined

'use strict';

//let userName;
//console.log(userName ?? 'User'); // User
//let userName = null; 
//console.log(userName ?? 'User'); // User
//let userName = 0;
//console.log(userName ?? 'User'); // 0
//let userName = NaN;
//console.log(userName ?? 'User'); // NaN


// Нюансы
let userName;
let userKey;

console.log(userName ?? userKey ?? 'User'); //User

// Приоритет оператора (Nullish coalescing operator) - одинаковый с оператором || 
// комбинация с && или ||
// Операторы && и ?? - не могут быть смешаны (получим ошибку)





const box = document.querySelector('.box');
const newHeight = 100;
const newWidth = 400;
//const newHeight = 0; // будет false при операторе ||

//  Если параметры не будут существовать то нароим по умолчанию для подстановки
function changeParams(elem, h, w) {
    elem.style.height = `${h ?? 200 }px`;
    elem.style.width = `${w ?? 200 }px`;
    //elem.innerHTML = h ?? 200 * w ?? 200; // 100 (вначале выполнится умножение 200 * w)
    elem.innerHTML = (h ?? 200) * (w ?? 200);
}

changeParams(box, newHeight, newWidth);
//changeParams(box);


