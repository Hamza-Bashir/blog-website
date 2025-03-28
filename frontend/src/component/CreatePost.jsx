import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { useParams, useNavigate } from "react-router-dom";

const CreatePost = () => {

  const navigate = useNavigate()
  const {auth} = useContext(AuthContext)
  


  const [category, setCategory] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("");


  const [postData, setPostData] = useState({
    title:"",
    content:"",
    category_id:"",
    tags:[]
  })
  const fetchCategory = async ()=>{
    const response = await axios.get("http://localhost:3000/api/v1/all-category")
    setCategory(response.data.allCategory)
  }

  useEffect(()=>{
    fetchCategory()
  }, [])

  const handleChange = (e)=>{
    const {name, value} = e.target
    setPostData((prevData)=>({
      ...prevData,
      [name]:name === "tags" ? value.split(","):value
    }))
  }

  const {id} = useParams()
  const handleSubmit = async ()=>{
    
    
    const response = await axios.post(`http://localhost:3000/api/v1/add-post/${id}`, {
      ...postData,
      user_id:id
      
    })
    setPostData({
      title: "",
      content: "",
      category_id: "",
      tags: [""]
    });
    navigate("/all-post")

  }

  
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
  <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
    <h2 className="text-2xl font-bold text-center mb-6">Create New Post</h2>
    
    <input 
    value={postData.title}
    onChange={handleChange}
    name="title"
      type="text" 
      placeholder="Post Title" 
      className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
    />
    
    <textarea 
      name="content"
      value={postData.content}
      onChange={handleChange}
      placeholder="Post Content" 
      className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 mb-4 resize-none"
    ></textarea>
    
    <select
    name="category_id"
    value={postData.category_id}
    onChange={handleChange}
    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
  >
    <option value="" disabled>
      Select Category
    </option>
    {category.map((data) => (
      <option key={data._id} value={data._id}>
        {data.name}
      </option>
    ))}
  </select>
    
    <input 
    name="tags"
    value={postData.tags}
    onChange={handleChange}
      type="text" 
      placeholder="Enter tags (comma-separated)" 
      className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
    />
    
    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md shadow-md transition" onClick={handleSubmit}>
      Post
    </button>
  </div>
</div>

    );
  };
  
  export default CreatePost;
  