// Вложенность циклов

//чтобы не было коллизии имен (пересечения между одинаковыми переменными), нужно менять переменные

for (let i=0; i<3; i++){
    console.log(i);
    for (let j=0; j<3; j++){
        console.log(j);
    }
}

//Сформировать пирамиду из * c помощью цикла
//*
//**
//***
//****
//*****

// Концепция - один цикл формирует ряды, второй - *
let result ='';
const length =6;

for (let i=1; i<length; i++){
    for (let j=0; j<i; j++){
        result += '*';
    }
    result += '\n'; // перенос строки
}
console.log(result);


// Синтаксис меток
metka: for (let i=0; i<3; i++){
    console.log(`First level:${i}`);
    for (let j=0; j<3; j++){
        console.log(`Second level:${j}`);
        for (let k=0; k<3; k++){
            if (k === 2) continue metka; // пропустить
            if (k === 2) break metka; // остановить
            console.log(`Third level:${k}`);
        }
    }
}