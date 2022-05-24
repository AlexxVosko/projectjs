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

export default calc;