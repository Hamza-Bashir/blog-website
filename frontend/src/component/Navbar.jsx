import logo from "../assets/logo.png"
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = ()=>{
        setIsMenuOpen(!isMenuOpen)
    }
    return (
        <nav className="flex justify-between items-center px-7 bg-cyan-300 h-[64px]">
            <div className="cursor-pointer">
                <div>
                    <img src={logo} alt="Logo" className="h-16 w-16" />
                </div>
            </div>

            <div className="md:hidden">
                <button className="cursor-pointer">
                <GiHamburgerMenu /> 
                </button>
            </div>
            <div className={`md:block ${isMenuOpen ? "block" : "hidden"}`}>
                <ul className="flex gap-4 pl-3 font-bold">
                <li className="cursor-pointer hover:underline underline-offset-6 hover:text-blue-700 transition-all duration-300 ease-in-out">Home</li>

                    <li className="cursor-pointer hover:underline underline-offset-6 hover:text-blue-700 transition-all duration-300 ease-in-out">All Blog</li>
                    <li className="cursor-pointer hover:underline underline-offset-6 hover:text-blue-700 transition-all duration-300 ease-in-out">Create Post</li>
                    <li className="cursor-pointer hover:underline underline-offset-6  hover:text-blue-700 transition-all duration-300 ease-in-out">Create Category</li>
                    <li className="cursor-pointer hover:underline underline-offset-6 hover:text-blue-700 transition-all duration-300 ease-in-out">Register</li>
                    <li className="cursor-pointer hover:underline underline-offset-6  hover:text-blue-700 transition-all duration-300 ease-in-out">Login</li>
                    <li className="cursor-pointer hover:underline underline-offset-6  hover:text-blue-700 transition-all duration-300 ease-in-out">Logout</li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
