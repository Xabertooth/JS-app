'use strict'

const range = (start, end) => {
    let length = end - start;

    if(end < 0) return [];

    const array = new Array(length);

    for (let i = 0; i <= length; i++){
        array[i] = start+i;
    }

    return array;
};

let arr = range(15, 30);

for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
} 
