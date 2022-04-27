//console.log(5);
'use strict';

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi','Wolf', 'Sam'];

function sortStudentsByGroups(arr) {
    let newArr1=[],
        newArr2=[],
        newArr3=[],
        newArr4=[],
        newAll=[];
    let str = '';
    let count =0;
    arr.sort();
    for (let i=0; i<arr.length;i++){
        if(i<3){
            newArr1.push(arr[i]);
            newAll[0]=newArr1;
        }
        if(i>=3 && i<6){
            newArr2.push(arr[i]);
            newAll[1]=newArr2;
        }
        if(i>=6 && i<9){
            newArr3.push(arr[i]);
            newAll[2]=newArr3;
        }
        if(i>=9){
            newArr4.push(arr[i]);
            count++;
            newAll[3]=newArr4;
        }
        if(count>0){
            str=`Оставшиеся студенты: ${newArr4.join(', ')}`;
        }else{
            str=`Оставшиеся студенты: -`;
        }
        
        newAll[3]=str;
    }
    return newAll;
}

console.log(sortStudentsByGroups(students));