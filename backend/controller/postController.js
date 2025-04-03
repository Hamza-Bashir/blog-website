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
        const allPost = await post.find({}).populate("user_id").populate("category_id")

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


const searchPost = async (req,res)=>{
    try {
        const {query} = req.query

        if(!query){
            return res.status(401).json({
                message:"Search Query is required"
            })
        }

        const searchQuery = {
            $or:[
                {title:{$regex:query}},
                {content:{$regex:query}},
                {tags:{$in:query.split(",")}}
            ]
        }

        const posts = await post.find(searchQuery)
        return res.status(200).json({
            posts
        })
    } catch (error) {
        return res.status(500).json({
            error:error.message
        })
    }
}

const paginationPost = async (req,res)=>{
    const page = parseInt(req.query.page) || 1
    const limit = parseInt(req.query.limit) || 2
    const skip = (page - 1) * limit

    try {
        const posts = await post.find().skip(skip).limit(limit)

        const totalPost = await post.countDocuments()

        res.status(200).json({
            page,
            totalPages : Math.ceil(totalPost / limit),
            totalPost,
            posts
        })
    } catch (error) {
        res.status(500).json({
            error:error.message
        })
    }
}


const filterPost = async (req,res)=>{
    try {
        const filter = {}

        if(req.query.category_id){
            filter.category_id = req.query.category_id
        }

        const filterPost = await post.find(filter).populate("user_id").populate("category_id")

        
        res.status(200).json({
            
            filterPost
        })
    } catch (error) {
        return res.status(500).json({
            error:error.message
        })
    }
}

const deletePost = async (req,res)=>{
    try {
        const {id} = req.params

        const delete_post = await post.findOneAndDelete(id)
        return res.status(200).json({
            message:"Delete post successfully"
        })
    } catch (error) {
        return res.status(500).json({
            error:error.message
        })
    }
}

module.exports = {addPost, getAllPost, getSinglePost, updatePost, searchPost, paginationPost, filterPost, deletePost}