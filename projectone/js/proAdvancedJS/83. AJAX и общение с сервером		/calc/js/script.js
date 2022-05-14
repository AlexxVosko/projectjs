'use strict';



const inputBYN = document.querySelector('#rub'),
      inputUSD = document.querySelector('#usd');

// 1)  --- Метод XMLHttpRequest (устаревший) --- 

inputBYN.addEventListener('input',()=>{
    const request = new XMLHttpRequest();

    // -- Методы XMLHttpRequest
        //метод open - собирает настройки которые помогают сделать запрос
        // 1 аргумент method* - тот который используется для запроса(get, post)
        // 2 аргумент url* - путь к серверу (путь формировать относительно файла на котором форма, в данном случае index.html)
        // 3 аргумент async - отвечает за асинхронность (синхронный код - идет по порядку, асинхронный - параллельно)
        // 4 аргумент login - некоторые запросы можно делать с авторизацией
        // 5 аргумент pass
        //request.open(method, url, async, login,pass);

    request.open('GET', 'js/current.json');
    //HTTP заголовок для передачи json файла
    request.setRequestHeader('Content-type','application/json; charset=utf-8');
    // Отправка - метод send()
    // может принимать какой то body (send(body)) - данные которые уходят на сервер (существуеют только в post запросах)
    request.send();

    // -- Свойства XMLHttpRequest
        //status - показывает статус запроса (404, 500, 200 и т.д)
        //statusText - тестовое описание ответа от сервера (OK, Not Found и т.д)
        //response - ответ от сервера
        //readyState - текущее состояние запроса (обозначаются цифрами) 4 Done - полная загрузка запроса

    // -- События XMLHttpRequest
        //readystatechange - отслеживает статус готовности запроса в данный текущий момент
        //load - срабатывает при полной загрузке запроса и получили какой то результат

    // Устаревший вариант
    request.addEventListener('readystatechange',()=>{ //)
        if(request.readyState===4 && request.status===200){
            console.log(request.response); // объект json
            const data = JSON.parse(request.response); // объект JS
            inputUSD.value = (+inputBYN.value /  data.current.usd).toFixed(2); // округление 
        }else{
            // если что то сломалось 
            inputUSD.value = "Что то пошло не так";
        }
    });

    request.addEventListener('load',()=>{ //)
        if(request.status===200){
            const data = JSON.parse(request.response);
            inputUSD.value = (+inputBYN.value /  data.current.usd).toFixed(2); // округление 
        }else{
            // если что то сломалось 
            inputUSD.value = "Что то пошло не так";
        }
    });
});