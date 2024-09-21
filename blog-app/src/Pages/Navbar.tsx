import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold text-gray-800">
          Blog App
        </div>
        {/* Hamburger Menu (visible on mobile screens) */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-800 focus:outline-none">
            {menuOpen ? < IoClose size={30} /> : <GiHamburgerMenu size={30} />}
          </button>
        </div>
        {/* Full Menu (visible on larger screens) */}
        <ul className="hidden lg:flex space-x-8 text-gray-600">
          <li className="hover:text-gray-900 cursor-pointer">Home</li>
          <li className="hover:text-gray-900 cursor-pointer">About</li>
          <li className="hover:text-gray-900 cursor-pointer">Blogs</li>
        </ul>
      </div>

      {/* Mobile Menu (visible when hamburger icon is clicked) */}
      {menuOpen && (
        <ul className="lg:hidden flex flex-col items-center space-y-4 bg-gray-50 py-4">
          <li className="hover:text-gray-900 cursor-pointer">Home</li>
          <li className="hover:text-gray-900 cursor-pointer">About</li>
          <li className="hover:text-gray-900 cursor-pointer">Blogs</li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
