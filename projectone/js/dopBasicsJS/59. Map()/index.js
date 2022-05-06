'use strict';
// Что если в объект передать в свойство - число?
// свойство станет строкой

const user ={
    4: 'Alex',
    surname:'Smith',
    birthday:'05/05/1993',
    showMyPublicData: function(){
        console.log(`${this.name} ${this.surname}`);
    }
}
console.log(typeof(Object.keys(user)[0])); // string

// Map() карта - называется спецефические структуры данных, похожие на объект, 
// в свойствах используются любой тип данных (не только строка)
// !! Map - массив массивов
// В пустой карте ничего не будет, в отличие от объекта 
// Карты легко перебирать, в отличие от объекта 
// Размер Карты легко получить через size, в отличие от объекта 

const shops = [
    {rice:500},
    {oil:200},
    {bread:50}
];
const map = new Map([
    [{paper:400},8000]
]);
const budget = [5000,15000, 25000]

// set - назначить
map.set(shops[0], 5000)
    .set(shops[1], 15000)
    .set(shops[2], 25000);

console.log(map); // Map(1) { { rice: 500 } => 5000 }

// назначение для всех элементов
shops.forEach((shop,i)=>{
    map.set(shop,budget[i]);
});
console.log(map);

// get - получить
console.log(map.get(shops[0])); // 5000
// has - наличие чего то внутри map
console.log(map.has(shops[0])); //true
// delete - удаление
//map.delete();
// clear - очистить карту, станет пустой
//map.clear();
// size - свойство, количество элементов внутри карты
//map.size;

// -- Перебор Map --
//1) map.keys() - возвращает итерируемый объект по ключам
const goods = [];
console.log(map.keys()); // MapIterator
for (let shop of map.keys()){
    console.log(shop);
    goods.push(Object.keys(shop)[0]); // список товаров
}
console.log(goods);

//2) map.values() - возвращает итерируемый объект по значеним
for(let price of map.values()){
    console.log(price);
}

//3) map.entries() - возвращает итерируемый объект собственных перечисляемых свойств указанного объекта в формате [key, value]
for(let [shop,price] of map.entries()){
    console.log(price,shop);
}

//4) map.forEach() - возвращает итерируемый объект по значеним
map.forEach((value,key,map)=>{
    console.log(key,value);
});

const user2 ={
    4: 'Alex',
    surname:'Smith',
    birthday:'05/05/1993',
    showMyPublicData: function(){
        console.log(`${this.name} ${this.surname}`);
    }
}
//  Трансформация объекта в карту
const userMap = new Map(Object.entries(user2));
console.log(userMap);

// Трансформация из карты в объект
const newUserObj = Object.fromEntries(userMap);
console.log(newUserObj);