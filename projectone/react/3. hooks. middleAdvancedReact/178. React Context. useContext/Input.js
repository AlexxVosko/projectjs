
import {useContext} from 'react';
import dataContext from './context';

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
            onFocus={context.forceChangeMail}
        />
    )
}

export default InputNent3;