import { useContext } from "react"

import { AuthContext } from "../context/AuthContext"
function HomeContent(){

  const {auth} = useContext(AuthContext)
    return <>
    
    <div className="p-6 space-y-8">
      {/* Hero Section */}
      <div className="bg-blue-500 text-white p-12 rounded-lg shadow-md text-center">
        <h1 className="text-4xl font-bold">Welcome to Our Blog</h1>
        <p className="mt-4 text-lg">Your go-to source for the latest trends in web development, design, and programming.</p>
        <button className="mt-6 px-6 py-2 bg-yellow-500 text-black font-semibold rounded-md hover:bg-yellow-400">
          Start Reading
        </button>
      </div>

      

      {/* Categories Section */}
      <section className="text-center space-y-6">
        <h2 className="text-3xl font-bold">Explore Our Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">React</h3>
            <p className="text-gray-600">Find articles on React components, state management, hooks, and more.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">JavaScript</h3>
            <p className="text-gray-600">Master the language of the web with our JavaScript tutorials and guides.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Web Design</h3>
            <p className="text-gray-600">Learn how to design beautiful, responsive, and user-friendly websites.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">CSS Tips</h3>
            <p className="text-gray-600">Tips and tricks to make your CSS more efficient and powerful.</p>
          </div>
        </div>
      </section>

      {/* About the Blog Section */}
      <section className="bg-gray-100 p-12 rounded-lg shadow-md text-center">
        <h2 className="text-3xl font-bold">About Our Blog</h2>
        <p className="mt-4 text-lg text-gray-700">
          Welcome to our blog! We share articles on web development, design, programming, and all things tech.
          Our goal is to help developers and designers stay up-to-date with the latest trends and best practices.
        </p>
      </section>

      
    </div>
  
    </>
}

export default HomeContent