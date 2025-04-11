import logo from "../assets/logo.png"
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {Link} from "react-router-dom"

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="relative bg-cyan-300 px-7">
            {/* Top Bar */}
            <div className="flex justify-between items-center h-[78px]">
                <img src={logo} alt="Logo" className="h-16 w-16 cursor-pointer" />

                <button onClick={toggleMenu} className="md:hidden text-2xl cursor-pointer z-30">
                    <GiHamburgerMenu />
                </button>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-4 font-bold">
                    <Link to="/" className="cursor-pointer hover:underline hover:text-blue-700">Home</Link>
                    <Link to="/all-post" className="cursor-pointer hover:underline hover:text-blue-700">All Blog</Link>
                    <Link to="/create-post" className="cursor-pointer hover:underline hover:text-blue-700">Create Post</Link>
                    <Link to="/category" className="cursor-pointer hover:underline hover:text-blue-700">Manage Category</Link>
                    <Link to="/register" className="cursor-pointer hover:underline hover:text-blue-700">Register</Link>
                    <Link to="/login" className="cursor-pointer hover:underline hover:text-blue-700">Login</Link>
                    <Link className="cursor-pointer hover:underline hover:text-blue-700">Logout</Link>
                </ul>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-[64px] left-0 w-full min-h-32 bg-cyan-300 z-10">
                    <ul className="flex flex-col items-center justify-center gap-4 font-bold h-full">
                    <Link to="/" className="cursor-pointer hover:underline hover:text-blue-700">Home</Link>
                    <Link to="/all-post" className="cursor-pointer hover:underline hover:text-blue-700">All Blog</Link>
                    <Link to="/create-post" className="cursor-pointer hover:underline hover:text-blue-700">Create Post</Link>
                    <Link to="/category" className="cursor-pointer hover:underline hover:text-blue-700">Manage Category</Link>
                    <Link to="/register" className="cursor-pointer hover:underline hover:text-blue-700">Register</Link>
                    <Link to="/login" className="cursor-pointer hover:underline hover:text-blue-700">Login</Link>
                    <Link className="cursor-pointer hover:underline hover:text-blue-700">Logout</Link>
                    </ul>
                </div>
            )}
        </nav>


        
    );
}

export default Navbar;




