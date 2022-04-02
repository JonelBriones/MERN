// create a const variable for model file location
const { response } = require('express');
const Product = require('../models/product.model');    /* this is new */
// exporting a key:value for demonstration
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
// CRUD functionalities
module.exports.createProduct = (request, res) => {
Product.create(request.body) //This will use whatever the body of the client's request sends over
    .then(product =>res.json(product))
    .catch(err => {
        console.log("Something went wrong in creating products")
        res.status(400).json(err)
    })
    
}

module.exports.updateProduct = (request, res) => {
Product.findOneAndUpdate({_id: request.params.id}, request.body,
    {new:true, runValidators: true})
//     .then(updatedProduct =>res.json(updatedProduct))
    .then((updateProduct)=> {
        console.log(updateProduct);
        res.json(updateProduct)
    })
    .catch(err => {
        console.log("Something went wrong in updating products")
        res.status(400).json(err)
    })
}

module.exports.getAllProduct = (req,res) => {
Product.find({})
    .then(products => {
        console.log(products);
        res.json(products);
    })
    .catch(err => {res.status(400).json(err)})
}


module.exports.getProduct = (request, response) => {
    Product.findOne({_id:request.params.id})
        .then(product => response.json(product))
        .catch(err => {res.status(400).json(err)})
}
 

module.exports.deleteProduct = (request, response) => {
    Product.deleteOne({ _id: request.params.id }) //note: "id" here MUST match id in corresponding route
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => {res.status(400).json(err)})
}
