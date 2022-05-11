'use strict';

window.addEventListener("DOMContentLoaded",()=>{
// -- Timer -- //

const deadline ='2022-05-12'; // отправная точка

//разница между deadline и текущим временем
function getTimeRemaining(endtime){
    const t = Date.parse(endtime) - Date.parse(new Date()), //количество мс
          days = Math.floor(t/(1000*60*60*24)), //количество дней
          hours = Math.floor(t/(1000*60*60) % 24),  //количество часов
          minutes = Math.floor((t/1000/60) % 60), //количество минут
          seconds = Math.floor((t/1000) % 60); //количество секунд

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