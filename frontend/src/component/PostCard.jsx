import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const PostCard = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/v1/all-post");
        setPosts(response.data.allPost);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPost();
  }, []);

  // Handle Edit (Future implementation)
  const handleEdit = (id) => {
    console.log("Edit post:", id);
    // Add edit functionality here (e.g., open a modal)
  };

  // Handle Delete
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/api/v1/delete_post/${id}`);
      setPosts(posts.filter((post) => post._id !== id));
      toast.success(response.data.message)
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div className="p-6 flex justify-center">
      <div className="space-y-4 w-full max-w-lg">
        {posts.length > 0 ? (
          posts.map((data) => (
            <div key={data._id} className="border rounded-lg p-4 shadow-md bg-white relative">
              {/* Post Title and Content */}
              <h3 className="text-lg font-semibold truncate">{data.title}</h3>
              <p className="text-gray-600 text-sm line-clamp-2">{data.content}</p>

              {/* Author and Category */}
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>By: {data.user_id.username}</span>
                <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded">
                  {data.category_id.name}
                </span>
              </div>

              {/* Like & Dislike Buttons */}
              <div className="flex items-center gap-4 mt-3 text-sm">
                <button className="flex items-center gap-1 text-green-500">
                  👍 <span>10</span>
                </button>
                <button className="flex items-center gap-1 text-red-500">
                  👎 <span>2</span>
                </button>
              </div>

              {/* Comment Section */}
              <div className="mt-4">
                <h4 className="text-sm font-semibold">Comments</h4>
                <div className="bg-gray-100 p-2 rounded mt-1 text-xs">
                  <p>
                    <span className="font-bold">User1:</span> Great post!
                  </p>
                  <p>
                    <span className="font-bold">User2:</span> Thanks for sharing!
                  </p>
                </div>
                <input
                  type="text"
                  placeholder="Add a comment..."
                  className="mt-2 w-full border p-2 rounded text-xs focus:ring focus:ring-blue-300 outline-none"
                />
              </div>

              {/* Edit & Delete Buttons */}
              <div className="flex justify-end mt-4 space-x-2">
                <button
                  onClick={() => handleEdit(data._id)}
                  className="flex items-center px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
                >
                  <PencilIcon className="h-4 w-4 mr-1" /> Edit
                </button>
                <button
                  onClick={() => handleDelete(data._id)}
                  className="flex items-center px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                >
                  <TrashIcon className="h-4 w-4 mr-1" /> Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No posts available.</p>
        )}
      </div>
    </div>
  );
};

export default PostCard;
