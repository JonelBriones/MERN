const mongoose = require('mongoose');
 // create a model/schema,this is how we structure our document
const JokeSchema = new mongoose.Schema(
    {
        question: String,
        joke: String
    },
    {
        timestamps: true
    }
);
 
const Joke = mongoose.model('Joke', JokeSchema);
 
module.exports = Joke;
