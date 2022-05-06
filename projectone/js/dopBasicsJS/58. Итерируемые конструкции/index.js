
// Итерируемые (перебираемые) объекты
// Относятся массивы, строки, типизированные массивы, set(), map(), DOM-коллекции

'use strict';

const user ={
    name: 'Alex',
    surname:'Smith',
    birthday:'05/05/1993',
    showMyPublicData: function(){
        console.log(`${this.name} ${this.surname}`);
    }
}
// for in выводит все данные + методы
// при переборе массивов и строк через for in может случиться так что
// перебор может идти не по порядку (использовать for of)

// for in - получает сам ключ user[key]
// for of - получает значение key

for (let key in user){
    console.log(user[key]);
}

const arr = ['b', 'a', 'c'];
Array.prototype.someMethod = function (){};
for (let key in arr){
    console.log(arr[key]); //someMethod выводится
}
for (let key of arr){
    console.log(key); //someMethod не выводится
}

const str = 'string';
for (let key in str){
    console.log(str[key]);
}
for (let key of str){
    console.log(key);
}

//  for of - не применим к объекту, получим ошибку - not iterable
// Итерируемые объект - тот который можно использовать в for of
console.dir(arr);
// Prototype -> Symbol(Symbol.iterator) - значит массив будет перебираемым
// Преимущества 
//1) Строгий порядок 
//2) Исключение лишних свойств


// Итератор - метод который возвращает объект с методом next
const salaries = {
    john:500,
    ivan:100,
    alex:7000,
    sayHello: function(){
        console.log('Hi');
    }
}
// настройка перебора объекта методом for of
// когда будет происходить перебор метод Symbol.iterator вызывается один раз 
//- этот метод должен вернуть итератор(объект с методом next)
salaries[Symbol.iterator]=function(){
    return {
        current:this.john,
        last: this.alex,
        next(){
            if(this.current < this.last){
                this.current +=500;
                return {done:false,value: this.current}
            }else{
                return {done:true}
            }
        }
    }
}

for (let res of salaries){
    console.log(res);
}

//Ручной вызов 
const iterator = salaries[Symbol.iterator]();
console.log(iterator.next());