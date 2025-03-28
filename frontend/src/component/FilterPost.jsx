import axios from "axios";
import { useEffect, useState } from "react";

const FilterPost = () => {

  const [category, setCategory] = useState([])

  const fetchCategory = async ()=>{
    const response = await axios.get("http://localhost:3000/api/v1/all-category")
    setCategory(response.data.allCategory)
  }


  useEffect(()=>{
    fetchCategory()
  }, [])
  return (
    <aside className="p-4 border bg-gray-100 rounded-lg shadow-md w-60">
      <h3 className="text-lg font-semibold mb-3">Filter Posts</h3>
      <div className="space-y-2">
        {category.length > 0 ? (
          category.map((data)=>(
            <label key={data._id} className="flex items-center space-x-2">
            <input   type="radio" name="category" className="w-4 h-4 text-blue-500"  />
            <span className="text-gray-700">{data.slug}</span>
          </label>
          ))
        ):(
          <p className="text-gray-500">No Categorry exist</p>
        )}
        
          
       
          
           
          
      </div>
    </aside>
  );
};

export default FilterPost;
