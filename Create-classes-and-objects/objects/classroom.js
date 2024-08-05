const person =  {
    name: 'Murilo',
    age: 25,
    describe: function () {
        console.log(`My name is ${this.name} and my age is ${this.age}`)
    }
}

//Add method
person.height = 1.71;

//Remove method
delete person.height;

console.log(person);

person.describe();


//Acess method dinamic
const atributte = 'age';
console.log(person[atributte]);