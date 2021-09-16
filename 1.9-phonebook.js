'use strict'

const phoneBook = [
    {name: 'Marcus Aurelius', phone: '123456789'},
    {name: 'Mao Zedong', phone: '987654321'},
    {name: 'Josef Stalin', phone: '19411945'}
];

const findPhoneByName = (name) => {
    for(const individual of phoneBook){
        if (individual.name === name) console.log(individual.phone);
    }
}

findPhoneByName('Mao Zedong');

//hash=============================================================

const phoneBookObj = {
    Marcus_Aurelius: '123456789',
    Mao_Zedong: '987654321',
    Josef_Stalin: '19411945',
};

//const findPhoneByNameObj = (name) => phoneBookObj[name];
const findPhoneByNameObj = (name) => console.log(phoneBookObj[name]);
 
findPhoneByNameObj('Josef_Stalin'); 