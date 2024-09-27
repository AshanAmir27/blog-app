import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useNavigate, useLocation } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();


  const handleHome = () => {
    navigate('./');
  }

  const handleBlog = () => {
    navigate('./blogs')
  }

  const handleAbout = () => {
    navigate('./about')
  }

  const handleSignUpClick = () => {
    navigate('./signup');
  }

  const isSignUp = location.pathname === '/signup'

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
          <li onClick={handleHome} className="hover:text-slate-300 cursor-pointer py-2">Home</li>
          <li onClick={handleAbout} className="hover:text-slate-300 cursor-pointer py-2">About</li>
          <li onClick={handleBlog} className="hover:text-slate-300 cursor-pointer py-2">Blogs</li>

          {!isSignUp && (
            <li >
              <button onClick={handleSignUpClick} className="py-2 px-4 bg-slate-800 text-white rounded-md hover:bg-slate-700 hover:text-white hover:text-blue-500 border border-transparent">Sign-up</button>
            </li>
          )}
        </ul>
      </div>

      {/* Mobile Menu (visible when hamburger icon is clicked) */}
      {menuOpen && (
        <ul className="lg:hidden flex flex-col items-center space-y-4 bg-gradient-to-b from-slate-900 to-neutral-900 py-4">
          <li onClick={handleHome} className="hover:text-gray-300 cursor-pointer text-slate-200">Home</li>
          <li onClick={handleAbout} className="hover:text-gray-300 cursor-pointer text-slate-200">About</li>
          <li onClick={handleBlog} className="hover:text-gray-300 cursor-pointer text-slate-200">Blogs</li>

          {!isSignUp && (
            <li className="py-2 px-4 bg-slate-800 text-white rounded-md hover:bg-slate-700 hover:text-white hover:text-blue-500 border border-transparent">
              <button onClick={handleSignUpClick} className='bg-slate-800' >Sign-up</button>
            </li>
          )}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
