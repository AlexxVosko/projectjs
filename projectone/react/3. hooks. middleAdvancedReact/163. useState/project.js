  
// Функциональный компонент

  // 1) Начальное значение счетчика должно передаваться через props
  // 2) INC и DEC увеличивают и уменьшают счетчик соответственно на 1. Без ограничений, но можете добавить границу в -50/50. По достижению границы ничего не происходит
  // 3) RND изменяет счетчик в случайное значение от -50 до 50. Конструкцию можете прогуглить за 20 секунд :) Не зависит от предыдущего состояния
  // 4) RESET сбрасывает счетчик в 0 или в начальное значение из пропсов. Выберите один из вариантов

// решение
//  https://codepen.io/AlexVosko/pen/vYdVpOx

const App = (props) => {
    const [counter, setCounter] = React.useState(props.counter);
    
    const plusCounter = () => {
       if (counter < 50) {
        setCounter(counter => counter + 1)
      }
    }
    
    const minusCounter = () => {
       if (counter > -50) {
        setCounter(counter => counter - 1)
      }
    }
    
    const randomNum = () =>{
      setCounter((Math.random()* (50 - -50) + -50).toFixed(0));
    }
    
    const resetNum = () => {
       //setCounter(counter => 0)
       setCounter(props.counter)
    }
    
    
   
     return (
        <div class="app">
          <div class="counter">{counter}</div>
          <div class="controls">
            <button onClick={plusCounter}>INC</button>
            <button onClick={minusCounter}>DEC</button>
            <button onClick={randomNum}>RND</button>
            <button onClick={resetNum}>RESET</button>
          </div>
        </div>
      )
  }
  
  ReactDOM.render(<App counter={0}/>, document.getElementById('app'));

