'use strict'

const sum = (...args) => {
    const sm = (a, b) => a + b;
    return args.reduce(sm, 0);
}

const a1 = sum(1, 2, 3) // a1 === 6
console.log(a1);

//=========================================================

const sum2 = (...args) => args.reduce((c, d) => (c + d), 0);

const b1 = sum2(4, 5, 6) // b1 === 15
console.log(b1);