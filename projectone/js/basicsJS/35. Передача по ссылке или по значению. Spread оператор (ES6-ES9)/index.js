// Замена происходит с примитивными типами данных  (Передача по значению)
'use_strict';

let a = 5,
    b = a;

b = b + 5;

console.log(b); // 10
console.log(a); // 5
 

// замена происходит по ссылке (Передача по ссылке)
const obj = {
    a:5,
    b:1
}
const copy = obj; // здесь НЕ создается копия объекта, а создается ссылка на объект obj
copy.a = 10;

console.log(copy); // \ абослютно одинаковые объекты
console.log(obj);  // / модифицируется изначальный объект


// 1) Функция клонирования объекта
function copyObj(mainObj){
    let objCopy = {}
    let key;
    for(key in mainObj){
        objCopy[key]= mainObj[key];
    }
    return objCopy;
}


const numbers = {
    a:2,
    b:5,
    c:{
        x:7,
        y:4
    }
};

//вот теперь значение изменится только в копии
const copyNumbers = copyObj(numbers);
copyNumbers.a = 10;
copyNumbers.с.x = 10;
// но во вложенном объекте, значение поменяется в двух объектах
// Потому что есть глубокие и поверхностные копии объектов
// вложенные объекты, массивы будут иметь ссылочный тип данных так как это глубокий тип

//  --- Object.assign ---
// объеденение объектов 
// 1 агрумент - объект в который помещаются данные
// 2 аргумент - объект который мы помещаем
const add = {
    d:17,
    e:20
}
// 2) Независимая поверхностная копия объекта
Object.assign(numbers,add);

// Создание нового объекта, но получаем отдельную копию add
const clon = Object.assign({},add);
clon.d = 20;

console.log(add); 
console.log(clon); // менятся только в копии


//3) --- Копия массивов -  slice() ---

const oldArray = ['a','b','c'];
const newArray = oldArray.slice();
newArray[1]='d';

//Стандарт ES6 и ES8
//4) Оператор разварота (Spread operator)
// разворачивает структуру и превращает в набор данных

const video = ['youtube','vimeo','rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video,...blogs,'vk','telegram']; // войдут все вышеперечисленные элементы из двух массивов + свои

function log (a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2,5,7];
log(...num); //  в функцию можно передать массив используя данный оператор 

// Создание копии массива
 const array = ['a','b'];
 const newAr = [...array];

// Создание копии объекта
const object = {'a':1,'b':2};
const newOb = {...object};