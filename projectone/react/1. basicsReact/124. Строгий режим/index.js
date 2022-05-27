
// Strict mode похож по своему функционалу на директиву use strict
<React.StrictMode>
</React.StrictMode>

// Компонент StrictMode - инструмент для обнаружения потенциальных поблем в приложении
// Не рендерит юзер интерфейса
// просто существует внутри Реакта

// Использовать можно где угодно

// Помогает обнаружить устаревшие и небезопастные конструкции
// и сообщать о некторых побочных эффектах
// Работает в режиме разработки на продакшн работать не будет



//  достать
import React, {StrictMode} from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// в файле App.js

import {Component, StrictMode} from 'react';

const Header = () =>{
    return <h2>Hello!</h2>
};

const Field = () =>{
    const holder = 'Enter here';
    const styleField ={
        width:'300px'
    };
    return <input 
            placeholder={holder} 
            type="text" 
            style={styleField}/>
};

function Btn() {
    const txt = 'Log in';
    const res = () =>{
        return 'Log in';
    };
    const p  = <p>Log in</p>;
    const logged = true;
    return <button>{logged ? 'Enter' : txt}</button>
};

function App() {
  return (
    <div className="App">
        <StrictMode>
            <Header/>
        </StrictMode>
        <Field/>
        <Btn/>
    </div>
  );
}

export default App;
