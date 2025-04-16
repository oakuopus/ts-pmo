var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GameCharachter = /** @class */ (function () {
    function GameCharachter(name, level, _health, id, maxLevel, strength, agility, intelligence) {
        this.name = name;
        this.level = Math.min(level, GameCharachter.maxLevel);
        this._health = _health;
        this.id = id;
        this.strength = strength;
        this.agility = agility;
        this.intelligence = intelligence;
    }
    Object.defineProperty(GameCharachter.prototype, "health", {
        get: function () {
            return this._health;
        },
        set: function (value) {
            if (value > 100 || value < 0) {
                throw new Error("Health cannot be over 100 or under 0.");
            }
            else {
                this._health == value;
            }
        },
        enumerable: false,
        configurable: true
    });
    GameCharachter.maxLevel = 100;
    return GameCharachter;
}());
var Warrior = /** @class */ (function (_super) {
    __extends(Warrior, _super);
    function Warrior() {
        return _super.call(this, "John", 1, 100, 1, 100, 80, 60, 20) || this;
    }
    Warrior.prototype.getStats = function () {
        return ("Strength: ".concat(this.strength, ", Agility: ").concat(this.agility, ", Intelligence: ").concat(this.intelligence));
    };
    Warrior.prototype.attack = function () {
        return ("The Warrior ".concat(this.name, " has attacked with a halberd!"));
    };
    return Warrior;
}(GameCharachter));
var Spartan = new Warrior();
console.log(Spartan.attack());
console.log(Spartan.getStats());
console.log(Spartan.health = 101);
console.log(Spartan.health);
console.log(GameCharachter.maxLevel);
console.log(GameCharachter._health);
console.log(GameCharachter.level);
