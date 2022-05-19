// npm  init - инициализация npm
// название проекта 
// версия
// создается файл package.json - файл со всеми настройками проекта


// -- Установка пакета json-сервер
// установка может быть глобальной (-g или sudoв начале для mac) и локальной (ничего)

// также нужна указать флаг, используется при разработке или при работе
// --save-dev (тестовая)
// --save (рабочая)

// npm install json-server -g
// sudo install json-server 
// npm i json-server --save-dev

// при разворачивании сторонненго проекта - просто указать 
// npm i


fetch('http://localhost:3000/menu')
    .then(data=>data.json())
    .then(res=>console.log(res));

// запуск json-сервера 
// npx json-server --watch db.json 
