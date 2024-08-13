/*
    A room constains 5 students and for each student a number was drawn from 1 - 100. Make a program that receives the 5 numbers students and displays the highest number drawn.

    Input data:
    5
    50
    10
    98
    40

    Outpu:
    98
*/
const {get,print} = require('./drawnNumber'); 

const numbers = [5,50,10,98,40];

for(let i=0;i< 25;i++){
    const drawnNumber = get();
    numbers.push(drawnNumber);
}

let greaterValue = 0;

for(let i=0;i < numbers.length;i++) {
    const  drawnNumber = numbers[i];
    if (drawnNumber > greaterValue) {
        greaterValue = drawnNumber;
    }
}


print(greaterValue);