const _name = Symbol('name');
const _age = Symbol('age');

class Person {
    constructor(name, age = 0) {
        this[_name] = name;
        this[_age] = age;
    } 

    get name() {
        return this[_name];
    }


    get age() {
        return this[_age];
    }

    set age(value) {
        if (value < 0) {
            this[_age] = 0;
        }  else if (Value <= 120) {
            this[_age] = 120;
        }  else {
            this[_age] = value;
        }
        
    }    
}
      
console.log(new Person('Tyler', 34));

