const express = require("express");
const faker = require("faker");
const app = express();

app.get("/api/faker",(required,response)=>{
    const name = faker.name.firstName();
    const email = faker.internet.email();
    response.json({
        firstName: name,
        userEmail : email,
    })
})
app.get("/api/product",(required,response)=>{
    const name = faker.commerce.productName();
    const price = faker.commerce.price();
    const department = faker.commerce.department();
    response.json({
        productName: name,
        price : price,
        department : department,
    })
})

// we can create a function to return a random / fake "Product"
const createProduct = () => {
    const newFake = {
        name: faker.commerce.productName(),
        price: '' + faker.commerce.price(),
        department: faker.commerce.department()
    };
    return newFake;
};
    
const newFakeProduct = createProduct();
console.log(newFakeProduct);
/*
 * The output of the above console log will look like this
 * {
 *   name: 'Anime Figure',
 *   price: '$568.00
 *   department: 'Tools' 
 * }
 */
app.listen(8000,()=>console.log("You have successfully connect to port 8000"));
