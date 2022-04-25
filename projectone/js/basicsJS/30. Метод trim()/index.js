// ! Пробелы - это не пустая строка
// trim() - применяется к строке и удаляет пробельные символы с начала и конца строки
// возвращает строку с  уже вырезанными пробелами



'use_strict';
let numberOfFilms;
const personalMovieDB = {};
personalMovieDB.count=numberOfFilms;
personalMovieDB.movies={};
personalMovieDB.actors={};
personalMovieDB.genres=[];
personalMovieDB.privat=false;

function rememberMyFilms(){
    for(let i=0;i<2;i++){
        let films = prompt("Один из последних просмотренных фильмов?",'').trim(),
            mark = +prompt("На сколько оцените его?",'');
         if(mark!='' &&  mark!=null  && films!='' && films.length<50 && films!=null){   // Условие в виде не пустой строки, название не длинее, чем 50 символов и отменить ответ
             personalMovieDB.movies[films]=mark;
         }else{
             console.log('error'); // если будут введены данные только из пробелов 
             i--; // возвращаем обратно к условию если введено не верно
         }
     }
 }
 rememberMyFilms();