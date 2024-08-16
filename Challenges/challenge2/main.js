/*
    Write a program that receives N (amount of numbers) and their respective values print the largest even number and the smalles odd number
*/
const {get, print} = require('./challenge2') ;

const n = get();
let biggerNumberPair = 0;

for (let i = 0; i < n; i++) {
    const number = get();
    if (number % 2 === 0) {
        if (number > biggerNumberPair) {
            biggerNumberPair = number;
        }
    }
}

print(biggerNumberPair);