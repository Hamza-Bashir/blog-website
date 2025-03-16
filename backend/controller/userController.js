const user = require("../model/userModel")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const registerUser = async (req,res)=>{
    try {
        const {username, email, password} = req.body
        if(!username){
            return res.status(401).json({message:"Username required"})
        }
        if(!email){
            return res.status(401).json({message:"Email required "})
        }
        if(!password){
            return res.status(401).json({message:"Password required"})
        }

        const existingUser = await user.findOne({email})
        if(existingUser){
            return res.status(401).json({message:"User already exist"})
        }
        const hashPassword = await bcrypt.hash(password, 10)

        await user.create({
            username,
            email,
            password:hashPassword
        })

        res.status(200).json({
            message:"User register successfully",
            success:true,

        })
        

        
    } catch (error) {
        res.status(500).json({
            error:error.message
        })
    }
}

const login = async (req,res)=>{
    try {
        const {email,password} = req.body
        if(!email){
            return res.status(401).json({
                message:"Email required"
            })
        }

        if(!password){
            return res.status(401).json({
                message:"Password required"
            })
        }

        const existingUser = await user.findOne({email})

        if(!existingUser){
            return res.status(401).json({
                message:"User not found"
            })
        }

        const comparePassword = await bcrypt.compare(password, existingUser.password)

        if(!comparePassword){
            return res.status(401).json({
                message:"Password not matched"
            })
        }
        const token = jwt.sign({id:existingUser._id}, process.env.JWT_KEY)
        res.status(200).json({
            message:"Login Successfully",
            token,
            existingUser
        })

    } catch (error) {
        res.status(500).json({
            error:error.message
        })
    }
}

module.exports = {registerUser, login}