
// batching - когда React объединяет несколько изменений состояний в одну операцию
// для улучшения производительности
// setState / комбинация команд из хуков
// чтобы делать меньше перерендерингов страницы

// если функции по изменению состояния выполняются асинхронно
// то batching работать не будет

// с 18 версии Реакта - новый механизм батчинга
// он будет работать и в асинхронном коде

// ОБНОВЛЕНИЕ ВЕРСИИ РЕАКТА
// npm i react@latest react-dom@latest --save

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// вернуть старое поведение
import {flushSync} from 'react';

// разъединение команд по изменению состояния
// помещать в отдельные вызовы flushSync (аргумент коллбэк )

setTimeout(()=>{

    flushSync(()=> {
        setCount(c=>c+1);
    })
    flushSync(()=> {
        setFlag(f=>!f);
    })

},100);

