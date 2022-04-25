/* - Правила и типы названия переменных (доп) - */

const a = 5000;
const b = 4000;

//Лучше называть переменные более понятно, camelCase
const autoCusovWidth = 5000,
      autoCusovLength = 4000;

console.log("Ширина кузова автомобиля: " + autoCusovWidth + ", длина: " + autoCusovLength);

// 
//['sotr1','sotr2','sotr3'].map(a => );

//Request - (ответ от сервера)
//data 
//response 


//  -- Виды записи переменных -- 

// snake_case
// UPPER_SNAKE_CASE
// пример (обычно это константы, не гласное правило, не изменять)
let COLOR_RED = '#F00';

// Переменные начинающиеся с нижнего подчеркивания (значит руками не трогать!)

const _apiBase = "https://api.gateway.com/v1/public/";
const _apiKey = "JKBGKASNAGNDGVLWEJRNndfgbd4n334dfb8";

// Kebab-case (слова через дефис)
// PascalCase (для название классов в JS, Первая буква - большая)

//Лучше создать новую переменную чем переназначать старую