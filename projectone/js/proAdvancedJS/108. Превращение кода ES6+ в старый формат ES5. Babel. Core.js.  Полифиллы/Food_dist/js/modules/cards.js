import {getResource} from '../services/services';

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

    
        getResource('http://localhost:3000/menu')
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

export default cards;