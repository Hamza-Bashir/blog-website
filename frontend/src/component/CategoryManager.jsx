function CategoryManager() {
    return (
      <div className="bg-cyan-100 min-h-screen flex flex-col items-center py-10 px-4">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl">
          <h2 className="text-2xl font-bold text-cyan-800 mb-4 text-center">Manage Categories</h2>
  
          <div className="flex gap-3 mb-6">
            <input
              type="text"
              placeholder="Enter category name"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <button className="bg-cyan-600 text-white px-4 py-2 rounded-md hover:bg-cyan-700 transition-all">
              Add
            </button>
          </div>
  
          <ul className="space-y-4">
            <li className="flex justify-between items-center bg-cyan-50 px-4 py-2 rounded-md shadow-sm">
              <span className="text-cyan-900 font-medium">Tech</span>
              <div className="space-x-2">
                <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded">
                  Edit
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
                  Delete
                </button>
              </div>
            </li>
            <li className="flex justify-between items-center bg-cyan-50 px-4 py-2 rounded-md shadow-sm">
              <span className="text-cyan-900 font-medium">Travel</span>
              <div className="space-x-2">
                <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded">
                  Edit
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
                  Delete
                </button>
              </div>
            </li>
            <li className="flex justify-between items-center bg-cyan-50 px-4 py-2 rounded-md shadow-sm">
              <span className="text-cyan-900 font-medium">Food</span>
              <div className="space-x-2">
                <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded">
                  Edit
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
                  Delete
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  
  export default CategoryManager;
  