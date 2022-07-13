// Компоненты высшего порядка - функции которые принимают компонент и возвращают новый компонент
// React.memo

// В JS функция может возвращать другую функцию
import {Component} from 'react';

const f1 = (a) => {
    return (b) =>{
        console.log(a + b);
    }
}

f1(1)(2); //3

//классовый

const f2 = (a) => {
    return class exdends Component {
        render (){
            return <h1>Hello</h1>
        }
    }
}

// на таком приниципе и строятся компоненты высшего порядка (НОС) (хоки)

// Отрисовка товаров для пользователей и в админ панели
// Могут быть одинаковые данные но разная верстка

// Хоки надо называться с ключевым словом with в начале 
// BaseComponent - компонент для рендеринга, который нужно обернуть логикой
// getData - функция которая добавляется внутри комопнента
const withSlider = (BaseComponent, getData) => {
    return (props) => {
        const [slide, setSlide] = useState(0);
        const [autoplay, setAutoplay] = useState(false)
    
        useEffect(() => {
            setSlide(getData());
        }, [])
    
        function changeSlide(i) {
            setSlide(slide => slide + i);
        }

        return <BaseComponent 
                    {...props} 
                    slide={slide} 
                    autoplay={autoplay} 
                    setSlide={setSlide} 
                    setAutoplay={setAutoplay} 
                />
    }
}

// Можем не только выносить часть общей логики  в отдельный компонент
// но и дополнять его

//Чем больше пропсов - тем меньше смысла в использовании Компонента высшего порядка


// Когда можно применять
// 1) Когда поведение подходит для многих компонентов
// 2) Когда не много пропсов
// 3) Общее поведение/логика для самых разных компонентов

