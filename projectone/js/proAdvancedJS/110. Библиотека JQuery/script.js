import $ from 'jquery';

// Получение элемента
const btn = $('#btn');
console.log(btn);

//
$(document).ready(function (){
    $('.list-item:first').hover(function(){
        $(this).toggleClass('active'); // обращение к элементу на котором произошло событие
    });

    //Получение 3-го элемента
    $('.list-item:eq(2)').on('click', function (){
        // получение четных элементов
        $('.image:even').fadeToggle('slow');
    });

      //Получение 5-го элемента
    $('.list-item:eq(4)').on('click', function (){
        console.log( $('.image:odd'));
        // получение нечетных элементов
        $('.image:odd').animate({
            opacity: 'toggle',
            height: 'toggle'
        }, 2000);
    });
});