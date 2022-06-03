
// Основная мысль про передачу данных между компонентами
// нужно сформировать данные из одного компонента -> передать в родительский компонент App 
// а из родительского компонента App  передать в другой 

//!!!! общий шаблон
//1) описание свойстыва в state
//2) создание метода чтобы устанавливать это свойство через аргумент
//3) передача метода из компонента в родительский App (CharList onCharSelected={this.onCharSelected)
//4) передача из родительского компонента App результат в другой компонент charId={this.state.selectedChar}


import { Component } from "react";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";

import decoration from '../../resources/img/vision.png';

class App extends Component {

    // создание свойства в state
    state = {
        selectedChar: null
    }

    // создание метода
    onCharSelected = (id) =>{
        this.setState({
            selectedChar:id
        })
    }
    render(){
        return (
            <div className="app">
                <AppHeader/>
                <main>
                <RandomChar/>
                      <div className="char__content">
                          <CharList onCharSelected={this.onCharSelected}/>
                          <CharInfo charId={this.state.selectedChar} />
                      </div>
                    <img className="bg-decoration" src={decoration} alt="vision"/>
                </main>
            </div>
        )
    }
}
export default App;


// хук componentDidUpdate(prevProps, prevState)
// принимает в себя  аргументы
// prevProps - предыдущие пропсы 
// prevState - предыдущие состояния
// для взаимодействия с предыдущими данными

componentDidUpdate(prevProps){
    // чтобы не создавать бесконечный цикл + не делать запрос если клик на одну и ту же карточку
   if(this.props.charId !== prevProps.charId){
        this.updateChar();
   }

}
