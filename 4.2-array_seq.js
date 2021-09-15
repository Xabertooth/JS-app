'use strict'

const array = () => {
    const arr = [];

    const get = (i) => arr[i];

    get.push = (value) => arr.push(value);

    get.pop = (value) => arr.pop(value);

    return get;
}

const foo = function(a, b) { return a + b;}


const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0)); // Выводит: first
console.log(arr(1)); // Выводит: second
console.log(arr(2)); // Выводит: third

console.log(arr.pop()); // Выводит: third
console.log(arr.pop()); // Выводит: second
console.log(arr.pop()); // Выводит: first

console.log(arr.pop()); // Выводит: undefined

console.log(foo(1, 4));