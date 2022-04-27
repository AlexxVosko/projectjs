/*
Продвинутые задачи на работу с объектами и массивами (ч2)
*/

/*
<p>У вас есть список учеников, которые хотят поиграть в игру:</p>
<ol class="linenums"><li class="L0"><span class="kwd">const</span><span class="pln"> students </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[</span><span class="str">'Peter'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'Andrew'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'Ann'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'Mark'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'Josh'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'Sandra'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'Cris'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'Bernard'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'Takesi'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'Sam'</span><span class="pun">];</span></li></ol>
<p>Но команд может быть только 3 по 3 человека. Напишите функцию <code>sortStudentsByGroups</code>, которая принимает в себя массив строк. </p>
<p>Внутри она сначала <strong>сортирует</strong> имена по алфавиту. Затем распределяет учеников по 3 человека в 3 группы по алфавитному порядку. Эти группы должны быть <strong>массивами</strong>. Как итог,&nbsp;функция возвращает новый массив с тремя командами и строкой как 4й элемент.</p>

<p><code>sortStudentsByGroups(students)</code>&nbsp; =&gt;</p>
<div class="ud-component--base-components--code-block"><div><pre class="prettyprint linenums prettyprinted" role="presentation" style=""><ol class="linenums"><li class="L0"><span class="pun">[</span></li><li class="L1"><span class="pln">  </span><span class="pun">[</span><span class="pln"> </span><span class="str">'Andrew'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'Ann'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'Bernard'</span><span class="pln"> </span><span class="pun">],</span></li><li class="L2"><span class="pln">  </span><span class="pun">[</span><span class="pln"> </span><span class="str">'Cris'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'Josh'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'Mark'</span><span class="pln"> </span><span class="pun">],</span></li><li class="L3"><span class="pln">  </span><span class="pun">[</span><span class="pln"> </span><span class="str">'Peter'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'Sam'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'Sandra'</span><span class="pln"> </span><span class="pun">],</span></li><li class="L4"><span class="pln">  </span><span class="str">'Оставшиеся студенты: Takesi'</span></li><li class="L5"><span class="pun">]</span></li></ol></pre></div></div>
<p>Если убрать одно студента из списка, то результат будет:</p>
<div class="ud-component--base-components--code-block"><div><pre class="prettyprint linenums prettyprinted" role="presentation" style=""><ol class="linenums"><li class="L0"><span class="pun">[</span></li><li class="L1"><span class="pln">  </span><span class="pun">[</span><span class="pln"> </span><span class="str">'Andrew'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'Ann'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'Bernard'</span><span class="pln"> </span><span class="pun">],</span></li><li class="L2"><span class="pln">  </span><span class="pun">[</span><span class="pln"> </span><span class="str">'Cris'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'Josh'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'Mark'</span><span class="pln"> </span><span class="pun">],</span></li><li class="L3"><span class="pln">  </span><span class="pun">[</span><span class="pln"> </span><span class="str">'Peter'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'Sam'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'Sandra'</span><span class="pln"> </span><span class="pun">],</span></li><li class="L4"><span class="pln">  </span><span class="str">'Оставшиеся студенты: -'</span></li><li class="L5"><span class="pun">]</span></li></ol></pre></div></div>
<p>А если добавить одного, то:</p>
<div class="ud-component--base-components--code-block"><div><pre class="prettyprint linenums prettyprinted" role="presentation" style=""><ol class="linenums"><li class="L0"><span class="pun">[</span></li><li class="L1"><span class="pln">  </span><span class="pun">[</span><span class="pln"> </span><span class="str">'Andrew'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'Ann'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'Bernard'</span><span class="pln"> </span><span class="pun">],</span></li><li class="L2"><span class="pln">  </span><span class="pun">[</span><span class="pln"> </span><span class="str">'Cris'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'Josh'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'Mark'</span><span class="pln"> </span><span class="pun">],</span></li><li class="L3"><span class="pln">  </span><span class="pun">[</span><span class="pln"> </span><span class="str">'Peter'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'Sam'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'Sandra'</span><span class="pln"> </span><span class="pun">],</span></li><li class="L4"><span class="pln">  </span><span class="str">'Оставшиеся студенты: Takesi, Somebody'</span></li><li class="L5"><span class="pun">]</span></li></ol></pre></div></div>
<p>То есть, меняется содержимое строки. Все оставшиеся ученики попадают туда.</p>
<p>Задача интересная, немного заковыристая, но все необходимое для неё мы уже проходили. Просто распишите логику действий строка за строкой.</p>
*/

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    let newArr1=[],
        newArr2=[],
        newArr3=[],
        newArr4=[],
        newAll=[];
    let str = '';
    let count =0;
    arr.sort();
    for (let i=0; i<arr.length;i++){
        if(i<3){
            newArr1.push(arr[i]);
            newAll[0]=newArr1;
        }
        if(i>=3 && i<6){
            newArr2.push(arr[i]);
            newAll[1]=newArr2;
        }
        if(i>=6 && i<9){
            newArr3.push(arr[i]);
            newAll[2]=newArr3;
        }
        if(i>=9){
            newArr4.push(arr[i]);
            count++;
            newAll[3]=newArr4;
        }
        if(count>0){
            str=`Оставшиеся студенты: ${newArr4.join(', ')}`;
        }else{
            str=`Оставшиеся студенты: -`;
        }
        
        newAll[3]=str;
    }
    return newAll;
}

console.log(sortStudentsByGroups(students));