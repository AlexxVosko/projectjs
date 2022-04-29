'use strict';

const   box = document.getElementById("box"),
        btns = document.getElementsByTagName("button"),
        circles = document.getElementsByClassName("circle"),
        wrapper = document.querySelector('.wrapper'),
        hearts = wrapper.querySelectorAll('.heart'),
        oneHeart = wrapper.querySelector('.heart');

// Получаем элемент в качестве объекта
console.dir(box);

// !! Css inline
box.style.backgroundColor = 'blue';
box.style.width = '500px';
let num = 500;
// Передача стилей в качестве текста
box.style.cssText = `background-color:blue; width:${num}px;`;

btns[1].style.borderRadius = '100%';

circles[0].style.backgroundColor = 'red';

// -- Назначить нескольким элементам inline стилей
//1)
for (let i=0;i<hearts.length;i++){
    hearts[i].style.backgroundColor='blue';
}

//2) 
hearts.forEach(item=>{
    item.style.backgroundColor='blue';
});

// -- Основные методы для работы с элементами на странице

const div = document.createElement('div');
const text = document.createTextNode('Тут был я');

// в проектах чаще всего добавляются классы а не стили
div.classList.add('black');

// используемые методы проверить на сайте caniuse.com для каких браузеров поддерживается

//  --- Современные методы ---

//добавление в конец body
document.body.append(div);
//добавление в конец .wrapper
document.querySelector('.wrapper').append(div);
//wrapper.append(div);

//добавление в начало .wrapper
wrapper.prepend(div);

// перед каким элементом поставить
hearts[0].before(div);

// после какого элемента поставить
hearts[0].after(div);

//удаление элемента
circles[1].remove();

//  замена одного элемента на другой
hearts[0].replaceWith(circles[0]);


//  --- Устаревшие методы ---
wrapper.appendChild(div);

wrapper.insertBefore(div,hearts[1]);

wrapper.removeChild(hearts[1]);

wrapper.replaceChild(circles[0],hearts[0]);

// Добавление текста или html
div.innerHTML = '<h1>Hello World</h1>';
div.textContent = 'Hello';

// Вствка html перед/после тегов
div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>'); // перед элементом
div.insertAdjacentHTML('afterbegin', '<h2>Hello</h2>');  // в начало
div.insertAdjacentHTML('beforeeend', '<h2>Hello</h2>'); // в конец
div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');  // после элемента
