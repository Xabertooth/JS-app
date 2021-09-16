'use strict';

const fn = () => {
    const obj = {name: 'Marcus'};
    let obj2 = {name: 'Mao'};
    let obj3 = {name: 'Herald'} 

    console.log(`obj = ${obj.name}! obj2 = ${obj2.name}! obj3 = ${obj3.name}!`);

    obj.name = 'Mao';
    obj2.name = 'Marcus';
    
    console.log('obj = ' + obj.name, 'obj2 = ' + obj2.name);

    obj2 = obj3;

    console.log('obj = ' + obj.name, 'obj2 = ' + obj2.name);
}
fn();