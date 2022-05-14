
'use strict';

// AJAX - Asynchronous Javascript and XML
// HTTP - запросы (GET, POST)
// по умолчанию AJAX - асинхронный код

const inputBYN = document.querySelector('#rub'),
      inputUSD = document.querySelector('#usd');

// 1) Метод XMLHttpRequest (устаревший)

    // событие change срабатывает при уходе из фокуса
    // событие input  срабатывает каждый раз когда что то вводится в input

    // get запрос направлен для того чтобы получить какие то данные сервера
    // post запрос - отправка данных на сервер