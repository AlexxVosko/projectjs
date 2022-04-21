// Взаимодейстия с пользователем

alert('Hello'); // Всплывающее окно

const result = confirm("Are you here?"); // Получение ответа Да или Нет
console.log(result);  // true/false

const answer = prompt("Вам есть 18?", "18"); // Пользователь может что то напечатать
console.log(answer); // string

//но
const answer2 = +prompt("Вам есть 18?", "18");
console.log(answer2); // number

//Проверка на тип данных
console.log(typeof(answer)); 

const answers = [];

answers[0]=prompt("Как Вас зовут?","");
answers[1]=prompt("Сколько Вам лет?","");
answers[2]=prompt("Какой Ваш Пол?","");

document.write(answers); // Устаревшая команда для замены на странице всего контента на то что введено

console.log(typeof(answers)); // object

//Ошибки старых версий
console.log(typeof(null)); // object !

// prompt, alert, confirm - существуют только внутри браузера