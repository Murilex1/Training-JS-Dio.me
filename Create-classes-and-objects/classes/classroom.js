class Person {
    name;
    age;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    describe() {
        console.log(`My name is ${this.name} and have ${this.age} age`)
    }

}

function comparePeople(p1,p2) {
    if (p1.age > p2.age) {
        console.log(`${p1.name} is older than ${p2.name}`);
    }else if (p2.age > p1.age) {
        console.log(`${p2.name} is older than ${p1.name}`);
    } else {
        console.log('They are both the same age');
    }
}

const Muliro = new Person('Murilo', 25);
const Felipe = new Person('Felipe',30);

comparePeople(Muliro,Felipe);

//With constructor
 const Murilo = new Person('Muliro',25);


//Method without constructor
 Murilo.name = 'Muliro'; 
 Murilo.age = 25;
 Murilo.describe();

