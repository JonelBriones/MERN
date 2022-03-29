// create a const variable for location of models
const Person = require('../models/person.model');  
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
          /* All CRUD functions goes here */
module.exports.createPerson = (request, response) => {
    // Mongoose's "create" method is run using our Person model to add a new person to our db's person collection.
    // request.body will contain something like {firstName: "Billy", lastName: "Washington"} from the client
    Person.create(request.body) //This will use whatever the body of the client's request sends over
        .then(person => response.json(person))
        .catch(err => response.json(err));
}

