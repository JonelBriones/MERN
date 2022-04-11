const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: [true, "Product's name is required"],
    },
    description: {
        type: String,
        required: [true, "Product's description is required"]
    },
    category: {
        type:String,
        required: [true, "Product's category is required"]
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Admin"
    }
    
}, {timestamps: true});
 

module.exports = mongoose.model('Product', ProductSchema);