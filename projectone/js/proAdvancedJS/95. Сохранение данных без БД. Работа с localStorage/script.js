'use strict';

// localStorage -  объект который встроен в браузер, который хранит различные данные
// localStorage -  свойство глобального объекта window
//window.localStorage

// Используется:
    // 1) при настройке сайта (при повторном заходе все сохранится)
    // 2) при установке данных формы
    // 3) запомнить время видео на котором остановился просмотр
//! объект существует только внутри одного домена и служит для хранения локальных данных
// ограничение около 5МБ 


// в консоли браузера - вкладка Application -> Storage -> Local Storage
// состоит из двух полей (Key, Value)


// setItem() - запись данных
localStorage.setItem('number', 5);

// getItem() - получить данные
localStorage.getItem('number');
console.log(localStorage.getItem('number')); //5

// removeItem() - удалить данные 
localStorage.removeItem('number');
console.log(localStorage.getItem('number')); // null

// clear() - полная очистка хранилища
// localStorage.clear();


const checkbox = document.querySelector('#checkbox'),
      form = document.querySelector('form'),
      change = document.querySelector('#color');

//проверка состояния чекбокса и формы
if(localStorage.getItem('isChecked')){
    checkbox.checked = true;
}
if(localStorage.getItem('bg') === 'changed'){
    form.style.backgroundColor = 'red';
}

//если выставить чекбокс - чтобы он сохранялся при новом открытии страницы
checkbox.addEventListener('change', ()=>{
    localStorage.setItem('isChecked', true);
});

// менять цвет у формы
change.addEventListener('click', ()=>{
    if(localStorage.getItem('bg') === 'changed'){
        localStorage.removeItem('bg');
        form.style.backgroundColor = '#fff';
    }else{
        localStorage.setItem('bg','changed');
        form.style.backgroundColor = 'red';
    }
});


//  Сохранение объекта в localStorage
const persone = {
    name: 'Alex',
    age: 29
}
const serializedPersone = JSON.stringify(persone);
localStorage.setItem('Alex', serializedPersone);

console.log(localStorage.getItem('Alex'));
console.log(JSON.parse(localStorage.getItem('Alex')));