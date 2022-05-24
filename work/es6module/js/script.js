//Экспорт ES6
//1)
export let one = 1;

//2)
let two = 2;
export {two};

//3) 
export function sayHi (){
    console.log('Hello');
}


export default function sayHi2 (){
    console.log('Hello Default');
}
