// Свойства компонентов (пропсы) - props
// props - аргумент / объект

// пример интерне-магазин карточки товаров

// Что можно передавать в пропсы?
// все что угодно

// Пропсы существуют и в классовых компонентах



// файл App.js
import './App.css';

// -- Функциональные компоненты
// требуются базовые данные для отображения
// если даже не напишим props в аргументах то все равно этот объект будет существовать
// Заготовка для заполнения данными
// Деструктуризация
function WhoAmI({name,surname,link}){
    return(
        <div>
            <h1>My name is {name}, surname - {surname}</h1>
            <a href={link}>My profile</a>
        </div>
    )
}

// передача в свойства объекта/ вывод значения функции
function WhoAmIOld(props){
    return(
        <div>
            <h1>My name is {props.name.firstName}, surname - {props.surname()}</h1>
            <a href={props.link}>My profile</a>
        </div>
    )
}

// Передача аттрибутов (пропсов) в компонент WhoAmI
// значения аттрибутов не изменяемые и идут только на чтение
// Для того чтобы применилось изменение нужно полностью перерисовать комопнент
// никогда не нужно записывать данные в самом компоненте

// делать понятными (чтобы имели смысл с точки зрения самого компонента в котором они находятся)
// внутренность компонента важнее оболочки

function App (){
    return (
        <div className="App">
            <WhoAmI name="Alex" surname="Vosko" link="linkedin.com" />
            <WhoAmI name="John" surname="Smith" link="facebook.com" />
            <WhoAmIOld name="{{firstName:'Alex'}}" surname={() => {return 'Smith'}} link="facebook.com" />
        </div>
    )
}

export default App;