class Mammal {
    constructor(name) {
        this.name = name;
    }

    walk() {
        console.log(`I'm walking`);
    }
}

class Dog extends Mammal {
    constructor(name) {
        super(name);
    }

    greet() {
        return 'Woof';
    }
}

export class Cat extends Mammal {
    constructor(name) {
        super(name);
    }

    greet() {
        return 'Meow';
    }
}
