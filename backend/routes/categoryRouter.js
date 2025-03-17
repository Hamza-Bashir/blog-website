const router = require("express").Router()
const {addCategory, getAllCategory, getSingleCategory, updateCategory, deleteCategory} = require("../controller/categoryController")


router.post("/add-category", addCategory)
router.get("/all-category", getAllCategory)
router.get("/single-category/:c_id", getSingleCategory)
router.put("/update-category/:slug", updateCategory)
router.delete("/delete-category/:c_id", deleteCategory)

module.exports = router