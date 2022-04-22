
/*2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use_strict';
let numberOfFilms;
const personalMovieDB = {};
personalMovieDB.count=numberOfFilms;
personalMovieDB.movies={};
personalMovieDB.actors={};
personalMovieDB.genres=[];
personalMovieDB.privat=false;

//2
function showMyDB(hidden){
    if(!hidden){
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres(){
    for(let i=1;i<4;i++){
        personalMovieDB.genres[i-1]=prompt(`Ваш любимый жанр под номером ${i}`,'');
    }
    return  personalMovieDB.genres;
}
writeYourGenres();

function start (){
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?",'');

    //проверка на неправильные варинты
    while(numberOfFilms=='' || numberOfFilms==null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?",'');
    }
}
start();

function rememberMyFilms(){
    for(let i=0;i<2;i++){
        let films = prompt("Один из последних просмотренных фильмов?",''),
            mark = +prompt("На сколько оцените его?",'');
         if(mark!='' &&  mark!=null  && films!='' && films.length<50 && films!=null){   // Условие в виде не пустой строки, название не длинее, чем 50 символов и отменить ответ
             personalMovieDB.movies[films]=mark;
         }else{
             i--; // возвращаем обратно к условию если введено не верно
         }
     }
 }
 rememberMyFilms();

 function detectPersonalLevel(){
    if(personalMovieDB.count<10){
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count>=10 && personalMovieDB.count<30){
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count>=30){
        console.log("Вы киноман");
    }else{
        console.log("Произошла ошибка");
    }
 }
detectPersonalLevel();

