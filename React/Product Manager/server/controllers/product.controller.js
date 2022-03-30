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
module.exports.createProduct = (request, response) => {
Product.create(request.body) //This will use whatever the body of the client's request sends over
    .then(product => response.json(product))
    .catch(err => response.json(err));
}
module.exports.getAllProduct = (req,res) => {
Product.find({})
    .then(products => {
        console.log(products);
        res.json(products);
    })
    .catch(err => {
        console.log(err)
        res.json(err);
    })
}

module.exports.findOneSingleProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(oneSingleProduct => {
            res.json({ product: oneSingleProduct })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
 
module.exports.updateExistingProduct = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedProduct => {
            res.json({ product: updatedProduct })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
 
module.exports.deleteAnExistingProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
