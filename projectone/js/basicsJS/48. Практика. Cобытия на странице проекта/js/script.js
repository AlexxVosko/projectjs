/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

//  Для формирования DOM структуры - DOMContentLoaded

document.addEventListener('DOMContentLoaded',()=>{ // код запуститься только тогда когда загрузится вся DOM структура
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    const promoAdv = document.querySelectorAll(".promo__adv img"),
          promoBg = document.querySelector(".promo__bg"),
          promoGenre = promoBg.querySelector(".promo__genre"),
          movieList = document.querySelectorAll('ul.promo__interactive-list'),

          input = document.querySelector(".adding__input"),
          btn = document.querySelector("form.add button"),
          addForm = document.querySelector("form.add"),
          checkbox = addForm.querySelector('[type="checkbox"]');

          // Удаление рекламы
          const deleteAdv = (arr) =>{
            arr.forEach((item,i)=>{
                item.remove();
            });
          };

          // Изменение на странице
          const makeChanges = () => {
            promoGenre.textContent= 'Драма'.toUpperCase();
            promoBg.style.backgroundImage = 'url("img/bg.jpg")';
          };

          // Сортировка
          const sortArr= (arr)=>{
                arr.sort();
          };

           // Функция списка элементов
        function createMovieList(films,parent){ 
            parent.innerHTML ="";
            sortArr(films);
            films.forEach((item,i)=>{
                parent.innerHTML += `<li class="promo__interactive-item">${i+1}. ${item} <div class="delete"></div></li>`;
            });
            //3)
            document.querySelectorAll('.delete').forEach((item,i)=>{
                item.addEventListener('click',()=>{
                    item.parentElement.remove(); // удаление на фронде
                    movieDB.movies.splice(i,1); // удаление из базы

                    createMovieList(movieDB.movies,movieList[0]); // Рекурсия (обновление нумерации)
                });
            });
        }


        //1) 
        addForm.addEventListener('submit',(event)=>{
            event.preventDefault(); 
            let newFilm = input.value;
            const favorite = checkbox.checked;
            if(newFilm){
                if(newFilm.length>21){  //2)
                    newFilm =`${newFilm.substring(0,22)}...`;
                }
                if(favorite){  //4) 
                   console.log(`Добавляем любый фильм`); 
                }

                movieDB.movies.push(newFilm);
                sortArr(movieDB.movies); // 5) 
    
                createMovieList(movieDB.movies,movieList[0]);
    
                //event.target.reset();
                addForm.reset(); // очищение input
            }
        });


        deleteAdv(promoAdv);
        makeChanges();
        createMovieList(movieDB.movies,movieList[0]);
});

