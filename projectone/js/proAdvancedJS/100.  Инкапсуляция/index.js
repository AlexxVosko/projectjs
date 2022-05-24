'use strict';

// Инкапсуляция - один из принципов ООП
// Отделение и сокрытие от внешнего мира внутренних данных (переменных, функций  и т/д)

// В ООП это значит что объект хранит свое состояние в приватном порядке
// и только методы объекта имеют доступы для его изменений

// Преимущества
//1) пользователь не может ничего поменять
//2) без последствий улучшать и дорабатывать программу
//3) удобно когда внутрянка скрыта а мы используем лишь ее результат

// Создание инкапсуляции
//1) пример с функцией-конструктором

function User(name,age){
    // без инкапсуляции
    this.name = name;
    //this.age = age;

    //инкапсуляция
    let userAge = age;

    // методы для работы с userAge снаружи
    this.getAge = function (){
        return userAge;
    };
    this.setAge = function (age){
        if(typeof(age) === 'number' && age>0 && age < 110){
            userAge = age;
        }else{
            console.log('Недопустимое значение');
        }
    };

    this.say = function(){
        // без инкапсуляции
        //console.log(`Имя пользователя ${this.name}, возраст - ${this.age}`);
        //инкапсуляция
        console.log(`Имя пользователя ${this.name}, возраст - ${userAge}`);
    }
}

 // без инкапсуляции
const  ivan = new User ('Ivan', '25');
console.log(ivan.name); // Ivan
console.log(ivan.age); // 25
// ! не только получить но и изменить св-во
ivan.age = 29;
ivan.name = "Alex";
ivan.say(); // Имя пользователя Alex, возраст - 29

//инкапсуляция
const  ivan2 = new User ('Ivan', '25');
console.log(ivan2.name); // Ivan
console.log(ivan2.userAge); // undefined

// !  св-во уже не получится изменить, только изнутри
ivan2.userAge = 29;
ivan2.name = "Alex";
ivan2.say(); // Имя пользователя Alex, возраст - 25


console.log(ivan2.getAge()); // 25
ivan2.setAge (29); 
ivan2.setAge (300); // Недопустимое значение
console.log(ivan2.getAge());  // 29

ivan2.say(); // Имя пользователя Alex, возраст - 29


//2) пример с классом
// пока применить инкапсуляцию нельзя
// но есть такое понятие - поля классов (пока не вошел в стандарт)
// позволяет удобно записывать как свойства так и методы классов


class UserClass{
    constructor (name,age){
        this.name = name;
        // скрытие в классе
        this._age = age;
    }

    say = ()=>{
        console.log(`Имя пользователя ${this.name} ${this.#surname}, возраст - ${this._age}`);
    }

    get age(){
        return  this._age;
    }
    set age (age){
        if(typeof(age) === 'number' && age>0 && age < 110){
            this._age = age;
        }else{
            console.log('Недопустимое значение');
        }
    }

    // свойство записывается в объект только без конструктора (работает только в chrome)
     #surname = 'Vosko';

     // получить приватное свойство
     get surnamGet (){
        return this.#surname;
     }
    // изменить приватное свойство
     set surnameSet (name){
        return this.#surname = name;
     }

}
const  ivan3 = new UserClass ('Ivan', '25');
ivan3._age = 99;
ivan3.say();

console.log(ivan3.surname); // undefined
console.log(ivan3.surnamGet); // Vosko
ivan3.surnameSet='Voskobobich';
console.log(ivan3.surnamGet); // Voskobobich