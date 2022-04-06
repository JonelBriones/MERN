const mongoose = require('mongoose');
const PlayerSchema = new mongoose.Schema({
    playerName: {
        type: String,
        required: [true, "Enter player's name!"],
        minLength: [1, "Must be at least 1 characters long!"]
    },
    position: {
        type: String,
        required: [true, "Enter position"],
    }

}, {timestamps: true});
module.exports = mongoose.model('Player', PlayerSchema);