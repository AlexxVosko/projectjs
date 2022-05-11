
/*Задача на  работу со строками*/

/*
<p><a href="https://ru.wikipedia.org/wiki/%D0%9F%D0%B0%D0%BD%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B0">Панграмма</a> — это предложение, в котором каждая буква алфавита встречается хотя бы по одному разу без повторений. Например, предложение <em>«The quick brown fox jumps over the lazy dog»</em> является панграммой, поскольку в нем хотя бы один раз используются буквы от A до Z (регистр значения не имеет).</p>
<p>Напишите функцию isPangram, которая принимает в себя строку и возвращает логическое значение. Если строка является панграммой - вернется true, если нет - false.</p>

<p><code>isPangram(<em>«The quick brown fox jumps over the lazy dog»</em>) </code>=&gt; true</p>
<p><code>isPangram(<em>«Hello world»</em>)</code> =&gt; false</p>
<p>P.S. Эта задача имеет много вариантов решения, часть из которых использует возможности, которые мы будем проходить дальше по курсу. Но и без них можно это сделать. </p>

*/
'use strict';

function isPangram(string) {
    let str ='';
    str = string.toLowerCase();
    str= str.split(' ').join('');
    str = new Set(str.toLowerCase());
    if(str.size == 26){
        return true;
    }else{
        return false;
    }
}

console.log(isPangram('The quick brown fox jumps over the lazy dog'));
console.log(isPangram('Hello world'));