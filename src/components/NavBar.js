// components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { FcLikePlaceholder } from "react-icons/fc";

import './styles.css'; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="bg-pink-50 py-6 drop-shadow-lg fixed w-full top-0">
      <div className="max-w-7xl mx-auto px-10 flex justify-between items-center">
        <Link to="/" className="text-pink-950 text-3xl font-semibold flex flex-row">
          <FcLikePlaceholder size={36} className='mx-4'/>
          <div className="monazhao-logo">MONA ZHAO</div>
        </Link>
        <div className="nav-options space-x-5 text-pink-950 font-medium">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            offset={-150}
            className="hover:text-gray-300"
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="experiences"
            smooth={true}
            duration={500}
            className="hover:text-gray-300"
          >
            Experiences
          </ScrollLink>
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            className="hover:text-gray-300"
          >
            Projects
          </ScrollLink>
          <ScrollLink
            to="publications"
            smooth={true}
            duration={500}
            className="hover:text-gray-300"
          >
            Publications
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className="hover:text-gray-300"
          >
            Contact
          </ScrollLink>
          <a href="/Resume.pdf" target="_self" className="hover:text-gray-300">
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
