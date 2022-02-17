//console.log(5);
'use strict';

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?",'');
const personalMovieDB = {};
personalMovieDB.count=numberOfFilms;
personalMovieDB.movies={};
personalMovieDB.actors={};
personalMovieDB.genres=[];
personalMovieDB.privat=false;

const films = prompt("Один из последних просмотренных фильмов?",''),
    mark = +prompt("На сколько оцените его?",''),
    films1 = prompt("Один из последних просмотренных фильмов?",''),
    mark1 = +prompt("На сколько оцените его?",'');

personalMovieDB.movies[films] = mark;
personalMovieDB.movies[films1] = mark1;

 
console.log(personalMovieDB);
