const express = require("express");
const app = express();
    
require("./config/mongoose.config");
    
app.use(express.json(), express.urlencoded({ extended: true }));
    
const AllMyUserRoutes = require("./routes/joke.routes");
AllMyUserRoutes(app);
    
//  // ...create a new document to store in the User collection and save it to the DB.
//  const { jokeData } = req.body;
//  Joke.create(jokeData)
//      .then(newJoke => {
//          // logic with succesfully saved newUser object
//      })
//      .catch(err => res.json(err));
//   // If there's an error and the record was not saved, this (err) will contain validation errors.
 
 

app.listen(8000, () => console.log("The server is all fired up on port 8000"));
