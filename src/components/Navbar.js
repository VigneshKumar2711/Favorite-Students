import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">Student App</h1>
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/"
              className="text-white hover:underline"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/favorites"
              className="text-white hover:underline"
            >
              Favorites
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;