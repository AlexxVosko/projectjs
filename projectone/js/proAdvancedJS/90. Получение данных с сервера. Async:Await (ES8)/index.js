// Функционал общения с сервром нужно выносить в отдельные функции
// Фанкшн экспрэшн- функция в переменную

// !асинхронный код
// необходимо дождаться ответа сервера а потом только возвращать значение

// оператор async - обозначение что внутри фунцкции асинхронный код
// опреатор await - ставится перед теми операциями которые необходимо дождаться
// эти операторы всегда используются в паре

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
        postData('http://localhost:3000/requests',json)
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


// Построение карточки меню 

    // .ok - свойство, успешен ли запрос
    // .status - свойство, статус сервера

    const getResource = async (url) => {
        const res = await fetch(url);

         // обработка ошибок http
        if(!res.ok){
           throw new Error(`Could not fetch ${url}, status: ${res.status} `);
        }
        return await res.json(); //  промис
    };

    // вариант 1 c использованием класса
    getResource('http://localhost:3000/menu')
        .then(data=>{
            // неудобно
           /* data.forEach(obj =>{
                new MenuCard(obj.img,obj.altimg,obj.title,obj.descr,obj.price).render();
            });*/
            // использовать деструктуризацию
            data.forEach(({img,altimg,title,descr,price}) =>{
                new MenuCard(img,altimg,title,descr,price,'.menu .container').render();
            });
        });

    // вариант 2 ( на лету)
    getResource('http://localhost:3000/menu')
        .then(data=>createCard(data)); 

    function createCard (data){
        data.forEach(({img,altimg,title,descr,price}) =>{
            const element = document.createElement('div');
            element.classList.add('menu__item');

            element.innerHTML =`
                    <img src=${img} alt=${altimg}>
                    <h3 class="menu__item-subtitle">${title}</h3>
                    <div class="menu__item-descr">${descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${price}</span> BYN/день</div>
                    </div>
            `;
            document.querySelector('.menu .container').append(element);
        });
        
    } 