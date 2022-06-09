// npm install --save react react-do

//  импорт хука useState
import {useState} from 'react';

// useState(); - возвращает массив из двух элементов 
// 1 -  state (состояние)
// 2 - функция которая будет менять это состояние

const [slide, setSlide] = useState(0); 
// во внутрь переменной slide можно поместить объекты/ строки/ числа и т.д.
// Грубо говоря состояние выносится в отдельную переменную
// в отличие о классового компонента где состояние это объект

// Использование состояние из useState

// Когда состояние зависит от предедыщего необходимо передавать коллбэк функцию
// будет учитываться асинхронность

function changeSlide(i) {
    setSlide(slide + i);
    setSlide(slide + i);
}
// на выходе будет 1
changeSlide(0); //1

// поэтому
function changeSlide(i) {
    setSlide(slide => slide + i);
    setSlide(slide => slide + i);
}
// на выходе будет 2
changeSlide(0); //2

// Состояние в качестве одной переменной
const [state, setState] = useState({slide:0, autoplay:false});

// !!! Функция состояния заменит те значения что переданы
// поэтому если это объект нужно писать все его свойства полностью

function changeSlide(i) {
    setState(state => ({...state, slide: state.slide + i}));
}

//  Но рекоммендовано разбивать состояния на отдельные элементы (подробнее в App.js)



// Оптимизационный вопрос по вычислению начального состояния
// проблема: если начальное состояние будет вычисляться в какой то операции 
    // то мы можем передавать во внутрь useState() (но только название функции а не вызов)
    // (подробнее в App.js)

    const calcValue = () => {
        console.log('random');

        return Math.random() * (50 -1) + 1;
    }

    const [slide1, setSlide1] = useState(calcValue);
    const [slide2, setSlide2] = useState(() => calcValue()); //  таким образом можно передавать аргументы





// Весь компонент
const Slide = (props) => {

    const slideStateArray = useState();
    const [slide, setSlide] = useState(0);

    const [autoplay, setAutoplay] = useState(false);
    const [state, setState] = useState({slide:0, autoplay:false});

    // 
    function changeSlide(i) {
        setState(state => ({...state, slide: state.slide + i}));
    }

    function toggleAutoplay() {
        setState(state => ({...state, autoplay: !state.autoplay}));
    }


     return (
         <Container>
             <div className="slider w-50 m-auto">
                 <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
                 <div className="text-center mt-5">Active slide {state.slide} <br/> 
                 {autoplay ? 'auto' : null}
                 </div>
                 <div className="buttons mt-3">
                     <button 
                         className="btn btn-primary me-2"
                         onClick={() => changeSlide(-1)}>-1</button>
                    <button 
                         className="btn btn-primary me-2"
                         onClick={() => changeSlide(1)}>+1</button>
                     <button 
                         className="btn btn-primary me-2"onClick={state.toggleAutoplay}>
                             toggle autoplay</button>
                 </div>
             </div>
         </Container>
     )
 }


function App() {
  return (
      <>
        <Slide/>
      </>
    );

}

export default App;
