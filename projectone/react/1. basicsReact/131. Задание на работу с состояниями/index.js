
  // 1) Начальное значение счетчика должно передаваться через props
  // 2) INC и DEC увеличивают и уменьшают счетчик соответственно на 1. Без ограничений, но можете добавить границу в -50/50. По достижению границы ничего не происходит
  // 3) RND изменяет счетчик в случайное значение от -50 до 50. Конструкцию можете прогуглить за 20 секунд :) Не зависит от предыдущего состояния
  // 4) RESET сбрасывает счетчик в 0 или в начальное значение из пропсов. Выберите один из вариантов

// Решение
// https://codepen.io/AlexVosko/pen/LYQdEvE


class App extends React.Component {
    constructor(props) {
      super(props);
      // 1)
      this.state = {
        counter: this.props.counter
      }
    }
    
    //2)
    nextValue = () => {
        if (this.state.counter < 50) {
            this.setState(state => ({
                counter: state.counter + 1
            }));
        }
    }
    prevValue = () => {
        if (this.state.counter > -50) {
            this.setState(state =>({
                counter: state.counter - 1
            }));
        }
    }
    // 3)
    random = () => {
        this.setState(state =>({
           counter: (Math.random() * (50 - -50) + -50).toFixed(0)
        }));
    }
    // 4)
    reset = () => {
        this.setState(state =>({
           counter: this.props.counter
        }));
    }
    
    render() {
    //1)
    const {counter} = this.state;
      return (
        <div class="app">
          <div class="counter">{counter}</div> 
          <div class="controls">
            <button onClick={this.nextValue}>INC</button>
            <button onClick={this.prevValue}>DEC</button>
            <button onClick={this.random}>RND</button>
            <button onClick={this.reset}>RESET</button>
          </div>
        </div>
      )
    }
  }
  
  ReactDOM.render(<App counter={0}/>, document.getElementById('app'));
  
