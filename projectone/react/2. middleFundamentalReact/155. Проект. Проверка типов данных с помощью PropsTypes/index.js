
// Динамическая и статическая типизация

// Технология PropsTypes - позволяет следить за типами данных в props внутри компонентов
// т/е правила для проверки props
// если они не будут подходить то показываем уведомление в терминале
// библиотека  работает в режиме разработки

// Установка
// npm install --save prop-types

// Установка в файл
import PropTypes from 'prop-types';

// перед экспортом компонента

// charId - props который проверяем
// PropTypes.number - запись проверки на число
CharInfo.propTypes ={
    charId: PropTypes.number
}

export default CharInfo;


//! Можно ли при помощи PropsTypes устанавливать props по умолчанию
// да

class Greeting extends React.Component {
    render() {
      return (
        <h1>Привет, {this.props.name}</h1>
      );
    }
  }
  
  // Задание значений по умолчанию для пропсов:
  Greeting.defaultProps = {
    name: 'Незнакомец'
  };
  
  // Отрендерит "Привет, Незнакомец":
  ReactDOM.render(
    <Greeting />,
    document.getElementById('example')
  );





MyComponent.propTypes = {
    // Можно объявить проп на соответствие определённому JS-типу.
    // По умолчанию это не обязательно.
    optionalArray: PropTypes.array,
    optionalBool: PropTypes.bool,
    optionalFunc: PropTypes.func,
    optionalNumber: PropTypes.number,
    optionalObject: PropTypes.object,
    optionalString: PropTypes.string,
    optionalSymbol: PropTypes.symbol,

    // Можно добавить`isRequired` к любому приведённому выше типу,
  // чтобы показывать предупреждение,
  // если проп не передан
  requiredFunc: PropTypes.func.isRequired,

  // Обязательное значение любого типа
  requiredAny: PropTypes.any.isRequired,

// Можно добавить собственный валидатор.
  // Он должен возвращать объект `Error` при ошибке валидации.
  // Не использовать `console.warn` или `throw` 
  // - это не будет работать внутри `oneOfType`
  customProp: function(props, propName, componentName) {
    if (!/matchme/.test(props[propName])) {
      return new Error(
        'Проп `' + propName + '` компонента' +
        ' `' + componentName + '` имеет неправильное значение'
      );
    }
  },



}
