
// У каждого свойства объекта есть специальные аттрибуты, которые определяют как работает это свойство
// Их называют флагами

// -- Флаги --
// В обычной работе скрыты, для всех создаваемых вручную свойств стоят в позиции true

// writeble 
// если true - то свойство в объекте можно изменить
// если false - только для чтения

// enumerable
// если true - то свойство будет перечисляться в циклах
// если false - то свойство будет игнорироваться в циклах

// configurable
// если true - то свойство можно будет удалить а аттрибут изменить
// если false - то свойство нельзя удалить


'use strict';

const birthday = Symbol('birthday');

const user ={
    name: 'Alex',
    surname:'Smith',
    [birthday]:'05/05/1993',
    showMyPublicData: function(){
        console.log(`${this.name} ${this.surname}`);
    }
}

// метод получения флагов 
// 1-аргумент - объект
// 2-аргумент - свойство
 console.log(Object.getOwnPropertyDescriptor(user,'name'));

// метод изменения флагов 
// 1-аргумент - объект
// 2-аргумент - свойство
// 3-аргумент - объект флагов которые хотим изменить
Object.defineProperty(user,'name',{writable:false});
//user.name = 'dfdfg'; // Ошибка

// defineProperty можно создавать свойство
// если не указать флаги в 3-й аргумент- по умолчанию станут в false

Object.defineProperty(user,'gender',{value:'male'});

Object.defineProperty(user,'birthday',{value: prompt('Date?'),enumerable:true,configurable:true});


Object.defineProperty(user,'showMyPublicData', {enumerable:false});
for(let key in user) console.log(key)

console.log(Object.getOwnPropertyDescriptor(Math,'PI'));

Object.defineProperties(user,{
    name:{writable:false},
    surname:{writable:false}
});

console.log(Object.getOwnPropertyDescriptor(user,'name'));

// Методы объекта

//Object.preventExtensions() - предотвращает расширение объекта
//Object.seal() - запечатывает объект но данные можно изменять
//Object.freeze() - предотвращает  полное измениние/удаление объекта

// Проверка вышеуказанных методов
//Object.isExtensible()
//Object.isSealed()
//Object.isFrozen()


// Сравнивание содержимого объектов
// Object.is()

// Методы формирующие массивы из объектов
//Object.keys() -  массив ключей
//Object.values() - массив значений
//Object.entries() - массив перечислямых свойств и значений (по парам) -  двумерный массив
