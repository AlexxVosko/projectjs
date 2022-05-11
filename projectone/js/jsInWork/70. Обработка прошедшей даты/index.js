'use strict';
'use strict';

window.addEventListener("DOMContentLoaded",()=>{
// -- Timer -- //

// если дата уже прошла
const deadline ='2022-04-12'; // отправная точка

// варианты 
//1) показывать нули
//2) скрыть таймер
//3) выводить сообщение что акция закончилась

//разница между deadline и текущим временем
function getTimeRemaining(endtime){

// на этапе вычисления разности - если отрицательное число то передавать нули
    const t = Date.parse(endtime) - Date.parse(new Date());
    let days,hours,minutes,seconds;

    if(t <= 0){
        days = 0;
        hours = 0;
        minutes = 0;
        seconds = 0
    }else{
        days = Math.floor(t/(1000*60*60*24)), 
        hours = Math.floor(t/(1000*60*60) % 24),  
        minutes = Math.floor((t/1000/60) % 60), 
        seconds = Math.floor((t/1000) % 60);  
    }


          //объект
          return {
            'total':t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
          };
}

// добовлять 0 в если меньше 10
function getZero(num){
    if(num>=0 && num<10){
        return `0${num}`;
    }else{
        return num;
    }
}

// установка таймера на странице
 function setClock(selector,endtime){
     const timer = document.querySelector(selector),
           days = document.querySelector('#days'),
           hours = document.querySelector('#hours'),
           minutes = document.querySelector('#minutes'),
           seconds = document.querySelector('#seconds'),
           timeInterval = setInterval(updateClock,1000);

    // решение мигание верстки
    updateClock();   

     // обновление таймера
     function updateClock(){
         const t = getTimeRemaining(endtime);

         days.innerHTML = getZero(t.days);
         hours.innerHTML = getZero(t. hours);
         minutes.innerHTML = getZero(t.minutes);
         seconds.innerHTML = getZero(t.seconds);

        if(t.total<=0){
            clearInterval(timeInterval);
        }
     }
 }

 setClock('.timer',deadline);

});