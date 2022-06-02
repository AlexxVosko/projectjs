import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import MarvelService from './services/MarvelService';

import './style/style.scss';

// Экземпляр класса
const marvelService  = new MarvelService();
marvelService.getAllCharacter(1011052).then( res => console.log(res));
marvelService.getAllCharacters().then( res => console.log(res));
marvelService.getAllCharacters().then( res => res.data.results.forEach(element => console.log(element.name)));



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />ddd
  </React.StrictMode>
);


/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/