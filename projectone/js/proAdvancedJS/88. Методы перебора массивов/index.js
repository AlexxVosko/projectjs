'use strict';

// метод forEach не создает новый массив, переборка существущего
// map, filter, reduce - возвращают новый массив 

// 1) -- Метод  filter -- //

// фильтрует элементы по условию callback функции
// внутрь передается  callback функция
// name - это итемы в массиве

const names = ['Alex','Ann','Anton','Voldemart'];
const shortNames = names.filter(function(name){
    //Количество меньше 5 символов
    return name.length < 5;
});

console.log(shortNames); // [ 'Alex', 'Ann' ]


// 2) -- Метод  map -- //
// позводяет взять исходный массив и изменить каждый элемент внутри себя (трансформирующий метод)
// возвращает новый массив с измененными данными

let answers = ['IvAn','AnnA','Hello'];
const result = answers.map(item=>item.toLowerCase()); // краткая запись

//можно перезаписать исходный массив
//answers =  answers.map(item=>item.toLowerCase());

console.log( result ); // [ 'ivan', 'anna', 'hello' ]


// 3) -- Методы every/some-- // 
// возвращают булиновые значения
// some - перебирает исходный массив по какому то условию, если хотя бы один элемент подходит - вовращает true, если нет то false
// every - перебирает исходный массив по какому то условию, если все элменты подходят  - вовращает true, если нет то false

const some = [4,'qwq','sdvbiaefvbgb'];
// проверить есть ли в массиве число
console.log(some.some(item=>typeof(item)==='number')); //true
console.log(some.every(item=>typeof(item)==='number')); //false

// 4) -- Метод reduce-- // 
// нужен для того чтобы схлопывать/собирать массив в одно единое целое
// 1 аргумент -  callback функция
// 2 аргумент - начальное значение (необязательно)


const arr = [4,5,1,3,2,6];
//получить сумму элементов
const res = arr.reduce((sum,current)=>sum+current,3);
console.log( res); // 21

// можем передать начальное значение в reduce вторым аргументом
const res2 = arr.reduce((sum,current)=>sum+current,3);
console.log( res2); // 24

const arrStr = ['apple','pear','plum'];
// собрать в одну стрку через запятую

// 1 аргумент - прошедшие элементы перебора
// 2 аргумент - текущий элмент перебора
const resStr1 = arrStr.reduce((sum,current)=>sum+', '+current); // вар1
const resStr2 = arrStr.reduce((sum,current)=>`${sum}, ${current}`); // вар2
console.log(resStr2); // apple, pear, plum




// 5) -- Метод entries-- // 
// берет объект и превращает в матрицу (массив массивов)
// Вытащить имена людей
const obj = {
    ivan : 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
}

// Прием чейнинг - операции записываются в цепочку
const newArr = Object.entries(obj)
.filter(item=>item[1]==='persone') //[ [ 'ivan', 'persone' ], [ 'ann', 'persone' ] ]
.map(item=>item[0]); // [ 'ivan', 'ann' ]
console.log(newArr);


