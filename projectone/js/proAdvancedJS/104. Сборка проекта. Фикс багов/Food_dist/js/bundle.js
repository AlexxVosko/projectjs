/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calc.js":
/*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function calc (){
    // -- Calculator -- //

    const result = document.querySelector('.calculating__result span');
    let sex, height, weight, age, ratio;

    //проверка из localStorage
    if(localStorage.getItem('sex')){
        sex = localStorage.getItem('sex');
    }else{
        sex = 'female';
        localStorage.setItem('sex','female');
    }
    if(localStorage.getItem('ratio')){
        ratio = localStorage.getItem('ratio');
    }else{
        ratio = 1.375;
        localStorage.setItem('ratio', 1.375);
    }

    //инициализация активности из localStorage
    function initLocalSettings(selector,activeClass){
        const elements = document.querySelectorAll(selector);

        elements.forEach(elem=>{
            elem.classList.remove(activeClass);
            if(elem.getAttribute('id') === localStorage.getItem('sex')){
                elem.classList.add(activeClass);
            }
            if(elem.getAttribute('data-ratio') === localStorage.getItem('ratio')){
                elem.classList.add(activeClass);
            }
        });
    }
    initLocalSettings('#gender div', 'calculating__choose-item_active');
    initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');

    // общая функция подсчетов
    function calcTotal(){
        //проверка на заполненность всех данных
        if (!sex || !height || !weight || !age || !ratio) {
            result.textContent = '____'; 
            return;
        }
        if (sex === 'female') {
            result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
        } else {
            result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
        }
        console.log(result);
    }
    calcTotal();

    //функция получени данных из div + выставление активности
    function getStaticInformation(selector, activeClass) {
        const elements = document.querySelectorAll(selector); // получение элементов по родителю
        //отслеживание событий по родителю (делегирование событий)

        elements.forEach(elem => {
            elem.addEventListener('click', (e) => {
                if (e.target.getAttribute('data-ratio')) {
                    ratio = +e.target.getAttribute('data-ratio');
                    localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
                } else {
                    sex = e.target.getAttribute('id');
                    localStorage.setItem('sex', e.target.getAttribute('id'));
                }
                //настройка активности
                elements.forEach(elem => {
                    elem.classList.remove(activeClass);
                });
    
                e.target.classList.add(activeClass);
    
                calcTotal();
            });
        });
    }

    getStaticInformation('#gender div', 'calculating__choose-item_active');
    getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');

    //функция обработки input калькулятора
    function getDynamicInformation(selector) {
        const input = document.querySelector(selector);
        //проверка на конкретный input по id
        input.addEventListener('input', () => {
            // проверка на ввод
            if(input.value.match(/\D/g)){ //если не число
                input.style.border = '1px solid red';
            }else{
                input.style.border = 'none';
            }


            switch(input.getAttribute('id')) {
                case "height":
                    height = +input.value;
                    break;
                case "weight":
                    weight = +input.value;
                    break;
                case "age":
                    age = +input.value;
                    break;
            }
            calcTotal();
        });
    }
    getDynamicInformation('#height');
    getDynamicInformation('#weight');
    getDynamicInformation('#age');


}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);

/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");


function cards(){
    
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
    
    
        // .ok - свойство, успешен ли запрос
        // .status - свойство, статус сервера

    
        (0,_services_services__WEBPACK_IMPORTED_MODULE_0__.getResource)('http://localhost:3000/menu')
            .then(data=>{
                data.forEach(({img,altimg,title,descr,price}) =>{
                    new MenuCard(img,altimg,title,descr,price,'.menu .container').render();
                });
            });
    
         /*axios.get('http://localhost:3000/menu')   
              .then(data=>{
                data.data.forEach(({img,altimg,title,descr,price}) =>{
                    new MenuCard(img,altimg,title,descr,price,'.menu .container').render();
                });
              });*/
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);

/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./js/modules/modal.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");




function forms(formSelector, modalTimerId){
    // -- Forms -- //  
    // Просмотр отправки в браузере
    // Network -> файл сервера (serever.php) -> табы (Headers, PayLoad)
    // Контроль загрузки интернета 
    //Network -> вкладка Online

    const forms = document.querySelectorAll(formSelector);
    const mess = {
        loading:'img/spinner.svg',
        success:'Форма успешно отправлена!',
        fail:'Что то пошло не так'
    };

    forms.forEach(item=>{
        bindPostDataJson(item);
    });
    //Если форма должна принимать в JSON

    function bindPostDataJson(form){
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
            const formData = new FormData(form);

            const obj = {a:23, b:50 };
            console.log(Object.entries(obj)); // [ [ 'a', 23 ], [ 'b', 50 ] ]

            // formData - собираем все данные с формы
            // formData.entries() превращаем в массив массивов
            // Object.fromEntries затем превращаем в классический объект
            // JSON.stringify а затем классический объект превращаем в json
            // json отправляем на сервер
            const json = JSON.stringify(Object.fromEntries(formData.entries()));

           
            //postData('server.php',JSON.stringify(object))
            (0,_services_services__WEBPACK_IMPORTED_MODULE_1__.postData)('http://localhost:3000/requests',json)
            //.then(data=>data.text())
            .then(data=>{
                console.log(data); //Response
                showThanksModal(mess.success);
                statusMessage.remove();
            }).catch(()=>{
                showThanksModal(mess.fail);
            }).finally(()=>{
                form.reset();
            });
        });
    }

    // Блок оповещения пользователя
    function showThanksModal(message){
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');
        (0,_modal__WEBPACK_IMPORTED_MODULE_0__.openModel)('.modal', modalTimerId);

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
            (0,_modal__WEBPACK_IMPORTED_MODULE_0__.closeModal)('.modal');
        },4000);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeModal": () => (/* binding */ closeModal),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "openModel": () => (/* binding */ openModel)
/* harmony export */ });

function openModel(modalSelector,modalTimerId){
    const modal = document.querySelector(modalSelector); 
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden'; // отмена прокрутки
    // Фикс бага при выносе функции 
     // добавить вторым аргументом
    // проверить на существование
    console.log(modalTimerId);
    if(modalTimerId){
        clearInterval(modalTimerId); //если пользователь сам нажал то удалять таймер
    }
}

function closeModal(modalSelector){
     const modal = document.querySelector(modalSelector); 
     modal.classList.add('hide');
     modal.classList.remove('show');
     document.body.style.overflow = '';
 }

 // откуда будет приходить Id c таймером ?
 // создавать таймер в самом общем файле


function modal(triggerSelector, modalSelector, modalTimerId){

  // -- Modal -- //
  const modalTrigger = document.querySelectorAll(triggerSelector), //  кнопки
        modal = document.querySelector(modalSelector); // само окно

    // чтобы обойти ограничение вызова функции  - обернуть функцию в стрелочную
    modalTrigger.forEach(btn =>{
        btn.addEventListener('click', () => openModel(modalSelector, modalTimerId));
    });


  modal.addEventListener('click',(e)=>{
      // отслеживание клика пользователя (закрытие по подложке)
      if(e.target === modal || e.target.getAttribute('data-close')==""){
          closeModal(modalSelector);
      }
  });

  // отслеживание нажатия кнопки пользователя (закрытие по кнопке esc)
  document.addEventListener('keydown',(e)=>{
      if(e.code === 'Escape' && modal.classList.contains('show')){
          closeModal(modalSelector);
      }
  });

  // если пользователь долистал до конца - показать модальное окно

  window.addEventListener('scroll', showModalByScroll);
  //},{once:true}); // как вариант но не всегда подходит

  // функция всплытия модального окна только один раз при прокрутке вниз
  function showModalByScroll(){
      if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight-1){  // прокрученная часть + видимая часть окна  >= полная высота всей страницы
          openModel(modalSelector, modalTimerId);
          window.removeEventListener('scroll', showModalByScroll);
      }
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);



/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}){
    // -- Slider -- //
    const slides = document.querySelectorAll(slide), // опредение слайда
          prev = document.querySelector(prevArrow),
          next = document.querySelector(nextArrow),
          total = document.querySelector(totalCounter), // нумерация
          current = document.querySelector(currentCounter), // текущий слайд

          slidesWrapper = document.querySelector(wrapper), // обертка
          slidesField = document.querySelector(field), // поле со слайдами
          // получение ширины текущего слайда 
          //(через ComputedStyle - примененные стили к началу загрузки страницы из файла стилей)
          width = window.getComputedStyle(slidesWrapper).width,
         
          slider = document.querySelector(container),
          // обертка для всех точек
          dots = document.createElement('ol'),
          dotsArray = [];

    let slideIndex = 1,
        offset = 0; // на сколько нужно отступить

   // подстановка 0 в общую нумерацию 
    //функция проверки нумерации
    function getNum(length,tot,cur){
        if(slides.length < 10){
            if(tot!=""){
                total.textContent = `0${slides.length}`;
            }
            current.textContent = `0${slideIndex}`;
         }else{
            if(tot!=""){
                total.textContent = slides.length;
            }
            current.textContent = {slideIndex};
        }
    }
    getNum(slides.length,total,current);

    //функция активности точек
    function dotsActive(arr,index){
        arr.forEach(dot=>dot.style.opacity = '.5');
        arr[index-1].style.opacity = 1;
    }

     //функция модификации строки
    function replaceWidth(str){
       return +str.replace(/\D/g,'');
    }


    // установка ширины (поместить все слайды)
    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = 'all 0.5s';

    slidesWrapper.style.overflow = 'hidden';
    // установка ширины для каждого слайда
    slides.forEach(slide=>{
        slide.style.width = width;
    });

    slider.style.position = 'relative';
    dots.classList.add('carousel-indicators');
    dots.style.cssText =`
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
    `;
    slider.append(dots);

    // создание точек от количества слайдов
    for(let i = 0; i < slides.length; i++){
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.style.cssText = `
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 30px;
            height: 6px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: #fff;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: .5;
            transition: opacity .6s ease;
        `;

        if(i==0){
            dot.style.opacity = 1;
        }
        dots.append(dot);
        dotsArray.push(dot);

    }
    next.addEventListener('click',()=>{
        // при нажатии на кнопку необходимо сдвинуть слайд
        // движение вправо
        // в переменной width = '500px' - необходимо трансформировать в число
        if(offset == replaceWidth(width) * (slides.length - 1)){ // условия для последнего слайда
            offset = 0;
        }else{ // если не последний слайд - добавить смещение
            offset += replaceWidth(width);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;

        if(slideIndex==slides.length){
            slideIndex=1;
        }else{
            slideIndex++;
        }

        getNum(slides.length,'',current);

        //установка активности точек
        dotsActive(dotsArray,slideIndex)
    });
    // для кнорки назад операции противоположные
    prev.addEventListener('click',()=>{
        if(offset == 0){ // проверка на первый слайд
            offset = replaceWidth(width) * (slides.length - 1);
        }else{ // если не последний слайд - добавить смещение
            offset -= replaceWidth(width);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;

        if(slideIndex==1){
            slideIndex = slides.length;
        }else{
            slideIndex--;
        }

        getNum(slides.length,'',current);

       //установка активности точек
       dotsActive(dotsArray,slideIndex)
    });

    // обработчик события для каждой точки
    dotsArray.forEach(dot=>{
        dot.addEventListener('click',(e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;

            offset = replaceWidth(width) * (slideTo - 1);
            slidesField.style.transform = `translateX(-${offset}px)`; // смещение

            getNum(slides.length,'',current);

            dotsActive(dotsArray,slideIndex)
        });
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass){
    // -- Tabs -- //
    const tabs = document.querySelectorAll(tabsSelector),
          tabsContent = document.querySelectorAll(tabsContentSelector),
          tabsParent = document.querySelector(tabsParentSelector);

    // функция скрытия табов
    function hideTabContent(){
        tabsContent.forEach(item=>{
            item.style.display = 'none';
            item.classList.add('hide');
            item.classList.remove('show','fade');
        });
        tabs.forEach(tab=>{
            tab.classList.remove(activeClass);

        });
    }

    //функция показа табов
    // если функция вызывается без аргумента, то по умолчанию можно выставить i=0
    function showTabContent(i=0){
        tabsContent[i].style.display = 'block';
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');


        tabs[i].classList.add(activeClass);

    }

    hideTabContent();
    showTabContent();

    // обработчик меню

    tabsParent.addEventListener('click',(e)=>{
        const target = e.target;

        if(target && target.classList.contains(tabsSelector.slice(1))){
            tabs.forEach((item,i)=>{
                if(target == item){
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function timer (id, deadline){
    // -- Timer -- //

   // const deadline ='2022-05-12'; // отправная точка

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

 setClock(id,deadline);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);

/***/ }),

/***/ "./js/services/services.js":
/*!*********************************!*\
  !*** ./js/services/services.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getResource": () => (/* binding */ getResource),
/* harmony export */   "postData": () => (/* binding */ postData)
/* harmony export */ });

    const postData = async (url,data) => {
        //помещаем в переменную проимис от фетча
        const res = await fetch(url,{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:data
        });

        // !асинхронный код
        // необходимо дождаться ответа сервера а потом только возвращать значение
        return await res.json(); //  промис
    };

    const getResource = async (url) => {
        const res = await fetch(url);

         // обработка ошибок http
        if(!res.ok){
           throw new Error(`Could not fetch ${url}, status: ${res.status} `);
        }
        return await res.json(); //  промис
    };

    
    

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/forms */ "./js/modules/forms.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/cards */ "./js/modules/cards.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc */ "./js/modules/calc.js");











window.addEventListener("DOMContentLoaded",()=>{
    const modalTimerId = setTimeout(() => (0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__.openModel)('.modal', modalTimerId),50000);

    (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    (0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__["default"])('[data-modal]','.modal', modalTimerId);
    (0,_modules_timer__WEBPACK_IMPORTED_MODULE_2__["default"])('.timer','2022-06-12');
    (0,_modules_cards__WEBPACK_IMPORTED_MODULE_5__["default"])();
    (0,_modules_calc__WEBPACK_IMPORTED_MODULE_6__["default"])();
    (0,_modules_forms__WEBPACK_IMPORTED_MODULE_4__["default"])('form', modalTimerId);
    (0,_modules_slider__WEBPACK_IMPORTED_MODULE_3__["default"])({
        container: '.offer__slider',
        slide: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner',
    });
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map