const Comment = require("../model/commentModel")

const addComment = async (req,res)=>{
    try {
        const {p_id} = req.params
        
        const {user_id, comment} = req.body

        if(!user_id){
            return res.status(401).json({
                message:"User id required"
            })
        }

        const comments = await Comment.create({
            comment,
            post_id:p_id,
            user_id
        })
        return res.status(200).json({
            message:"Comment added successfully",
            comments
        })
    } catch (error) {
        return res.status(500).json({
            error:error.message
        })
    }
}

const getAllComment = async (req,res)=>{
    try {

        const {p_id} = req.params
        const allComment = await Comment.find({post_id:p_id})
        return res.status(200).json({
            allComment
        })
    } catch (error) {
        return res.status(500).json({
            error:error.message
        })
    }
}

module.exports = {addComment, getAllComment}