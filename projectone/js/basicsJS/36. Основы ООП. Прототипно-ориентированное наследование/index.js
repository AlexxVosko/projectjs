//JS -  объектно-ориентированный язык, точнее прототипно-ориентированный как частный случай ООП
// Главная роль - объект

'use_strict';

 let str = "some";
 let strObj = new String(str);

 console.log(typeof(str)); // string
 console.log(typeof(strObj)); // object

 // Любой метод на строке, обарачивает строку в какой то объект, затем применяется метод к объекту, потом снова возвращает строку

 // -- Свойство _proto_ -- 
 // К примеру при создании массива, создается прототип экземпляра массивов
 // Array.prototype - содержит методы которые используются на каждом из экземпляров созданного массива
 // Любые конструкции прототипно наследуются от объектов

 console.dir([1,2,3]);

//Цепочка
//[1,2,3]  -> Свойство _proto_ -> Array.prototype () -> Свойство _proto_ -> Object.prototype () -> Свойство _proto_ -> null
//5 -> Свойство _proto_ -> Number.prototype () -> Свойство _proto_ -> Object.prototype () -> Свойство _proto_ -> null
//function() -> Свойство _proto_ -> Function.prototype () -> Свойство _proto_ -> Object.prototype () -> Свойство _proto_ -> null


const soldier = {
    health:400,
    armor:100,
    sayHello: function (){
        console.log('Hello'); 
    }
};
const johOld = {
    health:100
}
//Не смотря на то что объект имеет 1 сво-во, благодоря прототипам объект может получить доп св-ва

// Устаревший формат (Не используется)
johOld ._proto_=soldier;

const john = Object.create(soldier); // создание нового объекта, прототипно наследуемый от другого объекта

// Назначение прототипа (объект которому назначается прототип, объект прототип которого устанавливается )
Object.setPrototypeOf(john, soldier);



console.log(john);  // health:100
console.log(john.armor); // 100
john.sayHello();