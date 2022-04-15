const {response} = require('express');
const Author = require('../models/author.model');
const User = require('../models/user.model');
const jwt = require('jsonwebtoken')
module.exports = {
    createAuthor: (req, res) => {
        const newAuthorObject = new Author(req.body);
        // const decodedJwt = jwt.decode(req.cookies.usertoken,{
        //     complete:true
        // })

        // decoded in jwt.config.js
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
    findAllAuthorsByUser: (req,res)=> {
        if(req.jwtpayload.username !== req.params.username) {
            // User who is not logged in
            User.findOne({username: req.params.username})
                .then((userNotLoggedIn)=>{
                    Author.find({createdBy: userNotLoggedIn._id})
                    .populate("createdBy", "username")
                    .then((allAuthorsByUser)=>{
                        console.log(allAuthorsByUser)
                        res.json(allAuthorsByUser)
                    })
                    .catch((err)=>{
                        console.log(err)
                        res.status(400).json(err);
                    });
                })
                .catch((err)=>{
                    console.log(err)
                    res.status(400).json(err);
                });
        }
        else {
            // console.log("current user logged in")
            // console.log("req.jwtpayload.id",req.jwtpayload.id)
            Author.find({createdBy: req.jwtpayload.id})
                .populate("createdBy", "username")
                .then((allAuthorsByUser)=> {
                    console.log(allAuthorsByUser);
                    res.json(allAuthorsByUser)
                })
                .catch((err)=> {
                    console.log(err)
                    res.status(400).json(err)
                })
        }
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
    Author.find()
        .populate("createdBy","username") // shows the created by user info
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
