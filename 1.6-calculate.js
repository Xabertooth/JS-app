'use strict'

const average = (x, y) => (x+y)/2;

const square = (x) => x*x;

const cube = (x) => x**x;

const calculate = (x) => {
    const arr = new Array(0);
    for (let i = 0; i <= x; ++i){
        arr.push(average(square(i), cube(i)));
    }
    return arr;
}
 
let arr = calculate(9);
console.log(average(15,30));
console.log(square(5));
console.log(cube(5));

for (let i = 0; i < arr.length; ++i){
    console.log(arr[i]);
}