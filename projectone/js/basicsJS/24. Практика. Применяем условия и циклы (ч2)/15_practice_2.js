/* Задание на урок:
1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как 
str.length - и получить её длину)
3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"
4) Потренироваться и переписать цикл еще двумя способами*/


'use_strict';

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?",'');

const personalMovieDB = {};
personalMovieDB.count=numberOfFilms;
personalMovieDB.movies={};
personalMovieDB.actors={};
personalMovieDB.genres=[];
personalMovieDB.privat=false;


//1-ый способоб
for(let i=0;i<2;i++){
   let films = prompt("Один из последних просмотренных фильмов?",''),
       mark = +prompt("На сколько оцените его?",'');

    if(mark!='' &&  mark!=null  && films!='' && films.length<50 && films!=null){   // Условие в виде не пустой строки, название не длинее, чем 50 символов и отменить ответ
        personalMovieDB.movies[films]=mark;
    }else{
        i--; // возвращаем обратно к условию если введено не верно
    }
}

//2-ой способ
let num =1;
do {
    let films = prompt("Один из последних просмотренных фильмов?",''),
       mark = +prompt("На сколько оцените его?",'');

    if(mark!='' &&  mark!=null  && films!='' && films.length<50 && films!=null){   // Условие в виде не пустой строки, название не длинее, чем 50 символов и отменить ответ
            personalMovieDB.movies[films]=mark;
            num++;
    }
}
while(num<3);

//3-ий способ

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