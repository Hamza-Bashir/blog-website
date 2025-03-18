const router = require("express").Router()
const {addComment, getAllComment} = require("../controller/commentController")

router.post("/add-comment/:p_id", addComment)
router.get("/all-comment/:p_id", getAllComment)

module.exports = router