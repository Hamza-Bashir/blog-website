import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate(); // To navigate after a successful login

  const handleInputValue = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make sure your API URL is correct
      const response = await axios.post("http://localhost:3000/api/v1/login", {
        email: userData.email,
        password: userData.password,
      });

      // Clear form data after successful login
      setUserData({
        email: "",
        password: "",
      });

      // Display success message
      toast.success(response.data.message, { position: "top-center" });

      const { token, existingUser } = response.data;

      // Check if token and user data are present
      if (token && existingUser) {
        // Set token and user in localStorage
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(existingUser)); // Ensure user is stringified

        // Update context with token and user data
        setAuth({
          token: token,
          user: existingUser,
        });

        // Navigate to the home page after successful login
        navigate("/");
      } else {
        // Handle case where there's no token or user data
        toast.error("Login failed. Please try again.", { position: "top-center" });
      }
    } catch (error) {
      // Handle API errors properly
      if (error.response && error.response.data.error) {
        error.response.data.error.forEach((errMessage) =>
          toast.error(errMessage, { position: "top-center" })
        );
      } else {
        toast.error("An error occurred. Please try again later.", {
          position: "top-center",
        });
      }
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full sm:max-w-sm md:max-w-md lg:max-w-lg p-6 bg-white shadow-lg rounded-md">
          <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

          <form method="POST" onSubmit={handleSubmit}>
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
                onChange={handleInputValue}
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
                onChange={handleInputValue}
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
                Login
              </button>
            </div>

            {/* Already Registered? Link */}
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="text-blue-500 hover:text-blue-600 font-semibold"
                >
                  Register here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
