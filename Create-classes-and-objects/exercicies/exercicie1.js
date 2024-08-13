/*
    1- Create a class to represent cars.
    Cars have a brand, a color and an average fuel consumption per kilometer driven.
    Create a method that, given the number of kilometers and the price of fuel, gives us the amount spent in reais to complete the journey
*/

class Car {
    brand;
    color;
    carAverage;
    constructor(brand,color,carAverage) {
        this.brand = brand;
        this.color = color;
        this.carAverage = carAverage;

    }
    calculateRouteCosts(distance,fuelValue) {        
        // distance * this.carAverage * fuelValue
        const FuelConsumption = (Number(fuelValue) / Number(distance));
        const result = 

        console.log(`Your car is a ${this.color} ${this.brand} and the Fuel consumption ${(distance * this.carAverage * fuelValue).toFixed(2)}`);

    };

}

const test = new Car('Ford','Red',10/5.50);

test.calculateRouteCosts(26,5.50);