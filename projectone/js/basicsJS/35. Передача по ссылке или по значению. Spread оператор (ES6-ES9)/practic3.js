/* Задачи на работу с  массивами (ч2) */

/*

<p>3) <em>Задача с собеседований</em>. Напишите функцию reverse, которая принимает в себя строку и возвращает эту строку в обратном порядке.</p>
<div class="ud-component--base-components--code-block"><div><pre class="prettyprint linenums prettyprinted" role="presentation" style=""><ol class="linenums"><li class="L0"><span class="kwd">const</span><span class="pln"> someString </span><span class="pun">=</span><span class="pln"> </span><span class="str">'This is some strange string'</span><span class="pun">;</span></li></ol></pre></div></div>\
<p><code>reverse(someString)</code> =&gt; <em>'gnirts egnarts emos si sihT'</em></p>
<p>Функцию можно применить к любой строке. Если в функцию приходит не строка - вернуть сообщение "Ошибка!"</p>
<p>Это очень интересная задача, которую можно решить несколькими способами. Её дают для того, чтобы оценить навыки и знания программиста, посмотреть как он думает. Как небольшая подсказка, есть <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse">метод</a>, который может вам помочь. И часть дополнительных вариантов решения мы тоже изучим в течении курса.</p>

<p>4) Представьте такую реальную ситуацию. У вас есть банкомат, который выдает деньги из двух разных банков в разных валютах. Один банк основной с базовыми валютами, второй дополнительный с прочими валютами:</p>
<div class="ud-component--base-components--code-block"><div><pre class="prettyprint linenums prettyprinted" role="presentation" style=""><ol class="linenums"><li class="L0"><span class="kwd">const</span><span class="pln"> baseCurrencies </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[</span><span class="str">'USD'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'EUR'</span><span class="pun">];</span></li><li class="L1"><span class="kwd">const</span><span class="pln"> additionalCurrencies </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[</span><span class="str">'UAH'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'RUB'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'CNY'</span><span class="pun">];</span></li></ol></pre></div></div>
<p>Вам нужно создать главную функцию банкомата availableCurr, которая принимает два аргумента: первый - это массив со всеми доступными валютами из <strong>двух банков сразу</strong> (сейчас представим, что они не могут повторяться), второй - необязательный аргумент, который указывает ту валюту, которая сейчас закончилась в банкомате. Если массив в первом аргументе пустой - то функция возвращает строку <em>'Нет доступных валют'. </em>Функция возвращает строку в нужном виде.</p>
<div class="ud-component--base-components--code-block"><div><pre class="prettyprint linenums prettyprinted" role="presentation" style=""><ol class="linenums"><li class="L0"><span class="pln">availableCurr</span><span class="pun">([</span><span class="str">'UAH'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'RUB'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'CNY'</span><span class="pun">],</span><span class="pln"> </span><span class="str">'CNY'</span><span class="pun">)</span></li></ol></pre></div></div>
<p>Вернет строку:</p>
<div class="ud-component--base-components--code-block"><div><pre class="prettyprint linenums prettyprinted" role="presentation" style=""><ol class="linenums"><li class="L0"><span class="pun">Доступные</span><span class="pln"> </span><span class="pun">валюты:</span></li><li class="L1"><span class="pln">UAH</span></li><li class="L2"><span class="pln">RUB</span></li></ol></pre></div></div>
<p>Заметьте: </p>
<p>- CNY (юань) исчез из списка валют, значит такая валюта закончилась</p>
<p>- После <strong>валюты:</strong> стоит перенос строки <strong>\n</strong>, и после каждой валюты тоже. Это важно для тестов</p>
<p>- Данные для первого аргумента должны приходить сразу из двух банков, причем сначала baseCurrencies, потом additionalCurrencies по порядку</p>
*/

const someString = 'This is some strange string';

function reverse(str) {
    if(typeof(str) ==='string'){
        let arr = str.split('');
        arr.reverse();
        let newStr=arr.join('');
        return newStr;
    }else{
        return `Ошибка!`;
    }
    
}

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str='';
    if(arr.length<1){
        str+=`Нет доступных валют`;
    }else{
        //str+=`Доступные валюты:\n${arr.join('\n')}`;
        str+=`Доступные валюты:\n`;
        for (let value of arr){
            if(value!==missingCurr){
                str+=`${value}\n`;
            }
        }
    }
return str;
}

console.log(availableCurr([...baseCurrencies,...additionalCurrencies],'CNY'));