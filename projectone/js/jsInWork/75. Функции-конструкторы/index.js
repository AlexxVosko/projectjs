// Функции - это объект, в который можно записать методы и свойства

'use strict';

// Устаревшее написание
const num = new Number(3);
console.log(num); // [Number: 3]

const func = new Function(3);
console.log(func); // [Function: anonymous]

// Функция конструктор (конструирование объектов)  - стандарт ES5
// в стандарте ES6 - это классы (появились в качестве синтаксического сахара)

// в таких функциях не нужен return
// один раз прописывается а затем настраивается по шаблону


//Для каждого отдельного пользователя указываем имя и свой номер
function User(name,id){
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function(){
        console.log(`Hello ${this.name}`);
    }
}


// Добавление данных через prototype
User.prototype.exit = function (){
    console.log(`Пользователь ${this.name} вышел`);
}
// идет не наследование одного от другого а именно добавление


const alex = new User('Alex', 29);
const ivan = new User('Ivan', 28);

console.log(alex); // User { name: 'Alex', id: 29, human: true }
console.log(ivan); // User { name: 'Ivan', id: 28, human: true }

alex.hello(); // Hello Alex
ivan.hello(); // Hello Ivan

ivan.exit(); // Пользователь Ivan вышел


