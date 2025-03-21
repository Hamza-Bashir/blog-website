import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PostCard = () => {
  const [posts, setPosts] = useState([]); // Store all posts
  const [filteredPosts, setFilteredPosts] = useState([]); // Store filtered posts
  const [categories, setCategories] = useState([]); // Store categories
  const [selectedCategory, setSelectedCategory] = useState(''); // Store selected category

  // Fetch all posts
  const fetchAllPosts = async () => {
    const response = await axios.get('http://localhost:3000/api/v1/all-post');
    setPosts(response.data.allPost); // Set all posts
  };

  // Fetch all categories for filtering
  const fetchCategories = async () => {   
    const response = await axios.get('http://localhost:3000/api/v1/all-category');
    setCategories(response.data.allCategory); // Set categories
  };

  useEffect(() => {
    fetchAllPosts();
    fetchCategories();
  }, []);

  // Apply the filter based on selected category
  const applyFilter = async () => {
    
    
      const response = await axios.get('http://localhost:3000/api/v1/filter-post', {
        params: { category_id: selectedCategory },
      });
      setFilteredPosts(response.data.filterPost); 
    
  };

  

  

  return (
    <div className="flex  bg-gray-50">
      {/* Filter Sidebar (Left Sidebar) */}
      <aside className="w-1/4 bg-white p-8 rounded-xl shadow-xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Filter Posts</h2>
  
        {/* Category Filter */}
        <div className="mb-6">
          <label htmlFor="category" className="block text-gray-700 font-medium mb-2 text-lg">
            Category
          </label>
          <select
            id="category"
            className="w-full p-4 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)} // Update selected category
          >
            <option value="">All Categories</option>
            {categories.map((data) => (
              <option key={data._id} value={data._id}>
                {data.name}
              </option>
            ))}
          </select>
        </div>
  
        {/* Apply Filter Button */}
        <button
          onClick={applyFilter}
          className="w-full bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Apply Filter
        </button>
      </aside>
  
      {/* Post Cards Section (Right Content Area) */}
      <div className="w-3/4 p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Check if there are filtered posts */}
        {posts.length > 0 ? (
          posts.map((data) => (
            <div key={data._id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-200 ease-in-out">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{data.title}</h3>
              <p className="text-gray-600 mb-4">{data.content}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center">
                  <span className="mr-2">By: {data.user_id.username}</span>
                  <span className="mr-2">|</span>
                  <span>Category: {data.category_id.name}</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">👍 10</span>
                  <span>👎 2</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="w-full text-center text-xl text-gray-500">
            No posts available.
          </div>
        )}
      </div>
    </div>
  );
  
  
};

export default PostCard;
