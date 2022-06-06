
//1 Внутри какого метода жизненного цикла можно делать запросы на сервер?
//Ответ :
// componentDidMount()
// componentDidUpdate()
// componentDidWillUnmount()

//2 Что не вызывает обновление компонента?
//Ответ :
// componentDidUpdate()
// этот хук сам срабатывает после обновления компонента, но он его не вызывает

//3 Библиотека propTypes позволяет проверять свойства на то, что...
//Ответ :
// они являются функцией
// они являются React-элементом
// они соответствуют определенной структуре объекта

//4 Почему нельзя забывать про аргументы prevProps и prevState в хуке жизненного цикла componentDidUpdate() ?
//Ответ :
// Если не сравнивать приходящие новые данные со старыми, то можно получить бесконечный цикл или лишние действия

//5 Как правильно импортировать и использовать изображение в компоненте?
//Ответ :
import img from 'img.png';
<img src={img}/>

//6 В чем разница между componentDidCatch() и static getDerivedStateFromError() ?
//Ответ :
// componentDidCatch позволяет выполнять любые операции после того, как в компоненте произошла ошибка: менять стэйт, делать запросы, логирование и тд

//7 Почему этот код будет давать ошибку?

class Greeting extends React.Component {
    render() {
      return (
        <h1>Привет, {props.name}</h1>
      );
    }
  }
  // Задание значений по умолчанию для пропсов:
  Greeting.defaultProps = {
    name: 'Незнакомец'
  };

//Ответ :
//Пропущен контекст вызова при использовании свойства name

//8 Прием props.children позволяет в родительском компоненте...
//Ответ :
// вставлять любые элементы или компоненты, переданные в него при его вызове. При этом есть возможность модифицировать их по своему усмотрению.


//9 Какую ошибку допустил разработчик при разработке компонента-таймера в большом приложении?

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
   
    componentDidMount() {
      setInterval(
        () => this.tick(),
        1000
      );
    }
   
    tick() {this.setState({date: new Date()});}
   
    render() {
      return (
        <div>
          <h1>Привет, мир!</h1>
          <h2>Сейчас {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }

//Ответ :
//Нет хука componentWillUnmount, который бы остановил таймер при удалении этого компонента со страницы

//10 В чем разница между приемом с props.children и render props?
//Ответ :
// props.children позволяет передавать только определенный компонент/элемент, 
// а render props позволяет передать функцию, которая уже может использовать в качестве аргумента 
// любые данные (в том числе и стэйт компонента)

//11 Что такое ref?
//Ответ :
// Это ссылка на элемент в DOM-дереве

//12 Порталы нужны для того, чтобы
//Ответ :
//рендерить определенные компоненты в место, которое находится вне DOM-иерархии родительского компонента

//13 Почему данный код выдаст ошибку? (Для 17й версии реакта, на ReactDOM.render не обращаем внимания)
const appRoot = document.getElementById('app-root');
const modalRoot = document.getElementById('modal-root');
 
class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }
 
  componentDidMount() {
    modalRoot.appendChild(this.el);
  }
 
  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }
 
  render() {
    return ReactDOM.createPortal(this.props.children, this.el);}
}
 
class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clicks: 0};
    this.handleClick = this.handleClick.bind(this);
  }
 
  handleClick() {    
      this.setState(state => ({      clicks: state.clicks + 1    }));  }
 
  render() {
    return (
      <div onClick={this.handleClick}>        
         <p>Количество кликов: {this.state.clicks}</p>
        <Modal>          
           <Child />
        </Modal> 
      </div>
      <p>
          Откройте DevTools браузера,
          чтобы убедиться, что кнопка
          не является потомком блока div
          c обработчиком onClick.
      </p>
    );
  }
}
 
function Child() {
    return (
        <div className="modal">
           <button>Кликните</button>    
        </div>
  );
}
 
ReactDOM.render(<Parent />, appRoot);

//Ответ :
// Компонент Parent возвращает неправильный формат верстки в JSX
// Одно из базовых правил JSX нарушено: нельзя возвращать два блока сразу, должна быть 1 обертка (любой тэг или react-фрагмент))

//14 Какая ошибка допущена в этом коде?
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
   
      this.inputRef = React.createRef();  
    }
   
    render() {
      return <input type="text" ref={this.inputRef} />;  }
   
    componentDidMount() {
      this.inputRef.current.focus();  }
  }

//Ответ :
// Ошибок нет
