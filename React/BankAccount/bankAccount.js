class BankAccount {
    constructor(username,balance) {
        this.username = username
        this.intRate = 0.01;
        this.balance = balance + 0;
    }
    deposit(amount) {
        this.balance += amount;
        this.deposited = amount;
        console.log(`${this.username} Deposited: $${this.deposited}`)
        
        return this;
    }
    withdraw(amount) {
        this.balance -= amount;
        this.withdrawed = amount;
        console.log(`${this.username} Withdrawed: $${this.withdrawed}`)

        return this;
    }
    displayAccountInfo() {
        console.log('----------------------')
        console.log(`${this.username} Account Balance: $${this.
        intRate + this.balance}`)
        console.log('----------------------')
        return this;
    }
    yieldInterest() {
        this.intRate *= this.balance;
        console.log(`${this.username} Interest Rate: $${this.intRate}`)

        return this 
    }
}
const Jonel = new BankAccount("Jonel", 200);
const Jonathan = new BankAccount("Jonathan", 1000);

Jonel.displayAccountInfo().deposit(200).deposit(400).deposit(200).withdraw(500).yieldInterest().displayAccountInfo()

Jonathan.displayAccountInfo().deposit(1000).deposit(2000).withdraw(200).withdraw(200).withdraw(200).withdraw(200).yieldInterest().displayAccountInfo()
