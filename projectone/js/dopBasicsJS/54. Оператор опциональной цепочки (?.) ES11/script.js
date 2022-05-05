
// Оператор опциональной цепочки - проверяет выражение слева от себя и останавливает операции, 
   //если оно имеет значение undefined или null. Возвращает undefined как результат (без ошибки)

'use strict';

const box = document.querySelector('.box');
const block = document.querySelector('.block');

console.log(block); //  null - нет на странице

//console.log(block.textContent); // получим ошибку и выполнение кода остановится здесь
//поэтому
/*if(block){
    console.log(block.textContent);
}
*/
console.log(block?.textContent); // undefined - Существует ли блок
console.log(1+2); 

//Нюанс
// Работает на чтении свойства
//block?.textContent ='123'; // Ошибка

//При использовании опреатора перменная должна быть объявлена

// Максимальная польза при работе с данными

 const userData = {
    name:'Alex',
    age:null,
    say: function (){
        console.log('Hello');
    }
 };

 if(userData && userData.skill && userData.skills.js){
    console.log(userData.skills.js); 
 }
 // =
 console.log(userData?.skills?.js); //undefined

 const userDataNew = null;
 console.log(userDataNew?.skills?.js); //undefined

// Проверка методов на существование
 userData.say();
 userData.hey?.();