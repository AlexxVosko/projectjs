
// React Transition Group -  библиотека для работы с анимацией (плавный переход между чем то)
// Основная задача библиотеки - Отслеживает состояние появления/исчезновения элементов

// Внутри 4 компонента для работы

// Компонент Transition
// Базовый компонент - разработан так чтобы подстраиваться под платформу и необязательно должен работать с CSS анимациями

// Компонент CSSTransition
// разработан для работы с CSS анимациями через CSS классы
//в classNames="" прописать классы которые будут влиять на состояние компонента

// Оба компонента работают такм образом что принимают один дочерний компонент
// и у себя устанавливают 2 базовых свойства in, timeout

// timeout - время анимации за какое оно произойдет
// in - контролирует показ элемента на странице (true/false)
// позволяет ослеживать 4 стадии компонента и 6 событий
const Fade = ({ in: inProp }) => (
    <Transition in={inProp} timeout={duration}>
      {state => (
        <div style={{
          ...defaultStyle,
          ...transitionStyles[state]
        }}>
          I'm a fade Transition!
        </div>
      )}
    </Transition>
  );

// Алгоритм 
// когда prop in в положении false (не показывается) с переходом в true (инициация показа элемента) то будут происходить 3 последовательных события
// начальная инициация (onEnter)
// длительное действие (onEntering)
// элемент показан на странице (onEntered)
// 2 состояния
// entering
// entered

// true -> false
// сробатывает событие onEnter -> состояние entering -> в начале entering  срабатывает onEntering -> вызываем custom function (анимацию) ->
// -> состояние entered -> можем вызывать метод onEntered

// когда prop in в положении true (инициация показа элемента)  с переходом в false (не показывается)  то будут происходить 3 последовательных события
// начальная инициация скрытия (onExit)
// продолжительночть анимации (onExiting)
// элемент скрыт (onExited)
// 2 состояния
// exiting
// exited

// каждое из них можно отследить

//Props
// unmountOnExit
// Удаление элемента из DOM дерева


// Разница между Transition и СSSTransition
// Transition ->  блок для рендеринга рендерит функция 
// СSSTransition -> функция не нужна для блока рендеринга 

// компоненты SwitchTransition и TransitionGroup  - обертки
// оборачивают один из базовых компонентов
// SwitchTransition - устанавливает режим рендеринга (проп mode)
// mode : out-in -  дожидается пока скроется старый и только потом поялвяется
// mode : in-out -   yt дожидается пока скроется старый появляется только потом скрывается старый

//TransitionGroup  - оборачивает большое количество базовых компонентов
//чек лист добавление/удаление из списка с анимацией

//для более сложных анимаций использовать библиотеку React-Motion

//Анимация при роутинге
//https://reactcommunity.org/react-transition-group/with-react-router