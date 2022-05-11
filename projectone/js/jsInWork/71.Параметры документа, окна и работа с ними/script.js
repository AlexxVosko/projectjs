'use strict';

const box = document.querySelector('.box'),
      btn = document.querySelector('button');

// -- Элемент --
      
// получить ширину и высоту модального окна Элемента
const width = box.clientWidth;
const height = box.clientHeight;

console.dir(width,height); // 405 (15 пикселей занимает скролл) 355
// если установлен стиль box-sizing: border-box; 
// то оно меняет поведение блочной структуры (будет 385) (отнимает скролл)

// блок с учетом полосы прокрутки
const widthOff = box.offsetWidth; //400
const heightOff = box.offsetHeight; //350


// ширина ивыоста в элементе (невидимая)
const widthScroll = box.scrollWidth; //385
const heightScroll  = box.scrollHeight; // 1352

btn.addEventListener('click',()=>{
    //модификация .box
    box.style.height = box.scrollHeight + 'px';

// высота скрытого контента (прогресс прогрутки) scrollTop и scrollLeft
    console.log(box.scrollTop);
});


// Координаты 
// расчитываются от левого верхнего угла экрана
// метод getBoundingClientRect()
console.log(box.getBoundingClientRect()); // DOMRect (left,right,bottom,top)
console.log(box.getBoundingClientRect().top);


// Получить стили которые были применены к элементу при помощи css
// Computed стили - стили которые уже применены к элементу
// Вкладка разработчика  Elements -> Computed
// менять не получиться только для чтения

const style = window.getComputedStyle(box);
console.log(style); // CSSStyleDeclaration
console.log(style.display);
//1) Можем получить стили псевдоэлементов (вторым аргументом)
const psstyle = window.getComputedStyle(box,'before');
console.log(psstyle); 
//2) Не путать Computed стили и Inline  стили


// У document не уществует св-ва scrollTop, только у document.documentElement
console.log(document.documentElement.clientWidth); 
console.log(document.documentElement.scrollTop); 


// Скролл страницы относительно положения scrollBy() scrollTo()
// аргументы координаты x и y
window.scrollBy(0,400); // вниз
// Относительно всей страницы scrollTo()
window.scrollTo(0,400); //вверх