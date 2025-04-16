abstract class Vehicle{
    constructor(public brand: string){}
    abstract startEngine(): void;

    displayBrand(): void{
        console.log(`You are in a ${this.brand}`)
    }
}

class Car extends Vehicle{
    startEngine(): void{
        console.log(`You started the engine of a ${this.brand}`)
    }
}

let toyota = new Car("Toyota")
toyota.displayBrand()
toyota.startEngine()
