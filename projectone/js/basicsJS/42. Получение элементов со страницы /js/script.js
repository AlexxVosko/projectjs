'use strict';

// DOM -  дерево узлов, связанные между собой отношением родительский-> дочерний
// Объектная модель документа
// Глобальный объект document.

// Методы получения элементов со страницы
// Методы которые работают на объектной модели документа (DOM)- работает только внутри браузера
// 2 категории - 1 появилась давно, 1 - появилась недавно

// -- Старые методы
// ID
const box = document.getElementById("box");
console.log(box);

// Tags
// При получении тега, из за того что их может быть несколько на странице мы получим псевдомассив (массив без методов)
const btns = document.getElementsByTagName("button");
console.log(btns); // HTMLCollection (5)

const btn2 = document.getElementsByTagName("button")[1]; //кнопка №2
//или
console.log(btns[1]); 

// !! Если тег button будет 1 на странице, мы все равно получим HTMLCollection(1) но с одним элементом
console.log(btns[0]); 

// Class
const circles = document.getElementsByClassName("circle");
console.log(circles);  // HTMLCollection (3)

// -- Новые методы
// могут использовать любые селекторы
// появляется метод forEach
const hearts = document.querySelectorAll('.wrapper .heart');
console.log(hearts);  // NodeList (3)
hearts.forEach(item=>{
    console.log(item);
});

const oneHeart = document.querySelector('.wrapper .heart');
console.log(oneHeart); // получим 1-ый элемент