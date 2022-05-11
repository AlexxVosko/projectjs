'use strict';
//WeakMap WeakSet - структуры данных, служат для оптимизации кода
// являются дополнительным хранилищем данных для объектов
// управляемых в каких то других мест в коде

let user = {
    name:'Ivan'
};

//но
const arr = [user];

let map = new Map();
map.set(user,'data');

//WeakMap
//1) Ключи только объекты
//2) Если нет ссылки на объект и он существует только внутри WeakMap то этот объект будет удален 
let wMap = new WeakMap();
wMap.set(user,'Date');

user = null;
console.log(user); // объект удален из памяти,  так как на него нет ссылки
console.log(arr[0]); // хранится в памяти пока существует массив
console.log(map.keys()); // пока существует карта - существует объект внутри памяти

// проверка на существование
console.log(wMap.has(user)); // false
// внутри WeakMap объекта больше не будет как и внутри памяти
console.log(wMap); // No properties
// в текущий момент времени интерпритатор не может определить что находится внутри данной структуры данных и в каком количестве
// основных методов в WeakMap не существует (keys(), values())
// доступны set, get, delete, has


// Чат
let cache = new WeakMap();

function cacheUser(user){
    if(!cache.has(user)){
        cache.set(user,Date.now());
    }
    return cache.get(user);
}
let lena = {name:'Elena'};
let alex = {name:'Alex'};

cacheUser(lena);
cacheUser(alex);

lena = null;
console.log(cache.has(lena)); // false
console.log(cache.has(alex)); // true

//WeakSet
//1) добвлять можно только объекты
//2) объект существуетв множестве пока он где то доступен еще
//3) поддерживает методы add, delete, has

let messages = [
    {text:'Hello',name:'John'},
    {text:'World',name:'Alex'},
    {text:'....',name:'Tom'}
];
let readMessages = new WeakSet(); // прочитанные сообщения
readMessages.add(messages[0]);
//readMessages.add(messages[1]);

messages.shift();
console.log(readMessages.has(messages[0]));

// сформировался WeakSet, в него добавлено первое сообщение messages[0] (два раза добавить не выйдет),
// так как храняться уникальные значения
// удалили первый элемент массива (на этот объект не существует ссылок)
// WeakSet дает командк сборщику мусора удалитб объект (так как нигде не используется)
