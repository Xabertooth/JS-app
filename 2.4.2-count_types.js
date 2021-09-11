'use strict'

const arr = [true, 'hello', 3.14, 10, -12, false, NaN];

const typeObj = new Object();

for (let i of arr){
    let j = typeof(i);
    if (j in typeObj){
        ++typeObj[j];
    } else {
        typeObj[j] = 1;
    }
}

console.log(typeObj);