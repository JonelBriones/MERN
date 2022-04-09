
class User {
    constructor(username,email) {
        this.name = username
        this.email = email
        this.accountBalance = 0
    }
    makeDeposit(amount) {
        this.accountBalance += amount;
        this.deposited = amount;
        console.log(`${this.name} Deposited: $${this.deposited}`)
        
        return this;
    }
    makeWithdraw(amount) {
        this.accountBalance -= amount;
        this.withdrawed = amount;
        console.log(`${this.name} Withdrawed: $${this.withdrawed}`)

        return this;

    }
    displayBalance() {
        this.balance = this.accountBalance;
        console.log(`${this.name} Account Balance: $${this.accountBalance}`)
        return this;

    }
    transferMoney(amount,user) {
        this.accountBalance -= amount;
        this.amount = amount;

        user.accountBalance += amount;
        console.log(`${this.name} transfered: $${this.amount} to ${user.name}`)
        return this;

    }
}
// user makes a deposit and withdraw 
const monty = new User("Jonel","ijonel906@gmail.com");
console.log(monty.name) // output: Jonel
monty.makeDeposit(1000).makeDeposit(1000).makeDeposit(1000).displayBalance()
monty.makeWithdraw(1000).displayBalance()

// second user makes a deposit and withdraw 
const guido = new User("Jonathan", "jonathan@gmail.com");
guido.makeDeposit(500).makeDeposit(1000).makeWithdraw(500).makeWithdraw(500).displayBalance()

// transfer money from user to another user
monty.displayBalance()
guido.displayBalance()
monty.transferMoney(200,guido)
monty.displayBalance()
guido.displayBalance()


