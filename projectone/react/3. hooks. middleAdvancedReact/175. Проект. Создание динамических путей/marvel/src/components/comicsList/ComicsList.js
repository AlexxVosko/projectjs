import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import useMarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';

import './comicsList.scss';
//import uw from '../../resources/img/UW.png';
//import xMen from '../../resources/img/x-men.png';

const ComicsList = () => {

    const [char, setCharList] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(0);
    const [charEnded, setCharEnded] = useState(false);

    const {loading, error, getAllComics} = useMarvelService();

    useEffect(()=>{
        onRequest(offset,true);
    },[]);

    const onRequest = (offset, initial) =>{
        initial ? setNewItemLoading(false): setNewItemLoading(true);
        getAllComics(offset)
            .then(onCharLoaded);
    }

    console.log(char);

    const onCharLoaded = (newChar) => {
        let ended = false;
        if(newChar.length < 8 ){
            ended = true;
        }
 
        setCharList(char => [...char, ...newChar]);
        setNewItemLoading(newItemLoading => false);
        setOffset(offset => offset + 8);
        setCharEnded(charEnded => ended);
     }


     const itemRefs = [];

    function renderItem(arr) {
      const items = arr.map( (item, i) => {
            return (
                <li className="comics__item"
                    key = {item.id}
                >
                    <Link to={`/comics/${item.id}`}>
                        <img 
                            src={item.thumbnail} 
                            alt={item.title} 
                            style={item.imgStyle} 
                            className="comics__item-img"
                        />
                        <div className="comics__item-name">{item.title}</div>
                        <div className="comics__item-price">{`${item.price ? item.price+'$' : ''}`}</div>
                    </Link>
                </li>
            )
        })

        return (
            <ul className="comics__grid">
                {items}
            </ul>
        )
    }


    const items = renderItem(char);
    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading && !newItemLoading ? <Spinner/> :  null;

    return (
        <div className="comics__list">
                {errorMessage}
                {spinner}
                {items}
            <button className="button button__main button__long"
                    style={{'display': charEnded ? 'none': 'block'}}
                    disabled={newItemLoading}
                    onClick={()=>onRequest(offset)}
            >
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

export default ComicsList;