'use strict'

const sum = (...args) => {
    let i = 0;
    let value = 0;
    while (i < args.length){
        value += args[i++];
    }
    return value;
}

const a = sum(1, 2, 3) // a === 6
console.log(a);

const sum2 = (...args) => {
    let value = 0;
    while (args.length > 0) {
      value += args.pop();
    }
    return value;
  };
   
  const b = sum(4, 5, 6) // b === 15
console.log(b);