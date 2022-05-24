function slider(){
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

module.exports = slider;