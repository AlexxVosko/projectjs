'use strict';

// Event Loop - событийный цикл
// Все колбэки являются асинхронными

///!!!! ВАЖНО

setTimeout( () =>{
    console.log(1);
}, 0);
console.log(2);
// 1) setTimeout проходит через асинхронную часть (запись в Web Apis)
    // выполняется внчале синхронный код
// 2) в setTimeout при 0 автоматически подставляется 4 мс чтобы была минимальная задержка

console.log(1);

setTimeout( () =>{
    console.log('timeout');
}, 2000);

setTimeout( () =>{
    console.log('timeout');
}, 4000);

setTimeout( () =>{
    console.log('timeout_4000');
}, 4000);

console.log(2);

// Из ресурса

// Call Stack - операции/ вызовы функций которые выполняются в данный момент
// Web Apis - хранилище в браузере для хранения промежуточных данных (фоновый режим)
        // при setTimeout где то должны записываться данные через сколько запустить функцию
// Callback Queue - операции в браузере выстраиваются в очередь 

// Вначале выполняется синхронный код - попадает в Call Stack
// Обработчики событий сохраняются в Web Apis и ждут дальнешего вызова


// колбэк выполнится только после клика по кнопке
// если много раз нажать по кнопке при выполнении функции timeout() 
// то timeout() будет ждать в очереди по истечении всех timer()
$.on('button', 'click', function onClick() {
    setTimeout(function timer() {
        console.log('You clicked the button!');    
    }, 2000);
});

//попадает в Call Stack
console.log("Hi!");

//попадает в Web Apis (сохраняет колбэк функцию)
// timeout() попадает в очередь (Callback Queue) после 5 сек ->Call Stack
setTimeout(function timeout() {
    console.log("Click the button!");
}, 5000);

//попадает в Call Stack
console.log("Welcome to loupe.");


const arr = [1,4,5,6,8,3];
//колбэк функция будет выполняться для каждого элемента item
// но работает внутри Call Stack в очередь не поподает
arr.forEach(item=>{
    console.log(item);
});

//Вывод
// Если на странице есть тяжелая задача которая работает внутри цикла/ внутри перебирающего метода /
// есть вероятность что может остановить работу страницы пока не выполниться
let k=0;
function count (){
    for (let i = 0; i < 1e9; i++){
        k++;
    }
    console.log('done');
}
count ();
// Поэтому сложные задачи разбивать на мелкие
// к примеру подсчитывать по кускам 
// 