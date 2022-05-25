//console.log(5);
'use strict';

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('foo');
    }, 1000);
    setTimeout(() => {
        reject('bar');
    }, 900);
});
  
promise.then((value) => {
    console.log(value);
}).catch((e) => console.log(e))