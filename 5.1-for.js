'use strict'

const sum = (...args) => {
    let value = 0;
    for (let i = 0; i < args.length; ++i){
        value += args[i];
    }
    return value;    
}

const a = sum(1, 2, 3) // a === 6
console.log(a);