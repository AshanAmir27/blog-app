import React from 'react';

function Navbar() {
    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                <div className="text-2xl font-bold text-gray-800">
                    Blog App
                </div>
                <ul className="flex space-x-8 text-gray-600">
                    <li className="hover:text-gray-900 cursor-pointer">Home</li>
                    <li className="hover:text-gray-900 cursor-pointer">About</li>
                    <li className="hover:text-gray-900 cursor-pointer">Blogs</li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
