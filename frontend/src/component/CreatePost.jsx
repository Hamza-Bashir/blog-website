const CreatePost = () => {
    return (
      <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Create New Post</h2>
  
        {/* Title Input */}
        <input
          type="text"
          placeholder="Post Title"
          className="w-full border p-2 rounded mb-3 focus:ring focus:ring-blue-300 outline-none"
        />
  
        {/* Content Input */}
        <textarea
          rows="4"
          placeholder="Post Content"
          className="w-full border p-2 rounded mb-3 focus:ring focus:ring-blue-300 outline-none"
        ></textarea>
  
        {/* Category Select */}
        <select className="w-full border p-2 rounded mb-3 focus:ring focus:ring-blue-300 outline-none">
          <option value="">Select Category</option>
          <option value="technology">Technology</option>
          <option value="lifestyle">Lifestyle</option>
          <option value="business">Business</option>
        </select>
  
        {/* Tags Input */}
        <input
          type="text"
          placeholder="Enter tags (comma-separated)"
          className="w-full border p-2 rounded mb-3 focus:ring focus:ring-blue-300 outline-none"
        />
  
        {/* Post Button */}
        <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Post
        </button>
      </div>
    );
  };
  
  export default CreatePost;
  