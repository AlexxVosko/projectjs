//console.log(5);
'use strict';

class UserClass{
    constructor (name,age){
        this.name = name;
        // скрытие в классе
        this._age = age;
    }

    say = ()=>{
        console.log(`Имя пользователя ${this.name} ${this.#surname}, возраст - ${this._age}`);
    }

    get age(){
        return  this._age;
    }
    set age (age){
        if(typeof(age) === 'number' && age>0 && age < 110){
            this._age = age;
        }else{
            console.log('Недопустимое значение');
        }
    }

    // свойство записывается в объект только без конструктора (работает только в chrome)
     #surname = 'Vosko';

     // получить приватное свойство
     get surnamGet (){
        return this.#surname;
     }

    // изменить приватное свойство
    set surnameSet(name){
        this.#surname = name;
    }
}
const  ivan3 = new UserClass ('Ivan', '25');

console.log(ivan3.surname); // undefined
console.log(ivan3.surnamGet); // Vosko
ivan3.surnameSet='Voskobobich';
console.log(ivan3.surnamGet);