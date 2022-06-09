import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import MarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';

import './charList.scss';

const CharList = (props) => {

    const [char, setCharList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(210);
    const [charEnded, setCharEnded] = useState(false);

    const marvelService  = new MarvelService();


    useEffect(()=>{
        onRequest();
    },[]);


    // метод запроса на сервер
    const onRequest = (offset) =>{
        onCharLoading();
        marvelService.getAllCharacters(offset)
            .then(onCharLoaded)
            .catch(onError);
    }


    // метод после нажатая на кнопку загрузки
    const onCharLoading = () => {
        setNewItemLoading(true);
    }

    // формируем колбэк функцию для того чтобы получить предыдущее состояние
    const onCharLoaded = (newChar) => {

       let ended = false;
       if(newChar.length < 9 ){
           ended = true;
       }

       setCharList(char => [...char, ...newChar]);
       setLoading(loading => false);
       setNewItemLoading(newItemLoading => false);
       setOffset(offset => offset + 9);
       setCharEnded(charEnded => ended);

        /*this.setState(({char, offset}) =>({
            char: [...char, ...newChar], 
            loading:false,
            newItemLoading: false,
            offset: offset + 9,
            charEnded: ended
        }))*/
    }

    const onError = () =>{
        setError(true);
        setLoading(false);
    }


    // активность выбранного эдемента через ref
    const itemRefs = useRef([]);
    const focusOnItem = (id) => {
        itemRefs.current.forEach(item => item.classList.remove('char__item_selected'));
        itemRefs.current[id].classList.add('char__item_selected');
        itemRefs.current[id].focus();
    }

    function renderItem(arr) {
      const items = arr.map( (item, i) => {
            return (
                <li className="char__item"
                    ref={el => itemRefs.current[i] = el}
                    key = {item.id}
                    onClick={() => {
                        props.onCharSelected(item.id);
                        focusOnItem(i);
                    }}
                    onKeyPress={(e) => {
                        if (e.key === ' ' || e.key === "Enter") {
                            props.onCharSelected(item.id);
                            focusOnItem(i);
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

    const items = renderItem(char);
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
                onClick={()=>onRequest(offset)}
            >
                <div className="inner">load more</div>
            </button>
        </div>
    )

}

CharList.propTypes = {
    onCharSelected: PropTypes.func.isRequired
}

export default CharList;