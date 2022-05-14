'use strict';

window.addEventListener("DOMContentLoaded",()=>{

    // -- Forms -- //  
    // Просмотр отправки в браузере
    // Network -> файл сервера (serever.php) -> табы (Headers, PayLoad)
    // Контроль загрузки интернета 
    //Network -> вкладка Online

    const forms = document.querySelectorAll('form');
    const mess = {
        loading:'img/spinner.svg',
        success:'Форма успешно отправлена!',
        fail:'Что то пошло не так'
    };

    /*forms.forEach(item=>{
        postData(item);
    });*/

    function postData(form){
        form.addEventListener('submit',(e)=>{
            e.preventDefault();

            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            statusMessage.textContent =mess.loading;
            form.append(statusMessage);

            const req = new XMLHttpRequest();
            req.open('POST','server.php');

            // когда используется связка XMLHttpRequest + FormData
            //заголовок устанавливать не нужно! он отправляется автоматически
           // req.setRequestHeader('Content-type','multipart/form-data');

            // формат FormData - объект,позволяющий с формы быстро сформировать все данные которые заполнил пользователь
            // формат Ключ: Значение
            // в форме во всех input должен быть аттрибут name - иначе не сработает
            const formData = new FormData(form);
            req.send(formData);

            req.addEventListener('load',()=>{
                if(req.status ===200){
                    console.log(req.response);
                    statusMessage.textContent =mess.success;
                    form.reset(); // очистка формы
                    setTimeout(()=>{
                        statusMessage.remove();
                    },2000);
                }else{
                    statusMessage.textContent =mess.fail;
                }
            });

        });
    }

    forms.forEach(item=>{
        postDataJson(item);
    });
    //Если форма должна принимать в JSON

    function postDataJson(form){
        form.addEventListener('submit',(e)=>{
            e.preventDefault();

            // Изображние загрузки
            const statusMessage = document.createElement('img');
            statusMessage.src = mess.loading;
            statusMessage.style.cssText = `
                display:block;
                margin:0 auto;
            `;
            form.insertAdjacentElement('afterend', statusMessage); // вместо append

            const req = new XMLHttpRequest();
            req.open('POST','server.php');
            req.setRequestHeader('Content-type','application/json'); // Заголовок нужен

            const formData = new FormData(form);
            
            const object = {};
            formData.forEach(function(value, key){
                object[key] = value;
            });

            const json = JSON.stringify(object);
            req.send(json);

            req.addEventListener('load',()=>{
                if(req.status ===200){
                    console.log(req.response);
                    showThanksModal(mess.success);
                    
                    form.reset(); // очистка формы
                    statusMessage.remove();

                }else{
                    showThanksModal(mess.fail);
                }
            });

        });
    }

    // Блок оповещения пользователя
    function showThanksModal(message){
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');
        openModel();

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;

        document.querySelector('.modal').append(thanksModal);
        setTimeout(()=>{
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal();
        },4000);
    }






    // -- Используем классы для карточек -- //
    class MenuCard {
        constructor (src,alt,title,descr,price,parentSelector,...classes){
            this.src=src;
            this.alt=alt;
            this.title=title;
            this.descr=descr;
            this.price=price;
            this.parent=document.querySelector(parentSelector);
            this.classes = classes; //массив
            this.transfer=2.61;
            this.changeToBYN();
        }

        changeToBYN(){
            this.price = parseFloat(this.price*this.transfer).toFixed(2);
        }

        //Формирование верстки
        render(){
            const element = document.createElement('div');

            // проверка если в rest ничего не передано
            if(this.classes.length===0){
                this.element = 'menu__item'
                element.classList.add(this.element);
            }else{
                this.classes.forEach(className=>element.classList.add(className));
            }

            element.innerHTML=`
                    <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> BYN/день</div>
                    </div>
            `;
            this.parent.append(element);
        }
    }
    //const div = new MenuCard();
    // div.render();

    //использование метода на месте
    // в будущем код модифицируется
    new MenuCard(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        ".menu .container",
        "menu__item",
        "big"
    ).render();

    new MenuCard(
        "img/tabs/elite.jpg",
        "elite",
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        14,
        ".menu .container",
        "menu__item"
    ).render();

    new MenuCard(
        "img/tabs/post.jpg",
        "post",
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        21,
        ".menu .container",
        "menu__item"
    ).render();





    // -- Modal -- //
    const modalTrigger = document.querySelectorAll('[data-modal]'), //  кнопки
          modal = document.querySelector('.modal'); // само окно

    function openModel(){
     //1)  способ
         modal.classList.add('show');
         modal.classList.remove('hide');

    //2)  способ
       //modal.classList.toggle('show');
       document.body.style.overflow = 'hidden'; // отмена прокрутки
       clearInterval(modalTimerId);
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
   


    modal.addEventListener('click',(e)=>{
        // отслеживание клика пользователя (закрытие по подложке)
        if(e.target === modal || e.target.getAttribute('data-close')==""){
            closeModal();
        }
    });

    // отслеживание нажатия кнопки пользователя (закрытие по кнопке esc)
    document.addEventListener('keydown',(e)=>{
        if(e.code === 'Escape' && modal.classList.contains('show')){
            closeModal();
        }
    });

    const modalTimerId = setTimeout(openModel,50000);


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
        const t = Date.parse(endtime) - Date.parse(new Date()); //количество мс
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