// Маршрутизация  (Роутинг)

// Загружаются без перезагрузки страниицы и без перехода по ссылке

// Принцип конструктора в библиотеках по типу Реакта
// За рутинг отвечает отдельная библиотека React Router

// 6 версия React Router не стабильна
// Большая часть проектов используют 5 или 4 версюю

// установка последней версии
// npm i react-router-dom --save

// установка 5ой версии
// npm i react-router-dom@5.3.0 --save

// импорт в проект
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

// компонент Router - оборачивает все ссылки и страницы (маршруты) по которым переходит пользователь
// компонент Route - маршрут - будет грузиться если в url будет определенная ссылка
// аттриибут path - указание ссылки

// компонент Switch - загружает только один необходимый компонент на странице
// так как а аттрибуте path идет склейка для отображения


// Способы избежаниия 
//1)  path="/" -  ставить в самом конце
//2) использовать аттрибут exact - говорит о том что только полное совподение пути будет рендерить компонент
//<Route exact path="/"></Route>
//<Route exact path="/comics"></Route>

// импорт компонента ссылок
import {Link} from 'react-router-dom';
//<Link to="/">Characters</Link>
//<Link to="/comics">Comics</Link>

// При клике на ссылку компонента Link, Router замечает это действие и после этого
// начинает искать подходящий Route (на аттриибут path)

// Компонент редирект Redirect
<Route exact path="/">
  {loggedIn ? <Redirect to="/dashboard" /> : <PublicHomePage />}
</Route>

// Компонент NavLink
// есть возможность стилизации активной ссылки
// <NavLink to="/about">About</NavLink>
