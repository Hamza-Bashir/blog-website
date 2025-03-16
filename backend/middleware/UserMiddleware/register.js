const {userValidation, loginValidation} = require("../userValidation")

const registerMiddleware = (req,res,next)=>{
    const {error} = userValidation.validate(req.body, {abortEarly:false})

    if(error){
        return res.status(400).json({
            error:error.details.map(err=>err.message)
        })
    }

    next()
}

const loginMiddleware = (req,res,next)=>{
    const {error} = loginValidation.validate(req.body, {abortEarly:false})

    if(error){
        return res.status(400).json({
            error:error.details.map(err=>err.message)
        })
    }

    next()
}

module.exports = {registerMiddleware, loginMiddleware}