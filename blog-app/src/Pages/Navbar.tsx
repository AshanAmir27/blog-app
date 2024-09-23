import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-b from-slate-900 to-neutral-900 shadow-md sticky top-0">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 lg:px-20">
        <div className="text-2xl font-bold text-slate-200">
          Blog App
        </div>
        {/* Hamburger Menu (visible on mobile screens) */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-slate-200 focus:outline-none">
            {menuOpen ? <IoClose size={30} /> : <GiHamburgerMenu size={30} />}
          </button>
        </div>
        {/* Full Menu (visible on larger screens) */}
        <ul className="hidden lg:flex space-x-8 text-slate-200">
          <li className="hover:text-slate-300 cursor-pointer py-2">Home</li>
          <li className="hover:text-slate-300 cursor-pointer py-2">About</li>
          <li className="hover:text-slate-300 cursor-pointer py-2">Blogs</li>
          <li className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-white hover:text-blue-500 border border-transparent
          ">
            <button>Sign-up</button>
          </li>
        </ul>
      </div>

      {/* Mobile Menu (visible when hamburger icon is clicked) */}
      {menuOpen && (
        <ul className="lg:hidden flex flex-col items-center space-y-4 bg-slate-700 py-4">
          <li className="hover:text-gray-300 cursor-pointer text-slate-200">Home</li>
          <li className="hover:text-gray-300 cursor-pointer text-slate-200">About</li>
          <li className="hover:text-gray-300 cursor-pointer text-slate-200">Blogs</li>
          <li className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-white hover:text-blue-500 border border-transparent
          ">
            <button>Sign-up</button>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
