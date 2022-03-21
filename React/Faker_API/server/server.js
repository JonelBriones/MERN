const express = require("express");
const faker = require("faker");
const app = express();

app.get("/api/user",(required,response)=>{
    const id = Math.floor(Math.random() * 10000); 
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const phoneNumber = faker.phone.phoneNumber();
    const userEmail = faker.internet.email();
    const password = `${firstName + lastName + id}`; 
    response.json({
        id : id,
        firstName: firstName,
        lastName : lastName,
        phoneNumber : phoneNumber,
        userEmail : userEmail,
        password : password,
    })
})

app.get("/api/company", (req,res)=>{
    const id = Math.floor(Math.random() * 10000); 
    const companyName = faker.name.firstName();
    const address = [
        faker.name.firstName(),
        faker.name.firstName(),
        faker.name.firstName(),
        Math.floor(Math.random() * 100000),
        faker.name.firstName()
    ]
    res.json({
        id : id,
        companyName : companyName,
        address : [
            {street : address[0]},
            {city : address[1]},
            {state : address[2]},
            {zipCode : address[3]},
            {country : address[4]},
        ]
    });
    
});
app.listen(8000,()=>console.log("You have successfully connect to port 8000"));
