// Циклы

// 1 способ while
// пока условие не выполнено то делать действия

let num =50;
while(num<55){
    console.log(num);
    num++;
} 

// 2 способ do - while
// Заставляем цикл что то делать, а потом проверить условие, и если необходимо выйти из цикла

do {
    console.log(num);
    num++;
}
while(num<55);


// 3 способ - for - гибкая настройка
// 1 аргумент - начальная переменная (итератор)
// 2 аргумент - условие при котором цикл остановит свою работу
// 3 аргумент - шаг цикла (инкремент)

for(let i=0; i<8; i++){
    console.log(num);
    num++;

    if(i==6){
        console.log(i);
        break; // остановка цикла
        continue; // позволяет пропустить шаг который не нужен, без остановки цикла
    }
}