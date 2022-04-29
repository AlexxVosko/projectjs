/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

//1) 
const promoAdv = document.querySelectorAll(".promo__adv img");
promoAdvImg.forEach((item,i)=>{
    item.remove();
});

//2)
const promoBg = document.querySelector(".promo__bg");
const promoGenre = promoBg.querySelector(".promo__genre");
promoGenre.textContent= 'Драма'.toUpperCase();

//3)
promoBg.style.backgroundImage = 'url("img/bg.jpg")';

//4) - 5) 
movieDB.movies.sort();

const ul = document.querySelectorAll('ul.promo__interactive-list');
ul[0].innerHTML ="";
movieDB.movies.forEach((item,i)=>{
    ul[0].innerHTML += `<li class="promo__interactive-item">${i+1}. ${item} <div class="delete"></div></li>`;
});

