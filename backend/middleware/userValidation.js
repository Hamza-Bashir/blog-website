const joi = require("joi")

const userValidation = joi.object({
    username:joi.string().required().min(3).max(25).messages({
        "string.base":"User name should be string",
        "string.min":"User name must be at least 3 character",
        "string.max":"User name less than 20 character",
        "any.required":"User name required"
    }),
    email:joi.string().email().required().messages({
        "string.base":"Email must be string",
        "string.empty":"Email must be valid email",
        "any.required":"Email required"
    }),
    password:joi.string().min(5).max(10).required().messages({
        "string.base":"Password must be string",
        "string.min":"Password must be at least 5 character",
        "string.max":"Password less than 10 character",
        "any.required":"Password required"
    }),
    role:joi.string().valid("user", "admin").default("user").messages({
        "any.only":"Role must be either 'admin' or 'user'"
    })
})

const loginValidation = joi.object({
    email:joi.string().email().required().messages({
        "string.base":"Email must be string",
        "string.empty":"Email must be valid email",
        "any.required":"Email required"
    }),
    password:joi.string().min(5).max(10).required().messages({
        "string.base":"Password must be string",
        "string.min":"Password must be at least 5 character",
        "string.max":"Password less than 10 character",
        "any.required":"Password required"
    })
})

module.exports = {userValidation, loginValidation}