'use strict';

// Данные на основании которых рисуется верстка на странице 
// для каждого блока должен быть id для дальнейших взаимодействий

// throw - оператор генерирующий ошибку
// выкинуть можно  все что угодно - строку,  число , объект
// но обычно используют встроенный класс Error

const data = [
    {
        id: 'box',
        tag: 'div'
    },
    {
        id: 'аа',
        tag: 'nav'
    },
    {
        id: 'circle',
        tag: ''
    }
]

try{
    data.forEach((blockObj,i) => {
        const block = document.createElement(blockObj.tag);

        //if(!blockObj.id) throw 'error'; // Uncaught error

        if(!blockObj.id) throw new Error(`В данных под номером ${i+1} нет id`);

        block.setAttribute('id', blockObj.id);
        document.body.append(block);
    })
} catch(e){
    console.error(e.name); // будет подсвечиваться красным
    console.log(e.name);
    console.log(e.message);
    console.log(e.stack);

    if(e.name === 'Error'){
        console.log(e.message);
    }else throw e; // выброс ошибки дальше за
}

const err = new Error('error');
console.log(err.name , err.message, err.stack); // Error error Error: error {путь где находится}

// Можно создать свое имя ошибки
const err2 = new SyntaxError('error'); 