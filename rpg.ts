interface CharacterStats { strength: number; agility: number; intelligence: number; }

abstract class GameCharachter implements CharacterStats{
    constructor(name: string, level: number, _health: number, id: number, maxLevel: number, strength: number, agility: number, intelligence: number){
        this.name = name
        this.level = Math.min(level, GameCharachter.maxLevel)
        this._health = _health
        this.id = id
        this.strength = strength
        this.agility = agility
        this.intelligence = intelligence
    }
    public name: string;
    protected level: number;
    readonly id: number;
    static maxLevel: number = 100;
    private _health: number;
    strength: number;
    agility: number;
    intelligence: number;

    get health(){
        return this._health
    }

    set health(value: number){
        if(value > 100 || value < 0){
            throw new Error("Health cannot be over 100 or under 0.")
        }else{
            this._health == value
        }
    }
}

class Warrior extends GameCharachter{
    constructor(){
        super("John", 1, 100, 1, 100, 80, 60, 20)
    }

    getStats(): string{
        return(`Strength: ${this.strength}, Agility: ${this.agility}, Intelligence: ${this.intelligence}`)
    }

    attack(): string{
        return(`The Warrior ${this.name} has attacked with a halberd!`)
    }
}

let Spartan = new Warrior()
console.log(Spartan.attack())
console.log(Spartan.getStats())
console.log(Spartan.health = 101)
console.log(Spartan.health)
console.log(GameCharachter.maxLevel)
console.log(GameCharachter._health)
console.log(GameCharachter.level)







