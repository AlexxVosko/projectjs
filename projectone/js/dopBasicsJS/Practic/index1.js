/* Задача на вычисление количества страниц */

/*
<p>В каждой книге есть <strong>n</strong> страниц с номерами страниц от <strong>1 до n</strong>. Написать функцию amountOfPages, аргумент которой summary составляется путем сложения <strong>количества цифр</strong> всех номеров страниц. Эта функция возвращает число - количество страниц n в книге. Чтобы было понятно что такое количество цифр, давайте рассмотрим примеры.</p>

<p>Если на входе функции summary = 25, то на результат должен быть 17. Всего в числах от 1 до 17 содержится 25 цифр: <strong>1234567891011121314151617</strong>.</p>
<p>Функция на вход как раз принимает это <strong>общее количество</strong> <strong>цифр</strong>, а возвращает конечное число, то есть последнюю страницу книги. </p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; <code>amountOfPages(5)</code> =&gt; 5</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; <code>amountOfPages(25)</code> =&gt; 17</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; <code>amountOfPages(1095)</code> =&gt; 401&nbsp; &nbsp; </p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; <code>amountOfPages(185)</code> =&gt; 97</p>

*/

'use strict';

function amountOfPages(summary){
    let result='';
    for(let i=1;i<=summary;i++){
        result+=i;
        if(result.length==summary){
            return i;
        }
    }
}
console.log(amountOfPages(9));
console.log(amountOfPages(25));
console.log(amountOfPages(1095));