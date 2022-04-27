/*
1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

const personalMovieDB = {
    count:0,
    movies:{},
    actors:{},
    genres:[],
    privat:false,
    showMyDB:function(hidden){
        if(!hidden){
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function(){
        // Вариант 2 (запустить цикл 1 раз)
        for(let i=1;i<2;i++){
            //Вариант 1
            /*
             for(let i=1;i<4;i++){    
            let peremGenre =prompt(`Ваш любимый жанр под номером ${i}`);
            if(peremGenre=='' || peremGenre==null){
                i--;
            }else{
                personalMovieDB.genres[i-1]=peremGenre;
            }*/
            // Вариант 2
            let peremGenre =prompt(`Введите Ваши любимые жанры через запятую`).toLowerCase(); // Чтобы избежать ошибок при сортировке
            if(peremGenre=='' || peremGenre==null){
                i--;
            }else{
                personalMovieDB.genres=peremGenre.split(", ");
                personalMovieDB.genres.sort(); //
            }
        }
        personalMovieDB.genres.forEach((item,i)=>{
            console.log(`Любимый жанр #${i+1} - это ${item}`)
        });
       // return  personalMovieDB.genres;
    },
    start: function (){
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?",'');
        //проверка на неправильные варинты
        while(personalMovieDB.count=='' || personalMovieDB.count==null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?",'');
        }
    },
    rememberMyFilms:function(){
        for(let i=0;i<2;i++){
            let films = prompt("Один из последних просмотренных фильмов?",''),
                mark = +prompt("На сколько оцените его?",'');
             if(mark!='' &&  mark!=null  && films!='' && films.length<50 && films!=null){   // Условие в виде не пустой строки, название не длинее, чем 50 символов и отменить ответ
                 personalMovieDB.movies[films]=mark;
             }else{
                 i--; // возвращаем обратно к условию если введено не верно
             }
         }
    },
    detectPersonalLevel: function(){
        if(personalMovieDB.count<10){
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count>=10 && personalMovieDB.count<30){
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count>=30){
            console.log("Вы киноман");
        }else{
            console.log("Произошла ошибка");
        }
    },
    toggleVisibleMyDB: function(){
        if(personalMovieDB.privat){
            personalMovieDB.privat = false;
        }else{
            personalMovieDB.privat = true;
        }
    }
};