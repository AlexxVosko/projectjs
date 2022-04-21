/*Продвинутые задания на использование циклов и условий */

<ol>
    <li><p>Заполните новый массив (result) числами из старого (arr). Количество элементов в массиве можно получить как <code>arr.length</code>, а к элементам обращаемся все так же: arr[0], arr[1] и тд. Должен получиться точно такой же массив</p></li>
    <li><p>
        Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".<br />Для определения типа данных используйте typeof(); Должно получиться: <code>[ 10, 20, 'Shopping - done', 40, 'Homework - done' ]</code>
    </p></li>
    <li><p>Разверните массив data наоборот при помощи цикла и запишите данные в массив result. Должно получиться: <code>[ 'Homework', 20, 'Shopping', 10, 5 ]</code></p></li>
</ol>


//1
const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];
for(let i=0; i < arr.length;i++){
    result=arr[i];
}

//2
const data = [5, 10, 'Shopping', 20, 'Homework'];

for(let i=0; i < data.length;i++){
    if(typeof(data[i])=='number') data[i]=data[i]*2;
    else if (typeof(data[i])=='string') data[i]=`${data[i]} - done`;
}

//3
const data2 = [5, 10, 'Shopping', 20, 'Homework'];
const result2 = [];

for(let i=1; i <= data2.length;i++){
    result2[i-1]=data2[data2.length-i];
}
