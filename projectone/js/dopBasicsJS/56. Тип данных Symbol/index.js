// Symbol() - Символы нужны для создания уникальных идентификаторов, чем они и являются
// Символы уникальны и неизменяемы
// Кроме строк, свойствами объектов могут быть и символы
// Позволяют создавать скрытые при обычном доступе свойства, которые не показываются при переборе объекта

'use strict';

const obj = {
    'name':'Test',
    [Symbol('id3')]:3
}

let id = Symbol('id');
let id2 = Symbol('id');
obj[id]=1;

console.log(obj[id]); //1
console.log(obj['id']); //undefined
console.log(obj); // { name: 'Test', [Symbol(id)]: 1 }

console.log(id==id2); //false (символы имеют одинаковые описание но не равны друг другу)

// Символы можно создавать без описания
let sym = Symbol();



for (let value in obj) console.log(value); // одно свойство 'name', символа нет (приватное, скрытное свойство)

let idNew = Symbol('id');
const obj2 = {
    'name':'Test',
    [idNew]:3,
    getId: function(){
        return this[id]
    }
}
console.log(obj2.getId()); //3

//достучаться до Symbol если он не объявлен
//Встроенный метод getOwnPropertySymbols
console.log(Object.getOwnPropertySymbols(obj2)); // получим массив символов
console.log(obj2[Object.getOwnPropertySymbols(obj2)][0]); // получим 3


//Для чего нужно? //
// Уникальность и скрытность такого свойства позволяет нам быть уверенным в том что 
// оно не будет случайно перезаписано 

const myAwesomeDB = {
    movies:[],
    actors:[],
    id:123,
    [Symbol('id')]:123
}

// Сторонний код библиотеки

myAwesomeDB.id = '333332';
console.log(myAwesomeDB['id']); // перезапишиться


// Глобальный реестр символов
// Одно описание символа строго соответствовала одному конкретному символу,  лишив их уникальности
const myAwesomeDB2 = {
    movies:[],
    actors:[],
    id:123,
    [Symbol.for('id')]:123
}
console.log(myAwesomeDB[Symbol.for('id')]); //123
