
'use strict';

function myModule (){
    this.hello = function(){
        console.log('hello');
    };

    this.goodBye = function(){
        console.log('bye!');
    };
}

// переброска в файл index.js
// синтаксис  common.js

module.exports = myModule;
