class Ninja {
    constructor(name,health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log("Name is",this.name)
        return this;
    }
    showStats() {
        console.log(`Name: ${this.name}`)
        console.log(`Strength: ${this.strength}`)
        console.log(`Speed: ${this.speed}`)
        console.log(`Health: ${this.health}`)
        return this;
    }
    drinkSake() {
        this.health += 10;
        console.log(`${this.name} drank sake and gained 10+ hp`)
        console.log(this.health)
    }
}
class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom() {
        this.drinkSake()
        console.log("What one programmer can do in one month, two programmers can do in two months.")
        return this;
    }
}

const ninja1 = new Ninja("Hyabusa", 100);
ninja1.sayName().showStats().drinkSake()
const sensei = new Sensei("Master Oogway")
sensei.speakWisdom().showStats()
