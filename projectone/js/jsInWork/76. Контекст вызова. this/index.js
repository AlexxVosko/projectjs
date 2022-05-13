
'use strict';

// this - то что окружает функцию и в каких условиях она вызывается

//---------------------------------------------------------------------------------------------
//1)  Простой вызов функции

function showThis(){
    // если указан строгий режим 'use strict';
    console.log(this); // undefined

    // если не указан строгий режим 'use strict';
    console.log(this);  // Контекст вызова - Window (глобальный объект)
}
showThis();

//!!
function show(a,b){
    console.log(this); // undefined
    function sum(){
        // что выведет код здесь, какой контекст вызова у функции sum()?
        console.log(this); // undefined

        //будет ли работать данная конструкция, если нет то как исправить?
        return this.a + this.b;
        // ответ -  будет ошибка, решение - использовать замыкание функции

        // sum() ищет переменные внутри себя -> не находит -> обращается к родительской функции
        return a + b;

    }
    console.log(sum()); // 9
}
show(4,5);

//---------------------------------------------------------------------------------------------
//2) Методы объектов - тоже функции
// Контекст вызова - получаем весь объект в котором находится этот метод
const obj = {
    a:20,
    b:15,
    sum: function(){
        console.log(this); // { a: 20, b: 15, sum: [Function: sum] }

        // какой контекст вызова?
        // потому что это функция внутри метода
        function shout(){
            console.log(this); // undefined
        }
        shout();
    }
};
obj.sum();

//---------------------------------------------------------------------------------------------
//3) Функции конструкции через New
// Когда вызывается - создается новый объект
// this ссылается на экземпляр new User
function User(name,id){
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function(){
        console.log(`Hello ${this.name}`);
    }
}
let alex = new User('Alex', 29);

//---------------------------------------------------------------------------------------------
//4) Ручное присвоение this любой функции

function sameName(surname){
    console.log(this); // {name:'Alex'}
    console.log(this.name); // Alex
    console.log(this.name + surname); // AlexVosko

}
const user = {
    name : 'Alex'
}

// методы call и apply - передача контекста вызова в эту функцию 
sayName.call(user); 
sayName.apply(user);

// методы отличаются если функция использует аргументы
// call - аргументы передаются через запятую строкой
sayName.call(user, 'Vosko'); 
// apply  - аргументы передаются через запятую в массиве
sayName.apply(user, ['Vosko']);


// метод bind - создает новую функцию связанную с определенным контекстом
function count(num){
    return this*num;
}
const double = count.bind(2);
console.log(double(3)); // 6
console.log(double(13)); // 26


//!! Вызовы функций
//1) Обычная функция: this = window, но если 'use strict' - this = undefined
//2) Контекст у методов объекта - сам объект
//3) this в функциях конструкторах и классах - новый экземпляр объекта
//4) ручная привязка this: call, apply, bind 


const btn = document.querySelector('button');

// когда callback функция написана в классическом режиме (function())
//  контекст вызова сам элемент на котором произошло событие
// this == event.target
btn.addEventListener('click',function(){
    console.log(this); // получаем <button></button>
    this.style.backgroundColor = 'red';
});


//!! у стрелочноой функции ()=> - нет своего контекста вызова
// она всегда его будет брать у своего родителя

// this будет ссылаться на сам объект 
const object = {
    num:5,
    sayNumber: function(){
        const say = ()=>{
            console.log(this); //{ num: 5, sayNumber: [Function: sayNumber] }
        }
        say();
    }
};
object.sayNumber();

const duble = (a)=>{
    // в классичесском варианте
    return a * 2;
};

// если тело функции помещается в одну строку
// то можно написать его без фигурных скобок
const duble2 = (a)=> a * 2;

// если стрелочная функция принимает только один аргумент
// она может быть написана без скобок
const duble3 = a => a * 2;
console.log(duble3(4)); // 8


btn.addEventListener('click',(e)=>{
    console.log(this); // undefined
    this.style.backgroundColor = 'red'; // будет ошибка

    //поэтому передавать аргумент e
    e.target.style.backgroundColor = 'red';
});
