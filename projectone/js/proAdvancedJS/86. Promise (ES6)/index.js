'use strict';

// Promise (Обещания)

// Если произошло что то то мы обещаем что  у нас выполнится следующее действие
// Действия которые зависят от предедущих результатов. Только если предыдущих вариант был успешно выполнен
// Нужны для того чтобы код не разрастался (callbackHell)

// Преимущества перед callback функцией - можем возвращать промисы и then() по цепочке

console.log('Запрос данных..'); // Синхронный код

setTimeout(()=>{
    console.log('Подготовка данных...');
    const product = {
        name:'TV',
        price: 2000
    };
    setTimeout(()=>{
        product.status = 'order';
        console.log(product);
    },2000);
},2000);

// принимается 2 аргумента, они обозначают функции
// resolve - что то выполнилось правильно (обещание выполнилось)
// reject  - что то пошло не так (обещание не выполнилось)

const req = new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log('Подготовка данных...');
        const product2 = {
            name:'TV',
            price: 2000
        };
        // запускается только при положительном исходе
        //  передаем данные которые будут идти дальше
        resolve(product2);
    },2000);
});

// метод then() - обработка положительных результатов (выполняется на промисе в случае положительного исхода)
// принимает аргумент который вызывается с функцией  resolve()
// метод catch() - обработка ошибок (обычно ставится в конце после then)
// метод  finally() - позволяет выполнить действие при любом исходе промиса, абсолютно всегда (обычно ставится в самом конце после catch)

req.then((product2)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            product2.status = 'order';
            resolve(product2);
            //console.log(product2);

            // обработка ошибки
            reject();

        },2000);
    });

    // больше можем не создавать новые переменные
    req2.then((data)=>{
        console.log(data);
    });

}).then((data)=>{
    data.modify = true;
    return data;
    console.log(data);
}).then((data)=>{
    console.log(data);
}).catch(()=>{
    console.error('Произошла ошибка');
}).finally(()=>{
    console.log('Конец кода');
});



const test = time =>{
    return new Promise(resolve=>{
        setTimeout(()=>resolve(),time);
    });
};
test(1000).then(()=>console.log('1000 ms'));
test(2000).then(()=>console.log('2000 ms'));

// метод all() - служит для убеждения в том что все промисы выполнились (ориентир на последний промис)
//принимает массив с промисами
Promise.all([test(1000),test(2000)]).then(()=>{
    console.log('all');
});

// метод race() - ориентир на первый промис
//принимает массив с промисами
Promise.race([test(1000),test(2000)]).then(()=>{
    console.log('Race');
});
