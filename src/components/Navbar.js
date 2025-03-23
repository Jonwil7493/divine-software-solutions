import React, { useState } from 'react';
import logo from '../images/DivineSoftwareSolutionsLogo.png'; // Adjust the path if necessary

function Navbar() {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const toggleMenu = () => {
        setIsMobileOpen(!isMobileOpen);
    }

    return (
        <nav className="flex justify-between items-center p-6 bg-black bg-opacity-60 fixed w-full top-0 left-0 z-10 text-center">
    <img src={logo} alt="Divine Software Solutions Logo" className="w-24 h-auto" />
    
    {/* Adjusted the company name */}
    <h1 className="text-2xl font-bold text-white ml-10">Divine Software Solutions</h1> 

    {/* Desktop Menu */}
    <div className={'hidden md:flex space-x-8'}>
        <ul className="flex space-x-4 text-white">
            <li className="hover:text-yellow-400 cursor-pointer"><a href="#HeroSection">Home</a></li>
            <li className="hover:text-yellow-400 cursor-pointer"><a href="#services">Services</a></li>
            <li className="hover:text-yellow-400 cursor-pointer"><a href="#portfolio">Portfolio</a></li>
            <li className="hover:text-yellow-400 cursor-pointer"><a href="#contact">Contact</a></li>
        </ul>
    </div>

    {/* Hamburger Icon for mobile */}
    <div className="md:hidden flex items-center" onClick={toggleMenu}>
        <div className="space-y-2">
            <div className="w-6 h-1 bg-white"></div>
            <div className="w-6 h-1 bg-white"></div>
            <div className="w-6 h-1 bg-white"></div>
        </div>
    </div>

    {/* Mobile Menu */}
    <div className={`md:hidden absolute top-16 right-0 w-1/2 bg-gray-800 ${isMobileOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col items-center space-y-4 py-4">
            <li><a href="#home" className="text-white hover:text-gray-400">Home</a></li>
            <li><a href="#services" className="text-white hover:text-gray-400">Services</a></li>
            <li><a href="#portfolio" className="text-white hover:text-gray-400">Portfolio</a></li>
            <li><a href="#contact" className="text-white hover:text-gray-400">Contact</a></li>
        </ul>
    </div>
</nav>

    );
}

export default Navbar;
