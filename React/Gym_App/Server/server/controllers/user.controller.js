const User = require('../models/user.model');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


module.exports = {
    register: (req,res)=> {
        const user = new User(req.body);
        user.save()
            .then((newUser)=> {
                console.log(newUser)
                console.log("Successfully Registered")
                res.json({
                    successMessage: "Thank you for registering",
                    user: newUser
                });
            })
            .catch((err)=> {
                console.log("Register not successfull!")
                res.status(400).json(err);
            })
    },
    login: (req,res)=> {
        User.findOne({email: req.body.email})
            .then((userRecord)=> {
                if(userRecord === null){
                    res.status(400).json({message:"Invalid Login Attempt"})
                }
                else {
                    bcrypt.compare(req.body.password,userRecord.password)
                        .then((isPasswordValid)=> {
                            if(isPasswordValid) {
                                console.log("Password is valid")
                                res.cookie(
                                    "usertoken",
                                    jwt.sign(
                                        {
                                            id: userRecord._id, 
                                            email: userRecord.email
                                        },
                                        process.env.JWT_SECRET
                                    ),
                                    {
                                        httpOnly:true,
                                        expires: new Date(Date.now()+ 900000)
                                    },

                                ).json({
                                    message: "Successfully Login",
                                    userLoggedIn: userRecord.email,
                                    userId: userRecord._id
                                });
                            }
                            else {
                                res.status(400).json({
                                    message:"Invalid Login Attempt"
                                })
                            }
                        })
                        .catch((err)=>{
                            console.log(err)
                            res.status(400).json({message:"Invalid Login Attempt"})
                        })
                }
            })
            .catch((err)=> {
                console.log(err)
                res.status(400).json({message:"Invalid Login Attempt"})
            })
    },
    logout: (req,res)=> {
        console.log("logging out");
        res.clearCookie("usertoken");
        res.json({
            message:"You have successfully logged out!"
        })
    },

    // removes id when logged out
    logout2(req,res) {
        res.cooke("usertoken",jwt.sign({_id: ""},process.env.JWY_SECRET),{
            httpOnly:true,
            maxAge: 0
        })
        .json({message: "ok"});
    },
/* ------ CRUD FUNCTIONS ------*/

    // authenticateUser(req,res) {
    //     const decodedJwt = jwt.decode(req.cookies.usertoken,{complete:true})
    //     User.findOne({decodedJwt.payload._id})
    //     .then((findLoggedInUser)=>res.json(findLoggedInUser))
    //     .catch((err)=>res.json(err))
    // },

    // retrieves data by jtwtoken
    getLoggedInUser: (req,res) => {
    User.findOne({_id:req.jwtpayload.id})
        .then((findLoggedInUser)=>res.json(findLoggedInUser))
        .catch((err)=>res.json(err))
    },
    updateUser: (req,res) => {
    User.findOneAndUpdate({_id:req.params.id},req.body)
        .then((updateUser) => {
            res.json(updateUser)
            console.log(updateUser);
        })
        .catch((err)=> {
            res.status(400).json(err)
            console.log("Something went wrong in updating user");
        })
    },
    getAllUsers: (req,res) => {
    User.find({})
        .then((AllUsers) => {
            res.json(AllUsers)
            console.log(AllUsers);
        })
        .catch((err)=> {
            res.status(400).json(err)
            console.log("Something went wrong in finding all users");
        })
    },   
    deleteUser: (req,res) => {
    User.deleteOne({_id:req.params.id})
        .then((deleteUser) => {
            res.json(deleteUser)
            console.log(deleteUser);
        })
        .catch((err)=> {
            res.status(400).json(err)
            console.log("Something went wrong in deleting user");
        })
    }
}