'use strict';

window.addEventListener("DOMContentLoaded",()=>{

    // -- Modal -- //
    const modalTrigger = document.querySelectorAll('[data-modal]'), //  кнопки
          modal = document.querySelector('.modal'), // само окно
          modalCloseBtn = document.querySelector('[data-close]'); // кнопка закрытия



    function openModel(){
     //1)  способ
        // modal.classList.add('show');
        // modal.classList.remove('hide');

    //2)  способ
       modal.classList.toggle('show');
       document.body.style.overflow = 'hidden'; // отмена прокрутки
   }
    modalTrigger.forEach(btn =>{
        btn.addEventListener('click', openModel);
    });

    function closeModal(){
        //modal.classList.add('hide');
        //modal.classList.remove('show');
        modal.classList.toggle('show');
        document.body.style.overflow = '';

        //если пользователь сам нажал то удалять таймер
        clearInterval(modalTimerId);
    }
    modalCloseBtn.addEventListener('click',closeModal);


    modal.addEventListener('click',(e)=>{
        // отслеживание клика пользователя (закрытие по подложке)
        if(e.target === modal){
            closeModal();
        }
    });

    // отслеживание нажатия кнопки пользователя (закрытие по кнопке esc)
    document.addEventListener('keydown',(e)=>{
        if(e.code === 'Escape' && modal.classList.contains('show')){
            closeModal();
        }
    });

    const modalTimerId = setTimeout(openModel,5000);


    // если пользователь долистал до конца - показать модальное окно

    window.addEventListener('scroll', showModalByScroll);
    //},{once:true}); // как вариант но не всегда подходит

    // функция всплытия модального окна только один раз при прокрутке вниз
    function showModalByScroll(){
        if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight-1){  // прокрученная часть + видимая часть окна  >= полная высота всей страницы
            openModel();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }


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
     


    // -- Tabs -- //
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');

    // функция скрытия табов
    function hideTabContent(){
        tabsContent.forEach(item=>{
            item.style.display = 'none';
            item.classList.add('hide');
            item.classList.remove('show','fade');
        });
        tabs.forEach(tab=>{
            tab.classList.remove('tabheader__item_active');

        });
    }

    //функция показа табов
    // если функция вызывается без аргумента, то по умолчанию можно выставить i=0
    function showTabContent(i=0){
        tabsContent[i].style.display = 'block';
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');


        tabs[i].classList.add('tabheader__item_active');

    }

    hideTabContent();
    showTabContent();

    // обработчик меню

    tabsParent.addEventListener('click',(e)=>{
        const target = e.target;

        if(target && target.classList.contains('tabheader__item')){
            tabs.forEach((item,i)=>{
                if(target == item){
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

});