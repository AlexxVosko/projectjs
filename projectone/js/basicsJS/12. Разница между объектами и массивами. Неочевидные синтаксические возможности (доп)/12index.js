
const arr = [1,2,3];
const obj = {a:1,b:2};

// в массивах важен порядок элементов
console.log(arr[1]);

//  объект - структура хранения данных в парном формате
const obj2 = {
    Anna:500,
    'Alice':800
};

// Функциональные отличия
const arrObj = {
    0:1,
    a:2,
    2:3,
};

console.log(arrObj[0]);
console.log(arrObj.a);
console.log(arrObj['a']);

arrObj.b='1234'; // =  arrObj['b']='1234'; 
console.log(arrObj.b);
// лучше использовать квадратные скобки (более безапастнее)

const c = 'c';
console.log(arrObj[c]); // =  c:c (можно передавать переменную)

// не рекомендуется
arr[10] = 10;
console.log(arr); // порядок важен с 3 по 9 элементы будут пустыми


//внутри объектов можно создавать вложные структуры
const arrObj2 = {
    abc:{
        fd:[{},{}],
        dfe:{}
    },
    t:2,
    i:3,
};




