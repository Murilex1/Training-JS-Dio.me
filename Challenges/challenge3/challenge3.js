/* 
    Make a program that calculates and prints the salary to be transferred to an employee
    
    To carry out the calculation, receive the gross salary amount and additional benefits

    the salary to be transferred is calculated as follows

    gross salary value - tax percentage depending on the salary range + additional benefits 

    To calculate the tax percentage, follow the rates:
    
    From R$0.00 to R$1100.00 = 5%
    From R$1100.01 to R$2500 = 10%
    Greater than 2500 = 15%
*/

const prompt = require('readline-sync');

const calculateSalary = () => {    
    const inputSalary = prompt.question("What is your salary(only number): ")
    salary = Number(inputSalary)
    
    if (isNaN(salary)) {
        console.log('only number!')
    } else {    
        if (salary > 0 && salary < 1100) {            
            result = (salary * 5) / 100 
            endSalary = salary - result 
            console.log(endSalary)
        } else if (salary > 1100.01 && salary < 2500) {
            result = (salary * 10) / 100 
            endSalary = salary - result 
            console.log(endSalary)
        } else if (salary > 2500) {
            result = (salary * 15) / 100 
            endSalary = salary - result 
            console.log(endSalary)
        }
    }   
}

calculateSalary();