import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-lg font-bold">Book Review Platform</Link>
        <div>
          <Link to="/books" className="px-4">Books</Link>
          <Link to="/profile" className="px-4">Profile</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
