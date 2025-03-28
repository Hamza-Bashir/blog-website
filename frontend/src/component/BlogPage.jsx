import { useState, useEffect } from "react";
import axios from "axios";
import PostCard from "./PostCard";
import FilterPost from "./FilterPost";


function BlogPage(){
    const [posts, setPosts] = useState([])
    const [filteredPost, setFilteredPost] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("")


    useEffect(()=>{
        const fetchPosts = async ()=>{
            const response = await axios.get("http://localhost:3000/api/v1/all-post")
            setPosts(response.data.allPost)
            setFilteredPost(response.data.allPost)
        }

        fetchPosts()
    }, [])

    const handleFilterChange = (category)=>{
        setSelectedCategory(category)
        if(category){
            setFilteredPost(posts.filter((post)=>post.category_id.slug === category))
        }else{
            setFilteredPost(posts)
        }
    }

    return (
        <div className="flex gap-4 p-6">
          {/* Filter Sidebar */}
          <FilterPost selectedCategory={selectedCategory} onFilterChange={handleFilterChange} />
    
          {/* Post List */}
          <PostCard posts={filteredPosts} />
        </div>
      );
}

export default BlogPage