
// React-фрагмент - чтобы обойти проблемы обертки родительского тега в return (один лишний div)

// 1 способ
// Импортировать Fragment
// Использовать для замены <div></div> на <Fragment></Fragment>
// Используется при создании списков
// React.Fragment key={id}

// 2 способ
// Использовать пустой тег <> </>

import {Component , Fragment} from 'react';


class WhoAmI extends Component {
    constructor (props){
        super(props);
        this.state = {
             years : 29,
             text: '+++',
             position: ''
        }
        this.nextYear = this.nextYear.bind(this); //1
    }

    nextYear(){ //1
        this.setState(state => ({
            years: state.years + 1
        }));
    }

     // -- Использование аргументов в обработчиках событий
    commitInputChanges = (e, color) =>{
        console.log(color);
        this.setState({
            position: e.target.value
        })
    }

    render() {
        const {name, surname,link} = this.props;
        const {position, years} = this.state;
        return(
            <Fragment>
            <>
                <button onClick={this.nextYear}>{this.state.text}</button> 
                <h1>My name is {name}, 
                    surname - {surname}, 
                    age - {years}, 
                    position - {position}
                </h1>
                <a href={link}>My profile</a>
                <form>
                    <span>Введите должность</span>
                    <input type="text" onChange={(e) => this.commitInputChanges(e,'some color')} />
                </form>
            </>
            </Fragment>
        )
    }

}

function App (){
    return (
        <div className="App">
            <WhoAmI name='Alex' surname="Vosko" link="linkedin.com" />
            <WhoAmI name='John' surname="Smith" link="facebook.com" />
        </div>
    )
}