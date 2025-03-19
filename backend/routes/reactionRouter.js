const router = require("express").Router()
const {addReaction, getReaction} = require("../controller/reactionController")

router.post("/add-reaction/:p_id", addReaction)
router.get("/get-reaction/:p_id", getReaction)



module.exports = router