'use strict';

const btnPhone = document.querySelector('#iphone'),
      btnMacbook = document.querySelector('#macbook'),
      images = document.querySelectorAll('img');
let phoneAnimation;
// Помещение экземпляр объекта в переменную
/*let phoneAnimation = images[0].animate([
    {transform: 'translateY(0)'}, // начальная точка
    {transform: 'translateY(100px)'}, // промежуточные точки
    {transform: 'translateY(-100px)'},
    {transform: 'translateY(0)'} // конечная точка
],{
    duration: 3000,
    iterations: Infinity
});*/
// Обработчик по клику
btnPhone.addEventListener('click',()=>{
    if(!phoneAnimation){
        phoneAnimation = images[0].animate([
            {transform: 'translateY(0) rotate(0deg)', // начальная точка
             filter: 'opacity(100%)'
            }, 
            {transform: 'translateY(100px) rotate(180deg)', // промежуточные точки
            filter: 'opacity(50%)'
            }, 
            {transform: 'translateY(-100px) rotate(270deg)',
             filter: 'opacity(75%)'
            },
            {transform: 'translateY(0) rotate(360deg)', // конечная точка
            filter: 'opacity(100%)'
            } 
        ],{
            duration: 3000,
            iterations: Infinity
        });
    } else if(phoneAnimation.playState === 'paused' ) {
        phoneAnimation.play();
    } else {
        phoneAnimation.pause();
    }
});