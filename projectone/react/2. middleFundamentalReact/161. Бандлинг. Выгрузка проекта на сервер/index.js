// Сборка и выгрузка проекта на сервер

// для приложений лучше использовать сервер VPS

// из файла package.json

// команда eject
// получение всех настроек webpack по сборке проекта
// необратимый процесс - назад вернуть нельзя
// npm run eject
// нужен для перенастройки проекта


// по структуре появятся доп папки
// config
// scripts

// команда build
// формирование из кусочков разрозненных файлов , правильную/оптимизированную/сжатую сборку для загрузки на сервер
// npm run build

// по структуре появятся доп папка
// build
// build -> static
// build -> static -> css
// build -> static -> js
// build -> static -> media

// именно папку build и нужно загружать на сервер
// http-serever build/


// сервер VPS Heroku
// https://dashboard.heroku.com/apps
// New -> Create new App
// Заполнить данные

// Вкладки
// Overview - послденяя активность
// Deploy -   загрузка проекта

// Установка клиента на MAC
// brew tap heroku/brew && brew install heroku

//$ heroku login
//$ cd my-project/
// не нужно
//$ git init
//$ heroku git:remote -a marveltest06062022

//$ git add .
//$ git commit -am "make it better"
//$ git push heroku master

// в итоге
// https://marveltest06062022.herokuapp.com/