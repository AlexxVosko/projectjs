'use strict';

// API - Application Programmic Interface (Интерфейс ПО или приложения)
// Набор данных и возможностей, которое предоставляет готовое решение

// DOM API - методы позволяющие работать со страницей

// fetch()
// использует промисы

// get запрос на fetch()
fetch('https://jsonplaceholder.typicode.com/todos/1') // возвращается промис
    .then(response => response.json()) // ответ в формате json но json() превратит в объект (возвращается промис)
    .then(json => console.log(json));

// post запрос на fetch()    
fetch('https://jsonplaceholder.typicode.com/posts',{
    method:"POST",
    body:JSON.stringify({name:'Alex'}),
    headers:{
        'Content-type':'application/json'
    }
}) 
.then(response => response.json()) 
.then(json => console.log(json));

// Если внутри Fetch, промис попадает на ошибку связанную с http протоколом
// он не выполнит reject

