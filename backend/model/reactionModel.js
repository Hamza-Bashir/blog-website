const mongoose = require("mongoose")

const reactionSchema = new mongoose.Schema({
    reaction:{
        type:String,
        enum:["like", "dislike"],
        required:true
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


module.exports = mongoose.model("reaction", reactionSchema)