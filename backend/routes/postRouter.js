const router = require("express").Router()
const {addPost, getAllPost, getSinglePost, updatePost, searchPost, paginationPost, filterPost, deletePost} = require("../controller/postController")

router.post("/add-post/:user_id", addPost)
router.get("/all-post", getAllPost)
router.get("/single-post/:p_id", getSinglePost)
router.put("/update-post/:p_id", updatePost)
router.get("/search-post", searchPost)
router.get("/pagination-post", paginationPost)
router.get("/filter-post", filterPost)
router.delete("/delete_post/:id", deletePost)

module.exports = router