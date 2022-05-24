
import {closeModal,openModel} from './modal';
import {postData} from '../services/services';

function forms(formSelector, modalTimerId){
    // -- Forms -- //  
    // Просмотр отправки в браузере
    // Network -> файл сервера (serever.php) -> табы (Headers, PayLoad)
    // Контроль загрузки интернета 
    //Network -> вкладка Online

    const forms = document.querySelectorAll(formSelector);
    const mess = {
        loading:'img/spinner.svg',
        success:'Форма успешно отправлена!',
        fail:'Что то пошло не так'
    };

    forms.forEach(item=>{
        bindPostDataJson(item);
    });
    //Если форма должна принимать в JSON

    function bindPostDataJson(form){
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
            const formData = new FormData(form);

            const obj = {a:23, b:50 };
            console.log(Object.entries(obj)); // [ [ 'a', 23 ], [ 'b', 50 ] ]

            // formData - собираем все данные с формы
            // formData.entries() превращаем в массив массивов
            // Object.fromEntries затем превращаем в классический объект
            // JSON.stringify а затем классический объект превращаем в json
            // json отправляем на сервер
            const json = JSON.stringify(Object.fromEntries(formData.entries()));

           
            //postData('server.php',JSON.stringify(object))
            postData('http://localhost:3000/requests',json)
            //.then(data=>data.text())
            .then(data=>{
                console.log(data); //Response
                showThanksModal(mess.success);
                statusMessage.remove();
            }).catch(()=>{
                showThanksModal(mess.fail);
            }).finally(()=>{
                form.reset();
            });
        });
    }

    // Блок оповещения пользователя
    function showThanksModal(message){
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');
        openModel('.modal', modalTimerId);

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
            closeModal('.modal');
        },4000);
    }
}

export default forms;