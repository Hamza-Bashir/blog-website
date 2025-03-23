const FilterPost = () => {
    return (
        <aside className="p-4 border bg-gray-100 rounded-lg shadow-md w-60">
          <h3 className="text-lg font-semibold mb-3">Filter Posts</h3>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input type="radio" name="category" className="w-4 h-4 text-blue-500" disabled />
              <span className="text-gray-700">Technology</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="category" className="w-4 h-4 text-blue-500" disabled />
              <span className="text-gray-700">Lifestyle</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="category" className="w-4 h-4 text-blue-500" disabled />
              <span className="text-gray-700">Business</span>
            </label>
          </div>
        </aside>
      );
  };
  
  export default FilterPost;
  