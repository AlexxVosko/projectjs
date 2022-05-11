
'use strict';

//JS - высокоуровневый язык (многое сделано внутри него) 
//JS - интерпритируемый язык  (программа интерпритатор построчно запускает и выполняет код)
// Компеляторы - программа полностью переводится в двоичный код а затем выполняется
// Интерпритатор выполняет действия условно автоматически, сам решает сколько памяти выделить, как ее использовать, как ее освободить

// Сборщик мусора - подпрограмма которые отслеживают выделение и использование памяти компа и
// при необходимости могут освобождать эту память, если какой то код не используется

//Сборка мусора выполняется автоматически. Мы не можем ускорить или предотвратить её.
//Объекты сохраняются в памяти, пока они достижимы.
//Наличие ссылки не гарантирует, что объект достижим (от корня): несколько взаимосвязанных объектов могут стать недостижимыми как единое целое.

// Подробно -  https://learn.javascript.ru/garbage-collection

// Утечка памяти ( не может быть удалено сборщиком мусора)
//1) Если не используется 'use strict';, (использование переменной без объявления)
function func(){
    smth ="string";
    //window.smth ="string"; // лишняя глобальная переменная
}

//2) Забытые таймеры
const someRes = getData();
const node = document.querySelector('.class');

setInterval(function(){
    if(node){
        node.innerHTML = someRes;
    }
},1000);

//3) Обработчики событий на не существующих элементах
//Современные браузеры будут удалять обработчик события если элемент был удален


//4) Замыкания
function outer (){
    const potentiallyHugeArray = [];
    return function inner(){
        potentiallyHugeArray.push('Hello');
        console.log('Hello!');
    }
}
const sayHello = outer();

//5) Ссылки на DOM - элементы

function createElement (){
    const div = document.createElement('div');
    div.id ='test';
    return div;
    //решение
    //document.body.append(div);
}

const testDiv = createElement();
document.body.append(testDiv);
    //решение
    //createElement();

function deleteElement(){
    document.body.removeChild(document.getElementById("test"));
}
deleteElement();

// Поиск утечки памяти - инструмент профиллирования в Google Chrome
// https://developer.chrome.com/docs/devtools/memory-inspector/