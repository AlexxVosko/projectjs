import { useState, useEffect} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';


// функция которая содержит в себе какое то состояние
function useInputWithValidate(initialValue){
    const [value, setValue] = useState(initialValue);

    const onChange = event => {
        setValue(event.target.value);
    }
    const validateInput = () =>{
        return value.search(/\d/) >= 0
    }
    return {value, onChange, validateInput}
}

const Form = () => {
    //const [text, setText] = useState('');
    //const [textArea, setTextArea]  = useState('');
    const input = useInputWithValidate('');
    const textArea = useInputWithValidate('');

    //const color = validateInput(text) ? 'text-danger' : null ;
    const color = input.validateInput() ? 'text-danger' : null ;

    return (
        <Container>
            <form className="w-50 border mt-5 p-3 m-auto">
                <div className="mb-3">
                    <input value={`${input.value} / ${textArea.value}`} type="text" className="form-control" readOnly/>
                    <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
                    <input 
                        //onChange={(e) => setText(e.target.value)} 
                        //value={text}
                        onChange={input.onChange} 
                        value={input.value}
                        type="email" 
                        className={`form-control ${color}`}
                        id="exampleFormControlInput1" 
                        placeholder="name@example.com"
                    />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea 
                        className="form-control" 
                        //onChange={e => setTextArea(e.target.value)}
                        onChange={textArea.onChange} 
                        value={textArea.value}
                        id="exampleFormControlTextarea1" 
                        rows="3">
                    </textarea>
                </div>
            </form>
        </Container>
    )
}

function App() {
    return (
        <Form/>
    );
}

export default App;