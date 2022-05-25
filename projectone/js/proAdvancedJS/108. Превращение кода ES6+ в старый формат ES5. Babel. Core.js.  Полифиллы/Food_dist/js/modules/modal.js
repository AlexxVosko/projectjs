
function openModel(modalSelector,modalTimerId){
    const modal = document.querySelector(modalSelector); 
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden'; // отмена прокрутки
    // Фикс бага при выносе функции 
     // добавить вторым аргументом
    // проверить на существование
    console.log(modalTimerId);
    if(modalTimerId){
        clearInterval(modalTimerId); //если пользователь сам нажал то удалять таймер
    }
}

function closeModal(modalSelector){
     const modal = document.querySelector(modalSelector); 
     modal.classList.add('hide');
     modal.classList.remove('show');
     document.body.style.overflow = '';
 }

 // откуда будет приходить Id c таймером ?
 // создавать таймер в самом общем файле


function modal(triggerSelector, modalSelector, modalTimerId){

  // -- Modal -- //
  const modalTrigger = document.querySelectorAll(triggerSelector), //  кнопки
        modal = document.querySelector(modalSelector); // само окно

    // чтобы обойти ограничение вызова функции  - обернуть функцию в стрелочную
    modalTrigger.forEach(btn =>{
        btn.addEventListener('click', () => openModel(modalSelector, modalTimerId));
    });


  modal.addEventListener('click',(e)=>{
      // отслеживание клика пользователя (закрытие по подложке)
      if(e.target === modal || e.target.getAttribute('data-close')==""){
          closeModal(modalSelector);
      }
  });

  // отслеживание нажатия кнопки пользователя (закрытие по кнопке esc)
  document.addEventListener('keydown',(e)=>{
      if(e.code === 'Escape' && modal.classList.contains('show')){
          closeModal(modalSelector);
      }
  });

  // если пользователь долистал до конца - показать модальное окно

  window.addEventListener('scroll', showModalByScroll);
  //},{once:true}); // как вариант но не всегда подходит

  // функция всплытия модального окна только один раз при прокрутке вниз
  function showModalByScroll(){
      if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight-1){  // прокрученная часть + видимая часть окна  >= полная высота всей страницы
          openModel(modalSelector, modalTimerId);
          window.removeEventListener('scroll', showModalByScroll);
      }
  }
}
export default modal;
export {closeModal};
export {openModel};