'use strict'

function max (arr) {
    let maxElem = [0][0];
    for(const i in arr){
        for(const j in arr[i]){
            if (arr[i][j] > maxElem) maxElem = arr[i][j]; 
        }
    }
    return maxElem;
} 

const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(m); // 9
