// JSON - JavaScript Object Notation 
// Тектсовый формат обмена (хранения) данных 

// Набор пар  Ключ:Значение (как объект)
// Все строки в двойных кавычках ""

'use strict';

const persone = {
    name:'Alex',
    tel:'+375291111111',
    parents:{
        mom:'Janna',
        dad:'Alex'
    }
}

// JSON.stringify - отправка на сервер - из объекта в JSON
console.log(JSON.stringify(persone)); //{"name":"Alex","tel":"+375291111111"}

// JSON.parse - c сервера приходит JSON, обработка в объект
console.log(JSON.parse(JSON.stringify(persone))); // { name: 'Alex', tel: '+375291111111' }


// Глубокие копии объектов
// clone не зависит от первоначального объекта
const clone = JSON.parse(JSON.stringify(persone));
clone.parents.mom = 'Ann';

// изменение применится только в clone
console.log(persone); 
console.log(clone); 