'use strict';
// http://localhost:8888/Food_dist/

window.addEventListener("DOMContentLoaded",()=>{

    // -- Forms -- //  
    // Просмотр отправки в браузере
    // Network -> файл сервера (serever.php) -> табы (Headers, PayLoad)
    // Контроль загрузки интернета 
    //Network -> вкладка Online

    const forms = document.querySelectorAll('form');
    const mess = {
        loading:'img/spinner.svg',
        success:'Форма успешно отправлена!',
        fail:'Что то пошло не так'
    };


    /*forms.forEach(item=>{
        postData(item);
    });*/

    function postData(form){
        form.addEventListener('submit',(e)=>{
            e.preventDefault();

            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            statusMessage.textContent =mess.loading;
            form.append(statusMessage);

            const req = new XMLHttpRequest();
            req.open('POST','server.php');

            // когда используется связка XMLHttpRequest + FormData
            //заголовок устанавливать не нужно! он отправляется автоматически
           // req.setRequestHeader('Content-type','multipart/form-data');

            // формат FormData - объект,позволяющий с формы быстро сформировать все данные которые заполнил пользователь
            // формат Ключ: Значение
            // в форме во всех input должен быть аттрибут name - иначе не сработает
            const formData = new FormData(form);
            req.send(formData);

            req.addEventListener('load',()=>{
                if(req.status ===200){
                    console.log(req.response);
                    statusMessage.textContent =mess.success;
                    form.reset(); // очистка формы
                    setTimeout(()=>{
                        statusMessage.remove();
                    },2000);
                }else{
                    statusMessage.textContent =mess.fail;
                }
            });

        });
    }

    forms.forEach(item=>{
        postDataJson(item);
    });

    //Если форма должна принимать в JSON
    function postDataJson(form){
        form.addEventListener('submit',(e)=>{
            e.preventDefault();

            // Изображние загрузки
            const statusMessage = document.createElement('img');
            statusMessage.src = mess.loading;
            statusMessage.style.cssText = `
                display:block;
                margin:0 auto;
            `;
            form.insertAdjacentElement('afterend', statusMessage); // вместо append

            const req = new XMLHttpRequest();
            req.open('POST','server.php');
            req.setRequestHeader('Content-type','application/json'); // Заголовок нужен

            const formData = new FormData(form);
            
            const object = {};
            formData.forEach(function(value, key){
                object[key] = value;
            });

            const json = JSON.stringify(object);
            req.send(json);

            req.addEventListener('load',()=>{
                if(req.status ===200){
                    console.log(req.response);
                    showThanksModal(mess.success);
                    
                    form.reset(); // очистка формы
                    statusMessage.remove();

                }else{
                    showThanksModal(mess.fail);
                }
            });

        });
    }

       // Блок оповещения пользователя
       function showThanksModal(message){
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');
        openModel();

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;

        document.querySelector('.modal').append(thanksModal);
        setTimeout(()=>{
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal();
        },4000);
    }


    function closeModal(){
        modal.classList.toggle('show');
        document.body.style.overflow = '';
        clearInterval(modalTimerId);
    }
    modal.addEventListener('click',(e)=>{
        // отслеживание клика пользователя (закрытие по подложке)
        if(e.target === modal || e.target.getAttribute('data-close')==""){
            closeModal();
        }
    });

});    