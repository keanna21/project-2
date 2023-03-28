const mongoose = require("mongoose");


const cakeSchema = new mongoose.Schema({
    flavor: {
        type: String,
        requred: true,
    },
    occasion: {
        type: String,
        required: true,
    },
    style: {
        type: String,
        required: true
    }
    


})

module.exports = mongoose.model('Cake', cakeSchema)