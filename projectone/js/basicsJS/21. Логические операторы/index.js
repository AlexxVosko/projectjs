// Логическое или || 
// Логическое и &&
// Оператор отрицания не !

//Динамическая типизация
//0, '', null, undefind, NaN - false, остальное true

const humburger = true;
const fries = true;

//Проверяются все условия одновременно
if(humburger && fries){
    console.log('Я сыт');
}
console.log((humburger && fries)); //  true or false


const humburger2 = 2;
const fries2 = 0;
const cola = 0;
const nuggets =2;

if(humburger2 === 3 && cola === 1 && fries){
    console.log('Все сыты');
}else{
    console.log('Мы уходим');  
}
console.log(humburger2 === 3 && cola && fries); //  возвращает 0

console.log(1 && 0);  //  возвращает 0 - возвращает первое ложное значение
console.log(1 && 5);  //  возвращает 5 - оба true - возвращает последнее в выражении
console.log(null && 5);  //  возвращает null
console.log(0 && 'sdvsdvcsd'); //  возвращает 0

// && - возвращает первое ложное значение если оно есть, возвращает последнее правдивое если все true

// || - Проверяются хотя бы одно верное значение, перестает проверять условия когда попадается true
if(humburger2 || cola || fries){
    console.log('Все сыты');
}else{
    console.log('Мы уходим');  
}

let johnReport , alexReport , samReport = 'done';
console.log(johnReport || alexReport || samReport); // done

// первым будет отрабатывать ===, затем &&, затем ||
if(humburger2 ===3 && cola===2 || fries ===3 && nuggets){
    console.log('Все сыты');
}else{
    console.log('Мы уходим');  
}

console.log(humburger2 ===3 && cola===2 || fries ===3 && nuggets); // выведет 2

// ! возвращает противоположное значение
console.log(!0); 