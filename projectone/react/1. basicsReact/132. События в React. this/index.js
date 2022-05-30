
// чтобы назначить обработчик события в React нужно прописать событие в качестве аргумента в формате camelCase
// addEventListener - вызывать нигде не нужно, React это делает сам
//!! отмена событий только e.preventDefault()

// Когда передается метод в обработчик события - прописываем this. - для указания экземпляра класса
// одинаково что для пропсов что для стэйтов
// this- один экземпляр класса

// Когда сробатывает событие - контекст теряется
// это происходит из за того что функция (commitInputChanges()) вызывается внутри другого метода (render())
// this становится undefined

// -- Варианты исправления
//1) через конструкцию bind
    // this.nextYear = this.nextYear.bind(this);
   //  слева обычное св-во которое будет у экземпляра класса 
   // справа - идет привязка к конкретному экземпляру класса
// неудобство - если будут увеличиваться количество методов внутри класса их всех придется байндить

//2) использование полей классов и стрелочные функции

//3) вызывать события через анонимную стрелочную функцию
 <button onClick={() => this.nextYear()}>{this.state.text}</button> 

class WhoAmI extends Comonent {
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
            <div>
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
            </div>
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