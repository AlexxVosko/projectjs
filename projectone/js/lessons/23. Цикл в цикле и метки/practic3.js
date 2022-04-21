/* Задача на формирование фигуры*/

//  Фигура елочки
//     *
//    ***
//   *****
//  *******
// *********

// Цикл в цикле, формирование пробелов и *

const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {

    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let k = 0; k < 2 * i + 1; k++) {
        result += "*";
    }
    result += "\n";
}s

console.log(result)