// if statement
// let canBuy =(itemPrice, accountBalance) => {
//     if(itemPrice > accountBalance) {
//         return console.log("You are $" + (itemPrice - accountBalance) + " short");
//     } else {
//         return console.log("You can buy!");
//     }
// }
// ternary statement
let canBuy = (itemPrice, accountBalance) => {
    return itemPrice > accountBalance
        ? console.log("You are $" + (itemPrice - accountBalance) + " short")
        : console.log("You can buy!");
        // conditional is true or false?
        // yes, return
        // no, return
    };  
canBuy(200,400);

// Both return same results, however ternary use less lines.