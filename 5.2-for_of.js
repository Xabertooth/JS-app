'use strict'

const sum = (...args) => {
    let value = 0;
    for(let i of args){
        value += i;
    }
    return value;
}

const a = sum(1, 2, 3) // a === 6
console.log(a);