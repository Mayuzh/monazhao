// components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="bg-pink-50 py-6 drop-shadow-lg fixed w-full top-0 z-10">
      <div className="mx-64 flex justify-between items-center">
        <Link to="/" className="text-pink-950 text-2xl font-semibold">
          Yumeng 'Mona' Zhao
        </Link>
        <div className="space-x-9 text-pink-950 font-medium">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="hover:text-gray-300"
          >
            portfolio.
          </ScrollLink>
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            className="hover:text-gray-300"
          >
            projects.
          </ScrollLink>
          {/* Add similar ScrollLink components for other sections */}
          <a href="/Resume.pdf" target="_blank" className="hover:text-gray-300">
            resume.
          </a>
          <ScrollLink
            to="publications"
            smooth={true}
            duration={500}
            className="hover:text-gray-300"
          >
            publications.
          </ScrollLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
