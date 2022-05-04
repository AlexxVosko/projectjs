// Рекурсия - прием когда функция вызывает сама себя

//Функция возведения в степень
//база и в какую степень нужно возвести


function powOld(x,n){
    let result = 1;

    for(let i=0;i<n;i++){
        result*=x;
    }
    return result;
}

function pow(x,n){
    if(n===1){
        return x;
    }else{
        return x * pow(x, n-1);
    }
}

pow(2,2); //4
pow(2,4); //16

// База рекурсии - случай который приводит к завершению функции
// Шаг рекурсии - запуск вложенной функции но с другим значением
// Глубина рекурсии - общее количество вложенных вызовов вместе с самым первым
// Максимальная глубина рекурсии - на сколько максимально может рекурсия нырнуть сама в себя (~ 10000)

// 1 Нюанс 
// рекурсия должна где то сохранять промежуточные данные, в цикле этого нет (поэтому цикл эффективнее)

//2 Нюанс
// Рекурсия делают функции проще, хоть и имеет ограничение по глубине (по количеству внутренних вызовов, около 10000)

let students ={
    js:[
        {
            name:'John',
            progress:100
        },
        {
            name:'Ivam',
            progress:60
        },
    ],
    html:{
        basic:[{
                name:'Peter',
                progress:20
            },
            {
                name:'Ann',
                progress:18
            },
        ],
        pro:[{
            name:'Sam',
            progress:10
        }],
        semi:{
            student:[{
                name:'Test',
                progress:100
            }]
        }
    }
}

// для удобства получения значений использовать Object.values()
// получим массив значений перечисляемых свойств объекта

// Array.isArray(obj) - проверка на массив , true  или  false

//  без рекурсии
// Итеративный подход - наличие промежуточных переменных
function getTotalProgressByIteration(data){
    let total=0;
    let students = 0;

    for (let course of Object.values(data)){
        if(Array.isArray(course)){ //если массив
            students+=course.length;
            for(let i; i<course.length;i++){
                total+=course[i].progress;
            }
        }else{
            for (let subCourse of Object.values(course)){
                students+=subCourse.length;
                for(let i; i<subCourse.length;i++){
                    total+=subCourse[i].progress;
                }
            }
        }
    }

    return total/students;
}
console.log(getTotalProgressByIteration(students));

// с рекурсией
function getTotalProgressByRecursion(data){
    // база рекурсии - условие когда функция закончится
    if(Array.isArray(data)){ 
        let total = 0;
        for(let i; i<data.length;i++){
            total+=data[i].progress;
        }
        //вернуть несколько значений = массив
        return [total,data.length];
    }else{
        let total = [0,0];
        for(let subData of Object.values(data)){
            const subDataArr = getTotalProgressByRecursion(subData);
            total[0]+=subDataArr[0];
            total[1]+=subDataArr[1];
        }
        return total;
    }
}
const resultRec = getTotalProgressByRecursion(students);
console.log(resultRec[0]/resultRec[1]);