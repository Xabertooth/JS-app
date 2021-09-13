'use strict'

/*
Генерация случайной строки из символов аргумента "characters" 
заданной длинны "length".
*/
const generateKey = (length, characters) => {
    const arr = characters.split("");
    let str = "";
    for (let i = 0; i < length; ++i){
        let rand = Math.floor(Math.random() * characters.length);
        str += arr[rand];
        console.log(rand);
    }
    console.log(str);
}

generateKey(10, "helloWorldInMy123dearmother!!!");
