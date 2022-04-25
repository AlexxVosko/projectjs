
// Не нужно повторять код, там где мы можем этого не делать
// return - возвращает результат функции,  после нее функция прекращает свою работу
// после return не нужно ставить перенос строки
const usdCurr=2.8;
const eurCurr=3.1;
const discount = 0.9;
function convert(amount,curr){
    console.log(curr*amount);
    return curr*amount;
}
function promo(result){
    console.log(result*discount);
    //функции могут возвращать результат другой функции
    return function (){}
}
convert(500,usdCurr);
convert(500,eurCurr);

//promo(convert(500,usdCurr));
const rezUsd = convert(500,usdCurr);
promo(rezUsd);

// Можно досрочно прервать функцию
function test (){
    for (let i =0; i<5; i++){
        console.log(i);
        if(i===3) return; //возвращает undefined
    }
    console.log('Done');
}
test();

// Любая функция всегда что то возвращает
function doNothing(){}
console.log(doNothing()=== undefined); // true 