
console.log(document.head);
console.log(document.body);
console.log(document.documentElement); // весь html
console.log(document.body.childNodes); // узлы дочерние у body (псевдомассив NodeList)

//между тегами находится текстовая нода (перенос строки)

// Разница между DOM элементами и DOM узлами
// DOM узлы - переносы строк, текстовые элементы

//  data-аттрибуты
console.log(document.querySelector('[data-current="3"]')); // получение



//!! Ниже данные методы привязаны к DOM-узлам

// ОБращение к родителю элементу (parentNode)
console.log(document.querySelector('#current').parentNode.parentNode); // привязаны к DOM-узлам
console.log(document.querySelector('#current').parentElement); // привязаны к DOM-элементам

// Обращение к дочерним элементам
console.log(document.body.firstChild); // привязаны к DOM-узлам
console.log(document.body.lastChild); // привязаны к DOM-узлам

console.log(document.body.firstElementChild); // привязаны к DOM--элементам
console.log(document.body.lastElementChild); // привязаны к DOM--элементам


// Обращение к предыдущему/следующему элементу (previousSibling/nextSibling)
console.log(document.querySelector('[data-current="3"]').previousSibling); // привязаны к DOM-узлам
console.log(document.querySelector('[data-current="3"]').nextSibling); // привязаны к DOM-узлам

console.log(document.querySelector('[data-current="3"]').previousElementSibling); // привязаны к DOM-элементам
console.log(document.querySelector('[data-current="3"]').nextElementSibling); // привязаны к DOM-элементам

// Аналог ChildNodes (вручную)
// forEach использовать нельзя так как это псевдоколлекция

for(let node of document.body.childNodes ){
    if(node.nodeName=='#text'){       
        continue; // скрытие текстовых нод
    }
    console.log(node);
}