'use strict'

function random(min, max){
    if ((max<min) || (max === undefined || 0)) max = min+1;
    return Math.floor(Math.random()*((max-min)+min));
}

console.log(random(5,undefined));