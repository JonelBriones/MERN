const {response} = require('express');
const Author = require('../models/author.model');
// const User = require('../models/user.model');
module.exports = {
    createAuthor: (req, res) => {
        const newAuthorObject = new Author(req.body);

        newAuthorObject.createdBy = req.jwtpayload.id;

        newAuthorObject.save()
        .then((createAuthor) => {
            res.json(createAuthor)
            console.log(createAuthor);
        })
        .catch((err)=> {
            res.status(400).json(err)
            console.log("Something went wrong in creating author");
        })
    },

    getAuthor: (req, res) => {
    Author.findOne({_id:req.params.id})
        .then((findOneAuthor) => {
            res.json(findOneAuthor)
            console.log(findOneAuthor);
        })
        .catch((err)=> {
            res.status(400).json(err)
            console.log("Something went wrong in getting one author");
        })
    },
    updateAuthor: (req, res) => {
    Author.findOneAndUpdate({_id:req.params.id},req.body,
        {new:true, runValidators:true})
        .then((updateAuthor) => {
            res.json(updateAuthor)
            console.log(updateAuthor);
        })
        .catch((err)=> {
            res.status(400).json(err)
            console.log("Something went wrong in updating author");
        })
    },
    getAllAuthors: (req, res) => {
    Author.find({})
        .then((AllAuthors) => {
            res.json(AllAuthors)
            console.log(AllAuthors);
        })
        .catch((err)=> {
            res.status(400).json(err)
            console.log("Something went wrong in getting all authors");
        })
    },
    deleteAuthor: (req, res) => {
    Author.deleteOne({_id:req.params.id})
        .then((deleteAuthor) => {
            res.json(deleteAuthor)
            console.log(deleteAuthor);
        })
        .catch((err)=> {
            res.status(400).json(err)
            console.log("Something went wrong in deleting author");
        })
    }
}
