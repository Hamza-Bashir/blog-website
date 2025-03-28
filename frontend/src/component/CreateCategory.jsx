import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function CreateCategory() {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [editCategoryId, setEditCategoryId] = useState(null);
  const [editCategorySlug, setEditCategorySlug] = useState(null); // New state for slug

  const handleChange = (e) => {
    setNewCategory(e.target.value);
  };

  const fetchAllCategory = async () => {
    const response = await axios.get("http://localhost:3000/api/v1/all-category");
    setCategories(response.data.allCategory);
  };

  useEffect(() => {
    fetchAllCategory();
  }, []);

  const handleAdd = async () => {
    const response = await axios.post("http://localhost:3000/api/v1/add-category", {
      name: newCategory,
    });
    toast.success(response.data.message);
    setNewCategory("");
    fetchAllCategory();
  };

  const handleDelete = async (c_id) => {
    const response = await axios.delete(`http://localhost:3000/api/v1/delete-category/${c_id}`);
    toast.success(response.data.message);
    fetchAllCategory();
  };

  const handleEdit = (category) => {
    setNewCategory(category.name);
    setEditCategoryId(category._id); // Save category ID if needed
    setEditCategorySlug(category.slug); // Save the slug to use for the URL
  };

  const handleSaveEdit = async () => {
    try {
      const response = await axios.put(
        `http://localhost:3000/api/v1/update-category/${editCategorySlug}`, // Use slug in the URL
        { name: newCategory }
      );
      toast.success(response.data.message);
      fetchAllCategory();
      setEditCategoryId(null);
      setEditCategorySlug(null); // Clear slug
      setNewCategory(""); // Clear input field
    } catch (error) {
      console.error("Error updating category:", error.response ? error.response.data : error.message);
      toast.error("Error updating category");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Manage Categories</h2>
  
        {/* Input field and button */}
        <div className="flex mb-6">
          <input
            value={newCategory}
            onChange={handleChange}
            name="category"
            type="text"
            placeholder="Enter new category"
            className="flex-1 p-4 border border-gray-300 rounded-l-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            className="bg-blue-500 text-white p-4 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={editCategorySlug ? handleSaveEdit : handleAdd} // Check if slug is set for editing
          >
            {editCategorySlug ? "Save Change" : "Add Category"}
          </button>
        </div>
  
        {/* Table displaying categories */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-6 text-left text-gray-700 font-medium">Category Name</th>
                <th className="py-3 px-6 text-left text-gray-700 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
            {categories.length > 0 ? (
      categories.map((data) => (
        <tr key={data._id} className="border-b">
          <td className="py-3 px-6 text-gray-700">{data.name}</td>
          <td className="py-3 px-6 text-gray-700">
            <button
              className="text-blue-500 hover:text-blue-700 mr-3 focus:outline-none"
              onClick={() => handleEdit(data)}
            >
              Edit
            </button>
            <button
              className="text-red-500 hover:text-red-700 focus:outline-none"
              onClick={() => handleDelete(data._id)}
            >
              Delete
            </button>
          </td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan="2" className="text-gray-500 text-center py-4">
          No categories exist.
        </td>
      </tr>
    )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
  
}

export default CreateCategory;
