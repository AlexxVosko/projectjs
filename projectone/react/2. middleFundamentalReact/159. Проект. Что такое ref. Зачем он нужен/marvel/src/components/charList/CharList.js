import { Component } from 'react';
import PropTypes from 'prop-types';

import MarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';

import './charList.scss';
//import abyss from '../../resources/img/abyss.jpg';

class CharList extends Component {

    state = {
        char: [],
        loading: true,
        error: false,
        newItemLoading: false,
        offset: 210,
        charEnded:false,
        itemSelected: false
    }

    marvelService  = new MarvelService();

    componentDidMount(){
        this.onRequest();
    }

    // метод запроса на сервер
    onRequest = (offset) =>{
        this.onCharLoading();
        this.marvelService.getAllCharacters(offset)
            .then(this.onCharLoaded)
            .catch(this.onError);
    }


    // метод после нажатая на кнопку загрузки
    onCharLoading = () => {
        this.setState({
            newItemLoading: true
        }) 
    }

    // формируем колбэк функцию для того чтобы получить предыдущее состояние
    onCharLoaded = (newChar) => {

       let ended = false;
       if(newChar.length < 9 ){
           ended = true;
       }

        this.setState(({char, offset}) =>({
            char: [...char, ...newChar], 
            loading:false,
            newItemLoading: false,
            offset: offset + 9,
            charEnded: ended
        }))
    }


    onError = () =>{
        this.setState({
            loading:false,
            error: true
        })
    }


    // активность выбранного эдемента через ref
    itemRefs = [];
    setRef = (ref) => {
        this.itemRefs.push(ref);
    }
    focusOnItem = (id) => {
        this.itemRefs.forEach(item => item.classList.remove('char__item_selected'));
        this.itemRefs[id].classList.add('char__item_selected');
        this.itemRefs[id].focus();
    }



    renderItem(arr){
      const items = arr.map( (item, i) => {
            return (
                <li className="char__item"
                    ref={this.setRef}
                    key = {item.id}
                    onClick={() => {
                        this.props.onCharSelected(item.id);
                        this.focusOnItem(i);
                    }}
                    onKeyPress={(e) => {
                        if (e.key === ' ' || e.key === "Enter") {
                            this.props.onCharSelected(item.id);
                            this.focusOnItem(i);
                        }
                    }}
                >
                    <img 
                    src={item.thumbnail} 
                    alt={item.name} 
                    style={item.imgStyle} 
                    />
                    <div className="char__name">{item.name}</div>
                </li>
            )
        })

        return (
            <ul className="char__grid">
                {items}
            </ul>
        )
    }

    render(){
        const {char, loading, error, newItemLoading, offset, charEnded} = this.state;

        const items = this.renderItem(char);
        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> :  null;
        const content = !(loading || error) ? items : null;

        
        return (
            <div className="char__list">
                    {errorMessage}
                    {spinner}
                    {content}
                <button 
                    className="button button__main button__long"
                    style={{'display': charEnded ? 'none': 'block'}}
                    disabled={newItemLoading}
                    onClick={()=>this.onRequest(offset)}
                >
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }

}

CharList.propTypes = {
    onCharSelected: PropTypes.func.isRequired
}

export default CharList;