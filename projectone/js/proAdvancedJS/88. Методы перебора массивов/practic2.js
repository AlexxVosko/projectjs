'use strict';
/*
Задания на работу с методами массивов (ч2)

1) <p>1) У вас есть небольшой массив с данными о доходах каждой торговой точки. Напишите функцию getPositiveIncomeAmount, которая принимает этот массив данных и возвращает сумму только положительных значений из каждого объекта. (число)</p>
<p><code>getPositiveIncomeAmount(funds)</code> =&gt; 13300</p>

2) <p>2) Напишите функцию getTotalIncomeAmount, которая тоже принимает этот массив данных. Если <strong>хотя бы</strong> <strong>один</strong> из объектов содержит отрицательное значение поля amount, то функция возвращает сумму <strong>всех</strong> значений. (число) Если таких значений нет - запускается функция getPositiveIncomeAmount с тем же массивом данных.</p>
<p><code>getTotalIncomeAmount(funds)</code> =&gt; -500</p>
*/


const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];

const getPositiveIncomeAmount = (data) => {
    return data.filter(item=> item.amount>0)
           .reduce((sum,current)=> sum+current.amount,0);
};
console.log(getPositiveIncomeAmount(funds));


const getTotalIncomeAmount = (data) => {
    return data.some(item => item.amount < 0) ? data.reduce((sum,current)=> sum+current.amount,0) : getPositiveIncomeAmount(data);
};
console.log(getTotalIncomeAmount(funds));