const Reaction = require("../model/reactionModel")

const addReaction = async (req,res)=>{
    try {
        const {p_id} = req.params

        const {user_id, reaction} = req.body

        await Reaction.create({
            reaction,
            post_id:p_id,
            user_id
        })

        return res.status(200).json({
            message:"Reaction added successfully"
        })
    } catch (error) {
        return res.status(500).json({
            error:error.message
        })
    }
}


const getReaction = async (req,res)=>{
    try {
        const {p_id} = req.params

        const reaction = await Reaction.find({post_id:p_id})

        return res.status(200).json({
            reaction
        })
    } catch (error) {
        return res.status(500).json({
            error:error.message
        })
    }
}

module.exports = {addReaction, getReaction}