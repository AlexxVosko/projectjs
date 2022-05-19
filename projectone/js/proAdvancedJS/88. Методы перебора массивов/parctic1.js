'use strict';

/*
Задания на работу с методами массивов (ч1)

<p>1) У вас есть список фильмов с рейтингом в виде массива объектов. Напишите функцию showGoodFilms, которая будет принимать этот массив, а <strong>возвращать</strong> будет массив объектов только с теми фильмами, у которых рейтинг больше или равен 8.</p>
<p>P.S. Это довольно типичная задача в программировании. Вспомните, на самых разных сайтах можно так фильтровать любые товары/фильмы/сериалы...</p>


<p>2) Напишите функцию showListOfFilms, которая будет принимать этот же массив, а <strong>возвращать</strong> будет строку, которая содержит названия фильмов через запятую.</p>
<p><code>showListOfFilms(films) =&gt;</code> "Titanic, Die hard 5, Matrix, Some bad film"</p>


<p>3) Напишите функцию setFilmsIds, которая будет принимать этот же массив, а возвращать будет такой же массив с фильмами, но у каждого фильма будет новое поле id. Значение этого поля установите по нумерации фильма. </p>
<p><code>setFilmsIds(films)</code>&nbsp; =&gt;<em> [
&nbsp; { name: 'Titanic', rating: 9, id: 0 },
&nbsp; { name: 'Die hard 5', rating: 5, id: 1 },
&nbsp; { name: 'Matrix', rating: 8, id: 2 },
&nbsp; { name: 'Some bad film', rating: 4, id: 3 }
]</em></p>


<p>4) Запишите результат предыдущей функции в переменную tranformedArray. Напишите функцию checkFilms, которая будет проверять, что в <strong>каждом</strong> из фильмов есть поле id. Если это так - функция возвращает true. Очевидно, что сейчас условие должно выполняться, если мы передаем <code>checkFilms(tranformedArray);</code> :)</p>
<p>P.S. Вот тут вы столкнетесь с интересным моментом, который я хочу,&nbsp;чтобы вы запомнили. Внимательно проследите за тем, что происходит внутри коллбэка и что будет проверяться. Дополнительно расписал этот момент в комментариях в ответах.</p>

*/


const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

//1)
function showGoodFilms(arr) {
    return arr.filter(item=>item.rating >=8)
}
console.log(showGoodFilms(films));


//2)
function showListOfFilms(arr) {
    return arr.reduce((sum,current)=>`${(typeof(sum)==='object') ? sum.name : sum}, ${current.name}`);
}
console.log(showListOfFilms(films));

//3)
function setFilmsIds(arr) {
    return arr.map((item,i)=> {
        item.id=i;
        return item;
    });
}
console.log(setFilmsIds(films));

const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
    // учитывать 0, так как это false
    return arr.every(item=> item.id || item.id === 0);
 }
 
 console.log(checkFilms(tranformedArray));