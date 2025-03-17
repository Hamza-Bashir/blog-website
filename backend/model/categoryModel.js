const mongoose = require("mongoose")

const categoorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    slug:{
        type:String,
        required:true
    }
})


module.exports = mongoose.model("category", categoorySchema)

