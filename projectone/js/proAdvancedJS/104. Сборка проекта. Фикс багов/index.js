// Перевод проекта на модульную структуру ES6

// Модули нужно создавать так чтобы они зависели только от аргументов
// которые в них передаются

// чтобы обойти ограничение вызова функции  - обернуть функцию в стрелочную
modalTrigger.forEach(btn =>{
    btn.addEventListener('click', () => openModel(modalSelector));
});

// Функционал таймера
// когда заходим на страницу - запускается таймер 
// через определенный промежуток времени появляется модальное окно
// но если пользователь сам открыл модалку мы должны остановить это действие
// после открытия модального окна очищаем интервал и модалка не откроется


// Функции для связи с сервером выносят в отдельную папку (services) и файлы


// Для слайдера передавать аргументом объект (использовать деструктуризацию)
// запись может идти в абсолютно любом порядке
