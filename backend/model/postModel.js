const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    user_id:{
        type:mongoose.Types.ObjectId,
        ref:"user"
    },
    category_id:{
        type:mongoose.Types.ObjectId,
        ref:"category"
    },
    tags:[
        {
            type:String,
            required:true,
        }
    ],
    status:{
        type:String,
        enum:["draft", "published"],
        default:"draft"
    }
})

module.exports = mongoose.model("post", postSchema)