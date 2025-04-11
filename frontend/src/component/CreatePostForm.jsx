function CreatePostForm() {
    return (
      <div className="bg-cyan-100 min-h-screen flex justify-center items-center py-10 px-4">
        <div className="bg-white w-full max-w-2xl p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-cyan-800 mb-6 text-center">Create a New Post</h2>
  
          <form className="space-y-6">
            {/* Title */}
            <div>
              <label className="block text-cyan-700 font-semibold mb-2">Title</label>
              <input
                type="text"
                placeholder="Enter post title"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
  
            {/* Content */}
            <div>
              <label className="block text-cyan-700 font-semibold mb-2">Content</label>
              <textarea
                placeholder="Write your blog content here..."
                rows="6"
                className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-cyan-500"
              ></textarea>
            </div>
  
            {/* Category Dropdown */}
            <div>
              <label className="block text-cyan-700 font-semibold mb-2">Category</label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <option value="">Select a category</option>
                <option value="tech">Tech</option>
                <option value="travel">Travel</option>
                <option value="food">Food</option>
              </select>
            </div>
  
            {/* Tags */}
            <div>
              <label className="block text-cyan-700 font-semibold mb-2">Tags</label>
              <input
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
  