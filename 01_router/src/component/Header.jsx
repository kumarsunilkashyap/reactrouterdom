import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white shadow-md top-0 w-full z-50 fixed">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="text-2xl font-bold">MyWebsite</div>
        <button
          className="lg:hidden block text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
        <nav
          className={`fixed top-0 left-0 h-full bg-blue-600 z-50 transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform lg:static lg:transform-none lg:flex lg:items-center lg:space-x-6`}
        >
          <div className="p-4 lg:hidden">
            <button
              className="text-white focus:outline-none"
              onClick={() => setIsMenuOpen(false)}
            ></button>
          </div>
          <NavLink
            to="/"
            className="block py-2 px-4 hover:bg-blue-700 rounded lg:inline"
          >
            Home
          </NavLink>
          <NavLink
            to="about"
            className="block py-2 px-4 hover:bg-blue-700 rounded lg:inline"
          >
            About
          </NavLink>
          <NavLink
            to="service"
            className="block py-2 px-4 hover:bg-blue-700 rounded lg:inline"
          >
            Services
          </NavLink>
          <NavLink
            to="contact"
           
            className="block py-2 px-4 hover:bg-blue-700 rounded lg:inline"
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
