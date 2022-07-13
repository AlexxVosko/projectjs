
// Архитектура  и подходы построения приложений в React

// 1) Приложение списка сотрудников
// подход
// используется одно общее состояние в главном файле 
// затем прокидывание его методов для изменения этого состояния ниже по иерархии компонентов

// 2) Приложение Marvel
// подход
// каждый компонент хранит свое личное состояние и  меняет его по своему усмотрению


// Контекст - нужен для передачи данных ниже по иерархии компонентов не используя пропсы
// 3 подход
// Одно общее состояние и каждый компонент может с ним взаимодействовать без кучи прокинутых пропсов


// антипаттерн - как не нужно делать
<>
    <Page user={user} avatarSize={avatarSize} />
    // ... который рендерит ...
    <PageLayout user={user} avatarSize={avatarSize} />
    // ... который рендерит ...
    <NavigationBar user={user} avatarSize={avatarSize} />
    // ... который рендерит ...
    <Link href={user.permalink}>
    <Avatar user={user} size={avatarSize} />
    </Link>
</>

// Проблема - лестница пропсов (проперти дриль) - как бы сверлим свойствами сверху вниз


// Основными сущностями Контекста являются сreateContext / Provider / Consumer
import {createContext} from 'react';
// аргумент - начальное значение
const dataContext = createContext({
    mail: "name@example.com",
    text: 'some text'
});

// Provider - компонент нужен для предоставления начального значения другим компонентам находящимся ниже по иерархии
// Consumer - компонент позволяет получить данные 
const {Provider, Consumer} = dataContext;
<Provider value={data}>
    <Form mail={data.mail} text={data.text} onLog={onLog}/>
</Provider>
// Все потребители которые являются потомками  Provider будут повторно рендерится 
// как только prop value у Provider будет меняться

//Вариант 1
class InputNent extends Component {
    render(){
        return (
            <Consumer>
                {
                    value =>{
                        return (
                            <input 
                                    value={value.mail} 
                                    type="email" 
                                    className='form-control' 
                                    id="exampleFormControlInput1" 
                                    placeholder="name@example.com"
                            />
                        )
                    }
                }
            </Consumer>

        )
    }
}

//Вариант 2
//назначить новое свойство которое будет привязываеть его к опреленному контексту
class InputNent2 extends Component {
// или 
    static contextType = dataContext;
    render(){
        return (
            <input 
                value={this.context.mail} 
                type="email" 
                className='form-control' 
                id="exampleFormControlInput1" 
                placeholder="name@example.com"
            />

        )
    }
}
//или
InputNent2.contextType = dataContext;


// в функциональных компонентах используется хук useContext
// useContext - нужен для вытаскивания значений из контекста
// принимает в себя контекст на который подписываемся

import {useContext} from 'react';
// Вариант 3
const InputNent3 = () =>{

    const context = useContext(dataContext);

    return (
        <input 
            value={context.mail} 
            type="email" 
            className='form-control' 
            id="exampleFormControlInput1" 
            placeholder="name@example.com"
        />
    )
}

// 1) Если компоненты находятся в рахных файлах то как с ними взаимодействовать?
// действуют правила импорта / экспорта (файлы (Appnew.js / Form.js / Input.js / context.js))

//2) Может ли приложение использовать больше одного контекста?
// Да / Каждый контекст может давать доступ к определенным данным
// под каждый контекст создавать новый Provider

//3) Можно ли изменять даннные в Контексте (на этапе потребления)?
// Да 
function forceChangeMail(){
    setData({...data, mail:"test@gmail.com"})
}


//Когда используется Provider без value => value установится в позицию undefined
// Значение по умолчанию (файл context.js) работает тогда когда Provider не существует <></>
// методы использующиеся в компонентах (forceChangeMail) нужно вносить и по умолчанию (файл context.js) -  чтобы не было undefined

// при передаче в Provider - не передавать прямых объектов
<Provider value={{smth:'smth'}}></Provider>
