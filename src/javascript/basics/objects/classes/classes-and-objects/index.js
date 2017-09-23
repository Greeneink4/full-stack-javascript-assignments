// export class OptimusPrime {
//     constructor(name, faction, power) {
//         this._name = name;
//         this._faction = faction;
//         this._power = power;
//     }
// }

export class OptimusPrime extends Robot {
    Constructor() {
        super('Optimus Prime', FACTIONS.Autobots);
    }
}

export class Megatron extends Robot {
    constructor() {
        super('Megatron', FACTIONS.Decepticons);    
    }
}

export const FACTIONS = {
    Autobots: 'autobots',
    Decepticons: 'decepticons'
};

export class Robot {
    constructor(name, faction) {
        this._name = name;
        this._faction = faction;
        this._power = 1000;
   }

   greet() {
       return `Hi, I'm ${this._name}`;
   }
}

let op = new OptimusPrime();
let mega = new Megatron();
console.log(op.greet());