const btn = document.querySelector('.btn'),
      elem = document.querySelector('.box');  
let pos = 0;

// function myAnimation() {
//     let pos = 0;

//     const id = setInterval(frame, 10);
//     function frame() {
//         if (pos == 300) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + "px";
//             elem.style.left = pos + 'px';
//         }
//     }
// }

function myAnimation() {
    pos++; //увеличение позиции
    //новые значения для inline стилей
    elem.style.top = pos + "px"; 
    elem.style.left = pos + 'px';

    if (pos < 300) {
        requestAnimationFrame(myAnimation);
    }
}

// передовать в анонимную стрелочную функцию чтобы анимация запускалась только по клику а не сразу
btn.addEventListener('click', () => requestAnimationFrame(myAnimation));

// остановка анимации
let id = requestAnimationFrame(myAnimation);
cancelAnimationFrame(id);