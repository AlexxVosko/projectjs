/* Задача на работу с рекурсией */

/*
<p>Создайте функцию deepCount, которая будет считать количество <strong>всех</strong> элементов в массиве, включая и вложенные массивы. Учтите, что сам вложенный массив тоже входит в счет. Чтобы понять задачу детальнее, давайте рассмотрим примеры:</p>
<p><code>deepCount([1, 5, 3])</code> =&gt; 3</p>
<p><code>deepCount(["1", 5, "3", ["10"]])</code> =&gt; 5 (Заметьте, что последний элемент был посчитан сан + его внутренность)</p>
<p><code>deepCount([1, 2, [3, 4, [5]]])</code> =&gt; 7</p>
<p><code>deepCount([])</code> =&gt; 0</p>
<p><code>deepCount([[[[[[[[[]]]]]]]]])</code> =&gt; 8</p>
 */

'use strict';

function deepCount(a){
    let num=a.length;
    for(let i=0; i<a.length;i++){
        if(Array.isArray(a[i])){
            num+= deepCount(a[i]);
        }
    }
    return num;
}
console.log(deepCount(["1", 5, "3", ["10",3]]));
console.log(deepCount([[[[[[[[[]]]]]]]]]));