import { Link } from "react-router-dom"
import logo from "../assets/logo.png"
import {useUser} from "../store/userStore"

function HomeSection(){

  const {user} = useUser()
    return <>
    <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-cyan-100 h-screen">
  <div className="md:w-1/2 space-y-6">
    <h1 className="text-4xl md:text-5xl font-bold text-cyan-800">Welcome to BlogSpace</h1>
    <p className="text-lg text-gray-600">
      A platform where you can create your own blog and explore others' posts on web development, tech, and more.
    </p>
    <div className="space-x-4">
      {user.token ? ( <><Link to={`/create-post/${user.user._id}`} className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg transition-all duration-300">
        Create Your Blog
      </Link>
      <Link to={`/all-post/${user.user._id}`} className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-all duration-300">
      View Blogs
    </Link></>) : (
        <><Link to="/login" className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg transition-all duration-300">
        Create Your Blog
      </Link>
      <Link to="/login" className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-all duration-300">
      View Blogs
    </Link>
      </>
      )}
      
      
    </div>
  </div>
  
  <div className="md:w-1/2 mt-10 md:mt-0">
    <img src={logo} alt="Blog illustration" className="w-full  object-cover rounded-lg " />
  </div>
</section>

    </>
}

export default HomeSection