'use strict';
// Date - спецефический объект содержащий в себе методы и свойства

const now = new Date(); // текущая дата и время
console.log(now); // 2022-05-09T16:18:09.440Z
console.log(now.setHours(40));

//1)
const now2 = new Date('2022-05-09'); // передача из input type=date
console.log(now2); // 2022-05-09T00:00:00.000Z


//2) 
const now3 = new Date(2022,5,9,20); // задание числами (месяцы считаются с 0 - январь)
console.log(now3); // 2022-06-09T17:00:00.000Z

//3) миллисекунды
const now4= new Date(0); // таймстемп
console.log(now4); //1970-01-01T00:00:00.000Z
const now5= new Date(-99); // отрицательное значение мс (до 1970)
console.log(now5); //1969-12-31T23:59:59.901Z

// -- Методы геттеры

//1) получение компонентов даты (возвращает данные с местным часовым поясом)
console.log(now.getFullYear()); // 2022
console.log(now.getMonth()); // 4 (Май)
console.log(now.getDate()); // 9
console.log(now.getHours()); // 19
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());

console.log(now.getDay()); // день недели (0 - Воскресенье)

// часовой пояс UTC
console.log(now.getUTCHours()); //16

// разница между часовыми поясом и UTC (в минутах)
console.log(now.getTimezoneOffset()); //-180

// getTime (кол-во мс с 1970)
console.log(now.getTime()); // 1652114595397

//2) -- Методы сеттеры
console.log(now.setHours(18,40)); // 18:40

// Автоисправления
console.log(now.setHours(40)); // сам себя исправит

// Метод parse
const nowDate= new Date('2022-05-07');
new Date.parse('2022-05-07');
console.log(nowDate);



// Измерение промежутков времени
let start = new Date();
for(let i=0;i<100000; i++){
    let some = i ** 3 ; // возведение в степень
}
let end = new Date();

console.log(`Цикл отработал за ${end-start} мс`); // Цикл отработал за 32 мс