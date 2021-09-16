'use strict'

const rangeOdd = (begin, end) => {
    if (end<0) return [];
    let i = 0;
    const array = new Array(0);
    for (let n = begin; n <= end; n++){
        if (n == begin || n % 2 != 0 || n == end) array.push(n);
    }
    return array;
}

let arr = rangeOdd(15, 30);

for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}