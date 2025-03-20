import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import { toast } from "react-toastify";

function Register() {

  const navigate = useNavigate()

  const [userData, setUserData] = useState({
    username:"",
    email:"",
    password:""
  })


  const handleInputChange = (e)=>{
    const {name, value} = e.target

    setUserData((prevData)=>({
      ...prevData,
      [name]:value
    }))
  }


  const handelSubmit = async (e)=>{
    e.preventDefault()
    try {
      const response = await axios.post("http://localhost:3000/api/v1/register", {
        username:userData.username,
        email:userData.email,
        password:userData.password
      })
    setUserData({
      username: "",
      email: "",
      password: "",
    });
    toast.success(response.data.message)
    navigate("/login")
      
    } catch (error) {
      
      if (error.response && error.response.data.error) {
      
        error.response.data.error.forEach((errMessage) =>
          toast.error(errMessage)
        );
      } else {
        
        toast.error("An error occurred. Please try again later.");
      }
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full sm:max-w-sm md:max-w-md lg:max-w-lg p-6 bg-white shadow-lg rounded-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Register</h2>

        <form method="POST" onSubmit={handelSubmit}>
          {/* Username Field */}
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-lg font-medium text-gray-700"
            >
              Username
            </label>
            <input
              value={userData.username}
              onChange={handleInputChange}
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-700"
            >
              Email
            </label>
            <input
              value={userData.email}
              onChange={handleInputChange}
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-lg font-medium text-gray-700"
            >
              Password
            </label>
            <input
            value={userData.password}
            onChange={handleInputChange}
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Register
            </button>
          </div>

          {/* Already Registered? Link */}
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Already registered?{" "}
              <Link
                to="/login"
                className="text-blue-500 hover:text-blue-600 font-semibold"
              >
                Login here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
