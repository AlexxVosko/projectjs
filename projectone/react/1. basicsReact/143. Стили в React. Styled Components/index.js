
// Технология Css in JS

// Использование CSS кода прямо внутри  JS компонентов

// установка
// npm install --save styled-components

// Теперь можно все стилизовать прямо внутри js файлов

// Особенности
// 1) styled-components могут использовать условия внутри свои стилей
// 2) присутствуют вложенности как в sass
// 3) используется прием тегирования шаблонными строками (более продвинутая интерполяция)

// !Классы назначаются рандомно
// Пропсы/ аргументы работают точно также как и в обычных тегах
// можно создать один файл с готовыми компонентами, экспортировать и импортировать в любых частях приложения


// Как добавить доп стили?
// Использовать возможность наследования стилей от другого компонента

const BigButton = styled(Button)`
    margin: 0 auto;
    width: 245px;
`;
//<BigButton>+++</BigButton>

// Если нужно чтобы был другой тег?
// назначается аттрибут as="a" c нужным тегом внутри
// <BigButton as="a">+++</BigButton>


// Необязательно создавать стили компоненты для каждого элемента
// можно  использовать вложенность как в sass


// Поддержка своих пропсов
// Можно динамически менять при помощи коллбэк функции 
// и при помощи props которые передаются в этот компонент 

// Итог
//1)  Вендерные префексы ставятся автоматически
//2) различные компинации CSS решений будут работать без ошибок
//3) псевдоселекторы и псевдоэлементы работают точно также 
//4) можно создавать анимации 
//5) избавляемся от CSS классов - они идут как часть компонентов
    //5.1) Инкапсуляцией стилей
    //5.2) Нет необходимости использования технологии по типу bam
    //5.3) использование пропсов и условий

// Минусы
// Можно запутаться если создано слишком много тегов
// Можно реализовать стили и без этого
// рандомная генерация названий классов
// отдельно закэшироавть нельзя
// если где то ошибится то все приложение рухнет

// Импорт в файл
import styled from 'styled-components';


const EmpItem = styled.div`
    padding:20px;
    margin-bottom:15px;
    border-radius: 5px;
    box-shadow: 5px 5px 10px rgba(0,0,0, .2);

    a {
        display:block;
        margin:10px 0 10px 0;
        color: ${props => props.active ? 'orange' : 'black'}; 
    }

    input {
        display:block;
        margin-top:10px;
    }
`;

const Header = styled.h2`
    font-size:22px;
`;

// Импорт
import {Button} from './App';
// Экспорт
export const Button = styled.button`
    display:block;
    padding: 5px 15px;
    background-color: gold;
    border: 1px solid rgba(0,0,0, .2);
    box-shadow: 5px 5px 10px rgba(0,0,0, .2);
`;

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
            <EmpItem active>
                <Button onClick={this.nextYear}>{this.state.text}</Button> 
                <Header>My name is {name}, 
                    surname - {surname}, 
                    age - {years}, 
                    position - {position}
                </Header>
                <a href={link}>My profile</a>
                <form>
                    <span>Введите должность</span>
                    <input type="text" onChange={(e) => this.commitInputChanges(e,'some color')} />
                </form>
            </EmpItem>
        )
    }
}

// Синтаксис
const Wrapper = styled.div`
    width:600px;
    margin: 80px auto 0 auto;
`;

function App (){
    return (
        <Wrapper Wrapper>
            <WhoAmI name='Alex' surname="Vosko" link="linkedin.com" />
            <WhoAmI name='John' surname="Smith" link="facebook.com" />
        </Wrapper>
    )
}