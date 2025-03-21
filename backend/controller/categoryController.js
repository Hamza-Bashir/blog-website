const category = require("../model/categoryModel")
const post = require("../model/postModel")
const slugify = require("slugify")

const addCategory = async (req,res)=>{
    try {
        const {name} = req.body
        const existingCategory = await category.findOne({name})

        if(existingCategory){
            return res.status(401).json({
                message:"Category alreadt exist"
            })
        }

        const slug = slugify(name, {lower:true, strict:true})
        await category.create({
            name,
            slug
        })

        res.status(200).json({
            message:"Category added successfully",
            success:true,

        })
    } catch (error) {
        res.status(500).json({
            error:error.message
        })
    }
}


const getAllCategory = async (req,res)=>{
    try {
        const allCategory = await category.find({})

        if(!allCategory){
            return res.status(401).json({
                message:"No category found"
            })
        }

        return res.status(200).json({
            message:"All Categorires",
            allCategory
        })
    } catch (error) {
        return res.status(500).json({
            error:error.message
        })
    }
}

const getSingleCategory = async (req,res)=>{


    try {
        const {c_id} = req.params

        const existingCategory = await category.findById(c_id)

        if(!existingCategory){
        return res.status(401).json({
            message:"Category not exist"
        })
        }

        return res.status(200).json({
            message:"Category is: ",
            existingCategory
        })
    } catch (error) {
        return res.status(500).json({
            error:error.message
        })
    }

    
}


const updateCategory = async (req, res) => {
    try {
      const { slug } = req.params; // Get category slug from URL params
      const { name } = req.body; // Get the new category name from the request body
  
      console.log('Received slug:', slug);  // Log slug for debugging
  
      // Find category by its slug
      const existingCategory = await category.findOne({ slug: slug });
  
      if (!existingCategory) {
        return res.status(401).json({
          message: "Category does not exist",
        });
      }
  
      // If the category exists, update its name and slug
      const newSlug = slugify(name, { lower: true, strict: true });
  
      const updatedCategory = await category.findOneAndUpdate(
        { slug: slug }, // Find by the existing slug
        { name: name, slug: newSlug }, // Update the name and slug
        { new: true } // Return the updated category
      );
  
      return res.status(200).json({
        message: "Category updated successfully",
        updated: updatedCategory, // Send back the updated category
      });
    } catch (error) {
      return res.status(500).json({
        error: error.message,
      });
    }
  };
 

const deleteCategory = async (req,res)=>{
    try {
        const {c_id} = req.params

        const existingCategory = await category.findById(c_id)

        if(!existingCategory){
            return res.status(401).json({
                message:"Category not exist"
            })
        }

        await post.deleteMany({category_id:c_id})

        await category.findByIdAndDelete(c_id)

        return res.status(200).json({
            message:"Delete category successfully"
        })
    } catch (error) {
        return res.status(500).json({
            error:error.message
        })
    }
}

module.exports = {addCategory, getAllCategory, getSingleCategory, updateCategory, deleteCategory}