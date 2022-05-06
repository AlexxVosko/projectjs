'use strict';

// Set - особый вид коллекции по типу массива, где каждая коллекция может повторяться только оди н раз
// Массив где каждое значение встречается т олько однажды

const arr = [1,1,2,2,4,5,6,5];
const set = new Set(arr);

console.log(set); // Set(5) { 1, 2, 4, 5, 6 }

const students = ["Alex","Oleg","Anna","Alex",];
const setStud = new Set(students);

// Методы
//1) add() - добавление
setStud.add('Ivan')
       .add('Oleg'); // не добавится ( повторка)

//2) delete()  - удаление
setStud.delete(value); 

//3) has()  - проверка на существование
setStud.has(value); 

//4) clear()  -  очистка
setStud.clear(); 

//5) size  -  размер, количество элементов
setStud.size; 

// -- Перебор -- 
//1) for of
for(let value of set) console.log(value);

//1) forEach
setStud.forEach((value,valueAgaing,set)=>{
    console.log(value);
    console.log(valueAgaing); //для совместимости, такие же знаяения как в value
});

// Вернут одно и тоже (значения)
console.log(setStud.values());
console.log(setStud.keys());
console.log(setStud.entries());

// Функция помощник, которая фильтрует массив
function unique(arr){
    //return new Set(arr);
    return Array.from(new Set(arr)); //создание и отфильтровка массива
}
console.log(unique(setStud));