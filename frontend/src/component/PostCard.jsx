import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";


const PostCard = () => {
  return (
    <div className="p-6">
      {/* Post Grid (6 per page) */}
      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="border rounded-lg p-4 shadow-md bg-white w-full max-w-xs">
            <h3 className="text-md font-semibold truncate">Post Title {i + 1}</h3>
            <p className="text-gray-600 text-sm line-clamp-2">
              This is a short preview of the post content...
            </p>
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>By Username</span>
              <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded">Category</span>
            </div>
            <div className="flex items-center gap-3 mt-3 text-sm">
              <button className="flex items-center gap-1 text-green-500">👍 <span>10</span></button>
              <button className="flex items-center gap-1 text-red-500">👎 <span>2</span></button>
            </div>

            {/* Comment Section */}
            <div className="mt-4">
              <h4 className="text-sm font-semibold">Comments</h4>
              <div className="bg-gray-100 p-2 rounded mt-1 text-xs">
                <p><span className="font-bold">User1:</span> Great post!</p>
                <p><span className="font-bold">User2:</span> Thanks for sharing!</p>
              </div>
              <input 
                type="text" 
                placeholder="Add a comment..." 
                className="mt-2 w-full border p-1 rounded text-xs focus:ring focus:ring-blue-300 outline-none"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls (UI-Only) */}
      <div className="flex justify-center items-center mt-6 space-x-2">
        <button className="px-3 py-2 bg-gray-300 text-gray-700 rounded flex items-center">
          <ChevronLeftIcon className="h-5 w-5" />
        </button>
        <span className="text-gray-700 text-sm">Page 1 of 3</span>
        <button className="px-3 py-2 bg-gray-300 text-gray-700 rounded flex items-center">
          <ChevronRightIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default PostCard;
