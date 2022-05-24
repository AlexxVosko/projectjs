// Модульная структура

// Чтобы экспортировать у каждой сущности должно быть свое имя
// Система нормально отработает если есть несколько экспортов в файле
// { } - фигурные скобки обязательно 
// Необходимо все равно собирать каким то сборщиком

// Импорт
//import {one, two} from './script';
//console.log(`${one} and ${two}`);

import * as data from './script';
console.log(`${data.one} and ${data.two}`);
data.sayHi();

import sayHi2 from './script';
sayHi2();