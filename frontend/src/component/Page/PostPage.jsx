import Navbar from "../Navbar"
import PostCard from "../PostCard"
import FilterPost from "../FilterPost"
import Footer from "../Footer"

function PostPage(){

    return <>
    
    <Navbar/>
    <div className="flex gap-6 p-6">
      <FilterPost />
      <div className="flex flex-col gap-4">
        <PostCard />
      </div>
    </div>
    <Footer/>
    </>
}

export default PostPage