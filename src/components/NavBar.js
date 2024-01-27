// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg px-8 pt-8 pb-4">
      <div className="mx-36 flex justify-between items-center">
        <Link to="/" className="text-gray-950 text-2xl font-bold">Logo</Link>
        <div className="space-x-9">
          <Link to="/" className="text-cyan-900 font-bold hover:text-gray-300">home.</Link>
          <Link to="/projects" className="text-cyan-900 font-bold hover:text-gray-300">projects.</Link>
          <Link to="/resume" className="text-cyan-900 font-bold hover:text-gray-300">resume.</Link>
          <Link to="/publications" className="text-cyan-900 font-bold hover:text-gray-300">publications.</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
