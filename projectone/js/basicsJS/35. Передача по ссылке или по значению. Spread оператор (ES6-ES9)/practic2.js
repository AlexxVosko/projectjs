
/* Задачи на работу с  массивами (ч1) */
/*
<p>1) Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.</p>
<p><code>showFamily(family)</code>&nbsp; =&gt; <em>'Семья состоит из: Peter Ann Alex Linda '</em></p>
<p>Имена подставляются автоматически из массива. Если массив пустой, то выводится сообщение <em>'Семья пуста'</em></p>

<p>2) напишите функцию standardizeStrings, которая будет принимать в себя массив строк и будет <strong>выводить в консоль</strong> эти строки в <strong>нижнем</strong> регистре. </p>
<p><code>standardizeStrings(favoriteCities)</code>&nbsp; выведет в консоль</p>
<p>Это частая задача в реальности, так как от пользователя нам могут прийти ответы в самых разных форматах. В том числе и с разными буквами :) Поэтому нам нужно привести строки в один формат для правильной работы.</p>
*/

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    if (arr.length<1){
        return `Семья пуста`;
    }else{
        return `Семья состоит из: ${arr.join(' ')} `;
    }
}
console.log(showFamily(family));



const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    for(let value of arr){
        console.log(`${value}`.toLowerCase());
    }
}

standardizeStrings(favoriteCities);
