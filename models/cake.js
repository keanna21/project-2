const mongoose = require("mongoose");


const cakeSchema = new mongoose.Schema({
    flavor: {
        type: String,
        enum: ['Vanilla', 'Chocolate', 'Red Velvet'],
        requred: true,
    },
    occasion: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        enum: ['Sheet Cake', 'Bundt Cake', 'Layered Cake'],
        required: true
    }

})

module.exports = mongoose.model('Cake', cakeSchema)