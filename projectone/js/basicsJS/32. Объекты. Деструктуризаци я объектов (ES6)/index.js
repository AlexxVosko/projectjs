// Объекты могут сохран]ть в себе абсолютно любые типы данных, в формате ключ:значение, вложенные
// а также создавать собственные методы

'use_strict';

//const obj = new Object();
// Методы можно создавать вручную - в ключ записывается функция
const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function(){
        console.log("Test");
    }
}

options.makeTest();

console.log(options.name);
console.log(options['name']);

// --- Удаление св-ва (пары ключ : значение) из объекта ---
// delete
delete options.name;

// --- Перебор св-в объекта (цикл) ---
// for _ in _
// для свойства colors выведит [object Object] - потому что не может объект превратить в строку

//прием счетчика
let counter = 0;
for (let key in options){
    if(typeof(options[key])==='object'){
        for (let i in options[key]){
            console.log(`Свойство ${key} имеет пару ключ ${i} и значение ${options[key][i]}`);
        }
    }else{
        console.log(`Свойства ${key} имеет значение ${options[key]}`);
    }
    counter++; //прием счетчика
}
console.log(counter);

// --- Функции и методы которые уже есть внутри объекта ---

//Ключи объекта
// создает массив в котором все элементы это ключи
Object.keys(options);

// узнать количество элементов 
Object.keys(options).length;


// -- Деструктуризация объекта --
// вытаскивание вложенных объектов в виде отдельных структур (отдельных переменных)
// разделить на более мелкие кусочки

const {border,bg} = options.colors;
console.log(border);

// Все сущности в JS сводятся к объектам