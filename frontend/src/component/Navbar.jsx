import { useState } from "react"; // Import useState for handling mobile menu state
import {Link} from "react-router-dom"

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control the mobile menu visibility

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle the menu visibility
    };

    return (
        <div className="flex justify-between items-center p-4 bg-gray-900 text-white shadow-md">
            {/* Logo Section */}
            <div className="text-xl font-bold">Logo</div>
            
            {/* Mobile Menu Button */}
            <button 
                className="md:hidden text-2xl focus:outline-none" 
                onClick={toggleMenu}
            >
                <i className="fas fa-bars"></i> {/* Hamburger icon (make sure to include Font Awesome or any icon library) */}
            </button>

            {/* Navigation and Search Section */}
            <div className="hidden md:flex items-center gap-6">
                {/* Navigation Links */}
                <ul className="flex gap-6 text-lg">
                    <Link to="/" className="hover:text-blue-400 transition-colors duration-300 cursor-pointer">Home</Link>
                    <li className="hover:text-blue-400 transition-colors duration-300 cursor-pointer">All Post</li>
                    <li className="hover:text-blue-400 transition-colors duration-300 cursor-pointer">My Post</li>
                    <Link to="/register" className="hover:text-blue-400 transition-colors duration-300 cursor-pointer">Register</Link>
                    <li className="hover:text-blue-400 transition-colors duration-300 cursor-pointer">Login</li>
                    <li className="hover:text-blue-400 transition-colors duration-300 cursor-pointer">Logout</li>
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
                    <li className="hover:text-blue-400 transition-colors duration-300 cursor-pointer">Home</li>
                    <li className="hover:text-blue-400 transition-colors duration-300 cursor-pointer">Post</li>
                    <li className="hover:text-blue-400 transition-colors duration-300 cursor-pointer">Register</li>
                    <li className="hover:text-blue-400 transition-colors duration-300 cursor-pointer">Login</li>
                    <li className="hover:text-blue-400 transition-colors duration-300 cursor-pointer">Logout</li>
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
