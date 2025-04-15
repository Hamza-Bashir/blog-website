import axios from "axios";
import { useEffect, useState } from "react";
import {useParams, useNavigate} from "react-router-dom"
import {toast} from "react-toastify"

function CreatePostForm() {
  const navigate = useNavigate()
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [category, setCategory] = useState("")
  const [categoryList, setCategoryList] = useState([])
  const [tag, setTag] = useState([])
  const {id} = useParams()

  const getAllCategory = async ()=>{
    const response = await axios.get("https://shrouded-giant-shape.glitch.me/api/v1/all-category")
    setCategoryList(response.data.allCategory)
  }



  useEffect(()=>{
    getAllCategory()
  }, [])

  const handleSubmit = async (e)=>{
    e.preventDefault()
    const response = await axios.post(`https://shrouded-giant-shape.glitch.me/api/v1/add-post/${id}`, {
      title,
      content,
      category_id:category,
      user_id:id,
      tags: tag.split(",")
    })


    toast.success(response.data.message)
    navigate("/all-post")
    
  }

    return (
      <div className="bg-cyan-100 min-h-screen flex justify-center items-center py-10 px-4">
        <div className="bg-white w-full max-w-2xl p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-cyan-800 mb-6 text-center">Create a New Post</h2>
  
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Title */}
            <div>
              <label className="block text-cyan-700 font-semibold mb-2">Title</label>
              <input
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
                type="text"
                placeholder="Enter post title"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
  
            {/* Content */}
            <div>
              <label className="block text-cyan-700 font-semibold mb-2">Content</label>
              <textarea
              value={content}
              onChange={(e)=>setContent(e.target.value)}
                placeholder="Write your blog content here..."
                rows="6"
                className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-cyan-500"
              ></textarea>
            </div>
  
            {/* Category Dropdown */}
            <div>
              <label className="block text-cyan-700 font-semibold mb-2">Category</label>
              <select
  value={category} // this should be a string (category ID)
  onChange={(e) => setCategory(e.target.value)} // move onChange here
  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
>
  <option value="">Select a category</option>
  {categoryList.map((data) => (
    <option value={data._id} key={data._id}>
      {data.name}
    </option>
  ))}
</select>


            </div>
  
            {/* Tags */}
            <div>
              <label className="block text-cyan-700 font-semibold mb-2">Tags</label>
              <input
              value={tag}
              onChange={(e)=>setTag(e.target.value)}
                type="text"
                placeholder="Enter tags separated by commas (e.g. react,nodejs,api)"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <p className="text-sm text-gray-500 mt-1">Tags will be stored as an array</p>
            </div>
  
            {/* Submit Button */}
            <div className="text-center">
              <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg transition-all duration-300">
                Add Post
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  
  export default CreatePostForm;
  