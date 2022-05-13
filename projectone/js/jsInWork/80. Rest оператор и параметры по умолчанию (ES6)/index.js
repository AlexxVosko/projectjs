'use strict';

// Spread оператор -  сущность разбивает на отдельные элементы
// Rest оператор - отдельные элементы объединяет в один массив

const log = function (a,b,...rest){
    console.log(a,b,rest); // basic rest [ 'operator1', 'operator2', 'operator3' ]
    console.log(a,b,...rest);  // basic rest operator1 operator2 operator3 (применен spread)
}
log('basic','rest','operator1','operator2','operator3'); 

// Параметры по умолчанию
// мы хотим чтобы параметры которые передаем имели значения по умолчанию

//ES6
function calcOrDouble(number,basis=2){
    //До стандарта ES6
    //basis = basis || 2;
    console.log(number*basis);
}
calcOrDouble(3); //6


window.addEventListener("DOMContentLoaded",()=>{


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
});