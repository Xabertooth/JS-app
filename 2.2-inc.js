'use strict'

//1==============================

const inc = (n) => ++n;

const a = 5;
const b = inc(a);

console.dir({a, b})

//2==============================

const inc2 = (num) => {
    if(typeof num == 'object'){
        ++num.n;   
    }
}
const obj = {n: 15};

inc2(obj);

console.dir(obj);