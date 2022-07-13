import {useState} from 'react';
import './App.css';
import Form from './Form';
import dataContext from './context';

const {Provider} = dataContext;

function App() {
    const [data, setData] = useState({
        mail: "name@example.com",
        mail2: {
             name: "name@example.com",
        },
        text: 'some text',
        forceChangeMail: forceChangeMail
    });

    const onLog = useCallback(()=>console.log('wow'),[]);

    function forceChangeMail(){
        setData({...data, mail:"test@gmail.com"})
    }

    return (
        <Provider value={data}>
            <Form text={data.text} />
            <button 
                onClick={() => setData({
                    mail: "second@example.com",
                    mail2: {
                        name: "name@example.com",
                   },
                    text: 'another text',
                    forceChangeMail: forceChangeMail
                })}>
                Click me
            </button>
        </Provider>
    );
}

export default App;