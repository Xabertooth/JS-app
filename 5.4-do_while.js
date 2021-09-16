'use strict'

const sum = (...args) => {
    if (args.length === 0) return 0;
    let value = 0;
    do {
        value += args.pop(); 
    } while (args.length > 0);
    return value;
}

const a = sum(1, 2, 3) // a === 6
console.log(a);