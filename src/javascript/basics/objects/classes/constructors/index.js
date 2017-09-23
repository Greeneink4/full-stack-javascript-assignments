// Code goes here...
export class Vehicle {
    constructor(engineType, numDoors, make) {
        this.avaengineType = engineType,
        this.numberOfDoors = numDoors,
        this.make = make
    }
}

export class Truck extends Vehicle {
    constructor(make) {
        super('V8', 2, make);
    }
}

export class Car extends Vehicle {
    constructor(make) {
        super('V4', 4, make);
    }
}

export const F150 = new Truck('Ford');
export const Prius = new Car('Toyota');

