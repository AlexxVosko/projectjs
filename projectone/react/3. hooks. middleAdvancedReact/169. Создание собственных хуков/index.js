
// Пользовательские хуки - механизм повторного использования логики с состоянием 
// при использовании каждый раз - все состояния и эффекты полностью изолированы
// каждый хук называть с начала как  use...

// Проблема:
// Одинаковая логика состояния необдходимо повторно использовать в нескольких компонентах


// Поэтому необходима функция которая будет избавляться от дублирования
// выносить в отдельный компонент и использовать в любом месте приложения

// функция которая содержит в себе какое то состояние
function useInputWithValidate(initialValue){
    const [value, setValue] = useState(initialValue);

    const onChange = event => {
        setValue(event.target.value);
    }

    const validateInput = () =>{
        //return text.search(/\d/) >= 0 ? true : false;
        return value.search(/\d/) >= 0
    }
    //return {value:value, onChange:onChange}
    return {value, onChange, validateInput}
}

// При запуске этой функции получаем объект 

const input = useInputWithValidate('');
const textArea = useInputWithValidate('');