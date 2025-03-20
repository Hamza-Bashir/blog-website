import { useState, useContext } from "react"; // Import useState for handling mobile menu state
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import logoPic from "../assets/logo.png"; // Make sure to specify the image file extension
import { toast } from "react-toastify";

function Navbar() {
    const { auth, setAuth } = useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control the mobile menu visibility

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle the menu visibility
    };

    const handleLogout = () => {
        setAuth({
            token: "",
            user: null
        });

        // Clear localStorage for token and user data
        localStorage.removeItem("token"); // Make sure this key matches what you store in localStorage
        localStorage.removeItem("user"); // Same as above

        toast.success("Logout successfully")
    };

    return (
        <div className="flex justify-between items-center p-4 bg-gray-900 text-white shadow-md">
            {/* Logo Section */}
            <div className="text-xl font-bold">
                <img src={logoPic} alt="Logo" className="w-24 h-auto" /> {/* Added alt text for accessibility */}
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden text-2xl focus:outline-none"
                onClick={toggleMenu}
                aria-expanded={isMenuOpen ? "true" : "false"} // Accessibility: indicates whether the menu is open or closed
            >
                <i className="fas fa-bars"></i> {/* Hamburger icon */}
            </button>

            {/* Navigation and Search Section */}
            <div className="hidden md:flex items-center gap-6">
                {/* Navigation Links */}
                <ul className="flex gap-6 text-lg">
                    {auth.token ? (
                        <>
                            <li>
                                <Link to="/" className="hover:text-blue-400 transition-colors duration-300 cursor-pointer">Home</Link>
                            </li>
                            <li className="hover:text-blue-400 transition-colors duration-300 cursor-pointer">All Post</li>
                            <li className="hover:text-blue-400 transition-colors duration-300 cursor-pointer">My Post</li>
                            <li className="hover:text-blue-400 transition-colors duration-300 cursor-pointer" onClick={handleLogout}>Logout</li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link to="/" className="hover:text-blue-400 transition-colors duration-300 cursor-pointer">Home</Link>
                            </li>
                            <li className="hover:text-blue-400 transition-colors duration-300 cursor-pointer">All Post</li>
                            <li>
                                <Link to="/register" className="hover:text-blue-400 transition-colors duration-300 cursor-pointer">Register</Link>
                            </li>
                            <li>
                                <Link to="/login" className="hover:text-blue-400 transition-colors duration-300 cursor-pointer">Login</Link>
                            </li>
                        </>
                    )}
                </ul>

                {/* Search Input */}
                <input
                    type="text"
                    placeholder="Search..."
                    className="px-4 py-2 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>

            {/* Mobile Menu (for small screens) */}
            <div
                className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-16 left-0 right-0 bg-gray-800 p-4 shadow-md rounded-b-lg`}
            >
                <ul className="flex flex-col gap-4 text-lg text-white">
                    {auth.token ? (
                        <>
                            <li>
                                <Link to="/" className="hover:text-blue-400 transition-colors duration-300 cursor-pointer">Home</Link>
                            </li>
                            <li className="hover:text-blue-400 transition-colors duration-300 cursor-pointer">Post</li>
                            <li className="hover:text-blue-400 transition-colors duration-300 cursor-pointer" onClick={handleLogout}>Logout</li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link to="/" className="hover:text-blue-400 transition-colors duration-300 cursor-pointer">Home</Link>
                            </li>
                            <li className="hover:text-blue-400 transition-colors duration-300 cursor-pointer">Post</li>
                            <li>
                                <Link to="/register" className="hover:text-blue-400 transition-colors duration-300 cursor-pointer">Register</Link>
                            </li>
                            <li>
                                <Link to="/login" className="hover:text-blue-400 transition-colors duration-300 cursor-pointer">Login</Link>
                            </li>
                        </>
                    )}
                </ul>

                {/* Mobile Search Input */}
                <input
                    type="text"
                    placeholder="Search..."
                    className="mt-4 px-4 py-2 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>
        </div>
    );
}

export default Navbar;
