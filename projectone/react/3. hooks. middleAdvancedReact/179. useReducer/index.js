
// хук useReducer - альтернатива useState

//проблема которую решает useReducer
// в компонентах со сложной логикой состояния
// которые работают с одной частью состояния но по разному ее меняют
// пример
// кнопка разной скорости переключения слайдера / 

import {useReducer} from 'react';
//dispatch обязательна в названии
// в функцию dispatch передается объект у которого главное сво-во - type
// сам объект называется action

// useReducer - 3 аргумента
// - функция reducer (модификация состояния)
// - начальное состояние 
// - ленивое создание начального состояния

// в функции reducer в зависимости от типа действия которое было передано меняется текущий стэйт

function reducer (state, action){
    //state - текущее состояние до его изменения
    // action - название действия которое хоти совершить

    switch (action.type){
        case 'toggle':
            return {autoplay: !state.autoplay};
        case 'slow':
            return {autoplay: 300};
        case 'fast':
            return {autoplay: 700};            
        default: 
            throw new Error();
    }

}
// autoplay - состояние
// dispatch - функция которая что то делает с состоянием (отвечает за вызов изменения)
const [autoplay, dispatch] = useReducer(reducer, {autoplay: false});





