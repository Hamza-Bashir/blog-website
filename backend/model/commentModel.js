const mongoose = require("mongoose")

const commentSchema = new mongoose.Schema({
    comment:{
        type:String
    },
    user_id:{
        type:mongoose.Types.ObjectId,
        ref:"user"
    },
    post_id:{
        type:mongoose.Types.ObjectId,
        ref:"post"
    }
})

module.exports = mongoose.model("comment", commentSchema)