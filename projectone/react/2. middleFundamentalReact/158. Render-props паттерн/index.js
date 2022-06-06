
// вызывать из вне компонента его render()

// обычный render() в классовых компонентах / return в функциональных или его части
// делается это в пропсах

// компонент котрый зависит от состояния своего родителя
// чтобы они были независимы друг от друга
// компонент  Message  находится внутри компонента Counter и использует его состояние




const Message = (props) => {
    return(
        <h2>The counter is {props.counter}</h2>
    )
}

class Counter extends Component{
    state = {
        counter : 0
    }

    changeCounter = () =>{
        this.setState(({counter}) => ({
            counter: counter+1
        }))
    }

    render() {
        return(
            <>
                <button
                className={"btn btn-primary"}
                onClick={this.changeCounter}
                >
                    Click me
                </button>
                {this.props.render(this.state.counter)}
            </>
        )
    }
}

// Render-props
// т/е мы должны передать в свойства компонента что то , что будет рендерить структуру внутри компонента (функция)
// как  property в компонент Counter передаем функцию которая будет запускать внутри этого комопнента и чтото делать

// можем передавать сколько угодно property и вызывать в нужных местах
// можно делать несколько вызовов функции


function App() {
    return (
      <Wrapper>
        <Counter render={counter => (
            <Message counter={counter}/>
        )}/>
      </Wrapper>
    )
}

function App2() {
    return (
      <Wrapper>
  
          <Counter some={counter => (
              <Message counter={counter}/>
          )}/>
      </Wrapper>
    );
  }

// Итог
// Задача : связать 2 отдельных компонента независящих друг от друга без потери гибкости 
// Решение: прием Render-props
    // во время вызова компонента Counter передаем проп render , который внутри себя содержит коллбэк функцию
    // она принимает в себя какой то аргумент и возвращает другой компонент Message 
// Внутри комоппнента Counter вызываем переданную функцию с требуемым состоянием в качестве аргумента




// Реальный пример
// Многостраничное приложение - для разделения на страницы используется спец. комопнент
// Этот компонет не знает что будет в себе содержать


