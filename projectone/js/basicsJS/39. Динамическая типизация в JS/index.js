// Динамическая типизация - возможность одного типа данных превращаться в другой
// Все что получается от пользователя ВСЕГДА будет типом данных СТРОКА

// строка -> число
// число -> строка 
// объект -> boolean

// Статическая типизация  (число всегда остается числом)


// -- To String

// 1) Редко используются String()
console.log(typeof(String(null))); // string


// 2) Конкатенация
// при сложении со строкой получается строка
console.log(typeof(5+'')); // string
const num = 5;
console.log("https://vk.com/catalog/" + num);
const fontsize = 26 + 'px';

// -- To Number

//1) Редко используются  Number()
console.log(typeof(Number('4'))); // number

//2) Унарный плюс (+)
console.log(typeof(+'5')); // number
let answ = +prompt("Hello",""); // number

// 3) parseInt()
console.log(typeof(parseInt("15px", 10))); // number


// -- To boolean
0, '', null, undefined, NaN // false
// все остальное true (пустые строки, пустые объекты и т/д)

// 1) Нативный способ
let switcher = null;
switcher = 1; // изменяется в процессе кода 
if(switcher){
    console.log('Working...');
}

// 2) Редко используются  Boolean()
console.log(typeof(Boolean('4'))); //boolean

// 3) Два знака отрицания (!!)
console.log(typeof(!!'444')); //boolean