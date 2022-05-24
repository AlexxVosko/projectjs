//Экспорт ES6

// Именнованный экспорт
//1)
export let one = 1;

//2)
let two = 2;
export {two};

//3) 
export function sayHi (){
    console.log('Hello');
}


// Кроме такого синтаксиса в модулях есть экспорт по умолчанию
// !!! Он может быть только один

//Экспорт по умолчанию
export default function sayHi2 (){
    console.log('Hello');
}