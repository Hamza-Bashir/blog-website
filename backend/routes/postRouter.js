const router = require("express").Router()
const {addPost, getAllPost, getSinglePost, updatePost} = require("../controller/postController")

router.post("/add-post/:user_id", addPost)
router.get("/all-post", getAllPost)
router.get("/single-post/:p_id", getSinglePost)
router.put("/update-post/:p_id", updatePost)

module.exports = router