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

// const commentsSchema = new mongoose.Schema(
//     {
//      content: String,
//      userId: {type:}   

//     }
// )

module.exports = mongoose.model('Cake', cakeSchema)