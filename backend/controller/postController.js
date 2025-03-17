const post = require("../model/postModel")

const addPost = async (req,res)=>{
    try {
        const {title, content, category_id, tags} = req.body
        const {user_id} = req.params

        await post.create({
            title,
            content,
            user_id,
            category_id,
            tags
        })

        return res.status(200).json({
            message:"Post added successfully"
        })
    } catch (error) {
        return res.status(500).json({
            error:error.message
        })
    }
}

const getAllPost = async (req,res)=>{
    try {
        const allPost = await post.find({})

        if(!allPost){
            return res.status(401).json({
                message:"No post found"
            })
        }

        return res.status(200).json({
            message:"Get All Post",
            allPost
        })
    } catch (error) {
        return res.status(500).json({
            error:error.message
        })
    }
}

const getSinglePost = async (req,res)=>{
    try {
        const {p_id} = req.params

        const existingPost = await post.findById(p_id)

        if(!existingPost){
            return res.status(401).json({
                message:"Post not found"
            })
        }

        return res.status(200).json({
            message:"Get Post",
            existingPost
        })
    } catch (error) {
        res.status(500).json({
            error:error.message
        })
    }
}

const updatePost = async (req,res)=>{
    try {
        const {p_id} = req.params
        const {title, content, tags} = req.body

        const existingPost = await post.findById(p_id)

        if(!existingPost){
            return res.status(401).json({
                message:"Post not found"
            })
        }

        await post.findOneAndUpdate({_id:p_id}, {title:title, content:content, tags:tags}, {new:true})

        return res.status(200).json({
            message:"Update successfully"
        })
    } catch (error) {
        return res.status(500).json({
            error:error.message
        })
    }
}

module.exports = {addPost, getAllPost, getSinglePost, updatePost}