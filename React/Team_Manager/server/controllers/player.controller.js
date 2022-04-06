const {response} = require('express');
const Player = require('../models/player.model');
module.exports.createPlayer = (req,res) => {
    Player.create(req.body)
        .then((createPlayer)=> {
            res.json(createPlayer)
            console.log(createPlayer);
        })
        .catch((err)=>{
            res.status(400).json(err)
            console.log("Something went wrong in createing player");
        })
}
module.exports.getPlayer = (req,res) => {
    Player.findOne({_id:req.params.id})
        .then((findOnePlayer) => {
            res.json(findOnePlayer)
            console.log(findOnePlayer);
        })
        .catch((err)=> {
            res.status(400).json(err)
            console.log("Something went wrong in finding player");
        })
}
module.exports.updatePlayer = (req,res) => {
    Player.findOneAndUpdate({_id:req.params.id},req.body)
        .then((updatePlayer) => {
            res.json(updatePlayer)
            console.log(updatePlayer);
        })
        .catch((err)=> {
            res.status(400).json(err)
            console.log("Something went wrong in updating player");
        })
}
module.exports.getAllPlayers = (req,res) => {
    Player.find({})
        .then((AllPlayers) => {
            res.json(AllPlayers)
            console.log(AllPlayers);
        })
        .catch((err)=> {
            res.status(400).json(err)
            console.log("Something went wrong in finding all players");
        })
}
module.exports.deletePlayer = (req,res) => {
    Player.deleteOne({_id:req.params.id})
        .then((deletePlayer) => {
            res.json(deletePlayer)
            console.log(deletePlayer);
        })
        .catch((err)=> {
            res.status(400).json(err)
            console.log("Something went wrong in deleting player");
        })
}
