import axios from "axios";
import { useEffect, useState } from "react";
import {useUser} from "../store/userStore"
import {toast} from "react-toastify"


function CategoryManager() {

  const {user} = useUser()

  const [category, setCategory] = useState([])
  const [name, setName] = useState("")
    const getAllCategory = async ()=>{
      const response = await axios.get("http://localhost:3000/api/v1/all-category")

      setCategory(response.data.allCategory)
    }

    useEffect(()=>{
      getAllCategory()
    }, [])

    const handleDisable = ()=>{
       toast.warn("Please login then add category")
    }


    const handleAdd = async () => {
      if (!user.token) {
        toast.warn("Please login then add category");
        return;
      }
    
      if (!name.trim()) {
        toast.error("Category name is required");
        return;
      }
    
      try {
        const response = await axios.post(
          "http://localhost:3000/api/v1/add-category",
          { name }
        );
        toast.success(response.data.message);
        setName(""); // Clear input
        getAllCategory();
      } catch (error) {
        toast.error(error.response?.data?.message || "Something went wrong");
      }
    };

    const handleDelete = async (id)=>{
      const response = await axios.delete(`http://localhost:3000/api/v1/delete-category/${id}`)
      toast.success(response.data.message)
      getAllCategory()
    }
    
    return (
      <div className="bg-cyan-100 min-h-screen flex flex-col items-center py-10 px-4">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl">
          <h2 className="text-2xl font-bold text-cyan-800 mb-4 text-center">Manage Categories</h2>
  
          <div className="flex gap-3 mb-6">
            {user.token ? (
              <input

              value={name}
              onChange={(e)=>setName(e.target.value)}
              type="text"
              placeholder="Enter category name"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            ) : (
              <>
              <div onClick={handleDisable} className="flex-1">
    <input
      type="text"
      placeholder="Enter category name"
      className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-500 cursor-not-allowed"
      readOnly
    />
  </div>
              </>
            
            )}
            
            <button className="bg-cyan-600 text-white px-4 py-2 rounded-md hover:bg-cyan-700 transition-all" onClick={handleAdd}>
              Add
            </button>
          </div>
  
          <ul className="space-y-4">
            {category.map((data)=>(
               <li key={data._id} className="flex justify-between items-center bg-cyan-50 px-4 py-2 rounded-md shadow-sm">
               <span className="text-cyan-900 font-medium">{data.name}</span>
               <div className="space-x-2">

                {user.token ? (
                  <>
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded">
                   Edit
                 </button>
                 <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded" onClick={()=>handleDelete(data._id)}>
                   Delete
                 </button></>
                ) : (
                  <>
                  <button disabled className="bg-yellow-400 text-white px-3 py-1 rounded opacity-50 cursor-not-allowed">
                   Edit
                 </button>
                 <button disabled className="bg-red-500 text-white px-3 py-1 rounded opacity-50 cursor-not-allowed">
                   Delete
                 </button>
                  </>
                )}
                 
               </div>
             </li>
            ))}
           
           
           
          </ul>
        </div>
      </div>
    );
  }
  
  export default CategoryManager;
  