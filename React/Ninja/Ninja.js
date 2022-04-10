class Ninja {
    constructor(name,health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log("Ninja's name is",this.name)
        return this;
    }
    showStats() {
        console.log(`Ninja's Name: ${this.name}`)
        console.log(`Ninja's Strength: ${this.strength}`)
        console.log(`Ninja's Speed: ${this.speed}`)
        console.log(`Ninja's Health: ${this.health}`)
        return this;
    }
    drinkSake() {
        this.health += 10;
        console.log(`Ninja ${this.name} gained 10+ hp`)
        console.log(this.health)
    }
}

const ninja1 = new Ninja("Hyabusa", 100);
ninja1.sayName().showStats().drinkSake()
