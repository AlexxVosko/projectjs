function modal(){

  // -- Modal -- //
  const modalTrigger = document.querySelectorAll('[data-modal]'), //  кнопки
        modal = document.querySelector('.modal'); // само окно

  function openModel(){
   //1)  способ
       modal.classList.add('show');
       modal.classList.remove('hide');

  //2)  способ
     //modal.classList.toggle('show');
     document.body.style.overflow = 'hidden'; // отмена прокрутки
     clearInterval(modalTimerId);
 }
  modalTrigger.forEach(btn =>{
      btn.addEventListener('click', openModel);
  });

  function closeModal(){
      //modal.classList.add('hide');
      //modal.classList.remove('show');
      modal.classList.toggle('show');
      document.body.style.overflow = '';

      //если пользователь сам нажал то удалять таймер
      clearInterval(modalTimerId);
  }
 


  modal.addEventListener('click',(e)=>{
      // отслеживание клика пользователя (закрытие по подложке)
      if(e.target === modal || e.target.getAttribute('data-close')==""){
          closeModal();
      }
  });

  // отслеживание нажатия кнопки пользователя (закрытие по кнопке esc)
  document.addEventListener('keydown',(e)=>{
      if(e.code === 'Escape' && modal.classList.contains('show')){
          closeModal();
      }
  });

  const modalTimerId = setTimeout(openModel,50000);


  // если пользователь долистал до конца - показать модальное окно

  window.addEventListener('scroll', showModalByScroll);
  //},{once:true}); // как вариант но не всегда подходит

  // функция всплытия модального окна только один раз при прокрутке вниз
  function showModalByScroll(){
      if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight-1){  // прокрученная часть + видимая часть окна  >= полная высота всей страницы
          openModel();
          window.removeEventListener('scroll', showModalByScroll);
      }
  }
}
module.exports = modal;