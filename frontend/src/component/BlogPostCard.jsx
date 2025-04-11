import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

function BlogPostCards() {
  // Dummy array for 6 posts
  const posts = Array(6).fill({
    title: "How to Learn React.js in 2024",
    content: "React is a JavaScript library for building UI. In this post, we will explore its basic concepts...",
    author: "Hamza Bashir",
    category: "Web Development",
    likes: 23,
    dislikes: 2,
    latestComment: "Very helpful article, thanks for sharing!",
  });

  return (
    <div className="bg-cyan-100 min-h-screen py-10 px-4">
      <h2 className="text-3xl font-bold text-center text-cyan-800 mb-8">Latest Blog Posts</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-cyan-800 mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.content}</p>

              <div className="text-sm text-gray-500 mb-2">
                <span>Author: <strong>{post.author}</strong></span> | 
                <span className="ml-2">Category: <strong>{post.category}</strong></span>
              </div>
            </div>

            <div className="flex items-center justify-between mt-4">
              <div className="flex gap-4 items-center text-cyan-700">
                <div className="flex items-center gap-1">
                  <FaThumbsUp /> <span>{post.likes}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaThumbsDown /> <span>{post.dislikes}</span>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <input
                type="text"
                placeholder="Add a comment..."
                className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <div className="mt-2 text-sm text-gray-700">
                Latest: <span className="italic">"{post.latestComment}"</span>
              </div>
              <div className="flex justify-between text-cyan-600 text-sm mt-2">
                <button className="hover:underline">← Previous</button>
                <button className="hover:underline">Next →</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-10 space-x-4">
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-lg transition-all">Previous</button>
        <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg transition-all">Next</button>
      </div>
    </div>
  );
}

export default BlogPostCards;
