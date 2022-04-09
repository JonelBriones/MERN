const { use } = require("express/lib/application");

class User {
    constructor(username,email) {
        this.name = username
        this.email = email
        this.accountBalance= 0
    }
    makeDeposit(amount) {
        this.accountBalance += amount;
        this.deposited = amount;
    }
    makeWithdraw(amount) {
        this.accountBalance -= amount;
        this.withdrawed = amount;
    }
    displayBalance() {
        this.balance = this.accountBalance;
    }
    transferMoney(amount,user) {
        this.accountBalance -= amount;
        this.amount = amount;

        user.accountBalance += amount;
    }
}
const monty = new User("Jonel","ijonel906@gmail.com");
console.log(monty.name) // output: Jonel
monty.makeDeposit(1000)
console.log(`${monty.name} deposited: ${monty.deposited}`)
monty.makeDeposit(1000)
console.log(`${monty.name} deposited: ${monty.deposited}`)
monty.makeDeposit(1000)
console.log(`${monty.name} deposited: ${monty.deposited}`)
monty.makeWithdraw(500)
console.log(`${monty.name} withdrawed: ${monty.withdrawed}`)
monty.displayBalance()
console.log(`${monty.name} account balance: ${monty.balance}`)


const guido = new User("Jonathan", "jonathan@gmail.com");
guido.makeDeposit(500)
console.log(`${guido.name} deposited: ${guido.deposited}`)
guido.makeDeposit(1000)
console.log(`${guido.name} deposited: ${guido.deposited}`)
guido.makeWithdraw(500)
console.log(`${guido.name} withdrawed: ${guido.withdrawed}`)
guido.makeWithdraw(500)
console.log(`${guido.name} withdrawed: ${guido.withdrawed}`)
guido.displayBalance()
console.log(`${guido.name} account balance: ${guido.balance}`)

console.log(`${monty.name} account balance: ${monty.balance}`)
console.log(`${guido.name} account balance: ${guido.balance}`)
monty.transferMoney(200,guido)
console.log(`${monty.name} transfered: $${monty.amount} to ${guido.name}`)
console.log(`${monty.name} account balance: ${monty.accountBalance}`)
console.log(`${guido.name} account balance: ${guido.accountBalance}`)

