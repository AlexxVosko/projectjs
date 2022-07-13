import {useState, memo, useCallback, Component, createContext, useContext} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';

const dataContext = createContext({
    mail: "name@example.com",
    text: 'some text'
});

const {Provider, Consumer} = dataContext;

// собственная функция сравнения вложенных пропсов
function propsCompare(prevProps, nextProps){
    return prevProps.mail.name === nextProps.mail.name && prevProps.text === nextProps.text;
}

const Form = memo((props) => {

    return (
        <Container>
            <form className="w-50 border mt-5 p-3 m-auto">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
                    <InputNent />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea value={props.text} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </form>
        </Container>
    )
}, propsCompare);


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


function App() {
    const [data, setData] = useState({
        mail: "name@example.com",
        mail2: {
             name: "name@example.com",
        },
        text: 'some text'
    });

    const onLog = useCallback(()=>console.log('wow'),[]);

    return (
        <Provider value={data}>
            <Form text={data.text} />
            <button 
                onClick={() => setData({
                    mail: "second@example.com",
                    mail2: {
                        name: "name@example.com",
                   },
                    text: 'another text'
                })}>
                Click me
            </button>
        </Provider>
    );
}

export default App;