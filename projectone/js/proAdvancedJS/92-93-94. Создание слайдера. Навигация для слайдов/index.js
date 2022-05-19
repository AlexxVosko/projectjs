
// Слайдер - интерактивный элемент, который позволяет просмотреть элементы в сжатом формате

// Алгоритм работы
    //1 получить элементы с которыми будем работать
    //2 понадобится параметр (индекс) который будет определять текущий слайд 
    //3 написание функции показа слайдов (показ текущего и скрытие других)
        //функция принимает индекс, показывает определенный слайд по индексу 
        // внутри себя функция должно проверять условиями
    //4 предусмотреть нумерацию 


//  --- Вариант 1 - Простой слайдер --- //

window.addEventListener("DOMContentLoaded",()=>{
    // -- Slider -- //
    const slides = document.querySelectorAll('.offer__slide'), // опредение слайда
          prev = document.querySelector('.offer__slider-prev'),
          next = document.querySelector('.offer__slider-next'),
          total = document.querySelector('#total'), // нумерация
          current = document.querySelector('#current'); // текущий слайд
    let slideIndex = 1;

    // Инициализация слайдера
    showSlides(slideIndex);

    // подстановка 0 в общую нумерацию 
    if(slides.length < 10){
        total.textContent = `0${slides.length}`;
    }else{
        total.textContent = slides.length; 
    }

    function showSlides(n){
        // условие возвращения к первому слайду
        if(n > slides.length){
            slideIndex = 1;
        }
        // условие возвращения к последнему слайду
        if(n < 1){
            slideIndex = slides.length;
        }
        // скрытие всех слайдов
        slides.forEach(item => item.style.display = 'none');

        // показ нужного слайда
        slides[slideIndex - 1].style.display = 'block'; 

        // подстановка 0 в текущую нумерацию 
        if(slides.length < 10){
            current.textContent = `0${slideIndex}`;
        }else{
            current.textContent = slideIndex;
        }
    }

    // функция  смены индекса слайда
    function plusSlides(n){
        showSlides(slideIndex += n);
    }

    //обработчики событий для стрелок
    prev.addEventListener('click',()=>{
        plusSlides(-1);
    });
    next.addEventListener('click',()=>{
        plusSlides(1);
    });
});



//  --- Вариант 2 - Сложный слайдер (тип карусель) --- //

//Тип карусель - слайды размещены в ряд, передвижение по нужным параметрам
    //в разметке все слайды необходимо обернуть в дополнительный  блок  (.offer__slider-inner)
    //делается для того чтобы обертка была как окно через которое можно видеть текущий слайд

// Алгоритм работы
    //1 общей обертке offer__slider-wrapper назвачается свойство overflow:hidden
       // все что не подходит под ширину этого блока будет скрыто
    //2 блок (.offer__slider-inner) будет в виде карусели
        // будет занимать столько места сколько слайдов в ширину
        // при нажатии на стрелки будет не скрытие слайдов а передвижение по отношению к блоку offer__slider-wrapper
        // при помощи свойства  transform которое применяется к offer__slider-inner


window.addEventListener("DOMContentLoaded",()=>{
    // -- Slider -- //
    const slides = document.querySelectorAll('.offer__slide'), // опредение слайда
          prev = document.querySelector('.offer__slider-prev'),
          next = document.querySelector('.offer__slider-next'),
          total = document.querySelector('#total'), // нумерация
          current = document.querySelector('#current'), // текущий слайд

          slidesWrapper = document.querySelector('.offer__slider-wrapper'), // обертка
          slidesField = document.querySelector('.offer__slider-inner'), // поле со слайдами
          // получение ширины текущего слайда 
          //(через ComputedStyle - примененные стили к началу загрузки страницы из файла стилей)
          width = window.getComputedStyle(slidesWrapper).width;
    let slideIndex = 1,
        offset = 0; // на сколько нужно отступить

   // подстановка 0 в общую нумерацию 
    if(slides.length < 10){
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slideIndex}`;
     }else{
        total.textContent = slides.length;
        current.textContent = {slideIndex};
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

    next.addEventListener('click',()=>{
        // при нажатии на кнопку необходимо сдвинуть слайд
        // движение вправо
        // в переменной width = '500px' - необходимо трансформировать в число
        if(offset == +width.slice(0, width.length - 2) * (slides.length - 1)){ // условия для последнего слайда
            offset = 0;
        }else{ // если не последний слайд - добавить смещение
            offset += +width.slice(0, width.length - 2);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;

        if(slideIndex==slides.length){
            slideIndex=1;
        }else{
            slideIndex++;
        }
        if(slides.length < 10){
            current.textContent = `0${slideIndex}`;
        }else{
            current.textContent = slideIndex;
        }
    });
    // для кнорки назад операции противоположные
    prev.addEventListener('click',()=>{
        if(offset == 0){ // проверка на первый слайд
            offset = +width.slice(0, width.length - 2) * (slides.length - 1);
        }else{ // если не последний слайд - добавить смещение
            offset -= +width.slice(0, width.length - 2);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;

        if(slideIndex==1){
            slideIndex = slides.length;
        }else{
            slideIndex--;
        }
        if(slides.length < 10){
            current.textContent = `0${slideIndex}`;
        }else{
            current.textContent = slideIndex;
        }
    });
});


//  --- Навигация слайдера --- //

 // Необходимо получить как элемент вообще весь слайдер а не только offer__slider-wrapper
 // Нужно установить такому элементу position: relative; 
 // потому что dots будут спозиционированы внизу слайдера 
 // Затем нужно создать обертку для dots - где их количество = количеству слайдов
 // Затем нужно задать класс активности и соотношение точки к определенному слайду

 // нужно учесть что при нажатии на точку нужно менять переменную offset
 // контролировать индикатор и устанавливать нужный слайд Index


 window.addEventListener("DOMContentLoaded",()=>{

    // -- Slider -- //
    const slides = document.querySelectorAll('.offer__slide'), // опредение слайда
          prev = document.querySelector('.offer__slider-prev'),
          next = document.querySelector('.offer__slider-next'),
          total = document.querySelector('#total'), // нумерация
          current = document.querySelector('#current'), // текущий слайд

          slidesWrapper = document.querySelector('.offer__slider-wrapper'), // обертка
          slidesField = document.querySelector('.offer__slider-inner'), // поле со слайдами
          // получение ширины текущего слайда 
          //(через ComputedStyle - примененные стили к началу загрузки страницы из файла стилей)
          width = window.getComputedStyle(slidesWrapper).width,
         
          slider = document.querySelector('.offer__slider'),
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

     //функция модификации строки регуляркой
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
 });


