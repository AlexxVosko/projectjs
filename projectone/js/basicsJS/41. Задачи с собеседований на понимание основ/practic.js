/* Задание на поиск ошибок в коде */

/*
<p>У вас есть объект с данными о ресторане. Начинающий разработчик создал несколько функций, которые работают неправильно и он не может понять почему. Нужно исправить функции так,&nbsp;чтобы они давали всегда правильный результат.</p>
<p>1) Функция <code>isOpen</code> не хочет правильно работать. Что мы уже не пробовали подставлять в неё - результат все время неправильный. Необходимо найти причины и исправить.</p>
<p>2) Функция <code>isAverageLunchPriceTrue</code> должна брать цены двух любых блюд из меню, складывать их и сравнивать с средним чеком (averageLunchPrice).</p>
<p>Сейчас функция работает, но постоянно выдает неправильный результат. Ведь из представленного меню сумма двух любых цен всегда будет <strong>больше</strong> 20. Необходимо найти причину и исправить.</p>
<p>3) Функция <code>transferWaitors</code> создана для того,&nbsp;чтобы копировать шаблон данных и передавать их в другой ресторан. Конечно, в другом ресторане будут другие блюда, другие официанты и тп. Сейчас эта функция только в начале разработки и должна менять данные про официантов.</p>
<p>Но в нынешнем виде мы обнаружили, что после её запуска <strong>не только копия данных</strong> содержит новых официантов, но и основные данные! В restorantData сотрудник Alice <strong>исчезает</strong> и <strong>заменяется</strong> Mike! Необходимо найти причину и немедленно исправить, чтобы данные были разделены.</p>
<p>P.S. Может показаться сложным, но задача решается очень просто, если вы помните один принцип :)</p>
*/

'use strict';

const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function isOpen(prop) { 
    let answer = ''; 
    (!prop) ? answer = 'Закрыто' : answer = 'Открыто'; 
    
    //return anwser;
    return answer; 
}
//console.log(isOpen(openNow))
console.log(isOpen(restorantData.openNow));



function isAverageLunchPriceTrue(fDish, sDish, average) {
    let first = +fDish.price.slice(0, -1);
    let second = +sDish.price.slice(0, -1);
    let aver =  +average.slice(0, -1);
    if ((first + second ) < aver) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}
console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data) {
    const copy = Object.assign({}, data);

    copy.waitors = [{name: 'Mike', age: 32}];
    return copy;
}

transferWaitors(restorantData);