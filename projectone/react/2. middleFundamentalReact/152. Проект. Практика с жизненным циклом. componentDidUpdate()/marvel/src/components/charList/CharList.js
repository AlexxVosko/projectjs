import { Component } from 'react';
import MarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';

import './charList.scss';
//import abyss from '../../resources/img/abyss.jpg';

class CharList extends Component {

    state ={
        char: [],
        loading: true,
        error: false
    }

    marvelService  = new MarvelService();

    onCharLoaded = (char) => {
        this.setState({
            char, 
            loading:false
        }) 
    }

    onError = () =>{
        this.setState({
            loading:false,
            error: true
        })
    }

    updateChar = () => {
        this.marvelService
            .getAllCharacters()
            .then(this.onCharLoaded)
            .catch(this.onError);
    }

    componentDidMount(){
        this.updateChar();
    }

    renderItem(arr){
      const items = arr.map( (item) => {
            return (
                <li className="char__item"
                    key = {item.id}
                    onClick={() => this.props.onCharSelected(item.id)}
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
        const {char, loading, error} = this.state;

        const items = this.renderItem(char);
        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> :  null;
        const content = !(loading || error) ? items : null;

        
        return (
            <div className="char__list">
                    {errorMessage}
                    {spinner}
                    {content}
                <button className="button button__main button__long">
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }

}


export default CharList;