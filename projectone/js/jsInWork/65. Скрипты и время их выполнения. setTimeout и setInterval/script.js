
'use strict';

// setTimeout - запуск кода через определенный промежуток времени
// 1аргумент - функция
// 2аргумент - промежуток времени (мс)
// 3аргумент - аргумент внутри функции setTimeout

// При передачи setTimeout в переменную,  записывается числовой идентификатор этого таймера

const timerId = setTimeout(function(text){
    console.log(text)
},2000,'Hello');

const timerId2 = setTimeout(logger,2000);

// Сброс таймера clearInterval
clearInterval(timerId2);

// setInterval - Поторение скрипта через опредленное количество времени

const btn = document.querySelector('.btn');
let timerId3,
    i=0;

btn.addEventListener('click',(e)=>{
    //const timerI3= setTimeout(logger,2000);
    timerId3 = setInterval(logger,2000);

    
});

function logger(){
    if(i===3){
        clearInterval(timerId3); 
    }
    console.log('text');
    i++;
}

// чем рекурсивный setTimeout лучше чем setInterval
//когда таймер с интервалом (setInterval) работает он не учитывает как долго
// будет работать функция внутри него 

// рекурсивный setTimeout (ждет строго отведенное ему время)
let id = setTimeout(function log (){
    console.log('Hi');
    id = setTimeout(log,500);
},500);



// Практика

function myAnimation(){
    const elem =document.querySelector('.box');
    let pos = 0;
    const id = setInterval(frame, 10);

    function frame () {
        if(pos==300){
            clearInterval(id);
        }else{
            pos++;
            elem.style.top = pos+'px';
            elem.style.left = pos +'px';
        }
    }
}
btn.addEventListener('click',myAnimation);
