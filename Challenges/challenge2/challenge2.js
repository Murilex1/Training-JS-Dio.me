/*
    Write a program that receives N (amount of numbers) and their respective values print the largest even number and the smalles odd number
*/
const enter = [5,3,4,1,10,8];
let i = 0;


function get() {
    const value = enter[i];
    i++;
    return value;
}

function print(text) {
    console.log(text)
}

module.exports = { get, print};