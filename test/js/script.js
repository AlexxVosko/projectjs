//console.log(5);
'use strict';

const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function transferWaitors(data) { 
    const copy = Object.assign({}, data);

    copy.waitors = [{name: 'Mike', age: 32}];
    return copy; 
}

transferWaitors(restorantData);
