'use strict';

// Функции генерируют какой то результат и делает это последовательно
// Ключевое слово yield - при вызове один результат при другом вызове другой результат
// Когда функция срабатывает он отдает объект с двумя полями
// Значение (value) и флаг выполнился наш генератор или нет  (done - true/false) 

function* generator(){
    yield 'S';
    yield 'c';
    yield 'r';
    yield 'i';
    yield 'p';
    yield 't';
};

const str = generator ();

// Получить только значение
console.log(str.next().value); // S

// Чтобы вызвать следующий шаг генератора использовать встроенный метод next
console.log(str.next()); // { value: 'S', done: false }
console.log(str.next()); // { value: 'c', done: false }
console.log(str.next()); // { value: 'r', done: false }

console.log(str.next()); // { value: 'i', done: false }
console.log(str.next()); // { value: 'p', done: false }
console.log(str.next()); // { value: 't', done: false }
console.log(str.next()); // { value: undefined, done: true }


// Значения функции генератора сформировались автоматически 
// на основании цикла 
// Когда вызыввается функция count c передачей аргкмента числа
// каждая итерация цикла происходит один раз по вызову

function* count (n){
    for (let i=0; i < n; i++){
        yield i;
    }
}

const counter = count(7);

console.log( counter.next().value);
console.log( counter.next().value);
console.log( counter.next().value);

// Для вывода всех элементов
for (let k of count(7)){
    console.log(k);
}

