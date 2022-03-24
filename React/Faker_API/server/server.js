const express = require("express");
const app = express();
    
require("./config/mongoose.config");
    
app.use(express.json(), express.urlencoded({ extended: true }));
    
const AllMyUserRoutes = require("./routes/user.routes");
AllMyUserRoutes(app);
    
app.listen(8000, () => console.log("The server is all fired up on port 8000"));




// const express = require("express");
// const faker = require("faker");
// const app = express();
// const mongoose = require("mongoose");

// const createUser = () => {
//     const id = Math.floor(Math.random() * 10000); 
//     const firstName = faker.name.firstName();
//     const lastName = faker.name.lastName();
//     const phoneNumber = faker.phone.phoneNumber();
//     const userEmail = faker.internet.email();
//     const password = `${firstName + lastName + id}`; 
//     const newUser = {
//         id : id,
//         firstName: firstName,
//         lastName : lastName,
//         phoneNumber : phoneNumber,
//         userEmail : userEmail,
//         password : password,
//     }
//     return newUser;
// }

// const fakeCreateUser = createUser();

// const createCompany = () => {
//     const id = Math.floor(Math.random() * 10000); 
//     const companyName = faker.commerce.productName();
//     const address =
//     {
//         street : faker.address.streetName(),
//         city : faker.address.cityName(),
//         state : faker.address.state(),
//         zipcode : faker.address.zipCode(),
//         country : faker.address.country(),
//     }

//     const newCompany = {
//         id : id,
//         companyName: companyName,
//         address : address,
//     }
//     return newCompany;
// }

// const fakeCreateCompany = createCompany();

// app.get("/api/user/new",(required,response)=>{
//     response.json({
//         fakeCreateUser
//     })
// })

// app.get("/api/company/new", (req,res)=>{
//     res.json({
//         fakeCreateCompany
//     })
// });
// app.get("/api/user/company",(req,res)=>{
//     res.json({
//         fakeCreateCompany,
//         fakeCreateUser
//     })
// })

// app.listen(8000,()=>console.log("You have successfully connect to port 8000"));
