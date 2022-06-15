import {useState, memo, PureComponent, Component} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';


class Form extends PureComponent {
    render(){
        <Container>
            <form className="w-50 border mt-5 p-3 m-auto">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
                    <input value={this.props.mail} type="email" className='form-control' id="exampleFormControlInput1" placeholder="name@example.com"/>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea value={this.props.text} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </form>
        </Container>
    }
}

class Form2 extends Component {

    shouldComponentUpdate(nexrProps){
        if(this.props.mail.name === nexrProps.mail.name){
            return false
        }else{
            return true
        }
    }
}


// собственная функция сравнения вложенных пропсов
function propsCompare(prevProps, nextProps){
    return prevProps.mail.name === nextProps.mail.name && prevProps.text === nextProps.text;
}


function App() {
    const [data, setData] = useState({
        mail: "name@example.com",
        mail2: {
             name: "name@example.com",
        },
        text: 'some text'
    });

    return (
        <>
            <Form mail={data.mail} text={data.text}/>
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
        </>
    );
}

export default App;