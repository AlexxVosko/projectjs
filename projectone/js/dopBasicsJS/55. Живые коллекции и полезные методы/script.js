'use strict';

const boxesQuery = document.querySelectorAll('.box');
const boxesGet = document.getElementsByClassName('box'); // устаревшее

// Разная структура псевдомассивов
console.log(boxesQuery); // NodeList
console.log(boxesGet); //HTML Collection
console.log(document.body.children); //HTML Collection

// Живые и статические коллекции - явления при котором операции ведут себя по разному

boxesQuery[0].remove();
boxesGet[0].remove();

console.log(boxesQuery); // NodeList - 3 элемента
console.log(boxesGet); //HTML Collection - 1 элемент

//boxesQuery - состояние элементов на момент вызова команды querySelectorAll (коллекция статична) (отпечаток того что было)
//boxesGet - отслеживает все изменения в DOM - дереве и дает текущий результат (живая коллекция)


// Array.from() - позволяет создать массив из массиво-подобного объекта
// Применять тогда, когда нужно отследить все изменения которые произошли с элементами в каком то промежутке времени
console.log(Array.from(boxesGet)); // массив []

for(let i=0;i<5;i++){
    const div = document.createElement('div');
    div.classList.add('box');
    //document.body.append(div);
    //boxesGet[boxesGet.length]=div; //  Ошибка. Напрямую HTML колллекцию изменять нельзя
}

// .matches() - позволяет найти только тот элемент который подходит по определенным параметрам (CSS селектору) среди всех элементов
// (используется на конкретном элементе)

boxesQuery.forEach(box=>{
    if(box.matches('.this')) console.log(box);
});

// closest() - ищет ближайший к элементу родитель по селектору CSS деллегирование событий
// если элемент не найден вернет null
console.log(boxesQuery[0].closest('.wrapper'));