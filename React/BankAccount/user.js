class BankAccount {
    constructor(intRate,balance) {
        this.intRate = intRate;
        this.balance = balance + 0;
    }
    deposit(amount) {
        this.balance += amount;
        this.deposited = amount;
        // console.log(`Deposited: $${this.deposited}`)
        
        return this;
    }
    withdraw(amount) {
        this.balance -= amount;
        this.withdrawed = amount;
        // console.log(`Withdrawed: $${this.withdrawed}`)

        return this;
    }
    displayAccountInfo(name) {

        console.log(`${name}'s Account Balance: $${this.
        intRate + this.balance}`)
        console.log('----------------------')
        return this;
    }
    yieldInterest() {
        this.intRate *= this.balance;
        console.log(`Interest Rate: $${this.intRate}`)

        return this 
    }
}
class User {
    constructor(username,email) {
        this.name = username
        this.email = email
        this.account = new BankAccount(0.02,0)
    }
    makeDeposit(amount) {
        this.account.deposit(amount);
        this.amount = amount
        console.log(`${this.name} Deposited: $${this.amount}`)
        
        return this;
    }
    makeWithdraw(amount) {
        if(amount>this.account.balance) {
            console.log("Insuffient Funds!: $",this.account.balance - amount)
        } else
        this.account.withdraw(amount);
        this.amount = amount
        console.log(`${this.name} Withdrawed: $${this.amount}`)
        
        return this;

    }
    displayBalance() {
        this.account.displayAccountInfo(this.name);
        return this;

    }
    transferMoney(amount,user) {
        this.displayBalance()
        user.displayBalance()
        if(amount>this.account.balance) {
            console.log("Insuffient Funds!: $",this.account.balance - amount)
            return this
        } 
        else
        this.account.balance -= amount;
        this.amount = amount;

        user.account.balance += amount;
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

// // transfer money from user to another user
console.log('transfer')

monty.transferMoney(1000,guido)
monty.displayBalance()
guido.displayBalance()


