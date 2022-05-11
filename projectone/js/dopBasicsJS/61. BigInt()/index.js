'use strict';

// тип данных BigInt
// для работы с большим объемом данных

// Максимальное значение в типе данных Number
console.log(Number.MAX_SAFE_INTEGER); //9007199254740991 (2 в 53 степени - 1)

// -- способы создание типа данных BigInt

//1) к числу добавить в конце n
const bigint = 123456783499349393463657627835823504n;

//2) BigInt()
const bigint2 = BigInt(123456783499349393463657627835823504);

console.log(typeof(bigint)); // bigint

// BigInt нельзя использовать с методами со встроенным объектом Math
console.log(Math.round(5n)); // Ошибка

// Нельзя смешивать в операциях BigInt и обычные числа
console.log(5n+2); // Ошибка

console.log(1n+2n); //3n

//Операции деления возвращают округленный вариант без дробной части
console.log(5n/2n); //2n 


console.log(5n>2); // true
console.log(2n == 2); // true
console.log(2n === 2); // false

//Конвертация типа дааных
let bigNum = 1n,
    number = 2;

console.log(bigint + BigInt(number)); //3n
console.log(Number(bigint)+number); //3

console.log(+bigint+number); // Ошибка (унарный плюс не взаимодействует с ТД BigInt)

// BigInt полезная вещь, но использовать только по нужде