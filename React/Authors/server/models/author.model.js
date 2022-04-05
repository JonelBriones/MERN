const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Please enter Author's first name!"],
        minLength: [3, "Author's first name must at least be 3 characters long!"]
    },
    lastName: {
        type: String,
        required: [true, "Please enter Author's last name!"],
        minLength: [3, "Author's last name must at least be 3 characters long!"]
    }

}, {timestamps: true});
module.exports = mongoose.model('Author', AuthorSchema);