//console.log(5);
'use strict';

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?",'');
const personalMovieDB = {};
personalMovieDB.count=numberOfFilms;
personalMovieDB.movies={};
personalMovieDB.actors={};
personalMovieDB.genres=[];
personalMovieDB.privat=false;


let num2 =1;
while(num2<3){
    let films = prompt("Один из последних просмотренных фильмов?",''),
    mark = +prompt("На сколько оцените его?",'');

    if(mark!='' &&  mark!=null  && films!='' && films.length<50 && films!=null){   // Условие в виде не пустой строки, название не длинее, чем 50 символов и отменить ответ
            personalMovieDB.movies[films]=mark;
            num2++;
    }
} 

if(personalMovieDB.count<10){
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count>=10 && personalMovieDB.count<30){
    console.log("Вы классический зритель");
} else if (personalMovieDB.count>=30){
    console.log("Вы киноман");
}else{
    console.log("Произошла ошибка");
}
 
console.log(personalMovieDB);
 
