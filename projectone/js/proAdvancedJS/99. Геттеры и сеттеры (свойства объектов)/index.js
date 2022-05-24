
'use strict';

//  Свойства данные - обычные свойства объекта
// obj.prop

//  Свойства акцессоры - позволяет как присваивать так и получать значения
// но при этом в коде выглядят как обычные свойства объекта

//Свойства акцессоры - делятся на геттеры и сеттеры
// Если геттер или сеттер не описан в объекте то получим ошибку

const person ={
    name:'Alex',
    age: 29,

    // cвойство age в качестве геттера
    get userAge() {
        return this.age;
    },
    // cвойство age в качестве сеттера
    set userAge(num) {
        this.age = num;
    }

};

console.log(person.userAge); // 29
console.log(person.userAge=30); // 30
console.log(person.userAge); // 30
