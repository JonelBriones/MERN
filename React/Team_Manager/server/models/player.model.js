const mongoose = require('mongoose');
const PlayerSchema = new mongoose.Schema({
    playerName: {
        type: String,
        required: [true, "Enter player's name!"],
        minLength: [2, "Must be at least 2 characters long!"]
    },
    position: {
        type: String,
        required: [false]
    },
    playing: {
        type: Boolean,
        required: [false]

    }
    ,
    notPlaying: {
        type: Boolean,
        required: [false]

    }
    ,
    undecided: {
        type: Boolean,
        required: [false]

    }

}, {timestamps: true});
module.exports = mongoose.model('Player', PlayerSchema);