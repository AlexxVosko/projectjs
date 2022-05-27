

// первые строчки в index.js - импорты

// import React from 'react'; - импорт библиотеки React (а точнее класс) отвечает за работу с  React
// import ReactDOM from 'react-dom/client'; позволяет работать с DOM страницей (позволяет вставлять библиотеку React)
// import './index.css'; - импорт стилей
//import App from './App'; - импорт функции
//import reportWebVitals from './reportWebVitals'; - импорт сторонней библиотеки (как быстро работает приложение)


// ReactDOM - создает корневой узел при помощи команды createRoot
// render - отрисовывает структуру (все приложение)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Команда render вызывается только один раз и в самом верху приложения

const elem = <h2>Hello World</h2>; // реакт элемент 
root.render(
    elem
);

// React может работать и без употребления JSX на чистом js но 
// createElement 3 аргумента
// 1 - создание тега
// 2 - класс элемента - объект (если нет то указать null)
// 3 - содержимое тега

const elem2 = React.createElement('h2', {className:'gree'}, 'Hello World');
root.render(
    elem2
);

// createElement это метод и вернет структуру которая и создает элемент - проходит через VirtualDOM
const element = {
  type:'h2',
  props:{
    classname:'gree',
    children: 'Hello World'
  }
}

// Нужно ли библиотеку React импортироваитб в каждый отдельный файл?
// !!нет - из за новой технологии компилирования
// Но в старых версиях React это делать нужно 

//!!!!!!!!!!
//1) Если элемент имеет многострочную структуру то необходимо оборачивать в ()
//2) Когда создается многострочный элемент у него должен быть только оди н родитель
//3) Самозакрывающиеся теги нужно закрывть /> - иначе будет ошибка
//4) если нужно тег без содержимого можно писать таким образом - <button />
//5) {} - чтобы вписать переменные или какие либо js опреации 

// Исключение
// внутрь конструкции нельзя поместить объекты
//<p>{new Date()}</p> - ошибка
// {{}}  - ошибка

// в React все значения экранируются и переводятся в строки
// {[a,b]} - на выходе будет конкатенация элементов (ab)

// С аттрибутам и классами есть свои особенности
// 1) Аттрибуты пишутся в формате camelCase - tabIndex
// 2) специальные аттрибуты не совподают по описанию с обычными из Html (className и htmlFor)
  // из за того что слова class и for  зарезервированы 


const text = 'Hello World';
const elem3 = (
    <div>
        <h2 className="red" >Текст: {text} {2+2}</h2>
        <label htmlFor="text"></label>
        <input type="text" /> 
        <button tabIndex="0">Click!</button>
        <button />
    </div>
);

// -- как настроить Emmet для быстрой верстки для React
// View -> Command Pallette -> Extensions -> Emmet -> Include Languages -> AddItem
// Вписать javascript - javascriptreact

