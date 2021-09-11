'use strict'

const arr = [true, 'hello', 3.14, 10, -12, false, NaN];

const typeObj = {
    string: 0,
    number: 0,
    NaN: 0,
    undefined: 0,
    boolean: 0,
    object: 0,
}

for (let i of arr){
    let j = typeof(i);
    if (j in typeObj){
        ++typeObj[j];
    }
   
}

console.log(typeObj);