'use strict';

// СSS3 - анимация
// Ограничения СSS не умеет анимировать canvas элементы

// JS анимация
// 1) setInterval и setTimeout
    // проблема в ручной настройке анимации по кадрам
    // если используется много таких анимаций то велика вероятность загрузки компа
    // в браузере несколько открытых вкладок
// 2) функция requestAnimationFrame
    // позволяет запускать функции в качестве анимации
    // подстраивает под частоту обновления браузера (60 кадров/сек) что снижает нагрузку
    // несколько анимации может выполнять однеовременно
    // функцию анимации запускает в виде callback

// остановка анимации
    let id = requestAnimationFrame(myAnimation);
    cancelAnimationFrame(id);