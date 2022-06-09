
// Практика собственные хуки
// Решение - https://codepen.io/AlexVosko/pen/RwQeeNB

function useChangeButn(initialValue){
    const [value, setValue] = React.useState(initialValue);
    
    const incCounter = () =>{
      if (value< 50) {
          setValue(value => value + 1)
      }
    }
    
    const decCounter = () => {
        if (value > -50) {
          setValue(value => value - 1)
        }
     }
    
     const rndCounter = () => {
        setValue(+(Math.random() * (50 - -50) + -50).toFixed(0))
     }
  
     const resetCounter = () => {
        setValue(initialValue)
     }
     
     return {value, incCounter, decCounter, rndCounter, resetCounter}
    
}
  
  
  const Counter = (props) => {
      const counter = useChangeButn(props.counter);
  
      return (
        <div className="component">
          <div className="counter">{counter.value}</div>
          <div className="controls">
            <button onClick={counter.incCounter}>INC</button>
            <button onClick={counter.decCounter}>DEC</button>
            <button onClick={counter.rndCounter}>RND</button>
            <button onClick={counter.resetCounter}>RESET</button>
          </div>
        </div>
      )
  }
  
  const RndCounter = (props) => {
     const counter = useChangeButn(props.counter);
      return (
        <div className="component">
          <div className="counter">{counter.value}</div>
          <div className="controls">
            <button onClick={counter.rndCounter}>RND</button>
            <button onClick={counter.resetCounter}>RESET</button>
          </div>
        </div>
      )
  }
  
  const App = () => {
      return (
          <>
              <Counter counter={0}/>
              <RndCounter counter={5}/>
          </>
      )
  }
  
  ReactDOM.render(<App />, document.getElementById('app'));