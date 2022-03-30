// create a const variable for model file location
const Product = require('../models/product.model');    /* this is new */
// exporting a key:value for demonstration
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
// CRUD functionalities
module.exports.createProduct = (request, response) => {
Product.create(request.body) //This will use whatever the body of the client's request sends over
        .then(product => response.json(product))
        .catch(err => response.json(err));
}
