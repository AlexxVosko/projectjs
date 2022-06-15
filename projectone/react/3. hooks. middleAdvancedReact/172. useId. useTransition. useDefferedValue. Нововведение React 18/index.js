
// хук useId - позволяет создоавать уникальные идентификаторы
const id = useId();
//! не должен применяться для аттрибута key

// можно использовать в формировании верстки
function NameFields() {
    const id = useId();
    return (
      <div>
        <label htmlFor={id + '-firstName'}>First Name</label>
        <div>
          <input id={id + '-firstName'} type="text" />
        </div>
        <label htmlFor={id + '-lastName'}>Last Name</label>
        <div>
          <input id={id + '-lastName'} type="text" />
        </div>
      </div>
    );
  }
// но не будет работать querySelectorAll

// хуки для подключение сторонних бибилиотек
// useSyncExternalStore
// useInsertionEffect

// конкурентный режим
// Реакт внутри себя может выполнять паралелльно несколько рендеров (ставить на паузу отдавая приоритет чему то определенному)
// рендеры могут происходить теперь не синхронно а отложенно

// хуки для оптимизации процессов
// их нужно использовать при динамическом списке с данными (с большим количеством и операциями фильтра/поиска)

// useDeferredValue - принимает значение которое потом будет немного отложено изменять
// реакт сделает вначале все срочные рендеры а только потом приступит к отрисовке значения из данного хука
import {useDeferredValue} from 'react';
const deferredValue = useDeferredValue(value);

// useTransition - аналогично  useDeferredValue только мы сами указывсаем когда использовать этот процесс и позволяет отслеживать 
// состояние этого процесса
import {useTransition} from 'react';
const [isPending, startTransition] = useTransition();
// флаг isPending - позволяет отслеживать состояние перехода 
// Когда реакт говорит что еще не время отрисовать какие то данные, то вернет isPending = true
// можем показать спиннер как пример
// Запуск перехода - startTransition (внутри коллбэк функция)
startTransition(()=>{
    setText(e.target.value);
})