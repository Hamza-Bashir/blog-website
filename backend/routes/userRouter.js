const router = require("express").Router()
const {registerUser, login} = require("../controller/userController")
const {registerMiddleware, loginMiddleware} = require("../middleware/UserMiddleware/register")

router.post("/register", registerMiddleware, registerUser)
router.post("/login",  login)

module.exports = router