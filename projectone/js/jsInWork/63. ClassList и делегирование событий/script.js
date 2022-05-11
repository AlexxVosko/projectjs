
'use strict';

const btns = document.querySelectorAll('button');

// Количество классов у элемента - classList.length
console.log(btns[0].classList.length);

// Методы classList

// item() - Получить класс под определенным индексом
console.log(btns[0].classList.item(0));

//  add(), remove(), toggle()
console.log(btns[0].classList.add('red','red2')); // добавить класс
console.log(btns[0].classList.remove('blue','red2')); // удалить класс
console.log(btns[0].classList.toggle('blue')); // переключение класса

// наличие класса contains() - true / false
if(btns[1].classList.contains('red')){
    console.log('Есть'); 
}

btns[0].addEventListener('click',()=>{
    //1
    if(!btns[1].classList.contains('red')){
        btns[1].classList.add('red');
    }else{
        btns[1].classList.remove('red');
    }
    //2
    btns[1].classList.toggle('red');
});

//Устаревшее свойство className
console.log(btns[0].className); // получим строку со всеми классами



// Делегирование событий
// Суть - берем элемент родителя и работаем с ним, внутри назначаем функцию для его потомков 
// если они подходят под какие то параметры

// Применим для элементов с одинаковыми обработчиками, при динамическом изменении, будут применяться 
// и для всех новосозданных

// в независимости от того когда элемент появился, он будет выполнять действия клика
const wrapper = document.querySelector('.btn-block');
 
wrapper.addEventListener('click', (e)=>{
    e.preventDefault();
    console.dir(e.target);

    if(e.target && e.target.classList.contains('blue')){
        console.log('Hello');
    }
    if(e.target && e.target.tagName == "BUTTON"){
        console.log('Hello');
    }
    // matches() - какой то элемент совпадает с чем то
    if(e.target && e.target.matches("button.red")){
        console.log('Hello');
    }
});

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);


// Делегирование не сработает
btns.forEach(btn=>{
    btn.addEventListener('click',()=>{
        console.log('Hello');
    });
})
