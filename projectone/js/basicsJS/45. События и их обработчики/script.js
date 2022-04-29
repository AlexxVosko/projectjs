// События - сигнал от браузера о том что что-то произошло
// все чем занимается пользователь на странице 
// необходимо назначить обработчик события
// Обработчик - это функция, которая срабатывает как только событие произошло

//1) html -аттрибут 
<button onclinck="alert('Click')" id="btn">Нажми меня</button>
//  Для маленьких скриптов, либо для тестовых проектов

//2) Использование свойств DOM-дерева для событий
const btn = querySelector('button');
btn.onclick=function(){
    alert('Click');
};
//Проблема - может затереться функционал

//3) addEventListener (слушатель за событиями)
// 1 аргумент - название события
// 2 аргрумент - callback-функция, которая будет обработчиком
btn.addEventListener('click', ()=>{
    alert('Click');
});
btn.addEventListener('click', ()=>{
    alert('Second Click');
});

// Плюс - можем назначать сразу несколько действий на одно событие

// События в JS выполняются в порядке очереди

//Объект Event - Получение данных об элементе с которым идет взаимодействие
// этот объект 'e' передается как аргумент в callback-функцию, а следом за ним свои данные если нужно
btn.addEventListener('mouseenter', (e)=>{
    console.log('Hover');

    console.log(e); // MouseEvent
    e.target.remove(); // кнопка удалиться
    
});

// Удаление обработчиков событий с элементов
// !! нужно использовать ту же функцию, которая была назначена ранее
// поэтому лучше записывать функции в переменные
let i =0;
const deleteBtn = (e)=>{
    e.target.remove();
    i++;
    if(i==1){
        btn.removeEventListener('click', deleteBtn);
    }
};
btn.addEventListener('click', deleteBtn);

// Всплытие событий
// Всплытие событий - обработчик срабатывает на самом вложенном элементе а затем поднимается вверх по иерархии DOM дерева
<div class="overlay">
    <button id="btn">Нажми меня</button>
</div>

const deleteBtn2 = (e)=>{
    console.log(e.target);
    console.log(e.type);
    console.log(e.currentTarget); // вернет точный элемент на котором будет событие
};
const overlay = querySelector('.overlay');

// События обрабатываеют одно и тоже действие
btn.addEventListener('click', deleteBtn2);
overlay.addEventListener('click', deleteBtn2);
// получим 2 результата работы функции 
// сначала btn затем overlay по иерархии

// Отмена стандартного поведения в браузере
// выделение текста, переход по ссылке


//1) в функции вернуть return false в конце (устаревший)

//2) 
const link = document.querySelector('a');
link.addEventListener('click',(event)=>{
    event.preventDefault(); // помещать в самое начало
});


// Навесить функционал на несколько элементов

const btns = document.querySelectorAll('button');
btns.forEach(item=>{
    item.addEventListener('click', deleteBtn2,{once:true}); // Опции события - 3 -й аргумент как объект
})


