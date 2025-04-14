import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function BlogPostCards() {
  const { id } = useParams();
  const [allPost, setAllPost] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAllPost = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:3000/api/v1/all-post");
      setAllPost(response.data.allPost);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllPost();
  }, []);

  // 🔄 Show spinner while loading
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-cyan-100">
        <div className="w-12 h-12 border-4 border-cyan-500 border-dashed rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="bg-cyan-100 min-h-screen py-10 px-4">
      <h2 className="text-3xl font-bold text-center text-cyan-800 mb-8">
        Latest Blog Posts
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allPost.map((post, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-cyan-800 mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.content}</p>

              <div className="text-sm text-gray-500">
                <span>
                  Author: <strong>{post.user_id.username}</strong>
                </span>{" "}
                |{" "}
                <span className="ml-2">
                  Category: <strong>{post.category_id.slug}</strong>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogPostCards;
